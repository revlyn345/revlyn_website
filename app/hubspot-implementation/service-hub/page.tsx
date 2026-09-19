import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HubSpot Service Hub Implementation",
  description:
    "Service Hub built for retention: tickets that route themselves, SLAs that hold, a knowledge base that deflects the boring stuff, and a health score CS, sales, and product all trust.",
  alternates: { canonical: "/hubspot-implementation/service-hub" },
  openGraph: {
    title: "HubSpot Service Hub Implementation · Revlyn",
    description:
      "Ticketing, SLAs, knowledge base, CSAT, and churn signals wired to one customer record. Live in six weeks with the operator who built it in your Slack.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ─────────────────────────────────────────────────────────────
   Unsplash images  support, ticketing, dashboards, tooling.
   No stock people. No meetings. Content only.
   ───────────────────────────────────────────────────────────── */
const IMAGES = {
  csatAnalytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  queueChaos:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  queueOrder:
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80",
  slaHeader:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  kbHeader:
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
  healthDashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  feedbackHeader:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80",
  churnRadar:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  planHeader:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1600&q=80",
  integrationsHeader:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  ctaBg:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
};

/* ─────────────────────────────────────────────────────────────
   Small primitives
   ───────────────────────────────────────────────────────────── */

function Tag({
  children,
  tone = "ink",
  dark = false,
}: {
  children: React.ReactNode;
  tone?: "ink" | "fire" | "cream";
  dark?: boolean;
}) {
  const map: Record<string, string> = {
    ink: dark
      ? "bg-paper text-ink border-paper"
      : "bg-ink text-paper border-ink",
    fire: "bg-fire text-paper border-fire",
    cream: dark
      ? "bg-ink text-paper border-paper/40"
      : "bg-cream text-ink border-ink/50",
  };
  return (
    <span
      className={`mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border ${map[tone]}`}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO · Pipeline Model (LIGHT)
   ───────────────────────────────────────────────────────────── */

function PipelineModel() {
  const rows = [
    { id: "T-4821", subj: "Login loops on SSO", pr: "P1", sla: 12, owner: "Priya" },
    { id: "T-4820", subj: "Invoice line item wrong", pr: "P2", sla: 41, owner: "Ravi" },
    { id: "T-4819", subj: "Export as CSV feature", pr: "P3", sla: 86, owner: "KB · auto" },
    { id: "T-4818", subj: "API 429 on batch push", pr: "P1", sla: 6, owner: "Priya" },
    { id: "T-4817", subj: "How to invite a viewer?", pr: "P3", sla: 92, owner: "KB · auto" },
  ] as const;

  return (
    <div className="relative bg-white overflow-hidden rounded-2xl border border-ink/50 shadow-sm">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
              Live · Queue.v2
            </span>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-fire">
            Svc-Hub
          </span>
        </div>

        <div className="grid grid-cols-[70px_1fr_50px_70px_90px] mono text-[10px] uppercase tracking-[0.14em] text-ink/50 pb-3 border-b border-ink/50">
          <div>Ticket</div>
          <div>Subject</div>
          <div>Pri</div>
          <div>SLA</div>
          <div>Owner</div>
        </div>

        <div className="divide-y divide-ink/30">
          {rows.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-[70px_1fr_50px_70px_90px] items-center py-3 group hover:bg-cream/60 transition-colors"
            >
              <div className="mono text-[11px] text-ink/70">{r.id}</div>
              <div className="text-sm truncate text-ink">{r.subj}</div>
              <div>
                <span
                  className={`mono text-[9px] px-1.5 py-0.5 rounded ${
                    r.pr === "P1"
                      ? "bg-fire text-paper"
                      : r.pr === "P2"
                      ? "bg-volt text-ink"
                      : "bg-ink/10 text-ink"
                  }`}
                >
                  {r.pr}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    r.sla < 15 ? "bg-fire animate-pulse" : r.sla < 50 ? "bg-volt" : "bg-ink/40"
                  }`}
                />
                <span className="mono text-[10px] text-ink/70">{r.sla}m</span>
              </div>
              <div className="mono text-[10px] text-ink/60 truncate">{r.owner}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "−38%", v: "Median resolve" },
            { k: "42%", v: "Deflected" },
            { k: "+22", v: "NPS" },
            { k: "94%", v: "SLA held" },
          ].map((x) => (
            <div key={x.v} className="rounded-xl border border-ink/50 bg-cream px-3 py-3">
              <div className="font-display font-bold text-2xl leading-none">{x.k}</div>
              <div className="mono text-[10px] mt-1 text-ink/60">{x.v}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 mono text-[9px] uppercase tracking-[0.22em] text-ink/35">
          Illustrative
        </p>
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
  dark = false,
}: {
  num: string;
  kicker: string;
  title: string;
  lede?: string;
  dark?: boolean;
}) {
  const textColor = dark ? "text-paper" : "text-ink";
  const mutedColor = dark ? "text-paper/50" : "text-ink/50";
  const ledeColor = dark ? "text-paper/70" : "text-ink/65";

  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start">
      <div className={`mono text-[11px] uppercase tracking-[0.22em] ${mutedColor}`}>
        <div
          className={`font-display font-bold text-6xl md:text-7xl leading-none tracking-[-0.04em] ${textColor}`}
        >
          {num}
        </div>
        <div className="mt-3">{kicker}</div>
      </div>

      <div>
        <h2
          className={`font-display font-bold text-[clamp(2rem,4.8vw,3.75rem)] tracking-[-0.035em] leading-[1.1] pb-2 ${textColor}`}
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
   ACT 1 · CSAT vs churn
   ───────────────────────────────────────────────────────────── */

function CsatVsChurn() {
  return (
    <div className="rounded-2xl border border-ink/50 bg-white relative overflow-hidden shadow-sm">
      {/* Dashboard header image */}
      <div className="relative h-44 md:h-52 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.csatAnalytics}
          alt="Analytics dashboard showing CSAT trend and ticket volume"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire font-semibold mb-1.5">
              Friday 16:04 · CS lead&rsquo;s desk
            </div>
            <div className="font-display font-bold text-xl md:text-2xl tracking-[-0.02em] text-paper leading-tight max-w-[520px]">
              The churn you see on the invoice started three months ago.
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Tag tone="fire">Before</Tag>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[560px] text-ink">
          &ldquo;The invoice bounced. Turns out they filed six tickets last
          month. Nobody flagged it.&rdquo;
        </div>

        <svg viewBox="0 0 560 220" className="w-full mt-8 h-[220px]" aria-hidden>
          <line x1="30" y1="10" x2="30" y2="190" stroke="#0a0a0a" strokeWidth="1.5" />
          <line x1="30" y1="190" x2="550" y2="190" stroke="#0a0a0a" strokeWidth="1.5" />

          <path
            d="M30 60 L 90 70 L 150 90 L 210 100 L 270 115 L 330 130 L 390 140 L 450 160 L 540 175"
            stroke="#ff5533"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M30 170 L 90 160 L 150 150 L 210 130 L 270 115 L 330 95 L 390 80 L 450 55 L 540 40"
            stroke="#0a0a0a"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />

          <g transform="translate(490, 165)">
            <circle r="10" fill="#ff5533" stroke="#0a0a0a" strokeWidth="1.5" />
            <text x="14" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              churn
            </text>
          </g>

          <g transform="translate(340, 15)">
            <line x1="0" x2="24" y1="0" y2="0" stroke="#ff5533" strokeWidth="3" />
            <text x="30" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              CSAT
            </text>
            <line
              x1="100"
              x2="124"
              y1="0"
              y2="0"
              stroke="#0a0a0a"
              strokeOpacity="0.5"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <text x="130" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              tickets
            </text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Tickets live in a shared inbox nobody owns",
            "SLAs are a promise, not a system",
            "Sales finds out from the invoice, not the record",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-ink/50 bg-cream p-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-2">
                Symptom
              </div>
              <div className="text-[14px] text-ink/75 leading-relaxed">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 2 · Queue before/after
   ───────────────────────────────────────────────────────────── */

function QueueBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* BEFORE  chaotic inbox */}
      <div className="rounded-2xl border border-paper/30 bg-ink overflow-hidden shadow-sm">
        <div className="relative h-40 overflow-hidden border-b border-paper/30">
          <Image
            src={IMAGES.queueChaos}
            alt="Cluttered inbox and unowned support queue"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[0.5]"
          />
        </div>

        <div className="p-6 md:p-7">
          <h3 className="font-display font-bold text-2xl mt-2 tracking-[-0.02em] text-paper">
            One shared inbox, five brave humans
          </h3>

          <div className="mt-5 space-y-2.5">
            {[
              "support@  341 unread",
              "Slack DMs  62 from customers",
              "Intercom nobody knows the assignee rules",
              "Text messages from the CEO's phone",
              "A spreadsheet 'don't forget these'",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 text-[14px] text-paper/60">
                <span className="h-1.5 w-1.5 rounded-full bg-fire shrink-0" />
                <span className="line-through decoration-fire/50">{s}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
            Everything is urgent. Nothing is owned.
          </div>
        </div>
      </div>

      {/* AFTER — clean inbox */}
      <div className="rounded-2xl border border-fire/60 bg-fire/[0.08] overflow-hidden shadow-sm">
        <div className="relative h-40 overflow-hidden border-b border-fire/40">
          <Image
            src={IMAGES.queueOrder}
            alt="Clean, organized support inbox with routed tickets"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-7">
          <h3 className="font-display font-bold text-2xl mt-2 tracking-[-0.02em] text-paper">
            One queue, three pipelines, zero orphans
          </h3>

          <ul className="mt-5 space-y-3.5 text-[14px]">
            {[
              { s: "Triage", e: "AI classifies + tags in 4s" },
              { s: "L1 support", e: "auto-routed by skill + load" },
              { s: "L2 engineering", e: "escalates with context" },
              { s: "Product feedback", e: "linked to roadmap" },
              { s: "Billing", e: "flows to finance with account" },
            ].map((row, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr_auto] items-center gap-3">
                <span className="mono text-[10px] text-paper/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-paper">{row.s}</span>
                <span className="mono text-[10px] text-fire bg-ink border border-fire/40 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                  {row.e}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
            Every ticket has an owner within 60 seconds of arrival.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 3 · SLA ladder
   ───────────────────────────────────────────────────────────── */

function SlaLadder() {
  const rungs = [
    { role: "Rep", after: "0m", accent: "ink", note: "owns the ticket" },
    { role: "Team lead", after: "15m", accent: "fire", note: "if P1 unacknowledged" },
    { role: "Head of CS", after: "30m", accent: "fire", note: "if breach imminent" },
    { role: "CEO channel", after: "60m", accent: "ink", note: "if P1 unresolved" },
  ];

  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.slaHeader}
          alt="Monitoring dashboard tracking response time and SLA breaches"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              SLA.ladder · P1 incident
            </div>
            <Tag tone="fire">First response · 15m</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { pri: "P1", value: "15m", pct: 0.9, accent: "fire" as const, note: "critical, revenue-impacting" },
            { pri: "P2", value: "1h", pct: 0.65, accent: "ink" as const, note: "workaround exists" },
            { pri: "P3", value: "8h", pct: 0.3, accent: "ink" as const, note: "how-to / low urgency" },
          ].map((d) => {
            const color = d.accent === "fire" ? "#ff5533" : "#0a0a0a";
            return (
              <div
                key={d.pri}
                className="rounded-xl border border-ink/50 bg-cream p-5 flex items-center gap-4 transition-colors hover:bg-white"
              >
                <svg viewBox="0 0 80 80" className="w-20 h-20 shrink-0" aria-hidden>
                  <circle cx="40" cy="40" r="32" stroke="#0a0a0a" strokeOpacity="0.1" strokeWidth="6" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke={color}
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
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    fontWeight="700"
                    fontSize="18"
                    fill="#0a0a0a"
                  >
                    {d.pri}
                  </text>
                </svg>

                <div>
                  <div className="font-display font-bold text-3xl leading-none tracking-[-0.02em] text-ink">
                    {d.value}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] mt-2 text-ink/55">
                    {d.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/45 mb-4">
            Escalation ladder · auto-fires no forwarding
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {rungs.map((r, i) => {
              const isFire = r.accent === "fire";
              return (
                <div key={r.role} className="group relative">
                  <div
                    className={`rounded-xl p-5 transition-all group-hover:-translate-y-1 ${
                      isFire ? "bg-fire text-paper" : "bg-ink text-paper"
                    }`}
                  >
                    <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                      T+{r.after}
                    </div>
                    <div className="font-display font-bold text-xl mt-2 tracking-[-0.02em]">{r.role}</div>
                    <div className="mono text-[9px] uppercase tracking-[0.18em] mt-2.5 opacity-80">
                      {r.note}
                    </div>
                  </div>

                  {i < rungs.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-fire font-display text-lg group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 4 · Deflection funnel
   ───────────────────────────────────────────────────────────── */

function DeflectionFunnel() {
  const layers = [
    { w: 100, label: "1,000 questions arrive", value: "1,000", accent: "ink" },
    { w: 78, label: "Chatbot handles common intents", value: "−230", accent: "fire" },
    { w: 56, label: "KB article resolves in-app", value: "−190", accent: "fire" },
    { w: 40, label: "Suggested reply on ticket open", value: "−90", accent: "fire" },
    { w: 28, label: "L1 human resolves", value: "310", accent: "fire" },
    { w: 12, label: "L2 engineering", value: "120", accent: "ink" },
    { w: 5, label: "Product / roadmap", value: "60", accent: "ink" },
  ];

  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.kbHeader}
          alt="Knowledge base articles and chatbot flows on screen"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Deflection.funnel · 30-day window
            </div>
            <Tag tone="fire">42% off the queue</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="space-y-2">
            {layers.map((l, i) => {
              const isFire = l.accent === "fire";
              const isInk = l.accent === "ink";
              return (
                <div key={l.label} className="flex items-center gap-4 group">
                  <div className="mono text-[10px] w-6 text-ink/45 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <div
                      className={`h-9 flex items-center rounded-lg px-3.5 transition-all group-hover:translate-x-1 ${
                        isFire ? "bg-fire text-paper" : isInk ? "bg-ink text-paper" : "bg-cream text-ink"
                      }`}
                      style={{ width: `${l.w}%` }}
                    >
                      <span className="mono text-[10px] uppercase tracking-[0.14em] whitespace-nowrap overflow-hidden text-ellipsis">
                        {l.label}
                      </span>
                    </div>
                  </div>

                  <div className="mono text-[13px] text-ink/70 w-16 text-right tabular-nums">
                    {l.value}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-ink/50 bg-cream p-5 max-w-[220px]">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire">Result</div>
            <div className="font-display font-bold text-5xl tracking-[-0.03em] mt-2.5 text-ink">42%</div>
            <div className="text-[13.5px] text-ink/60 mt-3 leading-relaxed">
              of L1 volume never touches a human. Deflection tracked per article, per intent, per week.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 5 · Health twins
   ───────────────────────────────────────────────────────────── */

function HealthTwins() {
  const items = [
    {
      label: "Before",
      value: "?/100",
      pct: 0.5,
      accent: "fire" as const,
      desc: "CS opinion, sales gut, product's Slack complaints. Three scores. Zero owners.",
    },
    {
      label: "After",
      value: "82/100",
      pct: 0.82,
      accent: "paper" as const,
      desc: "Usage × support × billing × sentiment. One model. Retuned every quarter against actual churn.",
    },
  ];

  return (
    <div>
      {/* Header image */}
      <div className="relative h-44 md:h-52 overflow-hidden rounded-2xl border border-paper/30 mb-5">
        <Image
          src={IMAGES.healthDashboard}
          alt="Customer health dashboard showing usage, support load, and sentiment"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
            Health.score · recalibrated quarterly
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((g) => {
          const angle = -90 + 180 * g.pct;
          const color = g.accent === "fire" ? "#ff5533" : "#ffffff";
          return (
            <div
              key={g.label}
              className="rounded-2xl border border-paper/30 bg-ink p-6 md:p-7 shadow-sm"
            >
              <Tag tone={g.accent === "paper" ? "ink" : g.accent} dark>
                {g.label}
              </Tag>

              <div className="mt-6 flex items-center gap-6">
                <svg viewBox="0 0 160 100" className="w-40" aria-hidden>
                  <path
                    d="M10 90 A 70 70 0 0 1 150 90"
                    stroke="#ffffff"
                    strokeOpacity="0.1"
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
                    <line x1="0" y1="0" x2="0" y2="-60" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <circle r="5" fill="#ffffff" />
                  </g>
                </svg>

                <div>
                  <div className="font-display font-bold text-5xl tracking-[-0.03em] leading-none tabular-nums text-paper">
                    {g.value}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] mt-2.5 text-paper/55">
                    Health score
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[14px] text-paper/60 leading-relaxed">{g.desc}</p>
            </div>
          );
        })}
      </div>

      <p className="mt-4 mono text-[9px] uppercase tracking-[0.22em] text-paper/35">
        Illustrative example, not a specific client&rsquo;s measured result
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 6 · Feedback loop
   ───────────────────────────────────────────────────────────── */

function FeedbackLoop() {
  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.feedbackHeader}
          alt="CSAT survey responses and analytics dashboard"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Detractor.loop / T+00:00 → T+00:30
            </div>
            <Tag tone="fire">SLA to owner · 30m</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* <div className="relative">
          <svg viewBox="0 0 720 260" className="w-full h-[260px]" aria-hidden>
            <defs>
              <marker id="arrow-grey-light" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#0a0a0a" fillOpacity="0.3" />
              </marker>
            </defs>

            <g transform="translate(10, 108)">
              <rect width="130" height="44" rx="8" fill="#0a0a0a" />
              <text x="65" y="18" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1.5">
                TICKET CLOSED
              </text>
              <text x="65" y="34" textAnchor="middle" fill="#ff5533" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.5">
                2H POST-RESOLVE
              </text>
            </g>

            <g transform="translate(180, 108)">
              <rect width="130" height="44" rx="8" fill="#ffffff" stroke="#0a0a0a" strokeOpacity="0.4" strokeWidth="1.5" />
              <text x="65" y="18" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, monospace" fill="#0a0a0a" letterSpacing="1.5">
                CSAT ASK
              </text>
              <text x="65" y="34" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0a0a0a" fillOpacity="0.55">
                1 EMOJI + 1 LINE
              </text>
            </g>

            <g transform="translate(450, 30)">
              <rect width="140" height="42" rx="8" fill="#ffffff" stroke="#0a0a0a" strokeOpacity="0.4" strokeWidth="1.5" />
              <text x="70" y="18" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, monospace" fill="#0a0a0a" letterSpacing="1.2">
                😊 PROMOTER
              </text>
              <text x="70" y="34" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0a0a0a" fillOpacity="0.55">
                → ASKED FOR REVIEW + CASE
              </text>
            </g>

            <g transform="translate(450, 190)">
              <rect width="140" height="42" rx="8" fill="#ff5533" />
              <text x="70" y="18" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, monospace" fill="#ffffff" letterSpacing="1.2">
                🙁 DETRACTOR
              </text>
              <text x="70" y="34" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#ffffff" fillOpacity="0.85">
                → CS LEAD + AE IN 30M
              </text>
            </g>

            <g transform="translate(660, 30)">
              <rect width="36" height="42" rx="8" fill="#0a0a0a" />
              <text x="18" y="28" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#ffffff">G2</text>
            </g>
            <g transform="translate(660, 190)">
              <rect width="36" height="42" rx="8" fill="#0a0a0a" />
              <text x="18" y="28" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#ffffff">AE</text>
            </g>

            <path d="M140 130 L 180 130" stroke="#0a0a0a" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M310 130 C 380 130, 380 51, 450 51" stroke="#0a0a0a" strokeOpacity="0.3" strokeWidth="2" fill="none" markerEnd="url(#arrow-grey-light)" />
            <path d="M310 130 C 380 130, 380 211, 450 211" stroke="#ff5533" strokeWidth="2" fill="none" />
            <path d="M590 51 L 660 51" stroke="#0a0a0a" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M590 211 L 660 211" stroke="#ff5533" strokeWidth="2" />

            <circle r="5" fill="#ff5533" stroke="#0a0a0a" strokeWidth="1.5">
              <animateMotion dur="4s" repeatCount="indefinite" path="M140 130 L 180 130 L 310 130 L 450 51 L 660 51" />
            </circle>

            <circle r="5" fill="#ff5533" stroke="#0a0a0a" strokeWidth="1.5">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M140 130 L 180 130 L 310 130 L 450 211 L 660 211" />
            </circle>
          </svg>
        </div> */}

        <div className="mt-8 grid md:grid-cols-3 gap-3">
          {[
            { k: "CSAT", v: "captured on 71% of resolved tickets" },
            { k: "Detractor", v: "CS lead + AE alerted within 30 minutes" },
            { k: "Promoter", v: "referral + review workflow fires cleanly" },
          ].map((x) => (
            <div key={x.k} className="rounded-xl border border-ink/50 bg-cream p-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-2">{x.k}</div>
              <div className="text-[13.5px] text-ink/70 leading-relaxed">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 7 · Churn radar
   ───────────────────────────────────────────────────────────── */

function ChurnRadar() {
  const accts = [
    { name: "Northwind Co.", risk: 82, sig: "6 P1 tickets · usage −40%" },
    { name: "Vertex Labs", risk: 68, sig: "invoice bounced · low NPS" },
    { name: "Aurora HQ", risk: 34, sig: "flat usage · quiet on tickets" },
    { name: "Meridian Foods", risk: 12, sig: "+18% seats · promoter CSAT" },
    { name: "Kepler Fin", risk: 8, sig: "renewal 60d · exec sponsor" },
  ];

  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.churnRadar}
          alt="Customer account risk dashboard with churn signals"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Accounts.radar · Week 32
            </div>
            <Tag tone="fire">Live</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 border-b border-ink/50">
        <div className="font-display font-bold text-2xl tracking-[-0.02em] text-ink">
          The 5 accounts your CSM should open <span className="text-fire">on Monday.</span>
        </div>
      </div>

      <div className="grid grid-cols-[1.6fr_1.4fr_1fr_0.8fr] mono text-[10px] uppercase tracking-[0.22em] px-6 py-3 border-b border-ink/50 text-ink/45 bg-cream">
        <div>Account</div>
        <div>Signal</div>
        <div>Risk</div>
        <div>Action</div>
      </div>

      {accts.map((a) => {
        const isHigh = a.risk >= 60;
        const isMid = a.risk >= 25 && a.risk < 60;
        return (
          <div
            key={a.name}
            className="grid grid-cols-[1.6fr_1.4fr_1fr_0.8fr] items-center px-6 py-4 border-b border-ink/50 hover:bg-cream/50 transition-colors"
          >
            <div className="font-medium text-ink">{a.name}</div>
            <div className="mono text-[11px] text-ink/60">{a.sig}</div>
            <div>
              <div className="h-2 rounded-full bg-ink/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${isHigh ? "bg-fire" : isMid ? "bg-ink/60" : "bg-ink"}`}
                  style={{ width: `${a.risk}%` }}
                />
              </div>
              <div className="mono text-[10px] mt-1.5 text-ink/55 tabular-nums">{a.risk}/100</div>
            </div>
            <div>
              <span
                className={`mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full ${
                  isHigh
                    ? "bg-fire text-paper"
                    : isMid
                    ? "bg-ink text-paper"
                    : "bg-cream text-ink/70 border border-ink/50"
                }`}
              >
                {isHigh ? "Save" : isMid ? "Watch" : "Expand"}
              </span>
            </div>
          </div>
        );
      })}

      <div className="p-6 md:p-7 text-[13.5px] text-ink/60 leading-relaxed">
        Same record CS, sales, and product see. No dashboards to reconcile before the QBR.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6-week plan
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
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.planHeader}
          alt="Six-week project plan on a calendar dashboard"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
            Build.plan · 6 weeks / 9 workstreams
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] px-6 py-3.5 border-b border-ink/50 mono text-[10px] uppercase tracking-[0.22em] text-ink/45 bg-cream">
        <div>Workstream</div>
        {[1, 2, 3, 4, 5, 6].map((w) => (
          <div key={w}>Week {w}</div>
        ))}
      </div>

      {rows.map((r, i) => (
        <div
          key={r.title}
          className="grid grid-cols-[1.4fr_repeat(6,1fr)] items-center px-6 py-3.5 border-b border-ink/50 last:border-b-0 hover:bg-cream/50 transition-colors"
        >
          <div className="text-[13.5px] font-medium text-ink/85">{r.title}</div>
          {[1, 2, 3, 4, 5, 6].map((w) => {
            const active = w >= r.weeks[0] && w <= r.weeks[1];
            return (
              <div key={w} className="px-1">
                <div
                  className={`h-4 rounded-md ${
                    active ? (i % 3 === 0 ? "bg-fire" : i % 3 === 1 ? "bg-ink" : "bg-fire/50") : "bg-ink/[0.06]"
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
    { name: "Support & Migration", tools: ["Intercom (migration)", "Zendesk (migration)"] },
    { name: "Engineering & Incidents", tools: ["Jira", "Linear", "PagerDuty", "Statuspage"] },
    { name: "Communication", tools: ["Slack", "Aircall", "Twilio"] },
    { name: "Product & Data", tools: ["Gong", "Segment", "Mixpanel"] },
    { name: "Billing", tools: ["Stripe", "Chargebee"] },
    { name: "Docs & Workspace", tools: ["Notion", "Confluence", "Google Workspace", "Microsoft 365"] },
  ];

  return (
    <div className="rounded-2xl border border-paper/30 bg-ink overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-paper/30">
        <Image
          src={IMAGES.integrationsHeader}
          alt="Server rack and integration infrastructure"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 flex items-end px-6 md:px-10 pb-5">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
            Service Hub · Operating spine
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <svg viewBox="0 0 800 260" className="w-full h-auto" aria-hidden>
          <defs>
            <marker id="svc-int-arrow-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff" fillOpacity="0.4" />
            </marker>
          </defs>

          <path d="M400 130 H90" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />
          <path d="M400 130 H710" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />
          <path d="M370 110 L200 35" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />
          <path d="M430 110 L600 35" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />
          <path d="M370 150 L200 225" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />
          <path d="M430 150 L600 225" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#svc-int-arrow-dark)" />

          <g transform="translate(320, 105)">
            <rect width="160" height="50" rx="8" fill="#ff5533" />
            <text
              x="80"
              y="30"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fill="#ffffff"
              letterSpacing="0.5"
            >
              Service Hub
            </text>
          </g>

          {[
            { x: 10, y: 106, label: "Support & Migration" },
            { x: 630, y: 106, label: "Product & Data" },
            { x: 130, y: 12, label: "Engineering" },
            { x: 530, y: 12, label: "Communication" },
            { x: 130, y: 200, label: "Billing" },
            { x: 530, y: 200, label: "Docs & Workspace" },
          ].map((n) => (
            <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
              <rect width="160" height="46" rx="8" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
              <text x="10" y="27" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="500" fill="#ffffff">
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-8 border-t border-paper/30 pt-6">
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/45 mb-4">
            Full connection list · No duct tape
          </div>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.name}>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-2">{c.name}</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tools.map((t) => (
                    <span key={t} className="text-[12px] text-paper/65 border border-paper/30 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Modules grid
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "V-01",
    title: "Ticket pipelines that own themselves",
    body: "AI triage tags every incoming ticket in seconds. Skill and load routing lands it with the right rep. No shared inbox, no forwarding, no orphans.",
  },
  {
    code: "V-02",
    title: "SLAs that actually hold",
    body: "Priority-tiered SLAs with automated escalation. Team lead pings at 15m, head of CS at 30m. Managers see breach risk before the customer does.",
  },
  {
    code: "V-03",
    title: "A knowledge base that deflects",
    body: "IA tuned to real queries, articles suggested inside chat and ticket, deflection reporting per article. 30-45% of L1 volume never touches a human.",
  },
  {
    code: "V-04",
    title: "Portal + chat with a human on the other end",
    body: "Branded customer portal for logged-in accounts. Chatbot handles common intents, hands off with context. Business hours, routing, and holidays all in one place.",
  },
  {
    code: "V-05",
    title: "Feedback that reaches an owner",
    body: "CSAT after every ticket, quarterly NPS by segment, CES on onboarding. Detractors alert the CS lead and AE in 30 minutes. Promoters land in the referral workflow.",
  },
  {
    code: "V-06",
    title: "Health, churn, and expansion signals",
    body: "One health score CS, sales, and product all trust. Churn playbook fires before renewal. Expansion signals route to AEs with the context they need to close.",
  },
] as const;

function ModulesGrid() {
  return (
    <div className="border-t border-paper/30">
      {MODULES.map((m) => (
        <div
          key={m.code}
          className="group grid grid-cols-[4rem_1fr] gap-4 border-b border-paper/30 py-7 transition-colors hover:bg-paper/5 md:grid-cols-[5rem_1.3fr_1.7fr_2rem] md:items-center"
        >
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire">{m.code}</span>
          <h3 className="font-display font-bold text-xl md:text-2xl tracking-[-0.02em] text-paper">{m.title}</h3>
          <p className="col-span-2 md:col-span-1 text-[14px] text-paper/60 leading-relaxed">{m.body}</p>
          <span className="hidden md:block justify-self-end text-fire opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5">
            →
          </span>
        </div>
      ))}
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
      {/* ── HERO (LIGHT - bg-cream) ────────────────────────── */}
      <section className="relative bg-cream border-b border-ink/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-fire/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-fire/[0.05] blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] tracking-[-0.045em] text-ink">
                Retention is a system, <span className="text-fire">not a hope.</span>
              </h1>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-[6px] w-[120px] rounded-full bg-fire/40" />
                <div className="h-[6px] w-[60px] rounded-full bg-fire" />
                <div className="h-[6px] w-[30px] rounded-full bg-ink" />
              </div>

              <p className="mt-6 max-w-[560px] text-lg md:text-xl text-ink/65 leading-relaxed">
                Tickets that route themselves. SLAs that actually hold. A knowledge base that deflects the boring stuff. And a health score CS, sales, and product all trust before the invoice bounces. Wired end-to-end in six weeks by an operator who has done it a dozen times.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-ink text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_10px_30px_-12px_rgba(10,10,10,0.4)] hover:bg-fire hover:shadow-[0_10px_30px_-12px_rgba(255,85,51,0.6)] transition-all"
                >
                  Scope a Service Hub build
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-ink group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>

                <Link
                  href="/hubspot-audit"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink/50 bg-white text-ink px-5 py-3.5 font-medium text-[15px] hover:bg-ink hover:text-paper hover:border-ink transition-colors"
                >
                  Get a free 47-point audit
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[600px]">
                {[
                  { k: "−38%", v: "Median resolve", n: "against last quarter" },
                  { k: "+22", v: "NPS points", n: "measured 90 days post-live" },
                  { k: "42%", v: "L1 volume deflected", n: "off the human queue" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-fire/40 pl-4">
                    <div className="font-display font-bold text-3xl md:text-4xl leading-none tracking-[-0.03em] text-ink">
                      {o.k}
                    </div>
                    <div className="mt-2 text-[13px] font-medium text-ink/85">{o.v}</div>
                    <div className="mt-1 text-[11.5px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 mono text-[9px] uppercase tracking-[0.22em] text-ink/35">
                Illustrative example figures
              </p>
            </div>

            <div className="relative">
              <PipelineModel />
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT 01 (LIGHT - bg-white) ─────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="You found out about churn from the invoice."
            lede="Every retention story we hear is the same shape. Support is drowning in a shared inbox. CS thinks the account is fine. Sales walks into the renewal blind. Product hears the complaints in Slack DMs. Four teams looking at four systems, none of them talking. That is not a Service Hub problem. That is a wiring problem."
          />
          <CsatVsChurn />
        </div>
      </section>

      {/* ── ACT 02 (DARK - bg-ink) ────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the front door"
            title="One queue. Three pipelines. No orphans."
            lede="Tickets are triaged by AI within seconds of landing, tagged, and routed by skill and load. L2 escalations carry context. Product feedback links to the roadmap. Billing flows to finance with the account attached. The shared inbox goes away, and nobody misses it."
            dark
          />
          <QueueBeforeAfter />
        </div>
      </section>

      {/* ── ACT 03 (LIGHT - bg-cream) ─────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Promises kept"
            title="An SLA that alerts a human, not a spreadsheet."
            lede="Priority-tiered SLAs with real escalation ladders. Rep owns the ticket. Team lead pings at 15 minutes. Head of CS at 30. The CEO channel at 60 for P1 unresolved. Managers see breach risk on a dashboard before the customer picks up the phone."
          />
          <SlaLadder />
        </div>
      </section>

      {/* ── ACT 04 (LIGHT - bg-white) ─────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="04"
            kicker="The best ticket"
            title="The best ticket is the one your customer answered themselves."
            lede="A knowledge base tuned against real query logs. Chatbot for common intents. Suggested articles the second someone opens a ticket. Deflection is measured per article, per week, and pruned like a product feature because it is one."
          />
          <DeflectionFunnel />
        </div>
      </section>

      {/* ── ACT 05 (DARK - bg-ink) ────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="One score, three teams"
            title="A health score CS, sales, and product all defend."
            lede="Usage, support load, billing signals, and sentiment collapsed into one model. Recalibrated every quarter against actual churn, not opinion. When the score moves, the playbook fires. When it does not, nobody is guessing."
            dark
          />
          <HealthTwins />
        </div>
      </section>

      {/* ── ACT 06 (LIGHT - bg-cream) ─────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="06"
            kicker="Voice of the customer, wired"
            title="Feedback that reaches an owner in thirty minutes."
            lede="CSAT after every ticket. Quarterly NPS by segment. CES on onboarding. Detractors alert the CS lead and the AE within thirty minutes with the ticket, the account, and the context. Promoters land in the referral workflow. Nobody's feedback dies in a report."
          />
          <FeedbackLoop />
        </div>
      </section>

      {/* ── ACT 07 (LIGHT - bg-white) ─────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="07"
            kicker="From reporting to saving"
            title="The five accounts your CSM should open on Monday."
            lede="Health, usage, ticket volume, and sentiment feed a radar the whole GTM team trusts. Save plays fire on the accounts that need saving. Expansion signals route to AEs before they are stale. Renewal conversations start six months out with the evidence already in the record."
          />
          <ChurnRadar />
        </div>
      </section>

      {/* ── Modules (DARK - bg-ink) ───────────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="08"
            kicker="Six areas we rebuild"
            title="Everything that ships in a Service Hub build."
            dark
          />
          <ModulesGrid />
        </div>
      </section>

      {/* ── Build plan (LIGHT - bg-cream) ─────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-cream">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="09"
            kicker="The plan"
            title="Six weeks. Fixed scope. Live on the last day."
            lede="Every workstream has a named owner on our side and a named owner on yours. Weekly demo, weekly decision log, one Slack channel. No surprises on week five."
          />
          <BuildPlan />
        </div>
      </section>

      {/* ── Deliverables (LIGHT - bg-white) ──────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
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
                className="group rounded-2xl border border-ink/50 bg-cream p-5 flex items-start gap-3 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
              >
                <span className="mono text-[10px] text-fire tracking-[0.22em] mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-[13.5px] text-ink/75 leading-relaxed">{d}</div>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-fire opacity-0 group-hover:opacity-100 transition shrink-0 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations (DARK - bg-ink) ──────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="11"
            kicker="Wires, not duct tape"
            title="Connected to the rest of your stack."
            lede="We do not leave a hairball of Zaps. Product usage, billing, on-call, and comms integrations are configured natively where possible, versioned where they are not, and documented either way."
            dark
          />
          <IntegrationsOrbit />
        </div>
      </section>

      {/* ── FAQ (LIGHT - bg-cream) ────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="font-display font-bold text-[clamp(2rem,4.8vw,3.75rem)] tracking-[-0.035em] leading-[1.02] mb-12 text-ink">
            Five questions before <span className="text-fire">you email us.</span>
          </h2>

          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-ink/50 bg-white transition-all hover:border-ink/70"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-fire shrink-0">
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-[16px] md:text-[17px] tracking-[-0.01em] leading-snug flex-1 min-w-0 text-ink">
                    {f.q}
                  </span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-ink text-paper flex items-center justify-center text-lg transition-all group-open:rotate-45 group-open:bg-fire">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-[68px] text-[14px] text-ink/65 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (DARK - bg-ink) ───────────────────────────── */}
      <section className="relative bg-ink text-paper overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.ctaBg}
            alt="Analytics dashboard with customer health data"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
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
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire">
              13 · Ready when you are
            </span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2.25rem,6vw,4.5rem)] tracking-[-0.045em] leading-[1.05] max-w-[900px] text-paper pb-2">
            A Service Hub that keeps customers <span className="text-fire">and expands them.</span>
          </h2>

          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg">
            Send us your portal, your ticket volume, and the account you are most worried about. We come back with a scoped plan, a fixed price, and a start date within a week.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookCallButton className="group inline-flex items-center gap-2 rounded-lg bg-fire text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_15px_40px_-15px_rgba(255,85,51,0.6)] hover:bg-orange-600 transition-all">
              Book a scoping call
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-fire group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </BookCallButton>

            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 rounded-lg border border-paper/25 text-paper px-5 py-3.5 font-medium text-[15px] hover:bg-paper/10 transition-colors"
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