import { createFileRoute, Link } from "@tanstack/react-router";
import { HubSpotBadge } from "../components/HubSpotBadge";
import { CrmRevOpsDiagram } from "../components/diagrams/CrmRevOpsDiagram";
import { Workflow as ProcessIcon, Database as DataIcon, Bot as AutomationIcon, ChartNoAxesCombined as MeasureIcon } from "lucide-react";
import agentAgenturLogo from "../assets/customers/agent-agentur.webp";
import ausformingLogo from "../assets/customers/ausforming.webp";
import capLogo from "../assets/customers/classical-academic-press.webp";
import datapelLogo from "../assets/customers/datapel.svg";
import detrackLogo from "../assets/customers/detrack.svg";
import ifssLogo from "../assets/customers/integrity-fire-safety.webp";
import intuitiveLogo from "../assets/customers/intuitive.webp";
import irimLogo from "../assets/customers/irim-global.webp";
import runoLogo from "../assets/customers/runo.webp";
import sparkleLogo from "../assets/customers/sparkle.svg";
import stateSystemsLogo from "../assets/customers/state-systems.webp";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  Link2,
  MessagesSquare,
  RouteIcon,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revlyn | HubSpot and RevOps for Growing Teams" },
      {
        name: "description",
        content:
          "Revlyn combines HubSpot expertise and revenue engineering to build CRM systems around the way growing revenue teams work.",
      },
      { property: "og:title", content: "Revlyn | HubSpot and RevOps for Growing Teams" },
      {
        property: "og:description",
        content:
          "HubSpot setup, automation, reporting, and RevOps support for growing revenue teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/" },
      { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/" }],
  }),
  component: Index,
});

