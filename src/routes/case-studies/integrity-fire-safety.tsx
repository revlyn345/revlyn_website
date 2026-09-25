import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowLeft, ArrowUpRight, CalendarClock, ClipboardList, Link2, TrendingUp, Wrench } from "lucide-react";
import integrityLogo from "../../assets/customers/integrity-fire-safety.webp";
const iraPhoto = "/images/case-studies/ira-coleman.jpg";

export const Route = createFileRoute("/case-studies/integrity-fire-safety")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "Case studies", path: "/case-studies" }, { name: "Integrity Fire Safety", path: "/case-studies/integrity-fire-safety" }]) },
      { title: "Integrity Fire Safety: A HubSpot Rebuilt From Scratch | Revlyn" },
      { name: "description", content: "How Integrity Fire Safety replaced a confused HubSpot setup with a documented Test and Inspect to Renewals pipeline, lifting pipeline by 25% and closure rate by 20%." },
      { property: "og:title", content: "Integrity Fire Safety: A HubSpot Rebuilt From Scratch | Revlyn" },
      { property: "og:description", content: "A documented pipeline, inspection reminders that fire themselves, and ServiceTrade connected to HubSpot: 25% more pipeline, 20% better closure rate." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/case-studies/integrity-fire-safety" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies/integrity-fire-safety" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Integrity Fire Safety: a HubSpot rebuilt from scratch", description: "How Integrity Fire Safety restructured its HubSpot from scratch, documented the Test and Inspect to Renewals pipeline, and connected ServiceTrade.", author: { "@type": "Organization", name: "Revlyn" }, publisher: { "@type": "Organization", name: "Revlyn" } }) }],
  }),
  component: IntegrityFireSafetyCaseStudy,
});

const outcomes = [
  { icon: TrendingUp, tone: "bg-mint", stat: "25%", copy: "increase in the Test and Inspect pipeline" },
  { icon: ArrowUpRight, tone: "bg-sun", stat: "20%", copy: "improvement in the closure rate" },
  { icon: Link2, tone: "bg-brand text-cream", stat: "Lead to cash", copy: "a clear journey with ServiceTrade connected to HubSpot" },
];

function IntegrityFireSafetyCaseStudy() {
  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-16 text-cream sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-bold text-cream/65 transition-colors hover:text-sun"><ArrowLeft size={18} aria-hidden="true" /> Back to case studies</Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-cream/15 px-4 py-2">HubSpot rebuild</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Sales pipeline</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Automation</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">Integrity Fire Safety: a HubSpot rebuilt from scratch.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-cream/75">A fire safety services company already had HubSpot, but the data, integrations, and logic inside it created more confusion than clarity. We restructured everything from the ground up, then scaled it into a pipeline that closes.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-center gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-6 sm:gap-7 sm:p-8">
            <img src={integrityLogo} alt="Integrity Fire Safety Services logo" className="h-14 w-auto rounded-xl bg-cream object-contain p-2 sm:h-16" loading="lazy" />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold">Integrity Fire Safety Services</h2>
              <p className="mt-1 leading-relaxed text-ink/65">Fire safety services: testing, inspection, and renewals, run on HubSpot.</p>
            </div>
            <a href="https://integrityfiresafetyservices.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-5 py-3 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-relaxed text-ink">Having a CRM is not the same as having a system. Integrity Fire Safety had HubSpot, but inside it the data was confused, the integrations fought each other, and the logic behind stages and properties no longer matched how the business worked.</p>
            <p>Every fix layered on top of that mess made it heavier. Rather than patch it, the decision was to start over: structure everything from scratch first, then scale on a foundation the team could trust.</p>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What we built.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-cream"><ClipboardList size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">A pipeline documented end to end</h3>
                <p className="mt-3 leading-relaxed text-ink/65">We built the sales pipeline for Test and Inspect through to Renewals, and documented every deal stage, including the conditional properties each stage requires, so the CRM mirrors how the business actually sells.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-grape text-cream"><CalendarClock size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Inspection reminders that fire themselves</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Automation designed around when the inspection is due: reminders go out on schedule without anyone tracking dates by hand, and no renewal quietly slips past.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint"><Wrench size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Services mapped properly</h3>
                <p className="mt-3 leading-relaxed text-ink/65">We reworked the services mapping inside HubSpot, so every service the company sells is represented cleanly in the CRM instead of living in free-text fields and workarounds.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-sun"><Link2 size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">ServiceTrade connected to HubSpot</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Connecting ServiceTrade to HubSpot enabled a clear lead to cash journey: from the first enquiry, through the work, to the money collected, all visible in one flow.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What changed.</h2>
            <div className="mt-9 grid gap-6 sm:grid-cols-3">
              {outcomes.map(({ icon: Icon, tone, stat, copy }) => (
                <div key={stat} className="rounded-[2rem] bg-cream/5 p-7">
                  <span className={`grid size-14 place-items-center rounded-2xl ${tone}`}><Icon size={24} aria-hidden="true" /></span>
                  <p className="mt-5 font-display text-4xl font-bold text-sun">{stat}</p>
                  <p className="mt-2 leading-relaxed text-cream/70">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-3 text-cream/60">The pipeline grew and closed better at the same time, which is what happens when the process underneath the CRM is finally sound.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-start">
            <img src={iraPhoto} alt="Ira Coleman, Director of Services at Integrity Fire Safety Services" className="size-24 rounded-[1.5rem] object-cover sm:size-32" loading="lazy" />
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Sales infrastructure that survives</h2>
              <blockquote className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                <p>&ldquo;Rishabh and the Revlyn team have led foundational CRM and sales infrastructure work across several engagements I&rsquo;ve been involved in. What stood out every time was the sequencing of priorities. They didn&rsquo;t just configure tools, they built the underlying process first, so the CRM reflected how the business actually sold rather than forcing a sales team into a generic template. That distinction matters more than most vendors seem to understand. The onboarding was thorough without being slow, and the team stayed engaged past go-live rather than disappearing once the implementation was &ldquo;done.&rdquo; I&rsquo;d recommend them to any operator looking to build sales infrastructure that survives contact with a real sales team.&rdquo;</p>
              </blockquote>
              <p className="mt-6 font-bold">Ira Coleman</p>
              <p className="text-ink/65">Director of Services, Integrity Fire Safety Services</p>
            </div>
          </section>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Why it worked.</h2>
            <p>The rebuild did not begin with features. It began with structure: how a job moves from enquiry to test, to inspection, to renewal, and what must be true at each stage for the next one to run. Once that was written down, the stages, properties, and automation had something honest to implement.</p>
            <p>That is the same order we apply to every engagement. A CRM patched over a confused process stays confused. A CRM built on a documented process scales.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] bg-mint/40 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Is your HubSpot fighting your team?</h2>
              <p className="mt-3 leading-relaxed text-ink/65">Bring us the confusion. We will map how your business actually sells and show what a rebuilt system could look like.</p>
            </div>
            <BookCallButton className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={18} aria-hidden="true" /></BookCallButton>
          </section>
        </div>
      </article>
    </main>
  );
}
