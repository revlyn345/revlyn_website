import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
const saasHero = "/saas-hero.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "For SaaS companies · Revlyn",
  description: "How Revlyn helps SaaS teams turn HubSpot, product signals and AI into a revenue engine — from first signup to expansion.",
  alternates: { canonical: "/use-cases/saas" },
};

export default function SaasUseCase() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <StickyPains />
      <LifecycleVisual />
      <SignalsBoard />
      <BeforeAfter />
      <StackVisual />
      <RhythmStrip />
      <MiniStory />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div className="mono text-xs tracking-[0.2em] text-fire mb-5">
            USE CASE · SAAS
          </div>
          <h1 className="display text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.95] tracking-tight">
            Your product ships fast.
            <br />
            <span className="italic">Your revenue engine should too.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            You built something people love. Now the sales, marketing and
            product teams all need the same picture — who signed up, who's
            stuck, who's ready to pay, who's about to churn. We build that
            picture inside HubSpot and keep it running.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookCallButton className="brutal-border bg-ink text-paper px-5 py-3 display text-lg brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all">
              Book a call →
            </BookCallButton>
            <Link
              href="/hubspot-as-a-service"
              className="brutal-border bg-volt text-ink px-5 py-3 display text-lg hover:bg-paper transition-colors"
            >
              See the service
            </Link>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="brutal-border overflow-hidden bg-bone">
            <img
              src={saasHero}
              alt="A SaaS revenue engine — pricing, onboarding, MRR, PQLs"
              width={1600}
              height={1104}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STICKY PAINS ─────────────────────────────────────────────────── */
