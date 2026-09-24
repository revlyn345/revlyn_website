// ============= Full file contents =============

import { breadcrumbSchema, faqSchema, serviceSchema } from "../../lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/alignment")({ head: () => ({ meta: [
  { title: "Marketing to Sales Alignment | Revlyn" },
  { name: "description", content: "An agreed definition of a qualified lead, routing that puts every enquiry in front of an owner in minutes, and follow-up expectations both teams actually keep." },
  { property: "og:url", content: "https://revlyn.io/revops/alignment" }, { property: "og:title", content: "Marketing to Sales Alignment | Revlyn" },
  { property: "og:description", content: "One definition of a qualified lead, routing that assigns every enquiry in minutes, and follow-up expectations both teams keep." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Marketing to Sales Alignment", path: "/revops/alignment" }]) },
    { "script:ld+json": serviceSchema({ name: "Marketing to Sales Alignment", description: "An agreed definition of a qualified lead, routing that puts every enquiry in front of an owner in minutes, and follow-up expectations both teams actually keep.", path: "/revops/alignment" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/alignment" }] }), component: AlignmentPage });

const audiences = [
  { title: "Marketing that celebrates leads sales ignores", tone: "bg-sun", copy: "The dashboard shows hundreds of enquiries this month, yet sales says there is nothing worth calling. Both are right, because nobody ever agreed what counts as a lead worth a salesperson's time." },
  { title: "Sales teams building their own shadow funnels", tone: "bg-mint", copy: "Reps keep personal WhatsApp lists and notebooks because the official lead queue feels like noise. When the front line routes around the system, marketing's spend and sales' effort both go unmeasured." },
  { title: "Founders funding marketing they cannot judge", tone: "bg-grape text-cream", copy: "Money goes into ads and events every month, and the only feedback is a lead count. Without a shared definition and a follow-up trail, there is no way to know which investment came back." },
  { title: "Teams where enquiries wait hours or days", tone: "bg-brand text-cream", copy: "A form filled at 2 pm gets a call three days later, and the buyer has already spoken to two competitors. Speed is not a motivation problem; it is a routing problem, and routing can be fixed." },
];

const agreements = [
  { name: "What a lead is", def: "The shared definition of an enquiry worth sales' time, written in plain language: what they asked for, what we know about them, what they did.", rule: "Both teams sign the same sentence. If marketing and sales would count last month differently, the definition is not done." },
  { name: "How leads are scored", def: "A simple points system that ranks enquiries by fit and intent, so the best ones surface first instead of hiding in a queue.", rule: "Fewer than ten scoring rules. A scoring model nobody can explain on one page gets ignored by the people it exists to help." },
  { name: "Who owns each lead", def: "Routing rules that assign every enquiry to a named owner the moment it arrives, by territory, product line, or rotation.", rule: "No lead lands in a shared inbox. Ownership is a person with a name, never a team alias that everyone assumes someone else is watching." },
  { name: "How fast follow-up happens", def: "A written expectation for first contact: minutes for hot enquiries, same day for the rest, with alerts when the clock runs out.", rule: "The expectation is agreed by sales, not imposed on it. A deadline the team helped set gets kept; one handed down gets resented." },
  { name: "What happens to the rest", def: "A clear path for enquiries that are not ready: who nurtures them, with what, and when they earn another look from sales.", rule: "Not yet is a stage, not a dustbin. Leads that go quiet get a defined journey back, not silence." },
];

const rules = [
  { title: "Definitions before dashboards", tone: "bg-brand text-cream", copy: "No report or automation gets built until both teams agree on the words underneath it. Alignment is a language problem first; the tooling is the easy part that comes after." },
  { title: "Sales helps write the rules", tone: "bg-mint", copy: "Scoring and routing designed in a marketing meeting fail in the field. The people who make the calls shape the criteria, because they know which enquiries actually close." },
  { title: "Rejection is data, not drama", tone: "bg-sun", copy: "When sales declines a lead, the reason is a required field, not an argument. Those reasons, reviewed monthly, are how the definition of a good lead gets sharper over time." },
  { title: "One funnel, two halves", tone: "bg-grape text-cream", copy: "Marketing's job does not end at the enquiry and sales' job does not start at the call. Both teams are measured on the same journey from first touch to closed deal, so nobody optimises their half at the other's expense." },
];

const steps = [
  { title: "Listen", copy: "We sit with both teams separately first: how marketing generates enquiries, how sales actually works them, and where each side feels let down. The two versions are always instructively different." },
  { title: "Define", copy: "In one room, the definition of a qualified lead gets written, scoring gets sketched, and follow-up expectations get agreed. Expect disagreement here; that is the work, and it is cheaper than discovering it after go-live." },
  { title: "Wire", copy: "The agreements become routing rules, scoring, notifications, and nurture paths inside the CRM. Every enquiry gets an owner and a clock from the moment it arrives." },
  { title: "Review", copy: "A short monthly session where both teams look at the same funnel: conversion by source, follow-up speed, rejection reasons. The definitions get sharper, and the meeting replaces the blame loop." },
];

const deliverables = [
  "A written definition of a qualified lead, agreed and signed off by both marketing and sales",
  "A lead scoring model simple enough to explain on one page, built into the CRM",
  "Routing rules that assign every new enquiry to a named owner the moment it arrives",
  "Follow-up expectations with alerts, so a hot enquiry never waits silently",
  "A nurture path for not-yet leads, and a monthly alignment review agenda both teams attend",
];

const honest = [
  ["This is a people problem first", "Tools enforce agreements; they cannot create them. Most of the work happens in conversations between teams that have stopped quite trusting each other, and the CRM is where the result gets written down."],
  ["Expect an awkward meeting", "The session where both teams define a qualified lead usually surfaces real frustration. That is normal and useful. Better across one table than across a year of missed targets."],
  ["It decays without the review", "Definitions drift as campaigns, products, and people change. The monthly review is what keeps alignment alive; skip it for six months and the old habits quietly return."],
];

const mistakes = [
  { title: "Counting leads instead of agreeing on them", copy: "Marketing reports volume, sales reports quality, and leadership mediates between two numbers that were never measuring the same thing. No dashboard fixes a definition that was never shared." },
  { title: "Scoring models nobody can explain", copy: "Forty rules with decimal weights, built to feel scientific. Reps cannot tell why a lead is hot, so they trust their gut instead, and the model becomes expensive decoration." },
  { title: "Routing to a shared inbox", copy: "Every enquiry lands in sales@ or a group WhatsApp, on the theory that the team will share. Shared queues mean no queue: everyone assumes someone else called, and the buyer hears from your competitor first." },
  { title: "Automation before agreement", copy: "Routing and scoring get configured before the two teams have argued out the definitions, so the tool enforces rules nobody believes in. Workarounds appear within a week, and the system loses the room." },
];

const faqs = [
  { q: "What does a qualified lead actually mean?", a: "Whatever your two teams agree it means, in writing. A typical definition combines fit (is this the kind of customer we serve?) and intent (did they ask for something specific, or just browse?). The exact sentence matters less than the fact that marketing and sales signed the same one and would count last month's enquiries identically." },
  { q: "Our sales team says marketing's leads are junk. Can that be fixed?", a: "Usually, yes, and the complaint is the starting point rather than the obstacle. When sales helps write the qualification criteria and rejection reasons get recorded instead of argued, lead quality improves measurably, because marketing finally learns what good looks like in the field's own words." },
  { q: "How fast should follow-up really be?", a: "For a hot enquiry, minutes matter; a buyer comparing options rarely waits a day. For everything else, same business day is a realistic bar. The right number is the one your sales team agrees it can actually keep, because an ambitious deadline that gets missed daily teaches people to ignore the alerts." },
  { q: "Do we need lead scoring at our size?", a: "If more enquiries arrive than your team can call well, yes: scoring decides who gets the scarce hour. If volume is small, a simple agreed definition plus fast routing is enough. We recommend the lightest system that solves the real bottleneck, and we say so when scoring would be overkill." },
  { q: "Does this need HubSpot?", a: "The agreements are tool-independent; the enforcement benefits from a CRM that can score, route, notify, and track follow-up in one place, and HubSpot is the strongest home we know for that. If your enquiries live in spreadsheets and inboxes today, the definitions still come first and the tooling follows." },
];

const checkTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream", "bg-mint"];
const numTones = ["text-brand", "text-grape", "text-brand", "text-grape", "text-brand"];
const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function AlignmentPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-grape/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/35 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">Two teams.<br/>One <span className="text-brand">funnel.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>Marketing to sales alignment writes the agreements both teams run on: one definition of a qualified lead, routing that assigns every enquiry in minutes, and follow-up expectations people actually keep.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss alignment <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this alignment<br/>is <span className="text-brand">for</span>.</>} copy="The gap between marketing and sales is where most growing-company marketing budgets quietly disappear. These are the shapes it takes." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The five <span className="text-brand">agreements</span>.</>} copy="Alignment is not a feeling. It is five written agreements, and here is each one with the rule we apply to it." />
    <div className="mt-16 space-y-5">
      {[[0, 1], [2, 3]].map((row, r) => <div key={r} className="grid gap-5 lg:grid-cols-2">
        {row.map((idx, c) => { const s = agreements[idx]!; return <div key={s.name} className={`flex items-start gap-5 rounded-[2.5rem] border-2 border-ink p-7 shadow-tactile-ink ${idx === 2 ? "bg-sun" : "bg-background"} ${c === 1 ? "lg:mt-8" : ""}`}>
          <span className={`font-display text-4xl font-bold ${idx === 2 ? "text-ink" : numTones[idx]}`}>{`0${idx + 1}`}</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })}
      </div>)}
      <div className="grid gap-5 lg:grid-cols-2">
        {(() => { const s = agreements[4]!; return <div className="flex items-start gap-5 rounded-[2.5rem] border-2 border-ink bg-background p-7 shadow-tactile-ink lg:col-start-1">
          <span className={`font-display text-4xl font-bold ${numTones[4]}`}>05</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })()}
        <div className="flex items-center rounded-[2.5rem] border-2 border-dashed border-ink/30 p-7 lg:mt-8">
          <p className="leading-relaxed text-ink/55">These are the shapes, not the final words. Your agreements get written in your teams' own language, in a room where both sides are heard.</p>
        </div>
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>the <span className="text-brand">handoff</span>.</>} copy="Four principles we refuse to compromise on, because alignment efforts that break them collapse back into blame within a quarter." />
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
    <SectionHead title={<>How alignment <span className="text-brand">happens</span>.</>} copy="Four moves. The conversations come first, and the tooling only gets built on agreements both teams have signed." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Working agreements, wired into the system. Everything below lives where your teams already work, not in a slide deck.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss alignment <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">alignment</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Every agency can promise sales and marketing will finally get along. Here is what actually determines whether they do.</p>
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
    <SectionHead title={<>Where alignment<br/>goes <span className="text-brand">wrong</span>.</>} copy="The four patterns behind funnels where marketing and sales have stopped trusting each other's numbers." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One funnel, argued from the same side.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us how enquiries move from your marketing to your sales team today. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
