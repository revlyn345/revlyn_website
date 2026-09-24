import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/pipeline")({ head: () => ({ meta: [
  { title: "Pipeline and Lifecycle Design | Revlyn" },
  { name: "description", content: "Agreed pipeline stages, lifecycle definitions, and handoff rules across marketing, sales, and service, so a deal means the same thing in every room." },
  { property: "og:url", content: "https://revlyn.io/revops/pipeline" }, { property: "og:title", content: "Pipeline and Lifecycle Design | Revlyn" },
  { property: "og:description", content: "Agreed stages, definitions, and handoff rules across marketing, sales, and service, so a deal means the same thing in every room." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Pipeline and Lifecycle Design", path: "/revops/pipeline" }]) },
    { "script:ld+json": serviceSchema({ name: "Pipeline and Lifecycle Design", description: "Agreed pipeline stages, lifecycle definitions, and handoff rules across marketing, sales, and service, so a deal means the same thing in every room.", path: "/revops/pipeline" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/pipeline" }] }), component: PipelinePage });

const audiences = [
  { title: "Teams where every stage means something different", tone: "bg-sun", copy: "Ask three salespeople what qualified means and you get three answers. The pipeline looks full, but nobody can say what is actually real. Design replaces individual judgement with a shared definition." },
  { title: "The founder who cannot forecast", tone: "bg-background", copy: "Every quarter ends with a surprise. Deals everyone counted on quietly die, and the ones that close were not on anyone's list. Forecasting fails because the stages underneath it mean nothing." },
  { title: "Businesses where leads rot between teams", tone: "bg-grape text-cream", copy: "Marketing celebrates enquiry numbers while sales complains about quality, and good buyers wait days for a first call. The missing piece is not effort; it is an agreed lifecycle with a named owner at every step." },
  { title: "Anyone whose CRM pipeline is decoration", tone: "bg-background", copy: "The CRM has stages, but deals sit wherever they were last left, and the real tracking happens in a spreadsheet or the sales head's notebook. When the system and reality diverge, the stages were never designed properly." },
];

const stages = [
  { name: "Subscriber or first touch", def: "Someone you can reach who has raised no hand yet.", exit: "They engage: a reply, a download, an event, a call." },
  { name: "Lead or new enquiry", def: "A hand raised: a form, a call, a WhatsApp message.", exit: "Owned by a named person and contacted within the agreed time." },
  { name: "Qualified", def: "Worth a salesperson's time, on grounds everyone agreed in advance.", exit: "A real conversation has happened and a next step exists." },
  { name: "Opportunity or deal", def: "A specific piece of business with a value, a need, and a timeline.", exit: "Progresses through deal stages, each with an entry condition." },
  { name: "Customer", def: "The deal is closed and money has moved or is committed.", exit: "Handed to delivery with the promise, dates, and details attached." },
  { name: "Repeat and referral", def: "A happy customer who is systematically asked for the next sale.", exit: "The loop continues, measured like every other stage." },
];

const rules = [
  { title: "Every stage has a written definition", tone: "bg-brand text-cream", copy: "One sentence, in plain language, that two people can read and agree on whether a record belongs there. If the team cannot apply a definition consistently, it gets rewritten until they can." },
  { title: "Entry conditions, not feelings", tone: "bg-mint", copy: "A deal enters a stage because something observable happened: a meeting held, a requirement documented, a proposal sent. Never because someone feels good about it." },
  { title: "Every handoff names a receiver", tone: "bg-sun", copy: "Marketing to sales, sales to service: each handoff says who receives the work, within how long, and with what information attached. A handoff without a receiver is where customers disappear." },
  { title: "The pipeline must be countable", tone: "bg-grape text-cream", copy: "If a report cannot be built from the stages, the stages are wrong. We test every design by building the reports the business actually needs from it before anything is final." },
];

const steps = [
  { title: "Gather", copy: "We collect how each team talks about the journey today: the words, the spreadsheets, the gut rules. The disagreements between teams are the most valuable material we find." },
  { title: "Draft", copy: "One candidate lifecycle and pipeline, written in your business's language, with definitions and entry conditions for every stage. Short enough to argue about in one sitting." },
  { title: "Argue", copy: "Marketing, sales, and service in one room, working through real deals from last quarter against the draft. Wherever the draft fails a real deal, the draft changes. This session is the heart of the work." },
  { title: "Settle", copy: "The agreed version is written down, built into the CRM, and given a review date. The first monthly review tests the definitions against new deals and adjusts what reality disagrees with." },
];

const deliverables = [
  "One lifecycle from first touch to repeat customer, with a written definition and entry condition for every stage",
  "A deal pipeline whose stages mirror how your buyers actually decide, not a generic template",
  "Handoff rules between teams: who receives the work, within how long, with what information",
  "The definitions written into your CRM, so the system enforces what the team agreed",
  "A monthly review agenda that keeps the definitions honest as the business changes",
];

const honest = [
  ["The definitions are the product", "The document matters less than the conversation that produces it. Teams that argue through the definitions together keep them; teams handed a finished framework quietly ignore it."],
  ["Fewer stages beat more", "Every stage you add is a place a record can stall and a definition people can misremember. We push hard toward the fewest stages that still tell the truth about the work."],
  ["It will need revision", "New products, new teams, and new markets all change the journey. The design includes a review rhythm because a pipeline that cannot change becomes fiction within a year."],
];

const mistakes = [
  { title: "Copying a template pipeline", copy: "A software demo's stages, installed unchanged. Your buyers do not move in generic steps, so the pipeline stops matching reality within weeks and everyone routes around it." },
  { title: "Stages that describe the seller, not the buyer", copy: "Proposal sent is something you did. Requirement agreed is something the buyer did. Buyer-side stages are observable and honest; seller-side stages invite optimism." },
  { title: "Designing without the people who use it", copy: "A pipeline designed by management alone gets compliance, not adoption. The salespeople who live in it daily must help write the definitions, or they will not trust them." },
  { title: "Letting dead deals linger", copy: "Without an exit rule, deals sit in late stages for months, inflating the pipeline and poisoning the forecast. Every design includes a clear rule for closing lost and moving on." },
];

const faqs = [
  { q: "How many stages should a pipeline have?", a: "Fewer than you think. Most growing businesses land between four and seven deal stages. The test is not the number; it is whether each stage has a clear entry condition and whether the team applies them the same way. We would rather merge two fuzzy stages than keep a tidy-looking diagram." },
  { q: "What is the difference between a lifecycle and a pipeline?", a: "The lifecycle covers the whole customer relationship: first touch, enquiry, qualification, customer, repeat business. The pipeline is the part where active deals move toward a close. Lifecycle stages belong to the company; pipeline stages belong to sales. Both need agreed definitions, and this engagement designs them together." },
  { q: "Our sales team will resist definitions. How do you handle that?", a: "By having them write the definitions. The argue session exists precisely so the people who use the pipeline shape it. Resistance usually comes from definitions imposed from above; when the team builds the rules from their own real deals, the rules get used." },
  { q: "Does this require HubSpot or any specific CRM?", a: "The design itself is tool-independent: stages, definitions, and handoffs work on paper. It lands best inside a CRM that can enforce entry conditions and report from the stages, and HubSpot is the strongest home we know for that. If you run a different tool, the design still applies." },
  { q: "How is this different from the revenue process audit?", a: "The audit finds where the current journey leaks. Pipeline and lifecycle design builds the shared structure the journey should run on. Many clients do the audit first and design second, but if you already know the stages are the problem, you can start here directly." },
];

const checkTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream", "bg-mint"];
const numTones = ["text-brand", "text-grape", "text-brand", "text-grape", "text-brand", "text-grape"];
const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function PipelinePage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-grape/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/35 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">One pipeline.<br/>One <span className="text-brand">meaning.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>Pipeline and lifecycle design gives your marketing, sales, and service teams one shared set of stages, definitions, and handoff rules, from first enquiry to repeat business.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss pipeline design <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this design<br/>is <span className="text-brand">for</span>.</>} copy="Pipeline design pays for itself fastest when more than one person touches the customer journey, and the word pipeline currently means different things to each of them." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>One lifecycle, <span className="text-brand">defined</span>.</>} copy="Six stages from first touch to repeat business. Each with a plain-language definition and an exit condition, so nobody has to guess." />
    <div className="mt-16 space-y-5">
      {[[0, 1], [2, 3], [4, 5]].map((row, r) => <div key={r} className="grid gap-5 lg:grid-cols-2">
        {row.map((idx, c) => { const s = stages[idx]!; return <div key={s.name} className={`flex items-start gap-5 rounded-[2.5rem] border-2 border-ink p-7 shadow-tactile-ink ${idx === 3 ? "bg-sun" : "bg-background"} ${c === 1 ? "lg:mt-8" : ""}`}>
          <span className={`font-display text-4xl font-bold ${idx === 3 ? "text-ink" : numTones[idx]}`}>{`0${idx + 1}`}</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">Moves on when: <span className="font-normal text-ink/65">{s.exit}</span></p>
          </div>
        </div>; })}
      </div>)}
    </div>
    <p className="mt-8 max-w-2xl leading-relaxed text-ink/55">These are the shapes, not the final words. Your stages get named in your business's language, and their count changes to fit how your buyers actually move.</p>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>every <span className="text-brand">stage</span>.</>} copy="Four principles we refuse to compromise on, because pipelines that break them stop being believed." />
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
    <SectionHead title={<>How the design <span className="text-brand">happens</span>.</>} copy="Four moves. The argument in the middle is not a problem to avoid; it is the work itself." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A working structure, not a framework deck. Everything below is written in your team's language and built into the system they use daily.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss pipeline design <ArrowUpRight size={18} /></Link>
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
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-64 rounded-full bg-mint/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">pipeline design</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Every agency can draw you a funnel diagram. Here is what actually determines whether the design survives contact with your team.</p>
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
    <SectionHead title={<>Where pipelines<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind CRMs that everyone has stopped believing." />
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {mistakes.map((m, i) => <article key={m.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 hover:rotate-0 ${i % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
        <div className="grid size-12 place-items-center rounded-full bg-grape/15 text-grape"><X size={22} strokeWidth={3} /></div>
        <h3 className="mt-5 text-2xl font-bold">{m.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One pipeline every team trusts.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us how a deal moves through your business today. The first conversation is free and genuinely useful, whether or not the design work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
