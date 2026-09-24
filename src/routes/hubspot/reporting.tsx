import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, BarChart3, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/reporting")({ head: () => ({ meta: [
  { title: "HubSpot Reporting and Dashboards | Revlyn" },
  { name: "description", content: "HubSpot dashboards built around the questions your leadership actually asks: pipeline health, activity, deal ageing, lead sources, and data quality." },
  { property: "og:url", content: "https://revlyn.io/hubspot/reporting" }, { property: "og:title", content: "HubSpot Reporting and Dashboards | Revlyn" },
  { property: "og:description", content: "Pipeline health, activity, ageing, and data-quality dashboards that answer the questions your leadership asks every week." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot Reporting and Dashboards", path: "/hubspot/reporting" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Reporting and Dashboards", description: "HubSpot dashboards built around the questions your leadership actually asks: pipeline health, activity, deal ageing, lead sources, and data quality.", path: "/hubspot/reporting" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/reporting" }] }), component: HubSpotReportingPage });

const dashboards = [
  { title: "Pipeline health", copy: "How much is in the pipeline, how it is moving between stages, and whether the value of what you are chasing is growing or quietly draining away." },
  { title: "Deal ageing", copy: "Which deals have been sitting in a stage for too long. Ageing is usually the single most useful report a growing sales team has never had before." },
  { title: "Activity and effort", copy: "Calls made, follow-ups sent, meetings held, per person and per team. Not to police people, but to see where effort is going and where it is missing." },
  { title: "Lead source performance", copy: "Which sources actually produce customers, not just leads. Marketplaces, ads, referrals, and website enquiries compared on what matters: closed revenue." },
  { title: "Forecast and conversion", copy: "Stage-to-stage conversion rates and an honest view of what is likely to close this month, so planning stops being a Sunday-night guess." },
  { title: "Data quality", copy: "Missing owners, duplicate contacts, deals without values, stale records. The unglamorous report that keeps every other report trustworthy." },
];

const rules = [
  { n: "1", label: "Start with questions, not charts", tone: "bg-sun", copy: "Every dashboard we build begins with the questions your leadership asks on Monday morning. If a chart answers no question anyone asks, it does not get built." },
  { n: "2", label: "Agreed definitions", tone: "bg-mint", copy: "What counts as a qualified lead, when does a deal count as stalled, whose number is it. We write the definitions down first, so nobody argues about the numbers later." },
  { n: "3", label: "Few reports, actually opened", tone: "bg-brand text-cream", copy: "One dashboard per audience beats ten dashboards per mood. Sales sees theirs, leadership sees theirs, and each one fits on a screen without scrolling forever." },
  { n: "4", label: "A review rhythm", tone: "bg-grape text-cream", copy: "Numbers only change behaviour when someone looks at them on a schedule. We help you set the weekly or monthly ritual where the dashboard actually gets used." },
];

const honest = [
  ["Reports we build first", "The handful that answer your most-asked questions: pipeline, ageing, activity, sources. Usually live within the first weeks of working together."],
  ["Reports that come later", "Deeper views like cohort conversion or rep-level coaching reports, built once the basics are trusted and your data has settled in."],
  ["Reports we will talk you out of", "Some things HubSpot cannot honestly measure yet, or numbers your process is not mature enough to produce. We say so instead of building a chart full of fiction."],
];

const mistakes = [
  { title: "Dashboards nobody opens", copy: "Thirty charts built because they were possible, and a team that still runs the business from WhatsApp. We build for a named audience and a named meeting, or not at all." },
  { title: "Vanity metrics", copy: "Leads added and calls made, without conversion or revenue next to them. Effort numbers feel good and decide nothing. Every report we build ties back to outcomes." },
  { title: "Numbers that argue", copy: "The sales head's count differs from the marketing head's count because each pulls reports differently. Fixed by agreed definitions and one source, not by another meeting." },
  { title: "Reporting on bad data", copy: "Beautiful dashboards over deals without values, contacts without owners, and stages used inconsistently. We check data quality first, because a chart cannot fix what was never entered." },
];

const faqs = [
  { q: "What dashboards should we start with?", a: "Usually the same three: pipeline health, deal ageing, and lead source performance. They answer the questions leadership asks weekly and they expose where your process needs attention. We start there and add only when a real question demands it." },
  { q: "Can HubSpot build reports specific to our process?", a: "Yes. HubSpot's custom report builder handles deals, contacts, activities, and combinations of them, filtered by whatever properties your process uses. Where a report genuinely cannot be built, we will tell you that plainly and suggest the closest honest alternative." },
  { q: "Our team does not fill in HubSpot properly. Will reports still work?", a: "Reports are only as honest as the data behind them, which is why we always check data quality and team habits first. Often the reporting conversation is what finally makes the team care about clean entry, because they see their own numbers appear." },
  { q: "Can our leadership see dashboards without logging into HubSpot?", a: "Yes, in several ways: shared dashboard access with limited permissions, scheduled email digests of key reports, or exports for board packs. On the first call we look at how your leadership actually consumes numbers and set that up." },
  { q: "Is this part of onboarding or a separate project?", a: "Both are common. Reporting is usually included in an onboarding at the level of core dashboards, and teams already on HubSpot often bring us in for reporting as a focused standalone project. The first call makes the scope clear either way." },
];

function HubSpotReportingPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-sun/25 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>Your pipeline,<br/><span className="text-brand">finally</span> <span className="text-grape">visible.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>HubSpot dashboards built around the questions your leadership actually asks every week, over data your team actually maintains.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss reporting <ArrowUpRight size={19} /></Link>
        <a href="#dashboards" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See the dashboards</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">The reports that earn their place.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">For most growing businesses, these six views answer almost every question leadership asks. Everything else is negotiable.</p>
    <div id="dashboards" className="mt-12 grid scroll-mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dashboards.map((d) => <article key={d.title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-16 place-items-center rounded-2xl bg-mint"><BarChart3 size={26} /></div><h3 className="mt-6 text-2xl font-bold">{d.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{d.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Four rules behind every report.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Reporting fails in predictable ways. These rules are how the numbers stay trusted long after we are gone.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10 lg:left-0 lg:top-6 lg:h-1 lg:w-full" />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {rules.map((r) => <div key={r.n} className="relative pl-16 lg:pl-0 lg:pt-16">
          <span className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full font-bold text-ink ${r.tone}`}>{r.n}</span>
          <h3 className="text-2xl font-bold">{r.label}</h3>
          <p className="mt-3 leading-relaxed text-ink/65">{r.copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-6 rounded-[3rem] bg-ink p-10 text-cream sm:p-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div>
        <BarChart3 className="text-sun" size={36} />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">An honest word about numbers.</h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">Not every metric is ready to be measured, and we will never build a chart just because a dashboard looks empty. Here is how we sort it.</p>
      </div>
      <div className="space-y-4">
        {honest.map(([label, copy], i) => <div key={label} className="flex gap-4 rounded-[1.75rem] bg-cream/5 p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="font-bold">{label}</h3><p className="mt-1 leading-relaxed text-cream/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where reporting goes wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four patterns behind dashboards that quietly die, and the reason our rules exist.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {mistakes.map((m) => <article key={m.title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1"><div className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Common questions.</h2>
    <div className="mt-12 space-y-4">
      {faqs.map((f) => <details key={f.q} className="group rounded-[2rem] bg-background p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-mint transition-transform group-open:rotate-45"><ArrowUpRight size={16} /></span></summary><p className="mt-4 leading-relaxed text-ink/65">{f.a}</p></details>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <HubSpotBadge dark />
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Run the week on real numbers.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us the questions you keep asking your team by hand. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
