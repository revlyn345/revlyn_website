import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema } from "../../lib/seo";
import { ArrowLeft, ArrowUpRight, CalendarCheck, CreditCard, Inbox, MessageCircle, RefreshCw, TrendingDown, Users } from "lucide-react";
import punjabFilmCityLogo from "../../assets/customers/punjab-film-city.svg";

export const Route = createFileRoute("/case-studies/punjab-film-city")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "Case studies", path: "/case-studies" }, { name: "Punjab Film City", path: "/case-studies/punjab-film-city" }]) },
      { title: "Punjab Film City: A Booking System That Runs Itself on Zoho | Revlyn" },
      { name: "description", content: "How Punjab Film City replaced manual enquiry handling with a Zoho Creator booking system and Zoho CRM, lifting bookings by 20% and cutting manual work by 40%." },
      { property: "og:title", content: "Punjab Film City: A Booking System That Runs Itself on Zoho | Revlyn" },
      { property: "og:description", content: "One booking journey on Zoho Creator, every enquiry in Zoho CRM, 20% more bookings, and 40% less manual work." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://revlyn.io/case-studies/punjab-film-city" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies/punjab-film-city" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Punjab Film City: a booking system that runs itself on Zoho", description: "How Punjab Film City moved bookings, incomplete bookings, and WhatsApp enquiries into Zoho Creator and Zoho CRM.", author: { "@type": "Organization", name: "Revlyn" }, publisher: { "@type": "Organization", name: "Revlyn" } }) }],
  }),
  component: PunjabFilmCityCaseStudy,
});

const outcomes = [
  { icon: CalendarCheck, tone: "bg-mint", stat: "20%", copy: "more bookings than before" },
  { icon: TrendingDown, tone: "bg-sun", stat: "40%", copy: "less manual work for the team" },
  { icon: Inbox, tone: "bg-brand text-cream", stat: "Every", copy: "enquiry landing in one CRM, ready to call" },
];

function PunjabFilmCityCaseStudy() {
  return (
    <main>
      <article>
        <header className="relative mx-auto overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-16 text-cream sm:px-8 sm:py-24 lg:rounded-b-[6rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
          <div className="relative mx-auto max-w-4xl">
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-bold text-cream/65 transition-colors hover:text-sun"><ArrowLeft size={18} aria-hidden="true" /> Back to case studies</Link>
            <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-cream/15 px-4 py-2">Booking system</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Zoho</span>
              <span className="rounded-full bg-cream/15 px-4 py-2">Automation</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">Punjab Film City: bookings that run themselves.</h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-cream/75">A pre-wedding shoots business taking enquiries from all around the globe, with every one of them handled by hand. We built the booking journey and the CRM behind it on Zoho, so a lead can browse, book a slot, and pay without anyone in the middle.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-center gap-5 rounded-[2rem] border-2 border-ink/10 bg-background p-6 sm:gap-7 sm:p-8">
            <img src={punjabFilmCityLogo} alt="Punjab Film City logo" className="h-14 w-auto rounded-xl bg-cream object-contain p-2 sm:h-16" loading="lazy" />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold">Punjab Film City</h2>
              <p className="mt-1 leading-relaxed text-ink/65">Pre-wedding shoots, with enquiries arriving from all around the globe.</p>
            </div>
            <a href="https://www.punjabfilmcity.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-ink px-5 py-3 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Visit site <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-relaxed text-ink">Punjab Film City sells an experience: a shoot couples travel for, sometimes from the other side of the world. The goal was simple to say and hard to run by hand.</p>
            <p>A lead should be able to go to the website, browse it, book a slot for their shoot, and pay. Instead, enquiries arrived through the website contact form, WhatsApp messages, and bookings left half-finished, and each one was picked up and chased manually.</p>
            <p>Nothing connected. Following up meant noticing the enquiry first, wherever it had landed, and remembering to call it back.</p>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">What we built.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-cream"><CreditCard size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">The booking journey on Zoho Creator</h3>
                <p className="mt-3 leading-relaxed text-ink/65">A full booking system on Zoho Creator: a lead browses the website, picks a slot for their shoot, and pays it, in one seamless flow.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-grape text-cream"><Users size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Every enquiry in Zoho CRM</h3>
                <p className="mt-3 leading-relaxed text-ink/65">Contact form enquiries, incomplete bookings, and WhatsApp enquiries all land in Zoho CRM, where the sales team can see each one and call it back.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint"><RefreshCw size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">Incomplete bookings, captured</h3>
                <p className="mt-3 leading-relaxed text-ink/65">A booking abandoned before payment is not a lost lead. The system catches it and routes it to the CRM so the team can pick it up where the lead left off.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-ink/10 bg-background p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-sun"><MessageCircle size={24} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">WhatsApp in the same funnel</h3>
                <p className="mt-3 leading-relaxed text-ink/65">WhatsApp enquiries stop living in a phone. They flow into the same CRM alongside everything else, so no channel gets answered last.</p>
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
            <p className="mt-8 flex items-start gap-3 text-cream/60">The system runs on its own with the lowest human intervention involved, so the team spends its time on conversations, not chasing.</p>
          </section>

          <section className="mt-16 space-y-7 text-lg leading-relaxed text-ink/75">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Why it worked.</h2>
            <p>The booking journey was designed end to end before any of it was built: what a lead sees, what happens when they pay, and what happens when they do not. Every enquiry source had a defined path into the CRM, so nothing depended on someone remembering to check.</p>
            <p>That is the same order we apply to every engagement. When the process is clear, the system becomes simple to build and runs with the least human intervention possible.</p>
          </section>

          <section className="mt-16 grid gap-8 rounded-[2.5rem] bg-mint/40 p-8 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Still chasing enquiries by hand?</h2>
              <p className="mt-3 leading-relaxed text-ink/65">Bring us your current process. We will map it with you and show what a connected booking and CRM system could look like.</p>
            </div>
            <BookCallButton className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={18} aria-hidden="true" /></BookCallButton>
          </section>
        </div>
      </article>
    </main>
  );
}
