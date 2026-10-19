import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, FileText, Globe, MessagesSquare } from "lucide-react";
import { breadcrumbSchema } from "../lib/seo";

// Team photo lives in public/images/ so it is served from revlyn.io.
const teamPhoto = "/images/life-at-revlyn-team.webp";

export const Route = createFileRoute("/life-at-revlyn")({ head: () => ({ meta: [
  { title: "Life at Revlyn | Revlyn" },
  { name: "description", content: "The lighter side of Revlyn: remote-first work, strong opinions about lifecycle stages, and the occasional evening out between projects." },
  { property: "og:title", content: "Life at Revlyn | Revlyn" },
  { property: "og:description", content: "The lighter side of Revlyn: remote-first work, strong opinions about lifecycle stages, and the occasional evening out." },
  { property: "og:url", content: "https://revlyn.io/life-at-revlyn" },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  { property: "og:image", content: "https://revlyn.io/images/life-at-revlyn-team.webp" },
  { name: "twitter:image", content: "https://revlyn.io/images/life-at-revlyn-team.webp" },
  { "script:ld+json": breadcrumbSchema([{ name: "Life at Revlyn", path: "/life-at-revlyn" }]) },
], links: [{ rel: "canonical", href: "https://revlyn.io/life-at-revlyn" }] }), component: LifeAtRevlynPage });

function LifeAtRevlynPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-10 size-80 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/25 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem]">Life at <span className="text-brand">Revlyn.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">Revenue systems are serious work. The people doing that work do not have to be serious all the time. This page is about the second part.</p>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <figure className="relative">
      <div aria-hidden="true" className="absolute -left-4 -top-4 size-full rounded-[3rem] bg-sun/50" />
      <img src={teamPhoto} alt="The Revlyn team together on an evening out" loading="lazy" width={1080} height={1440} className="relative aspect-[3/4] w-full rounded-[3rem] border-2 border-ink/10 object-cover shadow-tactile" />
    </figure>
    <div>
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">The team behind the <span className="text-brand">systems.</span></h2>
      <p className="mt-6 text-lg font-bold leading-relaxed text-ink/60">We are remote-first, so the times we do get together in person are worth marking. This one was an evening out between projects.</p>
      <p className="mt-5 text-lg font-bold leading-relaxed text-ink/60">Most of the year you will find us heads-down in client HubSpot portals, writing process docs, and arguing about whether a lifecycle stage should be a property or a pipeline. This page exists so the work has faces behind it.</p>
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-grape/10 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:col-span-8">Things that happen <span className="text-brand">a lot here.</span></h2>
      <p className="font-bold text-ink/60 lg:col-span-4">No promises, no pitch. Just patterns.</p>
    </div>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {[[MessagesSquare, "bg-sun", "Strong opinions, held politely", "Whether a lifecycle stage should be a property or a pipeline is an internal debate we have never fully settled. We keep the arguments friendly and write the outcome down."],
        [FileText, "bg-mint", "Everything becomes a doc", "Process-first is our job and, somewhere along the way, became our personality. If something happens more than once, it is probably written down by now."],
        [Globe, "bg-grape text-cream", "Timezones are a feature", "Remote-first means the workday shifts around the map. Someone is always starting their morning while someone else is closing their laptop. The work still ships."],
        [Coffee, "bg-brand text-cream", "Small team, senior hands", "The people who scope the work are the people who do the work. It keeps us honest and, frankly, keeps the calendar interesting."]]
        .map(([Icon, tone, title, copy], i) => { const I = Icon as typeof Coffee; return <article key={title as string} className={`rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 ${i % 2 === 1 ? "md:mt-10" : ""}`}><div className={`grid size-16 place-items-center rounded-2xl ${tone}`}><I size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title as string}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy as string}</p></article> })}
    </div>
  </div></section>

  <section className="reveal bg-sun/20 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">That is the whole page.</h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">If you came for the serious version, it is one click away. If you mostly came for the photo, we get it. It was a good evening.</p>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Link to="/how-we-work" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">The serious version <ArrowUpRight size={19} /></Link>
      <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink/10 bg-background px-8 py-4 font-bold text-ink transition-all hover:translate-y-0.5 hover:border-ink/20">See the work <ArrowUpRight size={19} /></Link>
    </div>
  </div></section>
</main> }
