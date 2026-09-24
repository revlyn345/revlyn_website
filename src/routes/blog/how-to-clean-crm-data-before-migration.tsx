import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowLeft, ArrowUpRight, Archive, Check, Database, ListChecks, ShieldCheck } from "lucide-react";

const stages = [
  { icon: Archive, number: "01", title: "Decide what should move", copy: "Separate active, useful records from information that can be archived. More history is not always more value." },
  { icon: Database, number: "02", title: "Standardise the structure", copy: "Agree naming, formats, required fields, and valid values before mapping anything into the new CRM." },
  { icon: ListChecks, number: "03", title: "Resolve duplicates and gaps", copy: "Choose matching rules, decide which source wins, and route uncertain records for human review." },
  { icon: ShieldCheck, number: "04", title: "Test and reconcile", copy: "Import a representative sample, inspect relationships and ownership, then compare totals before the final move." },
];

const questions = [
  "Does this record still have operational, customer, reporting, or retention value?",
  "Who owns the record and is that owner represented correctly in the new system?",
  "Which fields are trusted enough to migrate, and which should be left behind?",
  "How will contacts, companies, deals, tickets, and activities remain connected?",
  "What rule determines whether two records represent the same person or company?",
  "Who signs off the sample import and the final reconciliation?",
];

export const Route = createFileRoute("/blog/how-to-clean-crm-data-before-migration")({
  head: () => ({
    meta: [
      { title: "How to Clean CRM Data Before Migration | Revlyn" },
      { name: "description", content: "A practical process for deciding what CRM data to move, standardising fields, resolving duplicates, testing imports, and reconciling results." },
      { property: "og:title", content: "How to Clean CRM Data Before Migration | Revlyn" },
      { property: "og:description", content: "A practical four-stage process for preparing trustworthy CRM data before migration." },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2026-09-24" },
      { property: "og:url", content: "https://revlyn.io/blog/how-to-clean-crm-data-before-migration" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Blog", path: "/blog" }, { name: "How to Clean CRM Data Before Migration", path: "/blog/how-to-clean-crm-data-before-migration" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/blog/how-to-clean-crm-data-before-migration" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to clean CRM data before migration", description: "A practical four-stage process for preparing CRM data before migration.", url: "https://revlyn.io/blog/how-to-clean-crm-data-before-migration", mainEntityOfPage: "https://revlyn.io/blog/how-to-clean-crm-data-before-migration", image: "https://revlyn.io/og-image.png", datePublished: "2026-09-24", dateModified: "2026-09-24", inLanguage: "en", author: { "@type": "Organization", name: "Revlyn", url: "https://revlyn.io/" }, publisher: { "@type": "Organization", name: "Revlyn", logo: { "@type": "ImageObject", url: "https://revlyn.io/icon-512.png" } } }) }],
  }),
  component: DataMigrationArticle,
});

function DataMigrationArticle() {
  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-sun px-5 py-16 sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-ink/65 transition-colors hover:text-brand"><ArrowLeft size={18} aria-hidden="true" /> Back to blogs</Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold"><span className="rounded-full bg-background/70 px-4 py-2">CRM data</span><span className="rounded-full bg-background/45 px-4 py-2">7 min read</span></div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">How to clean CRM data before migration.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-ink/70">A migration should not copy every old problem into a new system. Use the move to decide what matters, create consistent rules, and test trust before launch.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="space-y-7 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-relaxed text-ink">Data migration is not a single import. It is a sequence of decisions about scope, structure, quality, relationships, and accountability.</p>
            <p>Old systems often contain duplicate contacts, inconsistent company names, outdated owners, unused fields, and records with no clear purpose. Moving everything preserves uncertainty and makes the new CRM difficult to trust from the start.</p>
            <p>The goal is not perfect data. The goal is data that is useful enough for the workflows, reporting, and customer context the new system needs to support.</p>
          </div>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">A four-stage preparation process.</h2>
            <div className="mt-9 space-y-5">
              {stages.map(({ icon: Icon, number, title, copy }, index) => <div key={number} className="grid gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-7 sm:grid-cols-[auto_1fr] sm:items-start"><div className={`grid size-16 place-items-center rounded-2xl ${index === 0 ? "bg-brand text-cream" : index === 1 ? "bg-mint" : index === 2 ? "bg-grape text-cream" : "bg-sun"}`}><Icon size={25} aria-hidden="true" /></div><div><span className="text-sm font-bold text-ink/40">{number}</span><h3 className="mt-1 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p></div></div>)}
            </div>
          </section>

          <section className="mt-16 rounded-[2.5rem] bg-grape p-8 text-cream sm:p-12">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Do not clean data without rules.</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-cream/70"><p>Cleaning becomes inconsistent when each person makes a different judgement. Write down the accepted formats, duplicate rules, required fields, archive criteria, and source-of-truth decisions first.</p><p>Keep an exception list for records that need human judgement. Forcing uncertain data through an automatic rule can create confident-looking errors that are harder to find later.</p></div>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Questions to answer before importing.</h2>
            <ul className="mt-8 grid gap-4">
              {questions.map((item) => <li key={item} className="flex items-start gap-4 rounded-2xl bg-cream p-5 font-semibold"><span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-sun"><Check size={16} aria-hidden="true" /></span>{item}</li>)}
            </ul>
          </section>

          <section className="mt-16 grid gap-7 rounded-[2.5rem] bg-mint/40 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div><h2 className="text-3xl font-bold">What happens after launch?</h2><p className="mt-3 leading-relaxed text-ink/65">Good data still needs clear habits and ownership to stay useful.</p></div>
            <Link to="/blog/why-crm-adoption-fails" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Read about adoption <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </section>
        </div>
      </article>
    </main>
  );
}