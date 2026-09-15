import { TheMoment, SixWeekAssembly, ArtifactPeek } from "@/components/ImplementationJourney";
import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { BookAuditButton } from "@/components/BookAuditButton";
import { Footer } from "@/components/Footer";
const hero = "/hubspot-impl-hero.jpg";
const whiteboard = "/whiteboard.jpg";


export const metadata: Metadata = {
  title: "HubSpot Implementation · Revlyn",
  description: "A fixed-scope, senior-led HubSpot build that ships a working CRM in 6 weeks, architecture, data, automation, reporting, enablement.",
  alternates: { canonical: "/hubspot-implementation" },
};

/* Brand-aligned palette: fire, volt, ink, bone + tints derived from brand */
const COLORS = {
  fire: "#ff5722",
  volt: "#ffeb3b",
  ink: "#0a0a0a",
  bone: "#f2f0ea",
  fireSoft: "#ffd9cc",
  fireWash: "#fff1ec",
  voltSoft: "#fff59d",
  voltWash: "#fffbe0",
  // legacy keys remapped to brand tints so existing usages stay valid
  sky: "#fff1ec",
  mint: "#fff59d",
  blush: "#ffd9cc",
  lavender: "#f2f0ea",
  emerald: "#ffeb3b",
  amber: "#ff5722",
};


export default function HubSpotImplementation() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Hero />
      <Positioning />
      <TheMoment />
      <Promise />
      <Anatomy />
      <SixWeekAssembly />
      <Phases />
      <Blueprint />
      <ArtifactPeek />
      <ChooseYourBuild />
      <Deliverables />
      <DataFlow />
      <BeforeAfter />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════ POSITIONING ═══════════════════════════════ */
