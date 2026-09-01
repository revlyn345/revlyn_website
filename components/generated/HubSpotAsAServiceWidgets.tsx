"use client";

/* ═══════════════════════════════════════════════════════════════
   HUBSPOT-AS-A-SERVICE - INTERACTIVE WIDGETS

   The only three pieces of this page that actually need client-side
   state: the tabbed console demo, the scope-builder calculator, and
   the FAQ accordion. Split out from HubSpotAsAServiceClient.tsx so the
   rest of that page - which is static markup - can be a Server
   Component instead of being forced into the client bundle by one
   top-of-file "use client" covering the whole 1,500+ line page.
   ═══════════════════════════════════════════════════════════════ */
import { useState } from "react";
import { BookCallButton } from "@/components/BookCallButton";

type TabKey = "pipeline" | "automation" | "reporting";
const TABS: { key: TabKey; label: string }[] = [
  { key: "pipeline", label: "Pipeline" },
  { key: "automation", label: "Automation" },
  { key: "reporting", label: "Reporting" },
];
const STAGES = [
  { label: "Prospecting", deals: 128, value: "$2.4M", width: 100 },
  { label: "Qualified", deals: 74, value: "$1.6M", width: 82 },
  { label: "Proposal", deals: 38, value: "$980K", width: 58 },
  { label: "Negotiation", deals: 19, value: "$540K", width: 38 },
  { label: "Closed won", deals: 11, value: "$310K", width: 22 },
];
const WORKFLOW = ["Form submitted", "Lead scored", "Owner assigned", "Sequence enrolled", "Deal created"];
const MONTHS = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 48 },
  { label: "Apr", value: 71 },
  { label: "May", value: 66 },
  { label: "Jun", value: 88 },
  { label: "Jul", value: 79 },
  { label: "Aug", value: 96 },
];

