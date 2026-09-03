/* ═══════════════════════════════════════════════════════════════
   This file is deliberately NOT "use client" anymore. Everything
   below is static markup (no useState/useEffect) except for three
   widgets, which now live in ./HubSpotAsAServiceWidgets and are
   imported as Client Components. A Server Component is allowed to
   render Client Components as children, so this still works exactly
   as before - the difference is that all the presentational JSX in
   this file (Section, Capability, the diagrams, page copy, Footer)
   is now rendered to HTML on the server instead of being shipped as
   JavaScript and hydrated in the browser on every page load.
   ═══════════════════════════════════════════════════════════════ */

import type { ReactNode } from "react";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";
import { HeroPortal, ScopeBuilder, FaqAccordion } from "./HubSpotAsAServiceWidgets";


function SectionCta({ label }: { label: string }) {
  return (
    <BookCallButton className="group brutal-border bg-ink text-paper px-7 py-4 display text-lg inline-flex items-center gap-3 brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all">
      {label}
      <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">
        →
      </span>
    </BookCallButton>
  );
}

function SecondaryLink({ label, href = "#pricing" }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="brutal-border bg-volt text-ink px-7 py-4 display text-lg hover:bg-paper transition-colors inline-flex items-center gap-3"
    >
      {label}
    </a>
  );
}

