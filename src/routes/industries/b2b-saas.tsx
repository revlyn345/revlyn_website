import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/industries/b2b-saas")({ head: () => ({ meta: [
  { title: "CRM for B2B SaaS Teams | Revlyn" },
  { name: "description", content: "A CRM set up for demo-to-renewal selling: trial pipelines with real stage definitions, account records that continue past closed-won, and renewals tracked where sellers work." },
  { property: "og:title", content: "CRM for B2B SaaS Teams | Revlyn" },
  { property: "og:description", content: "Trial pipelines with real stage definitions, accounts that continue past closed-won, and renewals tracked where sellers work." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://revlyn.io/industries/b2b-saas" },
  { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Industries", path: "/industries" }, { name: "CRM for B2B SaaS Teams", path: "/industries/b2b-saas" }]) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/industries/b2b-saas" }] }), component: B2BSaasPage });

const audiences = [
  { title: "Founders who close every deal", tone: "bg-sun", copy: "Founder-led sales works until the calendar is full. Then hiring a second seller means starting the pipeline from scratch, because the reasoning behind every deal lived in the founder's head." },
  { title: "Sales leads running trial pipelines", tone: "bg-mint", copy: "Demo, trial, decision: the stages exist, but every rep marks them differently, and the forecast is a Sunday-night guess stitched from memory and hope." },
  { title: "Customer success without signals", tone: "bg-brand text-cream", copy: "Renewals are the revenue engine, but the CRM stops at closed-won. Nobody sees which accounts have gone quiet until the renewal call, when it is too late." },
  { title: "Marketers judged on raw signups", tone: "bg-grape text-cream", copy: "Signups are counted as wins, but half never talk to anyone. Marketing optimises volume the sales team quietly ignores, and both miss what a good lead looks like." },
];

const stages = [
  { name: "Enquiry", tone: "bg-sun", copy: "Someone asks for a demo or pricing. Every enquiry gets an owner the same day, and the CRM is where that ownership is visible, not in an inbox that forgets.", rule: "An enquiry without an owner is a competitor's future customer." },
  { name: "Demo", tone: "bg-mint", copy: "The buyer sees the product. A demo counts when it happened, with who attended and what they asked for written on the deal, not remembered next week.", rule: "The stage moves on evidence, not optimism." },
  { name: "Trial or proof of concept", tone: "bg-brand text-cream", copy: "The buyer tests the product with real work. The trial carries a success question agreed upfront, so both sides know what done looks like.", rule: "A trial without an agreed success question is a polite no in slow motion." },
  { name: "Decision", tone: "bg-grape text-cream", copy: "Procurement, paperwork, signatures. The stage holds the paperwork checklist, so nothing stalls for a week in somebody's inbox.", rule: "Late-stage stalls are administrative; treat them that way." },
  { name: "Customer", tone: "bg-sun", copy: "The account record begins its second life. Renewals, expansions, and churn live on the account, beside the history that won the deal.", rule: "Closed-won is where the record starts earning, not where it ends." },
];

const rules = [
  { title: "Stages name buyer actions", tone: "bg-brand text-cream", copy: "A stage is named after something the buyer does, not how the seller feels. Demo done means a demo happened. Evaluating is not a stage; it is a feeling." },
  { title: "The record survives closed-won", tone: "bg-mint", copy: "The account keeps its history: who bought, why, what was promised, what they use. Renewals are run from that record, not from a spreadsheet rebuilt every year." },
  { title: "Usage data meets pipeline data", tone: "bg-sun", copy: "The product shows who is active; the CRM shows who owns them. Connected, they tell you which accounts to call months before renewal." },
  { title: "Forecasts from definitions", tone: "bg-grape text-cream", copy: "When stages have entry criteria, the forecast is arithmetic. When they do not, it is mood. We would rather argue about criteria than about the number." },
];

const steps = [
  { title: "Map", copy: "We trace how a buyer actually moves through your funnel today: first visit, demo, trial, decision, onboarding, renewal. The gaps show up fast when it is written down." },
  { title: "Define", copy: "Stages, entry criteria, and ownership are agreed with the people who live in the pipeline. The conversation about what a stage means is the work, not overhead." },
  { title: "Wire", copy: "The CRM is configured to match, and connected to billing and product data where connections exist, so accounts carry one history instead of three." },
  { title: "Review", copy: "A weekly rhythm where pipeline and renewal numbers are read from the system, not from memory. The definitions get tested by real deals immediately." },
];

const deliverables = [
  "A written lifecycle: stages, definitions, and exit criteria from first visit to renewal",
  "A CRM configured for demo-to-renewal selling, with the deal types your funnel actually uses",
  "Account records that continue past closed-won, with renewals and churn tracked on the account",
  "Connections to billing and product data where they exist, so usage sits beside the pipeline",
  "A weekly pipeline and renewal review your team can run without us",
];

