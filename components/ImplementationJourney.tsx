"use client";

import { useEffect, useRef, useState } from "react";

const FIRE = "#ff5722";
const VOLT = "#ffeb3b";
const INK = "#0a0a0a";
const BONE = "#f2f0ea";

/* ═══════════════════════════════════════════════════════════════════════
   1. THE MOMENT  —  "Where you are right now"
   Four micro-scenes a Head of Sales / RevOps / Founder actually lives.
   Educational reframe on each. No blame, just recognition.
   ═══════════════════════════════════════════════════════════════════════ */
export function TheMoment() {
  const moments = [
    {
      time: "MONDAY, 9:14 AM",
      scene: "Pipeline review",
      overheard: "\"Can someone tell me why this deal is still in Stage 2? It closed last week.\"",
      reframe:
        "Stage definitions drift because deals move faster than the last person who documented them. Fixable in a week if the object model is honest.",
      tint: FIRE,
    },
    {
      time: "TUESDAY, 4:47 PM",
      scene: "Board deck prep",
      overheard: "\"The number in HubSpot doesn't match the number in the spreadsheet. Use the spreadsheet.\"",
      reframe:
        "Every growing company runs a shadow CRM in Sheets. It's a signal that reports weren't designed for the people who read them, not that anyone did anything wrong.",
      tint: VOLT,
    },
    {
      time: "THURSDAY, 11:02 AM",
      scene: "New rep onboarding",
      overheard: "\"Just ignore the fields highlighted in yellow. Nobody uses those anymore.\"",
      reframe:
        "A HubSpot field is easier to add than to retire. Most portals carry two to three years of well-intentioned properties. The cleanup is mechanical, not moral.",
      tint: FIRE,
    },
    {
      time: "FRIDAY, 5:30 PM",
      scene: "Forecast call",
      overheard: "\"The forecast is based on close dates reps update on Friday afternoons. Discount by 30%.\"",
      reframe:
        "Forecast accuracy is an automation problem, not a discipline problem. When close dates update themselves from activity signals, the 30% haircut disappears.",
      tint: VOLT,
    },
  ];

  return (
    <section className="relative border-b border-ink/10 bg-bone/60">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 mb-4">
            Chapter 01 / Where you are
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            You probably didn't come here
            <br />
            <span className="italic text-ink/60">to read another homepage.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            You came here because one of these four things happened this week. Pick the one that felt closest.
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
  m: {
    time: string;
    scene: string;
    overheard: string;
    reframe: string;
    tint: string;
  };
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
            <p className="text-[0.95rem] text-ink/75 leading-relaxed">
              {m.reframe}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-[11px] mono tracking-[0.22em] uppercase text-ink/45">
          <span>{open ? "Close" : "This is my week"}</span>
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
   2. SIX-WEEK ASSEMBLY  —  a sticky portal that builds as you scroll.
   Left column: sticky SVG portal visual, layers reveal on scroll.
   Right column: scrolling week narrative.
   Six weeks, six layers, one animation.
   ═══════════════════════════════════════════════════════════════════════ */
export function SixWeekAssembly() {
  const weeks = [
    {
      n: "01",
      title: "Foundation",
      body: "Before we touch a workflow, we map how your business actually sells. Objects, lifecycle stages, and the two or three fields that decide every pipeline meeting.",
      artifact: "Object model diagram",
    },
    {
      n: "02",
      title: "Data & schema",
      body: "Properties get named, deduped, and grouped. Legacy fields are archived, not deleted, so history stays intact. The portal starts to feel like it was designed on purpose.",
      artifact: "Property audit sheet",
    },
    {
      n: "03",
      title: "Automation",
      body: "Workflows that move deals, assign owners, and update close dates from activity, not vibes. Every automation is documented so the next hire can read it.",
      artifact: "Workflow inventory",
    },
    {
      n: "04",
      title: "Reporting",
      body: "Dashboards for the three people who look at them: rep, manager, board. Numbers reconcile. The Sheets shadow CRM quietly retires itself.",
      artifact: "Report library",
    },
    {
      n: "05",
      title: "Enablement",
      body: "Loom walkthroughs, in-portal guidance, and a onboarding path a new rep can finish in a day. Adoption stops being a training problem.",
      artifact: "Playbook + Loom library",
    },
    {
      n: "06",
      title: "Handover",
      body: "A runbook, a change log, and a monthly rhythm so the portal keeps behaving after we leave. Or, if you want, we stay on and run it with you.",
      artifact: "Runbook v1",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-week-step]");
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.weekStep);
            setActiveIndex(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      data-no-premium
      className="relative border-b border-ink/10 bg-paper"
    >
      <div className="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 mb-4">
            Chapter 02 / How it gets built
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            Six weeks, watched
            <br />
            <span className="italic text-ink/60">layer by layer.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            Most implementation timelines are a Gantt chart nobody trusts. Ours is a portal you can see assembling in real time. Scroll the weeks, watch it come together.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-32 grid md:grid-cols-12 gap-12" data-pin>
        {/* Pinned assembling portal (handled by MotionRuntime's [data-pin] system) */}
        <div className="md:col-span-5 hidden md:block">
          <div data-pin-inner>
            <PortalAssembly active={activeIndex} />
            <div className="mt-6 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
              <span>Week {String(activeIndex + 1).padStart(2, "0")} / 06</span>
              <span>{weeks[activeIndex]?.artifact}</span>
            </div>
            <div className="mt-3 h-[3px] w-full bg-ink/10 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: `${((activeIndex + 1) / weeks.length) * 100}%`,
                  background: `linear-gradient(90deg, ${FIRE}, ${VOLT})`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Scrolling narrative */}
        <div className="md:col-span-7 space-y-24">
          {weeks.map((w, i) => (
            <div
              key={w.n}
              data-week-step={i}
              className="min-h-[45vh] flex flex-col justify-center"
            >
              <div className="flex items-baseline gap-5 mb-5">
                <div
                  className="display text-6xl md:text-8xl leading-none"
                  style={{
                    color: activeIndex === i ? INK : "rgba(10,10,10,0.15)",
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

/* Portal assembly visual — 6 layers reveal by index */
function PortalAssembly({ active }: { active: number }) {
  const layers = [
    { label: "Foundation", y: 300 },
    { label: "Data schema", y: 250 },
    { label: "Automation", y: 200 },
    { label: "Reporting", y: 150 },
    { label: "Enablement", y: 100 },
    { label: "Handover", y: 50 },
  ];

  return (
    <div className="relative aspect-[4/5] bg-bone border-2 border-ink rounded-2xl shadow-[8px_8px_0_0_var(--color-ink)] overflow-hidden">
      {/* grid backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke={INK} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      {/* Isometric stack */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {layers.map((l, i) => {
          const isOn = i <= active;
          const isCurrent = i === active;
          const color = i % 2 === 0 ? FIRE : VOLT;
          return (
            <g
              key={l.label}
              style={{
                transform: isOn ? "translateY(0)" : "translateY(30px)",
                opacity: isOn ? 1 : 0,
                transition: `all 700ms cubic-bezier(0.2,0.7,0.2,1) ${i * 60}ms`,
                transformOrigin: "center",
              }}
            >
              {/* slab shadow */}
              <polygon
                points={`80,${l.y + 8} 200,${l.y - 32 + 8} 320,${l.y + 8} 200,${l.y + 48 + 8}`}
                fill={INK}
                opacity="0.12"
              />
              {/* slab top */}
              <polygon
                points={`80,${l.y} 200,${l.y - 32} 320,${l.y} 200,${l.y + 32}`}
                fill={isCurrent ? color : BONE}
                stroke={INK}
                strokeWidth="2"
              />
              {/* slab side left */}
              <polygon
                points={`80,${l.y} 200,${l.y + 32} 200,${l.y + 48} 80,${l.y + 16}`}
                fill={isCurrent ? color : "#ffffff"}
                stroke={INK}
                strokeWidth="2"
                opacity="0.9"
              />
              {/* slab side right */}
              <polygon
                points={`320,${l.y} 200,${l.y + 32} 200,${l.y + 48} 320,${l.y + 16}`}
                fill={isCurrent ? color : "#e8e5dc"}
                stroke={INK}
                strokeWidth="2"
              />
              {/* label */}
              <text
                x="200"
                y={l.y + 20}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize="10"
                fontWeight="600"
                fill={INK}
                letterSpacing="1.5"
              >
                {l.label.toUpperCase()}
              </text>
              {/* pulse dot for active */}
              {isCurrent && (
                <circle cx="330" cy={l.y + 8} r="4" fill={FIRE}>
                  <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Status chip */}
      <div className="absolute top-4 left-4 mono text-[10px] tracking-[0.22em] uppercase bg-ink text-paper px-2.5 py-1 rounded-full">
        Portal · v0.{active + 1}
      </div>
      <div className="absolute bottom-4 right-4 mono text-[10px] tracking-[0.22em] uppercase bg-volt text-ink px-2.5 py-1 rounded-full border border-ink">
        Live in {42 - active * 7} days
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. ARTIFACT PEEK  —  deliverables shown as tangible documents.
   Not a bullet list, but hoverable "documents" the client actually gets.
   ═══════════════════════════════════════════════════════════════════════ */
export function ArtifactPeek() {
  const artifacts = [
    {
      kind: "PDF · 24 pages",
      title: "Object model & lifecycle map",
      lines: ["Contact → Lead → MQL → SQL → Opp", "Company hierarchy rules", "Stage exit criteria", "Ownership matrix"],
      tint: FIRE,
    },
    {
      kind: "Notion · living doc",
      title: "Property dictionary",
      lines: ["247 fields, defined", "Owner, source, retention", "Deprecated fields archived", "Change log by quarter"],
      tint: VOLT,
    },
    {
      kind: "HubSpot · 34 workflows",
      title: "Automation inventory",
      lines: ["Deal routing by ARR band", "Close-date auto-updates", "MQL scoring model", "Slack alerts for stalls"],
      tint: FIRE,
    },
    {
      kind: "Dashboard set · 12",
      title: "Reports the board actually opens",
      lines: ["Pipeline coverage 3× view", "Rep-level activity vs quota", "Cohort retention", "Forecast vs commit"],
      tint: VOLT,
    },
    {
      kind: "Loom · 18 videos",
      title: "Enablement library",
      lines: ["Rep onboarding in a day", "Manager weekly rhythm", "Admin how-tos", "Every workflow walked through"],
      tint: FIRE,
    },
    {
      kind: "Runbook · PDF",
      title: "The 'when it breaks' book",
      lines: ["Common errors & fixes", "Escalation contacts", "Monthly maintenance list", "Change-request template"],
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
            <span className="italic text-paper/60">not a slide deck.</span>
          </h2>
          <p className="mt-8 text-lg text-paper/70 max-w-2xl leading-relaxed">
            Every implementation ends with the same six documents. They belong to you, they live in your Notion, and they're written so the next hire can read them without a meeting.
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
      {/* Paper stack effect */}
      <div className="absolute inset-0 bg-paper/20 rounded-lg translate-x-1 translate-y-1" />
      <div className="absolute inset-0 bg-paper/40 rounded-lg translate-x-0.5 translate-y-0.5" />

      <div className="relative bg-paper text-ink rounded-lg overflow-hidden group-hover:-translate-y-2 group-hover:-rotate-1 transition-transform duration-500">
        {/* Header band */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink" style={{ background: a.tint }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-ink" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink/40" />
          </div>
          <div className="mono text-[9px] tracking-[0.22em] uppercase text-ink">
            {a.kind}
          </div>
        </div>

        {/* Body */}
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

          {/* mock signature line */}
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
