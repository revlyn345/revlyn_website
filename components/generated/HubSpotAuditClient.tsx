"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export default function HubSpotAuditClient() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Hero />
      <StuffWeSee />
      <Why />
      <HowItWorks />
      <SurfaceMap />
      <SampleFinding />
      <Deliverable />
      <Who />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────── HERO ─────────────────────── */
function Hero() {
  return (
    <section className="relative border-b border-ink/10 overflow-hidden">
      {/* ambient blooms */}
      <div
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-40 pointer-events-none animate-[revlyn-float_14s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #ffd9cc, transparent 65%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-40 pointer-events-none animate-[revlyn-float_18s_ease-in-out_infinite_reverse]"
        style={{ background: "radial-gradient(circle, #fff59d, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-14 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7" data-reveal>

          <h1 className="display text-[54px] md:text-[92px] leading-[0.9] tracking-[-0.045em]">
            We'll open your HubSpot
            <br />
            and tell you{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic">the truth</span>
              <span
                className="absolute left-0 right-0 bottom-1.5 h-3 -z-0 bg-fire/90"
                style={{ transform: "skewX(-8deg)" }}
              />
            </span>
            <span className="text-fire">.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink/70 max-w-[620px] leading-relaxed">
            You give us a read-only seat. A senior operator spends about 90 minutes inside your
            portal. Three days later, you get a written report about what's actually broken, what
            to fix first, and roughly how long it'll take.
          </p>
          <p className="mt-3 text-[15px] text-ink/55 max-w-[560px]">
            That's it. No demo, no discovery call, no 40-slide deck about "digital transformation."
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <BookCallButton data-magnetic="14"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-6 pr-1.5 py-2 text-[15px] font-medium hover:bg-fire transition-colors">
              Book the audit
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-paper text-ink transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </BookCallButton>
            <a
              href="#how"
              className="text-[15px] text-ink/70 hover:text-ink border-b border-ink/20 hover:border-ink pb-0.5 transition-colors"
            >
              How it works
            </a>
          </div>

          {/* handwritten operator note */}
          <div className="mt-14 max-w-[540px] relative">
            <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-fire/70" />
            <p className="pl-5 text-[15px] text-ink/70 leading-relaxed italic">
              "The first ten portals I opened this year all had the same three problems. None of the
              teams knew. Fixing them is usually a week's work. Finding them is the hard part.
              That's what the audit is for."
            </p>
            <div className="pl-5 mt-3 text-[12px] text-ink/50">
              — Arjun, HubSpot operator since 2016
            </div>
          </div>
        </div>

        <div className="lg:col-span-5" data-reveal data-reveal-delay="0.15">
          <AuditCard />
        </div>
      </div>
    </section>
  );
}

/* Animated report card */
function AuditCard() {
  const rows = [
    { label: "Pipeline hygiene", score: 42, verdict: "needs rehab", tone: "fire" },
    { label: "Contact & company model", score: 61, verdict: "tune", tone: "amber" },
    { label: "Lifecycle stages", score: 28, verdict: "rebuild", tone: "fire" },
    { label: "Automation load", score: 55, verdict: "prune", tone: "amber" },
    { label: "Reporting", score: 37, verdict: "rebuild", tone: "fire" },
    { label: "Data quality", score: 71, verdict: "tune", tone: "volt" },
    { label: "Integrations", score: 66, verdict: "mostly ok", tone: "volt" },
    { label: "AI & Breeze", score: 22, verdict: "not started", tone: "fire" },
  ] as const;

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 rounded-3xl bg-fire/10 blur-2xl" />
      <div className="relative rounded-2xl border-2 border-ink bg-paper shadow-[10px_10px_0_0_rgba(10,10,10,1)] overflow-hidden rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink/15 bg-bone">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-fire" />
              <span className="h-2.5 w-2.5 rounded-full bg-volt" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink" />
            </div>
            <span className="text-[11px] text-ink/60 ml-2">a real portal we looked at last quarter</span>
          </div>
          <span className="text-[10px] text-ink/50">page 1 of 14</span>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[11px] text-ink/50">Overall health</div>
              <div className="display text-5xl leading-none mt-1">
                48<span className="text-2xl text-ink/40">/100</span>
              </div>
              <div className="text-[12px] text-ink/60 mt-1">Series B fintech · 240 users · $18M ARR</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-fire text-paper px-3 py-1 text-[11px] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-paper animate-blink" />
              Fixable in 6 weeks
            </span>
          </div>

          <div className="pt-3 space-y-2">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[1fr_auto] gap-3 items-center">
                <div className="flex-1">
                  <div className="text-[13px] flex items-center justify-between mb-1">
                    <span className="text-ink/80">{r.label}</span>
                    <span className="text-[11px] text-ink/50">{r.score}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${r.score}%`,
                        background:
                          r.tone === "fire"
                            ? "#ff5722"
                            : r.tone === "amber"
                              ? "linear-gradient(90deg,#ff5722,#ffeb3b)"
                              : "#ffeb3b",
                      }}
                    />
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap ${
                    r.tone === "fire"
                      ? "border-fire text-fire"
                      : r.tone === "amber"
                        ? "border-ink/30 text-ink/70"
                        : "border-ink/20 text-ink/60 bg-volt/40"
                  }`}
                >
                  {r.verdict}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-ink/10 bg-bone/60 p-3 flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink text-paper text-[10px]">!</span>
            <div className="text-[12px] leading-snug text-ink/75">
              <span className="font-medium text-ink">The one that's costing them money:</span>{" "}
              their deal stages don't match how sales actually closes, so the forecast has been off
              by roughly a third every quarter this year.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-ink/15 bg-bone/40">
          <span className="text-[11px] text-ink/60">18 fixes, ranked · 3 day turnaround</span>
          <span className="text-[11px] text-fire font-medium">→ full report</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── STUFF WE ACTUALLY SEE (marquee) ─────────────────────── */
function StuffWeSee() {
  const stuff = [
    "94 workflows, 31 of them broken",
    "Two dashboards showing different revenue numbers",
    "MQL definition written down nowhere",
    "6 lifecycle stages, 4 unused",
    "Breeze Copilot bought, 6 people using it",
    "Deal stages that are basically 'in progress' four times",
    "Contacts with 41 custom properties, 3 filled in",
    "Round-robin routing that's been off since March",
    "Reports built by someone who left in 2022",
    "Sync errors nobody's looked at in 90 days",
    "'MQL' meaning something different to marketing and sales",
    "Automation loops that email the same person twice a day",
  ];
  return (
    <section className="relative py-14 border-b border-ink/10 bg-ink text-paper overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
        <span className="text-[12px] text-paper/60">
          Real things we found in portals this quarter. Names removed. Everything else, as-is.
        </span>
      </div>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #0a0a0a, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #0a0a0a, transparent)" }}
        />
        <div className="flex gap-6 animate-[marquee_60s_linear_infinite] whitespace-nowrap">
          {[...stuff, ...stuff].map((s, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 rounded-full border border-paper/15 px-5 py-2.5 hover:border-fire hover:bg-fire/10 transition-colors"
            >
              <span className="text-fire">◆</span>
              <span className="text-[14px] text-paper/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WHY ─────────────────────── */
function Why() {
  const problems = [
    {
      t: "Your forecast is a vibe",
      d: "Deals sit in stages that don't reflect anything real. The CFO stops trusting your number. Then the board does.",
      emoji: "📉",
    },
    {
      t: "Reports contradict each other",
      d: "Marketing says one thing, sales says another. Two dashboards, two truths, one very awkward Tuesday.",
      emoji: "🪞",
    },
    {
      t: "Nobody remembers the automations",
      d: "Someone built 94 workflows in 2022 and left. Now nothing can be touched because who knows what breaks.",
      emoji: "🕸️",
    },
    {
      t: "The data quietly rots",
      d: "Duplicates. Orphan companies. MQLs that were never M or Q. Every rep works around it in their own spreadsheet.",
      emoji: "🥀",
    },
    {
      t: "The AI stuff is decoration",
      d: "You paid for Breeze. Six people have opened it. It's writing emails for pipelines that don't exist.",
      emoji: "🎭",
    },
    {
      t: "Nobody actually operates HubSpot",
      d: "Ops is one person, part-time, drowning. Everyone else uses HubSpot the way you use a printer: with mild dread.",
      emoji: "🫠",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10 bg-bone/40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7" data-reveal>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
              Most portals aren't broken.
              <br />
              They're{" "}
              <span className="relative inline-block">
                <span className="relative z-10">quietly leaking</span>
                <span className="absolute left-0 right-0 bottom-1 h-2 bg-volt/80 -z-0" />
              </span>
              .
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9" data-reveal data-reveal-delay="0.1">
            <p className="text-[16px] text-ink/70 leading-relaxed">
              We've opened enough portals to know the pattern. Six things, more or less, in this
              order. See if any of them sound familiar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
          {problems.map((p, i) => (
            <div
              key={p.t}
              className="group relative rounded-2xl border border-ink/15 bg-paper p-7 hover:border-ink transition-all hover:shadow-[8px_8px_0_0_rgba(10,10,10,1)] hover:-translate-x-1 hover:-translate-y-1 duration-200"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl leading-none">{p.emoji}</span>
                <span className="text-[10px] text-ink/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="display text-2xl leading-tight mb-3">{p.t}</h3>
              <p className="text-[14px] text-ink/65 leading-relaxed">{p.d}</p>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-fire scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-start gap-4 max-w-[720px]" data-reveal>
          <span className="text-2xl mt-0.5">👋</span>
          <p className="text-[15px] text-ink/60 leading-relaxed">
            If two or more of these landed, the audit will pay for itself. And since it's free,
            that's a low bar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── HOW IT WORKS (timeline) ─────────────────────── */
function HowItWorks() {
  const steps = [
    {
      day: "Monday",
      t: "You send us a read-only seat",
      c: "Takes about 4 minutes. We'll walk you through it if you want. Nothing leaves your portal.",
    },
    {
      day: "Tuesday",
      t: "An operator lives in your HubSpot",
      c: "Roughly 90 minutes. Someone senior. Not a checklist app, not an intern, not an AI wrapper trained on Reddit.",
    },
    {
      day: "Wednesday",
      t: "They write it up",
      c: "Findings ranked by what's costing you money. Screenshots. Fix estimates. Written like a human wrote it, because one did.",
    },
    {
      day: "Thursday",
      t: "We talk for 30 minutes",
      c: "Walk you through the top three. Answer the awkward questions. No slides. If you want us to fix it, we'll say so; if you don't, we'll wish you luck.",
    },
  ];

  return (
    <section id="how" className="relative py-24 md:py-32 border-b border-ink/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 max-w-[820px]" data-reveal>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Four days, from{" "}
            <span className="text-ink/40">"here's the seat"</span> to{" "}
            <span className="text-fire">"here's what to fix."</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6" data-stagger>
          <div className="hidden md:block absolute top-[42px] left-[6%] right-[6%] h-px border-t border-dashed border-ink/25" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="flex flex-col items-start">
                <div className="relative z-10 h-[84px] w-[84px] rounded-full border-2 border-ink bg-paper flex items-center justify-center shadow-[4px_4px_0_0_#ff5722] group-hover:shadow-[6px_6px_0_0_#ff5722] transition-shadow">
                  <span className="display text-3xl">{i + 1}</span>
                </div>
                <div className="mt-6">
                  <div className="text-[11px] text-fire mb-2 font-medium tracking-wide uppercase">{s.day}</div>
                  <h3 className="display text-[22px] leading-tight mb-2">{s.t}</h3>
                  <p className="text-[14px] text-ink/65 leading-relaxed">{s.c}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SURFACE MAP (kept, warmed up) ─────────────────────── */
function SurfaceMap() {
  const layers = [
    { n: "01", t: "Objects & properties", c: "The 41 custom fields nobody uses. The 3 that everyone secretly needs." },
    { n: "02", t: "Lifecycle & lead status", c: "Where marketing's story stops matching sales'." },
    { n: "03", t: "Pipelines & deal stages", c: "Whether your forecast is real or performance art." },
    { n: "04", t: "Automation & workflows", c: "The 94 workflows and the 31 doing something they shouldn't." },
    { n: "05", t: "Data quality", c: "Duplicates. Orphans. Contacts owned by people who left in 2023." },
    { n: "06", t: "Reporting & dashboards", c: "Why 'revenue' means three different things on three tabs." },
    { n: "07", t: "Integrations", c: "Salesforce, Slack, calendar, dialer, enrichment. What's actually two-way." },
    { n: "08", t: "AI, Breeze & agents", c: "What Copilot's for, what it's not, and whether anyone is using it." },
  ];

  return (
    <section id="surface" className="relative py-24 md:py-32 border-b border-ink/10 bg-bone/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 grid md:grid-cols-12 gap-8 items-end" data-reveal>
          <h2 className="md:col-span-7 display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Eight layers of HubSpot.
            <br />
            <span className="text-ink/40">We look at all of them.</span>
          </h2>
          <p className="md:col-span-4 md:col-start-9 text-[16px] text-ink/70 leading-relaxed">
            Most audits stop at pipeline and reporting. Those are the loud ones. The quiet ones are
            usually where the money actually is.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 lg:sticky lg:top-24" data-reveal>
            <div className="relative rounded-2xl border-2 border-ink bg-bone p-6 shadow-[10px_10px_0_0_#ff5722]">
              <svg viewBox="0 0 400 480" className="w-full h-auto" data-hero-schematic>
                <defs>
                  <linearGradient id="lg1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff5722" />
                    <stop offset="100%" stopColor="#ffeb3b" />
                  </linearGradient>
                </defs>
                {layers.map((l, i) => {
                  const y = 40 + i * 52;
                  return (
                    <g key={l.n}>
                      <rect x="30" y={y} width="340" height="40" rx="6" fill="#fff" stroke="#0a0a0a" strokeWidth="1.5" data-node />
                      <text x="46" y={y + 25} fontFamily="Inter, sans-serif" fontSize="10" fill="#0a0a0a" opacity="0.4">
                        {l.n}
                      </text>
                      <text x="78" y={y + 25} fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#0a0a0a">
                        {l.t}
                      </text>
                      <circle cx="350" cy={y + 20} r="4" fill="url(#lg1)" data-node />
                    </g>
                  );
                })}
                <line x1="20" y1="60" x2="20" y2="440" stroke="#ff5722" strokeWidth="2" strokeDasharray="4 4" data-draw />
                {layers.map((_, i) => (
                  <line key={i} x1="20" y1={60 + i * 52} x2="30" y2={60 + i * 52} stroke="#0a0a0a" strokeWidth="1.5" data-draw />
                ))}
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-1" data-stagger>
            {layers.map((l) => (
              <div
                key={l.n}
                className="group grid grid-cols-[auto_1fr_auto] gap-4 items-center border-b border-ink/10 py-4 hover:bg-paper/60 px-3 -mx-3 rounded-lg transition-colors"
              >
                <span className="text-[11px] text-fire w-8 font-medium">{l.n}</span>
                <div>
                  <div className="font-medium text-[15px]">{l.t}</div>
                  <div className="text-[13px] text-ink/60 mt-0.5">{l.c}</div>
                </div>
                <span className="text-ink/30 group-hover:text-fire group-hover:translate-x-1 transition-all">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SAMPLE FINDING (single, dramatized) ─────────────────────── */
function SampleFinding() {
  const [tab, setTab] = useState<"before" | "after">("before");
  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14 max-w-[820px]" data-reveal>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Here's a real page from a real report.
          </h2>
          <p className="mt-5 text-[16px] text-ink/60 max-w-[560px]">
            Names redacted, everything else untouched. This is one finding out of eighteen from a
            Series B fintech we audited in March.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-ink bg-paper overflow-hidden shadow-[12px_12px_0_0_#ff5722]" data-reveal>
          {/* header */}
          <div className="grid md:grid-cols-[220px_1fr] border-b-2 border-ink">
            <div className="bg-fire text-paper p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Finding 04 of 18</div>
                <div className="display text-3xl leading-none mt-2">Critical</div>
              </div>
              <div className="text-[12px] opacity-90 mt-6">Pipeline · Forecast integrity</div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="display text-3xl md:text-4xl leading-tight tracking-[-0.02em]">
                Your deal stages describe what your team{" "}
                <span className="italic">does</span>, not what the buyer{" "}
                <span className="italic">commits to.</span>
              </h3>
              <p className="mt-4 text-[15px] text-ink/70 leading-relaxed max-w-[720px]">
                Five of your seven stages are activity-based ("demo booked", "proposal sent"). Only
                two are buyer-commitment-based. That means the forecast is measuring your team's
                effort, not the deal's probability. We ran your last four quarters against it: it's
                off by 31% on average, and always in the same direction.
              </p>
            </div>
          </div>

          {/* before/after */}
          <div className="p-6 md:p-8 bg-bone/40 border-b-2 border-ink">
            <div className="inline-flex rounded-full border border-ink/20 p-1 bg-paper mb-6">
              {(["before", "after"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium capitalize transition-colors ${
                    tab === k ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {k === "before" ? "What we found" : "What we recommended"}
                </button>
              ))}
            </div>

            {tab === "before" ? (
              <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[14px]">
                {[
                  "New (activity)",
                  "Demo Booked (activity)",
                  "Demo Done (activity)",
                  "Proposal Sent (activity)",
                  "Verbal Yes (commitment)",
                  "Contract Out (activity)",
                  "Closed Won (commitment)",
                ].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 border-b border-ink/10 py-2">
                    <span className="text-[11px] text-ink/40 w-5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink/80">{s}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[14px] animate-[fade-in_0.3s_ease-out]">
                {[
                  "Identified fit",
                  "Problem confirmed by buyer",
                  "Champion identified",
                  "Economic buyer engaged",
                  "Verbal yes + close plan",
                  "Contract in signature",
                  "Closed won",
                ].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 border-b border-ink/10 py-2">
                    <span className="text-[11px] text-fire w-5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink/90 font-medium">{s}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-ink/50 mb-2">Impact</div>
              <div className="display text-2xl leading-tight">
                31% forecast drift, every quarter
              </div>
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-ink/50 mb-2">Effort to fix</div>
              <div className="display text-2xl leading-tight">
                Roughly a week of ops time
              </div>
            </div>
            <div className="p-6 bg-volt/30">
              <div className="text-[11px] uppercase tracking-widest text-ink/60 mb-2">Priority</div>
              <div className="display text-2xl leading-tight">
                Do this before Q3 board meeting
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[14px] text-ink/50 max-w-[720px]">
          The full report has seventeen more like this, ranked. You get the whole thing whether or
          not you ever talk to us again.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── DELIVERABLE ─────────────────────── */
function Deliverable() {
  const items = [
    { t: "Health scorecard", c: "One page, eight surfaces, red/amber/green. The one your CFO will screenshot." },
    { t: "Ranked fix list", c: "12–24 things, ordered by what's costing you money vs how hard it is." },
    { t: "Evidence pack", c: "Screenshots, workflow maps, actual report examples. So nobody argues with you." },
    { t: "Data model diagram", c: "The picture of your HubSpot that probably doesn't exist anywhere else." },
    { t: "Workflow ledger", c: "Every active workflow. What it does. Whether it should still exist." },
    { t: "Report dictionary", c: "One page defining what 'revenue' means. Ends the Tuesday arguments." },
    { t: "30-min verdict call", c: "We walk you through it. You ask the awkward questions." },
    { t: "Fix plan, if you want", c: "Costed and scoped. Or use it to brief someone else. Either way." },
  ];

  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7" data-reveal>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
              A document, not a deck.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9" data-reveal data-reveal-delay="0.1">
            <p className="text-[16px] text-ink/70 leading-relaxed">
              Everything below arrives as one PDF plus a shared workspace. Your team can open it and
              start on Monday. Nobody has to sit through a readout to understand it.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" data-stagger>
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group relative border border-ink/15 rounded-2xl p-6 hover:border-ink hover:bg-fire/5 transition-all"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-7 w-7 rounded-full border border-ink/20 group-hover:border-fire group-hover:bg-fire transition-colors flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" className="text-ink/40 group-hover:text-paper transition-colors">
                    <path d="M2 5L4.5 7.5L8 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="font-medium text-[15px] mb-2">{it.t}</h3>
              <p className="text-[13px] text-ink/60 leading-relaxed">{it.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WHO ─────────────────────── */
function Who() {
  const yes = [
    "You've been on HubSpot 6+ months and things feel off",
    "10+ people use the portal every week",
    "Someone senior is quietly frustrated with it",
    "You're on Pro or Enterprise (any hub)",
    "The forecast, the reports, or the automations don't add up",
    "You're thinking about Breeze, Bitscale, or agents",
  ];
  const no = [
    "You bought HubSpot last week",
    "You want a free hour of consulting on something else",
    "You're a HubSpot competitor doing recon (hi 👋)",
    "You have no intention of changing anything, ever",
  ];

  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10 bg-bone/40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14 max-w-[760px]" data-reveal>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Is this for you?{" "}
            <span className="text-ink/40">Probably. Not always.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-stagger>
          <div className="rounded-2xl border-2 border-ink bg-paper p-8 shadow-[8px_8px_0_0_#ffeb3b]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✅</span>
              <h3 className="display text-2xl">Book it</h3>
            </div>
            <ul className="space-y-3">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3 text-[15px] text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fire shrink-0" />
                  {y}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-ink/25 bg-paper/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl grayscale opacity-60">🙅</span>
              <h3 className="display text-2xl text-ink/60">Maybe another time</h3>
            </div>
            <ul className="space-y-3">
              {no.map((n) => (
                <li key={n} className="flex items-start gap-3 text-[15px] text-ink/50">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink/30 shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TESTIMONIAL ─────────────────────── */
function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 bg-fire/40 pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-6" data-reveal>
        <div className="text-[64px] leading-none text-fire mb-2">"</div>
        <p className="display text-3xl md:text-5xl leading-[1.15] tracking-[-0.02em] max-w-[960px]">
          The audit was the first time in three years someone told us the truth about our HubSpot.
          We used their fix list as our Q2 plan. Half of it we did ourselves. The other half we
          asked them to do.
        </p>
        <div className="mt-10 inline-flex items-center gap-4">
          <span className="h-12 w-12 rounded-full bg-ink text-paper flex items-center justify-center display text-lg">
            V
          </span>
          <div>
            <div className="font-medium text-[15px]">VP RevOps, Series B fintech</div>
            <div className="text-[13px] text-ink/50 mt-0.5">240 users on HubSpot · $18M ARR</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
function FAQ() {
  const items = [
    {
      q: "Is it really free? What's the catch?",
      a: "Really free. No card, no trial, no credit toward services. The catch, if there is one: we do about three a month, and roughly one in three of them turns into an ongoing engagement with us. The other two leave with a better portal. Both are fine outcomes.",
    },
    {
      q: "Why do you do it for free, then?",
      a: "Because it's the best sales pitch we can imagine, and because we'd rather show than tell. Also because doing audits keeps us sharp; every portal teaches us something.",
    },
    {
      q: "Who actually does the audit?",
      a: "A senior HubSpot operator with 8+ years on the platform. Human, based in India, has broken enough portals to know where the bodies are buried. Not an intern. Not a checklist app. Not an AI wrapper.",
    },
    {
      q: "How much access do you need?",
      a: "A read-only Super Admin seat. We don't export anything. Notes stay in our internal audit workspace. Once we're done, you revoke the seat and we're gone.",
    },
    {
      q: "What do we need to prepare?",
      a: "Nothing. Grant the seat. Tell us who to bug for 15 minutes if we have a question. That's the whole ask.",
    },
    {
      q: "What if the audit says we're fine?",
      a: "Then you get a very short report saying you're fine, three small improvements you could make anyway, and a coffee on us. That has happened. Not often.",
    },
    {
      q: "Do you sign an NDA?",
      a: "Yes, mutual, before we get access. We'll send ours or sign yours. No drama.",
    },
    {
      q: "Can you also fix what you find?",
      a: "Yes, and we're happy to. But you don't have to use us for it. The report is yours; any competent HubSpot team can execute against it.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10 bg-bone/40">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14 max-w-[760px]" data-reveal>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            The questions{" "}
            <span className="text-ink/40">everyone asks first.</span>
          </h2>
        </div>

        <div className="border-t border-ink/15" data-stagger>
          {items.map((it, i) => (
            <FAQItem key={it.q} i={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ i, q, a }: { i: number; q: string; a: string }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-b border-ink/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full grid grid-cols-[auto_1fr_auto] gap-4 items-center py-5 text-left group"
      >
        <span className="text-[11px] text-fire w-8 font-medium">{String(i + 1).padStart(2, "0")}</span>
        <span className="display text-xl md:text-2xl leading-tight">{q}</span>
        <span
          className={`h-9 w-9 rounded-full border border-ink/20 flex items-center justify-center transition-all ${
            open ? "bg-fire border-fire text-paper rotate-45" : "text-ink/60 group-hover:border-ink"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pl-12 pr-12 text-[15px] text-ink/70 leading-relaxed max-w-[820px]">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── FINAL CTA ─────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-28 md:py-40 border-b border-ink/10 bg-ink text-paper overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(255,87,34,0.25), transparent 60%)`,
        }}
      />
      <div aria-hidden className="absolute -top-10 -left-10 w-[70%] h-24 bg-volt/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-10 -right-10 w-[70%] h-24 bg-fire/40 blur-3xl" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8" data-reveal>
            <h2 className="display text-5xl md:text-8xl leading-[0.88] tracking-[-0.045em]">
              Let us open your portal.
              <br />
              <span className="text-paper/40">Four days later, </span>
              <span className="italic">you'll know.</span>
            </h2>
            <p className="mt-8 text-lg text-paper/70 max-w-[560px]">
              Free. No card. No pitch. Just a senior operator, your HubSpot, and a report your team
              can act on before the week is out.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3" data-reveal data-reveal-delay="0.15">
            <BookCallButton data-magnetic="16"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-fire text-paper px-6 py-5 hover:bg-volt hover:text-ink transition-colors"
            >
              <span>
                <span className="text-[11px] opacity-80 block mb-1">Do the thing</span>
                <span className="display text-2xl">Book my audit</span>
              </span>
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-paper text-ink group-hover:translate-x-1 transition-transform">
                →
              </span>
            </BookCallButton>
            <a
              href="mailto:info@revlyn.io?subject=HubSpot%20Audit"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-paper/25 px-6 py-5 hover:border-fire hover:bg-paper/5 transition-colors"
            >
              <span>
                <span className="text-[11px] text-paper/60 block mb-1">Or, quieter</span>
                <span className="display text-xl text-paper">Email an operator</span>
              </span>
              <span className="text-paper/60 group-hover:text-fire group-hover:translate-x-1 transition-all">→</span>
            </a>
            <Link
              href="/hubspot-as-a-service"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-paper/15 px-6 py-4 hover:border-paper/50 transition-colors"
            >
              <span className="text-sm text-paper/70">Want us there every week?</span>
              <span className="text-fire text-sm group-hover:translate-x-1 transition-transform">HaaS →</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────── MINI FOOTER ─────────────────────── */
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
