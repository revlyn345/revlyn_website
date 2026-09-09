"use client";

import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";

/* NOTE: two claims below need your sign-off before this page goes live --
   see the two flagged comments inline. */

const systemParts = [
  {
    number: "01",
    title: "Writes it",
    text: "AI drafts a complete, search-optimized article: headline, body, slug, and excerpt.",
  },
  {
    number: "02",
    title: "Designs it",
    // FLAG: not wired into the live pipeline yet -- confirm before publishing.
    text: "Every article gets a matching on-brand header image, generated automatically.",
  },
  {
    number: "03",
    title: "Publishes it",
    text: "Up to three posts a day go live on schedule, right after you approve them.",
  },
];

const process = [
  {
    tag: "Research",
    title: "Plan the calendar",
    text: "Topics are researched and scheduled around themes that matter to your audience, so coverage builds toward something instead of posting at random.",
  },
  {
    tag: "Write",
    title: "Draft & optimize",
    text: "Headline, body, slug, and excerpt are structured for search, then passed through a language pass so the copy reads like a person wrote it.",
  },
  {
    tag: "Design",
    title: "Design the visual",
    text: "A header image is generated from a template built on your brand's colors and style, not a generic stock photo.",
  },
  {
    tag: "Approve",
    title: "Review & go live",
    text: "The finished post waits in your CMS. The agent does the work, your team keeps the judgment and gives the final sign-off.",
  },
];

const outcomes = [
  ["A content team you don't have to hire", "Consistent daily publishing without adding writers, designers, or an editorial calendar to manage."],
  ["On-brand visuals, every time", "Each article's image matches your palette and style automatically, with no design queue or stock-photo hunting."],
  ["Human-in-the-loop, by design", "Every draft waits for approval before it's public. You control quality and tone without doing the writing."],
  // FLAG: not true yet -- reword or remove before publishing.
  ["Built for more than one site", "The agent runs independently for each client, on their own schedule."],
  ["Search & AI-visibility aware", "Posts are structured for traditional search and the newer wave of AI answer engines."],
];

const distinctions = [
  ["Not a writing tool you operate", "No blank page. It researches, writes, and formats the entire article for you."],
  ["Not stock photos", "Every image is generated around your brand's own colors and style, not a generic picture that could belong to anyone."],
  ["Not unsupervised AI", "Nothing goes on your website without a person reading it and giving the final approval."],
];

export default function AutoSEOAgentClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <Capabilities />
      <Process />
      <Outcomes />
      <Distinctions />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-gradient-to-b from-[#fff4ee] to-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-fire mb-8">
          <span className="inline-block h-px w-8 bg-fire/50" />
          Auto SEO Agent
        </div>

        <h1 className="display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.9] tracking-[-0.04em] max-w-[1100px]">
          Your website
          <br />
          <span className="text-fire">publishes itself.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-[1.4fr_0.6fr] gap-10 border-t-2 border-ink/10 pt-8 items-start">
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-ink/70">
            Auto SEO Agent researches, writes, and posts search-optimized
            articles every day, on your brand, in your voice.
          </p>
          <div className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 bg-fire" />
            <p className="text-sm font-semibold leading-relaxed">
              Nothing goes live without your team's final approval.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Research", "Write", "Design", "Approve"].map((label, i) => (
            <div key={label} className="border-2 border-ink/10 rounded-xl p-4">
              <div className="mono text-[10px] text-fire">0{i + 1}</div>
              <div className="font-semibold mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-fire text-paper px-7 py-4 text-lg font-semibold hover:bg-orange-600 transition-colors">
            Book a call
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">What it does</div>
        <h2 className="display text-3xl md:text-5xl tracking-[-0.03em] mb-14">
          Three operations. One system.
        </h2>
        <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink/10 border-t-2 border-b-2 border-ink/10">
          {systemParts.map((item) => (
            <article key={item.number} className="py-9 md:px-8 md:first:pl-0 md:last:pr-0 group">
              <div className="flex items-center justify-between mb-16">
                <span className="mono text-xs text-fire">{item.number}</span>
                <span className="text-ink/20 group-hover:text-fire group-hover:translate-x-1 transition-all">→</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-ink/65 leading-relaxed max-w-sm">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6 mb-14 items-end">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-paper/60">How a post gets made</p>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
            A repeatable publishing engine, <span className="text-fire">not a prompt.</span>
          </h2>
        </div>
        <ol className="border-t border-paper/15">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-4 border-b border-paper/15 py-8 md:grid-cols-[70px_1fr_1.35fr_auto] md:items-start md:gap-8"
            >
              <span className="mono text-xs text-fire">0{i + 1}</span>
              <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
              <p className="max-w-2xl leading-relaxed text-paper/70">{step.text}</p>
              <span className="w-fit border border-paper/20 px-3 py-1 mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
                {step.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">What you get</div>
        <h2 className="display text-3xl md:text-5xl tracking-[-0.03em] mb-14">
          The output of a team. The control stays yours.
        </h2>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <p className="text-2xl md:text-4xl font-semibold leading-tight max-w-xl">
            Daily publishing, without building another department.
          </p>
          <div className="divide-y-2 divide-ink/10 border-y-2 border-ink/10">
            {outcomes.map(([title, text], i) => (
              <article key={title} className="grid sm:grid-cols-[40px_1fr_1.2fr] gap-3 sm:gap-6 py-7">
                <span className="mono text-xs text-fire">0{i + 1}</span>
                <h3 className="font-semibold leading-snug">{title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Distinctions() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-5 mb-12 items-end">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-fire">What this actually is</p>
          <h2 className="display text-4xl md:text-6xl leading-[0.95]">
            The agent works.
            <br />
            You decide.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink/10 border-y-2 border-ink/10">
          {distinctions.map(([title, text], i) => (
            <article key={title} className="py-7 md:px-7 md:first:pl-0 md:last:pr-0">
              <div className="mb-8 flex h-9 w-9 items-center justify-center bg-fire text-paper rounded-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.14em] text-ink/45 mb-3">Not 0{i + 1}</p>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="leading-relaxed text-ink/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b-2 border-ink bg-fire text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] mb-8">Revlyn / Auto SEO Agent</p>
            <h2 className="display text-4xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
              Put your content engine to work.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="mb-7 max-w-sm text-lg leading-relaxed">
              A content team's worth of daily writing and publishing, running quietly in the background.
            </p>
            <BookCallButton className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-paper hover:text-ink transition-colors">
              Book a call
              <span>→</span>
            </BookCallButton>
          </div>
        </div>
      </div>
    </section>
  );
}