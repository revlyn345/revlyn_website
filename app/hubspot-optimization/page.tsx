import { OptMoment, OptRehab, OptArtifacts } from "@/components/OptimizationJourney";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
const hero = "/hubspot-impl-hero.jpg";
const whiteboard = "/whiteboard.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "HubSpot Optimization · Revlyn",
  description: "A senior-led audit and rebuild of your existing HubSpot. Fix pipelines, clean data, sharpen reporting, and get the system your team was promised.",
  alternates: { canonical: "/hubspot-optimization" },
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
  sky: "#fff1ec",
  mint: "#fff59d",
  blush: "#ffd9cc",
  lavender: "#f2f0ea",
  emerald: "#ffeb3b",
  amber: "#ff5722",
};

export default function HubSpotOptimization() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Hero />
      <OptMoment />
      <Promise />
      <AuditSurface />
      <OptRehab />
      <Phases />
      <OptArtifacts />
      <Blueprint />
      <Levers />
      <DataFlow />
      <BeforeAfter />
      <WhoItsFor />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════ HERO ═══════════════════════════════ */
function Hero() {
  return (
    <section className="relative border-b border-ink/10 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.fireSoft}, transparent 65%)` }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.voltSoft}, transparent 65%)` }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[440px] h-[440px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${COLORS.volt}, transparent 65%)` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 items-end relative">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 mono text-xs tracking-[0.22em] uppercase bg-paper/70 backdrop-blur border border-ink/10 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
            The portal you already own, made to behave
          </div>
          <h1 className="mt-6 display text-[clamp(2.6rem,7.5vw,7rem)] leading-[0.92] tracking-tight">
            The HubSpot you have,
            <br />
            finally{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 italic"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.fire}, ${COLORS.volt})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                working
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 -z-0"
                style={{ background: `linear-gradient(90deg, ${COLORS.volt}, ${COLORS.fire})` }}
                aria-hidden
              />
            </span>
            .
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-ink/75 leading-relaxed">
            Every portal drifts. A growing team typically adds three to five workflows a quarter, and after eighteen months there's more automation than any one person can hold in their head. That's a healthy sign your business moved, not a failure of setup. We spend a week inside your instance to learn what each layer was protecting, then rebuild only the parts that need to be trusted again.
          </p>
          <p className="mt-4 max-w-xl text-base text-ink/60 leading-relaxed">
            No rip and replace. No four month re-architecture. Your history stays, your integrations stay, and reps keep working through the change.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:info@revlyn.io?subject=HubSpot Optimization"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-fire transition-colors"
            >
              Start with an audit <span>→</span>
            </a>
            <Link
              href="/hubspot-as-a-service"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              Or make it ongoing
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["83", "portals we have rehabilitated", COLORS.fire],
              ["100%", "of your history stays put", COLORS.volt],
              ["0", "reps retrained from scratch", COLORS.ink],
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
          <div
            className="absolute -inset-4 rounded-2xl opacity-70 blur-2xl"
            style={{
              background: `linear-gradient(135deg, ${COLORS.fireSoft}, ${COLORS.voltSoft}, ${COLORS.bone})`,
            }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-ink shadow-[8px_8px_0_0_var(--color-ink)]">
            <img
              src={hero}
              alt="HubSpot audit and rebuild blueprint"
              className="w-full h-full object-cover"
              width={1600}
              height={2000}
            />
            <div className="absolute top-4 left-4 bg-volt border border-ink px-3 py-1.5 rounded-full mono text-[10px] tracking-widest uppercase">
              Audit · v2.1
            </div>
            <div className="absolute bottom-4 right-4 bg-fire text-paper px-3 py-1.5 rounded-full mono text-[10px] tracking-widest uppercase">
              Rebuilt in 4 weeks
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
      h: "The audit reads like a doctor's note",
      p: "Every finding tied to a symptom your team already feels. No jargon, no shame list.",
      bg: COLORS.voltWash,
      dot: COLORS.volt,
    },
    {
      k: "02",
      h: "We fix the causes, not the tickets",
      p: "Broken dashboards usually mean broken data. We chase things to the root, then rebuild them once.",
      bg: COLORS.fireWash,
      dot: COLORS.fire,
    },
    {
      k: "03",
      h: "Your history stays intact",
      p: "No migrations, no rip-and-replace. We work inside the portal you already run.",
      bg: COLORS.bone,
      dot: COLORS.ink,
    },
    {
      k: "04",
      h: "Your team walks out running it",
      p: "Playbooks, loom walkthroughs, and a runbook so nothing quietly drifts again.",
      bg: COLORS.voltSoft,
      dot: COLORS.fire,
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
              The same portal.
              <br />
              A very different Monday.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div
              key={it.k}
              className="rounded-3xl p-8 md:p-10 border-2 border-ink transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)]"
              style={{ background: it.bg }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: it.dot }}
                />
                <div className="mono text-xs tracking-widest">{it.k}</div>
              </div>
              <h3 className="mt-4 display text-2xl md:text-3xl leading-tight">
                {it.h}
              </h3>
              <p className="mt-3 text-ink/75 leading-relaxed">{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ AUDIT SURFACE ═══════════════════════════════ */
function AuditSurface() {
  const layers = [
    { n: "S8", h: "Adoption", p: "Where reps quietly work around HubSpot", c: COLORS.fire },
    { n: "S7", h: "Reporting", p: "Dashboards that don't match reality", c: COLORS.volt },
    { n: "S6", h: "AI & agents", p: "Bolt-ons doing nothing useful", c: COLORS.fireSoft },
    { n: "S5", h: "Automation", p: "Workflows firing the wrong things", c: COLORS.voltSoft },
    { n: "S4", h: "Integrations", p: "Silent syncs, stale fields, duplicate objects", c: COLORS.fire },
    { n: "S3", h: "Data model", p: "Overloaded properties, mixed lifecycles", c: COLORS.volt },
    { n: "S2", h: "Process", p: "Stages nobody agrees on", c: COLORS.fireSoft },
    { n: "S1", h: "Foundation", p: "Governance, permissions, hygiene", c: COLORS.voltSoft },
  ];
  return (
    <section className="bg-ink text-paper py-20 md:py-28 border-b border-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, ${COLORS.fire}, transparent 40%), radial-gradient(circle at 80% 70%, ${COLORS.volt}, transparent 40%), radial-gradient(circle at 50% 100%, ${COLORS.fireSoft}, transparent 40%)`,
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">02 · AUDIT SURFACE</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              The eight places<br />portals quietly break.
            </h2>
            <p className="mt-4 text-paper/60 max-w-xl">
              We audit every layer before we touch a workflow. Fixes at the top
              never hold if the layers underneath are still cracked.
            </p>
          </div>
        </div>

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
                <radialGradient id="core-opt" cx="50%" cy="50%" r="50%">
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
              <circle cx="200" cy="200" r="60" fill="url(#core-opt)" />
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
                AUDIT
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ PHASES ═══════════════════════════════ */
function Phases() {
  const phases = [
    {
      w: "W1",
      h: "Diagnose",
      out: [
        "Portal + workflow audit",
        "Data health + duplication scan",
        "Rep and leader interviews",
      ],
      color: COLORS.fire,
      bg: COLORS.fireWash,
    },
    {
      w: "W2",
      h: "Prescribe",
      out: [
        "Priority findings + severity",
        "Rebuild vs tune vs retire calls",
        "Sign-off on scope",
      ],
      color: COLORS.volt,
      bg: COLORS.voltWash,
    },
    {
      w: "W3",
      h: "Rebuild",
      out: [
        "Pipelines, properties, lifecycles",
        "Workflows and routing rewritten",
        "Reports and dashboards reset",
      ],
      color: COLORS.fire,
      bg: COLORS.fireSoft,
    },
    {
      w: "W4",
      h: "Hand back",
      out: [
        "Team walkthroughs + playbooks",
        "Runbook + governance rules",
        "30-day support runway",
      ],
      color: COLORS.volt,
      bg: COLORS.voltSoft,
    },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">03 · THE 4 WEEKS</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              Diagnose, prescribe,
              <br />
              rebuild, hand back.
            </h2>
          </div>
        </div>

        <div className="relative h-2 rounded-full overflow-hidden mb-10 hidden md:block">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${phases.map((p) => p.color).join(",")})`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {phases.map((p, i) => (
            <div
              key={p.w}
              className="rounded-2xl p-6 border-2 border-ink hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
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
        background: `linear-gradient(135deg, ${COLORS.voltWash} 0%, ${COLORS.fireWash} 50%, ${COLORS.bone} 100%)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-10 items-center relative">
        <div className="md:col-span-5">
          <div className="mono text-xs tracking-widest text-fire">04 · THE FINDINGS DOC</div>
          <h2 className="mt-4 display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-tight">
            Every fix,<br />on one page.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            The audit becomes a single Findings document. Symptom, root cause,
            severity, and the fix we recommend. Your leadership team reads it,
            picks the scope, and signs. Then we rebuild.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              ["Symptom log from your team", COLORS.fire],
              ["Root-cause map", COLORS.volt],
              ["Severity + effort matrix", COLORS.ink],
              ["Rebuild vs tune vs retire", COLORS.fire],
              ["Adoption + governance gaps", COLORS.volt],
            ].map(([s, c]) => (
              <li key={s} className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-ink"
                  style={{ background: c, color: c === COLORS.ink ? "#ffffff" : COLORS.ink }}
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
              alt="Findings document on a whiteboard"
              loading="lazy"
              className="w-full h-auto"
              width={1600}
              height={1000}
            />
            <div className="absolute top-4 left-4 bg-volt border border-ink px-3 py-1.5 rounded mono text-[10px] tracking-widest uppercase">
              Findings · v2.1 · signed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ LEVERS ═══════════════════════════════ */
function Levers() {
  const groups = [
    { h: "Data health", items: ["Dedupe + merge", "Property clean-up", "Normalisation rules", "Validation tests"], c: COLORS.fire },
    { h: "Pipeline", items: ["Stage criteria reset", "Ownership + routing", "Stuck-deal rescue", "Forecast hygiene"], c: COLORS.volt },
    { h: "Lifecycle", items: ["Lead scoring rebuild", "Lifecycle stage logic", "Exit + entry rules", "Nurture rewrite"], c: COLORS.fire },
    { h: "Reporting", items: ["Dashboard reset", "Attribution repair", "Forecast view", "Board-ready pack"], c: COLORS.volt },
    { h: "Integrations", items: ["Sync audit", "Product / billing repair", "Warehouse alignment", "Slack + calendar"], c: COLORS.fire },
    { h: "Adoption", items: ["Runbooks", "Team training", "Governance rules", "Change comms"], c: COLORS.volt },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">05 · LEVERS WE PULL</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight">
              Not a rebuild.<br />A precise repair.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.h}
              className="rounded-2xl border-2 border-ink p-8 bg-paper relative overflow-hidden hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] transition-all"
            >
              <div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ background: g.c }}
              />
              <div
                className="inline-block mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border border-ink"
                style={{ background: g.c }}
              >
                Lever
              </div>
              <h3 className="mt-3 display text-2xl">{g.h}</h3>
              <ul className="mt-5 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-ink/80">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: g.c }}
                    />
                    {i}
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

/* ═══════════════════════════════ DATA FLOW ═══════════════════════════════ */
function DataFlow() {
  const sources = [
    { l: "Broken syncs", y: 40, c: COLORS.fire },
    { l: "Duplicate records", y: 120, c: COLORS.volt },
    { l: "Orphaned fields", y: 200, c: COLORS.fire },
    { l: "Stuck workflows", y: 280, c: COLORS.volt },
    { l: "Silent errors", y: 360, c: COLORS.fire },
  ];
  const dests = [
    { l: "Clean pipeline", y: 60, c: COLORS.volt },
    { l: "Trusted reports", y: 160, c: COLORS.fire },
    { l: "Working sequences", y: 260, c: COLORS.volt },
    { l: "Reliable routing", y: 340, c: COLORS.fire },
  ];
  return (
    <section className="bg-ink text-paper py-20 md:py-28 border-b border-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 50%, ${COLORS.volt}, transparent 30%), radial-gradient(circle at 90% 50%, ${COLORS.fire}, transparent 30%)`,
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-4">
            <div className="mono text-xs tracking-widest text-fire">06 · WHAT WE RE-ROUTE</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight text-paper">
              From noise on one side,<br />to signal on the other.
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
                REPAIR
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
          <div className="grid grid-cols-3 gap-4 mt-8 mono text-[11px] tracking-widest uppercase text-paper/50">
            <div>← Symptoms</div>
            <div className="text-center text-fire">Diagnose + repair</div>
            <div className="text-right">Outcomes →</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ BEFORE / AFTER ═══════════════════════════════ */
function BeforeAfter() {
  const rows = [
    ["Data", "Duplicates and 'notes' fields everywhere", "One clean object model, tested", COLORS.fire],
    ["Pipeline", "Deals stuck in stages nobody agrees on", "Clear stage criteria, ownership, SLAs", COLORS.volt],
    ["Lifecycle", "Marketing hands off ghosts", "Automated stages with exit rules", COLORS.fire],
    ["Reports", "Every meeting starts with a debate", "One dashboard everyone trusts", COLORS.volt],
    ["AI", "Bolted on, never used", "In the workflow where it actually helps", COLORS.fire],
    ["Adoption", "Reps working in a spreadsheet", "Reps working inside HubSpot", COLORS.volt],
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
              What changes in 4 weeks.
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
                background: `linear-gradient(90deg, ${COLORS.volt}, ${COLORS.fire})`,
              }}
            >
              After
            </div>
          </div>
          {rows.map(([a, b, c, color]) => (
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
    "Your HubSpot has drifted and reports no one trusts",
    "You inherited a portal built by three different people",
    "Your team quietly works around HubSpot in spreadsheets",
    "You want AI in the workflow, not as a bolt-on",
  ];
  const no = [
    "You want a checklist run against your portal, no context",
    "You need a cheapest-possible admin, not a system",
    "Leadership can't spare one workshop a week for four weeks",
  ];
  return (
    <section
      className="py-20 md:py-28 border-b border-ink/10 relative"
      style={{
        background: `linear-gradient(135deg, ${COLORS.voltWash} 0%, ${COLORS.fireWash} 50%, ${COLORS.bone} 100%)`,
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
              <span
                className="w-10 h-10 rounded-full text-ink flex items-center justify-center font-bold border-2 border-ink"
                style={{ background: COLORS.volt }}
              >
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
                      color: [COLORS.fire, COLORS.volt, COLORS.fire, COLORS.volt][i % 4],
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

/* ═══════════════════════════════ FAQ ═══════════════════════════════ */
function FAQ() {
  const qs = [
    {
      q: "Do we lose our history?",
      a: "No. Optimization happens inside your existing portal. We clean, restructure and rebuild, but every record, activity and note stays where it is.",
      c: COLORS.fire,
    },
    {
      q: "Is 4 weeks realistic?",
      a: "For most portals, yes. Very large tenants or ones with heavy custom code sometimes need 6, we'll flag that in the audit and scope honestly before you commit.",
      c: COLORS.volt,
    },
    {
      q: "What do we need from our side?",
      a: "One executive sponsor, one ops lead, and around 3 hours a week from your GTM leaders. Reps get pulled in only for the walkthroughs at the end.",
      c: COLORS.fire,
    },
    {
      q: "Do you work with our existing admin or agency?",
      a: "Yes. We often run alongside internal ops teams and hand back to them. If you have an agency in place, we scope around their work, not over it.",
      c: COLORS.volt,
    },
    {
      q: "What happens after the rebuild?",
      a: "You get 30 days of support to shake out issues. After that, most teams roll into HubSpot as a Service so the system keeps getting cared for.",
      c: COLORS.fire,
    },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="mono text-xs tracking-widest text-fire">09 · QUESTIONS</div>
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
          backgroundImage: `radial-gradient(circle at 15% 20%, ${COLORS.fire}, transparent 35%), radial-gradient(circle at 85% 30%, ${COLORS.volt}, transparent 35%), radial-gradient(circle at 50% 90%, ${COLORS.fire}, transparent 35%), radial-gradient(circle at 30% 80%, ${COLORS.volt}, transparent 30%)`,
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="mono text-xs tracking-[0.3em] uppercase text-fire mb-6">
          Ready when you are
        </div>
        <h2 className="display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-tight">
          Let's make the HubSpot you have<br />
          <span
            className="italic"
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLORS.volt}, ${COLORS.fire})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            the one you were promised
          </span>
          .
        </h2>
        <p className="mt-8 max-w-xl text-lg text-paper/70">
          Start with an audit. If we don't find things worth fixing, we'll say so.
          If we do, you'll get a Findings document that reads like a plan.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:info@revlyn.io?subject=HubSpot Optimization"
            className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-fire hover:text-paper transition-colors"
          >
            Book an audit <span>→</span>
          </a>
          <a
            href="mailto:info@revlyn.io?subject=HubSpot review"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium hover:bg-paper hover:text-ink transition-colors"
          >
            Or just talk it through
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */
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
