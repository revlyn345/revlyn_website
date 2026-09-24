import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  FileCheck2,
  Building2,
  ChevronDown,
  Compass,
  GitCompare,
  HeartHandshake,
  Handshake,
  HelpCircle,
  Menu,
  Newspaper,
  PackageOpen,
  RouteIcon,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import logo from "../../assets/revlyn-logo.webp";

type MenuName = "services" | "industries" | "resources" | "company";

const menuButton = "flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:bg-background hover:text-ink";
const panelLink = "group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

function MenuItem({ to, hash, icon: Icon, tone, title, copy, close }: { to: "/services" | "/revops" | "/industries" | "/industries/b2b-saas" | "/industries/consulting" | "/industries/d2c-ecommerce" | "/industries/field-services" | "/about" | "/contact" | "/how-we-work" | "/hubspot" | "/hubspot/managed" | "/crm-implementation" | "/partnerships" | "/approach" | "/blog" | "/case-studies" | "/compare" | "/resources" | "/faq"; hash?: string; icon: typeof Zap; tone: string; title: string; copy: string; close: () => void }) {
  return (
    <Link to={to} {...(hash ? { hash } : {})} onClick={close} className={panelLink} activeProps={{ className: "bg-cream" }}>
      <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tone}`}><Icon size={19} aria-hidden="true" /></span>
      <span><strong className="block text-sm text-ink">{title}</strong><span className="mt-1 block text-xs leading-relaxed text-ink/55">{copy}</span></span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);
  const close = () => setOpenMenu(null);
  const toggle = (menu: MenuName) => setOpenMenu((current) => current === menu ? null : menu);

  return (
    <header className="relative z-50 mx-auto max-w-[92rem] px-4 py-4 sm:px-6 sm:py-5">
      <div className="relative flex items-center justify-between rounded-[1.5rem] border border-background/70 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-5 lg:px-6">
        <Link to="/" aria-label="Revlyn home" className="block shrink-0">
          <img src={logo} alt="Revlyn" width={483} height={160} className="h-10 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-2xl border border-ink/5 bg-cream/70 p-1.5 lg:flex" aria-label="Main navigation">
          <div className="relative">
            <button type="button" onClick={() => toggle("services")} aria-expanded={openMenu === "services"} className={`${menuButton} ${pathname === "/services" ? "bg-background text-brand shadow-sm" : ""}`}>
              Services <ChevronDown size={15} className={openMenu === "services" ? "rotate-180" : ""} />
            </button>
          </div>
          <div className="relative">
            <button type="button" onClick={() => toggle("industries")} aria-expanded={openMenu === "industries"} className={`${menuButton} ${pathname.startsWith("/industries") ? "bg-background text-mint shadow-sm" : ""}`}>
              Industries <ChevronDown size={15} className={openMenu === "industries" ? "rotate-180" : ""} />
            </button>
          </div>
          <div className="relative">
            <button type="button" onClick={() => toggle("resources")} aria-expanded={openMenu === "resources"} className={`${menuButton} ${pathname === "/crm-implementation" || pathname === "/blog" || pathname === "/case-studies" || pathname === "/compare" || pathname === "/resources" || pathname === "/faq" ? "bg-background text-mint shadow-sm" : ""}`}>
              Resources <ChevronDown size={15} className={openMenu === "resources" ? "rotate-180" : ""} />
            </button>
          </div>
          <div className="relative">
            <button type="button" onClick={() => toggle("company")} aria-expanded={openMenu === "company"} className={`${menuButton} ${pathname === "/approach" || pathname === "/about" || pathname === "/how-we-work" || pathname.startsWith("/partnerships") ? "bg-background text-brand shadow-sm" : ""}`}>
              Company <ChevronDown size={15} className={openMenu === "company" ? "rotate-180" : ""} />
            </button>
          </div>
          <Link to="/contact" className={menuButton} activeProps={{ className: "bg-background text-brand shadow-sm" }}>Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-cream shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm sm:inline-flex">
            Book a call <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <Button type="button" variant="outline" size="icon" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)} className="size-11 rounded-xl border-2 border-ink/10 bg-cream text-ink hover:bg-sun/40 lg:hidden">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {openMenu ? (
          <div className="absolute left-1/2 top-[calc(100%+0.75rem)] hidden w-[42rem] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-ink/10 bg-background/95 p-5 shadow-2xl backdrop-blur-xl lg:block">
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-5">
              <div className={`rounded-[1.5rem] p-6 ${openMenu === "services" ? "bg-brand text-cream" : openMenu === "resources" || openMenu === "industries" ? "bg-mint text-ink" : "bg-grape text-cream"}`}>
                <Sparkles size={25} aria-hidden="true" />
                <p className="mt-5 font-display text-2xl font-bold">{openMenu === "services" ? "Make CRM useful." : openMenu === "industries" ? "Built for how you sell." : openMenu === "resources" ? "Learn what works." : "Meet Revlyn."}</p>
                <p className={`mt-3 text-sm leading-relaxed ${openMenu === "resources" || openMenu === "industries" ? "text-ink/65" : "text-cream/70"}`}>{openMenu === "services" ? "Practical help from strategy and data to automation and adoption." : openMenu === "industries" ? "CRM systems shaped around the sales motion, channels, and handoffs in your industry." : openMenu === "resources" ? "Guides and honest stories for teams building better revenue systems." : "Why we combine HubSpot expertise and revenue engineering for growing teams."}</p>
              </div>
              <div className="grid gap-1">
                {openMenu === "services" ? <>
                  <MenuItem to="/hubspot/managed" icon={HeartHandshake} tone="bg-brand/15 text-brand" title="HubSpot as a Service" copy="Your extended team: ongoing HubSpot and revenue engineering on a retainer." close={close} />
                  <MenuItem to="/services" icon={RouteIcon} tone="bg-brand/15 text-brand" title="CRM services" copy="Explore strategy, setup, data, automation, integrations, and adoption." close={close} />
                  <MenuItem to="/revops" icon={Workflow} tone="bg-grape/15 text-grape" title="Revenue operations" copy="One connected operation across marketing, sales, and service." close={close} />
                  <MenuItem to="/hubspot" icon={Award} tone="bg-sun" title="HubSpot services" copy="Gold Partner help with onboarding, migration, and automation." close={close} />
                </> : null}
                {openMenu === "industries" ? <>
                  <MenuItem to="/industries" icon={Building2} tone="bg-mint" title="All industries" copy="See how Revlyn adapts CRM to different sales motions." close={close} />
                  <MenuItem to="/industries/b2b-saas" icon={Sparkles} tone="bg-sun" title="B2B SaaS" copy="From demos and trials through renewals and expansion." close={close} />
                  <MenuItem to="/industries/consulting" icon={Users} tone="bg-mint" title="Consulting" copy="Relationship-led pursuits, proposals, and repeat work." close={close} />
                  <MenuItem to="/industries/d2c-ecommerce" icon={Zap} tone="bg-brand text-cream" title="D2C and e-commerce" copy="Enquiries, orders, and repeat buyers across channels." close={close} />
                  <MenuItem to="/industries/field-services" icon={RouteIcon} tone="bg-grape text-cream" title="Field services" copy="Site visits, service calls, and contract follow-ups." close={close} />
                </> : null}
                {openMenu === "company" ? <>
                  <MenuItem to="/approach" icon={Compass} tone="bg-sun" title="Our approach" copy="Understand, simplify, connect, and improve." close={close} />
                  <MenuItem to="/about" icon={Users} tone="bg-grape text-cream" title="About Revlyn" copy="Our mission, point of view, and approach to connected revenue teams." close={close} />
                  <MenuItem to="/how-we-work" icon={ShieldCheck} tone="bg-mint" title="How we work" copy="First call, scoping, pricing, and what we will never promise." close={close} />
                  <MenuItem to="/partnerships" icon={Handshake} tone="bg-sun" title="Partnerships" copy="Technology partners that support connected CRM and revenue systems." close={close} />
                </> : null}
                {openMenu === "resources" ? <>
                  <MenuItem to="/crm-implementation" icon={BookOpen} tone="bg-mint" title="Guides" copy="Detailed, visual guidance for better CRM decisions." close={close} />
                  <MenuItem to="/blog" icon={Newspaper} tone="bg-sun" title="Blogs" copy="Practical thinking on CRM and revenue systems." close={close} />
                  <MenuItem to="/case-studies" icon={FileCheck2} tone="bg-brand text-cream" title="Case studies" copy="Evidence-led stories shared with client approval." close={close} />
                  <MenuItem to="/compare" icon={GitCompare} tone="bg-grape text-cream" title="Platform comparisons" copy="HubSpot vs Salesforce and Pipedrive, compared plainly." close={close} />
                  <MenuItem to="/resources" icon={PackageOpen} tone="bg-sun" title="Free resources" copy="Printable checklists for readiness, migration, and adoption." close={close} />
                  <MenuItem to="/faq" icon={HelpCircle} tone="bg-mint" title="FAQ" copy="Straight answers about working with us and HubSpot." close={close} />
                </> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {mobileOpen ? (
        <nav className="absolute left-4 right-4 top-[calc(100%-0.25rem)] max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[2rem] border border-ink/10 bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-4 sm:grid-cols-2">
             <div className="grid content-start gap-4">
               <div className="rounded-2xl bg-brand/10 p-3"><p className="px-2 pb-2 font-bold text-brand">Services</p><MenuItem to="/hubspot/managed" icon={HeartHandshake} tone="bg-brand text-cream" title="HubSpot as a Service" copy="Your extended team on a retainer" close={() => setMobileOpen(false)} /><MenuItem to="/services" icon={RouteIcon} tone="bg-brand text-cream" title="CRM services" copy="Strategy, systems, and adoption" close={() => setMobileOpen(false)} /><MenuItem to="/revops" icon={Workflow} tone="bg-grape text-cream" title="Revenue operations" copy="One operation, three teams" close={() => setMobileOpen(false)} /><MenuItem to="/hubspot" icon={Award} tone="bg-sun" title="HubSpot services" copy="Gold Partner onboarding and more" close={() => setMobileOpen(false)} /></div>
               <div className="rounded-2xl bg-mint/20 p-3"><p className="px-2 pb-2 font-bold text-ink">Industries</p><MenuItem to="/industries" icon={Building2} tone="bg-mint" title="All industries" copy="How we adapt CRM" close={() => setMobileOpen(false)} /><MenuItem to="/industries/b2b-saas" icon={Sparkles} tone="bg-sun" title="B2B SaaS" copy="Trials, renewals, and expansion" close={() => setMobileOpen(false)} /><MenuItem to="/industries/consulting" icon={Users} tone="bg-mint" title="Consulting" copy="Pursuits and repeat work" close={() => setMobileOpen(false)} /><MenuItem to="/industries/d2c-ecommerce" icon={Zap} tone="bg-brand text-cream" title="D2C and e-commerce" copy="Orders and repeat buyers" close={() => setMobileOpen(false)} /><MenuItem to="/industries/field-services" icon={RouteIcon} tone="bg-grape text-cream" title="Field services" copy="Visits, calls, and follow-ups" close={() => setMobileOpen(false)} /></div>
             </div>
            <div className="grid content-start gap-4">
              <div className="rounded-2xl bg-mint/20 p-3"><p className="px-2 pb-2 font-bold text-ink">Resources</p><MenuItem to="/crm-implementation" icon={BookOpen} tone="bg-mint" title="Guides" copy="Detailed visual guidance" close={() => setMobileOpen(false)} /><MenuItem to="/blog" icon={Newspaper} tone="bg-sun" title="Blogs" copy="Practical CRM thinking" close={() => setMobileOpen(false)} /><MenuItem to="/case-studies" icon={FileCheck2} tone="bg-brand text-cream" title="Case studies" copy="Evidence-led client stories" close={() => setMobileOpen(false)} /><MenuItem to="/compare" icon={GitCompare} tone="bg-grape text-cream" title="Platform comparisons" copy="HubSpot vs the rest, plainly" close={() => setMobileOpen(false)} /><MenuItem to="/resources" icon={PackageOpen} tone="bg-sun" title="Free resources" copy="Printable CRM checklists" close={() => setMobileOpen(false)} /><MenuItem to="/faq" icon={HelpCircle} tone="bg-mint" title="FAQ" copy="Straight answers" close={() => setMobileOpen(false)} /></div>
              <div className="rounded-2xl bg-grape/10 p-3"><p className="px-2 pb-2 font-bold text-grape">Company</p><MenuItem to="/approach" icon={Compass} tone="bg-sun" title="Our approach" copy="How we build useful systems" close={() => setMobileOpen(false)} /><MenuItem to="/about" icon={Users} tone="bg-grape text-cream" title="About Revlyn" copy="Mission and principles" close={() => setMobileOpen(false)} /><MenuItem to="/how-we-work" icon={ShieldCheck} tone="bg-mint" title="How we work" copy="Scoping, pricing, and promises" close={() => setMobileOpen(false)} /><MenuItem to="/partnerships" icon={Handshake} tone="bg-sun" title="Partnerships" copy="Our technology partners" close={() => setMobileOpen(false)} /></div>
              <div className="grid gap-2">
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="rounded-xl bg-sun/40 px-4 py-3 text-center text-sm font-bold text-ink">Contact</Link>
              </div>
            </div>
          </div>
          <a href="https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-4 font-bold text-cream">Book a call <ArrowUpRight size={18} /></a>
        </nav>
      ) : null}
    </header>
  );
}
