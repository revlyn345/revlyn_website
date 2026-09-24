import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, GraduationCap, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/training")({ head: () => ({ meta: [
  { title: "HubSpot Training and Adoption | Revlyn" },
  { name: "description", content: "Role-based HubSpot training for sales and support teams: hands-on practice in your own portal, plain-language guides, and adoption reviews after go-live." },
  { property: "og:url", content: "https://revlyn.io/hubspot/training" }, { property: "og:title", content: "HubSpot Training and Adoption | Revlyn" },
  { property: "og:description", content: "Role-based walkthroughs, hands-on practice, plain-language guides, and post-launch reviews so your team actually uses HubSpot every day." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot Training and Adoption", path: "/hubspot/training" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Training and Adoption", description: "Role-based HubSpot training for sales and support teams: hands-on practice in your own portal, plain-language guides, and adoption reviews after go-live.", path: "/hubspot/training" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/training" }] }), component: HubSpotTrainingPage });

const sessions = [
  { title: "Role-based walkthroughs", copy: "Your salespeople learn the screens they will touch every day: leads, deals, tasks, calls. Managers learn pipelines, forecasts, and team views. Nobody sits through features they will never use." },
  { title: "Hands-on practice in your portal", copy: "Training happens inside your own HubSpot with your real pipeline, properties, and names, not a demo account full of sample data. People practise on the deals they actually work." },
  { title: "Plain-language quick guides", copy: "One-page notes for each role: how to log a call, how to move a deal, what to fill in and what to leave alone. Written for your setup, kept where the team can find them." },
  { title: "A safe place to make mistakes", copy: "A practice area where the team can click around and get things wrong without touching live deals. Confidence comes faster when a mistake costs nothing." },
  { title: "Go-live floor support", copy: "In the first working days, we are available while the team uses HubSpot on real work, so small confusions get answered in minutes instead of turning into quiet workarounds." },
  { title: "Adoption reviews", copy: "A few weeks in, we look at what is being used and what is being skipped, then fix the causes: a confusing step, a missing habit, a screen that needs simplifying." },
];

const rules = [
  { n: "1", label: "Train roles, not features", tone: "bg-sun", copy: "A field salesperson and a sales head need different things from HubSpot. Every session is built around one role and the twenty minutes of their day that HubSpot touches." },
  { n: "2", label: "Practice before pressure", tone: "bg-mint", copy: "Nobody is asked to use HubSpot live with a customer before they have done it safely in practice. We build the confidence first, then the habit." },
  { n: "3", label: "Your language, your examples", tone: "bg-brand text-cream", copy: "Training uses your product names, your deal stages, and the way your team already talks about a sale. Familiar examples are learned in minutes; generic ones are forgotten by evening." },
  { n: "4", label: "Adoption is measured, not assumed", tone: "bg-grape text-cream", copy: "After go-live we watch real usage: logins, records updated, tasks closed. Where usage dips, we find out why and fix it, rather than telling everyone to try harder." },
];

const honest = [
  ["What makes training stick", "Short sessions per role, practice on real deals, guides people can check later, and a manager who uses HubSpot visibly. The manager's own usage matters more than any session we run."],
  ["What training alone cannot fix", "A process the team does not believe in, or a manager who asks for reports built on data nobody enters. If the process is broken, we say so, because no training can paper over it."],
  ["What we will not do", "One marathon demo for the whole company and a recording you never watch. We would rather do four short role-based sessions than one long one everyone forgets."],
];

const mistakes = [
  { title: "The one big demo", copy: "Two hours, forty features, every department in one room. Everyone leaves impressed and nobody remembers what to do on Monday. We train small, per role, on what that role does daily." },
  { title: "Trained on a demo account", copy: "People learn on sample data, then meet your real portal with its own fields and stages and feel lost all over again. We train in your portal, on your deals, from the start." },
  { title: "Training before the process is settled", copy: "Teaching a pipeline that changes the next week. When the process shifts, the training quietly expires. We settle the process first, then train on what will actually stay." },
  { title: "Assuming adoption", copy: "The project ends at go-live and nobody checks usage for months. By then the team has drifted back to WhatsApp and spreadsheets. We review adoption in the weeks after, when it can still be fixed." },
];

const faqs = [
  { q: "How long does training take?", a: "Sessions are short by design, usually an hour or so per role rather than a full-day event. A typical team needs a handful of sessions across roles, plus support in the first working week. On the first call we size it against your team's shape and schedule." },
  { q: "Our team is not very technical. Will they manage?", a: "Most of the people we train are not technical, and that is who the training is built for. We use your everyday vocabulary, practise on real deals, and keep each role's daily routine small: a few screens and a few habits, done consistently." },
  { q: "Can you train in Hindi or in both languages?", a: "Yes. We train in English, Hindi, or a mix, whichever your team is comfortable with, and the quick guides can match. Tell us what your team speaks and we will plan around it." },
  { q: "What if people stop using HubSpot after a while?", a: "That is what the adoption reviews are for. We look at the usage data, talk to the team, and usually find a fixable cause: an annoying step, an unclear rule, or a manager not leading by example. We fix the cause rather than repeat the training and hope." },
  { q: "Is this included in onboarding or a separate project?", a: "Both. Training runs throughout an onboarding, and teams already on HubSpot often bring us in for training and adoption on its own, especially after a long stretch of low usage. The first call makes the shape clear either way." },
];

function HubSpotTrainingPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-brand/10 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-mint/30 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/20 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>Your team,<br/><span className="text-brand">actually</span> <span className="text-grape">using it.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>Role-based HubSpot training for sales and support teams, on your own deals, in your own words, with adoption checked long after go-live.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Plan the training <ArrowUpRight size={19} /></Link>
        <a href="#sessions" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See what training covers</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">What the training covers.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">A CRM fails when people stop using it. These six things are how a team goes from logins nobody touches to HubSpot being simply how work gets done.</p>
    <div id="sessions" className="mt-12 grid scroll-mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sessions.map((d) => <article key={d.title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-16 place-items-center rounded-2xl bg-mint"><GraduationCap size={26} /></div><h3 className="mt-6 text-2xl font-bold">{d.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{d.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Four rules behind every session.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Training fails in predictable ways. These rules are how your team is still using HubSpot a year from now.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10 lg:left-0 lg:top-6 lg:h-1 lg:w-full" />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {rules.map((r) => <div key={r.n} className="relative pl-16 lg:pl-0 lg:pt-16">
          <span className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full font-bold text-ink ${r.tone}`}>{r.n}</span>
          <h3 className="text-2xl font-bold">{r.label}</h3>
          <p className="mt-3 leading-relaxed text-ink/65">{r.copy}</p>
        </div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-6 rounded-[3rem] bg-ink p-10 text-cream sm:p-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div>
        <GraduationCap className="text-sun" size={36} />
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">An honest word about habits.</h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/70">Training is the easy part. Adoption is the real work, and it depends on things no trainer controls. Here is how we sort it.</p>
      </div>
      <div className="space-y-4">
        {honest.map(([label, copy], i) => <div key={label} className="flex gap-4 rounded-[1.75rem] bg-cream/5 p-6"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="font-bold">{label}</h3><p className="mt-1 leading-relaxed text-cream/65">{copy}</p></div></div>)}
      </div>
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where training goes wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four patterns behind HubSpot subscriptions that quietly become shelfware, and the reason our rules exist.</p>
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
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Make HubSpot a habit.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us about your team, their roles, and the languages they work in. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
