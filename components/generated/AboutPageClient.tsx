"use client";

import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset, not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";


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
    <header className="border-b-2 border-ink p-8 md:p-16 relative overflow-hidden">
      <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
      <div className="relative grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-7">
          <h1 className="display text-[clamp(2.1rem,4.6vw,3.8rem)] font-extrabold tracking-[-0.03em] leading-[1.08] mb-8">
            <span className="whitespace-nowrap">We&rsquo;re the operators</span>
            <br />
            <span className="whitespace-nowrap">behind your revenue</span>
            <br />
            systems.
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl leading-[1.25] tracking-tight">
            Revlyn is a Revenue Engineering team that brings HubSpot, RevOps, automation, reporting and data together, then stays close to keep it all working.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="relative w-full aspect-[4/3] border-2 border-ink overflow-hidden">
            <Image
              src="/about-hero.avif"
              alt="A Revlyn operator working inside a client's reporting dashboard"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
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
          Revlyn was built by operators who spent years running Sales, Marketing, RevOps and GTM inside B2B companies.
        </p>
        <p className="relative mt-6 text-xl leading-relaxed">
          We kept seeing the same gap. Companies had capable tools, but no clear ownership across the systems, processes and data that made revenue run.
        </p>
        <p className="relative mt-6 text-base text-paper/75 leading-relaxed">
          So we built Revlyn to stay close to the work, from architecture and implementation through ongoing operation.
        </p>

        <dl className="relative mt-12 space-y-3">
          {[
            ["Established", "2025"],
            ["Builds shipped", "50+"],
            ["Avg. operator experience", "8+ years"],
            ["Systems we run", "HubSpot · Bitscale"],
            ["Base", "Gurugram · Remote"],
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
          <p className="mono text-xs uppercase tracking-[0.28em] mb-6 text-ink/50">How we work</p>
          <h2
            className="display text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.1]"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            We do the work, not just recommend it.
          </h2>
          <p className="mt-8 text-lg text-ink/75 leading-relaxed">
            We work inside your systems and alongside your revenue team. We build the workflows, improve the
            processes, keep reporting reliable and own the roadmap as the business changes.
          </p>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">
            The same operators who understand the problem stay close to the execution. There is no handoff
            between strategy and delivery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: "50+", l: "Portals audited", bg: "bg-paper" },
            { n: "$1B+", l: "Client pipeline supported", bg: "bg-paper" },
            { n: "2K+", l: "Workflows built", bg: "bg-volt" },
            { n: "< 14 min", l: "Avg. Slack first response", bg: "bg-paper" },
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
      t: "Operators stay involved",
      p: "The people who understand the problem stay close to the execution.",
    },
    {
      n: "02",
      t: "One team across the system",
      p: "HubSpot, process, reporting, automation and data are treated as one revenue operation, not separate projects.",
    },
    {
      n: "03",
      t: "Built to keep working",
      p: "Documentation, ownership and ongoing improvement are part of the work from the beginning.",
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
      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16">
        <div className="md:max-w-xl">
          <p className="mono text-xs uppercase tracking-[0.28em] mb-4">What makes Revlyn different</p>
          <h2 className="display text-[clamp(1.9rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            We stay accountable for the system, not just the project.
          </h2>
        </div>
        <div className="max-w-md text-base text-paper/85 leading-relaxed space-y-4">
          <p>
            Most engagements do not fail because the initial build was wrong. They fail because the business
            changes, the portal drifts, and ownership becomes unclear.
          </p>
          <p>
            Revlyn stays close to the work. The same team that understands the system continues to improve it
            as your processes, data and priorities change.
          </p>
        </div>
      </div>

      <div className="relative grid md:grid-cols-3 gap-x-16 gap-y-14">
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
      role: "CEO &amp; founder · CRM &amp; architecture",
      name: "Rishabh",
      photo: "/team/rishabh.jpg",
      photoPosition: "center 20%",
      spec: "Object models",
      note: "Was Head of RevOps at two B2B SaaS companies before Revlyn. Writes the schema before the first workflow ships.",
      tint: "fire",
    },
    {
      role: "Head of CRM · lifecycle &amp; funnel",
      name: "Kartik",
      photo: "/team/kartik.jpg",
      photoPosition: "center",
      spec: "Lifecycle",
      note: "Ex-Head of Marketing Ops. Owns the funnel math, from first touch to renewal, and the reports the board reads.",
      tint: "volt",
    },
    {
      role: "AI engineer · automation &amp; agents",
      name: "Krishnanshu",
      photo: "/team/krishnanshu.jpg",
      photoPosition: "center 10%",
      spec: "Workflows · AI",
      note: "Ships every workflow with a Loom and a rollback plan. Currently building the internal library of tested AI agents.",
      tint: "fire",
    },
    {
      role: "CRM automation · workflow builds",
      name: "Shantanu",
      photo: "/team/shantanu.jpg",
      photoPosition: "center",
      spec: "Rep adoption",
      note: "Writes the playbook and the Loom library so a new rep can onboard in a day, not a quarter.",
      tint: "volt",
    },
  ];

  return (
    <section className="p-8 md:p-16 border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] mb-3 text-ink/50">
            Strike team · direct access
          </p>
          <h2
            className="display text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.1]"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            We came from the teams we now work alongside.
          </h2>
        </div>
        <div className="max-w-sm mono text-xs uppercase tracking-widest text-ink/60">
          Our operators have spent years inside revenue teams, building pipeline, running systems, fixing
          handoffs and answering for the numbers. Revlyn brings that operating experience to every engagement.
        </div>
      </div>

      <div className="mb-10 grid md:grid-cols-2 gap-0 border-2 border-ink">
        {roster.map((r, i) => (
          <article
            key={r.name}
            className={`p-5 md:p-6 bg-paper relative transition-all group hover:bg-bone
              ${i % 2 !== 1 ? "md:border-r-2 md:border-ink" : ""}
              ${i < 2 ? "md:border-b-2 md:border-ink" : ""}
              ${i !== roster.length - 1 ? "border-b-2 border-ink md:border-b-0" : ""}
              ${i < 2 ? "border-b-2 border-ink" : ""}
            `}
          >
            <div
              className="absolute top-0 right-0 mono text-[10px] uppercase tracking-widest px-2 py-1 border-l-2 border-b-2 border-ink"
              style={{ background: r.tint === "fire" ? "#ff5722" : "#ffeb3b", color: "#0a0a0a" }}
            >
              {String(i + 1).padStart(2, "0")} / 04
            </div>
            <div className="aspect-[4/3] bg-ink/5 border-2 border-ink mb-4 relative overflow-hidden">
              <img
                src={r.photo}
                alt={r.name}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
                style={{ objectPosition: r.photoPosition }}
                loading="lazy"
              />
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

            <div className="mt-3 pt-3 border-t-2 border-dashed border-ink/20 space-y-2">
              <Row k="Specialization" v={r.spec} />
              <Row k="In your Slack" v="Daily" />
            </div>

            <p className="mt-3 text-sm text-ink/70 leading-relaxed border-t border-ink/10 pt-3">{r.note}</p>
          </article>
        ))}
      </div>

      <div className="border-2 border-ink bg-bone p-6 md:p-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="mono text-xs uppercase tracking-widest text-ink/70">
          Team held at four senior operators, on purpose. We take on two founding teams per quarter.
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-fire transition-colors self-start md:self-auto"
        >
          Meet the operator on your account <span>→</span>
        </Link>
      </div>
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
          className="display text-[clamp(2.25rem,6vw,5.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] mb-12 max-w-4xl"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
        >
          Put Revenue Engineering
          <br />
          <span className="text-fire">to work<span className="text-paper">.</span></span>
        </h2>
        <p className="max-w-xl text-lg text-paper/70 leading-relaxed mb-10">
          Bring us the portal, the process, or the problem. We&rsquo;ll help you work out what needs fixing,
          what needs building, and what should stay exactly as it is.
        </p>
        <div className="flex justify-center">
          <BookCallButton className="inline-flex items-center gap-2 bg-fire text-paper border-2 border-paper px-8 py-4 mono text-sm uppercase tracking-widest shadow-[8px_8px_0_0_var(--color-volt)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--color-volt)] transition-all">
            Book a 30-min call <span>→</span>
          </BookCallButton>
        </div>
        
      </div>
    </section>
  );
}

/* ─────────────────────────────  FOOTER  ───────────────────────────── */