function Positioning() {
  const rows = [
    ["HubSpot Implementation", "Build the foundation.", true],
    ["Sales Hub Implementation", "Build the sales system.", false],
    ["Marketing Hub Implementation", "Build the marketing engine.", false],
    ["Content Hub Implementation", "Build the content system.", false],
    ["HubSpot Optimization", "Repair an existing portal.", false],
    ["HubSpot as a Service", "Operate and continuously improve it.", false],
  ] as const;
  return (
    <section className="border-b border-ink/10 bg-bone/40 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mono text-xs tracking-widest text-fire mb-6">Where this fits</div>
        <div className="border-t border-ink">
          {rows.map(([name, desc, current]) => (
            <div
              key={name}
              className={`grid gap-1 border-b border-ink py-4 md:grid-cols-[1.3fr_1.7fr] md:items-baseline md:gap-8 ${
                current ? "bg-fire/5" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {current && <span className="h-1.5 w-1.5 rounded-full bg-fire shrink-0" />}
                <span className={`text-[15px] ${current ? "font-medium" : "text-ink/70"}`}>{name}</span>
                {current && <span className="mono text-[9px] uppercase tracking-widest text-fire ml-1">You are here</span>}
              </div>
              <span className="text-sm text-ink/60">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════ CHOOSE YOUR BUILD ═══════════════════════════════ */
function ChooseYourBuild() {
  const builds = [
    { name: "Sales Hub", desc: "Pipeline, routing, sequences, forecasting, quoting.", href: "/hubspot-implementation/sales-hub" },
    { name: "Marketing Hub", desc: "Lifecycle, lead capture, scoring, campaign orchestration.", href: "/hubspot-implementation/marketing-hub" },
    { name: "Content Hub", desc: "Pages, templates, SEO, publishing, content attribution.", href: "/hubspot-implementation/content-hub" },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">CHOOSE YOUR BUILD</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              The foundation is the same.
              <br />
              What you build on it depends on the team.
            </h2>
          </div>
        </div>
        <div className="border-t border-ink">
          {builds.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="group grid gap-2 border-b border-ink py-7 transition-colors hover:bg-bone/50 md:grid-cols-[1fr_1.6fr_auto] md:items-center md:gap-8"
            >
              <h3 className="display text-2xl">{b.name}</h3>
              <p className="text-sm text-ink/65">{b.desc}</p>
              <span className="text-fire opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 justify-self-end hidden md:block">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
function Hero() {
  return (
    <section className="relative border-b border-ink/10 overflow-hidden">
      {/* One restrained atmospheric accent */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.fireWash}, transparent 65%)` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 items-end relative">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 mono text-xs tracking-[0.22em] uppercase border border-ink/15 px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
            By the time you land here, you've already opened ten of these tabs
          </div>
          <h1 className="mt-6 display text-[clamp(2.6rem,7.5vw,7rem)] leading-[0.92] tracking-tight">
            So let's skip
            <br />
            the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-fire">
                sales pitch
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 -z-0 bg-volt"
                aria-hidden
              />
            </span>
            .
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed">
            Every HubSpot implementation page reads the same: certified partners, proven methodology, dedicated success manager. You've seen it ten times today. Below is the same story told a different way, four moments you're probably living this week, six weeks of build shown layer by layer, and the six documents you walk away owning.
          </p>
          <p className="mt-4 max-w-xl text-base text-ink/60 leading-relaxed">
            Read it if the pattern above sounds familiar. Skip to Pricing if it doesn't.
          </p>


          <div className="mt-10 flex flex-wrap items-center gap-3">
            <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-fire transition-colors">
              Start your build <span>→</span>
            </BookCallButton>
            <Link
              href="/hubspot-as-a-service"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              Or make it ongoing
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg">
            {[
              ["6 wks", "fixed-scope build", COLORS.fire],
              ["6", "named workstreams", COLORS.sky],
              ["1", "documented handoff", COLORS.emerald],
            ].map(([n, l, c]) => (
              <div key={l} className="pt-3" style={{ borderTop: `3px solid ${c}` }}>
                <div className="display text-4xl md:text-5xl leading-none">{n}</div>
                <div className="mono text-[10px] tracking-widest uppercase text-ink/55 mt-2">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_var(--color-ink)]">
            <img
              src={hero}
              alt="HubSpot implementation blueprint on a desk"
              className="w-full h-full object-cover"
              width={1600}
              height={2000}
            />
            <div className="absolute top-4 left-4 bg-volt border border-ink px-3 py-1.5 mono text-[10px] tracking-widest uppercase">
              Blueprint · v1.4
            </div>
            <div className="absolute bottom-4 right-4 bg-fire text-paper border border-ink px-3 py-1.5 mono text-[10px] tracking-widest uppercase">
              Live in 42 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ PROMISE ═══════════════════════════════ */
function Promise() {
  const items = [
    {
      k: "01",
      h: "Architecture, not a checklist",
      p: "We design your CRM around how your revenue actually moves, not how a template thinks it should.",
      bg: "#fffbe0",
      dot: COLORS.amber,
    },
    {
      k: "02",
      h: "Clean data from day one",
      p: "Every record deduped, normalised, and mapped. No 'we'll fix it later' technical debt.",
      bg: "#fff1ec",
      dot: COLORS.sky,
    },
    {
      k: "03",
      h: "Reports leaders trust",
      p: "Dashboards that answer real questions: where is pipeline stuck, what's converting, what to do next.",
      bg: "#ffd9cc",
      dot: COLORS.blush,
    },
    {
      k: "04",
      h: "A team that keeps using it",
      p: "Enablement, playbooks, and training so HubSpot isn't just installed, it's adopted.",
      bg: "#fff59d",
      dot: COLORS.emerald,
    },
  ];
  return (
    <section className="border-b border-ink/10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">01 · WHAT YOU GET</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              A CRM you'll actually
              <br />
              want to open on Monday.
            </h2>
          </div>
        </div>
        <div className="border-t border-ink">
          {items.map((it) => (
            <div
              key={it.k}
              className="grid gap-3 border-b border-ink py-8 md:grid-cols-[4rem_1.4fr_1.6fr] md:items-center md:gap-8"
            >
              <span className="mono text-xs text-fire">{it.k}</span>
              <h3 className="display text-xl md:text-2xl leading-tight">{it.h}</h3>
              <p className="text-ink/70 leading-relaxed text-sm">{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ ANATOMY ═══════════════════════════════ */
function Anatomy() {
  return (
    <section className="bg-ink text-paper py-20 md:py-28 border-b border-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, ${COLORS.fire}, transparent 40%), radial-gradient(circle at 80% 70%, ${COLORS.sky}, transparent 40%), radial-gradient(circle at 50% 100%, ${COLORS.lavender}, transparent 40%)`,
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">02 · ANATOMY</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              The eight layers of a<br />healthy HubSpot.
            </h2>
            <p className="mt-4 text-paper/60 max-w-xl">
              We build every implementation on the same eight-layer foundation. Skip
              one, and cracks appear six months later.
            </p>
          </div>
        </div>

        <AnatomyDiagram />
      </div>
    </section>
  );
}

function AnatomyDiagram() {
  const layers = [
    { n: "L8", h: "Enablement", p: "Playbooks, training, adoption rituals", c: COLORS.blush },
    { n: "L7", h: "Reporting", p: "Dashboards & attribution leaders trust", c: COLORS.lavender },
    { n: "L6", h: "AI & agents", p: "Enrichment, summarisation, routing", c: COLORS.sky },
    { n: "L5", h: "Automation", p: "Workflows, sequences, lifecycle logic", c: COLORS.mint },
    { n: "L4", h: "Integrations", p: "Warehouse, product, billing, support", c: COLORS.emerald },
    { n: "L3", h: "Data model", p: "Clean objects, properties, associations", c: COLORS.volt },
    { n: "L2", h: "Process design", p: "Stages, criteria, ownership, SLAs", c: COLORS.amber },
    { n: "L1", h: "Foundation", p: "Portal setup, permissions, governance", c: COLORS.fire },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-2">
        {layers.map((l, i) => (
          <div
            key={l.n}
            className="grid grid-cols-[60px_1fr_auto] items-center gap-4 px-5 py-4 rounded-xl border border-paper/10 hover:bg-paper/[0.04] transition-all group"
            style={{
              marginLeft: `${(layers.length - 1 - i) * 6}px`,
              borderLeft: `3px solid ${l.c}`,
            }}
          >
            <div className="mono text-xs" style={{ color: l.c }}>{l.n}</div>
            <div>
              <div className="font-medium">{l.h}</div>
              <div className="text-paper/55 text-sm">{l.p}</div>
            </div>
            <div
              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: l.c }}
            />
          </div>
        ))}
      </div>
      <div className="relative aspect-square max-w-lg mx-auto w-full">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={COLORS.fire} stopOpacity="0.6" />
              <stop offset="100%" stopColor={COLORS.fire} stopOpacity="0" />
            </radialGradient>
          </defs>
          {[180, 150, 120, 90, 60, 40, 24, 12].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke={layers[i]?.c || "#f2f0ea"}
              strokeOpacity="0.35"
              strokeWidth="1"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.15;0.55;0.15"
                dur={`${3 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <circle cx="200" cy="200" r="60" fill="url(#core)" />
          <circle cx="200" cy="200" r="8" fill={COLORS.fire} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
            const rad = (a * Math.PI) / 180;
            const x = 200 + Math.cos(rad) * 170;
            const y = 200 + Math.sin(rad) * 170;
            const c = layers[i]?.c || "#f2f0ea";
            return (
              <g key={a}>
                <line
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke={c}
                  strokeOpacity="0.25"
                  strokeDasharray="3 4"
                />
                <circle cx={x} cy={y} r="6" fill={c}>
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
          <text
            x="200"
            y="205"
            textAnchor="middle"
            fill="#f2f0ea"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            letterSpacing="2"
          >
            REVENUE
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════ PHASES ═══════════════════════════════ */
function Phases() {
  const phases = [
    {
      w: "W1",
      h: "Discovery & audit",
      out: [
        "GTM interviews (sales, marketing, CS, ops)",
        "Current-state audit (portal, data, stack)",
        "Revenue architecture v1 signed off",
      ],
      color: COLORS.amber,
      bg: "#fffbe0",
    },
    {
      w: "W2",
      h: "Design & data",
      out: ["Object & property model", "Lifecycle stages + criteria", "Data migration plan + dedupe rules"],
      color: COLORS.blush,
      bg: "#ffd9cc",
    },
    {
      w: "W3",
      h: "Build core",
      out: ["Pipelines, stages, automations", "Deal & contact routing", "Email, sequences, templates"],
      color: COLORS.sky,
      bg: "#fff1ec",
    },
    {
      w: "W4",
      h: "Integrations & AI",
      out: ["Warehouse / product / billing wiring", "Enrichment + routing agents", "Slack / Gong / calendar hooks"],
      color: COLORS.lavender,
      bg: "#f2f0ea",
    },
    {
      w: "W5",
      h: "Reporting & QA",
      out: ["Exec & team dashboards", "Attribution model", "End-to-end QA scenarios"],
      color: COLORS.mint,
      bg: "#fff59d",
    },
    {
      w: "W6",
      h: "Launch & enable",
      out: ["Team training + playbooks", "Runbooks + governance", "30-day support runway"],
      color: COLORS.emerald,
      bg: "#fff59d",
    },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">03 · THE 6 WEEKS</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              What actually happens,
              <br />
              week by week.
            </h2>
          </div>
        </div>

        {/* Rainbow progress bar */}
        <div className="relative h-2 rounded-full overflow-hidden mb-10 hidden md:block">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${phases.map((p) => p.color).join(",")})`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {phases.map((p, i) => (
            <div
              key={p.w}
              className="rounded-2xl p-5 border-2 border-ink hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
              style={{ background: p.bg }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mono text-xs font-bold border-2 border-ink"
                style={{ background: p.color }}
              >
                {p.w}
              </div>
              <div className="mono text-[10px] tracking-widest text-ink/60 uppercase mt-3">
                Week {i + 1}
              </div>
              <h3 className="mt-2 display text-xl leading-tight">{p.h}</h3>
              <ul className="mt-3 space-y-1.5">
                {p.out.map((o) => (
                  <li key={o} className="text-sm text-ink/75 flex gap-2 leading-snug">
                    <span className="mt-0.5">→</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ BLUEPRINT ═══════════════════════════════ */
function Blueprint() {
  return (
    <section
      className="py-20 md:py-28 border-b border-ink/10 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #f2f0ea 0%, #ffd9cc 50%, #fff1ec 100%)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-10 items-center relative">
        <div className="md:col-span-5">
          <div className="mono text-xs tracking-widest text-fire">04 · THE BLUEPRINT</div>
          <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-tight">
            Before we build,<br />we draw.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            Every engagement starts with a Revenue Architecture document, a single
            page that shows your funnel, your stages, your data flow, and your
            decision points. Your leadership team signs it. Then we build it.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              ["Funnel + lifecycle map", COLORS.fire],
              ["Object & property inventory", COLORS.sky],
              ["Data flow across systems", COLORS.emerald],
              ["Ownership & SLA matrix", COLORS.lavender],
              ["Reporting question tree", COLORS.amber],
            ].map(([s, c]) => (
              <li key={s} className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-ink"
                  style={{ background: c }}
                >
                  ✓
                </span>
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <div className="relative rounded-2xl overflow-hidden border-2 border-ink shadow-[10px_10px_0_0_var(--color-ink)]">
            <img
              src={whiteboard}
              alt="Whiteboard revenue architecture"
              loading="lazy"
              className="w-full h-auto"
              width={1600}
              height={1000}
            />
            <div className="absolute top-4 left-4 bg-volt border border-ink px-3 py-1.5 rounded mono text-[10px] tracking-widest uppercase">
              Rev-arch · v1.4 · signed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ DELIVERABLES ═══════════════════════════════ */
function Deliverables() {
  const groups = [
    { h: "Architecture", items: ["Revenue arch doc", "Object model", "Stage criteria", "SLA matrix"], c: COLORS.fire },
    { h: "Data", items: ["Migration plan", "Dedupe rules", "Normalisation", "Validation tests"], c: COLORS.sky },
    { h: "Automation", items: ["Deal + contact routing", "Lifecycle workflows", "Sequences", "Task logic"], c: COLORS.mint },
    { h: "Reporting", items: ["Exec dashboard", "Team dashboards", "Attribution", "Forecast view"], c: COLORS.lavender },
    { h: "Integrations", items: ["Warehouse sync", "Product events", "Billing", "Support / calendar"], c: COLORS.amber },
    { h: "Enablement", items: ["Playbooks", "Training sessions", "Runbooks", "30-day support"], c: COLORS.blush },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">05 · YOU'LL WALK AWAY WITH</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              Not a portal.<br />An operating system.
            </h2>
          </div>
        </div>
        <div className="border-t border-ink">
          {groups.map((g, i) => (
            <div key={g.h} className="grid gap-2 border-b border-ink py-7 md:grid-cols-[4rem_1fr] md:items-baseline md:gap-8">
              <span className="mono text-xs text-fire">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="display text-xl uppercase tracking-tight">{g.h}</h3>
                <p className="mt-1.5 text-sm text-ink/65">{g.items.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ DATA FLOW ═══════════════════════════════ */
function DataFlow() {
  const sources = [
    { l: "Website", y: 40, c: COLORS.sky },
    { l: "Product", y: 120, c: COLORS.mint },
    { l: "Billing", y: 200, c: COLORS.amber },
    { l: "Support", y: 280, c: COLORS.blush },
    { l: "Warehouse", y: 360, c: COLORS.lavender },
  ];
  const dests = [
    { l: "Exec dashboard", y: 60, c: COLORS.fire },
    { l: "Sales workflows", y: 160, c: COLORS.volt },
    { l: "Marketing sequences", y: 260, c: COLORS.emerald },
    { l: "AI agents", y: 340, c: COLORS.lavender },
  ];
  return (
    <section className="bg-ink text-paper py-20 md:py-28 border-b border-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 50%, ${COLORS.sky}, transparent 30%), radial-gradient(circle at 90% 50%, ${COLORS.fire}, transparent 30%)`,
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">06 · DATA FLOW</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight text-paper">
              Every signal, in the right place,<br />at the right time.
            </h2>
          </div>
        </div>
        <div className="rounded-2xl border border-paper/10 p-6 md:p-10 bg-paper/[0.03] overflow-hidden">
          <svg viewBox="0 0 1000 420" className="w-full h-auto">
            <g>
              <rect
                x="420"
                y="170"
                width="160"
                height="80"
                rx="12"
                fill="none"
                stroke={COLORS.fire}
                strokeWidth="2.5"
              />
              <text
                x="500"
                y="200"
                textAnchor="middle"
                fill="#f2f0ea"
                fontSize="14"
                fontFamily="ui-monospace, monospace"
                letterSpacing="3"
              >
                HUBSPOT
              </text>
              <text
                x="500"
                y="225"
                textAnchor="middle"
                fill={COLORS.fire}
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                letterSpacing="2"
              >
                CORE
              </text>
            </g>
            {sources.map((s, i) => (
              <g key={s.l}>
                <rect
                  x="40"
                  y={s.y - 18}
                  width="140"
                  height="36"
                  rx="6"
                  fill="none"
                  stroke={s.c}
                  strokeOpacity="0.7"
                />
                <text
                  x="110"
                  y={s.y + 4}
                  textAnchor="middle"
                  fill={s.c}
                  fontSize="11"
                  fontFamily="ui-monospace, monospace"
                >
                  {s.l}
                </text>
                <path
                  d={`M 180 ${s.y} Q 300 ${s.y}, 420 210`}
                  fill="none"
                  stroke={s.c}
                  strokeOpacity="0.25"
                />
                <circle r="4" fill={s.c}>
                  <animateMotion
                    dur={`${3 + i * 0.4}s`}
                    repeatCount="indefinite"
                    path={`M 180 ${s.y} Q 300 ${s.y}, 420 210`}
                  />
                </circle>
              </g>
            ))}
            {dests.map((d, i) => (
              <g key={d.l}>
                <rect
                  x="820"
                  y={d.y - 18}
                  width="140"
                  height="36"
                  rx="6"
                  fill="none"
                  stroke={d.c}
                  strokeOpacity="0.7"
                />
                <text
                  x="890"
                  y={d.y + 4}
                  textAnchor="middle"
                  fill={d.c}
                  fontSize="11"
                  fontFamily="ui-monospace, monospace"
                >
                  {d.l}
                </text>
                <path
                  d={`M 580 210 Q 700 ${d.y}, 820 ${d.y}`}
                  fill="none"
                  stroke={d.c}
                  strokeOpacity="0.25"
                />
                <circle r="4" fill={d.c}>
                  <animateMotion
                    dur={`${2.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M 580 210 Q 700 ${d.y}, 820 ${d.y}`}
                  />
                </circle>
              </g>
            ))}
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mono text-[11px] tracking-widest uppercase text-paper/50">
            <div>← Sources</div>
            <div className="text-center text-fire">Model + normalise</div>
            <div className="text-right">Destinations →</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ BEFORE / AFTER ═══════════════════════════════ */
function BeforeAfter() {
  const rows = [
    ["Data", "5 spreadsheets, 3 truths", "One source, dedupe rules, tests", COLORS.sky],
    ["Pipeline", "Deals stuck, stages unclear", "Clear criteria, ownership, SLAs", COLORS.fire],
    ["Lifecycle", "Contacts forgotten", "Automated stages with exit rules", COLORS.mint],
    ["Reports", "Different numbers in every meeting", "One exec dashboard everyone trusts", COLORS.lavender],
    ["AI", "Off in a corner", "Enrichment + routing in the workflow", COLORS.amber],
    ["Adoption", "Reps working around HubSpot", "Reps working inside HubSpot", COLORS.emerald],
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">07 · BEFORE / AFTER</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              What changes in 6 weeks.
            </h2>
          </div>
        </div>
        <div className="rounded-2xl border-2 border-ink overflow-hidden">
          <div className="grid grid-cols-[110px_1fr_1fr] mono text-[10px] tracking-widest uppercase bg-ink text-paper">
            <div className="px-4 py-3">Area</div>
            <div className="px-4 py-3 border-l border-paper/10">Before</div>
            <div
              className="px-4 py-3 border-l border-paper/10 text-ink"
              style={{
                background: `linear-gradient(90deg, ${COLORS.volt}, ${COLORS.mint})`,
              }}
            >
              After
            </div>
          </div>
          {rows.map(([a, b, c, color], i) => (
            <div
              key={a}
              className="grid grid-cols-[110px_1fr_1fr] border-t border-ink/10"
            >
              <div
                className="px-4 py-5 mono text-xs tracking-widest uppercase font-bold"
                style={{ background: color, opacity: 0.85 }}
              >
                {a}
              </div>
              <div className="px-4 py-5 border-l border-ink/10 text-ink/60 line-through decoration-ink/20 bg-paper">
                {b}
              </div>
              <div
                className="px-4 py-5 border-l border-ink/10 font-medium"
                style={{ background: `${color}22` }}
              >
                {c}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ WHO IT'S FOR ═══════════════════════════════ */
function WhoItsFor() {
  const yes = [
    "You're rolling out HubSpot for the first time",
    "You're migrating from Salesforce, Pipedrive or Zoho",
    "Your current HubSpot is a mess and needs a rebuild",
    "You want AI in the workflow, not as a bolt-on",
  ];
  const no = [
    "You want a template dropped in and walked away from",
    "You need a cheapest-possible admin, not a system",
    "You don't have leadership time for one workshop a week",
  ];
  return (
    <section
      className="py-20 md:py-28 border-b border-ink/10 relative"
      style={{
        background: `linear-gradient(135deg, #fff59d 0%, #fff1ec 50%, #fffbe0 100%)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">08 · FIT</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              Right fit, wrong fit,<br />we'd rather say it upfront.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-ink p-8 bg-paper shadow-[8px_8px_0_0_var(--color-ink)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-emerald-400 text-ink flex items-center justify-center font-bold border-2 border-ink">
                ✓
              </span>
              <div className="mono text-xs tracking-widest uppercase">Right fit</div>
            </div>
            <ul className="space-y-3">
              {yes.map((y, i) => (
                <li key={y} className="flex gap-3">
                  <span
                    className="mt-1 font-bold"
                    style={{
                      color: [COLORS.fire, COLORS.sky, COLORS.emerald, COLORS.lavender][i % 4],
                    }}
                  >
                    →
                  </span>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-ink/30 p-8 bg-paper/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full border-2 border-ink/30 flex items-center justify-center">
                ✗
              </span>
              <div className="mono text-xs tracking-widest uppercase text-ink/60">
                Not this time
              </div>
            </div>
            <ul className="space-y-3 text-ink/60">
              {no.map((n) => (
                <li key={n} className="flex gap-3">
                  <span className="mt-1">·</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ PRICING ═══════════════════════════════ */
function Pricing() {
  const factors = [
    ["Portal complexity", "How many hubs, how much legacy configuration, how much history to migrate."],
    ["Data condition", "Clean data moves faster than years of duplicates and orphaned records."],
    ["Integration count", "Every connected system (warehouse, billing, product, support) adds scope."],
    ["Team readiness", "How much leadership time is available each week during the build."],
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">09 · SCOPE</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              How scope is determined.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
              Every build starts with a scoping conversation, not a price list. What it costs depends on
              what's actually in your portal today.
            </p>
          </div>
        </div>
        <div className="border-t border-ink">
          {factors.map(([h, d]) => (
            <div key={h} className="grid gap-2 border-b border-ink py-6 md:grid-cols-[1fr_1.6fr] md:items-baseline md:gap-8">
              <h3 className="display text-xl">{h}</h3>
              <p className="text-sm text-ink/65">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-fire transition-colors">
            Get scoped <span>→</span>
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FAQ ═══════════════════════════════ */
function FAQ() {
  const qs = [
    {
      q: "Is 6 weeks realistic?",
      a: "For 90% of implementations, yes. We move fast because we've done this many times and we require a signed architecture before we build. Complex migrations (Salesforce, multi-region) take 8–10 weeks, we'll scope honestly.",
      c: COLORS.fire,
    },
    {
      q: "What do we need from our side?",
      a: "One executive sponsor, one ops lead, and ~4 hours a week from your GTM leaders for the first three weeks. Less after that.",
      c: COLORS.sky,
    },
    {
      q: "Do you work with existing partners or admins?",
      a: "Yes. We often run alongside internal ops teams or handle the heavy build so your admin can focus on day-to-day.",
      c: COLORS.emerald,
    },
    {
      q: "What happens after launch?",
      a: "You get 30 days of support to shake out issues. After that, most teams roll into HubSpot as a Service so we keep operating the system with you.",
      c: COLORS.lavender,
    },
    {
      q: "Do you rebuild bad implementations?",
      a: "Constantly. About a third of our projects are rebuilds. We'll audit what's salvageable before proposing scope.",
      c: COLORS.amber,
    },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="mono text-xs tracking-widest text-fire">10 · QUESTIONS</div>
          <h2 className="mt-4 display text-[clamp(2rem,4vw,3rem)] leading-[0.98] tracking-tight">
            The things<br />people ask us.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-3">
          {qs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border-2 border-ink bg-paper overflow-hidden transition-all"
            >
              <summary
                className="cursor-pointer flex items-center justify-between gap-6 list-none px-6 py-5"
                style={{ borderLeft: `6px solid ${f.c}` }}
              >
                <span className="display text-lg md:text-xl leading-tight">
                  {f.q}
                </span>
                <span
                  className="w-8 h-8 rounded-full border-2 border-ink flex items-center justify-center text-lg group-open:rotate-45 transition-all"
                  style={{ background: f.c }}
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-ink/75 leading-relaxed max-w-3xl">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ CTA ═══════════════════════════════ */
function CTA() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 20%, ${COLORS.fire}, transparent 35%), radial-gradient(circle at 85% 30%, ${COLORS.sky}, transparent 35%), radial-gradient(circle at 50% 90%, ${COLORS.lavender}, transparent 35%), radial-gradient(circle at 30% 80%, ${COLORS.volt}, transparent 30%)`,
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="mono text-xs tracking-[0.3em] uppercase text-fire mb-6">
          Ready when you are
        </div>
        <h2 className="display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-tight">
          Let's build the<br />
          <span
            className="italic"
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLORS.volt}, ${COLORS.blush}, ${COLORS.sky})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            last HubSpot
          </span>{" "}
          you'll ever set up.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-paper/70">
          One workshop is all it takes to see the shape of your rebuild. It's free,
          and there's no obligation.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
            Book a scoping call <span>→</span>
          </BookCallButton>
          <BookAuditButton className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium hover:bg-paper hover:text-ink transition-colors">
            Or start with an audit
          </BookAuditButton>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */
