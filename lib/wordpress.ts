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

export type WPPostSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string | null;
};

export type WPPost = WPPostSummary & {
  contentHtml: string;
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
  };
};

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function toSummary(raw: RawWPPost): WPPostSummary {
  return {
    id: raw.id,
    slug: raw.slug,
    title: stripTags(raw.title.rendered),
    excerpt: stripTags(raw.excerpt.rendered),
    date: raw.date,
    featuredImage: raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
  };
}

/**
 * Fetch published posts for the blog index, newest first.
 * Returns an empty array (rather than throwing) if WordPress is
 * unreachable, so a backend hiccup never takes down the whole site.
 */
export async function getPosts(page = 1, perPage = 10): Promise<WPPostSummary[]> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=${perPage}&page=${page}&status=publish`,
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
 * Fetch a single published post by slug, with full rendered HTML content.
 * Returns null if not found or WordPress is unreachable.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed=wp:featuredmedia&slug=${encodeURIComponent(slug)}&status=publish`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );

    if (!res.ok) {
      console.error("[wordpress] failed to fetch post", slug, res.status);
      return null;
    }

    const raw: RawWPPost[] = await res.json();
    const post = raw[0];
    if (!post) return null;

    return {
      ...toSummary(post),
      contentHtml: post.content.rendered,
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
