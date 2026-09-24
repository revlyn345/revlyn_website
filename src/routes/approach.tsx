import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../lib/seo";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Compass,
  Scissors,
  Users2,
} from "lucide-react";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach | Revlyn" },
      {
        name: "description",
        content:
          "How Revlyn works: understand your sales reality, simplify the process, connect your tools, and improve adoption. A practical path to a CRM people actually use.",
      },
      { property: "og:title", content: "Our Approach | Revlyn" },
      {
        property: "og:description",
        content:
          "Understand, simplify, connect, and improve. See how we build CRM systems around the way distributed revenue teams actually work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/approach" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Our Approach", path: "/approach" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/approach" }],
  }),
  component: ApproachPage,
});

const steps = [
  {
    number: "01",
    title: "Understand",
    tone: "bg-mint",
    intro: "We start with your sales reality, not a software feature list.",
    copy: "Before touching any tool, we map how leads actually arrive, move, stall, and convert in your business today. We sit with the people who do the work, not just the people who report on it.",
    points: [
      "How leads come in and where they wait",
      "Who owns which customer at each stage",
      "Where follow-ups depend on memory",
      "What your reports try, and fail, to tell you",
    ],
  },
  {
    number: "02",
    title: "Simplify",
    tone: "bg-sun",
    intro: "A clear process before any configuration.",
    copy: "We define clean stages, ownership, fields, and rules, the smallest structure your team will actually follow. Steps nobody uses get removed, not automated.",
    points: [
      "Stages that match how you really sell",
      "One clear owner for every lead",
      "Only the fields someone will fill",
      "Rules for handoffs between teams",
    ],
  },
  {
    number: "03",
    title: "Connect",
    tone: "bg-grape text-cream",
    intro: "Your tools, data, and teams in one flow.",
    copy: "We bring your existing tools, customer data, and conversations into one connected system, so information moves without copy-paste and every team sees the same customer.",
    points: [
      "Your current tools connected, not replaced blindly",
      "Customer data cleaned and organised",
      "Follow-ups, reminders, and routing automated",
      "One dependable view for every team",
    ],
  },
  {
    number: "04",
    title: "Improve",
    tone: "bg-brand text-cream",
    intro: "A CRM that gets better the more you use it.",
    copy: "Setup is the beginning, not the end. We measure adoption, refine dashboards, and evolve the setup as your team and pipeline grow.",
    points: [
      "Adoption checked, not assumed",
      "Dashboards refined around real questions",
      "Documentation your team can revisit",
      "Adjustments as your process changes",
    ],
  },
];

const principles = [
  {
    icon: Compass,
    tone: "bg-sun",
    title: "Practical over complicated",
    copy: "If your team won't use it daily, it isn't a solution. We choose the simplest system that solves the real problem.",
  },
  {
    icon: Scissors,
    tone: "bg-mint",
    title: "Process before platform",
    copy: "The tool is only as good as the process behind it. We fix the way work flows before configuring any software.",
  },
  {
    icon: Users2,
    tone: "bg-grape text-cream",
    title: "Built around your team",
    copy: "Your people make the system work. We design around their habits, languages, and capacity, not around an idealised workflow.",
  },
];

const expectations = [
  "Plain-language recommendations, no jargon",
  "Honest answers about what CRM can and cannot fix",
  "Your team involved at every step, not surprised at handover",
  "Documentation your team can return to after we step back",
];

function ApproachPage() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="reveal relative isolate mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/20 px-5 pb-20 pt-10 text-center sm:px-6 lg:min-h-[520px] lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute -left-[18%] -top-[38%] h-[72%] w-[58%] rotate-12 rounded-[40%] bg-brand/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-[16%] -top-[28%] h-[70%] w-[55%] -rotate-12 rounded-[42%] bg-grape/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-[42%] left-[12%] h-[70%] w-[76%] rounded-[48%] bg-mint/30 blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
          <h1 className="w-full max-w-6xl font-display text-[2.05rem] font-bold leading-[0.96] min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
            <span className="block">A practical path to a</span>
            <span className="block">
              CRM people <span className="text-brand">actually</span> <span className="text-grape">use.</span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">
            Four steps that turn a CRM from another tool to update into the way your team works: understand, simplify, connect, and improve.
          </p>
          <a href="#steps" aria-label="Continue to our four steps" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-ink/55 transition-colors hover:text-brand">
            See the four steps <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* The four steps, expanded */}
      <section id="steps" className="reveal scroll-mt-8 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">One step at a time, in order.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              Each step builds on the last. Skipping ahead is how CRM projects end up unused.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-8 rounded-[2.5rem] border-2 border-ink/5 bg-background p-7 shadow-sm sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-12"
              >
                <div className={`${step.tone} grid size-24 shrink-0 place-items-center rounded-[1.75rem] border-4 border-cream font-display text-2xl font-bold shadow-lg`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{step.title}</h3>
                  <p className="mt-2 font-bold text-ink/80">{step.intro}</p>
                  <p className="mt-4 leading-relaxed text-ink/65">{step.copy}</p>
                </div>
                <ul className="grid content-start gap-3 rounded-[1.75rem] bg-cream p-5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-semibold">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint">
                        <Check size={14} aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="reveal relative overflow-hidden border-y-2 border-ink/10 bg-background py-20 sm:py-28">
        <div aria-hidden="true" className="absolute -right-24 top-20 size-80 rounded-full bg-sun/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Three principles behind every decision.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, tone, title, copy }) => (
              <article
                key={title}
                className="group min-h-64 rounded-[2.5rem] border-2 border-ink/5 bg-cream p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`grid size-16 place-items-center rounded-2xl border border-ink/5 bg-background transition-colors duration-300 ${tone.includes("text-cream") ? tone : "group-hover:bg-sun/40"}`}>
                  <Icon size={26} aria-hidden="true" className={tone.includes("text-cream") ? "text-cream" : ""} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you can expect */}
      <section className="reveal relative overflow-hidden rounded-[3.5rem] bg-mint py-20 sm:rounded-[6rem] sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/10" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              What you can <span className="text-cream">expect.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink/65">
              The same expectations whether we're fixing one workflow or building your first CRM.
            </p>
          </div>
          <div className="grid content-start gap-4">
            {expectations.map((item, index) => (
              <div key={item} className="flex items-center gap-5 rounded-[2rem] border-2 border-ink/10 bg-cream/35 p-6 shadow-sm">
                <span className="font-display text-4xl font-bold text-ink/25">0{index + 1}</span>
                <p className="text-lg font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal mx-auto max-w-6xl px-5 py-24 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-14 text-center text-cream sm:rounded-[3rem] sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-12 size-52 rounded-full bg-brand/40 blur-2xl" />
          <div aria-hidden="true" className="absolute -right-10 -top-16 size-44 rounded-full bg-mint/30 blur-2xl" />
          <h2 className="relative mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">Let's make CRM useful.</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-lg text-cream/70">
            Tell us what feels messy today. We'll map a clearer CRM path for your team.
          </p>
          <a
            href="mailto:info@revlyn.io?subject=CRM consultation"
            className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-9 py-4 text-lg font-bold text-ink shadow-[0_8px_0_0_var(--ink)] transition-all hover:translate-y-1 hover:shadow-[0_4px_0_0_var(--ink)]"
          >
            Email Revlyn <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <div className="relative mt-6">
            <Link to="/" className="text-sm font-bold text-cream/60 transition-colors hover:text-sun">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