function Index() {
  const problemCards = [
    ["Leads slip through", "Ownership is unclear and the next action depends on memory."],
    ["Teams work in silos", "Sales, marketing, and service see different versions of the customer."],
    ["Reports arrive late", "Decisions wait while scattered data is cleaned and combined."],
  ];

  const journeyChecks = [
    "Every lead has an owner",
    "Every stage has a next step",
    "Every team sees the context",
    "Every report starts with clean data",
  ];

  const approachSteps = [
    ["01", "Understand", "Map how leads arrive, move, stall, and convert today.", "bg-mint"],
    ["02", "Simplify", "Define clean stages, ownership, fields, and rules.", "bg-sun"],
    ["03", "Connect", "Bring your tools, data, and teams into one flow.", "bg-grape text-cream"],
    ["04", "Improve", "Measure adoption, refine reports, and evolve the setup.", "bg-brand text-cream"],
  ];

  const services = [
    { icon: RouteIcon, text: "text-brand", fill: "group-hover:bg-brand", title: "Implementation on HubSpot", href: "/hubspot/implementation", copy: "Structure, stages, and workflows built for the way your business sells, delivered in stages you review." },
    { icon: Database, text: "text-mint", fill: "group-hover:bg-mint", title: "Customer data", href: "/revops/data-architecture", copy: "One clean, organised customer record on HubSpot that every team can depend on." },
    { icon: Zap, text: "text-grape", fill: "group-hover:bg-grape", title: "Sales automation", href: "/hubspot/automation", copy: "Follow-ups, routing, and handoffs that run on rules with a clear purpose and owner, not reminders." },
    { icon: Link2, text: "text-brand", fill: "group-hover:bg-brand", title: "Tool integrations", href: "/hubspot/integrations", copy: "Connect HubSpot to the tools your team already uses so information moves without copy-paste." },
    { icon: BarChart3, text: "text-ink", fill: "group-hover:bg-sun", title: "Reporting & insights", href: "/hubspot/reporting", copy: "Dashboards that show pipeline health, activity, and what needs attention, week after week." },
    { icon: Users, text: "text-mint", fill: "group-hover:bg-mint", title: "Team adoption", href: "/hubspot/training", copy: "Role-based training, documentation, and support that help the new way of working stick." },
  ];

  const outcomes = [
    [MessagesSquare, "Clearer follow-ups", "Reps know who to contact, when, and with the right context."],
    [Users, "Smoother handoffs", "Marketing, sales, and service share one customer story."],
    [Sparkles, "Cleaner execution", "Routine steps happen consistently without becoming robotic."],
    [BarChart3, "Better decisions", "Leaders see what is moving and where the team needs support."],
  ];

  const faqs = [
    ["Do we need to replace our current CRM?", "Not necessarily. We first understand what is not working, then recommend whether to improve your existing setup or rethink it."],
    ["Can you help if we are choosing our first CRM?", "Yes. We can translate your process into clear requirements and help you evaluate the right fit without unnecessary complexity."],
    ["Will our team be supported after setup?", "Yes. Adoption is part of the work. We help your team understand the system and build habits that keep the data useful."],
    ["Can you work with distributed revenue teams?", "Yes. We collaborate remotely across teams and time zones, designing around your actual sales process, tools, and customer journey."],
    ["How do we start without a big commitment?", "Start with a conversation, then a small, clearly scoped first step with pricing in writing. You can pause or stop after any phase. Visit our How We Work page for the full picture."],
  ];

  const engineeringTiles = [
    { number: "01", title: "Process design", copy: "Stages, ownership, and handoffs defined so work moves without depending on memory.", tone: "bg-sun", copyTone: "text-ink/70", icon: ProcessIcon },
    { number: "02", title: "Data architecture", copy: "One clean customer record that every team can depend on.", tone: "bg-mint", copyTone: "text-ink/70", icon: DataIcon },
    { number: "03", title: "Automation", copy: "Follow-ups, routing, and routine steps run on rules, not reminders.", tone: "bg-grape text-cream", copyTone: "text-cream/80", icon: AutomationIcon },
    { number: "04", title: "Measurement", copy: "Dashboards that show pipeline health and what needs attention.", tone: "bg-brand text-cream", copyTone: "text-cream/80", icon: MeasureIcon },
  ];

  const customers: { name: string; url: string; img?: string }[] = [
    { name: "Intuitive", url: "https://intuitive.ai/", img: intuitiveLogo },
    { name: "Runo", url: "https://runo.ai/", img: runoLogo },
    { name: "Detrack", url: "https://www.detrack.com/", img: detrackLogo },
    { name: "State Systems", url: "https://www.statesystemsinc.com/", img: stateSystemsLogo },
    { name: "Datapel", url: "https://datapel.com/", img: datapelLogo },
    { name: "Ausforming", url: "https://ausforming.com/", img: ausformingLogo },
    { name: "Agent AGENTUR", url: "https://agent-agentur.ch/en/", img: agentAgenturLogo },
    { name: "Classical Academic Press", url: "https://classicalacademicpress.com/", img: capLogo },
    { name: "IRIM Global", url: "https://www.irimglobal.com/", img: irimLogo },
    { name: "Integrity Fire Safety Services", url: "https://integrityfiresafetyservices.com/", img: ifssLogo },
    { name: "Sparkle", url: "https://sparkle.life/", img: sparkleLogo },
    { name: "Subcinctus", url: "https://www.subcinctus.com.au/" },
  ];

  return (
    <main id="top">
        <section className="relative isolate mx-auto grid min-h-[calc(100vh-88px)] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/20 px-5 pb-20 pt-8 text-center sm:px-6 sm:pt-10 lg:min-h-[760px] lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute -left-[18%] -top-[38%] h-[72%] w-[58%] rotate-12 rounded-[40%] bg-brand/20 blur-3xl animate-glow-soft" />
          <div aria-hidden="true" className="absolute -right-[16%] -top-[28%] h-[70%] w-[55%] -rotate-12 rounded-[42%] bg-grape/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.6s" }} />
          <div aria-hidden="true" className="absolute -bottom-[42%] left-[12%] h-[70%] w-[76%] rounded-[48%] bg-mint/30 blur-3xl animate-glow-soft" style={{ animationDelay: "3.2s" }} />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
            <h1 className="w-full max-w-6xl font-display text-[2.05rem] font-bold leading-[0.96] min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[6.8rem] animate-rise-in">
              <span className="block whitespace-nowrap">Grow your <span className="text-brand">pipeline,</span></span>
              <span className="block whitespace-nowrap">not your <span className="text-grape">spreadsheet.</span></span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>
              We combine HubSpot expertise and revenue engineering to build systems around the way your revenue team actually works.
            </p>
            <div className="mt-7 animate-rise-in" style={{ animationDelay: "0.22s" }}>
              <Link to="/hubspot" aria-label="Revlyn is a HubSpot Gold Partner"><HubSpotBadge /></Link>
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-lg font-bold text-cream shadow-tactile transition-all hover:translate-y-1 hover:shadow-tactile-sm active:translate-y-2 active:shadow-none">
                Start growing <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href="#services" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 text-lg font-bold shadow-[0_8px_0_0_var(--ink)] transition-all hover:translate-y-1 hover:bg-ink hover:text-cream hover:shadow-[0_4px_0_0_var(--ink)] active:translate-y-2 active:shadow-none">
                See what we do
              </a>
            </div>

            <div aria-label="CRM journey preview" className="relative mt-14 flex w-full max-w-3xl items-start justify-between px-2 sm:px-8 animate-rise-in" style={{ animationDelay: "0.45s" }}>
              <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-5 h-1 rounded-full bg-ink/15" />
              {[
                ["Lead", "bg-sun"],
                ["Context", "bg-mint"],
                ["Follow-up", "bg-brand"],
                ["Growth", "bg-grape"],
              ].map(([label, tone], index) => (
                <div key={label} className="relative z-10 flex w-16 flex-col items-center gap-3 sm:w-24">
                  <div className={`grid size-11 place-items-center rounded-full border-4 border-cream font-display text-sm font-bold text-ink shadow-lg animate-pulse-ring ${tone}`} style={{ animationDelay: `${index * 0.5}s` }}>{index + 1}</div>
                  <p className="text-xs font-bold text-ink/65 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>

            <a href="#why" aria-label="Continue to the CRM journey" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-ink/55 transition-colors hover:text-brand animate-rise-in" style={{ animationDelay: "0.6s" }}>
              See the journey <ArrowDown size={17} className="animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="customers" className="scroll-mt-8 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Our <span className="text-brand">customers.</span>
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {customers.map(({ name, url, img }, index) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} website`}
                  className="group flex min-h-28 items-center justify-center rounded-[1.75rem] border-2 border-ink/10 bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-tactile-sm sm:min-h-32 sm:p-5"
                  style={{ transitionDelay: `${(index % 6) * 0.05}s` }}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`${name} logo`}
                      loading="lazy"
                      className="max-h-10 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-center font-display text-sm font-bold tracking-[0.22em] text-ink/80 sm:text-base">
                      SUBCINCTUS
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="relative scroll-mt-8 overflow-hidden bg-ink py-24 text-cream sm:py-32">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div aria-hidden="true" className="absolute -right-24 top-24 size-80 rounded-full bg-mint/15 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="reveal">
                <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-6xl">Your CRM exists. But the work lives <span className="text-mint">everywhere else.</span></h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/65">
                  A CRM should connect the journey, not add another place your team has to update.
                </p>
              </div>
              <div className="reveal rounded-[2.5rem] border border-cream/10 bg-cream/5 p-4 shadow-2xl backdrop-blur sm:p-5" style={{ transitionDelay: "0.15s" }}>
                <div className="space-y-3">
                  {problemCards.map(([title, copy], index) => (
                    <div key={title} className="flex items-start gap-4 rounded-[1.75rem] border border-cream/10 bg-cream/5 p-5 transition-transform duration-300 hover:-translate-y-1">
                      <div className={`grid size-11 shrink-0 place-items-center rounded-xl ${index === 1 ? "bg-brand/20" : "bg-mint/15"}`}>
                        <X size={20} className="text-mint" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{title}</h3>
                        <p className="mt-1 leading-relaxed text-cream/60">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-28">
          <div aria-hidden="true" className="absolute left-1/2 top-16 h-px w-[min(56rem,80vw)] -translate-x-1/2 bg-ink/10" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="reveal relative mx-auto aspect-square w-full max-w-md rounded-[3rem] border-2 border-ink/5 bg-background p-5 shadow-sm" aria-label="A connected customer journey from lead to loyal customer">
              <div className="absolute left-1/2 top-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-ink/20 animate-[spin_50s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] bg-brand text-center font-display text-xl font-bold text-cream shadow-tactile">One clear<br />customer view</div>
              {[
                ["Lead", "left-0 top-[42%] bg-sun"],
                ["Conversation", "right-0 top-[12%] bg-mint"],
                ["Customer", "bottom-0 right-[16%] bg-grape text-cream"],
              ].map(([label, position], index) => <div key={label} className={`absolute ${position} grid size-28 place-items-center rounded-[2rem] border-4 border-cream text-center font-display font-bold shadow-xl animate-floaty sm:size-32`} style={{ animationDelay: `${index * 1.2}s` }}>{label}</div>)}
            </div>
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">One connected journey. From first hello to long-term customer.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">Revlyn brings your customer data, conversations, tasks, and decisions into a system your whole team can trust.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {journeyChecks.map((item, index) => (
                  <li key={item} className="reveal flex items-start gap-3 rounded-2xl bg-background p-4 font-semibold shadow-sm transition-transform duration-300 hover:-translate-y-0.5" style={{ transitionDelay: `${0.25 + index * 0.08}s` }}><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint"><Check size={14} /></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="approach" className="relative scroll-mt-8 overflow-hidden border-y-2 border-ink/10 bg-background py-20 sm:py-28">
          <div aria-hidden="true" className="absolute -left-24 top-20 size-80 rounded-full bg-sun/20 blur-3xl" />
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">A practical path to a CRM people use.</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/65">We start with your sales reality, not a software feature list, then build the right system around it.</p>
            </div>
            <div className="relative mt-14 grid gap-4 md:grid-cols-4">
              <div aria-hidden="true" className="reveal reveal-line absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-ink/20 md:block" />
              {approachSteps.map(([number, title, copy, tone], index) => (
                <div key={number} className="reveal" style={{ transitionDelay: `${index * 0.12}s` }}>
                  <article className="relative rounded-[2rem] bg-cream p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    <div className={`${tone} relative z-10 grid size-16 place-items-center rounded-2xl border-4 border-background font-display text-lg font-bold shadow-lg`}>{number}</div>
                    <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/60">{copy}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="revenue-engineering" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:col-span-8 lg:text-6xl">
                We practice <span className="text-brand">revenue engineering.</span>
              </h2>
              <p className="font-bold leading-snug text-ink/60 lg:col-span-4 lg:text-xl">
                Revenue should work like infrastructure: designed, connected, measured, and improved.
              </p>
            </div>
            <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Software alone does not create revenue. We engineer the system around it the process, the data, the automation, and the numbers so your team's effort compounds instead of leaking.
            </p>
            <div className="reveal mt-12 rounded-[2.5rem] border-2 border-ink/5 bg-cream/60 p-4 shadow-sm sm:p-8" style={{ transitionDelay: "0.1s" }}>
              <CrmRevOpsDiagram className="h-auto w-full" />
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringTiles.map(({ number, title, copy, tone, copyTone, icon: Icon }, index) => (
                <div key={title} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <article className={`flex h-full min-h-[22rem] flex-col justify-between rounded-[2.5rem] border-2 border-ink p-6 shadow-tactile-ink ${tone}`}>
                    <div className="flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl border-2 border-ink bg-cream text-ink" aria-hidden="true"><Icon size={26} strokeWidth={2.2} /></span>
                      <span className="font-display text-4xl font-bold opacity-40" aria-hidden="true">{number}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold sm:text-3xl">{title}</h3>
                      <p className={`mt-3 font-semibold leading-relaxed ${copyTone}`}>{copy}</p>
                    </div>
                    
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal mb-12 grid gap-5 md:grid-cols-2 md:items-end">
              <div>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">Everything your CRM needs to work.</h2>
              </div>
              <div className="md:justify-self-end">
                <span className="inline-block rounded-full bg-mint px-6 py-3 font-display font-bold shadow-lg animate-floaty">Built on HubSpot</span>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/65">Pick a focused improvement or bring us in for the complete journey, from structure to everyday adoption.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, text, fill, title, copy, href }, index) => (
              <div key={title} className="reveal" style={{ transitionDelay: `${(index % 3) * 0.1}s` }}>
                <Link to={href} className="group block h-full rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`grid size-16 place-items-center rounded-2xl border border-ink/5 bg-cream transition-colors duration-300 ${fill}`}>
                    <Icon size={26} className={`transition-colors duration-300 group-hover:text-cream ${text === "text-ink" ? "group-hover:text-ink" : ""}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/65">{copy}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand">Explore this service <ArrowUpRight size={17} /></span>
                </Link>
              </div>
            ))}
            </div>

            <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-3.5 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">See all HubSpot services <ArrowUpRight size={18} /></Link>
              <Link to="/revops" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-background px-7 py-3.5 font-bold transition-all hover:-translate-y-0.5 hover:bg-cream">Explore RevOps <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[3.5rem] bg-mint py-20 sm:rounded-[6rem] sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">Less chasing.<br />More clarity.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map(([Icon, title, copy], index) => {
                const OutcomeIcon = Icon as typeof MessagesSquare;
                return (
                  <div key={title as string} className="reveal" style={{ transitionDelay: `${(index % 2) * 0.12}s` }}>
                    <article className="h-full rounded-[2rem] border-2 border-ink/10 bg-cream/35 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4"><span className="font-display text-4xl font-bold text-ink/25">0{index + 1}</span><OutcomeIcon size={26} /></div>
                      <h3 className="mt-5 font-display text-2xl font-bold">{title as string}</h3>
                      <p className="mt-2 leading-relaxed text-ink/65">{copy as string}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-8 rounded-[2.5rem] border-2 border-ink/5 bg-background p-7 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-12">
              <p className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Built here.<br /><span className="text-brand">Built for here.</span></p>
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-ink/70">Revlyn has one focused mission: help growing companies turn CRM from software they own into a system their revenue teams use. We bring HubSpot expertise, revenue engineering, automation, and adoption together in one practical engagement.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Practical over complicated", "Process before platform", "Built around your team"].map((value) => <span key={value} className="rounded-full bg-cream px-4 py-2 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5">{value}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h2 className="reveal text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">A few honest answers.</h2>
            <div className="reveal mt-10 divide-y-2 divide-ink/10 rounded-[2.5rem] border-2 border-ink/10 bg-background px-7 py-3 shadow-sm sm:px-10" style={{ transitionDelay: "0.1s" }}>
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-bold transition-colors hover:text-brand"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-sun text-lg transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-relaxed text-ink/65">{answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-24 sm:px-6">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-14 text-center text-cream sm:rounded-[3rem] sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-12 size-52 rounded-full bg-brand/40 blur-2xl animate-glow-soft" />
            <div aria-hidden="true" className="absolute -right-10 -top-16 size-44 rounded-full bg-mint/30 blur-2xl animate-glow-soft" style={{ animationDelay: "2s" }} />
            <h2 className="relative mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">Let’s make CRM useful.</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-lg text-cream/70">
              Tell us what feels messy today. We’ll map a clearer CRM path for your team.
            </p>
            <a href="mailto:info@revlyn.io?subject=CRM consultation" className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-9 py-4 text-lg font-bold text-ink shadow-[0_8px_0_0_var(--ink)] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_0_var(--ink)] active:translate-y-2 active:shadow-none">
              Email Revlyn <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>
    </main>
  );
}
