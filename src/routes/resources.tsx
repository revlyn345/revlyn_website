import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../lib/seo";
import { ArrowUpRight, BookOpen, Download, Newspaper, PackageOpen } from "lucide-react";
import { BookCallButton } from "@/components/BookCallButton";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free CRM Resources | Revlyn" },
      { name: "description", content: "Free downloadable CRM checklists from Revlyn: readiness, data cleaning before migration, and adoption after launch." },
      { property: "og:title", content: "Free CRM Resources | Revlyn" },
      { property: "og:description", content: "Free downloadable CRM checklists: readiness, data cleaning, and adoption." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/resources" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Free CRM Resources", path: "/resources" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/resources" }],
  }),
  component: ResourcesPage,
});

const downloads = [
  {
    file: "/downloads/crm-readiness-checklist.pdf",
    tone: "bg-brand text-cream",
    title: "CRM readiness checklist",
    copy: "Eight questions to score before committing to a CRM project. Under five honest yeses means start smaller.",
    label: "One page, printable",
  },
  {
    file: "/downloads/crm-data-cleaning-checklist.pdf",
    tone: "bg-mint",
    title: "Data cleaning before migration",
    copy: "The four-stage process and ten checks we run before any record moves into a new CRM.",
    label: "One page, printable",
  },
  {
    file: "/downloads/crm-adoption-checklist.pdf",
    tone: "bg-sun",
    title: "CRM adoption checklist",
    copy: "Six habits, plus the two most-missed ones, that keep a CRM part of daily work after launch.",
    label: "One page, printable",
  },
];

const reading = [
  { to: "/crm-implementation", icon: BookOpen, tone: "bg-mint", title: "What is CRM implementation?", copy: "The full guide: what good implementation covers, common failure patterns, and a readiness checklist." },
  { to: "/blog/why-crm-adoption-fails", icon: Newspaper, tone: "bg-sun", title: "Why CRM adoption fails after launch", copy: "The four predictable reasons teams stop using a CRM, and the habits that prevent them." },
  { to: "/blog/how-to-clean-crm-data-before-migration", icon: BookOpen, tone: "bg-brand text-cream", title: "How to clean CRM data before migration", copy: "A practical process for deciding what to move, standardising it, and reconciling the result." },
];

function ResourcesPage() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-brand px-5 py-20 text-cream sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
        <div aria-hidden="true" className="absolute -right-16 bottom-0 size-96 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">Free tools for <span className="text-sun">better CRM decisions.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">Printable checklists from our guide and articles. No form to fill, no email gate. Take them and use them with your team.</p>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Downloadable checklists.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {downloads.map((item) => (
              <article key={item.file} className="flex flex-col rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <span className={`grid size-16 place-items-center rounded-2xl ${item.tone}`}><PackageOpen size={26} aria-hidden="true" /></span>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/65">{item.copy}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink/40">{item.label}</p>
                <a href={item.file} download className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">
                  Download PDF <Download size={17} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Prefer the full context?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Each checklist comes from a longer guide or article on this site.</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reading.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to} className="group rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <span className={`grid size-14 place-items-center rounded-2xl ${item.tone}`}><Icon size={24} aria-hidden="true" /></span>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-brand">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/65">{item.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">Read on the site <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Checklists done, project next?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">If the readiness list raised more questions than it answered, a free first call is a good place to bring them.</p>
          <BookCallButton className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={19} aria-hidden="true" /></BookCallButton>
        </div>
      </section>
    </main>
  );
}
