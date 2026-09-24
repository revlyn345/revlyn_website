import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema } from "../lib/seo";
import { ArrowUpRight, FileCheck2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "CRM Case Studies | Revlyn" },
      { name: "description", content: "Revlyn case studies on CRM, HubSpot, and revenue engineering work. Detailed stories will be published with client approval." },
      { property: "og:title", content: "CRM Case Studies | Revlyn" },
      { property: "og:description", content: "Evidence-led stories about CRM and revenue engineering work, published with client approval." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "CRM Case Studies", path: "/case-studies" }]) },
  ],
    links: [{ rel: "canonical", href: "https://revlyn.io/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <main>
      <section className="relative mx-auto grid min-h-[58vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-grape px-5 py-20 text-cream sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div aria-hidden="true" className="absolute inset-0 bg-dots text-cream/10" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">The work, shown honestly.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70 sm:text-xl">Detailed CRM and revenue engineering stories, shared only when the client and evidence are ready.</p>
            </div>
            <div className="rounded-[2rem] bg-cream p-8 text-ink shadow-tactile-ink">
              <FileCheck2 size={30} className="text-brand" aria-hidden="true" />
              <p className="mt-6 text-2xl font-bold">Case studies are being prepared.</p>
              <p className="mt-3 leading-relaxed text-ink/65">We will not publish anonymous claims or invented results. Each story will be added with the right context and approval.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-8 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-mint"><ShieldCheck size={27} aria-hidden="true" /></span>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Want to understand how we work?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">See how we scope work, communicate clearly, and set expectations before a project begins.</p>
          </div>
          <Link to="/how-we-work" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-1 hover:shadow-tactile-ink-sm">How we work <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}