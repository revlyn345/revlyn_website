import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";

export const metadata: Metadata = {
  title: "Revlyn × Bitscale · Certified Implementation Partner",
  description: "Revlyn is a Bitscale Certified Implementation Partner. We install the AI data and enrichment layer that keeps HubSpot pipelines signal-aware, not seat-heavy.",
  alternates: { canonical: "/partners/bitscale" },
};

export default function BitscalePartnerPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <PartnershipTerms />
      <StackDiagram />
      <Capabilities />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, rgba(255,235,59,0.55), transparent 70%)", animation: "revlyn-float 15s ease-in-out infinite" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 w-[480px] h-[480px] rounded-full blur-3xl opacity-35" style={{ background: "radial-gradient(closest-side, rgba(255,87,34,0.35), transparent 70%)", animation: "revlyn-float 19s ease-in-out infinite reverse" }} />
      <div className="max-w-[1400px] mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-20 relative">
        <div data-reveal className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-8">
          <Link href="/partners" className="hover:text-fire transition-colors">Partners</Link>
          <span>/</span>
          <span className="text-ink">Bitscale</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-fire opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fire" />
              </span>
              Partner File · P-02 · Bitscale Implementation Partner
            </p>
            <h1 data-reveal data-reveal-delay="0.05" className="display leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]">
              REVLYN<span className="text-fire animate-blink">×</span><br />
              <span className="relative inline-block">
                <span className="text-fire">BITSCALE<span className="text-ink">.</span></span>
                <span aria-hidden className="absolute left-0 -bottom-1 h-[6px] w-[60%] bg-volt/60" />
              </span>
            </h1>
            <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
              The AI data layer we install on top of HubSpot when a revenue team
              needs enriched, signal-aware pipeline instead of another SDR seat.
              Setup, workflow design and CRM sync, run by the same senior
              operator managing your portal.
            </p>
          </div>

          <div data-reveal data-reveal-delay="0.25" className="lg:col-span-4">
            <div className="brutal-border bg-volt p-5 shadow-[10px_10px_0_0_var(--color-ink)] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-5">
                <span className="border border-ink bg-paper px-2 py-0.5">Certified</span>
                <span>P-02</span>
              </div>
              <div className="relative border-2 border-ink bg-volt p-5 text-center overflow-hidden">
                <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 animate-spin-slow">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="6 8" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="3 6" />
                </svg>
                <div className="relative mono text-[10px] uppercase tracking-[0.22em] text-ink/70">Bitscale</div>
                <div className="relative display text-3xl md:text-4xl leading-none mt-2 tracking-[-0.03em]">Implementation</div>
                <div className="relative display text-3xl md:text-4xl leading-none tracking-[-0.03em]">Partner</div>
                <div className="relative mono text-[10px] uppercase tracking-[0.22em] text-ink/70 mt-3">Est. 2024</div>
              </div>
              <a
                href="https://bitscale.ai/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="14"
                className="group mt-4 inline-flex items-center justify-center w-full gap-2 bg-ink text-paper border-2 border-ink px-4 py-2.5 mono text-[11px] uppercase tracking-[0.22em] hover:bg-fire transition-colors"
              >
                Verify on bitscale.ai
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div data-reveal data-reveal-delay="0.35" className="mt-14 border-t-2 border-ink pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["14K+", "Records enriched into CRM, per month"],
            ["03d", "Median time to live for a Bitscale workflow"],
            ["100+", "Signal sources routed into HubSpot"],
            ["01", "Senior operator across both platforms"],
          ].map(([v, l], i) => (
            <div key={l} data-reveal data-reveal-delay={0.4 + i * 0.05} className="group relative border-2 border-ink bg-paper p-4 transition-all duration-300 hover:bg-volt hover:-translate-y-0.5">
              <div className="display text-3xl md:text-4xl tracking-[-0.03em] leading-none tabular-nums">{v}</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 mt-2 group-hover:text-ink">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PARTNERSHIP TERMS ────────────────────────────────────────────── */
function PartnershipTerms() {
  const rows: [string, string][] = [
    ["Status", "Certified Implementation Partner · Verified with Bitscale"],
    ["Partnering since", "2024 · Working with Bitscale from early platform days"],
    ["What we install", "Enrichment workflows · Signal capture · CRM sync · AI-drafted outreach guardrails"],
    ["Engagement modes", "One-time setup · Embedded inside HubSpot as a Service"],
    ["Data footprint", "Enterprise B2B firmographic, technographic, intent and social signals"],
    ["Region coverage", "Global data coverage · Delivered from Gurugram + remote, US/EU hours"],
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              Terms · Public record
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-[-0.035em] leading-tight">
              What the partnership actually says<span className="text-fire">.</span>
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Bitscale is a young platform. Our partnership is a working one, not a listing badge.
            </p>
          </div>
          <div className="brutal-border bg-paper divide-y-2 divide-ink">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr]">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 p-4 border-r-2 border-ink bg-bone">
                  {k}
                </div>
                <div className="p-4 text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STACK DIAGRAM: how Bitscale sits on top of HubSpot ───────────── */
function StackDiagram() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
            Where it sits · Stack diagram
          </p>
          <h2 data-reveal data-reveal-delay="0.1" className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            Bitscale reads the world<span className="text-ink">.</span><br />
            <span className="text-fire">HubSpot decides what to do.</span>
          </h2>
        </div>

        <div className="brutal-border bg-bone p-6 md:p-10">
          <svg viewBox="0 0 800 420" className="w-full h-auto" aria-hidden="true">
            <defs>
              <pattern id="sgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#0a0a0a" strokeOpacity="0.08" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="800" height="420" fill="url(#sgrid)" />

            {/* Signals layer (top) */}
            <g>
              <text x="16" y="30" fontFamily="monospace" fontSize="11" fill="#0a0a0a" fontWeight="700">
                01 · SIGNAL SOURCES
              </text>
              {["Web", "Intent", "Job posts", "News", "Social", "Tech"].map((label, i) => (
                <g key={label} transform={`translate(${60 + i * 115} 50)`}>
                  <rect width="100" height="44" fill="#ffffff" stroke="#0a0a0a" strokeWidth="1.5" />
                  <text x="50" y="27" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#0a0a0a" fontWeight="600">
                    {label}
                  </text>
                </g>
              ))}
            </g>

            {/* Bitscale layer (middle) */}
            <g transform="translate(0 140)">
              <text x="16" y="20" fontFamily="monospace" fontSize="11" fill="#0a0a0a" fontWeight="700">
                02 · BITSCALE · AI DATA LAYER
              </text>
              <rect x="60" y="34" width="680" height="80" fill="#ffeb3b" stroke="#0a0a0a" strokeWidth="2" />
              <text x="400" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fill="#0a0a0a" fontWeight="800" letterSpacing="-0.03em">
                Enrich · Score · Route · Draft
              </text>
              <text x="400" y="94" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#0a0a0a" opacity="0.7">
                AGENT WORKFLOWS · CRM-AWARE PROMPTS · DEDUPE
              </text>
            </g>

            {/* CRM layer (bottom) */}
            <g transform="translate(0 280)">
              <text x="16" y="20" fontFamily="monospace" fontSize="11" fill="#0a0a0a" fontWeight="700">
                03 · HUBSPOT · SYSTEM OF RECORD
              </text>
              <rect x="60" y="34" width="680" height="80" fill="#ff5722" stroke="#0a0a0a" strokeWidth="2" />
              <text x="400" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fill="#ffffff" fontWeight="800" letterSpacing="-0.03em">
                Contacts · Companies · Deals · Workflows
              </text>
              <text x="400" y="94" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#ffffff" opacity="0.85">
                REPS WORK HERE · DASHBOARDS LIVE HERE
              </text>
            </g>

            {/* Flow arrows */}
            {/* Flow arrows top (animated dash) */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={`t${i}`}
                d={`M${110 + i * 115} 94 L${110 + i * 115} 174`}
                stroke="#0a0a0a"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
                className="animate-dash"
              />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={`b${i}`}
                d={`M${110 + i * 115} 254 L${110 + i * 115} 314`}
                stroke="#0a0a0a"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#arrow)"
              />
            ))}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#0a0a0a" />
              </marker>
            </defs>

            {/* Traveling pulses */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={`p${i}`} r="4" fill="#ff5722">
                <animateMotion
                  dur={`${2.5 + (i % 3) * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M${110 + i * 115},254 L${110 + i * 115},314`}
                />
              </circle>
            ))}
          </svg>

          <p className="mt-6 mono text-xs text-ink/60 text-center max-w-3xl mx-auto">
            Signals from six sources flow into the Bitscale layer, get enriched, scored and routed, then land inside HubSpot as records your reps and workflows already know how to use.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── CAPABILITIES ─────────────────────────────────────────────────── */
