import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot Service Hub Implementation",
  description:
    "Service Hub built for retention: tickets that route themselves, SLAs that hold, a knowledge base that deflects the boring stuff, and a health score CS, sales, and product all trust.",
  alternates: { canonical: "/hubspot-implementation/service-hub" },
  openGraph: {
    title: "HubSpot Service Hub Implementation · Revlyn",
    description:
      "Ticketing, SLAs, knowledge base, CSAT, and churn signals wired to one customer record. Live in 4-6 weeks with the operator who built it in your Slack.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ─────────────────────────────────────────────────────────────
   Small primitives
   ───────────────────────────────────────────────────────────── */

function Tag({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "fire" | "volt" | "bone" }) {
  const map: Record<string, string> = {
    ink: "bg-ink text-paper",
    fire: "bg-fire text-paper",
    volt: "bg-volt text-ink",
    bone: "bg-bone text-ink",
  };
  return <span className={`mono text-[10px] px-2 py-1 rounded-full ${map[tone]}`}>{children}</span>;
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
   HERO — Live queue with SLA countdowns
   ───────────────────────────────────────────────────────────── */

function HeroQueue() {
  const rows = [
    { id: "T-4821", subj: "Login loops on SSO", pr: "P1", sla: 12, owner: "Priya", tone: "fire" },
    { id: "T-4820", subj: "Invoice line item wrong", pr: "P2", sla: 41, owner: "Ravi", tone: "volt" },
    { id: "T-4819", subj: "Export as CSV — feature", pr: "P3", sla: 86, owner: "KB · auto", tone: "ink" },
    { id: "T-4818", subj: "API 429 on batch push", pr: "P1", sla: 6, owner: "Priya", tone: "fire" },
    { id: "T-4817", subj: "How to invite a viewer?", pr: "P3", sla: 92, owner: "KB · auto", tone: "ink" },
  ] as const;
  return (
    <div className="relative bg-paper overflow-hidden">
      <GridPaper />
      <div className="relative p-6 md:p-7">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fire animate-blink" />
            <span className="mono text-[11px] text-ink/60">LIVE · QUEUE.V2</span>
          </div>
          <span className="mono text-[10px] px-2 py-0.5 rounded bg-volt text-ink">Svc-Hub</span>
        </div>

        <div className="grid grid-cols-[70px_1fr_50px_70px_90px] mono text-[10px] uppercase tracking-[0.14em] text-ink/50 pb-3 border-b border-ink/10">
          <div>Ticket</div>
          <div>Subject</div>
          <div>Pri</div>
          <div>SLA</div>
          <div>Owner</div>
        </div>

        <div className="divide-y divide-ink/8">
          {rows.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-[70px_1fr_50px_70px_90px] items-center py-3 group hover:bg-bone/60 transition-colors"
            >
              <div className="mono text-[11px] text-ink/70">{r.id}</div>
              <div className="text-sm truncate">{r.subj}</div>
              <div>
                <span
                  className={`mono text-[9px] px-1.5 py-0.5 rounded ${
                    r.pr === "P1" ? "bg-fire text-paper" : r.pr === "P2" ? "bg-volt text-ink" : "bg-ink/10 text-ink"
                  }`}
                >
                  {r.pr}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    r.sla < 15 ? "bg-fire animate-blink" : r.sla < 50 ? "bg-volt" : "bg-ink/40"
                  }`}
                />
                <span className="mono text-[10px]">{r.sla}m</span>
              </div>
              <div className="mono text-[10px] text-ink/60 truncate">{r.owner}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-3">
          {[
            { k: "−38%", v: "Median resolve" },
            { k: "42%", v: "Deflected" },
            { k: "+22", v: "NPS" },
            { k: "94%", v: "SLA held" },
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
   ACT 1 — CSAT vs churn (invoice-day surprise)
   ───────────────────────────────────────────────────────────── */

function CsatVsChurn() {
  return (
    <div className="brutal-border bg-paper relative overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="mono text-[11px] text-ink/60">FRIDAY 16:04 · CS LEAD'S DESK</div>
          <Tag tone="fire">before</Tag>
        </div>
        <div className="font-display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[560px]">
          "The invoice bounced. Turns out they filed six tickets last month. Nobody flagged it."
        </div>

        <svg viewBox="0 0 560 220" className="w-full mt-8 h-[220px]" aria-hidden>
          <line x1="30" y1="10" x2="30" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          <line x1="30" y1="190" x2="550" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          <path
            d="M30 60 L 90 70 L 150 90 L 210 100 L 270 115 L 330 130 L 390 140 L 450 160 L 540 175"
            stroke="var(--color-fire)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M30 170 L 90 160 L 150 150 L 210 130 L 270 115 L 330 95 L 390 80 L 450 55 L 540 40"
            stroke="var(--color-ink)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <g transform="translate(490, 165)">
            <circle r="10" fill="var(--color-fire)" stroke="var(--color-ink)" strokeWidth="1.5" />
            <text x="14" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">
              churn
            </text>
          </g>
          <g transform="translate(340, 15)">
            <line x1="0" x2="24" y1="0" y2="0" stroke="var(--color-fire)" strokeWidth="3" />
            <text x="30" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">CSAT</text>
            <line x1="100" x2="124" y1="0" y2="0" stroke="var(--color-ink)" strokeDasharray="4 4" strokeWidth="2" />
            <text x="130" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">tickets</text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Tickets live in a shared inbox nobody owns",
            "SLAs are a promise, not a system",
            "Sales finds out from the invoice, not the record",
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
   ACT 2 — Queue design before/after
   ───────────────────────────────────────────────────────────── */

function QueueBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="brutal-border bg-bone p-6 relative">
        <Tag tone="fire">before</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">One shared inbox, five brave humans</h3>
        <div className="mt-5 space-y-2">
          {[
            "support@ — 341 unread",
            "Slack DMs — 62 from customers",
            "Intercom — nobody knows the assignee rules",
            "Text messages — from the CEO's phone",
            "A spreadsheet — 'don't forget these'",
          ].map((s) => (
            <div key={s} className="flex items-center gap-3 text-sm text-ink/70">
              <span className="h-2 w-2 rounded-full bg-fire" />
              <span className="line-through decoration-fire/50">{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 mono text-[10px] text-ink/50">Everything is urgent. Nothing is owned.</div>
      </div>
      <div className="brutal-border bg-paper p-6 relative brutal-shadow-volt">
        <Tag tone="volt">after</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">One queue, three pipelines, zero orphans</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            { s: "Triage", e: "AI classifies + tags in 4s" },
            { s: "L1 support", e: "auto-routed by skill + load" },
            { s: "L2 engineering", e: "escalates with context" },
            { s: "Product feedback", e: "linked to roadmap" },
            { s: "Billing", e: "flows to finance with account" },
          ].map((row, i) => (
            <li key={i} className="grid grid-cols-[24px_1fr_auto] items-center gap-3">
              <span className="mono text-[10px] text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{row.s}</span>
              <span className="mono text-[10px] text-ink/60 bg-volt/40 px-2 py-0.5">{row.e}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 mono text-[10px] text-ink/60">Every ticket has an owner within 60 seconds of arrival.</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 3 — SLA countdown clocks + escalation ladder
   ───────────────────────────────────────────────────────────── */

function SlaLadder() {
  const rungs = [
    { role: "Rep", after: "0m", color: "bg-ink text-paper", note: "owns the ticket" },
    { role: "Team lead", after: "15m", color: "bg-volt text-ink", note: "if P1 unacknowledged" },
    { role: "Head of CS", after: "30m", color: "bg-fire text-paper", note: "if breach imminent" },
    { role: "CEO channel", after: "60m", color: "bg-ink text-paper", note: "if P1 unresolved" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">SLA.LADDER · P1 INCIDENT</div>
        <Tag tone="fire">first response · 15m</Tag>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { pri: "P1", value: "15m", pct: 0.9, tone: "fire" as const, note: "critical, revenue-impacting" },
          { pri: "P2", value: "1h", pct: 0.65, tone: "volt" as const, note: "workaround exists" },
          { pri: "P3", value: "8h", pct: 0.3, tone: "ink" as const, note: "how-to / low urgency" },
        ].map((d) => (
          <div
            key={d.pri}
            data-tilt="6"
            className="brutal-border bg-bone p-4 flex items-center gap-4 hover:brutal-shadow transition-all"
          >
            <svg viewBox="0 0 80 80" className="w-20 h-20 shrink-0" aria-hidden>
              <circle cx="40" cy="40" r="32" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="6" fill="none" />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke={d.tone === "fire" ? "var(--color-fire)" : d.tone === "volt" ? "var(--color-volt)" : "var(--color-ink)"}
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 32}
                strokeDashoffset={2 * Math.PI * 32 * (1 - d.pct)}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
              <text
                x="40"
                y="46"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontSize="18"
                fill="var(--color-ink)"
              >
                {d.pri}
              </text>
            </svg>
            <div>
              <div className="font-display text-3xl leading-none tracking-[-0.02em]">{d.value}</div>
              <div className="mono text-[10px] mt-2 text-ink/60">{d.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mono text-[10px] text-ink/50 mb-3">ESCALATION LADDER (auto-fires — no forwarding)</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
          {rungs.map((r, i) => (
            <div key={r.role} className="group relative">
              <div
                className={`brutal-border p-4 hover:-translate-y-1 transition-transform ${r.color}`}
              >
                <div className="mono text-[10px] opacity-70">T+{r.after}</div>
                <div className="font-display text-xl mt-1 tracking-[-0.02em]">{r.role}</div>
                <div className="mono text-[9px] mt-2 opacity-80">{r.note}</div>
              </div>
              {i < rungs.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-ink group-hover:translate-x-1 transition-transform">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 4 — Knowledge base deflection funnel
   ───────────────────────────────────────────────────────────── */

function DeflectionFunnel() {
  const layers = [
    { w: 100, label: "1,000 questions arrive", value: "1,000", tone: "bg-ink text-paper" },
    { w: 78, label: "Chatbot handles common intents", value: "−230", tone: "bg-volt text-ink" },
    { w: 56, label: "KB article resolves in-app", value: "−190", tone: "bg-volt text-ink" },
    { w: 40, label: "Suggested reply on ticket open", value: "−90", tone: "bg-volt text-ink" },
    { w: 28, label: "L1 human resolves", value: "310", tone: "bg-fire text-paper" },
    { w: 12, label: "L2 engineering", value: "120", tone: "bg-ink text-paper" },
    { w: 5, label: "Product / roadmap", value: "60", tone: "bg-ink text-paper" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">DEFLECTION.FUNNEL · 30-DAY WINDOW</div>
        <Tag tone="volt">42% off the queue</Tag>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div className="space-y-2">
          {layers.map((l, i) => (
            <div key={l.label} className="flex items-center gap-4 group" data-reveal>
              <div className="mono text-[10px] w-6 text-ink/50">{String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <div
                  className={`h-9 flex items-center px-3 ${l.tone} transition-all group-hover:translate-x-1`}
                  style={{ width: `${l.w}%` }}
                >
                  <span className="mono text-[10px] uppercase tracking-[0.12em]">{l.label}</span>
                </div>
              </div>
              <div className="mono text-sm text-ink/80 w-16 text-right">{l.value}</div>
            </div>
          ))}
        </div>

        <div className="brutal-border bg-bone p-5 max-w-[220px]">
          <div className="mono text-[10px] text-ink/50">RESULT</div>
          <div className="font-display text-5xl tracking-[-0.03em] mt-2">42%</div>
          <div className="text-sm text-ink/70 mt-2">
            of L1 volume never touches a human. Deflection tracked per article, per intent, per week.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 5 — Customer health twin dials
   ───────────────────────────────────────────────────────────── */

function HealthTwins() {
  const items = [
    {
      label: "Before",
      value: "?/100",
      pct: 0.5,
      tone: "fire" as const,
      desc: "CS opinion, sales gut, product's Slack complaints. Three scores. Zero owners.",
    },
    {
      label: "After",
      value: "82/100",
      pct: 0.82,
      tone: "volt" as const,
      desc: "Usage × support × billing × sentiment. One model. Retuned every quarter against actual churn.",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((g) => {
        const angle = -90 + 180 * g.pct;
        return (
          <div
            key={g.label}
            data-tilt="6"
            data-spotlight
            className="group brutal-border bg-paper p-6 hover:-translate-y-1 hover:brutal-shadow transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(280px circle at var(--sx,50%) var(--sy,50%), rgba(255,235,59,0.22), transparent 55%)",
            }}
          >
            <Tag tone={g.tone}>{g.label}</Tag>
            <div className="mt-6 flex items-center gap-6">
              <svg viewBox="0 0 160 100" className="w-40 group-hover:scale-105 transition-transform duration-500" aria-hidden>
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
                <div className="font-display text-5xl tracking-[-0.03em] leading-none">{g.value}</div>
                <div className="mono text-[10px] mt-2 text-ink/60">health score</div>
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
   ACT 6 — Feedback loop (CSAT → owner)
   ───────────────────────────────────────────────────────────── */

function FeedbackLoop() {
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">DETRACTOR.LOOP / T+00:00 → T+00:30</div>
        <Tag tone="fire">SLA to owner: 30m</Tag>
      </div>

      <svg viewBox="0 0 720 260" className="w-full h-[260px]" aria-hidden>
        <g>
          <rect x="10" y="110" width="130" height="44" fill="var(--color-ink)" />
          <text x="75" y="130" textAnchor="middle" fill="var(--color-paper)" fontSize="11" fontFamily="var(--font-mono)">
            TICKET CLOSED
          </text>
          <text x="75" y="146" textAnchor="middle" fill="var(--color-volt)" fontSize="9" fontFamily="var(--font-mono)">
            2h post-resolve
          </text>
        </g>
        <path d="M140 132 L 210 132" stroke="var(--color-ink)" strokeWidth="2" />
        <g>
          <rect x="210" y="110" width="130" height="44" fill="var(--color-bone)" stroke="var(--color-ink)" strokeWidth="1.5" />
          <text x="275" y="130" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)">
            CSAT ASK
          </text>
          <text x="275" y="146" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
            1 emoji + 1 line
          </text>
        </g>
        <path d="M340 120 C 400 120, 420 40, 480 40" stroke="var(--color-volt)" strokeWidth="2.5" fill="none" />
        <path d="M340 144 C 400 144, 420 220, 480 220" stroke="var(--color-fire)" strokeWidth="2.5" fill="none" />

        <g>
          <rect x="480" y="20" width="140" height="42" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="1.5" />
          <text x="490" y="38" fontSize="11" fontFamily="var(--font-mono)">
            😊 PROMOTER
          </text>
          <text x="490" y="52" fontSize="9" fontFamily="var(--font-mono)" opacity="0.7">
            → asked for review + case
          </text>
        </g>

        <g>
          <rect x="480" y="200" width="140" height="42" fill="var(--color-fire)" />
          <text x="490" y="218" fontSize="11" fontFamily="var(--font-mono)" fill="var(--color-paper)">
            🙁 DETRACTOR
          </text>
          <text x="490" y="232" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-paper)" opacity="0.9">
            → CS lead + AE in 30m
          </text>
        </g>

        <path d="M620 41 L 680 41" stroke="var(--color-volt)" strokeWidth="2" />
        <path d="M620 221 L 680 221" stroke="var(--color-fire)" strokeWidth="2" />

        <g>
          <rect x="680" y="20" width="34" height="42" fill="var(--color-ink)" />
          <text x="697" y="46" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-paper)">
            G2
          </text>
        </g>
        <g>
          <rect x="680" y="200" width="34" height="42" fill="var(--color-ink)" />
          <text x="697" y="226" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-paper)">
            AE
          </text>
        </g>

        <circle r="6" fill="var(--color-fire)" stroke="var(--color-ink)" strokeWidth="1.5">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M75 132 L 275 132 L 550 221 L 697 221"
          />
        </circle>
      </svg>

      <div className="mt-4 grid md:grid-cols-3 gap-3">
        {[
          { k: "CSAT", v: "captured on 71% of resolved tickets" },
          { k: "DETRACTOR", v: "CS lead + AE alerted within 30 minutes" },
          { k: "PROMOTER", v: "referral + review workflow fires cleanly" },
        ].map((x) => (
          <div key={x.k} className="border border-ink/15 p-4">
            <div className="mono text-[10px] text-ink/50 mb-1">{x.k}</div>
            <div className="text-sm">{x.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 7 — Churn / expansion radar
   ───────────────────────────────────────────────────────────── */

function ChurnRadar() {
  const accts = [
    { name: "Northwind Co.", risk: 82, sig: "6 P1 tickets · usage −40%", tone: "fire" },
    { name: "Vertex Labs", risk: 68, sig: "invoice bounced · low NPS", tone: "fire" },
    { name: "Aurora HQ", risk: 34, sig: "flat usage · quiet on tickets", tone: "volt" },
    { name: "Meridian Foods", risk: 12, sig: "+18% seats · promoter CSAT", tone: "volt" },
    { name: "Kepler Fin", risk: 8, sig: "renewal 60d · exec sponsor", tone: "ink" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-ink/10">
        <div>
          <div className="mono text-[11px] text-ink/60">ACCOUNTS.RADAR · WEEK 32</div>
          <div className="font-display text-2xl tracking-[-0.02em] mt-1">The 5 accounts your CSM should open on Monday.</div>
        </div>
        <Tag tone="volt">live</Tag>
      </div>
      <div className="grid grid-cols-[1.6fr_1.4fr_1fr_0.8fr] mono text-[10px] uppercase tracking-[0.14em] px-6 py-3 border-b border-ink/10 text-ink/50">
        <div>Account</div>
        <div>Signal</div>
        <div>Risk</div>
        <div>Action</div>
      </div>
      {accts.map((a) => (
        <div
          key={a.name}
          className="grid grid-cols-[1.6fr_1.4fr_1fr_0.8fr] items-center px-6 py-4 border-b border-ink/10 hover:bg-bone/60 transition-colors"
        >
          <div className="font-medium">{a.name}</div>
          <div className="mono text-[11px] text-ink/70">{a.sig}</div>
          <div>
            <div className="h-2 bg-ink/10 relative">
              <div
                className={`h-2 ${a.risk >= 60 ? "bg-fire" : a.risk >= 25 ? "bg-volt" : "bg-ink"}`}
                style={{ width: `${a.risk}%` }}
              />
            </div>
            <div className="mono text-[10px] mt-1 text-ink/60">{a.risk}/100</div>
          </div>
          <div>
            <span
              className={`mono text-[10px] px-2 py-1 rounded ${
                a.risk >= 60 ? "bg-fire text-paper" : a.risk >= 25 ? "bg-volt text-ink" : "bg-ink text-paper"
              }`}
            >
              {a.risk >= 60 ? "SAVE" : a.risk >= 25 ? "WATCH" : "EXPAND"}
            </span>
          </div>
        </div>
      ))}
      <div className="p-6 mono text-[11px] text-ink/60">
        Same record CS, sales, and product see. No dashboards to reconcile before the QBR.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6-week plan (bespoke gantt)
   ───────────────────────────────────────────────────────────── */

function BuildPlan() {
  const rows = [
    { title: "Discovery + CS interviews", weeks: [1, 2] },
    { title: "Ticket pipeline design", weeks: [2, 3] },
    { title: "SLA + escalation", weeks: [3, 4] },
    { title: "Knowledge base + chatbot", weeks: [3, 5] },
    { title: "CSAT / NPS / CES surveys", weeks: [4, 5] },
    { title: "Health score model", weeks: [4, 5] },
    { title: "Integrations (product + billing)", weeks: [4, 5] },
    { title: "Enablement + training", weeks: [5, 6] },
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
  const items = [
    "Intercom (migration)", "Zendesk (migration)", "Jira", "Linear",
    "Slack", "PagerDuty", "Statuspage", "Aircall",
    "Twilio", "Gong", "Segment", "Mixpanel",
    "Stripe", "Chargebee", "Notion", "Confluence",
    "Google Workspace", "Microsoft 365",
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-10 relative overflow-hidden">
      <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
        <div className="relative h-[300px]">
          <svg viewBox="0 0 300 300" className="w-full h-full animate-spin-slow" aria-hidden>
            <circle cx="150" cy="150" r="120" stroke="var(--color-ink)" strokeOpacity="0.15" strokeDasharray="4 6" fill="none" />
            <circle cx="150" cy="150" r="80" stroke="var(--color-ink)" strokeOpacity="0.1" strokeDasharray="2 4" fill="none" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="brutal-border bg-volt px-5 py-3 font-display text-2xl">Service Hub</div>
          </div>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 150 + 120 * Math.cos(rad);
            const y = 150 + 120 * Math.sin(rad);
            return (
              <div
                key={i}
                className="absolute h-3 w-3 rounded-full bg-fire brutal-border"
                style={{ left: `${(x / 300) * 100}%`, top: `${(y / 300) * 100}%`, transform: "translate(-50%,-50%)" }}
              />
            );
          })}
        </div>
        <div>
          <div className="mono text-[11px] text-ink/60 mb-4">CONNECTS TO YOUR STACK · NO DUCT TAPE</div>
          <div className="flex flex-wrap gap-2">
            {items.map((x) => (
              <span key={x} className="brutal-border bg-bone px-3 py-1.5 text-sm hover:bg-volt transition-colors">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Modules grid — six areas of Service Hub
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "V-01",
    title: "Ticket pipelines that own themselves",
    body: "AI triage tags every incoming ticket in seconds. Skill and load routing lands it with the right rep. No shared inbox, no forwarding, no orphans.",
    tone: "fire",
  },
  {
    code: "V-02",
    title: "SLAs that actually hold",
    body: "Priority-tiered SLAs with automated escalation. Team lead pings at 15m, head of CS at 30m. Managers see breach risk before the customer does.",
    tone: "ink",
  },
  {
    code: "V-03",
    title: "A knowledge base that deflects",
    body: "IA tuned to real queries, articles suggested inside chat and ticket, deflection reporting per article. 30-45% of L1 volume never touches a human.",
    tone: "volt",
  },
  {
    code: "V-04",
    title: "Portal + chat with a human on the other end",
    body: "Branded customer portal for logged-in accounts. Chatbot handles common intents, hands off with context. Business hours, routing, and holidays all in one place.",
    tone: "fire",
  },
  {
    code: "V-05",
    title: "Feedback that reaches an owner",
    body: "CSAT after every ticket, quarterly NPS by segment, CES on onboarding. Detractors alert the CS lead and AE in 30 minutes. Promoters land in the referral workflow.",
    tone: "ink",
  },
  {
    code: "V-06",
    title: "Health, churn, and expansion signals",
    body: "One health score CS, sales, and product all trust. Churn playbook fires before renewal. Expansion signals route to AEs with the context they need to close.",
    tone: "volt",
  },
] as const;

function ModuleGlyph({ i, stroke }: { i: number; stroke: string }) {
  const paths = [
    "M2 26 Q 18 6, 36 18 T 70 10",
    "M2 18 h 20 v -12 h 14 v 22 h 34",
    "M4 28 l 14 -20 l 14 14 l 14 -10 l 22 16",
    "M2 24 c 10 -18, 22 -18, 32 0 s 24 18, 34 0",
    "M2 22 h 12 l 4 -12 l 4 12 l 4 -8 l 4 8 h 40",
    "M2 6 h 68 M2 16 h 40 M2 26 h 60",
  ];
  return (
    <svg width="80" height="34" viewBox="0 0 72 32" className="mb-4" aria-hidden>
      <rect x="0" y="20" width="72" height="8" fill="#ffeb3b" opacity="0.55" />
      <path d={paths[i % paths.length]} stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round" data-draw />
    </svg>
  );
}

function ModulesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
      {MODULES.map((m, i) => {
        const isVolt = m.tone === "volt";
        const isFire = m.tone === "fire";
        const cardStroke = isFire ? "#ff5722" : "#0a0a0a";
        const chip = isFire ? "bg-fire text-paper" : isVolt ? "bg-volt text-ink" : "bg-ink text-paper";
        const tape = isFire ? "bg-fire" : isVolt ? "bg-volt" : "bg-ink";
        const shadowHover = isFire
          ? "hover:brutal-shadow-fire"
          : isVolt
            ? "hover:brutal-shadow-volt"
            : "hover:brutal-shadow";
        return (
          <div
            key={m.code}
            data-tilt="5"
            data-spotlight
            data-reveal
            className={`group module-card relative overflow-hidden brutal-border bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:-translate-x-0.5 ${shadowHover}`}
            style={{
              backgroundImage:
                "radial-gradient(320px circle at var(--sx,50%) var(--sy,50%), rgba(255,235,59,0.20), transparent 60%)",
            }}
          >
            <span className={`absolute -top-3 -right-3 h-14 w-14 rotate-45 ${tape} opacity-90`} />
            <span className="absolute top-2 right-2 mono text-[9px] text-ink/50 font-bold z-10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-fire via-volt to-ink"
            />

            <div className="flex items-center justify-between mb-4 relative">
              <span className={`mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded ${chip}`}>
                {m.code}
              </span>
            </div>
            <ModuleGlyph i={i} stroke={cardStroke} />
            <h3 className="font-display text-2xl tracking-[-0.02em] leading-tight mb-3">
              <span className="hl-target">{m.title}</span>
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed">{m.body}</p>
            <div className="mt-6 flex items-center gap-2 mono text-[10px] text-ink/50 border-t border-ink/10 pt-4">
              <span className="h-px w-8 bg-ink/40 group-hover:w-16 transition-all" />
              <span>Module {String(i + 1).padStart(2, "0")} of 06</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
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
    q: "We are on Zendesk / Intercom. Can you migrate us without losing history?",
    a: "Yes. Tickets, macros, articles, and user history move in a mirrored sandbox. We cut over on a low-volume weekend and run both in parallel for a week to verify parity. No customer feels the switch.",
  },
  {
    q: "How do you actually get 30-45% deflection?",
    a: "AI triage at the front door plus a KB tuned against real query logs. We wire suggested articles into the chat and the ticket-open moment, then measure deflection per article every week and prune what does not perform. It is a discipline, not a feature.",
  },
  {
    q: "Does the health score really predict churn?",
    a: "Not on day one. It calibrates over two quarters as we learn which signals correlate with your churn. We rebuild the weightings each quarter against evidence, not opinion. Most teams get to a defensible predictive model by month five.",
  },
  {
    q: "Can sales see support history?",
    a: "Yes, and product should too. Same record, permissioned views. That is the whole point of putting Service on the same platform. No more sales walking into a renewal blind to the six P1 tickets last month.",
  },
  {
    q: "Do we need Service Hub Enterprise?",
    a: "Only if you need custom objects, playbooks, workflow limits at scale, or a customer portal with memberships. We audit against your motion and recommend the smallest tier that does the job. If Pro is enough, we say so in writing.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function ServiceHub() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-paper border-b border-ink/10 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(10,10,10,0.18) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse 70% 60% at 30% 40%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 40%, black 20%, transparent 75%)",
          }}
        />
        <div aria-hidden className="absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full bg-volt/25 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-32 -right-40 w-[520px] h-[520px] rounded-full bg-fire/15 blur-3xl pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 relative">
          <div className="flex items-center gap-2 text-[11px] mb-8" data-reveal>
            <Link href="/hubspot-implementation" className="mono uppercase tracking-[0.14em] text-ink/50 hover:text-ink">
              HubSpot Implementation
            </Link>
            <span className="text-ink/20">/</span>
            <span className="mono uppercase tracking-[0.14em] px-2 py-1 rounded bg-volt text-ink">Svc-Hub</span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-end">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50 mb-6" data-reveal>
                HubSpot · Service Hub · Implementation
              </div>
              <h1
                className="font-display text-[54px] md:text-[84px] leading-[0.94] tracking-[-0.045em] hero-hl"
                data-split
              >
                Retention is a system, not a hope.
              </h1>
              <div className="mt-3 flex items-center gap-2" data-reveal data-reveal-delay="0.2">
                <div className="h-[10px] w-[180px] bg-volt rounded-sm" />
                <div className="h-[10px] w-[80px] bg-fire rounded-sm" />
                <div className="h-[10px] w-[40px] bg-ink rounded-sm" />
              </div>
              <p className="mt-8 max-w-[560px] text-lg md:text-xl text-ink/70 leading-relaxed" data-reveal data-reveal-delay="0.15">
                Tickets that route themselves. SLAs that actually hold. A knowledge base that deflects the boring
                stuff. And a health score CS, sales, and product all trust — before the invoice bounces. Wired
                end-to-end in 4-6 weeks by an operator who has done it a dozen times.
              </p>
              <div className="mt-10 flex flex-wrap gap-3" data-stagger>
                <Link
                  href="/contact"
                  data-magnetic="14"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-fire transition-colors"
                >
                  Scope a Service Hub build
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-paper text-ink group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link
                  href="/hubspot-audit"
                  data-magnetic="10"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm hover:bg-bone transition-colors"
                >
                  Get a free 47-point audit
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-4 max-w-[600px]" data-stagger>
                {[
                  { k: "−38%", v: "Median resolve", n: "against last quarter" },
                  { k: "+22", v: "NPS points", n: "measured 90 days post-live" },
                  { k: "42%", v: "L1 volume deflected", n: "off the human queue" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-ink/10 pl-4">
                    <div className="font-display text-3xl md:text-4xl leading-none tracking-tight text-ink">{o.k}</div>
                    <div className="mt-2 text-[11px] font-medium text-ink">{o.v}</div>
                    <div className="mt-1 text-[10px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: portal schematic card wrapping the live queue */}
            <div className="relative" data-tilt="6" data-reveal>
              <div className="absolute inset-4 rounded-3xl blur-2xl bg-volt/40 opacity-70 -z-10" />
              <div className="relative rounded-2xl border border-ink/15 bg-paper shadow-[0_28px_80px_-24px_rgba(10,10,10,0.28)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10 bg-bone/60">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
                    <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink/60">
                      Portal schematic · Svc-Hub
                    </span>
                  </div>
                  <span className="mono text-[10px] text-ink/40">live</span>
                </div>
                <div className="bg-paper">
                  <HeroQueue />
                </div>
                <div className="px-4 py-3 border-t border-ink/10 flex items-center justify-between bg-bone/40">
                  <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink/60">Signed off, week 06</span>
                  <span className="mono text-[10px] px-2 py-0.5 rounded bg-volt text-ink">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT 01 · The 4pm surprise ────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="You found out about churn from the invoice."
            lede="Every retention story we hear is the same shape. Support is drowning in a shared inbox. CS thinks the account is fine. Sales walks into the renewal blind. Product hears the complaints in Slack DMs. Four teams looking at four systems, none of them talking. That is not a Service Hub problem. That is a wiring problem."
          />
          <CsatVsChurn />
        </div>
      </section>

      {/* ── ACT 02 · Queue ──────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the front door"
            title="One queue. Three pipelines. No orphans."
            lede="Tickets are triaged by AI within seconds of landing, tagged, and routed by skill and load. L2 escalations carry context. Product feedback links to the roadmap. Billing flows to finance with the account attached. The shared inbox goes away, and nobody misses it."
          />
          <QueueBeforeAfter />
        </div>
      </section>

      {/* ── ACT 03 · SLA ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Promises kept"
            title="An SLA that alerts a human, not a spreadsheet."
            lede="Priority-tiered SLAs with real escalation ladders. Rep owns the ticket. Team lead pings at 15 minutes. Head of CS at 30. The CEO channel at 60 for P1 unresolved. Managers see breach risk on a dashboard before the customer picks up the phone."
          />
          <SlaLadder />
        </div>
      </section>

      {/* ── ACT 04 · Deflection (dark section) ───────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start" data-reveal>
            <div className="mono text-[11px] tracking-[0.22em] text-paper/50">
              <div className="font-display text-6xl md:text-7xl text-paper leading-none">04</div>
              <div className="mt-3 uppercase">The best ticket</div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] text-paper">
                The best ticket is the one your customer answered themselves.
              </h2>
              <p className="mt-5 max-w-[640px] text-paper/70 leading-relaxed text-lg">
                A knowledge base tuned against real query logs. Chatbot for common intents. Suggested articles the
                second someone opens a ticket. Deflection is measured per article, per week, and pruned like a
                product feature — because it is one.
              </p>
            </div>
          </div>
          <div className="bg-paper text-ink">
            <DeflectionFunnel />
          </div>
        </div>
      </section>

      {/* ── ACT 05 · Health ──────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="One score, three teams"
            title="A health score CS, sales, and product all defend."
            lede="Usage, support load, billing signals, and sentiment collapsed into one model. Recalibrated every quarter against actual churn, not opinion. When the score moves, the playbook fires. When it does not, nobody is guessing."
          />
          <HealthTwins />
        </div>
      </section>

      {/* ── ACT 06 · Feedback loop ───────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="06"
            kicker="Voice of the customer, wired"
            title="Feedback that reaches an owner in thirty minutes."
            lede="CSAT after every ticket. Quarterly NPS by segment. CES on onboarding. Detractors alert the CS lead and the AE within thirty minutes with the ticket, the account, and the context. Promoters land in the referral workflow. Nobody's feedback dies in a report."
          />
          <FeedbackLoop />
        </div>
      </section>

      {/* ── ACT 07 · Radar ───────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="07"
            kicker="From reporting to saving"
            title="The five accounts your CSM should open on Monday."
            lede="Health, usage, ticket volume, and sentiment feed a radar the whole GTM team trusts. Save plays fire on the accounts that need saving. Expansion signals route to AEs before they are stale. Renewal conversations start six months out with the evidence already in the record."
          />
          <ChurnRadar />
        </div>
      </section>

      {/* ── Modules ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="08"
            kicker="Six areas we rebuild"
            title="Everything that ships in a Service Hub build."
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Ticket pipeline design + routing map",
              "SLA definitions + escalation ladders",
              "Knowledge base with search-tuned articles",
              "Chatbot flows + handoff rules",
              "CSAT / NPS / CES survey suite",
              "Customer health scorecard + model doc",
              "Churn risk + expansion dashboards",
              "CS + manager review dashboards",
              "Loom walkthrough per automation",
              "30-day post-launch tune-up",
            ].map((d, i) => (
              <div
                key={d}
                className="group brutal-border bg-paper p-4 flex items-start gap-3 hover:brutal-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <span className="mono text-[10px] text-ink/50 mt-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="text-sm">{d}</div>
                <span className="ml-auto h-2 w-2 rounded-full bg-volt opacity-0 group-hover:opacity-100 transition" />
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
            lede="We do not leave a hairball of Zaps. Product usage, billing, on-call, and comms integrations are configured natively where possible, versioned where they are not, and documented either way."
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
                  <span className="font-display text-xl md:text-2xl tracking-[-0.02em] leading-snug flex-1">
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
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-fire blur-3xl opacity-25" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-volt blur-3xl opacity-15" />
        <div className="max-w-[1200px] mx-auto px-6 py-28 md:py-36 relative">
          <div className="mono text-[11px] uppercase tracking-[0.24em] text-paper/50 mb-6" data-reveal>
            13 · Ready when you are
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-[-0.045em] leading-[0.98] max-w-[900px]" data-split>
            A Service Hub that keeps customers, and expands them.
          </h2>
          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg" data-reveal>
            Send us your portal, your ticket volume, and the account you are most worried about. We come back with a
            scoped plan, a fixed price, and a start date within a week.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-stagger>
            <Link
              href="/contact"
              data-magnetic="16"
              className="inline-flex items-center gap-2 bg-volt text-ink pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-paper transition-colors"
            >
              Book a scoping call
              <span className="inline-flex items-center justify-center h-7 w-7 bg-ink text-paper">→</span>
            </Link>
            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 border border-paper/25 px-5 py-2.5 text-sm text-paper/80 hover:bg-paper/5 transition-colors"
            >
              See the full Implementation practice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
