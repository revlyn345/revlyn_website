import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowLeftRight, ArrowUpRight, Database, FileSpreadsheet, ListChecks, SearchCheck, ShieldCheck, TestTube2, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/migration")({ head: () => ({ meta: [
  { title: "CRM Migration to HubSpot | Revlyn" },
  { name: "description", content: "Move from spreadsheets or another CRM into HubSpot with clean field mapping, dedupe rules, and test imports before anything goes live. No data lost, no surprises." },
  { property: "og:url", content: "https://revlyn.io/hubspot/migration" }, { property: "og:title", content: "CRM Migration to HubSpot | Revlyn" },
  { property: "og:description", content: "Spreadsheets or another CRM to HubSpot: field mapping, dedupe rules, test imports, and a controlled go-live." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "CRM Migration to HubSpot", path: "/hubspot/migration" }]) },
    { "script:ld+json": serviceSchema({ name: "CRM Migration to HubSpot", description: "Move from spreadsheets or another CRM into HubSpot with clean field mapping, dedupe rules, and test imports before anything goes live. No data lost, no surprises.", path: "/hubspot/migration" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/migration" }] }), component: HubSpotMigrationPage });

const worries = [
  { icon: FileSpreadsheet, title: "Years of scattered spreadsheets", copy: "Leads in one file, customers in another, follow-ups in WhatsApp chats and personal diaries. Migration is the moment all of it becomes one searchable system." },
  { icon: ArrowLeftRight, title: "An old CRM that never stuck", copy: "Moving out of Salesforce, Zoho, Pipedrive, or a custom tool is less about software and more about the data habits inside it. We carry the history across and design out what made it fail." },
  { icon: Database, title: "Fear of losing information", copy: "The honest concern behind every migration: what if deals, notes, or contact details vanish? Our process exists so you can check what moved, record by record, before the switch." },
  { icon: ShieldCheck, title: "Downtime nobody can afford", copy: "Sales cannot pause for a migration. We run the move in parallel with your current way of working, and the actual switch takes hours, not weeks." },
];

const steps = [
  { n: "1", label: "Inventory", tone: "bg-sun", copy: "We list every source of customer data you have: files, tools, inboxes, notebooks. You cannot migrate what you have not counted." },
  { n: "2", label: "Field mapping", tone: "bg-mint", copy: "Every column in your old data gets a decided home in HubSpot, or a decided drop. Nothing is guessed during the import itself." },
  { n: "3", label: "Dedupe and clean", tone: "bg-brand text-cream", copy: "Duplicate contacts, dead numbers, and junk entries are handled before import, with rules you approve. Clean in, not clean later." },
  { n: "4", label: "Test import", tone: "bg-grape text-cream", copy: "A sample of real records goes in first. You open the records yourself and confirm they look right before the full move." },
  { n: "5", label: "Full import and check", tone: "bg-sun", copy: "The complete move, followed by count checks: records in, records out, and a report of anything that did not match and why." },
  { n: "6", label: "Cutover", tone: "bg-mint", copy: "The old system stops being the source of truth on a named day, and your team works only in HubSpot from that morning." },
];

const mistakes = [
  { title: "Importing everything as-is", copy: "Years of duplicates and dead leads moved into a new CRM just recreate the old mess in an expensive new home. Cleaning before import is the cheaper order." },
  { title: "Mapping fields on the fly", copy: "Deciding where each column goes while the import runs leads to the same information living in three different properties. We map every field on paper first, and you sign it off." },
  { title: "No test import", copy: "A full import that has never been tested on a sample is a gamble with your customer data. We never skip the sample, and we never go live before you have looked at real records yourself." },
  { title: "Two systems forever", copy: "Keeping the old CRM running just in case means the team never fully moves and data splits in two. We plan a firm cutover date and hold the old system read-only after it." },
];

const faqs = [
  { q: "How long does a migration take?", a: "It depends on how many sources of data you have and how clean they are. A single clean spreadsheet moves in days; a messy multi-tool history takes longer because the cleaning is the real work. We give you a realistic estimate after seeing your actual data, not before." },
  { q: "Will we lose any data in the move?", a: "That is exactly what the test import and count checks exist to prevent. After the full import, we reconcile record counts between the old system and HubSpot and report anything that did not match, with reasons. You verify before the old system is retired." },
  { q: "Can you migrate our notes, emails, and deal history too?", a: "In most cases yes: contacts, companies, deals, notes, and activity history can all be carried across. The exact scope depends on what your current tool exports, which we confirm in the inventory step before promising anything." },
  { q: "What happens to the old CRM after we move?", a: "We recommend keeping it accessible in read-only form for a while as an archive, but with a firm rule: no new entries go in there. One source of truth is the whole point of the exercise." },
  { q: "Our data is really messy. Is that a problem?", a: "Messy data is the normal case, not the exception. The dedupe and cleaning step exists precisely for this, and we will tell you honestly what can be fixed automatically and what needs a human decision." },
];

function HubSpotMigrationPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/20 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-brand/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/25 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>Your history,<br/><span className="text-brand">moved</span> <span className="text-grape">intact.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>Migration from spreadsheets or another CRM into HubSpot, with every field mapped, every duplicate decided, and a test import you verify before anything goes live.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss migration <ArrowUpRight size={19} /></Link>
        <a href="#steps" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See how it works</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where teams start from.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Every migration begins somewhere different, but the starting points repeat. Each one is a normal place to begin.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {worries.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-16 place-items-center rounded-2xl bg-mint"><Icon size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Six steps, no surprises.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The same sequence every time, because the order is what protects your data. Nothing moves before the step above it is signed off.</p>
    <div id="steps" className="mt-14 grid scroll-mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => <div key={s.n} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
        <span className={`grid size-12 place-items-center rounded-full font-bold text-ink ${s.tone}`}>{s.n}</span>
        <h3 className="mt-5 text-2xl font-bold">{s.label}</h3>
        <p className="mt-3 leading-relaxed text-ink/65">{s.copy}</p>
      </div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-6 rounded-[3rem] bg-ink p-10 text-cream sm:p-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div>
        <SearchCheck className="text-sun" size={36} />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">The rule that governs everything.</h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">Nothing imports until you have seen a sample of your own records inside HubSpot and said yes. The full move happens only after that.</p>
      </div>
      <div className="space-y-4">
        {[["Before", "Field map signed off, dedupe rules approved, test import verified by you."],
          ["During", "Full import with progress shared, and immediate fixes for anything unexpected."],
          ["After", "Record counts reconciled, mismatches reported with reasons, old system retired to read-only."]]
          .map(([label, copy], i) => <div key={label} className="flex gap-4 rounded-[1.75rem] bg-cream/5 p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="font-bold">{label}</h3><p className="mt-1 leading-relaxed text-cream/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where migrations go wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four mistakes that give migration a bad name, and why our process is ordered the way it is.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {mistakes.map((m) => <article key={m.title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1"><div className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-6">
    <div className="flex items-center gap-4"><ListChecks size={30} className="shrink-0 text-brand" /><h2 className="font-display text-4xl font-bold sm:text-6xl">Common questions.</h2></div>
    <div className="mt-12 space-y-4">
      {faqs.map((f) => <details key={f.q} className="group rounded-[2rem] bg-background p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-mint transition-transform group-open:rotate-45"><ArrowUpRight size={16} /></span></summary><p className="mt-4 leading-relaxed text-ink/65">{f.a}</p></details>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <HubSpotBadge dark />
    <TestTube2 className="mx-auto mt-6 text-sun" size={36} />
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Move once, move right.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what your customer data lives in today. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
