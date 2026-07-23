import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Short essays on revenue systems, HubSpot, RevOps and AI — written by the operators who run the portals.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 pt-16 md:pt-24 pb-16">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-fire" />
            Field notes · Monthly · 2 min
          </div>
          <h1 className="display leading-[0.92] tracking-[-0.045em] text-[clamp(2.6rem,7vw,5.5rem)]">
            The operator&rsquo;s <span className="text-fire">notebook.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75 leading-relaxed">
            Short essays on revenue systems, HubSpot, RevOps and AI — written by the same
            operators who run the portals.
          </p>
        </div>
      </section>

      {/* ══════════════════════ POST GRID ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <div className="brutal-border bg-bone p-10 text-center">
              <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-2">
                No posts yet
              </p>
              <p className="text-ink/70">
                Once posts are published in WordPress, they will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group brutal-border bg-paper flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-fire)] transition-all"
                >
                  <div className="relative aspect-[16/10] bg-bone border-b-2 border-ink overflow-hidden">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 stripes opacity-[0.06]" />
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                      {formatDate(post.date)}
                    </div>
                    <h2 className="display text-xl leading-tight tracking-tight mb-2 group-hover:text-fire transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 mono text-[11px] uppercase tracking-[0.18em] text-fire">
                      Read
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
