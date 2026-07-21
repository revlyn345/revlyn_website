"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.svg";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { submitContact } from "@/app/actions/contact";
import Link from "next/link";
import Image from "next/image";


export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
      <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 pt-16 md:pt-24 pb-16 md:pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: dossier headline */}
          <div className="lg:col-span-8">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink" />
              Signal Intake · File 002 · Direct line to a senior operator
            </p>
            <h1 className="display leading-[0.9] tracking-[-0.045em] text-[clamp(3rem,9vw,7.5rem)]">
              START A<br />
              <span className="text-fire">CONVERSATION<span className="text-ink">.</span></span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
              Send a short note about your portal, your revenue motion, or the specific
              workflow that keeps breaking. A senior operator, not an SDR, reads it and
              replies within one business day.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border-2 border-ink bg-paper px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fire opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fire" />
              </span>
              <span className="mono text-xs uppercase tracking-[0.22em]">
                Inbox open · Avg. reply &lt; 14m during business hours
              </span>
            </div>
          </div>

          {/* Right: dossier plaque */}
          <div className="lg:col-span-4">
            <div className="relative brutal-border bg-volt p-5 shadow-[10px_10px_0_0_var(--color-ink)]">
              <div className="flex items-center justify-between text-[10px] mono uppercase tracking-[0.22em] mb-4">
                <span className="border border-ink bg-paper px-2 py-0.5">Dossier · 002</span>
                <span>Rev. Today</span>
              </div>
              <svg viewBox="0 0 200 200" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <pattern id="cgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M10 0H0V10" fill="none" stroke="#0a0a0a" strokeOpacity="0.12" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#cgrid)" />
                {/* Envelope */}
                <g stroke="#0a0a0a" strokeWidth="2" fill="none">
                  <rect x="30" y="60" width="140" height="90" fill="#ffffff" />
                  <path d="M30 60 L100 115 L170 60" />
                  <path d="M30 150 L80 105" />
                  <path d="M170 150 L120 105" />
                </g>
                {/* Stamp */}
                <g>
                  <rect x="130" y="40" width="40" height="30" fill="#ff5722" stroke="#0a0a0a" strokeWidth="2" />
                  <text x="150" y="59" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#0a0a0a" fontWeight="700">REVLYN</text>
                </g>
                {/* Route line */}
                <path d="M20 180 Q 60 160 100 175 T 180 165" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <circle cx="20" cy="180" r="3" fill="#0a0a0a" />
                <circle cx="180" cy="165" r="4" fill="#ff5722" stroke="#0a0a0a" strokeWidth="1.5">
                  <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="mt-4 grid grid-cols-2 gap-2 mono text-[10px] uppercase tracking-[0.18em]">
                <div className="border border-ink bg-paper px-2 py-1.5">
                  <div className="text-ink/50">FROM</div>
                  <div>You</div>
                </div>
                <div className="border border-ink bg-paper px-2 py-1.5">
                  <div className="text-ink/50">TO</div>
                  <div>Senior op.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="mt-14 border-t-2 border-ink pt-5 grid grid-cols-2 md:grid-cols-4 gap-6 mono text-[11px] uppercase tracking-[0.22em]">
          <div><div className="text-ink/50">Response SLA</div><div className="text-ink mt-1">1 business day</div></div>
          <div><div className="text-ink/50">First reply from</div><div className="text-ink mt-1">A senior operator</div></div>
          <div><div className="text-ink/50">Coverage</div><div className="text-ink mt-1">Gurugram · Remote · US/EU hours</div></div>
          <div><div className="text-ink/50">No forms after this</div><div className="text-ink mt-1">Direct Slack from day 1</div></div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FORM  ───────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: undefined,
      message: "",
      source: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const result = await submitContact(data);
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        setServerError("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    }
  };

  const inputCls =
    "w-full bg-paper border-2 border-ink px-4 py-3 outline-none focus:bg-volt/20 transition-colors placeholder:text-ink/40 mono text-sm";

  return (
    <section className="border-b-2 border-ink bg-bone relative">
      <div className="absolute inset-0 stripes opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sidebar: dossier ledger */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              {/* Ledger card */}
              <div className="brutal-border bg-ink text-paper p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 mono text-[10px] uppercase tracking-[0.22em] bg-volt text-ink px-2 py-1 border-l-2 border-b-2 border-ink">
                  Direct
                </div>
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-6">
                  Direct Channels · No gatekeepers
                </p>
                <ul className="divide-y divide-paper/15">
                  {[
                    { k: "EMAIL", v: "info@revlyn.io", href: "mailto:info@revlyn.io" },
                    { k: "PHONE", v: "+91 75030 44000", href: "tel:+917503044000" },
                    { k: "LINKEDIN", v: "linkedin.com/company/revlynhq", href: "https://www.linkedin.com/company/revlynhq/" },
                  ].map((row) => (
                    <li key={row.k} className="py-4 flex items-start justify-between gap-4">
                      <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/50 pt-1 min-w-[70px]">
                        {row.k}
                      </span>
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-paper hover:text-fire transition-colors text-right break-all"
                      >
                        {row.v}
                      </a>
                    </li>
                  ))}
                  <li className="py-4 flex items-start justify-between gap-4">
                    <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper/50 pt-1 min-w-[70px]">
                      OFFICE
                    </span>
                    <address className="not-italic text-paper/85 text-right text-sm leading-relaxed">
                      21B, 91 Springboard<br />
                      Sector 18, Udyog Vihar<br />
                      Gurugram, HR 122015
                    </address>
                  </li>
                </ul>
              </div>

              {/* What happens next */}
              <div className="brutal-border bg-paper p-6 md:p-8">
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-6">
                  Protocol · After you send
                </p>
                <ol className="space-y-5">
                  {[
                    ["01", "Read", "A senior operator reads your note within one business day. Not routed, not queued."],
                    ["02", "Probe", "Two or three targeted questions to understand where the system is actually leaking."],
                    ["03", "Map", "If it is a fit, we propose a HubSpot-as-a-Service plan or a fixed 90-day build. If not, we say so."],
                  ].map(([n, t, d]) => (
                    <li key={n} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire pt-0.5">{n}</span>
                      <div>
                        <div className="display text-lg leading-tight">{t}</div>
                        <p className="text-sm text-ink/70 mt-1 leading-relaxed">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Quick call plaque */}
              <div className="brutal-border bg-fire text-paper p-6 md:p-8 shadow-[8px_8px_0_0_var(--color-ink)]">
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-paper/80 mb-3">
                  Skip the form
                </p>
                <h3 className="display text-2xl leading-tight mb-3">
                  Book a 30-min diagnostic.
                </h3>
                <p className="text-paper/90 text-sm mb-5 leading-relaxed">
                  We will screenshare your portal, mark what is leaking, and hand you a written recap the same day.
                </p>
                <a
                  href="mailto:info@revlyn.io?subject=Book%20a%2030-min%20diagnostic%20with%20Revlyn"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 border-2 border-ink hover:bg-paper hover:text-ink transition-colors mono text-xs uppercase tracking-[0.22em]"
                >
                  Book the call <span>→</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right: form column */}
          <div className="lg:col-span-7">
            <div className="brutal-border bg-paper shadow-[12px_12px_0_0_var(--color-ink)]">
              {/* Form header strip */}
              <div className="border-b-2 border-ink bg-bone px-6 md:px-10 py-4 flex items-center justify-between">
                <p className="mono text-[11px] uppercase tracking-[0.22em]">
                  Intake Form · 05 fields
                </p>
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
                  Encrypted · Never sold
                </p>
              </div>

              <div className="p-6 md:p-10">
                {submitted ? (
                  <div className="text-center py-12 md:py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-ink bg-volt mb-6 display text-3xl shadow-[6px_6px_0_0_var(--color-ink)]">
                      ✓
                    </div>
                    <p className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-3">
                      Signal received · Routed to a senior operator
                    </p>
                    <h2 className="display text-3xl md:text-4xl mb-4 tracking-[-0.035em]">
                      We got it.
                    </h2>
                    <p className="text-ink/70 text-lg max-w-md mx-auto">
                      Expect a reply within one business day, directly from someone who has run this before.
                    </p>
                    <div className="mt-8">
                      <a
                        href="mailto:info@revlyn.io?subject=Book%20a%2030-min%20call%20with%20Revlyn"
                        className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 border-2 border-ink hover:bg-fire transition-colors mono text-xs uppercase tracking-[0.22em]"
                      >
                        Book a 30-min call <span>→</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <FieldRow n="01">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field label="Name" required error={errors.name?.message}>
                          <input
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="Alex Morgan"
                            className={inputCls}
                            aria-invalid={errors.name ? "true" : "false"}
                          />
                        </Field>
                        <Field label="Work email" required error={errors.email?.message}>
                          <input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="alex@company.com"
                            className={inputCls}
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                        </Field>
                      </div>
                    </FieldRow>

                    <FieldRow n="02">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field label="Company">
                          <input
                            id="company"
                            type="text"
                            {...register("company")}
                            placeholder="Acme Inc."
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Your role" required error={errors.role?.message}>
                          <select
                            id="role"
                            {...register("role")}
                            className={inputCls + " appearance-none pr-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 10 6%22><path d=%22M0 0l5 6 5-6z%22 fill=%22%230a0a0a%22/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:10px_6px]"}
                            aria-invalid={errors.role ? "true" : "false"}
                          >
                            <option value="">Select your role</option>
                            <option value="Founder">Founder</option>
                            <option value="Head of Sales">Head of Sales</option>
                            <option value="Head of Marketing">Head of Marketing</option>
                            <option value="Head of Revenue">Head of Revenue</option>
                            <option value="Head of GTM">Head of GTM</option>
                            <option value="Other">Other</option>
                          </select>
                        </Field>
                      </div>
                    </FieldRow>

                    <FieldRow n="03">
                      <Field
                        label="Where is the system leaking?"
                        required
                        hint="A few sentences is fine. Portal state, revenue motion, or the workflow that keeps breaking."
                        error={errors.message?.message}
                      >
                        <textarea
                          id="message"
                          {...register("message")}
                          rows={6}
                          placeholder="We rebuilt HubSpot last year but lead scoring never went live. Reps are working out of a spreadsheet, and the board deck is stitched by hand every month..."
                          className={inputCls + " resize-y leading-relaxed"}
                          aria-invalid={errors.message ? "true" : "false"}
                        />
                      </Field>
                    </FieldRow>

                    <FieldRow n="04">
                      <Field label="How did you hear about us?" hint="Optional. Helps us close the loop.">
                        <input
                          id="source"
                          type="text"
                          {...register("source")}
                          placeholder="LinkedIn, referral, search…"
                          className={inputCls}
                        />
                      </Field>
                    </FieldRow>

                    {serverError && (
                      <div className="p-4 border-2 border-fire bg-fire/10 text-fire mono text-sm">
                        {serverError}
                      </div>
                    )}

                    <div className="pt-2 border-t-2 border-ink flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60 max-w-xs">
                        By sending, you agree to a one-time reply from a Revlyn operator. No newsletters, no drips.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group brutal-border bg-ink text-paper px-8 py-4 display text-lg shadow-[6px_6px_0_0_var(--color-fire)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--color-fire)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Transmitting…" : "Send signal"}
                        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Field primitives */
function FieldRow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
      <span className="mono text-[11px] font-bold tracking-[0.22em] text-fire pt-3 border-r-2 border-ink pr-4 self-stretch">
        {n}
      </span>
      <div>{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="mono text-[11px] uppercase tracking-[0.22em]">
          {label}
          {required && <span className="text-fire ml-1">*</span>}
        </label>
        {hint && <span className="mono text-[10px] uppercase tracking-[0.18em] text-ink/50 hidden md:block">{hint}</span>}
      </div>
      {children}
      {hint && <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink/50 mt-2 md:hidden">{hint}</p>}
      {error && <p className="mt-2 mono text-xs text-fire">▲ {error}</p>}
    </div>
  );
}

/* ─────────────────────────────  FOOTER  ───────────────────────────── */
function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 md:-bottom-16 flex justify-center">
        <span
          className="display leading-none tracking-tighter text-transparent select-none"
          style={{
            fontSize: "clamp(8rem, 26vw, 24rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          revlyn
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 pt-16 pb-14">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
          <div className="md:col-span-6">
            <Link href="/" aria-label="Revlyn home">
              <img
                src={revlynWordmark}
                alt="Revlyn"
                className="h-10 md:h-12 w-auto object-contain"
                style={{ filter: "invert(1) hue-rotate(180deg)" }}
              />
            </Link>
            <p className="mt-6 max-w-md text-paper/70 text-lg leading-relaxed">
              A senior team for CRM, RevOps, GTM and AI. Built for Founders and Heads of Sales,
              Marketing, Revenue and GTM. We ship revenue systems and hand them back working.
            </p>
          </div>
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-paper/10">
            <div className="text-[11px] tracking-[0.22em] uppercase text-paper/50">
              Field notes, once a month
            </div>
            <p className="mt-3 text-paper/85">
              Short essays on revenue systems, RevOps and AI. No sales, no filler.
            </p>
            <form
              className="mt-5 flex items-center gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent border-b border-paper/30 focus:border-fire outline-none py-2 text-paper placeholder:text-paper/40"
              />
              <button className="rounded-full bg-paper text-ink px-4 py-2 text-sm font-medium hover:bg-fire hover:text-paper transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          {[
            {
              h: "Explore",
              l: [
                ["Home", "/"],
                ["The system", "/#engine"],
                ["Services", "/#services"],
                ["Method", "/#method"],
              ],
            },
            {
              h: "Company",
              l: [
                ["About", "/about"],
                ["Case studies", "/#proof"],
                ["Team", "/#team"],
                ["Principles", "/#rules"],
              ],
            },
            {
              h: "Contact",
              l: [
                ["Contact us", "/contact"],
                ["Book a call", "/#book"],
                ["Careers", "#"],
              ],
            },
            {
              h: "Follow",
              l: [
                ["LinkedIn", "https://www.linkedin.com/company/revlynhq/"],
                ["X / Twitter", "#"],
                ["Substack", "#"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-[11px] tracking-[0.22em] uppercase text-paper/45 mb-4">
                {col.h}
              </div>
              <ul className="space-y-2.5">
                {col.l.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-1 text-paper/85 hover:text-fire transition-colors"
                    >
                      <span>{label}</span>
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-paper/50 text-sm">
            © {new Date().getFullYear()} Revlyn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-paper/50">
            <a href="#" className="hover:text-fire transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-fire transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
