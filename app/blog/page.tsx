import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Short essays on revenue systems, HubSpot, RevOps and AI — written by the operators who run the portals.",
  alternates: { canonical: "/blog" },
};

// Topic pills filter the post list by category (case-insensitive match
// against each post's WordPress categories) via the ?topic= URL param —
// plain links, so filtering works with JS disabled and each topic is a
// shareable/bookmarkable URL.
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

  // Fetched once at a size generous enough to cover the whole archive so
  // topic filtering (below) has the full set to filter against — this is
  // a small blog; revisit with real pagination if the post count grows
  // well past this.
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
          <div className="mono text-[11px] text-ink/50 mb-5">
            Field notes · Monthly · 2 min
          </div>
          <h1 className="display leading-[0.97] tracking-[-0.04em] text-[clamp(2.6rem,6.6vw,5.75rem)]">
            The operator&rsquo;s notebook.
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg md:text-xl leading-[1.55] text-ink/70">
            Short essays on revenue systems, HubSpot, RevOps and AI — written by the same
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
            <a href="#" className="hover:text-paper transition-colors">Privacy</a>
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
