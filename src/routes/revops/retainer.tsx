import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/retainer")({ head: () => ({ meta: [
  { title: "Ongoing RevOps Retainer | Revlyn" },
  { name: "description", content: "A fractional revenue operator who keeps the rhythm running after the build: the weekly reviews, the monthly definitions check, the quarterly process questions." },
  { property: "og:url", content: "https://revlyn.io/revops/retainer" }, { property: "og:title", content: "Ongoing RevOps Retainer | Revlyn" },
  { property: "og:description", content: "The build ends. The rhythm stays: reviews that happen, definitions that hold, and process questions asked every quarter." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Ongoing RevOps Retainer", path: "/revops/retainer" }]) },
    { "script:ld+json": serviceSchema({ name: "Ongoing RevOps Retainer", description: "A fractional revenue operator who keeps the rhythm running after the build: the weekly reviews, the monthly definitions check, the quarterly process questions.", path: "/revops/retainer" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/retainer" }] }), component: RetainerPage });

const audiences = [
  { title: "Founders whose process quietly drifts", tone: "bg-sun", copy: "The CRM launched well, and then life happened. Stages get renamed in a hurry, fields go unfilled, and six months later the dashboards are noise. The build was never the problem; the maintenance was missing." },
  { title: "Managers who became part-time admins", tone: "bg-mint", copy: "Somebody senior now spends their Fridays fixing records, rebuilding the report that broke, and chasing the team to update the pipeline. The work is real, but it is pulling them away from the job you actually hired them for." },
  { title: "Teams growing faster than their process", tone: "bg-brand text-cream", copy: "A new product line, a second city, five new hires. The process designed for one team now stretches across three, and the definitions that worked at ten people start leaking at twenty." },
  { title: "Businesses that finished a build and stalled", tone: "bg-grape text-cream", copy: "The project ended and, shortly after, so did the discipline. What keeps a system alive is not the enthusiasm of launch week, it is a rhythm that continues when nobody is excited anymore." },
];

const rhythm = [
  { name: "Weekly", tone: "bg-sun", copy: "The pipeline review that actually happens. We prepare the numbers before the meeting, flag the deals that stalled quietly, and keep the session short enough that people want to attend.", rule: "A review is only real if it changes a decision. If nobody leaves the meeting doing something differently, we fix the meeting." },
  { name: "Monthly", tone: "bg-mint", copy: "The definitions check. Stages, fields, owners, and handoffs still mean what they meant at launch, and the small drift that every system accumulates gets caught while it is still small.", rule: "One home per meaning. When two teams read the same field differently, we fix the definition, not the report." },
  { name: "Quarterly", tone: "bg-brand text-cream", copy: "The process questions. Is this stage still right? Is that automation earning its keep? What changed in the business that the system must now follow? We ask them with you, on purpose, on a schedule.", rule: "The process serves the business, not the other way round. Every quarter, the system is re-examined against how the business actually works now." },
];

const rules = [
  { title: "Rhythm over enthusiasm", tone: "bg-mint", copy: "Launch excitement fades; calendars do not. We anchor the work to meetings that already exist and keep them short, because a rhythm nobody attends is just a document." },
  { title: "Small fixes, continuously", tone: "bg-sun", copy: "Systems decay through a hundred small drifts, so they are maintained through a hundred small corrections. We would rather fix ten small things across a quarter than stage one dramatic overhaul." },
  { title: "We work toward independence", tone: "bg-brand text-cream", copy: "A good retainer shrinks its own surface area. Every process we document, every decision log we keep, every rule we write down is so your team runs more of it and understands more of it." },
  { title: "Decisions leave a trail", tone: "bg-grape text-cream", copy: "Every change, and the reasoning behind it, goes into a log you own. Six months later, when somebody asks why the stages changed, the answer is written down instead of remembered differently." },
];

const steps = [
  { title: "Anchor", copy: "We sit in the reviews and rituals you already have, read the data as it actually is, and learn how the teams really work. No changes yet; the first month is listening." },
  { title: "Steady", copy: "The weekly and monthly rhythm runs, reliably, with the numbers prepared and the drift caught early. This alone removes most of the firefighting." },
  { title: "Improve", copy: "With the rhythm steady, we improve the process one change at a time: a stage that no longer fits, an automation worth building, a report nobody trusted made trustworthy." },
  { title: "Reassess", copy: "Every quarter we ask together whether the arrangement is still worth it: what the rhythm caught, what it changed, and what your team now runs without us." },
];

const deliverables = [
  "A named RevOps lead who knows your process, your data, and your teams by name",
  "The weekly review prepared in advance and facilitated, so it stays short and decides things",
  "The monthly definitions check, catching drift while it is still cheap to fix",
  "The quarterly process questions, asked with you against how the business works now",
  "A decision log you own, recording every change and the reasoning behind it",
];

const honest = [
  ["What a retainer is not", "It is not a helpdesk for login problems, not unlimited development on demand, and not a substitute for the person you will eventually hire to own this internally. It is an operator keeping a rhythm, with a scope we agree on."],
  ["When you do not need one", "If the system is simple, the team is small, and one person genuinely owns the process, a retainer is premature. We would rather tell you that on the first call than collect a fee for a rhythm you do not need yet."],
  ["We would rather you need us less", "The honest measure of this work is that the reviews keep happening, the definitions hold, and the team understands the system well enough to challenge us. Boring, steady operation is the goal, not dependence."],
];

const mistakes = [
  { title: "The retainer that becomes a helpdesk", copy: "The operator spends every hour resetting things and answering tickets, and the process work never happens. We separate keeping the system running from improving it, and we name both in the scope." },
  { title: "Fixing reports instead of process", copy: "The dashboard is rebuilt three times while the stage definitions underneath it stay broken. A report that disagrees with reality is a symptom; we follow it down to the process that caused it." },
  { title: "The rhythm nobody attends", copy: "The weekly review is scheduled, then skipped, then cancelled, and the drift resumes. We keep reviews short, prepare them fully, and tie them to decisions people care about, because attendance is earned." },
  { title: "Building dependence instead of capability", copy: "The agency becomes the only person who understands the system, and the business cannot function without them. We document as we go and hand your team more of the rhythm every quarter." },
];

const faqs = [
  { q: "How is a retainer different from the project work?", a: "A project has an end: the audit is delivered, the pipeline is live, the stack is consolidated. A retainer is what happens after, when the system must keep working while the business keeps changing. Projects build the machine; the retainer runs it and adjusts it." },
  { q: "Do we have to have built with you first?", a: "No. What we do need is a system worth running: a CRM in use, a process that exists somewhere outside one person's head. If that foundation is missing, we start with the audit or a build instead, and the retainer conversation comes when the rhythm has something to hold." },
  { q: "What does the operator actually do each week?", a: "Prepare the numbers before the weekly review, facilitate it, catch the stalled deals and the data drift, fix the small things as they surface, and keep the decision log current. The work is mostly unglamorous, which is exactly why it works: systems stay healthy through small, regular attention." },
  { q: "Can it start after our own team builds the CRM?", a: "Yes, and that is often a good moment for it. A freshly built system drifts fastest in its first year, while habits are still forming. Starting the rhythm early, whoever built the system, is what turns a launch into an operation." },
  { q: "How do we know the retainer is working?", a: "By what stops happening: deals no longer stall silently, meetings stop starting with whose number is right, and the handoffs stop dropping. We also state it plainly each quarter: what the rhythm caught, what it changed, and what your team now runs without us." },
];

const checkTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const qTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream", "bg-mint"];
const aRules = ["border-sun", "border-grape", "border-brand", "border-mint", "border-sun"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function RetainerPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-grape/15 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">Built once.<br/>Kept in <span className="text-brand">motion.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>An ongoing RevOps retainer: a fractional operator who keeps the rhythm running after the build, the reviews, the definitions check, and the quarterly process questions.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Talk about the rhythm <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this work<br/>is <span className="text-brand">for</span>.</>} copy="Systems do not break in launch week. They break in the quiet months after, when the discipline has no owner." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>A rhythm with<br/>three <span className="text-brand">beats</span>.</>} copy="The retainer is not a pile of hours. It is a small set of meetings and checks that repeat until the operation runs itself." />
    <div className="mt-16 space-y-6">
      {rhythm.map((r, i) => <div key={r.name} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink ${r.tone} ${i % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
        <span className="font-display text-5xl font-bold opacity-30">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{r.name}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{r.copy}</p>
          <p className="mt-3 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{r.rule}</span></p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>the <span className="text-brand">retainer</span>.</>} copy="Four principles that decide whether the rhythm holds or quietly dies within a quarter." />
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
    <SectionHead title={<>How it <br/>gets <span className="text-brand">started</span>.</>} copy="Four moves, starting with listening. The rhythm we keep has to be one your teams will actually attend." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">An operation that keeps running after the excitement fades, and the paperwork that proves it. Everything below is yours, not ours.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-mint px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Talk about the rhythm <ArrowUpRight size={18} /></Link>
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
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Anyone can promise ongoing support. Here is what actually decides whether the rhythm is worth keeping.</p>
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
    <SectionHead title={<>Where retainers<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind ongoing arrangements that outlive their usefulness." />
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {mistakes.map((m, i) => <article key={m.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 ${i % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">The build ends. The rhythm stays.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what drifted after your last system went live. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
