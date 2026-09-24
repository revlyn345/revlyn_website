import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, Check, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/managed")({ head: () => ({ meta: [
  { title: "HubSpot as a Service | Ongoing HubSpot and RevOps Retainer | Revlyn" },
  { name: "description", content: "HubSpot as a Service: an ongoing retainer where Revlyn becomes your extended team, combining deep HubSpot expertise with RevOps to keep your portal improving every month." },
  { property: "og:url", content: "https://revlyn.io/hubspot/managed" }, { property: "og:title", content: "HubSpot as a Service | Ongoing HubSpot and RevOps Retainer | Revlyn" },
  { property: "og:description", content: "An ongoing retainer where we become your extended team, pairing HubSpot expertise with RevOps thinking, month after month." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot as a Service", path: "/hubspot/managed" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot as a Service", description: "HubSpot as a Service: an ongoing retainer where Revlyn becomes your extended team, combining deep HubSpot expertise with RevOps to keep your portal improving every month.", path: "/hubspot/managed" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/managed" }] }), component: HubSpotManagedPage });

const audiences = [
  { title: "Teams with no RevOps hire", tone: "bg-sun", copy: "You know the CRM needs constant care: fields cleaned, workflows tuned, reports kept honest. Hiring that expertise full-time is a big bet before the revenue justifies it." },
  { title: "The one-person ops team", tone: "bg-mint", copy: "Marketing ops, sales ops, and IT requests all land in one inbox. The important work keeps losing to the urgent, and the backlog grows faster than the person can." },
  { title: "A portal drifting out of shape", tone: "bg-brand text-cream", copy: "HubSpot was set up once, then patched by whoever had time. Workflows overlap, data decays quietly, and nobody owns the whole system anymore." },
  { title: "Leaders who need numbers that agree", tone: "bg-grape text-cream", copy: "Every review starts with an argument about whose spreadsheet is right. What you want is a system where the number is the same for everyone who opens it." },
];

const disciplines = [
  { title: "HubSpot expertise", tone: "bg-sun", points: ["Configuration across the hubs: pipelines, properties, workflows, permissions, and dashboards", "Workflows built with a clear purpose, trigger, owner, and exception path", "Data kept clean: dedupe rules, field standards, and imports that do not create messes"] },
  { title: "RevOps thinking", tone: "bg-mint", points: ["Every change judged against how your revenue process actually runs", "Marketing, sales, and service kept on one shared definition of the customer", "Reporting designed around the decisions your leadership makes each week"] },
];

const coverage = [
  { name: "A running backlog, visible to you", tone: "bg-sun", copy: "Every request, idea, and fix lands in one backlog you can open any time. Nothing lives in a chat thread or a memory, and nothing disappears." },
  { name: "Platform care", tone: "bg-mint", copy: "Workflows, properties, pipelines, and permissions kept in order as your team and process change. Small drift gets corrected while it is still small." },
  { name: "Improvements, not just upkeep", tone: "bg-brand text-cream", copy: "Each month brings changes that make the system better: a workflow that saves hours, a report that ends an argument, a step the team stops skipping." },
  { name: "Reporting kept aligned", tone: "bg-grape text-cream", copy: "Dashboards stay matched to the questions your leadership actually asks, and when the questions change, the reports change with them." },
  { name: "New joiners, brought up to speed", tone: "bg-sun", copy: "When you hire, we set the new person up in HubSpot the right way from day one, so the habits your team built do not restart with every addition." },
  { name: "A direct line to expertise", tone: "bg-mint", copy: "When someone on your team has a question, they ask people who work in HubSpot and RevOps every day, not a help document written for everyone." },
];

const rules = [
  { title: "One backlog beats ten inboxes", tone: "bg-sun", copy: "Requests scattered across chat, email, and memory are how portals rot. Everything we owe you sits in one visible place, prioritised, with an owner." },
  { title: "The system outlives the retainer", tone: "bg-mint", copy: "Everything we build is documented and named so your team can understand it without us. A retainer that creates dependency has failed at its job." },
  { title: "Every change serves the revenue process", tone: "bg-brand text-cream", copy: "A workflow nobody asked for is still a workflow somebody maintains. We say no to changes that add moving parts without moving revenue." },
  { title: "Honesty about capacity", tone: "bg-grape text-cream", copy: "If a request does not fit the month, it waits in the backlog where you can see it. We would rather be visibly booked than quietly late." },
];

const steps = [
  { title: "Capture", copy: "Requests, ideas, and problems land in the shared backlog the moment they appear. Each one gets written down properly: what is needed, and why it matters." },
  { title: "Prioritise", copy: "Together, we order the backlog by revenue impact and effort. The order is visible to you, and you can argue with it any time." },
  { title: "Deliver", copy: "Changes are built, tested, and released with a note on what changed and what to watch. Your team is told before they discover it." },
  { title: "Review", copy: "A regular working review: what shipped, what it changed, what is next, and what we learned about how the system is actually being used." },
];

const deliverables = [
  "A shared, prioritised backlog you can open at any time",
  "A working rhythm with a regular review of what shipped and what comes next",
  "A portal kept in order: workflows, properties, permissions, and data standards",
  "Reports and dashboards kept aligned to the decisions your leadership makes",
  "Documentation current enough that any new team member can find their way",
];

const honest = [
  ["We are an extension, not a replacement", "Decisions about your revenue process stay yours. We bring the expertise and the follow-through, but the ownership, and the accountability for outcomes, remain inside your business."],
  ["Some months are quiet", "Not every month produces dramatic change, and that is fine. A quiet month often means the system is holding: no fires, no drift, no surprises in the numbers."],
  ["Expertise has edges", "We are deep in HubSpot and revenue operations, not in everything. Where a need sits outside that, such as heavy custom development, we say so early rather than improvise."],
];

const mistakes = [
  { title: "The ghost admin", copy: "The person or agency who set up HubSpot has moved on. Nobody knows why a workflow exists or what a property feeds, so everyone is afraid to touch anything. The system fossilises." },
  { title: "The ticket graveyard", copy: "Requests arrive by chat, email, and hallway. The urgent ones get done, the rest evaporate, and the team stops asking because asking does nothing. A visible backlog is the fix." },
  { title: "The bloated portal", copy: "Every request becomes a new property, workflow, or dashboard, and nothing is ever retired. Months later, the portal is so heavy that simple changes take hours of careful avoidance." },
  { title: "The retainer of tickets", copy: "An agency that only does what it is told, and never looks at the whole system. Upkeep happens, but the drift, the duplicates, and the broken handoffs nobody reported keep compounding." },
];

const faqs = [
  { q: "How is this different from hiring a HubSpot admin?", a: "A hire gives you one person's availability and experience. The retainer gives you a team that works across many HubSpot portals and revenue operations every day, without recruitment, training, or the risk of one resignation taking the system knowledge with it. For many businesses the retainer is also the right size: the work is real, but not yet a full-time role." },
  { q: "How is this different from your other HubSpot services?", a: "Onboarding, migration, and training are projects with a beginning and an end. HubSpot as a Service is ongoing: after the project ships, the system still needs care, improvements, and a watchful eye, and that is what the retainer is for. Many retainers start exactly where a project finishes." },
  { q: "What does a typical month look like?", a: "Requests land in the shared backlog as they come up, we work through it in priority order, and we close the rhythm with a review of what shipped, what changed, and what is next. Some months are dominated by one big change; others are steady care and small improvements. The first call is where we agree the rhythm that fits your team." },
  { q: "Do you work directly in our portal?", a: "Yes, under the access and controls you set. Everything we change is documented, and anything significant is explained to your team before or as it lands. You always keep full ownership and full visibility of the portal." },
  { q: "We are mid-way through a messy HubSpot setup. Can we start there?", a: "Often the honest first step is a focused sort-out: an audit of what exists, a clean-up of what conflicts, and then the retainer keeps it that way. Starting a retainer on top of an untidy portal just preserves the mess at a monthly rhythm. We will tell you plainly which of the two you need first." },
];

const checkTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream", "bg-mint"];
const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function HubSpotManagedPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-sun/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-mint/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-grape/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <HubSpotBadge className="animate-rise-in" />
        <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in" style={{ animationDelay: "0.08s" }}>Your extended<br/><span className="text-brand">HubSpot</span> team.</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>HubSpot as a Service is an ongoing retainer where we work as part of your team, pairing deep HubSpot expertise with RevOps thinking, month after month.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Start a conversation <ArrowUpRight size={19} /></Link>
        <a href="#included" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See what is included</a>
      </div>
    </div>
  </section>

  <section id="who" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this retainer<br/>is <span className="text-brand">for</span>.</>} copy="HubSpot does not stay set up on its own. These are the teams who feel that first." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>One retainer.<br/>Two <span className="text-brand">disciplines</span>.</>} copy="Most retainers offer one or the other. The combination is what keeps a CRM genuinely useful." />
    <div className="mt-16 grid gap-6 lg:grid-cols-2">
      {disciplines.map((d) => <div key={d.title} className={`flex flex-col gap-7 rounded-[2.5rem] border-2 border-ink p-10 shadow-tactile-ink ${d.tone}`}>
        <h3 className="font-display text-4xl font-bold">{d.title}</h3>
        <ul className="space-y-4">
          {d.points.map((p) => <li key={p} className="flex items-start gap-3 font-bold leading-relaxed text-ink/75"><span className="mt-2 size-3 shrink-0 rotate-45 bg-ink/60" />{p}</li>)}
        </ul>
      </div>)}
    </div>
    <div className="mt-6 rounded-[2.5rem] border-2 border-ink bg-ink p-8 text-cream shadow-tactile-ink sm:p-10">
      <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">Neither alone is enough. <span className="text-sun">HubSpot skill without RevOps thinking builds clever workflows for a broken process. RevOps thinking without HubSpot skill stays a slide deck.</span> The retainer exists so you never have to choose.</p>
    </div>
  </div></section>

  <section id="included" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>What the retainer<br/><span className="text-brand">covers</span>.</>} copy="Ongoing care and ongoing improvement, in one place, with one team accountable for both." />
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

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>How we run<br/><span className="text-brand">your</span> HubSpot.</>} copy="Four rules for the retainer. They are what keep it useful in month twelve, not just month one." />
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

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>How a request<br/>becomes a <span className="text-brand">change</span>.</>} copy="A simple loop, repeated. The rhythm is agreed with you on the first call." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A system that keeps improving under a team that knows it. Everything below is visible to you, not kept in our heads.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-mint px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss the retainer <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">retainers</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Anyone can promise an extended team. Here is what that actually means with us.</p>
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
    <SectionHead title={<>Where ongoing HubSpot<br/>help goes <span className="text-brand">wrong</span>.</>} copy="The four patterns we most often walk into and clean up." />
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {mistakes.map((m, i) => <article key={m.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 ${i % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
        <div className="grid size-12 place-items-center rounded-full bg-grape/15 text-grape"><X size={22} strokeWidth={3} /></div>
        <h3 className="mt-5 text-2xl font-bold">{m.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Common <span className="text-brand">questions</span>.</>} copy="The things owners and team leads ask us most, answered the way we answer them on a call. Nothing here hides behind a click." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">A team behind your HubSpot.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what your portal looks like today and what you wish it did. The first conversation is free and genuinely useful, whether or not the retainer follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/hubspot" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All HubSpot services</Link>
    </div>
  </div></section>
</main> }
