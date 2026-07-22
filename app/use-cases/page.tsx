import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Use Cases · Revlyn",
  description: "Field files on how Revlyn runs revenue for different kinds of B2B companies — starting with SaaS, more in the works.",
  alternates: { canonical: "/use-cases" },
};

type Case = {
  slug: string;
  code: string;
  eyebrow: string;
  name: string;
  blurb: string;
  status: "live" | "soon";
  motion: string;
  metric: string;
  metricLabel: string;
  stack: string[];
};

const cases: Case[] = [
  {
    slug: "/use-cases/saas",
    code: "UC-01",
    eyebrow: "Product-led + Sales-led",
    name: "SaaS",
    blurb:
      "Where the product is the product. We wire signup, activation, PQLs, expansion and renewal into one system your team can actually see, then keep it running past the launch.",
    status: "live",
    motion: "Freemium · Trial · Self-serve · PLG-assist",
    metric: "6",
    metricLabel: "Lifecycle stages, one CRM",
    stack: ["HubSpot", "Segment", "Warehouse", "AI"],
  },
  {
    slug: "#",
    code: "UC-02",
    eyebrow: "Services & Consulting",
    name: "Professional services",
    blurb:
      "Pipelines, proposals, staffing and utilisation, connected so nothing falls between sales, delivery and finance. Written for firms billing time, not seats.",
    status: "soon",
    motion: "Retainers · SOWs · Utilisation · Renewals",
    metric: "3",
    metricLabel: "Systems stitched (CRM, PSA, Finance)",
    stack: ["HubSpot", "Harvest", "QuickBooks"],
  },
  {
    slug: "#",
    code: "UC-03",
    eyebrow: "Marketplaces",
    name: "Marketplaces",
    blurb:
      "Two-sided pipelines, supply and demand ops, and lifecycle automation for the messy middle. Buyers and sellers on the same portal, without stepping on each other.",
    status: "soon",
    motion: "Supply ops · Demand ops · Transaction lifecycle",
    metric: "2×",
    metricLabel: "Pipelines, one operating rhythm",
    stack: ["HubSpot", "Warehouse", "Ops tooling"],
  },
  {
    slug: "#",
    code: "UC-04",
    eyebrow: "Fintech & Regulated",
    name: "Fintech",
    blurb:
      "Compliance-aware CRM design, KYB pipelines and revenue reporting your risk team will sign off on. Built for teams where the audit trail matters as much as the pipeline.",
    status: "soon",
    motion: "KYB · Onboarding · Regulated reporting",
    metric: "SOC",
    metricLabel: "Audit-ready reporting stack",
    stack: ["HubSpot", "Persona", "Warehouse"],
  },
];

export default function UseCasesIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <RhythmStrip />
      <CasesLedger />
      <Footer />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink" />
              Field Files · Vol. 01 · How the rhythm shows up on the ground
            </p>
            <h1 className="display leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]">
              DIFFERENT<br />
              TERRAIN<span className="text-ink">.</span><br />
              <span className="text-fire">SAME RHYTHM<span className="text-ink">.</span></span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
              Revenue looks different inside a self-serve SaaS product than
              inside a services firm booking retainers. The way a senior team
              runs it, monthly build, weekly cadence, one system of record,
              stays the same. Pick the terrain that looks most like yours.
            </p>
          </div>

          {/* Right plaque: index counter */}
          <div className="lg:col-span-4">
            <div className="brutal-border bg-volt p-5 shadow-[10px_10px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-5">
                <span className="border border-ink bg-paper px-2 py-0.5">Index · UC</span>
                <span>Rev. Today</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-ink bg-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60">Live</div>
                  <div className="display text-5xl leading-none mt-2">01</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink/70 mt-2">SaaS</div>
                </div>
                <div className="border-2 border-ink bg-ink text-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/60">In dock</div>
                  <div className="display text-5xl leading-none mt-2">03</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/70 mt-2">Q1–Q2</div>
                </div>
              </div>
              <div className="mt-4 border-2 border-ink bg-paper p-3 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-ink/60">Total files</span>
                <span className="text-fire font-bold">04 / 04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-14 border-t-2 border-ink pt-5 grid grid-cols-2 md:grid-cols-4 gap-6 mono text-[11px] uppercase tracking-[0.22em]">
          <div><div className="text-ink/50">Signal</div><div className="text-ink mt-1">Field-tested, not case-studied</div></div>
          <div><div className="text-ink/50">Written by</div><div className="text-ink mt-1">The operator who ran it</div></div>
          <div><div className="text-ink/50">Refresh</div><div className="text-ink mt-1">Quarterly, when the terrain moves</div></div>
          <div><div className="text-ink/50">Missing yours?</div><div className="text-ink mt-1">Ask. We probably ran it.</div></div>
        </div>
      </div>
    </section>
  );
}

