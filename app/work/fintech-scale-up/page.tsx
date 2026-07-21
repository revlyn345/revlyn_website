import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      {/* Giant wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 md:-bottom-16 flex justify-center">
        <span
          className="display leading-none tracking-tighter text-transparent select-none"
          style={{
            fontSize: "clamp(8rem, 26vw, 24rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          revlyn
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Image src={revlynWordmark} alt="Revlyn" width={120} height={32} className="h-8 w-auto" style={{ filter: "invert(1) hue-rotate(180deg)" }} />
          <p className="mt-4 text-paper/60 max-w-xs">
            An extended CRM, RevOps, GTM and AI team for B2B founders and revenue leaders.
          </p>
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/65">Explore</div>
          <ul className="mt-4 space-y-2.5 text-paper/85">
            <li><Link href="/work/fintech-scale-up" className="hover:text-fire">Work</Link></li>
            <li><Link href="/use-cases" className="hover:text-fire">Use cases</Link></li>
            <li><Link href="/about" className="hover:text-fire">About</Link></li>
            <li><Link href="/contact" className="hover:text-fire">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper/65">Say hello</div>
          <ul className="mt-4 space-y-2.5 text-paper/85">
            <li><a href="mailto:info@revlyn.io" className="hover:text-fire">info@revlyn.io</a></li>
            <li>+91 75030 44000</li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="border-t border-paper/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-paper/65">
          <span className="flex items-center gap-3">
            <span className="mono">© {new Date().getFullYear()} Revlyn</span>
            <span className="text-paper/25">·</span>
            <span>Built by operators, in Gurugram</span>
          </span>
          <span className="flex items-center gap-5">
            <a href="#" className="hover:text-paper transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <a href="#" className="hover:text-paper transition-colors">Security</a>
            <a href="#" className="hover:text-paper transition-colors">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}