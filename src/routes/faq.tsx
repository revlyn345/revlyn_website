import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, faqSchema } from "../lib/seo";
import { ArrowUpRight, Compass, Handshake, HelpCircle, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "CRM and HubSpot FAQs | Revlyn" },
      { name: "description", content: "Straight answers about working with Revlyn, HubSpot partnerships, CRM pricing and scope, data migration, and adoption." },
      { property: "og:title", content: "CRM and HubSpot FAQs | Revlyn" },
      { property: "og:description", content: "Straight answers about working with Revlyn, HubSpot, CRM decisions, and adoption." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "CRM and HubSpot FAQs", path: "/faq" }]) },
    { "script:ld+json": faqSchema(groups.flatMap((g) => g.items)) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/faq" }],
  }),
  component: FaqPage,
});

type QA = { q: string; a: string; link?: { to: string; label: string } };

const groups: { id: string; icon: typeof Compass; tone: string; title: string; blurb: string; items: QA[] }[] = [
  {
    id: "working",
    icon: Handshake, tone: "bg-brand text-cream",
    title: "Working with Revlyn",
    blurb: "Who we are, how scoping works, and what you can expect when we work together.",
    items: [
      { q: "How does pricing work?", a: "Scope comes first, in writing: what gets built, what your team does, what we do, and what is explicitly out of scope. Pricing follows the scope, so you see what each part costs and why. Larger work is phased so you can stop or adjust after each stage.", link: { to: "/how-we-work", label: "More on scoping and pricing" } },
      { q: "Will we be locked into Revlyn after the project?", a: "No. Your data, configuration, and documentation stay yours, and we document the system so your team can run it without us. If you want ongoing help, our retainer exists for that, but dependency is never the design.", link: { to: "/hubspot/managed", label: "About the retainer" } },
      { q: "What happens in a first call?", a: "It is free and genuinely useful whether or not we work together. We look at how your sales and customer work actually runs, look past the CRM question to the business issue underneath, and you leave with a clear recommendation, even if that is to do nothing yet.", link: { to: "/contact", label: "Book a first call" } },
    ],
  },
  {
    id: "hubspot",
    icon: Handshake, tone: "bg-sun",
    title: "HubSpot questions",
    blurb: "What a Gold Partner actually is, and how onboarding, implementation, and migration differ.",
    items: [
      { q: "What does being a HubSpot Solutions Partner mean?", a: "Revlyn is a HubSpot Solutions Partner (Gold tier). It means HubSpot recognises our ability to implement the platform for clients. It does not mean HubSpot directs work to us, and we never recommend the platform because of a partnership. We recommend it when it fits.", link: { to: "/hubspot", label: "See our HubSpot services" } },
      { q: "We already use HubSpot badly. Is it worth fixing or starting over?", a: "Often worth fixing first. Portals usually fail on unclear stages, duplicate data, and unused features rather than a wrong platform choice. An audit shows whether a structured clean-up beats a fresh start. We will tell you honestly which one we would pick.", link: { to: "/hubspot/implementation", label: "About implementation" } },
      { q: "Can you migrate us from another CRM?", a: "Yes. Migration is its own discipline: deciding what should move, standardising fields, resolving duplicates, testing a sample import, and reconciling totals before the final move. We follow a written process and bring your team into each decision.", link: { to: "/hubspot/migration", label: "About migration" } },
    ],
  },
  {
    id: "crm",
    icon: Compass, tone: "bg-mint",
    title: "CRM basics",
    blurb: "When to buy, what to compare, and how to keep the system alive after launch.",
    items: [
      { q: "How do we know we are ready for a CRM?", a: "Readiness is less about size and more about clarity: a business problem someone owns, a decision-maker available, salespeople willing to explain reality, and time after launch for coaching. Our guide includes a readiness checklist you can score yourself against.", link: { to: "/crm-implementation", label: "Read the guide" } },
      { q: "HubSpot, Salesforce, or Pipedrive?", a: "It depends on how complex your process is and who will run the system. We wrote two plain comparisons covering where each platform is strong and the questions to ask before choosing.", link: { to: "/compare", label: "Read the comparisons" } },
      { q: "Why do CRM projects fail after launch?", a: "Usually predictable reasons: unclear process, the team joined too late, managers keep working from private spreadsheets, and feedback has nowhere to go. All four are avoidable with the right habits, which we documented in a short article.", link: { to: "/blog/why-crm-adoption-fails", label: "Read the article" } },
      { q: "What is revenue operations, and do we need it?", a: "Revenue operations connects marketing, sales, and service into one system with shared data and clear handoffs. You need it when those teams start losing leads and context between each other, which is common once a company grows beyond a handful of people per team.", link: { to: "/revops", label: "About revenue operations" } },
    ],
  },
];

function FaqPage() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/20 px-5 py-20 text-center sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute -left-24 top-10 size-80 rounded-full bg-sun/40 blur-3xl animate-glow-soft" />
        <div aria-hidden="true" className="absolute -right-20 bottom-0 size-96 rounded-full bg-mint/50 blur-3xl animate-glow-soft" style={{ animationDelay: "1.8s" }} />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl">Questions, answered <span className="text-brand">honestly.</span></h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">The things people ask before working with a CRM agency, answered the way we would answer them on a call. No sales gloss.</p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="reveal scroll-mt-8 py-16 sm:py-20 odd:bg-cream/40">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="flex items-start gap-5">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${group.tone}`}><group.icon size={24} aria-hidden="true" /></span>
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-5xl">{group.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/60">{group.blurb}</p>
              </div>
            </div>
            <div className="mt-10 grid gap-5">
              {group.items.map((item) => (
                <article key={item.q} className="rounded-[2rem] border-2 border-ink/5 bg-background p-7 shadow-sm sm:p-8">
                  <h3 className="flex items-start gap-3 text-xl font-bold sm:text-2xl"><MessageCircle size={22} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{item.q}</h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{item.a}</p>
                  {item.link ? <Link to={item.link.to} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-ink">{item.link.label} <ArrowUpRight size={16} aria-hidden="true" /></Link> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="reveal bg-sun/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <HelpCircle size={38} className="mx-auto text-grape" aria-hidden="true" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">Question not here?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">Ask it directly. If it is a common question, it may end up on this page so the next person benefits too.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Ask us anything <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
