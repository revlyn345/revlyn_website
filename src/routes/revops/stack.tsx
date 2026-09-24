import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/stack")({ head: () => ({ meta: [
  { title: "Tech Stack Consolidation | Revlyn" },
  { name: "description", content: "Choosing and connecting the fewest tools that support your process, and retiring the spreadsheets and side apps that duplicate them, so information flows once instead of being re-entered everywhere." },
  { property: "og:url", content: "https://revlyn.io/revops/stack" }, { property: "og:title", content: "Tech Stack Consolidation | Revlyn" },
  { property: "og:description", content: "The fewest tools that support the process, connected so information flows once instead of being re-entered in three places." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "Tech Stack Consolidation", path: "/revops/stack" }]) },
    { "script:ld+json": serviceSchema({ name: "Tech Stack Consolidation", description: "Choosing and connecting the fewest tools that support your process, and retiring the spreadsheets and side apps that duplicate them, so information flows once instead of being re-entered everywhere.", path: "/revops/stack" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/stack" }] }), component: StackPage });

const audiences = [
  { title: "Owners paying for tools nobody uses", tone: "bg-sun", copy: "The subscription list has grown one app at a time: a CRM, two trackers, a form builder, a note app someone loved in 2023. Nobody can say which are load-bearing, so all of them keep billing." },
  { title: "Teams re-entering data three times", tone: "bg-mint", copy: "The lead is typed into the website form, copied into the CRM, and pasted into the follow-up sheet. Every re-entry is a chance to mistype, and the customer becomes three slightly different people across your systems." },
  { title: "Managers running the CRM beside a spreadsheet", tone: "bg-brand text-cream", copy: "The CRM is official, but the real pipeline lives in the sheet the manager trusts, because it has the columns the CRM never got. Two systems, two truths, and the CRM slowly becomes an archive nobody works in." },
  { title: "Founders glued together with WhatsApp", tone: "bg-grape text-cream", copy: "Nothing is connected, so the founder is the integration: forwarding screenshots, re-typing details, reminding sales to update the record. The business runs on a person, and that person cannot take a week off." },
];

const verdicts = [
  { name: "Keep", tone: "bg-mint", copy: "The tool has one clear job, does it well, and holds data nothing else holds. It stays, and it gets connected so its information reaches the rest of the stack without re-typing.", rule: "A tool with a real job is not a legacy problem. Consolidation is not a licence to strip everything out." },
  { name: "Connect", tone: "bg-sun", copy: "Two tools each hold half the truth. We decide which one owns the record, wire the flow between them, and make the handoff automatic instead of somebody's Friday chore.", rule: "One home per data type. The customer record lives in exactly one system, and everything else reads from it." },
  { name: "Retire", tone: "bg-brand text-cream", copy: "The spreadsheet or side app duplicates what the core already does. Its data moves, the people who used it are shown where their columns now live, and the tool is switched off with its users present.", rule: "Retire with the people, not at them. A tool is only dead when its users have moved, not when IT says so." },
];

const rules = [
  { title: "Process before the stack", tone: "bg-brand text-cream", copy: "The tool list is downstream of how work moves. We map the process first, then every tool either earns its place supporting it or is named for retirement." },
  { title: "One home per data type", tone: "bg-mint", copy: "Customer records, payments, tickets: each kind of data has one system of record and one owner. Everything else views, never duplicates. This single rule prevents most of the mess." },
  { title: "Enter information once", tone: "bg-sun", copy: "If a detail is typed into two systems, one of them is a copy that will drift. Data flows through connections, not through people re-typing between tabs." },
  { title: "A gate for new tools", tone: "bg-grape text-cream", copy: "Stacks regrow one well-intentioned app at a time. We leave behind a simple rule: a new tool must name the job it does and which existing record is its master." },
];

const steps = [
  { title: "Inventory", copy: "We list every tool, spreadsheet, and WhatsApp workaround in use: what work it does, what data it holds, who depends on it, and what it costs. The list itself is often a surprise." },
  { title: "Decide", copy: "Each tool gets one of three verdicts: keep, connect, or retire, agreed with the people who actually use it. Negotiation is expected here; a verdict nobody contested was probably not examined." },
  { title: "Wire", copy: "The kept tools are connected so information flows once, into one customer record. Integrations are built and tested against real entries, not a sample of one." },
  { title: "Retire", copy: "The duplicates are switched off on a planned date: data migrated first, users shown where their columns now live, and the old link removed only when nobody opens it anymore." },
];

const deliverables = [
  "A written stack inventory: every tool, the job it does, the data it holds, and what it costs",
  "Keep, connect, and retire verdicts agreed with the teams who use each tool",
  "One connected core, with the CRM as the single home of the customer record",
  "Migration of the data worth keeping, with history preserved where it matters",
  "A sunset plan for the retired tools and an approval rule that keeps the stack from regrowing",
];

const honest = [
  ["Consolidation is a people project", "The spreadsheet somebody guards is not a file, it is their workflow. It only retires when what it did exists somewhere better and they trust it. The technical move is the easy half; the adoption is the work."],
  ["Some tools should stay", "We do not consolidate for the sake of a smaller list. A tool with one clear job, held data nothing else has, and users who depend on it is a keeper. Forcing it out creates the next workaround."],
  ["The saving is time before money", "Cancelled subscriptions are real but small. The larger saving is the hours lost to re-entry, swivel-chair errors, and being the human who moves data between systems by hand."],
];

const mistakes = [
  { title: "The big-bang rip-out", copy: "Everything is replaced at once, and when the new system stumbles there is nothing to fall back on except a folder of exports. We retire in sequence, with the kept tools proven before the old ones close." },
  { title: "The ban nobody obeys", copy: "The spreadsheet is banned in a meeting and the work quietly continues there, now invisible. A tool retires when its job is covered somewhere better, never by decree." },
  { title: "Connecting everything to everything", copy: "Consolidation turns into integration sprawl: eight tools, fifteen connections, and one broken sync nobody notices for weeks. Fewer tools, wired simply, beats many tools wired cleverly." },
  { title: "Buying the suite to solve it", copy: "A single giant platform is purchased before the process is defined, and the old mess is carried into it tool by tool. Software amplifies whatever it is given, including a mess." },
];

const faqs = [
  { q: "Do we need to buy a big platform to consolidate?", a: "No, and sometimes that would make things worse. Consolidation means the fewest tools that support your process, which might mean three well-connected tools rather than one suite. The process mapping decides the shape first; the purchase, if any, comes second." },
  { q: "What about our spreadsheets?", a: "A spreadsheet that runs part of your business is not a file, it is a workflow. We read what it actually does, rebuild that capability in the system of record, and retire the sheet only when its owner has moved. In our experience nobody gives up the sheet until something better covers their columns." },
  { q: "Will we lose data when we retire a tool?", a: "Not silently. Every retirement comes with a migration plan: what moves, what is archived as a read-only export, and what genuinely can be let go. We are straight about what history cannot be reconstructed, and we never switch a tool off before its data is somewhere agreed." },
  { q: "Can you work with tools we have already chosen?", a: "Yes. The verdicts can be keep, and often are. When a team is rethinking its core system, HubSpot is the home we know best for marketing, sales, and service data, and we are a HubSpot Gold Partner, but the inventory and verdicts are tool-neutral and come first either way." },
  { q: "How do we stop the stack from growing again?", a: "With one rule owned by one person: a new tool must name the job it does, name which existing record is its master, and get an owner's sign-off. Stacks do not regrow through recklessness, they regrow through shortcuts nobody examined. The gate makes the examination two minutes long." },
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

function StackPage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-sun/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-mint/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-grape/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">The right few.<br/>All <span className="text-brand">connected.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>Tech stack consolidation chooses and connects the fewest tools that support your process, and retires the spreadsheets and side apps quietly duplicating them.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss your stack <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this work<br/>is <span className="text-brand">for</span>.</>} copy="Nobody sets out to build a mess. It assembles one tool at a time, each bought for a good reason, until the connections run through people." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Three verdicts for<br/>every <span className="text-brand">tool</span>.</>} copy="Once the inventory is written, every tool gets one of three verdicts. Here is each, with the rule that keeps the decision honest." />
    <div className="mt-16 space-y-6">
      {verdicts.map((v, i) => <div key={v.name} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink ${v.tone} ${i % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
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
    <SectionHead title={<>The rules behind<br/>the <span className="text-brand">stack</span>.</>} copy="Four principles we refuse to compromise on, because a stack that breaks them quietly grows back within a year." />
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
    <SectionHead title={<>How the consolidation<br/>gets <span className="text-brand">done</span>.</>} copy="Four moves. Nothing is switched off until its replacement is proven and its people have moved." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A shorter, connected stack, and the discipline that keeps it short. Everything below is written down and handed over, not kept in our heads.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-mint px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your stack <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">consolidation</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Anyone can promise a shorter tool list. Here is what actually decides whether the short one sticks.</p>
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
    <SectionHead title={<>Where consolidation<br/>goes <span className="text-brand">wrong</span>.</>} copy="The four patterns behind tool cleanups that make the mess larger before it gets smaller." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Fewer tools, doing the whole job.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us which tools your teams juggle today. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
