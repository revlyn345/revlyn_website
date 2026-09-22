"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookCallButton } from "@/components/BookCallButton";

type MenuKey = "hubspot" | "revops" | "partners" | "resources";

/* ─────────────────────────────  DATA  ───────────────────────────── */

const HUBSPOT_GROUPS = [
  {
    id: "hubspot",
    label: "HubSpot",
    title: "HubSpot",
    blurb: "Design, run and continuously improve HubSpot as your single revenue system.",
    links: [
      { label: "HubSpot as a Service", to: "/hubspot-as-a-service", note: "Ongoing operator" },
      { label: "Implementation", to: "/hubspot-implementation", note: "6-week build" },
      { label: "Optimization", to: "/hubspot-optimization", note: "Portal reset" },
      { label: "Audit", to: "/hubspot-audit", note: "Free 47-point review" },
    ],
  },
  {
    id: "implementation",
    label: "Implementation",
    title: "Implementation",
    blurb: "Stand up each HubSpot Hub the right way, from day one.",
    links: [
      { label: "Marketing Hub", to: "/hubspot-implementation/marketing-hub", note: "Campaigns, forms, attribution" },
      { label: "Sales Hub", to: "/hubspot-implementation/sales-hub", note: "Pipeline, sequences, forecast" },
      { label: "Service Hub", to: "/hubspot-implementation/service-hub", note: "Tickets, SLAs, CSAT" },
      { label: "Content Hub", to: "/hubspot-implementation/content-hub", note: "CMS, SEO, templates" },
    ],
  },
];

const REVOPS_GROUPS = [
  {
    id: "ai-agents",
    label: "AI Agents",
    title: "AI Agents",
    blurb: "Agents that live inside your CRM, not in a separate sandbox.",
    links: [
      { label: "AI Agents", to: "/ai-agents", note: "Agents built on your CRM" },
      { label: "SEO Agent", to: "/auto-seo-agent", note: "Automated blog publishing" },
    ],
  },
];

const PARTNERS_GROUPS = [
  {
    id: "partners",
    label: "Partners",
    title: "Partners",
    blurb: "The platforms we build on and the plays we run with them.",
    links: [
      { label: "Overview", to: "/partners", note: "Both platforms" },
      { label: "HubSpot", to: "/partners/hubspot", note: "Solutions Partner" },
      { label: "Bitscale in Action", to: "/partners/bitscale", note: "Live plays" },
    ],
  },
];

const RESOURCES_GROUPS = [
  {
    id: "work",
    label: "Work",
    title: "Client Work",
    blurb: "Real systems, real outcomes - what we've shipped and what changed.",
    links: [
      { label: "Ausforming", to: "/work/ausforming", note: "GTM engine from zero · 50%+ reply-to-call" },
      { label: "Detrack", to: "/work/detrack", note: "SaaS stack simplification" },
      { label: "Datapel", to: "/work/datapel", note: "Warehouse software · 19% → 68%" },
      { label: "Integrity Fire", to: "/work/integrity-fire", note: "Field service · people, process, technology" },
      { label: "Punjab Film City", to: "/work/punjab-film-city", note: "Zoho booking, CRM & tele-sales system" },
    ],
  },
  {
    id: "library",
    label: "Library",
    title: "Resources",
    blurb: "Guides, industries and field notes from the Revlyn team.",
    links: [
      { label: "Industries", to: "/use-cases", note: "Built for your business type" },
      { label: "Blog", to: "/blog", note: "Field notes from the team" },
    ],
  },
];

const MAIN_LINKS = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

/* ───────────────────  MULTI-COLOR ACCENT PALETTE  ─────────────────── */

