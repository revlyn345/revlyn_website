import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Scale, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/compare/")({
  head: () => ({
    meta: [
      { title: "CRM Platform Comparisons | Revlyn" },
      { name: "description", content: "Plain, factual comparisons between HubSpot and the platforms it is most often weighed against, written to help you decide." },
      { property: "og:title", content: "CRM Platform Comparisons | Revlyn" },
      { property: "og:description", content: "Plain, factual CRM platform comparisons, written to help you decide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/compare" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "CRM Platform Comparisons", path: "/compare" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/compare" }],
  }),
  component: ComparePage,
});

const guides = [
  {
    to: "/compare/hubspot-vs-salesforce",
    tone: "bg-brand text-cream",
    title: "HubSpot vs Salesforce",
    copy: "The all-in-one growth platform against the enterprise customisation heavyweight. Where each is strong, and which questions settle the choice.",
    tag: "Most compared",
  },
  {
    to: "/compare/hubspot-vs-pipedrive",
    tone: "bg-mint",
    title: "HubSpot vs Pipedrive",
    copy: "A full revenue platform against a focused sales pipeline tool. When simplicity wins, and when it quietly costs you marketing and service.",
    tag: "For smaller teams",
  },
  {
    to: "/compare/hubspot-vs-zoho",
    tone: "bg-sun",
    title: "HubSpot vs Zoho CRM",
    copy: "Ease of use and one connected platform against lower prices and a wide suite of business apps. How to weigh the real cost.",
    tag: "For cost-conscious teams",
  },
];

function ComparePage() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-20 text-cream sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
        <div aria-hidden="true" className="absolute -left-20 bottom-0 size-96 rounded-full bg-mint/25 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">Choose with your <span className="text-sun">eyes open.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">The platform comparisons buyers search for most, written plainly and factually so you can decide for yourself.</p>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((item) => (
              <Link key={item.to} to={item.to} className="group flex flex-col rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-10">
                <span className={`grid size-16 place-items-center rounded-2xl ${item.tone}`}><Scale size={26} aria-hidden="true" /></span>
                <p className="mt-6 text-xs font-bold uppercase tracking-wide text-ink/40">{item.tag}</p>
                <h2 className="mt-2 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">{item.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/65">{item.copy}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand">Read the comparison <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <span className="grid size-16 place-items-center rounded-2xl bg-sun"><ShieldCheck size={27} aria-hidden="true" /></span>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Full transparency before you read.</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink/65">Revlyn is a HubSpot Solutions Partner, so HubSpot implementation is a service we sell. We wrote these comparisons to be useful either way: every page says plainly where that bias could sit, and includes the reasons a team should pick the other platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal bg-sun/20 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Still torn after reading?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">Bring your process, team shape, and tool list to a free first call. We will tell you which platform fits, including when the answer is not HubSpot.</p>
          <a href="https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
