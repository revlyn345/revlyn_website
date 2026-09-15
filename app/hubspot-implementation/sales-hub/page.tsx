import type { Metadata } from "next";
import Link from "next/link";
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
   Small primitives
   ───────────────────────────────────────────────────────────── */

function Tag({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "fire" | "volt" | "bone" }) {
  const map: Record<string, string> = {
    ink: "bg-ink text-paper border-ink",
    fire: "bg-fire text-paper border-fire",
    volt: "bg-volt text-ink border-ink",
    bone: "bg-bone text-ink border-ink",
  };
  return (
    <span className={`mono text-[10px] px-2 py-1 border ${map[tone]}`}>{children}</span>
  );
}

function GridPaper() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO — Animated pipeline "engine room"
   ───────────────────────────────────────────────────────────── */

function HeroPipeline() {
  const stages = ["New", "Qualified", "Demo", "Proposal", "Closed"];
  return (
    <div className="relative bg-paper overflow-hidden">
      <GridPaper />
      <div className="relative p-6 md:p-7">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fire animate-blink" />
            <span className="mono text-[11px] text-ink/60">LIVE · PIPELINE.V2</span>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
          {stages.map((s, i) => (
            <div key={s} className="mono text-[10px] uppercase tracking-[0.16em] text-ink/60">
              {String(i + 1).padStart(2, "0")} · {s}
            </div>
          ))}
        </div>

        <svg viewBox="0 0 500 220" className="w-full h-[240px] md:h-[280px]" aria-hidden>
          <defs>
            <linearGradient id="rail" x1="0" x2="1">
              <stop offset="0" stopColor="var(--color-ink)" stopOpacity="0.15" />
              <stop offset="1" stopColor="var(--color-ink)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[40, 90, 140].map((y) => (
            <line key={y} x1="10" x2="490" y1={y} y2={y} stroke="url(#rail)" strokeWidth="1.2" strokeDasharray="2 6" />
          ))}
          {stages.map((_, i) => (
            <line
              key={i}
              x1={10 + i * 120}
              x2={10 + i * 120}
              y1="20"
              y2="200"
              stroke="var(--color-ink)"
              strokeOpacity="0.08"
            />
          ))}

          {[
            { y: 40, delay: 0, color: "var(--color-fire)" },
            { y: 90, delay: 1.2, color: "var(--color-ink)" },
            { y: 140, delay: 2.4, color: "var(--color-volt)" },
            { y: 40, delay: 3.6, color: "var(--color-ink)" },
            { y: 90, delay: 4.8, color: "var(--color-fire)" },
          ].map((d, i) => (
            <g key={i}>
              <circle r="7" fill={d.color} stroke="var(--color-ink)" strokeWidth="1.5">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  begin={`${d.delay}s`}
                  path={`M10 ${d.y} L490 ${d.y}`}
                />
              </circle>
            </g>
          ))}

          {stages.slice(0, 4).map((_, i) => (
            <g key={i} transform={`translate(${70 + i * 120}, 175)`}>
              <rect x="-42" y="0" width="84" height="18" fill="var(--color-bone)" stroke="var(--color-ink)" />
              <text x="0" y="12" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--color-ink)">
                EXIT: {["form", "meeting", "demo", "quote"][i]}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          {[
            { k: "5", v: "Pipeline stages" },
            { k: "EXIT", v: "Criteria, not vibes" },
            { k: "1", v: "Owner per deal" },
            { k: "6 wks", v: "Build" },
          ].map((x) => (
            <div key={x.v} className="brutal-border bg-bone px-3 py-3">
              <div className="font-display text-2xl leading-none">{x.k}</div>
              <div className="mono text-[10px] mt-1 text-ink/60">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter Header
   ───────────────────────────────────────────────────────────── */

function Chapter({
  num,
  kicker,
  title,
  lede,
}: {
  num: string;
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start" data-reveal>
      <div className="mono text-[11px] tracking-[0.22em] text-ink/50">
        <div className="font-display text-6xl md:text-7xl text-ink leading-none">{num}</div>
        <div className="mt-3 uppercase">{kicker}</div>
      </div>
      <div>
        <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02]">{title}</h2>
        {lede && <p className="mt-5 max-w-[640px] text-ink/70 leading-relaxed text-lg">{lede}</p>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 2 — The Monday problem (forecast vs reality)
   ───────────────────────────────────────────────────────────── */

function ForecastVsReality() {
  return (
    <div className="brutal-border bg-paper relative overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="mono text-[11px] text-ink/60">MONDAY 09:14 · CRO's OFFICE</div>
          <Tag tone="fire">before</Tag>
        </div>
        <div className="font-display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[520px]">
          "We committed 4.2. We closed 2.6. Nobody can tell me why."
        </div>

        <svg viewBox="0 0 520 220" className="w-full mt-8 h-[220px]" aria-hidden>
          <line x1="30" y1="10" x2="30" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          <line x1="30" y1="190" x2="510" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          <path
            d="M30 150 Q 140 60, 260 90 T 500 40"
            stroke="var(--color-ink)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M30 160 L 100 180 L 170 155 L 240 175 L 310 145 L 380 165 L 450 160 L 500 150"
            stroke="var(--color-fire)"
            strokeWidth="3"
            fill="none"
          />
          {[100, 240, 380].map((x, i) => (
            <g key={i}>
              <line x1={x} x2={x} y1="70" y2={i === 1 ? 175 : 175} stroke="var(--color-ink)" strokeDasharray="2 3" />
              <text x={x + 6} y={80} fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink)">
                gap
              </text>
            </g>
          ))}
          <g transform="translate(340, 15)">
            <line x1="0" x2="24" y1="0" y2="0" stroke="var(--color-ink)" strokeDasharray="4 4" strokeWidth="2" />
            <text x="30" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">commit</text>
            <line x1="90" x2="114" y1="0" y2="0" stroke="var(--color-fire)" strokeWidth="3" />
            <text x="120" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">reality</text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Reps grade their own deals",
            "Stage means 'how the rep felt on Friday'",
            "Nobody logs the meetings that mattered",
          ].map((t) => (
            <div key={t} className="border border-ink/15 p-4">
              <div className="mono text-[10px] text-fire mb-2">SYMPTOM</div>
              <div className="text-sm text-ink/80">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 3 — Pipeline design (before/after side-by-side)
   ───────────────────────────────────────────────────────────── */

function PipelineBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="brutal-border bg-bone p-6 relative">
        <Tag tone="fire">before</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">Stages as feelings</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {["Interested?", "Warm-ish", "Should close soon", "Verbal", "Legal"].map((s) => (
            <li key={s} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-fire" />
              <span className="line-through decoration-fire/60 text-ink/60">{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 mono text-[10px] text-ink/50">Every rep interprets these differently.</div>
      </div>
      <div className="brutal-border bg-paper p-6 relative brutal-shadow-volt">
        <Tag tone="volt">after</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">Stages as evidence</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            { s: "Discovery booked", e: "meeting on calendar + notes" },
            { s: "Problem confirmed", e: "champion + pain in writing" },
            { s: "Demo delivered", e: "recording + next step set" },
            { s: "Proposal live", e: "quote sent + read receipt" },
            { s: "Verbal", e: "date + procurement contact" },
          ].map((row, i) => (
            <li key={i} className="grid grid-cols-[24px_1fr_auto] items-center gap-3">
              <span className="mono text-[10px] text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{row.s}</span>
              <span className="mono text-[10px] text-ink/60 bg-volt/40 px-2 py-0.5">{row.e}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 mono text-[10px] text-ink/60">Exit criteria automated from meeting + email + doc signals.</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 4 — Sequence cadence timeline
   ───────────────────────────────────────────────────────────── */

function CadenceTimeline() {
  const touches = [
    { day: 1, ch: "Email", label: "Warm intro, one CTA", tone: "ink" },
    { day: 2, ch: "LinkedIn", label: "Connect + note", tone: "volt" },
    { day: 4, ch: "Call", label: "Voicemail + text", tone: "fire" },
    { day: 6, ch: "Email", label: "Case study, no ask", tone: "ink" },
    { day: 9, ch: "LinkedIn", label: "Comment on their post", tone: "volt" },
    { day: 11, ch: "Call", label: "2nd attempt", tone: "fire" },
    { day: 14, ch: "Email", label: "Break-up, clean exit", tone: "ink" },
  ] as const;
  return (
    <div className="brutal-border bg-paper p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">SEQUENCE.OUTBOUND / 14-DAY</div>
        <Tag tone="volt">7 touches · 3 channels</Tag>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 h-[2px] bg-ink/20" />
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 relative">
          {touches.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mono text-[10px] text-ink/50 mb-2">D{t.day}</div>
              <div
                className={`h-6 w-6 rounded-full brutal-border ${
                  t.tone === "fire" ? "bg-fire" : t.tone === "volt" ? "bg-volt" : "bg-ink"
                }`}
              />
              <div className="mono text-[10px] mt-3 text-ink/70">{t.ch}</div>
              <div className="text-[11px] text-ink/60 text-center mt-1 leading-tight max-w-[90px]">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-3">
        {[
          { k: "IF REPLY", v: "Auto-pause → route to owner in 60s", tone: "volt" },
          { k: "IF OPEN 3×", v: "Trigger call task + Slack ping", tone: "fire" },
          { k: "IF SILENT", v: "Move to nurture, no more cold touches", tone: "ink" },
        ].map((r) => (
          <div key={r.k} className="brutal-border bg-bone p-4">
            <div className={`mono text-[10px] mb-2 ${r.tone === "fire" ? "text-fire" : r.tone === "volt" ? "text-ink" : "text-ink"}`}>{r.k}</div>
            <div className="text-sm">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 5 — Routing waterfall
   ───────────────────────────────────────────────────────────── */

function RoutingWaterfall() {
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">LEAD.ROUTING / 00:00:00 → 00:00:47</div>
        <Tag tone="fire">Target: 60s</Tag>
      </div>
      <svg viewBox="0 0 720 300" className="w-full h-[300px]" aria-hidden>
        <g>
          <rect x="10" y="130" width="120" height="42" fill="var(--color-ink)" />
          <text x="70" y="156" textAnchor="middle" fill="var(--color-paper)" fontSize="12" fontFamily="var(--font-mono)">
            NEW LEAD
          </text>
        </g>
        <path d="M130 151 C 180 151, 200 60, 260 60" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
        <path d="M130 151 C 180 151, 200 151, 260 151" stroke="var(--color-fire)" strokeWidth="2.5" fill="none" />
        <path d="M130 151 C 180 151, 200 240, 260 240" stroke="var(--color-ink)" strokeWidth="2" fill="none" />

        {[
          { y: 40, k: "ENRICH", note: "Clearbit + Apollo", tone: "bone" },
          { y: 130, k: "ICP FIT?", note: "Score ≥ 62", tone: "volt" },
          { y: 220, k: "TERRITORY", note: "US-EAST", tone: "bone" },
        ].map((n, i) => (
          <g key={i} transform={`translate(260, ${n.y})`}>
            <rect
              width="160"
              height="42"
              fill={n.tone === "volt" ? "var(--color-volt)" : "var(--color-bone)"}
              stroke="var(--color-ink)"
              strokeWidth="1.5"
            />
            <text x="12" y="18" fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-ink)">
              {n.k}
            </text>
            <text x="12" y="34" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)" opacity="0.6">
              {n.note}
            </text>
          </g>
        ))}

        <path d="M420 61 C 500 61, 520 130, 570 130" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
        <path d="M420 151 C 500 151, 520 151, 570 151" stroke="var(--color-fire)" strokeWidth="2.5" fill="none" />
        <path d="M420 241 C 500 241, 520 172, 570 172" stroke="var(--color-ink)" strokeWidth="2" fill="none" />

        <g transform="translate(570, 130)">
          <rect width="140" height="52" fill="var(--color-ink)" />
          <text x="12" y="20" fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-paper)">
            OWNER · MAYA S.
          </text>
          <text x="12" y="38" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-volt)">
            Slack ping · 00:47
          </text>
        </g>

        <circle r="6" fill="var(--color-fire)" stroke="var(--color-ink)" strokeWidth="1.5">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M70 151 L 260 151 L 420 151 L 570 151"
          />
        </circle>
      </svg>
      <div className="mt-4 mono text-[11px] text-ink/60">
        Every decision logged on the record. Reason field never blank.
      </div>
      <p className="mt-1 mono text-[9px] uppercase tracking-[0.1em] text-ink/35">Illustrative example against a 60s SLA target</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 6 — Forecast gauge
   ───────────────────────────────────────────────────────────── */

function ForecastGauge() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { label: "Before", value: "Gut call", desc: "Rep gut. CRO guesses. Board disappointed.", tone: "fire", pct: 0.7 },
        { label: "After", value: "Evidence-based", desc: "Stage-exit signals + weighted commit + weekly review.", tone: "volt", pct: 0.25 },
      ].map((g) => {
        const angle = -90 + 180 * g.pct;
        return (
          <div key={g.label} className="brutal-border bg-paper p-6">
            <Tag tone={g.tone as "fire" | "volt"}>{g.label}</Tag>
            <div className="mt-6 flex items-center gap-6">
              <svg viewBox="0 0 160 100" className="w-40" aria-hidden>
                <path d="M10 90 A 70 70 0 0 1 150 90" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="8" fill="none" />
                <path
                  d="M10 90 A 70 70 0 0 1 150 90"
                  stroke={g.tone === "fire" ? "var(--color-fire)" : "var(--color-volt)"}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="220"
                  strokeDashoffset={220 - 220 * g.pct}
                />
                <g transform={`translate(80 90) rotate(${angle})`}>
                  <line x1="0" y1="0" x2="0" y2="-60" stroke="var(--color-ink)" strokeWidth="2.5" />
                  <circle r="5" fill="var(--color-ink)" />
                </g>
              </svg>
              <div>
                <div className="font-display text-2xl tracking-[-0.02em] leading-none max-w-[7ch]">{g.value}</div>
                <div className="mono text-[10px] mt-2 text-ink/60">forecast method</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink/70">{g.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 7 — Quote flow
   ───────────────────────────────────────────────────────────── */

function QuoteFlow() {
  const steps = [
    { k: "Configure", d: "Products + price book", tone: "ink" },
    { k: "Approve", d: "Discount > 15% → CRO", tone: "fire" },
    { k: "Send", d: "Template + e-sign", tone: "ink" },
    { k: "Sign", d: "Auto-move to Closed Won", tone: "volt" },
  ];
  return (
    <div className="brutal-border bg-bone p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">QUOTE.FLOW / END-TO-END</div>
        <Tag tone="ink">CPQ · light</Tag>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" data-stagger>
        {steps.map((s, i) => (
          <div key={s.k} className="relative group">
            <div className="brutal-border p-4 bg-paper transition-colors duration-200 group-hover:bg-bone">
              <div className="flex items-center justify-between">
                <div className="mono text-[10px] text-ink/50">STEP {String(i + 1).padStart(2, "0")}</div>
                <span className={`h-2 w-2 rounded-full ${i === 1 ? "bg-fire" : i === 3 ? "bg-volt" : "bg-ink"}`} />
              </div>
              <div className="font-display text-2xl mt-2 tracking-[-0.02em]">{s.k}</div>
              <div className="text-sm text-ink/70 mt-2">{s.d}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-ink group-hover:translate-x-1 transition-transform">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 mono text-[11px] text-ink/60">
        No more Friday-night Slack scrambles for approvals. Rules are on the record.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 8 — Rep scorecard mock
   ───────────────────────────────────────────────────────────── */

function RepScorecard() {
  const reps = [
    { name: "Maya S.", quota: 92, activity: 88, cycle: 21, risk: 1 },
    { name: "Dev K.", quota: 71, activity: 94, cycle: 34, risk: 3 },
    { name: "Ana R.", quota: 118, activity: 76, cycle: 18, risk: 0 },
    { name: "Jon T.", quota: 54, activity: 61, cycle: 41, risk: 4 },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-ink/10">
        <div>
          <div className="mono text-[11px] text-ink/60">REPS.SCORECARD · WEEK 32</div>
          <div className="font-display text-2xl tracking-[-0.02em] mt-1">Managers open this on Monday. That's it.</div>
        </div>
        <Tag tone="volt">live</Tag>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr] mono text-[10px] uppercase tracking-[0.14em] px-6 py-3 border-b border-ink/10 text-ink/50">
        <div>Rep</div>
        <div>Quota %</div>
        <div>Activity</div>
        <div>Cycle</div>
        <div>Risk</div>
      </div>
      {reps.map((r) => (
        <div key={r.name} className="grid grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr] items-center px-6 py-4 border-b border-ink/10 hover:bg-bone/60 transition-colors">
          <div className="font-medium">{r.name}</div>
          <div>
            <div className="h-2 bg-ink/10 relative">
              <div
                className={`h-2 ${r.quota >= 100 ? "bg-volt" : r.quota >= 80 ? "bg-ink" : "bg-fire"}`}
                style={{ width: `${Math.min(r.quota, 130)}%` }}
              />
            </div>
            <div className="mono text-[10px] mt-1 text-ink/60">{r.quota}%</div>
          </div>
          <div>
            <div className="h-2 bg-ink/10">
              <div className="h-2 bg-ink" style={{ width: `${r.activity}%` }} />
            </div>
            <div className="mono text-[10px] mt-1 text-ink/60">{r.activity}%</div>
          </div>
          <div className="font-mono text-sm">{r.cycle}d</div>
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i < r.risk ? "bg-fire" : "bg-ink/15"}`} />
            ))}
          </div>
        </div>
      ))}
      <div className="p-6 mono text-[11px] text-ink/60">
        Coaching flags fire automatically. Managers walk into 1:1s already prepared.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6-week plan (bespoke gantt)
   ───────────────────────────────────────────────────────────── */

function BuildPlan() {
  const rows = [
    { title: "Discovery + rep interviews", weeks: [1, 2] },
    { title: "Pipeline + stage design", weeks: [2, 3] },
    { title: "Sequences + playbooks", weeks: [3, 4] },
    { title: "Routing + SLA", weeks: [3, 4] },
    { title: "Forecast model", weeks: [4, 5] },
    { title: "Quotes + CPQ", weeks: [4, 5] },
    { title: "Integrations", weeks: [4, 5] },
    { title: "Enablement + rep training", weeks: [5, 6] },
    { title: "Go-live + tune-up", weeks: [6, 6] },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] px-6 py-3 border-b border-ink/10 mono text-[10px] uppercase tracking-[0.14em] text-ink/50 bg-bone">
        <div>Workstream</div>
        {[1, 2, 3, 4, 5, 6].map((w) => (
          <div key={w}>Week {w}</div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div
          key={r.title}
          className="grid grid-cols-[1.4fr_repeat(6,1fr)] items-center px-6 py-3 border-b border-ink/10 hover:bg-bone/50 transition-colors"
        >
          <div className="text-sm font-medium">{r.title}</div>
          {[1, 2, 3, 4, 5, 6].map((w) => {
            const active = w >= r.weeks[0] && w <= r.weeks[1];
            return (
              <div key={w} className="px-1">
                <div
                  className={`h-4 ${
                    active
                      ? i % 3 === 0
                        ? "bg-fire"
                        : i % 3 === 1
                        ? "bg-ink"
                        : "bg-volt"
                      : "bg-ink/8"
                  }`}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Integrations orbit
   ───────────────────────────────────────────────────────────── */

function IntegrationsOrbit() {
  const categories = [
    { name: "Calendar & Comms", tools: ["Gmail", "Outlook", "Google Calendar", "Slack"] },
    { name: "Call Intelligence", tools: ["Gong", "Chorus", "Aircall", "Dialpad"] },
    { name: "Prospecting & Data", tools: ["LinkedIn SN", "Apollo", "ZoomInfo", "Chili Piper"] },
    { name: "Contracts", tools: ["DocuSign", "PandaDoc"] },
    { name: "Billing", tools: ["Stripe", "Xero"] },
    { name: "Migration", tools: ["Salesforce (migration)"] },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-10">
      <div className="mono text-[11px] text-ink/60 mb-6">SALES HUB · OPERATING SPINE</div>

      <svg viewBox="0 0 800 260" className="w-full h-auto" aria-hidden>
        <defs>
          <marker id="int-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-ink)" />
          </marker>
        </defs>
        {/* connectors: straight lines out from the center to each category slot */}
        <path d="M400 130 H90" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />
        <path d="M400 130 H710" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />
        <path d="M370 110 L200 35" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />
        <path d="M430 110 L600 35" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />
        <path d="M370 150 L200 225" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />
        <path d="M430 150 L600 225" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#int-arrow)" />

        {/* center: Sales Hub */}
        <g transform="translate(330, 105)">
          <rect width="140" height="50" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="1.5" />
          <text x="70" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="var(--font-mono)" fill="var(--color-ink)">Sales Hub</text>
        </g>

        {/* six category nodes */}
        {[
          { x: 10, y: 106, label: "Calendar & Comms" },
          { x: 630, y: 106, label: "Prospecting & Data" },
          { x: 130, y: 12, label: "Call Intelligence" },
          { x: 530, y: 12, label: "Contracts" },
          { x: 130, y: 200, label: "Billing" },
          { x: 530, y: 200, label: "Migration" },
        ].map((n) => (
          <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
            <rect width="160" height="46" fill="var(--color-bone)" stroke="var(--color-ink)" strokeWidth="1.2" />
            <text x="10" y="27" fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-ink)">{n.label}</text>
          </g>
        ))}
      </svg>

      <div className="mt-8 border-t border-ink/10 pt-6">
        <div className="mono text-[10px] uppercase tracking-[0.14em] text-ink/45 mb-4">Full connection list · no duct tape</div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.name}>
              <div className="mono text-[10px] uppercase tracking-[0.1em] text-ink/50 mb-1.5">{c.name}</div>
              <div className="flex flex-wrap gap-1.5">
                {c.tools.map((t) => (
                  <span key={t} className="text-xs text-ink/70 border border-ink/12 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Modules grid — six areas of Sales Hub
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "S-01",
    title: "Pipeline that means something",
    body: "Stages describe what the buyer did, not what the rep felt. Exit criteria applied automatically from calendar, email, and doc signals.",
    tone: "fire",
  },
  {
    code: "S-02",
    title: "Sequences that respect the buyer",
    body: "Multi-channel cadences with real branching. Reply detection, hold-outs, and clean break-ups. No spray-and-pray.",
    tone: "ink",
  },
  {
    code: "S-03",
    title: "Routing in under a minute",
    body: "Territory, ICP fit, rep load, and SLA timers. Every routing decision logged with a reason on the record.",
    tone: "volt",
  },
  {
    code: "S-04",
    title: "A forecast a CRO can defend",
    body: "Weighted + committed model. Deal-risk flags for stalled, single-thread, and dark deals. Weekly commit call with real math.",
    tone: "fire",
  },
  {
    code: "S-05",
    title: "Quotes without Friday-night approvals",
    body: "Product library, tiered price books, discount rules, and e-sign. Signed quotes auto-move deals to Closed Won.",
    tone: "ink",
  },
  {
    code: "S-06",
    title: "Coaching, not just reporting",
    body: "Rep scorecards, activity heatmaps, cycle-time flags, and call review. Managers walk into 1:1s already prepared.",
    tone: "volt",
  },
] as const;

function ModulesGrid() {
  return (
    <div className="border-t border-ink">
      {MODULES.map((m, i) => {
        const accent = m.tone === "fire" ? "text-fire" : m.tone === "volt" ? "text-ink" : "text-ink";
        return (
          <div
            key={m.code}
            data-reveal
            className="group grid grid-cols-[4rem_1fr] gap-4 border-b border-ink py-7 transition-colors hover:bg-bone/50 md:grid-cols-[5rem_1.3fr_1.7fr_2rem] md:items-center"
          >
            <span className={`mono text-xs ${accent}`}>{m.code}</span>
            <h3 className="font-display text-xl md:text-2xl tracking-[-0.02em]">{m.title}</h3>
            <p className="col-span-2 md:col-span-1 text-sm text-ink/65 leading-relaxed">{m.body}</p>
            <span className="hidden md:block justify-self-end text-fire opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5">→</span>
          </div>
        );
      })}
    </div>
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
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-paper border-b border-ink/10 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 relative">
          

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-end">
            <div>
              
              <h1
                className="font-display text-[54px] md:text-[84px] leading-[1] tracking-[-0.045em] hero-hl"
                data-split
              >
                A CRM your reps will actually update.
              </h1>
              <div className="mt-3 flex items-center gap-2" data-reveal data-reveal-delay="0.2">
                <div className="h-[10px] w-[180px] bg-volt rounded-sm" />
                <div className="h-[10px] w-[80px] bg-fire rounded-sm" />
                <div className="h-[10px] w-[40px] bg-ink rounded-sm" />
              </div>
              <p className="mt-6 mono text-[11px] uppercase tracking-[0.14em] text-ink/50" data-reveal>
                Pipeline · Routing · Sequences · Forecasting · Quoting · Manager visibility
              </p>
              <p className="mt-6 max-w-[560px] text-lg md:text-xl text-ink/70 leading-relaxed" data-reveal data-reveal-delay="0.15">
                Honest pipeline stages. Sequences that respect the buyer. A forecast the CRO can defend on a Monday.
                Rep scorecards that end the pipeline-review argument by 9:15am. Wired end-to-end by an operator who
                has done it before.
              </p>
              <div className="mt-10 flex flex-wrap gap-3" data-stagger>
                <BookCallButton
                  data-magnetic="14"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-fire transition-colors"
                >
                  Scope a Sales Hub build
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-paper text-ink group-hover:translate-x-0.5 transition-transform">→</span>
                </BookCallButton>
                <BookAuditButton
                  data-magnetic="10"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm hover:bg-bone transition-colors"
                >
                  Start with a free HubSpot audit
                </BookAuditButton>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[600px]" data-stagger>
                {[
                  { k: "6 wks", v: "Fixed-scope build", n: "architecture, data, automation, reporting, enablement" },
                  { k: "6", v: "Named workstreams", n: "each with an owner on our side and yours" },
                  { k: "1", v: "Documented handoff", n: "runbook, playbooks, and 30-day support" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-ink/10 pl-4">
                    <div className="font-display text-3xl md:text-4xl leading-none tracking-tight text-ink">{o.k}</div>
                    <div className="mt-2 text-[11px] font-medium text-ink">{o.v}</div>
                    <div className="mt-1 text-[10px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: the pipeline schematic itself, one frame, not nested UI chrome */}
            <div className="relative" data-reveal>
              <div className="brutal-border bg-paper overflow-hidden">
                <HeroPipeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT 01 · The Monday problem ──────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="It's Monday. The forecast was wrong. Again."
            lede="Every sales leader we meet has the same three problems in a different order. Reps grade their own deals. Stages mean different things to different people. And the number the CRO committed to the board has nothing to do with what actually closed."
          />
          <ForecastVsReality />
        </div>
      </section>

      {/* ── ACT 02 · Pipeline that means something ───────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the spine"
            title="Stages that describe the buyer, not the rep's mood."
            lede="Deals move on evidence, not vibes. Every stage has an exit criterion that a signal in HubSpot can prove: a meeting on the calendar, a document sent, a champion identified in writing. If the evidence is not there, the deal does not move."
          />
          <PipelineBeforeAfter />
        </div>
      </section>

      {/* ── ACT 03 · Sequences ───────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Cadence, done right"
            title="Sequences that behave like a senior rep."
            lede="A cadence is not a template loop. It is a decision tree with hold-outs, reply detection, and a clean break-up. Reps get suggested next steps in-record. Nobody sends the same email to a hand-raiser and a cold contact."
          />
          <CadenceTimeline />
        </div>
      </section>

      {/* ── ACT 04 · Routing ─────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start" data-reveal>
            <div className="mono text-[11px] tracking-[0.22em] text-paper/50">
              <div className="font-display text-6xl md:text-7xl text-paper leading-none">04</div>
              <div className="mt-3 uppercase">Speed to lead</div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] text-paper">
                A lead lands. Inside an example 60-second SLA target, the right rep gets pinged.
              </h2>
              <p className="mt-5 max-w-[640px] text-paper/70 leading-relaxed text-lg">
                Enrichment, ICP scoring, territory, and rep load resolved in the background. Reason for every routing
                decision written to the record so managers can audit fairness.
              </p>
            </div>
          </div>
          <div className="bg-paper text-ink">
            <RoutingWaterfall />
          </div>
        </div>
      </section>

      {/* ── ACT 05 · Forecast ────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="The number, defended"
            title="A forecast the CRO can defend to the board."
            lede="Weighted + committed math. Deal risk flags on stalled, single-threaded, and dark deals. Weekly commit call runs against evidence, not memory. The gap between what was called and what closed becomes measurable, then small."
          />
          <ForecastGauge />
        </div>
      </section>

      {/* ── ACT 06 · Quotes ──────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="06"
            kicker="Close the loop"
            title="Quotes that move the deal forward."
            lede="Products, price books, and approval rules live on the record. Reps configure, the system checks against policy, and signed quotes auto-move deals to Closed Won. No more late-night Slack scrambles for discount sign-off, even on a Friday."
          />
          <QuoteFlow />
        </div>
      </section>

      {/* ── ACT 07 · Rep scorecard ───────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="07"
            kicker="From reporting to coaching"
            title="Managers walk into 1:1s already prepared."
            lede="One scorecard per rep. Quota attainment, activity heatmap, cycle time, and risk flags in one screen. Coaching signals fire automatically from call recordings and sequence performance. The 1:1 becomes a conversation, not a data pull."
          />
          <RepScorecard />
        </div>
      </section>

      {/* ── Modules ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="08"
            kicker="Six areas we rebuild"
            title="Everything that ships in a Sales Hub build."
          />
          <ModulesGrid />
        </div>
      </section>

      {/* ── Build plan ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="09"
            kicker="The plan"
            title="Six weeks. Fixed scope. Live on the last day."
            lede="Every workstream has a named owner on our side and a named owner on yours. Weekly demo, weekly decision log, one Slack channel. No surprises on week five."
          />
          <BuildPlan />
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="10"
            kicker="What lands in your portal"
            title="Ten artifacts. Every one of them survives you."
          />
          <div className="border-t border-ink">
            {[
              "Pipeline design doc with exit criteria",
              "Sequence library + performance targets",
              "Routing map + SLA definitions",
              "Forecasting model + methodology writeup",
              "Quote + approval workflow",
              "Rep scorecard dashboard",
              "Manager review dashboard",
              "Playbook library (opens inside the deal)",
              "Loom walkthrough per automation",
              "30-day adoption tune-up",
            ].map((d, i) => (
              <div
                key={d}
                className="group grid grid-cols-[3rem_1fr_1.5rem] items-center gap-3 border-b border-ink py-4 transition-colors hover:bg-paper"
              >
                <span className="mono text-[10px] text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                <div className="text-sm">{d}</div>
                <span className="justify-self-end h-2 w-2 rounded-full bg-volt opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="11"
            kicker="Wires, not duct tape"
            title="Connected to the rest of your stack."
            lede="We do not leave a hairball of Zaps. Integrations are configured natively where possible, versioned where they are not, and documented either way."
          />
          <IntegrationsOrbit />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="mono text-[11px] tracking-[0.22em] text-ink/50 mb-4">12 · QUESTIONS WE GET</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] mb-12">
            Five questions before you email us.
          </h2>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group brutal-border bg-paper open:brutal-shadow-fire transition-all"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none">
                  <span className="mono text-[10px] text-ink/40 shrink-0">Q.{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl md:text-2xl tracking-[-0.02em] leading-snug flex-1 min-w-0">
                    {f.q}
                  </span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-ink text-paper flex items-center justify-center transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-[68px] text-ink/70 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-ink text-paper relative overflow-hidden" data-no-premium>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 py-28 md:py-36 relative">
          <div className="mono text-[11px] uppercase tracking-[0.24em] text-paper/50 mb-6" data-reveal>
            13 · Ready when you are
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-[-0.045em] leading-[0.98] max-w-[900px]" data-split>
            A working Sales Hub, defended by the numbers.
          </h2>
          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg" data-reveal>
            Send us your portal, your motion, and the pipeline review you dread the most. We come back with a scoped
            plan, a fixed price, and a start date within a week.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-stagger>
            <BookCallButton data-magnetic="16"
              className="inline-flex items-center gap-2 bg-volt text-ink pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-paper transition-colors">
              Book a scoping call
              <span className="inline-flex items-center justify-center h-7 w-7 bg-ink text-paper">→</span>
            </BookCallButton>
            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 border border-paper/25 px-5 py-2.5 text-sm text-paper/80 hover:bg-paper/5 transition-colors"
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

