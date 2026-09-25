import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import ausformingLogo from "../../assets/customers/ausforming.webp";
import punjabFilmCityLogo from "../../assets/customers/punjab-film-city.svg";
import integrityLogo from "../../assets/customers/integrity-fire-safety.webp";
import datapelLogo from "../../assets/customers/datapel.svg";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "Case studies", path: "/case-studies" }]) },
      { title: "CRM Case Studies | Revlyn" },
      { name: "description", content: "Revlyn case studies on CRM, booking systems, HubSpot, and revenue engineering work: Datapel, Integrity Fire Safety, Ausforming, and Punjab Film City." },
      { property: "og:title", content: "CRM Case Studies | Revlyn" },
      { property: "og:description", content: "Evidence-led stories about CRM and revenue engineering work, published with client approval." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <main>
      <section className="relative mx-auto grid min-h-[58vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-20 text-cream sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">The work, shown honestly.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70 sm:text-xl">Detailed CRM and revenue engineering stories, shared with the client and evidence ready.</p>
            </div>
            <div className="rounded-[2rem] bg-cream p-8 text-ink shadow-tactile-ink">
              <p className="font-bold text-ink/45">Latest story</p>
              <h2 className="mt-3 text-2xl font-bold">Datapel went from a reporting fix to a clear lead to cash system.</h2>
              <Link to="/case-studies/datapel" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-ink px-6 py-3.5 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Read the case study <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <Link to="/case-studies/datapel" className="group grid gap-10 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <img src={datapelLogo} alt="Datapel logo" className="h-20 w-auto self-start rounded-2xl bg-cream object-contain p-3 lg:self-center" loading="lazy" />
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-grape/15 px-4 py-2 text-grape">HubSpot audit</span>
              <span className="rounded-full bg-mint/25 px-4 py-2">RevOps</span>
              <span className="rounded-full bg-sun/30 px-4 py-2">Quote to cash</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">Datapel: from a reporting fix to a clear lead to cash system.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/65">A SaaS company in Australia asked for a few reports. The data underneath was not correct, so we audited their whole HubSpot instance, laid down the lead to SQL definitions, rebuilt the system, enriched the database through Apollo, and set up quote to cash, a churn pipeline, and Dialpad mapped to HubSpot. By the third month they had a clear view of the lead to cash process.</p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all group-hover:translate-y-1 group-hover:shadow-tactile-ink-sm lg:self-center">Read story <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>

        <Link to="/case-studies/integrity-fire-safety" className="group mt-8 grid gap-10 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <img src={integrityLogo} alt="Integrity Fire Safety Services logo" className="h-20 w-auto self-start rounded-2xl bg-cream object-contain p-3 lg:self-center" loading="lazy" />
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-grape/15 px-4 py-2 text-grape">HubSpot rebuild</span>
              <span className="rounded-full bg-mint/25 px-4 py-2">Sales pipeline</span>
              <span className="rounded-full bg-sun/30 px-4 py-2">Automation</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">Integrity Fire Safety: a HubSpot rebuilt from scratch.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/65">A fire safety services company had HubSpot, but confused data, tangled integrations, and logic nobody trusted were slowing the team down. We restructured everything from scratch: the Test and Inspect to Renewals pipeline documented stage by stage, inspection reminders automated, services mapped properly, and ServiceTrade connected to HubSpot for a clear lead to cash journey. The result: a 25% increase in the Test and Inspect pipeline and a 20% better closure rate.</p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all group-hover:translate-y-1 group-hover:shadow-tactile-ink-sm lg:self-center">Read story <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>

        <Link to="/case-studies/ausforming" className="group mt-8 grid gap-10 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <img src={ausformingLogo} alt="Ausforming logo" className="h-20 w-auto self-start rounded-2xl bg-cream object-contain p-3 lg:self-center" loading="lazy" />
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-grape/15 px-4 py-2 text-grape">CRM implementation</span>
              <span className="rounded-full bg-mint/25 px-4 py-2">HubSpot</span>
              <span className="rounded-full bg-sun/30 px-4 py-2">Go to market</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">Ausforming: out of the spreadsheets, into one system.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/65">A SAP solutions business was planning its next chapter with every pipeline, event, and campaign tracked by hand. We mapped the go to market flow first, then built the website, CRM, and events management in HubSpot, with Smartlead for mass outreach. The result: a 20% increase in discovery call bookings, 30% higher email engagement, and a website that now books calls on its own.</p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all group-hover:translate-y-1 group-hover:shadow-tactile-ink-sm lg:self-center">Read story <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>

        <Link to="/case-studies/punjab-film-city" className="group mt-8 grid gap-10 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <img src={punjabFilmCityLogo} alt="Punjab Film City logo" className="h-20 w-auto self-start rounded-2xl bg-cream object-contain p-3 lg:self-center" loading="lazy" />
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-grape/15 px-4 py-2 text-grape">Booking system</span>
              <span className="rounded-full bg-mint/25 px-4 py-2">Zoho</span>
              <span className="rounded-full bg-sun/30 px-4 py-2">Automation</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">Punjab Film City: bookings that run themselves.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/65">A pre-wedding shoots business took enquiries from around the globe by hand, across the contact form, WhatsApp, and half-finished bookings. We built the booking journey on Zoho Creator with every enquiry landing in Zoho CRM. The result: a 20% increase in bookings, 40% less manual work, and a system that runs with the lowest human intervention.</p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all group-hover:translate-y-1 group-hover:shadow-tactile-ink-sm lg:self-center">Read story <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>

        <p className="mt-10 text-center text-ink/45">More stories will be added as clients and evidence are ready. We do not publish anonymous claims or invented results.</p>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-mint"><ShieldCheck size={27} aria-hidden="true" /></span>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Want a story like this for your team?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">See how we scope work, communicate clearly, and set expectations before a project begins.</p>
          </div>
          <Link to="/how-we-work" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">How we work <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
