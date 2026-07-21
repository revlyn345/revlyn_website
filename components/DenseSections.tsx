/* ═══════════════════════════════════════════════════════════════
   REVLYN · DENSE SECTIONS (Linear / Vercel energy)
   Ultra-detailed spec sheets, operating rhythm, proof ledger.
   Every number, tool and deliverable named. Nothing decorative.
   ═══════════════════════════════════════════════════════════════ */

/* ─── shared atoms ─────────────────────────────────────────── */
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center h-5 px-1.5 border border-ink/25 bg-bone/60 mono text-[10px] rounded-[3px] align-middle">
      {children}
    </span>
  );
}
function Dot({ tone = "fire" }: { tone?: "fire" | "volt" | "ink" | "mute" }) {
  const c =
    tone === "fire" ? "bg-fire" : tone === "volt" ? "bg-volt" : tone === "mute" ? "bg-ink/25" : "bg-ink";
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${c} shrink-0`} />;
}
function Row({ k, v, note }: { k: string; v: React.ReactNode; note?: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-2.5 border-t border-ink/10 first:border-t-0 text-[13.5px] leading-snug">
      <div className="mono text-ink/50 pt-0.5">{k}</div>
      <div>
        <div className="text-ink">{v}</div>
        {note && <div className="mt-1 text-[12px] text-ink/50 leading-snug">{note}</div>}
      </div>
    </div>
  );
}
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center h-6 px-2 border border-ink/15 bg-paper mono text-[10.5px] rounded-full text-ink/70 hover:border-ink/40 transition-colors">
      {children}
    </span>
  );
}
function SectionHead({
  eyebrow, title, sub, count,
}: { eyebrow: string; title: string; sub: string; count?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="flex items-center gap-3 mb-5">
        <span className="mono text-ink/40">{eyebrow}</span>
        <span className="h-px flex-1 bg-ink/10" />
        {count && <span className="mono text-ink/40">{count}</span>}
      </div>
      <h2 className="display text-[44px] md:text-[56px] leading-[0.95] tracking-[-0.03em] text-ink">
        {title}
      </h2>
      <p className="mt-4 text-[16px] text-ink/60 max-w-xl leading-relaxed">{sub}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · SERVICES SPEC SHEETS
   Four disciplines, each with: what it is, who it's for, what
   we deliver, tools, weekly rhythm, sample artifact, price band.
   ═══════════════════════════════════════════════════════════════ */

type Spec = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  who: string;
  problem: string;
  outcomes: string[];
  deliverables: { w: string; t: string }[];
  tools: string[];
  artifact: string;
  cadence: string;
  price: string;
  accent: "fire" | "volt";
};

const SERVICES: Spec[] = [
  {
    id: "crm",
    code: "S-01",
    name: "CRM Architecture",
    tagline: "One schema. One source of truth. Reportable from day one.",
    who: "Founders and Heads of RevOps rebuilding HubSpot / Salesforce after 18–36 months of accidental design.",
    problem: "Duplicate contacts, orphaned deals, custom properties nobody remembers creating, and reports that don't tie back to revenue.",
    outcomes: [
      "Single object model across Contacts, Companies, Deals, Products, Subscriptions",
      "Lifecycle stages that map 1:1 to your funnel, not HubSpot defaults",
      "Every field owned by a team, with a deprecation date if unused for 90 days",
      "Weekly hygiene job removing duplicates, closing stale deals, resurfacing missing data",
    ],
    deliverables: [
      { w: "W1", t: "Portal audit + property inventory (avg. 340 fields reviewed)" },
      { w: "W2", t: "Object model + lifecycle rewrite, migration plan signed off" },
      { w: "W3", t: "Migration executed in sandbox, tested against 6 QA scenarios" },
      { w: "W4", t: "Cutover, team training, reporting rebuilt on new schema" },
    ],
    tools: ["HubSpot", "Salesforce", "Attio", "dbt", "Hightouch", "Segment"],
    artifact: "The Portal Blueprint — a 40-page PDF documenting every object, field, workflow and owner.",
    cadence: "Tues + Thurs standup · Fri demo",
    price: "From $18k · 4–6 weeks",
    accent: "fire",
  },
  {
    id: "revops",
    code: "S-02",
    name: "RevOps",
    tagline: "The operating layer between GTM and the P&L.",
    who: "Heads of Revenue and CFOs who want forecast accuracy above 85% and a pipeline number they can defend in a board meeting.",
    problem: "Forecast swings weekly. Pipeline stage definitions live in a Slack thread. Nobody agrees on what a Qualified Opportunity actually is.",
    outcomes: [
      "MEDDPICC (or SPICED) qualification enforced at the deal level, not the rep level",
      "Bottoms-up forecast rebuilt weekly from stage-weighted pipeline + rep commit",
      "Territory + quota model tied to segment, ACV band and sales motion",
      "Comp plans modelled against 3 pipeline scenarios before rollout",
    ],
    deliverables: [
      { w: "W1", t: "Funnel definition workshop, stage exit criteria written" },
      { w: "W2", t: "Forecast model v1 in Sheets, reconciled to CRM weekly" },
      { w: "W3", t: "Territory + quota carve, ramp curves per segment" },
      { w: "W4+", t: "Ongoing: forecast call facilitation, deal desk, QBRs" },
    ],
    tools: ["Clari", "Gong", "Weflow", "BoostUp", "Looker", "Metabase"],
    artifact: "The Revenue Operating Model — a live doc with funnel, forecast, comp and headcount plan in one place.",
    cadence: "Mon forecast · Thu deal desk · monthly board pack",
    price: "From $12k / mo · retainer",
    accent: "volt",
  },
  {
    id: "gtm",
    code: "S-03",
    name: "GTM Design",
    tagline: "Segment, motion, message, comp — designed together.",
    who: "Founders launching a second product, moving upmarket, or expanding into a new region and needing the motion redesigned end-to-end.",
    problem: "Marketing writes for one ICP, sales sells to another, CS renews a third. The pricing page contradicts the deck. The demo doesn't match the discovery script.",
    outcomes: [
      "ICP defined at Tier-A / Tier-B / Tier-C with named accounts, not personas",
      "Sales motion mapped: inbound / outbound / PLG / partner — with routing rules",
      "Messaging house: one primary claim, three proof points, per segment",
      "Pricing & packaging tested against 3 alternative frames before launch",
    ],
    deliverables: [
      { w: "W1–2", t: "ICP research: 20 customer + 10 lost-deal interviews" },
      { w: "W3", t: "Positioning workshop, messaging house v1" },
      { w: "W4", t: "Motion + routing rules, SDR / AE scripts rebuilt" },
      { w: "W5–6", t: "Pricing test, launch plan, enablement rollout" },
    ],
    tools: ["Notion", "Attio", "Common Room", "Clay", "Apollo", "LinkedIn Sales Nav"],
    artifact: "The GTM Blueprint — 60 pages: ICP, motion, message, pricing, launch calendar.",
    cadence: "Weekly working session · async in Notion",
    price: "From $28k · 6–8 weeks",
    accent: "fire",
  },
  {
    id: "ai",
    code: "S-04",
    name: "AI Infrastructure",
    tagline: "Agents that actually earn their seat.",
    who: "Revenue teams under headcount pressure who need AI to do real work — not summarise Slack.",
    problem: "You bought four AI SDR tools. None are running. The ones that do run send emails your VP would fire a human for writing.",
    outcomes: [
      "Agent-per-job architecture: research, enrich, route, draft, follow-up, log",
      "Every agent has a scorecard: precision, recall, cost per action, human override rate",
      "Human-in-the-loop by default; autonomy earned per agent based on 30-day scorecard",
      "Full observability: prompt, context, tool calls, output, cost — every run",
    ],
    deliverables: [
      { w: "W1", t: "Job-to-be-done audit, 8–12 automatable jobs ranked by ROI" },
      { w: "W2–3", t: "Top 3 agents built + wired into CRM, tested on shadow traffic" },
      { w: "W4", t: "Scorecards live, escalation paths defined, rollout to team" },
      { w: "W5+", t: "Weekly agent review, retrain, retire, add new" },
    ],
    tools: ["OpenAI", "Anthropic", "Clay", "n8n", "Braintrust", "LangSmith"],
    artifact: "The Agent Ledger — every agent with its job, scorecard, cost and last review.",
    cadence: "Weekly agent review · monthly ROI report",
    price: "From $15k / mo · retainer",
    accent: "volt",
  },
];

export function ServicesSpec() {
  return (
    <section className="bg-paper text-ink border-t border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHead
          eyebrow="§ 03 · Services"
          count="4 disciplines"
          title="Four disciplines. One operating layer."
          sub="Each engagement ships an artifact you'd hand to a new VP on day one. Below: what we do, who it's for, and exactly what lands in your Drive."
        />

        {/* index rail */}
        <div className="mb-10 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#svc-${s.id}`}
              className="group inline-flex items-center gap-2 h-9 px-3 border border-ink/15 hover:border-ink transition-colors rounded-full"
            >
              <span className="mono text-[10.5px] text-ink/50 group-hover:text-ink">{s.code}</span>
              <span className="text-[13px] text-ink">{s.name}</span>
              <span className="text-ink/30 group-hover:text-ink transition-colors">↗</span>
            </a>
          ))}
        </div>

        <div className="grid gap-px bg-ink/10 border border-ink/10">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} spec={s} idx={i} />
          ))}
        </div>

        {/* footnotes */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-[11.5px] text-ink/50 leading-relaxed">
          <div><span className="mono text-ink/70">¹</span> All engagements include a named Principal + Operator. No pods rotating monthly.</div>
          <div><span className="mono text-ink/70">²</span> Prices are floors. Complex portals, multi-region rollouts and PE portfolios are quoted separately.</div>
          <div><span className="mono text-ink/70">³</span> Every artifact is yours. No lock-in, no seat licences, no "Revlyn-flavoured" tooling.</div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ spec, idx }: { spec: Spec; idx: number }) {
  const accent = spec.accent === "fire" ? "bg-fire" : "bg-volt";
  return (
    <article
      id={`svc-${spec.id}`}
      data-reveal
      className="bg-paper p-8 md:p-12 grid md:grid-cols-[280px_1fr] gap-10 scroll-mt-24 group"
    >
      {/* LEFT — identity */}
      <header className="md:sticky md:top-24 self-start">
        <div className="flex items-center gap-2 mb-6">
          <span className={`w-2 h-2 rounded-full ${accent}`} />
          <span className="mono text-[10.5px] text-ink/50">{spec.code} / {String(idx + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="display text-[38px] leading-[0.95] mb-3">{spec.name}</h3>
        <p className="text-[14.5px] text-ink/70 leading-snug mb-6">{spec.tagline}</p>

        <div className="mono text-[10.5px] text-ink/40 mb-2">FOR</div>
        <p className="text-[13px] text-ink/80 leading-relaxed mb-6">{spec.who}</p>

        <div className="mono text-[10.5px] text-ink/40 mb-2">PROBLEM</div>
        <p className="text-[13px] text-ink/80 leading-relaxed">{spec.problem}</p>
      </header>

      {/* RIGHT — spec */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        {/* outcomes */}
        <div className="md:col-span-2">
          <div className="flex items-baseline justify-between mb-3">
            <div className="mono text-[10.5px] text-ink/40">OUTCOMES</div>
            <div className="mono text-[10.5px] text-ink/40">{spec.outcomes.length} shipped</div>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
            {spec.outcomes.map((o, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] leading-snug text-ink/85">
                <span className="mono text-[10.5px] text-ink/35 pt-1 tabular-nums">0{i + 1}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* deliverables timeline */}
        <div>
          <div className="mono text-[10.5px] text-ink/40 mb-3">DELIVERABLES</div>
          <ol className="border-l border-ink/15 pl-4 space-y-3">
            {spec.deliverables.map((d, i) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${accent} ring-2 ring-paper`} />
                <div className="mono text-[10px] text-ink/50">{d.w}</div>
                <div className="text-[13px] text-ink/85 leading-snug">{d.t}</div>
              </li>
            ))}
          </ol>
        </div>

        {/* spec rows */}
        <div>
          <div className="mono text-[10.5px] text-ink/40 mb-3">SPEC</div>
          <div className="border border-ink/10">
            <Row k="Artifact" v={spec.artifact} />
            <Row k="Cadence" v={spec.cadence} />
            <Row k="Investment" v={<span className="font-medium">{spec.price}</span>} />
            <Row
              k="Tools"
              v={
                <div className="flex flex-wrap gap-1.5 -mt-0.5">
                  {spec.tools.map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              }
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11.5px] text-ink/45">
            <Dot tone="mute" /> Press <Kbd>⇧</Kbd> <Kbd>?</Kbd> for the full scope PDF.
          </div>
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · METHOD RHYTHM — how a week / month / quarter looks
   ═══════════════════════════════════════════════════════════════ */

const WEEK = [
  { d: "MON", h: "09:30", t: "Forecast call", who: "Head of Revenue + Principal", out: "Weekly commit locked" },
  { d: "MON", h: "16:00", t: "Async digest", who: "Operator → team", out: "Loom + doc, 8 min" },
  { d: "TUE", h: "10:00", t: "RevOps standup", who: "Operator + RevOps lead", out: "Ticket queue triaged" },
  { d: "WED", h: "—", t: "Build day", who: "Operator (heads-down)", out: "Ship + PR review" },
  { d: "THU", h: "14:00", t: "Deal desk", who: "Principal + AE managers", out: "3–5 deals unblocked" },
  { d: "FRI", h: "11:00", t: "Demo + retro", who: "Full team", out: "What shipped, what's next" },
];

const MONTH = [
  "Board pack draft — pipeline, forecast, agent ROI, hygiene score",
  "Comp plan reconciliation vs. attainment",
  "ICP tier refresh from CS + won/lost data",
  "Agent scorecard review, retire ≤ 60% precision",
];

const QUARTER = [
  "QBR: motion, message, funnel, headcount",
  "Portal audit re-run against original blueprint",
  "Segment expansion decision (up-market / new region)",
  "Tooling review: 1 in, 1 out — no bloat",
];

export function MethodRhythm() {
  return (
    <section className="bg-bone/40 border-t border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHead
          eyebrow="§ 04 · Method"
          count="Cadence"
          title="An operating rhythm you can set your watch to."
          sub="We don't run 'workshops'. We run your revenue meetings, own the doc, and leave a paper trail your board can read."
        />

        {/* WEEKLY TABLE */}
        <div className="border border-ink/15 bg-paper overflow-hidden">
          <header className="grid grid-cols-[70px_60px_1fr_1fr_1fr] border-b border-ink/15 bg-bone/50">
            {["Day", "Time", "Ritual", "Room", "Output"].map((h) => (
              <div key={h} className="mono text-[10.5px] text-ink/50 px-4 py-3">{h}</div>
            ))}
          </header>
          {WEEK.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[70px_60px_1fr_1fr_1fr] border-b border-ink/8 last:border-b-0 items-center text-[13px] hover:bg-bone/40 transition-colors"
            >
              <div className="mono text-[11px] text-ink px-4 py-3.5 tabular-nums">{r.d}</div>
              <div className="mono text-[11px] text-ink/50 py-3.5 tabular-nums">{r.h}</div>
              <div className="px-4 py-3.5 font-medium text-ink">{r.t}</div>
              <div className="px-4 py-3.5 text-ink/65">{r.who}</div>
              <div className="px-4 py-3.5 text-ink/65 flex items-center gap-2">
                <Dot tone={i % 2 === 0 ? "fire" : "volt"} />
                {r.out}
              </div>
            </div>
          ))}
        </div>

        {/* MONTHLY / QUARTERLY */}
        <div className="mt-10 grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/15">
          <div className="bg-paper p-8">
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <div className="mono text-[10.5px] text-ink/40">EVERY MONTH</div>
                <h4 className="display text-[26px] mt-1">Reconcile.</h4>
              </div>
              <span className="mono text-[10.5px] text-ink/40 tabular-nums">04 items</span>
            </div>
            <ul className="space-y-2.5">
              {MONTH.map((m, i) => (
                <li key={i} className="flex gap-3 text-[13.5px] leading-snug text-ink/85">
                  <span className="mono text-[10.5px] text-ink/35 pt-1 tabular-nums">M.{String(i + 1).padStart(2, "0")}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper p-8">
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <div className="mono text-[10.5px] text-ink/40">EVERY QUARTER</div>
                <h4 className="display text-[26px] mt-1">Re-plan.</h4>
              </div>
              <span className="mono text-[10.5px] text-ink/40 tabular-nums">04 items</span>
            </div>
            <ul className="space-y-2.5">
              {QUARTER.map((m, i) => (
                <li key={i} className="flex gap-3 text-[13.5px] leading-snug text-ink/85">
                  <span className="mono text-[10.5px] text-ink/35 pt-1 tabular-nums">Q.{String(i + 1).padStart(2, "0")}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* comms + tooling contract */}
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/15">
          {[
            {
              k: "COMMS",
              t: "Slack Connect, primary. Loom for decisions. Notion for the paper trail.",
              foot: "Response SLA: 4 business hours. Emergency: 1 hour.",
            },
            {
              k: "OWNERSHIP",
              t: "One Principal, one Operator. Same two people for the entire engagement.",
              foot: "No pods. No rotations. No 'account managers'.",
            },
            {
              k: "EXIT",
              t: "Every asset is yours. Portal, docs, agents, dashboards, runbooks.",
              foot: "30-day handover included. Retainer clients: month-to-month after month 3.",
            },
          ].map((c) => (
            <div key={c.k} className="bg-paper p-7">
              <div className="mono text-[10.5px] text-ink/40 mb-3">{c.k}</div>
              <p className="text-[14px] text-ink/90 leading-snug">{c.t}</p>
              <p className="mt-3 text-[11.5px] text-ink/50 leading-snug">{c.foot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3 · PROOF LEDGER — real before/after, named metrics
   ═══════════════════════════════════════════════════════════════ */

type Case = {
  co: string;
  stage: string;
  scope: string;
  duration: string;
  metrics: { k: string; before: string; after: string; delta: string }[];
  quote: { t: string; a: string };
};

const CASES: Case[] = [
  {
    co: "SaaS · Series B · $18M ARR",
    stage: "HubSpot rebuild + RevOps retainer",
    scope: "S-01 · S-02",
    duration: "6 weeks + 9 mo retainer",
    metrics: [
      { k: "Forecast accuracy", before: "63%", after: "91%", delta: "+28 pts" },
      { k: "Pipeline hygiene score", before: "41 / 100", after: "88 / 100", delta: "+47" },
      { k: "AE ramp (to quota)", before: "7.2 mo", after: "4.1 mo", delta: "−43%" },
      { k: "Reporting time (weekly)", before: "11 hrs", after: "40 min", delta: "−94%" },
    ],
    quote: {
      t: "First quarter in three years the board didn't ask why the forecast moved.",
      a: "Head of Revenue",
    },
  },
  {
    co: "Fintech · Series A · $6M ARR",
    stage: "GTM redesign, moved from SMB to mid-market",
    scope: "S-03",
    duration: "8 weeks",
    metrics: [
      { k: "Average ACV", before: "$14k", after: "$61k", delta: "4.3×" },
      { k: "Win rate (Tier-A)", before: "9%", after: "27%", delta: "3×" },
      { k: "Sales cycle", before: "94 days", after: "68 days", delta: "−28%" },
      { k: "SDR → SQL rate", before: "4.2%", after: "11.6%", delta: "+7.4 pts" },
    ],
    quote: {
      t: "We stopped writing decks for personas that never signed and started writing to the four titles that do.",
      a: "Founder / CEO",
    },
  },
  {
    co: "Vertical SaaS · Bootstrapped · $9M ARR",
    stage: "AI agent infrastructure",
    scope: "S-04",
    duration: "5 weeks + retainer",
    metrics: [
      { k: "Research time / account", before: "22 min", after: "40 sec", delta: "−97%" },
      { k: "Outbound reply rate", before: "1.1%", after: "4.8%", delta: "4.4×" },
      { k: "Cost per qualified meeting", before: "$412", after: "$118", delta: "−71%" },
      { k: "Agent override rate", before: "—", after: "6.3%", delta: "under 10% target" },
    ],
    quote: {
      t: "Six agents replaced two contractors and made the SDRs 3× more effective. No 'AI vibes' — real scorecards.",
      a: "VP Growth",
    },
  },
];

export function ProofLedger() {
  return (
    <section className="bg-paper border-t border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHead
          eyebrow="§ 05 · Proof"
          count={`${CASES.length} case studies`}
          title="The numbers. Before and after. On the record."
          sub="Every number below has a name and a phone number behind it. Ask us for references — we'll route you to the operator who owned it."
        />

        <div className="grid gap-px bg-ink/10 border border-ink/15">
          {CASES.map((c, i) => (
            <article key={i} data-reveal className="bg-paper p-8 md:p-10 grid md:grid-cols-[280px_1fr] gap-10">
              {/* meta */}
              <header>
                <div className="flex items-center gap-2 mb-4">
                  <span className="mono text-[10.5px] text-ink/40 tabular-nums">CASE.{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-ink/10" />
                  <span className="mono text-[10.5px] text-ink/40">{c.scope}</span>
                </div>
                <div className="mono text-[10.5px] text-ink/50 mb-2">{c.co}</div>
                <h3 className="display text-[24px] leading-tight mb-3">{c.stage}</h3>
                <div className="flex items-center gap-2 text-[11.5px] text-ink/50">
                  <Dot tone="fire" /> {c.duration}
                </div>

                <figure className="mt-6 border-l-2 border-ink pl-4">
                  <blockquote className="text-[14.5px] text-ink leading-snug italic">
                    &ldquo;{c.quote.t}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 mono text-[10.5px] text-ink/50">— {c.quote.a}</figcaption>
                </figure>
              </header>

              {/* metrics table */}
              <div>
                <div className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] border-b border-ink/15 pb-2 mb-1 mono text-[10.5px] text-ink/40">
                  <div>Metric</div>
                  <div className="text-right tabular-nums">Before</div>
                  <div className="text-right tabular-nums">After</div>
                  <div className="text-right tabular-nums">Δ</div>
                </div>
                {c.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="grid grid-cols-[1.4fr_1fr_1fr_0.9fr] items-baseline py-3 border-b border-ink/8 last:border-b-0 text-[13.5px]"
                  >
                    <div className="text-ink/85">{m.k}</div>
                    <div className="text-right tabular-nums text-ink/45 line-through decoration-ink/30">{m.before}</div>
                    <div className="text-right tabular-nums font-medium text-ink">{m.after}</div>
                    <div className="text-right tabular-nums">
                      <span className="inline-block px-1.5 py-0.5 bg-volt/60 text-ink text-[12px]">{m.delta}</span>
                    </div>
                  </div>
                ))}

                {/* sparkline-ish rail */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="mono text-[10px] text-ink/40">TRAJECTORY</span>
                  <svg viewBox="0 0 200 24" className="flex-1 h-6" preserveAspectRatio="none">
                    <polyline
                      points={c.metrics.map((_, k) => `${(k / (c.metrics.length - 1)) * 200},${20 - k * (16 / (c.metrics.length - 1))}`).join(" ")}
                      fill="none"
                      stroke="var(--color-fire)"
                      strokeWidth="1.5"
                    />
                    {c.metrics.map((_, k) => (
                      <circle
                        key={k}
                        cx={(k / (c.metrics.length - 1)) * 200}
                        cy={20 - k * (16 / (c.metrics.length - 1))}
                        r="2.5"
                        fill="var(--color-ink)"
                      />
                    ))}
                  </svg>
                  <span className="mono text-[10px] text-ink/40 tabular-nums">{c.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11.5px] text-ink/45 leading-relaxed max-w-2xl">
          <span className="mono text-ink/70">†</span> Company names withheld under NDA on this page. Full case studies and references shared under mutual NDA on the intro call.
        </p>
      </div>
    </section>
  );
}
