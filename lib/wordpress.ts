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

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
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

  const before = html.slice(0, sectionStart);
  const after = html.slice(sectionEnd);
  let section = html.slice(sectionStart, sectionEnd);

  // Each question (<h3>) plus everything up to the next <h3> (its
  // answer — usually one <p>, sometimes more) becomes one accordion item.
  // A plain "faq-plus" class is used here (not a Tailwind utility) since
  // this file isn't scanned by Tailwind's class detector — the actual
  // open/closed icon styling lives in the arbitrary-selector CSS on the
  // article page instead, keyed off this class name and the native
  // [open] attribute.
  section = section.replace(
    /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gi,
    (_full, question: string, answerHtml: string) =>
      `<details><summary>${question}<span class="faq-plus">+</span></summary>${answerHtml}</details>`,
  );

  return before + section + after;
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

  return {
    name: raw?.name?.trim() || "The Revlyn team",
    avatar: largest ? avatarUrls[largest] : null,
    // Most WordPress installs never fill in the author "biographical
    // info" field, so this is commonly null — callers should fall back
    // to a generic line rather than rendering an empty bio block.
    bio: raw?.description?.trim() || null,
  };
}

function toCategories(termGroups?: RawWPTerm[][]): string[] {
  if (!termGroups) return [];
  return termGroups
    .flat()
    .filter((t) => t.taxonomy === "category" && t.name.toLowerCase() !== "uncategorized")
    .map((t) => t.name);
}

function toTags(termGroups?: RawWPTerm[][]): string[] {
  if (!termGroups) return [];
  return termGroups.flat().filter((t) => t.taxonomy === "post_tag").map((t) => t.name);
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
