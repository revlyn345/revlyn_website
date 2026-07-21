"use client";

import { useEffect, useRef, useState } from "react";

const FIRE = "#ff5722";
const VOLT = "#ffeb3b";
const INK = "#0a0a0a";
const BONE = "#f2f0ea";

/* ═══════════════════════════════════════════════════════════════════════
   1. THE MOMENT — when a one-time build stops being enough
   ═══════════════════════════════════════════════════════════════════════ */
export function HaaSMoment() {
  const moments = [
    {
      time: "MONDAY, 8:52 AM",
      scene: "Admin quit",
      overheard: "\"Who owns HubSpot now that Priya is gone? Nobody? OK we'll figure it out.\"",
      reframe:
        "The person who understood your portal usually leaves before the runbook does. That's a staffing pattern, not a portal problem. A shared team of operators makes the knowledge transferable instead of tied to one seat.",
      tint: FIRE,
    },
    {
      time: "WEDNESDAY, 2:14 PM",
      scene: "Change request pile",
      overheard: "\"Sales wants a new stage, Marketing wants a new lifecycle, the SDR team wants a new score. Queue it up.\"",
      reframe:
        "Growing teams generate three to five HubSpot changes a week. Without a review cadence, the portal absorbs all of them and ages fast. An ongoing operating team turns the queue into a rhythm.",
      tint: VOLT,
    },
    {
      time: "THURSDAY, 10:31 AM",
      scene: "Agency handoff",
      overheard: "\"Our implementer wrapped in September. Since then it's been us and Google.\"",
      reframe:
        "Implementation partners are built to launch, not to live in the portal. When the SOW ends, the portal keeps changing. An extended team is designed for that second act, not the first one.",
      tint: FIRE,
    },
    {
      time: "FRIDAY, 6:02 PM",
      scene: "Reporting drift",
      overheard: "\"The board wants the same number the CRO showed last quarter. It's a different number now.\"",
      reframe:
        "Reports drift because the definitions underneath them evolve faster than anyone documents. A monthly reconciliation ritual, not a bigger dashboard, is what keeps the numbers honest.",
      tint: VOLT,
    },
  ];

  return (
    <section className="relative border-b border-ink/10 bg-bone/60">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-ink/50 mb-4">
            Chapter 01 / Why this exists
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            You're not looking for another launch.
            <br />
            <span className="italic text-ink/60">You're looking for continuity.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            One of these four things has probably happened in the last quarter. Pick the one that felt closest.
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
          <span>{open ? "Close" : "This is my quarter"}</span>
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
   2. THE MONTHLY RHYTHM — a live operating calendar
   Sticky orbit visual on left; scrolling ritual cards on right.
   ═══════════════════════════════════════════════════════════════════════ */
export function HaaSRhythm() {
  const rituals = [
    {
      n: "01",
      when: "Every Monday",
      title: "Ops standup",
      body: "Thirty minutes in your Slack huddle. We walk the pipeline, name deals that stalled, and agree the two portal changes that ship this week. No status deck.",
      artifact: "Monday note (Notion)",
    },
    {
      n: "02",
      when: "Every Wednesday",
      title: "Portal drop",
      body: "Two to five workflow, property, or report changes ship live, each with a Loom. Your reps get a two-line changelog, so nothing surprises them on Monday.",
      artifact: "Change-log entry",
    },
    {
      n: "03",
      when: "Every Friday",
      title: "Data health sweep",
      body: "Dedupes, stalled deals, missing owners, expired sequences. Whatever the portal quietly broke this week gets caught before it lands in the Monday report.",
      artifact: "Health scorecard",
    },
    {
      n: "04",
      when: "End of month",
      title: "Numbers reconcile",
      body: "One session with your leadership. Every board metric traced back to the property, workflow and stage that produced it. The Sheets shadow CRM retires itself, quietly.",
      artifact: "Reconciliation memo",
    },
    {
      n: "05",
      when: "End of quarter",
      title: "Portal review",
      body: "We rewind the quarter, retire what stopped earning its keep, and sketch the two or three portal moves that unlock next quarter's number. It's the closest thing you get to a strategy session.",
      artifact: "Quarter-in-review deck",
    },
    {
      n: "06",
      when: "Continuously",
      title: "Slack, same operators",
      body: "The people in your channel are the ones writing the workflows. Average first reply is under 14 minutes, and there's no account manager translating between you and the build.",
      artifact: "One shared channel",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-rhythm-step]");
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.rhythmStep);
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
            Chapter 02 / How the month runs
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            A calendar, not a
            <br />
            <span className="italic text-ink/60">quarterly deck.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/75 max-w-2xl leading-relaxed">
            Most retainers show you a list of hours. This one shows you the rhythm your portal actually runs on. Scroll the rituals, watch the month cycle around.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 hidden md:block">
          <div className="sticky top-24">
            <RhythmOrbit active={active} count={rituals.length} label={rituals[active]?.when || ""} />
            <div className="mt-6 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ink/50">
              <span>Ritual {String(active + 1).padStart(2, "0")} / {String(rituals.length).padStart(2, "0")}</span>
              <span>{rituals[active]?.artifact}</span>
            </div>
            <div className="mt-3 h-[3px] w-full bg-ink/10 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: `${((active + 1) / rituals.length) * 100}%`,
                  background: `linear-gradient(90deg, ${FIRE}, ${VOLT})`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-24">
          {rituals.map((r, i) => (
            <div
              key={r.n}
              data-rhythm-step={i}
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
                  {r.n}
                </div>
                <div>
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink/55">
                    {r.when}
                  </div>
                  <div className="display text-2xl md:text-3xl tracking-tight mt-1">
                    {r.title}
                  </div>
                </div>
              </div>
              <p className="text-[1.05rem] md:text-[1.15rem] text-ink/75 leading-relaxed max-w-[52ch]">
                {r.body}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 mono text-[10px] tracking-[0.22em] uppercase text-ink/50 self-start px-3 py-1.5 rounded-full border border-ink/15 bg-bone">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: FIRE }} />
                Lands as / {r.artifact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RhythmOrbit({ active, count, label }: { active: number; count: number; label: string }) {
  return (
    <div className="relative aspect-square bg-bone border-2 border-ink rounded-2xl shadow-[8px_8px_0_0_var(--color-ink)] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="rg" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke={INK} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rg)" />
      </svg>

      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        {/* orbit rings */}
        {[160, 130, 100, 70].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke={INK}
            strokeOpacity={0.15 + i * 0.05}
            strokeDasharray={i % 2 ? "4 5" : ""}
          />
        ))}
        {/* rotating arm */}
        <g style={{ transformOrigin: "200px 200px", transform: `rotate(${(active / count) * 360}deg)`, transition: "transform 700ms cubic-bezier(0.2,0.7,0.2,1)" }}>
          <line x1="200" y1="200" x2="200" y2="40" stroke={INK} strokeWidth="2" />
          <circle cx="200" cy="40" r="10" fill={FIRE} stroke={INK} strokeWidth="2" />
        </g>
        {/* orbit nodes */}
        {Array.from({ length: count }).map((_, i) => {
          const a = (i / count) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(a) * 160;
          const y = 200 + Math.sin(a) * 160;
          const on = i <= active;
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="7"
                fill={on ? (i % 2 === 0 ? FIRE : VOLT) : BONE}
                stroke={INK}
                strokeWidth="2"
                style={{ transition: "fill 500ms" }}
              />
              {i === active && (
                <circle cx={x} cy={y} r="12" fill="none" stroke={FIRE} strokeWidth="2">
                  <animate attributeName="r" values="10;18;10" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          );
        })}
        {/* center hub */}
        <circle cx="200" cy="200" r="34" fill={INK} />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill={BONE}
          letterSpacing="2"
        >
          PORTAL
        </text>
        <text
          x="200"
          y="210"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fill={VOLT}
          letterSpacing="2"
        >
          LIVE
        </text>
      </svg>

      <div className="absolute top-4 left-4 mono text-[10px] tracking-[0.22em] uppercase bg-ink text-paper px-2.5 py-1 rounded-full">
        {label || "Rhythm"}
      </div>
      <div className="absolute bottom-4 right-4 mono text-[10px] tracking-[0.22em] uppercase bg-volt text-ink px-2.5 py-1 rounded-full border border-ink">
        Month {String(active + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. WHAT LANDS IN YOUR SLACK — recurring artifacts, as physical docs
   ═══════════════════════════════════════════════════════════════════════ */
export function HaaSArtifacts() {
  const artifacts = [
    {
      kind: "Slack · every Monday",
      title: "The Monday note",
      lines: ["Pipeline movement, last 7 days", "Two portal changes shipping this week", "One risk we're watching", "Deals we escalate to leadership"],
      tint: FIRE,
    },
    {
      kind: "Notion · living doc",
      title: "Change log",
      lines: ["Every workflow, versioned", "Property changes, dated & owned", "Retired automations, archived", "One Loom per change"],
      tint: VOLT,
    },
    {
      kind: "HubSpot · weekly sweep",
      title: "Data health scorecard",
      lines: ["Duplicate contacts + companies", "Stalled deals older than 30 days", "Records missing owner or stage", "Sequences with 0 opens"],
      tint: FIRE,
    },
    {
      kind: "Dashboard set · monthly",
      title: "Reconciliation memo",
      lines: ["Every board metric traced to source", "Definitions signed off by leaders", "Delta vs last month, explained", "Shadow-CRM Sheets retired"],
      tint: VOLT,
    },
    {
      kind: "Loom · continuously",
      title: "Rep enablement library",
      lines: ["New workflow walkthroughs", "Reporting how-tos", "Onboarding path a new rep can finish in a day", "Manager weekly rhythm"],
      tint: FIRE,
    },
    {
      kind: "Deck · every quarter",
      title: "Quarter in review",
      lines: ["What the portal changed", "What we retired and why", "Two or three moves next quarter", "The number the board will see"],
      tint: VOLT,
    },
  ];

  return (
    <section className="relative border-b border-ink/10 bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="mono text-[11px] tracking-[0.22em] uppercase text-paper/50 mb-4">
            Chapter 03 / What lands in your Slack
          </div>
          <h2 className="display text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] tracking-tight">
            Six recurring artifacts,
            <br />
            <span className="italic text-paper/60">not a status deck.</span>
          </h2>
          <p className="mt-8 text-lg text-paper/70 max-w-2xl leading-relaxed">
            You don't get "hours logged." You get six things that show up on a schedule and belong to you. Together they replace the four internal seats most companies hire to run HubSpot well.
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
