import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "integrity-fire-hero.jpg" is a Lovable-hosted asset — not migrated.
const heroImage = "/integrity-fire-hero.jpg";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Integrity Fire Safety Services · Turning a busy HubSpot into an operating system",
  description:
    "Integrity Fire Safety Services runs inspections across Colorado with 15 reps in HubSpot. We rebuilt the portal on People, Process, Technology: deal stages that match the buyer, commissions for technicians, automated renewals, and a RevOps dashboard that guards data quality.",
  alternates: { canonical: "/work/integrity-fire" },
  openGraph: {
    title: "Integrity Fire Safety Services · A HubSpot built for field service",
    description:
      "People first, then process, then technology. How a heavily-used HubSpot became the system a Colorado fire and life safety company runs on.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/* ─────────── helpers ─────────── */

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <div>
      <div className="mono text-[11px] tracking-[0.2em] text-fire">{num}</div>
      <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight leading-[1.05]">{title}</h2>
    </div>
  );
}

/* HERO artifact · the three levers, in order */
function LeverStack() {
  const levers = [
    {
      k: "01",
      label: "People",
      why: "A system nobody adopts is worthless, however well it is built.",
      tint: "bg-fire text-paper",
    },
    {
      k: "02",
      label: "Process",
      why: "Adoption only sticks when the process matches how the business runs.",
      tint: "bg-volt text-ink",
    },
    {
      k: "03",
      label: "Technology",
      why: "Tooling serves the first two. It is never the starting point.",
      tint: "bg-ink text-paper",
    },
  ];
  return (
    <div className="brutal-border bg-paper p-5">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3">
        <span>The order of levers</span>
        <span className="text-fire">Ongoing engagement</span>
      </div>

      <div className="mt-5 space-y-2">
        {levers.map((l) => (
          <div
            key={l.k}
            className={`group grid grid-cols-[52px_1fr] items-stretch border-2 border-ink transition-transform hover:-translate-y-0.5 ${l.tint}`}
          >
            <div className="mono text-[11px] flex items-center justify-center border-r-2 border-ink/30 opacity-80">
              {l.k}
            </div>
            <div className="p-3">
              <div className="display text-xl leading-none">{l.label}</div>
              <div className="text-[12px] leading-snug mt-2 opacity-90">{l.why}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-ink/10 text-[13px] text-ink/80">
        Invert the order and you ship a CRM nobody uses.
      </div>
    </div>
  );
}

/* CHAPTER · what makes field service different */
function FieldServiceBoard() {
  const rows = [
    {
      trait: "Inspection-driven",
      desk: "Revenue lands on one-off closes",
      field: "Revenue runs on due dates and renewal cycles",
    },
    {
      trait: "Field-based",
      desk: "Only the sales team sells",
      field: "Technicians on site upsell and cross-sell too",
    },
    {
      trait: "Delivery-coupled",
      desk: "Sold scope rarely leaves the CRM",
      field: "Service has to deliver exactly what sales promised",
    },
  ];
  return (
    <div className="brutal-border bg-paper overflow-x-auto">
      <div className="grid grid-cols-[150px_1fr_1fr] min-w-[560px] mono text-[10px] tracking-[0.16em] text-ink/50 border-b border-ink/15 px-4 py-3">
        <span>Trait</span>
        <span>What generic CRM advice assumes</span>
        <span>What is actually true here</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.trait}
          className={`grid grid-cols-[150px_1fr_1fr] min-w-[560px] items-center px-4 py-4 text-[14px] transition-colors hover:bg-bone ${
            i < rows.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <span className="display text-lg">{r.trait}</span>
          <span className="text-ink/55 line-through decoration-fire/60">{r.desk}</span>
          <span className="text-ink/85">{r.field}</span>
        </div>
      ))}
      <div className="border-t-2 border-ink bg-bone px-4 py-3 mono text-[11px] text-ink/70 min-w-[560px]">
        A CRM built only for desk-based selling misses half of how this company makes money.
      </div>
    </div>
  );
}

/* PEOPLE · note vs property */
function NoteToPropertyVisual() {
  return (
    <div className="brutal-border bg-paper p-5">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3 mb-5">
        <span>Inspection due date, before and after</span>
        <span className="text-fire">One field, whole pipeline</span>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-center">
        <div className="border-2 border-ink/25 bg-bone p-4">
          <div className="mono text-[10px] tracking-[0.16em] text-ink/50">Before, a free text note</div>
          <div className="mt-3 text-[13px] text-ink/70 leading-relaxed italic">
            &ldquo;Spoke to facilities manager, sprinkler inspection due sometime around March, said
            call back closer to then.&rdquo;
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2 mono text-[9px] sm:text-[10px]">
            {["No filter", "No workflow", "No report"].map((t) => (
              <div key={t} className="border border-ink/20 px-2 py-1 text-ink/45 text-center">
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="mono text-xs text-ink/50 text-center">becomes</div>

        <div className="border-2 border-ink bg-volt p-4">
          <div className="mono text-[10px] tracking-[0.16em] text-ink/70">After, a tracked property</div>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="mono text-[11px] text-ink/70">inspection_due_date</span>
            <span className="display text-2xl tabular-nums">2026-03-14</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2 mono text-[9px] sm:text-[10px]">
            {["Filterable", "Automatable", "Reportable"].map((t) => (
              <div key={t} className="border-2 border-ink px-2 py-1 text-center bg-paper">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-ink/10 text-[12px] text-ink/70 leading-relaxed">
        The due date tells a rep the exact window a prospect is making a decision. Held in a note it
        is invisible to the system. Held as a property it surfaces the lead at the right moment and
        prompts the call while the decision is still live.
      </div>
    </div>
  );
}

/* PEOPLE · buyer journey to stages */
function JourneyStages() {
  const stages = [
    { s: "Enquiry", captures: "Property type · site count · inspection due date" },
    { s: "Site scoped", captures: "Systems on site · service areas · access notes" },
    { s: "Quoted", captures: "Quote value · service hours · document sent" },
    { s: "Scheduled", captures: "Agreed date · assigned technician" },
    { s: "Won", captures: "Contract amount · renewal trigger set" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-x-auto">
      <div className="border-b-2 border-ink bg-ink text-paper px-4 py-3 flex items-center justify-between min-w-[720px]">
        <div className="mono text-[10px] tracking-[0.18em]">Deal stages, mapped to the buyer</div>
        <div className="mono text-[10px] tracking-[0.18em] text-volt">Data captured as a byproduct</div>
      </div>
      <div className="grid md:grid-cols-5 md:divide-x-2 divide-ink min-w-[720px] md:min-w-0">
        {stages.map((st, i) => (
          <div key={st.s} className={`p-4 transition-colors hover:bg-volt/25 ${i % 2 ? "bg-bone" : ""}`}>
            <div className="mono text-[10px] tracking-[0.16em] text-fire">{String(i + 1).padStart(2, "0")}</div>
            <div className="display text-lg mt-1 leading-tight">{st.s}</div>
            <div className="mt-3 mono text-[10px] text-ink/50">CAPTURES</div>
            <div className="text-[12px] text-ink/80 leading-snug">{st.captures}</div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] text-ink/70 min-w-[720px] md:min-w-0">
        Fire safety sales move fast against compliance deadlines. Loose stages cannot hold that.
      </div>
    </div>
  );
}

/* PROCESS · commission flow */
function CommissionFlow() {
  return (
    <div className="brutal-border bg-paper p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3 mb-6">
        <span>Commission model</span>
        <span className="text-fire">First time structured in the CRM</span>
      </div>

      <svg viewBox="0 0 620 200" className="w-full h-auto">
        <g>
          <rect x="10" y="70" width="130" height="60" fill="var(--color-ink)" />
          <text x="75" y="96" textAnchor="middle" fill="var(--color-paper)" fontSize="13" fontFamily="Inter" fontWeight="600">Technician</text>
          <text x="75" y="114" textAnchor="middle" fill="var(--color-fire)" fontSize="10" fontFamily="JetBrains Mono">on site visit</text>
        </g>
        <g>
          <rect x="185" y="20" width="140" height="56" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="2" />
          <text x="255" y="44" textAnchor="middle" fill="var(--color-ink)" fontSize="13" fontFamily="Inter" fontWeight="600">Upsell</text>
          <text x="255" y="62" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="JetBrains Mono">extra system found</text>
        </g>
        <g>
          <rect x="185" y="124" width="140" height="56" fill="var(--color-fire)" />
          <text x="255" y="148" textAnchor="middle" fill="var(--color-paper)" fontSize="13" fontFamily="Inter" fontWeight="600">Cross-sell</text>
          <text x="255" y="166" textAnchor="middle" fill="var(--color-paper)" fontSize="10" fontFamily="JetBrains Mono">adjacent service</text>
        </g>
        <g>
          <rect x="365" y="70" width="120" height="60" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2" />
          <text x="425" y="96" textAnchor="middle" fill="var(--color-ink)" fontSize="13" fontFamily="Inter" fontWeight="600">Deal</text>
          <text x="425" y="114" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="JetBrains Mono">tech mapped</text>
        </g>
        <g>
          <rect x="520" y="70" width="90" height="60" fill="var(--color-ink)" />
          <text x="565" y="96" textAnchor="middle" fill="var(--color-paper)" fontSize="13" fontFamily="Inter" fontWeight="600">Commission</text>
          <text x="565" y="114" textAnchor="middle" fill="var(--color-volt)" fontSize="10" fontFamily="JetBrains Mono">auto credited</text>
        </g>
        <g stroke="var(--color-ink)" strokeWidth="1.5" fill="none">
          <path d="M140 90 Q 165 60 185 48" markerEnd="url(#ifarrow)" />
          <path d="M140 110 Q 165 140 185 152" markerEnd="url(#ifarrow)" />
          <path d="M325 48 Q 348 70 365 90" markerEnd="url(#ifarrow)" />
          <path d="M325 152 Q 348 130 365 110" markerEnd="url(#ifarrow)" />
          <path d="M485 100 L 520 100" markerEnd="url(#ifarrow)" />
        </g>
        <defs>
          <marker id="ifarrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink)" />
          </marker>
        </defs>
      </svg>

      <div className="mt-4 text-[13px] text-ink/75 leading-relaxed">
        Technicians in this business are a revenue channel. Mapping them to the deals they work means
        any revenue that comes out of a visit is tied back to that technician automatically. The
        system now recognizes that the person doing the inspection is also selling, and pays for it.
      </div>
    </div>
  );
}

/* PROCESS · service hours + areas breakdown */
function ContractBreakdown() {
  const areas = [
    { area: "Fire alarm", hours: 42, pct: 34 },
    { area: "Sprinkler", hours: 36, pct: 29 },
    { area: "Extinguishers", hours: 22, pct: 18 },
    { area: "Backflow", hours: 14, pct: 11 },
    { area: "Emergency lighting", hours: 10, pct: 8 },
  ];
  return (
    <div className="brutal-border bg-paper">
      <div className="border-b-2 border-ink bg-ink text-paper px-4 py-3 flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.18em]">Contract, broken down</div>
        <div className="mono text-[10px] tracking-[0.18em] text-volt">Hours and areas</div>
      </div>
      <div className="p-5 space-y-3">
        {areas.map((a) => (
          <div key={a.area} className="group grid grid-cols-2 gap-2 md:grid-cols-[170px_1fr_70px] md:items-center md:gap-4">
            <span className="text-[13px] font-medium">{a.area}</span>
            <span className="mono text-[11px] tabular-nums text-ink/70 text-right md:hidden">{a.hours} hrs</span>
            <div className="col-span-2 md:col-span-1 h-3 bg-ink/10 overflow-hidden">
              <div
                className="h-full bg-fire transition-all duration-500 group-hover:bg-ink"
                style={{ width: `${a.pct}%` }}
              />
            </div>
            <span className="hidden md:block mono text-[11px] tabular-nums text-ink/70 text-right">{a.hours} hrs</span>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-ink bg-bone px-4 py-3 text-[12px] text-ink/75 leading-relaxed">
        The problem every field-service company has and few solve: the service team does not know
        what the sales team actually sold. Break the amount into hours and areas, and what sales
        sells and what service delivers finally describe the same thing.
      </div>
    </div>
  );
}

/* PROCESS · renewals */
function RenewalsLoop() {
  const steps = [
    { t: "Inspection completed", n: "Due date property stamped forward" },
    { t: "Trigger calculated", n: "System counts down, not a person" },
    { t: "Renewal deal created", n: "Enters its own pipeline automatically" },
    { t: "Rep prompted", n: "Task fires inside the decision window" },
  ];
  return (
    <div className="brutal-border bg-volt text-ink overflow-x-auto">
      <div className="border-b-2 border-ink px-4 py-3 flex items-center justify-between min-w-[640px]">
        <div className="mono text-[10px] tracking-[0.18em]">Renewals pipeline</div>
        <div className="mono text-[10px] tracking-[0.18em]">Runs without anyone remembering</div>
      </div>
      <div className="grid md:grid-cols-4 md:divide-x-2 divide-ink min-w-[640px] md:min-w-0">
        {steps.map((s, i) => (
          <div key={s.t} className="p-4 transition-colors hover:bg-paper">
            <div className="mono text-[10px] tracking-[0.16em] text-ink/60">{String(i + 1).padStart(2, "0")}</div>
            <div className="display text-base mt-1 leading-tight">{s.t}</div>
            <div className="text-[12px] text-ink/70 mt-2 leading-snug">{s.n}</div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] bg-ink/5 min-w-[640px] md:min-w-0">
        Annual inspection customers were being missed because the trigger was calculated by hand.
      </div>
    </div>
  );
}

/* TECHNOLOGY · RevOps dashboard */
function DataIntegrityPanel() {
  const gaps = [
    { rec: "Deal · Cherry Creek Medical", missing: "inspection_due_date", owner: "M. Reyes", sev: "high" },
    { rec: "Company · Front Range Hotels", missing: "service_areas", owner: "T. Alder", sev: "med" },
    { rec: "Deal · Aurora School District", missing: "service_hours", owner: "J. Whitfield", sev: "high" },
    { rec: "Deal · Boulder Retail Park", missing: "assigned_technician", owner: "M. Reyes", sev: "low" },
  ];
  const tint = (s: string) =>
    s === "high" ? "bg-fire text-paper" : s === "med" ? "bg-volt text-ink" : "bg-ink/10 text-ink";
  return (
    <div className="brutal-border bg-paper overflow-x-auto">
      <div className="border-b-2 border-ink bg-ink text-paper px-4 py-3 flex items-center justify-between min-w-[640px]">
        <div className="mono text-[10px] tracking-[0.18em]">RevOps dashboard, data gaps</div>
        <div className="mono text-[10px] tracking-[0.18em] text-fire">Owners notified</div>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr_0.8fr_70px] min-w-[640px] mono text-[10px] tracking-[0.14em] text-ink/50 px-4 py-2 border-b border-ink/10">
        <span>Record</span>
        <span>Missing</span>
        <span>Owner</span>
        <span className="text-right">Priority</span>
      </div>
      {gaps.map((g, i) => (
        <div
          key={g.rec}
          className={`grid grid-cols-[1.4fr_1fr_0.8fr_70px] min-w-[640px] items-center px-4 py-3 text-[13px] transition-colors hover:bg-bone ${
            i < gaps.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <span className="font-medium">{g.rec}</span>
          <span className="mono text-[11px] text-ink/70">{g.missing}</span>
          <span className="text-ink/70">{g.owner}</span>
          <span className={`justify-self-end mono text-[10px] px-2 py-0.5 ${tint(g.sev)}`}>
            {g.sev === "med" ? "Medium" : g.sev === "high" ? "High" : "Low"}
          </span>
        </div>
      ))}
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] text-ink/70 bg-bone min-w-[640px]">
        A missing field gets fixed by the person who owns it, close to when it happened, instead of
        surfacing as a broken report months later.
      </div>
    </div>
  );
}

