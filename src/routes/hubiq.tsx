import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, Check, Database, GitBranch, Lock, Mail, BarChart3, Users, Workflow, Plug, Gauge, X, AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HubSpotBadge } from "../components/HubSpotBadge";
import { BookCallButton } from "@/components/BookCallButton";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/seo";


const faqs = [
  { q: "Is HubIQ really free?", a: "Yes. There is no fee, no card, and no obligation to work with us afterwards. The report is yours to keep and act on however you like." },
  { q: "How can you deliver the report in under 2 hours?", a: "HubIQ follows a fixed, focused checklist across the areas that most often break in a HubSpot portal. Once we have access, we work through it and send the report within 2 hours." },
  { q: "What access do you need?", a: "We will agree the access with you on the call. You stay in control of it and can remove it the moment the report lands." },
  { q: "Will you change anything in my portal?", a: "No. HubIQ is a look, not a fix. Nothing is edited, deleted, or switched on during the audit." },
  { q: "What happens after I get the report?", a: "You read it. If you want help fixing what it finds, we can talk about that. If not, that is completely fine." },
  { q: "Who is HubIQ for?", a: "Any team running HubSpot that suspects the portal is doing less than it should: messy data, stalled deals, reports nobody trusts, or workflows nobody remembers building." },
];

export const Route = createFileRoute("/hubiq")({
  head: () => ({
    meta: [
      { title: "HubIQ: Free HubSpot Audit, Report in Under 2 Hours | Revlyn" },
      { name: "description", content: "HubIQ is Revlyn's free HubSpot audit. We check your data, pipelines, workflows, reporting and integrations and deliver a clear report in under 2 hours." },
      { property: "og:title", content: "HubIQ: Free HubSpot Audit in Under 2 Hours" },
      { property: "og:description", content: "Find out what your HubSpot portal is really doing. Free audit, clear report, delivered in under 2 hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://revlyn.io/hubiq" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://revlyn.io/og-image.png" },
      { name: "twitter:image", content: "https://revlyn.io/og-image.png" },
      { "script:ld+json": breadcrumbSchema([{ name: "HubIQ free HubSpot audit", path: "/hubiq" }]) },
      {
        "script:ld+json": serviceSchema({
          name: "HubIQ free HubSpot audit",
          description: "Revlyn's free HubSpot audit: data, pipelines, workflows, reporting and integrations checked, with a clear report delivered in under 2 hours.",
          path: "/hubiq",
        }),
      },
      { "script:ld+json": faqSchema(faqs) },
    ],
    links: [{ rel: "canonical", href: "https://revlyn.io/hubiq" }],
  }),
  component: HubIQPage,
});

const tones = ["bg-sun text-ink", "bg-mint text-ink", "bg-brand text-cream", "bg-grape text-cream"];

const areas = [
  { icon: Database, name: "Data health", q: "Duplicates, empty fields, and records nobody owns.", asks: ["How many contacts exist twice?", "Which key fields are mostly empty?", "Which records have no owner?"] },
  { icon: GitBranch, name: "Pipelines", q: "Stages that mean something, and deals that stopped moving.", asks: ["Does every stage have a clear exit?", "Which deals have not moved in weeks?", "Are close dates real or hopeful?"] },
  { icon: Workflow, name: "Workflows", q: "Automations that fire, misfire, or never run at all.", asks: ["Which workflows are switched on but idle?", "Do any workflows fight each other?", "Who built them, and are they still here?"] },
  { icon: Users, name: "Users and access", q: "Who can see what, and seats paid for but unused.", asks: ["Are permissions set by role?", "Which paid seats are never used?", "Can former staff still log in?"] },
  { icon: BarChart3, name: "Reporting", q: "Dashboards your team can actually trust on a Monday.", asks: ["Do dashboards match what sales reports?", "Are reports built on clean properties?", "Which dashboards does nobody open?"] },
  { icon: Mail, name: "Marketing setup", q: "Forms, lists, and emails that feed the right places.", asks: ["Do forms map to the right fields?", "Are lists active and up to date?", "Is lifecycle stage set consistently?"] },
  { icon: Plug, name: "Integrations", q: "Connected tools that sync cleanly, or quietly do not.", asks: ["Which connected apps are still in use?", "Are syncs creating duplicates?", "Do sync errors pile up unseen?"] },
  { icon: Gauge, name: "Adoption", q: "Whether the team lives in HubSpot or works around it.", asks: ["Is activity logged in HubSpot?", "Do people still run side spreadsheets?", "Which tools does the team skip?"] },
];

const chapters = [
  ["doubt", "The doubt"],
  ["drift", "The drift"],
  ["scan", "The scan"],
  ["clock", "The clock"],
  ["report", "The report"],
  ["move", "Your move"],
] as const;

/* Hero: a portal being scanned. Illustrative findings only, no real data. */
const scanRows = [
  { icon: Database, label: "Contacts", flag: "Duplicate record", tone: "brand" },
  { icon: GitBranch, label: "Deals", flag: "Stalled deal", tone: "sun" },
  { icon: Workflow, label: "Workflows", flag: "Idle workflow", tone: "sun" },
  { icon: BarChart3, label: "Reports", flag: "Reports conflict", tone: "brand" },
  { icon: Users, label: "Seats", flag: "Unused seat", tone: "sun" },
  { icon: Mail, label: "Forms", flag: "Field mismatch", tone: "brand" },
  { icon: Plug, label: "Syncs", flag: "Sync errors", tone: "brand" },
  { icon: Gauge, label: "Adoption", flag: "Side spreadsheet", tone: "sun" },
] as const;

const STEP = 620;

function PortalXray() {
  const [i, setI] = useState(0);
  const [still, setStill] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setI(scanRows.length);
      return;
    }
    const t = setInterval(() => setI((v) => (v + 1) % (scanRows.length + 3)), STEP);
    return () => clearInterval(t);
  }, []);
  const n = Math.min(i, scanRows.length);
  const done = n === scanRows.length;
  const pct = (n / scanRows.length) * 100;
  const dot = { sun: "bg-sun", brand: "bg-brand" } as const;
  const tag = { sun: "Quick win", brand: "Fix first" } as const;
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-b from-cream/25 via-cream/5 to-transparent" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2rem] bg-ink-soft/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-cream/10 px-6 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              {!done && !still ? <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" /> : null}
              <span className="relative inline-flex size-2.5 rounded-full bg-mint" />
            </span>
            <p className="text-sm font-bold tracking-tight text-cream">HubIQ report</p>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream/40">Illustrative</span>
        </div>
        <div className="grid grid-cols-2 border-b border-cream/10">
          <div className="px-6 py-5 sm:px-7">
            <p className="font-display text-5xl font-bold tabular-nums tracking-[-0.04em] text-cream">{String(n).padStart(2, "0")}</p>
            <p className="mt-1 text-xs font-bold text-cream/45">Findings so far</p>
          </div>
          <div className="border-l border-cream/10 px-6 py-5 sm:px-7">
            <p className="font-display text-5xl font-bold tabular-nums tracking-[-0.04em] text-sun">{scanRows.slice(0, n).filter((r) => r.tone === "brand").length}</p>
            <p className="mt-1 text-xs font-bold text-cream/45">Marked fix first</p>
          </div>
        </div>
        <div className="relative px-6 py-3 sm:px-7">
          <ul>
            {scanRows.map((r, k) => {
              const seen = k < n;
              return (
                <li key={r.label} className="flex items-center gap-4 border-b border-cream/[0.06] py-2.5 last:border-b-0">
                  <span className="w-5 text-[11px] font-bold tabular-nums text-cream/30">{String(k + 1).padStart(2, "0")}</span>
                  <span className={`w-20 shrink-0 text-sm font-bold transition-colors duration-500 ${seen ? "text-cream" : "text-cream/35"}`}>{r.label}</span>
                  <span className={`flex min-w-0 flex-1 items-center gap-2 text-sm transition-all duration-500 ${seen ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`}>
                    <span className={`size-1.5 shrink-0 rounded-full ${dot[r.tone]}`} />
                    <span className="truncate text-cream/70">{r.flag}</span>
                  </span>
                  <span className={`hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] transition-opacity duration-500 sm:block ${seen ? "opacity-100" : "opacity-0"} ${r.tone === "brand" ? "text-brand" : "text-sun"}`}>{tag[r.tone]}</span>
                </li>
              );
            })}
          </ul>
          {!still ? (
            <div className="pointer-events-none absolute inset-x-0 z-10 transition-[top] ease-linear" style={{ top: `calc(0.75rem + ${pct}% * 0.94)`, transitionDuration: i === 0 ? "0ms" : `${STEP}ms` }} aria-hidden="true">
              <div className="h-px bg-gradient-to-r from-transparent via-sun/80 to-transparent" />
            </div>
          ) : null}
        </div>
        <div className="border-t border-cream/10 px-6 py-4 sm:px-7">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-cream/50">{done ? "Ranked and ready to send" : `Checking area ${Math.min(n + 1, scanRows.length)} of ${scanRows.length}`}</span>
            <span className={done ? "text-mint" : "text-cream/40"}>{done ? "Report ready" : `${Math.round(pct)}%`}</span>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-cream/10">
            <div className="h-full rounded-full bg-gradient-to-r from-brand via-sun to-mint transition-[width] duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || to === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setV(0);
    const obs = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1200, 1);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}</span>;
}

