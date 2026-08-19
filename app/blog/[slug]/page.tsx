import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getPosts } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";
import { ReadingProgressBar, TableOfContents, MobileToc } from "@/components/blog/ArticleScrollUI";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ShareLinks({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    { label: "in", name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: "X", name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { label: "↗", name: "Copy link", href: url },
  ];
  return (
    <div>
      <div className="mono text-[10px] text-ink/50 mb-3">Share</div>
      <div className="flex gap-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target={l.name === "Copy link" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={l.name}
            className="w-[38px] h-[38px] rounded-full border border-ink/15 grid place-items-center text-[13px] font-medium hover:border-ink transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function PortalAuditCard() {
  return (
    <div className="border-2 border-ink bg-ink text-[#F2F0EC] p-5">
      <div className="mono text-[10px] text-fire mb-3">Portal audit</div>
      <p className="text-[16px] leading-[1.55] mb-4">
        30 minutes, no deck. We open your HubSpot and name the three things worth fixing first.
      </p>
      <BookCallButton className="inline-flex items-center gap-2 bg-fire text-paper rounded-full px-4 py-2.5 text-sm font-medium hover:bg-volt hover:text-ink transition-colors">
        Book a call →
      </BookCallButton>
    </div>
  );
}

function FiledUnder({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div>
      <div className="mono text-[10px] text-ink/50 mb-3">Filed under</div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="border border-ink/15 rounded-full px-3 py-1.5 text-[13px] text-ink/70">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostBySlug(slug), getPosts(1, 6)]);

  if (!post) notFound();

  const canonicalUrl = `https://revlyn.io/blog/${post.slug}`;
  const keepReading = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <ReadingProgressBar />

      {/* ══════════════════════ MASTHEAD ══════════════════════ */}
      <section className="border-b border-ink">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-14 md:pt-16">
          <div className="flex items-center gap-2.5 mono text-[11px] text-ink/50 mb-2">
            <Link href="/" className="hover:text-fire">Revlyn</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-fire">Field notes</Link>
            {post.categories[0] && (
              <>
                <span>/</span>
                <span className="text-fire">{post.categories[0]}</span>
              </>
            )}
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-16 items-end pt-7 pb-10">
            <div>
              <h1 className="display leading-[1.0] tracking-[-0.035em] text-[clamp(2.4rem,5.6vw,4.75rem)] max-w-[16ch] text-balance">
                {post.title}
              </h1>
              <p className="mt-6 max-w-[56ch] text-xl leading-[1.5] text-ink/70 text-pretty">
                {post.excerpt}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-7 pb-1">
                <div className="flex items-center gap-3">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-bone grid place-items-center mono text-[13px] text-ink/50">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div className="leading-tight">
                    <div className="font-bold text-[15px]">{post.author.name}</div>
                    {post.author.bio && (
                      <div className="text-[13px] text-ink/50 max-w-[28ch] truncate">
                        {post.author.bio}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-px h-[34px] bg-ink/10" />
                <div className="flex gap-6 mono text-[11px] text-ink/60">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* "The short version" — reuses the post excerpt as its TL;DR,
                since WordPress doesn't have a separate summary field for
                this. If a dedicated short-summary field gets added later,
                swap this to read from that instead. */}
            <div className="border border-ink bg-bone p-5 lg:mb-1">
              <div className="mono text-[10px] text-ink/50 mb-3.5">The short version</div>
              <p className="text-[16px] leading-[1.6]">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BODY REGION ══════════════════════ */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-start lg:gap-14">
        {/* Desktop TOC rail */}
        <aside className="hidden lg:block lg:w-[220px] lg:shrink-0 sticky top-24 self-start pt-14 pb-10">
          <TableOfContents headings={post.headings} />
        </aside>

        {/* Article */}
        <article className="lg:flex-1 lg:min-w-0 pt-10 lg:pt-14 pb-16 max-w-[720px] w-full mx-auto lg:mx-0">
          <MobileToc headings={post.headings} />

          {post.featuredImage && (
            <>
              <div className="relative w-full aspect-[16/9] border border-ink/10 mb-3.5 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mono text-[10px] text-ink/50 mb-12">Fig. 01 — {post.title}</div>
            </>
          )}

          {/*
            WordPress returns fully rendered HTML for the post body, converted
            from Markdown by the content pipeline. These utility classes give
            it the article template's typographic voice without needing a
            WYSIWYG plugin.

            Headings: listicle-style posts are written with the number
            already in the heading text ("1. Migrating data..."), so
            lib/wordpress.ts wraps that existing leading number in a
            <span class="rv-h2-number"> rather than this CSS adding a second
            one via a counter — question-style headings ("What is lead
            scoring?") are left alone and never get a fabricated number.

            FAQ: the content pipeline writes FAQ questions as plain H3s
            with the answer in the following paragraph(s) (not <details>).
            lib/wordpress.ts's restructureFaqSection() finds the FAQ
            section specifically (by its "FAQ"/"Frequently asked" heading)
            and converts just those H3+paragraph pairs into real
            <details>/<summary> accordion items — collapsed by default,
            click to expand — without touching question-style H3s used as
            regular sub-headings earlier in the post.
          */}
          <div
            className="
              text-[20px] leading-[1.75] text-[#1A1814]
              [&>p]:mb-7
              [&>h2]:font-display [&>h2]:font-extrabold [&>h2]:text-[clamp(1.625rem,2.6vw,2.125rem)]
              [&>h2]:leading-[1.18] [&>h2]:tracking-[-0.025em] [&>h2]:mt-14 [&>h2]:mb-2
              [&>h2]:scroll-mt-28
              [&_.rv-h2-number]:text-fire
              [&>h2]:after:content-[''] [&>h2]:after:block [&>h2]:after:w-14 [&>h2]:after:h-0.5
              [&>h2]:after:bg-ink [&>h2]:after:mt-2 [&>h2]:after:mb-6
              [&>h2.rv-faq-heading]:after:hidden
              [&>h2.rv-faq-heading]:pb-5 [&>h2.rv-faq-heading]:mb-0
              [&>h2.rv-faq-heading]:border-b [&>h2.rv-faq-heading]:border-ink/10
              [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl [&>h3]:tracking-[-0.01em]
              [&>h3]:mt-9 [&>h3]:mb-0 [&>h3]:pt-6 [&>h3]:border-t [&>h3]:border-ink/10
              [&>h3+p]:mt-3.5 [&>h3+p]:text-[18px] [&>h3+p]:text-[#3D3A34]
              [&>ul]:mb-7 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:mb-2.5
              [&>ol]:mb-7 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol>li]:mb-2.5
              [&>blockquote]:my-11 [&>blockquote]:pl-7 [&>blockquote]:border-l-[3px] [&>blockquote]:border-fire
              [&>blockquote_p]:font-display [&>blockquote_p]:font-semibold [&>blockquote_p]:text-[26px]
              [&>blockquote_p]:leading-[1.35] [&>blockquote_p]:tracking-[-0.02em] [&>blockquote_p]:text-ink [&>blockquote_p]:mb-0
              [&_a]:text-fire [&_a]:underline [&_a:hover]:no-underline
              [&>figure]:my-9
              [&_img]:w-full [&_img]:h-auto [&_img]:block [&_img]:border [&_img]:border-ink/10
              [&>p:has(>img:only-child)]:my-9 [&>p:has(>img:only-child)]:leading-none
              [&_figcaption]:mono [&_figcaption]:text-[10px] [&_figcaption]:text-ink/50 [&_figcaption]:mt-3 [&_figcaption]:leading-normal
              [&>table]:w-full [&>table]:border-collapse [&>table]:border [&>table]:border-ink/10 [&>table]:my-9
              [&>table_th]:bg-ink [&>table_th]:text-paper [&>table_th]:font-mono [&>table_th]:text-[10px]
              [&>table_th]:uppercase [&>table_th]:tracking-[0.14em] [&>table_th]:text-left [&>table_th]:p-3.5
              [&>table_td]:text-[17px] [&>table_td]:p-3.5 [&>table_td]:border-t [&>table_td]:border-ink/10
              [&>table_tr:nth-child(even)_td]:bg-[#FAF9F7]
              [&>details]:border-b [&>details]:border-ink/10 [&>details]:py-6
              [&>details_summary]:cursor-pointer [&>details_summary]:font-display [&>details_summary]:font-semibold
              [&>details_summary]:text-[20px] [&>details_summary]:tracking-[-0.01em] [&>details_summary]:list-none
              [&>details_summary]:flex [&>details_summary]:items-center [&>details_summary]:justify-between [&>details_summary]:gap-4
              [&>details_summary::-webkit-details-marker]:hidden
              [&_.faq-plus]:shrink-0 [&_.faq-plus]:text-ink/35 [&_.faq-plus]:font-normal [&_.faq-plus]:text-2xl [&_.faq-plus]:leading-none [&_.faq-plus]:transition-transform [&_.faq-plus]:duration-200
              [&_details[open]_.faq-plus]:rotate-45 [&_details[open]_summary]:text-ink
              [&>details_p]:mt-3.5 [&>details_p]:text-[17px] [&>details_p]:leading-[1.7] [&>details_p]:text-[#3D3A34] [&>details_p]:mb-3.5 [&>details_p:last-child]:mb-0
            "
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Author card */}
          <div className="mt-14 py-7 border-t border-b border-ink flex gap-5 items-start">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-bone grid place-items-center mono text-[15px] text-ink/50 shrink-0">
                {post.author.name.charAt(0)}
              </div>
            )}
            <div>
              <div className="mono text-[10px] text-ink/50 mb-1.5">Written by</div>
              <div className="font-display font-bold text-[19px]">{post.author.name}</div>
              <p className="mt-1.5 text-[16px] leading-[1.6] text-ink/60 max-w-[52ch]">
                {post.author.bio ??
                  "Part of the Revlyn team that builds and operates HubSpot portals day to day."}
              </p>
            </div>
          </div>

          {/* Mobile-only: rail content moves here, per the design spec's
              responsive rule for ≤1180px ("move ... the CTA card to the
              end of the article"). */}
          <div className="lg:hidden mt-10 flex flex-col gap-8">
            <ShareLinks url={canonicalUrl} title={post.title} />
            <PortalAuditCard />
            <FiledUnder tags={post.tags} />
          </div>
        </article>

        {/* Desktop rail */}
        <aside className="hidden lg:flex lg:w-[240px] lg:shrink-0 flex-col gap-7 sticky top-24 self-start pt-14 pb-10">
          <ShareLinks url={canonicalUrl} title={post.title} />
          <PortalAuditCard />
          <FiledUnder tags={post.tags} />
        </aside>
      </div>

      {/* ══════════════════════ CTA BAND ══════════════════════ */}
      <section className="border-t border-ink bg-bone">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-14 md:py-[72px] grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:items-center">
          <div>
            <h2 className="display font-extrabold leading-[1.08] tracking-[-0.03em] text-[clamp(1.875rem,3.4vw,2.875rem)]">
              Recognize this in your own portal?
            </h2>
            <p className="mt-3.5 max-w-[44ch] text-lg leading-[1.6] text-ink/70">
              30 minutes, no deck. We open your HubSpot and tell you the three things worth
              fixing first.
            </p>
          </div>
          <BookCallButton className="inline-flex items-center gap-3 bg-ink text-paper rounded-full px-6.5 py-4.5 text-lg font-medium whitespace-nowrap hover:bg-fire transition-colors self-start md:self-auto">
            Book a call
            <span className="w-7 h-7 rounded-full bg-fire grid place-items-center text-sm">→</span>
          </BookCallButton>
        </div>
      </section>

      {/* ══════════════════════ KEEP READING ══════════════════════ */}
      {keepReading.length > 0 && (
        <section className="border-t border-ink/10">
          <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16 md:py-[88px]">
            <div className="flex justify-between items-baseline mb-7">
              <h3 className="display font-extrabold text-[28px] tracking-[-0.02em]">
                Keep reading
              </h3>
              <Link href="/blog" className="mono text-[11px] text-ink/50 hover:text-fire">
                All field notes →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
              {keepReading.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="bg-paper p-7 hover:bg-[#FAF9F7] transition-colors"
                >
                  <div className="mono text-[10px] text-ink/50 mb-4">
                    {formatDate(p.date)} · {p.readingTime} min
                  </div>
                  <div className="font-display font-bold text-[22px] leading-[1.2] tracking-[-0.02em] mb-2.5">
                    {p.title}
                  </div>
                  <p className="text-[16px] leading-[1.6] text-ink/60">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

function Footer() {
  const services = [
    ["HubSpot as a Service", "/hubspot-as-a-service", "Ongoing operator"],
    ["HubSpot Implementation", "/hubspot-implementation", "6-week build"],
    ["HubSpot Optimization", "/hubspot-optimization", "Portal reset"],
    ["RevOps", "/#services", "Pipeline, forecast, comp"],
    ["GTM Engineering", "/#services", "Outbound, ABM, lifecycle"],
    ["AI Workflows", "/#services", "Agents on the CRM"],
  ] as const;

  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      {/* Giant wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span
          className="display leading-none tracking-tighter text-transparent select-none translate-y-[18%]"
          style={{
            fontSize: "clamp(9rem, 28vw, 28rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.09)",
          }}
        >
          revlyn
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-14">
        {/* Editorial lead */}
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-7 min-w-0">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-fire" />
              End of the page. Start of the conversation.
            </div>
            <h3 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.035em]">
              Revenue systems,
              <br />
              <span className="text-paper/65">operated by </span>
              <span className="text-fire">seniors</span>
              <span className="text-fire">.</span>
            </h3>
            <p className="mt-6 max-w-xl text-paper/70 leading-relaxed text-lg">
              A small team of revenue operators for Founders and Heads of Sales, Marketing, Revenue and GTM. We build the portal, tune the pipeline, wire the AI, and stay on the account.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-fire text-paper pl-5 pr-1.5 py-1.5 text-sm font-medium hover:bg-paper hover:text-ink transition-colors">
                Book a diagnostic call
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </BookCallButton>
              <a
                href="mailto:info@revlyn.io"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                info@revlyn.io
              </a>
              <a
                href="tel:+917503044000"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                +91 75030 44000
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10 min-w-0">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span>Field notes</span>
              <span className="h-px flex-1 bg-paper/10" />
              <span className="text-paper/60">Monthly · 2 min</span>
            </div>
            <h4 className="display text-3xl md:text-4xl leading-[0.95] tracking-[-0.02em]">
              The <span className="text-fire">operator&rsquo;s notebook</span>.
            </h4>
            <p className="mt-3 text-paper/65 text-sm">
              Short essays on revenue systems, HubSpot, RevOps and AI. Written by the same operators who run the portals.
            </p>
            <div className="mt-5">
              <div className="flex items-stretch rounded-full border border-paper/20 bg-paper/5 pl-5 pr-1 py-1 focus-within:border-fire transition-colors">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
                />
                <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink pl-4 pr-2 py-1.5 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                  Subscribe
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </button>
              </div>
              <p className="mt-3 text-[11px] text-paper/60">
                One email a month. Unsubscribe with one click.
              </p>
            </div>

            {/* Studio card */}
            <div className="mt-8 rounded-2xl border border-paper/12 bg-paper/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Studio</div>
                  <div className="text-paper leading-snug">
                    Gurugram, Haryana
                    <br />
                    <span className="text-paper/60">India · IST (UTC+5:30)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Hours</div>
                  <div className="text-paper">Mon, Fri</div>
                  <div className="text-paper/60 text-sm">09:30 to 19:30 IST</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-paper/10 flex items-center justify-between text-[12px]">
                <span className="text-paper/55">Async everywhere. Slack shared channel on request.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 py-14 border-b border-paper/10">
          {/* 6-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact"],
                ["Pricing", "/hubspot-as-a-service#pricing"],
                ["Request a proposal", "/contact"],
              ],
            },
            {
              h: "HubSpot",
              l: [
                ["HubSpot as a Service", "/hubspot-as-a-service"],
                ["Implementation", "/hubspot-implementation"],
                ["Optimization", "/hubspot-optimization"],
                ["Migration", "/hubspot-implementation"],
                ["Audit", "/hubspot-audit"],
              ],
            },
            {
              h: "Work",
              l: [
                ["Ausforming", "/work/ausforming"],
                ["Datapel", "/work/datapel"],
                ["Detrack", "/work/detrack"],
                ["Integrity Fire", "/work/integrity-fire"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["CRM Architecture", "/#svc-crm"],
                ["RevOps", "/#svc-revops"],
                ["GTM Design", "/#svc-gtm"],
                ["AI Infrastructure", "/#svc-ai"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Professional services", "/use-cases"],
                ["Marketplaces", "/use-cases"],
                ["Fintech", "/use-cases"],
              ],
            },
            {
              h: "Partners",
              l: [
                ["Overview", "/partners"],
                ["HubSpot", "/partners/hubspot"],
                ["Bitscale", "/partners/bitscale"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Case ledger", "/#proof"],
                ["Method", "/#method"],
                ["Field notes", "/blog"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-paper text-[15px] font-medium mb-5">{col.h}</div>
              <ul className="space-y-3">
                {col.l.map(([label, href]) =>
                  label === "Book a call" ? (
                    <li key={label}>
                      <BookCallButton className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors">
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </BookCallButton>
                    </li>
                  ) : (
                    <li key={label}>
                      <a
                        href={href}
                        className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors"
                      >
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-end gap-3 py-12 border-b border-paper/10">


          <div className="flex items-center gap-3 md:justify-end">
            {[
              { n: "LinkedIn", h: "https://www.linkedin.com/company/revlynhq/", d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.62 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.55v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28V22H7.84V8z" },
              { n: "X", h: "#", d: "M18.244 2H21.5l-7.51 8.583L23 22h-6.797l-5.324-6.53L4.8 22H1.542l8.036-9.19L1 2h6.914l4.813 5.93L18.244 2zm-1.192 18h1.826L7.033 4H5.07l11.982 16z" },
              { n: "Substack", h: "#", d: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l10.54-5.9L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" },
              { n: "YouTube", h: "#", d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" },
            ].map((s) => (
              <a
                key={s.n}
                href={s.h}
                aria-label={s.n}
                className="grid place-items-center h-10 w-10 rounded-full border border-paper/15 text-paper/70 hover:text-fire hover:border-fire/60 hover:bg-fire/[0.06] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>


        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-12">
          <div className="flex items-center gap-4">
            <img
              src={revlynWordmark}
              alt="Revlyn"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </div>
          <p className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 max-w-md md:text-right">
            Revenue, built like an engine. Operated like a team you already trust.
          </p>
        </div>

        {/* Base line */}
        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-paper/65">
          <span className="flex items-center gap-3">
            <span className="mono">© 2026 Revlyn</span>
            <span className="text-paper/25">·</span>
            <span>Built by operators, in Gurugram</span>
          </span>
          <span className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-paper transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <a href="#" className="hover:text-paper transition-colors">Security</a>
            <a href="#" className="hover:text-paper transition-colors">Cookies</a>
            <a href="#" className="hover:text-paper transition-colors">FAQs</a>
          </span>
        </div>
      </div>
    </footer>
  );
}