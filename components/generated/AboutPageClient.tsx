"use client";

import Link from "next/link";
import Image from "next/image";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";
const teamGrid = "/team-grid.jpg";


export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6 pb-16">
        <div className="border-2 border-ink shadow-[12px_12px_0_0_var(--color-ink)] bg-paper overflow-hidden">
          <Dossier />
          <Origin />
          <Manifesto />
          <StrikeTeam />
          <Rituals />
          <ClosingSpread />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─────────────────  DOSSIER HERO (Editorial signature)  ───────────────── */
function Dossier() {
  return (
    <header className="border-b-2 border-ink p-8 md:p-16 flex flex-col md:flex-row gap-12 items-end relative">
      <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
      <div className="flex-1 relative">
        <p className="mono text-xs uppercase tracking-[0.28em] mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-ink" />
          Provenance &amp; Practice · File 001
        </p>
        <h1 className="display text-[clamp(3rem,9vw,8rem)] font-extrabold tracking-[-0.045em] leading-[0.85] uppercase mb-10">
          Who is
          <br />
          <span className="text-fire">Revlyn<span className="text-ink">.</span></span>
        </h1>
        <p className="text-2xl md:text-3xl font-medium max-w-2xl leading-[1.15] tracking-tight">
          A senior CRM, RevOps, GTM and AI practice for founders and revenue leaders who need systems that run,
          not slide decks about systems that might.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 mono text-xs uppercase tracking-widest">
          <span className="inline-flex items-center gap-2 bg-ink text-paper px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" />
            Practice active · Gurugram &amp; remote
          </span>
          <span className="text-ink/60">Est. 2018 · 127 builds shipped</span>
        </div>
      </div>

      <aside className="w-full md:w-[280px] shrink-0 border-t-2 md:border-t-0 md:border-l-2 border-ink pt-8 md:pt-0 md:pl-8">
        <div className="relative aspect-square bg-volt border-2 border-ink overflow-hidden">
          <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 100" fill="none" aria-hidden>
            <circle cx="50" cy="50" r="34" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" stroke="#0a0a0a" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M20 20L80 80M80 20L20 80" stroke="#0a0a0a" strokeWidth="2" />
            <path d="M50 4V16M50 84V96M4 50H16M84 50H96" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="50" cy="50" r="4" fill="#ff5722" />
          </svg>
          <div className="absolute top-2 left-2 mono text-[9px] uppercase tracking-widest bg-paper border border-ink px-1.5 py-0.5">
            Schematic · 01
          </div>
          <div className="absolute bottom-2 right-2 mono text-[9px] uppercase tracking-widest bg-paper border border-ink px-1.5 py-0.5">
            Rev. today
          </div>
        </div>
        <div className="mt-4 flex justify-between mono text-[10px] uppercase tracking-widest text-ink/70">
          <span>signed</span>
          <span>the operators</span>
        </div>
      </aside>
    </header>
  );
}

