import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Detrack · Simplifying a multi-tool SaaS stack, a HubSpot rebuilt for clarity and scale",
  description:
    "Detrack, a delivery management SaaS across ANZ and beyond, ran HubSpot, ChartMogul and Intercom side by side. We rebuilt the portal in a fixed order: clean, structure, connect, operate. The result was not more features, it was less doubt.",
  alternates: { canonical: "/work/detrack" },
  openGraph: {
    title: "Detrack · A HubSpot rebuilt for clarity and scale",
    description:
      "Clean the foundation. Structure for scale. Connect deliberately. Operate on top. The four-stage framework we ran on Detrack's stack.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/* ─────────── local helpers ─────────── */

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <div>
      <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER {num}</div>
      <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight leading-[1.05]">{title}</h2>
    </div>
  );
}

/* HERO · four-stage schematic */
function StackSchematic() {
  const stages = [
    { k: "01", label: "Clean", tint: "bg-fire text-paper" },
    { k: "02", label: "Structure", tint: "bg-ink text-paper" },
    { k: "03", label: "Connect", tint: "bg-volt text-ink" },
    { k: "04", label: "Operate", tint: "bg-paper text-ink border-2 border-ink" },
  ];
  return (
    <div className="brutal-border bg-paper p-5">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3">
        <span>ARTIFACT · THE ORDER OF OPERATIONS</span>
        <span className="text-fire">4 STAGES · FIXED SEQUENCE</span>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {stages.map((s, i) => (
          <div key={s.k} className="relative">
            <div className={`h-24 ${s.tint} flex flex-col items-start justify-between p-3`}>
              <span className="mono text-[10px] opacity-80">{s.k}</span>
              <span className="display text-lg leading-none">{s.label}</span>
            </div>
            {i < stages.length - 1 && (
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 mono text-xs text-ink/70">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2 text-[11px] leading-snug text-ink/70">
        <div>Dedupe, then enrich, so the record base is true.</div>
        <div>Views, fields, workflows, plus a data dictionary.</div>
        <div>Every sync logged and mapped, one source of truth.</div>
        <div>Gated pipelines, TTV nudges, renewals as a process.</div>
      </div>

      <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.16em] text-ink/50">RULE OF THE METHOD</div>
        <div className="text-[13px] text-ink/80 italic">Skip a stage, redo it later.</div>
      </div>
    </div>
  );
}

/* CHAPTER 02 · symptom board (three connected tools) */
function StackBoard() {
  const rows = [
    { tool: "HubSpot", role: "CRM · Sales + Marketing", note: "System of record, quietly drifting" },
    { tool: "ChartMogul", role: "SaaS metrics", note: "Truth for MRR, unclear elsewhere" },
    { tool: "Intercom", role: "Support + reporting", note: "Sending signal into HubSpot" },
  ];
  return (
    <div className="brutal-border bg-paper">
      <div className="grid grid-cols-[140px_1fr_1fr] mono text-[10px] tracking-[0.16em] text-ink/50 border-b border-ink/15 px-4 py-3">
        <span>TOOL</span>
        <span>ROLE</span>
        <span>WHAT WAS HAPPENING</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.tool}
          className={`grid grid-cols-[140px_1fr_1fr] items-center px-4 py-4 text-[14px] ${
            i < rows.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <span className="display text-lg">{r.tool}</span>
          <span className="text-ink/70">{r.role}</span>
          <span className="text-ink/80">{r.note}</span>
        </div>
      ))}
      <div className="border-t-2 border-ink bg-bone px-4 py-3 mono text-[11px] text-ink/70">
        The same company existed in more than one place. Every report carried a quiet asterisk.
      </div>
    </div>
  );
}

/* CHAPTER 03 · dedupe visual */
function DedupeVisual() {
  const dupes = [
    { name: "Northwind Logistics", copies: ["Northwind Logistics", "northwind logistics pty", "Northwind Logistics (ANZ)"] },
    { name: "Bluepeak Freight", copies: ["Bluepeak Freight", "Blue Peak Freight"] },
    { name: "Harbour Couriers", copies: ["Harbour Couriers", "Harbour Couriers Ltd", "harbour couriers"] },
  ];
  return (
    <div className="brutal-border bg-paper p-5">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3 mb-4">
        <span>BEFORE · SAME COMPANY, DIFFERENT RECORDS</span>
        <span className="text-fire">HISTORY SPLIT IN HALF</span>
      </div>
      <div className="space-y-4">
        {dupes.map((d) => (
          <div key={d.name} className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <div className="space-y-1">
              {d.copies.map((c) => (
                <div key={c} className="text-[13px] px-3 py-1.5 bg-bone border border-ink/15 line-through decoration-fire/70">
                  {c}
                </div>
              ))}
            </div>
            <div className="mono text-xs text-ink/50 text-center">merges to</div>
            <div className="display text-lg bg-volt text-ink px-3 py-2 border-2 border-ink">
              {d.name}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-ink/10 text-[12px] text-ink/70 leading-relaxed">
        Duplicates are silent. Every report undercounts, every workflow can fire twice, and no one
        knows the picture is partial. So the record base gets deduped first, then enriched. In that
        order, not the other way around.
      </div>
    </div>
  );
}

/* CHAPTER 04 · data dictionary + workflow tracker */
function DictionaryCard() {
  const fields = [
    { name: "Lifecycle stage", owner: "Marketing Ops", source: "HubSpot", allowed: "MQL · SQL · Opp · Customer" },
    { name: "MRR (contract)", owner: "Finance", source: "ChartMogul", allowed: "Number · monthly · AUD" },
    { name: "Health score", owner: "CS", source: "Intercom → HubSpot", allowed: "Green · Amber · Red" },
    { name: "Deal type", owner: "Sales", source: "HubSpot", allowed: "New · Expansion · Renewal" },
  ];
  return (
    <div className="brutal-border bg-paper">
      <div className="border-b-2 border-ink bg-ink text-paper px-4 py-3 flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.18em]">DATA DICTIONARY · EXTRACT</div>
        <div className="mono text-[10px] tracking-[0.18em] text-fire">4 OF 87 FIELDS</div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_1fr_1.4fr] mono text-[10px] tracking-[0.14em] text-ink/50 px-4 py-2 border-b border-ink/10">
        <span>FIELD</span>
        <span>OWNER</span>
        <span>SOURCE</span>
        <span>ALLOWED VALUES</span>
      </div>
      {fields.map((f, i) => (
        <div
          key={f.name}
          className={`grid grid-cols-[1.2fr_1fr_1fr_1.4fr] items-center px-4 py-3 text-[13px] ${
            i < fields.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <span className="font-medium">{f.name}</span>
          <span className="text-ink/70">{f.owner}</span>
          <span className="text-ink/70">{f.source}</span>
          <span className="text-ink/80 mono text-[11px]">{f.allowed}</span>
        </div>
      ))}
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] text-ink/70 bg-bone">
        One definition per field. That is what stops two people filling the same box two different ways.
      </div>
    </div>
  );
}

function WorkflowTracker() {
  const flows = [
    { id: "WF-014", name: "New trial → welcome", trigger: "Contact created", touches: "Contact · Email · Intercom" },
    { id: "WF-027", name: "MRR change → CS alert", trigger: "ChartMogul sync", touches: "Deal · Owner · Slack" },
    { id: "WF-041", name: "Health = Red", trigger: "Intercom → HubSpot", touches: "Company · Deal · CS queue" },
  ];
  return (
    <div className="brutal-border bg-volt text-ink">
      <div className="border-b-2 border-ink px-4 py-3 flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.18em]">WORKFLOW TRACKER · LIVE MAP</div>
        <div className="mono text-[10px] tracking-[0.18em]">3 OF 42</div>
      </div>
      {flows.map((f, i) => (
        <div
          key={f.id}
          className={`px-4 py-3 grid grid-cols-[80px_1fr_1fr_1.2fr] items-center text-[13px] ${
            i < flows.length - 1 ? "border-b border-ink/20" : ""
          }`}
        >
          <span className="mono text-[11px]">{f.id}</span>
          <span className="font-medium">{f.name}</span>
          <span className="text-ink/70 text-[12px]">{f.trigger}</span>
          <span className="text-ink/80 mono text-[11px]">{f.touches}</span>
        </div>
      ))}
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] bg-ink/5">
        Every automation, written down. No more invisible fights over the same record.
      </div>
    </div>
  );
}

