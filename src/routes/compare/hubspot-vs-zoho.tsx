import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Check, Gauge, LayoutList, Plug, Target, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/compare/hubspot-vs-zoho")({
  head: () => ({
    meta: [
      { title: "HubSpot vs Zoho CRM | Revlyn" },
      { name: "description", content: "A plain, factual comparison of HubSpot and Zoho CRM: where each one wins on cost, ease of use, and depth, and how to choose." },
      { property: "og:title", content: "HubSpot vs Zoho CRM | Revlyn" },
      { property: "og:description", content: "A plain, factual comparison of HubSpot and Zoho CRM for growing revenue teams." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/compare/hubspot-vs-zoho" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Compare", path: "/compare" }, { name: "HubSpot vs Zoho CRM", path: "/compare/hubspot-vs-zoho" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/compare/hubspot-vs-zoho" }],
  }),
  component: HubspotVsZoho,
});

const rows: { label: string; icon: typeof Target; hubspot: string; pipedrive: string }[] = [
  { label: "Designed around", icon: Target, hubspot: "One connected platform for marketing, sales, service, and content on a shared database.", pipedrive: "A configurable CRM at the centre of a wide suite of separate Zoho business apps." },
  { label: "Ease of use", icon: Gauge, hubspot: "Known for a clean interface that teams adopt quickly with little admin help.", pipedrive: "Very flexible, but that flexibility often means more setup and a steeper learning curve." },
  { label: "Customisation", icon: LayoutList, hubspot: "Strong custom properties, objects, and workflows, with guardrails that keep portals tidy.", pipedrive: "Deep customisation of layouts, modules, and logic, including its own scripting language." },
  { label: "Marketing and service", icon: TrendingUp, hubspot: "Marketing, sales, and service hubs share the same records natively.", pipedrive: "Covered by other Zoho apps, which connect to the CRM but are separate products." },
  { label: "Ecosystem", icon: Plug, hubspot: "Large app marketplace and partner network around a single platform.", pipedrive: "Many first-party Zoho apps for finance, HR, and operations beyond revenue teams." },
  { label: "Cost shape", icon: Users, hubspot: "Higher per-seat tiers, with a usable free tier; advanced features sit in upper tiers.", pipedrive: "Generally lower per-seat pricing, with bundles that cover many business apps." },
];

const zohoWins = [
  "Budget per seat is the deciding factor",
  "You already run finance, HR, or operations on other Zoho apps",
  "You have an admin who enjoys configuring and scripting the system",
  "Your process is unusual enough to need heavy customisation",
]

const hubspotWins = [
  "Adoption is the biggest risk and the team needs something easy to use",
  "Marketing, sales, and service need one shared view of every customer",
  "You want campaigns, sequences, and reporting without stitching apps together",
  "You would rather not depend on one admin who understands a heavily customised setup",
]

function HubspotVsZoho() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun px-5 py-20 text-ink sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
        <div aria-hidden="true" className="absolute -right-16 bottom-0 size-96 rounded-full bg-background/40 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">HubSpot vs Zoho CRM.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">Two capable CRMs with different bets. HubSpot bets on ease of use and one connected platform. Zoho bets on price and a wide suite of business apps.</p>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">At a glance.</h2>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] border-2 border-ink/10">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-ink text-cream">
              <div className="p-5 text-sm font-bold uppercase tracking-wide text-cream/50 sm:p-6">Dimension</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold text-sun sm:p-6">HubSpot</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold sm:p-6">Zoho CRM</div>
            </div>
            {rows.map((row, i) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className={`grid grid-cols-[1fr_1.4fr_1.4fr] ${i % 2 === 1 ? "bg-cream/50" : "bg-background"}`}>
                  <div className="p-5 sm:p-6"><span className="flex items-center gap-2 text-sm font-bold sm:text-base"><Icon size={16} className="shrink-0 text-grape" aria-hidden="true" />{row.label}</span></div>
                  <div className="border-l-2 border-brand/60 p-5 text-sm sm:p-6 sm:text-[0.95rem]"><p className="leading-relaxed text-ink/65">{row.hubspot}</p></div>
                  <div className="border-l-2 border-mint p-5 text-sm sm:p-6 sm:text-[0.95rem]"><p className="leading-relaxed text-ink">{row.pipedrive}</p></div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/45">Descriptions reflect how each platform is generally used by small and growing companies. Feature sets and pricing change; always check current vendor information.</p>
        </div>
      </section>

      <section className="reveal border-y-2 border-ink/10 bg-sun/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">The questions that settle it.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[3rem] border-2 border-ink/10 bg-background p-8 sm:p-10">
              <h3 className="font-display text-3xl font-bold">Zoho CRM fits when</h3>
              <ul className="mt-6 space-y-4">
                {zohoWins.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-ink/70">{item}</span></li>)}
              </ul>
            </div>
            <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10">
              <h3 className="font-display text-3xl font-bold">HubSpot fits when</h3>
              <ul className="mt-6 space-y-4">
                {hubspotWins.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-[2.5rem] bg-mint/25 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">The honest tiebreaker.</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">Zoho often wins the price comparison, and HubSpot often wins the adoption one. A cheaper CRM your team avoids costs more than a pricier one they use every day. Compare the cost of setup, admin time, and training, not just the licence.</p>
          </div>
        </div>
      </section>

      <section className="reveal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="rounded-[2.5rem] border-2 border-grape/25 bg-grape/10 p-8 sm:p-12">
            <Plug size={30} className="text-grape" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Where our bias sits, stated plainly.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">Revlyn is a HubSpot Solutions Partner, so HubSpot implementation is a service we sell and Zoho is not. If your answers land in the Zoho column, choosing it is the right call, and a well-run Zoho setup will beat a neglected HubSpot portal every time.</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">If your team struggles to adopt the CRM you have, or your revenue teams work in separate tools, that is the problem we help solve.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Our HubSpot services <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link to="/compare/hubspot-vs-salesforce" className="inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 font-bold text-cream">Next: HubSpot vs Salesforce <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
