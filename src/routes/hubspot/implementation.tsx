import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, Check, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/implementation")({ head: () => ({ meta: [
  { title: "HubSpot Implementation Services | Revlyn" },
  { name: "description", content: "HubSpot implementation for growing revenue teams: process architecture, data, automation, integrations, reporting, and adoption, built in stages you review before anything goes live." },
  { property: "og:url", content: "https://revlyn.io/hubspot/implementation" }, { property: "og:title", content: "HubSpot Implementation Services | Revlyn" },
  { property: "og:description", content: "We implement HubSpot as the system your revenue runs on: process first, configuration second, every team on the same truth." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot Implementation Services", path: "/hubspot/implementation" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Implementation Services", description: "HubSpot implementation for growing revenue teams: process architecture, data, automation, integrations, reporting, and adoption, built in stages you review before anything goes live.", path: "/hubspot/implementation" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/implementation" }] }), component: HubSpotImplementationPage });

const audiences = [
  { title: "Teams that outgrew defaults", tone: "bg-sun", copy: "HubSpot was switched on with the standard pipeline and a handful of fields. It worked at ten deals a month. Now the process has layers, the data is inconsistent, and the defaults are in the way." },
  { title: "Companies splitting one job three ways", tone: "bg-mint", copy: "Marketing, sales, and service each run their own version of the customer. Handoffs happen in chat, definitions differ, and nobody can follow a lead from first touch to closed and served." },
  { title: "Businesses leaving a legacy CRM", tone: "bg-brand text-cream", copy: "The old system holds years of records and nobody trusts half of them. You need the move into HubSpot done properly: mapped, cleaned, tested, and cut over without losing the history that matters." },
  { title: "Portals bought but half-used", tone: "bg-grape text-cream", copy: "The licences exist, a pipeline or two runs, but the wider business never adopted the portal. You need a real implementation, not another patch on top of a hesitant start." },
];

const coverage = [
  { name: "Process and pipeline architecture", tone: "bg-sun", copy: "We map how revenue actually moves through your business, then design pipelines, stages, and definitions around it. Lead sources, qualification, handoffs, and ownership are agreed in writing before a single setting is touched." },
  { name: "The data foundation", tone: "bg-mint", copy: "Properties, field standards, dedupe rules, and imports built so records mean the same thing to every team. Existing data comes in cleaned and tested, because a CRM is only as good as what is inside it." },
  { name: "Automation with owners", tone: "bg-brand text-cream", copy: "Routing, follow-up, task creation, and alerts, each with a clear purpose, trigger, owner, and exception path. Automation exists to remove real toil, not to look impressive in a demo." },
  { name: "Integrations that carry real weight", tone: "bg-grape text-cream", copy: "Your website, lead sources, email, and the business systems your team already uses, connected so information flows without manual copying. We integrate what the process needs, and say so when something does not need integrating." },
  { name: "Reporting from day one", tone: "bg-sun", copy: "Dashboards built around the questions your leadership asks every week: pipeline health, activity, ageing, and data quality. The numbers exist from launch, not as a phase two that never arrives." },
  { name: "Permissions, roles, and guardrails", tone: "bg-mint", copy: "Who can see what, who can edit what, and what happens when someone leaves. Set up early, so the portal stays trustworthy as the team grows and changes." },
];

const rules = [
  { title: "Process before configuration", tone: "bg-sun", copy: "No setting is touched until the process is mapped and agreed in writing. You approve the design, not a surprise. Configuration decisions that skip this step always get revisited later, at a higher price." },
  { title: "Build in reviewable stages", tone: "bg-mint", copy: "The portal takes shape in stages you can see, question, and correct. Nothing is revealed all at once at the end, and nothing goes live that your team has not already seen working." },
  { title: "One definition of the customer", tone: "bg-brand text-cream", copy: "Marketing, sales, and service work from the same records, the same stage meanings, and the same numbers. Implementation is where those definitions get agreed, or argued about forever after." },
  { title: "Adoption is part of the build", tone: "bg-grape text-cream", copy: "A perfect configuration nobody uses is a failed implementation. Training, routines, and early check-ins are built into the project, not bolted on after go-live." },
];

const steps = [
  { title: "Understand", copy: "We sit with sales, marketing, and service and map how revenue really moves today: sources, follow-up, handoffs, reporting, and where things get stuck." },
  { title: "Design", copy: "Pipelines, properties, roles, automation, and integrations are written up as a design. You review and approve the plan before we build it." },
  { title: "Build", copy: "Configuration happens in stages, each reviewed with you. Data is imported clean and tested. Integrations are connected and verified against real usage, not demo data." },
  { title: "Launch and adopt", copy: "Role-based training with your real deals, a planned go-live, and check-ins while habits form. The system becomes everyday work, not a launch-week novelty." },
];

const deliverables = [
  "A documented map of your revenue process, agreed before build",
  "Pipelines, properties, and record views designed around your process",
  "Clean, tested data in the portal, with mapping and dedupe rules on record",
  "Automation with a stated purpose, trigger, owner, and exception path",
  "Integrations connected and verified with your real systems",
  "Dashboards answering the questions your leadership asks every week",
  "Role-based training and written guides your team keeps",
];

const honest = [
  ["Implementation is a project, not a product", "We bring the method and the build. The process decisions are yours, and the outcomes depend on them as much as on the configuration. Nobody can buy a working revenue system off a shelf."],
  ["Sometimes the answer is smaller", "Not every business needs every hub, every integration, or the top tier. Part of implementation is an honest recommendation, including when a cheaper setup would serve you better."],
  ["Adoption cannot be outsourced", "We train, document, and stay close after launch, but your team's habits are built by your leadership. Implementation that is not backed from inside stalls, and we will say so early."],
];

const mistakes = [
  { title: "The template portal", copy: "A setup copied from a template or another company's build, before anyone mapped the actual process. It looks finished on day one and fights the team from day two." },
  { title: "The big-bang go-live", copy: "Everything switches over at once with no staged review. Something breaks, confidence drops, and the team quietly goes back to spreadsheets. Staged builds exist to prevent exactly this." },
  { title: "Everyone configures", copy: "Admin rights handed out generously, so properties and workflows multiply unchecked. Six months later, nobody knows what feeds what, and simple changes take hours of careful avoidance." },
  { title: "The forgotten follow-through", copy: "Training happened once, at launch. Questions since then went unanswered, habits faded, and the portal drifted. Adoption needs follow-up in the first weeks, when it is still cheap to fix." },
];

const faqs = [
  { q: "How is implementation different from onboarding?", a: "Onboarding gets a new team started: a first pipeline, core properties, and the training to use them. Implementation is the fuller build: the whole revenue process across teams and hubs, with data, automation, integrations, and reporting designed as one system. Many companies start with onboarding and grow into implementation." },
  { q: "We already use HubSpot but only partly. Can you implement on top of what exists?", a: "Yes, and it is a common starting point. We begin with an audit of the current portal, keep what works, and rebuild what is creating friction. The implementation design then covers the gaps, so the portal becomes one system instead of two eras patched together." },
  { q: "How long does an implementation take?", a: "It depends on the number of teams, the state of your data, and how many systems need connecting. A focused single-team build moves faster than a cross-company one. The first call gives you an honest range, and the design phase sets the schedule before any build work starts." },
  { q: "Do you work directly in our portal?", a: "Yes, under the access and controls we set up together as part of the build. Every change is reviewed with you at each stage, and significant changes are explained before or as they land. You keep full ownership and full visibility." },
  { q: "What happens after the implementation ends?", a: "Launch includes early check-ins while habits form. After that, many teams continue with HubSpot as a Service, our ongoing retainer, so the system keeps improving instead of drifting. Others take the documentation and run with it. There is no lock-in either way." },
];

const checkTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream", "bg-mint", "bg-sun", "bg-brand text-cream"];
const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function HubSpotImplementationPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <HubSpotBadge className="animate-rise-in" />
        <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in" style={{ animationDelay: "0.08s" }}>HubSpot, implemented<br/><span className="text-brand">like revenue</span> <span className="text-grape">depends on it.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>We implement HubSpot as the system your revenue runs on: process mapped first, configuration second, and every team working from the same truth.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss your implementation <ArrowUpRight size={19} /></Link>
        <a href="#coverage" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See what it covers</a>
      </div>
    </div>
  </section>

  <section id="who" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who implementation<br/>is <span className="text-brand">for</span>.</>} copy="Some situations need more than a setup. These are the four we meet most often." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section id="coverage" className="reveal scroll-mt-8 border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>What an implementation<br/><span className="text-brand">covers</span>.</>} copy="Six workstreams, each with an output you can review. Together they make HubSpot the system your revenue runs on." />
    <div className="mt-16 space-y-6">
      {coverage.map((c, i) => <div key={c.name} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink ${c.tone} ${i % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
        <span className="font-display text-5xl font-bold opacity-30">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{c.name}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{c.copy}</p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Four rules we<br/>implement <span className="text-brand">by</span>.</>} copy="They are what separate an implementation from a configuration exercise." />
    <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {rules.map((r, i) => <div key={r.title} className={`flex min-h-72 flex-col justify-between gap-8 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 ${r.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <span className="font-display text-5xl font-bold opacity-25">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{r.title}</h3>
          <p className={`mt-3 text-sm font-bold leading-relaxed ${r.tone.includes("text-cream") ? "text-cream/80" : "text-ink/70"}`}>{r.copy}</p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>How the project<br/>actually <span className="text-brand">runs</span>.</>} copy="Four phases. You always know which one you are in and what gets decided next." />
    <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => <div key={s.title} className={`flex min-h-72 flex-col justify-between gap-8 rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 ${i % 2 ? "lg:mt-10" : ""}`}>
        <span className="font-display text-5xl font-bold text-brand/30">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{s.title}</h3>
          <p className="mt-3 text-sm font-bold leading-relaxed text-ink/70">{s.copy}</p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="rounded-[3rem] border-2 border-ink bg-background p-10 shadow-tactile-ink sm:p-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">What you receive.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Every item below is delivered, documented, and visible to you. Nothing important lives only in our heads.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-mint px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your implementation <ArrowUpRight size={18} /></Link>
        </div>
        <div className="space-y-4">
          {deliverables.map((d, i) => <div key={d} className="flex items-start gap-4 rounded-[1.75rem] border-2 border-ink/10 bg-cream/60 p-6">
            <span className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink ${checkTones[i]}`}><Check size={17} strokeWidth={3} /></span>
            <p className="leading-relaxed text-ink/80">{d}</p>
          </div>)}
        </div>
      </div>
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="relative overflow-hidden rounded-[3.5rem] bg-ink p-10 text-cream sm:p-14 lg:p-20">
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-64 rounded-full bg-sun/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">implementations</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Implementation projects carry real expectations. Here is what we will tell you that others might not.</p>
      </div>
      <div className="relative mt-14 grid gap-10 border-t-2 border-cream/15 pt-12 md:grid-cols-3 lg:gap-12">
        {honest.map(([label, copy], i) => <div key={label}>
          <div className={`grid size-12 place-items-center rounded-full ${dotTones[i]}`}>
            <span className={`bg-ink ${i === 0 ? "size-4 rotate-45" : i === 1 ? "h-1 w-6" : "size-3 rounded-full"}`} />
          </div>
          <h3 className="mt-6 text-2xl font-bold" style={{ color: i === 0 ? "var(--color-sun)" : i === 1 ? "var(--color-mint)" : "var(--color-grape)" }}>{label}</h3>
          <p className="mt-3 leading-relaxed text-cream/70">{copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Where implementations<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns we most often walk into and fix. Our process is shaped to avoid every one of them." />
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {mistakes.map((m, i) => <article key={m.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 ${i % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
        <div className="grid size-12 place-items-center rounded-full bg-grape/15 text-grape"><X size={22} strokeWidth={3} /></div>
        <h3 className="mt-5 text-2xl font-bold">{m.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Common <span className="text-brand">questions</span>.</>} copy="Answered the way we answer them on a first call. Nothing here hides behind a click." />
    <div className="mt-16 grid items-start gap-8 md:grid-cols-2">
      {faqs.map((f, i) => <article key={f.q} className="rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5">
        <h3 className="flex items-start gap-3 text-2xl font-bold leading-snug">
          <span className={`shrink-0 rounded-xl border-2 border-ink px-2.5 py-0.5 font-display text-lg font-bold ${qTones[i]}`}>Q</span>
          {f.q}
        </h3>
        <p className={`mt-5 border-l-4 ${aRules[i]} pl-5 font-bold leading-relaxed text-ink/70`}>{f.a}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 py-24 sm:px-6"><div className="rounded-[3rem] border-2 border-ink bg-ink p-10 text-center text-cream shadow-tactile-ink sm:p-16">
    <HubSpotBadge dark />
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Implement HubSpot once. Properly.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us how your revenue team works today and where the portal falls short. The first conversation is free and genuinely useful, whether or not we build together.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/hubspot" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All HubSpot services</Link>
    </div>
  </div></section>
</main> }
