"use client";
/* ═══════════════════════════════════════════════════════════════
   REVLYN · MOTION RUNTIME
   Lenis smooth-scroll + GSAP ScrollTrigger orchestration.
   Client-only. Mounted once in the root layout.

   IMPORTANT: Next.js's App Router keeps the root layout (and this
   component) mounted across client-side navigations — only the page
   content underneath it swaps out. That means the one-time DOM scan
   this used to do on first mount would go stale the moment you
   navigated anywhere: ScrollTriggers kept pointing at the previous
   page's elements, Lenis kept the previous page's measured scroll
   height, and the progress bar / pinned panels / rail highlighting
   all broke on every page except whichever one loaded first.

   Fix: Lenis + the raf loop are created once, but the DOM scan that
   wires up ScrollTrigger is re-run on every pathname change, after
   killing the previous page's triggers and resizing Lenis.
   ═══════════════════════════════════════════════════════════════ */
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type LenisInstance = { resize: () => void; on: (e: string, cb: () => void) => void; raf: (t: number) => void };
// gsap/ScrollTrigger are loaded dynamically at runtime; typing them precisely
// here isn't worth the fragility, so this file opts out of the rule.
type GsapModule = any;
type ScrollTriggerModule = any;

let lenisSingleton: LenisInstance | null = null;
let gsapRef: GsapModule | null = null;
let ScrollTriggerRef: ScrollTriggerModule | null = null;
let libsLoadingPromise: Promise<void> | null = null;

async function loadLibs() {
  if (gsapRef && ScrollTriggerRef) return;
  if (!libsLoadingPromise) {
    libsLoadingPromise = (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const gsap = gsapMod.default ?? gsapMod;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      gsapRef = gsap;
      ScrollTriggerRef = ScrollTrigger;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lenis = new Lenis({
        duration: prefersReduced ? 0.4 : 1.15,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: !prefersReduced,
      }) as unknown as LenisInstance;
      lenisSingleton = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      lenis.on("scroll", () => ScrollTrigger.update());
    })();
  }
  return libsLoadingPromise;
}

/** Re-scans the current page's DOM and (re)creates every ScrollTrigger.
 *  Safe to call repeatedly — always kills prior triggers first. */