/* ── RHYTHM STRIP: the "same rhythm" spine ────────────────────────── */
function RhythmStrip() {
  const beats = [
    { n: "01", t: "Monthly build", s: "One 90-day block, then the next. Scoped, sized, priced." },
    { n: "02", t: "Weekly cadence", s: "Monday standup, Wednesday drop, Friday review. Non-negotiable." },
    { n: "03", t: "One record", s: "HubSpot in the middle. Warehouse behind it. Nothing floating on someone's laptop." },
    { n: "04", t: "Senior on keys", s: "The person who scoped it, ships it. No handoffs to juniors." },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 relative">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              The spine · What every file shares
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-2xl">
              Four beats that don't change,<br />
              <span className="text-paper/60">no matter the terrain.</span>
            </h2>
          </div>
          <div className="hidden md:block mono text-[11px] uppercase tracking-[0.22em] text-paper/50 text-right">
            04 · Beats<br />
            <span className="text-fire">Always on</span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-0 border-2 border-paper/20">
          {beats.map((b, i) => (
            <div
              key={b.n}
              className={`p-6 md:p-7 ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-paper/20" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire">{b.n}</span>
                <span className="h-px w-8 bg-paper/30" />
              </div>
              <div className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight">{b.t}</div>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{b.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CASES LEDGER: dossier-style file cards ───────────────────────── */
function CasesLedger() {
  return (
    <section className="border-b-2 border-ink bg-bone relative">
      <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              The Ledger · 04 field files
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              Pick the terrain<br />
              <span className="text-fire">that looks most like yours<span className="text-ink">.</span></span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => {
            const isLive = c.status === "live";
            const CardInner = (
              <div
                className={`group relative brutal-border bg-paper p-6 md:p-8 h-full flex flex-col transition-all ${
                  isLive
                    ? "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-fire)] cursor-pointer"
                    : ""
                }`}
              >
                {/* File header */}
                <div className="flex items-center justify-between border-b border-ink/15 pb-3 mb-6">
                  <span className="mono text-[11px] uppercase tracking-[0.22em]">
                    {c.code} · {c.eyebrow}
                  </span>
                  <span
                    className={`mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-ink ${
                      isLive ? "bg-fire text-paper" : "bg-paper text-ink"
                    }`}
                  >
                    {isLive ? "● Available" : "○ In dock"}
                  </span>
                </div>

                {/* Name */}
                <div className="display text-5xl md:text-6xl tracking-[-0.045em] leading-[0.9]">
                  {c.name}
                  <span className="text-fire">.</span>
                </div>

                {/* Blurb */}
                <p className="mt-5 text-ink/75 leading-relaxed">{c.blurb}</p>

                {/* Motion strip */}
                <div className="mt-6 border-t-2 border-ink pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Motion</div>
                    <div className="mt-1 mono text-xs leading-relaxed text-ink/80">{c.motion}</div>
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50">System of record</div>
                    <div className="mt-1 mono text-xs leading-relaxed text-ink/80">
                      {c.stack.join(" · ")}
                    </div>
                  </div>
                </div>

                {/* Metric plaque */}
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className={`border-2 border-ink px-4 py-3 ${isLive ? "bg-volt" : "bg-bone"}`}>
                    <div className="display text-3xl leading-none tracking-[-0.02em]">{c.metric}</div>
                    <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink/70 mt-1 max-w-[18ch]">
                      {c.metricLabel}
                    </div>
                  </div>
                  <div className="mono text-xs uppercase tracking-[0.22em] flex items-center gap-2 text-ink">
                    {isLive ? "Open file" : "Notify me"}
                    <span
                      className={`inline-block transition-transform ${
                        isLive ? "group-hover:translate-x-1" : ""
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
            return isLive ? (
              <Link key={c.code} href={c.slug}>
                {CardInner}
              </Link>
            ) : (
              <a
                key={c.code}
                href={`mailto:info@revlyn.io?subject=Notify%20me%20when%20${encodeURIComponent(c.name)}%20use%20case%20is%20live`}
                className="block"
              >
                {CardInner}
              </a>
            );
          })}
        </div>

        {/* Bottom "missing yours" plaque */}
        <div className="mt-10 brutal-border bg-ink text-paper p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-2">
              Not on the ledger?
            </p>
            <p className="display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-xl">
              We have run vertical B2B, dev tools, healthtech, edtech, logistics. Ask.
            </p>
          </div>
          <a
            href="mailto:info@revlyn.io?subject=Terrain%20not%20on%20the%20ledger"
            className="inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-5 py-3 mono text-xs uppercase tracking-[0.22em] hover:bg-paper hover:text-ink hover:border-paper transition-colors self-start"
          >
            Ask about your terrain <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────────────────── */
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
          <div className="md:col-span-7">
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

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10">
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
                  className="flex-1 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-14 border-b border-paper/10">
          {/* 6-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact#intake"],
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
                ["Migration", "/hubspot-implementation#migration"],
                ["Audit", "/hubspot-optimization#audit"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["RevOps", "/#services"],
                ["GTM Engineering", "/#services"],
                ["AI Workflows", "/#services"],
                ["Lifecycle & Nurture", "/#services"],
                ["Reporting & Forecast", "/#services"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Mid-market", "/use-cases"],
                ["Founders", "/use-cases"],
                ["Heads of GTM", "/use-cases"],
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
                ["Field notes", "#"],
                ["Careers", "/about#team"],
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
