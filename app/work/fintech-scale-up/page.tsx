import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Series B fintech, HubSpot rebuild in 47 days · Revlyn",
  description: "How a Series B B2B fintech went from a leaking HubSpot portal to attributed pipeline in 47 days. Redacted artifacts, real numbers, exact sequence.",
  alternates: { canonical: "/work/fintech-scale-up" },
};

/* Redacted client — the actual case, names removed. */
const CLIENT = {
  codename: "MERCURY",
  sector: "B2B fintech · payments infrastructure",
  stage: "Series B, ~180 people, 11 AEs",
  region: "US + LATAM",
  engagement: "HubSpot rebuild + 4-month operator retainer",
};

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-paper text-ink">

      {/* ── Masthead ── */}
      <section className="border-b-2 border-ink relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-ink">REVLYN</Link>
            <span>/</span>
            <span>WORK</span>
            <span>/</span>
            <span className="text-ink">CASE 001</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <div className="mono text-[11px] tracking-[0.2em] text-fire mb-4">
                REDACTED · CLIENT NAME WITHHELD BY REQUEST
              </div>
              <h1
                data-reveal
                className="display text-[clamp(2.4rem,6.4vw,5.6rem)] leading-[0.95] tracking-[-0.04em]"
              >
                A Series B fintech went from a leaking HubSpot to attributed pipeline in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">47 days<span className="text-fire">.</span></span>
                  <span className="absolute left-0 right-[0.35em] bottom-[0.06em] h-[0.07em] bg-fire" aria-hidden />
                </span>
              </h1>
              <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-2xl text-lg leading-snug text-ink/80">
                They had two agencies before us. Both handed over a Notion doc and left. We rebuilt the portal, put a
                senior operator on their Slack, and stayed for the four months it took to see the numbers move on the board.
                This page is the work. Names removed, screenshots redacted, sequence intact.
              </p>
            </div>

            {/* Dossier card */}
            <aside className="md:col-span-4">
              <div className="brutal-border bg-ink text-paper p-5 brutal-shadow-fire">
                <div className="mono text-[10px] tracking-[0.2em] text-paper/50 mb-3">DOSSIER</div>
                <dl className="space-y-3 text-sm">
                  {[
                    ["Codename", CLIENT.codename],
                    ["Sector", CLIENT.sector],
                    ["Stage", CLIENT.stage],
                    ["Region", CLIENT.region],
                    ["Engagement", CLIENT.engagement],
                    ["Duration", "47 days build + 4 mo. retainer"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[100px_1fr] gap-3 border-b border-paper/10 pb-2 last:border-0">
                      <dt className="mono text-[10px] tracking-[0.14em] text-paper/50 uppercase pt-0.5">{k}</dt>
                      <dd className="text-paper">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-3 flex items-center gap-2 mono text-[10px] text-ink/50">
                <span className="w-1.5 h-1.5 rounded-full bg-fire" />
                Verified by client · Reference call available on request
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Numbers band ── */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "Attributed pipeline", before: "0 %", after: "83 %", note: "of new opps sourced" },
            { k: "Avg. sales cycle", before: "63 d", after: "47 d", note: "-25% vs. Q previous" },
            { k: "Stage 3 → 4 drop-off", before: "71 %", after: "38 %", note: "exit criteria enforced" },
            { k: "Rep hrs / week in admin", before: "9.5 h", after: "3.1 h", note: "workflow automation" },
          ].map((s) => (
            <div key={s.k}>
              <div className="mono text-[10px] tracking-[0.14em] text-paper/50">{s.k.toUpperCase()}</div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="display text-3xl text-paper/40 line-through decoration-fire/70">{s.before}</span>
                <span className="text-paper/40">→</span>
                <span className="display text-4xl text-volt">{s.after}</span>
              </div>
              <div className="text-[11px] text-paper/60 mt-1">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Context ── */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 01</div>
            <h2 className="display text-3xl mt-2 tracking-tight">What we walked into</h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Two years of HubSpot debt. Three lifecycle stages doing the work of eleven. Forms firing to nobody.
              Marketing was reporting MQLs from a spreadsheet, sales was reporting pipeline from Chorus, finance
              was reporting revenue from Stripe. Three sources of truth, none of them agreed within 12%.
            </p>
            <p>
              The board asked one question at the Q3 review: <em>where does new pipeline come from?</em>
              Nobody could answer it in under nine minutes and four caveats. That's the entire brief.
            </p>
          </div>
        </div>
      </section>

      {/* ── Artifact 01 · Lifecycle map ── */}
      <ArtifactBlock
        chapter="02"
        title="The lifecycle map, redacted"
        note="What actually moves a person from anonymous visitor to closed-won. Drawn once, enforced everywhere."
        artifact={<LifecycleMapSVG />}
      />

      {/* ── Artifact 02 · Pipeline waterfall ── */}
      <ArtifactBlock
        chapter="03"
        title="Weekly pipeline ledger"
        note="Exported from the portal, redacted for this page. Same digest goes to the CRO every Monday 09:00 IST."
        artifact={<PipelineLedger />}
      />

      {/* ── Artifact 03 · Slack thread ── */}
      <ArtifactBlock
        chapter="04"
        title="A Sunday, stage 4"
        note="The kind of moment agencies don't handle. A senior operator, not a ticket queue."
        artifact={<SlackThread />}
      />

      {/* ── Sequence ── */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-4">
              <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 05</div>
              <h2 className="display text-3xl mt-2 tracking-tight">The exact sequence</h2>
            </div>
            <p className="md:col-span-8 text-[15px] leading-relaxed text-ink/80">
              47 days, week by week. Nothing was skipped, nothing was outsourced.
              This is the same operating rhythm every Revlyn engagement runs on.
            </p>
          </div>

          <ol className="space-y-3">
            {[
              ["W-01", "Portal audit", "Every property, workflow, list, report. 214 items catalogued. 61% marked for deletion."],
              ["W-02", "Lifecycle re-draw", "Six-stage model agreed with sales + marketing in a single 90-min room."],
              ["W-03", "Schema rebuild", "Contacts, companies, deals reworked. Custom objects for feature-flag & sandbox usage."],
              ["W-04", "Migration cutover", "Weekend migration. 187k contacts, 42k deals. 0.4% duplicate rate post-cut."],
              ["W-05", "Workflow rebuild", "23 automation flows, all owner-assigned, all with kill-switches."],
              ["W-06", "Reporting", "Board-grade weekly digest. One dashboard replaces four."],
              ["W-07", "Handover, sort of", "We stayed. Retainer starts. Slack open, response < 14 min."],
            ].map(([w, t, note]) => (
              <li key={w} className="bg-paper brutal-border p-4 grid md:grid-cols-[80px_260px_1fr] gap-4 items-start">
                <div className="display text-2xl text-fire tabular-nums">{w}</div>
                <div className="font-medium">{t}</div>
                <div className="text-sm text-ink/70">{note}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Pullquote ── */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-6">REFERENCE ON FILE</div>
          <blockquote className="display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            <span className="text-fire">&ldquo;</span>
            We stopped calling them our agency in month two. They're the ops team we hadn't hired yet.
            The difference is a senior person picking up on a Sunday.
            <span className="text-fire">&rdquo;</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-fire text-paper flex items-center justify-center display">
              VP
            </div>
            <div className="text-sm">
              <div className="font-medium">VP Revenue Operations</div>
              <div className="mono text-[11px] text-paper/60">Series B fintech · reference call on request</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              If any of this looks like your Monday, we should talk.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              30 minutes, no deck. We open your portal on the call and tell you the three things we'd change first.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 brutal-border bg-ink text-paper px-6 py-4 display text-xl brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all"
          >
            BOOK A CALL →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────── Artifact block wrapper ─────────────────────── */
function ArtifactBlock({
  chapter, title, note, artifact,
}: { chapter: string; title: string; note: string; artifact: React.ReactNode }) {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER {chapter}</div>
          <h2 className="display text-3xl mt-2 tracking-tight">{title}</h2>
          <p className="mt-4 text-sm text-ink/65 leading-relaxed">{note}</p>
          <div className="mt-6 mono text-[10px] tracking-[0.16em] text-ink/45">
            ARTIFACT · REDACTED FOR PUBLICATION
          </div>
        </div>
        <div className="md:col-span-8">{artifact}</div>
      </div>
    </section>
  );
}

/* ─────────────────────── Artifact 01 · Lifecycle SVG ─────────────────────── */
function LifecycleMapSVG() {
  const stages = [
    { k: "01", label: "Anonymous", entry: "Web visit / ad click" },
    { k: "02", label: "Known", entry: "Form fill · qualified email" },
    { k: "03", label: "MQL", entry: "Score ≥ 40 · ICP match" },
    { k: "04", label: "SQL", entry: "AE call booked · fit confirmed" },
    { k: "05", label: "Opportunity", entry: "Champion identified · budget known" },
    { k: "06", label: "Customer", entry: "Signed · onboarded · live" },
  ];
  return (
    <div className="brutal-border bg-paper p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/50 mb-4">
        <span>FIG.02 · LIFECYCLE MAP (v3.1)</span>
        <span>MERCURY / RevOps</span>
      </div>
      <div className="grid grid-cols-6 gap-2 relative">
        {stages.map((s, i) => (
          <div key={s.k} className="relative">
            <div className={`brutal-border p-3 ${i === stages.length - 1 ? "bg-volt" : i === 0 ? "bg-bone" : "bg-paper"}`}>
              <div className="mono text-[10px] text-ink/50">{s.k}</div>
              <div className="display text-sm mt-1 leading-tight">{s.label}</div>
              <div className="mono text-[9px] text-ink/60 mt-2 leading-snug">{s.entry}</div>
            </div>
            {i < stages.length - 1 && (
              <svg className="absolute -right-3 top-1/2 -translate-y-1/2 z-10" width="14" height="10" viewBox="0 0 14 10">
                <path d="M0 5 L11 5 M8 2 L11 5 L8 8" stroke="var(--color-fire)" strokeWidth="1.6" fill="none" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Rules band */}
      <div className="mt-6 grid grid-cols-3 gap-2 text-[11px]">
        {[
          ["Exit rule 03 → 04", "Score ≥ 40 AND ICP fit = true"],
          ["Exit rule 04 → 05", "AE call disposition = qualified"],
          ["Exit rule 05 → 06", "Countersigned MSA in HubSpot"],
        ].map(([r, v]) => (
          <div key={r} className="border border-ink/15 p-2">
            <div className="mono text-[9px] text-ink/50 tracking-[0.12em]">{r.toUpperCase()}</div>
            <div className="mt-1 text-ink font-medium">{v}</div>
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-4 mono text-[10px] bg-ink text-paper px-2 py-1 rotate-3">
        v3.1 · SIGNED OFF
      </div>
    </div>
  );
}

/* ─────────────────────── Artifact 02 · Pipeline ledger ─────────────────────── */
function PipelineLedger() {
  const rows = [
    { source: "Outbound · SDR sequences", opps: 24, val: "$412k", trend: "+18%" },
    { source: "Inbound · demo form",       opps: 17, val: "$298k", trend: "+42%" },
    { source: "Partner · referral",        opps:  9, val: "$186k", trend: "+11%" },
    { source: "Events · field",            opps:  6, val: "$121k", trend: "-4%"  },
    { source: "Attributed · unknown",      opps:  3, val: "$44k",  trend: "-61%" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-bone">
        <div className="mono text-[10px] tracking-[0.16em] text-ink/70">WEEKLY LEDGER · W-19 · MERCURY</div>
        <div className="mono text-[10px] text-ink/50">EXPORTED FROM PORTAL · REDACTED</div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-ink/15 text-left">
            <th className="px-5 py-2 mono text-[10px] tracking-[0.14em] text-ink/50 font-normal">SOURCE</th>
            <th className="px-3 py-2 mono text-[10px] tracking-[0.14em] text-ink/50 font-normal text-right">NEW OPPS</th>
            <th className="px-3 py-2 mono text-[10px] tracking-[0.14em] text-ink/50 font-normal text-right">VALUE</th>
            <th className="px-5 py-2 mono text-[10px] tracking-[0.14em] text-ink/50 font-normal text-right">WoW</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.source} className="border-b border-ink/8 hover:bg-bone/50 transition-colors">
              <td className="px-5 py-3">{r.source}</td>
              <td className="px-3 py-3 tabular-nums text-right">{r.opps}</td>
              <td className="px-3 py-3 tabular-nums text-right font-medium">{r.val}</td>
              <td className={`px-5 py-3 tabular-nums text-right mono text-[12px] ${r.trend.startsWith("+") ? "text-emerald-700" : "text-fire"}`}>
                {r.trend}
              </td>
            </tr>
          ))}
          <tr className="bg-ink text-paper">
            <td className="px-5 py-3 display">Total · sourced</td>
            <td className="px-3 py-3 tabular-nums text-right display">59</td>
            <td className="px-3 py-3 tabular-nums text-right display text-volt">$1.06M</td>
            <td className="px-5 py-3 tabular-nums text-right mono text-volt">+22%</td>
          </tr>
        </tbody>
      </table>
      <div className="px-5 py-3 border-t-2 border-ink bg-paper flex items-center justify-between mono text-[10px] text-ink/60">
        <span>Sent to CRO · Monday 09:00 IST · auto-generated</span>
        <span className="text-fire">83% attributed (vs. 0% pre-engagement)</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Artifact 03 · Slack thread ─────────────────────── */
function SlackThread() {
  const msgs = [
    { who: "VP Rev", role: "client", when: "Sun 21:14", body: "Meridian deal — stage 4, champion just went dark. Losing sleep." },
    { who: "Nikhil",  role: "revlyn", when: "Sun 21:17", body: "On it. Pulling their engagement + last 5 email opens." },
    { who: "Nikhil",  role: "revlyn", when: "Sun 21:23", body: "Champion opened pricing PDF 6× on Fri. Second contact (CFO) hasn't engaged. Classic budget-hold pattern, not disinterest." },
    { who: "Nikhil",  role: "revlyn", when: "Sun 21:24", body: "Suggest AE sends a 3-line note to CFO Monday 08:00. Framed as ROI, not follow-up. I'll draft." },
    { who: "VP Rev",  role: "client", when: "Sun 21:31", body: "Send it. Thanks Nikhil." },
    { who: "Nikhil",  role: "revlyn", when: "Sun 21:47", body: "Draft in your DM. Also queued a snooze workflow — deal reopens Monday 08:00 with a task on the AE. No manual step." },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-bone">
        <div className="flex items-center gap-2 mono text-[11px] text-ink/70">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          #mercury-revlyn · Slack Connect
        </div>
        <div className="mono text-[10px] text-ink/50">REDACTED THREAD · CLIENT CONSENT</div>
      </div>
      <div className="divide-y divide-ink/8">
        {msgs.map((m, i) => (
          <div key={i} className="px-5 py-3 flex gap-3">
            <div className={`w-8 h-8 flex-shrink-0 rounded flex items-center justify-center display text-[13px] ${
              m.role === "revlyn" ? "bg-fire text-paper" : "bg-ink text-paper"
            }`}>
              {m.who[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-sm">{m.who}</span>
                <span className="mono text-[10px] text-ink/40">{m.when}</span>
                {m.role === "revlyn" && (
                  <span className="mono text-[9px] bg-fire text-paper px-1.5 py-0.5 tracking-wider">REVLYN</span>
                )}
              </div>
              <div className="text-[14px] mt-0.5 leading-snug text-ink/85">{m.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 border-t-2 border-ink flex items-center justify-between mono text-[10px]">
        <span className="text-ink/60">First response · 3 min · deal closed W+2</span>
        <span className="text-fire">This is what the retainer is.</span>
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
