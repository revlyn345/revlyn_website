import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight, Check, DatabaseZap, Handshake, ShieldCheck } from "lucide-react";
const hubspotBadge = "/images/partners/hubspot-gold-badge.svg";
const bitscaleLogo = "/images/partners/bitscale-logo.svg";

export const Route = createFileRoute("/partnerships/")({
  head: () => ({
    meta: [
      { title: "Technology Partnerships | Revlyn" },
      { name: "description", content: "Explore Revlyn's technology partnerships and how selected platforms support connected CRM data, useful workflows, and stronger revenue operations." },
      { property: "og:title", content: "Technology Partnerships | Revlyn" },
      { property: "og:description", content: "Technology partnerships chosen for practical fit across CRM data, workflows, and revenue operations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/partnerships" },
      { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    { "script:ld+json": breadcrumbSchema([{ name: "Technology Partnerships", path: "/partnerships" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/partnerships" }],
  }),
  component: PartnershipsPage,
});

const principles = [
  ["01", "Fit before affiliation", "A partnership does not make a platform right for every team. The operating need comes first."],
  ["02", "Connection before collection", "New tools should improve the flow of useful data into the CRM, not create another isolated workspace."],
  ["03", "Ownership stays visible", "Every workflow needs a responsible team, a clear purpose, and rules people can understand."],
];

function PartnershipsPage() {
  return <main id="top">
    <section className="relative mx-auto grid min-h-[60vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/20 px-5 py-20 lg:rounded-b-[6rem]">
      <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/5" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem]">Better tools.<br/><span className="text-brand">Clearer</span> <span className="text-grape">systems.</span></h1>
        <div className="lg:pb-2">
          <p className="max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">Revlyn partners with technology companies when their products can strengthen the CRM and revenue systems we help teams build.</p>
          <a href="#partners" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Explore our partnerships <ArrowUpRight size={19} /></a>
        </div>
      </div>
    </section>

    <section id="partners" className="reveal scroll-mt-28 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <Handshake className="text-brand" size={38} />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">A partnership should earn its place.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">We look for practical alignment with the work: cleaner data, better decisions, and less manual movement between systems.</p>
        </div>
        <div className="grid gap-6">
        <Link to="/partnerships/hubspot" className="group rounded-[3rem] border-2 border-ink bg-brand/10 p-7 shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm sm:p-10">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <img src={hubspotBadge} alt="HubSpot Gold Solutions Partner badge" width={1080} height={1080} className="size-36 rounded-[2rem] bg-background object-contain p-2" />
            <div><p className="text-sm font-bold text-brand">Revlyn × HubSpot</p><h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">HubSpot Gold Solutions Partner.</h3><p className="mt-4 text-lg leading-relaxed text-ink/65">We plan, build, and support HubSpot portals around the way revenue teams actually sell.</p><span className="mt-5 inline-flex items-center gap-2 font-bold text-grape">Explore partnership <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1" /></span></div>
          </div>
        </Link>
        <Link to="/partnerships/bitscale" className="group rounded-[3rem] border-2 border-ink bg-sun/20 p-7 shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm sm:p-10">
          <div className="flex min-h-28 items-center rounded-[2rem] bg-background px-7 py-6">
            <img src={bitscaleLogo} alt="Bitscale" width={266} height={59} className="h-12 max-w-full object-contain" />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="text-sm font-bold text-brand">Revlyn × Bitscale</p><h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">CRM data that is ready to act on.</h3><p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">Bitscale brings data enrichment, data waterfalls, buying signals, AI-assisted research, and CRM sync into one GTM data layer. Revlyn helps fit those capabilities into the process, fields, ownership, and workflows around your CRM.</p></div>
            <span className="inline-flex items-center gap-2 font-bold text-grape">Explore partnership <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
        </div>
      </div>
    </div></section>

    <section className="reveal border-y-2 border-ink/10 bg-brand/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">Three rules for every partnership.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{principles.map(([number, title, copy], index) => <article key={number} className={`rounded-[2.25rem] p-7 ${index === 0 ? "bg-sun" : index === 1 ? "bg-mint md:translate-y-5" : "bg-grape text-cream"}`}><span className="text-sm font-bold opacity-60">{number}</span><h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed opacity-70">{copy}</p></article>)}</div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2">
      <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10"><ShieldCheck className="text-mint" size={36}/><h2 className="mt-7 font-display text-4xl font-bold">What partnership means.</h2><ul className="mt-7 space-y-4">{["We understand where the product can fit inside a wider revenue system.", "We can help connect the technology to CRM data, processes, and team ownership.", "We stay accountable for the Revlyn work we scope and deliver."].map(item => <li key={item} className="flex gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3}/></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}</ul></div>
      <div className="rounded-[3rem] border-2 border-ink/10 bg-background p-8 sm:p-10"><DatabaseZap className="text-grape" size={36}/><h2 className="mt-7 font-display text-4xl font-bold">What it does not mean.</h2><p className="mt-6 text-lg leading-relaxed text-ink/65">A partner logo is not a recommendation without context. We will not suggest a product only because a partnership exists, and the provider remains responsible for its product, pricing, availability, security, and terms.</p></div>
    </div></section>

    <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16"><h2 className="font-display text-4xl font-bold sm:text-6xl">Start with the system, not the logo.</h2><p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us what your team needs the CRM and its data to do. We will help assess the right path.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your setup <ArrowUpRight size={19}/></Link></div></section>
  </main>;
}