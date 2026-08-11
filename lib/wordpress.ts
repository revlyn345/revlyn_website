// Headless WordPress data layer.
//
// WordPress (hosted on Hostinger, e.g. at https://cms.revlyn.io) is used
// purely as a content backend here — nobody visits it directly. These
// helpers call its built-in REST API (no plugin required) and normalize the
// response into simple shapes the Next.js blog pages can render with the
// site's own design system.
//
// Set WORDPRESS_API_URL in your environment (.env.local for dev, and in
// Vercel's Project Settings → Environment Variables for production) to the
// base URL of your WordPress install, e.g.:
//   WORDPRESS_API_URL=https://cms.revlyn.io

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL ?? "https://cms.revlyn.io";

// How long a fetched page is cached before Next.js re-requests it from
// WordPress (in seconds). 60 = republishing/edits show up within a minute
// without needing a redeploy. Raise this if you want fewer WP requests.
const REVALIDATE_SECONDS = 60;

// Average adult silent-reading speed, used to estimate "N min read" from
// word count. This is a real computed value from the actual post content,
// not a placeholder — no fabricated numbers.
const WORDS_PER_MINUTE = 200;

export type WPHeading = {
  id: string;
  text: string;
};

export type WPAuthor = {
  name: string;
  avatar: string | null;
  bio: string | null;
};

// ─────────────────────────────────────────────────────────────────────
// AUTHOR DISPLAY OVERRIDES
//
// The WordPress user account that publishes posts often has its display
// name left as the raw login email (e.g. "rishhsoni@gmail.com") since
// nobody bothered filling in a "nice" display name for what's really a
// shared/internal publishing account — and there's no bio or a real
// photo (Gravatar just shows the default mystery-man silhouette for an
// address with no Gravatar profile).
//
// Rather than editing that inside WordPress, this map lets the team
// decide what actually shows up on the site: key it by whatever
// WordPress currently sends as the author's raw display `name` (check
// the byline on a live post, or hit
// {WORDPRESS_API_URL}/wp-json/wp/v2/users to see it directly), and give
// it the name / bio / avatar image the team wants shown instead.
//
// To add or change a team member's byline, just add/edit an entry here —
// no WordPress changes needed, and it applies to every past and future
// post published under that WP account.
const AUTHOR_OVERRIDES: Record<string, { name: string; bio?: string; avatar?: string }> = {
  "rishhsoni@gmail.com": {
    name: "Rishabh",
    bio: "CEO & Founder at Revlyn. Part of the team that builds and operates HubSpot portals day to day.",
    // avatar: "/team/rishabh.jpg", // uncomment + point at a real photo to replace the Gravatar placeholder
  },
};

function applyAuthorOverride(author: WPAuthor): WPAuthor {
  const override = AUTHOR_OVERRIDES[author.name.trim().toLowerCase()];
  if (!override) return author;
  return {
    name: override.name,
    bio: override.bio ?? author.bio,
    avatar: override.avatar ?? author.avatar,
  };
}

export type WPPostSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string | null;
  readingTime: number;
  categories: string[];
};

export type WPPost = WPPostSummary & {
  /** Content HTML with an `id` injected on every <h2> so the table of
   *  contents (built from `headings`) can link + scroll to each one. */
  contentHtml: string;
  headings: WPHeading[];
  author: WPAuthor;
  tags: string[];
};

type RawWPTerm = { id: number; name: string; taxonomy: string };

type RawWPAuthor = {
  name?: string;
  avatar_urls?: Record<string, string>;
  description?: string;
};

type RawWPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    author?: RawWPAuthor[];
    "wp:term"?: RawWPTerm[][];
  };
};

// A handful of named entities cover the overwhelming majority of what
// WordPress actually emits (curly quotes, dashes, ampersands, nbsp) —
// this isn't a full HTML5 entity table, but there's no DOM available
// server-side to lean on for a complete one, and anything exotic enough
// to fall outside this list is vanishingly rare in blog copy.
const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
};