function StickyPains() {
  const pains = [
    { emoji: "🫠", t: "Signups go quiet", s: "You get emails. Nothing happens next." },
    { emoji: "🔍", t: "PQLs are a mystery", s: "Nobody actually knows who's a good lead." },
    { emoji: "🧵", t: "Data lives in 6 tools", s: "Product, billing, CRM, sheets, Slack, memory." },
    { emoji: "📉", t: "Renewals slip", s: "You find out a month before, not a quarter." },
    { emoji: "🧑‍💻", t: "No time for AI", s: "Everyone talks about it. Nobody's shipped it." },
    { emoji: "🕵️", t: "Board wants numbers", s: "You have 4 dashboards. None agree." },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <SectionHeader
          kicker="Sound familiar?"
          title="The six things every SaaS founder tells us"
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p) => (
            <div
              key={p.t}
              className="brutal-border bg-paper p-6 hover:-translate-y-1 hover:brutal-shadow transition-all"
            >
              <div className="text-4xl leading-none">{p.emoji}</div>
              <div className="mt-4 display text-2xl">{p.t}</div>
              <p className="mt-2 text-ink/65">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LIFECYCLE VISUAL ─────────────────────────────────────────────── */
function LifecycleVisual() {
  const stages = [
    { n: "01", t: "Sign up", s: "Frictionless, tracked, enriched." },
    { n: "02", t: "Activate", s: "First win in minutes, not weeks." },
    { n: "03", t: "Qualify", s: "PQL signals ping the right rep." },
    { n: "04", t: "Pay", s: "Handoff without the awkward pause." },
    { n: "05", t: "Expand", s: "Usage triggers upsell, not spam." },
    { n: "06", t: "Renew", s: "You know 90 days out. Not 9." },
  ];
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <SectionHeader
          kicker="The whole picture"
          title="One lifecycle. One team. One place to look."
        />

        {/* Track */}
        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-8 left-6 right-6 h-1 bg-ink" />
          <div className="hidden md:block absolute top-8 left-6 h-1 bg-fire" style={{ width: "83%" }} />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
            {stages.map((s, i) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto w-16 h-16 brutal-border bg-paper flex items-center justify-center display text-2xl relative z-10">
                  {i + 1}
                </div>
                <div className="mt-4 mono text-[11px] tracking-widest text-ink/50">
                  {s.n}
                </div>
                <div className="mt-1 display text-xl">{s.t}</div>
                <p className="mt-1 text-sm text-ink/65 max-w-[16ch] mx-auto">
                  {s.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SIGNALS BOARD (visual) ───────────────────────────────────────── */
function SignalsBoard() {
  const signals = [
    { label: "Invited 3+ teammates", w: 85, tag: "hot" },
    { label: "Connected key integration", w: 72, tag: "hot" },
    { label: "Hit usage limit twice", w: 68, tag: "warm" },
    { label: "Visited /pricing", w: 54, tag: "warm" },
    { label: "Opened admin settings", w: 41, tag: "cool" },
    { label: "Idle for 7 days", w: 22, tag: "risk" },
  ];
  const tagStyles: Record<string, string> = {
    hot: "bg-fire text-paper",
    warm: "bg-volt text-ink",
    cool: "bg-ink text-paper",
    risk: "bg-paper text-ink brutal-border",
  };
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono text-xs tracking-[0.2em] text-volt mb-4">
            PRODUCT SIGNALS → SALES ACTIONS
          </div>
          <h2 className="display text-4xl md:text-5xl leading-tight">
            Stop guessing.
            <br />
            Start reading the room.
          </h2>
          <p className="mt-5 text-paper/70 max-w-md">
            We turn what people do inside your product into a scorecard your
            AEs actually check. When someone lights up, they hear from a human
            the same day.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="brutal-border bg-paper text-ink p-6">
            <div className="flex items-center justify-between mono text-[11px] tracking-widest text-ink/60">
              <span>ACCOUNT · ACME CO</span>
              <span>PQL SCORE · 84</span>
            </div>
            <div className="mt-6 space-y-4">
              {signals.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{s.label}</span>
                    <span
                      className={`mono text-[10px] tracking-widest px-2 py-0.5 ${tagStyles[s.tag]}`}
                    >
                      {s.tag.toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-bone brutal-border relative overflow-hidden">
                    <div
                      className={`h-full ${
                        s.tag === "risk" ? "bg-ink" : "bg-fire"
                      }`}
                      style={{ width: `${s.w}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BEFORE AFTER ─────────────────────────────────────────────────── */
function BeforeAfter() {
  const rows: [string, string, string][] = [
    ["Signup follow-up", "A generic drip. Or nothing.", "Personal, timed by activation moment."],
    ["Who's a good lead?", "A gut feel from the AE.", "A live PQL score everyone trusts."],
    ["Reporting", "Four dashboards, four numbers.", "One board-ready view. Same math."],
    ["Renewals", "Fire drill at month 11.", "Health scored from month 2."],
    ["AI", "A Slack thread of ideas.", "Shipped into your day-to-day."],
  ];
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <SectionHeader
          kicker="Before / After"
          title="What actually changes in the first 90 days"
        />
        <div className="mt-10 brutal-border bg-paper overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] mono text-[11px] tracking-widest bg-ink text-paper">
            <div className="px-4 py-3">TOPIC</div>
            <div className="px-4 py-3 border-l border-paper/20">TODAY</div>
            <div className="px-4 py-3 border-l border-paper/20 bg-fire">
              WITH REVLYN
            </div>
          </div>
          {rows.map(([topic, before, after]) => (
            <div
              key={topic}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] border-t-2 border-ink"
            >
              <div className="px-4 py-4 display text-lg">{topic}</div>
              <div className="px-4 py-4 text-ink/60 md:border-l-2 md:border-ink">
                {before}
              </div>
              <div className="px-4 py-4 md:border-l-2 md:border-ink bg-volt/40">
                {after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── STACK VISUAL ─────────────────────────────────────────────────── */
function StackVisual() {
  const nodes = [
    { x: 15, y: 25, l: "Product", c: "fire" },
    { x: 85, y: 25, l: "Billing", c: "volt" },
    { x: 15, y: 75, l: "Website", c: "volt" },
    { x: 85, y: 75, l: "Ads", c: "fire" },
    { x: 50, y: 12, l: "Data warehouse", c: "ink" },
    { x: 50, y: 88, l: "AI agents", c: "ink" },
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <SectionHeader
          kicker="Your stack, connected"
          title="HubSpot in the middle. Everything else where it belongs."
        />
        <div className="mt-12 brutal-border bg-paper p-6 md:p-10">
          <div className="relative w-full aspect-[16/9]">
            <svg
              viewBox="0 0 100 60"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid */}
              <defs>
                <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="60" fill="url(#grid)" />

              {/* Lines from center */}
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="30"
                  x2={n.x}
                  y2={(n.y / 100) * 60}
                  stroke="black"
                  strokeWidth="0.4"
                  strokeDasharray="1 1"
                />
              ))}

              {/* Center HubSpot hub */}
              <circle cx="50" cy="30" r="8" fill="black" />
              <text
                x="50"
                y="31.5"
                textAnchor="middle"
                fontSize="3"
                fill="#F5C518"
                fontFamily="Inter Tight, sans-serif"
                fontWeight="700"
              >
                HubSpot
              </text>

              {/* Nodes */}
              {nodes.map((n, i) => {
                const fill =
                  n.c === "fire" ? "#FF5722" : n.c === "volt" ? "#F5C518" : "#111";
                const textFill = n.c === "ink" ? "#F5C518" : "#111";
                return (
                  <g key={i}>
                    <circle
                      cx={n.x}
                      cy={(n.y / 100) * 60}
                      r="5.5"
                      fill={fill}
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <text
                      x={n.x}
                      y={(n.y / 100) * 60 + 1}
                      textAnchor="middle"
                      fontSize="2.2"
                      fill={textFill}
                      fontFamily="Inter Tight, sans-serif"
                      fontWeight="600"
                    >
                      {n.l}
                    </text>
                  </g>
                );
              })}

              {/* Traveling pulses */}
              {nodes.map((n, i) => (
                <circle key={`p${i}`} r="0.7" fill="#FF5722">
                  <animateMotion
                    dur={`${3 + (i % 3)}s`}
                    repeatCount="indefinite"
                    path={`M50,30 L${n.x},${(n.y / 100) * 60}`}
                  />
                </circle>
              ))}
            </svg>
          </div>
          <div className="mt-6 mono text-xs text-ink/60 text-center">
            Product · Billing · Website · Ads · Warehouse · AI — all talking to
            each other through one clean CRM.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WEEKLY RHYTHM ────────────────────────────────────────────────── */
function RhythmStrip() {
  const days = [
    { d: "MON", t: "Standup", s: "Score the week. Pick the fights." },
    { d: "TUE–THU", t: "Build", s: "Ship workflows, dashboards, agents." },
    { d: "FRI", t: "Review", s: "What moved. What's next. Decide together." },
  ];
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-3 gap-6">
        {days.map((d, i) => (
          <div
            key={d.d}
            className={`brutal-border p-8 ${
              i === 0 ? "bg-volt" : i === 1 ? "bg-paper" : "bg-fire text-paper"
            }`}
          >
            <div className="mono text-xs tracking-widest opacity-70">
              {d.d}
            </div>
            <div className="mt-3 display text-4xl">{d.t}</div>
            <p className="mt-2 opacity-80">{d.s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── MINI STORY ───────────────────────────────────────────────────── */
function MiniStory() {
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mono text-xs tracking-[0.2em] text-volt mb-4">
            A DAY IN THE LIFE
          </div>
          <h2 className="display text-4xl md:text-5xl leading-tight">
            Tuesday, 10:42am.
          </h2>
          <p className="mt-5 text-paper/70 max-w-md">
            A real moment from a SaaS team we work with — nothing exceptional,
            just what a well-wired revenue engine looks like on a normal day.
          </p>
        </div>
        <div className="md:col-span-7">
          <ol className="space-y-4">
            {[
              [
                "10:42",
                "Someone from a Series C fintech signs up. Enrichment fires. Fit score: 91.",
              ],
              [
                "10:44",
                "They invite two teammates and connect Slack. PQL flips to HOT.",
              ],
              [
                "10:47",
                "Sarah, their AE, gets a slick Slack ping — not a spammy one — with the account, signals, and a suggested opener.",
              ],
              [
                "11:15",
                "Sarah sends a two-line email. Books a 15-min call for Thursday.",
              ],
              [
                "Friday",
                "The founder sees it on the weekly board view. No spreadsheet.",
              ],
            ].map(([t, s]) => (
              <li
                key={t}
                className="grid grid-cols-[80px_1fr] gap-4 border-t border-paper/15 pt-4"
              >
                <div className="mono text-fire">{t}</div>
                <div className="text-paper/85">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────────── */
function FAQ() {
  const qs: [string, string][] = [
    [
      "Do we need to be on HubSpot already?",
      "Nope. Some of our favourite work is helping teams migrate from Salesforce, Pipedrive, or a homegrown CRM — carefully, without breaking pipeline.",
    ],
    [
      "We're pre-Series A. Are we too early?",
      "If you have paying customers and a product people are using, you're ready. The earlier we set this up, the less mess to clean up later.",
    ],
    [
      "How is this different from an agency?",
      "We're an embedded team, not a project shop. Weekly standups, shared Slack, a real scorecard. You'd introduce us as your GTM ops team.",
    ],
    [
      "What about our data?",
      "Yours. Always. We work inside your HubSpot, your warehouse, your tools. Nothing gets locked up in ours.",
    ],
  ];
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <SectionHeader kicker="A few things people ask" title="Fair questions" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {qs.map(([q, a]) => (
            <div key={q} className="brutal-border bg-bone p-6">
              <div className="display text-xl">{q}</div>
              <p className="mt-3 text-ink/70">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 text-center">
        <div className="mono text-xs tracking-[0.2em] text-fire mb-5">
          READY WHEN YOU ARE
        </div>
        <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          Let's have a proper chat
          <br />
          <span className="italic">about your SaaS.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-ink/70">
          30 minutes. No slides. You show us the mess, we show you what we'd
          do about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:info@revlyn.io?subject=SaaS%20-%20intro%20call"
            className="brutal-border bg-ink text-paper px-6 py-4 display text-lg brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all"
          >
            info@revlyn.io →
          </a>
          <Link
            href="/use-cases"
            className="brutal-border bg-volt text-ink px-6 py-4 display text-lg hover:bg-paper transition-colors"
          >
            Other use cases
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────── */
function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mono text-xs tracking-[0.2em] text-fire mb-4">
        {kicker}
      </div>
      <h2 className="display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02]">
        {title}
      </h2>
    </div>
  );
}

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
