import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Check, Compass, GraduationCap, LifeBuoy, Settings2, ShieldCheck } from "lucide-react";
import { BookCallButton } from "@/components/BookCallButton";
const hubspotBadge = "/images/partners/hubspot-gold-badge.svg";

export const Route = createFileRoute("/partnerships/hubspot")({
  head: () => ({
    meta: [
      { title: "Revlyn and HubSpot | Gold Solutions Partner" },
      { name: "description", content: "Revlyn is a HubSpot Gold Solutions Partner. See what the partnership means for how we plan, build, and support your HubSpot portal." },
      { property: "og:title", content: "Revlyn and HubSpot | Gold Solutions Partner" },
      { property: "og:description", content: "What our HubSpot Gold partnership means for planning, building, and supporting your portal." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/partnerships/hubspot" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Partnerships", path: "/partnerships" }, { name: "Revlyn and HubSpot", path: "/partnerships/hubspot" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/partnerships/hubspot" }],
  }),
  component: HubSpotPartnershipPage,
});

const areas = [
  [Compass, "bg-sun", "Plan", "Map your sales process, data, and reporting needs before anything is configured."],
  [Settings2, "bg-mint", "Build", "Set up pipelines, properties, automation, and integrations around how your team sells."],
  [GraduationCap, "bg-grape text-cream", "Adopt", "Train each team on the parts of HubSpot they use, with habits that keep data useful."],
  [LifeBuoy, "bg-brand text-cream", "Support", "Keep the portal healthy as your team, products, and processes change."],
] as const;

function HubSpotPartnershipPage() {
  return <main id="top">
    <section className="relative mx-auto grid min-h-[60vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-brand/10 px-5 py-20 lg:rounded-b-[6rem]">
      <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/5" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Link to="/partnerships" className="text-sm font-bold text-ink/60 hover:text-ink">← All partnerships</Link>
          <h1 className="mt-6 font-display text-5xl font-bold leading-none sm:text-7xl">HubSpot, <span className="text-brand">set up</span> to work.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">Revlyn is a HubSpot Gold Solutions Partner. We help revenue teams plan, build, and run HubSpot around the way they actually sell.</p>
          <Link to="/hubspot" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">See our HubSpot services <ArrowUpRight size={19} /></Link>
        </div>
        <div className="mx-auto w-full max-w-sm rounded-[3rem] border-2 border-ink bg-background p-6 shadow-tactile-ink">
          <img src={hubspotBadge} alt="HubSpot Gold Solutions Partner badge" width={1080} height={1080} className="h-auto w-full" />
        </div>
      </div>
    </section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <h2 className="max-w-3xl font-display text-4xl font-bold sm:text-6xl">Where the partnership shows up in the work.</h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{areas.map(([Icon, tone, title, copy], i) => <article key={title} className={`rounded-[2.25rem] p-7 ${tone} ${i % 2 ? "lg:translate-y-5" : ""}`}><Icon size={30} /><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed opacity-75">{copy}</p></article>)}</div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2">
      <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10"><ShieldCheck className="text-mint" size={36}/><h2 className="mt-7 font-display text-4xl font-bold">What it means for you.</h2><ul className="mt-7 space-y-4">{["A team that works in HubSpot every day, across sales, marketing, and service.", "Setup decisions made around your process, not around default settings.", "Your portal, data, and documentation stay yours."].map(item => <li key={item} className="flex gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3}/></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}</ul></div>
      <div className="rounded-[3rem] border-2 border-ink/10 bg-background p-8 sm:p-10"><h2 className="font-display text-4xl font-bold">What it does not mean.</h2><p className="mt-6 text-lg leading-relaxed text-ink/65">We will not push extra hubs or seats you do not need. HubSpot remains responsible for its product, licences, pricing, and terms. If HubSpot is not the right fit, we will say so. Our <Link to="/compare" className="font-bold text-brand underline-offset-4 hover:underline">comparison guides</Link> are a good place to start.</p></div>
    </div></section>

    <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16"><h2 className="font-display text-4xl font-bold sm:text-6xl">Get more out of HubSpot.</h2><p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what your portal needs to do. We will tell you where to start.</p><BookCallButton className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={19}/></BookCallButton></div></section>
  </main>;
}