function setupScrollTriggers() {
  const gsap: any = gsapRef;
  const ScrollTrigger: any = ScrollTriggerRef;
  if (!gsap || !ScrollTrigger) return;

  // Wipe every trigger from the previous page before re-scanning.
  ScrollTrigger.getAll().forEach((t: any) => t.kill());

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── REVEAL: [data-reveal] fade-up on scroll ──────
  gsap.utils.toArray("[data-reveal]").forEach((el: any) => {
    const delay = parseFloat(el.dataset.revealDelay ?? "0");
    gsap.fromTo(
      el,
      { y: 40, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: prefersReduced ? 0.01 : 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
  });

  // ── STAGGER: children of [data-stagger] ──────────
  gsap.utils.toArray("[data-stagger]").forEach((el: any) => {
    const kids = Array.from(el.children) as HTMLElement[];
    gsap.fromTo(
      kids,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  });

  // ── PARALLAX: [data-parallax="speed"] ────────────
  gsap.utils.toArray("[data-parallax]").forEach((el: any) => {
    const speed = parseFloat(el.dataset.parallax ?? "0.2");
    gsap.to(el, {
      yPercent: -speed * 30,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  // ── SCRUB SCHEMATIC: draw lines & assemble hero ──
  const heroPaths = document.querySelectorAll<SVGPathElement | SVGLineElement>(
    "[data-hero-schematic] [data-draw]",
  );
  heroPaths.forEach((p) => {
    const len = (p as SVGPathElement).getTotalLength?.() ?? 400;
    p.style.strokeDasharray = String(len);
    p.style.strokeDashoffset = String(len);
    gsap.to(p, {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: p, start: "top 90%", once: true },
    });
  });

  const heroNodes = document.querySelectorAll<HTMLElement>("[data-hero-schematic] [data-node]");
  if (heroNodes.length) {
    gsap.fromTo(
      heroNodes,
      { scale: 0, opacity: 0, transformOrigin: "center" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(2)",
        scrollTrigger: { trigger: heroNodes[0], start: "top 90%", once: true },
      },
    );
  }

  // ── PINNED SECTIONS: [data-pin] pins its [data-pin-inner] child for as
  // long as the [data-pin] container itself is scrolling past — used for
  // "sticky sidebar next to a taller scrolling column" layouts. This
  // replaces CSS `position: sticky`, which conflicts with Lenis smooth-scroll.
  gsap.utils.toArray("[data-pin]").forEach((el: any) => {
    const inner = el.querySelector("[data-pin-inner]");
    if (!inner) return;
    ScrollTrigger.create({
      trigger: el,
      start: "top 100",
      end: "bottom bottom",
      pin: inner,
      pinSpacing: false,
    });
    const scrubbers = el.querySelectorAll("[data-pin-scrub]");
    scrubbers.forEach((s: any, i: number) => {
      gsap.fromTo(
        s,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: `top+=${(i / scrubbers.length) * 100}% top`,
            end: `top+=${((i + 1) / scrubbers.length) * 100}% top`,
            scrub: true,
          },
        },
      );
    });
  });

  // ── COUNTUP: [data-count-to="142"] ───────────────
  gsap.utils.toArray("[data-count-to]").forEach((el: any) => {
    const target = parseFloat(el.dataset.countTo ?? "0");
    const suffix = el.dataset.countSuffix ?? "";
    const prefix = el.dataset.countPrefix ?? "";
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.v).toLocaleString()}${suffix}`;
      },
    });
  });

  // ── MAGNETIC BUTTONS: [data-magnetic] ────────────
  if (!prefersReduced && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      if (el.dataset.magneticBound === "true") return;
      el.dataset.magneticBound = "true";
      const strength = parseFloat(el.dataset.magnetic || "18");
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        gsap.to(el, { x: (x / r.width) * strength, y: (y / r.height) * strength, duration: 0.4, ease: "power3.out" });
      };
      const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
    });
  }

  // ── ACT RAIL: highlight current chapter (only present on pages that render one) ──
  const acts = document.querySelectorAll<HTMLElement>("[data-act]");
  const railItems = document.querySelectorAll<HTMLElement>("[data-act-rail-item]");
  if (acts.length && railItems.length) {
    acts.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 40%",
        end: "bottom 40%",
        onToggle: (self: any) => {
          if (self.isActive) {
            railItems.forEach((r, j) => r.setAttribute("data-active", j === i ? "true" : "false"));
          }
        },
      });
    });
  }

  // ── PREMIUM SECTION SCROLL ──
  if (!prefersReduced) {
    const sectionSelectors = "main > section, [data-act] > section, [data-act] > div > section";
    const seen = new WeakSet<Element>();
    const allSections = document.querySelectorAll<HTMLElement>(sectionSelectors);
    allSections.forEach((sec) => {
      if (seen.has(sec)) return;
      seen.add(sec);
      if (sec.hasAttribute("data-no-premium")) return;

      gsap.fromTo(
        sec,
        { y: 60, opacity: 0, scale: 0.985, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sec, start: "top 92%", once: true },
        },
      );

      const inner = sec.querySelector<HTMLElement>(":scope > div, :scope > *");
      if (inner && !inner.hasAttribute("data-no-parallax")) {
        gsap.fromTo(
          inner,
          { yPercent: 4 },
          {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }
    });

    gsap.utils.toArray("section h1, section h2").forEach((h: any) => {
      if (h.closest("[data-no-premium]")) return;
      gsap.fromTo(
        h,
        { clipPath: "inset(0 0 100% 0)", y: 24, opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: h, start: "top 88%", once: true },
        },
      );
    });
  }

  const bar = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (bar) {
    bar.style.transform = "scaleX(0)";
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self: any) => {
        bar.style.transform = `scaleX(${self.progress})`;
      },
    });
  }

  // Layout has settled for the new page — make sure Lenis + ScrollTrigger
  // agree on the actual (new) document height.
  lenisSingleton?.resize();
  ScrollTrigger.refresh();
}

export function MotionRuntime() {
  const pathname = usePathname();
  const rafId = useRef(0);

  useEffect(() => {
    let cancelled = false;

    loadLibs().then(() => {
      if (cancelled) return;
      // Wait a frame so the new page's content is actually in the DOM
      // before scanning for [data-reveal]/[data-pin]/etc.
      rafId.current = requestAnimationFrame(() => {
        if (!cancelled) setupScrollTriggers();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId.current);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[80] origin-left bg-fire"
      style={{ transform: "scaleX(0)" }}
      data-scroll-progress
    />
  );
}
