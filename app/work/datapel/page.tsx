import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Datapel · Lead conversion 19% → 68% in a two-week HubSpot rebuild",
  description:
    "Datapel had three years of HubSpot debt: dead pipelines, 25k contacts with sub-50% fill rate, and a sales team that had stopped trusting the CRM. We rebuilt it in two weeks. Lead conversion went from 19% to 68%.",
  alternates: { canonical: "/work/datapel" },
  openGraph: {
    title: "Datapel · Lead conversion 19% → 68% after a two-week HubSpot rebuild",
    description:
      "Three years of drift. Two weeks to rebuild. One month sitting with reps every second day. The numbers moved because the definitions did.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function DatapelCase() {
  return (
    <div className="min-h-screen bg-paper text-ink">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        {/* background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* volt slab */}
        <div className="absolute -right-24 top-24 w-[520px] h-[520px] bg-volt rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] bg-fire rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-fire">REVLYN</Link>
            <span>/</span>
            <Link href="/work/fintech-scale-up" className="hover:text-fire">WORK</Link>
            <span>/</span>
            <span className="text-ink">DATAPEL</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT · Headline */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
                <span className="text-fire">PUBLISHED · CLIENT ON THE RECORD</span>
              </div>

              <h1
                data-reveal
                className="display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.92] tracking-[-0.045em]"
              >
                Datapel took lead conversion from{" "}
                <span className="inline-block bg-ink text-paper px-2 py-0.5 -rotate-1">19%</span>{" "}
                to{" "}
                <span className="inline-block bg-fire text-paper px-2 py-0.5 rotate-1">68%</span>.
                <br />
                <span className="text-ink/60">Two weeks. One rebuild.</span>
              </h1>

              <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-xl text-lg leading-snug text-ink/80">
                Three years of HubSpot debt. 25,000 contacts nobody trusted. Six pipelines, none of them
                updated. We rebuilt the portal in a fortnight, then sat with the reps every second day
                for a month. Demo-to-closure improved by 50% along the way.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#the-numbers"
                  className="brutal-border bg-ink text-paper px-5 py-3 display text-sm brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all inline-flex items-center gap-2"
                >
                  READ THE NUMBERS ↓
                </a>
                <BookCallButton className="brutal-border bg-paper text-ink px-5 py-3 display text-sm hover:bg-volt transition-colors inline-flex items-center gap-2">
                  BOOK A CALL →
                </BookCallButton>
              </div>
            </div>

            {/* RIGHT · Chart artifact */}
            <div className="lg:col-span-5">
              <ConversionChartCard />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ NUMBERS BAND ══════════════════════ */}
      <section id="the-numbers" className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex items-baseline justify-between mb-8 border-b border-paper/15 pb-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">THE SCOREBOARD</div>
            <div className="mono text-[10px] text-paper/50">MEASURED · POST-LAUNCH</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { k: "Lead conversion", before: "19%", after: "68%", delta: "+49pp", accent: "volt" },
              { k: "Demo to closure", before: "28%", after: "~42%", delta: "+50%", accent: "fire" },
              { k: "Build time", before: "—", after: "2 wks", delta: "sign-off → live", accent: "volt" },
              { k: "Engagement", before: "Project", after: "Ongoing", delta: "moved to HaaS", accent: "fire" },
            ].map((s) => (
              <div key={s.k} className="border-2 border-paper/15 p-4 bg-ink/60 backdrop-blur">
                <div className="mono text-[10px] tracking-[0.14em] text-paper/50">{s.k.toUpperCase()}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="display text-2xl text-paper/40 line-through decoration-fire/70 decoration-2">
                    {s.before}
                  </span>
                  <span className="text-paper/40">→</span>
                  <span
                    className={`display text-4xl md:text-5xl tracking-tight ${
                      s.accent === "volt" ? "text-volt" : "text-fire"
                    }`}
                  >
                    {s.after}
                  </span>
                </div>
                <div
                  className={`mt-2 mono text-[10px] tracking-[0.14em] inline-block px-2 py-0.5 ${
                    s.accent === "volt" ? "bg-volt text-ink" : "bg-fire text-paper"
                  }`}
                >
                  {s.delta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHO ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="01" title="Who Datapel is" />
          </div>
          <div className="md:col-span-5 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Datapel builds warehouse management software. Twenty-plus years in market, based in
              Australia, serving wholesalers, distributors, manufacturers, retailers, and 3PLs across
              more than 30 industries. Over a million stock items on their platform, native
              integrations with MYOB, Xero, and the major eCommerce platforms.
            </p>
            <p>
              Their sales motion is standard B2B software. A lead comes in, gets qualified, books a
              demo, a salesperson works it to close. HubSpot was the system of record for all of it.
              That's the part that had stopped working.
            </p>
          </div>
          <aside className="md:col-span-3">
            <div className="brutal-border bg-bone p-4">
              <div className="mono text-[10px] tracking-[0.16em] text-ink/60 mb-3">AT A GLANCE</div>
              <ul className="space-y-2 text-[13px]">
                {[
                  ["20+", "years in market"],
                  ["1M+", "stock items managed"],
                  ["30+", "industries served"],
                  ["3", "eCommerce integrations"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between border-b border-ink/10 pb-1.5 last:border-0">
                    <span className="display text-xl text-fire tabular-nums">{k}</span>
                    <span className="text-ink/70">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════════════ OPENING POSITION ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="02" title="What we walked into" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Three years of use without a defined process. Every symptom below traces back to one
              missing thing: nobody had ever agreed what a stage meant.
            </p>
            <div className="mt-6 mono text-[10px] tracking-[0.16em] text-ink/45">
              ARTIFACT · SYMPTOM BOARD
            </div>
          </div>

          <div className="md:col-span-8">
            <PortalStateBoard />
          </div>
        </div>
      </section>

      {/* ══════════════════════ AUDIT ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="03" title="Week zero, the audit" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              We did not clean anything first. A cleanup without understanding why the portal drifted
              decays back to the same state within a quarter.
            </p>
          </div>
          <div className="md:col-span-8">
            <AuditCoverageCard />
          </div>
        </div>
      </section>

      {/* ══════════════════════ DEFINITIONS ══════════════════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 04</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight text-paper">
              Definitions before settings
            </h2>
            <p className="mt-4 text-sm text-paper/70 leading-relaxed max-w-sm">
              Before touching HubSpot, we sat with Datapel and wrote down answers to questions that
              had never been answered in three years.
            </p>
          </div>
          <div className="md:col-span-8">
            <DefinitionsDoc />
          </div>
        </div>
      </section>

      {/* ══════════════════════ BUILD TIMELINE ══════════════════════ */}
      <section className="border-b-2 border-ink relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-4">
              <ChapterHead num="05" title="The build, two weeks" />
            </div>
            <p className="md:col-span-8 text-[15px] leading-relaxed text-ink/80">
              Two weeks was possible because none of the thinking happened during the build. Every
              decision was already made and written down. What follows is what shipped, in what order.
            </p>
          </div>

          <BuildTimeline />
        </div>
      </section>

      {/* ══════════════════════ REP SESSIONS ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="06" title="Every second day, for a month" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              A rebuilt CRM that reps route around is a failed project. So this phase got as much
              attention as the build.
            </p>
          </div>
          <div className="md:col-span-8">
            <RepSessionsCard />
          </div>
        </div>
      </section>

      {/* ══════════════════════ PULLQUOTE ══════════════════════ */}
      <section className="border-b-2 border-ink bg-fire text-paper relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-volt opacity-20 blur-[80px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20">
          <div className="mono text-[11px] tracking-[0.2em] text-paper/70 mb-6">ON THE RECORD</div>
          <blockquote className="display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            <span className="text-paper/50">&ldquo;</span>
            The moment they first saw the action plan, or the first pipeline review where the numbers
            were real.
            <span className="text-paper/50">&rdquo;</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-ink text-fire flex items-center justify-center display text-lg">
              PR
            </div>
            <div className="text-sm">
              <div className="font-semibold">Peter Rocke</div>
              <div className="mono text-[11px] text-paper/70">Datapel · named reference on file</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT CHANGED ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="07" title="What actually changed" />
          </div>
          <div className="md:col-span-8 grid gap-4">
            {[
              {
                stat: "19% → 68%",
                title: "Lead conversion",
                body: "Lead volume did not change. Every lead now has a defined next step, an owner, and a reminder that fires at the right time. Leads stopped going quiet because someone forgot.",
                color: "fire",
              },
              {
                stat: "28% → ~42%",
                title: "Demo to closure",
                body: "With entry criteria on every stage and field logic enforcing them, reps knew exactly what had to be true to move a deal forward, and managers could forecast from a pipeline they trusted.",
                color: "volt",
              },
              {
                stat: "Project → Ongoing",
                title: "The engagement became permanent",
                body: "Datapel moved onto our HubSpot as a Service model after the project. Continuous optimisation and enablement as the business grows. Revenue has been growing month on month since.",
                color: "ink",
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`brutal-border p-5 grid md:grid-cols-[220px_1fr] gap-5 items-start ${
                  c.color === "fire"
                    ? "bg-fire text-paper"
                    : c.color === "volt"
                      ? "bg-volt text-ink"
                      : "bg-ink text-paper"
                }`}
              >
                <div>
                  <div className="mono text-[10px] tracking-[0.16em] opacity-70">
                    {c.title.toUpperCase()}
                  </div>
                  <div className="display text-3xl md:text-4xl mt-1 tracking-tight tabular-nums">
                    {c.stat}
                  </div>
                </div>
                <div className="text-[14px] leading-relaxed opacity-90">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ LESSON ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-3">
            IF THIS SOUNDS LIKE YOUR PORTAL
          </div>
          <h2 className="display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl">
            A three-year-old HubSpot with dead pipelines and half-empty records is not a tooling
            problem<span className="text-fire">.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/80">
            It is a missing-definitions problem, and no amount of cleanup fixes it, because the
            cleanup decays. Define the objects, agree the process, write the plan, then build. The
            build takes two weeks. The definitions are the hard part.
          </p>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              If any of this looks like your Monday, we should talk.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              30 minutes, no deck. We open your portal on the call and tell you the three things
              we'd change first.
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

/* ─────────────────────── Chapter heading ─────────────────────── */
function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER {num}</span>
        <span className="h-px flex-1 bg-fire/30" />
      </div>
      <h2 className="display text-3xl md:text-4xl mt-3 tracking-tight leading-tight">{title}</h2>
    </>
  );
}

/* ─────────────────────── Conversion chart card (hero) ─────────────────────── */
function ConversionChartCard() {
  // simulated month-over-month lead conversion rate (before / rebuild / after)
  const data = [
    { m: "M-3", v: 21, phase: "before" },
    { m: "M-2", v: 18, phase: "before" },
    { m: "M-1", v: 19, phase: "before" },
    { m: "M0",  v: 22, phase: "rebuild" },
    { m: "M+1", v: 38, phase: "after" },
    { m: "M+2", v: 54, phase: "after" },
    { m: "M+3", v: 62, phase: "after" },
    { m: "M+4", v: 68, phase: "after" },
  ];
  const max = 80;

  return (
    <div className="brutal-border bg-paper overflow-hidden brutal-shadow-fire">
      <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-ink bg-ink text-paper">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          <span className="mono text-[10px] tracking-[0.14em]">LEAD CONVERSION · DATAPEL</span>
        </div>
        <span className="mono text-[10px] text-paper/60">MoM · %</span>
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <div className="mono text-[10px] text-ink/50 tracking-[0.14em]">CURRENT</div>
            <div className="display text-4xl md:text-5xl tabular-nums leading-none">
              68<span className="text-fire text-2xl">%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="mono text-[10px] text-ink/50 tracking-[0.14em]">Δ VS. BASELINE</div>
            <div className="display text-2xl text-fire tabular-nums">+49pp</div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-[180px] border-b border-l border-ink/25">
          {/* Gridlines */}
          {[25, 50, 75].map((g) => (
            <div
              key={g}
              className="absolute left-0 right-0 border-t border-dashed border-ink/10 flex justify-end pr-1"
              style={{ bottom: `${(g / max) * 100}%` }}
            >
              <span className="mono text-[9px] text-ink/40 -translate-y-2 bg-paper px-1">{g}%</span>
            </div>
          ))}

          {/* Rebuild band */}
          <div
            className="absolute top-0 bottom-0 bg-volt/25 border-l border-r border-dashed border-ink/40"
            style={{ left: `${(3.5 / (data.length - 1)) * 100}%`, width: `${(1 / (data.length - 1)) * 100}%` }}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 mono text-[9px] tracking-[0.14em] text-ink bg-volt px-1.5 py-0.5 whitespace-nowrap">
              REBUILD
            </div>
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between pt-4">
            {data.map((d, i) => (
              <div key={d.m} className="flex-1 flex flex-col items-center justify-end h-full px-0.5">
                <div className="relative w-full flex justify-center">
                  <span
                    className={`mono text-[9px] mb-1 tabular-nums ${
                      i === data.length - 1 ? "text-fire font-bold" : "text-ink/50"
                    }`}
                  >
                    {d.v}
                  </span>
                </div>
                <div
                  className={`w-full max-w-[22px] border border-ink/50 transition-all ${
                    d.phase === "before" ? "bg-ink/60" : d.phase === "rebuild" ? "bg-volt" : "bg-fire"
                  }`}
                  style={{ height: `${(d.v / max) * 100}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* X labels */}
        <div className="flex justify-between mt-2 px-1">
          {data.map((d) => (
            <span key={d.m} className="mono text-[9px] text-ink/45 tabular-nums">{d.m}</span>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-3 border-t border-ink/10 flex flex-wrap gap-x-4 gap-y-1 mono text-[10px] tracking-[0.1em]">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-ink/60 border border-ink" /> Before</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-volt border border-ink" /> Rebuild</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-fire border border-ink" /> After</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Symptom board ─────────────────────── */
function PortalStateBoard() {
  const symptoms = [
    {
      k: "Multiple dead pipelines",
      v: "Deals sat in stages that had no relation to where the conversation actually was. Some pipelines duplicated each other.",
      chip: "6 pipelines · 0 owners",
      icon: "⚠︎",
      tint: "bg-fire text-paper",
    },
    {
      k: "25,000+ contacts, <50% fill rate",
      v: "More than half the fields on more than half the database were empty. Any filter you built silently excluded the records with missing data.",
      chip: "Segmentation broken",
      icon: "◐",
      tint: "bg-ink text-paper",
    },
    {
      k: "Multiple sources overwriting",
      v: "Forms, imports, and integrations all pushed data into the portal with no rules about which source wins. A rep would enrich a contact and a sync overwrote it the next day.",
      chip: "9 sources · 0 rules",
      icon: "↯",
      tint: "bg-fire text-paper",
    },
    {
      k: "Reps had stopped trusting it",
      v: "The team had learned that fixing data was pointless. Visible symptoms: 19% conversion, 28% demo-to-closure. Underlying problem: nobody could answer three questions from the CRM.",
      chip: "System of record → paperweight",
      icon: "✕",
      tint: "bg-ink text-paper",
    },
  ];
  return (
    <div className="brutal-border bg-paper p-5 md:p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/50 mb-5 pb-3 border-b border-ink/15">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-fire" />
          FIG.02 · SYMPTOM BOARD
        </span>
        <span>DATAPEL / OPENING POSITION</span>
      </div>
      <ul className="grid md:grid-cols-2 gap-4">
        {symptoms.map((s) => (
          <li key={s.k} className="border-2 border-ink p-4 relative bg-paper">
            <div className={`absolute -top-3 -right-3 mono text-[9px] px-2 py-1 tracking-wider ${s.tint} border-2 border-ink`}>
              {s.chip}
            </div>
            <div className="flex items-start gap-3">
              <span className="display text-2xl text-fire leading-none">{s.icon}</span>
              <div>
                <div className="display text-lg leading-tight">{s.k}</div>
                <div className="mt-2 text-[13px] text-ink/75 leading-relaxed">{s.v}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t-2 border-ink pt-4 flex items-start gap-3 bg-volt/30 -mx-5 -mb-5 md:-mx-6 md:-mb-6 px-5 md:px-6 pb-5 md:pb-6">
        <span className="display text-3xl text-fire leading-none">?</span>
        <div className="text-[14px] text-ink/85 leading-relaxed">
          Three questions nobody could answer from the CRM:{" "}
          <em>how many real leads do we have, where is each deal, and what should a rep do next.</em>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Audit coverage card ─────────────────────── */
function AuditCoverageCard() {
  const items = [
    ["Contacts", "25,412", "bg-fire text-paper"],
    ["Companies", "8,140", "bg-ink text-paper"],
    ["Deals", "3,860", "bg-ink text-paper"],
    ["Pipelines", "6", "bg-fire text-paper"],
    ["Stages audited", "41", "bg-ink text-paper"],
    ["Properties in use", "218", "bg-ink text-paper"],
    ["Data sources writing", "9", "bg-fire text-paper"],
    ["Workflows reviewed", "74", "bg-ink text-paper"],
  ] as const;
  return (
    <div className="brutal-border bg-paper p-5 md:p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/50 mb-5 pb-3 border-b border-ink/15">
        <span>FIG.03 · AUDIT COVERAGE</span>
        <span>DATAPEL / WEEK 0</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map(([k, v, tint]) => (
          <div key={k} className={`brutal-border p-3 ${tint}`}>
            <div className="mono text-[9px] tracking-[0.14em] opacity-70">{k.toUpperCase()}</div>
            <div className="display text-2xl md:text-3xl mt-1 tabular-nums">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-[13px] text-ink/75 leading-relaxed border-l-4 border-fire pl-4 py-1">
        For each object we documented what it was <em>supposed</em> to represent, what it{" "}
        <em>actually</em> contained, and which source created or modified it. The output was not a
        cleanup list. It was the reason the portal had drifted.
      </div>
    </div>
  );
}

/* ─────────────────────── Definitions doc ─────────────────────── */
function DefinitionsDoc() {
  const defs = [
    { q: "What is a contact, a company, a deal?", a: "One definition per object. Named creation trigger. Named owner. Named archive rule." },
    { q: "How does a lead arrive, and what happens next?", a: "Capture → qualification → conversion → follow-up → nurture. One sequence. One named owner at each step." },
    { q: "What does each pipeline stage mean?", a: "Entry criteria per stage. What must be true about the deal before a rep is allowed to move it there." },
    { q: "Which data source wins?", a: "One source of truth per property. Everything else reads. Nothing else overwrites." },
  ];
  return (
    <div className="brutal-border bg-paper text-ink overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-volt">
        <div className="mono text-[10px] tracking-[0.16em] text-ink">
          DEFINITIONS · v1.0 · DATAPEL × REVLYN
        </div>
        <div className="mono text-[10px] text-ink/70">SIGNED OFF · WEEK 1</div>
      </div>

      <ol className="divide-y-2 divide-ink/10">
        {defs.map((d, i) => (
          <li key={d.q} className="px-5 py-4 grid grid-cols-[50px_1fr] gap-4 hover:bg-bone transition-colors">
            <div className="display text-3xl text-fire tabular-nums leading-none pt-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="font-semibold text-[15px]">{d.q}</div>
              <div className="mt-1 text-[13px] text-ink/70 leading-relaxed">{d.a}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="px-5 py-3 border-t-2 border-ink bg-ink text-paper flex items-center justify-between mono text-[10px]">
        <span className="text-paper/70">Every step agreed before anything was built</span>
        <span className="text-fire">→ action plan · then two-week build</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Build timeline ─────────────────────── */
function BuildTimeline() {
  const steps = [
    ["D-01", "Pipeline consolidation", "Six pipelines merged into two, aligned to the agreed stage definitions."],
    ["D-03", "Stage entry criteria", "Every stage got explicit conditions. Reps cannot advance a deal until the fields at that stage are filled."],
    ["D-05", "Object schema rebuild", "Contacts, companies, deals reworked. Property logic mapped to the agreed process."],
    ["D-07", "Data-source override rules", "One source of truth per property. Manual work stops getting wiped by syncs."],
    ["D-09", "Workflow rebuild", "Routing, task creation, follow-up automations, all owner-assigned."],
    ["D-11", "Reporting", "Pipeline reports a manager can read in under a minute. One dashboard replaces four."],
    ["D-14", "Go live", "Reps switched over. Documentation shipped alongside, not after."],
  ];
  return (
    <div className="relative">
      {/* progress bar */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-ink/15 md:-translate-x-1/2" />
      <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-fire via-fire to-volt md:-translate-x-1/2" />

      <ol className="space-y-4">
        {steps.map(([d, t, note], i) => (
          <li key={d} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:direction-rtl"}`}>
            {/* dot */}
            <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-10">
              <div className="w-4 h-4 bg-fire border-2 border-ink rounded-full" />
            </div>
            <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
              <div className={`inline-flex items-center gap-2 mono text-[10px] tracking-[0.16em] mb-2 ${i % 2 === 0 ? "" : ""}`}>
                <span className="display text-xl text-fire tabular-nums">{d}</span>
              </div>
              <div className="brutal-border bg-paper p-4 text-left">
                <div className="display text-lg tracking-tight">{t}</div>
                <div className="mt-1.5 text-sm text-ink/70 leading-relaxed">{note}</div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─────────────────────── Rep sessions ─────────────────────── */
function RepSessionsCard() {
  const sessions = [
    { d: "Day 02", who: "AE · SMB desk", note: "Follow-up tasks piling up. Reminders arriving late.", tag: "friction" },
    { d: "Day 04", who: "AE · enterprise", note: "Wanted a quicker path to log competitor mentions on a deal.", tag: "request" },
    { d: "Day 06", who: "SDR lead", note: "Routing rules over-fired for one region. Fixed same afternoon.", tag: "shipped" },
    { d: "Day 09", who: "Sales manager", note: "Wanted stage-3 dwell time on the weekly digest. Added.", tag: "shipped" },
    { d: "Day 12", who: "AE · SMB desk", note: "Task reminders now surface at the moment the action is due, not sitting in a list.", tag: "shipped" },
    { d: "Day 16", who: "AE · enterprise", note: "Automation absorbed the bulk of routine follow-up. Reps stopped depending on remembering.", tag: "outcome" },
  ];
  const tagStyle = (t: string) =>
    t === "friction"
      ? "bg-fire text-paper"
      : t === "request"
        ? "bg-ink text-paper"
        : t === "shipped"
          ? "bg-volt text-ink"
          : "bg-paper text-ink border border-ink";
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-ink text-paper">
        <div className="flex items-center gap-2 mono text-[10px] tracking-[0.16em]">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          WORKING-SESSION LOG · FIRST MONTH POST-LAUNCH
        </div>
        <div className="mono text-[10px] text-paper/50">EVERY 2ND DAY · WITH REPS</div>
      </div>
      <ul className="divide-y divide-ink/10">
        {sessions.map((s) => (
          <li key={s.d} className="px-5 py-3.5 grid grid-cols-[70px_160px_1fr_auto] gap-4 items-start hover:bg-bone/50 transition-colors">
            <div className="display text-lg text-fire tabular-nums">{s.d}</div>
            <div className="mono text-[11px] text-ink/70 pt-1">{s.who}</div>
            <div className="text-[14px] text-ink/85 leading-snug">{s.note}</div>
            <div className={`mono text-[9px] tracking-[0.14em] px-2 py-1 h-fit ${tagStyle(s.tag)}`}>
              {s.tag.toUpperCase()}
            </div>
          </li>
        ))}
      </ul>
      <div className="px-5 py-3 border-t-2 border-ink bg-volt flex items-center justify-between mono text-[10px]">
        <span className="text-ink">Each session shipped changes back into the portal</span>
        <span className="text-ink font-bold">Reps stopped routing around the CRM</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Footer ─────────────────────── */
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
