import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { HeroDashboard3D } from "@/components/HeroDashboard3D";
import { CrmRevOpsDiagram } from "../components/diagrams/CrmRevOpsDiagram";
import { HubSpotBadge } from "../components/HubSpotBadge";
import { ScrollBuild } from "@/components/ScrollBuild";
import { CountUp, Tilt } from "@/components/effects";
import { DepthScroll } from "@/components/DepthScroll";
import { BookCallButton } from "@/components/BookCallButton";
import { SITE_URL } from "../lib/seo";
import { Workflow as ProcessIcon, Database as DataIcon, Bot as AutomationIcon, ChartNoAxesCombined as MeasureIcon } from "lucide-react";

// Client photo is served from revlyn.io (public/images/case-studies/).
const iraPhoto = "/images/case-studies/ira-coleman.jpg";

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
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://revlyn.io/og-image.png" },
      { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
      // The client testimonial shown on this page, as structured data.
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: { "@id": `${SITE_URL}/#organization` },
          author: { "@type": "Person", name: "Ira Coleman", jobTitle: "Director of Services", worksFor: { "@type": "Organization", name: "Integrity Fire Safety Services" } },
          reviewBody: "They didn't just configure tools, they built the underlying process first, so the CRM reflected how the business actually sold.",
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/" }],
  }),
  component: Index,
});

function HeroGlow() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100 [background:radial-gradient(520px_circle_at_var(--gx,50%)_var(--gy,40%),color-mix(in_oklab,var(--brand)_22%,transparent),transparent_70%)]" />;
}

const leakQuestions = [
  "Do leads ever wait more than a day for a first reply?",
  "Do sales and marketing disagree on what counts as a qualified lead?",
  "Does someone rebuild the pipeline report by hand each week?",
  "Do deals stall without anyone noticing until it is too late?",
  "Does your team keep notes in spreadsheets or chat instead of the CRM?",
];

