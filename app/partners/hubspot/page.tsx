import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";

// ============================================================
// ASSETS
// ============================================================

const revlynWordmark = "/logos/revlyn-wordmark.png";

// Put your downloaded HubSpot badge here:
// public/logos/hubspot-badge.png
const hubspotBadge = "/logos/solutions-partner-gold.svg";

const HUBSPOT_PROFILE =
  "https://app-na2.hubspot.com/marketplace-providers/50496423/profile";

// ============================================================
// SEO
// ============================================================

export const metadata: Metadata = {
  title: "Revlyn × HubSpot · Certified Solutions Partner",
  description:
    "Revlyn is a HubSpot Solutions Partner. We architect, ship and operate HubSpot portals for founders and revenue leaders. 100+ portals shipped and still running.",
  alternates: {
    canonical: "/partners/hubspot",
  },
  openGraph: {
    title: "Revlyn × HubSpot · Solutions Partner",
    description:
      "The Revlyn team behind 100+ HubSpot portals still in production. Implementation, Optimization and HubSpot as a Service.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// ============================================================
// PAGE
// ============================================================

export default function HubSpotPartnerPage() {
  return (
    <main className="bg-paper text-ink overflow-hidden">
      <Hero />
      <PartnershipTerms />
      <Capabilities />
      <Reviews />
      <WhyUs />
      <Playbooks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// ============================================================
// HERO
// ============================================================

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-20 w-[560px] h-[560px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, rgba(255,87,34,0.4), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, rgba(255,235,59,0.55), transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Hero copy */}
          <div className="lg:col-span-8">
            <h1
              data-reveal
              data-reveal-delay="0.05"
              className="display leading-[0.95] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]"
            >
              Revlyn
              <span className="text-fire">×</span>
              <br />
              <span className="relative inline-block">
                <span className="text-fire">
                  HubSpot<span className="text-ink">.</span>
                </span>
                <span aria-hidden className="absolute left-0 -bottom-1 h-[6px] w-[62%] bg-volt" />
              </span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="0.15"
              className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80"
            >
              Most partners treat HubSpot like a project. We treat it like a
              portal you have to live inside for the next three years. Every
              build we ship is one we can still open, edit and defend on a
              Tuesday morning.
            </p>
          </div>

          {/* HUBSPOT BADGE */}
          <div data-reveal data-reveal-delay="0.25" className="lg:col-span-4">
            <div className="brutal-border bg-ink text-paper p-6 shadow-[10px_10px_0_0_var(--color-fire)] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-fire)]">
              <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-6">
                <span>Solutions Partner</span>
                <span className="text-volt">Tier · Gold</span>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src={hubspotBadge}
                  alt="HubSpot Solutions Partner — Gold Tier"
                  width={160}
                  height={160}
                  className="w-32 h-32 md:w-36 md:h-36"
                />
              </div>

              <div className="text-center">
                <div className="display text-3xl md:text-4xl leading-none tracking-[-0.03em]">
                  Gold Partner
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mt-3">
                  Verified · Since 2025
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-paper/15 mt-6 border-t border-b border-paper/15 py-4">
                <div className="text-center">
                  <div className="display text-xl">5.0</div>
                  <div className="mono text-[9px] uppercase tracking-[0.18em] text-paper/50 mt-1">Directory</div>
                </div>
                <div className="text-center">
                  <div className="display text-xl">50+</div>
                  <div className="mono text-[9px] uppercase tracking-[0.18em] text-paper/50 mt-1">Portals</div>
                </div>
                <div className="text-center">
                  <div className="display text-xl">5</div>
                  <div className="mono text-[9px] uppercase tracking-[0.18em] text-paper/50 mt-1">Hubs Live</div>
                </div>
              </div>

              <a
                href={HUBSPOT_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="14"
                className="group mt-5 inline-flex items-center justify-center w-full gap-2 bg-volt text-ink px-4 py-3 mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper transition-colors"
              >
                Verify on hubspot.com
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* TRUST BAND */}
        <div
          data-reveal
          data-reveal-delay="0.35"
          className="mt-14 brutal-border bg-paper shadow-[10px_10px_0_0_var(--color-ink)] grid md:grid-cols-[auto_1fr] divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink"
        >
          <a
            href={HUBSPOT_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 md:p-7 bg-volt flex items-center gap-5 hover:bg-fire hover:text-paper transition-colors duration-200"
          >
            <div>
              <div className="display text-5xl leading-none tracking-[-0.04em] tabular-nums">5.0</div>
              <div className="text-base leading-none mt-1">★★★★★</div>
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] leading-relaxed text-ink/70 group-hover:text-paper/80">
              HubSpot Directory
              <br />
              verified reviews
              <br />
              <span className="inline-flex items-center gap-1 mt-1 text-ink group-hover:text-paper">
                View profile
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </span>
            </div>
          </a>

          <div className="p-6 md:p-7">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/50 mb-4">
              Hubs we operate in production
            </div>
            <div className="flex flex-wrap gap-2">
              {["Marketing Hub", "Sales Hub", "Service Hub", "Content Hub", "Operations Hub"].map((h) => (
                <span
                  key={h}
                  className="group inline-flex items-center gap-2 border-2 border-ink px-3 py-1.5 mono text-[11px] uppercase tracking-[0.16em] bg-paper hover:bg-fire hover:text-paper transition-colors duration-200"
                >
                  <span className="inline-block h-1.5 w-1.5 bg-fire group-hover:bg-paper transition-colors" />
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t-2 border-ink/10 flex flex-wrap gap-x-8 gap-y-2 mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
              <span>Partnership since 2025</span>
              <span>Starter to Enterprise portals</span>
              <span>Region coverage: US, Australia, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PARTNERSHIP TERMS
// ============================================================

function PartnershipTerms() {
  const rows: [string, string][] = [
    ["Status", "Solutions Partner, verified in the HubSpot Directory"],
    ["Partnering since", "2025"],
    ["Hubs we operate", "Marketing, Sales, Service, Content, Operations"],
    [
      "Engagement modes",
      "Fixed-scope Implementation, Optimization audits, HubSpot as a Service",
    ],
    [
      "Portal size range",
      "Starter to Enterprise, multi-currency and multi-brand",
    ],
    ["Region coverage", "US, Australia, India"],
  ];

  return (
    <section className="relative border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">
              The partnership
            </p>

            <h2 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em]">
              What the partnership
              <br />
              actually says.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
              Partner badges are easy to earn and easier to forget. Here is
              what our HubSpot relationship materially covers.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="brutal-border shadow-[8px_8px_0_0_var(--color-ink)]">
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid md:grid-cols-[220px_1fr] gap-4 p-5 md:p-6 ${
                    i !== rows.length - 1 ? "border-b-2 border-ink" : ""
                  } ${i % 2 === 0 ? "bg-volt" : "bg-paper"}`}
                >
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                    {k}
                  </div>

                  <div className="font-medium leading-relaxed">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CAPABILITIES
// ============================================================

function Capabilities() {
  const caps = [
    {
      hub: "Marketing Hub",
      items: [
        "Lead scoring redesign",
        "Segmentation library",
        "Workflow rebuilds",
        "Attribution and UTM discipline",
      ],
    },
    {
      hub: "Sales Hub",
      items: [
        "Pipeline architecture",
        "Deal automation",
        "Playbooks and sequences",
        "Forecast reliability",
      ],
    },
    {
      hub: "Service Hub",
      items: [
        "Ticket routing",
        "SLA and escalation logic",
        "CSAT and NPS wiring",
        "Knowledge base builds",
      ],
    },
    {
      hub: "Content Hub",
      items: [
        "Programmatic pages",
        "Personalization tokens",
        "Form strategy",
        "SEO topic clusters",
      ],
    },
    {
      hub: "Operations Hub",
      items: [
        "Data quality automations",
        "Custom-coded actions",
        "Warehouse sync",
        "Programmable governance",
      ],
    },
    {
      hub: "AI inside HubSpot",
      items: [
        "Breeze copilots",
        "Bitscale enrichment sync",
        "AI field mapping",
        "Signal to workflow triggers",
      ],
    },
  ];

  return (
    <section className="relative border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">
              Every hub, one team
            </p>

            <h2 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em]">
              We do not pick a hub.
              <br />
              <span className="text-paper/50">We run the portal.</span>
            </h2>
          </div>

          <div className="md:hidden mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
            Swipe →
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:overflow-visible md:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <div
              data-reveal
              data-reveal-delay={i * 0.05}
              key={c.hub}
              className={`group relative shrink-0 w-[78%] sm:w-[45%] md:w-auto snap-center brutal-border p-5 md:p-6 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[8px_8px_0_0_var(--color-paper)] ${
                i === 0 || i === 4
                  ? "bg-volt text-ink"
                  : i === 2
                    ? "bg-fire text-paper"
                    : "bg-paper text-ink"
              }`}
            >
              <h3 className="display text-3xl leading-none tracking-[-0.03em]">
                {c.hub}
              </h3>

              <ul className="mt-6 space-y-3">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                  >
                    <span className="mt-1">▸</span>
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

// ============================================================
// REVIEWS
// ============================================================

type Review = {
  title: string;
  body: string;
  services: string;
  author: string;
  date: string;
};

const reviews: Review[] = [
  {
    title: "A reliable HubSpot partner for marketing and CRM success",
    body: "Revlyn has been an excellent partner throughout our HubSpot implementation and onboarding journey. Their team demonstrated strong expertise across CRM implementation, Marketing Hub onboarding, conversational marketing, and inbound marketing. They took the time to understand our business needs, provided practical recommendations, and ensured a smooth implementation process.",
    services:
      "Full Inbound Marketing, Marketing Hub Onboarding, Customer Marketing, CRM Implementation",
    author: "Jainapur, V.",
    date: "Jul 16, 2026",
  },
  {
    title: "Dedicated and talented team",
    body: "We came by this team through a reference. So far, we have had a great experience working with the team. One of the nicer things about working with them has been that they never say no to any requests we make, they are always looking to find ways to help us get better outcomes. Would 100% recommend for a team that is looking for hands on support.",
    services:
      "Marketing Hub Onboarding, CRM Implementation, CRM Migration, Service Hub Onboarding",
    author: "Sikaria, P.",
    date: "Jun 17, 2026",
  },
  {
    title: "Good HubSpot implementation support",
    body: "We are very pleased with the HubSpot implementation support provided by the Revlyn team. They demonstrated strong expertise, professionalism, and responsiveness throughout the project. The implementation was smooth, well-organized, and aligned with our business requirements.",
    services:
      "Email Marketing, Marketing Hub Onboarding, CRM Implementation, Sales Hub Onboarding",
    author: "Sharma, G.",
    date: "Jun 16, 2026",
  },
  {
    title: "Excellent RevOps and AI oriented HubSpot partner",
    body: "Revlyn are great, they regularly make proactive suggestions and promote additional HubSpot capabilities effectively to clients. They are technically strong and skilled in integrations and AI use cases for HubSpot, but more importantly they understand the business context, workflows and have a RevOps oriented mindset.",
    services:
      "HubSpot Onboarding, SEO, CRM Migration, Custom API Integrations, Programmable Automation",
    author: "Randall, M.",
    date: "Jun 15, 2026",
  },
  {
    title: "A great HubSpot partner",
    body: "Revlyn have helped us realign our HubSpot sales and marketing processes, from streamlining workflows, data cleansing and insights to implementing more robust processes for triaging inbound and outbound leads. Friendly, knowledgeable and proactive.",
    services:
      "Sales Enablement, CRM Implementation, Sales and Marketing Alignment",
    author: "Head, S.",
    date: "Mar 6, 2026",
  },
  {
    title: "RevOps is a blessing",
    body: "Revlyn have been helping us to orchestrate and execute the lead gen workflow so we don't lose deals through the funnel. We love their work and due diligence.",
    services: "Full Inbound Marketing Services",
    author: "Bakaya, R.",
    date: "Feb 4, 2026",
  },
  {
    title: "Deep HubSpot knowledge, real options",
    body: "Rishabh and the Revlyn team have been great. Rishabh has a deep understanding of HubSpot's ins and outs and is able to easily take a problem you have, and give you multiple options for solutions.",
    services: "Sales and Marketing Alignment",
    author: "King, J.",
    date: "Feb 4, 2026",
  },
  {
    title: "Went above and beyond to support our needs",
    body: "Working with Rishab and Kartik has been a wonderful experience and nothing like a typical transactional engagement. They take a direct interest and invest very closely in our business success. We found it especially helpful that they took the time to understand our business, helping us find aligned leads and continue refining our lead and marketing strategy and outreach.",
    services: "Sales and Marketing Alignment",
    author: "Sukumar, M.",
    date: "Jan 22, 2026",
  },
  {
    title: "Helping build sales operations across ANZ",
    body: "The Revlyn team helped our business execute marketing events, in person and online, set up CRM with lead registration forms and sales process mapping. All of these helped us launch new campaigns and win leads and customers in the region.",
    services:
      "Email Marketing, Sales Enablement, CRM Implementation",
    author: "Naqvi, S.",
    date: "Jan 20, 2026",
  },
  {
    title: "Reliable HubSpot Implementation Partner",
    body: "RevOps played a key role in our HubSpot implementation. The team was supportive, responsive, and professional, making the entire experience seamless and positive.",
    services: "Sales Hub Professional Onboarding and CRM Implementation",
    author: "Gupta, S.",
    date: "Jul 29, 2026",
  },
  {
    title: "Experience with Partner Revlyn on CRM implementation",
    body: "We have moved to a hub spot crm for our sales at IRIM and the onboarding has been very successful engagement. We have now extended our work with them for maintenance and build in bound sales playbook",
    services:
      "HubSpot Onboarding, Knowledge Base Development, Sales Hub Enterprise Onboarding, CRM Implementation, Custom API Integrations",
    author: "SIVALINGAM, V.",
    date: "Jul 29, 2026",
  },
  {
    title: "Great Team",
    body: "The RevOps team is professional and experienced. These guys get it done - easy to talk with; highly recommend!",
    services:
      "Programmable Automation, Sales Hub Enterprise Onboarding, CRM Implementation",
    author: "Smith, A.",
    date: "Aug 6, 2026",
  },
  {
    title: "Sales infrastructure that survives",
    body: 'Rishabh and the RevOps Central team have led foundational CRM and sales infrastructure work across several engagements I’ve been involved in. What stood out every time was the sequencing of priorities. They didn’t just configure tools, they built the underlying process first, so the CRM reflected how the business actually sold rather than forcing a sales team into a generic template. That distinction matters more than most vendors seem to understand. The onboarding was thorough without being slow, and the team stayed engaged past go-live rather than disappearing once the implementation was "done." I’d recommend them to any operator looking to build sales infrastructure that survives contact with a real sales team.',
    services:
      "HubSpot Onboarding, Revenue Hub Implementation, Sales Hub Professional Onboarding, Sales Enablement, CRM Implementation",
    author: "Coleman, I.",
    date: "Jul 30, 2026",
  },
  {
    title: "HubSpot Experts!",
    body: "What a great team and experience it has been working with them. They are super rockstars who understand HubSpot and RevOps to its core. Highly recommend",
    services:
      "Billing and Payments Implementation, Revenue Hub Implementation, Marketing Hub Enterprise Onboarding, Sales Hub Professional Onboarding, Sales and Marketing Alignment, Service Hub Professional Onboarding, Sales Coaching and Training",
    author: "Rep, S.",
    date: "Aug 7, 2026",
  },
  {
    title: "Sales Enabling",
    body: "Revlyn is the go to partner for HubSpot implementation/assistance. Our team has been working with Revlyn for the last 8 months and its been a great journey from the start.",
    services:
      "Sales Hub Professional Onboarding, Sales and Marketing Alignment, Sales Coaching and Training, Sales Enablement",
    author: "Thukral, N.",
    date: "Aug 7, 2026",
  },
  {
    title: "RevOps expert",
    body: "Revlyn has been my go to source for my sales enablement in HubSpot. They deeply understand RevOps, GTM and sales systems.",
    services:
      "Sales and Marketing Alignment, Sales Coaching and Training, Sales Enablement",
    author: "Mehta, B.",
    date: "Aug 20, 2026",
  },
  {
    title: "Sales are higher with Revlyn",
    body: "When we decided to work with a RevOps team, we had no idea how transformative they would be to our workflow. We have been so pleased with Revlyn! They have cleaned up our data in HubSpot, brought clarity to our strategy, and created sales pipelines that allow our sales team to reach and exceed their goals. Our weekly meetings with Rishabh and Kartik are always productive and they have seen progress week to week. I highly recommend Revlyn.",
    services:
      "Customer Marketing, Email Marketing, Help Desk Implementation, Sales Hub Enterprise Onboarding, Community Management, Sales and Marketing Alignment, Content Creation",
    author: "McClymont, J.",
    date: "Aug 7, 2026",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg leading-none">★★★★★</span>

      <span className="mono text-[9px] uppercase tracking-[0.16em] opacity-60">
        5/5
      </span>
    </div>
  );
}

function Reviews() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper border-b-2 border-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 w-[620px] h-[620px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.8), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-7">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">
              Reviews on the HubSpot Directory
            </p>

            <h2 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em]">
              Not our words.
              <br />
              <span className="text-paper/50">Theirs.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-paper/65">
              Every review below is published on our HubSpot Solutions Partner
              profile, written by the marketing, sales and revenue leaders who
              sat on the other side of the build. Nothing here was solicited
              with a discount or a gift card.
            </p>
          </div>
        </div>

        <div className="md:hidden mb-3 mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
          Swipe →
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:overflow-visible md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => {
            const tone =
              i % 7 === 0
                ? "bg-fire text-paper border-paper"
                : i % 5 === 0
                  ? "bg-volt text-ink border-ink"
                  : "bg-paper text-ink border-ink";

            return (
              <article
                key={r.author + r.date + r.title}
                data-reveal
                data-reveal-delay={(i % 3) * 0.06}
                className={`group shrink-0 w-[85%] sm:w-[48%] md:w-auto snap-center border-2 ${tone} p-6 flex flex-col transition-all duration-300 md:hover:-translate-y-1.5 shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] md:hover:shadow-[12px_12px_0_0_rgba(0,0,0,0.45)]`}
              >
                <div className="flex items-center justify-between gap-4">
                  <Stars />

                  <span className="mono text-[10px] uppercase tracking-[0.18em] opacity-55">
                    {r.date}
                  </span>
                </div>

                <h3 className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight mt-4">
                  {r.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed opacity-85">
                  {r.body}
                </p>

                <div className="mt-5 pt-4 border-t border-current/20">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] opacity-55">
                    Services provided
                  </div>

                  <p className="mono text-[11px] mt-1.5 leading-relaxed opacity-80">
                    {r.services}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-current/20 flex items-center gap-3">
                  <span className="h-8 w-8 border-2 border-current flex items-center justify-center mono text-[11px] font-bold">
                    {r.author.charAt(0)}
                  </span>

                  <span className="mono text-[11px] uppercase tracking-[0.18em]">
                    {r.author}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={HUBSPOT_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-volt text-ink border-2 border-ink px-6 py-3.5 mono text-xs uppercase tracking-[0.22em] hover:bg-fire hover:text-paper hover:border-paper transition-colors"
          >
            Read every review on HubSpot

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <span className="mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
            reviews shown · 5.0 average
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WHY US
// ============================================================

function WhyUs() {
  const points = [
    {
      t: "We stay in the portal after launch.",
      s: "Certification proves we can implement. HubSpot as a Service is how the portal survives its second year, when workflows drift and dashboards diverge.",
    },
    {
      t: "One team, both sides of the seat.",
      s: "Every person on your Revlyn team has worked on real HubSpot portals before touching yours. No account manager sitting in between.",
    },
    {
      t: "We write the docs your team will actually open.",
      s: "Every workflow, property and automation ships with a plain-English runbook. When your admin leaves, the portal keeps working because the knowledge did not.",
    },
    {
      t: "We build AI into HubSpot, not around it.",
      s: "Enrichment, copilots and custom actions live inside the portal, not in a separate tool your reps ignore. One system, one login, one source of truth.",
    },
  ];

  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-7">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">
              HubSpot has thousands of partners
            </p>

            <h2 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em]">
              Four reasons teams pick us
              <br />
              <span className="text-ink/45">out of the directory.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 brutal-border">
          {points.map((p, i) => (
            <div
              key={p.t}
              className={`p-6 md:p-8 transition-colors duration-300 hover:bg-volt ${
                i % 2 === 1 ? "md:border-l-2 border-ink" : ""
              } ${i >= 2 ? "border-t-2 border-ink" : ""}`}
            >
              <div className="mono text-[10px] uppercase tracking-[0.2em] text-fire mb-5">
                0{i + 1}
              </div>

              <h3 className="display text-3xl md:text-4xl leading-tight tracking-[-0.025em]">
                {p.t}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-ink/65 max-w-xl">
                {p.s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PLAYBOOKS
// ============================================================

function Playbooks() {
  const books = [
    {
      to: "/hubspot-implementation",
      t: "Implementation",
      s: "Fixed 6-week build. Portal live, documented, and handed to a team that can operate it.",
      accent: "bg-volt",
    },
    {
      to: "/hubspot-optimization",
      t: "Optimization",
      s: "4-week rehab for portals in year two or three. Audit, findings ledger, rebuild specs.",
      accent: "bg-paper",
    },
    {
      to: "/hubspot-as-a-service",
      t: "HubSpot as a Service",
      s: "Monthly. A Revlyn lead inside your Slack, in the portal, on the rhythm.",
      accent: "bg-fire text-paper",
    },
  ];

  return (
    <section className="border-b-2 border-ink bg-volt">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-5">
            How you can engage
          </p>

          <h2 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em]">
            Three doors into
            <br />
            the partnership.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {books.map((b, i) => (
            <Link
              key={b.t}
              href={b.to}
              data-reveal
              data-reveal-delay={0.1 + i * 0.08}
              className="block group"
            >
              <article
                className={`relative brutal-border p-6 md:p-8 h-full min-h-[300px] flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-ink)] transition-all duration-300 ${b.accent}`}
              >
                <div className="mono text-[10px] uppercase tracking-[0.2em] opacity-55 mb-8">
                  0{i + 1}
                </div>

                <h3 className="display text-4xl md:text-5xl leading-[0.9] tracking-[-0.035em]">
                  {b.t}
                </h3>

                <p className="mt-5 text-[15px] leading-relaxed opacity-75 max-w-md">
                  {b.s}
                </p>

                <div className="mt-auto pt-10">
                  <span className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.2em]">
                    See the scope

                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FINAL CTA
// ============================================================

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,235,59,0.7), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-6">
            Talk to a HubSpot specialist
          </p>

          <h2 className="display text-6xl md:text-8xl leading-[0.85] tracking-[-0.045em]">
            Bring your portal,
            <br />
            <span className="text-ink/45">or bring the problem.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/70">
            30-minute diagnostic. We screenshare your HubSpot, mark what is
            leaking, and hand you a written recap the same day.
          </p>

          <div className="mt-10">
            <BookCallButton className="group inline-flex items-center gap-3 bg-fire text-paper border-2 border-ink px-7 py-4 mono text-xs uppercase tracking-[0.22em] hover:bg-ink transition-colors">
              Book the diagnostic

              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </BookCallButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

