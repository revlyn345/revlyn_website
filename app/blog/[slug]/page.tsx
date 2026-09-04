import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getPosts } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";
import { ReadingProgressBar, TableOfContents, MobileToc } from "@/components/blog/ArticleScrollUI";
import { Footer } from "@/components/Footer";

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

