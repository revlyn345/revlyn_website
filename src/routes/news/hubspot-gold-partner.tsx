import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { BookCallButton } from "@/components/BookCallButton";
import { ArrowUpRight, Award, BookOpen, Check, Compass, GraduationCap, Handshake, LineChart, Users } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/news/hubspot-gold-partner")({
  head: () => ({
    meta: [
      { property: "article:published_time", content: "2026-07-15" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "Revlyn is now a HubSpot Gold Solutions Partner",
          datePublished: "2026-07-15",
          dateModified: "2026-07-15",
          url: "https://revlyn.io/news/hubspot-gold-partner",
          mainEntityOfPage: "https://revlyn.io/news/hubspot-gold-partner",
          image: "https://revlyn.io/og-image.png",
          author: { "@id": "https://revlyn.io/#organization" },
          publisher: { "@id": "https://revlyn.io/#organization" },
        },
      },
      { "script:ld+json": breadcrumbSchema([{ name: "News", path: "/news" }, { name: "Revlyn is a HubSpot Gold Partner", path: "/news/hubspot-gold-partner" }]) },
      { title: "Revlyn is now a HubSpot Gold Solutions Partner | Revlyn News" },
      { name: "description", content: "On 15 July 2026, Revlyn became a HubSpot Gold Solutions Partner. What the tier means for our clients and our vision forward." },
      { property: "og:title", content: "Revlyn is now a HubSpot Gold Solutions Partner | Revlyn News" },
      { property: "og:description", content: "On 15 July 2026, Revlyn became a HubSpot Gold Solutions Partner. What the tier means and where we take it from here." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/news/hubspot-gold-partner" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://revlyn.io/og-image.png" },
      { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/news/hubspot-gold-partner" }],
  }),
  component: GoldPartnerNewsPage,
});

const meaning = [
  { icon: Award, tone: "bg-sun", title: "A verified tier", copy: "Gold is a tier in HubSpot's Solutions Partner Program, earned through demonstrated HubSpot work and maintained through the program's requirements. It is not a badge we bought or a tier we named ourselves." },
  { icon: GraduationCap, tone: "bg-mint", title: "Platform depth", copy: "It reflects working knowledge across HubSpot's hubs: sales, marketing, and service, from first onboarding through automation, integrations, and reporting." },
  { icon: Handshake, tone: "bg-grape text-cream", title: "A working relationship with HubSpot", copy: "When an implementation needs it, we have a direct line to HubSpot, which helps your project move instead of waiting on a support queue." },
];

const forClients = [
  "Your HubSpot is designed by a team HubSpot itself recognises for this work",
  "Decisions made around your process first, HubSpot configuration second",
  "A direct line to HubSpot when your implementation needs it",
  "Your portal, data, and documentation stay yours",
];

const vision = [
  { icon: Compass, tone: "bg-sun", title: "Process first, always", copy: "The tier does not change how we build. Every engagement still starts with how your team sells, then shapes HubSpot around it. Gold recognises the work; it does not replace the method." },
  { icon: LineChart, tone: "bg-mint", title: "Deeper across the hubs", copy: "We will keep deepening our work across sales, marketing, and service hubs, so a portal grows as one connected system rather than three parallel ones." },
  { icon: Users, tone: "bg-brand text-cream", title: "Senior attention as we grow", copy: "As Revlyn takes on more HubSpot work, the commitment stays the same: senior people, start to finish, and no disappearing after go live." },
  { icon: BookOpen, tone: "bg-grape text-cream", title: "Sharing what we learn", copy: "We will keep turning what we learn in real implementations into guides, articles, and checklists, so teams deciding on HubSpot can decide with full information." },
];

function GoldPartnerNewsPage() {
  return (
    <main>
      <article>
        <section className="relative mx-auto grid min-h-[58vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-sun/25 px-5 py-20 sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute -left-24 top-8 size-80 rounded-full bg-brand/20 blur-3xl animate-glow-soft" />
          <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-mint/20 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
          <div className="relative mx-auto w-full max-w-6xl">
            <Link to="/news" className="text-sm font-bold text-ink/60 hover:text-ink">← All news</Link>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <HubSpotBadge />
              <span className="rounded-full border-2 border-ink/10 bg-background px-4 py-2 text-sm font-bold text-ink/60">15 July 2026</span>
            </div>
            <h1 className="mt-7 max-w-5xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-[5.5rem]">Revlyn is now a <span className="text-brand">HubSpot Gold</span> Solutions Partner.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/70 sm:text-xl">On 15 July 2026, HubSpot recognised Revlyn as a Gold Solutions Partner. It is a verified tier in HubSpot's Solutions Partner Program, and it confirms the work we do every day: building HubSpot portals around the way revenue teams actually sell.</p>
          </div>
        </section>

        <section className="reveal py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 className="max-w-3xl font-display text-4xl font-bold sm:text-6xl">What Gold Partner actually means.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Partnership tiers can sound like marketing. Here is what sits behind this one.</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {meaning.map(({ icon: Icon, tone, title, copy }) => (
                <article key={title} className="rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <span className={`grid size-16 place-items-center rounded-2xl ${tone}`}><Icon size={26} aria-hidden="true" /></span>
                  <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal border-y-2 border-ink/10 bg-mint/15 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold sm:text-6xl">What it means for you.</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/65">The tier changes what we can back our work with, not what we charge for it or how we run it. In practice, clients working with Revlyn get:</p>
            </div>
            <div className="rounded-[3rem] bg-ink p-8 text-cream sm:p-10">
              <ul className="space-y-5">
                {forClients.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-sun text-ink"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>
                    <span className="leading-relaxed text-cream/75">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-cream/50">HubSpot remains responsible for its product, licences, pricing, and terms. If HubSpot is not the right fit, we will say so.</p>
            </div>
          </div>
        </section>

        <section className="reveal py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 className="max-w-3xl font-display text-4xl font-bold sm:text-6xl">Our vision from here.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Gold is a milestone, not a finish line. This is what we are working towards.</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {vision.map(({ icon: Icon, tone, title, copy }, i) => (
                <article key={title} className={`flex gap-6 rounded-[2.5rem] border-2 border-ink/5 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 ${i % 2 ? "lg:translate-y-5" : ""}`}>
                  <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                  <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/65">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-6xl px-5 pb-24 sm:px-6">
          <div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
            <HubSpotBadge dark />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Put a Gold Partner to work.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Tell us where you are with HubSpot today and what a better working week should look like.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <BookCallButton className="inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={19} aria-hidden="true" /></BookCallButton>
              <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl border-2 border-cream/25 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-sun hover:text-sun">See HubSpot services <ArrowUpRight size={19} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
