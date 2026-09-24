import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../../assets/revlyn-logo-dark.webp";
import { HubSpotBadge } from "../HubSpotBadge";

const footerLink = "text-cream/65 transition-colors hover:text-sun";

// LinkedIn is live; the rest are placeholders until the real profiles exist.
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/revlynhq/", Icon: Linkedin },
  { label: "X (Twitter)", href: "#", Icon: Twitter },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden rounded-t-[3.5rem] bg-ink text-cream sm:rounded-t-[6rem]">
      
      <div aria-hidden="true" className="absolute -left-24 -top-24 size-72 rounded-full bg-brand/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-28 right-0 size-72 rounded-full bg-mint/15 blur-3xl" />
      <div className="relative mx-auto max-w-[92rem] px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-10">
          <div><Link to="/" aria-label="Revlyn home"><img src={logo} alt="Revlyn" loading="lazy" width={493} height={160} className="h-11 w-auto" /></Link><p className="mt-6 max-w-sm text-lg leading-relaxed text-cream/65">HubSpot expertise and revenue engineering for growing revenue teams.</p><Link to="/hubspot" className="mt-5 inline-block"><HubSpotBadge dark /></Link><a href="mailto:info@revlyn.io?subject=CRM consultation" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-sun px-5 py-3 font-bold text-ink">info@revlyn.io <ArrowUpRight size={17} /></a></div>
          <nav aria-label="Services links"><p className="font-bold text-brand">Services</p><ul className="mt-5 space-y-3"><li><Link to="/services" className={footerLink}>All CRM services</Link></li><li><Link to="/hubspot" className={footerLink}>HubSpot services</Link></li><li><Link to="/industries" className={footerLink}>CRM by industry</Link></li><li><Link to="/services" hash="strategy" className={footerLink}>Strategy and setup</Link></li><li><Link to="/services" hash="data" className={footerLink}>Customer data</Link></li><li><Link to="/services" hash="automation" className={footerLink}>Automation</Link></li><li><Link to="/services" hash="adoption" className={footerLink}>Team adoption</Link></li></ul></nav>
          <nav aria-label="Resource links"><p className="font-bold text-mint">Resources</p><ul className="mt-5 space-y-3"><li><Link to="/crm-implementation" className={footerLink}>Guides</Link></li><li><Link to="/blog" className={footerLink}>Blogs</Link></li><li><Link to="/case-studies" className={footerLink}>Case studies</Link></li><li><Link to="/compare" className={footerLink}>Platform comparisons</Link></li><li><Link to="/resources" className={footerLink}>Free resources</Link></li><li><Link to="/faq" className={footerLink}>FAQ</Link></li><li><Link to="/crm-implementation" hash="readiness" className={footerLink}>Readiness checklist</Link></li><li><Link to="/crm-implementation" hash="faq" className={footerLink}>Common questions</Link></li></ul></nav>
          <nav aria-label="Company links"><p className="font-bold text-sun">Company</p><ul className="mt-5 space-y-3"><li><Link to="/approach" className={footerLink}>Our approach</Link></li><li><Link to="/about" className={footerLink}>About Revlyn</Link></li><li><Link to="/how-we-work" className={footerLink}>How we work</Link></li><li><Link to="/partnerships" className={footerLink}>Partnerships</Link></li><li><Link to="/contact" className={footerLink}>Contact</Link></li><li><Link to="/" hash="why" className={footerLink}>Why Revlyn</Link></li></ul></nav>
          <nav aria-label="Legal links"><p className="font-bold text-grape">Legal</p><ul className="mt-5 space-y-3"><li><Link to="/privacy" className={footerLink}>Privacy</Link></li><li><Link to="/terms" className={footerLink}>Terms</Link></li></ul></nav>
        </div>
        <ul aria-label="Social links" className="mt-10 flex items-center gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} title={label} className="inline-flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/65 transition-colors hover:border-sun hover:text-sun">
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-cream/10 pt-8 text-sm text-cream/40 sm:flex-row"><p>Remote-first · © 2026 Revlyn. All rights reserved.</p><p>Made for teams that grow.</p></div>
      </div>
    </footer>
  );
}