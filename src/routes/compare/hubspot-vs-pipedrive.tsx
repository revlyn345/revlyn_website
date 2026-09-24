import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Check, Gauge, LayoutList, Plug, Target, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/compare/hubspot-vs-pipedrive")({
  head: () => ({
    meta: [
      { title: "HubSpot vs Pipedrive | Revlyn" },
      { name: "description", content: "A plain, factual comparison of HubSpot and Pipedrive: where the focused sales tool wins, what it leaves out, and how to choose." },
      { property: "og:title", content: "HubSpot vs Pipedrive | Revlyn" },
      { property: "og:description", content: "A plain, factual comparison of HubSpot and Pipedrive for growing revenue teams." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/compare/hubspot-vs-pipedrive" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Compare", path: "/compare" }, { name: "HubSpot vs Pipedrive", path: "/compare/hubspot-vs-pipedrive" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/compare/hubspot-vs-pipedrive" }],
  }),
  component: HubspotVsPipedrive,
});

const rows: { label: string; icon: typeof Target; hubspot: string; pipedrive: string }[] = [
  { label: "Designed around", icon: Target, hubspot: "The whole revenue engine: marketing, sales, service, and content in one shared database.", pipedrive: "A sales pipeline. Contacts, deals, and activities, built to keep sellers moving." },
  { label: "Learning curve", icon: Gauge, hubspot: "Moderate. More concepts, more menus, more to configure before it feels light.", pipedrive: "Very low. Salespeople are usually comfortable within days." },
  { label: "Marketing and service", icon: TrendingUp, hubspot: "Native email marketing, automation, landing pages, and a service desk in the same portal.", pipedrive: "Not the focus. Campaign and support tools exist as add-ons or through integrations." },
  { label: "Automation depth", icon: LayoutList, hubspot: "Broad cross-team automation across marketing, sales, and service objects.", pipedrive: "Solid sales automation: reminders, sequences, and move-based triggers." },
  { label: "Reporting", icon: TrendingUp, hubspot: "Cross-team reporting out of the box: pipeline plus campaigns plus service in one place.", pipedrive: "Good pipeline and activity reporting; cross-team views need other tools." },
  { label: "Cost shape", icon: Users, hubspot: "Higher per-seat tiers, with a usable free tier; marketing features sit in upper tiers.", pipedrive: "Lower per-seat pricing and add-ons; costs stay lean until you add surrounding tools." },
];

const pipedriveWins = [
  "Your need is genuinely just sales pipeline management right now",
  "Budget is tight and every seat must earn its cost",
  "Marketing runs elsewhere already and integration is not a pain point",
  "The team would drown in a bigger platform rather than benefit from it",
];

const hubspotWins = [
  "Marketing, sales, and service need one shared view of every customer",
  "You want campaigns, sequences, and reporting without stitching tools together",
  "Revenue operations is on your roadmap, not just deal tracking",
  "You want one system to grow into rather than out of in a year",
];

function HubspotVsPipedrive() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint px-5 py-20 text-ink sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
        <div aria-hidden="true" className="absolute -right-16 bottom-0 size-96 rounded-full bg-background/40 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">HubSpot vs Pipedrive.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">A full revenue platform against a focused sales pipeline tool. The honest question is not which is better, but which gap would hurt you more.</p>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">At a glance.</h2>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] border-2 border-ink/10">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-ink text-cream">
              <div className="p-5 text-sm font-bold uppercase tracking-wide text-cream/50 sm:p-6">Dimension</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold text-sun sm:p-6">HubSpot</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold sm:p-6">Pipedrive</div>
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
              <h3 className="font-display text-3xl font-bold">Pipedrive fits when</h3>
              <ul className="mt-6 space-y-4">
                {pipedriveWins.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-ink/70">{item}</span></li>)}
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
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">Pipedrive is not a lesser HubSpot; it is a different bet. The trap is not picking it, it is outgrowing it silently: marketing data in one tool, service in another, and the pipeline no longer the source of truth. If two of your three revenue teams already live elsewhere, count that cost before comparing licence prices.</p>
          </div>
        </div>
      </section>

      <section className="reveal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="rounded-[2.5rem] border-2 border-grape/25 bg-grape/10 p-8 sm:p-12">
            <Plug size={30} className="text-grape" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Where our bias sits, stated plainly.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">Revlyn is a HubSpot Solutions Partner, so HubSpot implementation is a service we sell and Pipedrive is not. If your answers land in the Pipedrive column, choosing it is the right call, and a clean setup there will beat an over-built HubSpot portal every time.</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">If your revenue teams keep losing leads and context between each other, that is the problem a connected platform exists to solve, and the work we do.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/compare/hubspot-vs-zoho" className="inline-flex items-center gap-2 rounded-2xl bg-sun px-7 py-4 font-bold text-ink">Next: HubSpot vs Zoho CRM <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Our HubSpot services <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link to="/compare/hubspot-vs-salesforce" className="inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 font-bold text-cream">Next: HubSpot vs Salesforce <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
