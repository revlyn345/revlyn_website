"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { submitContact } from "@/app/actions/contact";
import Link from "next/link";
import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";


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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
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
                <BookCallButton className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 border-2 border-ink hover:bg-paper hover:text-ink transition-colors mono text-xs uppercase tracking-[0.22em]">
                  Book the call <span>→</span>
                </BookCallButton>
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
                        <Field label="First name" required error={errors.firstName?.message}>
                          <input
                            id="firstName"
                            type="text"
                            {...register("firstName")}
                            placeholder="Alex"
                            className={inputCls}
                            aria-invalid={errors.firstName ? "true" : "false"}
                          />
                        </Field>
                        <Field label="Last name" required error={errors.lastName?.message}>
                          <input
                            id="lastName"
                            type="text"
                            {...register("lastName")}
                            placeholder="Morgan"
                            className={inputCls}
                            aria-invalid={errors.lastName ? "true" : "false"}
                          />
                        </Field>
                      </div>
                    </FieldRow>

                    <FieldRow n="02">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field label="Email" required error={errors.email?.message}>
                          <input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="alex@company.com"
                            className={inputCls}
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                        </Field>
                        <Field label="Phone number" required error={errors.phone?.message}>
                          <input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+1 555 000 1234"
                            className={inputCls}
                            aria-invalid={errors.phone ? "true" : "false"}
                          />
                        </Field>
                      </div>
                    </FieldRow>

                    <FieldRow n="03">
                      <Field
                        label="Message"
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
  const services = [
    ["HubSpot as a Service", "/hubspot-as-a-service", "Ongoing operator"],
    ["HubSpot Implementation", "/hubspot-implementation", "6-week build"],
    ["HubSpot Optimization", "/hubspot-optimization", "Portal reset"],
    ["RevOps", "/#services", "Pipeline, forecast, comp"],
    ["GTM Engineering", "/#services", "Outbound, ABM, lifecycle"],
    ["AI Workflows", "/#services", "Agents on the CRM"],
  ] as const;

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
          <div className="md:col-span-7">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-fire" />
              End of the page. Start of the conversation.
            </div>
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

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-paper/10">
            <div className="mono text-[10px] tracking-[0.22em] uppercase text-paper/60 mb-6 flex items-center gap-3">
              <span>Field notes</span>
              <span className="h-px flex-1 bg-paper/10" />
              <span className="text-paper/60">Monthly · 2 min</span>
            </div>
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
                  className="flex-1 bg-transparent outline-none py-2 text-paper placeholder:text-paper/40"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-14 border-b border-paper/10">
          {/* 6-column link grid */}
          {[
            {
              h: "Get started",
              l: [
                ["Book a call", "/contact"],
                ["Diagnostic", "/contact#intake"],
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
                ["Migration", "/hubspot-implementation#migration"],
                ["Audit", "/hubspot-optimization#audit"],
              ],
            },
            {
              h: "Practice",
              l: [
                ["RevOps", "/#services"],
                ["GTM Engineering", "/#services"],
                ["AI Workflows", "/#services"],
                ["Lifecycle & Nurture", "/#services"],
                ["Reporting & Forecast", "/#services"],
              ],
            },
            {
              h: "Use cases",
              l: [
                ["Overview", "/use-cases"],
                ["B2B SaaS", "/use-cases/saas"],
                ["Mid-market", "/use-cases"],
                ["Founders", "/use-cases"],
                ["Heads of GTM", "/use-cases"],
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
                ["Field notes", "#"],
                ["Careers", "/about#team"],
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
              src={revlynWordmark}
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
            <a href="#" className="hover:text-paper transition-colors">Privacy</a>
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