const honest = [
  ["Early stage means fewer stages", "If three people run the whole funnel, a heavy enterprise pipeline is overhead, not discipline. We right-size the process to the size of the sale, and it grows when you do."],
  ["Usage data is half the story", "The CRM shows intent and ownership; the product shows engagement. Neither alone predicts a renewal, and we do not pretend otherwise. Decisions improve when both are read together."],
  ["Churn is found earlier than it is fixed", "A connected system tells you an account has gone quiet months before renewal. Saving it still depends on someone acting on the signal, and on the relationship being real."],
];

const mistakes = [
  { title: "Importing an enterprise process", copy: "Stage gates, committees, and documents copied from a larger company slow a small team without protecting it. The process should fit the size of the sale you actually make." },
  { title: "The forecast of good intentions", copy: "Reps mark stages by feel, the pipeline reads healthy, and the quarter lands short. Without agreed definitions, the number measures confidence, not reality." },
  { title: "CRM ends at closed-won", copy: "The record that won the deal is abandoned the day the customer signs, and the renewal is run from a spreadsheet again. The account history is the asset; most teams throw it away." },
  { title: "Counting every signup as a lead", copy: "Every signup becomes a lead, sales ignores most of them, and marketing keeps counting. Quality criteria agreed between the teams fix this; volume goals alone never do." },
];

const faqs = [
  { q: "We are a small team. Do we really need a lifecycle?", a: "You already have one; it is just unwritten. If buyers move from demo to trial to decision, naming those steps and agreeing what each means takes a short workshop and saves your next hire from guessing. Small teams need the definitions more than big ones, because there is nobody to overhear the context." },
  { q: "Should product usage data live in the CRM?", a: "The signals that change what a seller does this week belong where sellers work. We connect what is practical and honest about what is not: if the data has no way in, we define the import that replaces re-typing, rather than promising an integration that does not exist." },
  { q: "What about billing and payment data?", a: "Invoices and payment status matter for renewals and for knowing who is actually paying. Where your billing tool offers a connection, we wire it. Where it does not, we design the smallest reliable way to get the numbers into the account record." },
  { q: "Do we have to use HubSpot for this?", a: "No. The lifecycle and the definitions matter more than the tool. That said, when a SaaS team is choosing or reworking its CRM, HubSpot is the home we know best for marketing, sales, and service data, and we are a HubSpot Gold Partner. The first call settles what fits your case." },
  { q: "Our CRM is already set up. Can you review it?", a: "Yes, and that is often the right first step. We walk one recent deal through the system end to end and show you where the stages disagree with reality, where the record goes dark after closed-won, and what the forecast is actually made of. You can take that review and do the work yourself." },
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

function B2BSaasPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-sun/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-mint/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-grape/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">Demo to renewal.<br/>One <span className="text-brand">pipeline.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>A CRM set up for how B2B SaaS actually sells: trial pipelines with real stage definitions, and account records that keep working after closed-won.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss your funnel <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this page<br/>is <span className="text-brand">for</span>.</>} copy="SaaS pipelines rarely collapse dramatically. They drift: stages loosen, the forecast softens, renewals surprise everyone." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The stages buyers<br/>actually <span className="text-brand">move</span>.</>} copy="SaaS pipelines fail when stages describe the seller's mood instead of the buyer's progress. These five are the frame we start from, tuned to how you sell." />
    <div className="mt-16 space-y-6">
      {stages.map((v, i) => <div key={v.name} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink ${v.tone} ${i % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
        <span className="font-display text-5xl font-bold opacity-30">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{v.name}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{v.copy}</p>
          <p className="mt-3 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{v.rule}</span></p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Four rules for<br/>SaaS <span className="text-brand">pipelines</span>.</>} copy="Principles we refuse to compromise on, because a pipeline that breaks them quietly stops describing reality." />
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
    <SectionHead title={<>How the setup<br/>gets <span className="text-brand">done</span>.</>} copy="Four moves. The definitions are agreed with your team before the software is touched." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A pipeline your team trusts and account records that survive closed-won. Everything below is written down and handed over, not kept in our heads.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-mint px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your funnel <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">SaaS pipelines</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Anyone can promise a forecast you can trust. Here is what actually decides whether it deserves trust.</p>
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
    <SectionHead title={<>Where SaaS pipelines<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind pipelines that read healthy and land short." />
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {mistakes.map((m, i) => <article key={m.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 ${i % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
        <div className="grid size-12 place-items-center rounded-full bg-grape/15 text-grape"><X size={22} strokeWidth={3} /></div>
        <h3 className="mt-5 text-2xl font-bold">{m.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Common <span className="text-brand">questions</span>.</>} copy="The things founders and sales leads ask us most, answered the way we answer them on a call. Nothing here hides behind a click." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">A pipeline the numbers trust.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us how your funnel runs today, demo to renewal. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/industries" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All industries</Link>
    </div>
  </div></section>
</main> }
