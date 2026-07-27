"use client";

import { useEffect, useRef, useState } from "react";
const heroEngine = "/hero-engine.jpg";
const deskOperator = "/desk-operator.jpg";
const engineMacro = "/engine-macro.jpg";
const teamGrid = "/team-grid.jpg";
const funnelViz = "/funnel-viz.jpg";
const whiteboard = "/whiteboard.jpg";
const dashboardMockup = "/dashboard-mockup.jpg";
const aiTerminal = "/ai-terminal.jpg";
const caseFounder = "/case-founder.jpg";
const playbookDesk = "/playbook-desk.jpg";
// TODO: source "cap" is a Lovable-hosted logo asset — not migrated.
const capLogo = "/logos/cap.svg";
// TODO: source "detrack" is a Lovable-hosted logo asset — not migrated.
const detrackLogo = "/logos/detrack.svg";
// TODO: source "irim" is a Lovable-hosted logo asset — not migrated.
const irimLogo = "/logos/irim.svg";
// TODO: source "intuitive" is a Lovable-hosted logo asset — not migrated.
const intuitiveLogo = "/logos/intuitive.svg";
// TODO: source "runo" is a Lovable-hosted logo asset — not migrated.
const runoLogo = "/logos/runo.svg";
// TODO: source "statesystems" is a Lovable-hosted logo asset — not migrated.
const stateSystemsLogo = "/logos/statesystems.svg";
// TODO: source "subcinctus" is a Lovable-hosted logo asset — not migrated.
const subcinctusLogo = "/logos/subcinctus.svg";
// TODO: source "integrity-fire.png" is a Lovable-hosted logo asset — not migrated.
const integrityFireLogo = "/logos/integrity-fire.svg";
// TODO: source "datapel.svg" is a Lovable-hosted logo asset — not migrated.
const datapelLogo = "/logos/datapel.svg";
// TODO: source "agent-agentur.png" is a Lovable-hosted logo asset — not migrated.
const agentAgenturLogo = "/logos/agent-agentur.svg";
// TODO: source "ausforming.png" is a Lovable-hosted logo asset — not migrated.
const ausformingLogo = "/logos/ausforming.svg";
// TODO: source "sparkle.svg" is a Lovable-hosted logo asset — not migrated.
const sparkleLogo = "/logos/sparkle.svg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

import {
  LeakVsSealVisual,
  MethodRunnerVisual,
  StackConstellationVisual,
  ManifestoStampsVisual,
  AgentBarsVisual,
  SystemLoopVisual,
  DayTimelineVisual,
  PlaybookRingsVisual,
} from "@/components/AnimatedVisuals";
import { ServicesSpec, MethodRhythm, ProofLedger } from "@/components/DenseSections";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";



/* ═══════════════════════════════════════════════════════════════
   REVLYN // BRUTALIST POP · REVENUE OS
   Palette: paper #fff · ink #0a0a0a · fire #ff5722 · volt #ffeb3b
   ═══════════════════════════════════════════════════════════════ */

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">


      {/* ══ ACT I · THE HOOK ══════════════════════════════════ */}
      <section id="act-0" data-act>
        <Hero />
        <WhoItsFor />

        <LogoWall />
      </section>

      {/* ══ ACT II · THE DIAGNOSIS ════════════════════════════ */}
      <section id="act-1" data-act>
        <ChapterDivider
          num="I"
          title="What's leaking, and where."
          sub="The truth about the revenue org, on one page."
          bg="bg-paper"
        />
        <Problem />
        <StoryVisual />
      </section>

      {/* ══ ACT III · THE ENGINE ══════════════════════════════ */}
      <section id="act-2" data-act>
        <ChapterDivider
          num="II"
          title="One machine, not a stack of tools."
          sub="Four subsystems. One schema. One source of truth."
          bg="bg-volt"
          dark
        />
        <EngineDiagram />
        <MacroShot />
        <LiveDashboard />
        <FunnelVisual />
        <AIAgentTerminal />
        <StackGrid />
      </section>

      {/* ══ ACT IV · THE METHOD ═══════════════════════════════ */}
      <section id="act-3" data-act>
        <ChapterDivider
          num="III"
          title="We show up on Monday, and the Monday after that."
          sub="Not a retainer that goes quiet by week three. A team that sits inside your standups, your pipeline reviews, and your Slack until the number moves."
          bg="bg-paper"
        />
        <ServicesSpec />
        <MethodRhythm />
        <Engagements />
        <Playbook />
      </section>

      {/* ══ ACT V · THE PROOF ═════════════════════════════════ */}
      <section id="act-4" data-act>
        <ChapterDivider
          num="IV"
          title="Partners for the long run."
          sub="Three stories. Real names. References you can call."
          bg="bg-fire"
          dark
        />
        <ProofLedger />
        <CaseStories />
        <Proof />
        <Numbers />
      </section>

      {/* ══ ACT VI · THE TEAM ════════════════════════════ */}
      <section id="act-5" data-act>
        <ChapterDivider
          num="V"
          title="The people who show up."
          sub="Former VPs of RevOps and GTM. Two embedded per engagement."
          bg="bg-paper"
        />
        <TeamStrip />
        <Manifesto />
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <FAQ />

      {/* ══ CLOSER ════════════════════════════════════════════ */}
      <CTA />
      <Footer />

    </div>
  );
}

