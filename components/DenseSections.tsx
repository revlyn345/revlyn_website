/* ═══════════════════════════════════════════════════════════════
   REVLYN · DENSE SECTIONS (Linear / Vercel energy)
   Ultra-detailed spec sheets, operating rhythm, proof ledger.
   Every number, tool and deliverable named. Nothing decorative.
   ═══════════════════════════════════════════════════════════════ */

/* ─── shared atoms ─────────────────────────────────────────── */
function Dot({ tone = "fire" }: { tone?: "fire" | "volt" | "ink" | "mute" }) {
  const c =
    tone === "fire" ? "bg-fire" : tone === "volt" ? "bg-volt" : tone === "mute" ? "bg-ink/25" : "bg-ink";
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${c} shrink-0`} />;
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
   2 · METHOD RHYTHM - how a week / month / quarter looks
   ═══════════════════════════════════════════════════════════════ */

const WEEK = [
  { d: "MON", h: "09:30", t: "Forecast call", who: "Head of Revenue + Principal", out: "Weekly commit locked" },
  { d: "MON", h: "16:00", t: "Async digest", who: "Operator → team", out: "Loom + doc, 8 min" },
  { d: "TUE", h: "10:00", t: "RevOps standup", who: "Operator + RevOps lead", out: "Ticket queue triaged" },
  { d: "WED", h: "Flex", t: "Build day", who: "Operator (heads-down)", out: "Ship + PR review" },
  { d: "THU", h: "14:00", t: "Deal desk", who: "Principal + AE managers", out: "3–5 deals unblocked" },
  { d: "FRI", h: "11:00", t: "Demo + retro", who: "Full team", out: "What shipped, what's next" },
];

const MONTH = [
  "Board pack draft: pipeline, forecast, agent ROI, hygiene score",
  "Comp plan reconciliation vs. attainment",
  "ICP tier refresh from CS + won/lost data",
  "Agent scorecard review, retire ≤ 60% precision",
];

const QUARTER = [
  "QBR: motion, message, funnel, headcount",
  "Portal audit re-run against original blueprint",
  "Segment expansion decision (up-market / new region)",
  "Tooling review: 1 in, 1 out, no bloat",
];

export function MethodRhythm() {
  return (
    <section id="method" className="bg-bone/40 border-t border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHead
          eyebrow="§ 04 · Method"
          count="Cadence"
          title="An operating rhythm you can set your watch to."
          sub="We don't run 'workshops'. We run your revenue meetings, own the doc, and leave a paper trail your board can read."
        />

        {/* WEEKLY TABLE: below md, a fixed 5-column grid has no room for real
            text, so mobile gets a stacked card list instead of a squeezed
            table that would wrap unreadably or get clipped. */}
        <div className="md:hidden border border-ink/15 bg-paper divide-y divide-ink/10">
          {WEEK.map((r, i) => (
            <div key={i} className="p-4">
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] text-ink tabular-nums">{r.d} · {r.h}</span>
              </div>
              <div className="mt-1.5 font-medium text-ink text-[14px]">{r.t}</div>
              <div className="mt-0.5 text-[13px] text-ink/65">{r.who}</div>
              <div className="mt-2 flex items-center gap-2 text-[13px] text-ink/65">
                <Dot tone={i % 2 === 0 ? "fire" : "volt"} />
                {r.out}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block border border-ink/15 bg-paper overflow-hidden">
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