/* CHAPTER 05 · sync map */
function SyncMap() {
  return (
    <div className="brutal-border bg-paper p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.16em] text-ink/60 border-b border-ink/15 pb-3 mb-6">
        <span>ARTIFACT · INTEGRATION MAP</span>
        <span className="text-fire">EVERY SYNC LOGGED · ONE AUTHORITATIVE SOURCE</span>
      </div>

      <svg viewBox="0 0 600 260" className="w-full h-auto">
        {/* nodes */}
        <g>
          <rect x="30" y="100" width="130" height="60" fill="var(--color-ink)" />
          <text x="95" y="128" textAnchor="middle" fill="var(--color-paper)" fontSize="14" fontFamily="Inter" fontWeight="600">HubSpot</text>
          <text x="95" y="146" textAnchor="middle" fill="var(--color-fire)" fontSize="10" fontFamily="JetBrains Mono">CRM · master</text>
        </g>
        <g>
          <rect x="235" y="30" width="130" height="60" fill="var(--color-volt)" stroke="var(--color-ink)" strokeWidth="2" />
          <text x="300" y="58" textAnchor="middle" fill="var(--color-ink)" fontSize="14" fontFamily="Inter" fontWeight="600">ChartMogul</text>
          <text x="300" y="76" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="JetBrains Mono">MRR · master</text>
        </g>
        <g>
          <rect x="235" y="170" width="130" height="60" fill="var(--color-fire)" />
          <text x="300" y="198" textAnchor="middle" fill="var(--color-paper)" fontSize="14" fontFamily="Inter" fontWeight="600">Intercom</text>
          <text x="300" y="216" textAnchor="middle" fill="var(--color-paper)" fontSize="10" fontFamily="JetBrains Mono">Health · master</text>
        </g>
        <g>
          <rect x="440" y="100" width="130" height="60" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2" />
          <text x="505" y="128" textAnchor="middle" fill="var(--color-ink)" fontSize="14" fontFamily="Inter" fontWeight="600">Reporting</text>
          <text x="505" y="146" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="JetBrains Mono">read only</text>
        </g>

        {/* arrows */}
        <g stroke="var(--color-ink)" strokeWidth="1.5" fill="none">
          <path d="M160 120 Q 200 75 235 60" markerEnd="url(#arrow)" />
          <path d="M160 140 Q 200 185 235 200" markerEnd="url(#arrow)" />
          <path d="M365 60  Q 400 90 440 120" markerEnd="url(#arrow)" />
          <path d="M365 200 Q 400 170 440 140" markerEnd="url(#arrow)" />
          <path d="M160 130 L 440 130" markerEnd="url(#arrow)" />
        </g>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink)" />
          </marker>
        </defs>
      </svg>

      <div className="mt-4 grid md:grid-cols-3 gap-3 text-[12px] text-ink/75">
        <div className="border border-ink/15 p-3">
          <div className="mono text-[10px] text-ink/50">MAPPED</div>
          Each field points to a named field in the other system.
        </div>
        <div className="border border-ink/15 p-3">
          <div className="mono text-[10px] text-ink/50">LOGGED</div>
          Every sync writes what moved, when, and from where.
        </div>
        <div className="border border-ink/15 p-3">
          <div className="mono text-[10px] text-ink/50">AUTHORITATIVE</div>
          One master per field. Everything else reads, does not write.
        </div>
      </div>
    </div>
  );
}

