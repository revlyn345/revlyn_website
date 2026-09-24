import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Building2, Check, Cloud, Layers, Puzzle, Users, X, Zap } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/compare/hubspot-vs-salesforce")({
  head: () => ({
    meta: [
      { title: "HubSpot vs Salesforce | Revlyn" },
      { name: "description", content: "A plain, factual comparison of HubSpot and Salesforce: strengths, trade-offs, the questions that settle the choice, and when each platform fits." },
      { property: "og:title", content: "HubSpot vs Salesforce | Revlyn" },
      { property: "og:description", content: "A plain, factual comparison of HubSpot and Salesforce for growing revenue teams." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/compare/hubspot-vs-salesforce" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Compare", path: "/compare" }, { name: "HubSpot vs Salesforce", path: "/compare/hubspot-vs-salesforce" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/compare/hubspot-vs-salesforce" }],
  }),
  component: HubspotVsSalesforce,
});

const rows: { label: string; icon: typeof Zap; hubspot: string; salesforce: string }[] = [
  { label: "Designed around", icon: Zap, hubspot: "An all-in-one growth suite: marketing, sales, service, and CMS share one database out of the box.", salesforce: "A highly customisable platform you assemble into your own system from modules and apps." },
  { label: "Getting value early", icon: Cloud, hubspot: "Fast. Standard objects, pipelines, and automation work sensibly with light configuration.", salesforce: "Slower. Value arrives with deliberate setup, and often a dedicated admin or partner." },
  { label: "Customisation depth", icon: Layers, hubspot: "Deep enough for most mid-market processes, but bounded by how the suite is designed.", salesforce: "Extremely deep. Objects, flows, and Apex code can model almost any process." },
  { label: "App ecosystem", icon: Puzzle, hubspot: "Curated marketplace covering common integrations well.", salesforce: "AppExchange, the largest CRM app marketplace by far." },
  { label: "Who runs it", icon: Users, hubspot: "A marketing or revenue lead can own it day to day; no code required for most changes.", salesforce: "Serious long-term use usually needs a trained Salesforce admin, sometimes a team." },
  { label: "Cost shape", icon: Building2, hubspot: "Per-seat tiers that bundle marketing, sales, and service features; costs rise with tier and contacts.", salesforce: "Per-seat licences per cloud plus app, integration, and admin overhead; total cost often exceeds the licence line." },
];

const hubspotWins = [
  "Your marketing, sales, and service teams want one shared database without integration work",
  "You want working pipelines and automation in weeks, not months",
  "The people using it should also be able to change it",
  "You are a growing company, not an enterprise with a platform team",
];

const salesforceWins = [
  "Your sales process is genuinely complex, multi-layer, or heavily regulated",
  "You already have a Salesforce admin or a platform team",
  "You need deep custom objects and logic beyond what a suite expects",
  "Your industry runs on AppExchange apps you already depend on",
];

function Cell({ children, good }: { children: ReactNode; good?: boolean }) {
  return <p className={`leading-relaxed ${good ? "text-ink" : "text-ink/65"}`}>{children}</p>;
}

function HubspotVsSalesforce() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-brand px-5 py-20 text-cream sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
        <div aria-hidden="true" className="absolute -right-16 bottom-0 size-96 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">HubSpot vs Salesforce.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">The all-in-one growth platform against the enterprise customisation heavyweight. Here is where each is strong, and how to tell which one your team actually needs.</p>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">At a glance.</h2>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] border-2 border-ink/10">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-ink text-cream">
              <div className="p-5 text-sm font-bold uppercase tracking-wide text-cream/50 sm:p-6">Dimension</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold text-sun sm:p-6">HubSpot</div>
              <div className="border-l border-cream/10 p-5 text-base font-bold sm:p-6">Salesforce</div>
            </div>
            {rows.map((row, i) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className={`grid grid-cols-[1fr_1.4fr_1.4fr] ${i % 2 === 1 ? "bg-cream/50" : "bg-background"}`}>
                  <div className="p-5 sm:p-6"><span className="flex items-center gap-2 text-sm font-bold sm:text-base"><Icon size={16} className="shrink-0 text-grape" aria-hidden="true" />{row.label}</span></div>
                  <div className="border-l-2 border-mint/60 p-5 text-sm sm:p-6 sm:text-[0.95rem]"><Cell good>{row.hubspot}</Cell></div>
                  <div className="border-l-2 border-ink/15 p-5 text-sm sm:p-6 sm:text-[0.95rem]"><Cell>{row.salesforce}</Cell></div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/45">Descriptions reflect how each platform is generally used by growing and mid-market companies. Feature sets and pricing change; always check current vendor information.</p>
        </div>
      </section>

      <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">The questions that settle it.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10">
              <h3 className="font-display text-3xl font-bold">HubSpot fits when</h3>
              <ul className="mt-6 space-y-4">
                {hubspotWins.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}
              </ul>
            </div>
            <div className="rounded-[3rem] border-2 border-ink/10 bg-background p-8 sm:p-10">
              <h3 className="font-display text-3xl font-bold">Salesforce fits when</h3>
              <ul className="mt-6 space-y-4">
                {salesforceWins.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-ink/70">{item}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-[2.5rem] bg-sun/50 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">The honest tiebreaker.</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">Most teams that regret their choice picked for the company they want to be in three years rather than the one they are now. Salesforce customisation you cannot staff is expensive shelf-ware, and HubSpot limits you outgrow are cheaper to migrate from than a failed enterprise build.</p>
          </div>
        </div>
      </section>

      <section className="reveal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="rounded-[2.5rem] border-2 border-grape/25 bg-grape/10 p-8 sm:p-12">
            <X size={30} className="text-grape" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Where our bias sits, stated plainly.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">Revlyn is a HubSpot Solutions Partner, so HubSpot implementation is a service we sell and Salesforce is not. That is exactly why this page exists in this form: if your answers above land in the Salesforce column, the right advice is to hire Salesforce expertise, not to bend your process into a platform that pays our invoices.</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">If the HubSpot column fits and you want an implementation that survives contact with your real team, that is the work we do.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Our HubSpot services <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link to="/compare/hubspot-vs-pipedrive" className="inline-flex items-center gap-2 rounded-2xl bg-mint px-7 py-4 font-bold text-ink">Next: HubSpot vs Pipedrive <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
