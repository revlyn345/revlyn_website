"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookCallButton } from "@/components/BookCallButton";

/* ── Live clock (Gurugram / IST) ─────────────────────────────────── */
function useIstClock() {
  // Start as null (not a real time) so the server-rendered HTML and the
  // client's first render match exactly. The real time is only ever
  // calculated inside useEffect, which runs after hydration — so a clock
  // tick landing between server render and client hydration can no longer
  // cause a mismatch.
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    setTime(formatIst());
    const id = setInterval(() => setTime(formatIst()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}
function formatIst() {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "--:--";
  }
}

/* ── Top signal strip (thin ticker above main nav) ───────────────── */
function SignalStrip() {
  const time = useIstClock();
  const items = [
    "Onboarding new teams for Q1",
    "HubSpot Solutions Partner",
    "Bitscale certified",
    "Avg. Slack response 14 min",
    "50 portals shipped",
    "Operators, not account managers",
  ];
  return (
    <div className="hidden md:block bg-ink text-paper/80 border-b border-paper/10">
      <div className="max-w-[1400px] mx-auto px-6 h-8 flex items-center gap-6 text-[11px] font-mono tracking-[0.14em] uppercase">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inset-0 rounded-full bg-fire opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fire" />
          </span>
          Live
        </span>
        <span className="text-paper/40">·</span>
        <span>Gurugram · IST {time ?? "--:--"}</span>
        <span className="text-paper/40">·</span>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...items, ...items].map((t, i) => (
              <span key={i} className="text-paper/70">
                {t} <span className="text-fire mx-3">◆</span>
              </span>
            ))}
          </div>
        </div>
        <a
          href="mailto:info@revlyn.io"
          className="text-paper/70 hover:text-fire transition-colors shrink-0"
        >
          info@revlyn.io
        </a>
      </div>
    </div>
  );
}

