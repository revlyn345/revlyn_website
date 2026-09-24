import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema } from "../../lib/seo";
import { ArrowUpRight, Award, BarChart3, Check, Database, GraduationCap, Layers, Link2, Rocket, UsersRound, Workflow } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/")({ head: () => ({ meta: [
  { title: "HubSpot Gold Partner Services | Revlyn" },
  { name: "description", content: "Revlyn is a HubSpot Gold Partner helping growing teams with onboarding, implementation, migration, automation, reporting, and adoption." },
  { property: "og:url", content: "https://revlyn.io/hubspot" }, { property: "og:title", content: "HubSpot Gold Partner Services | Revlyn" },
  { property: "og:description", content: "HubSpot onboarding, implementation, migration, automation, and adoption for growing revenue teams." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot Gold Partner Services", path: "/hubspot" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Gold Partner Services", description: "Revlyn is a HubSpot Gold Partner helping growing teams with onboarding, implementation, migration, automation, reporting, and adoption.", path: "/hubspot" }) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot" }] }), component: HubSpotPage });

const hubspotServices = [
  { icon: UsersRound, tone: "bg-grape text-cream", title: "HubSpot as a Service", href: "/hubspot/managed", copy: "An ongoing retainer where we become your extended team, pairing deep HubSpot expertise with RevOps thinking to keep your portal improving every month." },
  { icon: Layers, tone: "bg-brand text-cream", title: "Implementation", href: "/hubspot/implementation", copy: "The full build across teams and hubs: process architecture, data, automation, integrations, reporting, and adoption, in stages you review." },
  { icon: Rocket, tone: "bg-sun", title: "Onboarding", href: "/hubspot/onboarding", copy: "A structured start on HubSpot: your process mapped first, configuration second, and training throughout, so day one feels familiar." },
  { icon: Database, tone: "bg-mint", title: "Migration to HubSpot", href: "/hubspot/migration", copy: "Moving from spreadsheets or another CRM into HubSpot with clean field mapping, dedupe rules, and test imports before anything goes live." },
  { icon: Workflow, tone: "bg-brand text-cream", title: "Automation and workflows", href: "/hubspot/automation", copy: "Lead routing, follow-up sequences, task creation, and handoffs built with a clear purpose, trigger, owner, and exception path." },
  { icon: Link2, tone: "bg-grape text-cream", title: "Integrations", href: "/hubspot/integrations", copy: "Connecting HubSpot to your website, lead sources, communication tools, and business systems so information flows without manual copying." },
  { icon: BarChart3, tone: "bg-sun", title: "Reporting and dashboards", href: "/hubspot/reporting", copy: "Pipeline health, activity, ageing, and data-quality views that answer the questions your leadership asks every week." },
  { icon: GraduationCap, tone: "bg-mint", title: "Training and adoption", href: "/hubspot/training", copy: "Role-based walkthroughs, practical guides, and post-launch reviews so HubSpot becomes part of everyday work, not shelfware." },
];

function HubSpotPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/20 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-brand/20 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-grape/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>HubSpot, built<br/><span className="text-brand">for real</span> <span className="text-grape">growth.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>Revlyn is a HubSpot Gold Partner. We help growing teams implement, migrate to, and get real value from HubSpot, built around the way their teams actually sell.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss HubSpot <ArrowUpRight size={19} /></Link>
        <a href="#hubspot-services" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See HubSpot services</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div>
      <h2 className="font-display text-4xl font-bold sm:text-6xl">What Gold Partner means for you.</h2>
      <p className="mt-6 text-lg leading-relaxed text-ink/65">Gold is a tier in HubSpot's Solutions Partner Program, earned through demonstrated HubSpot work and maintained through the program's requirements.</p>
      <p className="mt-5 text-lg leading-relaxed text-ink/65">In practice, it means your HubSpot is designed by a team HubSpot itself recognises for this work, with direct familiarity across the platform's hubs and a working relationship with HubSpot when your project needs it.</p>
    </div>
    <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10">
      <Award className="text-sun" size={36} />
      <p className="mt-8 font-display text-3xl font-bold">Recognised by HubSpot.<br />Accountable to you.</p>
      <ul className="mt-7 space-y-4">
        {["Verified tier in the HubSpot Solutions Partner Program", "Platform knowledge across HubSpot's sales and marketing hubs", "A direct line to HubSpot when your implementation needs it"]
          .map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-sun text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}
      </ul>
    </div>
  </div></section>

  <section id="hubspot-services" className="reveal scroll-mt-8 border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">HubSpot services.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">From first setup to a system your whole team trusts.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hubspotServices.map(({ icon: Icon, tone, title, copy, href }) => {
        const body = <><div className={`grid size-16 place-items-center rounded-2xl ${tone}`}><Icon size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p>{href ? <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand">Explore this service <ArrowUpRight size={17} /></span> : null}</>;
        return href
          ? <Link key={title} to={href} className="block rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">{body}</Link>
          : <article key={title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">{body}</article>;
      })}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <h2 className="font-display text-4xl font-bold sm:text-6xl">Already on HubSpot, or deciding?</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/65">Both are good starting points. We meet you where you are.</p>
      </div>
      <div className="grid gap-4">
        {[["Evaluating HubSpot", "We help you decide whether HubSpot fits your process and budget before you commit, and which hubs and tiers you actually need."],
          ["New to HubSpot", "A structured onboarding: process first, configuration second, training throughout, so day one feels familiar rather than foreign."],
          ["Already using HubSpot", "An audit of your setup, data, workflows, and usage, then focused improvements on what is creating the most friction."]]
          .map(([title, copy], i) => <div key={title} className="flex gap-5 rounded-[2rem] border-2 border-ink/5 bg-background p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-ink/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <HubSpotBadge dark />
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Put HubSpot to work.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us where you are with HubSpot today and what a better working week should look like.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Start a conversation <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