/** Decodes numeric (&#8217; / &#x2019;) and named (&amp;) HTML entities.
 *  Only needed for strings that get rendered as plain React text (title,
 *  excerpt, heading labels, category/tag names) — WordPress sends these
 *  HTML-encoded even though they're plain text, and React (correctly)
 *  won't re-interpret escape sequences the way a browser parsing real
 *  HTML would. Content rendered via dangerouslySetInnerHTML doesn't need
 *  this, since the browser decodes entities itself when parsing HTML. */
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&([a-z]+);/gi, (full: string, name: string) => NAMED_ENTITIES[name.toLowerCase()] ?? full);
}

function stripTags(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, "")).trim();
}

/** "1. Importing Dirty Data" -> "importing-dirty-data" (id-safe slug). */
function slugifyHeading(text: string, usedSlugs: Set<string>): string {
  const base =
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";

  let slug = base;
  let i = 2;
  while (usedSlugs.has(slug)) {
    slug = `${base}-${i}`;
    i += 1;
  }
  usedSlugs.add(slug);
  return slug;
}

/**
 * The content pipeline's writing prompt asks for "an FAQ section (3-5
 * Q&As)" but doesn't specify markup, so the AI writes it as plain
 * Markdown: an H2/H3 "FAQ" heading, then one H3 per question with its
 * answer in the paragraph(s) right after — never native <details> markup.
 * This finds that section by heading text and converts each Q&A pair into
 * a real <details>/<summary> accordion (collapsed by default, click to
 * expand), which is what the approved design actually calls for.
 *
 * Deliberately scoped to just the FAQ section (not every H3 in the post):
 * earlier sections also use question-style H3s ("What is lead scoring?")
 * as regular sub-headings while the reader is scrolling through prose —
 * those should stay as plain, always-visible text, not collapse into an
 * accordion.
 */
const FAQ_HEADING_TEXT_RE = /^(frequently asked( questions)?|faq)$/i;

// The one fixed, on-brand label the FAQ heading always renders as, no
// matter what text the CMS post actually used ("FAQ", "Frequently Asked
// Questions", etc.) — matching is still done against the original text via
// FAQ_HEADING_TEXT_RE above, but display is normalized here.
const FAQ_DISPLAY_HEADING = "Frequently asked";

