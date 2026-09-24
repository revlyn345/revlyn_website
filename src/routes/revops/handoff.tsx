// ============= Full file contents =============

import { breadcrumbSchema, faqSchema, serviceSchema } from "../../lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/handoff")({ head: () => ({ meta: [
  { title: "Sales to Service Handoff | Revlyn" },
  { name: "description", content: "A handoff where what sales promised actually reaches the team that delivers it: the details, the dates, and the context, attached to the deal the moment it closes." },
  { property: "og:url", content: "https://revlyn.io/revops/handoff" }, { property: "og:title", content: "Sales to Service Handoff | Revlyn" },
  { property: "og:description", content: "What was promised on the call reaches the team that delivers it, with the details and dates attached." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Sales to Service Handoff", path: "/revops/handoff" }]) },
    { "script:ld+json": serviceSchema({ name: "Sales to Service Handoff", description: "A handoff where what sales promised actually reaches the team that delivers it: the details, the dates, and the context, attached to the deal the moment it closes.", path: "/revops/handoff" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/handoff" }] }), component: HandoffPage });

const audiences = [
  { title: "Delivery teams that start from zero", tone: "bg-mint", copy: "The deal closes, the service team gets a name and a phone number, and the first kickoff call begins with the customer repeating everything they already told sales. The relationship starts with a test the customer did not know they were giving." },
  { title: "Customers who hear the same questions twice", tone: "bg-sun", copy: "They explained their requirements to the salesperson, then to the onboarding person, then to the support agent. Each repetition tells them the left hand does not know what the right hand promised." },
  { title: "Founders who discover promises at renewal", tone: "bg-grape text-cream", copy: "Sales said yes to a custom report, a visit, a price. Nobody wrote it down, delivery never heard it, and the customer brings it up angrily months later. The discount that follows comes out of trust as much as margin." },
  { title: "Service teams firefighting preventable escalations", tone: "bg-brand text-cream", copy: "Half the angry tickets trace back to something agreed during the sale and never passed on. The team is not bad at service; they are being set up to fail by a handoff that happens over a hallway sentence." },
];

const agreements = [
  { name: "What a closed deal contains", def: "The minimum a deal must record before it can be marked won: what was promised, to whom, by when, at what price, and what the customer expects to happen next.", rule: "A deal without these fields cannot be closed. The CRM blocks it, kindly, because an incomplete handoff is a debt someone pays later." },
  { name: "When service enters the picture", def: "The point in the sales cycle where delivery gets visibility: a heads-up at proposal stage for large deals, not a surprise on signing day.", rule: "Service sees the pipeline before it closes. A team that can plan capacity delivers better than one that reacts to a notification." },
  { name: "How the handoff actually happens", def: "A structured handoff, not a forwarded email: the deal record carries the context, and for meaningful deals a short call between salesperson and delivery owner seals it.", rule: "The salesperson stays reachable for the first weeks. Questions about intent belong to the person who made the promise." },
  { name: "Who owns the customer next", def: "The exact moment ownership passes from sales to service, with a named person on each side and the customer told who to contact from now on.", rule: "Ownership is never ambiguous for even a day. The customer always has one name, and so does your team." },
  { name: "How delivery feeds back to sales", def: "A path for what service learns: what the customer actually uses, what they struggle with, when they are ready for more. That intelligence belongs to the next sales conversation.", rule: "The handoff is a loop, not a one-way door. Renewal and expansion start with what delivery observes, not with a calendar reminder." },
];

const rules = [
  { title: "Promises are fields, not memories", tone: "bg-brand text-cream", copy: "Anything the customer will hold you to gets written on the deal while the salesperson still remembers the conversation. If it is not on the record, it was not promised, and everyone knows which side that rule protects." },
  { title: "Sales hears the consequences", tone: "bg-mint", copy: "Delivery's feedback on overpromising reaches sales regularly and specifically, with examples. Most overpromising is optimism, not malice, and it corrects fast when the people making promises see what they cost." },
  { title: "The customer feels one company", tone: "bg-sun", copy: "From the buyer's side there is no handoff at all: the next person already knows the story, the kickoff confirms rather than rediscovers, and nobody asks them to repeat themselves." },
  { title: "Slow beats broken", tone: "bg-grape text-cream", copy: "A deal that waits a day for complete notes is far cheaper than a delivery that starts wrong. The pressure to close fast never justifies handing over empty." },
];

const steps = [
  { title: "Listen", copy: "We sit with sales and service separately: what sales believes they hand over, what delivery actually receives, and which escalations trace back to the gap. The two descriptions are always instructively different." },
  { title: "Define", copy: "In one room, both sides write the handoff standard: the required fields, the entry point for service visibility, the moment ownership passes, and what the customer is told. Expect negotiation here; that is the work." },
  { title: "Wire", copy: "The standard becomes required deal fields, handoff notifications, onboarding pipelines, and feedback tickets inside the CRM. A deal cannot close incomplete, and delivery cannot miss a handoff that arrives with a name and a clock." },
  { title: "Review", copy: "A short monthly look at handoff quality: kickoffs that started smoothly, escalations that traced back to missing context, and what service learned that sales should know. The standard gets sharper and the blame loop dies." },
];

const deliverables = [
  "A written handoff standard: what every closed deal must contain before it counts as won",
  "Required deal fields in the CRM, so a promise cannot be left in someone's memory",
  "A delivery pipeline that receives every new customer automatically, with an owner and a kickoff clock",
  "A handoff ritual for meaningful deals, where sales briefs the delivery owner directly",
  "A feedback path from service to sales, so what delivery learns shapes the next sale and the renewal",
];

const honest = [
  ["Sales will feel policed at first", "Required fields at the moment of closing feel like bureaucracy to a team that has always closed freely. That reaction is normal, and it fades within weeks, the first time a kickoff starts smoothly because everything was written down."],
  ["This exposes overpromising", "When promises become fields, the gap between what sells and what delivers becomes visible. That visibility is the point, but it can be uncomfortable for people who have closed deals on optimism. Handle it as coaching, not gotcha."],
  ["The ritual matters more than the fields", "For anything beyond small deals, the short call between salesperson and delivery owner is where context actually transfers. The fields make the call possible; they do not replace it."],
];

const mistakes = [
  { title: "The forwarded email handoff", copy: "Sales forwards the proposal thread to a service alias and considers the job done. Buried in forty messages is everything that matters, so delivery skims, misses the one custom commitment, and the customer notices first." },
  { title: "Closing first, recording never", copy: "The deal is marked won in the celebration moment, with a sincere intention to fill in the notes tomorrow. Tomorrow there is a new deal to chase, and the notes never happen. A field that can be skipped will be." },
  { title: "Service as a surprise", copy: "Delivery learns about new customers from the same notification the customer gets, with no visibility during the sales cycle. Capacity planning becomes guesswork and every kickoff starts on the back foot." },
  { title: "A one-way door", copy: "Everything flows from sales to service and nothing flows back, so what delivery learns about usage, struggles, and expansion readiness never reaches the person who owns the renewal. The next sale starts from zero too." },
];

const faqs = [
  { q: "Our deals are small. Do we really need a formal handoff?", a: "You need a proportionate one. For small deals the whole handoff might be five required fields and an automatic task for the delivery owner, which takes minutes. The formal call is for meaningful deals. The principle is not paperwork; it is that the customer never repeats themselves and nothing promised lives only in a salesperson's memory." },
  { q: "Won't required fields slow our sales team down?", a: "By minutes per deal, yes, and that is the cheapest insurance you will ever buy. A deal delayed by a day of note-taking costs almost nothing; a delivery that starts wrong costs the customer's confidence and often the discount that follows the apology. Most sales teams stop resenting the fields the first time a kickoff goes smoothly because of them." },
  { q: "What if sales genuinely cannot know what delivery needs?", a: "Then delivery writes the field list, which is exactly how we run it. The people who receive the handoff define what a good one contains, because they know which missing detail ruins a kickoff. Sales reviews it for realism, and both sides sign it. Nobody should be filling in fields whose purpose they cannot explain." },
  { q: "How do we stop overpromising without scaring sales?", a: "By making the feedback specific and regular rather than accusatory. When delivery can say, this month three kickoffs stumbled on commitments we could not keep, here they are, the pattern corrects itself. Most overpromising is optimism in a competitive moment, and it shrinks fast when the people making promises see clearly what each one costs." },
  { q: "Does this need HubSpot?", a: "The standard and the ritual are tool-independent. The enforcement benefits from a CRM where required fields, handoff notifications, and the delivery pipeline live in one place, and HubSpot is the strongest home we know for it. If your deals close in a spreadsheet today, the written standard still comes first." },
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

function HandoffPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-sun/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-brand/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-mint/35 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">Sold once.<br/>Kept as <span className="text-brand">promised.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>Sales to service handoff writes the standard every closed deal travels with: what was promised, to whom, by when, and who owns the customer from the moment the contract is signed.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss the handoff <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this handoff<br/>is <span className="text-brand">for</span>.</>} copy="The gap between what was sold and what gets delivered is where hard-won customers quietly decide not to renew. These are the shapes it takes." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The five <span className="text-brand">agreements</span>.</>} copy="A good handoff is not a habit. It is five written agreements between sales and service, and here is each one with the rule we apply to it." />
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
          <p className="leading-relaxed text-ink/55">These are the shapes, not the final words. Your handoff standard gets written in your teams' own language, in a room where both sides are heard.</p>
        </div>
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>the <span className="text-brand">handoff</span>.</>} copy="Four principles we refuse to compromise on, because handoff efforts that break them quietly return to hallway sentences within a quarter." />
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
    <SectionHead title={<>How the handoff<br/>gets <span className="text-brand">built</span>.</>} copy="Four moves. The conversations come first, and the tooling only gets built on a standard both teams have signed." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A working handoff, wired into the system. Everything below lives where your teams already work, not in a slide deck.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss the handoff <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">handoffs</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Every agency can promise a smoother handoff. Here is what actually determines whether it holds.</p>
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
    <SectionHead title={<>Where handoffs<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind deliveries that start wrong and renewals that arrive as a surprise." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">One customer, remembered end to end.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what your service team actually receives when a deal closes today. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
