import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/audit")({ head: () => ({ meta: [
  { title: "Revenue Process Audit for Growing Teams | Revlyn" },
  { name: "description", content: "A revenue process audit traces one customer journey end to end and shows exactly where leads, deals, and information leak between your teams." },
  { property: "og:url", content: "https://revlyn.io/revops/audit" }, { property: "og:title", content: "Revenue Process Audit for Growing Teams | Revlyn" },
  { property: "og:description", content: "See where your revenue leaks: one customer journey, traced end to end, with the leaks drawn plainly." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Revenue Process Audit for Growing Teams", path: "/revops/audit" }]) },
    { "script:ld+json": serviceSchema({ name: "Revenue Process Audit for Growing Teams", description: "A revenue process audit traces one customer journey end to end and shows exactly where leads, deals, and information leak between your teams.", path: "/revops/audit" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/audit" }] }), component: AuditPage });

const audiences = [
  { title: "The founder who feels the drag", tone: "bg-sun", copy: "Growth is happening, but it is harder than it should be. Enquiries come in, deals close, yet money and time keep disappearing somewhere between the teams. You want to see the somewhere." },
  { title: "The sales head who distrusts the pipeline", tone: "bg-background", copy: "The number in the CRM and the number in your head never match. Before you can fix forecasting, you need to know which deals are real and which are just sitting." },
  { title: "Teams where marketing and sales argue", tone: "bg-grape text-cream", copy: "Marketing says the leads were good, sales says they were not, and neither side has evidence. An audit replaces the argument with a shared picture of what actually happened to the last hundred enquiries." },
  { title: "Anyone about to buy or switch a CRM", tone: "bg-background", copy: "The worst time to buy software is before you understand your own process. An audit first means the new tool is chosen and shaped around how work should move, not around how the mess currently looks." },
];

const journey = [
  { stage: "First enquiry", q: "Where does it land, who sees it, and how fast does someone own it?" },
  { stage: "Qualification", q: "Who decides this lead is worth a salesperson's time, and on what grounds?" },
  { stage: "The handoff to sales", q: "What context travels with the lead, and what has to be asked again?" },
  { stage: "The deal stages", q: "Where do deals stall, for how long, and does anyone notice?" },
  { stage: "The close", q: "What is promised at the moment of yes, and where is it written down?" },
  { stage: "The handoff to delivery", q: "Does the team that delivers hear the promise, with dates and details attached?" },
  { stage: "Repeat and referral", q: "After a happy customer, does anyone systematically ask for the next sale?" },
];

const steps = [
  { title: "Listen", tone: "bg-brand text-cream", copy: "We sit with the people who do the work: the person answering enquiries, the salespeople, the delivery team, the owner. No workshops with sticky notes, just honest conversations about how a real customer moves." },
  { title: "Trace", tone: "bg-mint", copy: "We follow actual enquiries and deals through your systems: the inbox, the spreadsheet, the CRM, WhatsApp. Not how the process is supposed to work, but how this week's customers actually moved." },
  { title: "Map", tone: "bg-sun", copy: "We draw the journey as it is today, with every wait, every re-entry of the same information, and every point where a customer can quietly disappear." },
  { title: "Read out", tone: "bg-grape text-cream", copy: "We walk your team through the findings together. The leaks are usually not news to anyone; seeing them on one page, ranked by what they cost, is." },
];

const deliverables = [
  "A map of your customer journey as it actually runs today, not as any document claims it does",
  "A list of the leaks, ranked by what each one costs you in lost deals, wasted effort, or repeat work",
  "Recommended fixes in the order worth doing them, starting with the ones that need no new software",
  "A clear statement of what not to fix yet, so the work stays sized to your stage",
];

const honest = [
  ["What an audit is not", "It is not a disguised sales pitch for a big engagement. The findings are yours, and some of them will say: you can fix this yourself, this week, for free."],
  ["Not just a tool audit", "We look at your tools, but the real subject is the work itself. Most leaks live between people and teams, not inside software settings."],
  ["When to skip it", "If your whole pipeline genuinely fits in one person's head and nothing falls through, an audit is premature. Come back when the seams start costing you."],
];

const mistakes = [
  { title: "Auditing the org chart, not the journey", copy: "Interviews about roles and responsibilities produce a report about structure. We trace actual customers instead, because that is where the leaks are." },
  { title: "Fixing everything at once", copy: "A list of thirty findings acted on together becomes thirty half-finished changes. The ranking matters more than the list." },
  { title: "Blaming people for process gaps", copy: "When a lead sits unanswered for two days, the cause is almost always a missing owner or rule, not a careless person. The audit finds the missing rule." },
  { title: "Buying software to skip the thinking", copy: "A new tool purchased before the process is understood just moves the mess somewhere more expensive. Audit first, then choose." },
];

const faqs = [
  { q: "How long does an audit take?", a: "It depends on how many teams and systems a customer journey crosses. Most audits run over a few weeks of part-time conversations, scheduled around your team's real work. The first call gives you a realistic shape for your case before you commit to anything." },
  { q: "Will it disrupt the team's work?", a: "Very little. We need conversations with the people who touch the customer journey and read access to the systems involved. Nobody is pulled into day-long workshops, and nobody's work is judged." },
  { q: "What do you need access to?", a: "Whatever the journey touches: the enquiry inbox, the CRM or spreadsheets, the WhatsApp business account if sales happens there, and the invoicing or delivery tools. Read-only is enough. We look at real records because real records, not recollections, show the leaks." },
  { q: "What happens after the audit?", a: "You get the map, the ranked leaks, and the recommended fixes. Some clients implement with us, some take the findings to their own team or another partner, and some fix the top three items and come back a year later. All three are good outcomes." },
  { q: "Is this only for companies using HubSpot?", a: "No. The audit looks at your process, whatever tools you run today. If the findings point toward a CRM change, HubSpot is often the strongest home for the connected operation, and we are a HubSpot Gold Partner. But the audit stands on its own." },
];

const checkTones = ["bg-mint", "bg-brand text-cream", "bg-sun", "bg-grape text-cream"];
const numTones = ["text-brand", "text-grape", "text-brand", "text-grape", "text-brand", "text-grape", "text-brand"];
const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];
const dotTones = ["bg-sun", "bg-mint", "bg-grape"];

function SectionHead({ title, copy }: { title: React.ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed text-ink/60 lg:col-span-4">{copy}</p>
  </div>;
}

function AuditPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-grape/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/35 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">See where your<br/>revenue <span className="text-brand">leaks.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>A revenue process audit traces one customer journey through your business, end to end, and shows you exactly where leads, deals, and information fall through the cracks.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss an audit <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this audit<br/>is <span className="text-brand">for</span>.</>} copy="The audit pays for itself fastest in businesses where the customer journey crosses more than one team, and nobody can see the whole of it." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The journey we <span className="text-brand">trace</span>.</>} copy="Seven stages, each with one question. The leaks almost always live in the space between two of them." />
    <div className="mt-16 space-y-5">
      {[[0, 1], [2, 3], [4, 5, 6]].map((row, r) => <div key={r} className={`grid gap-5 ${row.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {row.map((idx, c) => { const j = journey[idx]!; return <div key={j.stage} className={`flex items-start gap-5 rounded-[2.5rem] border-2 border-ink p-7 shadow-tactile-ink ${idx === 3 ? "bg-sun" : "bg-background"} ${row.length === 2 && c === 1 ? "lg:mt-8" : ""}`}>
          <span className={`font-display text-4xl font-bold ${idx === 3 ? "text-ink" : numTones[idx]}`}>{`0${idx + 1}`}</span>
          <div>
            <h3 className="text-xl font-bold">{j.stage}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{j.q}</p>
          </div>
        </div>; })}
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>How the audit <span className="text-brand">runs</span>.</>} copy="Four moves, each producing something your team can react to. No forty-page strategy deck." />
    <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => <div key={s.title} className={`flex min-h-72 flex-col justify-between gap-8 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 ${s.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <span className="font-display text-5xl font-bold opacity-25">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{s.title}</h3>
          <p className={`mt-3 text-sm font-bold leading-relaxed ${s.tone.includes("text-cream") ? "text-cream/80" : "text-ink/70"}`}>{s.copy}</p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="rounded-[3rem] border-2 border-ink bg-background p-10 shadow-tactile-ink sm:p-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">What you receive.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">Four things, all in plain language, all yours to keep whether or not we ever work together again.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss an audit <ArrowUpRight size={18} /></Link>
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

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="relative overflow-hidden rounded-[3.5rem] bg-ink p-10 text-cream sm:p-14 lg:p-20">
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-64 rounded-full bg-mint/10 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">audits</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Audits have a bad reputation because they are often sold as a doorway to something bigger. Here is how we keep this one clean.</p>
      </div>
      <div className="relative mt-14 grid gap-10 border-t-2 border-cream/15 pt-12 md:grid-cols-3 lg:gap-12">
        {honest.map(([label, copy], i) => <div key={label}>
          <div className={`grid size-12 place-items-center rounded-full ${dotTones[i]}`}>
            <span className={`bg-ink ${i === 0 ? "size-4 rotate-45" : i === 1 ? "h-1 w-6" : "size-3 rounded-full"}`} />
          </div>
          <h3 className="mt-6 text-2xl font-bold" style={{ color: i === 0 ? "var(--color-sun)" : i === 1 ? "var(--color-mint)" : "var(--color-brand)" }}>{label}</h3>
          <p className="mt-3 leading-relaxed text-cream/70">{copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Where audits go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind audit reports that get read once and shelved." />
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

  <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] border-2 border-ink bg-ink p-10 text-center text-cream shadow-tactile-ink sm:p-16">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Start with the leaks you can feel.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us where the journey hurts most today. The first conversation is free and genuinely useful, whether or not an audit follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
