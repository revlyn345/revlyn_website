import type { Metadata } from "next";
import { TableOfContents, MobileToc } from "@/components/blog/ArticleScrollUI";
import type { WPHeading } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Revlyn collects, uses, and protects information when you use our website and services.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "August 19, 2026";

// Static equivalent of the blog's post.headings — same shape (WPHeading),
// same TableOfContents/MobileToc components, just hand-written instead of
// parsed out of WordPress content, since this page has no CMS source.
const headings: WPHeading[] = [
  { id: "overview", text: "Overview" },
  { id: "information-we-collect", text: "Information we collect" },
  { id: "how-we-use-your-information", text: "How we use your information" },
  { id: "cookies-and-tracking", text: "Cookies & tracking" },
  { id: "third-party-services", text: "Third-party services" },
  { id: "data-retention", text: "Data retention" },
  { id: "your-rights", text: "Your rights" },
  { id: "data-security", text: "Data security" },
  { id: "childrens-privacy", text: "Children's privacy" },
  { id: "changes-to-this-policy", text: "Changes to this policy" },
  { id: "contact-us", text: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ══════════════════════ MASTHEAD ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-14">
          <div className="mono text-[11px] text-ink/50 mb-5">
            Legal · Last updated {LAST_UPDATED}
          </div>
          <h1 className="display leading-[0.97] tracking-[-0.04em] text-[clamp(2.4rem,6vw,4.75rem)]">
            Privacy Policy.
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg md:text-xl leading-[1.55] text-ink/70">
            This page explains what information Revlyn collects when you visit our website or use
            our services, why we collect it, and the choices you have.
          </p>
        </div>
      </section>

      {/* ══════════════════════ BODY REGION ══════════════════════ */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-start lg:gap-14">
        {/* Desktop TOC rail — identical component/behavior to the blog article page */}
        <aside className="hidden lg:block lg:w-[220px] lg:shrink-0 sticky top-24 self-start pt-14 pb-10">
          <TableOfContents headings={headings} />
        </aside>

        {/* Content */}
        <article className="lg:flex-1 lg:min-w-0 pt-10 lg:pt-14 pb-24 max-w-[720px] w-full mx-auto lg:mx-0">
          <MobileToc headings={headings} />

          <div
            className="
              text-[18px] leading-[1.75] text-[#1A1814]
              [&>p]:mb-6
              [&>h2]:font-display [&>h2]:font-extrabold [&>h2]:text-[clamp(1.5rem,2.4vw,2rem)]
              [&>h2]:leading-[1.18] [&>h2]:tracking-[-0.025em] [&>h2]:mt-14 [&>h2]:mb-2
              [&>h2]:scroll-mt-28
              [&>h2]:after:content-[''] [&>h2]:after:block [&>h2]:after:w-14 [&>h2]:after:h-0.5
              [&>h2]:after:bg-ink [&>h2]:after:mt-2 [&>h2]:after:mb-6
              [&>ul]:mb-6 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:mb-2.5
              [&_strong]:font-semibold [&_strong]:text-ink
              [&_a]:text-fire [&_a]:underline [&_a]:underline-offset-2
            "
          >
            <h2 id="overview">Overview</h2>
            <p>
              Revlyn (&ldquo;Revlyn,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides CRM,
              RevOps, GTM, and HubSpot services to businesses. This policy applies to visitors of
              our website and to individuals whose data we process while delivering our services
              to our clients.
            </p>
            <p>
              By using our website or engaging our services, you agree to the collection and use
              of information as described here. If you do not agree, please do not use the site
              or provide us with information.
            </p>

            <h2 id="information-we-collect">Information we collect</h2>
            <p>We collect a few different categories of information:</p>
            <ul>
              <li>
                <strong>Information you provide directly</strong> — your name, email address,
                phone number, company name, and any details you share through a contact form,
                a booked call, or email correspondence.
              </li>
              <li>
                <strong>Information collected automatically</strong> — IP address, browser type,
                device information, pages visited, and referring URLs, collected through cookies
                and similar technologies when you browse our site.
              </li>
              <li>
                <strong>Information from our clients</strong> — when we&rsquo;re engaged to manage
                or build a client&rsquo;s HubSpot portal or CRM, we may process data on that
                client&rsquo;s behalf (for example, their contacts&rsquo; records). In that
                context, our client is the data controller and we act as a processor under their
                instructions.
              </li>
            </ul>

            <h2 id="how-we-use-your-information">How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to inquiries, book calls, and provide requested information</li>
              <li>Deliver, maintain, and improve our services</li>
              <li>Send updates, such as our monthly &ldquo;field notes&rdquo; newsletter, if you&rsquo;ve subscribed</li>
              <li>Understand how visitors use our site so we can improve it</li>
              <li>Meet legal, security, and contractual obligations</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2 id="cookies-and-tracking">Cookies &amp; tracking</h2>
            <p>
              Our website uses cookies and similar technologies to remember preferences, measure
              site performance, and understand how visitors interact with our content. You can
              control or disable cookies through your browser settings; doing so may affect some
              site functionality.
            </p>

            <h2 id="third-party-services">Third-party services</h2>
            <p>
              We rely on a small set of third-party services to run our website and business, and
              those providers may process information on our behalf, including:
            </p>
            <ul>
              <li><strong>HubSpot</strong> — CRM, forms, live chat, and marketing automation</li>
              <li><strong>Vercel</strong> — website hosting and infrastructure</li>
              <li>Analytics providers, used to understand site traffic and usage patterns</li>
            </ul>
            <p>
              Each of these providers has its own privacy policy governing how it handles data.
              We select providers that maintain appropriate security and data-handling standards.
            </p>

            <h2 id="data-retention">Data retention</h2>
            <p>
              We retain personal information for as long as needed to provide our services,
              comply with legal obligations, resolve disputes, and enforce our agreements. When
              information is no longer needed for these purposes, we take reasonable steps to
              delete or anonymize it.
            </p>

            <h2 id="your-rights">Your rights</h2>
            <p>
              Depending on where you&rsquo;re located, you may have rights to access, correct,
              delete, or export your personal information, or to object to or restrict certain
              processing. To exercise any of these rights, contact us using the details below and
              we&rsquo;ll respond within a reasonable timeframe.
            </p>

            <h2 id="data-security">Data security</h2>
            <p>
              We use reasonable technical and organizational measures to protect the information
              we hold. No method of transmission or storage is completely secure, so while we
              work to protect your information, we can&rsquo;t guarantee its absolute security.
            </p>

            <h2 id="childrens-privacy">Children&rsquo;s privacy</h2>
            <p>
              Our website and services are directed at businesses and are not intended for
              individuals under 18. We do not knowingly collect personal information from
              children.
            </p>

            <h2 id="changes-to-this-policy">Changes to this policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices or
              for legal, operational, or regulatory reasons. The &ldquo;last updated&rdquo; date at
              the top of this page reflects the most recent revision.
            </p>

            <h2 id="contact-us">Contact us</h2>
            <p>
              If you have questions about this policy or how we handle your information, reach
              out at{" "}
              <a href="mailto:info@revlyn.io">info@revlyn.io</a> or{" "}
              <a href="tel:+917503044000">+91 75030 44000</a>.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FOOTER — same footer used across every page on the site.
   ══════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      {/* Giant wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span
          className="display leading-none tracking-tighter text-transparent select-none translate-y-[18%]"
          style={{
            fontSize: "clamp(9rem, 28vw, 28rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.09)",
          }}
        >
          revlyn
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-14">
        {/* Editorial lead */}
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-7 min-w-0">
            
            <h3 className="display text-5xl md:text-7xl leading-[0.9] tracking-[-0.035em]">
              Revenue systems,
              <br />
              <span className="text-paper/65">operated by </span>
              <span className="text-fire">seniors</span>
              <span className="text-fire">.</span>
            </h3>
            <p className="mt-6 max-w-xl text-paper/70 leading-relaxed text-lg">
              A small team of revenue operators for Founders and Heads of Sales, Marketing, Revenue and GTM. We build the portal, tune the pipeline, wire the AI, and stay on the account.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookCallButton className="group inline-flex items-center gap-2 rounded-full bg-fire text-paper pl-5 pr-1.5 py-1.5 text-sm font-medium hover:bg-paper hover:text-ink transition-colors">
                Book a diagnostic call
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </BookCallButton>
              <a
                href="mailto:info@revlyn.io"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                info@revlyn.io
              </a>
              <a
                href="tel:+917503044000"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                +91 75030 44000
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10 min-w-0">
           
            <h4 className="display text-3xl md:text-4xl leading-[0.95] tracking-[-0.02em]">
              The <span className="text-fire">operator&rsquo;s notebook</span>.
            </h4>
            <p className="mt-3 text-paper/65 text-sm">
              Short essays on revenue systems, HubSpot, RevOps and AI. Written by the same operators who run the portals.
            </p>
            <div className="mt-5">
              <div className="flex items-stretch rounded-full border border-paper/20 bg-paper/5 pl-5 pr-1 py-1 focus-within:border-fire transition-colors">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
                />
                <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-paper text-ink pl-4 pr-2 py-1.5 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                  Subscribe
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-ink text-paper group-hover:translate-x-0.5 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </button>
              </div>
              <p className="mt-3 text-[11px] text-paper/60">
                One email a month. Unsubscribe with one click.
              </p>
            </div>

            {/* Studio card */}
            <div className="mt-8 rounded-2xl border border-paper/12 bg-paper/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Studio</div>
                  <div className="text-paper leading-snug">
                    Gurugram, Haryana
                    <br />
                    <span className="text-paper/60">India · IST (UTC+5:30)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-2">Hours</div>
                  <div className="text-paper">Mon, Fri</div>
                  <div className="text-paper/60 text-sm">09:30 to 19:30 IST</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-paper/10 flex items-center justify-between text-[12px]">
                <span className="text-paper/55">Async everywhere. Slack shared channel on request.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 py-14 border-b border-paper/10">
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact"],
                ["Pricing", "/hubspot-as-a-service#pricing"],
                ["Request a proposal", "/contact"],
              ],
            },
            {
              h: "HubSpot",
              l: [
                ["HubSpot as a Service", "/hubspot-as-a-service"],
                ["Implementation", "/hubspot-implementation"],
                ["Optimization", "/hubspot-optimization"],
                ["Migration", "/hubspot-implementation"],
                ["Audit", "/hubspot-audit"],
              ],
            },
            {
              h: "Work",
              l: [
                ["Ausforming", "/work/ausforming"],
                ["Datapel", "/work/datapel"],
                ["Detrack", "/work/detrack"],
                ["Integrity Fire", "/work/integrity-fire"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["CRM Architecture", "/#svc-crm"],
                ["RevOps", "/#svc-revops"],
                ["GTM Design", "/#svc-gtm"],
                ["AI Infrastructure", "/#svc-ai"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Professional services", "/use-cases"],
                ["Marketplaces", "/use-cases"],
                ["Fintech", "/use-cases"],
              ],
            },
            {
              h: "Partners",
              l: [
                ["Overview", "/partners"],
                ["HubSpot", "/partners/hubspot"],
                ["Bitscale", "/partners/bitscale"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Case ledger", "/#proof"],
                ["Method", "/#method"],
                ["Field notes", "/blog"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-paper text-[15px] font-medium mb-5">{col.h}</div>
              <ul className="space-y-3">
                {col.l.map(([label, href]) =>
                  label === "Book a call" ? (
                    <li key={label}>
                      <BookCallButton className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors">
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </BookCallButton>
                    </li>
                  ) : (
                    <li key={label}>
                      <a
                        href={href}
                        className="group inline-flex items-center gap-1 text-[13.5px] text-paper/60 hover:text-fire transition-colors"
                      >
                        <span>{label}</span>
                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-fire">
                          →
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-end gap-3 py-12 border-b border-paper/10">
          <div className="flex items-center gap-3 md:justify-end">
            {[
              { n: "LinkedIn", h: "https://www.linkedin.com/company/revlynhq/", d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.62 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.55v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28V22H7.84V8z" },
              { n: "X", h: "#", d: "M18.244 2H21.5l-7.51 8.583L23 22h-6.797l-5.324-6.53L4.8 22H1.542l8.036-9.19L1 2h6.914l4.813 5.93L18.244 2zm-1.192 18h1.826L7.033 4H5.07l11.982 16z" },
              { n: "Substack", h: "#", d: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l10.54-5.9L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" },
              { n: "YouTube", h: "#", d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" },
            ].map((s) => (
              <a
                key={s.n}
                href={s.h}
                aria-label={s.n}
                className="grid place-items-center h-10 w-10 rounded-full border border-paper/15 text-paper/70 hover:text-fire hover:border-fire/60 hover:bg-fire/[0.06] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-12">
          <div className="flex items-center gap-4">
            <img
              src="/logos/revlyn-wordmark.png"
              alt="Revlyn"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </div>
          <p className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 max-w-md md:text-right">
            Revenue, built like an engine. Operated like a team you already trust.
          </p>
        </div>

        {/* Base line */}
        <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-paper/65">
          <span className="flex items-center gap-3">
            <span className="mono">© 2026 Revlyn</span>
            <span className="text-paper/25">·</span>
            <span>Built by operators, in Gurugram</span>
          </span>
          <span className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-paper transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <a href="#" className="hover:text-paper transition-colors">Security</a>
            <a href="#" className="hover:text-paper transition-colors">Cookies</a>
            <a href="#" className="hover:text-paper transition-colors">FAQs</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
