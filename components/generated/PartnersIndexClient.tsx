"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";


type Partner = {
  slug: string;
  code: string;
  name: string;
  category: string;
  since: string;
  status: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  scope: string;
  mark: (props: { className?: string }) => React.ReactElement;
  accent: "fire" | "volt";
};

/* Inline SVG marks. Simple, on-brand, no vendor logos we don't own. */
function HubSpotMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <pattern id="hgrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke="#0a0a0a" strokeOpacity="0.12" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#hgrid)" />
      {/* Sprocket / hub graphic */}
      <g transform="translate(100 100)">
        <circle r="52" fill="none" stroke="#0a0a0a" strokeWidth="2" />
        <circle r="34" fill="#ff5722" stroke="#0a0a0a" strokeWidth="2">
          <animate attributeName="r" values="34;36;34" dur="3.6s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="#ffffff" stroke="#0a0a0a" strokeWidth="2" />
        <g className="animate-spin-slow" style={{ transformOrigin: "0px 0px" }}>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg})`}>
              <line x1="0" y1="-52" x2="0" y2="-70" stroke="#0a0a0a" strokeWidth="2" />
              <circle cx="0" cy="-76" r="6" fill="#0a0a0a" />
            </g>
          ))}
        </g>
      </g>
      <text x="14" y="24" fontFamily="monospace" fontSize="10" fill="#0a0a0a" fontWeight="700">
        PLATFORM · CRM
      </text>
      <text x="186" y="192" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#0a0a0a" fontWeight="700">
        HUB · 001
      </text>
    </svg>
  );
}

function BitscaleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <pattern id="bgrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke="#0a0a0a" strokeOpacity="0.12" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#bgrid)" />
      {/* Signal bars → data amplification */}
      <g transform="translate(100 105)">
        {[
          { x: -60, h: 22 },
          { x: -36, h: 40 },
          { x: -12, h: 58 },
          { x: 12, h: 78 },
          { x: 36, h: 96 },
          { x: 60, h: 120 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x - 8}
            y={-b.h}
            width="16"
            height={b.h}
            fill={i === 5 ? "#ff5722" : "#0a0a0a"}
            stroke="#0a0a0a"
            strokeWidth="1.5"
          >
            <animate attributeName="height" values={`${b.h};${b.h - 6};${b.h}`} dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${-b.h};${-(b.h - 6)};${-b.h}`} dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <line x1="-76" y1="4" x2="76" y2="4" stroke="#0a0a0a" strokeWidth="2" />
        {/* Data dots */}
        {[-60, -36, -12, 12, 36, 60].map((x, i) => (
          <circle key={x} cx={x} cy="18" r="2.5" fill={i === 5 ? "#ff5722" : "#0a0a0a"}>
            <animate attributeName="opacity" values="1;0.25;1" dur={`${2 + i * 0.15}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
      <text x="14" y="24" fontFamily="monospace" fontSize="10" fill="#0a0a0a" fontWeight="700">
        PLATFORM · DATA & AI
      </text>
      <text x="186" y="192" textAnchor="end" fontFamily="monospace" fontSize="10" fill="#0a0a0a" fontWeight="700">
        HUB · 002
      </text>
    </svg>
  );
}

const partners: Partner[] = [
  {
    slug: "/partners/hubspot",
    code: "P-01",
    name: "HubSpot",
    category: "CRM · Marketing · Sales · Service · Ops Hub",
    since: "Since 2019",
    status: "Solutions Partner",
    blurb:
      "The system of record for the founders and revenue leaders we work with. We architect, ship and operate HubSpot portals end-to-end, then stay long enough to keep them honest.",
    metric: "127",
    metricLabel: "Portals shipped, still running",
    scope: "Implementation · Optimization · HaaS · AI on top",
    mark: HubSpotMark,
    accent: "fire",
  },
  {
    slug: "/partners/bitscale",
    code: "P-02",
    name: "Bitscale",
    category: "AI-powered prospecting & data enrichment",
    since: "Since 2024",
    status: "Certified Implementation Partner",
    blurb:
      "The AI data layer we bolt onto HubSpot when reps need signal, not another SDR seat. Built by ex-YC operators. Installed and tuned by the same senior who runs your portal.",
    metric: "14K+",
    metricLabel: "Enriched records flowing into CRM / mo",
    scope: "Setup · Workflow design · CRM sync · Playbook build",
    mark: BitscaleMark,
    accent: "volt",
  },
];

export default function PartnersIndexClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <WhyUsRail />
      <PartnersLedger />
      <NotOnListPlaque />
      <Footer />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      {/* soft moving accent blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, rgba(255,87,34,0.35), transparent 70%)", animation: "revlyn-float 14s ease-in-out infinite" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-[-6rem] w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, rgba(255,235,59,0.45), transparent 70%)", animation: "revlyn-float 18s ease-in-out infinite reverse" }} />

      <div className="max-w-[1400px] mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink" />
              <span className="relative flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inset-0 rounded-full bg-fire opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-fire" />
                </span>
                Partners · Two of them · By choice
              </span>
            </p>
            <h1 data-reveal data-reveal-delay="0.05" className="display leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]">
              TWO PLATFORMS<span className="text-ink">.</span><br />
              <span className="relative inline-block">
                <span className="text-fire">RUN LIKE ONE<span className="text-ink">.</span></span>
                <span aria-hidden className="absolute left-0 -bottom-2 h-[6px] w-[70%] bg-fire/25" />
              </span>
            </h1>
            <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
              HubSpot is where your revenue lives. Bitscale is what keeps it awake.
              We are certified on both, and one senior operator runs the seam between them, so nothing gets handed off, dropped, or re-explained.
            </p>
          </div>

          {/* Plaque */}
          <div data-reveal data-reveal-delay="0.25" className="lg:col-span-4">
            <div className="brutal-border bg-volt p-5 shadow-[10px_10px_0_0_var(--color-ink)] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-5">
                <span className="border border-ink bg-paper px-2 py-0.5">Certified · 2 of 2</span>
                <span className="tabular-nums">Rev · Today</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/partners/hubspot" className="group/plaque border-2 border-ink bg-paper p-3 hover:bg-fire hover:text-paper transition-colors">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">01</div>
                  <div className="display text-2xl leading-none mt-2">HubSpot</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] opacity-70 mt-2 flex items-center justify-between">Solutions Partner <span className="inline-block transition-transform group-hover/plaque:translate-x-1">→</span></div>
                </Link>
                <Link href="/partners/bitscale" className="group/plaque border-2 border-ink bg-paper p-3 hover:bg-ink hover:text-volt transition-colors">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">02</div>
                  <div className="display text-2xl leading-none mt-2">Bitscale</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] opacity-70 mt-2 flex items-center justify-between">Impl. Partner <span className="inline-block transition-transform group-hover/plaque:translate-x-1">→</span></div>
                </Link>
              </div>
              <div className="mt-4 border-2 border-ink bg-ink text-paper p-3 mono text-[10px] uppercase tracking-[0.22em] flex items-center justify-between">
                <span className="text-paper/60">Everything else</span>
                <span className="text-volt">By exception</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div data-reveal data-reveal-delay="0.35" className="mt-14 border-t-2 border-ink pt-5 grid grid-cols-2 md:grid-cols-4 gap-6 mono text-[11px] uppercase tracking-[0.22em]">
          <div><div className="text-ink/50">Partners</div><div className="text-ink mt-1">02 · On purpose</div></div>
          <div><div className="text-ink/50">Depth over breadth</div><div className="text-ink mt-1">In-portal weekly</div></div>
          <div><div className="text-ink/50">Certified</div><div className="text-ink mt-1">By the platform</div></div>
          <div><div className="text-ink/50">Not partners of</div><div className="text-ink mt-1">Anything unshipped</div></div>
        </div>
      </div>
    </section>
  );
}

/* ── WHY US: the "1000s of partners" answer ───────────────────────── */
function WhyUsRail() {
  const points = [
    {
      n: "01",
      t: "We ship in your portal, not a slide deck.",
      s: "Most partners hand you a proposal and disappear into onboarding. A senior Revlyn operator is live in your HubSpot or Bitscale workspace within week one, doing the actual build.",
    },
    {
      n: "02",
      t: "Two platforms, deep. Not twenty, shallow.",
      s: "Directories reward agencies that badge everything. That math only works when juniors do the work. We picked two so every operator on the team has run them in production for years.",
    },
    {
      n: "03",
      t: "One team, both sides of the stack.",
      s: "HubSpot data lands where Bitscale enrichment flows in. Most agencies pick one side and hand off the other. We designed the seam ourselves, and we run both edges of it.",
    },
    {
      n: "04",
      t: "We keep operating after go-live.",
      s: "Certification says we can implement. HubSpot as a Service is why teams stay. Post-launch, a senior operator keeps the portal and the AI layer moving, no renewed SOW, no re-onboarding tax.",
    },
  ];

  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      {/* animated gridlines */}
      <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none">
        <defs>
          <pattern id="whyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0V60" fill="none" stroke="#fafaf7" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#whyGrid)" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <div>
            <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              The question no directory answers
            </p>
            <h2 data-reveal data-reveal-delay="0.1" className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              A directory of thousands.<br />
              <span className="text-paper/60">Four reasons it narrows to us.</span>
            </h2>
          </div>
          <div className="hidden md:block mono text-[11px] uppercase tracking-[0.22em] text-paper/50 text-right">
            04 · Reasons<br />
            <span className="text-fire">Verifiable</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-2 border-paper/20">
          {points.map((p, i) => (
            <div
              data-reveal
              data-reveal-delay={0.05 * i}
              key={p.n}
              className={`group relative p-6 md:p-8 overflow-hidden transition-colors duration-300 hover:bg-paper/[0.03] ${
                i % 2 === 1 ? "md:border-l-2 border-paper/20" : ""
              } ${i >= 2 ? "border-t-2 border-paper/20" : ""}`}
            >
              {/* fire slash on hover */}
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-fire origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100" />
              <div className="flex items-center gap-3 mb-4">
                <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire">{p.n}</span>
                <span className="h-px w-8 bg-paper/30 transition-all duration-500 group-hover:w-16 group-hover:bg-fire" />
              </div>
              <div className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight">
                {p.t}
              </div>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LEDGER: two partner dossier cards ────────────────────────────── */
function PartnersLedger() {
  return (
    <section className="border-b-2 border-ink bg-bone relative">
      <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <div>
            <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              The Ledger · 02 partner files
            </p>
            <h2 data-reveal data-reveal-delay="0.1" className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              Open the file<br />
              <span className="text-fire">on either partner<span className="text-ink">.</span></span>
            </h2>
          </div>
          <div className="hidden md:block mono text-[11px] uppercase tracking-[0.22em] text-ink/50 text-right">
            Hover to open<br />
            <span className="text-fire">Click to read</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((p, idx) => {
            const isFire = p.accent === "fire";
            const glow = isFire ? "var(--color-fire)" : "var(--color-volt)";
            return (
              <Link key={p.code} href={p.slug} className="block group" data-reveal data-reveal-delay={0.1 + idx * 0.08}>
                <article
                  className="relative brutal-border bg-paper p-6 md:p-8 h-full flex flex-col transition-all duration-300 will-change-transform hover:-translate-x-1 hover:-translate-y-1"
                  style={{ boxShadow: "6px 6px 0 0 var(--color-ink)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `14px 14px 0 0 ${glow}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "6px 6px 0 0 var(--color-ink)")}
                >
                  {/* corner ticks */}
                  <span aria-hidden className="pointer-events-none absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-fire opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span aria-hidden className="pointer-events-none absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-fire opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center justify-between border-b border-ink/15 pb-3 mb-6">
                    <span className="mono text-[11px] uppercase tracking-[0.22em]">
                      {p.code} · {p.category}
                    </span>
                    <span
                      className={`mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-ink flex items-center gap-1.5 ${
                        isFire ? "bg-fire text-paper" : "bg-volt text-ink"
                      }`}
                    >
                      <span className={`relative flex h-1.5 w-1.5`}>
                        <span className={`animate-ping absolute inset-0 rounded-full ${isFire ? "bg-paper" : "bg-ink"} opacity-70`} />
                        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isFire ? "bg-paper" : "bg-ink"}`} />
                      </span>
                      {p.status}
                    </span>
                  </div>

                  {/* Mark with subtle zoom */}
                  <div className="border-2 border-ink bg-bone overflow-hidden">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <p.mark className="w-full h-auto" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-3">
                    <div className="display text-5xl md:text-6xl tracking-[-0.045em] leading-[0.9]">
                      {p.name}
                      <span className="text-fire">.</span>
                    </div>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 text-right">
                      {p.since}
                    </div>
                  </div>

                  <p className="mt-5 text-ink/75 leading-relaxed">{p.blurb}</p>

                  <div className="mt-6 border-t-2 border-ink pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                        Scope with us
                      </div>
                      <div className="mt-1 mono text-xs leading-relaxed text-ink/80">{p.scope}</div>
                    </div>
                    <div>
                      <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50">Status</div>
                      <div className="mt-1 mono text-xs leading-relaxed text-ink/80">
                        Live in production this quarter
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                    <div className={`border-2 border-ink px-4 py-3 transition-transform duration-300 group-hover:scale-[1.03] ${isFire ? "bg-fire text-paper" : "bg-volt"}`}>
                      <div className="display text-3xl leading-none tracking-[-0.02em] tabular-nums">{p.metric}</div>
                      <div className="mono text-[10px] uppercase tracking-[0.18em] mt-1 max-w-[20ch] opacity-90">
                        {p.metricLabel}
                      </div>
                    </div>
                    <div className="mono text-xs uppercase tracking-[0.22em] flex items-center gap-2 text-ink">
                      <span className="relative">
                        Open file
                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-fire origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── NOT ON LIST ──────────────────────────────────────────────────── */
function NotOnListPlaque() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-14 md:py-16">
        <div data-reveal className="relative brutal-border bg-ink text-paper p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          {/* animated diagonal stripes */}
          <span aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffeb3b 0 2px, transparent 2px 14px)" }} />
          <div className="relative">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-2 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-volt" />
              Not on the ledger?
            </p>
            <p className="display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-2xl">
              Salesforce, Segment, Clay, Gong, we work with them when the build calls for it.
              We just refuse to badge what we cannot staff with a senior.
            </p>
          </div>
          <a
            href="mailto:info@revlyn.io?subject=Stack%20question%20for%20Revlyn"
            data-magnetic="18"
            className="relative inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-6 py-4 mono text-xs uppercase tracking-[0.22em] hover:bg-volt hover:text-ink transition-colors self-start"
          >
            Ask about your stack <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
            <li><Link href="/partners" className="hover:text-fire">Partners</Link></li>
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
