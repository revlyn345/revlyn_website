import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        <div className="relative max-w-[900px] mx-auto px-6 pt-16 md:pt-24 pb-12">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-fire">REVLYN</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-fire">FIELD NOTES</Link>
          </div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-4">
            {formatDate(post.date)}
          </div>
          <h1 className="display leading-[0.95] tracking-[-0.035em] text-[clamp(2.2rem,5.5vw,3.8rem)]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ══════════════════════ FEATURED IMAGE ══════════════════════ */}
      {post.featuredImage && (
        <section className="border-b-2 border-ink">
          <div className="max-w-[1100px] mx-auto px-6 py-10">
            <div className="relative aspect-[16/9] brutal-border overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════ CONTENT ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[760px] mx-auto px-6 py-14">
          {/*
            WordPress returns fully rendered HTML for the post body. These
            utility classes give it the site's typographic voice (headings,
            links, lists, blockquotes) without a plugin — tune freely.
          */}
          <div
            className="wp-content text-[17px] leading-relaxed text-ink/85 [&>h2]:display [&>h2]:text-3xl [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:display [&>h3]:text-2xl [&>h3]:tracking-tight [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&_a]:text-fire [&_a]:underline [&_a:hover]:no-underline [&>blockquote]:border-l-4 [&>blockquote]:border-fire [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-ink/70 [&>figure]:my-8 [&_img]:brutal-border"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[900px] mx-auto px-6 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="display text-2xl md:text-3xl tracking-tight">
              Recognize this in your own portal?
            </h2>
            <p className="mt-2 text-ink/70 max-w-md">
              30 minutes, no deck. We open your HubSpot and tell you the three things worth
              fixing first.
            </p>
          </div>
          <BookCallButton className="shrink-0 inline-flex items-center gap-2 brutal-border bg-ink text-paper px-6 py-3 display text-base hover:bg-fire transition-colors">
            Book a call <span>→</span>
          </BookCallButton>
        </div>
      </section>
    </div>
  );
}