function Section({
  eyebrow,
  title,
  children,
  id,
  accent = "fire",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  id?: string;
  accent?: "fire" | "ink" | "volt";
}) {
  const accentText = accent === "ink" ? "text-ink" : "text-fire";
  return (
    <section id={id} className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        {eyebrow ? (
          <p className={`mono text-[11px] uppercase tracking-[0.16em] mb-4 flex items-center gap-2 ${accentText}`}>
            <span aria-hidden="true">◆</span>
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="display max-w-3xl text-3xl md:text-5xl leading-[1.05]">{title}</h2>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{children}</p>;
}

function TickList({
  items,
  columns = 2,
  dot = "bg-fire",
}: {
  items: string[];
  columns?: 2 | 3;
  dot?: string;
}) {
  return (
    <div
      data-stagger
      className={`grid gap-x-8 gap-y-3 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 border-b border-ink/10 pb-3 text-sm">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
          <span className="text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="brutal-border bg-paper">
      <img src={src} alt={alt} className="h-auto w-full object-cover block" loading="lazy" />
      <figcaption className="border-t-2 border-ink px-4 py-3 mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function Capability({
  index,
  title,
  intro,
  items,
  outro,
  accent = "text-fire",
  visual,
}: {
  index: string;
  title: string;
  intro: string[];
  items: string[];
  outro?: string;
  accent?: string;
  visual: ReactNode;
}) {
  return (
    <article className="grid gap-10 border-t-2 border-ink py-14 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p className={`mono text-[11px] uppercase tracking-[0.16em] ${accent}`}>{index}</p>
        <h3 className="display mt-3 text-2xl md:text-3xl leading-tight">{title}</h3>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8">
          <TickList items={items} dot={accent.replace("text-", "bg-")} />
        </div>
        {outro ? <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{outro}</p> : null}
      </div>
      <div className="lg:pt-14">{visual}</div>
    </article>
  );
}

/* ── diagrams (static - no framer-motion) ────────────────────────── */

function FlowDiagram({ steps, accent = "fire" }: { steps: string[]; accent?: "fire" | "ink" | "volt" }) {
  const dot = accent === "ink" ? "bg-ink" : accent === "volt" ? "bg-ink" : "bg-fire";
  return (
    <ol className="flex flex-wrap items-center gap-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span className="flex items-center gap-2 border-2 border-ink bg-paper px-3 py-2 mono text-[11px] uppercase leading-none tracking-[0.1em] text-ink">
            <span className={`h-1.5 w-1.5 shrink-0 ${dot}`} />
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="mx-2 hidden items-center sm:flex">
              <span className="h-px w-5 bg-ink/20" />
              <svg width="7" height="7" viewBox="0 0 7 7" className="-ml-px">
                <path d="M0 0.5 L5.5 3.5 L0 6.5 Z" className="fill-ink/20" />
              </svg>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function BarChartDiagram({
  data,
  color = "fire",
}: {
  data: { label: string; value: number }[];
  color?: "fire" | "ink";
}) {
  const bar = color === "ink" ? "bg-ink" : "bg-fire";
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div>
      <div className="relative h-40 border-b-2 border-ink">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {[0, 1, 2].map((g) => (
            <span
              key={g}
              className="absolute left-0 right-0 border-t border-dashed border-ink/15"
              style={{ top: `${g * 33.33}%` }}
            />
          ))}
        </div>
        <div className="relative flex h-full items-end gap-3">
          {data.map((d) => (
            <div key={d.label} className="flex h-full flex-1 flex-col justify-end">
              <span className="mb-1 text-center mono text-[10px] leading-none text-ink">{d.value}</span>
              <div
                className={`w-full ${bar} transition-[height] duration-700 ease-out`}
                style={{ height: `${(d.value / max) * 82}%`, minHeight: 4 }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        {data.map((d) => (
          <span
            key={d.label}
            className="flex-1 text-center mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
          >
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function FunnelDiagram({ stages }: { stages: { label: string; value: string; width: number }[] }) {
  return (
    <div className="space-y-px">
      {stages.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <div
              className="flex h-10 min-w-[9rem] items-center overflow-hidden whitespace-nowrap px-3 mono text-[11px] uppercase tracking-[0.1em] text-paper transition-[width] duration-700 ease-out"
              style={{ background: i === 0 ? "var(--color-ink)" : "var(--color-fire)", width: `${s.width}%` }}
            >
              {s.label}
            </div>
          </div>
          <span className="w-20 shrink-0 text-right mono text-[11px] tabular-nums text-ink">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

function HubDiagram({ nodes }: { nodes: string[] }) {
  const cx = 200;
  const cy = 160;
  const rx = 140;
  const ry = 112;
  const hub = 38;

  return (
    <svg viewBox="0 0 400 320" className="w-full" role="img" aria-label="HubSpot connected to surrounding systems">
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1} strokeDasharray="3 5" />
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = cx + cos * rx;
        const y = cy + sin * ry;
        const x1 = cx + cos * (hub + 4);
        const y1 = cy + sin * (hub + 4);
        const x2 = cx + cos * (rx - 10);
        const y2 = cy + sin * (ry - 10);
        const onTop = sin < -0.25;
        const onSide = Math.abs(sin) <= 0.25;
        const labelY = onTop ? y - 13 : onSide ? y + 4 : y + 19;
        const labelX = onSide ? x + (cos > 0 ? 12 : -12) : x;
        const anchor = onSide ? (cos > 0 ? "start" : "end") : "middle";

        return (
          <g key={n}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1} />
            <circle cx={x} cy={y} r={5} fill={i % 2 === 0 ? "var(--color-fire)" : "var(--color-ink)"} />
            <text x={labelX} y={labelY} textAnchor={anchor} className="fill-ink" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="0.08em">
              {n.toUpperCase()}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={hub} fill="var(--color-ink)" />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="10" letterSpacing="0.12em" fontFamily="var(--font-mono)" className="fill-paper">
        HUBSPOT
      </text>
    </svg>
  );
}


/* ══════════════════════════════════════════════════════════════════
   PAGE DATA
   ══════════════════════════════════════════════════════════════════ */

const messyPortal = [
  "Hundreds of workflows",
  "Duplicate properties",
  "Inconsistent data",
  "Poorly defined lifecycle stages",
  "Broken automations",
  "Unused features",
  "Incomplete reporting",
  "Manual processes",
  "Multiple integrations",
  "Campaigns that aren't properly tracked",
  "Sales teams that aren't following the CRM process",
];

const automations: { title: string; steps: string[]; accent: "fire" | "ink" | "volt" }[] = [
  { title: "Lead routing", steps: ["New lead", "Identify owner", "Assign", "Create task", "Notify rep"], accent: "fire" },
  { title: "Lead nurturing", steps: ["Downloads content", "Nurture workflow", "Relevant emails", "Engages", "Sales-ready"], accent: "fire" },
  { title: "Deal automation", steps: ["Stage change", "Update properties", "Create tasks", "Notify", "Trigger process"], accent: "ink" },
  { title: "Customer handoff", steps: ["Deal closes", "Update record", "Notify team", "Onboarding tasks"], accent: "volt" },
];

const leadGenSteps: [string, string][] = [
  ["Targeting", "Define the companies and people you want to reach."],
  ["Data", "Build and enrich your prospect database."],
  ["Outreach", "Create and execute targeted outbound campaigns."],
  ["Capture", "Bring responses and inbound leads into HubSpot."],
  ["Qualification", "Use properties, scoring and automation to identify qualified leads."],
  ["Routing", "Automatically assign leads to the right salesperson."],
  ["Nurturing", "Continue engaging prospects who aren't ready to buy."],
  ["Reporting", "Track the journey from prospect to lead to meeting to opportunity to customer."],
];

const audience: [string, string, string][] = [
  ["Growing companies", "You have invested in HubSpot but don't yet need - or can't justify - a full internal HubSpot team.", "bg-fire"],
  ["Marketing teams", "Your marketing team needs HubSpot expertise to execute campaigns and automation.", "bg-fire"],
  ["Sales teams", "Your sales team needs better CRM processes, automation and reporting.", "bg-ink"],
  ["RevOps teams", "You have a RevOps leader but need additional execution capacity.", "bg-ink"],
  ["Complex portals", "Your HubSpot portal has grown organically and needs ongoing management.", "bg-ink"],
  ["No administrator", "Nobody internally owns HubSpot. That's where we come in.", "bg-fire"],
];

const process: [string, string, string][] = [
  ["Step 1", "We understand your HubSpot", "We review your portal, processes, users, data, automation and reporting."],
  ["Step 2", "We identify the priorities", "We separate what's broken, what's inefficient, what's missing and what's worth improving."],
  ["Step 3", "We create your execution plan", "We agree on the highest-priority work."],
  ["Step 4", "We execute", "Our team builds, configures and manages the work inside HubSpot."],
  ["Step 5", "We continuously improve", "As your business changes, your HubSpot setup changes with it."],
];

const pricing: { name: string; blurb: string; label: string; accent: string; items: string[] }[] = [
  {
    name: "Starter",
    blurb: "For companies that need ongoing HubSpot administration and support.",
    label: "Includes:",
    accent: "border-t-ink",
    items: ["CRM administration", "Basic automation", "Data management", "User support", "Reporting", "Ongoing maintenance"],
  },
  {
    name: "Growth",
    blurb: "For companies using HubSpot actively across marketing and sales.",
    label: "Everything in Starter, plus:",
    accent: "border-t-fire",
    items: ["Marketing campaigns", "Advanced workflows", "Sales automation", "Lead management", "Advanced reporting", "Integrations", "Data enrichment"],
  },
  {
    name: "RevOps",
    blurb: "For companies looking for a complete outsourced HubSpot/RevOps team.",
    label: "Includes:",
    accent: "border-t-fire",
    items: ["CRM architecture", "Sales Hub", "Marketing Hub", "Automation", "Reporting", "Integrations", "Data", "Lead generation", "RevOps support", "Continuous optimization"],
  },
];

const faqs: string[][] = [
  ["What is HubSpot as a Service?", "HubSpot as a Service is an ongoing managed service where a team of HubSpot experts manages, builds and optimizes your HubSpot portal."],
  ["Is HubSpot as a Service the same as HubSpot consulting?", "No. Consulting generally focuses on recommendations and strategy. HubSpot as a Service focuses on ongoing execution and management."],
  ["Is HubSpot as a Service the same as HubSpot support?", "Not exactly. Support typically focuses on solving problems. HubSpot as a Service provides proactive, ongoing management and development of your HubSpot environment."],
  ["Can you manage our existing HubSpot portal?", "Yes. You don't need a new HubSpot account. We can audit your existing portal, clean it up and continue managing it."],
  ["Can you help with lead generation?", "Yes. We can support the complete process from prospect data and targeting through campaigns, HubSpot automation, lead capture, qualification and reporting."],
  ["Do you work with companies that already have a RevOps team?", "Yes. In that case, we can act as an execution layer for your RevOps team, helping them get more done without increasing internal headcount."],
  ["Do we need to hire a HubSpot administrator?", "Not necessarily. HubSpot as a Service can provide the ongoing expertise and execution capacity you need without hiring a full-time specialist."],
  ["Can you help us implement HubSpot first?", "Yes. We can start with HubSpot implementation and then continue as your ongoing HubSpot team."],
];

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function HubSpotAsAServiceClient() {
  return (
    <main className="bg-paper text-ink">
      {/* Ticker */}
      <div className="overflow-hidden bg-ink">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 overflow-hidden px-6 py-2.5 mono text-[10px] uppercase tracking-[0.18em] text-paper">
          <span className="flex shrink-0 items-center gap-2 text-fire">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fire animate-blink" />
            Live
          </span>
          {["HubSpot Solutions Partner", "Onboarding new teams", "Senior operators only", "hello@revlyn.io"].map((t) => (
            <span key={t} className="hidden shrink-0 items-center gap-6 md:flex">
              <span aria-hidden="true" className="text-fire">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 pt-20 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28 lg:pb-28">
          <div>
           
            <h1 className="mt-7 display text-5xl leading-[0.92] md:text-7xl">
              HubSpot as a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Service</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-3 bg-volt" />
              </span>
            </h1>
            <div aria-hidden="true" className="mt-4 h-1.5 max-w-xl bg-fire" />
            <p className="mt-6 max-w-xl text-xl text-ink md:text-2xl">Your HubSpot team, without hiring one.</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Get ongoing HubSpot management, implementation, automation, CRM administration, marketing, sales
              operations, reporting, integrations and lead generation - all from one team.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tell us what you need. We build it, manage it and keep improving it.
            </p>
            <div className="mt-9 flex flex-wrap gap-5">
              <SectionCta label="Talk to a HubSpot Expert" />
              <SecondaryLink label="See pricing ↓" />
            </div>
          </div>
          <div>
            <HeroPortal />
          </div>
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-20">
          <div data-stagger className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-3">
            {[
              ["CRM", "Architecture, data & governance", "bg-fire"],
              ["Automation", "Workflows built on your process", "bg-fire"],
              ["RevOps", "Reporting, integrations, pipeline", "bg-ink"],
            ].map(([k, v, c]) => (
              <div key={k} className="bg-paper">
                <div className="h-full p-6">
                  <span className={`mb-4 block h-1 w-10 ${c}`} />
                  <p className="mono text-[11px] uppercase tracking-[0.16em]">{k}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Definition" title="What is HubSpot as a Service?">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-5">
            <Lead>
              HubSpot as a Service is an ongoing managed service where a team of HubSpot specialists manages and
              improves your HubSpot portal for you.
            </Lead>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Instead of hiring a full-time HubSpot administrator, RevOps manager, marketing automation specialist
              and CRM consultant, you get access to a team that can handle the day-to-day work required to make
              HubSpot work for your business.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This can include everything from HubSpot CRM administration and data management to workflows,
              marketing automation, sales processes, reporting, integrations and lead generation.
            </p>
            <p className="border-l-2 border-fire pl-4 text-sm leading-relaxed text-ink">
              It is designed for companies that already use HubSpot but don't have enough internal resources to
              manage it effectively.
            </p>
          </div>
          <Figure src="/hubspot-dashboard.jpg" alt="A managed HubSpot / CRM dashboard in daily use" caption="Inside a managed HubSpot portal" />
        </div>
      </Section>

      <Section eyebrow="The problem" title="Why companies choose HubSpot as a Service" accent="volt">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-2xl leading-snug">Buying HubSpot is easy.</p>
            <p className="mt-2 text-lg text-muted-foreground">Getting your team to actually use it properly is harder.</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Over time, HubSpot portals become complicated. And eventually someone inside the company becomes
              responsible for fixing everything. Usually, that person already has a full-time job.
            </p>
            <p className="bg-volt p-4 text-sm leading-relaxed text-ink">
              HubSpot as a Service gives you a team whose job is to make HubSpot work.
            </p>
          </div>
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.16em] mb-4 text-muted-foreground">You may have</p>
            <TickList items={messyPortal} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="What does a HubSpot as a Service provider do?">
        <Lead>
          Think of us as your outsourced HubSpot team. You can use us for individual projects or ongoing support.
        </Lead>
        <div className="mt-4">
          <Capability
            index="01"
            title="HubSpot CRM Management"
            accent="text-fire"
            intro={["We manage the foundation of your CRM so your sales and marketing teams can work from reliable data."]}
            items={[
              "Contact and company properties",
              "Custom objects",
              "Lifecycle stages",
              "Lead statuses",
              "Data cleanup",
              "Duplicate management",
              "Importing and exporting data",
              "Record management",
              "CRM architecture",
              "User permissions",
              "Teams and access",
              "Data governance",
              "CRM documentation",
            ]}
            visual={
              <div className="brutal-border p-6">
                <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-muted-foreground">Lifecycle architecture</p>
                <FlowDiagram steps={["Subscriber", "Lead", "MQL", "SQL", "Opportunity", "Customer"]} />
                <div className="mt-8 grid grid-cols-3 gap-px bg-ink/10">
                  {[["Properties", "Standardised"], ["Duplicates", "Merged"], ["Owners", "Assigned"]].map(([k, v]) => (
                    <div key={k} className="bg-paper p-4">
                      <p className="mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{k}</p>
                      <p className="mt-1 text-sm text-ink">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          <Capability
            index="02"
            title="HubSpot Sales Hub Management"
            accent="text-ink"
            intro={["Your sales team should spend time selling - not figuring out how HubSpot works."]}
            items={[
              "Sales pipelines",
              "Deal stages",
              "Lead management",
              "Lead routing",
              "Sales automation",
              "Task automation",
              "Sequences",
              "Templates",
              "Meeting scheduling",
              "Sales notifications",
              "Follow-up processes",
              "Forecasting",
              "Sales dashboards",
              "Rep productivity reporting",
            ]}
            outro="We can also help align your HubSpot setup with the way your sales team actually works."
            visual={
              <div className="brutal-border p-6">
                <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-muted-foreground">Pipeline by stage</p>
                <FunnelDiagram
                  stages={[
                    { label: "Prospecting", value: "$2.45M", width: 100 },
                    { label: "Qualification", value: "$1.35M", width: 82 },
                    { label: "Proposal", value: "$780K", width: 62 },
                    { label: "Negotiation", value: "$420K", width: 44 },
                    { label: "Won", value: "$210K", width: 28 },
                  ]}
                />
              </div>
            }
          />
          <Capability
            index="03"
            title="HubSpot Marketing Hub Management"
            accent="text-fire"
            intro={["HubSpot can become your marketing team's execution engine."]}
            items={[
              "Marketing emails",
              "Email campaigns",
              "Landing pages",
              "Forms",
              "Lists",
              "Segmentation",
              "Lead nurturing",
              "Marketing automation",
              "Workflows",
              "Lead scoring",
              "Campaign tracking",
              "UTM tracking",
              "Marketing reporting",
              "Contact segmentation",
            ]}
            outro="Instead of your marketing team waiting for a HubSpot expert every time they need something built, you have a team available to execute it."
            visual={
              <div className="brutal-border p-6">
                <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-muted-foreground">Campaign performance</p>
                <BarChartDiagram
                  color="fire"
                  data={[
                    { label: "Jan", value: 42 },
                    { label: "Feb", value: 58 },
                    { label: "Mar", value: 51 },
                    { label: "Apr", value: 74 },
                    { label: "May", value: 88 },
                    { label: "Jun", value: 96 },
                  ]}
                />
                <div className="mt-6 flex flex-wrap gap-2 mono text-[10px] uppercase tracking-[0.12em]">
                  {["Emails", "Landing pages", "Forms", "Lead scoring", "UTM"].map((t) => (
                    <span key={t} className="border border-ink/15 px-2 py-1 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </Section>

      <Section eyebrow="Automation" title="HubSpot Automation" accent="ink">
        <div className="max-w-3xl space-y-3 text-muted-foreground">
          <p>Automation is one of the biggest reasons companies invest in HubSpot.</p>
          <p>But poorly designed automation can make your CRM harder to manage.</p>
          <p>We help you build automation around your actual business processes.</p>
        </div>
        <div data-stagger className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2">
          {automations.map((a) => (
            <div key={a.title} className="bg-paper">
              <div className="h-full p-8">
                <h3 className="text-xl display">{a.title}</h3>
                <div className="mt-5">
                  <FlowDiagram steps={a.steps} accent={a.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Visibility" title="HubSpot Reporting & Dashboards">
        <Lead>
          Your CRM should answer important business questions - not just show you a collection of charts. We build
          dashboards around the metrics your team actually needs.
        </Lead>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ["Sales reporting", "border-t-fire", ["Pipeline value", "Pipeline by stage", "Deal velocity", "Win rate", "Sales activity", "Rep performance", "Forecast", "Revenue by source"]],
            ["Marketing reporting", "border-t-fire", ["Leads generated", "MQLs", "Campaign performance", "Email engagement", "Conversion rates", "Lead sources", "Marketing contribution"]],
            ["Management reporting", "border-t-ink", ["Leads → opportunities → customers", "Revenue pipeline", "Sales performance", "Marketing performance", "Funnel conversion", "Source attribution"]],
          ].map(([title, border, items]) => (
            <div key={title as string} className={`h-full border-t-2 ${border as string} pt-5`}>
              <h3 className="text-lg display">{title as string}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(items as string[]).map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-px border-2 border-ink bg-ink md:grid-cols-3">
          <div className="bg-paper p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Revenue by month</p>
            <div className="mt-5">
              <BarChartDiagram data={[{ label: "Q1", value: 48 }, { label: "Q2", value: 62 }, { label: "Q3", value: 81 }, { label: "Q4", value: 97 }]} />
            </div>
          </div>
          <div className="bg-paper p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Funnel conversion</p>
            <div className="mt-5">
              <FunnelDiagram
                stages={[
                  { label: "Leads", value: "3,240", width: 100 },
                  { label: "MQL", value: "1,180", width: 74 },
                  { label: "SQL", value: "460", width: 52 },
                  { label: "Customers", value: "96", width: 30 },
                ]}
              />
            </div>
          </div>
          <div className="bg-paper p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Activity by team</p>
            <div className="mt-5">
              <BarChartDiagram color="ink" data={[{ label: "SDR", value: 72 }, { label: "AE", value: 88 }, { label: "CS", value: 54 }, { label: "Mktg", value: 66 }]} />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Connected systems" title="HubSpot Integrations" accent="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Lead>Your CRM doesn't exist in isolation. We can connect HubSpot with the other systems your business uses.</Lead>
            <div className="mt-8">
              <TickList
                dot="bg-ink"
                items={[
                  "Sales platforms",
                  "Marketing platforms",
                  "Data enrichment tools",
                  "Lead generation tools",
                  "Customer support platforms",
                  "Finance systems",
                  "Project management tools",
                  "Communication platforms",
                  "Custom applications",
                ]}
              />
            </div>
            <p className="mt-8 max-w-xl border-l-2 border-ink pl-4 text-sm leading-relaxed">
              The goal is simple: your systems should share data without your team manually moving it between platforms.
            </p>
          </div>
          <div className="space-y-8">
            <div className="brutal-border p-6">
              <HubDiagram nodes={["Sales", "Enrichment", "Support", "Finance", "PM", "Comms", "Custom", "Data"]} />
            </div>
            <Figure src="/integrations-network.jpg" alt="Systems connected to a central hub" caption="One connected data layer" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Foundations" title="HubSpot Data Management" accent="fire">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Figure src="/data-cleanup.jpg" alt="Messy tangled data being sorted into clean organised blocks" caption="From messy portal to structured database" />
          <div>
            <Lead>Bad data creates bad decisions. We help companies improve the quality and structure of your HubSpot database.</Lead>
            <div className="mt-8">
              <TickList
                dot="bg-fire"
                items={[
                  "Data cleansing",
                  "Deduplication",
                  "Standardizing properties",
                  "Data enrichment",
                  "Contact segmentation",
                  "Company matching",
                  "Lifecycle management",
                  "Lead source management",
                  "Data migration",
                  "Import management",
                  "Data governance",
                ]}
              />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              We can also help establish processes that prevent your CRM from becoming messy again.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Pipeline" title="HubSpot Lead Generation">
        <Lead>
          For many companies, HubSpot isn't just a CRM. It's the engine behind their lead generation process - and we
          can help build the system around it.
        </Lead>
        <div className="mt-8">
          <FlowDiagram steps={["Prospect", "Lead", "Meeting", "Opportunity", "Customer"]} />
        </div>
        <div data-stagger className="mt-10 grid gap-px bg-ink/10 md:grid-cols-4">
          {leadGenSteps.map(([title, body], i) => (
            <div key={title} className="bg-paper">
              <div className="h-full p-6">
                <p className="mono text-[11px] uppercase tracking-[0.16em] text-fire">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg display">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          This connects your lead generation activity directly to your CRM and revenue pipeline.
        </p>
      </Section>

      <Section eyebrow="Comparison" title="HubSpot as a Service vs. HubSpot Implementation">
        <p className="text-muted-foreground">These are not the same thing.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="h-full brutal-border p-8">
            <h3 className="text-2xl display">HubSpot Implementation</h3>
            <p className="mt-3 text-sm text-muted-foreground">An implementation is typically a defined project. You hire a partner to:</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {["Configure HubSpot", "Migrate data", "Build workflows", "Configure pipelines", "Set up reporting", "Train your team", "Launch the system"].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 translate-y-2 rounded-full bg-ink" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">Then the project ends.</p>
          </div>
          <div className="h-full bg-fire p-8 text-paper">
            <h3 className="text-2xl display">HubSpot as a Service</h3>
            <p className="mt-3 text-sm opacity-90">HubSpot as a Service is ongoing. After your implementation, your business continues to change.</p>
            <ul className="mt-5 space-y-2 text-sm opacity-95">
              {["You launch campaigns", "Your sales process changes", "You add new employees", "You need new integrations", "Your reporting requirements change", "New HubSpot features become available"].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 translate-y-2 rounded-full bg-volt" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 mono text-[12px] uppercase tracking-[0.16em] opacity-80">Your HubSpot changes with you.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Comparison" title="HubSpot Support vs. HubSpot as a Service" accent="volt">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm text-muted-foreground">Traditional HubSpot support usually means:</p>
            <p className="mt-4 border-l-2 border-ink/20 pl-4 text-xl leading-snug">&ldquo;Something is broken. Can you fix it?&rdquo;</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">HubSpot as a Service is broader. Instead of only fixing problems, your team can proactively:</p>
            <div className="mt-5">
              <TickList
                items={[
                  "Build new functionality",
                  "Improve existing workflows",
                  "Clean your database",
                  "Create campaigns",
                  "Improve reporting",
                  "Optimize sales processes",
                  "Build integrations",
                  "Improve automation",
                  "Support lead generation",
                ]}
              />
            </div>
            <p className="mt-6 text-sm">It's not just support. It's ongoing execution.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Fit" title="Who is HubSpot as a Service for?" accent="fire">
        <div data-stagger className="grid gap-px bg-ink/10 md:grid-cols-3">
          {audience.map(([title, body, color]) => (
            <div key={title} className="bg-paper">
              <div className="h-full p-7">
                <span className={`mb-4 block h-1 w-10 ${color}`} />
                <h3 className="text-lg display">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="The team" title="What you get with Revlyn">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="space-y-4 text-muted-foreground">
              <p>You don't get just one person who knows how to build workflows.</p>
              <p>You get access to a broader team covering:</p>
            </div>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              {["HubSpot", "CRM", "RevOps", "Marketing", "Sales", "Automation", "Data", "Integrations"].map((t) => (
                <span key={t} className="block border border-ink/15 px-3 py-2 mono text-sm uppercase tracking-[0.1em] text-ink">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              So when you have a problem, you don't have to figure out who to hire. You bring the problem to us.
            </p>
          </div>
          <div className="brutal-border p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-muted-foreground">One team, one system</p>
            <HubDiagram nodes={["CRM", "Marketing", "Sales", "Automation", "Data", "Reporting", "Integrations", "RevOps"]} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Process" title="How our HubSpot as a Service works" accent="ink">
        <div data-stagger className="grid gap-px bg-ink/10 md:grid-cols-5">
          {process.map(([step, title, body]) => (
            <div key={step} className="bg-paper">
              <div className="h-full p-6">
                <p className="mono text-[11px] uppercase tracking-[0.16em] text-fire">{step}</p>
                <h3 className="mt-3 text-base leading-snug display">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="One partner" title="One team. Everything HubSpot.">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">You shouldn't need separate vendors for:</p>
            <div className="mt-5">
              <TickList items={["CRM management", "Marketing automation", "Sales automation", "Data", "Reporting", "Integrations", "Lead generation", "RevOps"]} />
            </div>
            <p className="mt-6 text-sm leading-relaxed">You can have one team responsible for the system that connects them all.</p>
          </div>
          <div className="space-y-6 border-l border-ink/15 pl-8">
            <h3 className="text-2xl display">Why Revlyn?</h3>
            {[
              ["We focus on execution.", "We don't just tell you what you should do. We do it."],
              ["We understand HubSpot beyond the basics.", "Our work covers CRM architecture, Sales Hub, Marketing Hub, automation, reporting, integrations and RevOps."],
              ["We work with your existing team.", "We don't replace your marketing or sales team. We give them more execution capacity."],
              ["We grow with you.", "Your requirements change. Your HubSpot environment should change with them."],
            ].map(([t, b]) => (
              <div key={t}>
                <p className="text-base">{t}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Scope" title="Build your HubSpot scope">
        <Lead>
          Select the workstreams you want us to own and the execution capacity you need. We'll shape the engagement
          around it.
        </Lead>
        <div className="mt-10">
          <ScopeBuilder />
        </div>
      </Section>

      <Section eyebrow="Pricing" title="HubSpot as a Service Pricing" id="pricing">
        <Lead>
          Every company uses HubSpot differently, so the amount of support required varies. We typically structure
          our service around the amount and complexity of work your team needs.
        </Lead>
        <div data-stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <div key={tier.name} className={`flex h-full flex-col brutal-border border-t-4 ${tier.accent} p-8 transition-transform hover:-translate-y-1.5`}>
              <h3 className="text-2xl display">{tier.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{tier.blurb}</p>
              <p className="mono text-[11px] uppercase tracking-[0.16em] mt-6 text-fire">{tier.label}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tier.items.map((i) => (
                  <li key={i} className="border-b border-ink/10 pb-2">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <SectionCta label="Talk to us about pricing" />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions" accent="volt">
        <FaqAccordion items={faqs} />
      </Section>

      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <h2 className="max-w-3xl display text-4xl leading-[1.02] md:text-6xl">
            Your HubSpot team is one conversation away.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            You shouldn't have to hire a HubSpot administrator, marketing automation specialist, CRM consultant and
            RevOps team just to get your HubSpot working properly.
          </p>
          <p className="mt-4 max-w-2xl text-base text-ink">Tell us what you need. We'll figure out how to build it.</p>
          <div className="mt-10">
            <SectionCta label="Talk to a HubSpot Expert" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

