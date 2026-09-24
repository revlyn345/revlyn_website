import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../lib/seo";
import { ArrowUpRight, Check, PhoneCall, Search, FileText, Scale, ShieldCheck, X } from "lucide-react";

export const Route = createFileRoute("/how-we-work")({ head: () => ({ meta: [
  { title: "How We Work | Revlyn" },
  { name: "description", content: "What a first conversation with Revlyn covers, how scoping and pricing work, and what we promise and will never promise." },
  { property: "og:url", content: "https://revlyn.io/how-we-work" }, { property: "og:title", content: "How We Work | Revlyn" },
  { property: "og:description", content: "A transparent look at working with Revlyn: first call, scoping, pricing, and honest commitments." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "How We Work", path: "/how-we-work" }]) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/how-we-work" }] }), component: HowWeWorkPage });

function HowWeWorkPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[58vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-grape/10 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-10 size-80 rounded-full bg-mint/35 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-sun/40 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem]">No surprises.<br/><span className="text-brand">That is the</span> <span className="text-grape">point.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">Trust starts before any project does. Here is exactly what working with Revlyn looks like, from the first email to a finished system.</p>
    </div>
  </section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">The first conversation.</h2>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">A first call is free and genuinely useful, whether or not we ever work together. It usually covers three things.</p>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[[PhoneCall, "bg-sun", "Your situation", "How your sales and customer work actually runs today: tools, spreadsheets, follow-ups, and where things fall through."],
        [Search, "bg-mint", "The real problem", "We look past the CRM question to the business issue underneath it. Sometimes the answer is not new software."],
        [FileText, "bg-brand text-cream", "A clear next step", "You leave with a honest recommendation: do nothing yet, fix something specific, or explore a proper implementation."]]
        .map(([Icon, tone, title, copy]) => { const I = Icon as typeof PhoneCall; return <article key={title as string} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5"><div className={`grid size-16 place-items-center rounded-2xl ${tone}`}><I size={26} /></div><h3 className="mt-6 text-2xl font-bold">{title as string}</h3><p className="mt-3 leading-relaxed text-ink/65">{copy as string}</p></article> })}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
    <div>
      <h2 className="font-display text-4xl font-bold sm:text-6xl">How scoping and pricing work.</h2>
      <p className="mt-6 text-lg leading-relaxed text-ink/65">Before any price is discussed, we agree on scope in writing: what will be built, what your team does, what we do, and what is explicitly out of scope.</p>
      <p className="mt-5 text-lg leading-relaxed text-ink/65">Pricing then follows the scope, not the other way around. You see what each part costs and why, so you can cut or phase work with full information.</p>
    </div>
    <div className="grid gap-4">
      {[["Scope first", "A written breakdown of deliverables, responsibilities, and exclusions before any commitment."],
        ["Phased when sensible", "Larger work is split into stages, so you can stop or adjust after each phase without sunk cost."],
        ["No lock-in", "Your data, configuration, and documentation stay yours. You are never dependent on us to run your own CRM."]]
        .map(([title, copy], i) => <div key={title} className="flex gap-5 rounded-[2rem] bg-background p-6 shadow-sm"><span className={`grid size-10 shrink-0 place-items-center rounded-full font-bold text-ink ${i === 0 ? "bg-sun" : i === 1 ? "bg-mint" : "bg-brand text-cream"}`}>{`0${i + 1}`}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-ink/65">{copy}</p></div></div>)}
    </div>
  </div></section>

  <section className="reveal py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">What we promise. And what we will not.</h2>
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10">
        <ShieldCheck className="text-mint" size={34} />
        <h3 className="mt-6 font-display text-3xl font-bold">We will always</h3>
        <ul className="mt-6 space-y-4">
          {["Tell you when a simpler or cheaper option fits better, even if it means less work for us.", "Put scope, deliverables, and price in writing before work begins.", "Design around how your team actually works, not a generic template.", "Document the system so your team is not dependent on us.", "Say when we do not know something, and find out."] 
            .map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-ink"><Check size={14} strokeWidth={3} /></span><span className="leading-relaxed text-cream/75">{item}</span></li>)}
        </ul>
      </div>
      <div className="rounded-[3rem] border-2 border-ink/10 bg-background p-8 sm:p-10">
        <Scale className="text-brand" size={34} />
        <h3 className="mt-6 font-display text-3xl font-bold">We will never</h3>
        <ul className="mt-6 space-y-4">
          {["Guarantee revenue numbers or adoption rates we cannot control.", "Recommend a platform because of a partnership or commission.", "Start billing before scope is agreed in writing.", "Disappear after go-live and leave adoption to chance.", "Claim experience, clients, or results we do not have."]
            .map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand"><X size={14} strokeWidth={3} /></span><span className="leading-relaxed text-ink/70">{item}</span></li>)}
        </ul>
      </div>
    </div>
  </div></section>

  <section className="reveal bg-sun/20 py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Senior attention, start to finish.</h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">The people who scope your project are the people who build it. You get direct founder attention, no handoffs to junior teams, and care on every engagement.</p>
    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">We would also rather earn your trust through a small, well-scoped first step than ask for it upfront.</p>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24"><div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Sound fair?</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Start with a conversation. It costs nothing and commits you to nothing.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Start a conversation <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
