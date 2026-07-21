"use client";

import { useEffect, useRef, useState } from "react";

const FIRE = "#ff5722";
const VOLT = "#ffeb3b";
const INK = "#0a0a0a";
const BONE = "#f2f0ea";

/* ═══════════════════════════════════════════════════════════════════════
   1. THE MOMENT — the four signs a portal is asking to be rebuilt
   ═══════════════════════════════════════════════════════════════════════ */
export function OptMoment() {
  const moments = [
    {
      time: "MONDAY, 9:37 AM",
      scene: "Two numbers, one dashboard",
      overheard: "\"The pipeline widget says 4.2M. The forecast tab says 3.1M. Both are labelled Q3.\"",
      reframe:
        "When two reports disagree, it's almost never the reports. It's a property definition that quietly changed the day someone renamed a stage. Fixing this is a week of tracing, not a rebuild.",
      tint: FIRE,
    },
    {
      time: "TUESDAY, 3:04 PM",
      scene: "Workflow archaeology",
      overheard: "\"There are 178 active workflows. Nine of them are called 'test'. Two are called 'test FINAL'.\"",
      reframe:
        "Workflow inventories grow by 3 to 5 per quarter in a healthy team, so an 18-month-old portal usually has more automation than any single person can hold in their head. The cleanup is mechanical, not moral.",
      tint: VOLT,
    },
    {
      time: "THURSDAY, 11:48 AM",
      scene: "Rep shadow-CRM",
      overheard: "\"The reps keep a Google Sheet. That's the real forecast. HubSpot is where the deals go to be forgotten.\"",
      reframe:
        "A shadow CRM in Sheets is a signal, not a discipline problem. It usually means the properties in HubSpot don't map to how the team actually qualifies, so they route around them. Once the model reflects reality, the sheet retires itself.",
      tint: FIRE,
    },
    {
      time: "FRIDAY, 4:22 PM",
      scene: "Onboarding paralysis",
      overheard: "\"Just ignore the fields highlighted yellow. And the ones in gray. Actually, just use these five.\"",
      reframe:
        "It's easier to add a HubSpot field than to retire one. Most 2-3 year old portals carry 200+ properties, half untouched in the last 90 days. Archiving them is safe, reversible, and dramatically shortens rep onboarding.",
      tint: VOLT,
    },
  ];

  return (
    <section className="relative border-b border-ink/10 bg-bone/60">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 mb-4">
            Chapter 01 / How portals drift
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            The portal didn't break.
            <br />
            <span className="italic text-ink/60">Your business moved.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            Portals drift because businesses grow. One of these four scenes is what usually brings a founder or Head of Revenue to this page. Pick the one that felt closest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {moments.map((m, i) => (
            <MomentCard key={m.scene} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MomentCard({
  m,
  index,
}: {
  m: { time: string; scene: string; overheard: string; reframe: string; tint: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 90}ms`,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: "transform 700ms cubic-bezier(0.2,0.7,0.2,1), opacity 700ms",
      }}
      className="group relative bg-paper border-2 border-ink rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-ink)] transition-all"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-7 md:p-9"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/55">
            {m.time}
          </div>
          <div
            className="mono text-[10px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border border-ink/15"
            style={{ background: m.tint, color: INK }}
          >
            {m.scene}
          </div>
        </div>

        <p className="display text-[1.35rem] md:text-[1.6rem] leading-[1.15] tracking-tight text-ink">
          {m.overheard}
        </p>

        <div
          style={{
            maxHeight: open ? 400 : 0,
            opacity: open ? 1 : 0,
            transition: "max-height 500ms ease, opacity 300ms ease",
          }}
          className="overflow-hidden"
        >
          <div className="mt-7 pt-6 border-t border-ink/10">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/45 mb-3">
              What's actually going on
            </div>
            <p className="text-[0.95rem] text-ink/75 leading-relaxed">{m.reframe}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-[11px] mono tracking-[0.22em] uppercase text-ink/45">
          <span>{open ? "Close" : "This is my portal"}</span>
          <span
            className="inline-block transition-transform"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
          >
            +
          </span>
        </div>
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2. FOUR-WEEK REHAB — sticky before/after portal that cleans up as you scroll
   ═══════════════════════════════════════════════════════════════════════ */
export function OptRehab() {
  const weeks = [
    {
      n: "01",
      title: "Diagnose",
      body: "A week inside the portal, not around it. We inventory every workflow, property, dashboard and integration. Nothing gets deleted yet. The goal is a shared, honest map of what's actually running.",
      artifact: "Audit report (24-page PDF)",
    },
    {
      n: "02",
      title: "Prescribe",
      body: "Every finding gets sorted into rebuild, tune, or retire. You see the severity, the effort, and the risk before we touch a thing. This is where you sign off on scope, not the first phone call.",
      artifact: "Findings ledger",
    },
    {
      n: "03",
      title: "Rebuild",
      body: "The pipeline, properties, workflows, and reports that decide every leadership meeting get rewritten. History stays intact. Reps keep working, in the same portal, through the change.",
      artifact: "Rebuild spec + Loom trail",
    },
    {
      n: "04",
      title: "Hand back",
      body: "Runbooks, governance rules, and a 30-day support runway. The portal now belongs to you again, and there's a documented reason for every choice in it.",
      artifact: "Runbook v2",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-rehab-step]");
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.rehabStep);
            setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section data-no-premium className="relative border-b border-ink/10 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 mb-4">
            Chapter 02 / Four weeks, watched
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            The portal cleans up
            <br />
            <span className="italic text-ink/60">layer by layer.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            Not a rip-and-replace. Not a four-month re-architecture. Scroll the four weeks and watch the workflow count fall, dedupes resolve, and the dashboards start agreeing again.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-32 grid md:grid-cols-12 gap-12" data-pin>
        <div className="md:col-span-5 hidden md:block">
          <div data-pin-inner>
            <PortalHealthPanel active={active} />
            <div className="mt-6 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
              <span>Week {String(active + 1).padStart(2, "0")} / 04</span>
              <span>{weeks[active]?.artifact}</span>
            </div>
            <div className="mt-3 h-[3px] w-full bg-ink/10 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: `${((active + 1) / weeks.length) * 100}%`,
                  background: `linear-gradient(90deg, ${FIRE}, ${VOLT})`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-24">
          {weeks.map((w, i) => (
            <div
              key={w.n}
              data-rehab-step={i}
              className="min-h-[45vh] flex flex-col justify-center"
            >
              <div className="flex items-baseline gap-5 mb-5">
                <div
                  className="display text-6xl md:text-8xl leading-none"
                  style={{
                    color: active === i ? INK : "rgba(10,10,10,0.15)",
                    transition: "color 400ms",
                  }}
                >
                  {w.n}
                </div>
                <div>
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/55">
                    Week {i + 1}
                  </div>
                  <div className="display text-2xl md:text-3xl tracking-tight mt-1">
                    {w.title}
                  </div>
                </div>
              </div>
              <p className="text-[1.05rem] md:text-[1.15rem] text-ink/75 leading-relaxed max-w-[52ch]">
                {w.body}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 mono text-[10px] tracking-[0.22em] uppercase text-ink/50 self-start px-3 py-1.5 rounded-full border border-ink/15 bg-bone">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: FIRE }} />
                Deliverable / {w.artifact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Visual: 3 gauges (workflows, dupes, dashboard-truth) that improve week over week */
function PortalHealthPanel({ active }: { active: number }) {
  const stages = [
    { workflows: 178, dupes: 3140, truth: 42 }, // W1: current
    { workflows: 178, dupes: 3140, truth: 42 }, // W2: still diagnosing
    { workflows: 96, dupes: 820, truth: 78 }, // W3: rebuild in progress
    { workflows: 62, dupes: 40, truth: 98 }, // W4: hand back
  ];
  const s = stages[active] || stages[0];

  return (
    <div className="relative aspect-[4/5] bg-bone border-2 border-ink rounded-2xl shadow-[8px_8px_0_0_var(--color-ink)] overflow-hidden p-6">
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden>
        <defs>
          <pattern id="og" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke={INK} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#og)" />
      </svg>

      <div className="relative flex flex-col h-full gap-5">
        <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/60 flex items-center justify-between">
          <span>Portal health · live</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: FIRE }} />
            week {active + 1}
          </span>
        </div>

        <Gauge label="Active workflows" value={s.workflows} max={200} target={70} tint={FIRE} />
        <Gauge label="Duplicate records" value={s.dupes} max={3500} target={50} tint={VOLT} />
        <Gauge label="Reports that agree" value={s.truth} max={100} target={95} tint={FIRE} suffix="%" invert />

        <div className="mt-auto pt-4 border-t border-ink/15 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/55">
          <span>Portal · v{active + 1}.0</span>
          <span className="bg-volt text-ink px-2 py-0.5 rounded-full border border-ink">
            {active === 3 ? "handed back" : "in flight"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Gauge({
  label,
  value,
  max,
  target,
  tint,
  suffix = "",
  invert = false,
}: {
  label: string;
  value: number;
  max: number;
  target: number;
  tint: string;
  suffix?: string;
  invert?: boolean;
}) {
  const pct = Math.min(100, (value / max) * 100);
  const targetPct = Math.min(100, (target / max) * 100);
  const healthy = invert ? value >= target : value <= target;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/60">{label}</div>
        <div className="display text-2xl tabular-nums">
          {value.toLocaleString()}
          {suffix}
        </div>
      </div>
      <div className="relative h-3 bg-ink/10 rounded-full overflow-hidden border border-ink/15">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: healthy ? tint : INK,
          }}
        />
        <div
          className="absolute top-0 h-full w-[2px] bg-ink"
          style={{ left: `${targetPct}%` }}
          title={`target ${target}${suffix}`}
        />
      </div>
      <div className="mt-1.5 flex items-center justify-between mono text-[9px] tracking-[0.2em] uppercase text-ink/45">
        <span>{healthy ? "within target" : "over target"}</span>
        <span>
          target · {target}
          {suffix}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. WHAT WE HAND BACK — tangible artifacts
   ═══════════════════════════════════════════════════════════════════════ */
export function OptArtifacts() {
  const artifacts = [
    {
      kind: "PDF · 24 pages",
      title: "The audit report",
      lines: ["Every workflow, dashboard, property mapped", "Findings tagged by severity", "Tied to symptoms your team already feels", "No jargon, no shame list"],
      tint: FIRE,
    },
    {
      kind: "Sheet · living doc",
      title: "Findings ledger",
      lines: ["Rebuild, tune, or retire, per item", "Effort + risk scored honestly", "Owner and target week", "Signed off before we touch a thing"],
      tint: VOLT,
    },
    {
      kind: "HubSpot · rebuild spec",
      title: "The rebuild file",
      lines: ["New object model + lifecycle map", "Workflow rewrites, versioned", "Report definitions the board agrees to", "Legacy fields archived, not deleted"],
      tint: FIRE,
    },
    {
      kind: "Loom · 12 videos",
      title: "The change trail",
      lines: ["One Loom per rewritten workflow", "Before/after screenshots", "Why we chose to rebuild vs tune", "Any rep can watch and follow"],
      tint: VOLT,
    },
    {
      kind: "Notion · runbook",
      title: "The 'when it drifts' book",
      lines: ["Monthly maintenance checklist", "Change-request template", "Escalation contacts + on-call rules", "The governance you didn't have"],
      tint: FIRE,
    },
    {
      kind: "Support · 30 days",
      title: "Runway after handback",
      lines: ["Same operators, same Slack channel", "Bug fixes covered", "Two office-hour sessions", "Optional roll into ongoing service"],
      tint: VOLT,
    },
  ];

  return (
    <section className="relative border-b border-ink/10 bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">
            Chapter 03 / What you walk away with
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            Six artifacts,
            <br />
            <span className="italic text-paper/60">not a consultant's PDF.</span>
          </h2>
          <p className="mt-8 text-lg text-paper/70 max-w-2xl leading-relaxed">
            Every optimization ends with the same six documents. They live in your Notion, they're written so the next hire can read them, and they're specific to your portal, not a template.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {artifacts.map((a, i) => (
            <ArtifactCard key={a.title} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtifactCard({
  a,
  i,
}: {
  a: { kind: string; title: string; lines: string[]; tint: string };
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${i * 70}ms`,
        transform: visible ? "translateY(0) rotate(0)" : "translateY(30px) rotate(-1deg)",
        opacity: visible ? 1 : 0,
        transition: "all 700ms cubic-bezier(0.2,0.7,0.2,1)",
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-paper/20 rounded-lg translate-x-1 translate-y-1" />
      <div className="absolute inset-0 bg-paper/40 rounded-lg translate-x-0.5 translate-y-0.5" />

      <div className="relative bg-paper text-ink rounded-lg overflow-hidden group-hover:-translate-y-2 group-hover:-rotate-1 transition-transform duration-500">
        <div
          className="flex items-center justify-between px-5 py-3 border-b-2 border-ink"
          style={{ background: a.tint }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-ink" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink/40" />
          </div>
          <div className="mono text-[9px] tracking-[0.22em] uppercase text-ink">{a.kind}</div>
        </div>

        <div className="p-6 pt-5">
          <h3 className="display text-xl md:text-[1.4rem] leading-tight tracking-tight mb-5">
            {a.title}
          </h3>
          <ul className="space-y-2">
            {a.lines.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-[0.85rem] text-ink/75 leading-snug">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: a.tint === VOLT ? INK : a.tint }}
                />
                {l}
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-dashed border-ink/15 flex items-center justify-between">
            <div className="mono text-[9px] tracking-[0.22em] uppercase text-ink/40">
              Yours to keep
            </div>
            <div className="mono text-[9px] tracking-[0.22em] uppercase text-ink/40">
              rev.{String(i + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
