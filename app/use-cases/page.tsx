import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { BookAuditButton } from "@/components/BookAuditButton";

export const metadata: Metadata = {
  title: "Use Cases · Revlyn",
  description: "The revenue problems Revlyn takes ownership of: a messy CRM, a pipeline nobody trusts, manual work, disconnected systems, AI that isn't live, and execution nobody owns.",
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Hero />
      <RhythmStrip />
      <RevenueLedger />
      <SymptomToSystem />
      <OperatingSystem />
      <StartingPoint />
      <WeekInside />
      <FitCheck />
      <FinalCta />
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
              Every revenue team has a different mess. A HubSpot that grew faster than the process.
              A pipeline nobody trusts anymore. Manual work stacking up between tools. The mess
              changes. The operating system underneath it doesn&rsquo;t: monthly build, weekly
              cadence, one system of record, senior operators on keys.
            </p>
          </div>

          {/* Right plaque: revenue-ledger index */}
          <div className="lg:col-span-4">
            <div className="brutal-border bg-volt p-5 shadow-[10px_10px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-5">
                <span className="border border-ink bg-paper px-2 py-0.5">Index · Problems</span>
                <span>Rev. Today</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-ink bg-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60">Mapped</div>
                  <div className="display text-5xl leading-none mt-2">06</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink/70 mt-2">Problems</div>
                </div>
                <div className="border-2 border-ink bg-ink text-paper p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/60">Entry points</div>
                  <div className="display text-5xl leading-none mt-2">06</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/70 mt-2">Services</div>
                </div>
              </div>
              <div className="mt-4 border-2 border-ink bg-paper p-3 flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-ink/60">Same rhythm</span>
                <span className="text-fire font-bold">Every time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-14 border-t-2 border-ink pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mono text-[11px] uppercase tracking-[0.22em]">
          <div><div className="text-ink/50">Signal</div><div className="text-ink mt-1">Field-tested, not case-studied</div></div>
          <div><div className="text-ink/50">Written by</div><div className="text-ink mt-1">The operator who ran it</div></div>
          <div><div className="text-ink/50">Refresh</div><div className="text-ink mt-1">Quarterly, when the mess changes</div></div>
          <div><div className="text-ink/50">Don&rsquo;t see yours?</div><div className="text-ink mt-1">Ask. We probably ran it.</div></div>
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
              What every problem shares
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-2xl">
              Four beats that don&rsquo;t change,<br />
              <span className="text-paper/60">no matter the problem.</span>
            </h2>
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

/* ── REVENUE LEDGER: 6 revenue-problem cards, not industries ────────
   Replaces the old industry grid. The homepage already covers
   industries; this page is organized by revenue PROBLEM instead,
   each one mapped to what Revlyn actually does about it and where
   to start.
   ──────────────────────────────────────────────────────────────── */
type Problem = {
  code: string;
  title: string;
  quote: string;
  symptoms: string[];
  handles: string[];
  startLabel: string;
  startHref: string;
  color: string;
  iconBg: string;
  icon: ReactNode;
};

const PROBLEMS: Problem[] = [
  {
    code: "01",
    title: "CRM is getting in the way",
    quote: "Your HubSpot grew faster than your process.",
    symptoms: ["Messy CRM architecture", "Duplicate records", "Confusing lifecycle stages", "Broken pipelines", "Poor governance"],
    handles: ["CRM architecture", "Data cleanup", "Lifecycle design", "Pipeline structure", "Permissions & governance"],
    startLabel: "HubSpot Audit → Optimization",
    startHref: "/hubspot-audit",
    color: "#16A34A",
    iconBg: "rgba(22, 163, 74, 0.12)",
    icon: <path d="M4 5h16v10H4V5zm0 12h16v2H4v-2zm5-9h6v1H9V8z" />,
  },
  {
    code: "02",
    title: "Your pipeline doesn't tell the truth",
    quote: "The numbers exist. The answer doesn't.",
    symptoms: ["Inconsistent pipeline stages", "Unreliable forecasts", "Disconnected dashboards", "Unclear deal ownership"],
    handles: ["Pipeline design", "Forecasting", "Revenue reporting", "Attribution", "Executive dashboards"],
    startLabel: "RevOps → Reporting → Optimization",
    startHref: "/hubspot-optimization",
    color: "#7C3AED",
    iconBg: "rgba(124, 58, 237, 0.12)",
    icon: <path d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20V13h3v7h-3z" />,
  },
  {
    code: "03",
    title: "Too much work happens manually",
    quote: "Your team is operating between tools.",
    symptoms: ["Manual lead handoffs", "No SLA enforcement", "Copy-paste between systems", "Alerts nobody sees"],
    handles: ["Lead routing", "Workflow automation", "Enrichment", "SLA automation", "Slack/email alerts", "Cross-system workflows"],
    startLabel: "Automation → HubSpot as a Service",
    startHref: "/hubspot-as-a-service",
    color: "#2563EB",
    iconBg: "rgba(37, 99, 235, 0.12)",
    icon: <path d="M19.14 12.94a7.14 7.14 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.3 7.3 0 00-1.63-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.14.56-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.7 8.84a.5.5 0 00.12.64l2.03 1.58a7.14 7.14 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.92 3.32c.14.24.42.32.6.22l2.39-.96c.49.38 1.04.7 1.63.94l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54c.59-.24 1.14-.56 1.63-.94l2.39.96c.24.1.5 0 .6-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />,
  },
  {
    code: "04",
    title: "Your GTM systems don't talk",
    quote: "HubSpot isn't the problem. The gaps around it are.",
    symptoms: ["CRM and warehouse disagree", "Product signals never reach sales", "Billing data lives alone", "Sync breaks silently"],
    handles: ["CRM integrations", "Warehouse connections", "Product signals", "Billing data", "Data synchronization", "Revenue architecture"],
    startLabel: "Implementation → Integration → RevOps",
    startHref: "/hubspot-implementation",
    color: "#EA580C",
    iconBg: "rgba(234, 88, 12, 0.12)",
    icon: <path d="M3 7h11v7H3V7zm11 2h4l3 3v2h-7V9zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
  },
  {
    code: "05",
    title: "You know AI matters. Nothing is live.",
    quote: "You've tested AI. Now make it part of the workflow.",
    symptoms: ["Pilot never left the sandbox", "No connection to CRM data", "Nobody owns the maintenance"],
    handles: ["Lead intelligence", "Call intelligence", "Pipeline intelligence", "Agent workflows"],
    startLabel: "AI Infrastructure → Automation → RevOps",
    startHref: "/contact",
    color: "#DC2626",
    iconBg: "rgba(220, 38, 38, 0.12)",
    icon: <path d="M12 2a1 1 0 011 1v2.06a5.5 5.5 0 013.94 3.94H19a1 1 0 010 2h-2.06a5.5 5.5 0 01-3.94 3.94V17a1 1 0 01-2 0v-2.06a5.5 5.5 0 01-3.94-3.94H5a1 1 0 010-2h2.06A5.5 5.5 0 0111 5.06V3a1 1 0 011-1zm0 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />,
  },
  {
    code: "06",
    title: "You don't need another consultant",
    quote: "The strategy exists. The execution doesn't.",
    symptoms: ["Roadmap written, nothing shipped", "One part-time owner, drowning", "Requests pile up, nothing lands"],
    handles: ["Monthly roadmap", "Weekly execution", "CRM administration", "Automation", "Reporting", "RevOps execution", "Continuous optimization"],
    startLabel: "HubSpot as a Service",
    startHref: "/hubspot-as-a-service",
    color: "#D97706",
    iconBg: "rgba(217, 119, 6, 0.12)",
    icon: <path d="M9 3h6a1 1 0 011 1v2h4a1 1 0 011 1v3H3V7a1 1 0 011-1h4V4a1 1 0 011-1zm0 3h6V5H9v1zM3 12h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7z" />,
  },
];

function RevenueLedger() {
  return (
    <section className="border-b-2 border-ink bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              The Revenue Ledger
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              Pick the problem that looks <span className="text-fire">most like yours<span className="text-ink">.</span></span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROBLEMS.map((p) => (
            <Link key={p.code} href={p.startHref} className="block">
              <div
                className="group relative rounded-2xl border-2 bg-paper h-full flex overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)] cursor-pointer"
                style={{ borderColor: p.color }}
              >
                <div
                  className="w-24 md:w-28 shrink-0 flex flex-col items-center justify-center gap-2"
                  style={{ background: p.iconBg }}
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9" style={{ fill: p.color }}>
                    {p.icon}
                  </svg>
                  <span className="mono text-[10px] font-bold tracking-[0.22em]" style={{ color: p.color }}>
                    {p.code}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex-1 min-w-0 flex flex-col">
                  <div className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight text-ink uppercase">
                    {p.title}
                  </div>
                  <p className="mt-2 text-[14px] italic text-ink/60 leading-relaxed">&ldquo;{p.quote}&rdquo;</p>

                  <div className="mt-4">
                    <p className="mono text-[9px] uppercase tracking-[0.18em] text-ink/40 mb-1.5">Symptoms</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {p.symptoms.map((s) => (
                        <li key={s} className="text-[11px] text-ink/60 border border-ink/15 rounded-full px-2 py-0.5">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="mono text-[9px] uppercase tracking-[0.18em] text-ink/40 mb-1.5">Revlyn handles</p>
                    <ul className="space-y-1">
                      {p.handles.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[12.5px] text-ink/70">
                          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between gap-3">
                    <span className="mono text-[10px] uppercase tracking-[0.16em] text-ink/45">{p.startLabel}</span>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: p.color }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 brutal-border bg-ink text-paper p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-2">
              Don&rsquo;t see it here?
            </p>
            <p className="display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-xl">
              Most revenue problems fit one of these six. If yours doesn&rsquo;t, tell us anyway.
            </p>
          </div>
          <a
            href="mailto:info@revlyn.io?subject=A%20problem%20not%20on%20the%20ledger"
            className="inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-5 py-3 mono text-xs uppercase tracking-[0.22em] hover:bg-paper hover:text-ink hover:border-paper transition-colors self-start"
          >
            Tell us what&rsquo;s broken <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── SYMPTOM → SYSTEM ─────────────────────────────────────────────── */
function SymptomToSystem() {
  const rows = [
    {
      symptom: "Leads are falling through the cracks.",
      problem: "Routing is inconsistent.",
      builds: "ICP scoring + ownership rules + SLA automation.",
      result: "Every qualified lead reaches the right owner automatically.",
    },
    {
      symptom: "Forecasts change every Monday.",
      problem: "Pipeline stages don't have consistent exit criteria.",
      builds: "Pipeline architecture + deal governance + reporting.",
      result: "One forecast model everyone works from.",
    },
    {
      symptom: "We have an AI initiative.",
      problem: "AI isn't connected to revenue data or workflows.",
      builds: "Data → intelligence → action → CRM.",
      result: "AI becomes part of the operating system.",
    },
  ];
  const cols = ["Symptom", "Actual problem", "Revlyn builds", "Result"];

  return (
    <section className="border-b-2 border-ink bg-bone/40 relative">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        
        <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
          From symptom to system.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/70 leading-relaxed">
          Most revenue problems don&rsquo;t start as technology problems. They show up as symptoms
          first.
        </p>

        <div className="mt-14 space-y-3">
          {rows.map((r) => (
            <div key={r.symptom} className="border-2 border-ink bg-paper">
              <div className="hidden md:grid md:grid-cols-4 border-b-2 border-ink bg-ink text-paper">
                {cols.map((c) => (
                  <div key={c} className="mono text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border-l-2 border-paper/15 first:border-l-0">
                    {c}
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink/15">
                <div className="p-5 md:p-6">
                  <span className="md:hidden mono text-[9px] uppercase tracking-[0.2em] text-ink/40 block mb-2">Symptom</span>
                  <p className="display text-lg md:text-xl leading-tight">{r.symptom}</p>
                </div>
                <div className="p-5 md:p-6 bg-bone/50">
                  <span className="md:hidden mono text-[9px] uppercase tracking-[0.2em] text-ink/40 block mb-2">Actual problem</span>
                  <p className="text-[15px] text-ink/75 leading-relaxed">{r.problem}</p>
                </div>
                <div className="p-5 md:p-6">
                  <span className="md:hidden mono text-[9px] uppercase tracking-[0.2em] text-ink/40 block mb-2">Revlyn builds</span>
                  <p className="text-[15px] text-ink/75 leading-relaxed">{r.builds}</p>
                </div>
                <div className="p-5 md:p-6 bg-volt/20">
                  <span className="md:hidden mono text-[9px] uppercase tracking-[0.2em] text-ink/40 block mb-2">Result</span>
                  <p className="text-[15px] font-medium text-ink leading-relaxed">{r.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── THE OPERATING SYSTEM: black section, connected layers ──────────
   Six layers connected left to right, communicating that Revlyn
   treats HubSpot, data, process, automation, AI and reporting as
   one connected system rather than six separate services.
   ──────────────────────────────────────────────────────────────── */
function OperatingSystem() {
  const layers = [
    { t: "HubSpot", d: "One source of truth." },
    { t: "Data", d: "Clean, structured and trustworthy." },
    { t: "Process", d: "Clear stages, ownership and handoffs." },
    { t: "Automation", d: "Less manual work." },
    { t: "AI", d: "Intelligence inside the workflow." },
    { t: "Reporting", d: "Decisions based on the same numbers." },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        
        <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-2xl">
          Different problem.<br />
          <span className="text-paper/60">Same operating system.</span>
        </h2>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-[26px] left-[4%] right-[4%] h-px bg-paper/20" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
            {layers.map((l, i) => (
              <div key={l.t} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 h-[52px] w-[52px] rounded-full border-2 border-fire bg-ink flex items-center justify-center display text-sm mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-lg tracking-[-0.01em]">{l.t}</h3>
                <p className="mt-2 text-[13px] text-paper/60 leading-relaxed">{l.d}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 max-w-2xl text-[15px] text-paper/60 leading-relaxed border-t border-paper/15 pt-8">
          We don&rsquo;t sell these as six separate services. They&rsquo;re one system. Fixing the CRM
          without fixing the process just moves the mess somewhere else.
        </p>
      </div>
    </section>
  );
}

/* ── CHOOSE YOUR STARTING POINT ───────────────────────────────────── */
type StartCard = { t: string; d: string; href: string };
const START_CARDS: StartCard[] = [
  { t: "HubSpot Audit", d: "We don't know what's wrong.", href: "/hubspot-audit" },
  { t: "Implementation", d: "We're building HubSpot properly.", href: "/hubspot-implementation" },
  { t: "Optimization", d: "Our existing portal is messy.", href: "/hubspot-optimization" },
  { t: "HubSpot as a Service", d: "We need someone to run it.", href: "/hubspot-as-a-service" },
  { t: "RevOps", d: "Our revenue operation is disconnected.", href: "/contact" },
  { t: "AI Infrastructure", d: "We want AI inside the workflow.", href: "/contact" },
];

function StartingPoint() {
  return (
    <section id="start" className="border-b-2 border-ink bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        
        <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-2xl mb-12">
          Where should we start?
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {START_CARDS.map((c) => (
            <Link
              key={c.t}
              href={c.href}
              className="group flex flex-col justify-between border-2 border-ink p-6 min-h-[140px] transition-colors hover:bg-bone/50"
            >
              <div>
                <h3 className="display text-xl tracking-[-0.01em]">{c.t}</h3>
                <p className="mt-2 text-[14px] text-ink/60 leading-relaxed">&ldquo;{c.d}&rdquo;</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-fire text-sm font-semibold">
                Go there
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── A WEEK INSIDE REVLYN ─────────────────────────────────────────── */
function WeekInside() {
  const days = [
    { d: "Monday", t: "Prioritize", s: "What matters this week?" },
    { d: "Tuesday", t: "Build", s: "Workflows, CRM, data, dashboards." },
    { d: "Wednesday", t: "Ship", s: "Changes go live." },
    { d: "Thursday", t: "Measure", s: "What changed?" },
    { d: "Friday", t: "Review", s: "What do we fix next?" },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 relative">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <div>
            
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-2xl">
              A week inside the system.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-0 border-2 border-paper/20">
          {days.map((d, i) => (
            <div
              key={d.d}
              className={`p-6 md:p-7 ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-paper/20" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire">{d.d}</span>
                <span className="h-px w-8 bg-paper/30" />
              </div>
              <div className="display text-xl tracking-[-0.02em] leading-tight">{d.t}</div>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{d.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FIT CHECK: for people who don't know where to start ─────────── */
function FitCheck() {
  const links = [
    { t: "My HubSpot is messy", href: "/hubspot-audit" },
    { t: "My revenue process is messy", href: "/hubspot-audit" },
    { t: "I want to automate / add AI", href: "/hubspot-audit" },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone/40 relative">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 relative">
        
        <h2 className="display text-3xl md:text-4xl tracking-[-0.035em] leading-[0.98] max-w-2xl">
          You don&rsquo;t need to know the answer yet.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink/70 leading-relaxed">
          Tell us what&rsquo;s broken. We&rsquo;ll figure out where to start.
        </p>

        <div className="mt-10 border-t-2 border-ink">
          {links.map((l) => (
            <Link
              key={l.t}
              href={l.href}
              className="group flex items-center justify-between gap-4 border-b-2 border-ink py-6 transition-colors hover:bg-paper/60"
            >
              <span className="display text-xl md:text-2xl tracking-[-0.02em] uppercase">{l.t}</span>
              <span className="text-fire text-2xl shrink-0 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ────────────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <h2 className="display text-4xl md:text-7xl leading-[0.95] tracking-[-0.04em] max-w-4xl">
          Your revenue system
          <br />
          doesn&rsquo;t need another tool.
          <br />
          <span className="text-fire">It needs to work.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-paper/70 leading-relaxed">
          Tell us where the system is breaking. We&rsquo;ll show you what we&rsquo;d change.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <BookAuditButton
            className="inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-6 py-4 mono text-sm uppercase tracking-[0.2em] hover:bg-volt hover:text-ink hover:border-volt transition-colors"
          >
            Book a diagnostic call <span>→</span>
          </BookAuditButton>
          <Link
            href="/hubspot-audit"
            className="inline-flex items-center gap-2 border-2 border-paper/30 px-6 py-4 mono text-sm uppercase tracking-[0.2em] hover:border-paper hover:bg-paper/5 transition-colors"
          >
            Explore HubSpot Audit <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