function LeakCheck() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(leakQuestions.map(() => null));
  const answered = answers.filter((a) => a !== null).length;
  const leaks = answers.filter((a) => a === true).length;
  const done = answered === leakQuestions.length;
  const verdict = leaks === 0 ? "Your system looks healthy. A quick review can confirm it stays that way." : leaks <= 2 ? "A few small leaks. These are usually quick, focused fixes." : "Revenue is likely leaking in several places. A connected system would help most.";
  return (
    <section id="leak-check" className="scroll-mt-8 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Where is your revenue <span className="text-brand">leaking?</span></h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink/60">Five quick questions. Thirty seconds. No email needed.</p>
          <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
            <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${(answered / leakQuestions.length) * 100}%` }} />
          </div>
          <p className="mt-2 text-sm font-bold text-ink/45">{answered} of {leakQuestions.length} answered</p>
        </div>
        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <ol className="border-t border-ink/15">
            {leakQuestions.map((q, i) => (
              <li key={q} className="flex flex-col gap-4 border-b border-ink/15 py-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-xl font-bold tracking-tight"><span className="mr-3 text-sm text-ink/35">0{i + 1}</span>{q}</p>
                <div className="flex shrink-0 gap-2" role="group" aria-label={q}>
                  {[["Yes", true], ["No", false]].map(([label, val]) => {
                    const active = answers[i] === val;
                    return (
                      <button key={label as string} type="button" aria-pressed={active} onClick={() => setAnswers((a) => a.map((x, j) => (j === i ? (val as boolean) : x)))} className={`rounded-full border px-5 py-2 text-sm font-bold transition-all ${active ? (val ? "border-brand bg-brand text-cream" : "border-ink bg-ink text-cream") : "border-ink/20 hover:border-ink/60"}`}>
                        {label as string}
                      </button>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>
          <div aria-live="polite" className={`mt-8 rounded-[2rem] bg-ink p-7 text-cream transition-all duration-500 ${done ? "opacity-100" : "pointer-events-none opacity-40"}`}>
            <p className="font-display text-3xl font-bold tracking-tight">{done ? `${leaks} of 5 leaks found.` : "Answer all five to see your result."}</p>
            {done ? <p className="mt-3 max-w-lg leading-relaxed text-cream/70">{verdict}</p> : null}
            {done ? (
              <BookCallButton className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-brand hover:text-cream">
                Talk through your results <ArrowUpRight size={16} aria-hidden="true" />
              </BookCallButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const heroRef = useRef<HTMLElement>(null);
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

  const results = [
    { name: "Ausforming", href: "/case-studies/ausforming", stats: [["20%", "more discovery call bookings"], ["30%", "higher email engagement"]] },
    { name: "Punjab Film City", href: "/case-studies/punjab-film-city", stats: [["20%", "more bookings"], ["40%", "less manual work"]] },
  ] as const;

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
    <main id="top" className="fold-in text-ink">
        <DepthScroll />
        <section ref={heroRef} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`); }} className="group/hero relative isolate mx-auto grid min-h-[calc(100vh-88px)] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] px-5 pb-16 pt-14 text-left text-ink sm:px-6 lg:min-h-[780px] lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />




          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr]"><div className="flex flex-col items-start">
            <h1 className="font-display text-[2.05rem] font-bold leading-[0.98] tracking-tight min-[420px]:text-4xl sm:text-6xl lg:text-[3.3rem] xl:text-[4.4rem] 2xl:text-[5.2rem] animate-rise-in">
              <span className="block whitespace-nowrap">Grow your <span className="text-brand">pipeline,</span></span>
              <span className="block whitespace-nowrap">not your <span className="text-ink/35">spreadsheet.</span></span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>
              From a fresh HubSpot implementation to rebuilding the portal you already have, we set up HubSpot around how you actually sell, then keep it running with RevOps, automation and reporting your revenue team can trust.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-rise-in" style={{ animationDelay: "0.3s" }}>
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-all hover:bg-brand">
                Book a call <ArrowUpRight size={16} aria-hidden="true" />
              </BookCallButton>
              <a href="#leak-check" className="inline-flex items-center rounded-full border border-ink/20 bg-background/70 px-6 py-3 text-sm font-bold text-ink backdrop-blur transition-all hover:border-ink/60">
                Find your revenue leaks
              </a>
            </div>
            <a href="#build" className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-ink/50 transition-colors hover:text-ink animate-rise-in" style={{ animationDelay: "0.45s" }}>Scroll and watch your spreadsheet become a system<ArrowDown size={18} className="animate-bounce" aria-hidden="true" /></a>
          </div>
          <div className="animate-rise-in px-6 py-10 sm:px-12" style={{ animationDelay: "0.3s" }}><HeroDashboard3D /></div>
          </div>

          <div aria-label="Teams we work with" className="relative z-10 mt-20 w-full overflow-hidden animate-rise-in [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]" style={{ animationDelay: "0.6s" }}>
            <div className="flex w-max animate-marquee items-center gap-16">
              {[...customers, ...customers].filter((c) => c.img).map(({ name, img }, i) => (
                <img key={`${name}-${i}`} src={img} alt={i < customers.length ? `${name} logo` : ""} aria-hidden={i >= customers.length} className="h-7 w-auto max-w-[9rem] object-contain opacity-55" />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="pains" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 id="pains" data-depth="0.06" className="reveal max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Sound familiar? Three ways HubSpot <span className="text-brand">quietly costs you.</span></h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {problemCards.map(([t, c], i) => (
                <Tilt key={t} className="rounded-[2rem]"><div className="reveal h-full rounded-[2rem] border border-ink/10 bg-background p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand"><X size={18} aria-hidden="true" /></span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{c}</p>
                </div></Tilt>
              ))}
            </div>
            <a href="#build" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-ink/60 hover:text-brand">Watch how we fix it <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </section>
        <section aria-labelledby="what-is-revlyn" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <h2 data-depth="0.06" id="what-is-revlyn" className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">What is <span className="text-brand">Revlyn?</span></h2>
              <p className="max-w-md text-lg leading-relaxed text-ink/60 md:justify-self-end">A HubSpot partner that brings HubSpot expertise and revenue engineering together, so your CRM becomes the system your revenue team actually runs on.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "What we run", items: ["HubSpot setup and rebuilds", "RevOps", "Automation and workflows", "Reporting", "HubSpot as a Service"] },
                { t: "Where we run it", items: ["HubSpot, across every hub", "The tools around it, such as ServiceTrade and Dialpad"] },
                { t: "Who it is for", items: ["Growing companies", "Distributed, remote revenue teams", "Teams who already pay for HubSpot and want more from it"] },
                { t: "How you can check", items: ["HubSpot Gold Solutions Partner", "Published case studies", "A free HubIQ audit of your portal"] },
              ].map(({ t, items }, i) => (
                <div key={t} className="reveal bg-background p-7" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <h3 className="font-display text-xl font-bold">{t}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-ink/70"><Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition-all hover:border-brand hover:text-brand">More about Revlyn <ArrowUpRight size={16} aria-hidden="true" /></Link>
              <Link to="/hubiq" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition-all hover:border-brand hover:text-brand">Get the free audit <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
        <div id="build" className="scroll-mt-0"><ScrollBuild /></div>
        <section id="revenue-engineering" aria-labelledby="revenue-engineering-heading" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-6 md:grid-cols-2 md:items-end">
              <h2 data-depth="0.06" id="revenue-engineering-heading" className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">We practice <span className="text-brand">revenue engineering.</span></h2>
              <p className="max-w-md text-lg leading-relaxed text-ink/60 md:justify-self-end">Four disciplines, applied together, so your CRM becomes the system your revenue team actually runs on.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringTiles.map(({ number: num, title, copy, tone: tileBg, copyTone, icon: Icon }, i) => (
                <Tilt key={title} className="rounded-[2rem]">
                  <div className={`reveal h-full rounded-[2rem] border border-ink/10 p-7 ${tileBg}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl border-2 border-ink bg-cream text-ink" aria-hidden="true"><Icon size={26} strokeWidth={2.2} /></span>
                      <p className={`font-display text-5xl font-bold tracking-[-0.04em] ${copyTone}`}>{num}</p>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{title}</h3>
                    <p className={`mt-3 leading-relaxed ${copyTone}`}>{copy}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="two-ideas" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 data-depth="0.06" id="two-ideas" className="reveal font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Two ideas behind how we work.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                { t: "Process before platform.", c: "We map how your team really sells, serves, and renews before we touch a setting. Then HubSpot is built to match, so people use it instead of working around it.", to: "/how-we-work" as const, l: "How we work", tone: "bg-background" },
                { t: "One owner for your HubSpot.", c: "A senior team looks after your portal every month, ships improvements, and tells you the next step. You should never have to chase us for it.", to: "/hubspot-as-a-service" as const, l: "HubSpot as a Service", tone: "bg-background" },
              ].map(({ t, c, to, l, tone }, i) => (
                <Tilt key={t} className="rounded-[2.5rem]"><Link to={to} className={`reveal group flex h-full flex-col justify-between rounded-[2.5rem] border border-ink/10 ${tone} p-8 sm:p-10`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div>
                    <span className="text-sm font-bold text-ink/40">0{i + 1}</span>
                    <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t}</h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/65">{c}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold transition-colors group-hover:text-brand">{l} <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link></Tilt>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div className="reveal lg:sticky lg:top-28 lg:self-start">
                <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Everything HubSpot needs to stop being a very expensive address book.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">Pick a focused improvement or bring us in for the complete journey, from structure to everyday adoption.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-all hover:bg-brand">See all HubSpot services <ArrowUpRight size={18} /></Link>
                  <Link to="/revops" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-bold transition-all hover:border-ink/60">Explore RevOps <ArrowUpRight size={18} /></Link>
                </div>
              </div>
              <div className="border-t border-ink/15">
                {services.map(({ icon: Icon, fill, title, copy, href }, index) => (
                  <Link key={title} to={href} className="svc-flip reveal group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-ink/15 py-7 sm:gap-7" style={{ transitionDelay: `${index * 0.06}s` }}>
                    <span className={`grid size-12 place-items-center rounded-full border border-ink/10 bg-background transition-colors duration-300 ${fill} group-hover:text-cream`}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
                      <p className="mt-2 max-w-lg leading-relaxed text-ink/60">{copy}</p>
                    </div>
                    <ArrowUpRight size={22} className="mt-1 text-ink/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-brand" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="platforms" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-6 md:grid-cols-2 md:items-end">
              <h2 id="platforms" className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Where we do the work.</h2>
              <p className="max-w-md text-lg leading-relaxed text-ink/60 md:justify-self-end">HubSpot sits at the centre. We connect the tools your team already relies on around it.</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Marketing Hub", "Sales Hub", "Service Hub", "Operations Hub", "Content Hub", "ServiceTrade", "Dialpad"].map((n, i) => (
                <span key={n} className={`reveal rounded-full border px-6 py-3 font-display text-lg font-bold ${i < 5 ? "border-brand/30 bg-background text-ink" : "border-ink/15 bg-background text-ink/70"}`} style={{ transitionDelay: `${i * 0.04}s` }}>{n}</span>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="plan" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 id="plan" data-depth="0.06" className="reveal max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Your first <span className="text-brand">90 days</span> with Revlyn.</h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:grid-cols-4">
              {[["Weeks 1 to 2", "Look", "A full audit of your portal and how your team really sells."], ["Weeks 3 to 6", "Rebuild", "Stages, ownership and one clean customer record."], ["Weeks 7 to 10", "Automate", "Follow-ups, routing and handoffs that run on rules."], ["Weeks 11 to 13", "Report", "Dashboards your leaders trust, and a team that uses them."]].map(([w, t, c], i) => (
                <li key={t} className="reveal bg-background p-7" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <p className="text-sm font-bold text-ink/40">{w}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-3 leading-relaxed text-ink/60">{c}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-ink/45">A typical shape. Your plan is agreed in writing before we start.</p>
          </div>
        </section>
        <section id="results" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-5 md:grid-cols-2 md:items-end">
              <h2 data-depth="0.06" className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Numbers we are <span className="text-brand">allowed to brag about.</span></h2>
              <p data-depth="0.02" className="max-w-sm text-lg leading-relaxed text-ink/60 md:justify-self-end">What changed for teams who made the shift with us.</p>
            </div>
            <div className="mt-14 border-t border-ink/15">
              {results.map((r, index) => (
                <Tilt key={r.name} max={3}><Link to={r.href} className="reveal group grid items-center gap-6 border-b border-ink/15 py-10 transition-colors md:grid-cols-[1.1fr_1fr_1fr_auto] md:gap-10" style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-bold text-ink/35">0{index + 1}</span>
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand">{r.name}</h3>
                  </div>
                  {r.stats.map(([value, label]) => (
                    <div key={label} className="flex items-baseline gap-3 md:block">
                      <p className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-6xl"><CountUp value={value} /></p>
                      <p className="text-sm font-semibold text-ink/55 md:mt-2">{label}</p>
                    </div>
                  ))}
                  <span className="grid size-12 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-cream" aria-label={`Read the ${r.name} story`}>
                    <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
                  </span>
                </Link></Tilt>
              ))}
            </div>
          </div>
        </section>
        <section aria-label="Featured case study" className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <article className="reveal overflow-hidden rounded-[2.5rem] border border-ink/10 bg-background shadow-sm sm:rounded-[3rem]">
              <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div>
                  <h2 data-depth="0.06" className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">Integrity Fire Safety rebuilt HubSpot around how they really sell.</h2>
                  <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {[["The problem", "A CRM that did not match the sales process, so the team worked around it."], ["What we did", "Mapped the process first, rebuilt HubSpot, and connected ServiceTrade."], ["What changed", "More pipeline and a higher closure rate, from one trusted system."]].map(([t, c]) => (
                      <div key={t} className="border-t border-ink/10 pt-4">
                        <h3 className="font-bold text-brand">{t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{c}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid content-start gap-4">
                  {[["25%", "pipeline growth"], ["20%", "higher closure rate"]].map(([v, l]) => (
                    <Tilt key={l} className="rounded-[1.75rem]"><div className="rounded-[1.75rem] border border-ink/10 bg-cream p-6">
                      <p className="font-display text-6xl font-bold tracking-[-0.04em] text-brand"><CountUp value={v!} /></p>
                      <p className="mt-1 font-semibold text-ink/60">{l}</p>
                    </div></Tilt>
                  ))}
                </div>
              </div>
              <figure className="grid gap-6 border-t border-ink/10 bg-cream p-8 sm:grid-cols-[auto_1fr] sm:items-center md:px-14">
                <img src={iraPhoto} data-depth="0.05" alt="Ira Coleman" loading="lazy" className="size-20 rounded-[1.25rem] object-cover" />
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <blockquote className="max-w-2xl font-display text-xl font-bold leading-snug">&ldquo;They didn&rsquo;t just configure tools, they built the underlying process first, so the CRM reflected how the business actually sold.&rdquo;</blockquote>
                    <figcaption className="mt-3 text-sm text-ink/55"><span className="font-bold text-ink">Ira Coleman</span>, Director of Services, Integrity Fire Safety Services</figcaption>
                  </div>
                  <Link to="/case-studies/integrity-fire-safety" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition-all hover:bg-brand">Read the full story <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </div>
              </figure>
            </article>
            <Link to="/news/hubspot-gold-partner" className="reveal group mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-ink/10 bg-background p-7 sm:flex-row sm:items-center sm:px-10">
              <span className="flex items-center gap-5"><HubSpotBadge size="sm" /><span className="font-display text-xl font-bold tracking-tight">Official HubSpot Gold Partner since July 2026.</span></span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-ink/60 transition-colors group-hover:text-brand">What it means <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          </div>
        </section>
        <section aria-labelledby="reviews" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 id="reviews" className="reveal font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">What clients say <span className="text-brand">when we are not in the room.</span></h2>
            <figure className="reveal mt-12 rounded-[2.5rem] border border-ink/10 bg-background p-8 sm:p-12">
              <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">&ldquo;Revlyn initially helped us clean up and improve our reporting, and that quickly evolved into ongoing support. They&rsquo;ve been hands-on with things like sales rep support, pipeline optimization, and maintaining strong data quality. They also mapped Dialpad to HubSpot, which made it much easier for our sales team to manage everything from a single system.&rdquo;</blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-4"><span aria-hidden="true" className="grid size-14 place-items-center rounded-[1rem] bg-brand font-display text-xl font-bold text-cream">PR</span><span><span className="block font-bold">Peter Rocke</span><span className="text-sm text-ink/55">General Manager, Datapel</span></span></span>
                <Link to="/case-studies/datapel" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold hover:border-brand hover:text-brand">Read the Datapel story <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </figcaption>
            </figure>
          </div>
        </section>
        <section aria-labelledby="tools" className="pt-4">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 id="tools" className="reveal font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Free tools, <span className="text-brand">no strings.</span></h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[{ t: "HubIQ audit", c: "A free audit of your HubSpot portal, report in under 2 hours.", to: "/hubiq" as const, hash: "", tone: "bg-background" }, { t: "Revenue leak check", c: "Five questions, thirty seconds, right here on this page.", to: "/" as const, hash: "leak-check", tone: "bg-background" }, { t: "Renewals automation guide", c: "Set up 90-day renewal deals in HubSpot, step by step.", to: "/renewals-automation-guide" as const, hash: "", tone: "bg-background" }].map(({ t, c, to, hash, tone }) => (
                <Tilt key={t} className="rounded-[2rem]"><Link to={to} hash={hash || ""} className={`reveal group flex h-full flex-col justify-between rounded-[2rem] border border-ink/10 ${tone} p-8`}>
                  <div><h3 className="font-display text-2xl font-bold tracking-tight">{t}</h3><p className="mt-3 leading-relaxed text-ink/65">{c}</p></div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold group-hover:text-brand">Open <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link></Tilt>
              ))}
            </div>
          </div>
        </section>
        <LeakCheck />
        <section className="pb-24 pt-4">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Things people ask us before they book a call.</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink/60">Still unsure? <Link to="/faq" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">See every question</Link> or just ask us.</p>
            </div>
            <div className="reveal border-t border-ink/15" style={{ transitionDelay: "0.1s" }}>
              {faqs.map(([question, answer]) => (
                <details key={question} className="faq-turn group border-b border-ink/15 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-bold tracking-tight transition-colors hover:text-brand">
                    <span>{question}</span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 text-xl font-normal transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-cream">+</span>
                  </summary>
                  <p className="max-w-xl pt-4 leading-relaxed text-ink/60">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="next" className="pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 id="next" className="reveal font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Where to go next.</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {([["Case studies", "/case-studies"], ["HubSpot as a Service", "/hubspot-as-a-service"], ["How we work", "/how-we-work"], ["Life at Revlyn", "/life-at-revlyn"]] as const).map(([t, to]) => (
                <Link key={t} to={to} className="group flex items-center justify-between bg-background p-7 font-display text-xl font-bold hover:text-brand">{t} <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" aria-hidden="true" /></Link>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-24 sm:px-6">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-background px-7 py-14 text-center sm:rounded-[3rem] sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-hero-glow" />
            <h2 data-depth="0.06" className="relative mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Let’s make HubSpot earn its seat.</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-lg text-ink/60">
              Tell us what feels off today. We’ll bring the fix, a clear plan, and a few strong opinions.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-all hover:bg-brand">
                Book a call <ArrowUpRight size={18} aria-hidden="true" />
              </BookCallButton>
              <a href="mailto:info@revlyn.io?subject=CRM consultation" className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-bold transition-all hover:border-ink/60">
                Email info@revlyn.io
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
