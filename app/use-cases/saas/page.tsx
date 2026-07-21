import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
const saasHero = "/saas-hero.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";

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
            <a
              href="mailto:info@revlyn.io?subject=SaaS%20-%20intro%20call"
              className="brutal-border bg-ink text-paper px-5 py-3 display text-lg brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all"
            >
              Book a call →
            </a>
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
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src={revlynWordmark} alt="Revlyn" className="h-7 invert" />
          <p className="mt-4 text-paper/60 max-w-xs">
            An extended CRM, RevOps, GTM and AI team for B2B startups.
          </p>
        </div>
        <div>
          <div className="mono text-xs tracking-widest text-paper/50">
            EXPLORE
          </div>
          <ul className="mt-3 space-y-2 text-paper/85">
            <li>
              <Link href="/hubspot-as-a-service" className="hover:text-fire">
                HubSpot as a Service
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:text-fire">
                Use cases
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-fire">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-fire">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mono text-xs tracking-widest text-paper/50">
            SAY HELLO
          </div>
          <ul className="mt-3 space-y-2 text-paper/85">
            <li>
              <a href="mailto:info@revlyn.io" className="hover:text-fire">
                info@revlyn.io
              </a>
            </li>
            <li>+91 7503044000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 text-center text-paper/50 mono text-xs">
        © {new Date().getFullYear()} Revlyn. All rights reserved.
      </div>
    </footer>
  );
}
