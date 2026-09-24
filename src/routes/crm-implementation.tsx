import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../lib/seo";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Globe2,
  Link2,
  Mail,
  MessageCircle,
  RouteIcon,
  Settings2,
  SlidersHorizontal,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/crm-implementation")({
  head: () => ({
    meta: [
      { title: "What is CRM Implementation? | Revlyn" },
      {
        name: "description",
        content:
          "A detailed, visual guide to CRM implementation: process design, data migration, integrations, automation, adoption, ownership, and measurement for growing revenue teams.",
      },
      { property: "og:title", content: "What is CRM Implementation? | Revlyn" },
      {
        property: "og:description",
        content:
          "See how CRM implementation turns software into a working sales system through process, data, technology, and team adoption.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/crm-implementation" },
      { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    { "script:ld+json": breadcrumbSchema([{ name: "What is CRM Implementation?", path: "/crm-implementation" }]) },
    { "script:ld+json": serviceSchema({ name: "What is CRM Implementation?", description: "A detailed, visual guide to CRM implementation: process design, data migration, integrations, automation, adoption, ownership, and measurement for growing revenue teams.", path: "/crm-implementation" }) },
    { "script:ld+json": faqSchema(faqs.map(([q = "", a = ""]) => ({ q, a }))) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/crm-implementation" }],
  }),
  component: CrmImplementationPage,
});

const pieces = [
  { icon: RouteIcon, tone: "bg-sun", title: "Process mapping", question: "How do we sell?", copy: "Document how leads arrive, qualify, move, stall, and convert. Define stages, exit criteria, owners, hand-offs, and exceptions before configuring software." },
  { icon: SlidersHorizontal, tone: "bg-mint", title: "Setup & configuration", question: "How should the CRM behave?", copy: "Configure pipelines, fields, layouts, roles, permissions, views, and terminology around the agreed process, not a generic software template." },
  { icon: Database, tone: "bg-brand", title: "Data migration", question: "Can we trust our records?", copy: "Audit spreadsheets and old tools, agree what should move, remove duplicates, standardise formats, map fields, test imports, and reconcile totals." },
  { icon: Link2, tone: "bg-grape text-cream", title: "Integrations", question: "Where does information flow?", copy: "Connect website forms, email, WhatsApp workflows, billing, support, and other tools so teams stop copying information between systems." },
  { icon: Zap, tone: "bg-brand", title: "Automation", question: "What should happen automatically?", copy: "Build useful triggers for assignment, follow-ups, approvals, alerts, and hand-offs, with clear owners for anything that needs human judgement." },
  { icon: Users, tone: "bg-mint", title: "Training & adoption", question: "Will people actually use it?", copy: "Train people around their daily work, give managers the right views, document key routines, gather feedback, and reinforce usage after launch." },
];

const phases = [
  { number: "01", title: "Discover", summary: "Understand the real sales motion.", outputs: ["Goals and success measures", "Current process map", "Data and tool audit", "Risks and priorities"], tone: "bg-sun" },
  { number: "02", title: "Design", summary: "Define the future way of working.", outputs: ["Future process map", "Pipeline and field design", "Role and access model", "Migration and integration plan"], tone: "bg-mint" },
  { number: "03", title: "Build", summary: "Configure, connect, and test.", outputs: ["CRM configuration", "Clean test migration", "Automations and integrations", "User acceptance testing"], tone: "bg-brand" },
  { number: "04", title: "Adopt", summary: "Launch with people, not at them.", outputs: ["Role-based training", "Go-live support", "Usage dashboard", "Feedback and issue log"], tone: "bg-grape text-cream" },
  { number: "05", title: "Improve", summary: "Measure and refine the system.", outputs: ["Data-quality checks", "Pipeline review rhythm", "Automation improvements", "Quarterly roadmap"], tone: "bg-sun" },
];

const failureReasons = [
  { title: "Tool-first thinking", copy: "Software is selected before the team agrees on the process. Configuration then follows the tool's defaults instead of the business." },
  { title: "Borrowed processes", copy: "A pipeline copied from another company ignores your market, languages, buying cycle, approval flow, and team structure." },
  { title: "Messy data", copy: "Years of inconsistent spreadsheets are imported without rules. Duplicates and missing fields quickly destroy trust in reporting." },
  { title: "No adoption ownership", copy: "Go-live is treated as the finish line. Without managers reinforcing the new routines, the CRM quietly becomes optional." },
];

const responsibilityRows = [
  { area: "Goals & priorities", leadership: "Own", sales: "Contribute", ops: "Contribute", partner: "Facilitate" },
  { area: "Sales process", leadership: "Approve", sales: "Own", ops: "Design", partner: "Facilitate" },
  { area: "Data quality", leadership: "Support", sales: "Validate", ops: "Own", partner: "Guide" },
  { area: "Configuration", leadership: "Review", sales: "Test", ops: "Co-own", partner: "Own" },
  { area: "Training & adoption", leadership: "Sponsor", sales: "Participate", ops: "Co-own", partner: "Enable" },
  { area: "Ongoing improvement", leadership: "Review", sales: "Feedback", ops: "Own", partner: "Support" },
];

const readiness = [
  "A clear business problem, not only a desire to buy new software",
  "A leader who can make process and priority decisions",
  "Salespeople available to explain reality and test the new setup",
  "Access to existing spreadsheets, tools, and data owners",
  "Agreement that some old habits and fields may be retired",
  "Time after launch for coaching, measurement, and improvement",
];

const measures = [
  { label: "Adoption", metric: "Active users, timely updates, task completion", icon: Users, tone: "bg-mint" },
  { label: "Data quality", metric: "Duplicates, missing fields, stale records", icon: Database, tone: "bg-sun" },
  { label: "Process health", metric: "Stage ageing, next-step coverage, hand-off time", icon: RouteIcon, tone: "bg-brand" },
  { label: "Business visibility", metric: "Forecast confidence, conversion, response time", icon: BarChart3, tone: "bg-grape text-cream" },
];

const faqs = [
  ["Is CRM implementation the same as buying a CRM?", "No. Buying the software gives you an empty platform. Implementation turns it into a working business system through process design, configuration, data, integrations, governance, and adoption."],
  ["Can we implement a CRM ourselves?", "A small team with a simple process sometimes can. External help becomes more valuable when data sits across several places, teams need different access, tools must connect, or leaders need reliable reporting."],
  ["How long does an implementation take?", "It depends on process complexity, data condition, integrations, decision speed, and the number of teams involved. A focused rollout should be scoped differently from a company-wide transformation; discovery makes that visible."],
  ["Which CRM should we choose?", "Choose after defining your process, users, must-have integrations, reporting needs, governance, and budget. A shortlist should be scored against those requirements rather than brand familiarity alone."],
  ["Should all our historical data be migrated?", "Usually not. Move data that has operational, customer, legal, or reporting value. Archive what must be retained, and leave behind duplicates, obsolete fields, and records nobody trusts."],
  ["What happens after go-live?", "The team needs support, managers need usage visibility, and the system needs refinement. Early feedback reveals confusing fields and missed exceptions; ongoing reviews keep the CRM useful as the business changes."],
];

function SectionHeading({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-lg leading-relaxed text-ink/65">{copy}</p> : null}
    </div>
  );
}

function CrmImplementationPage() {
  return (
    <main id="top">
        <section className="reveal relative isolate mx-auto grid min-h-[58vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/20 px-5 pb-20 pt-10 text-center sm:px-6 lg:min-h-[520px] lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute -left-[18%] -top-[38%] h-[72%] w-[58%] rotate-12 rounded-[40%] bg-brand/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-[16%] -top-[28%] h-[70%] w-[55%] -rotate-12 rounded-[42%] bg-grape/15 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-[42%] left-[12%] h-[70%] w-[76%] rounded-[48%] bg-mint/30 blur-3xl" />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
            <h1 className="w-full max-w-6xl font-display text-[2.05rem] font-bold leading-[0.96] min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
              <span className="block">What is CRM</span>
              <span className="block"><span className="text-brand">implementation,</span> <span className="text-grape">exactly?</span></span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">A detailed, visual guide to turning empty CRM software into a sales system your people trust, use, and improve.</p>
            <a href="#definition" className="mt-8 inline-flex items-center gap-2 font-bold text-ink/70 transition-colors hover:text-brand">Start with the basics <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <nav aria-label="On this page" className="mx-auto max-w-6xl px-5 pt-10 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Definition", "Lifecycle", "Data flow", "Ownership", "Readiness", "Measures", "FAQ"].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(" ", "-")}`} className="shrink-0 rounded-full border border-ink/10 bg-background px-4 py-2 text-sm font-bold text-ink/65 transition-colors hover:border-brand hover:text-brand">{label}</a>
            ))}
          </div>
        </nav>

        <section id="definition" className="reveal scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">From empty software to a working system.</h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
                  <p>A CRM is a place to organise customer relationships. On the day you buy it, however, it knows nothing about your customers, your sales stages, or who should do what next.</p>
                  <p><strong className="text-ink">CRM implementation</strong> is the structured work that makes the software fit your business: agreeing how work should flow, configuring the system, cleaning and moving data, connecting tools, training people, and creating ownership.</p>
                  <p>Its output is not simply a configured account. It is a shared way for marketing, sales, service, and leadership to understand the customer and act with context.</p>
                </div>
              </div>

              <figure aria-labelledby="software-system-title" className="rounded-[2.5rem] border-2 border-ink/10 bg-background p-5 shadow-sm sm:p-8">
                <figcaption id="software-system-title" className="font-display text-xl font-bold">Software becomes useful when four parts work together</figcaption>
                <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-3xl border-2 border-ink/10 bg-cream p-6 text-center">
                    <Settings2 className="mx-auto text-grape" size={32} aria-hidden="true" />
                    <p className="mt-3 font-display text-xl font-bold">CRM software</p>
                    <p className="mt-2 text-sm text-ink/60">Features, screens, and licences</p>
                  </div>
                  <div className="flex justify-center text-brand sm:rotate-0"><ArrowRight className="hidden sm:block" aria-hidden="true" /><ArrowDown className="sm:hidden" aria-hidden="true" /></div>
                  <div className="rounded-3xl bg-ink p-6 text-center text-cream">
                    <Target className="mx-auto text-sun" size={32} aria-hidden="true" />
                    <p className="mt-3 font-display text-xl font-bold">Working CRM</p>
                    <p className="mt-2 text-sm text-cream/65">Clear action and trusted visibility</p>
                  </div>
                </div>
                <div className="my-5 flex justify-center"><ArrowDown className="text-ink/35" aria-hidden="true" /></div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[{ label: "Process", tone: "bg-sun" }, { label: "People", tone: "bg-mint" }, { label: "Data", tone: "bg-brand text-cream" }, { label: "Technology", tone: "bg-grape text-cream" }].map((item) => (
                    <div key={item.label} className={`rounded-2xl p-4 text-center font-bold ${item.tone}`}>{item.label}</div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink/55">Implementation aligns all four layers. Configuring software alone addresses only one.</p>
              </figure>
            </div>
          </div>
        </section>

        <section className="reveal border-y-2 border-ink/10 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <SectionHeading title="Six pieces of a real implementation." copy="Each workstream answers a practical question your team will face. Skipping one usually creates friction somewhere else." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pieces.map(({ icon: Icon, tone, title, question, copy }) => (
                <article key={title} className="group rounded-[2.5rem] border-2 border-ink/5 bg-cream p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`grid size-16 place-items-center rounded-2xl border border-ink/5 ${tone}`}><Icon size={26} aria-hidden="true" /></div>
                  <p className="mt-6 text-sm font-bold text-brand">{question}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lifecycle" className="reveal scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <SectionHeading title="Implementation is a loop, not a one-time installation." copy="A useful CRM moves through five connected phases. Improvement feeds new learning back into discovery as the business changes." />
            <figure aria-labelledby="lifecycle-title" className="mt-12">
              <figcaption id="lifecycle-title" className="sr-only">Five-phase CRM implementation lifecycle</figcaption>
              <div className="grid gap-3 lg:grid-cols-5">
                {phases.map((phase, index) => (
                  <div key={phase.title} className="relative flex lg:block">
                    <article className="w-full rounded-[2rem] border-2 border-ink/10 bg-background p-6">
                      <div className={`grid size-12 place-items-center rounded-2xl font-display text-sm font-bold ${phase.tone}`}>{phase.number}</div>
                      <h3 className="mt-5 font-display text-2xl font-bold">{phase.title}</h3>
                      <p className="mt-2 min-h-12 text-sm leading-relaxed text-ink/60">{phase.summary}</p>
                      <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                        {phase.outputs.map((output) => <li key={output} className="flex gap-2 text-sm text-ink/70"><Check size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{output}</li>)}
                      </ul>
                    </article>
                    {index < phases.length - 1 ? <div aria-hidden="true" className="grid shrink-0 place-items-center px-1 text-ink/30 lg:absolute lg:-right-4 lg:top-8 lg:z-10 lg:px-0"><ArrowDown className="lg:hidden" size={18} /><ArrowRight className="hidden lg:block" size={18} /></div> : null}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/20 px-4 py-3 text-sm font-bold text-ink/55"><span className="text-grape">Improve</span><ArrowRight size={16} aria-hidden="true" /><span className="text-brand">new learning</span><ArrowRight size={16} aria-hidden="true" /><span>Discover again</span></div>
            </figure>
          </div>
        </section>

        <section id="data-flow" className="reveal scroll-mt-8 bg-ink py-20 text-cream sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="max-w-3xl"><h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">One customer story, from first enquiry to business decision.</h2><p className="mt-5 text-lg leading-relaxed text-cream/65">Implementation defines how information enters, gets organised, triggers action, and becomes useful visibility.</p></div>
            <figure aria-labelledby="data-flow-title" className="mt-12 rounded-[2.5rem] border-2 border-cream/10 bg-cream/5 p-5 sm:p-8">
              <figcaption id="data-flow-title" className="sr-only">Customer data flow through a CRM</figcaption>
              <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase text-mint">Lead sources</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[{ icon: Globe2, label: "Website" }, { icon: MessageCircle, label: "WhatsApp" }, { icon: Mail, label: "Email" }, { icon: FileSpreadsheet, label: "Imports" }].map(({ icon: Icon, label }) => <div key={label} className="rounded-2xl border border-cream/10 bg-cream/5 p-4 text-center"><Icon className="mx-auto text-sun" size={22} aria-hidden="true" /><p className="mt-2 text-sm font-bold">{label}</p></div>)}
                  </div>
                </div>
                <ArrowDown className="mx-auto text-brand lg:hidden" aria-hidden="true" /><ArrowRight className="hidden text-brand lg:block" aria-hidden="true" />
                <div className="rounded-[2rem] bg-cream p-7 text-center text-ink shadow-tactile">
                  <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand text-cream"><Database size={28} aria-hidden="true" /></div>
                  <h3 className="mt-4 font-display text-2xl font-bold">The CRM record</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">Identity, source, conversations, needs, activities, deal stage, owner, and next step.</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-bold"><span className="rounded-full bg-sun px-3 py-1.5">Clean</span><span className="rounded-full bg-mint px-3 py-1.5">Connected</span><span className="rounded-full bg-grape px-3 py-1.5 text-cream">Owned</span></div>
                </div>
                <ArrowDown className="mx-auto text-brand lg:hidden" aria-hidden="true" /><ArrowRight className="hidden text-brand lg:block" aria-hidden="true" />
                <div>
                  <p className="mb-3 text-xs font-bold uppercase text-mint">Useful outcomes</p>
                  <div className="space-y-3">
                    {["Sales gets context and the next action", "Service sees promises already made", "Managers see pipeline health", "Leaders see reliable trends"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-mint text-xs font-bold text-ink">{index + 1}</span><p className="text-sm font-semibold">{item}</p></div>)}
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="reveal py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <SectionHeading title="A better workflow removes chasing, copying, and guessing." copy="The clearest sign of a successful implementation is not a beautiful dashboard. It is a calmer, more consistent working day." />
            <figure aria-labelledby="before-after-title" className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <figcaption id="before-after-title" className="sr-only">Before and after CRM implementation workflow</figcaption>
              <div className="rounded-[2.5rem] border-2 border-brand/25 bg-brand/10 p-7 sm:p-9">
                <p className="text-sm font-bold uppercase text-brand">Before</p><h3 className="mt-2 font-display text-3xl font-bold">Work follows people.</h3>
                <div className="mt-7 space-y-3">{["Lead arrives in a personal inbox", "Context is copied into a spreadsheet", "Follow-up depends on memory", "Manager asks for manual updates", "Reports disagree across teams"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-background/70 p-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand font-bold text-cream">{index + 1}</span><p className="font-semibold">{item}</p></div>)}</div>
              </div>
              <div className="grid place-items-center text-grape"><ArrowDown className="lg:hidden" size={28} /><ArrowRight className="hidden lg:block" size={28} /></div>
              <div className="rounded-[2.5rem] border-2 border-mint/50 bg-mint/25 p-7 sm:p-9">
                <p className="text-sm font-bold uppercase text-ink/55">After</p><h3 className="mt-2 font-display text-3xl font-bold">The system supports people.</h3>
                <div className="mt-7 space-y-3">{["Lead is captured with source and owner", "Conversation stays on one record", "Next task is visible and prompted", "Manager reads a live pipeline view", "Teams use shared definitions"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-background/70 p-4"><CheckCircle2 className="shrink-0 text-grape" size={26} aria-hidden="true" /><p className="font-semibold">{item}</p></div>)}</div>
              </div>
            </figure>
          </div>
        </section>

        <section id="ownership" className="reveal scroll-mt-8 border-y-2 border-ink/10 bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <SectionHeading title="A CRM is shared work, not an IT hand-off." copy="Technology may be configured by specialists, but business leaders and users must shape decisions, validate reality, and reinforce the new way of working." />
            <figure aria-labelledby="ownership-title" className="mt-12 overflow-hidden rounded-[2rem] border-2 border-ink/10">
              <figcaption id="ownership-title" className="sr-only">Responsibility map for a CRM implementation</figcaption>
              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] bg-ink px-5 py-4 text-sm font-bold text-cream"><span>Work area</span><span>Leadership</span><span>Sales team</span><span>CRM owner / Ops</span><span>Implementation partner</span></div>
                  {responsibilityRows.map((row, index) => <div key={row.area} className={`grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-2 px-5 py-4 text-sm ${index % 2 === 0 ? "bg-cream" : "bg-background"}`}><strong>{row.area}</strong>{[row.leadership, row.sales, row.ops, row.partner].map((value, valueIndex) => <span key={`${row.area}-${valueIndex}`} className={`w-fit rounded-full px-3 py-1.5 font-bold ${value === "Own" || value === "Co-own" ? "bg-brand text-cream" : value === "Approve" || value === "Sponsor" ? "bg-grape text-cream" : value === "Participate" || value === "Validate" || value === "Test" ? "bg-mint" : "bg-sun/60"}`}>{value}</span>)}</div>)}
                </div>
              </div>
            </figure>
            <p className="mt-4 text-sm text-ink/55">Titles vary by company. What matters is that every decision and ongoing routine has a named owner.</p>
          </div>
        </section>

        <section className="reveal relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <div className="max-w-3xl"><h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Why CRM implementations fail.</h2><p className="mt-5 text-lg leading-relaxed text-cream/65">Failure rarely begins with a missing feature. It begins when the surrounding decisions, data, and habits are treated as secondary.</p></div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">{failureReasons.map((reason, index) => <article key={reason.title} className="rounded-[2rem] border-2 border-cream/10 bg-cream/5 p-8"><span className="font-display text-4xl font-bold text-cream/25">0{index + 1}</span><h3 className="mt-4 font-display text-2xl font-bold">{reason.title}</h3><p className="mt-3 leading-relaxed text-cream/65">{reason.copy}</p></article>)}</div>
          </div>
        </section>

        <section id="readiness" className="reveal scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div><h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Are you ready to implement?</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">You do not need perfect processes or clean data before starting, that is part of the work. You do need access, attention, and the authority to make decisions.</p></div>
            <div className="grid gap-4">{readiness.map((item, index) => <div key={item} className="flex items-start gap-4 rounded-[1.75rem] border-2 border-ink/5 bg-background p-5 shadow-sm"><span className={`grid size-9 shrink-0 place-items-center rounded-full font-bold ${index % 3 === 0 ? "bg-sun" : index % 3 === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{index + 1}</span><p className="pt-1 font-semibold leading-relaxed">{item}</p></div>)}</div>
          </div>
        </section>

        <section id="measures" className="reveal scroll-mt-8 rounded-[3.5rem] bg-mint py-20 sm:rounded-[6rem] sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="max-w-3xl"><h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Measure the system from four angles.</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">A CRM can be busy without being useful. Combine behaviour, data, process, and business measures to understand whether it is improving work.</p></div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{measures.map(({ label, metric, icon: Icon, tone }) => <article key={label} className="rounded-[2rem] border-2 border-ink/10 bg-cream/45 p-6"><div className={`grid size-12 place-items-center rounded-2xl ${tone}`}><Icon size={22} aria-hidden="true" /></div><h3 className="mt-5 font-display text-xl font-bold">{label}</h3><p className="mt-2 text-sm leading-relaxed text-ink/65">{metric}</p></article>)}</div>
            <div className="mt-8 rounded-[2rem] bg-ink p-6 text-cream sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8"><p className="font-display text-2xl font-bold">The best dashboard answers a decision.</p><p className="mt-3 max-w-xl text-cream/65 sm:mt-0">Define who will use each measure, what they will do when it changes, and how often it will be reviewed.</p></div>
          </div>
        </section>

        <section id="faq" className="reveal scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <div className="text-center"><h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Before an implementation begins.</h2></div>
            <div className="mt-12 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-[1.75rem] border-2 border-ink/5 bg-background p-6 shadow-sm open:bg-cream sm:p-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold sm:text-xl">{question}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-mint transition-transform group-open:rotate-45"><span aria-hidden="true" className="relative block size-3"><span className="absolute left-1/2 top-0 h-3 w-0.5 -translate-x-1/2 bg-ink" /><span className="absolute left-0 top-1/2 h-0.5 w-3 -translate-y-1/2 bg-ink" /></span></span></summary><p className="mt-4 leading-relaxed text-ink/65">{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-14 text-center text-cream sm:rounded-[3rem] sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
            <h2 className="relative mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">Let's implement it right.</h2><p className="relative mx-auto mt-4 max-w-lg text-lg text-cream/70">Tell us where your CRM journey stands today. We'll map a clear implementation path for your team.</p>
            <a href="mailto:info@revlyn.io?subject=CRM consultation" className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-9 py-4 text-lg font-bold text-ink shadow-[0_8px_0_0_var(--ink)] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_0_var(--ink)]">Start a conversation <ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className="relative mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"><Link to="/" className="text-sm font-bold text-cream/60 transition-colors hover:text-sun">Back to home</Link><Link to="/approach" className="inline-flex items-center gap-1.5 text-sm font-bold text-cream/60 transition-colors hover:text-sun">See how we work <Check size={15} aria-hidden="true" /></Link></div>
          </div>
        </section>
    </main>
  );
}