function restructureFaqSection(html: string): string {
  const headingRe = /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi;
  const found: { start: number; end: number; level: "2" | "3"; text: string }[] = [];

  let m: RegExpExecArray | null;
  while ((m = headingRe.exec(html)) !== null) {
    const text = stripTags(m[3]).replace(LEADING_NUMBER_RE, "").trim();
    found.push({ start: m.index, end: m.index + m[0].length, level: m[1] as "2" | "3", text });
  }

  const faqHeadingIndex = found.findIndex(
    (h) => h.level === "2" && FAQ_HEADING_TEXT_RE.test(h.text),
  );
  if (faqHeadingIndex === -1) return html; // no FAQ section in this post

  const faqHeading = found[faqHeadingIndex];
  const nextH2 = found.find((h, i) => i > faqHeadingIndex && h.level === "2");
  const sectionStart = faqHeading.end;
  const sectionEnd = nextH2 ? nextH2.start : html.length;

  const before = html.slice(0, faqHeading.start);
  const after = html.slice(sectionEnd);
  let section = html.slice(sectionStart, sectionEnd);

  // Normalized heading, styled distinctly from regular H2s by the
  // "rv-faq-heading" class (no numbered marker, plain full-width rule
  // instead of the short underline every other H2 gets).
  const headingHtml = `<h2 class="rv-faq-heading">${FAQ_DISPLAY_HEADING}</h2>`;

  // Each question plus everything up to the next question (its answer —
  // usually one <p>, sometimes more) becomes one accordion item, collapsed
  // by default via native <details>. A plain "faq-plus" class is used here
  // (not a Tailwind utility) since this file isn't scanned by Tailwind's
  // class detector — the open/closed icon styling lives in the
  // arbitrary-selector CSS on the article page instead, keyed off this
  // class name and the native [open] attribute.
  //
  // The content pipeline's prompt asks for "an FAQ section" but doesn't
  // pin down markup, so questions show up different ways in practice:
  //   1. A real <h3> per question (writing prompt followed literally).
  //   2. One <p> per Q&A: a bold question, then a <br>, then the answer —
  //      all inside the SAME paragraph. Confirmed against the live site's
  //      actual rendered output — this is the pattern the CMS is really
  //      producing, not two separate <p> tags.
  //   3. Two separate paragraphs: <p><strong>Question?</strong></p> then
  //      an answer <p> — kept as a last-resort fallback in case some
  //      future post uses this shape instead.
  // Whichever pattern a given post's FAQ section actually uses is
  // detected and converted the same way.
  const toAccordion = (question: string, answerHtml: string) =>
    `<details><summary>${question}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${answerHtml}</p></details>`;

  if (/<h3[^>]*>/i.test(section)) {
    section = section.replace(
      /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gi,
      (_full, question: string, answerHtml: string) => toAccordion(question, answerHtml),
    );
  } else if (/<p[^>]*>\s*<strong[^>]*>[\s\S]*?<\/strong>\s*<br/i.test(section)) {
    section = section.replace(
      /<p[^>]*>\s*<strong[^>]*>([\s\S]*?)<\/strong>\s*<br\s*\/?>\s*([\s\S]*?)<\/p>/gi,
      (_full, question: string, answerHtml: string) => toAccordion(question, answerHtml),
    );
  } else {
    section = section.replace(
      /<p[^>]*>\s*<strong[^>]*>([\s\S]*?)<\/strong>\s*<\/p>([\s\S]*?)(?=<p[^>]*>\s*<strong[^>]*>[\s\S]*?<\/strong>\s*<\/p>|$)/gi,
      (_full, question: string, answerHtml: string) => toAccordion(question, answerHtml),
    );
  }

  return before + headingHtml + section + after;
}

/**
 * Pulls every <h2> out of the post body to build the "On this page" table
 * of contents, and stamps a matching `id` onto each one in the returned
 * HTML so the TOC links (and scroll-progress tracking) actually have
 * something to jump to. WordPress's default editor doesn't add heading
 * ids on its own, so this is done here rather than asking writers to add
 * them by hand in every post.
 *
 * Also wraps a heading's own leading number ("1. Migrating data...") in
 * an orange span, if it has one — listicle-style posts are written with
 * the number already in the heading text. This does NOT add a number to
 * headings that don't have one (e.g. question-style headings like "What
 * is lead scoring?"), since fabricating one there would misrepresent
 * order/count that was never actually authored.
 */
const LEADING_NUMBER_RE = /^(\s*\d+\.\s*)/;

function extractHeadingsAndTagContent(html: string): {
  html: string;
  headings: WPHeading[];
} {
  const headings: WPHeading[] = [];
  const usedSlugs = new Set<string>();

  const tagged = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs: string, inner: string) => {
      const text = stripTags(inner);
      if (!text) return match;

      const id = slugifyHeading(text, usedSlugs);
      headings.push({ id, text });

      // Respect an id the author may have already set manually; otherwise
      // inject ours. Either way the id ends up in `attrs` exactly once.
      const hasId = /\sid=/.test(attrs);
      const newAttrs = hasId ? attrs : ` id="${id}"${attrs}`;

      // Colorize a leading "N. " if the heading already has one — never
      // add one that wasn't there.
      const numberMatch = inner.match(LEADING_NUMBER_RE);
      const innerWithColor = numberMatch
        ? `<span class="rv-h2-number">${numberMatch[1]}</span>${inner.slice(numberMatch[1].length)}`
        : inner;

      return `<h2${newAttrs}>${innerWithColor}</h2>`;
    },
  );

  return { html: tagged, headings };
}