/* TECHNOLOGY · minimum data requirement per stage */
function MinimumDataLadder() {
  const rungs = [
    { stage: "Enquiry", min: "Contact · property · inspection due date" },
    { stage: "Site scoped", min: "Systems on site · service areas" },
    { stage: "Quoted", min: "Amount · service hours · document" },
    { stage: "Scheduled", min: "Date · assigned technician" },
    { stage: "Won", min: "Contract breakdown · renewal trigger" },
  ];
  return (
    <div className="brutal-border bg-ink text-paper">
      <div className="border-b-2 border-paper/20 px-4 py-3 mono text-[10px] tracking-[0.18em]">
        Minimum data required at each stage
      </div>
      <div className="p-5 space-y-2">
        {rungs.map((r, i) => (
          <div
            key={r.stage}
            className="group grid grid-cols-1 gap-1 md:grid-cols-[40px_150px_1fr] md:items-center md:gap-4 border border-paper/15 px-3 py-3 transition-colors hover:border-volt hover:bg-paper/5"
          >
            <span className="mono text-[11px] text-fire tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <span className="display text-lg">{r.stage}</span>
            <span className="text-[12px] text-paper/75">{r.min}</span>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-paper/20 px-4 py-3 mono text-[11px] text-paper/70">
        Know the least a record must contain to be trustworthy, and you can enforce it.
      </div>
    </div>
  );
}

export default function IntegrityFireCase() {
  return (
    <div className="min-h-screen bg-paper text-ink">

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -right-24 top-24 w-[520px] h-[520px] bg-fire rounded-full blur-[130px] opacity-25 pointer-events-none" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] bg-volt rounded-full blur-[140px] opacity-35 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-fire">REVLYN</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-fire">WORK</Link>
            <span>/</span>
            <span className="text-ink">INTEGRITY FIRE</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="mono text-[11px] tracking-[0.2em] text-fire mb-6">
                HubSpot as a Service, ongoing
              </div>

              <h1
                data-reveal
                className="display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.92] tracking-[-0.045em]"
              >
                A{" "}
                <span className="inline-block bg-volt text-ink px-2 py-0.5 -rotate-1">busy</span>{" "}
                HubSpot turned into an{" "}
                <span className="inline-block bg-fire text-paper px-2 py-0.5 rotate-1">
                  operating system
                </span>
                .
              </h1>

              <p data-reveal data-reveal-delay="0.15" className="mt-6 max-w-xl text-[17px] leading-snug text-ink/80">
                Integrity Fire Safety Services runs a field-service business across Colorado. We turned
                their heavily-used portal into the system the whole company runs on.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#framework"
                  className="brutal-border bg-ink text-paper px-5 py-3 display text-sm brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all inline-flex items-center gap-2"
                >
                  Read the framework ↓
                </a>
                <BookCallButton className="brutal-border bg-paper text-ink px-5 py-3 display text-sm hover:bg-volt transition-colors inline-flex items-center gap-2">
                  Book a call →
                </BookCallButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="brutal-border brutal-shadow bg-ink overflow-hidden">
                <img
                  src={heroImage}
                  alt="Fire and life safety technician inspecting a sprinkler riser and alarm control panel"
                  width={1200}
                  height={1408}
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
                <figcaption className="border-t-2 border-paper/15 px-4 py-3 mono text-[10px] tracking-[0.16em] text-paper/60">
                  Inspection, service and renewals across Colorado
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ AT A GLANCE ═══════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "Sector", v: "Fire and life safety services" },
              { k: "Footprint", v: "All of Colorado · four offices" },
              { k: "Team in HubSpot", v: "~15 reps · full marketing function" },
              { k: "Model", v: "HubSpot as a Service · ongoing" },
            ].map((t) => (
              <div key={t.k} className="border-2 border-paper/15 p-4 transition-colors hover:border-fire">
                <div className="mono text-[10px] tracking-[0.16em] text-paper/50">{t.k}</div>
                <div className="mt-2 display text-lg text-paper">{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHO ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="Who they are" title="Who Integrity Fire is" />
          </div>
          <div className="md:col-span-8 min-w-0 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Integrity Fire Safety Services is a full-service fire and life safety company serving
              all of Colorado from four offices. They design, install, inspect, and service fire
              alarms, sprinklers, suppression systems, extinguishers, backflow preventers, and
              emergency lighting across commercial, healthcare, hospitality, education, retail, and
              government properties.
            </p>
            <p>
              Two features of this business shape everything about how their HubSpot has to work.
              First, it is inspection-driven, so revenue runs on due dates and renewal cycles rather
              than one-off deals. Second, it is field-based, so technicians are part of the revenue
              engine, not just the sales team at their desks.
            </p>
            <p className="text-ink/70">
              This is an ongoing engagement. What follows is the framework we are building against
              and the problems it has already solved.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY FIELD SERVICE IS DIFFERENT ═══════════ */}
      <section className="border-b-2 border-ink paper-grain relative overflow-hidden">
        <div className="watermark left-[-4vw] bottom-[-10vh] leading-none">01</div>
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-ink/10" />
            <div className="md:pl-6">
              <ChapterHead num="Why it breaks" title="Why most CRM advice breaks here" />
              <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
                Most CRM advice is written for desk-based B2B software sales. Applied to a
                field-service business it quietly stops matching reality.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 min-w-0">
            <FieldServiceBoard />
          </div>
        </div>
      </section>

      {/* ═══════════ FRAMEWORK TITLE ═══════════ */}
      <section id="framework" className="border-b-2 border-ink bg-fire text-paper relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-volt opacity-25 blur-[100px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-paper/70 mb-3">The framework</div>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-4xl">
            People, then process, then technology.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/90">
            HubSpot as a Service is not a one-time build followed by a handoff. It is a standing
            model where the system evolves with the business. Most CRM projects invert this order and
            start with technology, which is why most CRM projects end with a clean system nobody
            uses.
          </p>
          <div className="mt-10 max-w-2xl">
            <LeverStack />
          </div>
        </div>
      </section>


      {/* ═══════════ PEOPLE ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="People" title="People, building for adoption" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Reps will not fight the system. They will route around it, and once that happens the
              data is gone and the CRM becomes decorative. So correct use has to be the path of least
              resistance.
            </p>
          </div>
          <div className="md:col-span-8 min-w-0 space-y-6">
            <JourneyStages />
            <NoteToPropertyVisual />
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">Process</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight leading-[1.05]">
              Process, encoding how the business actually makes money
            </h2>
            <p className="mt-4 text-sm text-paper/70 leading-relaxed max-w-sm">
              With adoption built in, the next work was making HubSpot reflect the real economics of
              a field-service business. Three builds stand out.
            </p>
          </div>
          <div className="md:col-span-8 min-w-0 grid gap-6">
            <CommissionFlow />
            <ContractBreakdown />
            <RenewalsLoop />
          </div>
        </div>
      </section>

      {/* ═══════════ TECHNOLOGY ═══════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="Technology" title="Technology, making the data trustworthy" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              The centerpiece is a RevOps dashboard whose job is not vanity reporting but data
              integrity. It works only because the stages, fields, and processes underneath it were
              already defined. A dashboard built first would just be measuring chaos precisely.
            </p>
          </div>
          <div className="md:col-span-8 min-w-0 space-y-6">
            <DataIntegrityPanel />
            <MinimumDataLadder />
          </div>
        </div>
      </section>

      {/* ═══════════ PULLQUOTE ═══════════ */}
      <section className="border-b-2 border-ink bg-volt text-ink relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-fire opacity-15 blur-[80px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20">
          <div className="mono text-[11px] tracking-[0.2em] text-ink/70 mb-6">The principle</div>
          <blockquote className="display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            <span className="text-ink/40">&ldquo;</span>
            Adoption without a matching process decays, and technology without either just measures
            the mess.
            <span className="text-ink/40">&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* ═══════════ FRAMEWORK RECAP ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-3">The framework in one view</div>
          <h2 className="display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl">
            Three levers, always in this order.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                t: "People",
                b: "Build for adoption first. Match deal stages and fields to the real buyer's journey, and turn the metrics that matter, like the inspection due date, from buried notes into tracked properties that drive timely action.",
                tint: "bg-fire text-paper",
              },
              {
                n: "02",
                t: "Process",
                b: "Encode the real economics. Structure commissions and map technicians to deals so field upsells are rewarded, model service hours and areas so service knows what sales sold, and automate renewals so recurring revenue stops depending on memory.",
                tint: "bg-volt text-ink",
              },
              {
                n: "03",
                t: "Technology",
                b: "Make the data trustworthy. Use a RevOps dashboard to catch data gaps and notify owners, and define the minimum data required at each stage so reliability compounds.",
                tint: "bg-ink text-paper",
              },
            ].map((s) => (
              <div key={s.n} className={`brutal-border p-5 transition-transform hover:-translate-y-1 ${s.tint}`}>
                <div className="mono text-[11px] tracking-[0.18em] opacity-70">{s.n}</div>
                <div className="display text-2xl mt-2 leading-tight">{s.t}</div>
                <p className="mt-3 text-[13px] leading-relaxed opacity-95">{s.b}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[14px] text-ink/70 max-w-3xl">
            The People, Process, Technology model works here because it starts from how the business
            actually operates and builds the system to fit, rather than forcing the business into a
            generic CRM shape.
          </p>
        </div>
      </section>

      {/* ═══════════ STATUS ═══════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-14 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">Where it stands</div>
            <h2 className="display text-2xl md:text-3xl mt-2 tracking-tight">
              Work in progress
            </h2>
          </div>
          <div className="md:col-span-8 min-w-0">
            <div className="brutal-border bg-paper p-5">
              <div className="mono text-[10px] tracking-[0.16em] text-ink/50 border-b border-ink/15 pb-3">
                What we are measuring next
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "Renewal capture rate",
                  "Technician-driven upsell revenue",
                  "Data completeness at each stage",
                  "Sales cycle on inspection deals",
                ].map((m) => (
                  <div
                    key={m}
                    className="border border-ink/15 px-3 py-3 text-[13px] text-ink/80 transition-colors hover:border-fire hover:bg-bone"
                  >
                    {m}
                  </div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-ink/10 text-[12px] text-ink/65 leading-relaxed">
                This is an ongoing HubSpot as a Service engagement. Numbers go on this page as they
                land, not before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              If your reps are routing around your CRM, we should talk.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              30 minutes, no deck. We open your portal on the call and tell you the three things we
              would fix first, in order.
            </p>
          </div>
          <BookCallButton className="inline-flex items-center gap-3 brutal-border bg-ink text-paper px-6 py-4 display text-xl brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all">
            Book a call →
          </BookCallButton>
        </div>
      </section>

      <Footer />
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
          <div className="md:col-span-7 min-w-0">
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

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10 min-w-0">
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
                  className="flex-1 min-w-0 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 py-14 border-b border-paper/10">
          {/* 6-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact"],
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
                ["Migration", "/hubspot-implementation"],
                ["Audit", "/hubspot-audit"],
              ],
            },
            {
              h: "Work",
              l: [
                ["Ausforming", "/work/ausforming"],
                ["Datapel", "/work/datapel"],
                ["Detrack", "/work/detrack"],
                ["Integrity Fire", "/work/integrity-fire"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["CRM Architecture", "/#svc-crm"],
                ["RevOps", "/#svc-revops"],
                ["GTM Design", "/#svc-gtm"],
                ["AI Infrastructure", "/#svc-ai"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Professional services", "/use-cases"],
                ["Marketplaces", "/use-cases"],
                ["Fintech", "/use-cases"],
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
                ["Field notes", "/blog"],
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
            <a href="/privacy" className="hover:text-paper transition-colors">Privacy</a>
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
