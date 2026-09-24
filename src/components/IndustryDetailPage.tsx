import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "brand" | "mint" | "sun" | "grape";

export type IndustryPageContent = {
  name: string;
  hero: ReactNode;
  intro: string;
  audienceIntro: string;
  audiences: { title: string; copy: string }[];
  journeyTitle: ReactNode;
  journeyIntro: string;
  stages: { name: string; copy: string; rule: string }[];
  principles: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  deliverables: string[];
  honest: { title: string; copy: string }[];
  mistakes: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaCopy: string;
  accent: Tone;
};

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand text-cream",
  mint: "bg-mint text-ink",
  sun: "bg-sun text-ink",
  grape: "bg-grape text-cream",
};

const paleClasses: Record<Tone, string> = {
  brand: "bg-brand/15",
  mint: "bg-mint/20",
  sun: "bg-sun/20",
  grape: "bg-grape/10",
};

const cardTones = ["bg-sun", "bg-mint", "bg-brand text-cream", "bg-grape text-cream"];

function cardTone(index: number) {
  return cardTones[index % cardTones.length] ?? "bg-sun";
}

function SectionHead({ title, copy }: { title: ReactNode; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
    <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8 lg:text-7xl">{title}</h2>
    <p className="pb-2 text-lg font-bold leading-relaxed opacity-60 lg:col-span-4">{copy}</p>
  </div>;
}

export function IndustryDetailPage({ content }: { content: IndustryPageContent }) {
  const accentClass = toneClasses[content.accent];
  const paleClass = paleClasses[content.accent];

  return <main id="top">
    <section className={`reveal relative mx-auto max-w-[92rem] overflow-hidden rounded-b-[3.5rem] border-b-2 border-ink px-5 py-20 lg:rounded-b-[6rem] ${paleClass}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/5" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem] animate-rise-in">{content.hero}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.15s" }}>{content.intro}</p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 animate-rise-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-8 py-5 text-lg font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Discuss your process <ArrowUpRight size={19} /></Link>
          <a href="#for" className="w-full rounded-2xl border-2 border-ink bg-background px-8 py-5 text-center text-lg font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:bg-mint hover:shadow-tactile-ink-sm">See who it is for</a>
        </div>
      </div>
    </section>

    <section id="for" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={<>Who this page<br/>is <span className="text-brand">for</span>.</>} copy={content.audienceIntro} />
      <div className="mt-16 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
        {content.audiences.map((item, index) => {
          const tone = cardTone(index);
          const dark = tone.includes("text-cream");
          return <article key={item.title} className={`flex min-h-80 flex-col justify-between gap-10 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[25rem] ${tone} ${index % 2 ? "lg:mt-10" : ""}`}>
            <h3 className="text-3xl font-bold leading-tight">{item.title}</h3>
            <p className={`font-bold leading-relaxed ${dark ? "text-cream/80" : "text-ink/65"}`}>{item.copy}</p>
          </article>;
        })}
      </div>
    </div></section>

    <section className={`reveal border-y-2 border-ink/10 py-20 sm:py-28 ${paleClass}`}><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={content.journeyTitle} copy={content.journeyIntro} />
      <div className="mt-16 space-y-6">
        {content.stages.map((stage, index) => <article key={stage.name} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink ${index % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
          <span className={`grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-ink font-display text-xl font-bold ${index === content.stages.length - 1 ? accentClass : "bg-cream"}`}>{String(index + 1).padStart(2, "0")}</span>
          <div><h3 className="text-2xl font-bold">{stage.name}</h3><p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{stage.copy}</p><p className="mt-3 text-sm font-bold text-ink/80">The rule: <span className="font-normal text-ink/65">{stage.rule}</span></p></div>
        </article>)}
      </div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={<>What the system<br/>must <span className="text-brand">protect</span>.</>} copy={`Four practical principles for a ${content.name.toLowerCase()} system people can use without working around it.`} />
      <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.principles.map((item, index) => <article key={item.title} className={`flex min-h-72 flex-col justify-between gap-8 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink transition-transform duration-300 hover:-translate-y-1.5 ${cardTone(index)} ${index % 2 ? "lg:mt-10" : ""}`}>
          <span className="font-display text-5xl font-bold opacity-25">{String(index + 1).padStart(2, "0")}</span>
          <div><h3 className="text-2xl font-bold">{item.title}</h3><p className={`mt-3 text-sm font-bold leading-relaxed ${cardTone(index).includes("text-cream") ? "text-cream/80" : "text-ink/70"}`}>{item.copy}</p></div>
        </article>)}
      </div>
    </div></section>

    <section className="reveal border-y-2 border-ink/10 bg-cream/60 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={<>How the setup<br/>gets <span className="text-brand">done</span>.</>} copy="The process starts with real work and real handoffs. Software comes after the decisions." />
      <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => <article key={step.title} className={`flex min-h-72 flex-col justify-between gap-8 rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink ${index % 2 ? "lg:mt-10" : ""}`}>
          <span className="font-display text-5xl font-bold text-brand/30">{String(index + 1).padStart(2, "0")}</span>
          <div><h3 className="text-2xl font-bold">{step.title}</h3><p className="mt-3 text-sm font-bold leading-relaxed text-ink/70">{step.copy}</p></div>
        </article>)}
      </div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <div className="grid gap-10 rounded-[3rem] border-2 border-ink bg-background p-10 shadow-tactile-ink sm:p-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div><h2 className="font-display text-4xl font-bold sm:text-5xl">What you receive.</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">A working system, written definitions, and a handover your team can run. Nothing important stays in our heads.</p><Link to="/contact" className={`mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-ink px-7 py-4 font-bold shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm ${accentClass}`}>Discuss your process <ArrowUpRight size={18} /></Link></div>
        <div className="space-y-4">{content.deliverables.map((item, index) => <div key={item} className="flex items-start gap-4 rounded-[1.75rem] border-2 border-ink/10 bg-cream/60 p-6"><span className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink ${cardTone(index)}`}><Check size={17} strokeWidth={3} /></span><p className="leading-relaxed text-ink/80">{item}</p></div>)}</div>
      </div>
    </div></section>

    <section className="reveal border-y-2 border-ink/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <div className="rounded-[3.5rem] bg-ink p-10 text-cream sm:p-14 lg:p-20">
        <SectionHead title={<>An honest word about <span className="text-brand">{content.name.toLowerCase()}</span>.</>} copy="What the system can make visible, and what still depends on people doing the work." />
        <div className="mt-14 grid gap-10 border-t-2 border-cream/15 pt-12 md:grid-cols-3 lg:gap-12">{content.honest.map((item, index) => <article key={item.title}><span className={`block h-3 w-12 rounded-full ${index === 0 ? "bg-sun" : index === 1 ? "bg-mint" : "bg-brand"}`} /><h3 className="mt-6 text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-cream/70">{item.copy}</p></article>)}</div>
      </div>
    </div></section>

    <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={<>Where the process<br/>goes <span className="text-brand">wrong</span>.</>} copy="Four common patterns that create blind spots, duplicated work, and missed follow-up." />
      <div className="mt-16 grid gap-8 sm:grid-cols-2">{content.mistakes.map((item, index) => <article key={item.title} className={`rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink ${index % 2 ? "sm:rotate-1" : "sm:-rotate-1"}`}><span className="grid size-12 place-items-center rounded-full bg-brand/15 text-brand"><X size={22} strokeWidth={3} /></span><h3 className="mt-5 text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{item.copy}</p></article>)}</div>
    </div></section>

    <section className={`reveal border-y-2 border-ink/10 py-20 sm:py-28 ${paleClass}`}><div className="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead title={<>Common <span className="text-brand">questions</span>.</>} copy={`Straight answers to the questions ${content.name.toLowerCase()} teams ask before changing their CRM.`} />
      <div className="mt-16 grid items-start gap-8 md:grid-cols-2">{content.faqs.map((item, index) => <article key={item.question} className="rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink"><h3 className="flex items-start gap-3 text-2xl font-bold leading-snug"><span className={`shrink-0 rounded-xl border-2 border-ink px-2.5 py-0.5 font-display text-lg font-bold ${cardTone(index)}`}>Q</span>{item.question}</h3><p className="mt-5 border-l-4 border-brand pl-5 font-bold leading-relaxed text-ink/70">{item.answer}</p></article>)}</div>
    </div></section>

    <section className="reveal mx-auto max-w-6xl px-5 py-24 sm:px-6"><div className="rounded-[3rem] border-2 border-ink bg-ink p-10 text-center text-cream shadow-tactile-ink sm:p-16"><h2 className="font-display text-4xl font-bold sm:text-6xl">{content.ctaTitle}</h2><p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">{content.ctaCopy}</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link><Link to="/industries" className="rounded-2xl border-2 border-cream/40 px-8 py-4 font-bold text-cream hover:border-cream">All industries</Link></div></div></section>
  </main>;
}