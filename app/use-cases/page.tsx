import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";

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
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 md:-bottom-16 flex justify-center">
        <span
          className="display leading-none tracking-tighter text-transparent select-none"
          style={{
            fontSize: "clamp(8rem, 26vw, 24rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          revlyn
        </span>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={revlynWordmark}
            alt="Revlyn"
            className="h-8 w-auto"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
          <p className="mt-4 text-paper/60 max-w-xs">
            An extended CRM, RevOps, GTM and AI team for B2B founders and revenue leaders.
          </p>
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/50">Explore</div>
          <ul className="mt-4 space-y-2.5 text-paper/85">
            <li><Link href="/hubspot-as-a-service" className="hover:text-fire">HubSpot as a Service</Link></li>
            <li><Link href="/use-cases" className="hover:text-fire">Use cases</Link></li>
            <li><Link href="/about" className="hover:text-fire">About</Link></li>
            <li><Link href="/contact" className="hover:text-fire">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/50">Say hello</div>
          <ul className="mt-4 space-y-2.5 text-paper/85">
            <li><a href="mailto:info@revlyn.io" className="hover:text-fire">info@revlyn.io</a></li>
            <li>+91 75030 44000</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-paper/10 py-6 text-center text-paper/50 mono text-[11px] uppercase tracking-[0.22em]">
        © {new Date().getFullYear()} Revlyn. All rights reserved.
      </div>
    </footer>
  );
}
