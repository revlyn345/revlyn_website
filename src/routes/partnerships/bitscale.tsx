import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, Bot, Check, Database, Radar, RefreshCw, ShieldCheck, Workflow } from "lucide-react";
const bitscaleLogo = "/images/partners/bitscale-logo.webp";

export const Route = createFileRoute("/partnerships/bitscale")({
  head: () => ({
    meta: [
      { title: "Revlyn and Bitscale Partnership | CRM Data and GTM Workflows" },
      { name: "description", content: "How Revlyn and Bitscale bring CRM architecture, data enrichment, buying signals, AI-assisted research, and GTM workflows together." },
      { property: "og:title", content: "Revlyn and Bitscale Partnership" },
      { property: "og:description", content: "Connect CRM architecture with enriched data, live signals, AI-assisted research, and practical GTM workflows." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/partnerships/bitscale" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Partnerships", path: "/partnerships" }, { name: "Revlyn and Bitscale Partnership", path: "/partnerships/bitscale" }]) },
    { "script:ld+json": faqSchema(faqs.map(([q = "", a = ""]) => ({ q, a }))) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/partnerships/bitscale" }],
  }),
  component: BitscalePartnershipPage,
});

const capabilities = [
  [Database, "bg-sun", "Data enrichment", "Fill useful contact and company fields from multiple data sources instead of relying on one provider."],
  [RefreshCw, "bg-mint", "Data waterfalls", "Run providers in sequence so a missing answer from one source does not end the search."],
  [Radar, "bg-grape text-cream", "Buying signals", "Bring timely account context into prioritisation rather than treating every record the same."],
  [Bot, "bg-brand text-cream", "AI-assisted research", "Use agents to research and structure information that would otherwise take teams repetitive manual work."],
];

const process = [
  ["01", "Define the decision", "Start with what a rep, marketer, or operator should be able to decide from the data."],
  ["02", "Design the CRM fields", "Agree where enriched information belongs, how it is named, and which system owns it."],
  ["03", "Build the workflow", "Set enrichment, signals, routing, review, and exceptions around a visible operating rule."],
  ["04", "Measure usefulness", "Review coverage, data quality, team use, and whether the workflow changes the intended action."],
];

const faqs = [
  ["Is Bitscale a CRM?", "No. Bitscale describes itself as a GTM data layer for the CRM. It enriches records, combines data sources and signals, supports research, and can sync information into systems including HubSpot."],
  ["Do we need Bitscale to work with Revlyn?", "No. Revlyn's HubSpot and revenue engineering services do not require Bitscale. We recommend tools only when the operating need and fit are clear."],
  ["Can you connect Bitscale with HubSpot?", "That is one of the clearest partnership use cases. We can scope the CRM properties, lifecycle rules, workflows, ownership, and quality checks around the data moving into HubSpot."],
  ["Will enrichment fix poor CRM data?", "Not by itself. More data can make a weak model harder to manage. The field structure, source rules, deduplication, ownership, and intended use still need to be designed."],
  ["Who owns Bitscale's product and pricing?", "Bitscale does. Its current product capabilities, pricing, availability, security, and terms come from Bitscale. Revlyn owns the services and deliverables agreed in our scope with you."],
];

