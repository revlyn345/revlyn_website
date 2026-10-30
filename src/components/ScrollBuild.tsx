import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

type Box = { x: number; y: number; w: number; h: number; r: number; o: number };

const people = [
  ["Alex Morgan", "Northwind"],
  ["Priya Shah", "Brightline"],
  ["Sam Carter", "Halcyon"],
  ["Mia Torres", "Oakridge"],
  ["Jordan Lee", "Acme Co"],
  ["Noah Kim", "Fieldstone"],
  ["Ava Patel", "Lumen"],
  ["Leo Brooks", "Cobalt"],
  ["Zoe Reid", "Summit"],
] as const;
// Three duplicates of the first three people, the way spreadsheets collect them.
const rows = [...people, people[0], people[1], people[2]];
const lanes = ["New", "Qualified", "Proposal", "Won"];
const laneTone = ["bg-sun", "bg-mint", "bg-grape", "bg-brand"];
const pipeA = [0, 0, 0, 1, 1, 1, 2, 2, 3];
const pipeB = [1, 0, 1, 2, 1, 2, 3, 3, 3];
const jitter = [-1.4, 0.8, 0, 1.6, -0.6, 0, 1.1, -1.8, 0.5, -1, 1.3, -0.4];
const shift = [0, 3, -2, 1, 4, -3, 0, 2, -1, 3, -2, 1];

function stack(assign: number[], i: number) {
  const lane = assign[i]!;
  const n = assign.slice(0, i).filter((l) => l === lane).length;
  return { lane, n };
}

function layout(stage: number, i: number): Box {
  const dup = i >= 9;
  const base = dup ? i - 9 : i;
  if (stage === 0) return { x: 1 + shift[i]! * 0.6, y: 3 + i * 8, w: 96, h: 6.6, r: jitter[i]!, o: 1 };
  const o = dup ? 0 : 1;
  if (stage === 1) {
    const c = base % 3, rw = Math.floor(base / 3);
    return { x: c * 34, y: 6 + rw * 31, w: 32, h: 27, r: 0, o };
  }
  if (stage === 2 || stage === 3) {
    const { lane, n } = stack(stage === 2 ? pipeA : pipeB, base);
    return { x: lane * 25 + 0.5, y: 13 + n * 21, w: 24, h: 18, r: 0, o };
  }
  const { lane, n } = stack(pipeB, base);
  return { x: lane * 25 + 6, y: 84 - (n + 1) * 17, w: 13, h: 16, r: 0, o };
}

const mixN = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const stageOf = [0, 3, 4];
const chapters = [
  { name: "Today", title: "It starts in a spreadsheet.", copy: "Every team keeps its own sheet. Duplicates pile up, nobody owns the next step, and the numbers depend on who updated them last." },
  { name: "HubSpot", title: "One pipeline everyone can see.", copy: "Duplicates merged, every contact owned, every deal in a clear stage. Follow-ups and tasks fire on their own, so deals keep moving while your team sells." },
  { name: "Reporting", title: "Numbers you can finally trust.", copy: "Because the data is clean at the source, the dashboard builds itself. No more rebuilding the report by hand every Monday." },
];

