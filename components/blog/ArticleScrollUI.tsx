"use client";

import { useEffect, useRef, useState } from "react";
import type { WPHeading } from "@/lib/wordpress";

/* ═══════════════════════════════════════════════════════════════
   ARTICLE SCROLL UI

   Bundles the two scroll-driven pieces of the article template into
   one client island, since they share the same underlying state:
     1. The fixed reading-progress bar at the very top of the page.
     2. The "On this page" TOC in the left rail, whose active link
        (and the "n% read" line under it) tracks scroll position.

   Everything else on the article page is server-rendered; this is
   the only part that needs the browser's scroll position.
   ═══════════════════════════════════════════════════════════════ */

export function ReadingProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const doc = document.scrollingElement || document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      setPct(value);
    };

    onScroll();
    if (prefersReduced) return; // still show the initial position, just don't animate on scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-ink/[0.08]"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full bg-fire" style={{ width: `${pct * 100}%` }} />
    </div>
  );
}

export function TableOfContents({ headings }: { headings: WPHeading[] }) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);
  const [pct, setPct] = useState(0);
  const headingElsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    headingElsRef.current = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const doc = document.scrollingElement || document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);

      // The active heading is the last one whose top has scrolled above
      // the sticky header's clearance line — matches the design spec's
      // rule exactly (a heading "becomes current" once you've scrolled
      // past it, not only once it's centered in the viewport).
      let current: string | null = headingElsRef.current[0]?.id ?? null;
      for (const el of headingElsRef.current) {
        if (el.getBoundingClientRect().top < 160) current = el.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      <div className="mono text-[10px] text-ink/50 pb-3.5 border-b border-ink/10">
        On this page
      </div>
      <nav className="flex flex-col gap-0.5 pt-3">
        {headings.map((h) => {
          const active = h.id === activeId;
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`text-sm leading-snug py-1.5 pl-3.5 border-l-2 transition-colors ${
                active ? "border-fire text-ink font-bold" : "border-ink/10 text-ink/60 hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          );
        })}
      </nav>
      <div className="mt-6 pt-4 border-t border-ink/10 mono text-[10px] text-ink/50">
        {Math.round(pct * 100)}% read
      </div>
    </>
  );
}

/** Mobile/tablet fallback for the TOC (≤1180px hides the sticky rail per
 *  the design spec) — a collapsible disclosure above the article body,
 *  reusing the same heading list without the scroll-synced highlighting
 *  (not worth the complexity at that width; a static jump list is enough). */
export function MobileToc({ headings }: { headings: WPHeading[] }) {
  if (headings.length === 0) return null;
  return (
    <details className="xl:hidden brutal-border bg-bone p-5 mb-10 group">
      <summary className="mono text-[11px] uppercase tracking-[0.18em] text-ink/60 cursor-pointer flex items-center justify-between">
        On this page
        <span className="transition-transform group-open:rotate-45">+</span>
      </summary>
      <nav className="flex flex-col gap-2 mt-4 pt-4 border-t border-ink/10">
        {headings.map((h) => (
          <a key={h.id} href={`#${h.id}`} className="text-sm text-ink/70 hover:text-fire">
            {h.text}
          </a>
        ))}
      </nav>
    </details>
  );
}
