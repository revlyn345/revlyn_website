import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "HubSpot Marketing Hub Implementation",
  description:
    "A Marketing Hub built the way demand actually works: clear lifecycle stages, forms that route in seconds, campaigns tied to revenue, and dashboards a CMO can defend on a Monday.",
  alternates: { canonical: "/hubspot-implementation/marketing-hub" },
  openGraph: {
    title: "HubSpot Marketing Hub Implementation · Revlyn",
    description:
      "Marketing that ships pipeline, not opens. Lifecycle, forms, campaigns, and attribution wired end-to-end in 4-6 weeks.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ─────────────────────────────────────────────────────────────
   Primitives
   ───────────────────────────────────────────────────────────── */

function Tag({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "fire" | "volt" }) {
  const map: Record<string, string> = {
    ink: "bg-ink text-paper",
    fire: "bg-fire text-paper",
    volt: "bg-volt text-ink",
  };
  return <span className={`mono text-[10px] px-2 py-1 rounded ${map[tone]}`}>{children}</span>;
}

function ChapterProgress({ step, total = 6 }: { step: number; total?: number }) {
  const dots = Array.from({ length: total });
  const markerX = 10 + ((step - 1) / (total - 1)) * 130;
  return (
    <svg viewBox="0 0 160 16" className="w-40 h-4" aria-hidden>
      <path d="M4 8 Q 30 -2, 60 8 T 150 8" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
      <path
        d="M4 8 Q 30 -2, 60 8 T 150 8"
        stroke="var(--color-fire)"
        strokeWidth="2"
        fill="none"
        strokeDasharray={`${markerX} 999`}
      />
      {dots.map((_, i) => (
        <circle
          key={i}
          cx={10 + (i / (total - 1)) * 130}
          cy="8"
          r={i + 1 === step ? 3.5 : 2}
          fill={i + 1 === step ? "var(--color-fire)" : "var(--color-ink)"}
          fillOpacity={i + 1 === step ? 1 : 0.25}
        />
      ))}
    </svg>
  );
}

function ChapterKicker({ step, label }: { step: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5" data-reveal>
      <ChapterProgress step={step} />
      <span className="mono text-[11px] tracking-[0.16em] text-ink/50 uppercase whitespace-nowrap">
        Chapter {String(step).padStart(2, "0")} / 06 · {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero — portal schematic
   ───────────────────────────────────────────────────────────── */

function PortalSchematic() {
  return (
    <div className="relative rounded-2xl border border-ink/15 bg-paper shadow-[0_28px_80px_-24px_rgba(10,10,10,0.28)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10 bg-bone/60">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
          <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink/60">Portal schematic · M-Hub</span>
        </div>
        <span className="mono text-[10px] text-ink/40">live</span>
      </div>
      <div className="relative bg-paper p-8" style={{ minHeight: 320 }}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <svg viewBox="0 0 400 260" className="w-full h-auto relative" data-hero-schematic>
          <path
            d="M40 220 C 130 220, 150 100, 230 90 S 320 40, 370 40"
            stroke="url(#mhubGrad)"
            strokeWidth="10"
            strokeDasharray="2 12"
            strokeLinecap="round"
            fill="none"
            data-draw
          />
          <path
            d="M40 220 C 130 220, 150 100, 230 90 S 320 40, 370 40"
            stroke="var(--color-fire)"
            strokeWidth="2"
            strokeDasharray="1 10"
            fill="none"
          />
          <defs>
            <linearGradient id="mhubGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--color-fire)" />
              <stop offset="100%" stopColor="var(--color-volt)" />
            </linearGradient>
          </defs>

          <g data-node>
            <rect x="10" y="205" width="70" height="30" rx="4" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.5" />
            <text x="45" y="224" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">SIGNAL</text>
          </g>
          <g data-node>
            <circle cx="150" cy="150" r="16" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="150" y="153" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink)">OPS</text>
          </g>
          <g data-node>
            <rect x="195" y="75" width="70" height="30" rx="4" fill="var(--color-fire)" />
            <text x="230" y="94" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-paper)">M-HUB</text>
          </g>
          <g data-node>
            <circle cx="290" cy="150" r="10" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="290" y="175" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink)">CRM</text>
          </g>
          <g data-node>
            <rect x="330" y="25" width="65" height="30" rx="4" fill="var(--color-ink)" />
            <text x="362" y="44" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-paper)">REVENUE</text>
          </g>

          <text x="200" y="248" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink)" opacity="0.5">
            everything wired
          </text>
        </svg>
      </div>
      <div className="px-4 py-3 border-t border-ink/10 flex items-center justify-between bg-bone/40">
        <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink/60">Signed off, week 06</span>
        <span className="mono text-[10px] px-2 py-0.5 rounded bg-fire text-paper">Live</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 01 — the quote + before/after bars
   ───────────────────────────────────────────────────────────── */

function QuoteAndBars() {
  const before = [70, 62, 55, 48, 40];
  const after = [40, 55, 68, 80, 95];
  return (
    <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
      <div data-reveal>
        <p className="font-display text-3xl md:text-4xl leading-[1.15] tracking-[-0.02em]">
          <span className="text-fire">&ldquo;</span>We&rsquo;re sending a lot, but sales says the leads are cold
          and nobody trusts the attribution.<span className="text-fire">&rdquo;</span>
        </p>
        <p className="mt-6 text-ink/65 leading-relaxed max-w-[520px]">
          Something close to that, in your own words, on a Wednesday morning. That is the reason this page exists.
        </p>
        <p className="mt-6 text-sm italic text-ink/60 flex items-start gap-2">
          <span className="text-fire not-italic">↳</span>
          Signed, an operator who has spent a decade inside portals like yours.
        </p>
      </div>
      <div className="flex items-center gap-4" data-reveal data-reveal-delay="0.1">
        <div className="flex-1">
          <div className="mono text-[9px] uppercase tracking-[0.14em] text-ink/50 mb-2">Before</div>
          <div className="flex items-end gap-1.5 h-24">
            {before.map((h, i) => (
              <div key={i} className="flex-1 bg-ink/25" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mono text-[9px] text-ink/50 mt-2">leaking, guessing, arguing</div>
        </div>
        <span className="text-fire text-xl">→</span>
        <div className="flex-1">
          <div className="mono text-[9px] uppercase tracking-[0.14em] text-ink/50 mb-2">After</div>
          <div className="flex items-end gap-1.5 h-24">
            {after.map((h, i) => (
              <div key={i} className="flex-1 bg-fire" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mono text-[9px] text-ink/50 mt-2">measured, routed, compounding</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 02 — the machinery diagram + 6 module cards
   ───────────────────────────────────────────────────────────── */

function MachineryDiagram() {
  return (
    <div className="brutal-border bg-bone p-6 md:p-8">
      <div className="mono text-[10px] text-ink/50 mb-6">the working machinery, drawn end to end</div>
      <svg viewBox="0 0 720 140" className="w-full h-auto" aria-hidden>
        <path
          d="M20 70 C 100 20, 180 20, 260 70 S 420 120, 500 60 S 620 20, 700 40"
          stroke="var(--color-fire)"
          strokeWidth="3"
          fill="none"
          data-draw
        />
        <path
          d="M20 90 C 100 40, 180 100, 260 90 S 420 60, 500 100 S 620 60, 700 80"
          stroke="var(--color-ink)"
          strokeOpacity="0.25"
          strokeDasharray="3 5"
          strokeWidth="2"
          fill="none"
        />
        {[
          [20, 70],
          [150, 45],
          [260, 70],
          [380, 95],
          [500, 60],
          [700, 40],
        ].map(([cx, cy], i) => (
          <g key={i} data-node>
            <circle cx={cx} cy={cy} r="14" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const MODULES = [
  {
    code: "M-01",
    tone: "fire",
    title: "Lifecycle & lead scoring",
    body: "The spine of Marketing Hub. Every contact has a stage, a score, and a reason for the score.",
    points: [
      "Subscriber → MQL → SQL → Opp definitions",
      "Behavioural + firmographic scoring model",
      "Auto-degrade rules for stale contacts",
    ],
  },
  {
    code: "M-02",
    tone: "volt",
    title: "Forms, CTAs & routing",
    body: "Forms that read like humans, route in seconds, and stop losing leads in the seams.",
    points: [
      "Progressive profiling on repeat visits",
      "Round-robin + territory routing to owners",
      "Slack notification with enriched context",
    ],
  },
  {
    code: "M-03",
    tone: "ink",
    title: "Campaign architecture",
    body: "Campaigns as first-class objects, wired to UTMs, ads, and revenue. Not a folder full of emails.",
    points: [
      "Campaign taxonomy + naming standard",
      "UTM builder + governance",
      "Cross-channel roll-ups (email, ads, social)",
    ],
  },
  {
    code: "M-04",
    tone: "fire",
    title: "Email & workflows",
    body: "Nurtures, product-led sequences, and lifecycle emails that behave like a good rep would.",
    points: [
      "Branching workflows with hold-out logic",
      "Send-time optimization + suppression rules",
      "Deliverability warm-up when it's needed",
    ],
  },
  {
    code: "M-05",
    tone: "volt",
    title: "Landing pages & CMS",
    body: "Templates your team can actually use, on-brand, and instrumented from the first pixel.",
    points: [
      "Modular page templates (hero, proof, form)",
      "A/B testing framework with real sample sizes",
      "GA4, GTM, and event tracking wired in",
    ],
  },
  {
    code: "M-06",
    tone: "ink",
    title: "Attribution & reporting",
    body: "One attribution model, one dashboard, one story. Marketing and sales stop fighting about the number.",
    points: [
      "Multi-touch model chosen for your motion",
      "Source → MQL → Opp → Won pipeline report",
      "Board-ready dashboard, weekly + quarterly",
    ],
  },
] as const;

function ModuleGlyph({ i }: { i: number }) {
  const paths = [
    "M2 20 Q 18 4, 36 14 T 70 8",
    "M2 20 h 18 v -10 h 16 v 14 h 30",
    "M4 24 l 12 -16 l 12 12 l 12 -18 l 24 20",
  ];
  return (
    <svg width="72" height="26" viewBox="0 0 72 26" className="mb-3" aria-hidden>
      <path d={paths[i % paths.length]} stroke="var(--color-fire)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function ModulesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-stagger>
      {MODULES.map((m, i) => (
        <div
          key={m.code}
          className="group relative overflow-hidden brutal-border bg-paper p-6 hover:-translate-y-1 hover:brutal-shadow transition-all duration-200"
          style={{
            backgroundImage: "radial-gradient(320px circle at 30% 20%, rgba(255,235,59,0.15), transparent 60%)",
          }}
        >
          <Tag tone={m.tone}>{m.code}</Tag>
          <ModuleGlyph i={i} />
          <h3 className="font-display text-2xl tracking-[-0.02em] leading-tight mb-2">{m.title}</h3>
          <p className="text-sm text-ink/70 leading-relaxed mb-4">{m.body}</p>
          <ul className="space-y-1.5 pt-3 border-t border-ink/10">
            {m.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-[13px] text-ink/70">
                <span className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${m.tone === "volt" ? "bg-ink" : "bg-fire"}`} />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 03 — build timeline: gantt + weekly cards
   ───────────────────────────────────────────────────────────── */

const WEEKS = [
  { w: "Week 1", label: "W01", title: "Discovery & audit", tasks: ["Portal audit", "Lifecycle mapping", "Data model review"], tone: "fire" },
  { w: "Week 2", label: "W02", title: "Architecture", tasks: ["Scoring model", "Campaign taxonomy", "Routing rules"], tone: "volt" },
  { w: "Week 3", label: "W03", title: "Build", tasks: ["Forms & CTAs", "Workflows", "Templates & pages"], tone: "fire" },
  { w: "Week 4", label: "W04", title: "Integrations", tasks: ["GA4/GTM", "Ads + CRM sync", "Enrichment"], tone: "volt" },
  { w: "Week 5", label: "W05", title: "Test & QA", tasks: ["End-to-end flows", "Deliverability", "Attribution QA"], tone: "fire" },
  { w: "Week 6", label: "W06", title: "Launch & train", tasks: ["Team training", "SOPs + Loom", "Go-live & tune-up"], tone: "volt" },
] as const;

function BuildTimeline() {
  return (
    <div className="space-y-6">
      <div className="brutal-border bg-ink p-6 md:p-8 overflow-x-auto">
        <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-2 min-w-[600px]">
          <div />
          {WEEKS.map((w) => (
            <div key={w.label} className="mono text-[9px] text-paper/40 text-center">{w.label}</div>
          ))}
          {WEEKS.map((row, r) => (
            <div key={row.w} className="contents">
              <div className="mono text-[10px] text-paper/60 flex items-center">{row.w}</div>
              {WEEKS.map((_, c) => (
                <div key={c} className="h-9 flex items-center">
                  {c === r && (
                    <div
                      className={`w-full h-6 rounded-sm flex items-center px-2 mono text-[9px] text-ink font-medium ${
                        row.tone === "fire" ? "bg-fire text-paper" : "bg-volt"
                      }`}
                    >
                      {row.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4" data-stagger>
        {WEEKS.map((w) => (
          <div key={w.label} className="rounded-2xl border-2 border-ink bg-ink text-paper p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="mono text-[10px] tracking-[0.14em] text-paper/50 uppercase">{w.w}</span>
              <span className={`h-1.5 w-6 rounded-full ${w.tone === "fire" ? "bg-fire" : "bg-volt"}`} />
            </div>
            <h3 className="font-display text-xl mb-3">{w.title}</h3>
            <ul className="space-y-1.5">
              {w.tasks.map((t) => (
                <li key={t} className="text-sm text-paper/75 flex gap-2">
                  <span className="text-paper/40">·</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-3 mono text-[9px] text-paper/30">{w.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 04 — deliverables
   ───────────────────────────────────────────────────────────── */

const DELIVERABLES = [
  "Documented lifecycle & scoring model",
  "Campaign taxonomy + UTM standard",
  "Full workflow inventory with Loom walkthroughs",
  "Form + routing map (visual)",
  "Attribution dashboard (weekly + quarterly)",
  "Deliverability health report",
  "Email + landing page template library",
  "Admin SOPs for the marketing ops team",
  "30-day tune-up window",
  "Slack channel with the operator who built it",
];

function DeliverablesGrid() {
  const tones = ["fire", "volt", "ink"] as const;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {DELIVERABLES.map((d, i) => (
          <div
            key={d}
            className="flex items-center gap-3 rounded-xl border border-ink/12 bg-paper px-4 py-3 hover:border-ink/30 transition-colors"
          >
            <Tag tone={tones[i % 3]}>{String(i + 1).padStart(2, "0")}</Tag>
            <span className="text-sm">{d}</span>
          </div>
        ))}
      </div>
      <div className="brutal-border bg-bone p-5">
        <div className="mono text-[10px] uppercase tracking-[0.16em] text-ink/50 mb-2">Included, always</div>
        <p className="text-sm text-ink/75 leading-relaxed">
          Loom walkthrough of every automation · SOP for your admin · 30-day tune-up window · Slack channel with the
          operator who built it.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 05 — integrations orbit
   ───────────────────────────────────────────────────────────── */

const INTEGRATIONS = [
  "Salesforce",
  "Google Analytics 4",
  "Google Tag Manager",
  "Google Ads",
  "LinkedIn Ads",
  "Meta Ads",
  "Segment",
  "Clearbit / Apollo",
  "Zoom + Chili Piper",
  "Slack",
  "Webflow / WordPress",
  "Zapier / Make",
];

function IntegrationsOrbit() {
  const satellites = INTEGRATIONS.slice(0, 10);
  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
      <div>
        <div className="flex flex-wrap gap-2">
          {INTEGRATIONS.map((x) => (
            <span key={x} className="brutal-border bg-paper px-3 py-1.5 text-sm hover:bg-volt transition-colors">
              {x}
            </span>
          ))}
        </div>
      </div>
      <div className="relative h-[320px] hidden lg:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-24 rounded-lg bg-fire flex items-center justify-center mono text-[11px] font-bold text-paper shadow-[0_0_60px_10px_rgba(255,87,34,0.35)]">
            HUBSPOT
          </div>
        </div>
        {satellites.map((s, i) => {
          const angle = (i / satellites.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          return (
            <div
              key={s}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={`h-8 w-8 rounded-full border-2 border-ink flex items-center justify-center mono text-[9px] ${
                  i % 2 === 0 ? "bg-volt text-ink" : "bg-paper text-ink"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="mono text-[9px] text-ink/60 whitespace-nowrap">{s}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Chapter 06 — FAQ
   ───────────────────────────────────────────────────────────── */

const FAQ = [
  {
    q: "Do we need to be on Marketing Hub Enterprise?",
    a: "Only if you need custom attribution reporting, ABM tools, or multi-touch revenue attribution at scale. We audit against your motion and recommend the smallest tier that does the job, in writing.",
  },
  {
    q: "What about our existing campaigns and workflows?",
    a: "We inventory everything first. Working campaigns and workflows are preserved and re-platformed cleanly; anything abandoned or broken gets flagged before we touch it, not deleted without a conversation.",
  },
  {
    q: "Can you make sales trust the leads?",
    a: "Trust comes from a scoring model both teams sign off on and a routing rule that puts the right lead in front of the right rep within seconds — not from a marketing promise. We build the former, which earns the latter.",
  },
  {
    q: "How much of our team's time do you need?",
    a: "A few structured working sessions across six weeks, plus quick async answers in Slack. We do the building; your team brings the context we can't invent, like which fields sales actually looks at.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function MarketingHub() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-paper border-b border-ink/10 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(10,10,10,0.18) 1px, transparent 0)",
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
              ← HubSpot Implementation
            </Link>
            <span className="text-ink/20">/</span>
            <span className="mono uppercase tracking-[0.14em] px-2 py-1 rounded bg-fire text-paper">M-Hub</span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-end">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50 mb-6" data-reveal>
                HubSpot · Marketing Hub · Implementation
              </div>
              <h1 className="font-display text-[54px] md:text-[84px] leading-[0.94] tracking-[-0.045em]">
                Marketing that ships pipeline, not opens.
              </h1>
              <div className="mt-3 flex items-center gap-2" data-reveal data-reveal-delay="0.2">
                <div className="h-[10px] w-[180px] bg-fire rounded-sm" />
                <div className="h-[10px] w-[80px] bg-volt rounded-sm" />
                <div className="h-[10px] w-[40px] bg-ink rounded-sm" />
              </div>
              <p className="mt-8 max-w-[560px] text-lg md:text-xl text-ink/70 leading-relaxed" data-reveal data-reveal-delay="0.15">
                A Marketing Hub built the way demand actually works: clear lifecycle stages, forms that route in
                seconds, campaigns tied to revenue, and dashboards a CMO can defend on a Monday.
              </p>
              <div className="mt-10 flex flex-wrap gap-3" data-stagger>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-fire transition-colors"
                >
                  Scope a Marketing Hub build
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-paper text-ink group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link
                  href="/hubspot-audit"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm hover:bg-bone transition-colors"
                >
                  Get a free 47-point audit
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-4 max-w-[600px]" data-stagger>
                {[
                  { k: "68%", v: "MQL → SQL", n: "vs 22% pre-build" },
                  { k: "4-6 wk", v: "Time to live", n: "fixed scope" },
                  { k: "1 source", v: "Of truth", n: "one attribution model" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-ink/10 pl-4">
                    <div className="font-display text-3xl md:text-4xl leading-none tracking-tight text-fire">{o.k}</div>
                    <div className="mt-2 text-[11px] font-medium text-ink">{o.v}</div>
                    <div className="mt-1 text-[10px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal>
              <PortalSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 01 ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-10">
          <ChapterKicker step={1} label="The moment you land here" />
          <QuoteAndBars />
        </div>
      </section>

      {/* ── CHAPTER 02 ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-10">
          <ChapterKicker step={2} label="What we build inside Marketing Hub" />
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02]">
              Not modules on a slide. <span className="text-fire">Working machinery in your portal.</span>
            </h2>
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-ink/50 md:text-right">
              06 components, configured for your motion, not a template.
            </p>
          </div>
          <MachineryDiagram />
          <ModulesGrid />
        </div>
      </section>

      {/* ── CHAPTER 03 (dark) ────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1300px] mx-auto px-6 space-y-10">
          <div className="flex items-center gap-3 mb-2" data-reveal>
            <ChapterProgress step={3} />
            <span className="mono text-[11px] tracking-[0.16em] text-paper/50 uppercase whitespace-nowrap">
              Chapter 03 / 06 · How the build unfolds
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] text-paper">
            A visible timeline. <span className="text-fire">Nothing hidden</span>, nothing surprise.
          </h2>
          <BuildTimeline />
        </div>
      </section>

      {/* ── CHAPTER 04 ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-10">
          <ChapterKicker step={4} label="What you hold at handover" />
          <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02]">
            Real artifacts, <span className="text-fire">not a status meeting.</span>
          </h2>
          <p className="max-w-[640px] text-ink/70 leading-relaxed text-lg">
            Every Marketing Hub build closes with the same package. You keep the portal, the documentation, and the
            muscle memory. No lock-in, no invoice for exports.
          </p>
          <DeliverablesGrid />
        </div>
      </section>

      {/* ── CHAPTER 05 ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-10">
          <ChapterKicker step={5} label="Wired in, tested, documented" />
          <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02]">
            Integrations we&rsquo;ve done before, <span className="text-fire">and will do properly.</span>
          </h2>
          <p className="max-w-[640px] text-ink/70 leading-relaxed text-lg">
            Plus anything with a supported API. Custom middleware when we need to. The rule is simple: no
            integration ships without a documented failure path.
          </p>
          <IntegrationsOrbit />
        </div>
      </section>

      {/* ── CHAPTER 06 ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1000px] mx-auto px-6">
          <ChapterKicker step={6} label="Questions we hear most often" />
          <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] mb-12">
            Straight answers, <span className="text-fire">no hedging.</span>
          </h2>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="group brutal-border bg-paper open:brutal-shadow-fire transition-all">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none">
                  <span className="mono text-[10px] text-ink/40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl md:text-2xl tracking-[-0.02em] leading-snug flex-1">{f.q}</span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-fire text-paper flex items-center justify-center transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-[52px] text-ink/70 leading-relaxed">{f.a}</div>
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
            Ready when you are
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-[-0.045em] leading-[0.98] max-w-[900px]">
            A working Marketing Hub, in weeks not quarters.
          </h2>
          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg" data-reveal>
            Send us your portal, your motion, and the reports your board actually looks at. We&rsquo;ll come back
            with a scoped plan, a fixed price, and a start date.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-stagger>
            <BookCallButton className="inline-flex items-center gap-2 bg-fire text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-volt hover:text-ink transition-colors">
              Book a scoping call
              <span className="inline-flex items-center justify-center h-7 w-7 bg-paper text-ink rounded-full">→</span>
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