export function HeroPortal() {
  const [tab, setTab] = useState<TabKey>("pipeline");
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);
  const [month, setMonth] = useState(MONTHS.length - 1);
  const stage = STAGES[active]!;
  const mth = MONTHS[month]!;

  function runWorkflow() {
    if (running) return;
    setRunning(true);
    setStep(0);
    WORKFLOW.forEach((_, i) => {
      setTimeout(() => {
        setStep(i);
        if (i === WORKFLOW.length - 1) setTimeout(() => setRunning(false), 500);
      }, i * 520);
    });
  }

  return (
    <div className="brutal-border brutal-shadow-fire bg-paper">
      <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3">
        <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.16em]">
          <span className="h-1.5 w-1.5 bg-fire animate-blink" />
          Revlyn console
        </div>
        <span className="mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Live demo</span>
      </div>

      <div role="tablist" aria-label="Portal views" className="grid grid-cols-3 border-b-2 border-ink">
        {TABS.map((t) => {
          const selected = tab === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setTab(t.key)}
              className={`relative px-4 py-3 mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                selected ? "text-ink" : "text-muted-foreground hover:text-ink"
              }`}
            >
              {t.label}
              {selected ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-fire" /> : null}
            </button>
          );
        })}
      </div>

      <div className="min-h-[360px] p-5">
        {tab === "pipeline" ? (
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Deal pipeline · hover a stage
            </p>
            <div className="mt-4 space-y-2">
              {STAGES.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span
                    className={`flex h-9 items-center px-3 mono text-[11px] uppercase tracking-[0.1em] transition-all duration-500 ${
                      active === i ? "bg-fire text-paper" : "bg-ink text-paper"
                    }`}
                    style={{ width: `${s.width}%` }}
                  >
                    {s.label}
                  </span>
                  <span className="mono text-[11px] text-muted-foreground">{s.deals}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex items-end justify-between border-t-2 border-ink pt-4">
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{stage.label}</p>
                <p className="mt-1 display text-3xl">{stage.value}</p>
              </div>
              <p className="mono text-[11px] text-muted-foreground">{stage.deals} deals</p>
            </div>
          </div>
        ) : null}

        {tab === "automation" ? (
          <div>
            <div className="flex items-center justify-between">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Workflow · lead routing
              </p>
              <button
                type="button"
                onClick={runWorkflow}
                className="border-2 border-ink px-3 py-1.5 mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-paper"
              >
                {running ? "Running…" : "Run workflow"}
              </button>
            </div>
            <ol className="mt-5 space-y-3">
              {WORKFLOW.map((w, i) => {
                const done = step >= i;
                return (
                  <li key={w} className="flex items-center gap-3">
                    <span
                      className={`h-8 w-8 shrink-0 border-2 transition-colors duration-300 ${
                        done ? "border-fire bg-fire" : "border-ink/20 bg-paper"
                      }`}
                    />
                    <span
                      className={`flex-1 border-b border-ink/10 pb-2 mono text-[11px] uppercase tracking-[0.1em] ${
                        done ? "text-ink" : "text-muted-foreground"
                      }`}
                    >
                      {w}
                    </span>
                    {done ? <span className="mono text-[10px] uppercase tracking-[0.14em] text-fire">done</span> : null}
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}

        {tab === "reporting" ? (
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Pipeline created · click a bar
            </p>
            <div className="mt-6 flex h-44 items-end gap-2">
              {MONTHS.map((m, i) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setMonth(i)}
                  onMouseEnter={() => setMonth(i)}
                  className="flex h-full flex-1 flex-col justify-end gap-2"
                  aria-label={`${m.label} pipeline`}
                >
                  <span
                    className={`w-full transition-[height] duration-500 ${month === i ? "bg-fire" : "bg-ink"}`}
                    style={{ height: `${m.value}%` }}
                  />
                  <span className="mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">{m.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t-2 border-ink pt-4">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{mth.label} · pipeline</p>
              <p className="display text-2xl">${(mth.value * 12).toLocaleString()}K</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ── scope builder + FAQ (static, CSS-transition accordion) ──────── */

const WORKSTREAMS = [
  "CRM administration",
  "Sales operations",
  "Marketing automation",
  "Reporting & dashboards",
  "Integrations",
  "Data management",
  "Lead generation",
  "RevOps strategy",
];

export function ScopeBuilder() {
  const [picked, setPicked] = useState<string[]>(["CRM administration", "Reporting & dashboards"]);
  const [hours, setHours] = useState(10);

  const score = picked.length * 2 + hours / 5;
  const tier = score >= 14 ? "Full RevOps Partnership" : score >= 8 ? "Managed HubSpot" : "HubSpot Support";
  const summary =
    tier === "Full RevOps Partnership"
      ? "A complete outsourced HubSpot and RevOps team running strategy plus execution."
      : tier === "Managed HubSpot"
        ? "Ongoing management across marketing and sales with continuous build work."
        : "Ongoing administration, maintenance and support for your existing portal.";

  function toggle(w: string) {
    setPicked((p) => (p.includes(w) ? p.filter((x) => x !== w) : [...p, w]));
  }

  return (
    <div className="grid gap-px border-2 border-ink bg-ink lg:grid-cols-[1.2fr_1fr]">
      <div className="bg-paper p-8">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-fire">Build your scope</p>
        <h3 className="display mt-3 text-2xl">Select the work you need us to own.</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {WORKSTREAMS.map((w) => {
            const on = picked.includes(w);
            return (
              <button
                key={w}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(w)}
                className={`border-2 px-4 py-2 mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  on ? "border-fire bg-fire text-paper" : "border-ink/20 text-muted-foreground hover:border-ink hover:text-ink"
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>
        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <label htmlFor="hours" className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Execution hours per week
            </label>
            <span className="display text-2xl">{hours}h</span>
          </div>
          <input
            id="hours"
            type="range"
            min={2}
            max={40}
            step={2}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="mt-3 w-full accent-fire"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-paper p-8">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Recommended engagement</p>
          <h4 key={tier} className="mt-3 text-3xl leading-tight display">
            {tier}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>
          <ul className="mt-6 space-y-2">
            {picked.length === 0 ? (
              <li className="mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                Select at least one workstream
              </li>
            ) : (
              picked.map((p) => (
                <li key={p} className="flex items-center gap-3 border-b border-ink/10 pb-2 mono text-[11px] uppercase tracking-[0.12em]">
                  <span className="h-1.5 w-1.5 bg-fire" />
                  {p}
                </li>
              ))
            )}
          </ul>
        </div>
        <BookCallButton className="mt-8 inline-flex items-center gap-3 bg-ink px-6 py-4 mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-fire w-fit">
          Send this scope to us
          <span aria-hidden="true">→</span>
        </BookCallButton>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: string[][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-4xl">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-t border-ink/15 last:border-b">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-fire"
            >
              <span className="text-lg">{q}</span>
              <span
                className={`mono text-xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl border-l-2 border-volt pb-6 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
