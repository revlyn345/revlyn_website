"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";
import { HeroPortal, ScopeBuilder, FaqAccordion } from "./HubSpotAsAServiceWidgets";

/* ══════════════════════════════════════════════════════════════════
   Lightweight scroll-reveal for connecting lines/diagrams. No new
   dependency: a plain IntersectionObserver hook, CSS transition only.
   Fires once, stays revealed. Restrained on purpose.
   ══════════════════════════════════════════════════════════════════ */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function RowArrow({ show }: { show?: boolean }) {
  return (
    <span
      className={`hidden sm:block justify-self-end text-fire transition-all ${
        show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
      }`}
    >
      →
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SHARED
   ══════════════════════════════════════════════════════════════════ */
function SectionCta({ label }: { label: string }) {
  return (
    <BookCallButton className="group border border-ink bg-fire text-paper px-7 py-4 display text-lg inline-flex items-center gap-3 hover:bg-orange-600 transition-colors">
      {label}
      <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
    </BookCallButton>
  );
}

type Tone = "paper" | "bone" | "dark";
function Wrap({
  id,
  tone = "paper",
  texture = false,
  pad = "py-20 md:py-28",
  children,
}: {
  id?: string;
  tone?: Tone;
  texture?: boolean;
  pad?: string;
  children: ReactNode;
}) {
  const bg = tone === "dark" ? "bg-ink" : tone === "bone" ? "bg-bone" : "bg-paper";
  const text = tone === "dark" ? "text-paper" : "text-ink";
  return (
    <section id={id} className={`relative border-b-2 border-ink overflow-hidden ${bg} ${text}`}>
      {texture ? <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" aria-hidden="true" /> : null}
      <div className={`relative max-w-[1200px] mx-auto px-6 ${pad}`}>{children}</div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   01 - HERO. Editorial split. Stats as pure typography, not cards.
   ══════════════════════════════════════════════════════════════════ */
function Hero() {
  const stats: [string, string][] = [
    ["Weekly", "Operating cadence"],
    ["8 areas", "Across HubSpot operations"],
    ["One team", "Not a ticket queue"],
    ["Ongoing", "Not a fixed-term project"],
  ];
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-paper text-ink">
      <div className="absolute inset-0 stripes opacity-[0.035] pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-20 pb-0 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire mb-7">Managed HubSpot Operations</p>
            <h1 className="display text-5xl leading-[0.92] md:text-7xl">HubSpot as a Service</h1>
            <p className="mt-7 max-w-lg text-xl leading-snug text-ink md:text-2xl">
              Your HubSpot team, without hiring one.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              An embedded team of senior HubSpot operators who build, manage and continuously improve the system your
              revenue team runs on.
            </p>
            <p className="mt-4 mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              CRM · RevOps · Automation · Reporting · Data · Integrations · AI
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#scope"
                className="group border border-ink bg-fire text-paper px-7 py-4 display text-lg inline-flex items-center gap-3 hover:bg-orange-600 transition-colors"
              >
                Build Your Revlyn Team
                <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
              <BookCallButton className="border border-ink px-6 py-4 display text-lg hover:bg-bone transition-colors">
                Talk to a HubSpot Expert
              </BookCallButton>
            </div>
          </div>
          <div>
            <HeroPortal />
          </div>
        </div>
      </div>

      {/* Stats: full-width strip, pure typography, integrated not boxed */}
      <div className="relative mt-16 border-t border-ink/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4">
          {stats.map(([v, l], i) => (
            <div key={l} className={`px-6 py-8 ${i > 0 ? "border-l border-ink/10" : ""}`}>
              <div className="display text-3xl md:text-4xl">{v}</div>
              <div className="mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   02 - WHAT REVLYN OWNS. True split-screen: title pinned left,
   capability rows run down the right. No kicker here, the section
   opens straight on the big statement instead, to break the rhythm.
   ══════════════════════════════════════════════════════════════════ */
function WhatWeOwn() {
  const rows = [
    { n: "01", t: "CRM", d: "Architecture / Data / Governance" },
    { n: "02", t: "RevOps", d: "Pipeline / Reporting / Forecasting" },
    { n: "03", t: "Automation", d: "Workflows / Routing / Integrations" },
    { n: "04", t: "AI", d: "Agents / Enrichment / Intelligent workflows" },
  ];
  return (
    <Wrap tone="bone" pad="py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="display text-4xl md:text-5xl leading-[1] max-w-sm">One team owning the system end to end.</h2>
          
        </div>
        <div className="border-t border-ink">
          {rows.map((r) => (
            <div
              key={r.n}
              className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-ink py-8 transition-colors hover:bg-paper/60 sm:grid-cols-[4rem_1fr_1.5fr_2rem]"
            >
              <span className="mono text-xs text-fire transition-transform group-hover:-translate-y-0.5">{r.n}</span>
              <span className="display text-2xl md:text-3xl">{r.t}</span>
              <span className="col-span-2 sm:col-span-1 text-sm text-muted-foreground">{r.d}</span>
              <RowArrow />
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   03 - THE CHALLENGE. A real connected diagram, not three columns.
   Vertical spine with actual connecting lines linking each stage.
   ══════════════════════════════════════════════════════════════════ */
function TheChallenge() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Wrap tone="dark" pad="py-24 md:py-36">
      <h2 className="display max-w-3xl text-4xl leading-[0.98] md:text-6xl text-paper">
        Your HubSpot shouldn't need another owner.
      </h2>
      <p className="mt-6 max-w-md text-paper/55">
        You already have HubSpot. What you don't have is enough senior capacity to continuously make it work.
      </p>

      <div ref={ref} className="mt-20 grid gap-0 md:grid-cols-3">
        {/* Stage 1 */}
        <div className="relative pb-14 md:pb-0 md:pr-10">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-paper/35 mb-5">You have</p>
          <ul className="space-y-2.5 text-lg text-paper/90 display">
            {["HubSpot", "Internal team", "Existing processes"].map((i) => <li key={i}>{i}</li>)}
          </ul>
          <div
            className={`absolute left-0 bottom-0 w-px bg-paper/20 transition-all duration-700 md:left-auto md:right-0 md:top-1/2 md:bottom-auto md:h-px md:w-10 md:-translate-y-1/2 ${
              inView ? "h-10 md:w-10" : "h-0 md:w-0"
            }`}
          />
        </div>

        {/* Stage 2 */}
        <div className="relative border-t border-paper/15 pt-10 pb-14 md:border-t-0 md:border-l md:border-r md:border-paper/15 md:px-10 md:pt-0 md:pb-0">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-fire mb-5">What's missing</p>
          <ul className="space-y-2.5 text-lg text-paper/90 display">
            {["Messy CRM", "Manual processes", "Unreliable reporting", "Broken automation", "No one owns improvement"].map((i) => <li key={i}>{i}</li>)}
          </ul>
          <div
            className={`absolute left-0 bottom-0 w-px bg-paper/20 transition-all duration-700 delay-150 md:left-auto md:right-0 md:top-1/2 md:bottom-auto md:h-px md:w-10 md:-translate-y-1/2 ${
              inView ? "h-10 md:w-10" : "h-0 md:w-0"
            }`}
          />
        </div>

        {/* Stage 3 */}
        <div className="border-t border-paper/15 pt-10 md:border-t-0 md:pl-10">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-fire mb-5">Revlyn</p>
          <p className="text-2xl leading-snug text-paper display">
            Your external HubSpot operating team. Not another consultant, the team that runs it.
          </p>
        </div>
      </div>

      <p className="mt-14 display text-xl md:text-2xl text-fire">That&rsquo;s the gap Revlyn fills.</p>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   04 - CAPABILITIES. Opens on an oversized number, not a kicker.
   ══════════════════════════════════════════════════════════════════ */
function Capabilities() {
  const rows = [
    ["CRM & Data", "We own the object model, data quality, governance and permissions, every week."],
    ["Revenue Operations", "Pipeline, lifecycle, routing and forecasting stay maintained, not just configured once."],
    ["Sales Operations", "Deal process, sales automation and enablement, kept running as your motion changes."],
    ["Marketing Operations", "Campaigns, nurture, lead scoring and attribution, kept running as your motion changes."],
    ["Automation", "Workflows evolve with your business process. We're the ones who catch when they drift."],
    ["Analytics & Reporting", "Board-ready dashboards we keep accurate, not a pile of charts nobody maintains."],
    ["AI", "Research, enrichment, qualification and intelligence, built into the workflows you already run."],
    ["Connected Systems", "Your CRM stays synced with the rest of your stack. We watch the integrations, not just wire them."],
  ];
  return (
    <Wrap pad="py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <span className="display text-7xl md:text-8xl text-ink/10 leading-none select-none">08</span>
        <h2 className="display text-3xl md:text-5xl leading-[1.05] max-w-md text-right md:text-right">
          What Revlyn can own.
        </h2>
      </div>
      <div className="mt-12 border-t border-ink">
        {rows.map(([t, d], i) => (
          <div
            key={t}
            className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-ink py-6 sm:grid-cols-[4rem_1fr_2fr_2rem]"
          >
            <span className="mono text-xs text-fire">{String(i + 1).padStart(2, "0")}</span>
            <span className="display text-xl md:text-2xl">{t}</span>
            <span className="hidden text-sm text-muted-foreground sm:block">{d}</span>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   TRANSITION. A single short line, full-width, no section number.
   Deliberately tiny, a breath between two dense sections, not a
   section of its own.
   ══════════════════════════════════════════════════════════════════ */
function Transition({ text }: { text: string }) {
  return (
    <div className="relative border-b-2 border-ink bg-paper">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <p className="display text-2xl md:text-3xl text-ink/60">{text}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   05 - AUTOMATION. Vertical flow diagrams with real connecting
   lines, distinct from Revenue Workflow's horizontal treatment later.
   ══════════════════════════════════════════════════════════════════ */
function VerticalFlow({ steps }: { steps: string[] }) {
  const { ref, inView } = useInView<HTMLOListElement>();
  return (
    <ol ref={ref}>
      {steps.map((s, i) => (
        <li key={s} className="relative pl-7">
          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-fire" aria-hidden="true" />
          {i < steps.length - 1 ? (
            <span
              className={`absolute left-[3px] top-4 w-px bg-paper/20 transition-all duration-700 ${inView ? "bottom-[-4px]" : "h-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-hidden="true"
            />
          ) : null}
          <p className="display text-lg text-paper pb-6">{s}</p>
        </li>
      ))}
    </ol>
  );
}
function AutomationDetail() {
  return (
    <Wrap tone="dark" pad="py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire mb-5">05 / Automation</p>
        <h2 className="display text-3xl md:text-4xl leading-[1.05] text-paper">
          Built around your actual process.
        </h2>
      </div>

      <div className="mt-14 grid gap-14 md:grid-cols-3">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-paper/40 mb-6">Lead Intelligence</p>
          <VerticalFlow steps={["New Lead", "Enrich", "Qualify", "Route", "Notify"]} />
        </div>
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-paper/40 mb-6">Deal Automation</p>
          <VerticalFlow steps={["Stage Change", "Update", "Create Task", "Notify", "Next Action"]} />
        </div>
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-paper/40 mb-6">Pipeline Intelligence</p>
          <VerticalFlow steps={["Deal Inactivity", "Risk Detection", "Rep Notification", "Manager Alert", "Forecast Update"]} />
        </div>
      </div>

      <div className="mt-16 border-y border-paper/15 py-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-fire">AI Operating Layer</span>
          {["Enrichment", "Qualification", "Routing", "Drafting"].map((t) => (
            <span key={t} className="text-paper/60">{t}</span>
          ))}
        </div>
      </div>
    </Wrap>
  );
}


/* ══════════════════════════════════════════════════════════════════
   07 - REPORTING. Dashboard dominant (~62%), questions as large
   editorial statements. No kicker/heading formula, opens on the
   dashboard directly, heading is small and sits beside the questions.
   ══════════════════════════════════════════════════════════════════ */
function ReportingSection() {
  const chart = [48, 62, 55, 81, 74, 97];
  const max = Math.max(...chart);
  const questions = [
    "How much pipeline is real?",
    "Where is conversion breaking?",
    "Which deals need attention?",
    "Where is revenue coming from?",
    "What's likely to close?",
    "Where are we losing revenue?",
  ];
  return (
    <Wrap tone="bone" pad="py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr] items-start">
        <div className="border border-ink bg-paper p-8 md:p-10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {["Revenue", "Pipeline", "Win Rate", "Forecast"].map((l) => (
                <p key={l} className="mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{l}</p>
              ))}
            </div>
            <span className="mono text-[9px] uppercase tracking-[0.14em] text-ink/30 border border-ink/20 px-2 py-1 shrink-0">
              Illustrative
            </span>
          </div>
          <div className="flex items-end gap-2 h-36 border-t border-ink/10 pt-4" aria-hidden="true">
            {chart.map((v, i) => (
              <div key={i} className="flex-1 bg-fire/70" style={{ height: `${(v / max) * 100}%` }} />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">A sample view of the kind of reporting we build. Built around your real numbers, not ours.</p>
        </div>
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire mb-6">07 / Reporting</p>
          <ul className="space-y-5">
            {questions.map((q) => (
              <li key={q} className="display text-lg md:text-xl leading-snug border-b border-ink/10 pb-4 last:border-b-0">
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-6 display text-lg text-fire">Trusted data → better decisions.</p>
        </div>
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   08 - INTEGRATIONS. Clean technical architecture diagram, centered
   and full-bleed, minimal surrounding copy.
   ══════════════════════════════════════════════════════════════════ */
function IntegrationsTree() {
  const branches = [
    { t: "Sales", c: "Data" },
    { t: "Marketing", c: "Ads" },
    { t: "Support", c: "Tickets" },
    { t: "Finance", c: "Billing" },
  ];
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 640 260" className="w-full min-w-[560px]" role="img" aria-label="HubSpot connected to Sales, Marketing, Support and Finance systems">
        <rect x="260" y="8" width="120" height="40" fill="var(--color-ink)" />
        <text x="320" y="33" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.1em" className="fill-paper">HUBSPOT</text>
        <line x1="320" y1="48" x2="320" y2="72" stroke="var(--color-ink)" strokeOpacity="0.3" />
        <line x1="80" y1="72" x2="560" y2="72" stroke="var(--color-ink)" strokeOpacity="0.3" />
        {branches.map((b, i) => {
          const x = 80 + i * 160;
          return (
            <g key={b.t}>
              <line x1={x} y1="72" x2={x} y2="92" stroke="var(--color-ink)" strokeOpacity="0.3" />
              <rect x={x - 55} y="92" width="110" height="36" fill="none" stroke="var(--color-ink)" strokeWidth="1" />
              <text x={x} y="114" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.08em" className="fill-ink">{b.t.toUpperCase()}</text>
              <line x1={x} y1="128" x2={x} y2="152" stroke="var(--color-ink)" strokeOpacity="0.3" />
              <rect x={x - 50} y="152" width="100" height="34" fill="none" stroke="var(--color-fire)" strokeWidth="1" />
              <text x={x} y="173" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="0.06em" className="fill-fire">{b.c.toUpperCase()}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
function Integrations() {
  return (
    <Wrap texture pad="py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <h2 className="display text-3xl md:text-5xl leading-[1.05] max-w-lg">HubSpot shouldn't operate alone.</h2>
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire">08 / Integrations</p>
      </div>
      <IntegrationsTree />
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   09 - DATA MANAGEMENT. Large black space, numbered vertical system.
   ══════════════════════════════════════════════════════════════════ */
function DataManagement() {
  const steps = ["Messy Portal", "Clean", "Standardise", "Govern", "Reliable CRM"];
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Wrap tone="dark" pad="py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire mb-6">09 / Data management</p>
          <h2 className="display max-w-sm text-3xl md:text-5xl leading-[1.05] text-paper">Bad data creates bad decisions.</h2>
          <p className="mt-6 max-w-xs text-paper/50 text-sm">We improve the quality and structure of your HubSpot database.</p>
        </div>
        <div ref={ref}>
          {steps.map((s, i) => (
            <div key={s} className="flex items-start gap-5">
              <span className="mono text-xs text-paper/30 pt-2 w-6">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <p className={`display text-2xl md:text-3xl ${i === steps.length - 1 ? "text-fire" : "text-paper"}`}>{s}</p>
                {i < steps.length - 1 ? (
                  <div
                    className={`my-4 w-px bg-paper/15 ml-[calc(1.5rem-0.5px)] transition-all duration-700 ${inView ? "h-8" : "h-0"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-8">
        {["Duplicates", "Missing owners", "Broken lifecycle stages", "Incorrect properties", "Unreliable attribution"].map((t) => (
          <span key={t} className="mono text-[11px] uppercase tracking-[0.12em] text-paper/50">{t}</span>
        ))}
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   10 - REVENUE WORKFLOW. Statement left, vertical numbered flow
   right, deliberately different composition from Automation above.
   ══════════════════════════════════════════════════════════════════ */
function RevenueWorkflow() {
  const steps = ["Acquire", "Capture", "Qualify", "Route", "Sell", "Expand", "Retain", "Report"];
  return (
    <Wrap tone="bone" pad="py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="display text-4xl md:text-5xl leading-[0.98] max-w-xs">
            The revenue workflow, connected end to end.
          </h2>
          <p className="mt-6 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Revlyn connects the revenue workflow to HubSpot so every stage has data, ownership and automation
            behind it.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s} className="border-t border-ink pt-3">
                <span className="mono text-[10px] text-fire">{String(i + 1).padStart(2, "0")}</span>
                <p className="display text-lg mt-1">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-fire/40 pt-4">
            <p className="mono text-[10px] uppercase tracking-[0.16em] text-fire">AI runs across every step above</p>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   11 - IMPLEMENTATION VS OPTIMIZATION VS SERVICE. HaaS side visually heavier.
   ══════════════════════════════════════════════════════════════════ */
function ImplementationVsHaas() {
  return (
    <Wrap id="how-it-works" pad="py-20 md:py-28">
      <h2 className="display max-w-2xl text-3xl md:text-5xl leading-[1.05] mb-14">
        Which Revlyn service do you need?
      </h2>
      <div className="grid border border-ink md:grid-cols-3">
        <div className="p-8 md:p-10">
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-4">Implementation</p>
          <h3 className="display text-2xl">Build the foundation.</h3>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {["New HubSpot", "Migration", "New CRM architecture", "New revenue system"].map((i) => <li key={i}>{i}</li>)}
          </ul>
          <p className="mt-8 mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Project ends.</p>
        </div>
        <div className="p-8 md:p-10 border-t border-ink md:border-t-0 md:border-l">
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-4">Optimization</p>
          <h3 className="display text-2xl">Fix the system you already have.</h3>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {["Messy portal", "Broken workflows", "Poor data", "Reporting problems", "Low adoption", "CRM debt"].map((i) => <li key={i}>{i}</li>)}
          </ul>
          <p className="mt-8 mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Project ends.</p>
        </div>
        <div className="p-8 md:p-10 bg-ink text-paper border-t border-ink md:border-t-0 md:border-l">
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-fire mb-4">HubSpot as a Service</p>
          <h3 className="display text-2xl">Operate and continuously improve it.</h3>
          <ul className="mt-5 space-y-2 text-sm text-paper/70">
            {["Ongoing CRM ownership", "RevOps execution", "Automation", "Reporting", "Data", "AI"].map((i) => <li key={i}>{i}</li>)}
          </ul>
          <p className="mt-8 mono text-[11px] uppercase tracking-[0.16em] text-fire">The system evolves.</p>
        </div>
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   12 - SUPPORT VS SERVICE. Full-screen editorial moment. Huge type.
   ══════════════════════════════════════════════════════════════════ */
function SupportVsService() {
  return (
    <Wrap pad="py-28 md:py-44">
      <div className="grid gap-16 md:grid-cols-2 md:divide-x md:divide-ink/15">
        <div className="md:pr-12">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-6">Support</p>
          <p className="display text-3xl md:text-5xl leading-[1.05]">
            &ldquo;Something is broken. Fix it.&rdquo;
          </p>
        </div>
        <div className="md:pl-12">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-fire mb-6">Service</p>
          <p className="display text-3xl md:text-5xl leading-[1.05] text-fire">
            &ldquo;Something could work better. Improve it.&rdquo;
          </p>
        </div>
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   13 - WHO IT'S FOR. Four large rows, generous whitespace.
   ══════════════════════════════════════════════════════════════════ */
function WhoItsFor() {
  const rows = [
    ["Growing companies", "HubSpot is becoming critical, but internal capacity hasn't caught up."],
    ["Marketing + sales teams", "Teams need HubSpot expertise without hiring another specialist."],
    ["RevOps teams", "You have strategy covered. You need more execution capacity."],
    ["Complex portals", "Your portal has grown faster than its architecture can handle."],
  ];
  
  return (
    <Wrap tone="bone" pad="py-24 md:py-32">
      <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire mb-6">13 / Who it's for</p>
      <div className="border-t border-ink">
        {rows.map(([t, d], i) => (
          <div key={t} className="group grid gap-2 border-b border-ink py-9 transition-colors hover:bg-paper/50 sm:grid-cols-[3rem_1fr_1.4fr_2rem] sm:items-baseline sm:gap-8">
            <span className="mono text-xs text-fire">{String(i + 1).padStart(2, "0")}</span>
            <span className="display text-2xl md:text-3xl">{t}</span>
            <span className="text-sm text-muted-foreground">{d}</span>
            <RowArrow />
          </div>
        ))}
      </div>

      
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   14 - WHY REVLYN. The manifesto. Asymmetric, oversized numbers.
   ══════════════════════════════════════════════════════════════════ */
function WhyRevlyn() {
  const items = [
    ["Senior operators", "No juniors. Everyone on your account has run HubSpot before touching yours."],
    ["Full-stack HubSpot expertise", "CRM, Sales Hub, Marketing Hub, automation, reporting, integrations, RevOps."],
    ["Execution first", "We don't just recommend. We build, ship and operate it."],
    ["Works with your team", "We don't replace marketing or sales. We give them more capacity to execute."],
  ];
  return (
    <Wrap tone="dark" pad="py-28 md:py-40">
      <h2 className="display text-4xl md:text-6xl leading-[1.05] text-paper md:whitespace-nowrap">
  One team. Everything HubSpot.
</h2>
      <div className="mt-20 border-t border-paper/15">
        {items.map(([t, d], i) => (
          <div
            key={t}
            className="grid items-start gap-4 border-b border-paper/15 py-10 md:grid-cols-[7rem_1fr_1.2fr] md:items-baseline"
          >
            <span className="display text-4xl md:text-5xl text-paper/20 leading-none">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="display text-2xl text-paper">{t}</h3>
            <p className="text-sm leading-relaxed text-paper/55 md:text-right">{d}</p>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   15 - SCOPE BUILDER. Integrated directly, no wrapping card.
   ══════════════════════════════════════════════════════════════════ */
function Scope() {
  return (
    <Wrap id="scope" texture pad="py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="display text-3xl md:text-5xl leading-[1.05] max-w-lg">Choose what you want Revlyn to own.</h2>
          
        </div>
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire">15 / Scope</p>
      </div>
      <ScopeBuilder />
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   16 - PRICING. Scope factors, not fixed tiers.
   ══════════════════════════════════════════════════════════════════ */
function Pricing() {
  const factors = [
    ["Portal complexity", "How many hubs are live, how much legacy configuration, how much needs untangling first."],
    ["Team size", "How many people touch HubSpot day to day, and how many need reporting visibility."],
    ["Hubs in use", "Marketing, Sales, Service, or all three, each adds its own ongoing surface area."],
    ["Connected systems", "Every integration is another surface we watch, not just wire once."],
    ["Request volume", "How much day-to-day change and support work actually comes through."],
    ["Automation & AI requirements", "How much of the workflow and intelligence layer needs to be built and maintained."],
    ["Operating cadence", "Weekly check-ins are standard. Some teams need daily; some need less."],
  ];
  return (
    <Wrap id="pricing" pad="py-20 md:py-28">
      <div className="max-w-2xl mb-14">
        <h2 className="display text-3xl md:text-5xl leading-[1.05]">How scope is determined.</h2>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
          There's no fixed price list for ongoing ownership, because no two portals need the same thing. What it
          costs depends on what's actually running today.
        </p>
      </div>
      <div className="border-t border-ink">
        {factors.map(([h, d]) => (
          <div key={h} className="grid gap-2 border-b border-ink py-6 md:grid-cols-[1fr_1.6fr] md:items-baseline md:gap-8">
            <h3 className="display text-xl">{h}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <SectionCta label="Talk to a HubSpot Expert" />
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   17 - FAQ. Minimal. No cards, no shadows.
   ══════════════════════════════════════════════════════════════════ */
function FaqSection() {
  const faqs: string[][] = [
    ["What is HubSpot as a Service?", "An ongoing managed service where a team of HubSpot experts manages, builds and optimizes your portal."],
    ["Is this the same as HubSpot consulting?", "No. Consulting is recommendations and strategy. HubSpot as a Service is ongoing execution and management."],
    ["Can you manage our existing portal?", "Yes. We audit your existing portal, clean it up, and continue managing it. No new account needed."],
    ["Do you work with our RevOps team?", "Yes. We act as an execution layer for your RevOps team, without increasing internal headcount."],
  ];
  return (
    <Wrap tone="bone" pad="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <h2 className="display text-3xl md:text-5xl leading-[1.05]">Questions worth asking.</h2>
        <FaqAccordion items={faqs} />
      </div>
    </Wrap>
  );
}

/* ══════════════════════════════════════════════════════════════════
   18 - FINAL CTA. Black, grid texture, dramatic.
   ══════════════════════════════════════════════════════════════════ */
function FinalCta() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper">
      <div className="absolute inset-0 grid-paper opacity-[0.06] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-[1200px] mx-auto px-6 py-28 md:py-40">
        <p className="mono text-[11px] uppercase tracking-[0.18em] text-fire mb-8">Let's talk</p>
        <h2 className="display max-w-3xl text-5xl leading-[0.95] md:text-7xl text-paper">
          Put a HubSpot team
          <br />
          behind your revenue team.
        </h2>
        <p className="mt-7 max-w-md text-paper/55 text-sm leading-relaxed">
          An embedded team that keeps improving your system, every week.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#scope"
            className="group border border-fire bg-fire text-paper px-7 py-4 display text-lg inline-flex items-center gap-3 hover:bg-orange-600 transition-colors"
          >
            Build Your Revlyn Team
            <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </a>
          <BookCallButton className="border border-paper/30 text-paper px-6 py-4 display text-lg hover:bg-paper/10 transition-colors">
            Talk to a HubSpot Expert
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function HubSpotAsAServiceClient() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <WhatWeOwn />
      <TheChallenge />
      <Capabilities />
      <Transition text="Then we make the system work." />
      <AutomationDetail />
      
      <ReportingSection />
      <Integrations />
      <DataManagement />
      <RevenueWorkflow />
      <ImplementationVsHaas />
      <SupportVsService />
      <WhoItsFor />
      <WhyRevlyn />
      <Scope />
      <Pricing />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
