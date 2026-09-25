import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowLeft, ArrowUpRight, CalendarCheck, Globe, MailCheck, Puzzle, Route as RouteIcon, Table2 } from "lucide-react";
import ausformingLogo from "../../assets/customers/ausforming.webp";

export const Route = createFileRoute("/case-studies/ausforming")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "Case studies", path: "/case-studies" }, { name: "Ausforming", path: "/case-studies/ausforming" }]) },
      { title: "Ausforming: From Spreadsheets to a Connected HubSpot System | Revlyn" },
      { name: "description", content: "How Ausforming replaced spreadsheet-led operations with a HubSpot system covering website, CRM, events, and outreach, and saw a 20% lift in discovery call bookings." },
      { property: "og:title", content: "Ausforming: From Spreadsheets to a Connected HubSpot System | Revlyn" },
      { property: "og:description", content: "One GTM flow, one HubSpot system, and a 20% increase in discovery call bookings." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/case-studies/ausforming" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies/ausforming" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Ausforming: from spreadsheets to a connected HubSpot system", description: "How Ausforming moved pipeline, events, marketing, and outreach into HubSpot and Smartlead.", author: { "@type": "Organization", name: "Revlyn" }, publisher: { "@type": "Organization", name: "Revlyn" } }) }],
  }),
  component: AusformingCaseStudy,
});

const outcomes = [
  { icon: CalendarCheck, tone: "bg-mint", stat: "20%", copy: "increase in discovery call bookings" },
  { icon: MailCheck, tone: "bg-sun", stat: "30%", copy: "higher engagement rate on outreach emails" },
  { icon: Globe, tone: "bg-brand text-cream", stat: "Website", copy: "became a real source of discovery call bookings" },
];

function AusformingCaseStudy() {
  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-16 text-cream sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-bold text-cream/65 transition-colors hover:text-sun"><ArrowLeft size={18} aria-hidden="true" /> Back to case studies</Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-cream/15 px-4 py-2">CRM implementation</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">HubSpot</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Go to market</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">Ausforming: out of the spreadsheets, into one system.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-cream/75">A SAP solutions business was planning its next chapter with every pipeline, event, and campaign tracked by hand. We mapped the go to market flow first, then built the whole motion in HubSpot.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-center gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-6 sm:gap-7 sm:p-8">
            <img src={ausformingLogo} alt="Ausforming logo" className="h-14 w-auto rounded-xl bg-cream object-contain p-2 sm:h-16" loading="lazy" />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold">Ausforming</h2>
              <p className="mt-1 leading-relaxed text-ink/65">SAP solutions for customers across Australia and New Zealand, connecting local businesses with global technology partners.</p>
            </div>
            <a href="https://ausforming.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-5 py-3 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-relaxed text-ink">Before anything was built, Ausforming had a plan: provide SAP consulting and grow through a network of partner organisations. What it did not have was a system to run that plan.</p>
            <p>Everything pipeline related, every event registration, every marketing campaign, and every piece of contact data lived in spreadsheets. Nothing connected to anything else, so following up a lead meant remembering where the record was and whose turn it was.</p>
            <p>The first job was not software. It was drawing the go to market process flow end to end, so every later decision about the CRM, the website, and the events setup had a process to serve.</p>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What we built.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-cream"><RouteIcon size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">The GTM process flow</h3>
                <p className="mt-3 leading-relaxed text-ink/65">We documented the entire go to market flow first: how a company enters, who qualifies it, what triggers outreach, how events feed in, and when a discovery call happens.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-grape text-cream"><Globe size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">The website</h3>
                <p className="mt-3 leading-relaxed text-ink/65">A new website built on HubSpot, so every visit, form submission, and discovery call booking lands directly in the CRM instead of a separate inbox.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint"><Puzzle size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">CRM and events management</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Companies, contacts, and partner relationships structured in HubSpot, with events management built in so registrations and attendance stay connected to each account.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-sun"><MailCheck size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Mass outreach with Smartlead</h3>
                <p className="mt-3 leading-relaxed text-ink/65">For high-volume outreach, we set up Smartlead and connected it to the wider motion, so campaign engagement is visible in one picture rather than a separate spreadsheet.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What changed.</h2>
            <div className="mt-9 grid gap-6 sm:grid-cols-3">
              {outcomes.map(({ icon: Icon, tone, stat, copy }) => (
                <div key={stat} className="rounded-[2rem] bg-cream/5 p-7">
                  <span className={`grid size-14 place-items-center rounded-2xl ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                  <p className="mt-5 font-display text-4xl font-bold text-sun">{stat}</p>
                  <p className="mt-2 leading-relaxed text-cream/70">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-3 text-cream/60"><Table2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />The spreadsheets that once held pipeline, events, and campaigns are no longer the system of record.</p>
          </section>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Why it worked.</h2>
            <p>Ausforming did not start with tool features. Starting from the process flow meant every part of the system had a clear owner and purpose: the website feeds the CRM, events enrich accounts, and outreach follows one agreed sequence.</p>
            <p>That is the same order we apply to every engagement. If the process is vague, no CRM will fix it. If the process is clear, the system becomes simple to build and even simpler for the team to trust.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] bg-mint/40 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Running your growth on spreadsheets?</h2>
              <p className="mt-3 leading-relaxed text-ink/65">Bring us your current process. We will map it with you and show what a connected HubSpot system could look like.</p>
            </div>
            <BookCallButton className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={18} aria-hidden="true" /></BookCallButton>
          </section>
        </div>
      </article>
    </main>
  );
}
