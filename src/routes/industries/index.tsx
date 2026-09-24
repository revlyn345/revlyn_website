import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/industries/")({ head: () => ({ meta: [
  { title: "CRM by Industry for Growing Businesses | Revlyn" },
  { name: "description", content: "CRM set up for how your industry actually sells: B2B SaaS, consulting, D2C and e-commerce, and field services. Each page written for that business, not a generic pitch." },
  { property: "og:url", content: "https://revlyn.io/industries" }, { property: "og:title", content: "CRM by Industry for Growing Businesses | Revlyn" },
  { property: "og:description", content: "CRM set up for how your industry actually sells, written for each business, not a generic pitch." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:image", content: "https://revlyn.io/og-image.png" }, { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    { "script:ld+json": breadcrumbSchema([{ name: "CRM by Industry for Growing Businesses", path: "/industries" }]) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/industries" }] }), component: IndustriesPage });

const industries = [
  { id: "b2b-saas", title: "B2B SaaS", tone: "bg-sun", href: "/industries/b2b-saas", copy: "Founder-led sales breaking at scale, trial pipelines nobody can forecast, and renewals run from a spreadsheet. The CRM is set up for demo-to-renewal selling, with the account record continuing past closed-won." },
  { id: "consulting", title: "Consulting", tone: "bg-mint", href: "/industries/consulting", copy: "Deals won on relationships and trust, tracked nowhere. A pipeline built for proposals, engagements, and the repeat work that keeps a practice alive, so the next project starts from the last one's history." },
  { id: "d2c", title: "D2C and e-commerce", tone: "bg-brand text-cream", href: "/industries/d2c-ecommerce", copy: "WhatsApp enquiries, marketplace orders, and repeat buyers across channels. One customer record that carries the full history, so the second sale is sold, not hoped for." },
  { id: "field-services", title: "Field services", tone: "bg-grape text-cream", href: "/industries/field-services", copy: "Site visits, technicians on the road, and service calls that decide the next contract. Jobs scheduled, attended, and closed inside the CRM, with follow-ups that actually follow up." },
];

const principles = [
  { title: "Your stages, not a template", copy: "A consulting pursuit, a SaaS trial, and a service call do not move through the same pipeline. We start from how buyers in your industry actually decide, then adjust it to your business." },
  { title: "Your channels, connected", copy: "Some industries live on WhatsApp, some on marketplaces, some on referrals. The setup follows the channels your customers use, and the record reaches the CRM without re-typing." },
  { title: "Your language, on every field", copy: "A pipeline that uses words your team never says gets quietly abandoned. Stages, fields, and reports are named the way your people already talk." },
];

function IndustriesPage() { return <main id="top">
  <section className="reveal relative mx-auto grid min-h-[62vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/15 px-5 py-20 text-center lg:rounded-b-[6rem]">
    <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
    <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-brand/15 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
    <div className="relative mx-auto max-w-5xl">
      <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[6rem] animate-rise-in">One system.<br/>Your kind of <span className="text-brand">selling.</span></h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl animate-rise-in" style={{ animationDelay: "0.24s" }}>A CRM is only useful when it matches how your industry actually wins work. These pages set it up industry by industry, starting with B2B SaaS.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4 animate-rise-in" style={{ animationDelay: "0.36s" }}>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm active:translate-y-1 active:shadow-none">Book a first call <ArrowUpRight size={19} /></Link>
        <a href="#industries" className="rounded-2xl border-2 border-ink bg-background px-8 py-4 font-bold transition-all hover:translate-y-0.5 hover:bg-ink hover:text-cream">See the industries</a>
      </div>
    </div>
  </section>

  <section id="industries" className="reveal scroll-mt-8 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Industries we write for.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Each page is written for how that business actually sells, from the stages of the pipeline to the channels its customers use.</p>
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((s) => <article id={s.id} key={s.title} className="flex scroll-mt-28 flex-col rounded-[2.5rem] bg-background p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1.5">
        <span className={`inline-block h-2.5 w-10 rounded-full ${s.tone}`} />
        <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.copy}</p>
        <Link to={s.href} className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-brand">Explore this industry <ArrowUpRight size={15} /></Link>
      </article>)}
    </div>
  </div></section>

  <section className="reveal border-y-2 border-ink/10 bg-sun/15 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">How these pages are written.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">An industry page is not a services list with a different headline. Three things decide whether the setup fits.</p>
    <div className="mt-12 space-y-6">
      {principles.map((p, i) => <div key={p.title} className={`flex items-start gap-6 rounded-[2.5rem] border-2 border-ink p-8 shadow-tactile-ink ${i % 2 ? "bg-mint/30 lg:ml-16" : "bg-background lg:mr-16"}`}>
        <span className="font-display text-5xl font-bold opacity-30">{`0${i + 1}`}</span>
        <div>
          <h3 className="text-2xl font-bold">{p.title}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink/70">{p.copy}</p>
        </div>
      </div>)}
    </div>
  </div></section>

  <section className="reveal mx-auto max-w-6xl px-5 py-24 sm:px-6"><div className="rounded-[3rem] border-2 border-ink bg-ink p-10 text-center text-cream shadow-tactile-ink sm:p-16">
    <h2 className="font-display text-4xl font-bold sm:text-6xl">Tell us how you sell.</h2>
    <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">If your industry is not listed, the same thinking applies. The first conversation is free and genuinely useful, whether or not the work follows.</p>
    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a first call <ArrowUpRight size={19} /></Link>
  </div></section>
</main> }
