import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { BookAuditButton } from "@/components/BookAuditButton";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HubSpot Content Hub Implementation",
  description:
    "Content Hub built as a growth surface: fast pages, on-brand templates, SEO wired in, AI-assisted authoring, and analytics that connect content to pipeline.",
  alternates: { canonical: "/hubspot-implementation/content-hub" },
  openGraph: {
    title: "HubSpot Content Hub Implementation · Revlyn",
    description:
      "A CMS your marketers can ship on without a dev. Modular templates, SEO wired in, and page-to-pipeline attribution in one portal.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ─────────────────────────────────────────────────────────────
   Primitives
   ───────────────────────────────────────────────────────────── */

function Tag({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "fire" | "volt" | "bone" }) {
  const map: Record<string, string> = {
    ink: "bg-ink text-paper border-ink",
    fire: "bg-fire text-paper border-fire",
    volt: "bg-volt text-ink border-ink",
    bone: "bg-bone text-ink border-ink",
  };
  return <span className={`mono text-[10px] px-2 py-1 border ${map[tone]}`}>{children}</span>;
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
   HERO — Live page composer with block palette
   ───────────────────────────────────────────────────────────── */

function HeroComposer() {
  const blocks = [
    { code: "B-01", name: "Hero · brand", tone: "fire", w: 100 },
    { code: "B-02", name: "Proof · logo strip", tone: "ink", w: 100 },
    { code: "B-03", name: "Feature · split", tone: "volt", w: 62 },
    { code: "B-04", name: "Media · loop", tone: "ink", w: 38 },
    { code: "B-05", name: "Form · gated PDF", tone: "fire", w: 44 },
    { code: "B-06", name: "Pricing · 3-tier", tone: "ink", w: 56 },
    { code: "B-07", name: "FAQ · schema", tone: "volt", w: 100 },
    { code: "B-08", name: "CTA · booking", tone: "ink", w: 100 },
  ] as const;
  return (
    <div className="relative bg-paper overflow-hidden">
      <GridPaper />
      <div className="relative p-6 md:p-7">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fire animate-blink" />
            <span className="mono text-[11px] text-ink/60">DRAFT · /pricing · v4.2</span>
          </div>
          <span className="mono text-[10px] px-2 py-0.5 rounded bg-volt text-ink">C-Hub</span>
        </div>

        <div className="grid grid-cols-[70px_1fr_44px_54px] mono text-[10px] uppercase tracking-[0.14em] text-ink/50 pb-3 border-b border-ink/10">
          <div>Block</div>
          <div>Layout</div>
          <div>Lh</div>
          <div>SEO</div>
        </div>

        <div className="divide-y divide-ink/8">
          {blocks.map((b, i) => (
            <div
              key={b.code}
              className="grid grid-cols-[70px_1fr_44px_54px] items-center py-2.5 group hover:bg-bone/60 transition-colors"
            >
              <div className="mono text-[11px] text-ink/70">{b.code}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-ink/8">
                  <div
                    className={`h-full ${b.tone === "fire" ? "bg-fire" : b.tone === "volt" ? "bg-volt" : "bg-ink"}`}
                    style={{ width: `${b.w}%` }}
                  />
                </div>
                <span className="text-sm truncate w-[150px]">{b.name}</span>
              </div>
              <div className="mono text-[10px] text-ink/60">{90 + (i % 8)}</div>
              <div>
                <span className="mono text-[9px] px-1.5 py-0.5 rounded bg-volt/50 text-ink">ok</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          {[
            { k: "8", v: "Block types" },
            { k: "SEO", v: "Built into template" },
            { k: "0", v: "Dev tickets" },
            { k: "1 model", v: "Page attribution" },
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
   ACT 1 — Publish backlog vs velocity
   ───────────────────────────────────────────────────────────── */

function BacklogChart() {
  return (
    <div className="brutal-border bg-paper relative overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="mono text-[11px] text-ink/60">MONDAY 09:12 · CMO'S DESK</div>
          <Tag tone="fire">before</Tag>
        </div>
        <div className="font-display text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[600px]">
          "Fourteen pages in the backlog. Two designers deep on a hero. The campaign goes live Thursday."
        </div>

        <svg viewBox="0 0 560 220" className="w-full mt-8 h-[220px]" aria-hidden>
          <line x1="30" y1="10" x2="30" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          <line x1="30" y1="190" x2="550" y2="190" stroke="var(--color-ink)" strokeWidth="1.5" />
          {/* Backlog rising */}
          <path
            d="M30 165 L 90 155 L 150 140 L 210 130 L 270 110 L 330 90 L 390 70 L 450 50 L 540 30"
            stroke="var(--color-fire)"
            strokeWidth="3"
            fill="none"
          />
          {/* Published flat */}
          <path
            d="M30 170 L 90 168 L 150 172 L 210 170 L 270 168 L 330 172 L 390 170 L 450 168 L 540 172"
            stroke="var(--color-ink)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <g transform="translate(490, 30)">
            <circle r="10" fill="var(--color-fire)" stroke="var(--color-ink)" strokeWidth="1.5" />
            <text x="14" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">
              backlog
            </text>
          </g>
          <g transform="translate(340, 15)">
            <line x1="0" x2="24" y1="0" y2="0" stroke="var(--color-fire)" strokeWidth="3" />
            <text x="30" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">backlog</text>
            <line x1="100" x2="124" y1="0" y2="0" stroke="var(--color-ink)" strokeDasharray="4 4" strokeWidth="2" />
            <text x="130" y="4" fontSize="10" fontFamily="var(--font-mono)" fill="var(--color-ink)">shipped</text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Every page needs a dev, so nothing ships",
            "Design drifts because templates are copy-pasted",
            "Nobody knows which page sourced the deal",
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
   ACT 2 — Blocks vs bespoke
   ───────────────────────────────────────────────────────────── */

function TemplatesBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="brutal-border bg-bone p-6 relative">
        <Tag tone="fire">before</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">One-off pages, five brave designers</h3>
        <div className="mt-5 space-y-2">
          {[
            "pricing-v3-FINAL.figma",
            "pricing-v3-FINAL-actually.figma",
            "landing-webinar-Q3-copy.figma",
            "brand-approved-hero.psd",
            "the-CEO-hates-purple.pdf",
          ].map((s) => (
            <div key={s} className="flex items-center gap-3 text-sm text-ink/70">
              <span className="h-2 w-2 rounded-full bg-fire" />
              <span className="line-through decoration-fire/50 mono text-[12px]">{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 mono text-[10px] text-ink/50">Every page is a fresh negotiation with design.</div>
      </div>
      <div className="brutal-border bg-paper p-6 relative brutal-shadow-volt">
        <Tag tone="volt">after</Tag>
        <h3 className="font-display text-2xl mt-3 tracking-[-0.02em]">One design system, twelve blocks, infinite pages</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            { s: "Hero blocks", e: "6 approved variants" },
            { s: "Proof blocks", e: "logo, quote, metric" },
            { s: "Feature blocks", e: "split, grid, tabbed" },
            { s: "Form blocks", e: "gated + inline + booking" },
            { s: "CTA blocks", e: "banner, card, footer bar" },
          ].map((row, i) => (
            <li key={i} className="grid grid-cols-[24px_1fr_auto] items-center gap-3">
              <span className="mono text-[10px] text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{row.s}</span>
              <span className="mono text-[10px] text-ink/60 bg-volt/40 px-2 py-0.5">{row.e}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 mono text-[10px] text-ink/60">Marketers compose, brand stays intact, dev never opens the file.</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 3 — Page anatomy (annotated blueprint)
   ───────────────────────────────────────────────────────────── */

function PageAnatomy() {
  const annotations = [
    { y: 60, label: "Hero · <h1> with primary keyword", tone: "fire" },
    { y: 130, label: "Proof strip · logo schema markup", tone: "volt" },
    { y: 210, label: "Feature split · alt text on every image", tone: "ink" },
    { y: 300, label: "Form · progressive fields, gated PDF", tone: "fire" },
    { y: 380, label: "FAQ · FAQPage schema for rich results", tone: "volt" },
    { y: 460, label: "CTA · booking flow attributed to page", tone: "ink" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">PAGE.ANATOMY · /solutions/rev-ops</div>
        <Tag tone="volt">every block earns its keep</Tag>
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
        {/* Wireframe */}
        <div className="relative">
          <svg viewBox="0 0 320 520" className="w-full h-auto border border-ink/15 bg-bone/40" aria-hidden>
            {/* Nav */}
            <rect x="16" y="16" width="288" height="16" fill="var(--color-ink)" opacity="0.15" />
            {/* Hero */}
            <rect x="16" y="44" width="288" height="80" fill="var(--color-fire)" opacity="0.25" data-draw />
            <rect x="24" y="60" width="180" height="14" fill="var(--color-ink)" />
            <rect x="24" y="82" width="140" height="6" fill="var(--color-ink)" opacity="0.3" />
            <rect x="24" y="94" width="120" height="6" fill="var(--color-ink)" opacity="0.3" />
            {/* Proof */}
            <rect x="16" y="132" width="288" height="40" fill="var(--color-volt)" opacity="0.35" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={30 + i * 55} y="146" width="40" height="12" fill="var(--color-ink)" opacity="0.4" />
            ))}
            {/* Feature */}
            <rect x="16" y="180" width="140" height="90" fill="var(--color-ink)" opacity="0.08" />
            <rect x="164" y="180" width="140" height="90" fill="var(--color-ink)" opacity="0.15" />
            {/* Form */}
            <rect x="16" y="278" width="288" height="72" fill="var(--color-fire)" opacity="0.18" />
            <rect x="28" y="292" width="200" height="10" fill="var(--color-ink)" />
            <rect x="28" y="310" width="260" height="14" fill="var(--color-paper)" stroke="var(--color-ink)" />
            <rect x="28" y="330" width="80" height="14" fill="var(--color-ink)" />
            {/* FAQ */}
            <rect x="16" y="358" width="288" height="70" fill="var(--color-volt)" opacity="0.25" />
            {[0, 1, 2].map((i) => (
              <rect key={i} x="24" y={370 + i * 18} width="240" height="8" fill="var(--color-ink)" opacity="0.4" />
            ))}
            {/* CTA */}
            <rect x="16" y="436" width="288" height="60" fill="var(--color-ink)" />
            <rect x="28" y="452" width="140" height="12" fill="var(--color-paper)" />
            <rect x="28" y="470" width="90" height="14" fill="var(--color-fire)" />
          </svg>
        </div>

        {/* Annotations */}
        <div className="space-y-3">
          {annotations.map((a, i) => (
            <div
              key={a.label}
              data-reveal
              className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
            >
              <span className="mono text-[10px] text-ink/40 w-6 pt-1">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`mt-1 h-3 w-3 shrink-0 ${
                  a.tone === "fire" ? "bg-fire" : a.tone === "volt" ? "bg-volt" : "bg-ink"
                }`}
              />
              <div className="text-sm text-ink/80 leading-relaxed">{a.label}</div>
            </div>
          ))}
          <div className="mt-6 brutal-border bg-bone p-4">
            <div className="mono text-[10px] text-ink/50 mb-1">RULE</div>
            <div className="text-sm">
              A page is not "designed" until every block earns a job: proof, promise, or action. Decoration is
              debt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 4 — SEO layer stack (technical + on-page + topical)
   ───────────────────────────────────────────────────────────── */

function SeoStack() {
  const layers = [
    { code: "L-01", title: "Core Web Vitals budget", val: "94", note: "LCP < 2.0s · CLS < 0.05", tone: "volt" },
    { code: "L-02", title: "Schema per template", val: "12", note: "Article, FAQ, Product, HowTo", tone: "ink" },
    { code: "L-03", title: "Sitemap + robots automation", val: "auto", note: "on publish, on unpublish", tone: "volt" },
    { code: "L-04", title: "Canonical + hreflang", val: "clean", note: "no duplicate content signals", tone: "ink" },
    { code: "L-05", title: "Topic clusters + pillar pages", val: "24", note: "internal linking by graph", tone: "fire" },
    { code: "L-06", title: "GSC + rank tracking", val: "live", note: "in the same dashboard as pipeline", tone: "volt" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">SEO.STACK · WIRED INTO THE TEMPLATE</div>
        <Tag tone="fire">not a checklist, a system</Tag>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {layers.map((l, i) => (
          <div
            key={l.code}
            data-reveal
            className="group brutal-border bg-bone p-5 flex items-start gap-4 transition-colors hover:bg-paper"
          >
            <div
              className={`h-14 w-14 shrink-0 grid place-items-center font-display text-xl ${
                l.tone === "fire" ? "bg-fire text-paper" : l.tone === "volt" ? "bg-volt text-ink" : "bg-ink text-paper"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] text-ink/60">{l.code}</span>
                <span className="font-display text-xl leading-none">{l.val}</span>
              </div>
              <div className="font-medium mt-1">{l.title}</div>
              <div className="mono text-[10px] text-ink/60 mt-1">{l.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 5 — AI authoring: brand voice tuner
   ───────────────────────────────────────────────────────────── */

function VoiceTuner() {
  const dials = [
    { k: "Confidence", pct: 0.82, note: "not swaggering, not hedging" },
    { k: "Density", pct: 0.68, note: "specific verbs, few adjectives" },
    { k: "Warmth", pct: 0.55, note: "human, not chummy" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">VOICE.TUNER · TRAINED ON YOUR BEST 40 PAGES</div>
        <Tag tone="volt">AI drafts. Editor decides.</Tag>
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
        {/* Dials */}
        <div className="grid grid-cols-1 gap-4">
          {dials.map((d) => {
            const angle = -90 + 180 * d.pct;
            return (
              <div key={d.k} className="brutal-border bg-bone p-4 flex items-center gap-4 transition-colors hover:bg-paper">
                <svg viewBox="0 0 160 100" className="w-32 shrink-0" aria-hidden>
                  <path d="M10 90 A 70 70 0 0 1 150 90" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="8" fill="none" />
                  <path
                    d="M10 90 A 70 70 0 0 1 150 90"
                    stroke="var(--color-fire)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset={220 - 220 * d.pct}
                  />
                  <g transform={`translate(80 90) rotate(${angle})`}>
                    <line x1="0" y1="0" x2="0" y2="-58" stroke="var(--color-ink)" strokeWidth="2.5" />
                    <circle r="4" fill="var(--color-ink)" />
                  </g>
                </svg>
                <div>
                  <div className="font-display text-2xl leading-none tracking-[-0.02em]">{d.k}</div>
                  <div className="mono text-[10px] mt-1 text-ink/60">{Math.round(d.pct * 100)}/100</div>
                  <div className="text-xs text-ink/70 mt-2">{d.note}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editor mock */}
        <div className="brutal-border bg-ink text-paper p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="mono text-[10px] text-paper/60">EDITOR · /blog/rev-ops-101 · draft</div>
            <span className="mono text-[10px] px-2 py-0.5 bg-volt text-ink">on-brand · 91%</span>
          </div>
          <div className="space-y-3 text-sm leading-relaxed font-mono">
            <p>
              Rev ops is not a dashboard.{" "}
              <span className="bg-volt/25 border-b border-volt">It is the wiring between the promise you made in marketing and the invoice finance sends on Friday.</span>
            </p>
            <p className="opacity-60">
              <span className="line-through">In today's fast-paced world of B2B SaaS,</span>{" "}
              <span className="bg-fire/20 border-b border-fire">Every mid-market team we meet</span>{" "}
              is running the same three tools with different scars.
            </p>
            <p>
              We rebuild the middle layer{" "}
              <span className="bg-volt/25 border-b border-volt">so a signal that lands on Monday reaches the AE by Tuesday</span>, not a Slack thread by Friday.
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3 mono text-[10px] text-paper/60 border-t border-paper/10 pt-4">
            <span className="h-1.5 w-1.5 rounded-full bg-fire animate-blink" />
            <span>flagged: 1 cliche · 1 AI tell · 0 policy issues</span>
          </div>
        </div>
      </div>
      <p className="mt-4 mono text-[9px] uppercase tracking-[0.1em] text-ink/35">Illustrative example draft and scores</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 6 — Publish pipeline (draft → live, animated)
   ───────────────────────────────────────────────────────────── */

function PublishPipeline() {
  return (
    <div className="brutal-border bg-paper p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="mono text-[11px] text-ink/60">PUBLISH.PIPELINE · IDEA → LIVE</div>
        <Tag tone="volt">target · 4 days</Tag>
      </div>

      <svg viewBox="0 0 720 260" className="w-full h-[260px]" aria-hidden>
        {/* Nodes */}
        {[
          { x: 10, label: "BRIEF", sub: "SEO + goal", fill: "var(--color-ink)", text: "var(--color-paper)" },
          { x: 155, label: "DRAFT", sub: "AI-assisted", fill: "var(--color-bone)", text: "var(--color-ink)" },
          { x: 300, label: "REVIEW", sub: "voice + brand", fill: "var(--color-volt)", text: "var(--color-ink)" },
          { x: 445, label: "STAGE", sub: "SEO + Lh check", fill: "var(--color-bone)", text: "var(--color-ink)" },
          { x: 590, label: "PUBLISH", sub: "301s · sitemap", fill: "var(--color-fire)", text: "var(--color-paper)" },
        ].map((n, i) => (
          <g key={i}>
            <rect
              x={n.x}
              y="110"
              width="120"
              height="44"
              fill={n.fill}
              stroke="var(--color-ink)"
              strokeWidth={n.fill === "var(--color-bone)" ? 1.5 : 0}
            />
            <text x={n.x + 60} y="130" textAnchor="middle" fill={n.text} fontSize="12" fontFamily="var(--font-mono)">
              {n.label}
            </text>
            <text
              x={n.x + 60}
              y="146"
              textAnchor="middle"
              fill={n.text}
              opacity="0.7"
              fontSize="9"
              fontFamily="var(--font-mono)"
            >
              {n.sub}
            </text>
          </g>
        ))}
        {/* Connectors */}
        {[130, 275, 420, 565].map((x, i) => (
          <path
            key={i}
            d={`M${x} 132 L ${x + 25} 132`}
            stroke="var(--color-ink)"
            strokeWidth="2"
            markerEnd="url(#arr)"
          />
        ))}
        {/* Loop back for review-fail */}
        <path
          d="M360 154 C 360 210, 215 210, 215 154"
          stroke="var(--color-fire)"
          strokeWidth="2"
          strokeDasharray="5 4"
          fill="none"
        />
        <text x="290" y="205" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-fire)">
          rewrite loop
        </text>

        {/* Signal packet */}
        <circle r="6" fill="var(--color-fire)" stroke="var(--color-ink)" strokeWidth="1.5">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M70 132 L 215 132 L 360 132 L 505 132 L 650 132"
          />
        </circle>

        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L 10 5 L 0 10 z" fill="var(--color-ink)" />
          </marker>
        </defs>
      </svg>

      <div className="mt-4 grid md:grid-cols-4 gap-3">
        {[
          { k: "DAY 1", v: "Brief + keyword + block plan" },
          { k: "DAY 2", v: "Draft · AI + editor pair" },
          { k: "DAY 3", v: "Review · voice + brand + legal" },
          { k: "DAY 4", v: "Stage → publish · 301s auto" },
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
   ACT 7 — Personalization + A/B (segment matrix)
   ───────────────────────────────────────────────────────────── */

function SegmentMatrix() {
  const segs = ["Founder", "Head of Sales", "Head of Marketing", "Ops lead"];
  const blocks = ["Hero copy", "Proof logos", "Pricing anchor", "CTA text"];
  const cell = (r: number, c: number) => {
    const i = (r * 3 + c * 5) % 4;
    return ["A / control", "B / crisp", "B / brave", "A / control"][i];
  };
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-ink/10">
        <div>
          <div className="mono text-[11px] text-ink/60">SEGMENTS × BLOCKS · LIVE VARIANTS</div>
          <div className="font-display text-2xl tracking-[-0.02em] mt-1">Which page each ICP actually sees.</div>
        </div>
        <Tag tone="volt">winner = default</Tag>
      </div>
      <div className="grid grid-cols-[1.2fr_repeat(4,1fr)] mono text-[10px] uppercase tracking-[0.14em] px-6 py-3 border-b border-ink/10 text-ink/50 bg-bone">
        <div>Block</div>
        {segs.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
      {blocks.map((b, r) => (
        <div
          key={b}
          className="grid grid-cols-[1.2fr_repeat(4,1fr)] items-center px-6 py-4 border-b border-ink/10 hover:bg-bone/60 transition-colors"
        >
          <div className="font-medium">{b}</div>
          {segs.map((s, c) => {
            const v = cell(r, c);
            const isB = v.startsWith("B");
            return (
              <div key={s}>
                <span
                  className={`mono text-[10px] px-2 py-1 ${
                    isB ? "bg-volt text-ink" : "bg-ink/8 text-ink"
                  }`}
                >
                  {v}
                </span>
              </div>
            );
          })}
        </div>
      ))}
      <div className="p-6 mono text-[11px] text-ink/60">
        Every test tied to pipeline, not just clicks. Winners are promoted to the default once the agreed confidence threshold is met.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 8 — Content → revenue attribution ledger
   ───────────────────────────────────────────────────────────── */

function AttributionLedger() {
  const rows = [
    { page: "/pricing", tone: "volt", src: 42, ass: 88, close: 12, rev: "$284K" },
    { page: "/solutions/rev-ops", tone: "fire", src: 61, ass: 44, close: 8, rev: "$196K" },
    { page: "/blog/hubspot-audit-guide", tone: "ink", src: 34, ass: 71, close: 5, rev: "$110K" },
    { page: "/case-study/datapel", tone: "volt", src: 12, ass: 96, close: 14, rev: "$402K" },
    { page: "/compare/vs-marketo", tone: "fire", src: 22, ass: 18, close: 3, rev: "$68K" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-ink/10">
        <div>
          <div className="mono text-[11px] text-ink/60">CONTENT.LEDGER · SAMPLE MODEL</div>
          <div className="font-display text-2xl tracking-[-0.02em] mt-1">Every page has a P&amp;L, or it does not exist.</div>
        </div>
        <Tag tone="volt">illustrative · sample data</Tag>
      </div>
      <div className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_1fr] mono text-[10px] uppercase tracking-[0.14em] px-6 py-3 border-b border-ink/10 text-ink/50">
        <div>Page</div>
        <div>Sourced</div>
        <div>Assisted</div>
        <div>Closed-won</div>
        <div>Pipeline</div>
      </div>
      {rows.map((r) => (
        <div
          key={r.page}
          className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_1fr] items-center px-6 py-4 border-b border-ink/10 hover:bg-bone/60 transition-colors group"
        >
          <div className="mono text-[12px]">{r.page}</div>
          <div className="mono text-sm text-ink/70">{r.src}</div>
          <div className="mono text-sm text-ink/70">{r.ass}</div>
          <div className="mono text-sm">{r.close}</div>
          <div>
            <span
              className={`mono text-[11px] px-2 py-1 rounded ${
                r.tone === "fire" ? "bg-fire text-paper" : r.tone === "volt" ? "bg-volt text-ink" : "bg-ink text-paper"
              }`}
            >
              {r.rev}
            </span>
          </div>
        </div>
      ))}
      <div className="p-6 mono text-[11px] text-ink/60">
        Same record marketing, sales, and finance see. No dashboard reconciliation before the board deck.
      </div>
      <div className="px-6 pb-5 mono text-[9px] uppercase tracking-[0.1em] text-ink/35">
        Illustrative example, not a specific client's measured result
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6-week plan (bespoke gantt)
   ───────────────────────────────────────────────────────────── */

function BuildPlan() {
  const rows = [
    { title: "Content + SEO audit", weeks: [1, 2] },
    { title: "IA + URL / redirect map", weeks: [2, 3] },
    { title: "Design system + block kit", weeks: [2, 4] },
    { title: "Template build (10 core)", weeks: [3, 5] },
    { title: "Schema + technical SEO", weeks: [3, 5] },
    { title: "Voice model + AI editor", weeks: [4, 5] },
    { title: "Migration + parity QA", weeks: [4, 5] },
    { title: "A/B + personalization", weeks: [5, 6] },
    { title: "Go-live + 301s + GSC", weeks: [6, 6] },
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
    { name: "CMS Migration", tools: ["Webflow (migration)", "WordPress (migration)", "Figma"] },
    { name: "Search", tools: ["Google Search Console", "Ahrefs", "Semrush"] },
    { name: "Analytics", tools: ["Google Analytics 4", "Segment", "Mutiny"] },
    { name: "AI", tools: ["OpenAI", "Anthropic"] },
    { name: "Delivery", tools: ["Cloudflare", "Vercel", "GitHub", "Cloudinary"] },
    { name: "Ops", tools: ["Zapier", "Slack", "Notion"] },
  ];
  return (
    <div className="brutal-border bg-paper p-6 md:p-10">
      <div className="mono text-[11px] text-ink/60 mb-6">CONTENT HUB · OPERATING SPINE</div>

      <svg viewBox="0 0 800 260" className="w-full h-auto" aria-hidden>
        <defs>
          <marker id="ch-int-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-ink)" />
          </marker>
        </defs>
        <path d="M400 130 H90" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />
        <path d="M400 130 H710" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />
        <path d="M370 110 L200 35" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />
        <path d="M430 110 L600 35" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />
        <path d="M370 150 L200 225" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />
        <path d="M430 150 L600 225" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#ch-int-arrow)" />

        <g transform="translate(320, 105)">
          <rect width="160" height="50" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="1.5" />
          <text x="80" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="var(--font-mono)" fill="var(--color-ink)">Content Hub</text>
        </g>

        {[
          { x: 10, y: 106, label: "CMS Migration" },
          { x: 630, y: 106, label: "Analytics" },
          { x: 130, y: 12, label: "Search" },
          { x: 530, y: 12, label: "AI" },
          { x: 130, y: 200, label: "Delivery" },
          { x: 530, y: 200, label: "Ops" },
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
   Modules grid — six areas
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "C-01",
    title: "Design system + modular blocks",
    body: "A component library your marketing team composes without breaking brand. Hero, proof, feature, form, pricing, FAQ, CTA: every block a marketer can drop, every variant already approved.",
    tone: "fire",
  },
  {
    code: "C-02",
    title: "IA, migration, and redirects",
    body: "Information architecture built from real search demand. Clean migration from Webflow, WordPress, or wherever, with a full URL and redirect map, QA'd in staging before anything goes live.",
    tone: "ink",
  },
  {
    code: "C-03",
    title: "Technical SEO wired in",
    body: "Schema per template, canonicals, sitemaps, Core Web Vitals budget in CI. SEO is a property of the template, not a checklist a marketer forgets.",
    tone: "volt",
  },
  {
    code: "C-04",
    title: "AI authoring with brand voice",
    body: "A voice model tuned on your best 40 pages. Draft, rewrite, and translate inside the editor. Cliches, AI tells, and policy issues flagged before publish.",
    tone: "fire",
  },
  {
    code: "C-05",
    title: "Personalization + A/B",
    body: "Segment-based blocks by ICP. Statistically designed A/B on hero, form, and pricing. Winners are promoted to the default once the agreed confidence threshold is met.",
    tone: "ink",
  },
  {
    code: "C-06",
    title: "Content → pipeline attribution",
    body: "Every page tied to sourced, assisted, and closed-won revenue. GSC + GA4 + HubSpot in one ledger the CMO can defend in the board room.",
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
    q: "Can our marketers really publish without a dev?",
    a: "Yes, for anything the design system covers: hero, feature, blog, pricing, landing, comparison. New page types still involve us or your dev, but the 90% case is marketer-shippable by design. Teams we work with typically start shipping pages on their own within the first month.",
  },
  {
    q: "What about our current rankings on migration?",
    a: "We take a full SEO snapshot before touching anything. We build a full URL and redirect map, QA the migration in staging, and monitor organic performance after launch. We have done this dozens of times and will show you the exact playbook on our first call.",
  },
  {
    q: "Is the AI writing going to sound like AI?",
    a: "Only if we let it. We tune a voice model on your best 40 pages and the editor flags cliches, AI tells, and policy issues before a page goes to review. AI is a first draft here, not a publish button. Editorial judgment stays with your team.",
  },
  {
    q: "Do we need Content Hub Enterprise?",
    a: "Only if you need memberships, multi-brand, content approvals at scale, or heavy translation. We audit against your motion and recommend the smallest tier that does the job. Most teams do fine on Pro plus a well-designed template library.",
  },
  {
    q: "How do you attribute a page to revenue without a data team?",
    a: "HubSpot's contact attribution plus GA4 sessions plus GSC queries collapse into a single ledger inside the portal. First-touch, multi-touch, and closed-won all show against the page. If you have a data team, we ship the raw model so you can extend it. You do not need one to run it.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function ContentHub() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-paper border-b border-ink/10 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 relative">
         
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-end">
            <div>
              
              <h1
                className="font-display text-[54px] md:text-[84px] leading-[0.94] tracking-[-0.045em] hero-hl"
                data-split
              >
                Ship pages, and pipeline.
              </h1>
              <div className="mt-3 flex items-center gap-2" data-reveal data-reveal-delay="0.2">
                <div className="h-[10px] w-[180px] bg-volt rounded-sm" />
                <div className="h-[10px] w-[80px] bg-fire rounded-sm" />
                <div className="h-[10px] w-[40px] bg-ink rounded-sm" />
              </div>
              <p className="mt-8 max-w-[560px] text-lg md:text-xl text-ink/70 leading-relaxed" data-reveal data-reveal-delay="0.15">
                Modular templates a marketer can use without a dev. SEO wired in from the first field. AI-assisted
                authoring you can trust. And analytics that show which pages drive pipeline, not just traffic. Built
                end-to-end in six weeks, with a fixed scope and a defined go-live.
              </p>
              <div className="mt-10 flex flex-wrap gap-3" data-stagger>
                <BookCallButton
                  data-magnetic="14"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-fire transition-colors"
                >
                  Scope a Content Hub build
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
                  { k: "6 wks", v: "Fixed-scope build", n: "design system through go-live" },
                  { k: "6", v: "Named workstreams", n: "each with an owner on both sides" },
                  { k: "1", v: "Attribution model", n: "GSC + GA4 + HubSpot, one ledger" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-ink/10 pl-4">
                    <div className="font-display text-3xl md:text-4xl leading-none tracking-tight text-ink">{o.k}</div>
                    <div className="mt-2 text-[11px] font-medium text-ink">{o.v}</div>
                    <div className="mt-1 text-[10px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: the live composer itself, one frame, not nested UI chrome */}
            <div className="relative" data-reveal>
              <div className="brutal-border bg-paper overflow-hidden">
                <HeroComposer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT 01 · The backlog ─────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="Marketing writes. Design decides. Dev ships. Nothing lands."
            lede="Every content story we hear is the same shape. The plan is bold. The backlog is fourteen pages deep. The designer is deep on a hero for the Thursday campaign. The CMO refreshes GA and cannot tell which page sourced last quarter's biggest deal. This is not a CMS problem. This is a wiring problem."
          />
          <BacklogChart />
        </div>
      </section>

      {/* ── ACT 02 · Blocks vs bespoke ───────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the composer"
            title="One design system. Twelve blocks. Infinite pages."
            lede="Marketers compose from an approved kit. Brand does not drift because it cannot. Dev never opens the file for a new landing page. New page types are the exception, not the norm."
          />
          <TemplatesBeforeAfter />
        </div>
      </section>

      {/* ── ACT 03 · Page anatomy ────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Every block earns its keep"
            title="A page is not designed. It is engineered."
            lede="Six annotated moves per template. Hero has a job. Proof has a job. The form knows what it is trading for. FAQ carries schema. CTA is attributed. Decoration is debt."
          />
          <PageAnatomy />
        </div>
      </section>

      {/* ── ACT 04 · SEO stack (dark) ────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start" data-reveal>
            <div className="mono text-[11px] tracking-[0.22em] text-paper/50">
              <div className="font-display text-6xl md:text-7xl text-paper leading-none">04</div>
              <div className="mt-3 uppercase">SEO in the template</div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.02] text-paper">
                Rankings are a property of the template, not a checklist.
              </h2>
              <p className="mt-5 max-w-[640px] text-paper/70 leading-relaxed text-lg">
                Schema per template. Core Web Vitals budget enforced in CI. Sitemap and robots automation on publish
                and unpublish. Topic clusters wired to pillar pages by an actual graph, not a spreadsheet. GSC and
                rank tracking in the same dashboard as pipeline.
              </p>
            </div>
          </div>
          <div className="bg-paper text-ink">
            <SeoStack />
          </div>
        </div>
      </section>

      {/* ── ACT 05 · Voice tuner ─────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="AI drafts. Editor decides."
            title="A voice model tuned on your best writing, not the internet's."
            lede="We tune the authoring system on your best 40 pages. The editor drafts, rewrites, and translates inside the CMS. Cliches, AI tells, and policy issues are flagged before review. Nothing publishes in an AI voice unless someone signs off."
          />
          <VoiceTuner />
        </div>
      </section>

      {/* ── ACT 06 · Publish pipeline ────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="06"
            kicker="Idea to live in four days"
            title="A publish pipeline, not a Slack thread."
            lede="Brief on Monday. Draft on Tuesday. Review on Wednesday. Live on Thursday. Every stage has an owner, an artifact, and a check that must pass. The rewrite loop is a feature, not a fire drill."
          />
          <PublishPipeline />
        </div>
      </section>

      {/* ── ACT 07 · Personalization matrix ──────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="07"
            kicker="One URL, many pages"
            title="The founder and the head of ops should not see the same hero."
            lede="Segment-based personalization by ICP. Statistically valid A/B on hero, form, and pricing. Winners are promoted to the default once the agreed confidence threshold is met. Every test tied to pipeline, not just clicks."
          />
          <SegmentMatrix />
        </div>
      </section>

      {/* ── ACT 08 · Attribution ledger ──────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="08"
            kicker="Every page has a P&L"
            title="Which pages actually drive pipeline? Show me."
            lede="GSC + GA4 + HubSpot collapsed into one ledger. Sourced, assisted, closed-won revenue on every page. The pages that do not earn their keep get rebuilt or retired. The CMO defends a real number, not a traffic chart."
          />
          <AttributionLedger />
        </div>
      </section>

      {/* ── Modules ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="09"
            kicker="Six areas we rebuild"
            title="Everything that ships in a Content Hub build."
          />
          <ModulesGrid />
        </div>
      </section>

      {/* ── Build plan ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="10"
            kicker="The plan"
            title="Six weeks. Fixed scope. Live on the last day."
            lede="Every workstream has a named owner on our side and a named owner on yours. Weekly demo, weekly decision log, one Slack channel. No surprises on week five."
          />
          <BuildPlan />
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="11"
            kicker="What lands in your portal"
            title="Ten artifacts. Every one of them survives you."
          />
          <div className="border-t border-ink">
            {[
              "Design system + block kit (Figma + code)",
              "10 modular page templates",
              "URL map + 301 redirect plan",
              "Schema + technical SEO config",
              "Topic clusters + pillar page graph",
              "Brand voice model + editor plugin",
              "A/B + personalization framework",
              "Content → pipeline attribution dashboard",
              "Marketer editor SOPs + Loom library",
              "30-day post-launch tune-up",
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
      <section className="py-24 md:py-32 border-b-2 border-ink bg-bone/40">
        <div className="max-w-[1300px] mx-auto px-6 space-y-14">
          <Chapter
            num="12"
            kicker="Wires, not duct tape"
            title="Connected to the rest of your stack."
            lede="We do not leave a hairball of Zaps. Search, analytics, media, voice models, and edge delivery are configured natively where possible, versioned where they are not, and documented either way."
          />
          <IntegrationsOrbit />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b-2 border-ink">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="mono text-[11px] tracking-[0.22em] text-ink/50 mb-4">13 · QUESTIONS WE GET</div>
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
            14 · Ready when you are
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-[-0.045em] leading-[0.98] max-w-[900px]" data-split>
            Ship pages without waiting for dev, and know which ones drive pipeline.
          </h2>
          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg" data-reveal>
            Send us your portal, your current CMS, and the three pages you wish shipped last month. We come back
            with a scoped plan, a fixed price, and a start date within a week.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-stagger>
            <BookCallButton data-magnetic="16"
              className="inline-flex items-center gap-2 bg-volt text-ink pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-paper transition-colors">
              Scope a Content Hub build
              <span className="inline-flex items-center justify-center h-7 w-7 bg-ink text-paper">→</span>
            </BookCallButton>
            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 border border-paper/25 px-5 py-2.5 text-sm text-paper/80 hover:bg-paper/5 transition-colors"
            >
              See the full HubSpot implementation practice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

