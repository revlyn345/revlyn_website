import type { Metadata } from "next";
import { TableOfContents, MobileToc } from "@/components/blog/ArticleScrollUI";
import type { WPHeading } from "@/lib/wordpress";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";

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
