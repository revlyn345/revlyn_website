
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { fetchBlogPost } from "../../lib/blog.functions";
import { absoluteUrl, breadcrumbSchema, howToSchema, OG_IMAGE, SITE_URL } from "../../lib/seo";
import { NewsletterSignup } from "@/components/NewsletterSignup";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await fetchBlogPost({ data: params.slug });
    if (!post) throw notFound();
    return { post };
  },
  // Let Vercel's CDN reuse the page for a minute, then refresh it in the background.
  headers: () => ({ "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=600" }),
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found | Revlyn" }, { name: "robots", content: "noindex" }] };
    const url = absoluteUrl(`/blog/${post.slug}`);
    const image = post.featuredImage ?? OG_IMAGE;
    return {
      meta: [
        { title: `${post.title} | Revlyn` },
        { name: "description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.modified },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url,
            mainEntityOfPage: url,
            image,
            datePublished: post.date,
            dateModified: post.modified,
            inLanguage: "en",
            keywords: [...post.categories, ...post.tags].join(", ") || undefined,
            author: { "@type": "Person", name: post.author.name, url: `${SITE_URL}/about` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        },
        { "script:ld+json": breadcrumbSchema([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]) },
        // "How to ..." posts also get step-by-step (HowTo) data, built from the post's section headings.
        ...(/^how to\b/i.test(post.title)
          ? [
              {
                "script:ld+json": howToSchema({
                  name: post.title,
                  description: post.excerpt,
                  path: `/blog/${post.slug}`,
                  image,
                  steps: post.headings
                    .filter((h) => !/faq|frequently asked|conclusion|final thoughts/i.test(h.text))
                    .map((h) => {
                      const name = h.text.replace(/^\d+[.)]\s*/, "");
                      return { name, text: name, anchor: h.id };
                    }),
                }),
              },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: WordPressArticle,
});

function ArticleNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="font-display text-5xl font-bold">Article not found.</h1>
      <p className="mt-5 text-lg text-ink/65">It may have moved or been unpublished.</p>
      <Link to="/blog" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 font-bold text-cream">
        See all articles <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </main>
  );
}

function WordPressArticle() {
  const { post } = Route.useLoaderData();

  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-mint/40 px-5 py-16 sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-ink/65 transition-colors hover:text-brand">
              <ArrowLeft size={18} aria-hidden="true" /> Back to blogs
            </Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
              {post.categories.slice(0, 2).map((c) => (
                <span key={c} className="rounded-full bg-background/70 px-4 py-2">{c}</span>
              ))}
              <span className="rounded-full bg-background/45 px-4 py-2">{post.readingTime} min read</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">{post.title}</h1>
            {post.excerpt && <p className="mt-7 max-w-3xl text-xl leading-relaxed text-ink/70">{post.excerpt}</p>}
            <p className="mt-8 text-sm font-bold text-ink/55">
              By {post.author.name}, Revlyn · <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </div>
        </header>

        {post.featuredImage && (
          <div className="mx-auto -mt-2 max-w-5xl px-5 pt-12 sm:px-6">
            <img
              src={post.featuredImage}
              alt=""
              width={1200}
              height={630}
              className="h-auto w-full rounded-[2rem] border-2 border-ink/10 object-cover"
            />
          </div>
        )}

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_16rem]">
          <div className="wp-content min-w-0" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {post.headings.length > 1 && (
            <aside className="order-first lg:order-none">
              <nav aria-label="On this page" className="rounded-[2rem] border-2 border-ink/10 bg-background p-6 lg:sticky lg:top-28">
                <p className="font-bold">On this page</p>
                <ol className="mt-4 space-y-3 text-sm">
                  {post.headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-ink/65 transition-colors hover:text-brand">{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
        </div>
        <aside aria-label="About Revlyn" className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-6 sm:flex-row sm:items-center sm:p-8">
            <img src="/icon-192.png" alt="" width={56} height={56} className="size-14 shrink-0 rounded-2xl" />
            <p className="leading-relaxed text-ink/70">
              <strong className="text-ink">About Revlyn.</strong> Revlyn is a HubSpot Gold Solutions Partner and RevOps consultancy. We help growing revenue teams design, implement, and improve CRM systems their people actually use.{" "}
              <Link to="/services" className="font-bold text-grape underline underline-offset-4 hover:no-underline">See how Revlyn works</Link>
            </p>
          </div>
        </aside>
        <NewsletterSignup source="Blog post" />
        
      </article>
    </main>
  );
}
