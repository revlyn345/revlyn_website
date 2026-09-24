import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/reporting")({ head: () => ({ meta: [
  { title: "Revenue Reporting and Forecasting | Revlyn" },
  { name: "description", content: "Shared dashboards and a weekly and monthly review rhythm, built on definitions every team agrees on, so every meeting starts from the same numbers." },
  { property: "og:url", content: "https://revlyn.io/revops/reporting" }, { property: "og:title", content: "Revenue Reporting and Forecasting | Revlyn" },
  { property: "og:description", content: "Shared dashboards and a review rhythm, so every team argues from the same numbers." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Revenue Reporting and Forecasting", path: "/revops/reporting" }]) },
    { "script:ld+json": serviceSchema({ name: "Revenue Reporting and Forecasting", description: "Shared dashboards and a weekly and monthly review rhythm, built on definitions every team agrees on, so every meeting starts from the same numbers.", path: "/revops/reporting" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/reporting" }] }), component: ReportingPage });

const audiences = [
  { title: "Owners who run the business from screenshots", tone: "bg-sun", copy: "The sales head sends a pipeline image on WhatsApp, marketing exports their own sheet, and the real picture is stitched together in the owner's head at midnight. The business deserves better memory than a phone gallery." },
  { title: "Sales heads whose forecast never lands", tone: "bg-mint", copy: "Every month the number promised to the owner arrives wrong by a wide margin, and nobody can say whether the stages, the optimism, or the data is to blame. Forecasting becomes a guess dressed as a commitment." },
  { title: "Teams that argue about the numbers", tone: "bg-brand text-cream", copy: "Marketing says one lead count, sales says another, and the weekly meeting opens with ten minutes of whose number is right. The debate about the scoreboard replaces the game itself." },
  { title: "Founders deciding on gut feel", tone: "bg-grape text-cream", copy: "Where to spend next quarter's budget, which product line is quietly dying, when to hire. The answers exist inside the business, scattered across systems nobody reads together, so instinct fills the gap." },
];

const reports = [
  { name: "The pipeline, one count", def: "Every open deal by stage, valued the same way, from one source. Marketing, sales, and the owner see the same number because it is the same number.", rule: "One definition per quantity. When a number is disputed, we fix the definition, not the meeting." },
  { name: "Conversion stage by stage", def: "How many enquiries become qualified, how many qualified become proposals, how many proposals close. The funnel's weak joints show themselves instead of hiding inside a total.", rule: "Stages mean the same thing in every report. This is why pipeline design comes before reporting." },
  { name: "Source to revenue", def: "Not leads by source, which flatters the cheapest channel, but revenue by source, which shows what actually pays. Marketing finally gets judged on what it earns.", rule: "Follow the money, not the activity. Enquiries are a cost; closed revenue is a result." },
  { name: "The forecast", def: "A weighted view of what is likely to close this month and this quarter, built from stage conversion history rather than the salesperson's optimism alone.", rule: "A forecast is a commitment the pipeline must support. If the pipeline cannot say it, nobody says it." },
  { name: "Delivery and retention", def: "What happens after the sale: onboarding completed, escalations raised, customers retained and expanded. Revenue reporting that stops at the invoice misses half the business.", rule: "Renewal revenue is revenue. The loop from service back to sales belongs on the same scoreboard." },
];

const rules = [
  { title: "Definitions before dashboards", tone: "bg-brand text-cream", copy: "A chart of an undefined number is a disagreement in costume. We agree what a lead, a stage, and a closed deal mean in writing, and only then draw anything." },
  { title: "Reports live where work happens", tone: "bg-mint", copy: "Dashboards sit inside the CRM, one click from the deals they describe. The slide deck exported every Friday is where numbers go to die." },
  { title: "The forecast comes from the pipeline", tone: "bg-sun", copy: "Not from a spreadsheet where the number is typed in to match the meeting. When the pipeline is maintained, the forecast is a reading, not a ritual." },
  { title: "A rhythm, not a dashboard", tone: "bg-grape text-cream", copy: "Numbers change decisions only in meetings where they are actually looked at. The weekly review and monthly definitions check are part of the build, not an afterthought." },
];

const steps = [
  { title: "Listen", copy: "We sit in your review meetings first: which numbers get argued, which get trusted, and which are ignored. The arguments are the specification." },
  { title: "Define", copy: "In one room, the team agrees the definitions in writing: what counts as a lead, when a deal enters a stage, what makes it closed. Expect negotiation here; that is the work." },
  { title: "Wire", copy: "The definitions become required fields, pipelines, and dashboards inside the CRM. Every report a meeting needs is one click away, and every number traces back to a deal." },
  { title: "Review", copy: "The rhythm takes over: a weekly pipeline review that starts from the dashboard, a monthly check that definitions still hold, and a forecast that gets sharper every cycle." },
];

const deliverables = [
  "A written definitions page: what every number means, agreed and signed by the teams that use it",
  "A pipeline dashboard showing every open deal by stage, from one source everyone trusts",
  "Conversion and source-to-revenue reports, so the funnel's weak joints are visible",
  "A weighted forecast built from stage history, reviewed in a weekly rhythm",
  "A monthly review agenda that keeps the definitions honest as the business grows",
];

const honest = [
  ["A dashboard is not the outcome", "The outcome is a meeting where a number changes a decision. Dashboards nobody opens are common; the rhythm that reads them is the actual deliverable, and it needs an owner."],
  ["Good numbers expose uncomfortable things", "Conversion that is worse than assumed, a channel that costs more than it earns, a forecast habit of optimism. That visibility is the point, but it asks for a culture of coaching rather than blame."],
  ["Forecasting is a habit, not a formula", "The first forecast we build together will be wrong, and the third will be close. Accuracy comes from reviewing the miss openly each month, which is why the rhythm matters more than the model."],
];

const mistakes = [
  { title: "The slide deck ritual", copy: "Every Friday someone exports numbers into slides, formats them for an hour, and the meeting reads them aloud. By the time the deck is done the week has moved on, and no decision has." },
  { title: "Measuring what flatters", copy: "Leads generated, emails sent, calls made. Activity metrics are easy to grow and say nothing about revenue. What is measured drifts toward what is comfortable unless revenue is on the same page." },
  { title: "The typed-in forecast", copy: "The number for the board meeting is typed into a spreadsheet until it looks achievable. The pipeline that could actually support it sits unopened, and the miss arrives every quarter like clockwork." },
  { title: "Dashboards for everything", copy: "Forty charts, each defended by a different team, none owned by a meeting. When everything is a dashboard, nothing is a decision. Five numbers that get read beat fifty that get built." },
];

const faqs = [
  { q: "We already have reports in spreadsheets. Why change?", a: "Because the spreadsheet is where the arguments start: someone exported on Tuesday, someone else on Thursday, and the numbers differ. Reports built inside the CRM read from the same records your teams work in, so there is nothing to export and nothing to dispute. Keep the spreadsheet for modelling; the scoreboard moves into the system." },
  { q: "Our data is messy. Can we still report on it?", a: "The mess becomes part of the plan. Reporting forces the data question, and the honest sequence is to define the fields, clean what history allows, and start keeping score from a known date. We will not pretend last year's data is reliable when it is not; we will make next quarter's numbers solid." },
  { q: "How accurate can a forecast really be for a small team?", a: "Accurate enough to plan hiring and spending, which is its job. The first months are the calibration period: we review each miss openly, adjust the weighting, and the forecast tightens. A forecast that lands within a small band, month after month, changes how confidently you can commit." },
  { q: "Who in our team should own the reporting?", a: "One named person who runs the weekly review and guards the definitions. In smaller teams that is often the founder or a senior manager, and it should not be whoever has spare time. We set the role up and hand over the rhythm rather than making you dependent on us." },
  { q: "Does this need HubSpot?", a: "The definitions and the rhythm are tool-independent, and they come first. The dashboards, weighted forecast, and review cadence are strongest when they live in the same system the teams work in, and HubSpot is the home we know best for that. If your pipeline lives elsewhere today, the written definitions still come first." },
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

function ReportingPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-sun/30 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">Same numbers.<br/>Real <span className="text-brand">decisions.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>Revenue reporting and forecasting gives every team the same numbers on definitions they helped write, in dashboards the weekly meeting actually reads, with a forecast the pipeline can defend.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss your reporting <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this reporting<br/>is <span className="text-brand">for</span>.</>} copy="Reporting is not a reporting problem. It is what happens when the scoreboard is trusted, and these are the shapes of not trusting it." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The five numbers<br/>that earn their <span className="text-brand">meeting</span>.</>} copy="Most businesses need five reports, not fifty. Here is each one with the rule that keeps it honest." />
    <div className="mt-16 space-y-5">
      {[[0, 1], [2, 3]].map((row, r) => <div key={r} className="grid gap-5 lg:grid-cols-2">
        {row.map((idx, c) => { const s = reports[idx]!; return <div key={s.name} className={`flex items-start gap-5 rounded-[2.5rem] border-2 border-ink p-7 shadow-tactile-ink ${idx === 2 ? "bg-mint" : "bg-background"} ${c === 1 ? "lg:mt-8" : ""}`}>
          <span className={`font-display text-4xl font-bold ${idx === 2 ? "text-ink" : numTones[idx]}`}>{`0${idx + 1}`}</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })}
      </div>)}
      <div className="grid gap-5 lg:grid-cols-2">
        {(() => { const s = reports[4]!; return <div className="flex items-start gap-5 rounded-[2.5rem] border-2 border-ink bg-background p-7 shadow-tactile-ink lg:col-start-1">
          <span className={`font-display text-4xl font-bold ${numTones[4]}`}>05</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })()}
        <div className="flex items-center rounded-[2.5rem] border-2 border-dashed border-ink/30 p-7 lg:mt-8">
          <p className="leading-relaxed text-ink/55">Five is the starting set, not a ceiling. Your reports get built around the decisions your meetings actually make, in language your teams chose.</p>
        </div>
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>the <span className="text-brand">numbers</span>.</>} copy="Four principles we refuse to compromise on, because reporting that breaks them quietly becomes a slide deck within a quarter." />
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
    <SectionHead title={<>How the reporting<br/>gets <span className="text-brand">built</span>.</>} copy="Four moves. The definitions come first, and the dashboards only get drawn once the numbers have agreed meanings." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A working reporting rhythm, wired into the system. Everything below lives where your teams already work, not in a slide deck.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your reporting <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">reporting</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Every agency can promise dashboards. Here is what actually determines whether the numbers get used.</p>
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
    <SectionHead title={<>Where reporting<br/>goes <span className="text-brand">wrong</span>.</>} copy="The four patterns behind dashboards that get built and numbers that never get used." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One scoreboard, every meeting.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us which numbers your teams argue about today. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
