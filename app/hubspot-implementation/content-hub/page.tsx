import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

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

        <div className="mt-6 grid grid-cols-4 gap-3">
          {[
            { k: "3.4x", v: "Publish velocity" },
            { k: "94", v: "Lighthouse" },
            { k: "0", v: "Dev tickets" },
            { k: "1 model", v: "Page → revenue" },
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
              A page is not "designed" until every block earns a job — proof, promise, or action. Decoration is
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
            data-tilt="5"
            data-reveal
            className="group brutal-border bg-bone p-5 flex items-start gap-4 hover:brutal-shadow hover:-translate-y-1 transition-all"
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
              <div
                key={d.k}
                data-tilt="6"
                data-spotlight
                className="brutal-border bg-bone p-4 flex items-center gap-4 hover:brutal-shadow-volt transition-all"
                style={{
                  backgroundImage:
                    "radial-gradient(240px circle at var(--sx,50%) var(--sy,50%), rgba(255,235,59,0.25), transparent 60%)",
                }}
              >
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
        <Tag tone="volt">median · 4 days</Tag>
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
                  className={`mono text-[10px] px-2 py-1 rounded ${
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
        Every test tied to pipeline, not just clicks. Winners promote to default automatically after 95% confidence.
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
          <div className="mono text-[11px] text-ink/60">CONTENT.LEDGER · LAST 90 DAYS</div>
          <div className="font-display text-2xl tracking-[-0.02em] mt-1">Every page has a P&amp;L, or it does not exist.</div>
        </div>
        <Tag tone="volt">live</Tag>
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
  const items = [
    "Webflow (migration)", "WordPress (migration)", "Figma", "Google Search Console",
    "Google Analytics 4", "Ahrefs", "Semrush", "Cloudinary",
    "OpenAI", "Anthropic", "Segment", "Mutiny",
    "Cloudflare", "Vercel", "GitHub", "Zapier",
    "Slack", "Notion",
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
            <div className="brutal-border bg-volt px-5 py-3 font-display text-2xl">Content Hub</div>
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
   Modules grid — six areas
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "C-01",
    title: "Design system + modular blocks",
    body: "A component library your marketing team composes without breaking brand. Hero, proof, feature, form, pricing, FAQ, CTA — every block a marketer can drop, every variant already approved.",
    tone: "fire",
  },
  {
    code: "C-02",
    title: "IA, migration, and redirects",
    body: "Information architecture built from real search demand. Clean migration from Webflow, WordPress, or wherever, with a 301 map that does not lose rankings.",
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
    body: "Segment-based blocks by ICP. Statistically valid A/B on hero, form, and pricing. Winners promote to default — no analyst rebuilding the report every Monday.",
    tone: "ink",
  },
  {
    code: "C-06",
    title: "Content → pipeline attribution",
    body: "Every page tied to sourced, assisted, and closed-won revenue. GSC + GA4 + HubSpot in one ledger the CMO can defend in the board room.",
    tone: "volt",
  },
] as const;

function ModuleGlyph({ i, stroke }: { i: number; stroke: string }) {
  const paths = [
    "M2 26 Q 18 6, 36 18 T 70 10",
    "M2 22 h 16 v -14 h 12 v 20 h 16 v -10 h 24",
    "M4 28 l 12 -18 l 12 12 l 12 -8 l 22 14",
    "M2 20 c 10 -14, 22 -14, 32 0 s 24 14, 34 0",
    "M2 24 h 10 l 4 -14 l 4 14 l 4 -8 l 4 8 h 42",
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
    q: "Can our marketers really publish without a dev?",
    a: "Yes, for anything the design system covers — hero, feature, blog, pricing, landing, comparison. New page types still involve us or your dev, but the 90% case is marketer-shippable by design. We measure it: teams we ship hit a median of 3 to 4 pages a week on their own inside the first month.",
  },
  {
    q: "What about our current rankings on migration?",
    a: "We take a full SEO snapshot before touching anything, map every URL, and QA the 301s in staging. Ranking loss on migration should be under 5%, and recovered within 60 days. We have done this dozens of times and will show you the exact playbook on our first call.",
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
    a: "HubSpot's contact attribution plus GA4 sessions plus GSC queries collapse into a single ledger inside the portal. First-touch, multi-touch, and closed-won all show against the page. If you have a data team, we ship the raw model so you can extend it — but you do not need one to run it.",
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
            <span className="mono uppercase tracking-[0.14em] px-2 py-1 rounded bg-volt text-ink">C-Hub</span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-end">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50 mb-6" data-reveal>
                HubSpot · Content Hub · Implementation
              </div>
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
                authoring you can trust. And analytics that show which pages drive pipeline, not just traffic. Wired
                end-to-end in 4-6 weeks by an operator who has done it a dozen times.
              </p>
              <div className="mt-10 flex flex-wrap gap-3" data-stagger>
                <Link
                  href="/contact"
                  data-magnetic="14"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-2 py-2.5 text-sm font-medium hover:bg-fire transition-colors"
                >
                  Scope a Content Hub build
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
                  { k: "3.4x", v: "Publish velocity", n: "pages per week, no dev" },
                  { k: "94", v: "Lighthouse median", n: "across shipped templates" },
                  { k: "1 model", v: "Page → revenue", n: "in the same dashboard" },
                ].map((o) => (
                  <div key={o.v} className="border-l-2 border-ink/10 pl-4">
                    <div className="font-display text-3xl md:text-4xl leading-none tracking-tight text-ink">{o.k}</div>
                    <div className="mt-2 text-[11px] font-medium text-ink">{o.v}</div>
                    <div className="mt-1 text-[10px] text-ink/50 leading-snug">{o.n}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: portal schematic card wrapping the live composer */}
            <div className="relative" data-tilt="6" data-reveal>
              <div className="absolute inset-4 rounded-3xl blur-2xl bg-volt/40 opacity-70 -z-10" />
              <div className="relative rounded-2xl border border-ink/15 bg-paper shadow-[0_28px_80px_-24px_rgba(10,10,10,0.28)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10 bg-bone/60">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
                    <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink/60">
                      Portal schematic · C-Hub
                    </span>
                  </div>
                  <span className="mono text-[10px] text-ink/40">live</span>
                </div>
                <div className="bg-paper">
                  <HeroComposer />
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
            lede="We fine-tune on your best 40 pages. The editor drafts, rewrites, and translates inside the CMS. Cliches, AI tells, and policy issues are flagged before review. Nothing publishes in an AI voice unless someone signs off."
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
            lede="Segment-based personalization by ICP. Statistically valid A/B on hero, form, and pricing. Winners promote to default at 95% confidence. Every test tied to pipeline, not just clicks."
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
            14 · Ready when you are
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-[-0.045em] leading-[0.98] max-w-[900px]" data-split>
            A Content Hub that ships pages, and pipeline.
          </h2>
          <p className="mt-6 max-w-[580px] text-paper/70 leading-relaxed text-lg" data-reveal>
            Send us your portal, your current CMS, and the three pages you wish shipped last month. We come back
            with a scoped plan, a fixed price, and a start date within a week.
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