const checks = [
  "Would you trust your main dashboard in a board meeting?",
  "Is each contact in HubSpot only once?",
  "Does every deal stage have a clear rule for moving on?",
  "Do you know what every active workflow does?",
  "Does your team log calls and emails in HubSpot?",
  "Do your connected tools sync without errors?",
];

function SelfCheck() {
  const [ans, setAns] = useState<(boolean | null)[]>(checks.map(() => null));
  const answered = ans.filter((a) => a !== null).length;
  const yes = ans.filter((a) => a === true).length;
  const score = Math.round((yes / checks.length) * 100);
  const doneAll = answered === checks.length;
  const verdict = score >= 80 ? ["In good shape", "Your portal sounds healthy. HubIQ will confirm it and find the small things worth tidying."] : score >= 50 ? ["Some drift", "A few areas are slipping. HubIQ will show which ones cost you most and what to fix first."] : ["Time for a look", "Your portal is likely doing less than you pay for. HubIQ will rank exactly where to start."];
  return (
    <div className="reveal mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <ol className="grid gap-3">
        {checks.map((q, n) => (
          <li key={q} className="flex flex-col gap-4 rounded-[1.75rem] border border-ink/10 bg-cream p-5 sm:flex-row sm:items-center">
            <span className="text-sm font-bold tabular-nums text-ink/35">{String(n + 1).padStart(2, "0")}</span>
            <p className="flex-1 text-pretty font-bold">{q}</p>
            <div className="flex gap-2">
              {([true, false] as const).map((val) => (
                <button key={String(val)} type="button" aria-pressed={ans[n] === val}
                  onClick={() => setAns((a) => a.map((x, i) => (i === n ? val : x)))}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition-all ${ans[n] === val ? (val ? "border-ink bg-mint text-ink" : "border-ink bg-brand text-cream") : "border-ink/15 bg-background hover:border-ink/40"}`}>
                  {val ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="flex flex-col justify-between rounded-[2.5rem] bg-ink p-9 text-cream shadow-tactile-ink lg:sticky lg:top-24 lg:self-start">
        <div>
          <p className="text-sm font-bold text-cream/50">Your starting score</p>
          <p className="mt-2 font-display text-8xl font-bold tabular-nums text-sun">{doneAll ? score : "?"}</p>
          <div className="mt-4 h-2 rounded-full bg-cream/10"><div className="h-full rounded-full bg-sun transition-all duration-500" style={{ width: `${(answered / checks.length) * 100}%` }} /></div>
          <p className="mt-2 text-xs font-bold text-cream/50">{answered} of {checks.length} answered</p>
          <p className="mt-8 font-display text-2xl font-bold">{doneAll ? verdict[0] : "Answer all six"}</p>
          <p className="mt-2 text-cream/65">{doneAll ? verdict[1] : "Be honest. Nobody sees your answers but you."}</p>
        </div>
        <BookCallButton className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold transition ${doneAll ? "bg-sun text-ink hover:-translate-y-0.5" : "bg-cream/10 text-cream/70"}`}>
          Get your real score in under 2 hours <ArrowUpRight size={18} />
        </BookCallButton>
      </div>
    </div>
  );
}

function ReadyBy() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const f = () => setT(new Date(Date.now() + 2 * 3600e3).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    f();
    const id = setInterval(f, 30000);
    return () => clearInterval(id);
  }, []);
  if (!t) return null;
  return (
    <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5 text-sm font-bold text-cream/80">
      <span className="size-2 animate-pulse rounded-full bg-mint" /> Once we have access, your report would land by <span className="tabular-nums text-sun">{t}</span> your time
    </p>
  );
}

function ChapterBar() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => { const h = document.documentElement; setProgress(Math.min(100, (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100)); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    chapters.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const idx = chapters.findIndex(([id]) => id === active);
  return (
    <nav aria-label="Page chapters" className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-3 [scrollbar-width:none]">
        {chapters.map(([id, label], n) => (
          <a key={id} href={`#${id}`} className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${id === active ? "bg-ink text-cream" : n < idx ? "text-ink/70" : "text-ink/40 hover:text-ink"}`}>
            <span className={`grid size-5 place-items-center rounded-full text-[10px] ${n <= idx ? "bg-sun text-ink" : "border border-ink/15"}`}>{n + 1}</span>
            {label}
          </a>
        ))}
      </div>
      <p aria-live="polite" className={`pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-sun px-4 py-2 text-sm font-bold text-ink transition-all duration-500 lg:block ${progress > 97 ? "opacity-100" : "translate-x-4 opacity-0"}`}>{progress > 97 ? "You have read the whole story. Two hours to go." : ""}</p>
      <div className="h-0.5 bg-ink/5"><div className="h-full bg-gradient-to-r from-mint via-sun to-brand transition-[width] duration-150" style={{ width: `${progress}%` }} /></div>
    </nav>
  );
}

function Heading({ id, title, accent, copy, light = false }: { id?: string; title: string; accent: string; copy: string; light?: boolean }) {
  return (
    <div id={id} className="reveal grid scroll-mt-24 gap-6 lg:grid-cols-12 lg:items-end">
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:col-span-8">
        {title} <span className="whitespace-nowrap text-brand">{accent}</span>
      </h2>
      <p className={`text-lg font-bold leading-relaxed lg:col-span-4 ${light ? "text-cream/60" : "text-ink/60"}`}>{copy}</p>
    </div>
  );
}

const drift = [
  { when: "Day one", title: "Clean and clear", copy: "Fields make sense. Stages match how you sell. Everyone logs in.", bar: 15, tone: "bg-mint" },
  { when: "A year in", title: "Quietly busier", copy: "New fields for one campaign. A workflow from someone who has moved on. A side spreadsheet appears.", bar: 55, tone: "bg-sun" },
  { when: "Today", title: "Nobody is sure", copy: "The Monday dashboard gets questioned. Deals sit still. The team works around the CRM.", bar: 90, tone: "bg-brand" },
];

function AreaExplorer() {
  const [sel, setSel] = useState(0);
  const a = areas[sel]!;
  return (
    <div className="reveal mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {areas.map((x, n) => (
          <li key={x.name}>
            <button
              type="button"
              onClick={() => setSel(n)}
              aria-pressed={n === sel}
              className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${n === sel ? "border-ink bg-ink text-cream shadow-tactile-ink-sm" : "border-ink/10 bg-background hover:-translate-y-0.5 hover:border-ink/25"}`}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tones[n % 4]}`}><x.icon size={18} /></span>
              <span className="flex-1 font-bold">{x.name}</span>
              <span className={`text-xs font-bold ${n === sel ? "text-sun" : "text-ink/30"}`}>{String(n + 1).padStart(2, "0")}</span>
            </button>
          </li>
        ))}
      </ul>
      <div key={a.name} className={`animate-rise-in relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2.5rem] p-9 shadow-tactile-ink sm:p-12 ${tones[sel % 4]}`}>
        <a.icon aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 size-64 opacity-10" strokeWidth={1} />
        <div className="relative">
          <p className="font-display text-6xl font-bold opacity-30">{String(sel + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{a.name}</h3>
          <p className="mt-3 max-w-md text-lg font-bold opacity-75">{a.q}</p>
        </div>
        <ul className="relative mt-10 grid gap-3">
          {a.asks.map((q) => (
            <li key={q} className="flex items-start gap-3 rounded-2xl bg-background/25 px-5 py-3.5 font-bold backdrop-blur">
              <span className="mt-0.5 font-display text-lg leading-none">?</span>{q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const clock = [
  { min: 0, end: 15, t: "0:00", title: "You book a slot", copy: "A short call to agree access and what matters most to you.", tone: "mint", Icon: Users },
  { min: 15, end: 90, t: "0:15", title: "We look inside", copy: "We work through all eight areas against the HubIQ checklist. Nothing is changed.", tone: "sun", Icon: Gauge },
  { min: 90, end: 115, t: "1:30", title: "We write it up", copy: "Findings ranked by impact, in plain language, with what to fix first.", tone: "brand", Icon: BarChart3 },
  { min: 115, end: 120, t: "< 2:00", title: "Report in your inbox", copy: "Yours to keep. Act on it alone, with your team, or with us.", tone: "grape", Icon: Mail },
] as const;

const toneStroke = { mint: "stroke-mint", sun: "stroke-sun", brand: "stroke-brand", grape: "stroke-grape" } as const;
const toneBg = { mint: "bg-mint", sun: "bg-sun", brand: "bg-brand", grape: "bg-grape" } as const;
const toneText = { mint: "text-mint", sun: "text-sun", brand: "text-brand", grape: "text-grape" } as const;

function TwoHourDial() {
  const [s, setS] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setS((v) => (v + 1) % clock.length), 3200);
    return () => clearInterval(t);
  }, [paused]);
  const R = 112, C = 2 * Math.PI * R;
  const cur = clock[s]!;
  const pt = (min: number, r: number) => {
    const a = (min / 120) * 2 * Math.PI - Math.PI / 2;
    return [Number((140 + r * Math.cos(a)).toFixed(3)), Number((140 + r * Math.sin(a)).toFixed(3))] as const;
  };
  const [hx, hy] = pt(cur.end, R - 26);
  return (
    <div className="reveal mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute inset-6 rounded-full bg-cream/[0.03] shadow-[inset_0_0_60px_color-mix(in_oklab,var(--sun)_8%,transparent)]" />
        <svg viewBox="0 0 280 280" className="relative size-full" role="img" aria-label={`Step ${s + 1}: ${cur.title}, at ${cur.t}`}>
          {/* minute ticks, one per 5 minutes */}
          {Array.from({ length: 24 }).map((_, i) => {
            const [x1, y1] = pt(i * 5, 132);
            const [x2, y2] = pt(i * 5, i % 6 === 0 ? 122 : 127);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={i % 6 === 0 ? "stroke-cream/50" : "stroke-cream/15"} strokeWidth={i % 6 === 0 ? 2 : 1} strokeLinecap="round" />;
          })}
          <circle cx="140" cy="140" r={R} fill="none" className="stroke-cream/[0.07]" strokeWidth="12" />
          {/* coloured segments, one per step */}
          {clock.map((c, n) => {
            const len = ((c.end - c.min) / 120) * C;
            const gap = n === clock.length - 1 ? 0 : 3;
            return (
              <circle key={c.t} cx="140" cy="140" r={R} fill="none" transform="rotate(-90 140 140)"
                className={`${toneStroke[c.tone]} transition-opacity duration-700`} strokeWidth="12" strokeLinecap="butt"
                strokeDasharray={`${Math.max(len - gap, 1)} ${C}`} strokeDashoffset={-(c.min / 120) * C}
                opacity={n <= s ? 1 : 0.12} />
            );
          })}
          {/* quarter labels */}
          {[["0:00", 0], ["0:30", 30], ["1:00", 60], ["1:30", 90]].map(([l, m]) => {
            const [x, y] = pt(m as number, 86);
            return <text key={l} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-cream/35 text-[9px] font-bold">{l}</text>;
          })}
          {/* hand */}
          <line x1="140" y1="140" x2={hx} y2={hy} className="stroke-cream/70 transition-all duration-700 ease-out" strokeWidth="2" strokeLinecap="round" />
          <circle cx="140" cy="140" r="4" className="fill-cream" />
          <circle cx={hx} cy={hy} r="5" className={`${toneStroke[cur.tone].replace("stroke", "fill")} transition-all duration-700 ease-out`} />
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div className="mt-24 rounded-full border border-cream/10 bg-ink/80 px-4 py-1.5 backdrop-blur">
            <p className={`font-display text-2xl font-bold tabular-nums ${toneText[cur.tone]}`}>{cur.t}</p>
          </div>
        </div>
      </div>

      <ol className="relative grid gap-3">
        <span aria-hidden="true" className="absolute bottom-10 left-[2.15rem] top-10 w-px bg-cream/10" />
        {clock.map((c, n) => {
          const active = n === s, done = n < s;
          return (
            <li key={c.t} className="relative">
              <button type="button" onClick={() => setS(n)} aria-current={active ? "step" : undefined}
                className={`group relative flex w-full gap-5 overflow-hidden rounded-[1.75rem] border p-5 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun sm:p-6 ${active ? "border-cream/20 bg-cream/[0.07] lg:translate-x-2" : "border-transparent hover:bg-cream/[0.04]"}`}>
                <span className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full transition-all duration-500 ${active || done ? `${toneBg[c.tone]} text-ink` : "border border-cream/20 bg-ink text-cream/50"}`}>
                  {done ? <Check size={18} strokeWidth={3} /> : <c.Icon size={18} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className={`text-lg font-bold transition-colors ${active ? "text-cream" : "text-cream/75"}`}>{c.title}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums ${active ? `${toneBg[c.tone]} text-ink` : "bg-cream/10 text-cream/60"}`}>{c.t}</span>
                    <span className="text-xs font-bold text-cream/35">{c.end - c.min} min</span>
                  </span>
                  <span className={`mt-1.5 block text-sm leading-relaxed transition-colors ${active ? "text-cream/70" : "text-cream/45"}`}>{c.copy}</span>
                </span>
                {active && !paused ? (
                  <span aria-hidden="true" key={`bar-${s}`} className={`absolute bottom-0 left-0 h-0.5 ${toneBg[c.tone]}`} style={{ animation: "grow 3.2s linear forwards" }} />
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function HubIQPage() {
  return (
    <main className="bg-cream text-ink">
      {/* Hero: the promise */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[40rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 left-1/4 size-[34rem] rounded-full bg-mint/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pb-28 lg:pt-28">
          <div>
            <h1 className="font-display text-[clamp(2.6rem,8.5vw,5.75rem)] font-bold leading-[0.96] tracking-[-0.045em] text-balance">
              The truth about your HubSpot, in under <span className="whitespace-nowrap text-sun">2 hours.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/70 sm:text-xl">
              A free, expert audit of your portal. We check eight areas, rank every finding by what it costs you, and send you one clear report.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5">Get my free HubIQ audit <ArrowUpRight size={18} /></BookCallButton>
              <a href="#doubt" className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-4 font-bold text-cream/85 transition hover:bg-cream/10">Read the story <ArrowDown size={16} /></a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-cream/10 border-y border-cream/10">
              {([["$", 0, "", "Cost to you"], ["", 8, "", "Areas checked"], ["< ", 2, "h", "To your inbox"]] as const).map(([pre, v, suf, l]) => (
                <div key={l} className="px-4 py-5 first:pl-0">
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-3xl font-bold tabular-nums text-cream sm:text-4xl">{pre}<CountUp to={v} />{suf}</dd>
                  <dd className="mt-1 text-xs font-bold text-cream/50 sm:text-sm">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PortalXray />
        </div>
      </section>

      <ChapterBar />

      {/* 1. The doubt */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Heading id="doubt" title="You pay for HubSpot every month. Do you know what it is" accent="doing?" copy="Most teams cannot answer that with confidence. Not because anyone failed, but because nobody had time to look." />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {[
            ["Reports nobody fully trusts", "Someone asks where a number came from, and the room goes quiet."],
            ["Automations nobody remembers building", "They still run. Nobody is quite sure what they do."],
            ["A team working around the CRM", "Notes in inboxes, deals in spreadsheets, HubSpot as an afterthought."],
          ].map(([t, c], n) => (
            <div key={t} className={`reveal flex min-h-[22rem] flex-col justify-between rounded-[2.5rem] p-9 shadow-tactile-ink ${tones[[0, 2, 3][n] ?? 0]} ${n === 1 ? "lg:mt-12" : ""}`}>
              <AlertTriangle size={28} aria-hidden="true" className="opacity-70" />
              <div>
                <p className="font-display text-3xl font-bold leading-tight">{t}</p>
                <p className="mt-4 font-bold opacity-75">{c}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. The drift */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Heading id="drift" title="Portals do not break. They" accent="drift." copy="Nothing dramatic happens. Small shortcuts pile up until the portal works against the team it was built for." />
          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            <div className="reveal reveal-line absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-mint via-sun to-brand md:block" />
            {drift.map((d) => (
              <div key={d.when} className="reveal relative">
                <span className={`relative grid size-14 place-items-center rounded-full border-4 border-background ${d.tone}`}><span className="size-3 rounded-full bg-ink" /></span>
                <p className="mt-6 text-sm font-bold text-ink/50">{d.when}</p>
                <p className="mt-1 font-display text-3xl font-bold">{d.title}</p>
                <p className="mt-3 leading-relaxed text-ink/65">{d.copy}</p>
                <div className="mt-6 rounded-2xl border border-ink/10 bg-cream p-4">
                  <div className="flex justify-between text-xs font-bold text-ink/50"><span>Clutter</span><span>Illustrative</span></div>
                  <div className="mt-2 h-2 rounded-full bg-ink/10"><div className={`h-full rounded-full ${d.tone}`} style={{ width: `${d.bar}%` }} /></div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-16 max-w-3xl font-display text-3xl font-bold leading-snug sm:text-4xl">The fix starts with seeing it clearly. <span className="text-ink/40">That is what HubIQ is for.</span></p>
        </div>
      </section>

      {/* 3. The scan */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Heading id="scan" title="Eight areas. One honest" accent="picture." copy="Tap an area to see the questions HubIQ asks of your portal." />
        <AreaExplorer />
      </section>

      {/* Self-check */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Heading title="Before we look, take a" accent="guess." copy="Six quick questions, about 60 seconds. You get a starting score. HubIQ gives you the real one." />
          <SelfCheck />
        </div>
      </section>

      {/* 4. The clock */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-sun/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Heading id="clock" light title="From hello to report in under" accent="2 hours." copy="A fixed checklist and a focused team. No weeks of discovery, no waiting on a slide deck." />
          <TwoHourDial />
        </div>
      </section>

      {/* 5. The report */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Heading id="report" title="A report you can act on by" accent="lunch." copy="No 60 page deck. Each finding says what we saw, why it matters, and what to do, in the order worth doing." />
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 rotate-2 rounded-[3rem] bg-sun/60" />
            <div className="relative rounded-[2.5rem] border-2 border-ink bg-background p-8 shadow-tactile-ink sm:p-10">
              <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-6">
                <div><p className="text-sm font-bold text-ink/50">HubIQ report</p><p className="font-display text-3xl font-bold">Example portal</p></div>
                <div className="text-right"><p className="font-display text-5xl font-bold text-brand">63</p><p className="text-xs font-bold text-ink/50">Overall, illustrative</p></div>
              </div>
              <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {[["Data health", 54, "bg-brand"], ["Pipelines", 71, "bg-sun"], ["Workflows", 62, "bg-sun"], ["Reporting", 48, "bg-brand"], ["Integrations", 67, "bg-sun"], ["Adoption", 80, "bg-mint"]].map(([n, v, c]) => (
                  <div key={n as string}>
                    <div className="flex justify-between text-sm"><span className="font-bold">{n}</span><span className="tabular-nums text-ink/50"><CountUp to={v as number} />/100</span></div>
                    <div className="mt-2 h-2 rounded-full bg-ink/10"><div className={`h-full rounded-full ${c}`} style={{ width: `${v}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                {[["Fix first", "Merge duplicate contacts before the next campaign goes out.", "bg-brand text-cream"], ["Quick win", "Switch off the welcome workflow nobody is enrolled in.", "bg-mint text-ink"], ["Can wait", "Tidy unused deal properties next quarter.", "bg-cream text-ink"]].map(([k, v, t]) => (
                  <div key={k} className="flex items-start gap-3 rounded-2xl border border-ink/10 p-4 text-sm">
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${t}`}>{k}</span><span className="font-bold text-ink/75">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="reveal grid gap-4">
            {["A score for each of the eight areas", "Findings ranked by impact on your revenue team", "Quick wins your team can fix themselves", "What can safely wait"].map((d, n) => (
              <li key={d} className="flex items-center gap-5 border-b border-ink/10 pb-4 text-xl font-bold">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full ${tones[n % 4]}`}><Check size={18} /></span>{d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Honest edges */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="reveal rounded-[2.5rem] border-2 border-ink bg-mint p-10 shadow-tactile-ink">
            <h3 className="font-display text-4xl font-bold">What HubIQ is</h3>
            <ul className="mt-8 grid gap-4 text-lg font-bold">{["Free, with no obligation", "Read only: we look, we do not touch", "Delivered in under 2 hours", "Done by a HubSpot Gold Partner"].map((x) => <li key={x} className="flex gap-3"><Check size={22} className="mt-0.5 shrink-0" />{x}</li>)}</ul>
          </div>
          <div className="reveal rounded-[2.5rem] border-2 border-ink/15 bg-cream p-10 md:mt-12">
            <h3 className="font-display text-4xl font-bold">What it is not</h3>
            <ul className="mt-8 grid gap-4 text-lg font-bold text-ink/70">{["A sales pitch dressed up as a report", "A fix: changes come later, only if you want them", "A lock in: remove our access whenever you like"].map((x) => <li key={x} className="flex gap-3"><X size={22} className="mt-0.5 shrink-0 text-brand" />{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* FAQ ledger */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Heading title="Questions, answered" accent="straight." copy="If yours is not here, ask us on the call. It costs nothing." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {faqs.map((f, n) => (
            <div key={f.q} className="reveal rounded-[2rem] border border-ink/10 bg-background p-8">
              <div className="flex items-start gap-4">
                <span className={`grid size-9 shrink-0 place-items-center rounded-xl border-2 border-ink text-sm font-bold ${tones[n % 4]}`}>Q</span>
                <p className="pt-1 text-lg font-bold">{f.q}</p>
              </div>
              <p className={`mt-5 border-l-4 pl-5 font-bold leading-relaxed text-ink/70 ${["border-sun", "border-mint", "border-brand", "border-grape"][n % 4]}`}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Your move */}
      <section id="move" className="scroll-mt-24 px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3.5rem] bg-ink px-8 py-20 text-center text-cream sm:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-sun/15 blur-3xl" />
          <div className="relative">
            <HubSpotBadge dark size="lg" />
            <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Two hours from now, you could <span className="text-sun">know.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/65">Book a slot, and your free HubIQ report lands in your inbox in under 2 hours.</p>
            <ReadyBy />
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <BookCallButton className="inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5">Get my free HubIQ audit <ArrowUpRight size={18} /></BookCallButton>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-4 font-bold"><Lock size={16} /> Ask a question first</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