/* ─────────────────────────────  CHAPTER DIVIDER  ───────────────────────────── */
function ChapterDivider({
  num,
  title,
  sub,
  bg,
  dark = false,
}: {
  num: string;
  title: string;
  sub: string;
  bg: string;
  dark?: boolean;
}) {
  return (
    <section className={`border-b-2 border-ink ${bg} relative overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          {/* Number - clean and bold */}
          <div className="shrink-0">
            <span
              className="block font-display text-[clamp(4rem,10vw,8rem)] leading-[0.85] tracking-[-0.04em] text-ink/15 select-none"
            >
              {num}
            </span>
          </div>

          {/* Content - simple and direct */}
          <div className="flex-1 pb-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-fire/40" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/30">
                Chapter {num}
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-ink">
              {title}
            </h2>

            <p className="mt-4 font-mono text-sm text-ink/40 max-w-2xl tracking-wide">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-black border-b border-white/10">

      {/* Background image — shown on every screen size now, not just desktop */}
      <div className="absolute inset-0">
        <Image
          src="/hero-revenue-engine.png"
          alt="Revenue Engine"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: "75% center",
          }}
        />

        {/* Desktop: left-heavy gradient — text sits in the left 7 columns,
            so the right side stays clear to show the image detail. */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        {/* Mobile: text spans the full width instead of just a column,
            so a flat, stronger overlay keeps it readable everywhere
            instead of only on one side. */}
        <div className="md:hidden absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(255,87,34,.14),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        <div className="grid md:grid-cols-12 items-center min-h-screen py-20 md:py-0">

          {/* ================= Left ================= */}
          <div className="md:col-span-7">

            <div className="uppercase tracking-[0.3em] text-[11px] text-white/70 mb-5">
              HUBSPOT • REVOPS • GTM SYSTEMS
            </div>

            <h1 className="display font-black text-white leading-[0.9] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
              Revenue,
              <br />
              built like an
              <br />

              <span className="relative inline-block pb-4">
                <span className="leading-[1.05]">engine</span>
                <span className="text-fire">.</span>

                <span className="absolute left-0 right-[0.35em] bottom-0 h-[7px] rounded-full bg-fire"></span>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
              We build and run the CRM, reporting and automation behind B2B
              revenue teams. HubSpot implementation, RevOps and GTM systems,
              handled by the same two people from month one onward.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <BookCallButton className="rounded-full bg-fire px-8 py-4 text-lg font-semibold text-white text-center hover:bg-orange-600 transition">
                BOOK A 30-MIN CALL
              </BookCallButton>

              <a
                href="#services"
                className="group rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white flex items-center justify-center gap-3 hover:bg-white hover:text-black transition"
              >
                SEE WHAT WE RUN

                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                  →
                </span>

              </a>

            </div>

          </div>

          {/* Desktop Right Empty */}
          <div className="hidden md:block md:col-span-5" />

        </div>

      </div>

    </section>
  );
}

function Sticker({
  top, left, rot, bg, fg, title, body,
}: {
  top: string; left: string; rot: string;
  bg: string; fg: string; title: string; body: string;
}) {
  return (
    <div
      className={`absolute w-64 brutal-border ${bg} ${fg} p-4 brutal-shadow`}
      style={{ top, left, transform: `rotate(${rot}deg)` }}
    >
      <div className="mono text-[10px] opacity-80"></div>
      <div className="display text-2xl mt-1">{title}</div>
      <div className="mt-2 text-sm leading-snug">{body}</div>
    </div>
  );
}

/* ─────────────────────────────  MARQUEE (LOGOS/PROOFS)  ───────────────────────────── */
function Marquee() {
  const items = [
    "SERIES B SAAS · +$14M ARR",
    "MID-MKT FINTECH · SDR MANUAL WORK -62%",
    "DEVTOOLS Y-C · DEMO→WON 41D→22D",
    "VERTICAL AI · CAC -38%",
    "B2B MARKETPLACE · PIPELINE ×2.4",
    "GTM PLATFORM · REP RAMP -47%",
  ];
  return (
    <div className="bg-fire text-paper border-b-2 border-ink overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4 display text-2xl md:text-3xl">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
            {items.map((t, j) => (
              <span key={j} className="flex items-center gap-8">
                <span>{t}</span>
                <span className="text-volt">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────  PROBLEM SECTION  ───────────────────────────── */
function Problem() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="02" label="What we see" title="Most revenue teams are quietly held together with tape." />
        <div className="mt-12">
          <LeakVsSealVisual />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  ENGINE DIAGRAM  ───────────────────────────── */
function EngineDiagram() {
  return (
    <section id="engine" className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="03" label="How it works" title="One system, four moving parts, wired together with care." />

        <div className="mt-12 brutal-border bg-paper p-6 md:p-10 relative">
          <div className="absolute top-2 right-4 mono text-xs">FIG. 03.A / SCHEMATIC</div>
          <svg viewBox="0 0 1200 560" className="w-full h-auto" role="img" aria-label="Revenue engine schematic">
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0a0a0a" />
              </marker>
              <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#0a0a0a" opacity="0.15" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="1200" height="560" fill="url(#dots)" />

            {/* INPUTS column */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="12">
              <text x="80" y="40" fontWeight="700">// INPUTS</text>
              {[
                ["WEB / ADS", 70],
                ["OUTBOUND", 150],
                ["PRODUCT / PLG", 230],
                ["PARTNER / CS", 310],
              ].map(([l, y], i) => (
                <g key={i}>
                  <rect x="30" y={y as number} width="180" height="50" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
                  <text x="45" y={(y as number) + 20} fontSize="10" opacity="0.6">SRC · 0{i + 1}</text>
                  <text x="45" y={(y as number) + 38} fontWeight="700">{l}</text>
                </g>
              ))}
            </g>

            {/* Block: CRM */}
            <g>
              <rect x="290" y="70" width="260" height="140" fill="#ffeb3b" stroke="#0a0a0a" strokeWidth="2" />
              <text x="310" y="100" fontFamily="Space Grotesk" fontWeight="700" fontSize="24">01 · CRM</text>
              <text x="310" y="125" fontFamily="JetBrains Mono, monospace" fontSize="11">strict schema · dedupe · hygiene</text>
              <text x="310" y="145" fontFamily="JetBrains Mono, monospace" fontSize="11">HubSpot / SFDC · single truth</text>
              <text x="310" y="175" fontFamily="JetBrains Mono, monospace" fontSize="10" opacity="0.6">SOURCE-OF-RECORD LAYER</text>
            </g>

            {/* Block: RevOps */}
            <g>
              <rect x="290" y="240" width="260" height="140" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
              <text x="310" y="270" fontFamily="Space Grotesk" fontWeight="700" fontSize="24">02 · REVOPS</text>
              <text x="310" y="295" fontFamily="JetBrains Mono, monospace" fontSize="11">lifecycle · SLA · attribution</text>
              <text x="310" y="315" fontFamily="JetBrains Mono, monospace" fontSize="11">forecast · pipeline math</text>
              <text x="310" y="345" fontFamily="JetBrains Mono, monospace" fontSize="10" opacity="0.6">PLUMBING BETWEEN TEAMS</text>
            </g>

            {/* Block: GTM */}
            <g>
              <rect x="640" y="70" width="260" height="140" fill="#fff" stroke="#0a0a0a" strokeWidth="2" />
              <text x="660" y="100" fontFamily="Space Grotesk" fontWeight="700" fontSize="24">03 · GTM</text>
              <text x="660" y="125" fontFamily="JetBrains Mono, monospace" fontSize="11">ICP · outbound engine</text>
              <text x="660" y="145" fontFamily="JetBrains Mono, monospace" fontSize="11">PLG loops · sales enablement</text>
              <text x="660" y="175" fontFamily="JetBrains Mono, monospace" fontSize="10" opacity="0.6">MOTION THAT CONVERTS</text>
            </g>

            {/* Block: AI */}
            <g>
              <rect x="640" y="240" width="260" height="140" fill="#ff5722" stroke="#0a0a0a" strokeWidth="2" />
              <text x="660" y="270" fontFamily="Space Grotesk" fontWeight="700" fontSize="24" fill="#fff">04 · AI</text>
              <text x="660" y="295" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#fff">enrichment · AI SDR · briefs</text>
              <text x="660" y="315" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#fff">call intel · deal signals</text>
              <text x="660" y="345" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#fff" opacity="0.8">COMPOUNDING LEVERAGE</text>
            </g>

            {/* Output */}
            <g>
              <rect x="960" y="150" width="200" height="160" fill="#0a0a0a" />
              <text x="980" y="185" fontFamily="Space Grotesk" fontWeight="700" fontSize="22" fill="#fff">FLIGHT</text>
              <text x="980" y="210" fontFamily="Space Grotesk" fontWeight="700" fontSize="22" fill="#ffeb3b">DECK</text>
              <text x="980" y="240" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#fff">forecast · velocity</text>
              <text x="980" y="258" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#fff">churn · CAC · LTV</text>
              <text x="980" y="290" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#ff5722">→ BOARD-READY</text>
            </g>

            {/* Arrows */}
            <g stroke="#0a0a0a" strokeWidth="2" fill="none" markerEnd="url(#arr)">
              <path d="M210,95  L290,110" />
              <path d="M210,175 L290,140" />
              <path d="M210,255 L290,290" />
              <path d="M210,335 L290,330" />
              <path d="M550,140 L640,140" />
              <path d="M550,310 L640,310" />
              <path d="M770,210 L770,240" />
              <path d="M420,210 L420,240" />
              <path d="M900,140 L960,190" />
              <path d="M900,310 L960,260" />
            </g>

            {/* Annotations */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#ff5722">
              <text x="560" y="130">▲ single source of truth</text>
              <text x="560" y="300">▲ where deals compound</text>
              <text x="220" y="410" fill="#0a0a0a" opacity="0.5">// ANNOTATED BY THE HAND OF AN ACTUAL OPERATOR</text>
            </g>

            {/* Footer stamp */}
            <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#0a0a0a">
              <line x1="30" y1="470" x2="1160" y2="470" stroke="#0a0a0a" strokeWidth="1" />
              <text x="30" y="495">DESIGNED BY HAND</text>
              <text x="30" y="515" opacity="0.6">SHEET 03.A / SCALE 1 : ENGINE</text>
              <text x="900" y="495" textAnchor="start">HUBSPOT AS A SERVICE</text>
              <text x="900" y="515" textAnchor="start" opacity="0.6">REV. 2026</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  SERVICES SPEC  ───────────────────────────── */
function Services() {
  const services = [
    {
      n: "01", tag: "FLAGSHIP", tint: "bg-volt",
      title: "HUBSPOT AS A SERVICE",
      lede: "Your entire HubSpot, RevOps, GTM and AI function — run for you.",
      bullets: [
        "CRM architecture, admin and hygiene",
        "RevOps, reporting and forecast rigour",
        "GTM execution and AI workflows",
        "Senior team embedded, no junior layers",
      ],
      out: "One team that replaces four internal hires.",
      time: "MONTHLY",
    },
    {
      n: "02", tag: "MODULE", tint: "bg-paper",
      title: "REVOPS & DATA",
      lede: "The connective layer between marketing, sales, CS and finance.",
      bullets: [
        "SLA routing · lead scoring · forecast",
        "Warehouse-based attribution model",
        "Pipeline math your CFO will stand behind",
        "Ops handbook + on-call playbook",
      ],
      out: "One number. One meeting. Alignment.",
      time: "6–8 WEEKS",
    },
    {
      n: "03", tag: "MODULE", tint: "bg-paper",
      title: "GTM MOTION",
      lede: "ICP, outbound, PLG loops — the motion that converts.",
      bullets: [
        "ICP scoring · segment strategy",
        "Outbound engine (reps + signal + AI)",
        "PLG loops · activation triggers",
        "Enablement wired into the CRM",
      ],
      out: "A repeatable system, not a bag of tactics.",
      time: "6–10 WEEKS",
    },
    {
      n: "04", tag: "MODULE", tint: "bg-fire text-paper",
      title: "AI INFRASTRUCTURE",
      lede: "AI agents that live inside your revenue stack rather than a sandbox.",
      bullets: [
        "AI enrichment · dedupe · scoring",
        "AI SDRs on guardrails, 24/7",
        "Call intelligence · deal briefs",
        "Human-in-the-loop review + audit",
      ],
      out: "Compounding leverage for every rep.",
      time: "4–8 WEEKS",
    },
  ];
  return (
    <section id="services" className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="04" label="Our flagship" title="HubSpot as a Service." />
        <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
          The all-in-one subscription for companies that want a senior revenue operations team without the payroll, the hiring cycle, or the management overhead.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.n} className={`brutal-border ${s.tint} p-6 md:p-8 brutal-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-ink)] transition-all`}>
              <div className="flex items-start justify-between mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="brutal-border bg-ink text-paper px-2 py-1">MOD·{s.n}</span>
                  <span>{s.tag}</span>
                </div>
                <span>{s.time}</span>
              </div>
              <h3 className="display text-3xl md:text-4xl mt-4">{s.title}</h3>
              <p className="mt-2 text-lg">{s.lede}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 shrink-0 w-4 h-4 border-2 border-current grid place-items-center display text-[10px]">■</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t-2 border-current mono text-xs">
                → OUTPUT: <b className="font-semibold">{s.out}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  METHOD (timeline)  ───────────────────────────── */
function Method() {
  const steps = [
    {
      day: "W01–02", title: "DIAGNOSTIC & SETUP",
      body: "We audit the stack, interview your leads, and map the leak points on one page. Then we plug into your Slack, CRM and weekly cadence.",
    },
    {
      day: "W03–06", title: "BUILD & INTEGRATE",
      body: "Schema, lifecycle, reporting, AI agents and playbooks — shipped in production, not a sandbox. You approve every change before it goes live.",
    },
    {
      day: "W07+", title: "OPERATE",
      body: "We run the system: hygiene, reporting, enablement, roadmap and on-call support. Your team makes decisions; we keep the engine clean.",
    },
    {
      day: "MONTHLY", title: "REVIEW & RESCOPE",
      body: "Monthly scorecard, quarterly planning, and a re-scoped backlog. The system gets tighter as your motion grows.",
    },
  ];
  return (
    <section id="method" className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="05" label="How we work" title="Ninety days. Four unhurried stages." light />

        <div className="mt-10 brutal-border border-paper overflow-hidden brutal-shadow-fire">
          <img
            src={whiteboard}
            alt="Whiteboard sketch of a CRM pipeline with ICP scorecard"
            className="w-full h-auto block"
            loading="lazy"
            width={1408}
            height={912}
          />
          <div className="bg-[color:#141414] border-t-2 border-paper px-4 py-2 mono text-xs flex items-center justify-between">
            <span>KICK-OFF · DAY 03 · WHITEBOARD RAW</span>
            <span className="text-fire">▸ 6 OPERATORS INTERVIEWED</span>
          </div>
        </div>

        <div className="mt-10">
          <MethodRunnerVisual />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.day} className="brutal-border border-paper p-5 bg-[color:#141414] flex gap-4">
              <div className="shrink-0 w-10 h-10 brutal-border bg-volt text-ink grid place-items-center display text-base">{i + 1}</div>
              <div>
                <div className="mono text-fire text-xs">{s.day}</div>
                <h3 className="display text-2xl mt-1">{s.title}</h3>
                <p className="mt-2 text-sm leading-snug text-paper/80">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  STACK GRID  ───────────────────────────── */
function StackGrid() {
  const stack = [
    { g: "CRM", items: ["HubSpot", "Salesforce"] },
    { g: "WAREHOUSE", items: ["Snowflake", "BigQuery", "Postgres"] },
    { g: "ELT / RE-ELT", items: ["Fivetran", "dbt", "Hightouch"] },
    { g: "ENRICHMENT", items: ["Clay", "Apollo", "ZoomInfo"] },
    { g: "OUTREACH", items: ["Outreach", "Salesloft", "Smartlead"] },
    { g: "PRODUCT/PLG", items: ["Amplitude", "PostHog", "Mixpanel"] },
    { g: "CALL INTEL", items: ["Gong", "Chorus"] },
    { g: "AI LAYER", items: ["OpenAI", "Anthropic", "Custom agents"] },
  ];
  return (
    <section id="stack" className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="06" label="Our stack" title="Tool-agnostic, with opinions where they matter." />
        <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
          Opinionated defaults. Battle-tested wiring. If your stack is already in place, we work inside it. If it needs a rebuild, we say so.
        </p>
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt="Revenue Operations Stack"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-0 brutal-border self-start">
            {stack.map((s, i) => (
              <div
                key={s.g}
                className={`p-4 ${i % 2 === 0 ? "bg-paper" : "bg-bone"} ${i < stack.length - 2 ? "border-b-2 border-ink" : ""} ${(i + 1) % 2 === 1 ? "border-r-2 border-ink" : ""}`}
              >
                <div className="mono text-[10px] text-fire">// {s.g}</div>
                <ul className="mt-2 space-y-0.5 display text-sm leading-tight">
                  {s.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROOF  ───────────────────────────── */
function Proof() {
  const cases = [
    {
      tag: "SERIES B · SAAS",
      metric: "+$14M",
      unit: "ARR IN 6MO",
      body: "Rebuilt the CRM schema, wired PLG loops into outbound. Sales-sourced pipeline went from 34% → 71% closable.",
      accent: "bg-volt",
    },
    {
      tag: "MID-MKT · FINTECH",
      metric: "−62%",
      unit: "SDR MANUAL WORK",
      body: "AI SDR agents on guardrails handled research, first-touch, and CRM writeback. Human reps focused on live conversations.",
      accent: "bg-fire text-paper",
    },
    {
      tag: "DEVTOOLS · YC",
      metric: "22d",
      unit: "DEMO → WON (WAS 41d)",
      body: "Deal-desk automation, forecast model and executive command center. Cycle time cut in half without adding headcount.",
      accent: "bg-ink text-paper",
    },
  ];

  return (
    <section id="proof" className="bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="07" label="Some of our work" title="A few teams whose numbers moved." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <article
              key={i}
              className={`${c.accent} p-6 flex flex-col shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="mono text-xs opacity-80">CASE · 0{i + 1} · {c.tag}</div>
              <div className="mt-6 display text-6xl md:text-7xl">{c.metric}</div>
              <div className="mono mt-1 text-xs">{c.unit}</div>
              <p className="mt-6 text-base leading-snug">{c.body}</p>
              <div className="mt-auto pt-6 mono text-[10px] opacity-70">↳ VERIFIED BY CLIENT</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  NUMBERS BAND  ───────────────────────────── */
function Numbers() {
  const stats = [
    { n: "142%", l: "MEDIAN PIPELINE LIFT" },
    { n: "38%", l: "AVG CAC REDUCTION" },
    { n: "1", l: "TEAM / 4 FUNCTIONS" },
    { n: "≤ 90d", l: "STANDALONE BUILD WINDOW" },
  ];
  return (
    <section className="border-b-2 border-ink bg-fire text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={s.l} className={`p-4 ${i !== stats.length - 1 ? "md:border-r-2 md:border-paper" : ""}`}>
            <div className="display text-6xl md:text-7xl">{s.n}</div>
            <div className="mono mt-2 text-xs">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────  MANIFESTO / RULES  ───────────────────────────── */
function Manifesto() {
  const rules = [
    {
      title: "Partnership",
      text: "We become part of your team instead of acting like an outside vendor.",
    },
    {
      title: "Ownership",
      text: "Every system we build is something we're willing to operate ourselves.",
    },
    {
      title: "Execution",
      text: "Ideas don't matter until they're running in production.",
    },
    {
      title: "Clarity",
      text: "One source of truth. Everything else creates confusion.",
    },
    {
      title: "Experience",
      text: "Senior operators solve problems faster than bigger teams.",
    },
    {
      title: "Longevity",
      text: "You should be able to run the business without us someday.",
    },
  ];

  return (
    <section className="bg-paper py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          n="08"
          label="OUR PRINCIPLES"
          title="The way we work."
        />

        <div className="mt-24 grid lg:grid-cols-3 gap-x-16 gap-y-20">

          {rules.map((item, index) => (
            <div
              key={item.title}
              className="group cursor-default"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-3xl font-display tracking-tight transition-all duration-300 group-hover:translate-x-2">
                {item.title}
              </h3>

              <div className="mt-6 w-10 h-px bg-black/15 group-hover:w-20 transition-all duration-300" />

              <p className="mt-6 text-[17px] leading-8 text-black/65 max-w-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────  CTA  ───────────────────────────── */
function CTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-[#F5F3EE]"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 text-center">

        <h2 className="display text-[clamp(3rem,10vw,9rem)] leading-[0.9]">
          GET YOUR
          <br />
          <span className="inline-block bg-ink text-paper px-5 py-1 rounded-md">
            HUBSPOT TEAM.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-8 text-xl leading-relaxed text-ink/80">
          A 30-minute working session for Founders and Heads of Sales,
          Marketing, Revenue or GTM. We'll map what your internal
          HubSpot, RevOps, GTM and AI function should look like — and
          whether Revlyn is the right team to run it.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <BookCallButton
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-ink
              text-paper
              px-9
              py-4
              text-lg
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            → BOOK A CALL
          </BookCallButton>

          <a
            href="#services"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
              text-ink
              px-9
              py-4
              text-lg
              font-semibold
              shadow-sm
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              hover:border-black
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            SEE WHAT WE RUN
          </a>

        </div>

        <div className="mt-10 mono text-xs tracking-[0.2em] uppercase text-ink/60">
          NO NDA REQUIRED · NO SALES CALL
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────  SECTION HEADER  ───────────────────────────── */
function SectionHeader({
  n, label, title, light = false,
}: { n: string; label: string; title: string; light?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-3 mono">
        <span className={`brutal-border ${light ? "bg-volt text-ink border-paper" : "bg-ink text-paper"} px-2 py-1`}>§{n}</span>
        <span className={light ? "text-paper/70" : "text-muted-foreground"}>{label}</span>
        <span className="flex-1 h-[2px] bg-current opacity-30" />
      </div>
      <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)] mt-6 max-w-4xl">{title}</h2>
    </div>
  );
}

/* ─────────────────────────────  FOOTER  ───────────────────────────── */
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
          <div className="md:col-span-7 min-w-0">
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

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10 min-w-0">
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
                  className="flex-1 min-w-0 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 py-14 border-b border-paper/10">
          {/* 7-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact"],
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
                ["Migration", "/hubspot-implementation"],
                ["Audit", "/hubspot-audit"],
              ],
            },
            {
              h: "Work",
              l: [
                ["Ausforming", "/work/ausforming"],
                ["Datapel", "/work/datapel"],
                ["Detrack", "/work/detrack"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["CRM Architecture", "/#svc-crm"],
                ["RevOps", "/#svc-revops"],
                ["GTM Design", "/#svc-gtm"],
                ["AI Infrastructure", "/#svc-ai"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Professional services", "/use-cases"],
                ["Marketplaces", "/use-cases"],
                ["Fintech", "/use-cases"],
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
                ["Field notes", "/blog"],
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


/* ─────────────────────────────  STORY (with photo)  ───────────────────────────── */
function StoryVisual() {
  const milestones = [
    {
      code: "W01",
      label: "Open every stage. Mark the leaks.",
      step: "01",
    },
    {
      code: "W06",
      label: "New schema live. Rollback ready.",
      step: "02",
    },
    {
      code: "D90",
      label: "Your team runs it. We're on-call.",
      step: "03",
    },
  ];

  const metrics = [
    { label: "EMBED", value: "2 OPS", tone: "paper" },
    { label: "CADENCE", value: "WEEKLY", tone: "volt" },
    { label: "HAND-OFF", value: "D-90", tone: "ink" },
  ];

  return (
    <section className="bg-gradient-to-b from-bone to-paper py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-12">

          {/* IMAGE */}

          <div className="relative">

            <div className="relative h-[430px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={deskOperator}
                alt="Operator Desk"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </div>

            {/* Badge */}

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-xl">

              <p className="mono text-[10px] tracking-[0.25em] uppercase text-fire">
                Week 5 of 12
              </p>

              <p className="font-semibold text-ink">
                On-site with your team
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="mono text-[11px] uppercase tracking-[0.35em] text-fire">
              From the Field
            </p>

            <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.9rem)] leading-[1] text-ink">

              A system that

              <br />

              <span className="text-fire">works</span>{" "}
              instead of
              <br />
              leaking.

            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">

              We don't deliver presentations. We rebuild operations,
              document every process, and leave your team running
              independently within ninety days.

            </p>

            {/* Timeline */}

            <div className="mt-8 space-y-3">

              {milestones.map((item) => (

                <div
                  key={item.code}
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fire text-xs font-semibold text-white">

                    {item.step}

                  </div>

                  <div className="flex-1 min-w-0">

                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-fire">

                      {item.code}

                    </div>

                    <div className="mt-1 text-[15px] leading-6 text-ink">

                      {item.label}

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Metrics */}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">

              {metrics.map((metric) => (

                <div
                  key={metric.label}
                  className={`rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${metric.tone === "paper"
                      ? "bg-white"
                      : metric.tone === "volt"
                        ? "bg-volt"
                        : "bg-ink text-paper"
                    }`}
                >

                  <p
                    className={`mono text-[10px] tracking-[0.2em] uppercase ${metric.tone === "ink"
                      ? "text-paper/60"
                      : "text-muted-foreground"
                      }`}
                  >
                    {metric.label}
                  </p>

                  <p className="display mt-2 text-2xl">

                    {metric.value}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────  MACRO SHOT  ───────────────────────────── */
function MacroShot() {
  const steps = [
    {
      title: "Capture",
      text: "Every lead enters one pipeline with complete visibility.",
    },
    {
      title: "Qualify",
      text: "AI and your team score, route and prioritize opportunities.",
    },
    {
      title: "Close",
      text: "Sales, finance and delivery move together automatically.",
    },
    {
      title: "Expand",
      text: "Customer success creates renewals and long-term growth.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-paper py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <p className="mono uppercase tracking-[0.35em] text-fire text-xs">
            // CLOSER LOOK
          </p>

          <h2 className="display mt-5 text-[clamp(2.8rem,6vw,5rem)] leading-[1.02]">
            Every part
            <br />
            <span className="inline-block pb-3 text-fire">
              working together.
            </span>
          </h2>

          <p className="mt-6 text-paper/70 text-lg leading-8 max-w-xl mx-auto">
            Marketing, sales, delivery and customer success operate
            as one connected revenue engine.
          </p>

        </div>

        {/* Image */}

        <div className="relative mt-16">

          <div className="overflow-hidden rounded-[32px] border border-white/10">

            <img
              src={engineMacro}
              alt="Revenue Engine"
              className="w-full h-[520px] object-cover"
            />

          </div>

          {/* Floating Stats */}

          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 px-8 py-5">

            <div className="flex gap-10">

              <div className="text-center">
                <div className="mono text-[10px] tracking-[0.25em] text-paper/50">
                  RESPONSE
                </div>
                <div className="display text-2xl mt-2">&lt;2m</div>
              </div>

              <div className="text-center">
                <div className="mono text-[10px] tracking-[0.25em] text-paper/50">
                  AUTOMATION
                </div>
                <div className="display text-2xl mt-2 text-fire">
                  24/7
                </div>
              </div>

              <div className="text-center">
                <div className="mono text-[10px] tracking-[0.25em] text-paper/50">
                  VISIBILITY
                </div>
                <div className="display text-2xl mt-2">
                  100%
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Process */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {steps.map((step, index) => (

            <div key={step.title}>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-fire text-ink flex items-center justify-center font-bold">

                  {index + 1}

                </div>

                <h3 className="display text-2xl">

                  {step.title}

                </h3>

              </div>

              <p className="mt-5 text-paper/70 leading-7">

                {step.text}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────  FUNNEL VISUAL  ───────────────────────────── */
function FunnelVisual() {
  const stages = [
    ["ATTRACT", "SEO · ADS · PLG"],
    ["QUALIFY", "ICP · SCORE · SLA"],
    ["CONVERT", "DEMO · DEAL DESK"],
    ["EXPAND", "CS SIGNAL · UPSELL"],
    ["RENEW", "USAGE · RENEWAL"],
  ];

  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="07.B"
          label="The full picture"
          title="Your funnel, from first click to renewal."
        />

        <p className="max-w-3xl mt-5 text-lg leading-8 text-muted-foreground">
          Every stage is instrumented in the warehouse. Every dashboard
          is powered by one schema. Every anomaly is routed to an owner,
          not a group chat.
        </p>

        {/* Funnel Image */}

        <div className="mt-12 rounded-[28px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-4">

          <img
            src={funnelViz}
            alt="Instrumented revenue funnel diagram from awareness to renewal"
            className="w-full h-auto object-contain"
            loading="lazy"
          />

        </div>

        {/* Funnel Stages */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {stages.map(([title, subtitle], index) => (

            <div
              key={title}
              className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-fire">
                Stage {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="display text-xl mt-3 text-ink">
                {title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-6">
                {subtitle}
              </p>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  TEAM STRIP  ───────────────────────────── */
function TeamStrip() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <SectionHeader n="09" label="The people" title="Our RevOps and GTM Teams — now on your side." />
          <p className="mt-6 text-lg leading-relaxed">
            Four senior operators. Every engagement gets two of us embedded, one on the CRM and data side, one on GTM and AI. No juniors, no offshore, no sub-contracting.
          </p>
          </div>
        <div className="md:col-span-7">
          <div className="brutal-border brutal-shadow overflow-hidden bg-ink">
            <img
              src={teamGrid}
              alt="Four senior revenue operators, black-and-white portraits"
              className="w-full h-auto block grayscale"
              loading="lazy"
              width={1408}
              height={1008}
            />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mono text-xs">
            {[
              ["Rishabh", "CEO & Founder"],
              ["Kartik", "Head of CRM"],
              ["Krishnanshu", "AI Engineer"],
              ["Shantanu", "CRM Automation"],
            ].map(([n, r]) => (
              <div key={n} className="brutal-border p-3">
                <div className="display text-base">{n}</div>
                <div className="text-fire mt-1">{r}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  LOGO WALL (editorial index)  ───────────────────────────── */

type ClientLogo = {
  name: string;
  href: string;
  src?: string;
  dark?: boolean;
  wordmark?: string;
  tag: string;
  geo: string;
  scope: string;
  outcome: string;
};

const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Intuitive.ai", href: "https://intuitive.ai/", src: intuitiveLogo, dark: true, tag: "AI infrastructure", geo: "USA", scope: "CRM schema + AI lifecycle", outcome: "Lead scoring and routing for the ML pipeline" },
  { name: "Runo", href: "https://runo.ai/", src: runoLogo, tag: "AI platform", geo: "India", scope: "GTM motion + AI SDR", outcome: "Outbound cadence and signal workflows" },
  { name: "Agent Agentur", href: "https://agent-agentur.ch/en/", src: agentAgenturLogo, dark: true, tag: "GTM enablement", geo: "Switzerland", scope: "Sales playbook + HubSpot", outcome: "Custom enablement program and CRM build" },
  { name: "Detrack", href: "https://www.detrack.com/", src: detrackLogo, tag: "Logistics SaaS", geo: "Singapore", scope: "Field sales pipeline", outcome: "Reporting dashboard and deal visibility" },
  { name: "State Systems", href: "https://www.statesystemsinc.com/", src: stateSystemsLogo, tag: "Life safety", geo: "USA", scope: "HubSpot Sales Hub", outcome: "Compliance-ready quoting workflow" },
  { name: "Subcinctus", href: "https://www.subcinctus.com.au/", src: subcinctusLogo, tag: "Advisory", geo: "Australia", scope: "RevOps advisory", outcome: "Portfolio lifecycle and pipeline hygiene" },
  { name: "Classical Academic Press", href: "https://classicalacademicpress.com/", src: capLogo, dark: true, tag: "Education", geo: "USA", scope: "HubSpot + e-commerce", outcome: "Lifecycle marketing and cart recovery" },
  { name: "IRIM Global", href: "https://www.irimglobal.com/", src: irimLogo, tag: "Research", geo: "USA", scope: "RevOps + data", outcome: "Multi-region attribution and CRM sync" },
  { name: "Ausforming", href: "https://ausforming.com/", src: ausformingLogo, tag: "Manufacturing", geo: "Australia", scope: "HubSpot + CPQ", outcome: "Quote-to-cash and deal desk workflow" },
  { name: "Datapel", href: "https://datapel.com/", src: datapelLogo, tag: "Inventory SaaS", geo: "Australia", scope: "HubSpot + ERP", outcome: "Inventory and sales handoff automation" },
  { name: "Integrity Fire Safety", href: "https://integrityfiresafetyservices.com/", src: integrityFireLogo, dark: true, tag: "Life safety", geo: "USA", scope: "Service Hub", outcome: "Renewal pipeline and service revenue tracking" },
  { name: "Sparkle", href: "https://sparkle.life/", src: sparkleLogo, tag: "Consumer", geo: "India", scope: "D2C + CRM", outcome: "PLG loops and activation funnel" },
];
function LogoWall() {
  const [hovered, setHovered] = useState<ClientLogo | null>(null);

  return (
    <section className="border-b-2 border-ink bg-[#faece7] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-14 md:pb-16">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 items-end">
          <div className="md:col-span-9">
            <div className="flex items-center gap-3 mono text-[10px] tracking-[0.24em] text-ink/50">
              <span className="inline-block h-px w-8 bg-ink/25" />
              SELECTED CLIENTS
            </div>
            <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] tracking-[-0.025em] text-ink">
              A quiet list of teams we build<br className="hidden md:block" /> revenue engines with.
            </h2>
          </div>
          <div className="md:col-span-3 md:text-right">
            <div className="mono text-[10px] tracking-[0.2em] text-ink/45 leading-relaxed">
              {CLIENT_LOGOS.length.toString().padStart(2, "0")} companies
              <br />
              Seed to mid-market
              <br />
              Referenceable on request
            </div>
          </div>
        </div>
      </div>

      {/* Single continuous marquee row */}
      <div className="border-y border-ink/10 bg-white relative overflow-hidden">
        <div className="revlyn-marquee group/track relative">
          <div
            className="flex w-max items-center gap-12 md:gap-16 py-6 md:py-8"
            style={{
              animation: "revlyn-marquee-scroll 48s linear infinite",
            }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <a
                key={`${c.name}-${i}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                onMouseEnter={() => setHovered(c)}
                onMouseLeave={() => setHovered(null)}
                className="group/logo relative shrink-0 flex items-center gap-3 px-3 py-2 transition-transform duration-300 ease-out hover:scale-105"
              >
                <span className="mono text-[9px] tracking-[0.24em] text-ink/30 tabular-nums group-hover/logo:text-fire transition-colors duration-300">
                  {String((i % CLIENT_LOGOS.length) + 1).padStart(2, "0")}
                </span>
                {c.src ? (
                  <img
                    src={c.src}
                    alt={c.name}
                    loading="lazy"
                    className="h-8 md:h-10 max-w-[150px] object-contain opacity-80 transition-all duration-300 ease-out group-hover/logo:opacity-100"
                  />
                ) : (
                  <span className="display text-lg tracking-tight text-ink/60 group-hover/logo:text-ink transition-colors duration-300">
                    {c.wordmark}
                  </span>
                )}
                <span className="mx-3 h-5 w-px bg-ink/10 group-hover/logo:bg-ink/20 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] tracking-[0.22em] text-ink/45">
        <div className="flex items-center gap-3 uppercase">
          <span className="inline-block h-px w-8 bg-ink/25" />
          <span>PARTNERSHIPS BUILT TO COMPOUND</span>
          <span
            className={`inline-block w-2 h-2 rounded-full bg-fire transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>
        <div className="md:text-right min-h-[3rem] flex items-center justify-end">
          {hovered ? (
            <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-4 text-ink/80 tracking-normal">
              <span className="display text-base tracking-tight text-ink">{hovered.name}</span>
              <span className="hidden md:inline text-ink/25">/</span>
              <span className="font-mono uppercase text-[10px]">{hovered.tag}</span>
              <span className="hidden md:inline text-ink/25">/</span>
              <span className="font-mono uppercase text-[10px]">{hovered.geo}</span>
              <span className="hidden md:inline text-ink/25">/</span>
              <span className="text-sm font-medium text-ink tracking-tight">{hovered.scope}</span>
              <span className="hidden md:inline text-ink/25">/</span>
              <span className="text-sm font-medium text-ink/60 tracking-tight">{hovered.outcome}</span>
            </div>
          ) : (
            <span className="uppercase whitespace-nowrap">HOVER A LOGO TO SEE THE BRIEF</span>
          )}
        </div>
      </div>
    </section>
  );
}




/* ─────────────────────────────  LIVE DASHBOARD (animated overlays)  ───────────────────────────── */
function LiveDashboard() {
  const [count, setCount] = useState({
    pipe: 0,
    deals: 0,
    conv: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let frame = 0;

        const id = setInterval(() => {
          frame++;

          const progress = Math.min(frame / 40, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          setCount({
            pipe: +(7.92 * ease).toFixed(2),
            deals: Math.round(128 * ease),
            conv: +(16.3 * ease).toFixed(1),
          });

          if (progress >= 1) clearInterval(id);
        }, 30);
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-paper to-bone py-20 lg:py-24">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6"
      >
        <SectionHeader
          n="03.C"
          label="Your dashboard"
          title="A CRM your team will actually trust."
        />

        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Same data, better structure. Every stage, deal and rep has
          one owner, one next action and one source of truth.
        </p>

        {/* Dashboard */}

        <div className="relative mt-14">

          <div className="overflow-hidden rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,.15)]">

            <img
              src={dashboardMockup}
              alt="CRM Dashboard"
              className="w-full object-cover"
            />

          </div>

          {/* Bottom Badge */}

          <div className="absolute left-8 bottom-8 hidden lg:block">

            <div className="rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-xl">

              <p className="mono text-[10px] tracking-[0.25em] uppercase text-fire">
                Next Action
              </p>

              <p className="mt-1 font-semibold">
                Sarah J. → Demo Scheduled
              </p>

            </div>

          </div>

          {/* Alert */}

          <div className="absolute top-8 right-8 hidden xl:block">

            <div className="rounded-xl bg-fire text-paper px-4 py-3 shadow-lg">

              <div className="mono text-[10px] tracking-[0.2em] uppercase opacity-80">
                Alert
              </div>

              <div className="mt-1 text-sm font-medium">
                Prospecting → Qualification Drop
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-7 shadow-lg">

            <div className="mono text-[11px] tracking-[0.25em] uppercase text-fire">
              Pipeline
            </div>

            <div className="display mt-3 text-5xl">
              ${count.pipe}M
            </div>

            <div className="mt-3 text-sm text-muted-foreground">
              +24.3% compared to last 30 days
            </div>

          </div>

          <div className="rounded-3xl bg-volt p-7 shadow-lg">

            <div className="mono text-[11px] tracking-[0.25em] uppercase">
              Deals
            </div>

            <div className="display mt-3 text-5xl">
              {count.deals}
            </div>

            <div className="mt-3 text-sm">
              Average cycle reduced to 22 days
            </div>

          </div>

          <div className="rounded-3xl bg-ink p-7 text-paper shadow-lg">

            <div className="mono text-[11px] tracking-[0.25em] uppercase text-paper/60">
              Win Rate
            </div>

            <div className="display mt-3 text-5xl">
              {count.conv}
              <span className="text-3xl">%</span>
            </div>

            <div className="mt-3 text-sm text-paper/60">
              +5.8 percentage points vs baseline
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  AI AGENT TERMINAL  ───────────────────────────── */
function AIAgentTerminal() {
  const lines = [
    "$ revlyn agent run --pipeline qualify --live",
    "[14:37:41] boot ok · loading firmographics · clearbit + apollo",
    "[14:37:41] scanning 237 new leads from web / outbound / plg",
    "[14:37:42] scoring on ICP · intent · engagement · seniority",
    "[14:37:42] filtered · score ≥ 70 · n=14",
    "[14:37:43] enrich · finance leaders · funded < 24 months",
    "[14:37:43] routing · owner=sarah.j · sla=15m · channel=li+email",
    "[14:37:44] draft · personalised opener · reviewed by human ✓",
    "[14:37:44] handoff · CRM synced · pipeline +$2.48M",
    "> next run in 15:00 · auto",
  ];

  const [shown, setShown] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let n = 0;
          const id = setInterval(() => {
            n++;
            setShown(n);
            if (n >= lines.length) clearInterval(id);
          }, 320);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [lines.length]);

  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Soft ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-fire/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 relative"
        ref={ref}
      >
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left – Content */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-fire/70" />
              <span className="font-mono text-[10px] tracking-[0.22em] text-fire/70 uppercase">
                AI Layer
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-paper">
              AI agents that
              <br />
              <span className="text-volt underline decoration-fire/40 underline-offset-8 decoration-2">
                actually deliver
              </span>
              <br />
              pipeline.
            </h2>

            <p className="mt-6 text-lg text-paper/65 leading-relaxed max-w-md">
              Production agents inside your CRM. Guardrails on. Human-approved.
            </p>

            {/* Feature list */}
            <div className="mt-10 space-y-3">
              {[
                ["QUALIFIER", "scores every lead against your live ICP"],
                ["ENRICHER", "fills firmographics + intent, cited sources"],
                ["ORCHESTRATOR", "routes to owner with SLA + fallback"],
                ["DRAFTER", "personalised opener, human-approved"],
              ].map(([label, desc]) => (
                <div
                  key={label}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="font-mono text-[11px] text-fire/60 shrink-0 mt-0.5 group-hover:text-fire transition-colors">
                    ▸
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-paper/45 uppercase">
                      {label}
                    </span>
                    <span className="text-paper/70 text-sm">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Image + Terminal */}
          <div className="md:col-span-7 space-y-6">
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm bg-paper/5 ring-1 ring-paper/10">
              <img
                src={aiTerminal}
                alt="AI agent terminal user interface"
                className="w-full h-auto block"
                loading="lazy"
                width={1600}
                height={912}
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fire via-volt to-transparent" />
            </div>

            {/* Terminal */}
            <div className="relative bg-[#0a0a0a] border border-paper/10 rounded-sm overflow-hidden shadow-[0_0_40px_-12px_rgba(255,80,40,0.15)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-paper/10 bg-[#0d0d0d]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-fire/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-volt/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-paper/25" />
                </div>
                <span className="ml-3 font-mono text-[10px] tracking-[0.12em] text-paper/35">
                  revlyn // rev-agent · running
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-volt/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-xs md:text-[13px] leading-relaxed min-h-[300px]">
                <div className="space-y-1.5">
                  {lines.slice(0, shown).map((l, i) => {
                    let color = "text-paper/65";
                    if (l.startsWith("$")) color = "text-volt";
                    else if (l.startsWith(">")) color = "text-fire";
                    else if (l.includes("✓")) color = "text-volt";
                    else if (l.includes("handoff"))
                      color = "text-paper/90 font-medium";
                    else if (l.includes("filtered") || l.includes("score ≥"))
                      color = "text-paper/80";

                    return (
                      <div
                        key={i}
                        className={`${color} animate-in fade-in slide-in-from-left-1 duration-200`}
                      >
                        {l}
                      </div>
                    );
                  })}

                  {shown < lines.length && (
                    <span className="inline-block w-[7px] h-[15px] bg-volt/90 animate-blink align-middle ml-0.5" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PLAYBOOK  ───────────────────────────── */
function Playbook() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
        {/* Image */}
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="brutal-border brutal-shadow overflow-hidden bg-ink relative">
            <img
              src={playbookDesk}
              alt="Revenue growth playbook on a strategist's desk with sticky notes"
              className="w-full h-auto block"
              loading="lazy"
              width={1600}
              height={1008}
            />

            <div className="absolute top-4 left-4 brutal-border bg-volt text-ink px-3 py-2 mono text-[10px] brutal-shadow rotate-[-3deg]">
              PLAYBOOK · Q3 EDITION
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="mono text-fire">// DELIVERABLE</div>

          <h2 className="display text-[clamp(2rem,4.5vw,3.75rem)] mt-3">
            A real <span className="bg-volt px-2">playbook.</span>
          </h2>

          <p className="mt-6 text-lg leading-snug">
            Printed. Annotated. Read by reps, CS, and your board.
          </p>

          <div className="mt-8">
            <PlaybookRingsVisual />
          </div>

          {/* Updated Responsive List */}
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mono text-[11px] text-muted-foreground">
            {[
              ["ICP", "segments + firmographics"],
              ["MOTIONS", "outbound · PLG · partner"],
              ["FORECAST", "commit · best · worst"],
              ["GUARDRAILS", "discount · terms · desk"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="border-b border-ink/10 pb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1"
              >
                <span className="text-ink font-medium tracking-wide shrink-0">
                  {k}
                </span>

                <span className="text-ink/70 text-left md:text-right break-words leading-relaxed">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  CASE STORIES (long-form narrative)  ───────────────────────────── */
function CaseStories() {
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mono">
          <span className="brutal-border bg-volt text-ink px-2 py-1">§06.5</span>
          <span className="text-paper/60">CLIENT STORIES</span>
          <span className="flex-1 h-[2px] bg-paper/30" />
        </div>
        <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)] mt-6 max-w-4xl text-paper">
          Three systems. <span className="text-fire">Three stories.</span>
        </h2>

        {/* Feature story with photo */}
        <div className="mt-14 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="brutal-border border-paper overflow-hidden brutal-shadow-fire">
              <img
                src={caseFounder}
                alt="Founder of a Series B SaaS company"
                className="w-full h-auto block"
                loading="lazy"
                width={1200}
                height={1408}
              />
            </div>
            <div className="mt-4 mono text-xs text-paper/60">
              M. ANDERSON · CEO · SERIES B SAAS · NYC
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mono text-fire text-xs">CASE 01 / 03 · CHAPTER I</div>
            <h3 className="display text-4xl md:text-5xl mt-3">
              "We had 40 reps and no clear read on which motion was working."
            </h3>
            <div className="mt-8 brutal-border border-paper bg-[color:#141414] p-6">
              <DayTimelineVisual
                beats={[
                  { day: "DAY 01", note: "14,000 open opps → reality: 2,300." },
                  { day: "DAY 28", note: "New schema live. Attribution settled." },
                  { day: "DAY 90", note: "Keys handed back. Forecast <5% variance." },
                ]}
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                ["+$14M", "ARR ADDED · 12MO"],
                ["-62%", "MANUAL SDR WORK"],
                ["22 D", "DEMO → WON (was 41)"],
              ].map(([k, v]) => (
                <div key={k} className="brutal-border border-paper p-4 bg-fire text-paper">
                  <div className="display text-3xl">{k}</div>
                  <div className="mono text-[10px] mt-1 text-paper/85">{v}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-8 brutal-border border-paper bg-volt text-ink p-6 relative">
              <div className="display text-2xl leading-tight">
                "Revlyn didn't sell us a strategy. They rebuilt the system and handed it back. It still runs. That's the whole story."
              </div>
              <div className="mono text-xs mt-4">
                , M. ANDERSON · CEO · SERIES B SAAS
              </div>
              <span className="absolute -top-3 -left-3 brutal-border bg-fire text-paper mono text-[10px] px-2 py-1 rotate-[-4deg]">
                VERIFIED
              </span>
            </blockquote>
          </div>
        </div>

        {/* Two secondary stories */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "CASE 02 / 03",
              title: "Mid-market fintech drowning in manual routing",
              d1: "Every lead touched by three humans before a rep saw it. Speed-to-lead 6 hours. Conversion suffering.",
              d2: "Wired an AI qualifier + owner-routing engine into HubSpot. Fallback SLAs. Slack pings, not group chats.",
              stats: [["-62%", "MANUAL"], ["6h → 4m", "SPEED-TO-LEAD"], ["+2.4×", "PIPELINE"]],
              bg: "bg-fire",
              accent: "text-paper",
            },
            {
              tag: "CASE 03 / 03",
              title: "DevTools Y-C , forecasts nobody believed",
              d1: "Board meeting was a coin toss. Reps sandbagged. CS didn't see churn signals. AI experiments stuck in the sandbox.",
              d2: "Rebuilt on Snowflake + a real MTA model. Two AI agents shipped in weeks 8-10. Forecast variance < 4%.",
              stats: [["<4%", "FORECAST VAR"], ["-47%", "REP RAMP"], ["+38%", "NRR"]],
              bg: "bg-volt",
              accent: "text-ink",
            },
          ].map((c) => (
            <article key={c.tag} className={`brutal-border border-paper p-6 md:p-8 ${c.bg} ${c.accent}`}>
              <div className="mono text-xs mb-3">{c.tag}</div>
              <h4 className="display text-2xl md:text-3xl">{c.title}</h4>
              <p className="mt-4 leading-relaxed opacity-90">{c.d1}</p>
              <p className="mt-3 leading-relaxed opacity-90">{c.d2}</p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-2">
                {c.stats.map(([k, v]) => (
                  <div key={k} className="brutal-border border-current p-2 bg-paper text-ink">
                    <div className="display text-lg">{k}</div>
                    <div className="mono text-[9px]">{v}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  WHO IT'S FOR  ───────────────────────────── */
function WhoItsFor() {
  const roles = [
    {
      role: "Founders",
      note: "Series A to C. Selling into mid-market or enterprise.",
    },
    {
      role: "Heads of Sales",
      note: "Pipeline, forecast accuracy, rep enablement.",
    },
    {
      role: "Heads of Marketing",
      note: "Attribution, MQL to SQL, lifecycle.",
    },
    {
      role: "Heads of Revenue",
      note: "Full-funnel systems and reporting.",
    },
    {
      role: "Heads of GTM",
      note: "ICP, segmentation, motion design.",
    },
  ];

  return (
    <section className="relative bg-[#faf9f7] py-24">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">

          <div className="lg:col-span-7">

            <span className="mono uppercase tracking-[0.25em] text-fire text-xs">
              WHO WE WORK WITH
            </span>

            <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.95]">
              Built for the people
              <br />
              who own the number.
            </h2>

          </div>

          <div className="lg:col-span-5">

            <p className="text-lg leading-relaxed text-neutral-600">
              If you're the one accountable for revenue this quarter,
              this is the team you hire before adding another internal
              operations head.
            </p>

          </div>

        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {roles.map((item, index) => (
            <div
              key={item.role}
              className={`group rounded-3xl p-7 transition-all duration-300

              ${index === 0
                  ? "bg-fire text-white shadow-xl shadow-orange-500/20"
                  : "bg-white border border-neutral-200 hover:border-fire/40 hover:-translate-y-2 hover:shadow-2xl"
                }`}
            >

              <div
                className={`text-sm font-semibold tracking-widest uppercase

                ${index === 0
                    ? "text-white/70"
                    : "text-fire"
                  }`}
              >
                0{index + 1}
              </div>

              <h3 className="display mt-6 text-2xl leading-tight">
                {item.role}
              </h3>

              <p
                className={`mt-4 leading-relaxed text-sm

                ${index === 0
                    ? "text-white/80"
                    : "text-neutral-600"
                  }`}
              >
                {item.note}
              </p>

              <div
                className={`mt-8 h-[2px] w-12 transition-all duration-300 group-hover:w-20

                ${index === 0
                    ? "bg-white/60"
                    : "bg-fire"
                  }`}
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────  ENGAGEMENT MODELS  ───────────────────────────── */
function Engagements() {
  const tiers = [
    {
      name: "Diagnostic",
      window: "2 weeks",
      price: "Fixed fee",
      for: "Founders who suspect the system is leaking but don't know where.",
      deliverables: ["Revenue system audit", "One-page leak map", "Prioritised 90-day plan"],
      cta: "Start with a diagnostic",
      bg: "bg-paper",
      accent: "bg-volt",
    },
    {
      name: "HubSpot as a Service",
      window: "Monthly",
      price: "Subscription",
      for: "Teams that want a senior HubSpot, RevOps, GTM and AI function without the internal hire.",
      deliverables: ["One embedded senior team", "Weekly operating cadence", "Monthly scorecard + quarterly roadmap"],
      cta: "Get your team",
      bg: "bg-ink text-paper",
      accent: "bg-fire text-paper",
      featured: true,
    },
    {
      name: "90-Day Build",
      window: "90 days",
      price: "Fixed scope",
      for: "Heads of Sales, Marketing, Revenue and GTM ready to ship one full subsystem.",
      deliverables: ["CRM or RevOps or GTM or AI build", "Documentation and dashboards", "Ongoing partnership after launch"],
      cta: "Scope a build",
      bg: "bg-paper",
      accent: "bg-volt",
    },
  ];

  return (
    <section className="bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-6 items-end mb-12">
          <h2 className="md:col-span-7 display text-5xl md:text-6xl leading-[0.95]">Three ways to work with us.</h2>
          <p className="md:col-span-4 md:col-start-9 text-base leading-snug text-ink/70">
            HubSpot as a Service is the flagship. Diagnostic and 90-day builds are also available.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} p-6 md:p-8 flex flex-col ${t.featured ? "brutal-shadow-fire md:-translate-y-3" : "shadow-sm"}`}
            >
              <div className={`inline-block self-start mono text-[10px] px-2 py-1 ${t.accent}`}>
                {t.window} · {t.price}
              </div>
              <div className="display text-4xl md:text-5xl mt-4">{t.name}</div>
              <div className={`mt-3 text-sm leading-snug ${t.featured ? "text-paper/80" : "text-ink/70"}`}>
                {t.for}
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-fire">→</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 px-4 py-3 mono text-xs text-center hover:translate-x-[2px] hover:translate-y-[2px] transition-transform ${t.featured ? "bg-fire text-paper border-2 border-paper" : "bg-ink text-paper border-2 border-transparent"
                  }`}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─────────────────────────────  FAQ  ───────────────────────────── */
function FAQ() {
  const items = [
    { q: "How is Revlyn different from a typical RevOps agency?", a: "We're your extended revenue operations team, not a project shop. HubSpot as a Service means we run CRM, RevOps, GTM and AI for you — weekly standups, monthly scorecards, quarterly roadmaps. No juniors, no offshore, no sub-contracting." },
    { q: "Which CRMs and tools do you work with?", a: "HubSpot, Salesforce, Attio, and Pipedrive on the CRM side. Segment, Rudderstack, and dbt on the data side. Clay, Apollo, and Common Room on the GTM side. On the AI side we build on OpenAI, Anthropic, and open models via LangChain and custom infra." },
    { q: "How do you price engagements?", a: "HubSpot as a Service is a monthly subscription. Diagnostics are a fixed fee. Standalone 90-day builds are fixed-scope, fixed-timeline." },
    { q: "Do you replace our team, or work with them?", a: "We work alongside your leadership and frontline teams. We run the operations layer so your internal people can focus on decisions, conversations and strategy." },
    { q: "What size company do you work with?", a: "B2B startups from Series A to Series C, and mid-market companies from 10M to 50M ARR. If you're pre-revenue or a Fortune 500, we're probably not the right fit." },
    { q: "How quickly can we start?", a: "Diagnostics start within two weeks. HubSpot as a Service and 90-day builds typically start the following month." },
  ];
  return (
    <section id="faq" className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="mono text-xs mb-4 opacity-60">FAQ</div>
            <h2 className="display text-5xl md:text-6xl leading-[0.95]">Questions we get, before the first call.</h2>
            <p className="mt-6 text-base leading-snug text-ink/70">
              If you have one we haven't answered, bring it to the diagnostic. We'd rather over-answer than under-scope.
            </p>
            <a href="#book" className="inline-block mt-8 brutal-border bg-ink text-paper px-5 py-3 mono text-xs">
              Ask us anything →
            </a>
          </div>
          <div className="md:col-span-7 divide-y-2 divide-ink border-t-2 border-b-2 border-ink">
            {items.map((it, i) => (
              <details key={it.q} className="group py-6 cursor-pointer" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 list-none">
                  <div className="flex gap-4 items-start">
                    <span className="mono text-[10px] opacity-50 pt-1">0{i + 1}</span>
                    <span className="display text-xl md:text-2xl leading-tight">{it.q}</span>
                  </div>
                  <span className="display text-3xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pl-8 text-sm md:text-base leading-relaxed text-ink/75 max-w-2xl">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  HERO · SUBSYSTEM SCHEMATIC  ───────────────────────────── */
/* ─────────────────────────── OPERATOR ROW ─────────────────────────── */
function OperatorRow() {
  const ops = [
    { initials: "AK", name: "Aarav", role: "RevOps lead", yrs: 8, bg: "bg-ink", fg: "text-paper" },
    { initials: "NS", name: "Nikhil", role: "HubSpot architect", yrs: 6, bg: "bg-fire", fg: "text-paper" },
    { initials: "PM", name: "Priya", role: "GTM strategist", yrs: 5, bg: "bg-volt", fg: "text-ink" },
    { initials: "RV", name: "Rohan", role: "AI + data", yrs: 4, bg: "bg-paper brutal-border", fg: "text-ink" },
  ];
  const total = ops.reduce((s, o) => s + o.yrs, 0);
  return (
    <div data-reveal data-reveal-delay="0.35" className="mt-8 flex items-center gap-5 flex-wrap">
      <div className="flex -space-x-2">
        {ops.map((o) => (
          <div
            key={o.initials}
            title={`${o.name} · ${o.role} · ${o.yrs} yrs`}
            className={`relative w-11 h-11 rounded-full border-2 border-paper flex items-center justify-center display text-sm ${o.bg} ${o.fg} shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)] hover:z-10 hover:-translate-y-0.5 transition-transform`}
          >
            {o.initials}
          </div>
        ))}
      </div>
      <div className="text-sm leading-tight">
        <div className="font-medium">The operators on your account</div>
        <div className="mono text-[11px] text-ink/60">
          <span className="tabular-nums">{total}</span> yrs combined inside RevOps ·{" "}
          <a href="/about" className="underline decoration-fire decoration-2 underline-offset-4 hover:text-ink">
            meet the team →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────── REVENUE STACK · scroll-driven anatomy ──────────────
   Four stacked layers that transform from "leaking" to "sealed" as
   the hero scrolls. Each layer has its own fault, its own fix, its
   own micro-metric. Not decorative — this is the page's spine.
   ────────────────────────────────────────────────────────────────── */
function RevenueStackScroll() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      const section = el.closest("section") as HTMLElement | null;
      const r = (section ?? el).getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // 0 when section top hits top of viewport, 1 when it leaves.
      const total = r.height + vh * 0.6;
      const passed = Math.min(Math.max(vh * 0.3 - r.top, 0), total);
      setP(Math.min(1, passed / total));
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const layers = [
    {
      id: "sources",
      label: "SOURCES",
      broken: "3 forms, no owner",
      fixed: "Attributed intake",
      metric: "12 → 1 form",
      accent: "fire",
    },
    {
      id: "data",
      label: "DATA",
      broken: "Duplicate accounts",
      fixed: "Single schema",
      metric: "0.4% dup rate",
      accent: "volt",
    },
    {
      id: "crm",
      label: "CRM",
      broken: "Stage 3 quicksand",
      fixed: "Exit criteria enforced",
      metric: "9d avg. cycle ↓",
      accent: "fire",
    },
    {
      id: "gtm",
      label: "REPORTING",
      broken: "3 sources of truth",
      fixed: "One weekly digest",
      metric: "Mondays, 09:00 IST",
      accent: "volt",
    },
  ] as const;

  return (
    <div
      ref={wrapRef}
      className="brutal-border brutal-shadow bg-ink text-paper overflow-hidden relative aspect-[4/5] min-h-[520px]"
      style={{ ["--p" as string]: p.toString() }}
    >
      {/* grid backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.10]" aria-hidden>
        <defs>
          <pattern id="stack-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stack-grid)" />
      </svg>

      {/* header · scrubs from BEFORE to AFTER */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between mono text-[10px] z-10">
        <span className="bg-volt text-ink px-2 py-1 tracking-wider">
          ANATOMY OF A REVENUE STACK
        </span>
        <span className="flex items-center gap-2 opacity-80">
          <span className={p < 0.5 ? "text-fire" : "text-paper/40"}>LEAKING</span>
          <span className="w-8 h-[3px] bg-paper/20 relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 bg-fire" style={{ width: `${p * 100}%` }} />
          </span>
          <span className={p >= 0.5 ? "text-volt" : "text-paper/40"}>SEALED</span>
        </span>
      </div>

      {/* stacked layers */}
      <div className="absolute inset-0 pt-14 pb-14 px-4 flex flex-col gap-2 justify-center">
        {layers.map((L, i) => {
          const threshold = 0.1 + i * 0.18;
          const sealed = p > threshold;
          const localP = Math.min(1, Math.max(0, (p - threshold) / 0.15));
          return (
            <div
              key={L.id}
              className={`relative border transition-all duration-500 ${sealed ? "border-paper/60 bg-paper/[0.04]" : "border-paper/15 bg-transparent"
                }`}
              style={{ transform: `translateX(${(1 - localP) * -4}px)` }}
            >
              {/* left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${sealed ? (L.accent === "fire" ? "bg-fire" : "bg-volt") : "bg-paper/20"
                  }`}
                style={{ height: sealed ? "100%" : "40%" }}
              />

              <div className="pl-4 pr-3 py-2.5 flex items-center gap-3">
                <div className="mono text-[10px] text-paper/50 w-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mono text-[10px] tracking-[0.14em] text-paper/60">{L.label}</div>
                  <div className="text-[13px] leading-tight mt-0.5 relative h-[16px] overflow-hidden">
                    {/* Broken text slides up out; fixed slides in */}
                    <span
                      className="absolute inset-0 text-paper/70 line-through decoration-fire/70 transition-transform duration-500"
                      style={{ transform: sealed ? "translateY(-100%)" : "translateY(0)" }}
                    >
                      {L.broken}
                    </span>
                    <span
                      className={`absolute inset-0 font-medium transition-transform duration-500 ${L.accent === "fire" ? "text-paper" : "text-volt"
                        }`}
                      style={{ transform: sealed ? "translateY(0)" : "translateY(100%)" }}
                    >
                      {L.fixed}
                    </span>
                  </div>
                </div>
                <div
                  className={`mono text-[10px] px-1.5 py-0.5 transition-all ${sealed
                    ? L.accent === "fire"
                      ? "bg-fire text-paper"
                      : "bg-volt text-ink"
                    : "border border-paper/20 text-paper/40"
                    }`}
                >
                  {L.metric}
                </div>
                {/* Status dot */}
                <div className="w-2 h-2 rounded-full transition-colors" style={{
                  background: sealed ? "var(--color-volt)" : "rgba(255,87,34,0.7)"
                }}>
                </div>
              </div>

              {/* Leak animation when NOT sealed */}
              {!sealed && (
                <svg
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-70"
                  width="24" height="14" viewBox="0 0 24 14" aria-hidden
                >
                  <circle cx="4" cy="7" r="1.2" fill="var(--color-fire)">
                    <animate attributeName="cy" values="7;12;7" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="12" cy="7" r="1.2" fill="var(--color-fire)">
                    <animate attributeName="cy" values="7;12;7" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="20" cy="7" r="1.2" fill="var(--color-fire)">
                    <animate attributeName="cy" values="7;12;7" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* footer strip */}
      <div className="absolute left-3 right-3 bottom-3 grid grid-cols-1 md:grid-cols-3 gap-1 mono text-[9px] z-10">
        <div className="border border-paper/25 px-2 py-1.5">
          <div className="opacity-50">LAYERS</div>
          <div className="tabular-nums">04 / 04</div>
        </div>
        <div className="border border-paper/25 px-2 py-1.5">
          <div className="opacity-50">SEALED</div>
          <div className="tabular-nums">{Math.round(p * 100)}%</div>
        </div>
        <div
          className={`px-2 py-1.5 transition-colors ${p > 0.85 ? "bg-volt text-ink" : "border border-paper/25"
            }`}
        >
          <div className="opacity-70">LOOP</div>
          <div>{p > 0.85 ? "CLOSED" : "OPENING"}</div>
        </div>
      </div>
    </div>
  );
}
