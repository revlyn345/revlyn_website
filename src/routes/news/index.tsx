import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { BookCallButton } from "@/components/BookCallButton";
import { ArrowUpRight, Megaphone } from "lucide-react";
import { HubSpotBadge } from "../../components/HubSpotBadge";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { "script:ld+json": breadcrumbSchema([{ name: "News", path: "/news" }]) },
      { title: "News | Revlyn" },
      { name: "description", content: "Official news and milestones from Revlyn: partnerships, recognitions, and announcements." },
      { property: "og:title", content: "News | Revlyn" },
      { property: "og:description", content: "Official news and milestones from Revlyn: partnerships, recognitions, and announcements." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/news" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://revlyn.io/og-image.png" },
      { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <main>
      <section className="relative mx-auto grid min-h-[54vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint px-5 py-20 text-ink sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-ink/5" />
        <div aria-hidden="true" className="absolute -right-16 bottom-0 size-96 rounded-full bg-sun/50 blur-3xl animate-glow-soft" />
        <div className="relative mx-auto w-full max-w-6xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">News from <span className="text-brand">Revlyn.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">Official announcements and milestones. We publish news when there is something real to share, nothing more often and nothing less.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <Link to="/news/hubspot-gold-partner" className="group grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid size-20 place-items-center rounded-2xl bg-sun self-start lg:self-center"><Megaphone size={30} aria-hidden="true" /></span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ink/45">15 July 2026</p>
            <h2 className="mt-3 font-display text-3xl font-bold group-hover:text-brand sm:text-4xl">Revlyn is now a HubSpot Gold Solutions Partner.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/65">HubSpot has recognised Revlyn as a Gold Solutions Partner, a verified tier in the Solutions Partner Program. Here is what the tier means and where we take it from here.</p>
            <div className="mt-6"><HubSpotBadge /></div>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all group-hover:translate-y-1 group-hover:shadow-tactile-ink-sm lg:self-center">Read announcement <ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>

        <p className="mt-10 text-center text-ink/45">This page will grow as there is more to announce.</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="rounded-[3rem] bg-ink p-10 text-center text-cream sm:p-16">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Working with a Gold Partner.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">See what HubSpot work with Revlyn looks like, from onboarding to automation and adoption.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/hubspot" className="inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">HubSpot services <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <BookCallButton className="inline-flex items-center gap-2 rounded-2xl border-2 border-cream/25 px-8 py-4 font-bold text-cream transition-all hover:translate-y-0.5 hover:border-sun hover:text-sun">Book a call <ArrowUpRight size={19} aria-hidden="true" /></BookCallButton>
          </div>
        </div>
      </section>
    </main>
  );
}
