"use client";

import * as React from "react";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { BookAuditButton } from "@/components/BookAuditButton";
import { Footer } from "@/components/Footer";

const heroImg = "/mhub-hero.jpg";
const deskImg = "/mhub-desk.jpg";

/* ---------------------------------------------------------------- shared */

// Reuses the site's existing scroll-reveal system (the [data-reveal]
// attribute, wired up once in components/MotionRuntime.tsx) — unchanged.
function Reveal({ children }: { children: React.ReactNode }) {
  return <div data-reveal>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire">{children}</p>;
}

type Tone = "paper" | "bone" | "dark";
function Section({
  children,
  tone = "paper",
  texture = false,
  className = "",
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  texture?: boolean;
  className?: string;
  id?: string;
}) {
  const bg = tone === "dark" ? "bg-ink" : tone === "bone" ? "bg-bone" : "bg-paper";
  const text = tone === "dark" ? "text-paper" : "text-ink";
  return (
    <section id={id} className={`relative border-b-2 border-ink overflow-hidden ${bg} ${text} ${className}`}>
      {texture ? <div className="absolute inset-0 blueprint opacity-[0.06] pointer-events-none" aria-hidden="true" /> : null}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">{children}</div>
    </section>
  );
}

function PrimaryCta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <BookCallButton className={`group border border-ink bg-fire text-paper px-6 py-3.5 display text-sm inline-flex items-center gap-2.5 hover:bg-orange-600 transition-colors ${className}`}>
      {children}
      <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
    </BookCallButton>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <header className="relative overflow-hidden bg-ink text-paper border-b-2 border-ink">
      <img
        src={heroImg}
        alt="Marketing leadership team reviewing pipeline dashboards on a wall display"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-fire">Managed Marketing Hub Build</p>

        <h1 className="display max-w-4xl text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[0.95]">
          A Marketing Hub built to turn demand into <span className="text-fire">pipeline</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-paper/70">
          Most portals can send email. Very few can tell you which campaign paid
          for last quarter. We rebuild Marketing Hub around the three numbers
          your CEO asks about: spend, pipeline created, revenue closed.
        </p>

        <p className="mono text-[10px] uppercase tracking-[0.16em] text-paper/40 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Anonymous visitor</span><span className="text-fire">→</span>
          <span>Known contact</span><span className="text-fire">→</span>
          <span>Lifecycle</span><span className="text-fire">→</span>
          <span>Qualification</span><span className="text-fire">→</span>
          <span>Routing</span><span className="text-fire">→</span>
          <span>Sales handoff</span><span className="text-fire">→</span>
          <span>Opportunity</span><span className="text-fire">→</span>
          <span>Revenue attribution</span>
        </p>

        <BoardStrip />

        <div className="flex flex-wrap gap-3">
          <PrimaryCta>Scope a Marketing Hub build</PrimaryCta>
          <BookAuditButton
            className="border border-paper/30 px-6 py-3.5 text-sm hover:bg-paper/10 transition-colors"
          >
            Start with the free HubSpot audit
          </BookAuditButton>
        </div>
      </div>
    </header>
  );
}