export function ScrollBuild() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [tilt, setTilt] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setTilt([(e.clientX / window.innerWidth - 0.5) * 8, (0.5 - e.clientY / window.innerHeight) * 6]);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / (total || 1))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const N = chapters.length;
  const raw = Math.min(p * N, N - 0.0001);
  const k = Math.floor(raw);
  const local = raw - k;
  const t = k < N - 1 ? ease(Math.min(1, Math.max(0, (local - 0.5) / 0.5))) : 0;
  const cur = k + t;
  const active = Math.round(cur);
  const vis = (s: number) => Math.max(0, 1 - Math.abs(cur - s) * 1.6);
  const tableMode = cur < 0.5;
  const barMode = cur > 1.5;

  return (
    <section ref={ref} aria-label="How Revlyn turns a spreadsheet into a working HubSpot system" className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative min-h-[11rem] sm:min-h-[15rem] lg:min-h-[21rem]">
              {chapters.map((c, i) => (
                <div key={c.name} aria-hidden={i !== active} className="absolute inset-0 transition-all duration-500" style={{ opacity: i === active ? 1 : 0, transform: `translateY(${i === active ? 0 : i < active ? -16 : 16}px)` }}>
                  <h2 className="font-display text-3xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">{c.title}</h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/60 sm:mt-6 sm:text-lg">{c.copy}</p>
                </div>
              ))}
            </div>
            <ol className="mt-4 flex gap-2 sm:mt-8">
              {chapters.map((c, i) => (
                <li key={c.name} className="flex-1">
                  <div className="h-1 overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${Math.min(1, Math.max(0, cur - i + 1)) * 100}%` }} />
                  </div>
                  <p className={`mt-2 text-[11px] font-bold transition-colors sm:text-xs ${i === active ? "text-ink" : "text-ink/35"}`}>{c.name}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="[perspective:1400px]"><div className="relative rounded-[2rem] border border-ink/10 bg-background p-3 transition-transform duration-300 ease-out will-change-transform motion-reduce:!transform-none [transform-style:preserve-3d] shadow-[0_60px_120px_-40px_color-mix(in_oklab,var(--brand)_35%,transparent)] sm:rounded-[2.5rem] sm:p-5" style={{ transform: `rotateX(${(14 - cur * 9) + tilt[1]}deg) rotateY(${(-22 + cur * 14) + tilt[0]}deg) translateZ(0)` }}>
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-brand/60" /><span className="size-2.5 rounded-full bg-sun" /><span className="size-2.5 rounded-full bg-mint" /></div>
              <p className="text-[11px] font-bold text-ink/45">{tableMode ? "leads_FINAL_v3.xlsx" : "your-portal.hubspot.com"}</p>
              <span className="rounded-full border border-ink/10 px-2 py-0.5 text-[10px] font-bold text-ink/45">Illustrative</span>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.25rem] bg-cream/60 sm:aspect-[4/3]" aria-hidden="true">
              {/* Lane headers */}
              <div className="absolute inset-x-0 top-0 grid grid-cols-4" style={{ opacity: vis(1) }}>
                {lanes.map((l, i) => (
                  <div key={l} className="mx-1 mt-2 flex items-center gap-1.5 rounded-full bg-background px-2 py-1 text-[10px] font-bold sm:text-xs"><span className={`size-2 rounded-full ${laneTone[i]}`} />{l}</div>
                ))}
              </div>
              {/* Chart axis */}
              <div className="absolute inset-x-3 top-[84%] border-t border-ink/20" style={{ opacity: vis(2) }} />
              <div className="absolute inset-x-0 top-[86%] grid grid-cols-4 text-center text-[10px] font-bold text-ink/55 sm:text-xs" style={{ opacity: vis(2) }}>
                {lanes.map((l) => <span key={l}>{l}</span>)}
              </div>
              <p className="absolute left-3 top-3 font-display text-sm font-bold sm:text-lg" style={{ opacity: vis(2) }}>Pipeline by stage</p>
              <p className="absolute right-3 top-3 rounded-full bg-mint/25 px-2 py-0.5 text-[10px] font-bold sm:text-xs" style={{ opacity: vis(2) }}>Live, no manual export</p>

              {rows.map(([name, company], i) => {
                const a = layout(stageOf[k]!, i);
                const b = layout(stageOf[Math.min(k + 1, N - 1)]!, i);
                const box = { x: mixN(a.x, b.x, t), y: mixN(a.y, b.y, t), w: mixN(a.w, b.w, t), h: mixN(a.h, b.h, t), r: mixN(a.r, b.r, t), o: mixN(a.o, b.o, t) };
                const dup = i >= 9;
                const base = dup ? i - 9 : i;
                const lane = pipeB[base]!;
                const auto = cur > 0.7 && cur < 1.4 && pipeA[base] !== pipeB[base];
                return (
                  <div key={i} className={`absolute overflow-hidden border transition-colors duration-300 ${barMode ? `${laneTone[lane]} rounded-md border-transparent` : tableMode ? `rounded-sm ${dup ? "border-brand/40 bg-brand/10" : "border-ink/10 bg-background"}` : "rounded-xl border-ink/10 bg-background shadow-sm"}`} style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%`, opacity: box.o, transform: `rotate(${box.r}deg) translateZ(${tableMode ? 0 : 28}px)` }}>
                    {tableMode ? (
                      <div className="grid h-full grid-cols-[1.2fr_1fr_1.3fr_0.8fr] items-center gap-2 px-2 text-[9px] text-ink/70 sm:text-xs">
                        <span className="truncate font-bold">{name}</span>
                        <span className="truncate">{i === 4 || i === 7 ? "" : company}</span>
                        <span className="truncate text-ink/45">{i % 4 === 2 ? "???" : `${name.split(" ")[0]!.toLowerCase()}@${company.toLowerCase().replace(/\s/g, "")}.com`}</span>
                        <span className={`truncate font-bold ${dup ? "text-brand" : "text-ink/40"}`}>{dup ? "Duplicate" : i % 3 === 1 ? "Call back?" : "Old"}</span>
                      </div>
                    ) : barMode ? null : (
                      <div className="flex h-full items-center gap-2 p-2 sm:gap-3 sm:p-3">
                        <span className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] font-bold sm:size-8 sm:text-xs ${laneTone[lane]} ${lane >= 2 ? "text-cream" : "text-ink"}`}>{name.split(" ").map((s) => s[0]).join("")}</span>
                        <span className="min-w-0">
                          <span className="block truncate text-[10px] font-bold sm:text-sm">{name}</span>
                          <span className="block truncate text-[9px] text-ink/50 sm:text-xs">{company}</span>
                        </span>
                        {auto ? <Check size={14} className="ml-auto shrink-0 text-brand" /> : null}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Spreadsheet sticky notes */}
              <span className="absolute right-[6%] top-[22%] rotate-6 rounded-md bg-sun px-2 py-1 text-[10px] font-bold shadow-md sm:text-xs" style={{ opacity: vis(0) }}>Who owns this?</span>
              <span className="absolute left-[38%] top-[60%] -rotate-3 rounded-md bg-sun px-2 py-1 text-[10px] font-bold shadow-md sm:text-xs" style={{ opacity: vis(0) }}>Which one is right?</span>
              {/* Automation toasts */}
              {["Follow-up email sent", "Task created for owner", "Deal moved to Won"].map((m, i) => (
                <span key={m} className="absolute right-[3%] flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10px] font-bold text-cream shadow-lg sm:text-xs" style={{ bottom: `${4 + i * 9}%`, opacity: Math.max(0, vis(1) * 1.4 - i * 0.2), transform: `translateX(${(1 - vis(1)) * 30}px)` }}>
                  <Check size={12} className="text-mint" />{m}
                </span>
              ))}
            </div>
          </div></div>
        </div>
      </div>
    </section>
  );
}
