import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X } from "lucide-react";
import { ConnectedSystem, DisconnectedFlow } from "../../components/diagrams/RevenueFlow";

function RevOpsMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="12" y="2.5" width="8" height="8" rx="2" />
      <rect x="2.5" y="21.5" width="8" height="8" rx="2" />
      <rect x="21.5" y="21.5" width="8" height="8" rx="2" />
      <path d="M16 10.5v4" />
      <path d="M6.5 21.5v-5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v5" />
    </svg>
  );
}

export const Route = createFileRoute("/revops/")({ head: () => ({ meta: [
  { title: "Revenue Operations for Growing Teams | Revlyn" },
  { name: "description", content: "Revenue operations connects marketing, sales, and service into one system: shared process, shared data, and numbers every team agrees on." },
  { property: "og:url", content: "https://revlyn.io/revops" }, { property: "og:title", content: "Revenue Operations for Growing Teams | Revlyn" },
  { property: "og:description", content: "One connected operation behind your revenue: shared process, shared data, and numbers every team agrees on." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    { "script:ld+json": breadcrumbSchema([{ name: "Revenue Operations for Growing Teams", path: "/revops" }]) },
    { "script:ld+json": serviceSchema({ name: "Revenue Operations for Growing Teams", description: "Revenue operations connects marketing, sales, and service into one system: shared process, shared data, and numbers every team agrees on.", path: "/revops" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops" }] }), component: RevOpsPage });

const disconnects = [
  { title: "Leads lost between teams", copy: "Marketing collects enquiries, sales chases them, and somewhere in the handoff the interested buyer becomes nobody's responsibility." },
  { title: "Deals that stall silently", copy: "A deal sits in the same stage for six weeks and nobody notices, because no one owns the question of what should happen next." },
  { title: "Service never hears the promise", copy: "Sales promised a delivery date on WhatsApp. The service team finds out when the customer calls, already upset." },
  { title: "Numbers that differ by team", copy: "The sales head counts one pipeline, marketing counts another, and the owner stops trusting either. Every meeting starts with whose number is right." },
  { title: "Tools that multiply, nothing connects", copy: "A CRM, two spreadsheets, a WhatsApp inbox, and an accounting app. Each works alone. Together they cost more time than they save." },
  { title: "Decisions from gut feel", copy: "Where to spend next quarter's budget, which product line is dying, who needs hiring. The answers exist inside the business, but scattered across systems nobody reads together." },
];

const workstreams = [
  { title: "Process", tone: "bg-sun", copy: "How work moves from first enquiry to closed deal to repeat customer. Written down, with stages, owners, and what happens at every handoff." },
  { title: "Data", tone: "bg-mint", copy: "One record per customer, agreed field definitions, and rules that keep the data clean. The foundation every report and automation stands on." },
  { title: "Technology", tone: "bg-brand text-cream", copy: "The fewest tools that support the process, connected so information flows once instead of being re-entered in three places." },
  { title: "People and reviews", tone: "bg-grape text-cream", copy: "Roles people understand, dashboards a named meeting actually uses, and a rhythm where numbers change decisions." },
];

const services = [
  { title: "Revenue process audit", tone: "bg-sun", href: "/revops/audit", copy: "We trace one customer journey end to end and map exactly where leads, deals, and information leak between your teams. You get the leaks drawn plainly, in your own process." },
  { title: "Pipeline and lifecycle design", tone: "bg-mint", href: "/revops/pipeline", copy: "Agreed stages, definitions, and handoff rules across marketing, sales, and service, so a deal means the same thing in every room." },
  { title: "CRM and data architecture", tone: "bg-brand text-cream", href: "/revops/data-architecture", copy: "One record per customer, field definitions your whole team shares, and dedupe and hygiene rules that keep the foundation clean." },
  { title: "Marketing to sales alignment", tone: "bg-grape text-cream", href: "/revops/alignment", copy: "Lead scoring, routing, and follow-up expectations, so an enquiry gets owned within minutes instead of sitting in an inbox for days." },
  { title: "Sales to service handoff", tone: "bg-sun", href: "/revops/handoff", copy: "What was promised on the call actually reaches the team that delivers it, with the details and dates attached." },
  { title: "Revenue reporting and forecasting", tone: "bg-mint", href: "/revops/reporting", copy: "Shared dashboards and a weekly and monthly review rhythm, so every team argues from the same numbers." },
  { title: "Tech stack consolidation", tone: "bg-brand text-cream", href: "/revops/stack", copy: "Choosing and connecting the fewest tools that support the process, and retiring the spreadsheets and side apps that duplicate them." },
  { title: "Ongoing RevOps retainer", tone: "bg-grape text-cream", href: "/revops/retainer", copy: "A fractional operator who keeps the rhythm running after the build: the reviews, the definitions check, the quarterly process questions." },
];

const rules = [
  { n: "1", label: "Process before tools", tone: "bg-sun", copy: "No tool fixes a process nobody has defined. We map how work should move first, then choose and configure the technology to support it." },
  { n: "2", label: "One source of truth", tone: "bg-mint", copy: "Every team works from the same customer record and the same definitions. If a number is disputed, we fix the definition, not the meeting." },
  { n: "3", label: "Every handoff has an owner", tone: "bg-brand text-cream", copy: "Marketing to sales, sales to service, service back to sales. Each handoff names who receives the work and what they receive it with." },
  { n: "4", label: "A review rhythm", tone: "bg-grape text-cream", copy: "Revenue operations live in the weekly and monthly meetings where the numbers are actually looked at. We help set that rhythm, not just the dashboards." },
];

const honest = [
  ["When RevOps fits", "You have real volume across more than one team, and the seams between them cost you money: lost leads, slow handoffs, unreliable numbers. The business is big enough for the connections to matter."],
  ["What RevOps is not", "It is not a tool you buy, a dashboard you install, or a document nobody reads. It is the ongoing discipline of running marketing, sales, and service as one operation."],
  ["When to wait", "If your team is small and the whole pipeline fits in one person's head, a full RevOps programme is premature. Start with a CRM done properly, and let the operations work grow with you."],
];

const mistakes = [
  { title: "Buying tools before process", copy: "The latest platform is purchased and the old mess is carried into it, one team at a time. We define the process first, because software amplifies whatever it is given." },
  { title: "Two teams, two truths", copy: "Marketing optimises its numbers, sales optimises theirs, and the company optimises neither. Fixed by shared definitions and one pipeline everyone reports from." },
  { title: "Automating a broken process", copy: "Automation applied to a fuzzy process just produces mistakes faster. We clean the steps before automating them, so the machine runs on something worth repeating." },
  { title: "Ops becomes admin work", copy: "RevOps handed to whoever has spare time, and it slowly becomes data entry and report pulling. It needs ownership, a mandate, and a seat where decisions happen." },
];

const approach = [
  { title: "Assess", copy: "We trace one customer journey end to end, from first enquiry to repeat business, and note where information stops, waits, or dies. You see the leaks in your own process, drawn plainly." },
  { title: "Align", copy: "The people who own each stage agree on the stages, the definitions, and the handoffs. This conversation is the hardest part of RevOps, and we facilitate it rather than dictate it." },
  { title: "Design", copy: "One connected plan covering process, data, tools, and reporting, sequenced so the first improvements land within weeks, not quarters." },
  { title: "Run", copy: "The rhythm takes over: weekly reviews, monthly definitions check, quarterly process questions. We hand over the operating system, not a dependence on us." },
];

const faqs = [
  { q: "Is RevOps only for large companies?", a: "The name comes from larger companies, but the problem it solves starts early. If you have a marketing person, a sales team, and service requests, the connections between them already matter. We right-size the work to your stage rather than importing a big-company programme." },
  { q: "We just want a CRM. Is RevOps separate?", a: "Most of our CRM projects are RevOps work without the label: defining the process, structuring the data, connecting the tools, and setting the reporting rhythm. RevOps becomes its own conversation when the CRM is working and the seams between teams are still leaking." },
  { q: "Do we need HubSpot for this?", a: "No. The thinking applies to any CRM or toolset. That said, when a team is choosing or reworking its stack, HubSpot is often the strongest single home for marketing, sales, and service data, and we are a HubSpot Gold Partner. The first call settles what fits your case." },
  { q: "Who inside our company should own RevOps?", a: "Ideally one named person with visibility across sales, marketing, and service, and the owner's backing. In smaller teams that is often the founder or a senior manager. We help set the role up, then support it rather than replace it." },
  { q: "How is this different from what you do on the HubSpot pages?", a: "The HubSpot services are focused engagements: onboarding, migration, automation, integrations, reporting, training. Revenue operations is the wider view that decides which of those to do, in what order, and how they hold together. It is the map, not another destination." },
];

function RevOpsPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-brand/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-mint/40 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <span className="inline-flex size-16 place-items-center rounded-[1.25rem] bg-ink text-sun shadow-tactile-ink animate-rise-in"><RevOpsMark size={30} /></span>
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>Your revenue,<br/>run as <span className="text-brand">one</span> <span className="text-grape">operation.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>Revenue operations connects your marketing, sales, and service work into one system: shared process, shared data, and numbers every team agrees on.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss RevOps <ArrowUpRight size={19} /></Link>
        <a href="#covers" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See what it covers</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where the money leaks today.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">In most growing businesses, the losses are not dramatic. They are quiet gaps between teams that each work hard on their own piece.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {disconnects.map((d) => <article key={d.title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{d.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{d.copy}</p></article>)}
    </div>
    <div className="mt-14 overflow-hidden rounded-[2.5rem] border-2 border-ink/10 bg-background p-5 shadow-sm sm:p-9">
      <p className="text-center text-sm font-bold text-ink/50">Three teams, three systems, and the gaps in between.</p>
      <DisconnectedFlow className="mx-auto mt-5 w-full max-w-4xl" />
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ink/55">Every arrow that stops is a handoff nobody owns. The customer only feels the gap.</p>
    </div>
  </div></section>

  <section id="covers" className="reveal scroll-mt-8 border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One operation, four workstreams.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Revenue operations is not a department. It is the shared layer underneath every team that touches a customer.</p>
    <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
      <div className="overflow-hidden rounded-[2.5rem] border-2 border-ink/10 bg-background p-5 shadow-sm sm:p-8">
        <ConnectedSystem className="w-full" />
      </div>
      <div className="rounded-[2.5rem] bg-background p-7 shadow-sm sm:p-8">
        <p className="text-2xl font-bold leading-snug">Four teams, one record, zero gaps.</p>
        <p className="mt-4 leading-relaxed text-ink/65">When every team reads and writes to the same customer record, a handoff becomes a handover: the next team starts where the last one finished, with the context attached.</p>
      </div>
    </div>
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {["Marketing brings the demand", "Sales converts it", "Service keeps it"].map((stage, i) => <div key={stage} className="relative rounded-[1.75rem] bg-background p-6 text-center">
        <span className={`mx-auto grid size-9 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-mint" : i === 1 ? "bg-sun" : "bg-brand text-cream"}`}>{i + 1}</span>
        <p className="mt-4 font-bold">{stage}</p>
      </div>)}
    </div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {workstreams.map((w) => <div key={w.title} className="rounded-[1.75rem] border-2 border-ink/5 bg-background p-6">
        <span className={`inline-block rounded-xl px-4 py-2 text-sm font-bold ${w.tone}`}>{w.title}</span>
        <p className="mt-4 text-sm leading-relaxed text-ink/65">{w.copy}</p>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">RevOps services we offer.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Each is a concrete engagement with a clear deliverable. Most businesses need two or three, not all eight, and the first call settles which ones.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => <article key={s.title} className="flex flex-col rounded-[2.5rem] bg-background p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">
        <span className={`inline-block h-2.5 w-10 rounded-full ${s.tone}`} />
        <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.copy}</p>
        {"href" in s && s.href ? <Link to={s.href} className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-brand">Explore this service <ArrowUpRight size={15} /></Link> : null}
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-background py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Four rules behind the operation.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">RevOps fails in predictable ways. These rules are how the system stays connected long after we are gone.</p>
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
        <RevOpsMark className="text-sun" size={36} />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">An honest word about RevOps.</h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">The term gets used to sell a lot of things. Here is how we sort what it is, when it fits, and when it does not.</p>
      </div>
      <div className="space-y-4">
        {honest.map(([label, copy], i) => <div key={label} className="flex gap-4 rounded-[1.75rem] bg-cream/5 p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="font-bold">{label}</h3><p className="mt-1 leading-relaxed text-cream/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where RevOps goes wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four patterns behind operations programmes that quietly die, and the reason our rules exist.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {mistakes.map((m) => <article key={m.title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1"><div className="grid size-12 place-items-center rounded-full bg-grape/15 text-grape"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">How we build it with you.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Four steps, each producing something your team can see and react to. We do not start with a forty-page strategy deck.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10 lg:left-0 lg:top-6 lg:h-1 lg:w-full" />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {approach.map((a, i) => <div key={a.title} className="relative pl-16 lg:pl-0 lg:pt-16">
          <span className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full font-bold text-ink ${i % 2 ? "bg-mint" : "bg-sun"}`}>{i + 1}</span>
          <h3 className="text-2xl font-bold">{a.title}</h3>
          <p className="mt-3 leading-relaxed text-ink/65">{a.copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Common questions.</h2>
    <div className="mt-12 space-y-4">
      {faqs.map((f) => <details key={f.q} className="group rounded-[2rem] bg-background p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-mint transition-transform group-open:rotate-45"><ArrowUpRight size={16} /></span></summary><p className="mt-4 leading-relaxed text-ink/65">{f.a}</p></details>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 py-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One operation, starting with one call.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us where the handoffs hurt most today. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
