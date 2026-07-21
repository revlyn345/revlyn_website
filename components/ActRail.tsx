/* ═══════════════════════════════════════════════════════════════
   REVLYN · ACT RAIL
   Left-edge Roman-numeral progress rail. Highlighted by MotionRuntime.
   ═══════════════════════════════════════════════════════════════ */
const ACTS = [
  { n: "I",   label: "HOOK" },
  { n: "II",  label: "DIAGNOSIS" },
  { n: "III", label: "ENGINE" },
  { n: "IV",  label: "METHOD" },
  { n: "V",   label: "PROOF" },
  { n: "VI",  label: "TEAM" },
];

export function ActRail() {
  return (
    <aside
      aria-hidden
      className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
    >
      {ACTS.map((a, i) => (
        <a
          key={a.n}
          href={`#act-${i}`}
          data-act-rail-item
          data-active={i === 0 ? "true" : "false"}
          className="group flex items-center gap-2 text-[10px] mono transition-all
                     data-[active=true]:text-fire text-ink/40 hover:text-ink"
        >
          <span
            className="block w-6 h-6 grid place-items-center brutal-border bg-paper
                       group-data-[active=true]:bg-fire group-data-[active=true]:text-paper
                       group-data-[active=true]:scale-110 transition-transform display text-[10px]"
          >
            {a.n}
          </span>
          <span className="opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity">
            {a.label}
          </span>
        </a>
      ))}
    </aside>
  );
}
