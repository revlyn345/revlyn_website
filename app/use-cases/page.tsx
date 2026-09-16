import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Use Cases · Revlyn",
  description: "Field files on how Revlyn runs revenue for different kinds of B2B companies, starting with SaaS, more in the works.",
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <RhythmStrip />
      
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-ink bg-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60">Live</div>
                  <div className="display text-5xl leading-none mt-2">01</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink/70 mt-2">SaaS</div>
                </div>
                <div className="border-2 border-ink bg-ink text-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/60">In dock</div>
                  <div className="display text-5xl leading-none mt-2">05</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/70 mt-2">Q1-Q2</div>
                </div>
              </div>
              <div className="mt-4 border-2 border-ink bg-paper p-3 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-ink/60">Total files</span>
                <span className="text-fire font-bold">06 / 06</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-14 border-t-2 border-ink pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mono text-[11px] uppercase tracking-[0.22em]">
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

/* ── CASES LEDGER: 6-card industry grid, accent bar + icon + copy ──── */
type Industry = {
  slug: string;
  live: boolean;
  name: string;
  blurb: string;
  icon: ReactNode;
  color: string;
  border: string;
  panelBg: string;
  text: string;
};

const industries: Industry[] = [
  {
    slug: "/use-cases/saas",
    live: true,
    name: "SaaS & Technology",
    blurb: "Bring marketing, sales, customer success, and revenue data into one connected system. Build the processes and visibility needed to support growth.",
    color: "#16A34A",
    border: "border-[#16A34A]",
    panelBg: "bg-[#16A34A]/10",
    text: "text-[#16A34A]",
    icon: (
      <path d="M4 5h16v10H4V5zm0 12h16v2H4v-2zm5-9h6v1H9V8z" />
    ),
  },
  {
    slug: "#",
    live: false,
    name: "Professional Services",
    blurb: "Connect lead generation, sales, client onboarding, delivery, and renewals. Create a clearer view of the client journey from first conversation to expansion.",
    color: "#7C3AED",
    border: "border-[#7C3AED]",
    panelBg: "bg-[#7C3AED]/10",
    text: "text-[#7C3AED]",
    icon: (
      <path d="M9 3h6a1 1 0 011 1v2h4a1 1 0 011 1v3H3V7a1 1 0 011-1h4V4a1 1 0 011-1zm0 3h6V5H9v1zM3 12h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7z" />
    ),
  },
  {
    slug: "#",
    live: false,
    name: "Media & Entertainment",
    blurb: "Connect enquiries, partnerships, bookings, campaigns, and customer data in one place. Create clearer processes across commercial and operational teams.",
    color: "#2563EB",
    border: "border-[#2563EB]",
    panelBg: "bg-[#2563EB]/10",
    text: "text-[#2563EB]",
    icon: (
      <path d="M4 5h16v14H4V5zm2 2v2h2V7H6zm4 0v2h2V7h-2zm4 0v2h2V7h-2zM6 11v6h12v-6H6z" />
    ),
  },
  {
    slug: "#",
    live: false,
    name: "Logistics & Supply Chain",
    blurb: "Connect sales activity, customer data, and operational workflows in one place. Improve visibility across accounts, opportunities, and the customer lifecycle.",
    color: "#EA580C",
    border: "border-[#EA580C]",
    panelBg: "bg-[#EA580C]/10",
    text: "text-[#EA580C]",
    icon: (
      <path d="M3 7h11v7H3V7zm11 2h4l3 3v2h-7V9zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
  {
    slug: "#",
    live: false,
    name: "Field Services",
    blurb: "Bring sales, quoting, service activity, renewals, and customer information together. Reduce manual work and create more consistent processes across teams.",
    color: "#DC2626",
    border: "border-[#DC2626]",
    panelBg: "bg-[#DC2626]/10",
    text: "text-[#DC2626]",
    icon: (
      <path d="M10.6 3.4a2 2 0 012.8 0l1 1 1.6-1.6a1 1 0 011.4 1.4L15.8 5.8l2.4 2.4a2 2 0 010 2.8l-1.6 1.6-6.4-6.4 1.6-1.6-1.2-1.2zM8 8.6l6.4 6.4-5 5a2 2 0 01-2.8 0l-3.6-3.6a2 2 0 010-2.8l5-5z" />
    ),
  },
  {
    slug: "#",
    live: false,
    name: "Education & EdTech",
    blurb: "Manage longer sales cycles, multiple stakeholders, and complex customer journeys with clearer processes, automation, and reporting.",
    color: "#D97706",
    border: "border-[#D97706]",
    panelBg: "bg-[#D97706]/10",
    text: "text-[#D97706]",
    icon: (
      <path d="M12 3L2 8l10 5 8-4v6h2V8L12 3zM6 12.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.8l-6 3-6-3z" />
    ),
  },
];

function CasesLedger() {
  return (
    <section className="border-b-2 border-ink bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <div>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              Experience across <span className="text-fire">industries<span className="text-ink">.</span></span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-ink/70 leading-relaxed">
              We've worked with revenue teams across a range of industries and business models.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind) => {
            const CardInner = (
              <div
                className={`group relative rounded-xl border-2 ${ind.border} bg-paper h-full flex overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              >
                <div className={`w-24 md:w-28 shrink-0 ${ind.panelBg} flex items-center justify-center`}>
                  <svg viewBox="0 0 24 24" className="w-9 h-9" style={{ fill: ind.color }}>{ind.icon}</svg>
                </div>
                <div className="p-6 md:p-7 flex flex-col">
                  <div className="display text-2xl md:text-3xl tracking-[-0.02em] leading-tight text-ink">{ind.name}</div>
                  <p className="mt-3 text-ink/70 leading-relaxed">{ind.blurb}</p>
                  <div className={`mt-6 text-sm font-semibold flex items-center gap-2 ${ind.text}`}>
                    Learn more
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            );
            return ind.live ? (
              <Link key={ind.name} href={ind.slug}>
                {CardInner}
              </Link>
            ) : (
              <a
                key={ind.name}
                href={`mailto:info@revlyn.io?subject=Ask%20about%20${encodeURIComponent(ind.name)}`}
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
              We have run vertical B2B, dev tools, healthtech, logistics. Ask.
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