const CARD_ACCENTS = [
  {
    title: "text-[#23B5D3]",
    border: "border-[#23B5D3]/30",
    iconBg: "bg-[#23B5D3]",
    iconText: "text-white",
    arcColor: "text-[#23B5D3]/20",
    cardBg: "bg-[#23B5D3]/[0.02]",
  },
  {
    title: "text-[#F4A261]",
    border: "border-[#F4A261]/30",
    iconBg: "bg-[#F4A261]",
    iconText: "text-white",
    arcColor: "text-[#F4A261]/20",
    cardBg: "bg-[#F4A261]/[0.02]",
  },
  {
    title: "text-[#6C63FF]",
    border: "border-[#6C63FF]/30",
    iconBg: "bg-[#6C63FF]",
    iconText: "text-white",
    arcColor: "text-[#6C63FF]/20",
    cardBg: "bg-[#6C63FF]/[0.02]",
  },
  {
    title: "text-[#2A9D8F]",
    border: "border-[#2A9D8F]/30",
    iconBg: "bg-[#2A9D8F]",
    iconText: "text-white",
    arcColor: "text-[#2A9D8F]/20",
    cardBg: "bg-[#2A9D8F]/[0.02]",
  },
  {
    title: "text-[#E76F51]",
    border: "border-[#E76F51]/30",
    iconBg: "bg-[#E76F51]",
    iconText: "text-white",
    arcColor: "text-[#E76F51]/20",
    cardBg: "bg-[#E76F51]/[0.02]",
  },
  {
    title: "text-[#8338EC]",
    border: "border-[#8338EC]/30",
    iconBg: "bg-[#8338EC]",
    iconText: "text-white",
    arcColor: "text-[#8338EC]/20",
    cardBg: "bg-[#8338EC]/[0.02]",
  },
];

const getAccent = (index: number) => CARD_ACCENTS[index % CARD_ACCENTS.length];

