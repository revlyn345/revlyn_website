import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";


const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Short essays on revenue systems, HubSpot, RevOps and AI — written by the operators who run the portals.",
  alternates: { canonical: "/blog" },
};


const TOPICS = ["HubSpot", "RevOps", "Forecasting", "AI", "GTM"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const selectedTopic = topic?.toLowerCase();

  const allPosts = await getPosts(1, 100);

  const posts = selectedTopic
    ? allPosts.filter((p) => p.categories.some((c) => c.toLowerCase() === selectedTopic))
    : allPosts;

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ══════════════════════ MASTHEAD ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-14">
          
          <h1 className="display leading-[0.97] tracking-[-0.04em] text-[clamp(2.6rem,6.6vw,5.75rem)]">
            The operator&rsquo;s notebook.
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg md:text-xl leading-[1.55] text-ink/70">
            Short essays on revenue systems, HubSpot, RevOps and AI written by the same
            operators who run the portals.
          </p>
        </div>
      </section>

      {/* ══════════════════════ TOPIC FILTER ══════════════════════ */}
      <section className="border-b border-ink/10 bg-[#FAF9F7]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-2">
          <span className="mono text-[10px] text-ink/50 mr-2">Topics</span>
          <Link
            href="/blog"
            className={`rounded-full px-3.5 py-[7px] text-sm transition-colors ${
              !selectedTopic
                ? "bg-ink text-paper"
                : "border border-ink/15 bg-paper text-ink/75 hover:border-ink/40"
            }`}
          >
            All
          </Link>
          {TOPICS.map((t) => {
            const active = selectedTopic === t.toLowerCase();
            return (
              <Link
                key={t}
                href={`/blog?topic=${encodeURIComponent(t.toLowerCase())}`}
                className={`rounded-full px-3.5 py-[7px] text-sm transition-colors ${
                  active
                    ? "bg-ink text-paper"
                    : "border border-ink/15 bg-paper text-ink/75 hover:border-ink/40"
                }`}
              >
                {t}
              </Link>
            );
          })}
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="border-b-2 border-ink">
          <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16">
            <div className="brutal-border bg-bone p-10 text-center">
              <p className="mono text-[11px] text-ink/60 mb-2">
                {selectedTopic ? `No posts filed under "${topic}" yet` : "No posts yet"}
              </p>
              <p className="text-ink/70">
                {selectedTopic ? (
                  <>
                    Try another topic, or{" "}
                    <Link href="/blog" className="text-fire underline">
                      view all field notes
                    </Link>
                    .
                  </>
                ) : (
                  "Once posts are published in WordPress, they will appear here automatically."
                )}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ══════════════════════ FEATURED POST ══════════════════════ */}
          {featured && (
            <section className="border-b-2 border-ink">
              <Link
                href={`/blog/${featured.slug}`}
                className="max-w-[1360px] mx-auto grid md:grid-cols-[1.05fr_1fr] group"
              >
                <div className="p-8 md:pl-10 md:pr-14 py-10 md:py-14 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mono text-[10px] text-ink/50 mb-5">
                    <span className="bg-fire text-paper px-2.5 py-1">Latest</span>
                    <span>{formatDate(featured.date)}</span>
                    <span>{featured.readingTime} min</span>
                    {featured.categories[0] && <span>{featured.categories[0]}</span>}
                  </div>
                  <h2 className="display leading-[1.05] tracking-[-0.03em] text-[clamp(1.9rem,3.6vw,3.25rem)] text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-[50ch] text-lg leading-[1.65] text-ink/70">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 mono text-[11px]">
                    Read
                    <span className="text-fire group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </span>
                </div>
                <div className="relative min-h-[280px] md:min-h-[420px] border-t md:border-t-0 md:border-l border-ink/10 bg-bone order-1 md:order-2 overflow-hidden">
                  {featured.featuredImage ? (
                    <Image
                      src={featured.featuredImage}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 stripes opacity-[0.06]" />
                  )}
                </div>
              </Link>
            </section>
          )}

          {/* ══════════════════════ CARD GRID + ARCHIVE TILE ══════════════════════ */}
          <section>
            <div className="max-w-[1360px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-paper p-7 md:p-8 flex flex-col gap-3.5 min-h-[260px] hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="flex gap-3.5 mono text-[10px] text-ink/50">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readingTime} min</span>
                    </div>
                    <div className="display text-2xl leading-[1.15] tracking-[-0.02em]">
                      {post.title}
                    </div>
                    <p className="text-[15px] leading-[1.6] text-ink/60 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between mono text-[10px] text-ink/50">
                      <span>{post.categories[0] ?? "Field notes"}</span>
                      <span className="text-fire">→</span>
                    </div>
                  </Link>
                ))}

                {/* Archive tile — always the last cell */}
                <div className="bg-ink text-[#A8A39A] p-7 md:p-8 flex flex-col gap-3.5 min-h-[260px]">
                  <div className="mono text-[10px] text-fire">Archive</div>
                  <div className="display text-2xl leading-[1.15] tracking-[-0.02em] text-paper">
                    {allPosts.length} notes and counting.
                  </div>
                  <p className="text-[15px] leading-[1.6]">
                    Every essay we&rsquo;ve published, sorted by topic.
                  </p>
                  <Link
                    href="/blog"
                    className="mt-auto self-start inline-flex items-center gap-2 bg-fire text-paper rounded-full px-4 py-2.5 text-sm font-medium"
                  >
                    Browse archive →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}

