import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
import { BookAuditButton } from "@/components/BookAuditButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HubSpot Sales Hub Implementation",
  description:
    "Sales Hub built the way reps actually sell: honest pipeline stages, sequences that respect the buyer, a forecast the CRO can defend, and reporting that ends the Monday argument.",
  alternates: { canonical: "/hubspot-implementation/sales-hub" },
  openGraph: {
    title: "HubSpot Sales Hub Implementation · Revlyn",
    description:
      "Pipeline, sequences, routing, forecasting, quotes, and coaching. Wired end-to-end in 4-6 weeks with a Slack channel to the operator who built it.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ─────────────────────────────────────────────────────────────
   Images — dashboards, data, tooling. No stock people.
   ───────────────────────────────────────────────────────────── */
const IMAGES = {
  mondayReview:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  pipelineChaos:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  pipelineOrder:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  cadenceHeader:
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
  forecastBefore:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
  forecastAfter:
    "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=900&q=80",
  ctaBg:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",

  // Capability cards — dashboards & data
  quoting:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
  scorecard:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=80",
  modules:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  plan:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1000&q=80",
  artifacts:
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
  integrations:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
};

/* ─────────────────────────────────────────────────────────────
   Primitives
   ───────────────────────────────────────────────────────────── */

function Tag({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "fire" | "cream";
}) {
  const map: Record<string, string> = {
    ink: "bg-ink text-paper border-ink",
    fire: "bg-fire text-paper border-fire",
    cream: "bg-cream text-ink border-ink/30",
  };
  return (
    <span
      className={`mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border-2 ${map[tone]}`}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO · pipeline card — rebalanced colors (fire only on Closed)
   ───────────────────────────────────────────────────────────── */

function HeroPipeline() {
  const stages = [
    { n: "01", name: "New", exit: "form filled", accent: "ink" as const },
    { n: "02", name: "Qualified", exit: "meeting booked", accent: "ink" as const },
    { n: "03", name: "Demo", exit: "demo delivered", accent: "ink" as const },
    { n: "04", name: "Proposal", exit: "quote sent", accent: "ink" as const },
    { n: "05", name: "Closed", exit: "signed order", accent: "fire" as const },
  ];

  return (
    <div className="relative rounded-2xl border-2 border-ink/30 bg-white overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
      <div className="px-6 md:px-7 py-5 border-b-2 border-ink/15 flex items-center justify-between gap-4 bg-white">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-fire" />
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
            Pipeline model
          </span>
        </div>
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
          5 stages · exit-gated
        </span>
      </div>

      <ul className="p-6 md:p-7 space-y-2.5">
        {stages.map((s) => {
          const isFire = s.accent === "fire";
          return (
            <li
              key={s.n}
              className={`group flex items-center gap-4 rounded-xl border-2 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
                isFire
                  ? "border-fire/50 bg-fire/[0.04] hover:border-fire"
                  : "border-ink/15 bg-cream hover:bg-white hover:border-ink/35"
              }`}
            >
              <div
                className={`h-9 w-9 shrink-0 rounded-lg flex items-center justify-center font-display font-bold text-[13px] ${
                  isFire ? "bg-fire text-paper" : "bg-ink/85 text-paper"
                }`}
              >
                {s.n}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-[15px] tracking-[-0.01em] text-ink leading-tight">
                  {s.name}
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.18em] text-ink/55 mt-1">
                  Exit · {s.exit}
                </div>
              </div>

              <span
                className={`hidden sm:inline-block mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${
                  isFire
                    ? "bg-fire/10 text-fire border-fire/40"
                    : "bg-ink/5 text-ink/55 border-ink/20"
                }`}
              >
                {isFire ? "Closed" : "Gated"}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="border-t-2 border-ink/15 grid grid-cols-3 divide-x-2 divide-ink/15 bg-cream">
        {[
          { k: "5", v: "Stages" },
          { k: "5", v: "Exit rules" },
          { k: "1", v: "Owner / deal" },
        ].map((x) => (
          <div key={x.v} className="px-5 py-4 text-center">
            <div className="font-display font-bold text-2xl leading-none tracking-[-0.02em] text-ink">
              {x.k}
            </div>
            <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/55 mt-2">
              {x.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter Header (unchanged)
   ───────────────────────────────────────────────────────────── */

function Chapter({
  num,
  kicker,
  title,
  lede,
  dark = false,
}: {
  num: string;
  kicker: string;
  title: string;
  lede?: string;
  dark?: boolean;
}) {
  const textColor = dark ? "text-paper" : "text-ink";
  const mutedColor = dark ? "text-paper/60" : "text-ink/60";
  const ledeColor = dark ? "text-paper/70" : "text-ink/70";

  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start">
      <div className={`mono text-[11px] uppercase tracking-[0.22em] ${mutedColor}`}>
        <div
          className={`font-display font-bold text-6xl md:text-7xl leading-[1.15] tracking-[-0.04em] ${textColor}`}
        >
          {num}
        </div>
        <div className="mt-3">{kicker}</div>
      </div>

      <div className="min-w-0 overflow-visible">
        <h2
          className={`font-display font-bold text-[clamp(2rem,4.8vw,3.75rem)] tracking-[-0.035em] leading-[1.15] ${textColor} break-words overflow-visible pb-1`}
        >
          {title}
        </h2>
        {lede && (
          <p className={`mt-5 max-w-[640px] text-lg leading-relaxed ${ledeColor}`}>
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 01 · Forecast vs Reality
   ───────────────────────────────────────────────────────────── */

function ForecastVsReality() {
  return (
    <div className="rounded-2xl border-2 border-ink/25 bg-white relative overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            Monday 09:14 · CRO&rsquo;s office
          </div>
          <Tag tone="fire">Before</Tag>
        </div>

        <div className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[640px]">
          &ldquo;We committed 4.2. We closed 2.6. Nobody can tell me why.&rdquo;
        </div>

        <svg
          viewBox="0 0 520 220"
          className="w-full mt-8 h-[220px] md:h-[260px]"
          aria-hidden
        >
          <line x1="30" y1="10" x2="30" y2="190" stroke="#0a0a0a" strokeWidth="2" />
          <line x1="30" y1="190" x2="510" y2="190" stroke="#0a0a0a" strokeWidth="2" />
          <path
            d="M30 150 Q 140 60, 260 90 T 500 40"
            stroke="#0a0a0a"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M30 160 L 100 180 L 170 155 L 240 175 L 310 145 L 380 165 L 450 160 L 500 150"
            stroke="#ff5533"
            strokeWidth="3"
            fill="none"
          />
          {[100, 240, 380].map((x, i) => (
            <g key={i}>
              <line
                x1={x}
                x2={x}
                y1="70"
                y2="175"
                stroke="#0a0a0a"
                strokeOpacity="0.4"
                strokeDasharray="2 3"
              />
              <text
                x={x + 6}
                y={80}
                fontSize="9"
                fontFamily="ui-monospace, monospace"
                fill="#0a0a0a"
                fillOpacity="0.7"
              >
                gap
              </text>
            </g>
          ))}
          <g transform="translate(340, 15)">
            <line
              x1="0"
              x2="24"
              y1="0"
              y2="0"
              stroke="#0a0a0a"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <text x="30" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              commit
            </text>
            <line x1="90" x2="114" y1="0" y2="0" stroke="#ff5533" strokeWidth="3" />
            <text x="120" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              reality
            </text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Reps grade their own deals",
            "Stage means 'how the rep felt on Friday'",
            "Nobody logs the meetings that mattered",
          ].map((t) => (
            <div key={t} className="rounded-xl border-2 border-ink/20 bg-cream p-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-2 font-semibold">
                Symptom
              </div>
              <div className="text-[14px] text-ink/80 leading-relaxed">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 02 · Pipeline before/after
   ───────────────────────────────────────────────────────────── */

function PipelineBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* BEFORE */}
      <div className="group relative rounded-2xl border-2 border-ink/40 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)]">
        <div className="relative h-44 overflow-hidden border-b-2 border-ink/20">
          <Image
            src={IMAGES.pipelineChaos}
            alt="Disorganized spreadsheet and scattered paperwork"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="p-8 md:p-10">
          <h3 className="font-display font-bold text-[clamp(1.75rem,3vw,2.25rem)] tracking-[-0.03em] leading-[1.02] text-ink">
            Stages as <span className="text-ink/45">feelings.</span>
          </h3>
          <p className="mt-5 text-[15px] text-ink/70 leading-relaxed max-w-md">
            Every rep interprets these differently. The stage means something
            different depending on who you ask, and nothing about the deal
            actually moves.
          </p>
          <ul className="mt-8 space-y-2.5">
            {["Interested?", "Warm-ish", "Should close soon", "Verbal", "Legal"].map(
              (stage, i) => (
                <li
                  key={stage}
                  className="flex items-center gap-4 rounded-xl border-2 border-ink/25 bg-cream px-4 py-3.5"
                >
                  <span className="mono text-[11px] text-ink/55 tabular-nums font-semibold w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-ink/55 line-through decoration-ink/40 decoration-2">
                    {stage}
                  </span>
                </li>
              ),
            )}
          </ul>
          <div className="mt-9 pt-6 border-t-2 border-ink/20">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 leading-relaxed font-semibold">
              Nothing is provable. Forecast is a guess.
            </p>
          </div>
        </div>
      </div>

      {/* AFTER */}
      <div className="group relative rounded-2xl border-2 border-fire bg-fire/[0.06] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(255,85,51,0.5)]">
        <div className="relative h-44 overflow-hidden border-b-2 border-fire/30">
          <Image
            src={IMAGES.pipelineOrder}
            alt="Clean analytics dashboard showing a structured pipeline"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-fire/20" />
        </div>

        <div className="p-8 md:p-10">
          <h3 className="font-display font-bold text-[clamp(1.75rem,3vw,2.25rem)] tracking-[-0.03em] leading-[1.02] text-ink">
            Stages as <span className="text-fire">evidence.</span>
          </h3>
          <p className="mt-5 text-[15px] text-ink/75 leading-relaxed max-w-md">
            Every stage has an exit criterion that a signal in HubSpot can
            prove. If the evidence is not there, the deal does not move.
          </p>
          <ul className="mt-8 space-y-2.5">
            {[
              { t: "Discovery booked", e: "Meeting + notes" },
              { t: "Problem confirmed", e: "Champion + pain" },
              { t: "Demo delivered", e: "Recording + step" },
              { t: "Proposal live", e: "Quote + receipt" },
              { t: "Verbal", e: "Date + contact" },
            ].map((item, i) => (
              <li
                key={item.t}
                className="flex items-center gap-4 rounded-xl border-2 border-fire/40 bg-white px-4 py-3.5"
              >
                <span className="mono text-[11px] text-fire tabular-nums font-semibold w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] font-semibold text-ink truncate">
                  {item.t}
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.16em] text-fire bg-fire/10 border-2 border-fire/40 rounded-full px-2.5 py-1 whitespace-nowrap shrink-0 font-semibold">
                  {item.e}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-9 pt-6 border-t-2 border-fire/40">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire leading-relaxed font-semibold">
              Auto-enforced from meeting, email, and document signals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 03 · Cadence timeline
   ───────────────────────────────────────────────────────────── */

function CadenceTimeline() {
  const touches = [
    { day: 1, ch: "Email", label: "Warm intro, one CTA", tone: "ink" },
    { day: 2, ch: "LinkedIn", label: "Connect + note", tone: "ink" },
    { day: 4, ch: "Call", label: "Voicemail + text", tone: "fire" },
    { day: 6, ch: "Email", label: "Case study, no ask", tone: "ink" },
    { day: 9, ch: "LinkedIn", label: "Comment on their post", tone: "ink" },
    { day: 11, ch: "Call", label: "2nd attempt", tone: "fire" },
    { day: 14, ch: "Email", label: "Break-up, clean exit", tone: "ink" },
  ] as const;

  return (
    <div className="rounded-2xl border-2 border-ink/25 bg-white overflow-hidden relative">
      <div className="relative h-48 md:h-56 overflow-hidden border-b-2 border-ink/20">
        <Image
          src={IMAGES.cadenceHeader}
          alt="Laptop showing an email inbox with an outbound sequence running"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <div className="absolute inset-0 flex items-center px-6 md:px-10">
          <div className="max-w-md">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire font-semibold mb-2">
              Sequence.outbound / 14-day
            </div>
            <div className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] text-paper leading-tight">
              Cadence, done right.
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            7 touches · 3 channels
          </div>
          <Tag tone="fire">14-day sequence</Tag>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 h-[2px] bg-ink/30" />
          <div className="grid grid-cols-2 md:grid-cols-7 gap-3 relative">
            {touches.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mono text-[10px] text-ink/55 mb-2 tracking-[0.22em] font-semibold">
                  D{t.day}
                </div>
                <div
                  className={`h-6 w-6 rounded-full border-2 border-ink/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.2)] ${
                    t.tone === "fire" ? "bg-fire" : "bg-ink"
                  }`}
                />
                <div className="mono text-[10px] uppercase tracking-[0.18em] mt-3 text-ink/70 font-semibold">
                  {t.ch}
                </div>
                <div className="text-[11.5px] text-ink/65 text-center mt-1 leading-tight max-w-[90px]">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-3">
          {[
            { k: "If reply", v: "Auto-pause → route to owner in 60s", accent: "fire" },
            { k: "If open 3×", v: "Trigger call task + Slack ping", accent: "fire" },
            { k: "If silent", v: "Move to nurture, no more cold touches", accent: "ink" },
          ].map((r) => (
            <div key={r.k} className="rounded-xl border-2 border-ink/20 bg-cream p-4">
              <div
                className={`mono text-[10px] uppercase tracking-[0.22em] mb-2 font-semibold ${
                  r.accent === "fire" ? "text-fire" : "text-ink/60"
                }`}
              >
                {r.k}
              </div>
              <div className="text-[13.5px] text-ink/80 leading-relaxed">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 04 · Routing waterfall (unchanged)
   ───────────────────────────────────────────────────────────── */

function RoutingWaterfall() {
  return (
    <div className="rounded-2xl border-2 border-ink/30 bg-white overflow-hidden shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
      <div className="px-6 md:px-8 py-5 border-b-2 border-ink/20 bg-cream flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 font-semibold">
            Lead.routing · live
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            00:00:00 → 00:00:47
          </span>
        </div>
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-fire bg-fire/10 border-2 border-fire/40 rounded-full px-2.5 py-1 font-semibold">
          Target · 60s
        </span>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-center">
        <div className="space-y-3">
          <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50 px-1 font-semibold">
            Inbound
          </div>
          <div className="rounded-xl border-2 border-ink/30 bg-ink text-paper px-4 py-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fire" />
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                New lead
              </span>
            </div>
            <div className="mt-2.5 font-display font-bold text-[16px] tracking-[-0.01em] text-paper">
              Form submitted
            </div>
            <div className="mt-1.5 text-[11.5px] text-paper/70 leading-relaxed">
              via pricing page
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center px-2">
          <svg viewBox="0 0 40 20" className="w-10 h-5" fill="none" aria-hidden>
            <path d="M2 10 H30" stroke="#ff5533" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 5 L34 10 L26 15" fill="#ff5533" />
          </svg>
        </div>

        <div className="space-y-3">
          <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50 px-1 font-semibold">
            Enrichment &amp; scoring
          </div>
          <div className="rounded-xl border-2 border-ink/20 bg-cream px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/65 font-semibold">
                Enrich
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                0.8s
              </span>
            </div>
            <div className="mt-1.5 text-[13px] text-ink/80 leading-snug">
              Clearbit + Apollo
            </div>
          </div>

          <div className="rounded-xl border-2 border-fire bg-fire text-paper px-4 py-4 shadow-[0_10px_30px_-15px_rgba(255,85,51,0.6)]">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/85">
                ICP fit?
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.18em] text-paper/70">
                decision
              </span>
            </div>
            <div className="mt-1.5 font-display font-bold text-[15px] tracking-[-0.01em] text-paper">
              Score ≥ 62
            </div>
          </div>

          <div className="rounded-xl border-2 border-ink/20 bg-cream px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/65 font-semibold">
                Territory
              </span>
              <span className="mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                0.4s
              </span>
            </div>
            <div className="mt-1.5 text-[13px] text-ink/80 leading-snug">US-EAST</div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center px-2">
          <svg viewBox="0 0 40 20" className="w-10 h-5" fill="none" aria-hidden>
            <path d="M2 10 H30" stroke="#ff5533" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 5 L34 10 L26 15" fill="#ff5533" />
          </svg>
        </div>

        <div className="space-y-3">
          <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50 px-1 font-semibold">
            Routed
          </div>
          <div className="rounded-xl border-2 border-ink/30 bg-ink text-paper px-4 py-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" />
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                Owner assigned
              </span>
            </div>
            <div className="mt-2.5 font-display font-bold text-[16px] tracking-[-0.01em] text-paper">
              Maya S.
            </div>
            <div className="mt-1.5 text-[11.5px] text-fire">Slack ping · 00:47</div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 py-4 border-t-2 border-ink/20 bg-cream flex items-center justify-between gap-4 flex-wrap">
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 leading-relaxed">
          Every decision logged on the record. Reason field never blank.
        </p>
        <p className="mono text-[9px] uppercase tracking-[0.22em] text-ink/45">
          Illustrative · 60s SLA target
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 05 · Forecast gauge
   ───────────────────────────────────────────────────────────── */

function ForecastGauge() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {[
        {
          label: "Before",
          value: "Gut call",
          desc: "Rep gut. CRO guesses. Board disappointed.",
          accent: "fire" as const,
          pct: 0.7,
          img: IMAGES.forecastBefore,
        },
        {
          label: "After",
          value: "Evidence-based",
          desc: "Stage-exit signals + weighted commit + weekly review.",
          accent: "ink" as const,
          pct: 0.25,
          img: IMAGES.forecastAfter,
        },
      ].map((g) => {
        const angle = -90 + 180 * g.pct;
        const color = g.accent === "fire" ? "#ff5533" : "#0a0a0a";
        return (
          <div
            key={g.label}
            className="rounded-2xl border-2 border-ink/25 bg-white overflow-hidden flex flex-col"
          >
            <div className="relative h-40 overflow-hidden border-b-2 border-ink/20">
              <Image
                src={g.img}
                alt={
                  g.label === "Before"
                    ? "Scattered notes and unclear forecast data"
                    : "Clean forecasting dashboard with live pipeline"
                }
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute top-4 left-4">
                <Tag tone={g.accent}>{g.label}</Tag>
              </div>
            </div>

            <div className="p-6 md:p-7 flex-1">
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 160 100" className="w-36 shrink-0" aria-hidden>
                  <path
                    d="M10 90 A 70 70 0 0 1 150 90"
                    stroke="#0a0a0a"
                    strokeOpacity="0.15"
                    strokeWidth="8"
                    fill="none"
                  />
                  <path
                    d="M10 90 A 70 70 0 0 1 150 90"
                    stroke={color}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="220"
                    strokeDashoffset={220 - 220 * g.pct}
                  />
                  <g transform={`translate(80 90) rotate(${angle})`}>
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-60"
                      stroke="#0a0a0a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle r="5" fill="#0a0a0a" />
                  </g>
                </svg>

                <div>
                  <div className="font-display font-bold text-2xl tracking-[-0.02em] leading-none">
                    {g.value}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] mt-2 text-ink/60">
                    Forecast method
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[14px] text-ink/65 leading-relaxed">{g.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CAPABILITIES GRID — shorter images, softer overlay
   ───────────────────────────────────────────────────────────── */

type CapabilityCard = {
  code: string;
  title: string;
  blurb: string;
  bullets: string[];
  color: string;
  image: string;
};

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    code: "06",
    title: "Quoting that closes",
    blurb:
      "Products, price books, and approval rules live on the record. Signed quotes auto-move deals to Closed Won.",
    bullets: [
      "Product + price book setup",
      "Discount rules · CRO approval",
      "Template + e-sign built in",
      "Auto-stage to Closed Won",
    ],
    color: "#2563EB",
    image: IMAGES.quoting,
  },
  {
    code: "07",
    title: "Rep scorecards",
    blurb:
      "One screen per rep. Quota attainment, activity heatmap, cycle time, and risk flags. Managers walk into 1:1s prepared.",
    bullets: [
      "Quota attainment per rep",
      "Activity heatmap",
      "Cycle-time flags",
      "Auto-generated coaching notes",
    ],
    color: "#7C3AED",
    image: IMAGES.scorecard,
  },
  {
    code: "08",
    title: "Six modules we rebuild",
    blurb:
      "Pipeline, sequences, routing, forecast, quotes, coaching. Everything that ships in a Sales Hub build, scoped end-to-end.",
    bullets: [
      "Pipeline with exit criteria",
      "Multi-channel sequences",
      "SLA-based routing",
      "Forecast + coaching layer",
    ],
    color: "#16A34A",
    image: IMAGES.modules,
  },
  {
    code: "09",
    title: "Six-week build plan",
    blurb:
      "Fixed scope. Named owners on both sides. Weekly demo, weekly decision log, one Slack channel.",
    bullets: [
      "Discovery + rep interviews (W1-2)",
      "Pipeline + stage design (W2-3)",
      "Sequences, routing, forecast (W3-5)",
      "Enablement + go-live (W5-6)",
    ],
    color: "#EA580C",
    image: IMAGES.plan,
  },
  {
    code: "10",
    title: "Ten artifacts, handed over",
    blurb:
      "Pipeline doc, sequence library, routing map, forecast model, quote workflow, dashboards, playbooks.",
    bullets: [
      "Pipeline design doc",
      "Sequence library",
      "Routing map + SLAs",
      "Forecast methodology",
    ],
    color: "#DC2626",
    image: IMAGES.artifacts,
  },
  {
    code: "11",
    title: "Integrations that hold",
    blurb:
      "Calendar, comms, call intel, prospecting, contracts, billing. Native where possible, documented always.",
    bullets: [
      "Gmail · Outlook · Slack",
      "Gong · Chorus · Aircall",
      "DocuSign · PandaDoc",
      "Stripe · Xero",
    ],
    color: "#D97706",
    image: IMAGES.integrations,
  },
];

function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="border-b border-ink/10 bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-fire" />
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire font-semibold">
            Capabilities
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] tracking-[-0.035em] leading-[1.02] max-w-4xl">
            Everything that ships in a{" "}
            <span className="text-fire">Sales Hub build.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink/70 leading-relaxed">
            From quoting to coaching, from the six-week plan to the ten
            artifacts at handoff — every piece of the build, in one view.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CAPABILITY_CARDS.map((c) => (
            <div
              key={c.code}
              className="group block rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)] overflow-hidden bg-white"
              style={{ borderColor: `${c.color}55` }}
            >
              <div className="relative h-28 md:h-32 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(10,10,10,0.15) 0%, transparent 60%, ${c.color}bb 120%)`,
                  }}
                />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span
                    className="mono text-[9px] font-bold tracking-[0.22em] text-white px-2 py-[3px] rounded-md backdrop-blur-sm"
                    style={{ background: "rgba(10,10,10,0.55)" }}
                  >
                    {c.code}
                  </span>
                  <span
                    className="mono text-[8.5px] uppercase tracking-[0.22em] text-white/90 px-2 py-[3px] rounded-md backdrop-blur-sm"
                    style={{ background: "rgba(10,10,10,0.45)" }}
                  >
                    Capability
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="font-display font-bold text-[clamp(1.25rem,2vw,1.5rem)] tracking-[-0.02em] leading-tight text-ink">
                  {c.title}
                </div>
                <p className="mt-3 text-[14px] text-ink/65 leading-relaxed">{c.blurb}</p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[12.5px] text-ink/70"
                    >
                      <span
                        className="mt-[5px] h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: c.color }}
                      />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────────────────────── */

const FAQ = [
  {
    q: "Our reps hate the current CRM. How do you actually get adoption?",
    a: "We interview them first. Cut every field they never fill. Reps update the CRM when it makes their job easier, so we design the pipeline around them instead of asking them to be data-entry clerks. Adoption is measured, not hoped for.",
  },
  {
    q: "Can you migrate us off Salesforce without losing history?",
    a: "Yes. Objects, history, workflows, and reports move in a mirrored sandbox. We cut over on a weekend and keep both systems reconciled for two weeks before shutting Salesforce down. Nobody loses a deal.",
  },
  {
    q: "How accurate does the forecast actually get?",
    a: "±10% within a quarter is a fair target. It is not a HubSpot feature, it is a discipline: stage-exit criteria, weekly commit calls, and a dashboard that shows the delta between commit and close. Reps learn to defend the number.",
  },
  {
    q: "Do we need Sales Hub Enterprise?",
    a: "Only if you need custom objects, playbooks, forecasting, or advanced permissions. We audit against your motion and recommend the smallest tier that does the job. If Pro is enough, we say so in writing.",
  },
  {
    q: "What about the reps who will never log a call?",
    a: "We automate what a call log should contain from Gong or the dialer, so the rep does not type it. When automation is not possible, we build the log into the sequence step itself. Nobody hand-types a call disposition.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function SalesHub() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* HERO */}
      <section className="relative bg-cream border-b border-ink/10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-fire/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-fire/[0.05] blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] tracking-[-0.045em]">
                A CRM your reps{" "}
                <span className="text-fire">actually update.</span>
              </h1>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-[6px] w-[120px] rounded-full bg-fire/40" />
                <div className="h-[6px] w-[60px] rounded-full bg-fire" />
                <div className="h-[6px] w-[30px] rounded-full bg-ink" />
              </div>

              <p className="mt-6 mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
                Pipeline · Routing · Sequences · Forecasting · Quoting ·
                Manager visibility
              </p>

              <p className="mt-6 max-w-[560px] text-lg md:text-xl text-ink/70 leading-relaxed">
                Honest pipeline stages. Sequences that respect the buyer. A
                forecast the CRO can defend on a Monday. Rep scorecards that end
                the pipeline-review argument by 9:15am. Wired end-to-end by an
                operator who has done it before.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookCallButton className="group inline-flex items-center gap-2 rounded-lg bg-ink text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_10px_30px_-12px_rgba(10,10,10,0.5)] hover:bg-fire hover:shadow-[0_10px_30px_-12px_rgba(255,85,51,0.7)] transition-all">
                  Scope a Sales Hub build
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-ink group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </BookCallButton>

                <BookAuditButton className="inline-flex items-center gap-2 rounded-lg border-2 border-ink/30 bg-white text-ink px-5 py-3.5 font-medium text-[15px] hover:bg-ink hover:text-paper hover:border-ink transition-colors">
                  Start with a free HubSpot audit
                </BookAuditButton>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[600px]">
                {[
                  {
                    k: "6 wks",
                    v: "Fixed-scope build",
                    n: "Architecture, data, automation, reporting, enablement",
                  },
                  {
                    k: "6",
                    v: "Named workstreams",
                    n: "Each with an owner on our side and yours",
                  },
                  {
                    k: "1",
                    v: "Documented handoff",
                    n: "Runbook, playbooks, and 30-day support",
                  },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-fire pl-4">
                    <div className="font-display font-bold text-3xl md:text-4xl leading-none tracking-[-0.03em] text-ink">
                      {o.k}
                    </div>
                    <div className="mt-2 text-[13px] font-medium text-ink/90">
                      {o.v}
                    </div>
                    <div className="mt-1 text-[11.5px] text-ink/60 leading-snug">
                      {o.n}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <HeroPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* ACT 01 */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="It's Monday. The forecast was wrong. Again."
            lede="Every sales leader we meet has the same three problems in a different order. Reps grade their own deals. Stages mean different things to different people. And the number the CRO committed to the board has nothing to do with what actually closed."
          />
          <ForecastVsReality />
        </div>
      </section>

      {/* ACT 02 */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-sand">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the spine"
            title="Stages that describe the buyer, not the rep's mood."
            lede="Deals move on evidence, not vibes. Every stage has an exit criterion that a signal in HubSpot can prove: a meeting on the calendar, a document sent, a champion identified in writing. If the evidence is not there, the deal does not move."
          />
          <PipelineBeforeAfter />
        </div>
      </section>

      {/* ACT 03 */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Cadence, done right"
            title="Sequences that behave like a senior rep."
            lede="A cadence is not a template loop. It is a decision tree with hold-outs, reply detection, and a clean break-up. Reps get suggested next steps in-record. Nobody sends the same email to a hand-raiser and a cold contact."
          />
          <CadenceTimeline />
        </div>
      </section>

      {/* ACT 04 */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-ink text-paper relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/3 w-[500px] h-[500px] rounded-full bg-fire/[0.09] blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="04"
            kicker="Speed to lead"
            title="A lead lands. Inside an example 60-second SLA target, the right rep gets pinged."
            lede="Enrichment, ICP scoring, territory, and rep load resolved in the background. Reason for every routing decision written to the record so managers can audit fairness."
            dark
          />
          <RoutingWaterfall />
        </div>
      </section>

      {/* ACT 05 */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="The number, defended"
            title="A forecast the CRO can defend to the board."
            lede="Weighted + committed math. Deal risk flags on stalled, single-threaded, and dark deals. Weekly commit call runs against evidence, not memory. The gap between what was called and what closed becomes measurable, then small."
          />
          <ForecastGauge />
        </div>
      </section>

      {/* CAPABILITIES */}
      <CapabilitiesGrid />

      {/* FAQ */}
      <section className="py-24 md:py-32 border-b border-ink/10 bg-sand">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="font-display font-bold text-[clamp(2rem,4.8vw,3.75rem)] tracking-[-0.035em] leading-[1.02] mb-12">
            Five questions before{" "}
            <span className="text-fire">you email us.</span>
          </h2>

          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border-2 border-ink/25 bg-white transition-all hover:border-ink/40"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-fire shrink-0 font-semibold">
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-[16px] md:text-[17px] tracking-[-0.01em] leading-snug flex-1 min-w-0">
                    {f.q}
                  </span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-ink text-paper flex items-center justify-center text-lg transition-all group-open:rotate-45 group-open:bg-fire">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-[68px] text-[14px] text-ink/70 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.ctaBg}
            alt="Analytics dashboard with pipeline data"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-fire/[0.09] blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fire/[0.06] blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 py-28 md:py-36">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-fire" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire font-semibold">
              Ready when you are
            </span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2.25rem,6vw,4.5rem)] tracking-[-0.045em] leading-[0.98] max-w-[900px]">
            A working Sales Hub,{" "}
            <span className="text-fire">defended by the numbers.</span>
          </h2>

          <p className="mt-6 max-w-[580px] text-paper/75 leading-relaxed text-lg">
            Send us your portal, your motion, and the pipeline review you dread
            the most. We come back with a scoped plan, a fixed price, and a
            start date within a week.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookCallButton className="group inline-flex items-center gap-2 rounded-lg bg-fire text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_15px_40px_-15px_rgba(255,85,51,0.7)] hover:bg-orange-600 transition-all">
              Book a scoping call
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-fire group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </BookCallButton>

            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-paper/40 text-paper px-5 py-3.5 font-medium text-[15px] hover:bg-paper/10 transition-colors"
            >
              See the full Implementation practice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}