/* ─────────────────────────────  COMPONENT  ───────────────────────────── */

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeGroup, setActiveGroup] = useState<string>("hubspot");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [mobileImplOpen, setMobileImplOpen] = useState(false);

  // Refs
  const navAreaRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const hubspotOpen = activeMenu === "hubspot";
  const revopsOpen = activeMenu === "revops";
  const partnersOpen = activeMenu === "partners";
  const resourcesOpen = activeMenu === "resources";

  const hubspotActive = HUBSPOT_GROUPS[0].links.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to)
  );
  const revopsActive = REVOPS_GROUPS[0].links.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to)
  );
  const partnersActive = PARTNERS_GROUPS[0].links.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to)
  );
  const workActive = RESOURCES_GROUPS[0].links.some(
    (l) => l.to === pathname || pathname?.startsWith(l.to)
  );
  const resourcesActive =
    workActive || RESOURCES_GROUPS[1].links.some((l) => l.to === pathname || pathname?.startsWith(l.to));

  /* Cancel any pending close */
  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  /* Schedule a close (grace period so cursor can travel trigger → panel) */
  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  /* Open a menu (cancels any pending close) */
  const openMenu = (key: MenuKey) => {
    cancelClose();
    setActiveMenu(key);
  };

  /* Scroll listener */
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  /* Outside-click — treat clicks inside BOTH nav triggers and the panel as "inside" */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideNav = navAreaRef.current?.contains(target);
      const insidePanel = panelRef.current?.contains(target);
      if (!insideNav && !insidePanel) {
        cancelClose();
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  /* Reset active group on menu change */
  useEffect(() => {
    if (activeMenu === "hubspot") setActiveGroup("hubspot");
    if (activeMenu === "revops") setActiveGroup("ai-agents");
    if (activeMenu === "partners") setActiveGroup("partners");
    if (activeMenu === "resources") setActiveGroup("work");
  }, [activeMenu]);

  /* Lock body scroll for mobile */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setMobileImplOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  /* Cleanup timeout on unmount */
  useEffect(() => {
    return () => cancelClose();
  }, []);

  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  /* ── Mega panel ─────────────────────────────────────────── */
  type Group = {
    id: string;
    label: string;
    title: string;
    blurb: string;
    links: { label: string; to: string; note: string }[];
  };

  const renderMegaPanel = (groups: Group[]) => {
    const current = groups.find((g) => g.id === activeGroup) ?? groups[0];
    return (
      <div
        ref={panelRef}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className="
          w-[min(1100px,calc(100vw-3rem))]
          grid grid-cols-[260px_1fr]
          rounded-3xl border border-ink/10 bg-paper
          shadow-[0_30px_80px_-30px_rgba(10,10,10,0.35)]
          overflow-hidden animate-[dropIn_180ms_ease-out]
        "
      >
        {/* ── Left sidebar ─────────────────────────────── */}
        <aside className="bg-bone/60 border-r border-ink/10 p-3">
          {groups.map((g) => {
            const isActive = current.id === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onMouseEnter={() => setActiveGroup(g.id)}
                onClick={() => setActiveGroup(g.id)}
                className={`w-full text-left rounded-2xl px-4 py-3.5 transition-colors ${
                  isActive
                    ? "bg-paper shadow-[0_10px_30px_-15px_rgba(10,10,10,0.2)] border border-ink/10"
                    : "border border-transparent hover:bg-paper/60"
                }`}
              >
                <div className={`text-[15px] font-semibold tracking-tight ${isActive ? "text-fire" : "text-ink"}`}>
                  {g.label}
                </div>
                <div className="text-[12.5px] leading-snug text-ink/55 mt-1">
                  {g.blurb}
                </div>
              </button>
            );
          })}
        </aside>

        {/* ── Right content ────────────────────────────── */}
        <div className="p-6 md:p-7 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4">
            {current.title}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.links.map((link, index) => {
              const isActive = link.to === pathname || pathname?.startsWith(link.to);
              const accent = getAccent(index);

              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`group/card relative overflow-hidden rounded-2xl border p-5 transition-all duration-200 ${
                    isActive
                      ? `${accent.border} ${accent.cardBg}`
                      : `border-ink/10 bg-paper hover:border-ink/25 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_-20px_rgba(10,10,10,0.35)]`
                  }`}
                >
                  {/* Decorative arc — dynamic color */}
                  <svg
                    aria-hidden
                    viewBox="0 0 60 60"
                    className={`absolute -right-2 -bottom-2 w-16 h-16 pointer-events-none ${accent.arcColor}`}
                  >
                    <path d="M60 0 A60 60 0 0 1 0 60 L0 60 Z" fill="currentColor" />
                  </svg>

                  <div className="relative flex items-start justify-between gap-4 pointer-events-none">
                    <div className="min-w-0">
                      <div className={`display text-[19px] leading-tight tracking-[-0.01em] ${accent.title}`}>
                        {link.label}
                      </div>
                      <p className="mt-1.5 text-[13px] leading-snug text-ink/60">
                        {link.note}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border grid place-items-center transition-all duration-200 ${
                        isActive
                          ? `${accent.iconBg} ${accent.iconText} ${accent.border}`
                          : `border-ink/15 bg-paper text-ink/70 group-hover/card:${accent.iconBg} group-hover/card:${accent.iconText} group-hover/card:${accent.border}`
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* ── MenuTrigger ─────────────────────────────────────────── */
  const MenuTrigger = ({
    label, open, active, onClick, onMouseEnter, expanded,
  }: {
    label: string; open: boolean; active: boolean;
    onClick: () => void; onMouseEnter: () => void; expanded: boolean;
  }) => (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      aria-expanded={expanded}
      className={`group/trig relative inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[15px] whitespace-nowrap transition-colors duration-200 ${
        open || active ? "text-ink font-medium" : "text-ink/70 hover:text-ink"
      }`}
    >
      {label}
      <svg
        width="12" height="12" viewBox="0 0 12 12" fill="none"
        className={`transition-transform duration-300 ease-out ${
          open ? "rotate-180" : "group-hover/trig:translate-y-0.5"
        }`}
      >
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-[3px] h-[2px] rounded-full bg-fire transition-transform duration-300 ease-out origin-left ${
          open || active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </button>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 85, 51, 0.35); }
          50% { box-shadow: 0 0 0 8px rgba(255, 85, 51, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-anim, .nav-anim * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 nav-anim">
        <div
          className={`relative transition-all duration-300 ${
            scrolled
              ? "bg-paper/90 backdrop-blur-xl border-b border-ink/10 shadow-[0_8px_30px_-12px_rgba(10,10,10,0.08)]"
              : "bg-paper/70 backdrop-blur-md border-b border-transparent"
          }`}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className={`absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full bg-fire/10 blur-3xl transition-opacity duration-500 ${scrolled ? "opacity-40" : "opacity-70"}`} />
            <div className={`absolute -top-32 -right-24 w-[360px] h-[360px] rounded-full bg-ink/5 blur-3xl transition-opacity duration-500 ${scrolled ? "opacity-30" : "opacity-60"}`} />
          </div>

          {/* ── Nav area wrapper — mouseleave here closes the menu ── */}
          <div
            ref={navAreaRef as any}
            className="relative max-w-[1400px] mx-auto"
            onMouseLeave={scheduleClose}
          >
            {/* Top bar */}
            <div className="relative px-6 h-[72px] md:h-[80px] flex items-center justify-between gap-6">
              {/* Wordmark */}
              <Link href="/" className="group relative flex items-center shrink-0" aria-label="Revlyn home">
                <span className="relative inline-block">
                  <Image
                    src="/revlyn-wordmark.png"
                    alt="Revlyn"
                    width={160}
                    height={32}
                    priority
                    className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                  />
                  <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-fire/70 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100" />
                </span>
              </Link>

              {/* Desktop nav (triggers only) */}
              <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                {/* HubSpot */}
                <div className="relative">
                  <button
                    onClick={() => setActiveMenu((v) => (v === "hubspot" ? null : "hubspot"))}
                    onMouseEnter={() => openMenu("hubspot")}
                    aria-expanded={hubspotOpen}
                    className={`group/hs relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
                      hubspotOpen || hubspotActive
                        ? "bg-fire text-paper shadow-[0_8px_24px_-10px_rgba(255,85,51,0.6)]"
                        : "bg-fire/10 text-fire hover:bg-fire/15"
                    }`}
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/hs:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    <span className="relative">HubSpot</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`relative transition-transform duration-300 ${hubspotOpen ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* RevOps */}
                <div className="relative">
                  <MenuTrigger
                    label="RevOps"
                    open={revopsOpen}
                    active={revopsActive}
                    onClick={() => setActiveMenu((v) => (v === "revops" ? null : "revops"))}
                    onMouseEnter={() => openMenu("revops")}
                    expanded={revopsOpen}
                  />
                </div>

                {/* Partners */}
                <div className="relative">
                  <MenuTrigger
                    label="Partners"
                    open={partnersOpen}
                    active={partnersActive}
                    onClick={() => setActiveMenu((v) => (v === "partners" ? null : "partners"))}
                    onMouseEnter={() => openMenu("partners")}
                    expanded={partnersOpen}
                  />
                </div>

                {/* Resources */}
                <div className="relative">
                  <MenuTrigger
                    label="Resources"
                    open={resourcesOpen}
                    active={resourcesActive}
                    onClick={() => setActiveMenu((v) => (v === "resources" ? null : "resources"))}
                    onMouseEnter={() => openMenu("resources")}
                    expanded={resourcesOpen}
                  />
                </div>

                {/* Flat links */}
                {MAIN_LINKS.map((link) => {
                  const isActive =
                    link.to === pathname ||
                    (link.to !== "/" && pathname?.startsWith(link.to));
                  return (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`group/trig relative inline-flex items-center px-3.5 py-2.5 text-[15px] whitespace-nowrap transition-colors duration-200 ${
                        isActive ? "text-ink font-medium" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-[3px] h-[2px] rounded-full bg-fire transition-transform duration-300 ease-out origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover/trig:scale-x-100"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Right CTA */}
              <div className="flex items-center gap-3 md:gap-4 shrink-0">
                <a
                  href="tel:+917503044000"
                  className="group/tel hidden lg:inline-flex items-center gap-2 text-[13px] font-medium text-ink/70 hover:text-ink transition-colors whitespace-nowrap"
                >
                  <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-fire/10 text-fire transition-all duration-300 group-hover/tel:bg-fire group-hover/tel:text-paper">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="relative">
                    +91 75030 44000
                    <span className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-px bg-fire origin-left scale-x-0 transition-transform duration-300 group-hover/tel:scale-x-100" />
                  </span>
                </a>

                <span className="hidden lg:block w-px h-6 bg-ink/10" aria-hidden />

                <BookCallButton className="group/cta relative hidden sm:inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-ink text-paper px-5 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-fire hover:shadow-[0_10px_30px_-10px_rgba(255,85,51,0.5)] whitespace-nowrap">
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative">Talk to Us</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="relative transition-transform duration-300 group-hover/cta:translate-x-0.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </BookCallButton>

                {/* Hamburger */}
                <button
                  type="button"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-expanded={mobileOpen}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15 bg-paper/80 text-ink shrink-0 transition-colors hover:bg-bone"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Shared mega panel + invisible hover bridge ── */}
            {activeMenu && (
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full z-40">
                {/* Invisible hover bridge filling the pt-3 gap */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 -top-3 h-3"
                  onMouseEnter={cancelClose}
                />
                <div className="pt-3">
                  {activeMenu === "hubspot" && renderMegaPanel(HUBSPOT_GROUPS)}
                  {activeMenu === "revops" && renderMegaPanel(REVOPS_GROUPS)}
                  {activeMenu === "partners" && renderMegaPanel(PARTNERS_GROUPS)}
                  {activeMenu === "resources" && renderMegaPanel(RESOURCES_GROUPS)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 z-30 bg-ink/30 backdrop-blur-sm animate-[dropIn_180ms_ease-out]"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <div className="lg:hidden absolute inset-x-0 top-full z-40 bg-paper max-h-[80vh] overflow-y-auto border-t border-ink/10 shadow-xl animate-[dropIn_200ms_ease-out]">
              <div className="px-6 py-6 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => setMobileSection((v) => (v === "hubspot" ? null : "hubspot"))}
                  className="flex items-center justify-between py-3.5 border-b border-ink/10 text-left"
                >
                  <span className="text-base font-medium">HubSpot</span>
                  <span className={`transition-transform duration-300 ${mobileSection === "hubspot" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSection === "hubspot" && (
                  <div className="pl-4 pb-2">
                    {HUBSPOT_GROUPS[0].links.map((link) => {
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
                                <span className={`inline-block transition-transform duration-300 ${mobileImplOpen ? "rotate-180" : ""}`}>⌄</span>
                              </button>
                            )}
                          </div>
                          {isImplementation && mobileImplOpen && (
                            <div className="pl-4">
                              {HUBSPOT_GROUPS[1].links.map((sub) => (
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

                <button
                  type="button"
                  onClick={() => setMobileSection((v) => (v === "revops" ? null : "revops"))}
                  className="flex items-center justify-between py-3.5 border-b border-ink/10 text-left"
                >
                  <span className="text-base font-medium">RevOps</span>
                  <span className={`transition-transform duration-300 ${mobileSection === "revops" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSection === "revops" && (
                  <div className="pl-4 pb-2">
                    {REVOPS_GROUPS[0].links.map((link) => (
                      <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                        <span className="block text-sm font-medium">{link.label}</span>
                        <span className="block text-xs text-ink/50">{link.note}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setMobileSection((v) => (v === "partners" ? null : "partners"))}
                  className="flex items-center justify-between py-3.5 border-b border-ink/10 text-left"
                >
                  <span className="text-base font-medium">Partners</span>
                  <span className={`transition-transform duration-300 ${mobileSection === "partners" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSection === "partners" && (
                  <div className="pl-4 pb-2">
                    {PARTNERS_GROUPS[0].links.map((link) => (
                      <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                        <span className="block text-sm font-medium">{link.label}</span>
                        <span className="block text-xs text-ink/50">{link.note}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setMobileSection((v) => (v === "resources" ? null : "resources"))}
                  className="flex items-center justify-between py-3.5 border-b border-ink/10 text-left"
                >
                  <span className="text-base font-medium">Resources</span>
                  <span className={`transition-transform duration-300 ${mobileSection === "resources" ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {mobileSection === "resources" && (
                  <div className="pl-4 pb-2">
                    <div className="text-sm font-medium py-2 text-ink/70">Work</div>
                    <div className="pl-4">
                      {RESOURCES_GROUPS[0].links.map((link) => (
                        <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                          <span className="block text-sm font-medium">{link.label}</span>
                          <span className="block text-xs text-ink/50">{link.note}</span>
                        </Link>
                      ))}
                    </div>
                    {RESOURCES_GROUPS[1].links.map((link) => (
                      <Link key={link.to} href={link.to} className="block py-2.5 border-b border-ink/5">
                        <span className="block text-sm font-medium">{link.label}</span>
                        <span className="block text-xs text-ink/50">{link.note}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {MAIN_LINKS.map((link) => (
                  <Link key={link.to} href={link.to} className="py-3.5 border-b border-ink/10 text-base font-medium">
                    {link.label}
                  </Link>
                ))}

                <a href="tel:+917503044000" className="flex items-center gap-2 py-4 text-sm text-ink/70">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 75030 44000
                </a>
                <BookCallButton className="w-full inline-flex items-center justify-center rounded-full bg-ink text-paper py-3.5 text-base font-medium mb-6">
                  Talk to Us
                </BookCallButton>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}