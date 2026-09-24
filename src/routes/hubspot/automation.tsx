import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, serviceSchema, faqSchema } from "../../lib/seo";
import { ArrowUpRight, Bell, ClipboardList, Mail, Waypoints, Users, Workflow, X } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/hubspot/automation")({ head: () => ({ meta: [
  { title: "HubSpot Automation and Workflows | Revlyn" },
  { name: "description", content: "HubSpot automation built for growing revenue teams: lead routing, follow-up sequences, task creation, and handoffs, each with a clear trigger, owner, and exception path." },
  { property: "og:url", content: "https://revlyn.io/hubspot/automation" }, { property: "og:title", content: "HubSpot Automation and Workflows | Revlyn" },
  { property: "og:description", content: "Lead routing, follow-ups, tasks, and handoffs in HubSpot, built with a clear purpose, trigger, owner, and exception path." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "HubSpot", path: "/hubspot" }, { name: "HubSpot Automation and Workflows", path: "/hubspot/automation" }]) },
    { "script:ld+json": serviceSchema({ name: "HubSpot Automation and Workflows", description: "HubSpot automation built for growing revenue teams: lead routing, follow-up sequences, task creation, and handoffs, each with a clear trigger, owner, and exception path.", path: "/hubspot/automation" }) },
    { "script:ld+json": faqSchema(faqs) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/hubspot/automation" }] }), component: HubSpotAutomationPage });

const automated = [
  { icon: Waypoints, title: "Lead routing", copy: "Every new lead lands with the right person in minutes, not hours. Routing by territory, source, product interest, or deal size, with a fallback owner so nothing waits unassigned." },
  { icon: Mail, title: "Follow-up sequences", copy: "Timed email sequences and reminders for the follow-ups your team repeats by hand today: first response, second touch, no-reply nudges, and re-engagement of old leads." },
  { icon: ClipboardList, title: "Tasks and reminders", copy: "Workflows that create the right task at the right moment: call a new lead today, send a quote after the meeting, chase approval before month end. Nothing depends on memory." },
  { icon: Users, title: "Handoffs and alerts", copy: "When a deal changes stage, the right people know. Sales notifies delivery, managers see stalled deals, and no one finds out from a customer first." },
  { icon: Bell, title: "Stage-change actions", copy: "Moving a deal forward can trigger the next step automatically: an email, a task, a property update, or an internal alert, so process happens even on a busy day." },
  { icon: Workflow, title: "Data hygiene", copy: "Small routines that keep the CRM clean: standardising phone numbers, filling missing fields, closing stale deals, and flagging records that need attention." },
];

const anatomy = [
  { n: "1", label: "Purpose", tone: "bg-sun", copy: "What problem does this workflow solve? If we cannot say it in one sentence, we do not build it." },
  { n: "2", label: "Trigger", tone: "bg-mint", copy: "What exactly starts it: a form fill, a stage change, a date, a missing field? Precise triggers prevent surprises." },
  { n: "3", label: "Owner", tone: "bg-brand text-cream", copy: "Who is accountable for what it does and who gets notified. Every automation has a name against it." },
  { n: "4", label: "Exception path", tone: "bg-grape text-cream", copy: "What happens when the rule does not fit: the wrong territory, an existing customer, a deal with no amount. The edge cases are designed, not left to luck." },
];

const mistakes = [
  { title: "Automating a broken process", copy: "If follow-ups are unclear when a person does them, a workflow will not fix it. It will only make the confusion faster. We fix the process first, then automate it." },
  { title: "Turning everything on at once", copy: "Thirty workflows switched on in one week means nobody knows what is sending what. We start with a few high-value workflows, watch them, then add more." },
  { title: "Automations nobody owns", copy: "When a workflow misfires weeks later and no one knows who built it or what it was for, teams switch it off and lose trust. Every workflow we build is documented and owned." },
  { title: "Robotic customer communication", copy: "Generic sequences that sound nothing like your team. Your customers should feel followed up, not processed. We write workflows in your voice, with real human tasks where they matter." },
];

const faqs = [
  { q: "We are a small team. Is automation worth it for us?", a: "Often more than for large teams. In a five-person company, follow-ups live in one person's head and memory. Automating routing, first response, and reminders means the CRM carries the load instead of the founder." },
  { q: "Will automation make our communication feel impersonal?", a: "Not if it is built well. Good automation handles the repetitive parts, like routing and reminders, and leaves the actual conversation to your team. We design each workflow with a human check where it matters." },
  { q: "Can you automate WhatsApp and the other tools we use?", a: "Where a tool has an official integration with HubSpot, yes, and we set it up properly. We will tell you honestly what connects well today and what needs a workaround, rather than promising a fragile hack." },
  { q: "How do you decide what to automate first?", a: "We map where time is lost today: leads waiting unassigned, follow-ups forgotten, handoffs missed. The first workflows target those, because that is where automation pays back fastest." },
  { q: "What if a workflow does something wrong after go-live?", a: "Every workflow ships with an exception path and an owner, and we monitor the first weeks closely. If something misfires, we adjust the rule. Nothing is set and forgotten." },
];

function HubSpotAutomationPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-brand/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-grape/15 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-mint/25 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <HubSpotBadge className="animate-rise-in" />
      <h1 className="mt-7 font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in" style={{ animationDelay: "0.12s" }}>You sell.<br/><span className="text-brand">HubSpot</span> <span className="text-grape">remembers.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>Routing, follow-ups, tasks, and handoffs, automated in HubSpot around how your revenue team actually works. Each workflow with a clear purpose, trigger, owner, and exception path.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Discuss automation <ArrowUpRight size={19} /></Link>
        <a href="#workflows" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See what we automate</a>
      </div>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">The work your team repeats by hand.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Most sales teams lose hours every week to work that never needed a human: chasing, assigning, reminding, updating. These are the routines we move into HubSpot.</p>
    <div id="workflows" className="mt-12 grid scroll-mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {automated.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-[2.5rem] bg-background p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5"><div className="grid size-16 place-items-center rounded-2xl bg-sun"><Icon size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Every workflow has four parts.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">This is how we keep automation predictable. If a workflow cannot answer all four, it is not ready to go live.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10 lg:left-0 lg:top-6 lg:h-1 lg:w-full" />
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
        {anatomy.map((p) => <div key={p.n} className="relative pl-16 lg:pl-0 lg:pt-16">
          <span className={`absolute left-0 top-0 grid size-12 place-items-center rounded-full font-bold text-ink lg:left-0 ${p.tone}`}>{p.n}</span>
          <h3 className="text-2xl font-bold">{p.label}</h3>
          <p className="mt-3 leading-relaxed text-ink/65">{p.copy}</p>
        </div>)}
      </div>
    </div>
    <div className="mt-14 grid gap-6 rounded-[2.5rem] bg-background p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <h3 className="font-display text-3xl font-bold">An example, start to finish.</h3>
      <div className="space-y-4 text-ink/70">
        <p><span className="font-bold text-ink">Purpose:</span> no lead waits more than an hour for a first response.</p>
        <p><span className="font-bold text-ink">Trigger:</span> a new contact arrives from the website form.</p>
        <p><span className="font-bold text-ink">Owner:</span> the sales lead owns the rule; the assigned rep owns the call.</p>
        <p><span className="font-bold text-ink">Exception path:</span> if the lead is an existing customer, it goes to their account manager instead, and the rep sees a note explaining why.</p>
      </div>
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Where automation goes wrong.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The four patterns we see most often in HubSpot portals, and the reason we build the way we do.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {mistakes.map((m) => <article key={m.title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1"><div className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand"><X size={22} strokeWidth={3} /></div><h3 className="mt-5 text-2xl font-bold">{m.title}</h3><p className="mt-3 leading-relaxed text-ink/65">{m.copy}</p></article>)}
    </div>
  </div></section>

  <section className="reveal border-t-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">What the journey feels like.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The shape of an automation project is consistent, even though every team is different.</p>
    <div className="relative mt-14">
      <div aria-hidden="true" className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/10" />
      <div className="space-y-8">
        {[
          { tag: "First call", tone: "bg-sun", title: "Where do the hours go?", copy: "We ask how leads arrive today, who follows up, what gets forgotten, and what your team redoes by hand every week. You leave knowing which routines are worth automating first, in plain language." },
          { tag: "Week one", tone: "bg-mint", title: "The rules, written down", copy: "Before anything is built, each proposed workflow gets one line in a document: its purpose, trigger, owner, and exception path. You review and approve the list. Nothing runs without your sign-off." },
          { tag: "Build weeks", tone: "bg-brand text-cream", title: "A few workflows, watched closely", copy: "The highest-value workflows go live first, one at a time. We watch the first sends and assignments together, fix surprises fast, and only then move to the next." },
          { tag: "Steady state", tone: "bg-grape text-cream", title: "Your team takes the wheel", copy: "Your team learns to read, pause, and edit each workflow, with written notes on what every one does. Automation stays useful after we step back, not dependent on us." },
        ].map((s) => <div key={s.tag} className="relative pl-16 sm:pl-20">
          <span className={`absolute left-0 top-1 grid h-12 min-w-12 place-items-center rounded-full px-3 text-sm font-bold text-ink ${s.tone}`}>{s.tag}</span>
          <div className="rounded-[2rem] bg-background p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-8">
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/65">{s.copy}</p>
          </div>
        </div>)}
      </div>
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
    <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Put the repetition down.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us which routines eat your team's week. The first conversation is free and genuinely useful, whether or not we work together.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
