import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Bitscale in Action · Revlyn",
  description: "Ten plays we run on Bitscale for B2B revenue teams: sourcing, enrichment, intent, AI outreach and CRM sync into HubSpot. Built and operated by senior operators.",
  alternates: { canonical: "/partners/bitscale" },
  openGraph: {
    title: "Bitscale in Action · Revlyn",
    description: "The exact plays a senior operator installs on Bitscale so your HubSpot pipeline runs on signal, not seat count.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function BitscalePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <PrimerStrip />
      <Plays />
      <WorkflowDiagram />
      <PlaybookCatalog />
      <Deliverables />
      <Timeline />
      <Engagement />
      <FAQ />
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
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 w-[560px] h-[560px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,235,59,0.55), transparent 70%)",
          animation: "revlyn-float 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.35), transparent 70%)",
          animation: "revlyn-float 21s ease-in-out infinite reverse",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 pt-14 md:pt-20 pb-16 md:pb-24 relative">
        <div
          data-reveal
          className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-8"
        >
          <Link href="/" className="hover:text-fire transition-colors">
            Revlyn
          </Link>
          <span>/</span>
          <Link href="/partners" className="hover:text-fire transition-colors">
            Partners
          </Link>
          <span>/</span>
          <span className="text-ink">Bitscale in Action</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p
              data-reveal
              className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3"
            >
              <span className="inline-block h-px w-8 bg-ink" />
              Live plays · Bitscale on top of HubSpot
            </p>

            <h1
              data-reveal
              data-reveal-delay="0.05"
              className="display leading-[0.88] tracking-[-0.045em] text-[clamp(2.8rem,8.6vw,7rem)]"
            >
              A CRM that goes<br />
              <span className="relative inline-block">
                <span className="text-fire">looking</span>
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 h-[8px] w-full bg-volt/70"
                />
              </span>{" "}
              for revenue<span className="text-fire">.</span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="0.15"
              className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80"
            >
              Bitscale is the layer we bolt onto HubSpot so your pipeline stops
              waiting for reps to type names into a form. It watches the
              internet, enriches what it finds, and drops usable records right
              where your team already works. We install the plays. We run them.
              We kill the ones that stop earning.
            </p>

            <div
              data-reveal
              data-reveal-delay="0.25"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                data-magnetic="14"
                className="group inline-flex items-center gap-2 bg-ink text-paper border-2 border-ink px-5 py-3 mono text-[11px] uppercase tracking-[0.22em] hover:bg-fire transition-colors"
              >
                Book a Bitscale walkthrough
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href="https://bitscale.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 mono text-[11px] uppercase tracking-[0.22em] hover:bg-volt transition-colors"
              >
                Visit bitscale.ai ↗
              </a>
            </div>
          </div>

          {/* Live signal ledger */}
          <div data-reveal data-reveal-delay="0.25" className="lg:col-span-4" style={{ perspective: "1000px" }}>
            <div data-tilt="6" className="brutal-border bg-paper shadow-[10px_10px_0_0_var(--color-ink)] revlyn-glow-border overflow-hidden">
              {/* header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-ink bg-ink text-paper">
                <div className="mono text-[10px] uppercase tracking-[0.24em] flex items-center gap-2">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1 w-1 bg-fire rounded-full" />
                    <span className="h-1 w-1 bg-volt rounded-full" />
                    <span className="h-1 w-1 bg-paper/40 rounded-full" />
                  </span>
                  signal_ledger.log
                </div>
                <span className="mono text-[10px] uppercase tracking-[0.22em] inline-flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inset-0 rounded-full bg-fire opacity-80" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fire" />
                  </span>
                  live · last 4 h
                </span>
              </div>

              {/* column headers */}
              <div className="grid grid-cols-[46px_1fr_60px] gap-3 px-4 pt-3 pb-2 mono text-[9px] uppercase tracking-[0.22em] text-ink/50 border-b border-ink/10">
                <span>utc</span>
                <span>source · signal → action</span>
                <span className="text-right">score</span>
              </div>

              {/* rows */}
              <ul>
                {[
                  {
                    t: "14:02",
                    src: "LinkedIn Careers",
                    sig: "3 new AE roles posted, 30d window",
                    act: "→ create task · SDR outbound",
                    score: 92,
                    tone: "fire",
                  },
                  {
                    t: "13:47",
                    src: "BuiltWith",
                    sig: "Segment tag deployed on pricing page",
                    act: "→ enrich company · notify AE",
                    score: 78,
                    tone: "volt",
                  },
                  {
                    t: "12:31",
                    src: "Crunchbase",
                    sig: "Series B close, $22M, 2 days ago",
                    act: "→ upsert deal · lifecycle: MQL",
                    score: 88,
                    tone: "fire",
                  },
                  {
                    t: "11:15",
                    src: "GitHub",
                    sig: "Public repo migrated off HubSpot API v1",
                    act: "→ flag risk · CS owner",
                    score: 64,
                    tone: "ink",
                  },
                  {
                    t: "09:58",
                    src: "G2 Reviews",
                    sig: "Competitor review left last night",
                    act: "→ draft opener · queue for review",
                    score: 71,
                    tone: "volt",
                  },
                ].map((r, i) => (
                  <li
                    key={r.t}
                    className="grid grid-cols-[46px_1fr_60px] gap-3 items-center px-4 py-2.5 border-b border-ink/10 last:border-b-0 hover:bg-bone/60 transition-colors"
                    style={{ animation: `revlyn-tick 6s ${i * 0.5}s ease-out both` }}
                  >
                    <span className="mono text-[10px] tabular-nums text-ink/50">
                      {r.t}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 border border-ink/40 text-ink/70 shrink-0">
                          {r.src}
                        </span>
                      </div>
                      <div className="text-[12.5px] leading-snug mt-1 text-ink truncate">
                        {r.sig}
                      </div>
                      <div className="mono text-[10px] tracking-tight text-ink/60 truncate">
                        {r.act}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`mono text-[10px] tabular-nums font-semibold px-1.5 py-0.5 border-2 border-ink ${
                          r.tone === "fire"
                            ? "bg-fire text-paper"
                            : r.tone === "volt"
                              ? "bg-volt text-ink"
                              : "bg-ink text-paper"
                        }`}
                      >
                        {r.score}
                      </span>
                      <span className="mono text-[8px] uppercase tracking-[0.2em] text-ink/40">
                        /100
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* footer routing summary */}
              <div className="px-4 py-3 border-t-2 border-ink bg-bone">
                <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
                  <span>routed → HubSpot</span>
                  <span className="tabular-nums text-ink">
                    5<span className="text-ink/40"> / </span>
                    <span className="text-ink/60">142 today</span>
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-ink/10 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-fire"
                    style={{ width: "62%" }}
                  />
                  <div
                    className="absolute inset-y-0 bg-volt"
                    style={{ left: "62%", width: "24%" }}
                  />
                  <div
                    className="absolute inset-y-0 bg-ink"
                    style={{ left: "86%", width: "14%" }}
                  />
                </div>
                <div className="mt-1.5 flex items-center justify-between mono text-[9px] uppercase tracking-[0.22em] text-ink/50">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 bg-fire border border-ink" /> outbound
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 bg-volt border border-ink" /> nurture
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 bg-ink border border-ink" /> internal
                  </span>
                </div>
              </div>
            </div>

            {/* caption under card */}
            <p className="mt-3 mono text-[10px] uppercase tracking-[0.22em] text-ink/50 leading-relaxed">
              Sample ledger from a live install. Sources are public.<br />
              Scores are the operator's, not the model's.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── PRIMER STRIP ─────────────────────────────────────────────────── */
function PrimerStrip() {
  const items = [
    ["What Bitscale is", "An AI data + workflow platform for GTM teams. Think enrichment + agent workflows + outbound intelligence, in one workspace."],
    ["Where it sits", "Between the open internet and your CRM. It fetches, cleans, scores, then hands rows to HubSpot."],
    ["What Revlyn does", "We design the plays, wire them to your HubSpot properties, write the prompts, and keep them tuned every week."],
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-14 md:py-16 grid md:grid-cols-3 gap-8">
        {items.map(([t, s], i) => (
          <div key={t} data-reveal data-reveal-delay={i * 0.08} data-spotlight className="relative p-5 -m-5 rounded-sm">
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-fire mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="display text-2xl tracking-[-0.03em] mb-3">{t}</div>
            <p className="text-paper/75 leading-relaxed text-[15px]">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PLAYS: ten things we build ───────────────────────────────────── */
type Play = {
  code: string;
  title: string;
  sub: string;
  detail: string;
  outputs: string[];
  tone: "paper" | "volt" | "fire" | "ink";
  viz: (colorText: string) => React.ReactNode;
};

const PLAYS: Play[] = [
  {
    code: "P01",
    title: "Sourcing on a live ICP",
    sub: "The ICP is a query, not a spreadsheet you re-buy every quarter.",
    detail:
      "We translate your ICP into a Bitscale query: firmographics, tech stack, hiring signals, geography. Bitscale re-runs it on a schedule. New matches drop into HubSpot as companies with the right owner and lifecycle stage.",
    outputs: ["Company records", "Owner routing", "Lifecycle: Lead"],
    tone: "paper",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <rect x="8" y="14" width="90" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="34" width="140" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="54" width="70" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <g>
          <rect x="120" y="78" width="90" height="30" fill="#ff5722" stroke="#0a0a0a" strokeWidth="1.5" />
          <text x="165" y="98" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#fff" fontWeight="700">142 MATCHES</text>
        </g>
        <path d="M78 68 C 100 90, 100 88, 120 92" stroke="currentColor" strokeWidth="1.2" fill="none" strokeDasharray="3 3" className="animate-dash" />
      </svg>
    ),
  },
  {
    code: "P02",
    title: "Enrichment for the records that matter",
    sub: "Not every field on every row. The fields your workflows actually read.",
    detail:
      "We pick the ~15 fields your reps and workflows consume, then let Bitscale keep them fresh. Firmographics, technographics, funding, employee count deltas, primary contact roles. Old records get a one-time backfill.",
    outputs: ["15 HubSpot properties", "Backfill run", "Weekly refresh"],
    tone: "volt",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        {[
          ["employees", 65],
          ["stack", 90],
          ["funding", 40],
          ["intent", 78],
          ["hiring", 55],
        ].map(([l, w], i) => (
          <g key={l as string} transform={`translate(8 ${10 + i * 20})`}>
            <text x="0" y="10" fontFamily="monospace" fontSize="9" fill="currentColor">{l as string}</text>
            <rect x="60" y="1" width="140" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="60" y="1" width={w as number} height="10" fill="currentColor" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    code: "P03",
    title: "Intent + trigger monitoring",
    sub: "The world is noisy. We tell it what counts.",
    detail:
      "Job posts for roles that predict a purchase. Funding rounds in your ICP. Tech installs (Segment, Snowflake, Salesforce). Press mentions of a competitor. Each fires a HubSpot task with the reason attached, so the rep opens their inbox with context, not a name.",
    outputs: ["Trigger library", "Reason strings", "Task auto-create"],
    tone: "fire",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <circle cx="30" cy="60" r="6" fill="currentColor" />
        <circle cx="30" cy="60" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="30" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
        {["JOB", "FUND", "STACK", "NEWS"].map((l, i) => (
          <g key={l} transform={`translate(${80 + (i % 2) * 70} ${20 + Math.floor(i / 2) * 45})`}>
            <rect width="60" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="30" y="18" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="currentColor" fontWeight="700">{l}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    code: "P04",
    title: "Contact discovery + waterfall",
    sub: "Who actually makes the call. Not a director of interns.",
    detail:
      "For each qualified company, Bitscale runs a waterfall to find the buying committee. Titles are mapped to your persona list. Emails are verified. Slack alerts fire in your rep channel with a 90-second brief.",
    outputs: ["Persona map", "Verified emails", "Slack brief"],
    tone: "paper",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={10 + i * 12} y={10 + i * 22} width={180 - i * 24} height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        ))}
        <text x="14" y="21" fontFamily="monospace" fontSize="9" fill="currentColor">CEO / Founder</text>
        <text x="26" y="43" fontFamily="monospace" fontSize="9" fill="currentColor">VP Revenue</text>
        <text x="38" y="65" fontFamily="monospace" fontSize="9" fill="currentColor">Head of RevOps</text>
        <text x="50" y="87" fontFamily="monospace" fontSize="9" fill="currentColor">Marketing Ops</text>
      </svg>
    ),
  },
  {
    code: "P05",
    title: "Agent-drafted outreach that sounds like you",
    sub: "The email arrives with a reason for existing.",
    detail:
      "We build the prompt library: tone, structure, forbidden phrases, proof snippets. Bitscale agents draft opener + one follow-up per trigger. Everything routes through a HubSpot approval queue for the first two weeks, then to reps with review gates.",
    outputs: ["Prompt library", "Approval queue", "Reply routing"],
    tone: "ink",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <rect x="10" y="10" width="200" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="18" y="26" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.7">SUBJECT · Segment install last Tuesday?</text>
        {[
          "Saw you shipped Segment on the pricing page.",
          "Usually means an attribution rewrite is coming.",
          "We rebuilt Datapel's HubSpot in two weeks:",
          "  19% → 68% MoM lead → SAL.",
          "Worth 20 min?",
        ].map((line, i) => (
          <text key={i} x="18" y={44 + i * 12} fontFamily="monospace" fontSize="8" fill="currentColor">{line}</text>
        ))}
      </svg>
    ),
  },
  {
    code: "P06",
    title: "Account research briefs",
    sub: "One page. Everything a rep needs before the call.",
    detail:
      "Bitscale composes a live brief per account: what they sell, who runs GTM, funding, hiring, tech stack, recent moves, competitors. Pinned to the HubSpot company record. Refreshed the morning of any scheduled meeting.",
    outputs: ["One-page brief", "Pre-meeting refresh", "Company timeline"],
    tone: "paper",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <rect x="10" y="10" width="90" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="108" y="10" width="102" height="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="108" y="64" width="102" height="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {[20, 30, 40, 50, 60, 70, 80, 90].map((y) => (
          <line key={y} x1="16" y1={y} x2="94" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        ))}
        <text x="112" y="24" fontFamily="monospace" fontSize="9" fill="currentColor" fontWeight="700">GTM MOTION</text>
        <text x="112" y="78" fontFamily="monospace" fontSize="9" fill="currentColor" fontWeight="700">RECENT MOVES</text>
      </svg>
    ),
  },
  {
    code: "P07",
    title: "Deal signal monitoring",
    sub: "Open deals aren't sleeping. Bitscale watches them for you.",
    detail:
      "For every open opportunity, we set up a watch: leadership changes, funding, layoffs, new integrations. Fires a HubSpot task on the deal owner with the change and a suggested next step. Stale deals get automatic reactivation prompts.",
    outputs: ["Open-deal watchlist", "Reactivation prompts", "Deal notes"],
    tone: "volt",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <path d="M10 90 L 50 70 L 90 78 L 130 40 L 170 55 L 210 20" stroke="currentColor" strokeWidth="1.8" fill="none" />
        {[[50, 70], [130, 40], [210, 20]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="#ff5722" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx={x} cy={y} r="10" fill="none" stroke="#ff5722" strokeWidth="0.6" opacity="0.5">
              <animate attributeName="r" values="4;12;4" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
            </circle>
          </g>
        ))}
      </svg>
    ),
  },
  {
    code: "P08",
    title: "ABM tier + territory build",
    sub: "Named accounts, tiered by value, mapped to a rep.",
    detail:
      "We segment your target list into Tier 1/2/3, define the play per tier (multi-thread, sequence, nurture), and hand each tier to Bitscale for signal watch. Territory changes ripple back into HubSpot ownership automatically.",
    outputs: ["Tier definitions", "Territory rules", "Play-per-tier"],
    tone: "paper",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        {["T1", "T2", "T3"].map((l, i) => (
          <g key={l} transform={`translate(${10 + i * 70} 12)`}>
            <rect width="60" height="96" fill={i === 0 ? "#ff5722" : i === 1 ? "#ffeb3b" : "none"} stroke="currentColor" strokeWidth="1.5" />
            <text x="30" y="20" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={i === 0 ? "#fff" : "#0a0a0a"} fontWeight="800">{l}</text>
            <text x="30" y="60" textAnchor="middle" fontFamily="Inter" fontSize="22" fill={i === 0 ? "#fff" : "#0a0a0a"} fontWeight="800">
              {i === 0 ? "24" : i === 1 ? "86" : "312"}
            </text>
            <text x="30" y="86" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={i === 0 ? "#fff" : "#0a0a0a"}>accounts</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    code: "P09",
    title: "CRM hygiene, on a schedule",
    sub: "The dirtiest CRM is the one nobody fixes.",
    detail:
      "Dedupe, standardise, retire dead records, correct titles, fix domains, patch missing owners. Bitscale runs the checks nightly. We approve the diffs weekly. Reps stop yelling at Salesforce, sorry, HubSpot.",
    outputs: ["Nightly dedupe", "Weekly diff report", "Retire rules"],
    tone: "ink",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(10 ${10 + i * 20})`}>
            <rect width="200" height="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <rect width={40 + i * 30} height="14" fill="currentColor" opacity={i === 2 ? "0.2" : "0.9"} />
            {i === 2 && <text x="46" y="11" fontFamily="monospace" fontSize="9" fill="currentColor">dedupe running…</text>}
          </g>
        ))}
      </svg>
    ),
  },
  {
    code: "P10",
    title: "Reporting that a founder can read",
    sub: "One dashboard. Live. No screenshotting from four tabs.",
    detail:
      "We wire Bitscale outputs into a single HubSpot dashboard: sources fired, triggers routed, accounts touched, meetings held, pipeline created. Weekly note goes to founders in plain English. No screenshotted charts, ever.",
    outputs: ["HubSpot dashboard", "Weekly note", "Source-of-truth metrics"],
    tone: "fire",
    viz: () => (
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <rect x="10" y="10" width="200" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {[
          [22, 60],
          [50, 40],
          [78, 70],
          [106, 30],
          [134, 55],
          [162, 22],
          [190, 45],
        ].map(([x, h], i) => (
          <rect key={i} x={x} y={100 - h} width="16" height={h} fill={i % 2 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" />
        ))}
      </svg>
    ),
  },
];

function Plays() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-12 grid lg:grid-cols-[1fr_1fr] gap-8 items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              The catalog · Ten plays we install
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95]">
              What we actually build<br />
              <span className="text-fire">on top of Bitscale.</span>
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed max-w-lg">
            You do not need all ten. Most teams start with three, get them
            humming for two months, then add the next three. Everything below is
            a real thing we have shipped, not a slide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PLAYS.map((p, i) => {
            const bg =
              p.tone === "volt"
                ? "bg-volt text-ink"
                : p.tone === "fire"
                  ? "bg-fire text-paper"
                  : p.tone === "ink"
                    ? "bg-ink text-paper"
                    : "bg-paper text-ink";
            return (
              <article
                key={p.code}
                data-reveal
                data-reveal-delay={(i % 4) * 0.05}
                data-spotlight
                data-tilt="5"
                className={`group relative brutal-border revlyn-glow-border ${bg} p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-ink)]`}
              >

                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)",
                  }}
                />
                <div className="relative flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] opacity-80">
                  <span>Play · {p.code}</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                </div>
                <h3 className="relative display text-2xl md:text-3xl tracking-[-0.03em] leading-[1.05] mt-4">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-[13px] opacity-80 italic">
                  {p.sub}
                </p>

                <div className="relative mt-5 border-2 border-current/40 aspect-[220/120] w-full">
                  <div className="w-full h-full">{p.viz("currentColor")}</div>
                </div>

                <p className="relative mt-5 text-[14px] leading-relaxed opacity-90">
                  {p.detail}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.outputs.map((o) => (
                    <span
                      key={o}
                      className="mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 border-2 border-current"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── WORKFLOW DIAGRAM ─────────────────────────────────────────────── */
function WorkflowDiagram() {
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p data-reveal className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
            One workflow, end to end
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.1"
            className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl"
          >
            Signal walks in.<br />
            <span className="text-fire">A qualified meeting walks out.</span>
          </h2>
        </div>

        <div className="brutal-border bg-paper p-6 md:p-10">
          <svg viewBox="0 0 900 320" className="w-full h-auto" aria-hidden="true">
            <defs>
              <pattern id="wgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M24 0H0V24" fill="none" stroke="#0a0a0a" strokeOpacity="0.06" strokeWidth="0.5" />
              </pattern>
              <marker id="warrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#0a0a0a" />
              </marker>
            </defs>
            <rect width="900" height="320" fill="url(#wgrid)" />

            {[
              { x: 20, label: "Signal", sub: "Hiring · Funding · Install", tone: "#ffeb3b" },
              { x: 200, label: "Bitscale", sub: "Enrich · Score · Draft", tone: "#0a0a0a" },
              { x: 400, label: "Guardrails", sub: "Prompt review · Approve", tone: "#ffffff" },
              { x: 600, label: "HubSpot", sub: "Contact · Deal · Task", tone: "#ff5722" },
              { x: 780, label: "Rep", sub: "One-click send", tone: "#ffffff" },
            ].map((n, i) => (
              <g key={n.label} transform={`translate(${n.x} 90)`}>
                <rect width="120" height="120" fill={n.tone} stroke="#0a0a0a" strokeWidth="2" />
                <text x="60" y="52" textAnchor="middle" fontFamily="Inter" fontSize="18" fill={n.tone === "#0a0a0a" || n.tone === "#ff5722" ? "#fff" : "#0a0a0a"} fontWeight="800" letterSpacing="-0.02em">{n.label}</text>
                <text x="60" y="76" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={n.tone === "#0a0a0a" || n.tone === "#ff5722" ? "#fff" : "#0a0a0a"} opacity="0.85">{n.sub}</text>
                <text x="0" y="-8" fontFamily="monospace" fontSize="10" fill="#0a0a0a" fontWeight="700">STEP {String(i + 1).padStart(2, "0")}</text>
              </g>
            ))}

            {[140, 320, 520, 720].map((x, i) => (
              <g key={x}>
                <line x1={x} y1="150" x2={x + 60} y2="150" stroke="#0a0a0a" strokeWidth="1.6" markerEnd="url(#warrow)" strokeDasharray="4 3" className="animate-dash" />
                <circle r="4" fill="#ff5722">
                  <animateMotion dur={`${2 + i * 0.2}s`} repeatCount="indefinite" path={`M${x},150 L${x + 60},150`} />
                </circle>
              </g>
            ))}
          </svg>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              ["Runs on", "A schedule you set. Hourly, daily, weekly, per source."],
              ["Owned by", "One senior Revlyn operator. Not a shared queue."],
              ["Measured by", "Meetings held, not emails sent."],
            ].map(([k, v]) => (
              <div key={k} className="border-2 border-ink p-4 bg-bone">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
                  {k}
                </div>
                <div className="mt-1 text-[15px] leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PLAYBOOK CATALOG (artifact peeks) ────────────────────────────── */
function PlaybookCatalog() {
  const books = [
    {
      title: "Outbound: hiring-signal opener",
      pages: 6,
      tag: "Outbound",
      trigger: "Company posts 3+ AE roles in 30 days",
      steps: [
        "Bitscale detects the hiring signal on LinkedIn + careers page",
        "Enrichment: pull ICP fit score, tech stack, funding stage",
        "AI drafts opener referencing the specific roles hired",
        "Task auto-created in HubSpot for the owning AE",
        "3-touch cadence: email → LinkedIn → email",
      ],
      metric: "Reply rate 11.4%",
    },
    {
      title: "ABM Tier-1 multi-thread cadence",
      pages: 9,
      tag: "ABM",
      trigger: "Named account enters active buying window",
      steps: [
        "Map 5 personas per account: Champion, EB, Users, Finance, IT",
        "Bitscale enriches each with intent + engagement history",
        "Sequenced touches staggered across 21 days",
        "Rep gets a HubSpot task with a written next-best-action",
        "Meetings booked route to the correct AE by territory",
      ],
      metric: "1.8 meetings per account",
    },
    {
      title: "Reactivation for stalled deals >45d",
      pages: 4,
      tag: "Deals",
      trigger: "Deal untouched for 45 days in stage 3+",
      steps: [
        "Bitscale scans for a fresh signal (news, hire, product launch)",
        "If signal found, generate a specific re-open message",
        "If no signal, generate a graceful close-lost with a return path",
        "Update HubSpot deal stage + note the reason",
      ],
      metric: "22% reopen rate",
    },
    {
      title: "Expansion play on new integration",
      pages: 5,
      tag: "Expansion",
      trigger: "Customer connects a new integration in-product",
      steps: [
        "Product event lands in HubSpot via webhook",
        "Bitscale enriches the account with usage depth",
        "CSM gets a task with a written expansion angle",
        "Auto-drafted email tied to the integration adopted",
      ],
      metric: "1.4x net revenue retention lift",
    },
    {
      title: "Enrichment field spec",
      pages: 8,
      tag: "Ops",
      trigger: "New company or contact created in HubSpot",
      steps: [
        "18 fields enriched on Company: size, stage, tech, funding",
        "9 fields enriched on Contact: seniority, function, tenure",
        "Dedupe against existing records before write",
        "Ownership routing runs on the enriched record",
      ],
      metric: "94% record completeness",
    },
    {
      title: "Prompt library · brand voice",
      pages: 12,
      tag: "AI",
      trigger: "Any AI-generated message before send",
      steps: [
        "System prompt encodes your voice, tone, banned phrases",
        "Persona-specific prompts for CEO, VP Sales, IC",
        "Fact-check step: no invented case studies or claims",
        "Human approval queue for the first 30 days",
      ],
      metric: "0 hallucinated claims shipped",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10 grid lg:grid-cols-[1fr_1fr] gap-8 items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              Playbooks · Written, not verbal
            </p>
            <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95]">
              Every play ships<br />
              <span className="text-fire">with a paper trail.</span>
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed max-w-lg">
            Because when a rep leaves, the play should not leave with them. Each
            playbook lives in your Notion or Google Drive and gets versioned.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              data-reveal-delay={i * 0.05}
              data-spotlight
              data-tilt="4"
              className="group relative brutal-border revlyn-glow-border bg-bone p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-ink)] flex flex-col"
            >

              <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-ink/60 mb-3">
                <span>Playbook · {String(i + 1).padStart(2, "0")}</span>
                <span>{b.pages}pp</span>
              </div>
              <div className="border-2 border-ink bg-paper p-4 relative overflow-hidden flex-1 flex flex-col">
                <div
                  aria-hidden
                  className="absolute right-0 top-0 h-full w-[8px] bg-ink"
                />
                <div className="mono text-[9px] uppercase tracking-[0.22em] text-fire mb-2">
                  {b.tag}
                </div>
                <div className="display text-[18px] tracking-[-0.02em] leading-tight mb-4 pr-3">
                  {b.title}
                </div>

                <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50 mb-1">
                  Trigger
                </div>
                <div className="text-[13px] text-ink leading-snug mb-4 pr-3">
                  {b.trigger}
                </div>

                <div className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50 mb-2">
                  What runs
                </div>
                <ol className="space-y-1.5 mb-4 pr-3 flex-1">
                  {b.steps.map((s, k) => (
                    <li key={k} className="flex gap-2 text-[12.5px] leading-snug text-ink/85">
                      <span className="mono text-[10px] text-fire pt-[3px] shrink-0">
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>

                <div className="border-t border-ink/15 pt-2 flex items-center justify-between">
                  <span className="mono text-[9px] uppercase tracking-[0.22em] text-ink/50">
                    Observed
                  </span>
                  <span className="mono text-[11px] text-ink font-semibold">
                    {b.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DELIVERABLES ─────────────────────────────────────────────────── */
function Deliverables() {
  const rows: [string, string][] = [
    ["Bitscale workspace", "Configured against your HubSpot pipelines, lifecycle stages, and property schema."],
    ["Signal library", "8–12 curated triggers with reason strings your reps understand."],
    ["Prompt library", "Written, versioned, brand-safe. No hallucinated case studies."],
    ["HubSpot wiring", "Two-way sync, dedupe, ownership rules, task auto-create, approval queues."],
    ["Playbooks", "One document per play. What runs, when, why, what a rep does next."],
    ["Dashboard", "A single HubSpot report. Sources, triggers, meetings, pipeline created."],
    ["Weekly note", "Plain English. Sent Friday. Read by founders on Saturday morning coffee."],
  ];
  return (
    <section className="border-b-2 border-ink bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
              Deliverables · What lands
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-[-0.035em] leading-tight">
              You leave with a system,<br />not a slide deck<span className="text-fire">.</span>
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Everything below is yours the day the engagement starts. Nothing
              is locked behind our seat.
            </p>
          </div>

          <div className="brutal-border bg-paper divide-y-2 divide-ink">
            {rows.map(([k, v], i) => (
              <div
                key={k}
                data-reveal
                data-reveal-delay={i * 0.04}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[220px_1fr] group hover:bg-volt/40 transition-colors"
              >
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-ink/70 p-4 border-r-2 border-ink bg-bone group-hover:bg-volt">
                  {k}
                </div>
                <div className="p-4 text-ink text-[15px] leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TIMELINE ─────────────────────────────────────────────────────── */
function Timeline() {
  const weeks = [
    { w: "Week 1", t: "Wire it in", d: "HubSpot audit for the fields Bitscale needs. Workspace configured. First two plays scoped." },
    { w: "Week 2", t: "First plays live", d: "Sourcing + enrichment + one trigger running through the approval queue. Reps trained in 30 minutes." },
    { w: "Week 3", t: "Loosen the reins", d: "Approval queue moves to spot-check. Reason strings tuned. Prompt library edits based on reply quality." },
    { w: "Week 4", t: "Meetings show up", d: "First meetings booked from Bitscale-sourced signal. Dashboard live. Weekly note begins." },
  ];
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
            Timeline · From zero to signal
          </p>
          <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            Four weeks<span className="text-fire">.</span> Then it runs.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {weeks.map((w, i) => (
            <div
              key={w.w}
              data-reveal
              data-reveal-delay={i * 0.06}
              data-tilt="6"
              data-spotlight
              className={`brutal-border revlyn-glow-border p-5 relative overflow-hidden ${i === 3 ? "bg-fire text-paper" : "bg-bone"}`}
            >

              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                {w.w}
              </div>
              <div className="display text-2xl tracking-[-0.03em] mt-2 leading-tight">
                {w.t}
              </div>
              <div className="mt-3 text-[14px] leading-snug opacity-90">
                {w.d}
              </div>
              <div className="absolute top-0 right-0 mono text-[36px] leading-none opacity-15 pr-2 pt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ENGAGEMENT ───────────────────────────────────────────────────── */
function Engagement() {
  const modes = [
    {
      t: "One-time install",
      s: "You have a Bitscale seat. You want it wired properly. We come in, install the plays, hand over playbooks and dashboards.",
      cta: "Best if you already run outbound in-house.",
      tone: "bg-paper",
    },
    {
      t: "Embedded in HubSpot as a Service",
      s: "The default. Bitscale is one lane inside a full HubSpot operating engagement. Same senior operator runs both.",
      cta: "Best if your CRM and Bitscale should think as one system.",
      tone: "bg-volt",
    },
    {
      t: "Signal-only retainer",
      s: "You do the outreach yourselves. We keep Bitscale sourcing, enriching, and routing signal into HubSpot every week.",
      cta: "Best for teams with a strong AE bench.",
      tone: "bg-fire text-paper",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
            Ways to work together
          </p>
          <h2 className="display text-3xl md:text-5xl tracking-[-0.035em] leading-[0.95] max-w-3xl">
            Three ways in<span className="text-fire">.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {modes.map((m, i) => (
            <div
              key={m.t}
              data-reveal
              data-reveal-delay={i * 0.08}
              data-spotlight
              data-tilt="5"
              className={`brutal-border revlyn-glow-border text-ink ${m.tone} p-6 flex flex-col`}
            >

              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                Mode · {String(i + 1).padStart(2, "0")}
              </div>
              <div className="display text-2xl md:text-[26px] tracking-[-0.03em] mt-2 leading-tight">
                {m.t}
              </div>
              <p className="mt-4 text-[14px] leading-relaxed opacity-90">
                {m.s}
              </p>
              <div className="mt-6 mono text-[11px] uppercase tracking-[0.2em] border-t-2 border-current pt-4 opacity-85">
                {m.cta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    ["Do we need a Bitscale seat before we start?", "No. We help you decide the right seat size after the first walkthrough. Most teams start on a smaller plan than they think."],
    ["What if we already have Clay or Apollo?", "Bitscale plays nicely alongside both. Sometimes we replace, sometimes we co-exist. We tell you honestly on the first call."],
    ["Who writes the prompts?", "A senior operator on our side, with your product marketer in the room. Never an intern, never fully agent-generated."],
    ["Does the agent send emails on its own?", "Only after two weeks of approval-queue review and only through your reps' inboxes with review gates. Reply handling is human."],
    ["What happens if a play stops working?", "We kill it. Every play has a kill criterion written in advance. No sunk-cost automations left running for months."],
  ];
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
              Common questions
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-[-0.035em] leading-tight">
              Things founders ask us<br />before signing<span className="text-fire">.</span>
            </h2>
          </div>
          <div className="brutal-border bg-bone divide-y-2 divide-ink">
            {faqs.map(([q, a], i) => (
              <details
                key={q}
                className="group p-5 open:bg-paper transition-colors"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer flex items-start gap-4 list-none">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-xl md:text-2xl tracking-[-0.02em] leading-tight flex-1">
                    {q}
                  </span>
                  <span className="mono text-[18px] leading-none pt-1 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink/80 leading-relaxed pl-[calc(20px+1rem)]">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative border-b-2 border-ink bg-fire text-paper overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 relative grid lg:grid-cols-[2fr_1fr] gap-10 items-end">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.22em] opacity-80 mb-4">
            Talk to the operator, not a form
          </p>
          <h2 className="display text-[clamp(2.4rem,6.5vw,5.5rem)] tracking-[-0.045em] leading-[0.9]">
            Bring us the ICP.<br />
            We will show you what<br />
            <span className="italic underline decoration-ink decoration-[3px] underline-offset-[10px]">
              Bitscale actually finds.
            </span>
          </h2>
        </div>
        <div className="space-y-3">
          <BookCallButton className="group flex items-center justify-between gap-3 bg-ink text-paper border-2 border-ink px-5 py-4 mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors">
            Book a 20-minute walkthrough
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </BookCallButton>
          <Link
            href="/partners/bitscale"
            className="group flex items-center justify-between gap-3 bg-transparent text-paper border-2 border-paper px-5 py-4 mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors"
          >
            Read the partnership terms
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
          <a
            href="mailto:info@revlyn.io"
            className="group flex items-center justify-between gap-3 bg-transparent text-paper border-2 border-paper px-5 py-4 mono text-[11px] uppercase tracking-[0.22em] hover:bg-paper hover:text-ink transition-colors"
          >
            info@revlyn.io
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ✉
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER (compact) ─────────────────────────────────────────────── */
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