function estimateReadingTime(html: string): number {
  const words = stripTags(html)
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toAuthor(raw?: RawWPAuthor): WPAuthor {
  const avatarUrls = raw?.avatar_urls ?? {};
  // WP keys avatar_urls by pixel size ("24", "48", "96") — take the
  // largest available rather than assuming one specific key exists.
  const sizes = Object.keys(avatarUrls);
  const largest = sizes.sort((a, b) => Number(b) - Number(a))[0];

  const author: WPAuthor = {
    name: decodeHtmlEntities(raw?.name?.trim() || "The Revlyn team"),
    avatar: largest ? avatarUrls[largest] : null,
    // Most WordPress installs never fill in the author "biographical
    // info" field, so this is commonly null — callers should fall back
    // to a generic line rather than rendering an empty bio block.
    bio: raw?.description?.trim() ? decodeHtmlEntities(raw.description.trim()) : null,
  };

  return applyAuthorOverride(author);
}

function toCategories(termGroups?: RawWPTerm[][]): string[] {
  if (!termGroups) return [];
  return termGroups
    .flat()
    .filter((t) => t.taxonomy === "category" && t.name.toLowerCase() !== "uncategorized")
    .map((t) => decodeHtmlEntities(t.name));
}

function toTags(termGroups?: RawWPTerm[][]): string[] {
  if (!termGroups) return [];
  return termGroups
    .flat()
    .filter((t) => t.taxonomy === "post_tag")
    .map((t) => decodeHtmlEntities(t.name));
}

function toSummary(raw: RawWPPost): WPPostSummary {
  return {
    id: raw.id,
    slug: raw.slug,
    title: stripTags(raw.title.rendered),
    excerpt: stripTags(raw.excerpt.rendered),
    date: raw.date,
    featuredImage: raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    readingTime: estimateReadingTime(raw.content.rendered),
    categories: toCategories(raw._embedded?.["wp:term"]),
  };
}

// `_embed` (with no argument) pulls in every embeddable relation WordPress
// knows about for a post — featured media, author, and taxonomy terms
// (categories/tags) — in one request rather than three separate ones.
const EMBED_PARAM = "_embed=1";

/**
 * Fetch published posts for the blog index, newest first.
 * Returns an empty array (rather than throwing) if WordPress is
 * unreachable, so a backend hiccup never takes down the whole site.
 */
export async function getPosts(page = 1, perPage = 10): Promise<WPPostSummary[]> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${EMBED_PARAM}&per_page=${perPage}&page=${page}&status=publish`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );

    if (!res.ok) {
      console.error("[wordpress] failed to fetch posts", res.status);
      return [];
    }

    const raw: RawWPPost[] = await res.json();
    return raw.map(toSummary);
  } catch (err) {
    console.error("[wordpress] error fetching posts", err);
    return [];
  }
}

/**
 * Fetch a single published post by slug, with full rendered HTML content,
 * a generated table-of-contents (from its H2s), author, and tags.
 * Returns null if not found or WordPress is unreachable.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${EMBED_PARAM}&slug=${encodeURIComponent(slug)}&status=publish`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );

    if (!res.ok) {
      console.error("[wordpress] failed to fetch post", slug, res.status);
      return null;
    }

    const raw: RawWPPost[] = await res.json();
    const post = raw[0];
    if (!post) return null;

    const withFaqAccordion = restructureFaqSection(post.content.rendered);
    const { html, headings } = extractHeadingsAndTagContent(withFaqAccordion);

    return {
      ...toSummary(post),
      contentHtml: html,
      headings,
      author: toAuthor(post._embedded?.author?.[0]),
      tags: toTags(post._embedded?.["wp:term"]),
    };
  } catch (err) {
    console.error("[wordpress] error fetching post", slug, err);
    return null;
  }
}

/** All published slugs — used by generateStaticParams for build-time SSG. */
export async function getAllSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=100&status=publish&_fields=slug`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!res.ok) return [];
    const raw: { slug: string }[] = await res.json();
    return raw.map((p) => p.slug);
  } catch (err) {
    console.error("[wordpress] error fetching slugs", err);
    return [];
  }
}