function Capabilities() {
  const caps = [
    {
      t: "Setup & CRM sync",
      s: "Bitscale workspace configured against your HubSpot properties, lifecycle stages and deal pipelines. Two-way write with dedupe rules.",
    },
    {
      t: "Enrichment workflows",
      s: "Firmographic, technographic, intent and social enrichment for new contacts and companies. Backfilled for existing records that matter.",
    },
    {
      t: "Signal capture",
      s: "Job posts, funding, tech stack changes, hiring, news mentions. Routed to the right rep with the right context, inside HubSpot.",
    },
    {
      t: "AI-drafted outreach guardrails",
      s: "Prompts, templates and review gates so agent-drafted messages sound like your company, not like ChatGPT with a signature.",
    },
    {
      t: "Playbook build",
      s: "Written playbooks per motion: outbound, ABM, expansion, reactivation. What a rep does when a signal fires, in plain English.",
    },
    {
      t: "Ongoing operation",
      s: "Bundled into HubSpot as a Service. A senior operator tunes prompts, checks accuracy weekly, and kills workflows that stop earning their keep.",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
            What we install
          </p>
          <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            Six layers between your CRM<br />
            <span className="text-fire">and the outside world.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((c, i) => (
            <div
              data-reveal
              data-reveal-delay={i * 0.05}
              key={c.t}
              className={`group relative brutal-border p-5 md:p-6 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] ${
                i === 1 ? "bg-volt" : i === 4 ? "bg-fire text-paper" : "bg-paper"
              }`}
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }} />
              <div className="relative mono text-[10px] uppercase tracking-[0.22em] opacity-70 mb-3 flex items-center justify-between">
                <span>LAYER · {String(i + 1).padStart(2, "0")}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              </div>
              <div className="relative display text-xl tracking-[-0.02em] leading-tight">{c.t}</div>
              <p className="relative mt-3 text-sm leading-relaxed opacity-85">{c.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY US ───────────────────────────────────────────────────────── */
function WhyUs() {
  const points = [
    {
      n: "01",
      t: "We work both platforms, not just one.",
      s: "Most Bitscale partners stop at their own tool. Most HubSpot partners stop at CRM. Revlyn owns the seam where they meet, which is where enrichment actually earns its keep.",
    },
    {
      n: "02",
      t: "AI shipped, not AI slideware.",
      s: "We do not run 'AI strategy workshops'. We build the workflow, install the guardrails, run it for a month, then hand you a scorecard of what fired and what did not.",
    },
    {
      n: "03",
      t: "Signal discipline over data volume.",
      s: "It is easy to enrich everything. Harder to enrich the 3% of records that will convert. We tune Bitscale against your ICP, not against Bitscale's default catalog.",
    },
    {
      n: "04",
      t: "Kill switches, not black boxes.",
      s: "Every AI-drafted action is logged, reviewable and reversible inside HubSpot. Your team can pause a workflow without waiting for a Slack from us.",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="mb-10">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-3">
            Why pick Revlyn to install it
          </p>
          <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            AI data is only useful<br />
            <span className="text-paper/60">if it lands somewhere reps trust.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-0 border-2 border-paper/20">
          {points.map((p, i) => (
            <div
              key={p.n}
              className={`p-6 md:p-8 ${i % 2 === 1 ? "md:border-l-2 border-paper/20" : ""} ${i >= 2 ? "border-t-2 border-paper/20" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire">{p.n}</span>
                <span className="h-px w-8 bg-paper/30" />
              </div>
              <div className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight">{p.t}</div>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div data-reveal className="brutal-border bg-ink text-paper p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <span aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ff5722 0 2px, transparent 2px 14px)" }} />
          <div className="relative">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-volt opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              Bitscale on top of your HubSpot
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-tight max-w-2xl">
              Signal-aware pipeline, without another SDR seat<span className="text-fire">.</span>
            </h2>
            <p className="mt-4 text-paper/70 max-w-xl">
              30-minute call. We map the signals you should be capturing, and what a Bitscale plus HubSpot install would look like for your team.
            </p>
          </div>
          <Link
            href="/contact"
            data-magnetic="20"
            className="group relative inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-6 py-4 mono text-xs uppercase tracking-[0.22em] hover:bg-volt hover:text-ink transition-colors self-start"
          >
            Book the diagnostic
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
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
          <img src={revlynWordmark} alt="Revlyn" className="h-8 w-auto" style={{ filter: "invert(1) hue-rotate(180deg)" }} />
          <p className="mt-4 text-paper/60 max-w-xs">
            An extended CRM, RevOps, GTM and AI team for B2B founders and revenue leaders.
          </p>
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/50">Explore</div>
          <ul className="mt-4 space-y-2.5 text-paper/85">
            <li><Link href="/hubspot-as-a-service" className="hover:text-fire">HubSpot as a Service</Link></li>
            <li><Link href="/partners" className="hover:text-fire">Partners</Link></li>
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
