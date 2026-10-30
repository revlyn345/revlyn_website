import { useEffect, useRef, useState, type ReactNode } from "react";

/** Lifts and tilts its child toward the cursor with a soft shine. */
export function Tilt({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateY(-4px)`;
    el.style.setProperty("--sx", `${x * 100}%`);
    el.style.setProperty("--sy", `${y * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`group/tilt relative transition-transform duration-200 ease-out [transform-style:preserve-3d] motion-reduce:!transform-none ${className}`}>
      {children}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100 [background:radial-gradient(400px_circle_at_var(--sx,50%)_var(--sy,50%),color-mix(in_oklab,var(--cream)_35%,transparent),transparent_60%)]" />
    </div>
  );
}

/** Rolls a value such as "25%" or "40%" up from zero when it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const target = m ? Number(m[2]) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);
  useEffect(() => {
    const el = ref.current;
    if (!el || !m || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1300);
        setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  if (!m) return <>{value}</>;
  return <span ref={ref} className="tabular-nums">{m[1]}{n}{m[3]}</span>;
}
