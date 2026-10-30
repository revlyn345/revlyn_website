import { useEffect } from "react";

/**
 * Moves every [data-depth] element at its own speed while scrolling (parallax),
 * and switches the fixed loop layer's blend mode between dark and light areas.
 * Uses the CSS `translate` property so it never fights `.reveal` transforms.
 */
export function DepthScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let raf = 0;
    const run = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const d = Number(el.dataset["depth"]) || 0;
        el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * -d).toFixed(1)}px`;
      }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return null;
}