type MenuKey = "what" | "hubspot" | "partners" | "work";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  // Only one top-level dropdown can be open at a time. Using a single
  // "which menu" value instead of four separate booleans means opening
  // one menu automatically closes whichever other one was open — hovering
  // from "What we do" straight into "HubSpot" no longer leaves both panels
  // stacked open, since setting activeMenu to "hubspot" is by definition
  // also un-setting it from "what".
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [implOpen, setImplOpen] = useState(false);
  const whatRef = useRef<HTMLDivElement>(null);
  const hubspotRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  // Used to position the Implementation flyout so it starts level with the
  // "Implementation" row instead of the top of the HubSpot panel.
  const hubspotPanelRef = useRef<HTMLDivElement>(null);
  const implRowRef = useRef<HTMLAnchorElement>(null);
  const [implOffset, setImplOffset] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const whatOpen = activeMenu === "what";
  const hubspotOpen = activeMenu === "hubspot";
  const partnersOpen = activeMenu === "partners";
  const workOpen = activeMenu === "work";

  // Mobile menu — the desktop pill nav (<nav className="hidden md:flex">)
  // has no mobile equivalent, so below md there was previously no way to
  // reach any page except the ones linked from the homepage body. This adds
  // a hamburger button + slide-down panel with the same links, grouped the
  // same way, as an accordion.
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [mobileImplOpen, setMobileImplOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideAny =
        whatRef.current?.contains(target) ||
        hubspotRef.current?.contains(target) ||
        workRef.current?.contains(target) ||
        partnersRef.current?.contains(target);
      if (!insideAny) {
        setActiveMenu(null);
        setImplOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Closing the HubSpot menu (or switching to a different top-level menu)
  // should always take the Implementation flyout with it.
  useEffect(() => {
    if (activeMenu !== "hubspot") setImplOpen(false);
  }, [activeMenu]);

  // Close the mobile menu whenever the route changes (e.g. tapping a link).
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setMobileImplOpen(false);
  }, [pathname]);

  // Prevent the page from scrolling behind the mobile menu while it's open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Measure where the "Implementation" row sits inside the HubSpot panel so
  // the flyout can be positioned to start right next to it, rather than
  // defaulting to the top of the panel.
  useEffect(() => {
    if (hubspotOpen && hubspotPanelRef.current && implRowRef.current) {
      const panelTop = hubspotPanelRef.current.getBoundingClientRect().top;
      const rowTop = implRowRef.current.getBoundingClientRect().top;
      setImplOffset(rowTop - panelTop);
    }
  }, [hubspotOpen]);

  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const mainLinks = [
    { label: "Use cases", to: "/use-cases" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const partnersLinks = [
    { label: "Overview", to: "/partners", note: "Both platforms" },
    { label: "HubSpot", to: "/partners/hubspot", note: "Solutions Partner" },
    { label: "Bitscale in Action", to: "/partners/bitscale", note: "Live plays" },
  ];

  const workLinks = [
    { label: "Ausforming", to: "/work/ausforming", note: "GTM engine from zero · 50%+ reply-to-call" },
    { label: "Detrack", to: "/work/detrack", note: "SaaS stack simplification" },
    { label: "Datapel", to: "/work/datapel", note: "Warehouse software · 19% → 68%" },
    { label: "Integrity Fire", to: "/work/integrity-fire", note: "Field service · people, process, technology" },
    { label: "Punjab Film City", to: "/work/punjab-film-city", note: "Zoho booking, CRM & tele-sales system" },
  ];

  const whatLinks = [
    ["Engine", "engine", "The system we build"],
    ["Services", "services", "CRM · RevOps · GTM · AI"],
    ["Method", "method", "How we operate"],
    ["Stack", "stack", "Tools we run on"],
    ["Proof", "proof", "Case ledger"],
  ] as const;

  const implementationLinks = [
    { label: "Marketing Hub", to: "/hubspot-implementation/marketing-hub", note: "Campaigns, forms, attribution" },
    { label: "Sales Hub", to: "/hubspot-implementation/sales-hub", note: "Pipeline, sequences, forecast" },
    { label: "Service Hub", to: "/hubspot-implementation/service-hub", note: "Tickets, SLAs, CSAT" },
    { label: "Content Hub", to: "/hubspot-implementation/content-hub", note: "CMS, SEO, templates" },
  ];

  const hubspotLinks = [
    { label: "HubSpot as a Service", to: "/hubspot-as-a-service", note: "Ongoing operator" },
    { label: "Implementation", to: "/hubspot-implementation", note: "6-week build" },
    { label: "Optimization", to: "/hubspot-optimization", note: "Portal reset" },
    { label: "Audit", to: "/hubspot-audit", note: "Free 47-point review" },
  ];

  const hubspotActive = hubspotLinks.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to),
  );

  const workActive = workLinks.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to),
  );

  const partnersActive = partnersLinks.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to),
  );

  return (
    <header className="sticky top-0 z-50">
      <SignalStrip />
      <div
        className={`transition-all ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-ink/10 shadow-[0_1px_0_rgba(10,10,10,0.04)]"
            : "bg-paper/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-16 md:h-[68px] grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Revlyn home">
            <Image
              src="/revlyn-wordmark.png"
              alt="Revlyn"
              width={140}
              height={28}
              priority
              className="h-5 md:h-6 w-auto object-contain transition-transform group-hover:-translate-y-px"
            />
          </Link>

          {/* Pill nav */}
          <nav className="hidden md:flex justify-center">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-ink/15 bg-paper/80 backdrop-blur px-1.5 py-1.5 shadow-[0_2px_20px_-6px_rgba(10,10,10,0.08)] shrink-0">
              {/* What we do */}
              <div ref={whatRef} className="relative shrink-0">
                <button
                  onClick={() => setActiveMenu((v) => (v === "what" ? null : "what"))}
                  onMouseEnter={() => setActiveMenu("what")}
                  className={`relative px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                    whatOpen ? "text-paper" : "text-ink/75 hover:text-ink"
                  }`}
                  aria-expanded={whatOpen}
                >
                  {whatOpen && <span className="absolute inset-0 rounded-full bg-ink -z-0" />}
                  <span className="relative z-10 flex items-center gap-1">
                    What we do
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${whatOpen ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {whatOpen && (
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    
                    {whatLinks.map(([label, id, note]) => (
                      <a
                        key={id}
                        href={anchor(id)}
                        onClick={() => setActiveMenu(null)}
                        className="group flex items-center justify-between px-3 py-2 rounded-xl text-sm text-ink/80 hover:text-ink hover:bg-bone transition-colors"
                      >
                        <span>
                          <span className="block font-medium">{label}</span>
                          <span className="block text-[11px] text-ink/50">{note}</span>
                        </span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* HubSpot */}
              <div ref={hubspotRef} className="relative shrink-0">
                <button
                  onClick={() => setActiveMenu((v) => (v === "hubspot" ? null : "hubspot"))}
                  onMouseEnter={() => setActiveMenu("hubspot")}
                  className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
                    hubspotOpen || hubspotActive ? "text-paper" : "text-ink/75 hover:text-ink"
                  }`}
                  aria-expanded={hubspotOpen}
                >
                  {(hubspotOpen || hubspotActive) && (
                    <span className="absolute inset-0 rounded-full bg-ink -z-0" />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    HubSpot
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${hubspotOpen ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {hubspotOpen && (
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px]"
                  >
                    <div ref={hubspotPanelRef} className="relative w-[300px]">
                      <div className="rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden">
                        
                        {hubspotLinks.map((link) => {
                          const active = link.to === pathname || pathname?.startsWith(link.to);
                          const isImplementation = link.to === "/hubspot-implementation";
                          return (
                            <Link
                              key={link.to}
                              href={link.to}
                              ref={isImplementation ? implRowRef : undefined}
                              onMouseEnter={() => setImplOpen(isImplementation)}
                              onClick={() => {
                                setActiveMenu(null);
                                setImplOpen(false);
                              }}
                              className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                                active || (isImplementation && implOpen)
                                  ? "bg-ink text-paper"
                                  : "text-ink/80 hover:text-ink hover:bg-bone"
                              }`}
                            >
                              <span>
                                <span className="block font-medium">{link.label}</span>
                                <span
                                  className={`block text-[11px] ${
                                    active || (isImplementation && implOpen) ? "text-paper/60" : "text-ink/50"
                                  }`}
                                >
                                  {link.note}
                                </span>
                              </span>
                              {isImplementation ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fire shrink-0">
                                  <path d="M9 6l6 6-6 6" />
                                </svg>
                              ) : (
                                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">→</span>
                              )}
                            </Link>
                          );
                        })}
                      </div>

                      {implOpen && (
                        <div
                          style={{ marginTop: implOffset }}
                          className="absolute top-0 left-full ml-2 w-[300px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                        >
                         
                          {implementationLinks.map((link) => {
                            const active = link.to === pathname || pathname?.startsWith(link.to);
                            return (
                              <Link
                                key={link.to}
                                href={link.to}
                                onClick={() => {
                                  setActiveMenu(null);
                                  setImplOpen(false);
                                }}
                                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                                  active ? "bg-ink text-paper" : "text-ink/80 hover:text-ink hover:bg-bone"
                                }`}
                              >
                                <span>
                                  <span className="block font-medium">{link.label}</span>
                                  <span className={`block text-[11px] ${active ? "text-paper/60" : "text-ink/50"}`}>
                                    {link.note}
                                  </span>
                                </span>
                                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">→</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {/* Partners */}
              <div ref={partnersRef} className="relative shrink-0">
                <button
                  onClick={() => setActiveMenu((v) => (v === "partners" ? null : "partners"))}
                  onMouseEnter={() => setActiveMenu("partners")}
                  className={`relative px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                    partnersOpen || partnersActive ? "text-paper" : "text-ink/75 hover:text-ink"
                  }`}
                  aria-expanded={partnersOpen}
                >
                  {(partnersOpen || partnersActive) && (
                    <span className="absolute inset-0 rounded-full bg-ink -z-0" />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    Partners
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${partnersOpen ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {partnersOpen && (
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    
                    {partnersLinks.map((link) => {
                      const active = link.to === pathname || pathname?.startsWith(link.to);
                      return (
                        <Link
                          key={link.to}
                          href={link.to}
                          onClick={() => setActiveMenu(null)}
                          className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                            active ? "bg-ink text-paper" : "text-ink/80 hover:text-ink hover:bg-bone"
                          }`}
                        >
                          <span>
                            <span className="block font-medium">{link.label}</span>
                            <span className={`block text-[11px] ${active ? "text-paper/60" : "text-ink/50"}`}>
                              {link.note}
                            </span>
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">→</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Work */}
              <div ref={workRef} className="relative shrink-0">
                <button
                  onClick={() => setActiveMenu((v) => (v === "work" ? null : "work"))}
                  onMouseEnter={() => setActiveMenu("work")}
                  className={`relative px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                    workOpen || workActive ? "text-paper" : "text-ink/75 hover:text-ink"
                  }`}
                  aria-expanded={workOpen}
                >
                  {(workOpen || workActive) && (
                    <span className="absolute inset-0 rounded-full bg-ink -z-0" />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    Work
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${workOpen ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {workOpen && (
                  <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    
                    {workLinks.map((link) => {
                      const active = link.to === pathname || pathname?.startsWith(link.to);
                      return (
                        <Link
                          key={link.to}
                          href={link.to}
                          onClick={() => setActiveMenu(null)}
                          className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                            active ? "bg-ink text-paper" : "text-ink/80 hover:text-ink hover:bg-bone"
                          }`}
                        >
                          <span>
                            <span className="block font-medium">{link.label}</span>
                            <span className={`block text-[11px] ${active ? "text-paper/60" : "text-ink/50"}`}>
                              {link.note}
                            </span>
                          </span>
                          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">→</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {mainLinks.map((link) => {
                const isActive =
                  link.to === pathname ||
                  (link.to !== "/" && pathname?.startsWith(link.to));
                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className={`relative px-4 py-1.5 text-sm rounded-full whitespace-nowrap shrink-0 transition-colors ${
                      isActive ? "text-paper" : "text-ink/75 hover:text-ink"
                    }`}
                  >
                    {isActive && <span className="absolute inset-0 rounded-full bg-ink -z-0" />}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* CTA */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="tel:+917503044000"
              className="hidden lg:inline-flex items-center gap-1.5 text-[12px] text-ink/60 hover:text-ink transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 75030 44000
            </a>
            <BookCallButton className="group relative inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-4 pr-1.5 py-1.5 text-sm font-medium hover:bg-fire transition-colors">
              Book a call
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-paper text-ink transition-transform group-hover:translate-x-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </BookCallButton>

            {/* Hamburger — mobile only, opens the slide-down menu below */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15 bg-paper/80 text-ink shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu backdrop + panel ────────────────────────────── */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-30 bg-ink/20"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="md:hidden absolute inset-x-0 top-full z-40 bg-paper max-h-[75vh] overflow-y-auto border-t border-ink/10 shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            {/* What we do — accordion */}
            <button
              type="button"
              onClick={() => setMobileSection((v) => (v === "what" ? null : "what"))}
              className="flex items-center justify-between py-3 border-b border-ink/10 text-left"
            >
              <span className="text-base font-medium">What we do</span>
              <span className={`transition-transform ${mobileSection === "what" ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {mobileSection === "what" && (
              <div className="pl-4 pb-2">
                {whatLinks.map(([label, id, note]) => (
                  <a
                    key={id}
                    href={anchor(id)}
                    className="block py-2.5 border-b border-ink/5"
                  >
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block text-xs text-ink/50">{note}</span>
                  </a>
                ))}
              </div>
            )}

            {/* HubSpot — accordion, with nested Implementation */}
            <button
              type="button"
              onClick={() => setMobileSection((v) => (v === "hubspot" ? null : "hubspot"))}
              className="flex items-center justify-between py-3 border-b border-ink/10 text-left"
            >
              <span className="text-base font-medium">HubSpot</span>
              <span className={`transition-transform ${mobileSection === "hubspot" ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {mobileSection === "hubspot" && (
              <div className="pl-4 pb-2">
                {hubspotLinks.map((link) => {
                  const isImplementation = link.to === "/hubspot-implementation";
                  return (
                    <div key={link.to}>
                      <div className="flex items-center justify-between border-b border-ink/5">
                        <Link href={link.to} className="block py-2.5 flex-1">
                          <span className="block text-sm font-medium">{link.label}</span>
                          <span className="block text-xs text-ink/50">{link.note}</span>
                        </Link>
                        {isImplementation && (
                          <button
                            type="button"
                            onClick={() => setMobileImplOpen((v) => !v)}
                            aria-label="Toggle Implementation sub-menu"
                            className="px-2 py-2.5"
                          >
                            <span className={`inline-block transition-transform ${mobileImplOpen ? "rotate-180" : ""}`}>⌄</span>
                          </button>
                        )}
                      </div>
                      {isImplementation && mobileImplOpen && (
                        <div className="pl-4">
                          {implementationLinks.map((sub) => (
                            <Link key={sub.to} href={sub.to} className="block py-2 border-b border-ink/5">
                              <span className="block text-sm">{sub.label}</span>
                              <span className="block text-xs text-ink/50">{sub.note}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Partners — accordion */}
            <button
              type="button"
              onClick={() => setMobileSection((v) => (v === "partners" ? null : "partners"))}
              className="flex items-center justify-between py-3 border-b border-ink/10 text-left"
            >
              <span className="text-base font-medium">Partners</span>
              <span className={`transition-transform ${mobileSection === "partners" ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {mobileSection === "partners" && (
              <div className="pl-4 pb-2">
                {partnersLinks.map((link) => (
                  <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                    <span className="block text-sm font-medium">{link.label}</span>
                    <span className="block text-xs text-ink/50">{link.note}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Work — accordion */}
            <button
              type="button"
              onClick={() => setMobileSection((v) => (v === "work" ? null : "work"))}
              className="flex items-center justify-between py-3 border-b border-ink/10 text-left"
            >
              <span className="text-base font-medium">Work</span>
              <span className={`transition-transform ${mobileSection === "work" ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {mobileSection === "work" && (
              <div className="pl-4 pb-2">
                {workLinks.map((link) => (
                  <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                    <span className="block text-sm font-medium">{link.label}</span>
                    <span className="block text-xs text-ink/50">{link.note}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Flat links */}
            {mainLinks.map((link) => (
              <Link key={link.to} href={link.to} className="py-3 border-b border-ink/10 text-base font-medium">
                {link.label}
              </Link>
            ))}

            {/* Phone + Book a call, pinned at the bottom of the list */}
            <a
              href="tel:+917503044000"
              className="flex items-center gap-2 py-4 text-sm text-ink/70"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 75030 44000
            </a>
            <BookCallButton className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper py-3.5 text-base font-medium mb-6">
              Book a call
            </BookCallButton>
          </div>
          </div>
        </>
      )}
    </header>
  );
}