function BitscalePartnershipPage() {
  return <main id="top">
    <section className="relative mx-auto min-h-[64vh] max-w-[92rem] overflow-hidden rounded-b-[3.5rem] bg-sun/25 px-5 py-20 lg:rounded-b-[6rem]">
      <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/5" />
      <div className="relative mx-auto grid min-h-[48vh] max-w-6xl content-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div><img src={bitscaleLogo} alt="Bitscale" width={266} height={59} className="mb-9 h-12 max-w-full object-contain"/><h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[5.75rem]">Useful data.<br/><span className="text-brand">Inside the</span> <span className="text-grape">workflow.</span></h1></div>
        <div className="lg:pb-2"><p className="text-lg leading-relaxed text-ink/70 sm:text-xl">Revlyn and Bitscale connect the data layer with the operating layer: enrichment, signals, and research shaped around the CRM fields, processes, and actions your revenue team uses.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your data workflow <ArrowUpRight size={19}/></Link><a href="https://bitscale.ai/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-background px-7 py-4 font-bold text-ink transition-colors hover:bg-ink hover:text-cream">Visit Bitscale <ArrowUpRight size={19}/></a></div></div>
      </div>
    </section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div><h2 className="font-display text-4xl font-bold sm:text-6xl">What Bitscale brings.</h2><p className="mt-6 text-lg leading-relaxed text-ink/65">Bitscale describes its product as the GTM data layer for your CRM. It combines data enrichment, provider waterfalls, live buying signals, AI agents, and CRM-connected workflows.</p><a href="https://bitscale.ai/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-brand">See current product information <ArrowUpRight size={18}/></a></div>
      <div className="grid gap-5 sm:grid-cols-2">{capabilities.map(([Icon, tone, title, copy], index) => { const I = Icon as typeof Database; return <article key={title as string} className={`rounded-[2.25rem] border-2 border-ink/10 bg-background p-7 ${index % 2 === 1 ? "sm:translate-y-7" : ""}`}><span className={`grid size-14 place-items-center rounded-2xl ${tone}`}><I size={24}/></span><h3 className="mt-7 text-2xl font-bold">{title as string}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy as string}</p></article>})}</div>
    </div></section>

    <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><h2 className="font-display text-4xl font-bold sm:text-6xl">What Revlyn adds around the technology.</h2><p className="text-lg leading-relaxed text-ink/65">The tool can supply data and automation. Revenue engineering decides what belongs in the CRM, when it should change an action, and who owns the outcome.</p></div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[Workflow,"Process design","The sales and marketing decisions the workflow should support."],[Database,"CRM architecture","Properties, objects, source rules, lifecycle definitions, and data ownership."],[ShieldCheck,"Guardrails","Deduplication, exceptions, review steps, permissions, and documentation."],[Radar,"Measurement","Checks for coverage, quality, use, and whether the signal creates a useful action."]].map(([Icon,title,copy], index) => { const I=Icon as typeof Workflow; return <article key={title as string} className={`rounded-[2rem] p-7 ${index===0?"bg-brand text-cream":index===1?"bg-sun":index===2?"bg-grape text-cream":"bg-mint"}`}><I size={28}/><h3 className="mt-9 text-2xl font-bold">{title as string}</h3><p className="mt-3 leading-relaxed opacity-70">{copy as string}</p></article>})}</div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6"><h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">From a data need to a working motion.</h2><div className="mt-12 grid gap-5 lg:grid-cols-4">{process.map(([number,title,copy],index)=><article key={number} className={`rounded-[2rem] border-2 border-ink/10 p-7 ${index%2===1?"lg:translate-y-7":""}`}><span className="text-sm font-bold text-brand">{number}</span><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p></article>)}</div></div></section>

    <section className="reveal bg-ink py-20 text-cream sm:py-28"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2"><div><ShieldCheck className="text-mint" size={38}/><h2 className="mt-7 font-display text-4xl font-bold sm:text-6xl">Clear partnership boundaries.</h2></div><div className="grid gap-4">{["Bitscale owns and operates its product. Its current capabilities, pricing, security, availability, and terms come from Bitscale.","Revlyn owns the services we agree with you: discovery, CRM architecture, workflow design, implementation support, documentation, and adoption.","A partnership is not a reason to force a fit. If the operating need is not there, we will say so."].map(item=><div key={item} className="flex gap-4 rounded-[1.75rem] border border-cream/15 p-5"><span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={15} strokeWidth={3}/></span><p className="leading-relaxed text-cream/75">{item}</p></div>)}</div></div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-5xl px-5 sm:px-6"><h2 className="font-display text-4xl font-bold sm:text-6xl">Questions, answered plainly.</h2><div className="mt-12 grid gap-5">{faqs.map(([q,a],index)=><article key={q} className={`grid gap-4 rounded-[2rem] border-2 border-ink/10 p-7 sm:grid-cols-[3rem_1fr_1.3fr] sm:items-start ${index%2===1?"bg-cream":"bg-background"}`}><span className="grid size-10 place-items-center rounded-full bg-sun font-bold">{String(index+1).padStart(2,"0")}</span><h3 className="text-xl font-bold">{q}</h3><p className="leading-relaxed text-ink/65">{a}</p></article>)}</div></div></section>

    <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-grape p-10 text-center text-cream sm:p-16"><h2 className="font-display text-4xl font-bold sm:text-6xl">Make the data change what happens next.</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-cream/70">Bring us the workflow, the CRM, and the gaps in your data. We will help map the right operating design and whether Bitscale fits it.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Start a conversation <ArrowUpRight size={19}/></Link></div></section>
  </main>;
}