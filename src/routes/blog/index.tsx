import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { breadcrumbSchema } from "../../lib/seo";
import { fetchBlogPosts } from "../../lib/blog.functions";
import { ArrowUpRight, BookOpen, Database, Users } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  // Posts published in WordPress (cms.revlyn.io). If WordPress is down this is
  // an empty list, and the page still shows the two hand-written articles.
  // Keep loaded data for 5 minutes so going back and forth is instant.
  staleTime: 5 * 60_000,
  loader: async () => ({ posts: await fetchBlogPosts() }),
  headers: () => ({ "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=600" }),
  head: () => ({
    meta: [
      { title: "CRM and Revenue Engineering Blog | Revlyn" },
      { name: "description", content: "Practical thinking from Revlyn on CRM, HubSpot, revenue operations, data, automation, and adoption." },
      { property: "og:title", content: "CRM and Revenue Engineering Blog | Revlyn" },
      { property: "og:description", content: "Practical thinking on building CRM systems that growing revenue teams can use." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "CRM and Revenue Engineering Blog", path: "/blog" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/blog" }],
  }),
  component: BlogPage,
});

const cardTones = ["bg-background", "bg-mint/25", "bg-sun/25", "bg-grape/10", "bg-brand/10"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

type Card = { key: string; slug: string; title: string; excerpt: string; category?: string | undefined; readingTime: number; date?: string | undefined; featuredImage?: string | null | undefined };

// Hand-written articles that live in this codebase (not in WordPress).
const handWritten: Card[] = [
  { key: "why-crm-adoption-fails", slug: "why-crm-adoption-fails", title: "Why CRM adoption fails after launch.", excerpt: "The warning signs, underlying causes, and operating habits that help a CRM become part of daily work.", category: "CRM adoption", readingTime: 6 },
  { key: "how-to-clean-crm-data-before-migration", slug: "how-to-clean-crm-data-before-migration", title: "How to clean CRM data before migration.", excerpt: "A four-stage process for deciding what to move, creating consistent rules, and testing before launch.", category: "CRM data", readingTime: 7 },
];

function BlogPage() {
  const { posts } = Route.useLoaderData();
  // WordPress returns posts newest first.
  const wp: Card[] = posts.map((p) => ({ key: String(p.id), slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.categories[0], readingTime: p.readingTime, date: p.date, featuredImage: p.featuredImage }));
  const featured = wp.slice(0, 2);
  const rest = featured.length > 0 ? [...wp.slice(2), ...handWritten] : [];
  return (
    <main>
      <section className="relative mx-auto grid min-h-[50vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/30 px-5 py-20 sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
        <div className="relative mx-auto w-full max-w-6xl">
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">Useful thinking for better revenue systems.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">Practical notes from the Revlyn team on CRM, HubSpot, revenue operations, data, automation, and adoption. Written from the work we do as a HubSpot Gold Solutions Partner for growing revenue teams.</p>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><h2 className="font-display text-4xl font-bold sm:text-5xl">Latest articles.</h2><p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/65">Clear explanations and practical next steps for common CRM challenges.</p></div>
          <p className="font-bold text-ink/45">{posts.length + 2} articles</p>
        </div>

        {/* The two newest WordPress posts. If WordPress is unreachable, the two
            hand-written articles are shown here instead. */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {(featured.length > 0 ? featured : handWritten).map((item, i) => {
            const dark = i === 0;
            return (
              <article key={item.key} className={`group relative flex min-h-[29rem] flex-col overflow-hidden rounded-[2.5rem] p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2 sm:p-10 ${dark ? "bg-ink text-cream" : "bg-sun text-ink"}`}>
                <div className="flex items-center justify-between gap-4">
                  {item.category ? <span className={`rounded-full px-4 py-2 text-sm font-bold ${dark ? "bg-mint text-ink" : "bg-background/70"}`}>{item.category}</span> : <span />}
                  <span className={`text-sm font-bold ${dark ? "text-cream/45" : "text-ink/45"}`}>{item.readingTime} min read{item.date ? ` · ${formatDate(item.date)}` : ""}</span>
                </div>
                <div className="mt-auto pt-20">
                  {dark ? <Users size={34} className="text-mint" aria-hidden="true" /> : <Database size={34} className="text-grape" aria-hidden="true" />}
                  <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                    <Link to="/blog/$slug" params={{ slug: item.slug }} className="after:absolute after:inset-0 focus:outline-none">{item.title}</Link>
                  </h2>
                  <p className={`mt-4 line-clamp-3 max-w-xl leading-relaxed ${dark ? "text-cream/65" : "text-ink/65"}`}>{item.excerpt}</p>
                  <span className={`mt-8 inline-flex items-center gap-2 font-bold ${dark ? "text-sun" : "text-grape"}`}>Read article <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-24">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">More from the blog.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <article key={post.key} className={`group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-ink/10 ${cardTones[i % cardTones.length]} transition-transform duration-300 hover:-translate-y-1`}>
                {post.featuredImage && (
                  <img src={post.featuredImage} alt="" loading="lazy" width={600} height={315} className="aspect-[1.9/1] w-full object-cover" />
                )}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-ink/55">
                    {post.category && <span className="rounded-full bg-ink/5 px-3 py-1.5 text-ink">{post.category}</span>}
                    <span>{post.readingTime} min read</span>
                    {post.date && <><span aria-hidden="true">·</span><time dateTime={post.date}>{formatDate(post.date)}</time></>}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-snug">
                    <Link to="/blog/$slug" params={{ slug: post.slug }} className="after:absolute after:inset-0 focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 leading-relaxed text-ink/65">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-grape">Read article <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="reveal border-y-2 border-ink/10 bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-3xl"><h2 className="font-display text-4xl font-bold sm:text-5xl">Explore the fundamentals.</h2><p className="mt-4 text-lg leading-relaxed text-ink/65">For a deeper overview, start with the full guide to turning CRM software into a working business system.</p></div>
          <div className="mt-10 grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-cream p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <span className="grid size-16 place-items-center rounded-2xl bg-mint"><BookOpen size={27} aria-hidden="true" /></span>
            <div><h3 className="font-display text-3xl font-bold sm:text-4xl">What is CRM implementation?</h3><p className="mt-3 max-w-2xl leading-relaxed text-ink/65">A visual walkthrough of process design, data, rollout, adoption, and the decisions that hold an implementation together.</p></div>
            <Link to="/crm-implementation" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 font-bold text-cream shadow-tactile transition-all hover:translate-y-1 hover:shadow-tactile-sm">Read the guide <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-cream p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="lg:col-span-2"><h2 className="font-display text-3xl font-bold sm:text-4xl">Have a CRM question worth unpacking?</h2><p className="mt-3 max-w-2xl leading-relaxed text-ink/65">Tell us what your team is trying to understand. It may shape a future practical article.</p></div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Contact Revlyn <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <NewsletterSignup source="Blog" />
    </main>
  );
}