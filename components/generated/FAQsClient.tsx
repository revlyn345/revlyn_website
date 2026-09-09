"use client";

import { Footer } from "@/components/Footer";

const items = [
  { q: "How is Revlyn different from a typical RevOps agency?", a: "We're your extended revenue operations team, not a project shop. HubSpot as a Service means we run CRM, RevOps, GTM and AI for you, with weekly standups, monthly scorecards, and quarterly roadmaps. No juniors, no offshore, no sub-contracting." },
  { q: "Which CRMs and tools do you work with?", a: "HubSpot, Salesforce, Attio, and Pipedrive on the CRM side. Segment, Rudderstack, and dbt on the data side. Clay, Apollo, and Common Room on the GTM side." },
  { q: "How do you price engagements?", a: "HubSpot as a Service is a monthly subscription. Diagnostics are a fixed fee. Standalone builds are fixed-scope, fixed-timeline." },
  { q: "Do you replace our team, or work with them?", a: "We work alongside your leadership and frontline teams, running the operations layer so your people can focus on decisions and strategy." },
  { q: "What size company do you work with?", a: "B2B startups from Series A to Series C, and mid-market companies from 10M to 50M ARR." },
  { q: "How quickly can we start?", a: "Diagnostics start within two weeks. Ongoing engagements typically start the following month." },
];

export default function FAQsClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <section className="border-b-2 border-ink bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">FAQs</div>
          <h1 className="display text-4xl md:text-6xl tracking-[-0.03em] mb-14">
            Questions we get, before the first call.
          </h1>
          <div className="divide-y-2 divide-ink border-t-2 border-b-2 border-ink">
            {items.map((it, i) => (
              <details key={it.q} className="group py-6 cursor-pointer" open={i === 0}>
                <summary className="flex items-start justify-between gap-6 list-none">
                  <span className="display text-xl md:text-2xl leading-tight">{it.q}</span>
                  <span className="display text-3xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-ink/75 leading-relaxed max-w-2xl">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}