"use client";

import { HaaSMoment, HaaSRhythm, HaaSArtifacts } from "@/components/HaaSJourney";
import Link from "next/link";
import Image from "next/image";
const hubspotHero = "/hubspot-hero.jpg";
const dashboardMockup = "/dashboard-mockup.jpg";
const whiteboard = "/whiteboard.jpg";
const playbookDesk = "/playbook-desk.jpg";
const deskOperator = "/desk-operator.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";


export default function HubSpotAsAServiceClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <TrustBand />
      <HaaSMoment />
      <WhyBand />
      <HaaSRhythm />
      <HaaSArtifacts />
      <WhatYouGet />
      <StackDiagram />
      <Modules />
      <OperatingRhythm />
      <BeforeAfter />
      <Deliverables />
      <PricingTiers />
      <Migration />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 relative">
        <div className="md:col-span-7">
          <div className="mono text-fire text-sm mb-6 flex items-center gap-3">
            <span className="brutal-border bg-volt text-ink px-2 py-0.5 text-[10px]">FLAGSHIP</span>
            <span>/ Our founders started here, in a Hubspot portal at 2am</span>
          </div>
          <h1 className="display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.92] tracking-tight">
            HubSpot,
            <br />
            run like an{" "}
            <span className="relative inline-block">
              <span className="relative z-10">operating system.</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 bg-fire/80 -z-0"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-snug">
            A HubSpot portal is a living system. It's shaped by every launch, every new hire, every "just this once" workflow. After two or three years, most portals carry the fingerprints of five or six different owners, and that's normal. Our job is to read what's there, keep what's working, and quietly rebuild the parts that decide whether a deal closes.
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-snug">
            You work with the operators directly. The people on your Slack are the same people writing the workflows, senior end to end, since HubSpot was still called Sidekick.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@revlyn.io?subject=HubSpot%20as%20a%20Service%20-%20intro%20call"
              className="group brutal-border bg-ink text-paper px-6 py-4 display text-xl brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all"
            >
              BOOK A 30-MIN CALL
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#what-you-get"
              className="brutal-border bg-volt text-ink px-6 py-4 display text-xl hover:bg-paper transition-colors"
            >
              SEE WHAT WE RUN ↓
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mono text-xs">
            <Stat label="HUBSPOT BUILDS SHIPPED" value="50+" />
            <Stat label="AVG. OPERATOR TENURE" value="8 YRS" hi />
            <Stat label="FIRST SLACK REPLY" value="< 14m" />
            <Stat label="STAYED PAST YEAR 1" value="92%" />
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="brutal-border brutal-shadow-fire overflow-hidden bg-ink">
            <img
              src={hubspotHero}
              alt="HubSpot dashboard on operator's desk"
              className="w-full h-auto block"
              width={1600}
              height={1100}
            />
          </div>
          <div className="absolute -top-4 -left-4 brutal-border bg-volt text-ink px-3 py-2 mono text-[10px] brutal-shadow rotate-[-3deg]">
            LIVE · WEEK 12 · WIN RATE ↑ 34%
          </div>
          <div className="absolute -bottom-6 -right-4 brutal-border bg-paper text-ink px-3 py-2 mono text-[10px] brutal-shadow rotate-[3deg]">
            ONE TEAM · FOUR FUNCTIONS
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hi }: { label: string; value: string; hi?: boolean }) {
  return (
    <div className={`brutal-border p-3 ${hi ? "bg-volt" : ""}`}>
      <div className={`text-[10px] ${hi ? "" : "text-muted-foreground"}`}>{label}</div>
      <div className="display text-2xl mt-1">{value}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   TRUST BAND / MARQUEE
   ══════════════════════════════════════════════════════════════════ */
function TrustBand() {
  const items = [
    "HUBSPOT SALES HUB · ENTERPRISE",
    "MARKETING HUB · OPS HUB",
    "SERVICE HUB · CMS",
    "CUSTOM OBJECTS · WORKFLOWS",
    "AI AGENTS · BREEZE",
    "REV REPORTING · ATTRIBUTION",
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

/* ══════════════════════════════════════════════════════════════════
   WHY (The problem this replaces)
   ══════════════════════════════════════════════════════════════════ */
function WhyBand() {
  const rows = [
    {
      k: "The internal build",
      body: "1 HubSpot admin · 1 RevOps hire · 1 marketing ops · 1 AI/analytics resource. 9–14 months to hire, ramp, and align. Attrition risk on every seat.",
      tag: "$550K+ / year, loaded",
      bad: true,
    },
    {
      k: "The typical agency",
      body: "Project-priced. Juniors doing the work. Handoffs, tickets, weekly status decks. No accountability once the SOW ends.",
      tag: "Short attention span",
      bad: true,
    },
    {
      k: "HubSpot as a Service",
      body: "The same three operators, in your Slack every day, for the whole year. They wrote the workflows, they debug the workflows, they train your reps on the workflows. No account manager translating between you and someone in a different time zone.",
      tag: "Same faces, all year.",
      good: true,
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="01"
          label="Why we exist"
          title="You shouldn't need to hire four people to run HubSpot well."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {rows.map((r) => (
            <div
              key={r.k}
              className={`brutal-border p-6 ${
                r.good ? "bg-ink text-paper brutal-shadow-fire" : "bg-paper"
              }`}
            >
              <div
                className={`mono text-[10px] uppercase tracking-widest ${
                  r.good ? "text-fire" : "text-muted-foreground"
                }`}
              >
                {r.bad ? "One of two familiar paths" : "A third option"}
              </div>
              <div className="display text-2xl mt-2">{r.k}</div>
              <p className="mt-4 text-sm leading-relaxed opacity-90">{r.body}</p>
              <div
                className={`mt-6 inline-block brutal-border px-3 py-1.5 mono text-[11px] ${
                  r.good ? "bg-volt text-ink" : "bg-ink text-paper"
                }`}
              >
                {r.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   WHAT YOU GET (module grid)
   ══════════════════════════════════════════════════════════════════ */
function WhatYouGet() {
  const items = [
    {
      n: "01",
      t: "HubSpot Architecture",
      b: "Object model, lifecycle stages, pipelines, permission sets, portal hygiene. Built to scale from Seed to Series C.",
    },
    {
      n: "02",
      t: "Data & Integrations",
      b: "Segment, Rudderstack, warehouse sync, product signals, enrichment, dedupe. HubSpot as the single source of truth.",
    },
    {
      n: "03",
      t: "GTM Workflows",
      b: "Inbound routing, lead scoring, SLA enforcement, deal automation, forecast rollups, renewal & churn alerts.",
    },
    {
      n: "04",
      t: "Marketing Ops",
      b: "Campaigns, nurtures, attribution, list hygiene, deliverability, form and CTA architecture, A/B rigor.",
    },
    {
      n: "05",
      t: "Reporting & Forecasting",
      b: "Board-ready dashboards. Funnel math, cohort ARR, sales velocity, rep scorecards, weekly ops review.",
    },
    {
      n: "06",
      t: "AI Layer (Breeze + custom)",
      b: "Lead qualification agents, meeting summarizers, follow-up drafts, deal risk scoring, content ops copilots.",
    },
    {
      n: "07",
      t: "Enablement & Adoption",
      b: "Rep playbooks, Loom libraries, in-portal guidance, monthly office hours. Your team actually uses HubSpot.",
    },
    {
      n: "08",
      t: "Portal Governance",
      b: "Change requests, release notes, deprecation policy, audit log. Your HubSpot stops drifting.",
    },
  ];
  return (
    <section id="what-you-get" className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="02"
          label="What we look after"
          title="Eight things we quietly take off your plate."
        />
        <div className="mt-12 grid md:grid-cols-4 gap-0 brutal-border">
          {items.map((it, i) => (
            <div
              key={it.n}
              className={`p-6 relative min-h-[220px] ${
                i % 4 !== 3 ? "md:border-r-2 md:border-ink" : ""
              } ${i < 4 ? "md:border-b-2 md:border-ink" : ""} border-b-2 border-ink last:border-b-0 ${
                i === 5 ? "bg-fire text-paper" : i === 2 ? "bg-volt" : "bg-paper"
              }`}
            >
              <div className="mono text-[11px] opacity-70">{it.n}</div>
              <div className="display text-2xl mt-2">{it.t}</div>
              <p className="mt-3 text-sm leading-snug opacity-90">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   STACK DIAGRAM
   ══════════════════════════════════════════════════════════════════ */
function StackDiagram() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <div className="mono text-fire text-sm">How it fits together</div>
          <h2 className="display text-[clamp(2rem,4.5vw,3.75rem)] mt-3 leading-[0.95]">
            HubSpot in the middle. Everything else feeding into it.
          </h2>
          <p className="mt-6 text-lg leading-snug text-muted-foreground">
            Your CRM is only as useful as what flows into it. We wire the rest
            of your stack — data, product signals, GTM tools, AI — into HubSpot
            so your pipeline reflects what's actually happening.
          </p>
          <ul className="mt-8 space-y-2 mono text-sm">
            <li>▸ Warehouse sync (Snowflake · BigQuery · Redshift)</li>
            <li>▸ CDP (Segment · Rudderstack)</li>
            <li>▸ Enrichment (Clearbit · Apollo · Clay)</li>
            <li>▸ Signals (Common Room · G2 · product events)</li>
            <li>▸ AI (Breeze · OpenAI · Anthropic · custom agents)</li>
          </ul>
        </div>
        <div className="md:col-span-7">
          <StackSVG />
        </div>
      </div>
    </section>
  );
}

function StackSVG() {
  return (
    <div className="brutal-border bg-paper p-6 md:p-10 brutal-shadow-fire">
      <svg viewBox="0 0 520 380" className="w-full h-auto">
        <defs>
          <marker
            id="arr"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#0a0a0a" />
          </marker>
        </defs>
        {/* Center hub */}
        <g>
          <rect
            x="200"
            y="150"
            width="120"
            height="80"
            fill="#ff5722"
            stroke="#0a0a0a"
            strokeWidth="2"
          />
          <text
            x="260"
            y="185"
            textAnchor="middle"
            fontFamily="Inter Tight, Inter, sans-serif"
            fontWeight="800"
            fontSize="22"
            fill="#fff"
          >
            HUBSPOT
          </text>
          <text
            x="260"
            y="207"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill="#fff"
          >
            single source of truth
          </text>
        </g>
        {/* Nodes */}
        {[
          { x: 30, y: 40, w: 130, h: 46, l: "WAREHOUSE" },
          { x: 190, y: 30, w: 140, h: 46, l: "PRODUCT SIGNALS" },
          { x: 360, y: 40, w: 130, h: 46, l: "CDP" },
          { x: 30, y: 310, w: 130, h: 46, l: "AI AGENTS" },
          { x: 190, y: 320, w: 140, h: 46, l: "ENRICHMENT" },
          { x: 360, y: 310, w: 130, h: 46, l: "GTM TOOLS" },
        ].map((n) => (
          <g key={n.l}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              fill="#fffdf6"
              stroke="#0a0a0a"
              strokeWidth="2"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 + 5}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="12"
              fill="#0a0a0a"
            >
              {n.l}
            </text>
          </g>
        ))}
        {/* Connections */}
        {[
          [95, 86, 220, 150],
          [260, 76, 260, 150],
          [425, 86, 300, 150],
          [95, 310, 220, 230],
          [260, 320, 260, 230],
          [425, 310, 300, 230],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#0a0a0a"
            strokeWidth="2"
            markerEnd="url(#arr)"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 200; 200 0"
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </line>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MODULES (detailed cards with photo)
   ══════════════════════════════════════════════════════════════════ */
function Modules() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="03"
          label="A closer look"
          title="The things your team stops worrying about."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <div className="brutal-border overflow-hidden bg-ink">
              <img
                src={dashboardMockup}
                alt="HubSpot dashboard rebuilt for a Series B SaaS"
                className="w-full h-auto block"
                loading="lazy"
                width={1400}
                height={900}
              />
            </div>
            <div className="mono text-xs text-fire">Reporting</div>
            <div className="display text-3xl mt-1">Reports your board will actually read</div>
            <p className="mt-3 text-muted-foreground">
              Funnel, cohort ARR, sales velocity, forecast confidence, rep
              scorecards, campaign attribution. We rebuild them as your
              business changes shape — usually every quarter.
            </p>
          </div>
          <div>
            <div className="brutal-border overflow-hidden bg-ink">
              <img
                src={whiteboard}
                alt="Workflow architecture sketch for a HubSpot rebuild"
                className="w-full h-auto block"
                loading="lazy"
                width={1400}
                height={900}
              />
            </div>
            <div className="mono text-xs text-fire">Automation</div>
            <div className="display text-3xl mt-1">
              Workflows that keep working
            </div>
            <p className="mt-3 text-muted-foreground">
              Every workflow is documented and owned by someone. When your
              product ships something new, the workflow moves with it. When a
              rep leaves, the handoff just happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   OPERATING RHYTHM (weekly cadence)
   ══════════════════════════════════════════════════════════════════ */
function OperatingRhythm() {
  const cadence = [
    { d: "MON", t: "Standup", b: "15 min. Priorities for the week. Blockers surfaced." },
    { d: "TUE–THU", t: "Build & Operate", b: "Automation, reports, campaigns, AI agents, portal hygiene." },
    { d: "FRI", t: "Ops Review", b: "Pipeline health, workflow errors, data quality, changes shipped." },
    { d: "MONTHLY", t: "Scorecard", b: "Written monthly review. What moved. What didn't. What's next." },
    { d: "QUARTERLY", t: "Roadmap", b: "Rescope. New surfaces added. Deprecations. Board-facing summary." },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-[0.08] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-20 relative">
        <SectionHeader
          n="04"
          label="How we work with you"
          title="A calm, weekly rhythm."
          light
        />
        <div className="mt-12 grid md:grid-cols-5 gap-4">
          {cadence.map((c) => (
            <div
              key={c.d}
              className="brutal-border border-paper bg-ink p-5 hover:bg-fire transition-colors"
            >
              <div className="mono text-[10px] text-fire group-hover:text-paper">
                {c.d}
              </div>
              <div className="display text-2xl mt-2">{c.t}</div>
              <p className="mt-3 text-sm text-paper/80 leading-snug">{c.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4 mono text-sm">
          <div className="brutal-border border-paper p-4">
            <div className="text-fire text-[11px]">CHANNEL</div>
            <div className="display text-xl mt-1">Shared Slack</div>
          </div>
          <div className="brutal-border border-paper p-4 bg-volt text-ink">
            <div className="text-[11px]">RESPONSE</div>
            <div className="display text-xl mt-1">Same-day, business hours</div>
          </div>
          <div className="brutal-border border-paper p-4">
            <div className="text-fire text-[11px]">DOCS</div>
            <div className="display text-xl mt-1">Notion + Loom library</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BEFORE / AFTER
   ══════════════════════════════════════════════════════════════════ */
function BeforeAfter() {
  const rows = [
    ["Owner of HubSpot", "A confused Slack channel", "Revlyn (documented)"],
    ["Lead routing", "Round robin, no SLAs", "Signal-scored, SLA-enforced"],
    ["Reporting", "Screenshots in decks", "Live dashboards + monthly scorecard"],
    ["Forecast accuracy", "Vibes-based", "Weighted, calibrated weekly"],
    ["Marketing attribution", "First-touch only", "Multi-touch + product signals"],
    ["AI in HubSpot", "One-off Breeze prompts", "Agents wired to workflows & data"],
    ["Enablement", "Onboarding doc from 2023", "In-portal guidance + Loom library"],
    ["Change control", "Anyone can edit anything", "Versioned, reviewed, released"],
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="05"
          label="Before and after"
          title="Same portal. A very different feeling."
        />
        <div className="mt-12 brutal-border bg-paper overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-ink text-paper display">
                <th className="text-left p-4 md:p-5 border-r-2 border-paper/20">Surface</th>
                <th className="text-left p-4 md:p-5 border-r-2 border-paper/20">
                  <span className="mono text-[11px] text-fire">BEFORE</span>
                  <div>Typical mess</div>
                </th>
                <th className="text-left p-4 md:p-5">
                  <span className="mono text-[11px] text-volt">AFTER</span>
                  <div>With Revlyn</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className={i % 2 ? "bg-bone" : "bg-paper"}>
                  <td className="p-4 md:p-5 border-t-2 border-ink display text-lg">
                    {r[0]}
                  </td>
                  <td className="p-4 md:p-5 border-t-2 border-ink text-muted-foreground">
                    {r[1]}
                  </td>
                  <td className="p-4 md:p-5 border-t-2 border-ink">
                    <span className="brutal-border bg-volt px-2 py-0.5 mr-2 mono text-[10px]">
                      NOW
                    </span>
                    {r[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DELIVERABLES (photo + list)
   ══════════════════════════════════════════════════════════════════ */
function Deliverables() {
  const bundles = [
    {
      h: "Architecture bundle",
      items: [
        "Portal audit + gap analysis",
        "Object model & lifecycle map",
        "Permission sets & team topology",
        "Data dictionary + naming conventions",
      ],
    },
    {
      h: "Ops bundle",
      items: [
        "Lead routing + SLAs",
        "Deal & renewal automation",
        "Workflow library, versioned",
        "Error monitoring + weekly hygiene",
      ],
    },
    {
      h: "Reporting bundle",
      items: [
        "Board dashboard v1",
        "Rep & manager scorecards",
        "Attribution model + weekly report",
        "Forecast calibration cadence",
      ],
    },
    {
      h: "AI bundle",
      items: [
        "Breeze agent configuration",
        "Meeting summarizer → CRM",
        "Deal risk & health scoring",
        "Custom agents (LangChain / OpenAI)",
      ],
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 relative">
          <div className="brutal-border overflow-hidden bg-ink brutal-shadow-fire">
            <img
              src={playbookDesk}
              alt="Playbook and portal audit documents on desk"
              className="w-full h-auto block"
              loading="lazy"
              width={1400}
              height={1400}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 brutal-border bg-volt text-ink px-4 py-3 mono text-xs brutal-shadow rotate-[-4deg]">
            30+ ARTIFACTS · YOURS TO KEEP
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="mono text-fire text-sm">What you'll have</div>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] mt-3 leading-[0.95]">
            Everything written down. Everything yours.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            If we ever part ways, you keep the portal, the playbooks, the
            dashboards, and the docs. No lock-in, no black box, no drama.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {bundles.map((b) => (
              <div key={b.h} className="brutal-border p-5 bg-bone">
                <div className="display text-xl">{b.h}</div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-fire">▸</span>
                      <span>{i}</span>
                    </li>
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

/* ══════════════════════════════════════════════════════════════════
   PRICING TIERS
   ══════════════════════════════════════════════════════════════════ */
function PricingTiers() {
  const tiers = [
    {
      name: "Foundation",
      for: "Seed / Series A. One HubSpot Hub. A small GTM team getting its house in order.",
      price: "from $1.5K",
      period: "/month",
      cta: "Let's talk",
      features: [
        "A senior operator, part-time",
        "Sales or Marketing Hub focus",
        "Weekly standup + monthly review",
        "Standard reporting suite",
        "Up to 2 workflow releases per week",
      ],
    },
    {
      name: "Growth",
      for: "Series A/B. Multiple Hubs. RevOps and Marketing Ops on the same page.",
      price: "from $3K",
      period: "/month",
      cta: "Book an intro call",
      features: [
        "Two senior operators + tech lead",
        "Sales + Marketing + Ops Hubs",
        "AI layer: Breeze + custom agents",
        "Board-ready dashboards",
        "Unlimited workflow releases",
        "Quarterly roadmap",
      ],
      featured: true,
    },
    {
      name: "Scale",
      for: "Series B+. Multi-region. Complex data and governance.",
      price: "Custom",
      period: "",
      cta: "Let's scope it together",
      features: [
        "A dedicated pod of 3–4 operators",
        "All Hubs + CMS + custom objects",
        "Warehouse-first architecture",
        "Attribution + forecasting",
        "Change control + audit",
        "Executive review cadence",
      ],
    },
  ];
  return (
    <section id="pricing" className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="06"
          label="Pricing"
          title="Simple monthly pricing. No surprise invoices."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`brutal-border p-7 flex flex-col ${
                t.featured
                  ? "bg-ink text-paper brutal-shadow-fire md:-translate-y-3"
                  : "bg-paper"
              }`}
            >
              {t.featured && (
                <div className="inline-block self-start brutal-border bg-volt text-ink px-2 py-1 mono text-[10px] mb-4">
                  Most teams start here
                </div>
              )}
              <div className="display text-3xl">{t.name}</div>
              <div
                className={`mt-2 text-sm ${
                  t.featured ? "text-paper/70" : "text-muted-foreground"
                }`}
              >
                {t.for}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="display text-4xl">{t.price}</span>
                <span
                  className={`mono text-xs ${
                    t.featured ? "text-paper/60" : "text-muted-foreground"
                  }`}
                >
                  {t.period}
                </span>
              </div>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={t.featured ? "text-fire" : "text-fire"}>
                      ▸
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@revlyn.io?subject=HubSpot%20as%20a%20Service%20-%20intro%20call"
                className={`mt-8 brutal-border display text-lg px-5 py-3 text-center transition-transform hover:-translate-y-0.5 ${
                  t.featured ? "bg-fire text-paper" : "bg-ink text-paper"
                }`}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 mono text-xs text-muted-foreground">
          * Every plan includes a 30-day exit. Senior work only, no
          sub-contracting. We run dedicated pods so every client gets consistent attention.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MIGRATION / ONBOARDING
   ══════════════════════════════════════════════════════════════════ */
function Migration() {
  const steps = [
    { d: "DAY 0–3", t: "Portal audit", b: "Read your portal. Data quality, workflows, permissions, technical debt inventory." },
    { d: "DAY 4–7", t: "Priority map", b: "Written diagnosis + first 30 days scoped. What we fix now, what we fix later." },
    { d: "DAY 8–14", t: "First release", b: "Data hygiene pass + top-3 workflow fixes + board dashboard v0. Live." },
    { d: "DAY 15–30", t: "Operating", b: "Weekly standups begin. Backlog moves. First monthly scorecard scheduled." },
  ];
  return (
    <section className="border-b-2 border-ink bg-paper relative">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader
          n="07"
          label="Getting started"
          title="From kickoff to your first release, in about two weeks."
        />
        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-0 right-0 top-14 border-t-2 border-dashed border-ink/30" />
          <div className="grid md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.d} className="brutal-border bg-bone p-5 relative">
                <div className="absolute -top-4 left-5 brutal-border bg-fire text-paper mono text-[10px] px-2 py-1">
                  {String(i + 1).padStart(2, "0")} / {s.d}
                </div>
                <div className="display text-2xl mt-4">{s.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-snug">
                  {s.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════════════════════════════ */
function FAQ() {
  const qa = [
    {
      q: "Are you a HubSpot partner?",
      a: "Yes. We work with HubSpot as an implementation and services partner and cover Sales, Marketing, Service, Ops and CMS Hubs, including custom objects and Breeze AI. We also work with adjacent stacks (Salesforce, Segment, warehouses, LangChain) so HubSpot is the source of truth, not an island.",
    },
    {
      q: "How is this different from hiring a HubSpot admin?",
      a: "An admin owns clicks. We own outcomes. HubSpot as a Service replaces the combination of admin + RevOps + marketing ops + AI/analytics with one senior team, priced monthly, accountable to a scorecard.",
    },
    {
      q: "Do you work with our existing HubSpot partner or agency?",
      a: "Yes. We often replace them, but if you have a working relationship we're happy to co-run or take over on a schedule.",
    },
    {
      q: "What if we're not on HubSpot yet?",
      a: "We run the migration. Salesforce, Pipedrive, Attio, spreadsheets — we've done all of them. Migration is scoped as a fixed-fee project and rolls into the monthly subscription.",
    },
    {
      q: "Who owns the work?",
      a: "You do. Portal, workflows, dashboards, playbooks, agents, docs. Everything is documented in your Notion and your HubSpot. Exit any time on 30 days' notice.",
    },
    {
      q: "How fast can we start?",
      a: "Portal audit inside 72 hours of signing. First release live in ≤14 days. We accept two new engagements per quarter.",
    },
  ];
  return (
    <section id="faq" className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <SectionHeader n="08" label="FAQ" title="Questions people usually ask us." />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {qa.map((f) => (
            <div key={f.q} className="brutal-border bg-paper p-6">
              <div className="mono text-[11px] text-fire">Q</div>
              <div className="display text-xl mt-1">{f.q}</div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CTA
   ══════════════════════════════════════════════════════════════════ */
function CTA() {
  return (
    <section id="book" className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 relative">
        <div className="md:col-span-8">
          <div className="mono text-fire text-sm">Say hello</div>
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] mt-3">
            Let's take a look at
            <br />
            your HubSpot together.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            A 30-minute working call with a senior operator. We'll open your
            portal, walk through the top three things worth fixing, and be
            honest about whether we're the right team to help. No pitch deck.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@revlyn.io?subject=HubSpot%20as%20a%20Service%20-%20intro%20call"
              className="brutal-border bg-fire text-paper display text-xl px-6 py-4 brutal-shadow hover:-translate-y-0.5 transition-transform"
            >
              BOOK A CALL →
            </a>
            <Link
              href="/contact"
              className="brutal-border bg-volt text-ink display text-xl px-6 py-4 hover:-translate-y-0.5 transition-transform"
            >
              CONTACT US
            </Link>
          </div>
          <div className="mt-8 mono text-xs text-paper/60">
            info@revlyn.io · +91 7503 044 000 · Gurugram, IN
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="brutal-border bg-paper text-ink p-6 brutal-shadow-fire">
            <div className="mono text-[11px] text-fire">A quick note</div>
            <div className="display text-2xl mt-2">We have room for you.</div>
            <p className="mt-3 text-sm text-muted-foreground">
              We keep onboarding pods free so we can start fast. Most teams are live in HubSpot within two weeks.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-fire opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fire" />
              </span>
              <span className="mono text-xs">New teams start every month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FOOTER (mirrors site footer)
   ══════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 md:-bottom-16 flex justify-center">
        <span
          className="display leading-none tracking-tighter text-transparent select-none"
          style={{
            fontSize: "clamp(8rem, 26vw, 24rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          revlyn
        </span>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 pt-16 pb-14">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-6">
            <Link href="/" aria-label="Revlyn home">
              <img
                src={revlynWordmark}
                alt="Revlyn"
                className="h-10 md:h-12 w-auto object-contain"
                style={{ filter: "invert(1) hue-rotate(180deg)" }}
              />
            </Link>
            <p className="mt-6 max-w-md text-paper/70 text-lg leading-relaxed">
              HubSpot as a Service. One senior team for CRM, RevOps, GTM and
              AI. Built for Founders and Heads of Sales, Marketing, Revenue
              and GTM.
            </p>
          </div>
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-paper/10">
            <div className="text-[11px] tracking-[0.22em] uppercase text-paper/50">
              Field notes, once a month
            </div>
            <p className="mt-3 text-paper/85">
              Short essays on HubSpot, revenue systems and AI. No sales, no
              filler.
            </p>
            <form
              className="mt-5 flex items-center gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent border-b border-paper/30 focus:border-fire outline-none py-2 text-paper placeholder:text-paper/40"
              />
              <button className="rounded-full bg-paper text-ink px-4 py-2 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          {[
            {
              h: "Explore",
              l: [
                ["Home", "/"],
                ["HubSpot as a Service", "/hubspot-as-a-service"],
                ["Method", "/#method"],
                ["Stack", "/#stack"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Case studies", "/#proof"],
                ["Principles", "/#rules"],
              ],
            },
            {
              h: "Contact",
              l: [
                ["Contact us", "/contact"],
                ["info@revlyn.io", "mailto:info@revlyn.io"],
                ["+91 7503044000", "tel:+917503044000"],
              ],
            },
            {
              h: "Follow",
              l: [["LinkedIn", "https://www.linkedin.com/company/revlynhq/"]],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-[11px] tracking-[0.22em] uppercase text-paper/45 mb-4">
                {col.h}
              </div>
              <ul className="space-y-2.5">
                {col.l.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-1 text-paper/85 hover:text-fire transition-colors"
                    >
                      <span>{label}</span>
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-paper/50 text-sm">
            © {new Date().getFullYear()} Revlyn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-paper/50">
            <a href="#" className="hover:text-fire transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fire transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SHARED
   ══════════════════════════════════════════════════════════════════ */
function SectionHeader({
  n,
  label,
  title,
  light,
}: {
  n: string;
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-end">
      <div className="md:col-span-3">
        <div
          className={`mono text-xs ${light ? "text-fire" : "text-fire"} tracking-widest`}
        >
          {n} · {label}
        </div>
      </div>
      <div className="md:col-span-9">
        <h2
          className={`display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight ${
            light ? "text-paper" : ""
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
