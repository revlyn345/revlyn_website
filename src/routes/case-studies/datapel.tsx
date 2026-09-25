import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowLeft, ArrowUpRight, ClipboardList, Database, Layers, PhoneCall, TrendingUp, Wrench } from "lucide-react";
import datapelLogo from "../../assets/customers/datapel.svg";

export const Route = createFileRoute("/case-studies/datapel")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "Case studies", path: "/case-studies" }, { name: "Datapel", path: "/case-studies/datapel" }]) },
      { title: "Datapel: From a Reporting Fix to a Clear Lead to Cash System | Revlyn" },
      { name: "description", content: "How a few reporting requests uncovered bad data, led to a full HubSpot audit, and ended with a clear lead to cash system, a churn pipeline, and Dialpad mapped to HubSpot for Datapel." },
      { property: "og:title", content: "Datapel: From a Reporting Fix to a Clear Lead to Cash System | Revlyn" },
      { property: "og:description", content: "A reporting project turned into a full HubSpot audit, rebuilt foundations, quote to cash in HubSpot, a churn pipeline, and Dialpad mapped into the CRM." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/case-studies/datapel" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies/datapel" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Datapel: from a reporting fix to a clear lead to cash system", description: "How Datapel went from broken reports to a rebuilt HubSpot with quote to cash, a churn pipeline, and Dialpad mapped to the CRM.", author: { "@type": "Organization", name: "Revlyn" }, publisher: { "@type": "Organization", name: "Revlyn" } }) }],
  }),
  component: DatapelCaseStudy,
});

const outcomes = [
  { icon: TrendingUp, tone: "bg-mint", stat: "3 months", copy: "from a few reports to a clear view of the lead to cash process" },
  { icon: Layers, tone: "bg-sun", stat: "Quote to cash", copy: "revenue fields, line items, and the quote to cash process set up in HubSpot" },
  { icon: PhoneCall, tone: "bg-brand text-cream", stat: "Dialpad + HubSpot", copy: "calling mapped into the CRM for BDRs and the customer success team" },
];

function DatapelCaseStudy() {
  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-16 text-cream sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-bold text-cream/65 transition-colors hover:text-sun"><ArrowLeft size={18} aria-hidden="true" /> Back to case studies</Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-cream/15 px-4 py-2">HubSpot audit</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">RevOps</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Quote to cash</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">Datapel: from a reporting fix to a clear lead to cash system.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-cream/75">Datapel, a SaaS company in Australia, asked for a few reports. While building them, we found the data underneath was not correct. That turned into a full HubSpot audit, and the audit turned into a system the whole company could use and scale.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-center gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-6 sm:gap-7 sm:p-8">
            <img src={datapelLogo} alt="Datapel logo" className="h-14 w-auto rounded-xl bg-cream object-contain p-2 sm:h-16" loading="lazy" />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold">Datapel</h2>
              <p className="mt-1 leading-relaxed text-ink/65">SaaS company operating out of Australia, with multiple systems connected to its revenue engine.</p>
            </div>
            <a href="https://datapel.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-5 py-3 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-relaxed text-ink">The reports were the symptom. Datapel wanted a few reports built, but while we built them it became clear the data underneath was not correct. Reports on top of bad data are just prettier guesses.</p>
            <p>So we went upstream: an audit of their whole HubSpot instance. Datapel had multiple systems connected, and what they wanted was not another integration. They wanted a clear system their teams could actually use, and scale.</p>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What we built.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-cream"><ClipboardList size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Foundations written down first</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Before touching the system, we laid down the definitions: what a lead is, what makes a marketing qualified lead, what makes a sales qualified lead, and what needs to be done at each stage.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-grape text-cream"><Wrench size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">A HubSpot rebuilt on those foundations</h3>
                <p className="mt-3 leading-relaxed text-ink/65">With the basics in place, we rebuilt the system so the CRM reflects how Datapel actually sells, instead of a setup nobody trusted.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint"><Database size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">A database enriched through Apollo</h3>
                <p className="mt-3 leading-relaxed text-ink/65">The initial database was enriched through Apollo and updated in HubSpot, so the records the team works from are worth working from.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-sun"><Layers size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Quote to cash inside HubSpot</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Revenue fields, line items, and the full quote to cash process were set up in HubSpot, giving one place where a deal runs from first conversation to money collected.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint"><TrendingUp size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Marketing built alongside</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Working with the marketing team, we shaped the landing pages, website pages, and the demo process, so what the CRM receives matches what the site promises.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-grape text-cream"><PhoneCall size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Churn pipeline and Dialpad</h3>
                <p className="mt-3 leading-relaxed text-ink/65">A churn and cancellation pipeline gave the customer success team a clear follow up process in HubSpot, and Dialpad was put in place for BDRs and the CS team, mapped into the CRM.</p>
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
            <p className="mt-8 flex items-start gap-3 text-cream/60">By the third month, Datapel had a system that gave them a clear view of the lead to cash process, and the reporting project that started it all finally had data worth reporting on.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-start">
            <span aria-hidden="true" className="grid size-24 place-items-center rounded-[1.5rem] bg-grape font-display text-3xl font-bold text-cream sm:size-32 sm:text-4xl">PR</span>
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Support that did not stop at go live</h2>
              <blockquote className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                <p>&ldquo;Revlyn initially helped us clean up and improve our reporting, and that quickly evolved into ongoing support. They&rsquo;ve been hands-on with things like sales rep support, pipeline optimization, and maintaining strong data quality. They also mapped Dialpad to HubSpot, which made it much easier for our sales team to manage everything from a single system.&rdquo;</p>
              </blockquote>
              <p className="mt-6 font-bold">Peter Rocke</p>
              <p className="text-ink/65">General Manager, Datapel</p>
            </div>
          </section>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Why it worked.</h2>
            <p>The engagement started where the pain was loudest, the reports, but it was only ever going to work if the cause was fixed first. Definitions before configuration. An audit before a rebuild. A database worth trusting before asking anyone to work from it.</p>
            <p>That order is deliberate, and it is the same one we apply everywhere. Fix the data and the definitions, and the reports, the pipeline, and the calling system all stop fighting each other.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] bg-mint/40 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Reports that do not add up?</h2>
              <p className="mt-3 leading-relaxed text-ink/65">Bad data usually sits under the report. Bring us the symptom and we will show you what the audit finds.</p>
            </div>
            <BookCallButton className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={18} aria-hidden="true" /></BookCallButton>
          </section>
        </div>
      </article>
    </main>
  );
}
