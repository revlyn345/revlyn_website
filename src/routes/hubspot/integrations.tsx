import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, Globe, Link2, MessageCircle, Phone, Receipt, Share2, Unplug, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/integrations")({ head: () => ({ meta: [
  { title: "HubSpot Integrations for Growing Teams | Revlyn" },
  { name: "description", content: "Connect HubSpot to your website, lead sources, WhatsApp, calling, and business tools so information flows without manual copying." },
  { property: "og:url", content: "https://revlyn.io/hubspot/integrations" }, { property: "og:title", content: "HubSpot Integrations for Growing Teams | Revlyn" },
  { property: "og:description", content: "Website, lead sources, WhatsApp, calling, and business tools connected to HubSpot, without manual copying." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot Integrations for Growing Teams", path: "/hubspot/integrations" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Integrations for Growing Teams", description: "Connect HubSpot to your website, lead sources, WhatsApp, calling, and business tools so information flows without manual copying.", path: "/hubspot/integrations" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/integrations" }] }), component: HubSpotIntegrationsPage });

const connections = [
  { icon: Globe, title: "Website and landing pages", copy: "Every form, chat, and enquiry on your website creates or updates the right record in HubSpot, with the source attached so you know which page brought the lead." },
  { icon: Share2, title: "Lead sources and ads", copy: "Leads from marketplaces, directories, Meta ads, Google ads, and marketplaces land in HubSpot the moment they arrive, instead of sitting in email inboxes or Excel exports." },
  { icon: MessageCircle, title: "WhatsApp and messaging", copy: "Where an official WhatsApp integration exists, conversations connect to the contact timeline so your team sees chat history next to deals, not on one person's phone." },
  { icon: Phone, title: "Calling and meetings", copy: "Calls, recordings, and meeting bookings logged against contacts and deals automatically, so activity data builds itself instead of being typed up later." },
  { icon: Receipt, title: "Invoicing and business tools", copy: "Quotes, invoices, and payment status flowing between HubSpot and your accounting or billing tools, so sales and finance stop asking each other for updates." },
  { icon: Link2, title: "Custom and in-house systems", copy: "Your own software, ERP, or industry tool connected through HubSpot's API, built with the same care as everything else: mapped fields, error handling, and an owner." },
];

const rule = [
  { n: "1", label: "One source of truth", tone: "bg-sun", copy: "For every kind of information, exactly one system owns it. Contacts might live in HubSpot while invoices live in your billing tool. What is never allowed is the same data edited in two places." },
  { n: "2", label: "One direction of flow", tone: "bg-mint", copy: "Data flows one way, or two ways deliberately. Leads flow into HubSpot; payment status flows back. We decide the direction before building, so nothing loops or overwrites itself." },
  { n: "3", label: "A failure plan", tone: "bg-brand text-cream", copy: "Every connection can fail: an API changes, a password expires. Each integration we build has someone who gets alerted and a documented fix, not silent breakage." },
  { n: "4", label: "A named owner", tone: "bg-grape text-cream", copy: "Like every workflow, every integration has a person accountable for it, with notes on what it connects and what to check when something looks off." },
];

const mistakes = [
  { title: "Connecting before cleaning", copy: "Integrations amplify whatever they touch. Syncing a messy tool into HubSpot imports the mess every day, automatically. The order is always: clean, map, then connect." },
  { title: "Two-way sync without a decision", copy: "Syncing both directions because it is possible, without deciding which system wins when they disagree. That is how contact records get randomly overwritten. We make the direction an explicit choice." },
  { title: "Fragile workarounds presented as solutions", copy: "A chain of unofficial connectors and screen scrapers that works in a demo and breaks in a month. We tell you honestly what connects officially today and what would be a gamble." },
  { title: "Integrations nobody monitors", copy: "The sync that quietly stopped three months ago and nobody noticed until leads went missing. Every connection needs alerts and an owner, or it is a liability." },
];

const faqs = [
  { q: "Can HubSpot connect with WhatsApp for our sales team?", a: "Yes, through official WhatsApp Business integrations that work with HubSpot. Conversations appear on the contact timeline. We set it up properly and will tell you plainly what the integration covers and what it does not." },
  { q: "We get leads from marketplaces and directories. Can those flow in automatically?", a: "In most cases yes, either through a direct integration, email parsing, or a small custom connector. The first call is where we look at exactly how those leads reach you today and pick the most reliable route." },
  { q: "What if our tool has no HubSpot integration?", a: "Then we look at HubSpot's API and the other tool's export options, and tell you honestly what is possible: a custom-built connector, a simpler scheduled sync, or sometimes the honest answer that manual entry in one place is cheaper than a fragile integration." },
  { q: "Who maintains the integrations after they are built?", a: "Each integration ships with documentation and a named owner on your team, plus alerts when something fails. For anything custom-built, we remain available to maintain it, and we will say so clearly before building it." },
  { q: "Will integrations break when tools update?", a: "Occasionally, yes: that is the honest nature of connected software. It is exactly why every integration we build has a failure plan and an owner, so a breakage is a fixed-in-days event, not a discovered-in-months one." },
];

function HubSpotIntegrationsPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-grape/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-mint/25 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/25 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>Your tools,<br/><span className="text-brand">finally</span> <span className="text-grape">talking.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>HubSpot connected to your website, lead sources, WhatsApp, calling, and business systems, so information flows where it should and nobody copies anything by hand.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss integrations <ArrowUpRight size={19} /></Link>
        <a href="#connections" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See what connects</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">The connections that matter.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">For most growing businesses, the same handful of connections carry almost all the value. These are the ones we set up most carefully.</p>
    <div id="connections" className="mt-12 grid scroll-mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {connections.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-16 place-items-center rounded-2xl bg-grape text-cream"><Icon size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Four rules for every connection.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Integrations fail in predictable ways. These four rules are how ours stay boring, which is exactly what you want.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10 lg:left-0 lg:top-6 lg:h-1 lg:w-full" />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {rule.map((p) => <div key={p.n} className="relative pl-16 lg:pl-0 lg:pt-16">
          <span className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full font-bold text-ink lg:left-0 ${p.tone}`}>{p.n}</span>
          <h3 className="text-2xl font-bold">{p.label}</h3>
          <p className="mt-3 leading-relaxed text-ink/65">{p.copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-6 rounded-[3rem] bg-ink p-10 text-cream sm:p-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div>
        <Unplug className="text-sun" size={36} />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">An honest word about tools.</h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">Not every tool connects well, and we will never pretend otherwise. Before building anything, you get a plain answer on each tool you use.</p>
      </div>
      <div className="space-y-4">
        {[["Connects officially", "A supported integration exists. We set it up properly and it is dependable."],
          ["Connects with work", "Possible through the API or a scheduled sync. We tell you the cost and the trade-offs first."],
          ["Does not connect well", "We say so, and suggest the most sensible manual or semi-manual route instead of a fragile hack."]]
          .map(([label, copy], i) => <div key={label} className="flex gap-4 rounded-[1.75rem] bg-cream/5 p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="font-bold">{label}</h3><p className="mt-1 leading-relaxed text-cream/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where integrations go wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four patterns behind most integration horror stories, and the reason our rules exist.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {mistakes.map((m) => <article key={m.title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1"><div className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Common questions.</h2>
    <div className="mt-12 space-y-4">
      {faqs.map((f) => <details key={f.q} className="group rounded-[2rem] bg-background p-6 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-mint transition-transform group-open:rotate-45"><ArrowUpRight size={16} /></span></summary><p className="mt-4 leading-relaxed text-ink/65">{f.a}</p></details>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <HubSpotBadge dark />
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Stop copying between tabs.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us which tools your team juggles every day. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