function BoardStrip() {
  const cols = [
    { label: "Spend", value: "$248k", sub: "last quarter", bars: [40, 55, 62, 58] },
    { label: "Pipeline created", value: "$1.9M", sub: "sourced + influenced", bars: [30, 48, 70, 92] },
    { label: "Closed won", value: "$610k", sub: "attributed", bars: [22, 34, 45, 68] },
  ];
  return (
    <div>
      <div className="grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-3">
        {cols.map((c) => (
          <div key={c.label} className="group bg-ink p-5 transition-colors hover:bg-paper/[0.03]">
            <p className="mono text-[10px] uppercase tracking-[0.16em] text-paper/45">{c.label}</p>
            <p className="mt-2 display text-2xl">{c.value}</p>
            <p className="text-xs text-paper/45">{c.sub}</p>
            <div className="mt-4 flex h-10 items-end gap-1.5">
              {c.bars.map((b, i) => (
                <span key={i} style={{ height: `${b}%` }} className="w-full bg-fire/50 transition-all duration-500 group-hover:bg-fire" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 mono text-[9px] uppercase tracking-[0.12em] text-paper/30">Illustrative board view</p>
    </div>
  );
}

/* -------------------------------------------------------- journey map */

const STOPS = [
  { id: "ch-01", n: "01", t: "Questions your portal should answer", w: "Before" },
  { id: "ch-02", n: "02", t: "What we find in the portal", w: "Week 0" },
  { id: "ch-03", n: "03", t: "Fewer qualified leads, more opportunities", w: "Week 1" },
  { id: "ch-04", n: "04", t: "Lifecycle and scoring", w: "Week 2" },
  { id: "ch-05", n: "05", t: "Forms and routing", w: "Week 3" },
  { id: "ch-06", n: "06", t: "A 91 day buying cycle", w: "Week 4" },
  { id: "ch-07", n: "07", t: "How credit gets split", w: "Week 5" },
  { id: "ch-08", n: "08", t: "Go live", w: "Week 6" },
];

function JourneyMap() {
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-paper border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h2 className="display text-xl">The route</h2>
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-paper/40">8 stops · 6 weeks · click any stop</p>
        </div>

        <div className="mt-6 md:hidden mono text-[10px] uppercase tracking-[0.18em] text-paper/35">Swipe →</div>
        <div className="mt-4 md:mt-12 overflow-x-auto pb-2">
          <div className="relative min-w-[880px] pb-2">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-paper/20" />
            <div className="flex">
              {STOPS.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} className="group relative flex-1 pr-6">
                  <span className="relative z-10 block h-[13px] w-[13px] rotate-45 border border-paper/35 bg-ink transition-colors duration-300 group-hover:border-fire group-hover:bg-fire" />
                  <span className="mt-5 block mono text-[10px] tracking-[0.18em] text-fire/80">
                    {s.n} <span className="text-paper/30">/ {s.w}</span>
                  </span>
                  <p className="mt-2 max-w-[15ch] text-sm font-medium leading-tight tracking-tight text-paper/75 transition-colors duration-300 group-hover:text-paper">
                    {s.t}
                  </p>
                  <span className="mt-3 block h-px w-0 bg-fire transition-all duration-500 group-hover:w-10" />
                  {i === STOPS.length - 1 && <span className="absolute right-6 top-0 h-[13px] w-px bg-paper/20" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- three questions */

function Questions() {
  const qs = [
    { n: "01", q: "Where did the pipeline come from?", a: "Every deal carries a first touch, a last touch and the campaign that did the work in between. No spreadsheet reconciliation on the Friday before the board meeting." },
    { n: "02", q: "What happens if we cut this budget line?", a: "Channel level cost per opportunity, not cost per click. You can see which line pays for itself and which one is a habit." },
    { n: "03", q: "Why is sales ignoring the leads?", a: "Usually routing and scoring, not lead quality. We fix the handoff first, then argue about volume." },
  ];
  return (
    <Section tone="paper">
      <Eyebrow>Before we start</Eyebrow>
      <h2 className="mt-4 display max-w-3xl text-3xl md:text-4xl leading-[1.05]">
        The questions your portal should be able to answer
      </h2>
      <div className="mt-10 grid gap-px bg-ink/10 border border-ink/10 md:grid-cols-3">
        {qs.map((x) => (
          <article key={x.n} className="group bg-bone p-6 transition-colors hover:bg-paper">
            <span className="display text-4xl leading-none text-fire/25 transition-colors group-hover:text-fire">{x.n}</span>
            <h3 className="mt-3 display text-lg leading-snug">{x.q}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{x.a}</p>
            <span className="mt-4 block h-px w-0 bg-fire transition-all duration-500 group-hover:w-10" />
          </article>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- diagnosis */

function Diagnosis() {
  const findings = [
    { f: "Lifecycle stages set by a workflow nobody can find", cost: "Reporting is fiction" },
    { f: "Four form variants writing to three different properties", cost: "Routing misses" },
    { f: "1,100 contacts stuck at MQL since 2023", cost: "Scores never decay" },
    { f: "Campaign names typed by hand, 60+ variations", cost: "No channel rollup" },
    { f: "Ads account connected, offline conversions never sent back", cost: "Bidding on the wrong leads" },
    { f: "Two dashboards, different definitions of an opportunity", cost: "Weekly arguments" },
  ];
  return (
    <Section tone="paper">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <Eyebrow>Week 0</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05]">We start in your portal, not in a deck</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            The first session is a screen share. You watch us click through the
            same settings your team clicks through, and we write down what does
            not add up. Nothing gets changed in that hour.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            This is the list from a recent 40 person software company. Yours will
            look different in the details and very similar in shape.
          </p>
          <img
            src={deskImg}
            alt="Planning desk with campaign notes and a laptop showing marketing reports"
            width={1200}
            height={800}
            loading="lazy"
            className="border border-ink mt-6 w-full object-cover"
          />
        </div>

        <div className="border border-ink bg-bone">
          <div className="flex items-center justify-between border-b border-ink px-5 py-3.5">
            <p className="mono text-[10px] uppercase tracking-[0.18em]">Audit notes</p>
            <p className="mono text-[10px] text-muted-foreground">6 of 23 shown</p>
          </div>
          <ul className="divide-y divide-ink/12">
            {findings.map((x, i) => (
              <li key={x.f} className="group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-paper sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <span className="flex gap-3.5">
                  <span className="mono text-xs text-fire">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm leading-snug">{x.f}</span>
                </span>
                <span className="shrink-0 pl-8 mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pl-0">{x.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- funnel */

function Funnel() {
  const stages = [
    { label: "Visitors", before: "42,000", after: "42,000", w: 100 },
    { label: "Leads", before: "1,850", after: "1,410", w: 78 },
    { label: "MQL", before: "620", after: "310", w: 56 },
    { label: "SQL", before: "136", after: "211", w: 38 },
    { label: "Opportunity", before: "48", after: "97", w: 24 },
    { label: "Closed won", before: "11", after: "26", w: 13 },
  ];
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>The shape we build toward</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05] text-paper">
            Fewer leads marked qualified, more real opportunities
          </h2>
          <p className="mt-4 max-w-md text-sm text-paper/60 leading-relaxed">
            Loosening the MQL definition inflates the top and starves the
            bottom. We tighten scoring, cut the noise sales was already
            ignoring, and the deals go up. The numbers below are an
            illustrative example of that shift, not a specific client's
            results.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs">
            <span className="flex items-center gap-2 text-paper/55"><span className="h-2.5 w-2.5 bg-paper/25" /> Before</span>
            <span className="flex items-center gap-2 text-paper/55"><span className="h-2.5 w-2.5 bg-fire" /> After</span>
            <span className="mono text-[9px] uppercase tracking-[0.1em] text-paper/30 border border-paper/15 px-1.5 py-0.5">Illustrative example</span>
          </div>
        </div>

        <div className="space-y-3">
          {stages.map((s) => (
            <div key={s.label} className="group">
              <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.14em] text-paper/45">
                <span>{s.label}</span>
                <span className="mono text-paper/65">
                  {s.before} → <span className="text-fire">{s.after}</span>
                </span>
              </div>
              <div className="mt-2 flex h-8 items-center">
                <div style={{ width: `${s.w}%` }} className="relative h-full border border-paper/15 bg-paper/5 transition-all duration-500 group-hover:bg-paper/10">
                  <div
                    style={{ width: `${Math.min(100, (parseFloat(s.after.replace(/,/g, "")) / parseFloat(s.before.replace(/,/g, ""))) * 100)}%` }}
                    className="h-full bg-fire/80 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- lifecycle spine */

function LifecycleDiagram() {
  const nodes = [
    { k: "Subscriber", d: "Knows you exist" },
    { k: "Lead", d: "Gave you a form fill" },
    { k: "MQL", d: "Score + fit threshold met" },
    { k: "SQL", d: "Sales accepted, meeting booked" },
    { k: "Opportunity", d: "Deal created in pipeline" },
    { k: "Customer", d: "Closed won, handed to CS" },
  ];
  return (
    <Section tone="paper" texture>
      <Eyebrow>Lifecycle</Eyebrow>
      <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05]">Lifecycle stages everyone reads the same way</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
        Written down, agreed by sales, enforced by workflow. Nobody gets to
        drag a contact into MQL because the month is quiet.
      </p>

      <div className="mt-6 md:hidden mono text-[10px] uppercase tracking-[0.18em] text-ink/35">Swipe →</div>
      <div className="mt-2 md:mt-10 overflow-x-auto">
        <div className="flex min-w-[860px] items-stretch">
          {nodes.map((n, i) => (
            <div key={n.k} className="group relative flex-1">
              <div
                className={`border border-ink h-full bg-paper p-4 transition-all duration-300 group-hover:-translate-y-1 ${i === 2 || i === 3 ? "bg-fire/10" : ""}`}
                style={{ marginLeft: i ? -1 : 0 }}
              >
                <span className="mono text-[10px] text-fire">0{i + 1}</span>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.06em]">{n.k}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{n.d}</p>
              </div>
              {i < nodes.length - 1 && (
                <span className="absolute -right-1.5 top-1/2 z-10 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-ink bg-paper md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { t: "Scoring", b: "Fit (industry, size, title) scored separately from behaviour. A junior intern reading forty blogs never outranks a VP who read the pricing page." },
          { t: "Decay", b: "Scores drop after 30 days of silence. Old interest stops masquerading as intent." },
          { t: "Reasons", b: "Every MQL stores the reason it qualified, visible on the contact record, so a rep can open with something real." },
        ].map((x) => (
          <div key={x.t} className="border-l border-fire pl-4">
            <p className="mono text-[10px] uppercase tracking-[0.14em]">{x.t}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------- routing diagram */

function RoutingDiagram() {
  return (
    <Section tone="paper" texture>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Forms and routing</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05]">
            A form submission reaches a rep in under a minute
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Most leaks happen in the ninety seconds after a form fill. We map
            the path once, then automate every hop of it.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              ["00:00", "Form submitted, enrichment fires"],
              ["00:12", "Fit and score calculated"],
              ["00:20", "Territory and round robin picks an owner"],
              ["00:35", "Slack ping with company context"],
              ["00:50", "Meeting link sent, task created"],
            ].map(([t, d]) => (
              <li key={t} className="flex items-start gap-3.5">
                <span className="mt-0.5 shrink-0 mono text-xs text-fire">{t}</span>
                <span className="text-sm text-ink/80">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <svg viewBox="0 0 460 340" className="w-full border border-ink bg-paper p-4">
          <defs>
            <marker id="mh-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
            </marker>
          </defs>
          <g className="text-ink" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="20" y="140" width="110" height="52" className="fill-fire/15" />
            <rect x="185" y="60" width="110" height="46" />
            <rect x="185" y="145" width="110" height="46" />
            <rect x="185" y="230" width="110" height="46" />
            <rect x="345" y="145" width="95" height="46" className="fill-fire/15" />
            <path d="M130 166 H185" markerEnd="url(#mh-arrow)" />
            <path d="M155 166 V83 H185" markerEnd="url(#mh-arrow)" />
            <path d="M155 166 V253 H185" markerEnd="url(#mh-arrow)" />
            <path d="M295 168 H345" markerEnd="url(#mh-arrow)" />
            <path d="M295 83 H320 V168" strokeDasharray="4 4" />
            <path d="M295 253 H320 V168" strokeDasharray="4 4" />
          </g>
          <g className="fill-ink" fontSize="10" fontWeight="600" textAnchor="middle">
            <text x="75" y="162">FORM FILL</text>
            <text x="75" y="176">enrich + score</text>
            <text x="240" y="80">ENTERPRISE</text>
            <text x="240" y="93">named account</text>
            <text x="240" y="165">MID MARKET</text>
            <text x="240" y="178">round robin</text>
            <text x="240" y="250">NO FIT</text>
            <text x="240" y="263">nurture only</text>
            <text x="392" y="165">OWNER</text>
            <text x="392" y="178">slack + task</text>
          </g>
        </svg>
      </div>
    </Section>
  );
}

/* -------------------------------------------------- buyer touchpoints */

function BuyerJourney() {
  const touches = [
    { d: "Day 1", t: "Clicks a paid search ad", who: "Anonymous", accent: "bg-fire" },
    { d: "Day 3", t: "Reads two comparison posts", who: "Anonymous", accent: "bg-ink/25" },
    { d: "Day 12", t: "Registers for the webinar", who: "Lead", accent: "bg-fire/60" },
    { d: "Day 13", t: "Score crosses 60, routed to a rep", who: "MQL", accent: "bg-fire" },
    { d: "Day 15", t: "Books a call from the follow up email", who: "SQL", accent: "bg-fire/60" },
    { d: "Day 34", t: "Two colleagues join the deal record", who: "Opportunity", accent: "bg-ink/50" },
    { d: "Day 91", t: "Signs, $92,000", who: "Customer", accent: "bg-fire" },
  ];
  return (
    <Section tone="bone">
      <Eyebrow>Week 4</Eyebrow>
      <h2 className="mt-4 display max-w-3xl text-3xl md:text-4xl leading-[1.05]">
        What a 91 day buying cycle looks like in the portal
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
        This is the same deal that gets split five ways in the next section. Once
        the timeline is captured properly, the credit argument mostly ends.
      </p>

      <div className="mt-10 md:hidden mono text-[10px] uppercase tracking-[0.18em] text-ink/35">Swipe →</div>
      <div className="mt-3 md:mt-10 overflow-x-auto">
        <ol className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[40%] md:auto-cols-auto md:grid-flow-row md:grid-cols-7 gap-px border border-ink bg-ink">
          {touches.map((x) => (
            <li key={x.d} className="group bg-paper p-4 transition-colors hover:bg-bone">
              <span className={`block h-1 w-7 ${x.accent}`} />
              <p className="mt-3 mono text-[11px] text-muted-foreground">{x.d}</p>
              <p className="mt-1.5 text-sm font-medium leading-snug tracking-tight">{x.t}</p>
              <p className="mt-3 mono text-[10px] uppercase tracking-[0.16em] text-fire">{x.who}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- attribution */

function Attribution() {
  const dealValue = 92000;
  const touches = [
    { ch: "Paid search", credit: 34, color: "bg-fire" },
    { ch: "Webinar", credit: 26, color: "bg-fire/70" },
    { ch: "Organic content", credit: 21, color: "bg-paper/60" },
    { ch: "Outbound sequence", credit: 12, color: "bg-fire/40" },
    { ch: "Review site", credit: 7, color: "bg-paper/25" },
  ];
  return (
    <Section tone="dark">
      <Eyebrow>Attribution</Eyebrow>
      <h2 className="mt-4 display max-w-3xl text-3xl md:text-4xl leading-[1.05] text-paper">
        How credit gets split when a deal has five touches
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-paper/60 leading-relaxed">
        A $92,000 deal. Here is how the credit lands under the model we set up,
        and the same view rolls up to channel, campaign and quarter.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3.5">
          {touches.map((t) => (
            <div key={t.ch} className="group">
              <div className="flex justify-between text-sm">
                <span className="text-paper/75">{t.ch}</span>
                <span className="mono text-paper/55">{t.credit}% · ${Math.round((dealValue * t.credit) / 100).toLocaleString()}</span>
              </div>
              <div className="mt-1.5 h-5 w-full bg-paper/10">
                <div style={{ width: `${t.credit * 2.6}%` }} className={`h-full ${t.color} transition-all duration-700 group-hover:opacity-80`} />
              </div>
            </div>
          ))}
        </div>

        <div className="border border-paper/20 p-5">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-paper/45">What this replaces</p>
          <ul className="mt-3.5 space-y-2.5 text-sm text-paper/65">
            <li>A spreadsheet three people maintain differently</li>
            <li>Last touch, which always flatters paid search</li>
            <li>Arguments about whether the webinar worked</li>
            <li>A quarterly deck built from memory</li>
          </ul>
          <div className="mt-5 border-t border-paper/15 pt-4">
            <p className="display text-2xl text-fire">$1 : $7.60</p>
            <p className="mono text-[9px] uppercase tracking-[0.1em] text-paper/40 mt-1">Illustrative · Spend to pipeline, measured the same way every month</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- modules */

function Modules() {
  const mods = [
    { code: "M-01", title: "Lifecycle and scoring", body: "Stage definitions, fit and behaviour scoring, decay rules, and the SLA sales signs off on." },
    { code: "M-02", title: "Forms, CTAs and routing", body: "Progressive profiling, territory and round robin assignment, Slack alerts with context attached." },
    { code: "M-03", title: "Campaign architecture", body: "Naming standard, UTM governance, campaigns as objects that roll up across email, ads and events." },
    { code: "M-04", title: "Email and workflows", body: "Nurtures with branching logic, suppression rules, send time tuning and deliverability warm up." },
    { code: "M-05", title: "Marketing-to-sales handoff", body: "MQL and SQL defined once, agreed by both teams. An SLA for what happens in the first hour after a lead qualifies." },
    { code: "M-06", title: "Reporting and dashboards", body: "One board view, one weekly ops view, one channel view. Same numbers in all three." },
  ];
  return (
    <Section tone="paper">
      <Eyebrow>What gets built</Eyebrow>
      <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05]">The six pieces we build</h2>
      <div className="mt-10 border-t border-ink">
        {mods.map((m) => (
          <div
            key={m.code}
            className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-ink py-6 transition-colors hover:bg-bone sm:grid-cols-[4rem_1.2fr_1.6fr_2rem] sm:items-center"
          >
            <span className="mono text-xs text-fire">{m.code}</span>
            <span className="display text-xl">{m.title}</span>
            <span className="col-span-2 sm:col-span-1 text-sm text-muted-foreground">{m.body}</span>
            <span className="hidden sm:block justify-self-end text-fire opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5">→</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- gantt */

function Timeline() {
  const rows = [
    { t: "Audit and lifecycle mapping", start: 0, span: 1.5 },
    { t: "Scoring and campaign taxonomy", start: 1, span: 1.5 },
    { t: "Forms, routing, workflows", start: 2, span: 2 },
    { t: "Integrations and tracking", start: 3, span: 1.5 },
    { t: "Attribution and dashboards", start: 4, span: 1.5 },
    { t: "QA, training, go live", start: 5, span: 1 },
  ];
  return (
    <Section tone="bone">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:items-start">
        <div>
          <Eyebrow>Timeline</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05]">What happens in each of the six weeks</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Two hours a week from a marketing lead, one hour from sales. We do
            the build, you make the calls that only you can make.
          </p>
        </div>

        <div className="border border-ink bg-paper p-6 overflow-x-auto">
          <div className="min-w-[480px]">
            <div className="mb-5 grid grid-cols-6 gap-2 text-center mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {["W1", "W2", "W3", "W4", "W5", "W6"].map((w) => <span key={w}>{w}</span>)}
            </div>
            <div className="space-y-4">
              {rows.map((r) => (
                <div key={r.t} className="group">
                  <div className="relative h-11 bg-ink/5">
                    <div
                      style={{ left: `${(r.start / 6) * 100}%`, width: `${(r.span / 6) * 100}%` }}
                      className="absolute inset-y-0 flex items-center border border-ink bg-fire/70 px-2.5 transition-colors group-hover:bg-fire"
                    >
                      <span className="truncate text-[11px] font-medium text-ink">{r.t}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- after go live */

function MondayAfter() {
  const items = [
    { time: "08:40", t: "The weekly ops view", b: "New opportunities by source, SLA breaches from last week, and any form that stopped submitting." },
    { time: "09:15", t: "Sales standup", b: "Reps open one list, sorted by score and recency, with the reason for the score visible on the record." },
    { time: "11:00", t: "Campaign check", b: "Spend against pipeline for every live campaign. Two clicks to pause the one that is not paying." },
    { time: "16:30", t: "The board question lands", b: "You send a link instead of building a slide. The numbers are the same ones the team saw at 08:40." },
  ];
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>After go live</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05] text-paper">Your first Monday after go live</h2>
          <p className="mt-3 text-sm text-paper/60 leading-relaxed">
            The point of the build is an ordinary week that does not need you to
            reconcile anything. Here is that week, hour by hour.
          </p>
          <Link href="/work/datapel" className="mt-6 inline-block border border-paper/25 px-5 py-3 text-sm hover:bg-paper/10 transition-colors">
            Read a build we shipped
          </Link>
        </div>

        <div className="space-y-px bg-paper/12">
          {items.map((x) => (
            <div key={x.time} className="group flex gap-5 bg-ink p-5 transition-colors hover:bg-paper/[0.04]">
              <span className="mono text-xs text-fire shrink-0">{x.time}</span>
              <div>
                <p className="text-base font-medium tracking-tight">{x.t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{x.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- deliverables */

function Deliverables() {
  const items = [
    "Lifecycle and scoring model, written down",
    "Campaign taxonomy and UTM standard",
    "Workflow inventory with Loom walkthroughs",
    "Form and routing map",
    "Attribution dashboard, weekly and quarterly",
    "Deliverability health report",
    "Marketing-to-sales SLA + handoff doc",
    "Admin SOPs for marketing ops",
    "30 day tune up window",
    "Shared Slack channel with the build team",
  ];
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>What you keep</Eyebrow>
          <h2 className="mt-4 display text-3xl md:text-4xl leading-[1.05] text-paper">What you get handed over at the end</h2>
          <p className="mt-3 text-sm text-paper/60 leading-relaxed">
            If you never speak to us again, your team can still run the portal.
            That is the test we build against.
          </p>
        </div>
        <ul className="grid gap-px bg-paper/12 sm:grid-cols-2">
          {items.map((i, n) => (
            <li key={i} className="flex items-start gap-3 bg-ink p-4 transition-colors hover:bg-paper/[0.04]">
              <span className="mono text-xs text-fire">{String(n + 1).padStart(2, "0")}</span>
              <span className="text-sm text-paper/75">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- stack */

type Tool = {
  name: string;
  domain: string;
  group: "Ads" | "Data" | "Web" | "Sales" | "Automation";
  flow: string;
};

const STACK_TOOLS: Tool[] = [
  { name: "Google Ads", domain: "ads.google.com", group: "Ads", flow: "Cost and click data lands on the campaign record, so spend sits next to pipeline." },
  { name: "LinkedIn Ads", domain: "linkedin.com", group: "Ads", flow: "Lead gen forms sync straight into HubSpot with the campaign that paid for them." },
  { name: "Meta Ads", domain: "meta.com", group: "Ads", flow: "Ad spend and lead forms map to the same campaign taxonomy as everything else." },
  { name: "Google Analytics 4", domain: "analytics.google.com", group: "Data", flow: "Session and conversion events line up with HubSpot sources, so both tools agree." },
  { name: "Google Tag Manager", domain: "tagmanager.google.com", group: "Data", flow: "One container fires HubSpot tracking, ad pixels and custom events in a set order." },
  { name: "Segment", domain: "segment.com", group: "Data", flow: "Product and web events arrive as clean HubSpot properties instead of raw noise." },
  { name: "Clearbit", domain: "clearbit.com", group: "Data", flow: "Firmographics fill in on form submit, so short forms still route correctly." },
  { name: "Apollo", domain: "apollo.io", group: "Sales", flow: "Outbound sequences write back to the contact timeline, no duplicate records." },
  { name: "Salesforce", domain: "salesforce.com", group: "Sales", flow: "Two-way sync with agreed field ownership, so nobody overwrites the other side." },
  { name: "Chili Piper", domain: "chilipiper.com", group: "Sales", flow: "Instant booking off the form, with the meeting logged against the right owner." },
  { name: "Slack", domain: "slack.com", group: "Sales", flow: "Hot leads and SLA breaches post to the channel the team actually watches." },
  { name: "Webflow", domain: "webflow.com", group: "Web", flow: "Forms and tracking wired in without losing the design system you already built." },
  { name: "WordPress", domain: "wordpress.org", group: "Web", flow: "Blog and landing pages report into the same attribution model as HubSpot pages." },
  { name: "Zapier", domain: "zapier.com", group: "Automation", flow: "Edge cases handled outside HubSpot, documented so they are not a black box." },
  { name: "Make", domain: "make.com", group: "Automation", flow: "Heavier multi-step routing where a native workflow would get unreadable." },
];

const GROUPS = ["Ads", "Data", "Web", "Sales", "Automation"] as const;

const GROUP_ACCENT: Record<string, string> = {
  Ads: "bg-fire",
  Data: "bg-fire/60",
  Web: "bg-ink/40",
  Sales: "bg-fire",
  Automation: "bg-fire/60",
};

function ToolLogo({ domain, name }: { domain: string; name: string }) {
  const [errored, setErrored] = React.useState(false);
  if (errored) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-ink/15 bg-bone mono text-[9px] text-ink/50">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      loading="lazy"
      width={24}
      height={24}
      onError={() => setErrored(true)}
      className="h-6 w-6 shrink-0 object-contain"
    />
  );
}

function Stack() {
  const [active, setActive] = React.useState<string | null>(null);
  const [filter, setFilter] = React.useState<(typeof GROUPS)[number] | "All">("All");

  const shown = STACK_TOOLS.filter((t) => filter === "All" || t.group === filter);
  const activeTool = STACK_TOOLS.find((t) => t.name === active) ?? null;

  return (
    <Section tone="paper" texture>
      <Eyebrow>Integrations</Eyebrow>
      <h2 className="mt-4 display max-w-2xl text-2xl md:text-3xl leading-[1.05]">How your other tools connect to HubSpot</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
        Hover a tool to see exactly what moves between it and HubSpot. Nothing here is a
        logo wall, each one is a connection we have built and documented.
      </p>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
        {(["All", ...GROUPS] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setFilter(g)}
            className={`shrink-0 border border-ink px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              filter === g ? "bg-ink text-paper" : "bg-paper hover:bg-bone"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* hub + spokes */}
        <div className="border border-ink relative overflow-hidden bg-paper p-5 md:p-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="border border-ink flex items-center gap-3 bg-ink px-5 py-3.5 text-paper">
              <ToolLogo domain="hubspot.com" name="HubSpot" />
              <span className="display text-base">HubSpot</span>
            </div>

            <div className={`h-8 w-px transition-colors duration-300 ${activeTool ? "bg-fire" : "bg-ink/20"}`} />

            <div className="flex w-full flex-wrap justify-center gap-2.5">
              {shown.map((t) => {
                const on = active === t.name;
                return (
                  <button
                    key={t.name}
                    type="button"
                    onMouseEnter={() => setActive(t.name)}
                    onFocus={() => setActive(t.name)}
                    onMouseLeave={() => setActive(null)}
                    onBlur={() => setActive(null)}
                    onTouchStart={() => setActive(t.name)}
                    className={`border border-ink group relative flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      on ? "-translate-y-0.5 bg-fire text-paper" : active ? "bg-paper opacity-45" : "bg-paper hover:-translate-y-0.5 hover:bg-bone"
                    }`}
                  >
                    <span
                      className={`absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 origin-bottom transition-transform duration-200 ${
                        on ? "scale-y-100 bg-fire" : "scale-y-0 bg-ink/25"
                      }`}
                    />
                    <ToolLogo domain={t.domain} name={t.name} />
                    <span>{t.name}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${GROUP_ACCENT[t.group]} ${on ? "opacity-100" : "opacity-40"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* detail panel */}
        <aside className="border border-ink flex flex-col justify-between bg-ink p-5 text-paper">
          {activeTool ? (
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-paper">
                  <ToolLogo domain={activeTool.domain} name={activeTool.name} />
                </span>
                <div>
                  <p className="display text-base">{activeTool.name}</p>
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-paper/45">{activeTool.group}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">{activeTool.flow}</p>
            </div>
          ) : (
            <div>
              <p className="display text-base">{shown.length} connections in this view</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                Pick a tool to see what data moves, which direction it moves in, and who owns
                the field when both systems disagree.
              </p>
            </div>
          )}
          <p className="mt-6 border-t border-paper/15 pt-3.5 text-xs text-paper/45">
            Using something not listed? We have almost certainly wired it before.
          </p>
        </aside>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- faq */

function Faq() {
  const faq = [
    { q: "What happens to our existing campaigns?", a: "We audit before we touch anything. What works stays. What is noise gets archived and documented, never silently deleted." },
    { q: "Can you work with our sales team?", a: "Yes, directly. Scoring and the MQL/SQL definition are built with sales in the room, not handed to them afterward. The handoff SLA is something both teams sign off on." },
    { q: "How do you define MQL/SQL?", a: "There is no universal answer. We build the definition with your marketing and sales leaders together, based on fit and behaviour signals specific to your business, then write it down so it stops being a debate." },
    { q: "What happens to our existing forms and workflows?", a: "Same as campaigns: audited first. Forms that convert stay. Workflows get reviewed for what they are actually doing today, not rebuilt from scratch by default." },
    { q: "How is attribution handled?", a: "Every touch a contact has, tied back to the campaign, tracked through to closed-won. One model, one dashboard, so marketing and sales are arguing from the same numbers." },
    { q: "Do we need Marketing Hub Enterprise?", a: "Not always. We scope to the tier you own and tell you when Pro is the ceiling. If Enterprise unlocks revenue you can measure, we put the case in writing." },
  ];
  return (
    <Section tone="bone">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Questions we get</Eyebrow>
          <h2 className="mt-3 display text-2xl md:text-3xl leading-[1.05]">Before getting started.</h2>
        </div>
        <div className="divide-y divide-ink border-y border-ink">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-base font-medium tracking-tight list-none">
                {f.q}
                <span className="text-fire text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- cta */

function Cta() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-fire text-paper">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display max-w-2xl text-3xl md:text-4xl leading-[1.05]">
              Build a Marketing Hub that sales can trust.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-paper/80">Forty five minutes, screen shared, no deck.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BookCallButton className="group border border-paper bg-paper px-7 py-3.5 display text-sm text-ink inline-flex items-center gap-2.5 hover:bg-bone transition-colors">
              Scope a Marketing Hub build
              <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </BookCallButton>
            <BookAuditButton className="border border-paper/40 px-7 py-3.5 display text-sm text-paper inline-flex items-center gap-2.5 hover:bg-paper/10 transition-colors">
              Start with the free HubSpot audit
            </BookAuditButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chapter({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-16">
      <Reveal>{children}</Reveal>
    </div>
  );
}

export default function MarketingHubClient() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <JourneyMap />
      <Chapter id="ch-01"><Questions /></Chapter>
      <Chapter id="ch-02"><Diagnosis /></Chapter>
      <Chapter id="ch-03"><Funnel /></Chapter>
      <Chapter id="ch-04"><LifecycleDiagram /></Chapter>
      <Chapter id="ch-05"><RoutingDiagram /></Chapter>
      <Chapter id="ch-06"><BuyerJourney /></Chapter>
      <Chapter id="ch-07"><Attribution /></Chapter>
      <Reveal><Modules /></Reveal>
      <Chapter id="ch-08"><Timeline /></Chapter>
      <Reveal><MondayAfter /></Reveal>
      <Reveal><Deliverables /></Reveal>
      <Reveal><Stack /></Reveal>
      <Reveal><Faq /></Reveal>
      <Cta />
      <Footer />
    </main>
  );
}
