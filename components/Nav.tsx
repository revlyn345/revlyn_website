"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    "127 portals shipped",
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

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [whatOpen, setWhatOpen] = useState(false);
  const [hubspotOpen, setHubspotOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const whatRef = useRef<HTMLDivElement>(null);
  const hubspotRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!whatRef.current?.contains(e.target as Node)) setWhatOpen(false);
      if (!hubspotRef.current?.contains(e.target as Node)) setHubspotOpen(false);
      if (!workRef.current?.contains(e.target as Node)) setWorkOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const mainLinks = [
    { label: "Use cases", to: "/use-cases" },
    { label: "Partners", to: "/partners" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const workLinks = [
    { label: "Fintech Scale-Up", to: "/work/fintech-scale-up", note: "Series B fintech · 47 days" },
    { label: "Datapel", to: "/work/datapel", note: "Warehouse software · 19% → 68%" },
  ];

  const whatLinks = [
    ["Engine", "engine", "The system we build"],
    ["Services", "services", "CRM · RevOps · GTM · AI"],
    ["Method", "method", "How we operate"],
    ["Stack", "stack", "Tools we run on"],
    ["Proof", "proof", "Case ledger"],
  ] as const;

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
                  onClick={() => setWhatOpen((v) => !v)}
                  onMouseEnter={() => setWhatOpen(true)}
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
                    onMouseLeave={() => setWhatOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    <div className="mono text-[10px] text-ink/45 px-3 py-2 border-b border-ink/5 mb-1">
                      The system · 5 chapters
                    </div>
                    {whatLinks.map(([label, id, note]) => (
                      <a
                        key={id}
                        href={anchor(id)}
                        onClick={() => setWhatOpen(false)}
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
                  onClick={() => setHubspotOpen((v) => !v)}
                  onMouseEnter={() => setHubspotOpen(true)}
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
                    onMouseLeave={() => setHubspotOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    <div className="mono text-[10px] text-ink/45 px-3 py-2 border-b border-ink/5 mb-1 flex items-center justify-between">
                      <span>HubSpot practice</span>
                      <span className="text-fire">Solutions Partner</span>
                    </div>
                    {hubspotLinks.map((link) => {
                      const active = link.to === pathname || pathname?.startsWith(link.to);
                      return (
                        <Link
                          key={link.to}
                          href={link.to}
                          onClick={() => setHubspotOpen(false)}
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
                  onClick={() => setWorkOpen((v) => !v)}
                  onMouseEnter={() => setWorkOpen(true)}
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
                    onMouseLeave={() => setWorkOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-2xl border border-ink/10 bg-paper shadow-2xl p-2 overflow-hidden"
                  >
                    <div className="mono text-[10px] text-ink/45 px-3 py-2 border-b border-ink/5 mb-1">
                      Case studies
                    </div>
                    {workLinks.map((link) => {
                      const active = link.to === pathname || pathname?.startsWith(link.to);
                      return (
                        <Link
                          key={link.to}
                          href={link.to}
                          onClick={() => setWorkOpen(false)}
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
            <a
              href={isHome ? "#book" : "/contact"}
              className="group relative inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-4 pr-1.5 py-1.5 text-sm font-medium hover:bg-fire transition-colors"
            >
              Book a call
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-paper text-ink transition-transform group-hover:translate-x-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
