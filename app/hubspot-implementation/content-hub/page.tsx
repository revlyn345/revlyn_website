import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
   Unsplash images — content / CMS / design / analytics.
   No stock people. No meetings. Tooling & screens only.
   ───────────────────────────────────────────────────────────── */
const IMAGES = {
  // ACT 01 — backlog problem (dashboard / overwhelm)
  backlog:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",

  // ACT 02 — before (messy files / old design)
  templatesBefore:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",

  // ACT 02 — after (clean design system)
  templatesAfter:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",

  // ACT 03 — page anatomy header
  anatomyHeader:
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80",

  // ACT 04 — SEO stack header (search / analytics screen)
  seoHeader:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",

  // ACT 05 — voice tuner (editor / text on screen)
  editorHeader:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",

  // ACT 07 — segment matrix (dashboard w/ charts)
  segmentHeader:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80",

  // ACT 08 — attribution ledger (financial/data view)
  ledgerHeader:
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",

  // Build plan (calendar / gantt)
  planHeader:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1600&q=80",

  // Integrations (server / wiring)
  integrationsHeader:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",

  // CTA background
  ctaBg:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
};

/* ─────────────────────────────────────────────────────────────
   Primitives
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
    ink: dark ? "bg-paper text-ink border-paper" : "bg-ink text-paper border-ink",
    fire: "bg-fire text-paper border-fire",
    cream: dark ? "bg-ink text-paper border-paper/40" : "bg-cream text-ink border-ink/50",
  };
  return (
    <span
      className={`mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border ${map[tone]}`}
    >
      {children}
    </span>
  );
}

function GridPaper() {
  return (
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
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO · page composer (LIGHT)
   ───────────────────────────────────────────────────────────── */

