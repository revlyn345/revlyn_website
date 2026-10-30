import { useEffect, useRef } from "react";
import { Check, TrendingUp, Zap } from "lucide-react";

const lanes = [
  { name: "New", tone: "bg-sun", deals: [["Northwind", "Alex M."], ["Lumen", "Ava P."]] },
  { name: "Qualified", tone: "bg-mint", deals: [["Brightline", "Priya S."], ["Cobalt", "Leo B."]] },
  { name: "Proposal", tone: "bg-grape", deals: [["Halcyon", "Sam C."]] },
  { name: "Won", tone: "bg-brand", deals: [["Oakridge", "Mia T."], ["Summit", "Zoe R."]] },
];

/** A layered HubSpot-style dashboard in CSS 3D. Layers sit at different depths and the whole scene leans toward the mouse. */
export function HeroDashboard3D() {
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scene.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = (e.clientX / window.innerWidth - 0.5) * 14;
      ty = (0.5 - e.clientY / window.innerHeight) * 10;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const s = Math.min(1, window.scrollY / 600);
      el.style.transform = `rotateX(${12 + cy - s * 10}deg) rotateY(${-18 + cx + s * 14}deg) rotateZ(${2 - s * 2}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl [perspective:1600px]" aria-hidden="true">
      <div ref={scene} className="relative [transform-style:preserve-3d] will-change-transform" style={{ transform: "rotateX(12deg) rotateY(-18deg) rotateZ(2deg)" }}>
        {/* Base: the portal */}
        <div className="relative rounded-[1.75rem] border border-ink/10 bg-card p-4 shadow-[0_80px_140px_-50px_color-mix(in_oklab,var(--brand)_55%,transparent)] [transform-style:preserve-3d]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-brand/70" /><span className="size-2.5 rounded-full bg-sun" /><span className="size-2.5 rounded-full bg-mint" /></div>
            <p className="text-[11px] font-bold text-ink/45">your-portal.hubspot.com</p>
            <span className="rounded-full border border-ink/10 px-2 py-0.5 text-[10px] font-bold text-ink/45">Illustrative</span>
          </div>
          <p className="mb-3 font-display text-sm font-bold text-ink">Sales pipeline</p>
          <div className="grid grid-cols-4 gap-2">
            {lanes.map((l, li) => (
              <div key={l.name} className="rounded-xl bg-background/60 p-2">
                <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold text-ink/70"><span className={`size-2 rounded-full ${l.tone}`} />{l.name}</p>
                <div className="space-y-2">
                  {l.deals.map(([co, who], di) => (
                    <div key={co} className="rounded-lg border border-ink/10 bg-card p-2 shadow-sm animate-floaty" style={{ animationDelay: `${(li + di) * 0.4}s` }}>
                      <p className="truncate text-[10px] font-bold text-ink">{co}</p>
                      <p className="truncate text-[9px] text-ink/50">{who}</p>
                    </div>
                  ))}
                  {li === 2 ? <div className="h-11 rounded-lg border border-dashed border-brand/50 bg-brand/5" /> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating: chart */}
        <div className="absolute -right-6 -top-10 w-44 rounded-2xl border border-ink/10 bg-card/95 p-3 shadow-2xl backdrop-blur sm:-right-10 sm:w-52" style={{ transform: "translateZ(110px)" }}>
          <p className="flex items-center gap-1.5 text-[10px] font-bold text-ink/60"><TrendingUp size={12} className="text-brand" />Pipeline by stage</p>
          <div className="mt-3 flex h-16 items-end gap-2">
            {[40, 62, 50, 88].map((h, i) => (
              <div key={i} className={`flex-1 rounded-t-md ${["bg-sun", "bg-mint", "bg-grape", "bg-brand"][i]} origin-bottom animate-[grow_1.2s_ease-out_both]`} style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.15}s` }} />
            ))}
          </div>
          <p className="mt-2 text-[9px] font-bold text-ink/45">Live, no manual export</p>
        </div>

        {/* Floating: automation toast */}
        <div className="absolute left-0 top-1/2 flex items-center gap-2 rounded-full border border-ink/10 bg-card px-3 py-2 text-[11px] font-bold text-ink shadow-2xl sm:-left-12 max-sm:text-[10px]" style={{ transform: "translateZ(150px)" }}>
          <span className="grid size-6 place-items-center rounded-full bg-brand text-background"><Zap size={12} /></span>
          Follow-up sent automatically
        </div>

        {/* Floating: contact record */}
        <div className="absolute -bottom-10 right-8 w-48 rounded-2xl border border-ink/10 bg-card p-3 shadow-2xl" style={{ transform: "translateZ(80px)" }}>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-mint text-[10px] font-bold text-ink">AM</span>
            <div className="min-w-0"><p className="truncate text-[11px] font-bold text-ink">Alex Morgan</p><p className="truncate text-[9px] text-ink/50">Northwind · Owner assigned</p></div>
          </div>
          <p className="mt-2 flex items-center gap-1 text-[9px] font-bold text-ink/55"><Check size={11} className="text-brand" />One record, full history</p>
        </div>
      </div>
    </div>
  );
}