/* ─────────────────  ORIGIN + LEDGER  ───────────────── */
function Origin() {
  return (
    <section className="grid md:grid-cols-12 border-b-2 border-ink">
      <div className="md:col-span-4 p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 23px, rgba(255,255,255,0.6) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.6) 24px)",
            backgroundSize: "24px 24px",
          }}
        />
        <h2 className="relative mono text-xs uppercase tracking-[0.28em] mb-10 text-fire">The origin</h2>
        <p className="relative text-xl leading-relaxed">
          Revlyn was started by operators who had spent a decade running Sales, Marketing, RevOps and GTM inside
          B2B companies. We kept noticing the same thing: the software wasn't the bottleneck. The person at the
          keyboard was. Most portals were being built by juniors or by consultants who had never carried a number.
        </p>
        <p className="relative mt-6 text-base text-paper/75 leading-relaxed">
          So we built the team we wish we had hired: senior end to end, in your Slack, no account manager in the middle.
        </p>

        <dl className="relative mt-12 space-y-3">
          {[
            ["Established", "2018"],
            ["Builds shipped", "127+"],
            ["Avg. operator tenure", "8 years"],
            ["Systems we run", "HubSpot · Salesforce · Gong · Segment"],
            ["Base", "Gurugram · remote"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-2"
            >
              <dt className="mono text-[11px] uppercase tracking-widest text-paper/60">{k}</dt>
              <dd className="mono text-sm text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="md:col-span-8 p-8 md:p-16 relative">
        <div className="max-w-3xl">
          <p className="mono text-xs uppercase tracking-[0.28em] mb-6 text-ink/50">The practice, in plain terms</p>
          <p className="display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            We don't recommend tools from a slide deck. We sit inside your Slack, take ownership of the portal,
            and execute the RevOps and GTM roadmap that internal teams are too underwater to touch.
          </p>
          <p className="mt-8 text-lg text-ink/75 leading-relaxed">
            Most CRM, RevOps and GTM work fails at the same seam: the moment the SOW ends and the person who
            wrote the workflows leaves the building. Our practice is designed to live on the other side of that
            seam, so the portal keeps behaving in year two, year three, year four.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: "120+", l: "Portals audited", bg: "bg-paper" },
            { n: "$4B+", l: "Pipeline under management", bg: "bg-paper" },
            { n: "14k", l: "Workflows written", bg: "bg-volt" },
            { n: "< 14m", l: "Avg. Slack first-reply", bg: "bg-paper" },
          ].map((s) => (
            <div key={s.l} className={`border-2 border-ink p-5 ${s.bg}`}>
              <div className="mono display text-3xl md:text-4xl leading-none">{s.n}</div>
              <div className="mt-3 mono text-[10px] uppercase tracking-widest text-ink/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────  MANIFESTO  ───────────────── */
function Manifesto() {
  const principles = [
    {
      n: "01",
      t: "Systems over software",
      p: "HubSpot, Salesforce, Gong, they're containers. The physics of your revenue live underneath. We solve the physics first, then pick the container that fits.",
    },
    {
      n: "02",
      t: "Documentation is the product",
      p: "If a workflow isn't documented in language a new hire can read, it doesn't really exist. Every build ends with a runbook and a Loom trail. Yours to keep.",
    },
    {
      n: "03",
      t: "No hidden hand-offs",
      p: "The senior operator who scopes the work is the same one writing the workflow at 4pm on a Tuesday. There is no account manager translating between you and the build.",
    },
    {
      n: "04",
      t: "Output over activity",
      p: "We don't sell hours. We measure ourselves by the friction removed from your Monday, the reports the board finally trusts, and the seat you no longer need to hire.",
    },
    {
      n: "05",
      t: "Educate, don't blame",
      p: "Portals drift because businesses grow. Shadow-CRM in Sheets is a signal, not a discipline problem. Our job is to explain what's happening and rebuild it, without a shame list.",
    },
    {
      n: "06",
      t: "Slack, not status decks",
      p: "One shared channel with the operators writing the workflows. Average first reply under 14 minutes during working hours. Weekly status decks retire themselves.",
    },
  ];
  return (
    <section className="p-8 md:p-16 border-b-2 border-ink bg-fire text-paper relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 12px)",
        }}
      />
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] mb-4">Operator manifesto</p>
          <h2 className="display text-[clamp(2.25rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
            Six things we
            <br />
            actually mean.
          </h2>
        </div>
        <p className="max-w-sm mono text-xs uppercase tracking-widest text-paper/80">
          Every operator on the practice signs this before they touch a portal. It's the difference between an
          agency and a team that keeps showing up.
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-x-16 gap-y-14">
        {principles.map((p) => (
          <div key={p.n} className="border-t-2 border-paper/30 pt-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="mono text-3xl md:text-4xl">{p.n}</span>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/70">principle</span>
            </div>
            <h3
              className="display text-2xl md:text-3xl font-bold uppercase tracking-[-0.02em] leading-[1.05] mb-4"
              style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
            >
              {p.t}
            </h3>
            <p className="text-base md:text-lg text-paper/90 leading-relaxed max-w-lg">{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────  STRIKE TEAM (Roster)  ───────────────── */
function StrikeTeam() {
  const roster = [
    {
      role: "Founding operator · CRM &amp; architecture",
      name: "The architect",
      tenure: "14 yrs",
      spec: "Object models",
      note: "Was Head of RevOps at two B2B SaaS companies before Revlyn. Writes the schema before the first workflow ships.",
      tint: "fire",
    },
    {
      role: "Founding operator · GTM &amp; lifecycle",
      name: "The GTM lead",
      tenure: "11 yrs",
      spec: "Lifecycle",
      note: "Ex-Head of Marketing Ops. Owns the funnel math, from first touch to renewal, and the reports the board reads.",
      tint: "volt",
    },
    {
      role: "Principal · automation &amp; AI",
      name: "The automation engineer",
      tenure: "9 yrs",
      spec: "Workflows · AI",
      note: "Ships every workflow with a Loom and a rollback plan. Currently building the internal library of tested AI agents.",
      tint: "fire",
    },
    {
      role: "Principal · data &amp; reporting",
      name: "The data lead",
      tenure: "10 yrs",
      spec: "Attribution",
      note: "Reconciles every board metric back to the property, workflow, and stage that produced it. Retires shadow-CRMs.",
      tint: "volt",
    },
    {
      role: "Principal · sales enablement",
      name: "The enablement lead",
      tenure: "8 yrs",
      spec: "Rep adoption",
      note: "Writes the playbook and the Loom library so a new rep can onboard in a day, not a quarter.",
      tint: "fire",
    },
    {
      role: "Principal · portal governance",
      name: "The governance lead",
      tenure: "7 yrs",
      spec: "Change control",
      note: "Runs the weekly change queue, the monthly reconciliation, and the quarterly retire-what-no-longer-earns-its-keep review.",
      tint: "volt",
    },
  ];

  return (
    <section className="p-8 md:p-16 border-b-2 border-ink">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] mb-3 text-ink/50">
            Strike team · direct access
          </p>
          <h2
            className="display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-[-0.04em] leading-[0.95]"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            Senior operators.
            <br />
            <span className="text-ink/40">No juniors, no account managers.</span>
          </h2>
        </div>
        <div className="max-w-xs mono text-xs uppercase tracking-widest text-ink/60">
          Average tenure per operator sits at 9.8 years of CRM, RevOps, GTM or AI leadership. Every one of them is
          in your Slack.
        </div>
      </div>

      <div className="mb-10 grid md:grid-cols-3 gap-0 border-2 border-ink">
        {roster.map((r, i) => (
          <article
            key={r.name}
            className={`p-6 md:p-7 bg-paper relative transition-all group hover:bg-bone
              ${i % 3 !== 2 ? "md:border-r-2 md:border-ink" : ""}
              ${i < 3 ? "md:border-b-2 md:border-ink" : ""}
              ${i !== roster.length - 1 ? "border-b-2 border-ink md:border-b-0" : ""}
              ${i < 3 ? "border-b-2 border-ink" : ""}
            `}
          >
            <div
              className="absolute top-0 right-0 mono text-[10px] uppercase tracking-widest px-2 py-1 border-l-2 border-b-2 border-ink"
              style={{ background: r.tint === "fire" ? "#ff5722" : "#ffeb3b", color: "#0a0a0a" }}
            >
              {String(i + 1).padStart(2, "0")} / 06
            </div>
            <div
              className="aspect-[4/5] bg-ink/5 border-2 border-ink mb-6 relative overflow-hidden"
              style={{
                backgroundImage: `url(${teamGrid})`,
                backgroundSize: "300% 200%",
                backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 100}%`,
                filter: "grayscale(1) contrast(1.05)",
              }}
            >
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-2 left-2 mono text-[9px] uppercase tracking-widest bg-paper border border-ink px-1.5 py-0.5">
                Portrait · {String(i + 1).padStart(3, "0")}
              </div>
            </div>

            <p
              className="mono text-[10px] uppercase tracking-widest text-ink/55 mb-1"
              dangerouslySetInnerHTML={{ __html: r.role }}
            />
            <h4 className="display text-xl md:text-2xl font-bold uppercase tracking-tight">{r.name}</h4>

            <div className="mt-4 pt-4 border-t-2 border-dashed border-ink/20 space-y-2">
              <Row k="Tenure" v={r.tenure} />
              <Row k="Specialization" v={r.spec} />
              <Row k="In your Slack" v="Daily" />
            </div>

            <p className="mt-5 text-sm text-ink/70 leading-relaxed border-t border-ink/10 pt-4">{r.note}</p>
          </article>
        ))}
      </div>

      <div className="border-2 border-ink bg-bone p-6 md:p-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="mono text-xs uppercase tracking-widest text-ink/70">
          Practice size held at 12 operators, on purpose. We take on two founding teams per quarter.
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-fire transition-colors self-start md:self-auto"
        >
          Meet the operator on your account <span>→</span>
        </Link>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between items-baseline mono text-[11px] uppercase tracking-wider">
      <span className="text-ink/55">{k}</span>
      <span className="text-ink font-medium">{v}</span>
    </div>
  );
}

/* ─────────────────  RITUALS (Protocols)  ───────────────── */
function Rituals() {
  const protocols = [
    {
      n: "01",
      when: "Every Monday",
      title: "The Monday note",
      body: "Thirty minutes in a shared huddle. We walk the pipeline, name the deals that stalled, and agree the two portal changes shipping this week. No status deck.",
      icon: "clock",
    },
    {
      n: "02",
      when: "Every Wednesday",
      title: "Portal drop, versioned",
      body: "Two to five workflow, property or report changes go live, each with a Loom and a two-line changelog. Nothing surprises your reps on Monday.",
      icon: "ship",
    },
    {
      n: "03",
      when: "Every Friday",
      title: "Data health sweep",
      body: "Dedupes, stalled deals, missing owners, expired sequences. Whatever the portal quietly broke this week gets caught before it lands in the Monday report.",
      icon: "sweep",
    },
    {
      n: "04",
      when: "End of month",
      title: "Numbers reconcile",
      body: "Every board metric traced back to the property, workflow and stage that produced it. Definitions signed off. The Sheets shadow-CRM retires itself, quietly.",
      icon: "check",
    },
    {
      n: "05",
      when: "End of quarter",
      title: "Retire what stopped earning",
      body: "We rewind the quarter, archive automations that stopped pulling weight, and sketch the two or three moves that unlock next quarter's number.",
      icon: "archive",
    },
    {
      n: "06",
      when: "Continuously",
      title: "One Slack, same operators",
      body: "The people in your channel are the ones writing the workflows. Average first reply under 14 minutes during working hours. No account manager in between.",
      icon: "slack",
    },
  ];

  return (
    <section className="p-8 md:p-16 bg-bone border-b-2 border-ink relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] mb-3 text-ink/50">Operational rituals</p>
          <h2
            className="display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em]"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            How we
            <br />
            show up.
          </h2>
        </div>
        <p className="max-w-md text-base text-ink/70 leading-relaxed">
          Six recurring protocols. Together they replace the four internal seats most companies hire to run
          HubSpot well, and they run every week whether we hear from you or not.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {protocols.map((p, i) => (
          <article
            key={p.n}
            className="bg-paper border-2 border-ink p-7 relative group hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="mono text-[10px] uppercase tracking-widest text-ink/55 mb-1">
                  Protocol · {p.n}
                </div>
                <div className="mono text-xs uppercase tracking-widest text-fire">{p.when}</div>
              </div>
              <ProtocolIcon kind={p.icon} />
            </div>
            <h3
              className="display text-xl md:text-2xl font-bold uppercase leading-tight tracking-[-0.01em] mb-3"
              style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
            >
              {p.title}
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed">{p.body}</p>
            <div className="mt-6 pt-4 border-t border-dashed border-ink/20 flex items-center justify-between mono text-[10px] uppercase tracking-widest text-ink/50">
              <span>Owner · practice</span>
              <span>Rev · rolling</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProtocolIcon({ kind }: { kind: string }) {
  const stroke = "#ff5722";
  const props = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "ship":
      return (
        <svg {...props}>
          <path d="M3 12h18l-2 6H5z" />
          <path d="M7 12V5h10v7" />
          <path d="M12 5v7" />
        </svg>
      );
    case "sweep":
      return (
        <svg {...props}>
          <path d="M14 4l6 6-9 9H5v-6z" />
          <path d="M13 5l6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      );
    case "archive":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="4" />
          <path d="M5 8v12h14V8" />
          <path d="M10 13h4" />
        </svg>
      );
    case "slack":
    default:
      return (
        <svg {...props}>
          <path d="M4 12h9M4 12a3 3 0 010-6h3M13 12a3 3 0 016 0M13 12V6M20 12v3a3 3 0 01-6 0" />
        </svg>
      );
  }
}

/* ─────────────────  CLOSING CTA  ───────────────── */
function ClosingSpread() {
  return (
    <section className="p-8 md:p-24 bg-ink text-paper relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-10 flex justify-center opacity-[0.06] select-none"
        aria-hidden
      >
        <span
          className="display leading-none tracking-tighter"
          style={{ fontSize: "clamp(9rem, 26vw, 22rem)", color: "#f2f0ea" }}
        >
          revlyn.
        </span>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <p className="mono text-xs uppercase tracking-[0.28em] mb-8 text-volt">Ready when you are</p>
        <h2
          className="display text-[clamp(2.5rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] mb-12 max-w-4xl"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
        >
          Put a senior operator
          <br />
          <span className="text-fire">in your portal<span className="text-paper">.</span></span>
        </h2>
        <p className="max-w-xl text-lg text-paper/70 leading-relaxed mb-10">
          A 30-minute call, no deck. We look at your HubSpot together and tell you whether we're the right team,
          which layer to touch first, and what a realistic six-week and six-month picture looks like.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@revlyn.io?subject=Intro%20call"
            className="inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-8 py-4 mono text-sm uppercase tracking-widest shadow-[8px_8px_0_0_var(--color-volt)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--color-volt)] transition-all"
          >
            Book a 30-min call <span>→</span>
          </a>
          <Link
            href="/hubspot-as-a-service"
            className="inline-flex items-center gap-2 border-2 border-paper/40 px-8 py-4 mono text-sm uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors"
          >
            Read the flagship offer
          </Link>
        </div>
        <p className="mt-10 mono text-[10px] uppercase tracking-widest text-paper/40">
          File revised · {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} · Signed, the operators
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FOOTER  ───────────────────────────── */
function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
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

      <div className="relative max-w-[1400px] mx-auto px-6 pt-16 pb-14">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-6">
            <Link href="/" aria-label="Revlyn home">
              <img
                src={revlynWordmark}
                alt="Revlyn"
                className="h-10 md:h-12 w-auto object-contain"
                style={{ filter: "invert(1) hue-rotate(180deg)" }}
              />
            </Link>
            <p className="mt-6 max-w-md text-paper/70 text-lg leading-relaxed">
              A senior team for CRM, RevOps, GTM and AI. Built for Founders and Heads of Sales,
              Marketing, Revenue and GTM. We ship revenue systems and hand them back working.
            </p>
          </div>
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-paper/10">
            <div className="text-[11px] tracking-[0.22em] uppercase text-paper/50">
              Field notes, once a month
            </div>
            <p className="mt-3 text-paper/85">
              Short essays on revenue systems, RevOps and AI. No sales, no filler.
            </p>
            <form
              className="mt-5 flex items-center gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent border-b border-paper/30 focus:border-fire outline-none py-2 text-paper placeholder:text-paper/40"
              />
              <button className="rounded-full bg-paper text-ink px-4 py-2 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          {[
            {
              h: "Explore",
              l: [
                ["Home", "/"],
                ["The system", "/#engine"],
                ["Services", "/#services"],
                ["Method", "/#method"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Case studies", "/#proof"],
                ["Team", "/#team"],
                ["Principles", "/#rules"],
              ],
            },
            {
              h: "Contact",
              l: [
                ["Contact us", "/contact"],
                ["Book a call", "/#book"],
                ["Careers", "#"],
              ],
            },
            {
              h: "Follow",
              l: [
                ["LinkedIn", "https://www.linkedin.com/company/revlynhq/"],
                ["X / Twitter", "#"],
                ["Substack", "#"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-[11px] tracking-[0.22em] uppercase text-paper/45 mb-4">{col.h}</div>
              <ul className="space-y-2.5">
                {col.l.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-1 text-paper/85 hover:text-fire transition-colors"
                    >
                      <span>{label}</span>
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-paper/50 text-sm">© {new Date().getFullYear()} Revlyn. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-paper/50">
            <a href="#" className="hover:text-fire transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fire transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