function HeroComposer() {
  const blocks = [
    { code: "B-01", name: "Hero · brand", accent: "fire", w: 100 },
    { code: "B-02", name: "Proof · logo strip", accent: "ink", w: 100 },
    { code: "B-03", name: "Feature · split", accent: "fire", w: 62 },
    { code: "B-04", name: "Media · loop", accent: "ink", w: 38 },
    { code: "B-05", name: "Form · gated PDF", accent: "fire", w: 44 },
    { code: "B-06", name: "Pricing · 3-tier", accent: "ink", w: 56 },
    { code: "B-07", name: "FAQ · schema", accent: "fire", w: 100 },
    { code: "B-08", name: "CTA · booking", accent: "ink", w: 100 },
  ] as const;

  return (
    <div className="relative bg-white overflow-hidden rounded-2xl border border-ink/50 shadow-sm">
      <GridPaper />

      <div className="relative p-6 md:p-7">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fire animate-pulse" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Draft · /pricing · v4.2
            </span>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-fire text-paper">
            C-Hub
          </span>
        </div>

        <div className="grid grid-cols-[70px_1fr_44px_54px] mono text-[10px] uppercase tracking-[0.18em] text-ink/45 pb-3 border-b border-ink/50">
          <div>Block</div>
          <div>Layout</div>
          <div>Lh</div>
          <div>SEO</div>
        </div>

        <div className="divide-y divide-ink/30">
          {blocks.map((b, i) => (
            <div
              key={b.code}
              className="grid grid-cols-[70px_1fr_44px_54px] items-center py-2.5 group hover:bg-cream/60 transition-colors"
            >
              <div className="mono text-[11px] text-ink/60 tabular-nums">{b.code}</div>

              <div className="flex items-center gap-2 min-w-0">
                <div className="flex-1 h-2 rounded-full bg-ink/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      b.accent === "fire" ? "bg-fire" : "bg-ink"
                    }`}
                    style={{ width: `${b.w}%` }}
                  />
                </div>
                <span className="text-[13px] text-ink/75 truncate w-[150px]">{b.name}</span>
              </div>

              <div className="mono text-[10px] text-ink/55 tabular-nums">{90 + (i % 8)}</div>

              <div>
                <span className="mono text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded bg-fire/10 text-fire border border-fire/60">
                  ok
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "8", v: "Block types" },
            { k: "SEO", v: "Built into template" },
            { k: "0", v: "Dev tickets" },
            { k: "1 model", v: "Page attribution" },
          ].map((x) => (
            <div key={x.v} className="rounded-xl border border-ink/50 bg-cream px-4 py-3">
              <div className="font-display font-bold text-2xl leading-none tracking-[-0.02em]">{x.k}</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] mt-1.5 text-ink/55">{x.v}</div>
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
        <div className={`font-display font-bold text-6xl md:text-7xl leading-none tracking-[-0.04em] ${textColor}`}>
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

        {lede && <p className={`mt-5 max-w-[640px] text-lg leading-relaxed ${ledeColor}`}>{lede}</p>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 1 · Backlog chart (LIGHT)
   ───────────────────────────────────────────────────────────── */

function BacklogChart() {
  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Dashboard header image */}
      <div className="relative h-44 md:h-52 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.backlog}
          alt="Analytics dashboard showing content backlog growing while pages ship flat"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire font-semibold mb-1.5">
              Monday 09:12 · CMO&rsquo;s desk
            </div>
            <div className="font-display font-bold text-xl md:text-2xl tracking-[-0.02em] text-paper leading-tight max-w-[520px]">
              The backlog grows. The pipeline does not.
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Tag tone="fire">Before</Tag>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-[600px]">
          &ldquo;Fourteen pages in the backlog. Two designers deep on a hero. The campaign goes live Thursday.&rdquo;
        </div>

        <svg viewBox="0 0 560 220" className="w-full mt-8 h-[220px]" aria-hidden>
          <line x1="30" y1="10" x2="30" y2="190" stroke="#0a0a0a" strokeWidth="1.5" />
          <line x1="30" y1="190" x2="550" y2="190" stroke="#0a0a0a" strokeWidth="1.5" />

          <path
            d="M30 165 L 90 155 L 150 140 L 210 130 L 270 110 L 330 90 L 390 70 L 450 50 L 540 30"
            stroke="#ff5533"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M30 170 L 90 168 L 150 172 L 210 170 L 270 168 L 330 172 L 390 170 L 450 168 L 540 172"
            stroke="#0a0a0a"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />

          <g transform="translate(490, 30)">
            <circle r="10" fill="#ff5533" stroke="#0a0a0a" strokeWidth="1.5" />
            <text x="14" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              backlog
            </text>
          </g>

          <g transform="translate(340, 15)">
            <line x1="0" x2="24" y1="0" y2="0" stroke="#ff5533" strokeWidth="3" />
            <text x="30" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              backlog
            </text>
            <line x1="100" x2="124" y1="0" y2="0" stroke="#0a0a0a" strokeOpacity="0.5" strokeDasharray="4 4" strokeWidth="2" />
            <text x="130" y="4" fontSize="10" fontFamily="ui-monospace, monospace" fill="#0a0a0a">
              shipped
            </text>
          </g>
        </svg>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            "Every page needs a dev, so nothing ships",
            "Design drifts because templates are copy-pasted",
            "Nobody knows which page sourced the deal",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-ink/50 bg-cream p-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-2">Symptom</div>
              <div className="text-[14px] text-ink/75 leading-relaxed">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 2 · Templates before/after (DARK) — with header images
   ───────────────────────────────────────────────────────────── */

function TemplatesBeforeAfter() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* Before */}
      <div className="rounded-2xl border border-paper/30 bg-ink/60 overflow-hidden shadow-sm">
        <div className="relative h-40 overflow-hidden border-b border-paper/30">
          <Image
            src={IMAGES.templatesBefore}
            alt="Chaotic mix of design files and one-off templates"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="absolute bottom-3 left-4 mono text-[10px] uppercase tracking-[0.22em] text-fire font-semibold">
            Before · Bespoke pages
          </div>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="font-display font-bold text-2xl mt-2 tracking-[-0.02em] text-paper">
            One-off pages, five brave designers
          </h3>

          <div className="mt-5 space-y-2.5">
            {[
              "pricing-v3-FINAL.figma",
              "pricing-v3-FINAL-actually.figma",
              "landing-webinar-Q3-copy.figma",
              "brand-approved-hero.psd",
              "the-CEO-hates-purple.pdf",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 text-[13px] text-paper/60">
                <span className="h-1.5 w-1.5 rounded-full bg-fire shrink-0" />
                <span className="line-through decoration-fire/50 mono text-[12px]">{s}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            Every page is a fresh negotiation with design.
          </div>
        </div>
      </div>

      {/* After */}
      <div className="rounded-2xl border border-fire/60 bg-ink/80 overflow-hidden shadow-sm">
        <div className="relative h-40 overflow-hidden border-b border-fire/40">
          <Image
            src={IMAGES.templatesAfter}
            alt="Clean modular design system blocks on screen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fire/60 via-fire/30 to-transparent" />
          <div className="absolute bottom-3 left-4 mono text-[10px] uppercase tracking-[0.22em] text-paper font-semibold">
            After · Design system
          </div>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="font-display font-bold text-2xl mt-2 tracking-[-0.02em] text-paper">
            One design system, twelve blocks, infinite pages
          </h3>

          <ul className="mt-5 space-y-3.5 text-[14px]">
            {[
              { s: "Hero blocks", e: "6 approved variants" },
              { s: "Proof blocks", e: "logo, quote, metric" },
              { s: "Feature blocks", e: "split, grid, tabbed" },
              { s: "Form blocks", e: "gated + inline + booking" },
              { s: "CTA blocks", e: "banner, card, footer bar" },
            ].map((row, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr_auto] items-center gap-3">
                <span className="mono text-[10px] text-paper/50">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium text-paper">{row.s}</span>
                <span className="mono text-[10px] text-fire bg-ink border border-fire/60 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                  {row.e}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
            Marketers compose, brand stays intact, dev never opens the file.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 3 · Page anatomy (LIGHT) — image already present
   ───────────────────────────────────────────────────────────── */

function PageAnatomy() {
  const annotations = [
    { label: "Hero · <h1> with primary keyword", accent: "fire" },
    { label: "Proof strip · logo schema markup", accent: "ink" },
    { label: "Feature split · alt text on every image", accent: "fire" },
    { label: "Form · progressive fields, gated PDF", accent: "fire" },
    { label: "FAQ · FAQPage schema for rich results", accent: "ink" },
    { label: "CTA · booking flow attributed to page", accent: "ink" },
  ] as const;

  return (
    <div className="rounded-2xl border border-ink/50 bg-white p-6 md:p-8 relative overflow-hidden shadow-sm">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          Page.anatomy · /solutions/rev-ops
        </div>
        <Tag tone="fire">Every block earns its keep</Tag>
      </div>

      <div className="grid md:grid-cols-[1.05fr_1fr] gap-8 items-center">
        <div className="relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-ink/50 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
            <Image
              src={IMAGES.anatomyHeader}
              alt="Annotated website page mockup with markup notes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <span className="absolute top-4 left-4 mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-fire text-paper">
            Annotated · v4.2
          </span>
        </div>

        <div className="space-y-3">
          {annotations.map((a, i) => {
            const isFire = a.accent === "fire";
            return (
              <div key={a.label} className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                <span className="mono text-[10px] text-ink/40 w-6 pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className={`mt-1 h-3 w-3 shrink-0 rounded-sm ${isFire ? "bg-fire" : "bg-ink"}`} />

                <div className="text-[14px] text-ink/75 leading-relaxed">{a.label}</div>
              </div>
            );
          })}

          <div className="mt-6 rounded-xl border border-ink/50 bg-cream p-5">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-2">Rule</div>
            <div className="text-[14px] text-ink/70 leading-relaxed">
              A page is not &ldquo;designed&rdquo; until every block earns a job: proof, promise, or action. Decoration is debt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 4 · SEO stack (DARK) — with header image
   ───────────────────────────────────────────────────────────── */

function SeoStack() {
  const layers = [
    { code: "L-01", title: "Core Web Vitals budget", val: "94", note: "LCP < 2.0s · CLS < 0.05", accent: "fire" },
    { code: "L-02", title: "Schema per template", val: "12", note: "Article, FAQ, Product, HowTo", accent: "ink" },
    { code: "L-03", title: "Sitemap + robots automation", val: "auto", note: "on publish, on unpublish", accent: "fire" },
    { code: "L-04", title: "Canonical + hreflang", val: "clean", note: "no duplicate content signals", accent: "ink" },
    { code: "L-05", title: "Topic clusters + pillar pages", val: "24", note: "internal linking by graph", accent: "fire" },
    { code: "L-06", title: "GSC + rank tracking", val: "live", note: "in the same dashboard as pipeline", accent: "fire" },
  ] as const;

  return (
    <div className="rounded-2xl border border-paper/30 bg-ink/60 overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-paper/30">
        <Image
          src={IMAGES.seoHeader}
          alt="Search analytics dashboard showing keyword performance and schema health"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              SEO.stack · Wired into the template
            </div>
            <Tag tone="fire">Not a checklist, a system</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-3">
          {layers.map((l, i) => {
            const isFire = l.accent === "fire";
            return (
              <div
                key={l.code}
                className="group rounded-xl border border-paper/30 bg-ink/80 p-5 flex items-start gap-4 transition-colors hover:bg-ink"
              >
                <div
                  className={`h-14 w-14 shrink-0 rounded-xl grid place-items-center font-display font-bold text-xl tracking-[-0.02em] ${
                    isFire ? "bg-fire text-paper" : "bg-paper text-ink"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55">{l.code}</span>
                    <span className="font-display font-bold text-xl leading-none tracking-[-0.02em] text-paper">{l.val}</span>
                  </div>

                  <div className="font-medium text-paper mt-1.5">{l.title}</div>

                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-paper/55 mt-1.5">{l.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 5 · Voice tuner (LIGHT) — with header image
   ───────────────────────────────────────────────────────────── */

function VoiceTuner() {
  const dials = [
    { k: "Confidence", pct: 0.82, note: "not swaggering, not hedging" },
    { k: "Density", pct: 0.68, note: "specific verbs, few adjectives" },
    { k: "Warmth", pct: 0.55, note: "human, not chummy" },
  ];

  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.editorHeader}
          alt="Text editor with AI-assisted writing and voice tone controls"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Voice.tuner · Trained on your best 40 pages
            </div>
            <Tag tone="fire">AI drafts · Editor decides</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div className="grid grid-cols-1 gap-4">
            {dials.map((d) => {
              const angle = -90 + 180 * d.pct;
              return (
                <div
                  key={d.k}
                  className="rounded-xl border border-ink/50 bg-cream p-4 flex items-center gap-4 transition-colors hover:bg-white"
                >
                  <svg viewBox="0 0 160 100" className="w-32 shrink-0" aria-hidden>
                    <path d="M10 90 A 70 70 0 0 1 150 90" stroke="#0a0a0a" strokeOpacity="0.1" strokeWidth="8" fill="none" />
                    <path
                      d="M10 90 A 70 70 0 0 1 150 90"
                      stroke="#ff5533"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="220"
                      strokeDashoffset={220 - 220 * d.pct}
                    />
                    <g transform={`translate(80 90) rotate(${angle})`}>
                      <line x1="0" y1="0" x2="0" y2="-58" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
                      <circle r="4" fill="#0a0a0a" />
                    </g>
                  </svg>

                  <div>
                    <div className="font-display font-bold text-2xl leading-none tracking-[-0.02em]">{d.k}</div>
                    <div className="mono text-[10px] uppercase tracking-[0.18em] mt-1.5 text-ink/50 tabular-nums">
                      {Math.round(d.pct * 100)}/100
                    </div>
                    <div className="text-[12.5px] text-ink/60 mt-2 leading-relaxed">{d.note}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-ink text-paper p-5 md:p-6 relative overflow-hidden border border-ink/50 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-12 w-40 h-40 rounded-full bg-fire/20 blur-3xl" />

            <div className="relative flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
                Editor · /blog/rev-ops-101 · draft
              </div>
              <span className="mono text-[10px] uppercase tracking-[0.22em] px-2 py-0.5 rounded-full bg-fire text-paper">
                on-brand · 91%
              </span>
            </div>

            <div className="relative space-y-3 text-[14px] leading-relaxed font-mono">
              <p>
                Rev ops is not a dashboard.{" "}
                <span className="bg-fire/20 border-b border-fire/60">
                  It is the wiring between the promise you made in marketing and the invoice finance sends on Friday.
                </span>
              </p>
              <p className="opacity-60">
                <span className="line-through">In today&rsquo;s fast-paced world of B2B SaaS,</span>{" "}
                <span className="bg-fire/20 border-b border-fire/60">Every mid-market team we meet</span> is running the
                same three tools with different scars.
              </p>
              <p>
                We rebuild the middle layer{" "}
                <span className="bg-fire/20 border-b border-fire/60">
                  so a signal that lands on Monday reaches the AE by Tuesday
                </span>
                , not a Slack thread by Friday.
              </p>
            </div>

            <div className="relative mt-5 flex items-center gap-3 mono text-[10px] uppercase tracking-[0.22em] text-paper/55 border-t border-paper/20 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-fire animate-pulse" />
              <span>Flagged · 1 cliche · 1 AI tell · 0 policy issues</span>
            </div>
          </div>
        </div>

        <p className="mt-4 mono text-[9px] uppercase tracking-[0.22em] text-ink/35">Illustrative example draft and scores</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 6 · Publish pipeline (DARK) — SVG kept, no header image
   (kept clean so the SVG is the visual anchor)
   ───────────────────────────────────────────────────────────── */

function PublishPipeline() {
  const steps = [
    { k: "Day 1", v: "Brief + keyword + block plan", code: "01" },
    { k: "Day 2", v: "Draft · AI + editor pair", code: "02" },
    { k: "Day 3", v: "Review · voice + brand + legal", code: "03" },
    { k: "Day 4", v: "Stage → publish · 301s auto", code: "04" },
  ];

  return (
    <div className="rounded-2xl border border-paper/30 bg-ink/60 overflow-hidden shadow-sm">
      {/* Header image — editor / publishing workspace */}
      <div className="relative h-44 md:h-52 overflow-hidden border-b border-paper/30">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80"
          alt="Laptop showing a publishing workflow with editor and CMS open"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/70 mb-1.5">
                Publish.pipeline · Idea → Live
              </div>
              <div className="font-display font-bold text-xl md:text-2xl tracking-[-0.02em] text-paper">
                Brief Monday. Live Thursday.
              </div>
            </div>
            <Tag tone="fire">Target · 4 days</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Horizontal step bar — replaces the old SVG */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-paper/20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 relative">
            {steps.map((s, i) => {
              const isLast = i === steps.length - 1;
              return (
                <div key={s.k} className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  {/* Step dot */}
                  <div
                    className={`relative z-10 h-11 w-11 shrink-0 rounded-full grid place-items-center font-display font-bold text-[13px] border-2 transition-colors ${
                      isLast
                        ? "bg-fire text-paper border-fire"
                        : "bg-ink text-paper border-paper/40"
                    }`}
                  >
                    {s.code}
                  </div>

                  <div className="md:mt-4 min-w-0">
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-1.5">
                      {s.k}
                    </div>
                    <div className="text-[13.5px] text-paper/80 leading-relaxed">
                      {s.v}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note — the rewrite loop callout */}
        <div className="mt-8 rounded-xl border border-fire/40 bg-fire/[0.06] px-5 py-4 flex items-start gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fire animate-pulse" />
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-1.5">
              Built-in rewrite loop
            </div>
            <div className="text-[13.5px] text-paper/75 leading-relaxed">
              If review rejects the draft, it routes straight back to Day 2 with reviewer notes no new brief, no lost context.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 7 · Segment matrix (LIGHT) — with header image
   ───────────────────────────────────────────────────────────── */

function SegmentMatrix() {
  const segs = ["Founder", "Head of Sales", "Head of Marketing", "Ops lead"];
  const blocks = ["Hero copy", "Proof logos", "Pricing anchor", "CTA text"];
  const cell = (r: number, c: number) => {
    const i = (r * 3 + c * 5) % 4;
    return ["A / control", "B / crisp", "B / brave", "A / control"][i];
  };

  return (
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.segmentHeader}
          alt="Analytics dashboard showing per-segment content variants"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Segments × Blocks · Live variants
            </div>
            <Tag tone="fire">Winner = default</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 border-b border-ink/50">
        <div className="font-display font-bold text-2xl tracking-[-0.02em]">
          Which page each ICP <span className="text-fire">actually sees.</span>
        </div>
      </div>

      <div className="grid grid-cols-[1.2fr_repeat(4,1fr)] mono text-[10px] uppercase tracking-[0.22em] px-6 py-3 border-b border-ink/50 text-ink/45 bg-cream">
        <div>Block</div>
        {segs.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>

      {blocks.map((b, r) => (
        <div
          key={b}
          className="grid grid-cols-[1.2fr_repeat(4,1fr)] items-center px-6 py-4 border-b border-ink/50 hover:bg-cream/50 transition-colors"
        >
          <div className="font-medium text-ink">{b}</div>

          {segs.map((s, c) => {
            const v = cell(r, c);
            const isB = v.startsWith("B");
            return (
              <div key={s}>
                <span
                  className={`mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full ${
                    isB ? "bg-fire text-paper" : "bg-cream text-ink/60 border border-ink/50"
                  }`}
                >
                  {v}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      <div className="p-6 md:p-7 text-[13.5px] text-ink/60 leading-relaxed">
        Every test tied to pipeline, not just clicks. Winners are promoted to the default once the agreed confidence
        threshold is met.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACT 8 · Attribution ledger (DARK) — with header image
   ───────────────────────────────────────────────────────────── */

function AttributionLedger() {
  const rows = [
    { page: "/pricing", accent: "fire", src: 42, ass: 88, close: 12, rev: "$284K" },
    { page: "/solutions/rev-ops", accent: "ink", src: 61, ass: 44, close: 8, rev: "$196K" },
    { page: "/blog/hubspot-audit-guide", accent: "ink", src: 34, ass: 71, close: 5, rev: "$110K" },
    { page: "/case-study/datapel", accent: "fire", src: 12, ass: 96, close: 14, rev: "$402K" },
    { page: "/compare/vs-marketo", accent: "fire", src: 22, ass: 18, close: 3, rev: "$68K" },
  ] as const;

  return (
    <div className="rounded-2xl border border-paper/30 bg-ink/60 overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-paper/30">
        <Image
          src={IMAGES.ledgerHeader}
          alt="Financial analytics view tying content pages to revenue"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-5">
          <div className="flex items-center justify-between w-full flex-wrap gap-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
              Content.ledger · Sample model
            </div>
            <Tag tone="fire">Illustrative · Sample data</Tag>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 border-b border-paper/30">
        <div className="font-display font-bold text-2xl tracking-[-0.02em] text-paper">
          Every page has a P&amp;L, <span className="text-fire">or it does not exist.</span>
        </div>
      </div>

      <div className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_1fr] mono text-[10px] uppercase tracking-[0.22em] px-6 py-3 border-b border-paper/30 text-paper/50 bg-ink/80">
        <div>Page</div>
        <div>Sourced</div>
        <div>Assisted</div>
        <div>Closed-won</div>
        <div>Pipeline</div>
      </div>

      {rows.map((r) => {
        const isFire = r.accent === "fire";
        return (
          <div
            key={r.page}
            className="grid grid-cols-[1.6fr_0.9fr_0.9fr_0.9fr_1fr] items-center px-6 py-4 border-b border-paper/30 hover:bg-ink/80 transition-colors"
          >
            <div className="mono text-[12px] text-paper/80">{r.page}</div>
            <div className="mono text-[13px] text-paper/55 tabular-nums">{r.src}</div>
            <div className="mono text-[13px] text-paper/55 tabular-nums">{r.ass}</div>
            <div className="mono text-[13px] text-paper/80 tabular-nums">{r.close}</div>
            <div>
              <span
                className={`mono text-[11px] px-2.5 py-1 rounded-full ${
                  isFire ? "bg-fire text-paper" : "bg-paper text-ink"
                }`}
              >
                {r.rev}
              </span>
            </div>
          </div>
        );
      })}

      <div className="p-6 md:p-7 text-[13.5px] text-paper/65 leading-relaxed">
        Same record marketing, sales, and finance see. No dashboard reconciliation before the board deck.
      </div>

      <div className="px-6 md:px-7 pb-6 mono text-[9px] uppercase tracking-[0.22em] text-paper/40">
        Illustrative example, not a specific client&rsquo;s measured result
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6-week plan (LIGHT) — with header image
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
    <div className="rounded-2xl border border-ink/50 bg-white overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-ink/50">
        <Image
          src={IMAGES.planHeader}
          alt="Six-week content build plan on a calendar dashboard"
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
   Integrations orbit (DARK) — with header image
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
    <div className="rounded-2xl border border-paper/30 bg-ink/60 overflow-hidden shadow-sm">
      {/* Header image */}
      <div className="relative h-40 md:h-48 overflow-hidden border-b border-paper/30">
        <Image
          src={IMAGES.integrationsHeader}
          alt="Server rack and integration infrastructure for a content stack"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 flex items-end px-6 md:px-10 pb-5">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80">
            Content Hub · Operating spine
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <svg viewBox="0 0 800 260" className="w-full h-auto" aria-hidden>
          <defs>
            <marker id="ch-int-arrow-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff" fillOpacity="0.4" />
            </marker>
          </defs>

          <path d="M400 130 H90" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />
          <path d="M400 130 H710" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />
          <path d="M370 110 L200 35" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />
          <path d="M430 110 L600 35" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />
          <path d="M370 150 L200 225" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />
          <path d="M430 150 L600 225" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" markerEnd="url(#ch-int-arrow-dark)" />

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
              Content Hub
            </text>
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
              <rect
                width="160"
                height="46"
                rx="8"
                fill="#0a0a0a"
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="1.5"
              />
              <text x="10" y="27" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="500" fill="#ffffff">
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-8 border-t border-paper/30 pt-6">
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-4">
            Full connection list · No duct tape
          </div>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.name}>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/55 mb-2">{c.name}</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tools.map((t) => (
                    <span key={t} className="text-[12px] text-paper/70 border border-paper/30 rounded-full px-2.5 py-1">
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
   Modules grid — REFINED to match reference screenshot #3
   Icon tile + bold title + paragraph. 2-col grid.
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    code: "C-01",
    title: "Design system + modular blocks",
    body: "A component library your marketing team composes without breaking brand. Hero, proof, feature, form, pricing, FAQ, CTA: every block a marketer can drop, every variant already approved.",
    icon: (
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
    ),
  },
  {
    code: "C-02",
    title: "IA, migration, and redirects",
    body: "Information architecture built from real search demand. Clean migration from Webflow, WordPress, or wherever, with a full URL and redirect map, QA'd in staging before anything goes live.",
    icon: (
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.3L5 8v8l7 3.8L19 16V8l-7-3.7zM7 11h10v2H7v-2z" />
    ),
  },
  {
    code: "C-03",
    title: "Technical SEO wired in",
    body: "Schema per template, canonicals, sitemaps, Core Web Vitals budget in CI. SEO is a property of the template, not a checklist a marketer forgets.",
    icon: (
      <path d="M10 2a8 8 0 105.3 14l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
    ),
  },
  {
    code: "C-04",
    title: "AI authoring with brand voice",
    body: "A voice model tuned on your best 40 pages. Draft, rewrite, and translate inside the editor. Cliches, AI tells, and policy issues flagged before publish.",
    icon: (
      <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2zm6 12l.8 2.7L21.5 18l-2.7.8L18 21.5l-.8-2.7L14.5 18l2.7-.8L18 14z" />
    ),
  },
  {
    code: "C-05",
    title: "Personalization + A/B",
    body: "Segment-based blocks by ICP. Statistically designed A/B on hero, form, and pricing. Winners are promoted to the default once the agreed confidence threshold is met.",
    icon: (
      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
    ),
  },
  {
    code: "C-06",
    title: "Content → pipeline attribution",
    body: "Every page tied to sourced, assisted, and closed-won revenue. GSC + GA4 + HubSpot in one ledger the CMO can defend in the board room.",
    icon: (
      <path d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20v-7h3v7h-3z" />
    ),
  },
] as const;

function ModulesGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {MODULES.map((m) => (
        <div
          key={m.code}
          className="group rounded-2xl border border-paper/25 bg-ink/60 p-6 md:p-7 transition-all hover:-translate-y-1 hover:border-paper/40"
        >
          {/* Icon tile — matches reference screenshot style */}
          <div className="h-12 w-12 rounded-xl grid place-items-center bg-fire/15 border border-fire/40">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="#ff5533"
              aria-hidden
            >
              {m.icon}
            </svg>
          </div>

          <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mt-5">
            {m.code}
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl mt-2 tracking-[-0.02em] text-paper leading-snug">
            {m.title}
          </h3>

          <p className="mt-3 text-[14px] text-paper/65 leading-relaxed">
            {m.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ (LIGHT)
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
   Deliverables — REFINED to match reference screenshot #1
   Pastel cards with icon tile, bold title
   ───────────────────────────────────────────────────────────── */

const DELIVERABLES = [
  {
    title: "Design system + block kit (Figma + code)",
    icon: <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />,
    tone: "fire" as const,
  },
  {
    title: "10 modular page templates",
    icon: <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" />,
    tone: "ink" as const,
  },
  {
    title: "URL map + 301 redirect plan",
    icon: <path d="M4 6h10v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />,
    tone: "fire" as const,
  },
  {
    title: "Schema + technical SEO config",
    icon: <path d="M10 2a8 8 0 105.3 14l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />,
    tone: "ink" as const,
  },
  {
    title: "Topic clusters + pillar page graph",
    icon: <path d="M5 5h6v6H5V5zm8 0h6v6h-6V5zm-8 8h6v6H5v-6zm8 0h6v6h-6v-6z" />,
    tone: "fire" as const,
  },
  {
    title: "Brand voice model + editor plugin",
    icon: <path d="M12 2l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6l2-6z" />,
    tone: "ink" as const,
  },
  {
    title: "A/B + personalization framework",
    icon: <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />,
    tone: "fire" as const,
  },
  {
    title: "Content → pipeline attribution dashboard",
    icon: <path d="M4 20V10h3v10H4zm6.5 0V4h3v16h-3zM17 20v-7h3v7h-3z" />,
    tone: "ink" as const,
  },
  {
    title: "Marketer editor SOPs + Loom library",
    icon: <path d="M8 5v14l11-7L8 5z" />,
    tone: "fire" as const,
  },
  {
    title: "30-day post-launch tune-up",
    icon: <path d="M12 2a10 10 0 1010 10h-2a8 8 0 11-8-8V2z M14 6h-2v6l5 3 1-1.7-4-2.3V6z" />,
    tone: "ink" as const,
  },
] as const;

function Deliverables() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {DELIVERABLES.map((d, i) => {
        const isFire = d.tone === "fire";
        return (
          <div
            key={d.title}
            className={`group rounded-2xl border p-5 transition-all hover:-translate-y-1 ${
              isFire
                ? "border-fire/40 bg-fire/[0.04] hover:bg-fire/[0.07]"
                : "border-ink/40 bg-ink/[0.03] hover:bg-ink/[0.06]"
            }`}
          >
            {/* Icon tile — matches reference #1 pastel square */}
            <div
              className={`h-12 w-12 rounded-xl grid place-items-center ${
                isFire ? "bg-fire/15 border border-fire/40" : "bg-ink/10 border border-ink/30"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill={isFire ? "#ff5533" : "#0a0a0a"}
                aria-hidden
              >
                {d.icon}
              </svg>
            </div>

            <div className="mono text-[10px] uppercase tracking-[0.22em] mt-4 text-ink/45">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="font-display font-bold text-[15.5px] mt-2 leading-snug text-ink">
              {d.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */

export default function ContentHub() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ── HERO (LIGHT) ─────────────────────────────────── */}
      <section className="relative bg-cream border-b border-ink/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-fire/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-fire/[0.05] blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] tracking-[-0.045em] pb-4">
                Ship pages, <span className="text-fire">and pipeline.</span>
              </h1>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-[6px] w-[120px] rounded-full bg-fire/40" />
                <div className="h-[6px] w-[60px] rounded-full bg-fire" />
                <div className="h-[6px] w-[30px] rounded-full bg-ink" />
              </div>

              <p className="mt-8 max-w-[560px] text-lg md:text-xl text-ink/65 leading-relaxed">
                Modular templates a marketer can use without a dev. SEO wired in from the first field. AI-assisted
                authoring you can trust. And analytics that show which pages drive pipeline, not just traffic. Built
                end-to-end in six weeks, with a fixed scope and a defined go-live.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookCallButton className="group inline-flex items-center gap-2 rounded-lg bg-ink text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_10px_30px_-12px_rgba(10,10,10,0.4)] hover:bg-fire hover:shadow-[0_10px_30px_-12px_rgba(255,85,51,0.6)] transition-all">
                  Scope a Content Hub build
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-ink group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </BookCallButton>

                <BookAuditButton className="inline-flex items-center gap-2 rounded-lg border border-ink/50 bg-white text-ink px-5 py-3.5 font-medium text-[15px] hover:bg-ink hover:text-paper hover:border-ink transition-colors">
                  Start with a free HubSpot audit
                </BookAuditButton>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[600px]">
                {[
                  { k: "6 wks", v: "Fixed-scope build", n: "Design system through go-live" },
                  { k: "6", v: "Named workstreams", n: "Each with an owner on both sides" },
                  { k: "1", v: "Attribution model", n: "GSC + GA4 + HubSpot, one ledger" },
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
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-ink/50 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                <HeroComposer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT 01 · Backlog (LIGHT) ────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="01"
            kicker="The problem in the room"
            title="Marketing writes. Design decides. Dev ships. Nothing lands."
            lede="Every content story we hear is the same shape. The plan is bold. The backlog is fourteen pages deep. The designer is deep on a hero for the Thursday campaign. The CMO refreshes GA and cannot tell which page sourced last quarter's biggest deal. This is not a CMS problem. This is a wiring problem."
          />
          <BacklogChart />
        </div>
      </section>

      {/* ── ACT 02 · Blocks vs bespoke (DARK) ───────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="02"
            kicker="Rebuild the composer"
            title="One design system. Twelve blocks. Infinite pages."
            lede="Marketers compose from an approved kit. Brand does not drift because it cannot. Dev never opens the file for a new landing page. New page types are the exception, not the norm."
            dark
          />
          <TemplatesBeforeAfter />
        </div>
      </section>

      {/* ── ACT 03 · Page anatomy (LIGHT) ────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="03"
            kicker="Every block earns its keep"
            title="A page is not designed. It is engineered."
            lede="Six annotated moves per template. Hero has a job. Proof has a job. The form knows what it is trading for. FAQ carries schema. CTA is attributed. Decoration is debt."
          />
          <PageAnatomy />
        </div>
      </section>

      {/* ── ACT 04 · SEO stack (DARK) ───────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="04"
            kicker="SEO in the template"
            title="Rankings are a property of the template, not a checklist."
            lede="Schema per template. Core Web Vitals budget enforced in CI. Sitemap and robots automation on publish and unpublish. Topic clusters wired to pillar pages by an actual graph, not a spreadsheet. GSC and rank tracking in the same dashboard as pipeline."
            dark
          />
          <SeoStack />
        </div>
      </section>

      {/* ── ACT 05 · Voice tuner (LIGHT) ─────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="05"
            kicker="AI drafts. Editor decides."
            title="A voice model tuned on your best writing, not the internet's."
            lede="We tune the authoring system on your best 40 pages. The editor drafts, rewrites, and translates inside the CMS. Cliches, AI tells, and policy issues are flagged before review. Nothing publishes in an AI voice unless someone signs off."
          />
          <VoiceTuner />
        </div>
      </section>

      {/* ── ACT 06 · Publish pipeline (DARK) ─────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="06"
            kicker="Idea to live in four days"
            title="A publish pipeline, not a Slack thread."
            lede="Brief on Monday. Draft on Tuesday. Review on Wednesday. Live on Thursday. Every stage has an owner, an artifact, and a check that must pass. The rewrite loop is a feature, not a fire drill."
            dark
          />
          <PublishPipeline />
        </div>
      </section>

      {/* ── ACT 07 · Segment matrix (LIGHT) ──────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="07"
            kicker="One URL, many pages"
            title="The founder and the head of ops should not see the same hero."
            lede="Segment-based personalization by ICP. Statistically valid A/B on hero, form, and pricing. Winners are promoted to the default once the agreed confidence threshold is met. Every test tied to pipeline, not just clicks."
          />
          <SegmentMatrix />
        </div>
      </section>

      {/* ── ACT 08 · Attribution ledger (DARK) ───────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="08"
            kicker="Every page has a P&L"
            title="Which pages actually drive pipeline? Show me."
            lede="GSC + GA4 + HubSpot collapsed into one ledger. Sourced, assisted, closed-won revenue on every page. The pages that do not earn their keep get rebuilt or retired. The CMO defends a real number, not a traffic chart."
            dark
          />
          <AttributionLedger />
        </div>
      </section>

      {/* ── Modules (DARK) — now icon-tile card grid ─────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="09"
            kicker="Six areas we rebuild"
            title="Everything that ships in a Content Hub build."
            dark
          />
          <ModulesGrid />
        </div>
      </section>

      {/* ── Build plan (LIGHT) ───────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-sand">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="10"
            kicker="The plan"
            title="Six weeks. Fixed scope. Live on the last day."
            lede="Every workstream has a named owner on our side and a named owner on yours. Weekly demo, weekly decision log, one Slack channel. No surprises on week five."
          />
          <BuildPlan />
        </div>
      </section>

      {/* ── Deliverables (LIGHT) — now pastel tile cards ── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="11"
            kicker="What lands in your portal"
            title="Ten artifacts. Every one of them survives you."
          />
          <Deliverables />
        </div>
      </section>

      {/* ── Integrations (DARK) ──────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-paper/30 bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 space-y-14">
          <Chapter
            num="12"
            kicker="Wires, not duct tape"
            title="Connected to the rest of your stack."
            lede="We do not leave a hairball of Zaps. Search, analytics, media, voice models, and edge delivery are configured natively where possible, versioned where they are not, and documented either way."
            dark
          />
          <IntegrationsOrbit />
        </div>
      </section>

      {/* ── FAQ (LIGHT) ──────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-ink/50 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-fire" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire">13 · Questions we get</span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2rem,4.8vw,3.75rem)] tracking-[-0.035em] leading-[1.1] mb-12">
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

                  <span className="font-display font-bold text-[16px] md:text-[17px] tracking-[-0.01em] leading-snug flex-1 min-w-0">
                    {f.q}
                  </span>

                  <span className="shrink-0 h-8 w-8 rounded-full bg-ink text-paper flex items-center justify-center text-lg transition-all group-open:rotate-45 group-open:bg-fire">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pl-[68px] text-[14px] text-ink/65 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (DARK) ───────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden border-t border-paper/30">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.ctaBg}
            alt="Content and design workspace background"
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
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-fire">14 · Ready when you are</span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2.25rem,6vw,4.5rem)] tracking-[-0.045em] leading-[1.1] max-w-[900px] text-paper pb-2">
            Ship pages without waiting for dev,{" "}
            <span className="text-fire">and know which ones drive pipeline.</span>
          </h2>

          <p className="mt-6 max-w-[580px] text-paper/75 leading-relaxed text-lg">
            Send us your portal, your current CMS, and the three pages you wish shipped last month. We come back with a
            scoped plan, a fixed price, and a start date within a week.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookCallButton className="group inline-flex items-center gap-2 rounded-lg bg-fire text-paper pl-6 pr-2 py-2.5 font-medium text-[15px] shadow-[0_15px_40px_-15px_rgba(255,85,51,0.6)] hover:bg-orange-600 transition-all">
              Scope a Content Hub build
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-paper text-fire group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </BookCallButton>

            <Link
              href="/hubspot-implementation"
              className="inline-flex items-center gap-2 rounded-lg border border-paper/30 text-paper px-5 py-3.5 font-medium text-[15px] hover:bg-paper/10 transition-colors"
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