import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Revlyn × HubSpot · Certified Solutions Partner",
  description: "Revlyn is a HubSpot Solutions Partner. We architect, ship and operate HubSpot portals for founders and revenue leaders. 127 portals shipped, all still running.",
  alternates: { canonical: "/partners/hubspot" },
  openGraph: {
    title: "Revlyn × HubSpot · Solutions Partner",
    description: "The senior operator team behind 127 HubSpot portals still in production. Implementation, Optimization and HubSpot as a Service.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function HubSpotPartnerPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <PartnershipTerms />
      <Capabilities />
      <WhyUs />
      <Playbooks />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-20 w-[560px] h-[560px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, rgba(255,87,34,0.4), transparent 70%)", animation: "revlyn-float 16s ease-in-out infinite" }} />
      <div className="max-w-[1400px] mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-20 relative">
        {/* Breadcrumb */}
        <div data-reveal className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-8">
          <Link href="/partners" className="hover:text-fire transition-colors">Partners</Link>
          <span>/</span>
          <span className="text-ink">HubSpot</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-fire opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fire" />
              </span>
              Partner File · P-01 · HubSpot Solutions Partner
            </p>
            <h1 data-reveal data-reveal-delay="0.05" className="display leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]">
              REVLYN<span className="text-fire animate-blink">×</span><br />
              <span className="relative inline-block">
                <span className="text-fire">HUBSPOT<span className="text-ink">.</span></span>
                <span aria-hidden className="absolute left-0 -bottom-1 h-[6px] w-[62%] bg-fire/25" />
              </span>
            </h1>
            <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
              Most partners treat HubSpot like a project. We treat it like a portal you have to live inside for the next three years.
              Every build we ship is one we can still open, edit and defend on a Tuesday morning.
            </p>
          </div>

          {/* Certification plaque */}
          <div data-reveal data-reveal-delay="0.25" className="lg:col-span-4">
            <div className="brutal-border bg-fire text-paper p-5 shadow-[10px_10px_0_0_var(--color-ink)] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-5">
                <span className="border border-paper bg-fire px-2 py-0.5">Certified</span>
                <span>P-01</span>
              </div>
              <div className="relative border-2 border-paper bg-fire p-5 text-center overflow-hidden">
                {/* rotating aura */}
                <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-25 animate-spin-slow" style={{ transformOrigin: "center" }}>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#fafaf7" strokeWidth="1" strokeDasharray="6 8" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#fafaf7" strokeWidth="1" strokeDasharray="3 6" />
                </svg>
                <div className="relative mono text-[10px] uppercase tracking-[0.22em] text-paper/80">
                  HubSpot
                </div>
                <div className="relative display text-3xl md:text-4xl leading-none mt-2 tracking-[-0.03em]">
                  Solutions
                </div>
                <div className="relative display text-3xl md:text-4xl leading-none tracking-[-0.03em]">
                  Partner
                </div>
                <div className="relative mono text-[10px] uppercase tracking-[0.22em] text-paper/80 mt-3">
                  Est. 2019
                </div>
              </div>
              <a
                href="https://ecosystem.hubspot.com/marketplace/solutions"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="14"
                className="group mt-4 inline-flex items-center justify-center w-full gap-2 bg-ink text-paper border-2 border-paper px-4 py-2.5 mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors"
              >
                Verify on hubspot.com
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <div data-reveal data-reveal-delay="0.35" className="mt-14 border-t-2 border-ink pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["127", "Portals shipped"],
            ["6yr", "Longest active retainer"],
            ["05", "Hubs operated, Marketing to Ops"],
            ["< 14m", "Median Slack reply, business hours"],
          ].map(([v, l], i) => (
            <div key={l} data-reveal data-reveal-delay={0.4 + i * 0.05} className="group relative border-2 border-ink bg-paper p-4 transition-all duration-300 hover:bg-volt hover:-translate-y-0.5">
              <div className="display text-3xl md:text-4xl tracking-[-0.03em] leading-none tabular-nums">{v}</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 mt-2 group-hover:text-ink">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PARTNERSHIP TERMS ────────────────────────────────────────────── */
function PartnershipTerms() {
  const rows: [string, string][] = [
    ["Status", "Solutions Partner · Verified in HubSpot Directory"],
    ["Partnering since", "2019 · Seven years operating in the platform"],
    ["Hubs we operate", "Marketing, Sales, Service, Content, Operations"],
    ["Engagement modes", "Fixed-scope Implementation · Optimization audits · HubSpot as a Service (monthly)"],
    ["Portal size range", "Starter to Enterprise · Multi-currency, multi-brand, multi-team"],
    ["Region coverage", "Gurugram HQ · Remote · US and EU business hours"],
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              Terms · Public record
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-[-0.035em] leading-tight">
              What the partnership actually says<span className="text-fire">.</span>
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Partner badges are easy to earn and easier to forget. Here is what our
              HubSpot relationship materially covers.
            </p>
          </div>
          <div className="brutal-border bg-paper divide-y-2 divide-ink">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr]">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 p-4 border-r-2 border-ink bg-bone">
                  {k}
                </div>
                <div className="p-4 text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CAPABILITIES MATRIX ──────────────────────────────────────────── */
function Capabilities() {
  const caps = [
    {
      hub: "Marketing Hub",
      items: ["Lead scoring redesign", "Segmentation library", "Workflow rebuilds", "Attribution & UTM discipline"],
    },
    {
      hub: "Sales Hub",
      items: ["Pipeline architecture", "Deal automation", "Playbooks & sequences", "Forecast reliability"],
    },
    {
      hub: "Service Hub",
      items: ["Ticket routing", "SLA & escalation logic", "CSAT / NPS wiring", "Knowledge base builds"],
    },
    {
      hub: "Content Hub / CMS",
      items: ["Programmatic pages", "Personalization tokens", "Form strategy", "SEO topic clusters"],
    },
    {
      hub: "Ops Hub",
      items: ["Data quality automations", "Custom-coded actions", "Warehouse sync", "Programmable governance"],
    },
    {
      hub: "AI on HubSpot",
      items: ["Breeze copilots", "Bitscale enrichment sync", "AI-generated field mapping", "Signal → workflow triggers"],
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              Capability matrix · Every hub
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              We do not pick a hub<span className="text-ink">.</span><br />
              <span className="text-fire">We run the portal.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((c, i) => (
            <div
              data-reveal
              data-reveal-delay={i * 0.05}
              key={c.hub}
              className={`group relative brutal-border p-5 md:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] ${
                i === 0 || i === 4 ? "bg-volt" : i === 2 ? "bg-fire text-paper" : "bg-paper"
              }`}
            >
              {/* diagonal shimmer on hover */}
              <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }} />
              <div className="relative flex items-center justify-between mb-4">
                <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  Active
                </div>
              </div>
              <div className="relative display text-xl tracking-[-0.02em] leading-tight">{c.hub}</div>
              <ul className="relative mt-4 space-y-1.5 mono text-xs">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    <span className="opacity-60">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY US ───────────────────────────────────────────────────────── */
function WhyUs() {
  const points = [
    {
      n: "01",
      t: "We stay in the portal after launch.",
      s: "Certification proves we can implement. HubSpot as a Service is how the portal survives its second year, when workflows drift and dashboards diverge.",
    },
    {
      n: "02",
      t: "Senior operators only, both sides of the seat.",
      s: "Every person on your Revlyn team has held a revenue title in-house before running HubSpot for other companies. Avg. 8 years of operating tenure, not billable-hour tenure.",
    },
    {
      n: "03",
      t: "We write the docs your team will actually open.",
      s: "Every workflow, property and automation ships with a plain-English runbook. When your admin leaves, the portal keeps working because the knowledge did not.",
    },
    {
      n: "04",
      t: "We integrate AI into HubSpot, not around it.",
      s: "Bitscale enrichment, Breeze copilots and custom AI actions live inside the portal, not in a separate tool your reps ignore. One system, one login, one truth.",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              HubSpot has thousands of partners
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
              Four reasons a Founder<br />
              <span className="text-paper/60">picks Revlyn from the directory.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-0 border-2 border-paper/20">
          {points.map((p, i) => (
            <div
              key={p.n}
              className={`p-6 md:p-8 ${i % 2 === 1 ? "md:border-l-2 border-paper/20" : ""} ${i >= 2 ? "border-t-2 border-paper/20" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire">{p.n}</span>
                <span className="h-px w-8 bg-paper/30" />
              </div>
              <div className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight">{p.t}</div>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PLAYBOOKS: link to service pages ─────────────────────────────── */
function Playbooks() {
  const books = [
    {
      to: "/hubspot-implementation" as const,
      code: "SVC · 01",
      t: "Implementation",
      s: "Fixed 6-week build. Portal live, documented, and handed to a team that can operate it.",
      accent: "bg-volt",
    },
    {
      to: "/hubspot-optimization" as const,
      code: "SVC · 02",
      t: "Optimization",
      s: "4-week rehab for portals in year two or three. Audit, findings ledger, rebuild specs.",
      accent: "bg-paper",
    },
    {
      to: "/hubspot-as-a-service" as const,
      code: "SVC · 03",
      t: "HubSpot as a Service",
      s: "Monthly. A senior operator inside your Slack, in the portal, on the rhythm.",
      accent: "bg-fire text-paper",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
            How you can engage
          </p>
          <h2 data-reveal data-reveal-delay="0.1" className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            Three doors into the partnership<span className="text-fire">.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((b, i) => (
            <Link key={b.code} href={b.to} data-reveal data-reveal-delay={0.1 + i * 0.08} className="block group">
              <article className={`relative brutal-border p-6 md:p-8 h-full flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-ink)] transition-all duration-300 ${b.accent}`}>
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70 flex items-center justify-between">
                  <span>{b.code}</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                </div>
                <div className="mt-4 display text-3xl md:text-4xl tracking-[-0.03em] leading-tight">{b.t}</div>
                <p className="mt-3 text-sm leading-relaxed opacity-85">{b.s}</p>
                <div className="mt-auto pt-6 mono text-xs uppercase tracking-[0.22em] flex items-center gap-2">
                  <span className="relative">
                    Open scope
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div data-reveal className="brutal-border bg-ink text-paper p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <span aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffeb3b 0 2px, transparent 2px 14px)" }} />
          <div className="relative">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-volt mb-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-volt opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
              </span>
              Talk to a senior HubSpot operator
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-tight max-w-2xl">
              Bring your portal, or bring the problem<span className="text-fire">.</span>
            </h2>
            <p className="mt-4 text-paper/70 max-w-xl">
              30-minute diagnostic. We screenshare your HubSpot, mark what is leaking, and hand you a written recap the same day.
            </p>
          </div>
          <Link
            href="/contact"
            data-magnetic="20"
            className="group relative inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-6 py-4 mono text-xs uppercase tracking-[0.22em] hover:bg-volt hover:text-ink transition-colors self-start"
          >
            Book the diagnostic
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────────────────── */
function Footer() {
  const services = [
    ["HubSpot as a Service", "/hubspot-as-a-service", "Ongoing operator"],
    ["HubSpot Implementation", "/hubspot-implementation", "6-week build"],
    ["HubSpot Optimization", "/hubspot-optimization", "Portal reset"],
    ["RevOps", "/#services", "Pipeline, forecast, comp"],
    ["GTM Engineering", "/#services", "Outbound, ABM, lifecycle"],
    ["AI Workflows", "/#services", "Agents on the CRM"],
  ] as const;

  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      {/* Giant wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span
          className="display leading-none tracking-tighter text-transparent select-none translate-y-[18%]"
          style={{
            fontSize: "clamp(9rem, 28vw, 28rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.09)",
          }}
        >
          revlyn
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-14">
        {/* Editorial lead */}
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-7">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-fire" />
              End of the page. Start of the conversation.
            </div>
            <h3 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.035em]">
              Revenue systems,
              <br />
              <span className="text-paper/65">operated by </span>
              <span className="text-fire">seniors</span>
              <span className="text-fire">.</span>
            </h3>
            <p className="mt-6 max-w-xl text-paper/70 leading-relaxed text-lg">
              A small team of revenue operators for Founders and Heads of Sales, Marketing, Revenue and GTM. We build the portal, tune the pipeline, wire the AI, and stay on the account.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-fire text-paper pl-5 pr-1.5 py-1.5 text-sm font-medium hover:bg-paper hover:text-ink transition-colors">
                Book a diagnostic call
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </BookCallButton>
              <a
                href="mailto:info@revlyn.io"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                info@revlyn.io
              </a>
              <a
                href="tel:+917503044000"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                +91 75030 44000
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span>Field notes</span>
              <span className="h-px flex-1 bg-paper/10" />
              <span className="text-paper/60">Monthly · 2 min</span>
            </div>
            <h4 className="display text-3xl md:text-4xl leading-[0.95] tracking-[-0.02em]">
              The <span className="text-fire">operator&rsquo;s notebook</span>.
            </h4>
            <p className="mt-3 text-paper/65 text-sm">
              Short essays on revenue systems, HubSpot, RevOps and AI. Written by the same operators who run the portals.
            </p>
            <div className="mt-5">
              <div className="flex items-stretch rounded-full border border-paper/20 bg-paper/5 pl-5 pr-1 py-1 focus-within:border-fire transition-colors">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
                />
                <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink pl-4 pr-2 py-1.5 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                  Subscribe
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </button>
              </div>
              <p className="mt-3 text-[11px] text-paper/60">
                One email a month. Unsubscribe with one click.
              </p>
            </div>

            {/* Studio card */}
            <div className="mt-8 rounded-2xl border border-paper/12 bg-paper/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Studio</div>
                  <div className="text-paper leading-snug">
                    Gurugram, Haryana
                    <br />
                    <span className="text-paper/60">India · IST (UTC+5:30)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Hours</div>
                  <div className="text-paper">Mon, Fri</div>
                  <div className="text-paper/60 text-sm">09:30 to 19:30 IST</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-paper/10 flex items-center justify-between text-[12px]">
                <span className="text-paper/55">Async everywhere. Slack shared channel on request.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-14 border-b border-paper/10">
          {/* 6-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact#intake"],
                ["Pricing", "/hubspot-as-a-service#pricing"],
                ["Request a proposal", "/contact"],
              ],
            },
            {
              h: "HubSpot",
              l: [
                ["HubSpot as a Service", "/hubspot-as-a-service"],
                ["Implementation", "/hubspot-implementation"],
                ["Optimization", "/hubspot-optimization"],
                ["Migration", "/hubspot-implementation#migration"],
                ["Audit", "/hubspot-optimization#audit"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["RevOps", "/#services"],
                ["GTM Engineering", "/#services"],
                ["AI Workflows", "/#services"],
                ["Lifecycle & Nurture", "/#services"],
                ["Reporting & Forecast", "/#services"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Mid-market", "/use-cases"],
                ["Founders", "/use-cases"],
                ["Heads of GTM", "/use-cases"],
              ],
            },
            {
              h: "Partners",
              l: [
                ["Overview", "/partners"],
                ["HubSpot", "/partners/hubspot"],
                ["Bitscale", "/partners/bitscale"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Case ledger", "/#proof"],
                ["Method", "/#method"],
                ["Field notes", "#"],
                ["Careers", "/about#team"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-paper text-[15px] font-medium mb-5">{col.h}</div>
              <ul className="space-y-3">
                {col.l.map(([label, href]) =>
                  label === "Book a call" ? (
                    <li key={label}>
                      <BookCallButton className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors">
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </BookCallButton>
                    </li>
                  ) : (
                    <li key={label}>
                      <a
                        href={href}
                        className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors"
                      >
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-end gap-3 py-12 border-b border-paper/10">


          <div className="flex items-center gap-3 md:justify-end">
            {[
              { n: "LinkedIn", h: "https://www.linkedin.com/company/revlynhq/", d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.62 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.55v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28V22H7.84V8z" },
              { n: "X", h: "#", d: "M18.244 2H21.5l-7.51 8.583L23 22h-6.797l-5.324-6.53L4.8 22H1.542l8.036-9.19L1 2h6.914l4.813 5.93L18.244 2zm-1.192 18h1.826L7.033 4H5.07l11.982 16z" },
              { n: "Substack", h: "#", d: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l10.54-5.9L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" },
              { n: "YouTube", h: "#", d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" },
            ].map((s) => (
              <a
                key={s.n}
                href={s.h}
                aria-label={s.n}
                className="grid place-items-center h-10 w-10 rounded-full border border-paper/15 text-paper/70 hover:text-fire hover:border-fire/60 hover:bg-fire/[0.06] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>


        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-12">
          <div className="flex items-center gap-4">
            <img
              src={revlynWordmark}
              alt="Revlyn"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </div>
          <p className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 max-w-md md:text-right">
            Revenue, built like an engine. Operated like a team you already trust.
          </p>
        </div>

        {/* Base line */}
        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-paper/65">
          <span className="flex items-center gap-3">
            <span className="mono">© 2026 Revlyn</span>
            <span className="text-paper/25">·</span>
            <span>Built by operators, in Gurugram</span>
          </span>
          <span className="flex items-center gap-5">
            <a href="#" className="hover:text-paper transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <a href="#" className="hover:text-paper transition-colors">Security</a>
            <a href="#" className="hover:text-paper transition-colors">Cookies</a>
            <a href="#" className="hover:text-paper transition-colors">FAQs</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
