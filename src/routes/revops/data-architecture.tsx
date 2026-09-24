import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, X, Check } from "lucide-react";

export const Route = createFileRoute("/revops/data-architecture")({ head: () => ({ meta: [
  { title: "CRM and Data Architecture | Revlyn" },
  { name: "description", content: "One record per customer, field definitions your whole team shares, and dedupe and hygiene rules that keep the foundation your reports stand on clean." },
  { property: "og:url", content: "https://revlyn.io/revops/data-architecture" }, { property: "og:title", content: "CRM and Data Architecture | Revlyn" },
  { property: "og:description", content: "One record per customer, shared field definitions, and hygiene rules that keep the foundation your reports stand on clean." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "RevOps", path: "/revops" }, { name: "CRM and Data Architecture", path: "/revops/data-architecture" }]) },
    { "script:ld+json": serviceSchema({ name: "CRM and Data Architecture", description: "One record per customer, field definitions your whole team shares, and dedupe and hygiene rules that keep the foundation your reports stand on clean.", path: "/revops/data-architecture" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/revops/data-architecture" }] }), component: DataArchitecturePage });

const audiences = [
  { title: "Teams with three records for one customer", tone: "bg-sun", copy: "The same buyer exists as a lead, a contact, and a duplicate nobody dares delete. Every team updates its own copy, and none of them is the truth. Architecture decides where each fact lives, once." },
  { title: "The founder whose reports contradict each other", tone: "bg-background", copy: "Sales says one number, marketing says another, and the spreadsheet says a third. The problem is rarely the reports; it is that the fields underneath them were never agreed." },
  { title: "Businesses drowning in unused fields", tone: "bg-grape text-cream", copy: "Years of well-meant additions have left hundreds of properties, half empty, half ambiguous, and nobody knows which ones matter. Data architecture cuts the structure back to what the business actually uses." },
  { title: "Anyone about to import into a new CRM", tone: "bg-background", copy: "A migration imports whatever structure you feed it. Design the data model first and the new system starts clean; skip it and you move the mess to a more expensive address." },
];

const layers = [
  { name: "Objects", def: "The kinds of things you track: contacts, companies, deals, tickets, products.", rule: "One object per real-world thing. No custom object until a standard one genuinely cannot hold it." },
  { name: "Records", def: "One entry per real person, company, or deal. Nothing more, nothing less.", rule: "One record per customer, with ownership and merge rules for the duplicates that slip through." },
  { name: "Fields", def: "The facts you keep about each record: phone, city, source, stage, value.", rule: "Every field has a plain-language definition, an owner, and a reason to exist, or it gets deleted." },
  { name: "Relationships", def: "Which contact belongs to which company, which deals belong to which customer.", rule: "Relationships are automatic where possible, so a rep never retypes what the system already knows." },
  { name: "Hygiene", def: "The ongoing rules that keep all of the above true: dedupe, required fields, audits.", rule: "A short monthly cleanup rhythm, because clean data is a habit, not a project." },
];

const rules = [
  { title: "Every field earns its place", tone: "bg-brand text-cream", copy: "Before a field exists, it must answer: who fills it, when, and what decision it feeds. A field nobody maintains becomes a lie people stop trusting, and distrust spreads to the whole system." },
  { title: "One home for every fact", tone: "bg-mint", copy: "A customer's phone number lives in exactly one place. When the same fact lives in three systems, all three will eventually disagree, and the team goes back to asking on WhatsApp." },
  { title: "Required means required", tone: "bg-sun", copy: "A field is either genuinely required at a specific stage or it is optional. Making everything mandatory trains people to type anything just to move on, which is worse than an empty field." },
  { title: "Design for the report you need", tone: "bg-grape text-cream", copy: "Every structure decision is tested against a real question the business asks. If the data model cannot answer how many qualified leads came from each source last month, the model changes, not the question." },
];

const steps = [
  { title: "Inventory", copy: "We list every field, object, and list across your current tools, and ask each team which ones they actually use. The gap between what exists and what is used is always the first surprise." },
  { title: "Define", copy: "The surviving fields get written definitions in plain language, with an owner and the stage at which each must be filled. Your business's words, not software vocabulary." },
  { title: "Restructure", copy: "Objects, fields, and relationships are rebuilt to match the definitions, duplicates are merged, and the fields nobody can justify are retired. Everything is backed up before anything changes." },
  { title: "Maintain", copy: "Hygiene rules, dedupe checks, and a monthly review go in, so the structure stays clean as new people join and new needs appear. Clean data is a rhythm, and this installs it." },
];

const deliverables = [
  "A data model: the objects, fields, and relationships your business runs on, drawn and defined in plain language",
  "Written definitions for every field that survives, with an owner and a stage at which it must be filled",
  "Merged duplicates and retired fields, with a full backup taken before anything is touched",
  "Dedupe and hygiene rules built into the CRM, not left as a document nobody opens",
  "A monthly data review agenda, so the foundation stays clean as the business grows",
];

const honest = [
  ["Structure beats cleanup", "A one-time dedupe makes data clean for a month. A structure that prevents duplicates at entry keeps it clean for years. Most of this work is design, not scrubbing."],
  ["Less data, more trust", "Teams trust systems with twenty meaningful fields far more than systems with two hundred ignored ones. We delete aggressively, and the reports get more honest, not less."],
  ["Someone must own it", "Data without an owner decays. The architecture names a person responsible for the hygiene rhythm, or it quietly returns to chaos within a year, no matter how well it was built."],
];

const mistakes = [
  { title: "Letting the software decide the structure", copy: "Default fields and demo pipelines installed unchanged. The tool's guesses about your business become your data model, and your team's real language never finds a home in the system." },
  { title: "Fields added to solve people problems", copy: "A rep forgot to follow up, so a new checkbox appears. Ten such fixes later the record is a wall of fields nobody reads. Process problems need process fixes, not more properties." },
  { title: "Importing everything, deciding later", copy: "Every spreadsheet and legacy column gets imported just in case. Later never comes, and the team learns on day one that most of the system is noise, so they stop trusting all of it." },
  { title: "No merge rule for duplicates", copy: "Two records for the same customer appear, and nobody knows which one wins. Without an agreed merge rule, people keep both, update neither reliably, and the split gets worse with every import." },
];

const faqs = [
  { q: "What is a data model, in plain words?", a: "A written agreement about what your business keeps track of and where each fact lives: which objects exist, what fields each one has, what those fields mean, and how records relate to each other. It is the floor plan your CRM is built from, and like a floor plan, changing it after construction is far more expensive than drawing it first." },
  { q: "We already have a CRM full of messy data. Is it too late?", a: "No. Most of this work happens on existing systems: inventorying what is there, keeping what earns its place, merging duplicates, and retiring the rest. A full backup comes first, and nothing is deleted until you have seen what goes and why. Starting messy is the normal case, not the exception." },
  { q: "How is this different from a migration?", a: "Architecture decides what the structure should be; migration moves your history into it. They pair naturally: design the model, then import into it. A migration without architecture carries the old mess into the new system, which is the most common reason teams end up switching CRMs twice." },
  { q: "Does this need HubSpot?", a: "The thinking is tool-independent: objects, fields, definitions, and hygiene rules apply anywhere. It lands hardest inside a CRM that can enforce required fields, dedupe automatically, and report from the structure, and HubSpot is the strongest home we know for that. If you run a different tool, the model still applies." },
  { q: "How do you decide which fields to delete?", a: "Three questions per field: who fills it, when, and what decision it feeds. A field with no clear answer goes on a retirement list, you review the list with full context and a backup in place, and only then is it removed. Nothing disappears by surprise, and anything retired can be restored if reality disagrees." },
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

function DataArchitecturePage() { return <main id="top">
  <section className="reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink bg-mint/25 px-5 py-20 lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-grape/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/35 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">One customer.<br/>One <span className="text-brand">record.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>CRM and data architecture designs the structure your whole revenue operation stands on: one record per customer, fields your whole team defines the same way, and hygiene rules that keep it true.</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
        <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss your data <ArrowUpRight size={19} /></Link>
        <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-sun hover:shadow-tactile-ink-sm">See who it is for</a>
      </div>
    </div>
  </section>

  <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>Who this architecture<br/>is <span className="text-brand">for</span>.</>} copy="Data structure pays for itself fastest when several people and tools touch the same customer, and each has quietly built their own version of the truth." />
    <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
      {audiences.map((a, i) => <article key={a.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[26rem] ${a.tone} ${i % 2 ? "lg:mt-10" : ""}`}>
        <h3 className="text-3xl font-bold leading-tight">{a.title}</h3>
        <p className={`font-bold leading-relaxed ${a.tone.includes("text-cream") ? "text-cream/80" : "text-ink/65"}`}>{a.copy}</p>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The five layers, <span className="text-brand">designed</span>.</>} copy="Every CRM data structure answers five questions. Here is each layer, and the rule we apply to it." />
    <div className="mt-16 space-y-5">
      {[[0, 1], [2, 3]].map((row, r) => <div key={r} className="grid gap-5 lg:grid-cols-2">
        {row.map((idx, c) => { const s = layers[idx]!; return <div key={s.name} className={`flex items-start gap-5 rounded-[2.5rem] border-2 border-ink p-7 shadow-tactile-ink ${idx === 2 ? "bg-sun" : "bg-background"} ${c === 1 ? "lg:mt-8" : ""}`}>
          <span className={`font-display text-4xl font-bold ${idx === 2 ? "text-ink" : numTones[idx]}`}>{`0${idx + 1}`}</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })}
      </div>)}
      <div className="grid gap-5 lg:grid-cols-2">
        {(() => { const s = layers[4]!; return <div className="flex items-start gap-5 rounded-[2.5rem] border-2 border-ink bg-background p-7 shadow-tactile-ink lg:col-start-1">
          <span className={`font-display text-4xl font-bold ${numTones[4]}`}>05</span>
          <div>
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{s.def}</p>
            <p className="mt-2 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{s.rule}</span></p>
          </div>
        </div>; })()}
        <div className="flex items-center rounded-[2.5rem] border-2 border-dashed border-ink/30 p-7 lg:mt-8">
          <p className="leading-relaxed text-ink/55">These are the shapes, not the final words. Your model gets built in your business's language, with only the objects and fields your decisions actually need.</p>
        </div>
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <SectionHead title={<>The rules behind<br/>every <span className="text-brand">field</span>.</>} copy="Four principles we refuse to compromise on, because data structures that break them stop being trusted." />
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
    <SectionHead title={<>How the architecture <span className="text-brand">happens</span>.</>} copy="Four moves. A full backup comes before anything changes, and you review every deletion before it happens." />
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
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A working structure, not a spreadsheet of recommendations. Everything below is built into the system your team uses daily.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-7 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your data <ArrowUpRight size={18} /></Link>
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
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight lg:col-span-8 lg:text-6xl">An honest word about <span className="text-brand">data</span>.</h2>
        <p className="pb-2 text-lg font-bold leading-relaxed text-cream/60 lg:col-span-4">Every agency can promise clean data. Here is what actually determines whether it stays clean.</p>
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
    <SectionHead title={<>Where data structures<br/>go <span className="text-brand">wrong</span>.</>} copy="The four patterns behind CRMs where nobody trusts the numbers anymore." />
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
    <h2 className="font-display text-4xl font-bold sm:text-6xl">A foundation every report can trust.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us how customer information moves through your business today. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
      <Link to="/revops" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-cream">All RevOps services</Link>
    </div>
  </div></section>
</main> }