/* CHAPTER 06 · pipelines */
function PipelineBoard() {
  const stages = [
    { name: "Trial", gate: "Signed up" },
    { name: "Activated", gate: "First key action complete" },
    { name: "Qualified", gate: "Budget · owner · timing" },
    { name: "Proposal", gate: "Scope + price agreed" },
    { name: "Closed won", gate: "Signed order" },
  ];
  return (
    <div className="brutal-border bg-paper">
      <div className="border-b-2 border-ink bg-ink text-paper px-4 py-3 flex items-center justify-between">
        <div className="mono text-[10px] tracking-[0.18em]">SALES PIPELINE · GATED</div>
        <div className="mono text-[10px] tracking-[0.18em] text-volt">ENTRY CONDITIONS ENFORCED</div>
      </div>
      <div className="grid grid-cols-5 divide-x-2 divide-ink">
        {stages.map((s, i) => (
          <div key={s.name} className={`p-4 ${i % 2 ? "bg-bone" : ""}`}>
            <div className="mono text-[10px] tracking-[0.16em] text-fire">STAGE {i + 1}</div>
            <div className="display text-lg mt-1">{s.name}</div>
            <div className="mt-3 text-[11px] mono text-ink/60">ENTRY</div>
            <div className="text-[12px] text-ink/80 leading-snug">{s.gate}</div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-ink px-4 py-3 mono text-[11px] text-ink/70">
        A deal cannot sit in a stage it has not earned. Forecasts start meaning something.
      </div>
    </div>
  );
}

/* CHAPTER 07 · TTV + motion split + renewals cards */
function OperateCards() {
  const items = [
    {
      k: "Time to value",
      title: "The nudge fires when it should, not when someone notices",
      body: "We defined the first key actions a trialist should complete, then wired automatic notifications to those moments. Getting a user to value is the whole game in self-service. It should not be left to memory.",
      tint: "bg-fire text-paper",
    },
    {
      k: "Two motions",
      title: "Self-service and sales-assisted, kept apart",
      body: "Blending them hides the truth of both. We separated the paths so each has its own conversion logic and its own numbers, and the business can see clearly where to invest.",
      tint: "bg-volt text-ink",
    },
    {
      k: "Renewals",
      title: "A pipeline of their own, not a memory task",
      body: "Renewals are where SaaS revenue is won or lost, and the stage most companies leave unstructured. A dedicated renewal pipeline with early warning and its own automation, worked as a deliberate process.",
      tint: "bg-ink text-paper",
    },
  ];
  return (
    <div className="grid gap-4">
      {items.map((c) => (
        <div key={c.k} className={`brutal-border p-6 grid md:grid-cols-[200px_1fr] gap-6 ${c.tint}`}>
          <div>
            <div className="mono text-[10px] tracking-[0.18em] opacity-70">{c.k.toUpperCase()}</div>
            <div className="display text-2xl mt-2 leading-tight">{c.title}</div>
          </div>
          <p className="text-[14px] leading-relaxed opacity-95">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function DetrackCase() {
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
        <div className="absolute -right-24 top-24 w-[520px] h-[520px] bg-volt rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] bg-fire rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-fire">REVLYN</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-fire">WORK</Link>
            <span>/</span>
            <span className="text-ink">DETRACK</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
                <span className="text-fire">PUBLISHED · SAAS STACK SIMPLIFICATION</span>
              </div>

              <h1
                data-reveal
                className="display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.92] tracking-[-0.045em]"
              >
                A HubSpot rebuilt for{" "}
                <span className="inline-block bg-volt text-ink px-2 py-0.5 -rotate-1">clarity</span>{" "}
                and{" "}
                <span className="inline-block bg-fire text-paper px-2 py-0.5 rotate-1">scale</span>.
                <br />
                <span className="text-ink/60">Not more features. Less doubt.</span>
              </h1>

              <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-xl text-lg leading-snug text-ink/80">
                Detrack is a delivery management platform used across Australia, New Zealand, and
                beyond. Like most SaaS teams that grow fast, their stack had grown with them, and no
                one was quite sure which number was the true one. So we rebuilt the portal in a
                fixed order, clean then structure then connect then operate, and gave the team a
                CRM they could trust without checking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#framework"
                  className="brutal-border bg-ink text-paper px-5 py-3 display text-sm brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all inline-flex items-center gap-2"
                >
                  READ THE METHOD ↓
                </a>
                <BookCallButton className="brutal-border bg-paper text-ink px-5 py-3 display text-sm hover:bg-volt transition-colors inline-flex items-center gap-2">
                  BOOK A CALL →
                </BookCallButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <StackSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TAGS / AT A GLANCE ═══════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { k: "Sector", v: "Delivery management SaaS" },
              { k: "Geography", v: "ANZ + international" },
              { k: "Stack", v: "HubSpot · ChartMogul · Intercom" },
              { k: "Method", v: "Clean · Structure · Connect · Operate" },
            ].map((t) => (
              <div key={t.k} className="border-2 border-paper/15 p-4">
                <div className="mono text-[10px] tracking-[0.16em] text-paper/50">{t.k.toUpperCase()}</div>
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
            <ChapterHead num="01" title="Who Detrack is, and why the stack got busy" />
          </div>
          <div className="md:col-span-8 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Detrack is delivery management software used across Australia, New Zealand, and beyond.
              Like most SaaS teams that scale quickly, their systems grew alongside the business.
              More tools joined, more integrations wired up, more data crossed between them, and
              slowly it became harder to say what any single number really meant.
            </p>
            <p>
              The brief they came to us with had three parts, and they were tied together. Simplify
              the database. Make it ready for scale. Help the sales team actually use it. A CRM that
              nobody trusts is a CRM that nobody uses well, and one that is not built for scale gets
              less trustworthy every month as volume grows. Pull one thread and the other two move.
            </p>
            <p className="text-ink/70 italic">
              We are focusing this write-up on the method rather than the account specifics. The
              value here is the sequence. It applies to any SaaS team whose CRM has quietly outgrown
              its own structure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE WALKED INTO ═══════════ */}
      <section className="border-b-2 border-ink bg-bone relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="02" title="A connected stack, drifting quietly" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              HubSpot as the CRM. ChartMogul for SaaS metrics. Intercom in the reporting picture.
              Each tool doing its job. The problem was in the gaps between them.
            </p>
          </div>
          <div className="md:col-span-8">
            <StackBoard />
          </div>
        </div>
      </section>

      {/* ═══════════ FRAMEWORK TITLE ═══════════ */}
      <section id="framework" className="border-b-2 border-ink bg-fire text-paper relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-volt opacity-25 blur-[100px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-paper/70 mb-3">THE METHOD</div>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-4xl">
            Clean, then structure, then connect, then operate.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/90">
            We work these problems in a fixed order, because doing them out of order wastes the
            earlier work. You cannot build reliable reporting on dirty data, and you cannot integrate
            cleanly into a structure that has not been defined yet. The sequence itself is the
            framework.
          </p>
        </div>
      </section>

      {/* ═══════════ STAGE 1 · CLEAN ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="03" title="Stage one, clean the foundation" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Duplicates first. Then enrichment. Clean but empty records are only marginally more
              useful than dirty ones, and enrichment onto duplicates just multiplies the mess.
            </p>
          </div>
          <div className="md:col-span-8">
            <DedupeVisual />
          </div>
        </div>
      </section>

      {/* ═══════════ STAGE 2 · STRUCTURE ═══════════ */}
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
            <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 04</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight leading-[1.05]">
              Stage two, structure that holds
            </h2>
            <p className="mt-4 text-sm text-paper/70 leading-relaxed max-w-sm">
              Cleaning is temporary unless something keeps it in place. So we build the two artifacts
              that give a growing team a shared understanding of its own system.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-6">
            <DictionaryCard />
            <WorkflowTracker />
          </div>
        </div>
      </section>

      {/* ═══════════ STAGE 3 · CONNECT ═══════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="05" title="Stage three, connect on purpose" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Only now do we touch the integrations. An integration is only as good as the structure
              it writes into. Wire it into an undefined system and you just move mess between tools
              faster.
            </p>
          </div>
          <div className="md:col-span-8">
            <SyncMap />
          </div>
        </div>
      </section>

      {/* ═══════════ STAGE 4 · OPERATE ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="06" title="Stage four, the pipelines on top" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              With clean, structured, well-connected data underneath, the pipelines that sit on it
              can finally be reliable. The sales pipeline gets entry conditions on every stage.
            </p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <PipelineBoard />
            <OperateCards />
          </div>
        </div>
      </section>

      {/* ═══════════ PULLQUOTE ═══════════ */}
      <section className="border-b-2 border-ink bg-volt text-ink relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-fire opacity-15 blur-[80px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20">
          <div className="mono text-[11px] tracking-[0.2em] text-ink/70 mb-6">THE PRINCIPLE</div>
          <blockquote className="display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            <span className="text-ink/40">&ldquo;</span>
            A CRM should be something the team can trust without checking. Simplicity is not the
            absence of capability. It is the result of putting each piece in its right place.
            <span className="text-ink/40">&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* ═══════════ WHAT CHANGED ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="07" title="What the portal looks like now" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Not a portal with more in it. One with less doubt in it.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-4">
            {[
              {
                title: "Clean earns trust",
                body: "Duplicates removed first, then enrichment on top of a true record base. Reports stopped undercounting and workflows stopped firing twice.",
                tint: "bg-fire text-paper",
              },
              {
                title: "Structure keeps it",
                body: "A data dictionary and a workflow tracker turn tribal knowledge into documented structure that survives the next new hire and the next new tool.",
                tint: "bg-volt text-ink",
              },
              {
                title: "Integrations become debuggable",
                body: "Every sync is mapped and logged, with one authoritative source per field. When something looks wrong, you can see exactly what moved, when, and from where.",
                tint: "bg-ink text-paper",
              },
              {
                title: "Pipelines mean something",
                body: "Gated sales stages, a real renewal pipeline, and time-to-value nudges that fire on the moment, not on someone remembering.",
                tint: "bg-paper text-ink border-2 border-ink",
              },
            ].map((c) => (
              <div key={c.title} className={`brutal-border p-5 grid md:grid-cols-[220px_1fr] gap-5 items-start ${c.tint}`}>
                <div className="display text-2xl leading-tight">{c.title}</div>
                <div className="text-[14px] leading-relaxed opacity-95">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FRAMEWORK RECAP ═══════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-3">THE FRAMEWORK, IN ONE VIEW</div>
          <h2 className="display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl">
            Four stages. In this order. Every time.
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              {
                n: "01",
                t: "Clean the foundation",
                b: "Remove duplicates first, then enrich. The record base is true before anything is built on it.",
              },
              {
                n: "02",
                t: "Structure for scale",
                b: "Views, fields, workflows. A data dictionary and a workflow tracker so the cleanliness holds.",
              },
              {
                n: "03",
                t: "Connect deliberately",
                b: "Integrate only into a defined structure. Every sync logged and mapped. One authoritative source per field.",
              },
              {
                n: "04",
                t: "Operate on top",
                b: "Gated sales pipelines, time-to-value automation, self-service split from sales-assisted, a dedicated renewal process.",
              },
            ].map((s) => (
              <div key={s.n} className="brutal-border bg-paper p-5">
                <div className="mono text-[11px] tracking-[0.18em] text-fire">STAGE {s.n}</div>
                <div className="display text-xl mt-2 leading-tight">{s.t}</div>
                <p className="mt-3 text-[13px] text-ink/75 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[14px] text-ink/70 max-w-3xl italic">
            Each stage depends on the one before it. Skipping ahead is what leaves most SaaS CRMs in
            the state this one started in.
          </p>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              If your stack has quietly outgrown its structure, we should talk.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              30 minutes, no deck. We open your portal on the call and tell you the three things
              we would clean, structure, connect, or gate first.
            </p>
          </div>
          <BookCallButton className="inline-flex items-center gap-3 brutal-border bg-ink text-paper px-6 py-4 display text-xl brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all">
            BOOK A CALL →
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
