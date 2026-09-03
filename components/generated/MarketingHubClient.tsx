"use client";

import * as React from "react";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "mhub-hero.jpg" is a Lovable-hosted asset — not migrated.
const heroImg = "/mhub-hero.jpg";
// TODO: source "mhub-desk.jpg" is a Lovable-hosted asset — not migrated.
const deskImg = "/mhub-desk.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

/* ---------------------------------------------------------------- shared */

// Reuses the site's existing scroll-reveal system (the [data-reveal]
// attribute, wired up once in components/MotionRuntime.tsx) instead of a
// separate ScrollJourney/Reveal component that doesn't exist in this
// project — same fade-up-on-scroll effect used on every other page.
function Reveal({ children }: { children: React.ReactNode }) {
  return <div data-reveal>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50">
      {children}
    </p>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <img
        src={heroImg}
        alt="Marketing leadership team reviewing pipeline dashboards on a wall display"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 md:py-32">
        

        <h1 className="max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[0.95] tracking-[-0.04em]">
          A Marketing Hub built to produce{" "}
          <span className="text-volt">pipeline</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-paper/75">
          Most portals can send email. Very few can tell you which campaign paid
          for last quarter. We rebuild Marketing Hub around the three numbers
          your CEO asks about: spend, pipeline created, revenue closed.
        </p>

        <BoardStrip />

        <div className="flex flex-wrap gap-4">
          <BookCallButton className="brutal-border border-paper bg-volt px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-1">
            Book a working session
          </BookCallButton>
          <Link
            href="/hubspot-audit"
            className="border border-paper/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Get a portal audit first
          </Link>
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
    <div className="grid gap-px border border-paper/20 bg-paper/20 sm:grid-cols-3">
      {cols.map((c) => (
        <div key={c.label} className="group bg-ink p-6 transition-colors hover:bg-ink/70">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/45">
            {c.label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-paper">{c.value}</p>
          <p className="text-xs text-paper/50">{c.sub}</p>
          <div className="mt-4 flex h-12 items-end gap-1.5">
            {c.bars.map((b, i) => (
              <span
                key={i}
                style={{ height: `${b}%` }}
                className="w-full bg-fire/40 transition-all duration-500 group-hover:bg-volt"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------- three questions */

function Questions() {
  const qs = [
    {
      n: "01",
      q: "Where did the pipeline come from?",
      a: "Every deal carries a first touch, a last touch and the campaign that did the work in between. No spreadsheet reconciliation on the Friday before the board meeting.",
    },
    {
      n: "02",
      q: "What happens if we cut this budget line?",
      a: "Channel level cost per opportunity, not cost per click. You can see which line pays for itself and which one is a habit.",
    },
    {
      n: "03",
      q: "Why is sales ignoring the leads?",
      a: "Usually routing and scoring, not lead quality. We fix the handoff first, then argue about volume.",
    },
  ];
  return (
    <Section className="bg-paper">
      <Eyebrow>Before we start</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
        The questions your portal should be able to answer
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {qs.map((x) => (
          <article
            key={x.n}
            className="brutal-border group bg-bone p-7 transition-all hover:-translate-y-1 hover:brutal-shadow-fire"
          >
            <span className="text-5xl font-bold leading-none text-fire/25 transition-colors group-hover:text-fire">
              {x.n}
            </span>
            <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">{x.q}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{x.a}</p>
          </article>
        ))}
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
    <Section className="bg-ink text-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-volt">
            The shape we build toward
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Fewer leads marked qualified, more real opportunities
          </h2>
          <p className="mt-5 max-w-md text-paper/70">
            Loosening the MQL definition inflates the top and starves the
            bottom. We tighten scoring, cut the noise sales was already
            ignoring, and the deals go up. Numbers below are a real portal,
            ninety days either side of the rebuild.
          </p>
          <div className="mt-8 flex gap-6 text-sm">
            <span className="flex items-center gap-2 text-paper/60">
              <span className="h-3 w-3 bg-paper/25" /> Before
            </span>
            <span className="flex items-center gap-2 text-paper/60">
              <span className="h-3 w-3 bg-volt" /> After
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {stages.map((s) => (
            <div key={s.label} className="group">
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.18em] text-paper/50">
                <span>{s.label}</span>
                <span className="font-mono text-paper/70">
                  {s.before} → <span className="text-volt">{s.after}</span>
                </span>
              </div>
              <div className="mt-2 flex h-9 items-center">
                <div
                  style={{ width: `${s.w}%` }}
                  className="relative h-full border border-paper/20 bg-paper/10 transition-all duration-500 group-hover:bg-paper/15"
                >
                  <div
                    style={{ width: `${Math.min(100, (parseFloat(s.after.replace(/,/g, "")) / parseFloat(s.before.replace(/,/g, ""))) * 100)}%` }}
                    className="h-full bg-volt/80 transition-all duration-700"
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
    <Section className="blueprint">
      <Eyebrow>Lifecycle</Eyebrow>
      <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
        Lifecycle stages everyone reads the same way
      </h2>
      <p className="mt-4 max-w-2xl text-ink/70">
        Written down, agreed by sales, enforced by workflow. Nobody gets to
        drag a contact into MQL because the month is quiet.
      </p>

      <div className="mt-8 md:hidden mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
        Swipe →
      </div>
      <div className="mt-2 md:mt-12 overflow-x-auto">
        <div className="flex min-w-[860px] items-stretch">
          {nodes.map((n, i) => (
            <div key={n.k} className="group relative flex-1">
              <div
                className={`brutal-border h-full bg-paper p-5 transition-all duration-300 group-hover:-translate-y-2 ${
                  i === 2 || i === 3 ? "bg-volt/25" : ""
                }`}
                style={{ marginLeft: i ? -2 : 0 }}
              >
                <span className="font-mono text-[11px] text-fire">
                  0{i + 1}
                </span>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em]">
                  {n.k}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink/60">{n.d}</p>
              </div>
              {i < nodes.length - 1 && (
                <span className="absolute -right-2 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-ink bg-paper md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { t: "Scoring", b: "Fit (industry, size, title) scored separately from behaviour. A junior intern reading forty blogs never outranks a VP who read the pricing page." },
          { t: "Decay", b: "Scores drop after 30 days of silence. Old interest stops masquerading as intent." },
          { t: "Reasons", b: "Every MQL stores the reason it qualified, visible on the contact record, so a rep can open with something real." },
        ].map((x) => (
          <div key={x.t} className="border-l-2 border-fire pl-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em]">{x.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{x.b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------- routing diagram */

function RoutingDiagram() {
  return (
    <Section className="blueprint">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Forms and routing</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            A form submission reaches a rep in under a minute
          </h2>
          <p className="mt-4 text-ink/70">
            Most leaks happen in the ninety seconds after a form fill. We map
            the path once, then automate every hop of it.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              ["00:00", "Form submitted, enrichment fires"],
              ["00:12", "Fit and score calculated"],
              ["00:20", "Territory and round robin picks an owner"],
              ["00:35", "Slack ping with company context"],
              ["00:50", "Meeting link sent, task created"],
            ].map(([t, d]) => (
              <li key={t} className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-fire">{t}</span>
                <span className="text-sm text-ink/80">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <svg viewBox="0 0 460 340" className="w-full brutal-border bg-paper p-4">
          <defs>
            <marker id="mh-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
            </marker>
          </defs>
          <g className="text-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="20" y="140" width="110" height="52" className="fill-volt/40" />
            <rect x="185" y="60" width="110" height="46" />
            <rect x="185" y="145" width="110" height="46" />
            <rect x="185" y="230" width="110" height="46" />
            <rect x="345" y="145" width="95" height="46" className="fill-fire/20" />
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

/* --------------------------------------------------------- attribution */

function Attribution() {
  const touches = [
    { ch: "Paid search", credit: 34, color: "bg-fire" },
    { ch: "Webinar", credit: 26, color: "bg-volt" },
    { ch: "Organic content", credit: 21, color: "bg-ink/70" },
    { ch: "Outbound sequence", credit: 12, color: "bg-fire/50" },
    { ch: "Review site", credit: 7, color: "bg-ink/30" },
  ];
  return (
    <Section className="bg-ink text-paper">
      <Eyebrow>
        <span className="text-volt">Attribution</span>
      </Eyebrow>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] md:text-5xl">
        How credit gets split when a deal has five touches
      </h2>
      <p className="mt-4 max-w-2xl text-paper/70">
        A $92,000 deal. Here is how the credit lands under the model we set up,
        and the same view rolls up to channel, campaign and quarter.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          {touches.map((t) => (
            <div key={t.ch} className="group">
              <div className="flex justify-between text-sm">
                <span className="text-paper/80">{t.ch}</span>
                <span className="font-mono text-paper/60">
                  {t.credit}% · ${Math.round(920 * t.credit).toLocaleString()}
                </span>
              </div>
              <div className="mt-2 h-6 w-full bg-paper/10">
                <div
                  style={{ width: `${t.credit * 2.6}%` }}
                  className={`h-full ${t.color} transition-all duration-700 group-hover:opacity-80`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="brutal-border border-paper/30 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/50">
            What this replaces
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li>A spreadsheet three people maintain differently</li>
            <li>Last touch, which always flatters paid search</li>
            <li>Arguments about whether the webinar worked</li>
            <li>A quarterly deck built from memory</li>
          </ul>
          <div className="mt-6 border-t border-paper/20 pt-5">
            <p className="text-3xl font-bold text-volt">$1 : $7.60</p>
            <p className="text-xs text-paper/50">
              Spend to pipeline, measured the same way every month
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- modules */

function Modules() {
  const mods = [
    {
      code: "M-01",
      title: "Lifecycle and scoring",
      body: "Stage definitions, fit and behaviour scoring, decay rules, and the SLA sales signs off on.",
    },
    {
      code: "M-02",
      title: "Forms, CTAs and routing",
      body: "Progressive profiling, territory and round robin assignment, Slack alerts with context attached.",
    },
    {
      code: "M-03",
      title: "Campaign architecture",
      body: "Naming standard, UTM governance, campaigns as objects that roll up across email, ads and events.",
    },
    {
      code: "M-04",
      title: "Email and workflows",
      body: "Nurtures with branching logic, suppression rules, send time tuning and deliverability warm up.",
    },
    {
      code: "M-05",
      title: "Landing pages and CMS",
      body: "Modular templates your team can ship without a developer, instrumented from the first pixel.",
    },
    {
      code: "M-06",
      title: "Reporting and dashboards",
      body: "One board view, one weekly ops view, one channel view. Same numbers in all three.",
    },
  ];
  return (
    <Section className="bg-paper">
      <Eyebrow>What gets built</Eyebrow>
      <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
        The six pieces we build
      </h2>
      <div className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
        {mods.map((m) => (
          <article key={m.code} className="group relative bg-paper p-8 transition-colors hover:bg-volt/20">
            <span className="font-mono text-xs text-fire">{m.code}</span>
            <h3 className="mt-3 text-xl font-bold tracking-tight">{m.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{m.body}</p>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-fire transition-all duration-500 group-hover:w-full" />
          </article>
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
    <Section className="blueprint">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <Eyebrow>Timeline</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            What happens in each of the six weeks
          </h2>
          <p className="mt-4 text-ink/70">
            Two hours a week from a marketing lead, one hour from sales. We do
            the build, you make the calls that only you can make.
          </p>
          <img
            src={deskImg}
            alt="Marketing planning desk with campaign calendar and charts"
            width={1408}
            height={912}
            loading="lazy"
            className="brutal-border mt-8 w-full object-cover"
          />
        </div>

        <div className="brutal-border bg-paper p-6 overflow-x-auto">
          <div className="min-w-[420px]">
            <div className="mb-4 grid grid-cols-6 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">
              {["W1", "W2", "W3", "W4", "W5", "W6"].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            <div className="space-y-3">
              {rows.map((r) => (
                <div key={r.t} className="group">
                  <div className="relative h-9 bg-ink/5">
                    <div
                      style={{ left: `${(r.start / 6) * 100}%`, width: `${(r.span / 6) * 100}%` }}
                      className="absolute inset-y-0 flex items-center border-2 border-ink bg-fire/70 px-2 transition-colors group-hover:bg-volt"
                    >
                      <span className="truncate text-[11px] font-semibold text-ink">{r.t}</span>
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

/* --------------------------------------------------------- deliverables */

function Deliverables() {
  const items = [
    "Lifecycle and scoring model, written down",
    "Campaign taxonomy and UTM standard",
    "Workflow inventory with Loom walkthroughs",
    "Form and routing map",
    "Attribution dashboard, weekly and quarterly",
    "Deliverability health report",
    "Email and landing page template library",
    "Admin SOPs for marketing ops",
    "30 day tune up window",
    "Shared Slack channel with the build team",
  ];
  return (
    <Section className="bg-ink text-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-volt">
            What you keep
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            What you get handed over at the end
          </h2>
          <p className="mt-4 text-paper/70">
            If you never speak to us again, your team can still run the portal.
            That is the test we build against.
          </p>
        </div>
        <ul className="grid gap-px bg-paper/15 sm:grid-cols-2">
          {items.map((i, n) => (
            <li key={i} className="flex items-start gap-3 bg-ink p-5 transition-colors hover:bg-paper/10">
              <span className="font-mono text-xs text-fire">{String(n + 1).padStart(2, "0")}</span>
              <span className="text-sm text-paper/80">{i}</span>
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
  Data: "bg-volt",
  Web: "bg-ink",
  Sales: "bg-fire",
  Automation: "bg-volt",
};

function ToolLogo({ domain, name }: { domain: string; name: string }) {
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      loading="lazy"
      width={24}
      height={24}
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
    <Section className="blueprint">
      <Eyebrow>Integrations</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
        How your other tools connect to HubSpot
      </h2>
      <p className="mt-4 max-w-2xl text-ink/70">
        Hover a tool to see exactly what moves between it and HubSpot. Nothing here is a
        logo wall, each one is a connection we have built and documented.
      </p>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
        {(["All", ...GROUPS] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setFilter(g)}
            className={`shrink-0 brutal-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
              filter === g ? "bg-ink text-paper" : "bg-paper hover:-translate-y-0.5 hover:bg-volt"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* hub + spokes */}
        <div className="brutal-border relative overflow-hidden bg-paper p-6 md:p-10">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            {/* the hub */}
            <div className="brutal-border brutal-shadow z-10 flex items-center gap-3 bg-ink px-6 py-4 text-paper">
              <img
                src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=128"
                alt="HubSpot logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-lg font-bold tracking-tight">HubSpot</span>
            </div>

            {/* connector line */}
            <div
              className={`h-10 w-0.5 transition-colors duration-300 ${
                activeTool ? "bg-fire" : "bg-ink/25"
              }`}
            />

            <div className="flex w-full flex-wrap justify-center gap-3">
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
                    className={`brutal-border group relative flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      on
                        ? "-translate-y-1 bg-volt shadow-[4px_4px_0_0_var(--color-ink)]"
                        : active
                          ? "bg-paper opacity-45"
                          : "bg-paper hover:-translate-y-1"
                    }`}
                  >
                    <span
                      className={`absolute -top-10 left-1/2 h-10 w-0.5 -translate-x-1/2 origin-bottom transition-transform duration-200 ${
                        on ? "scale-y-100 bg-fire" : "scale-y-0 bg-ink/30"
                      }`}
                    />
                    <ToolLogo domain={t.domain} name={t.name} />
                    <span>{t.name}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${GROUP_ACCENT[t.group]} ${
                        on ? "opacity-100" : "opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* detail panel */}
        <aside className="brutal-border flex flex-col justify-between bg-ink p-6 text-paper">
          {activeTool ? (
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-paper">
                  <ToolLogo domain={activeTool.domain} name={activeTool.name} />
                </span>
                <div>
                  <p className="text-lg font-bold tracking-tight">{activeTool.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                    {activeTool.group}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-paper/80">{activeTool.flow}</p>
            </div>
          ) : (
            <div>
              <p className="text-lg font-bold tracking-tight">
                {shown.length} connections in this view
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Pick a tool to see what data moves, which direction it moves in, and who owns
                the field when both systems disagree.
              </p>
            </div>
          )}
          <p className="mt-8 border-t-2 border-paper/20 pt-4 text-xs text-paper/50">
            Using something not listed? We have almost certainly wired it before.
          </p>
        </aside>
      </div>
    </Section>
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
    <section className="relative overflow-hidden bg-ink py-16 text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h2 className="text-2xl font-bold tracking-[-0.03em]">
            The route
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
            8 stops · 6 weeks · click any stop
          </p>
        </div>

        <div className="mt-6 md:hidden font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
          Swipe →
        </div>
        <div className="mt-4 md:mt-12 overflow-x-auto pb-2">
          <div className="relative min-w-[880px] pb-2">
            {/* the line */}
            <div className="absolute left-0 right-0 top-[7px] h-px bg-paper/25" />
            <div className="flex">
              {STOPS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group relative flex-1 pr-6"
                >
                  {/* tick */}
                  <span className="relative z-10 block h-[15px] w-[15px] rotate-45 border border-paper/40 bg-ink transition-colors duration-300 group-hover:border-fire group-hover:bg-fire" />
                  <span className="mt-5 block font-mono text-[11px] tracking-[0.2em] text-fire/80">
                    {s.n} <span className="text-paper/35">/ {s.w}</span>
                  </span>
                  <p className="mt-2 max-w-[15ch] text-[15px] font-semibold leading-tight tracking-tight text-paper/80 transition-colors duration-300 group-hover:text-paper">
                    {s.t}
                  </p>
                  <span className="mt-4 block h-px w-0 bg-fire transition-all duration-500 group-hover:w-10" />
                  {i === STOPS.length - 1 && (
                    <span className="absolute right-6 top-0 h-[15px] w-px bg-paper/25" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <Section className="bg-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <Eyebrow>Week 0</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            We start in your portal, not in a deck
          </h2>
          <p className="mt-5 text-ink/70">
            The first session is a screen share. You watch us click through the
            same settings your team clicks through, and we write down what does
            not add up. Nothing gets changed in that hour.
          </p>
          <p className="mt-4 text-ink/70">
            This is the list from a recent 40 person software company. Yours will
            look different in the details and very similar in shape.
          </p>
          <img
            src={deskImg}
            alt="Planning desk with campaign notes and a laptop showing marketing reports"
            width={1200}
            height={800}
            loading="lazy"
            className="brutal-border mt-8 w-full object-cover"
          />
        </div>

        <div className="brutal-border bg-bone">
          <div className="flex items-center justify-between border-b-2 border-ink px-6 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              Audit notes
            </p>
            <p className="font-mono text-xs text-ink/50">6 of 23 shown</p>
          </div>
          <ul className="divide-y divide-ink/15">
            {findings.map((x, i) => (
              <li
                key={x.f}
                className="group flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-volt/25 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <span className="flex gap-4">
                  <span className="font-mono text-xs text-fire">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-snug">{x.f}</span>
                </span>
                <span className="shrink-0 pl-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 sm:pl-0">
                  {x.cost}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------- buyer touchpoints */

function BuyerJourney() {
  const touches = [
    { d: "Day 1", t: "Clicks a paid search ad", who: "Anonymous", accent: "bg-fire" },
    { d: "Day 3", t: "Reads two comparison posts", who: "Anonymous", accent: "bg-ink/30" },
    { d: "Day 12", t: "Registers for the webinar", who: "Lead", accent: "bg-volt" },
    { d: "Day 13", t: "Score crosses 60, routed to a rep", who: "MQL", accent: "bg-fire" },
    { d: "Day 15", t: "Books a call from the follow up email", who: "SQL", accent: "bg-volt" },
    { d: "Day 34", t: "Two colleagues join the deal record", who: "Opportunity", accent: "bg-ink/60" },
    { d: "Day 91", t: "Signs, $92,000", who: "Customer", accent: "bg-fire" },
  ];
  return (
    <Section className="bg-bone">
      <Eyebrow>Week 4</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
        What a 91 day buying cycle looks like in the portal
      </h2>
      <p className="mt-5 max-w-2xl text-ink/70">
        This is the same deal that gets split five ways in the next section. Once
        the timeline is captured properly, the credit argument mostly ends.
      </p>

      <div className="mt-14 md:hidden mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
        Swipe →
      </div>
      <div className="mt-4 md:mt-14 overflow-x-auto">
        <ol className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[40%] md:auto-cols-auto md:grid-flow-row md:grid-cols-7 gap-px border border-ink bg-ink">
          {touches.map((x) => (
            <li key={x.d} className="group bg-paper p-5 transition-colors hover:bg-volt/25">
              <span className={`block h-1.5 w-8 ${x.accent}`} />
              <p className="mt-4 font-mono text-xs text-ink/50">{x.d}</p>
              <p className="mt-2 text-sm font-semibold leading-snug tracking-tight">{x.t}</p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-fire">
                {x.who}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- after go live */

function MondayAfter() {
  const items = [
    {
      time: "08:40",
      t: "The weekly ops view",
      b: "New opportunities by source, SLA breaches from last week, and any form that stopped submitting.",
    },
    {
      time: "09:15",
      t: "Sales standup",
      b: "Reps open one list, sorted by score and recency, with the reason for the score visible on the record.",
    },
    {
      time: "11:00",
      t: "Campaign check",
      b: "Spend against pipeline for every live campaign. Two clicks to pause the one that is not paying.",
    },
    {
      time: "16:30",
      t: "The board question lands",
      b: "You send a link instead of building a slide. The numbers are the same ones the team saw at 08:40.",
    },
  ];
  return (
    <Section className="bg-ink text-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>
            <span className="text-volt">After go live</span>
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Your first Monday after go live
          </h2>
          <p className="mt-5 text-paper/70">
            The point of the build is an ordinary week that does not need you to
            reconcile anything. Here is that week, hour by hour.
          </p>
          <Link
            href="/work/datapel"
            className="mt-8 inline-block border border-paper/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-paper hover:text-ink"
          >
            Read a build we shipped
          </Link>
        </div>

        <div className="space-y-px bg-paper/20">
          {items.map((x) => (
            <div
              key={x.time}
              className="group flex gap-6 bg-ink p-6 transition-colors hover:bg-paper/10"
            >
              <span className="font-mono text-sm text-volt">{x.time}</span>
              <div>
                <p className="text-lg font-bold tracking-tight">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{x.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


/* ----------------------------------------------------------------- faq */

function Faq() {
  const faq = [
    {
      q: "Do we need Marketing Hub Enterprise?",
      a: "Not always. We scope to the tier you own and tell you when Pro is the ceiling. If Enterprise unlocks revenue you can measure, we put the case in writing.",
    },
    {
      q: "What happens to our existing campaigns?",
      a: "We audit before we touch anything. What works stays. What is noise gets archived and documented, never silently deleted.",
    },
    {
      q: "Can you make sales trust the leads?",
      a: "By building a scoring model sales helps define, an SLA both sides agree to, and a weekly report that shows the SLA being kept.",
    },
    {
      q: "How much of our time do you need?",
      a: "Two hours a week from marketing, one from sales, plus a kickoff and a training session.",
    },
  ];
  return (
    <Section className="bg-paper">
      <Eyebrow>Questions we get</Eyebrow>
      <div className="mt-10 divide-y-2 divide-ink border-y-2 border-ink">
        {faq.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between gap-6 text-xl font-bold tracking-tight">
              {f.q}
              <span className="text-fire transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-3xl text-ink/70">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- cta */

function Cta() {
  return (
    <Section className="bg-fire text-paper">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Show us your portal and we will tell you what is breaking
          </h2>
          <p className="mt-4 max-w-xl text-paper/80">
            Forty five minutes, screen shared, no deck.
          </p>
        </div>
        <BookCallButton className="brutal-border border-paper bg-paper px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-1">
          Book the session
        </BookCallButton>
      </div>
    </Section>
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
    <main>
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
          {/* 6-column link grid */}
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
                ["Integrity Fire", "/work/integrity-fire"],
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
            <a href="/privacy" className="hover:text-paper transition-colors">Privacy</a>
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
