import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CrmRevOpsDiagram } from "../components/diagrams/CrmRevOpsDiagram";
import { HubSpotBadge } from "../components/HubSpotBadge";
import { HeroScenes } from "@/components/HeroScenes";
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
    { name: "Integrity Fire Safety Services", href: "/case-studies/integrity-fire-safety", stats: [["25%", "pipeline growth"], ["20%", "higher closure rate"]] },
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
    <main id="top" className="bg-cream text-ink">
        <section ref={heroRef} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`); }} className="group/hero relative isolate mx-auto grid min-h-[calc(100vh-88px)] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-ink px-5 pb-16 pt-14 text-center text-cream sm:px-6 lg:min-h-[780px] lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ink)_50%,transparent)_0%,color-mix(in_oklab,var(--ink)_85%,transparent)_70%,var(--ink)_100%)]" />
          <HeroGlow />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
            <h1 className="w-full max-w-6xl font-display text-[2.05rem] font-bold leading-[0.96] tracking-tight min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[6.8rem] animate-rise-in">
              <span className="block whitespace-nowrap">Grow your <span className="text-brand">pipeline,</span></span>
              <span className="block whitespace-nowrap">not your <span className="text-mint">spreadsheet.</span></span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>
              We combine HubSpot expertise and revenue engineering to build systems around the way your revenue team actually works.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-rise-in" style={{ animationDelay: "0.3s" }}>
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-brand hover:text-cream">
                Book a call <ArrowUpRight size={16} aria-hidden="true" />
              </BookCallButton>
              <a href="#leak-check" className="inline-flex items-center rounded-full border border-cream/25 px-6 py-3 text-sm font-bold text-cream transition-all hover:border-cream/60">
                Find your revenue leaks
              </a>
            </div>
            <HeroScenes />
          </div>

          <div aria-label="Teams we work with" className="relative z-10 mt-20 w-full overflow-hidden animate-rise-in [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]" style={{ animationDelay: "0.6s" }}>
            <div className="flex w-max animate-marquee items-center gap-16">
              {[...customers, ...customers].filter((c) => c.img).map(({ name, img }, i) => (
                <img key={`${name}-${i}`} src={img} alt={i < customers.length ? `${name} logo` : ""} aria-hidden={i >= customers.length} className="h-7 w-auto max-w-[9rem] object-contain opacity-60 brightness-0 invert" />
              ))}
            </div>
          </div>
        </section>


        <section id="why" className="relative mx-auto mt-6 max-w-[92rem] scroll-mt-8 overflow-hidden rounded-[3.5rem] bg-ink py-24 text-cream sm:py-32 lg:rounded-[6rem]">
          <div aria-hidden="true" className="absolute -right-24 top-24 size-80 rounded-full bg-mint/15 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="reveal">
                <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Your CRM exists. But the work lives <span className="text-mint">everywhere else.</span></h2>
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

        <LeakCheck />

        <section className="relative py-20 sm:py-28">
          <div aria-hidden="true" className="absolute left-1/2 top-16 h-px w-[min(56rem,80vw)] -translate-x-1/2 bg-ink/10" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="reveal relative mx-auto aspect-square w-full max-w-md rounded-[3rem] border border-ink/10 bg-background p-5 shadow-sm" aria-label="A connected customer journey from lead to loyal customer">
              <div className="absolute left-1/2 top-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 animate-[spin_50s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] bg-brand text-center font-display text-xl font-bold text-cream shadow-brand">One clear<br />customer view</div>
              {[
                ["Lead", "left-0 top-[42%] bg-sun"],
                ["Conversation", "right-0 top-[12%] bg-mint"],
                ["Customer", "bottom-0 right-[16%] bg-grape text-cream"],
              ].map(([label, position], index) => <div key={label} className={`absolute ${position} grid size-28 place-items-center rounded-[2rem] border border-ink/10 text-center font-display font-bold shadow-sm sm:size-32`} style={{ animationDelay: `${index * 1.2}s` }}>{label}</div>)}
            </div>
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">One connected journey. From first hello to long-term customer.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">Revlyn brings your customer data, conversations, tasks, and decisions into a system your whole team can trust.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {journeyChecks.map((item, index) => (
                  <li key={item} className="reveal flex items-start gap-3 rounded-2xl bg-background p-4 font-semibold shadow-sm transition-transform duration-300 hover:-translate-y-0.5" style={{ transitionDelay: `${0.25 + index * 0.08}s` }}><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint"><Check size={14} /></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="revenue-engineering" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:col-span-8 lg:text-7xl">
                How Revlyn works: <span className="text-brand">revenue engineering.</span>
              </h2>
              <p className="font-bold leading-snug text-ink/60 lg:col-span-4 lg:text-xl">
                Revenue should work like infrastructure: designed, connected, measured, and improved.
              </p>
            </div>
            <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Software alone does not create revenue. We engineer the system around it: the process, the data, the automation, and the numbers, so your team's effort compounds instead of leaking.
            </p>
            <div className="reveal mt-12 rounded-[2.5rem] border border-ink/10 bg-background p-4 shadow-sm sm:p-8" style={{ transitionDelay: "0.1s" }}>
              <CrmRevOpsDiagram className="h-auto w-full" />
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringTiles.map(({ number, title, copy, tone, copyTone, icon: Icon }, index) => (
                <div key={title} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <article className={`flex h-full min-h-[22rem] flex-col justify-between rounded-[2.5rem] border border-ink/10 p-6 shadow-sm ${tone}`}>
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


        <section id="outcomes" className="relative overflow-hidden mx-auto max-w-[92rem] rounded-[3.5rem] bg-ink py-20 text-cream sm:rounded-[6rem] sm:py-28">
          <div aria-hidden="true" className="absolute -left-24 top-10 size-96 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal">
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Less chasing.<br />More clarity.</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-cream/65">Picture a normal Monday once the system works.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map(([Icon, title, copy], index) => {
                const OutcomeIcon = Icon as typeof MessagesSquare;
                return (
                  <div key={title as string} className="reveal" style={{ transitionDelay: `${(index % 2) * 0.12}s` }}>
                    <article className="h-full rounded-[2rem] border border-cream/10 bg-cream/5 p-6 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4"><span className="font-display text-2xl font-bold text-cream/40">{["9:00", "11:00", "14:00", "17:00"][index]}</span><OutcomeIcon size={26} /></div>
                      <h3 className="mt-5 font-display text-2xl font-bold">{title as string}</h3>
                      <p className="mt-2 leading-relaxed text-cream/65">{copy as string}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="results" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal grid gap-5 md:grid-cols-2 md:items-end">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Not just a picture. <span className="text-brand">Real results.</span></h2>
              <p className="max-w-sm text-lg leading-relaxed text-ink/60 md:justify-self-end">What changed for teams who made the shift with us.</p>
            </div>
            <div className="mt-14 border-t border-ink/15">
              {results.map((r, index) => (
                <Link key={r.name} to={r.href} className="reveal group grid items-center gap-6 border-b border-ink/15 py-10 transition-colors md:grid-cols-[1.1fr_1fr_1fr_auto] md:gap-10" style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-bold text-ink/35">0{index + 1}</span>
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand">{r.name}</h3>
                  </div>
                  {r.stats.map(([value, label]) => (
                    <div key={label} className="flex items-baseline gap-3 md:block">
                      <p className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-6xl">{value}</p>
                      <p className="text-sm font-semibold text-ink/55 md:mt-2">{label}</p>
                    </div>
                  ))}
                  <span className="grid size-12 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-cream" aria-label={`Read the ${r.name} story`}>
                    <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="What clients say" className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <figure className="reveal grid gap-10 rounded-[2.5rem] border border-ink/10 bg-background p-8 shadow-sm sm:rounded-[3rem] md:grid-cols-[auto_1fr] md:p-14">
              <img src={iraPhoto} alt="Ira Coleman" loading="lazy" className="size-28 rounded-[1.75rem] object-cover sm:size-36" />
              <div>
                <blockquote className="font-display text-2xl font-bold leading-snug tracking-[-0.02em] sm:text-4xl">
                  &ldquo;They didn&rsquo;t just configure tools, they built the underlying process first, so the CRM reflected how the business actually sold.&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <span><span className="block font-bold">Ira Coleman</span><span className="text-ink/60">Director of Services, Integrity Fire Safety Services</span></span>
                  <Link to="/case-studies/integrity-fire-safety" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-bold transition-all hover:border-brand hover:text-brand">Read the story <ArrowUpRight size={16} aria-hidden="true" /></Link>
                </figcaption>
              </div>
            </figure>
            <Link to="/news/hubspot-gold-partner" className="reveal group mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-ink p-7 text-cream sm:flex-row sm:items-center sm:px-10">
              <span className="flex items-center gap-5"><HubSpotBadge dark size="sm" /><span className="font-display text-xl font-bold tracking-tight">Official HubSpot Gold Partner since July 2026.</span></span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-cream/70 transition-colors group-hover:text-brand">What it means <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          </div>
        </section>

        <section id="services" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div className="reveal lg:sticky lg:top-28 lg:self-start">
                <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Everything your CRM needs to work.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">Pick a focused improvement or bring us in for the complete journey, from structure to everyday adoption.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-all hover:bg-brand">See all HubSpot services <ArrowUpRight size={18} /></Link>
                  <Link to="/revops" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-bold transition-all hover:border-ink/60">Explore RevOps <ArrowUpRight size={18} /></Link>
                </div>
              </div>
              <div className="border-t border-ink/15">
                {services.map(({ icon: Icon, fill, title, copy, href }, index) => (
                  <Link key={title} to={href} className="reveal group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-ink/15 py-7 sm:gap-7" style={{ transitionDelay: `${index * 0.06}s` }}>
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

        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-cream sm:rounded-[3rem] md:p-16">
              <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                <p className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-7xl">Built here.<br /><span className="text-brand">Built for here.</span></p>
                <p className="max-w-xl text-lg leading-relaxed text-cream/70">Revlyn has one focused mission: help growing companies turn CRM from software they own into a system their revenue teams use. We bring HubSpot expertise, revenue engineering, automation, and adoption together in one practical engagement.</p>
              </div>
              <div className="relative mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-3">
                {["Practical over complicated", "Process before platform", "Built around your team"].map((value, i) => (
                  <div key={value} className="bg-ink p-6">
                    <span className="text-sm font-bold text-mint">0{i + 1}</span>
                    <p className="mt-3 font-display text-xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-4">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">A few honest answers.</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink/60">Still unsure? <Link to="/faq" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">See every question</Link> or just ask us.</p>
            </div>
            <div className="reveal border-t border-ink/15" style={{ transitionDelay: "0.1s" }}>
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-ink/15 py-6">
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


        <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-24 sm:px-6">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-14 text-center text-cream sm:rounded-[3rem] sm:px-12 sm:py-16">
                        <div aria-hidden="true" className="absolute -bottom-20 -left-12 size-52 rounded-full bg-brand/40 blur-2xl animate-glow-soft" />
            <div aria-hidden="true" className="absolute -right-10 -top-16 size-44 rounded-full bg-mint/30 blur-2xl animate-glow-soft" style={{ animationDelay: "2s" }} />
            <h2 className="relative mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Let’s make CRM useful.</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-lg text-cream/70">
              Tell us what feels messy today. We’ll map a clearer CRM path for your team.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-brand hover:text-cream">
                Book a call <ArrowUpRight size={18} aria-hidden="true" />
              </BookCallButton>
              <a href="mailto:info@revlyn.io?subject=CRM consultation" className="inline-flex items-center rounded-full border border-cream/25 px-6 py-3 text-sm font-bold text-cream transition-all hover:border-cream/60">
                Email info@revlyn.io
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
