import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, BarChart3, Check, Database, Mail, Workflow, X } from "lucide-react";
import { HubSpotBadge } from "../components/HubSpotBadge";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/seo";

// Media lives in public/ so it is served from revlyn.io (not Lovable).
const heroVideo = "/videos/haas-hero.mp4";
const problemImg = "/images/haas/haas-problem.webp";
const solutionImg = "/images/haas/haas-solution.webp";

export const Route = createFileRoute("/hubspot-as-a-service")({
  head: () => ({
    meta: [
      { title: "HubSpot as a Service from $500/month | Revlyn" },
      { name: "description", content: "You already pay for HubSpot. Revlyn, a HubSpot Gold Partner, helps you get more value from it without hiring a full-time specialist. From $500/month." },
      { property: "og:title", content: "HubSpot as a Service from $500/month | Revlyn" },
      { property: "og:description", content: "An outsourced HubSpot team for cleaner data, better automation, fewer missed follow-ups, and clearer reporting." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/hubspot-as-a-service" },
      { property: "og:image", content: "https://revlyn.io/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
      { "script:ld+json": breadcrumbSchema([{ name: "HubSpot as a Service", path: "/hubspot-as-a-service" }]) },
      {
        "script:ld+json": serviceSchema({
          name: "HubSpot as a Service",
          description: "An outsourced HubSpot team from Revlyn, a HubSpot Gold Partner: cleaner data, better automation, fewer missed follow-ups, and clearer reporting. From $500/month.",
          path: "/hubspot-as-a-service",
        }),
      },
      { "script:ld+json": faqSchema(faqs) },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/hubspot-as-a-service" }],
  }),
  component: HaasPage,
});


function Cta({ dark = false, label = "Book a free consultation" }: { dark?: boolean; label?: string }) {
  return (
    <BookCallButton className={`inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm ${dark ? "bg-sun text-ink" : "bg-ink text-cream"}`}>
      {label} <ArrowUpRight size={19} />
    </BookCallButton>
  );
}

/* Animated "before" diagram: scattered, broken connections */
function ChaosDiagram() {
  const nodes = [[60, 50, "Leads"], [250, 40, "Deals"], [150, 150, "Sheets"], [300, 170, "Emails"], [50, 200, "Notes"]] as const;
  return (
    <svg viewBox="0 0 360 250" className="h-auto w-full" role="img" aria-label="Disconnected tools and data before ongoing HubSpot support">
      {[[60, 50, 150, 150], [250, 40, 300, 170], [150, 150, 50, 200], [250, 40, 150, 150]].map(([a, b, c, d], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="4 8">
          <animate attributeName="opacity" values="1;0.15;1" dur={`${1.2 + i * 0.4}s`} repeatCount="indefinite" />
        </line>
      ))}
      {nodes.map(([x, y, l], i) => (
        <g key={l}>
          <animateTransform attributeName="transform" type="translate" values={`0 0; ${i % 2 ? 4 : -4} 3; 0 0`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          <rect x={x - 40} y={y - 16} width="80" height="32" rx="8" fill="var(--color-background)" stroke="var(--color-ink)" strokeOpacity="0.2" />
          <text x={x} y={y + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-ink)">{l}</text>
        </g>
      ))}
    </svg>
  );
}

/* Animated "after" diagram: everything flows through HubSpot */
function FlowDiagram() {
  const spokes = [["Clean data", 60, 50], ["Automation", 300, 50], ["Follow-ups", 60, 200], ["Reporting", 300, 200]] as const;
  return (
    <svg viewBox="0 0 360 250" className="h-auto w-full" role="img" aria-label="Clean data, automation, follow-ups and reporting connected through HubSpot">
      {spokes.map(([l, x, y], i) => (
        <g key={l}>
          <line x1="180" y1="125" x2={x} y2={y} stroke="var(--color-grape)" strokeWidth="3" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          <circle r="5" fill="var(--color-sun)">
            <animateMotion dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={`M${x} ${y} L180 125`} />
          </circle>
          <rect x={x - 50} y={y - 16} width="100" height="32" rx="8" fill="var(--color-mint)" />
          <text x={x} y={y + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-ink)">{l}</text>
        </g>
      ))}
      <circle cx="180" cy="125" r="38" fill="var(--color-brand)">
        <animate attributeName="r" values="36;41;36" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="180" y="130" textAnchor="middle" fontSize="14" fontWeight="900" fill="var(--color-cream)">HubSpot</text>
    </svg>
  );
}

/* Animated monthly loop diagram */
function MonthlyLoop() {
  const steps = ["Review", "Prioritise", "Build", "Train", "Measure"];
  return (
    <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Monthly cycle: review, prioritise, build, train, measure">
      <circle cx="200" cy="200" r="140" fill="none" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="3" strokeDasharray="6 10">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite" />
      </circle>
      <circle r="9" fill="var(--color-brand)">
        <animateMotion dur="6s" repeatCount="indefinite" path="M200 60 A140 140 0 1 1 199.9 60" />
      </circle>
      {steps.map((s, i) => {
        const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const x = 200 + Math.cos(a) * 140, y = 200 + Math.sin(a) * 140;
        const fills = ["var(--color-sun)", "var(--color-mint)", "var(--color-brand)", "var(--color-grape)", "var(--color-sun)"];
        const light = i === 2 || i === 3;
        return (
          <g key={s}>
            <rect x={x - 52} y={y - 20} width="104" height="40" rx="12" fill={fills[i]} />
            <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="900" fill={light ? "var(--color-cream)" : "var(--color-ink)"}>{s}</text>
          </g>
        );
      })}
      <text x="200" y="195" textAnchor="middle" fontSize="20" fontWeight="900" fill="var(--color-ink)">Every</text>
      <text x="200" y="220" textAnchor="middle" fontSize="20" fontWeight="900" fill="var(--color-brand)">month</text>
    </svg>
  );
}

/* GIF-style looping mini animation: a dashboard filling up */
function LiveBars() {
  return (
    <svg viewBox="0 0 200 110" className="h-auto w-full" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={12 + i * 31} width="20" rx="4" fill={i % 2 ? "var(--color-mint)" : "var(--color-brand)"}>
          <animate attributeName="height" values={`10;${40 + i * 10};${30 + i * 8};10`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          <animate attributeName="y" values={`100;${60 - i * 10};${70 - i * 8};100`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function Calculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(40);
  const [saved, setSaved] = useState(50);
  const PRICE = 500;
  const monthlyValue = Math.round(hours * 4.33 * rate * (saved / 100));
  const net = monthlyValue - PRICE;
  const hoursBack = Math.round(hours * 4.33 * (saved / 100));
  const slider = (label: string, value: number, set: (n: number) => void, min: number, max: number, step: number, fmt: (n: number) => string) => (
    <label className="block">
      <span className="flex justify-between font-bold"><span>{label}</span><span className="text-brand">{fmt(value)}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="mt-3 w-full accent-[var(--color-brand)]" />
    </label>
  );
  return (
    <div className="grid gap-8 rounded-[3rem] border-2 border-ink/10 bg-background p-8 shadow-tactile-ink sm:p-12 lg:grid-cols-2">
      <div className="space-y-8">
        {slider("Hours your team spends on HubSpot admin each week", hours, setHours, 1, 40, 1, (n) => `${n} hrs`)}
        {slider("Loaded hourly cost of that time", rate, setRate, 15, 150, 5, (n) => `$${n}`)}
        {slider("Share of that time we could take off your plate", saved, setSaved, 10, 90, 5, (n) => `${n}%`)}
        <p className="text-sm text-ink/55">An illustrative estimate based on your inputs, not a guaranteed result. Plans start at $500 per month.</p>
      </div>
      <div className="grid content-center gap-4 rounded-[2rem] bg-ink p-8 text-cream">
        <p className="text-cream/65">Estimated value of time returned each month</p>
        <p className="font-display text-6xl font-black text-sun">${monthlyValue.toLocaleString()}</p>
        <p className="text-cream/75">About {hoursBack} hours back every month.</p>
        <div className={`mt-2 rounded-2xl p-5 font-bold ${net >= 0 ? "bg-mint text-ink" : "bg-brand text-cream"}`}>
          {net >= 0 ? `Covers the $500 starting plan with $${net.toLocaleString()} to spare.` : `About $${Math.abs(net).toLocaleString()} short of the $500 plan on time alone, before counting cleaner data and fewer missed deals.`}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  { q: "What does $500 a month actually include?", a: "It is the starting point for the retainer, not a fixed menu. You get a shared and prioritised backlog, work carried out in your portal under the access you control, documentation that stays current, and a regular review of what shipped and what comes next. Heavier work, such as a migration or a large build, is scoped and quoted separately." },
  { q: "Do we need a list of problems ready before we start?", a: "No. Some teams arrive with a long backlog, others with a portal that works and simply has no owner. Part of the monthly review is bringing the improvement ideas ourselves, so there is always a next thing. If a month genuinely has little to do, we say so rather than invent work." },
  { q: "Do you work directly inside our HubSpot?", a: "Yes, under the access and permissions you set. Changes are documented, and anything significant is explained to your team before or as it lands. You keep full ownership and full visibility of the portal at all times." },
  { q: "How is this different from your other HubSpot services?", a: "Onboarding, migration, and training are projects with a beginning and an end. HubSpot as a Service is ongoing: after a project ships, the system still needs care and improvement, and that is what the retainer is for. Many retainers start exactly where a project finishes." },
  { q: "What does a typical month look like?", a: "Requests land in the shared backlog as they come up, we work through it in priority order, and we close with a review of what shipped and what is next. Some months are one big change; others are steady care and small improvements." },
  { q: "Can we stop, or are we locked in?", a: "The retainer is monthly, and everything we build is named and documented so your team can run it without us. A retainer that creates dependency has failed at its job. The notice period itself is agreed in writing on the first call, before anything starts." },
  { q: "Which hubs and tools do you cover?", a: "HubSpot across its hubs, plus the revenue operations thinking that connects them: data standards, pipeline definitions, handoffs, and reporting. Outside that we have edges. Heavy custom development, for example, sits outside what we do, and we say so early rather than improvise." },
  { q: "Our portal is a mess. Can we start with the retainer?", a: "Usually the honest first step is a focused sort-out: an audit of what exists, a clean-up of what conflicts, and then the retainer keeps it that way. Starting a retainer on top of an untidy portal preserves the mess at a monthly rhythm. On the first call we tell you plainly which of the two you need first." },
  { q: "Is the saving in the calculator real?", a: "It is an estimate built from your own inputs, so it is only as accurate as the numbers you put in. It shows what returned time could be worth, not a result we guarantee. Cleaner data and fewer missed follow-ups sit outside the maths entirely." },
  { q: "What happens on the first call?", a: "We look at how your revenue work actually runs and what your portal does today, then tell you honestly where we would start. It is free and useful whether or not a retainer follows, and you leave with a recommendation rather than a pitch." },
];

const qTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream", "bg-sun"];
const aRules = ["border-grape", "border-sun", "border-mint", "border-brand", "border-grape"];

const ACTS = [
  { id: "act-1", n: "1", t: "The purchase" },
  { id: "act-2", n: "2", t: "The drift" },
  { id: "act-3", n: "3", t: "The cost" },
  { id: "act-4", n: "4", t: "The fix" },
  { id: "act-5", n: "5", t: "The rhythm" },
  { id: "roi", n: "6", t: "The maths" },
  { id: "faq", n: "7", t: "FAQ" },
];

function StoryNav() {
  return (
    <nav aria-label="The story on this page" className="sticky top-3 z-30 mx-auto mt-8 max-w-4xl px-5">
      <ol className="flex flex-wrap justify-center gap-2 rounded-full border-2 border-ink/10 bg-background/90 p-2 shadow-sm backdrop-blur">
        {ACTS.map((a) => (
          <li key={a.id}><a href={`#${a.id}`} className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold text-ink/70 transition-colors hover:bg-sun hover:text-ink"><span className="grid size-5 place-items-center rounded-full bg-ink text-xs text-cream">{a.n}</span>{a.t}</a></li>
        ))}
      </ol>
    </nav>
  );
}

function ActNumber({ n, tone = "bg-sun text-ink" }: { n: string; tone?: string }) {
  return <span aria-hidden="true" className={`grid size-14 place-items-center rounded-2xl font-display text-2xl font-black shadow-tactile-ink-sm ${tone}`}>{n}</span>;
}

function DriftTimeline() {
  const steps = [
    { when: "Launch day", t: "Everything is clean", c: "Fresh pipelines, tidy properties, a dashboard everyone opens.", tone: "bg-mint" },
    { when: "A few months in", t: "Quick fixes pile up", c: "A new field here, a copied workflow there. Nobody writes it down.", tone: "bg-sun" },
    { when: "Later", t: "The team works around it", c: "Reps keep notes in spreadsheets. Leads wait in the wrong queue.", tone: "bg-brand text-cream" },
    { when: "Eventually", t: "Nobody trusts the numbers", c: "Leadership asks for a report and gets three different answers.", tone: "bg-grape text-cream" },
  ];
  return (
    <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
      <div aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-gradient-to-r from-mint via-sun to-grape md:block" />
      {steps.map((s, i) => (
        <li key={s.t} className="relative">
          <span className={`relative grid size-14 place-items-center rounded-full border-4 border-background font-black ${s.tone}`}>{i + 1}</span>
          <p className="mt-5 text-sm font-bold text-ink/50">{s.when}</p>
          <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
          <p className="mt-2 leading-relaxed text-ink/65">{s.c}</p>
        </li>
      ))}
    </ol>
  );
}

function HaasPage() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] lg:rounded-b-[6rem]">
        <video src={heroVideo} poster={solutionImg} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-5xl content-center px-5 py-24 text-center text-cream">
          <HubSpotBadge dark className="mx-auto animate-rise-in" />
          <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl animate-rise-in">You already pay for HubSpot.<br /><span className="text-sun">Get more from it.</span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl">Revlyn becomes your outsourced HubSpot team, so you get ongoing improvements without hiring a full-time specialist.</p>
          <p className="mt-6 font-display text-3xl font-black">From <span className="text-sun">$500</span>/month</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4"><Cta dark /><a href="#act-1" className="rounded-2xl border-2 border-cream px-8 py-4 font-bold transition-all hover:bg-cream hover:text-ink">Read the story</a></div>
        </div>
      </section>

      <StoryNav />

      {/* Act 1: the purchase */}
      <section id="act-1" className="reveal scroll-mt-24 py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <ActNumber n="1" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">You bought HubSpot for good reasons.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">One place for every contact, deal, and conversation. Automation that does the busywork. Reports that show where revenue comes from. On launch day, it delivers exactly that.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["One source of truth", "Automated follow-ups", "Visible pipeline", "Reports you can act on"].map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl bg-mint/25 p-4 font-bold"><Check size={18} className="text-grape" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[3rem] bg-ink p-8 shadow-tactile-ink"><FlowDiagram /><p className="mt-4 text-center text-sm font-bold text-cream/70">The promise: everything connected.</p></div>
      </div></section>

      <section className="reveal mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <h3 className="font-display text-3xl font-bold sm:text-4xl">Sound familiar? This is who it is for.</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[["Teams with no RevOps hire", "The CRM needs constant care, but a full-time specialist is a big bet this early.", "bg-sun"], ["The one-person ops team", "Every request lands in one inbox. The important work keeps losing to the urgent.", "bg-mint"], ["A portal drifting out of shape", "Set up once, then patched by whoever had time. Nobody owns the whole system.", "bg-brand text-cream"], ["Leaders who need numbers that agree", "Every review starts with an argument about whose spreadsheet is right.", "bg-grape text-cream"]].map(([t, c, tone]) => (
            <article key={t} className={`flex min-h-56 flex-col justify-between gap-6 rounded-[2.5rem] p-7 ${tone}`}><h4 className="text-2xl font-bold leading-tight">{t}</h4><p className="font-bold leading-relaxed opacity-75">{c}</p></article>
          ))}
        </div>
      </section>

      {/* Act 2: the drift */}
      <section id="act-2" className="reveal scroll-mt-24 border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ActNumber n="2" tone="bg-brand text-cream" />
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl">Then the portal quietly drifts.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">Not because anyone did something wrong. Running HubSpot well is a job of its own, and in most growing teams it belongs to nobody.</p>
        <DriftTimeline />
      </div></section>

      {/* Act 3: the cost */}
      <section id="act-3" className="reveal scroll-mt-24 py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img src={problemImg} alt="A manager overwhelmed by sticky notes and spreadsheets" width={1280} height={896} loading="lazy" className="rounded-[3rem] shadow-tactile-ink" />
        <div>
          <ActNumber n="3" tone="bg-grape text-cream" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">The drift has a price.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">You keep paying for the licence while the value leaks out in small, everyday ways.</p>
          <ul className="mt-8 space-y-4">
            {[["Duplicate and incomplete records", "Reps waste time checking who is who."], ["Workflows nobody remembers building", "Emails fire at the wrong people, or not at all."], ["Leads that wait too long for a reply", "Interest cools before anyone calls."], ["Reports leadership does not trust", "Decisions go back to gut feel."]].map(([t, c]) => (
              <li key={t} className="flex gap-3"><span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand text-cream"><X size={14} strokeWidth={3} /></span><span><span className="block font-bold">{t}</span><span className="text-ink/60">{c}</span></span></li>
            ))}
          </ul>
        </div>
      </div></section>

      <section className="reveal mx-auto max-w-6xl px-5 sm:px-6"><div className="rounded-[3rem] bg-background p-8 ring-2 ring-ink/10 sm:p-12">
        <h3 className="text-center font-display text-3xl font-bold sm:text-4xl">The usual options do not fit.</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["Do it yourself", "Someone on the team learns HubSpot on the side. Their real job suffers, and so does the portal."], ["Hire a specialist", "Recruiting takes months, one person cannot cover every hub, and the cost is a full salary."], ["One-off project", "A consultant cleans up, leaves, and the drift starts again."]].map(([t, c]) => (
            <div key={t} className="rounded-[2rem] bg-cream/50 p-6"><h4 className="text-xl font-bold">{t}</h4><p className="mt-2 leading-relaxed text-ink/65">{c}</p></div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-md"><ChaosDiagram /></div>
      </div></section>

      <section className="reveal mx-auto max-w-6xl px-5 pt-16 sm:px-6">
        <h3 className="font-display text-3xl font-bold sm:text-4xl">Four ways HubSpot goes wrong without care.</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[["The ghost admin", "Whoever set up HubSpot has moved on. Nobody knows why a workflow exists, so nobody dares touch anything."], ["The ticket graveyard", "Requests arrive by chat, email, and hallway. The urgent ones get done, the rest evaporate."], ["The bloated portal", "Every request becomes a new property or workflow, and nothing is ever retired. Simple changes take hours."], ["The retainer of tickets", "An agency that only does what it is told and never looks at the whole system. The drift keeps compounding."]].map(([t, c]) => (
            <article key={t} className="rounded-[2.5rem] bg-background p-7 ring-2 ring-ink/10"><div className="grid size-10 place-items-center rounded-full bg-grape/15 text-grape"><X size={18} strokeWidth={3} /></div><h4 className="mt-4 text-xl font-bold">{t}</h4><p className="mt-2 leading-relaxed text-ink/65">{c}</p></article>
          ))}
        </div>
      </section>

      {/* Act 4: the fix */}
      <section id="act-4" className="reveal scroll-mt-24 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <ActNumber n="4" tone="bg-mint text-ink" />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">So Revlyn becomes your HubSpot team.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">A HubSpot Gold Partner working inside your portal every month, pairing platform expertise with RevOps thinking. You bring the priorities, we do the building.</p>
            <div className="mt-8"><Cta /></div>
          </div>
          <img src={solutionImg} alt="A team reviewing clear HubSpot dashboards together" width={1280} height={896} loading="lazy" className="rounded-[3rem] shadow-tactile-ink" />
        </div>
        <h3 className="mt-20 font-display text-3xl font-bold sm:text-4xl">What changes in your portal.</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Database, tone: "bg-mint", t: "Cleaner data", c: "Dedupe rules, required fields, and regular hygiene so your records stay usable." },
            { icon: Workflow, tone: "bg-brand text-cream", t: "Better automation", c: "Workflows with a clear purpose, trigger, owner, and exception path." },
            { icon: Mail, tone: "bg-sun", t: "Fewer missed follow-ups", c: "Routing, tasks, and reminders so every lead reaches the right person." },
            { icon: BarChart3, tone: "bg-grape text-cream", t: "Clearer reporting", c: "Dashboards that answer the questions leadership asks every week." },
          ].map(({ icon: Icon, tone, t, c }) => (
            <article key={t} className="rounded-[2.5rem] bg-mint/15 p-7 transition-transform hover:-translate-y-1.5">
              <div className={`grid size-14 place-items-center rounded-2xl ${tone}`}><Icon size={24} /></div>
              <h4 className="mt-5 text-xl font-bold">{t}</h4><p className="mt-2 leading-relaxed text-ink/65">{c}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2.5rem] bg-background p-8 ring-2 ring-ink/10"><h4 className="text-2xl font-bold">Before: without an owner</h4><ChaosDiagram /></div>
          <div className="rounded-[2.5rem] bg-background p-8 ring-2 ring-ink/10"><h4 className="text-2xl font-bold">After: with Revlyn</h4><FlowDiagram /></div>
        </div>
        <div className="mt-12 grid gap-8 rounded-[3rem] bg-background p-8 ring-2 ring-ink/10 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">What you get each month.</h3>
            <p className="mt-4 font-display text-2xl font-black">From <span className="text-brand">$500</span>/month</p>
            <p className="mt-3 leading-relaxed text-ink/65">Everything below is visible to you, not kept in our heads.</p>
          </div>
          <ul className="space-y-3">
            {["A shared, prioritised backlog you can open at any time", "A regular review of what shipped and what comes next", "A portal kept in order: workflows, properties, permissions, and data standards", "Reports and dashboards kept aligned to the decisions leadership makes", "Documentation current enough for any new team member to find their way"].map((d, i) => (
              <li key={d} className="flex items-start gap-3 rounded-2xl bg-cream/60 p-4"><span className={`grid size-8 shrink-0 place-items-center rounded-full ${["bg-mint", "bg-sun", "bg-brand text-cream", "bg-grape text-cream", "bg-mint"][i]}`}><Check size={15} strokeWidth={3} /></span><span className="leading-relaxed text-ink/80">{d}</span></li>
            ))}
          </ul>
        </div>
      </div></section>

      {/* Act 5: the rhythm */}
      <section id="act-5" className="reveal scroll-mt-24 border-y-2 border-ink/10 bg-grape/10 py-16 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr_1fr] lg:items-end">
          <ActNumber n="5" />
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Then it keeps getting better.</h2>
          <p className="text-lg leading-relaxed text-ink/65">Instead of one big clean-up that fades, you get a steady monthly rhythm. Every cycle leaves the portal a little sharper.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div className="mx-auto w-full max-w-sm"><MonthlyLoop /></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[["Review", "We look at what changed and what is slowing the team down."], ["Prioritise", "You pick what matters most this month."], ["Build", "We make the changes in your portal."], ["Train", "Your team learns how to use what we built."], ["Measure", "We check what moved, then go again."]].map(([t, c], i) => (
              <div key={t} className="flex gap-3 rounded-2xl bg-background p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-black text-cream">{i + 1}</span><span className="text-sm leading-relaxed"><span className="block font-bold">{t}</span><span className="text-ink/65">{c}</span></span></div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-ink p-4"><LiveBars /><p className="mt-2 text-xs font-bold text-cream/70">Small improvements, compounding.</p></div>
          </div>
        </div>
        <h3 className="mt-14 text-center font-display text-3xl font-bold sm:text-4xl">Specialist skills, without the hire.</h3>
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border-2 border-ink/10 bg-background">
          <div className="grid grid-cols-3 gap-4 bg-ink p-5 text-sm font-bold text-cream"><span></span><span>Revlyn</span><span>Full-time hire</span></div>
          {[["Recruiting and onboarding", "Not needed", "Months"], ["Coverage across hubs and RevOps", "A team", "One person"], ["Flexible as priorities change", "Yes", "Harder"], ["Starting cost", "$500/month", "A full salary"]].map(([row, us, them], i) => (
            <div key={row} className={`grid grid-cols-3 gap-4 p-5 ${i % 2 ? "bg-cream/40" : ""}`}>
              <span className="font-bold">{row}</span>
              <span className="flex items-center gap-2 font-bold text-grape"><Check size={16} />{us}</span>
              <span className="text-ink/55">{them}</span>
            </div>
          ))}
        </div>
      </div></section>

      {/* Promises and honest limits */}
      <section className="reveal mx-auto max-w-6xl px-5 pt-20 sm:px-6 sm:pt-28"><div className="relative overflow-hidden rounded-[3rem] bg-ink p-8 text-cream sm:p-12 lg:p-16">
        <div aria-hidden="true" className="absolute -right-32 -top-32 size-64 rounded-full bg-sun/10 blur-3xl" />
        <h2 className="relative max-w-3xl font-display text-4xl font-bold sm:text-5xl">What we promise, and where <span className="text-sun">our edges</span> are.</h2>
        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["One backlog beats ten inboxes", "Everything we owe you sits in one visible place, prioritised, with an owner."], ["The system outlives the retainer", "Everything is documented and named so your team can run it without us."], ["Every change serves the revenue process", "We say no to changes that add moving parts without moving revenue."], ["Visibly booked, not quietly late", "If a request does not fit the month, it waits in the backlog where you can see it."]].map(([t, c]) => (
            <div key={t} className="rounded-[2rem] bg-cream/5 p-6 ring-1 ring-cream/10"><Check size={18} className="text-mint" /><h3 className="mt-4 text-lg font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-cream/65">{c}</p></div>
          ))}
        </div>
        <div className="relative mt-10 grid gap-8 border-t border-cream/15 pt-10 md:grid-cols-3">
          {[["We are an extension, not a replacement", "Decisions about your revenue process stay yours. We bring the expertise and the follow-through."], ["Some months are quiet", "A quiet month often means the system is holding: no fires, no drift, no surprises in the numbers."], ["Expertise has edges", "We are deep in HubSpot and RevOps, not in everything. Heavy custom development, for example, we flag early."]].map(([t, c], i) => (
            <div key={t}><h3 className={`text-xl font-bold ${["text-sun", "text-mint", "text-brand"][i]}`}>{t}</h3><p className="mt-2 leading-relaxed text-cream/70">{c}</p></div>
          ))}
        </div>
      </div></section>

      {/* Act 6: the maths */}
      <section id="roi" className="reveal scroll-mt-24 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ActNumber n="6" tone="bg-brand text-cream" />
        <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Does $500 pay for itself?</h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/65">Move the sliders to see how time savings could offset the monthly investment.</p>
        <div className="mt-12"><Calculator /></div>
      </div></section>

      {/* Questions */}
      <section id="faq" className="reveal scroll-mt-24 border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ActNumber n="7" tone="bg-mint text-ink" />
        <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Questions, answered plainly.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The things owners ask before a retainer makes sense. If yours is not here, the first call answers it faster than any page.</p>
        <div className="mt-14 grid items-start gap-8 md:grid-cols-2">
          {faqs.map((f, i) => (
            <article key={f.q} className="rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5">
              <h3 className="flex items-start gap-3 text-xl font-bold leading-snug sm:text-2xl">
                <span className={`shrink-0 rounded-xl border-2 border-ink px-2.5 py-0.5 font-display text-lg font-bold ${qTones[i % qTones.length]}`}>Q</span>
                {f.q}
              </h3>
              <p className={`mt-5 border-l-4 ${aRules[i % aRules.length]} pl-5 font-bold leading-relaxed text-ink/70`}>{f.a}</p>
            </article>
          ))}
        </div>
      </div></section>

      {/* Ending */}
      <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
        <HubSpotBadge dark />
        <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Write the next chapter of your HubSpot.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Book a free consultation. We will look at your portal and tell you honestly where we would start.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4"><Cta dark /><Link to="/hubspot/managed" className="rounded-2xl border-2 border-cream px-8 py-4 font-bold hover:bg-cream hover:text-ink">See the full retainer details</Link></div>
      </div></section>
    </main>
  );
}
