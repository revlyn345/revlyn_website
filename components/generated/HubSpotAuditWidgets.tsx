"use client";

/* ═══════════════════════════════════════════════════════════════
   HUBSPOT AUDIT PAGE - INTERACTIVE WIDGETS

   The only three pieces of /hubspot-audit that need client-side
   state: the before/after tab in the sample finding, the FAQ
   accordion item, and the mouse-tracking spotlight on the final CTA.
   Split out so the rest of HubSpotAuditClient.tsx (hero, deliverable
   list, "who this is for", testimonial, footer - all static) can be
   a Server Component instead of shipping as client JS.
   ═══════════════════════════════════════════════════════════════ */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BookAuditButton } from "@/components/BookAuditButton";

/* ─────────────────────── SAMPLE FINDING ─────────────────────── */
export function SampleFinding() {
  const [tab, setTab] = useState<"before" | "after">("before");
  return (
    <section className="relative py-24 md:py-32 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14 max-w-[820px]" data-reveal>
          <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
            Here's a real page from a real report.
          </h2>
          <p className="mt-5 text-[16px] text-ink/60 max-w-[560px]">
            Names redacted, everything else untouched. This is one finding out of eighteen from a
            Series B fintech we audited in March.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-ink bg-paper overflow-hidden shadow-[12px_12px_0_0_#ff5722]" data-reveal>
          {/* header */}
          <div className="grid md:grid-cols-[220px_1fr] border-b-2 border-ink">
            <div className="bg-fire text-paper p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Finding 04 of 18</div>
                <div className="display text-3xl leading-none mt-2">Critical</div>
              </div>
              <div className="text-[12px] opacity-90 mt-6">Pipeline · Forecast integrity</div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="display text-3xl md:text-4xl leading-tight tracking-[-0.02em]">
                Your deal stages describe what your team{" "}
                <span className="italic">does</span>, not what the buyer{" "}
                <span className="italic">commits to.</span>
              </h3>
              <p className="mt-4 text-[15px] text-ink/70 leading-relaxed max-w-[720px]">
                Five of your seven stages are activity-based ("demo booked", "proposal sent"). Only
                two are buyer-commitment-based. That means the forecast is measuring your team's
                effort, not the deal's probability. We ran your last four quarters against it: it's
                off by 31% on average, and always in the same direction.
              </p>
            </div>
          </div>

          {/* before/after */}
          <div className="p-6 md:p-8 bg-bone/40 border-b-2 border-ink">
            <div className="inline-flex rounded-full border border-ink/20 p-1 bg-paper mb-6">
              {(["before", "after"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium capitalize transition-colors ${
                    tab === k ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {k === "before" ? "What we found" : "What we recommended"}
                </button>
              ))}
            </div>

            {tab === "before" ? (
              <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[14px]">
                {[
                  "New (activity)",
                  "Demo Booked (activity)",
                  "Demo Done (activity)",
                  "Proposal Sent (activity)",
                  "Verbal Yes (commitment)",
                  "Contract Out (activity)",
                  "Closed Won (commitment)",
                ].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 border-b border-ink/10 py-2">
                    <span className="text-[11px] text-ink/40 w-5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink/80">{s}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[14px] animate-[fade-in_0.3s_ease-out]">
                {[
                  "Identified fit",
                  "Problem confirmed by buyer",
                  "Champion identified",
                  "Economic buyer engaged",
                  "Verbal yes + close plan",
                  "Contract in signature",
                  "Closed won",
                ].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 border-b border-ink/10 py-2">
                    <span className="text-[11px] text-fire w-5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink/90 font-medium">{s}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-ink/50 mb-2">Impact</div>
              <div className="display text-2xl leading-tight">
                31% forecast drift, every quarter
              </div>
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-ink/50 mb-2">Effort to fix</div>
              <div className="display text-2xl leading-tight">
                Roughly a week of ops time
              </div>
            </div>
            <div className="p-6 bg-volt/30">
              <div className="text-[11px] uppercase tracking-widest text-ink/60 mb-2">Priority</div>
              <div className="display text-2xl leading-tight">
                Do this before Q3 board meeting
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[14px] text-ink/50 max-w-[720px]">
          The full report has seventeen more like this, ranked. You get the whole thing whether or
          not you ever talk to us again.
        </p>
      </div>
    </section>
  );
}


/* ─────────────────────── FAQ ITEM ─────────────────────── */
export function FAQItem({ i, q, a }: { i: number; q: string; a: string }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-b border-ink/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full grid grid-cols-[auto_1fr_auto] gap-4 items-center py-5 text-left group"
      >
        <span className="text-[11px] text-fire w-8 font-medium">{String(i + 1).padStart(2, "0")}</span>
        <span className="display text-xl md:text-2xl leading-tight">{q}</span>
        <span
          className={`h-9 w-9 rounded-full border border-ink/20 flex items-center justify-center transition-all ${
            open ? "bg-fire border-fire text-paper rotate-45" : "text-ink/60 group-hover:border-ink"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pl-12 pr-12 text-[15px] text-ink/70 leading-relaxed max-w-[820px]">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── FINAL CTA ─────────────────────── */
export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-28 md:py-40 border-b border-ink/10 bg-ink text-paper overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(255,87,34,0.25), transparent 60%)`,
        }}
      />
      <div aria-hidden className="absolute -top-10 -left-10 w-[70%] h-24 bg-volt/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-10 -right-10 w-[70%] h-24 bg-fire/40 blur-3xl" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8" data-reveal>
            <h2 className="display text-5xl md:text-8xl leading-[0.88] tracking-[-0.045em]">
              Let us open your portal.
              <br />
              <span className="text-paper/40">Four days later, </span>
              <span className="italic">you'll know.</span>
            </h2>
            <p className="mt-8 text-lg text-paper/70 max-w-[560px]">
              Free. No card. No pitch. Just a senior operator, your HubSpot, and a report your team
              can act on before the week is out.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3" data-reveal data-reveal-delay="0.15">
            <BookAuditButton data-magnetic="16"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-fire text-paper px-6 py-5 hover:bg-volt hover:text-ink transition-colors"
            >
              <span>
                <span className="text-[11px] opacity-80 block mb-1">Do the thing</span>
                <span className="display text-2xl">Book my audit</span>
              </span>
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-paper text-ink group-hover:translate-x-1 transition-transform">
                →
              </span>
            </BookAuditButton>
            <a
              href="mailto:info@revlyn.io?subject=HubSpot%20Audit"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-paper/25 px-6 py-5 hover:border-fire hover:bg-paper/5 transition-colors"
            >
              <span>
                <span className="text-[11px] text-paper/60 block mb-1">Or, quieter</span>
                <span className="display text-xl text-paper">Email an operator</span>
              </span>
              <span className="text-paper/60 group-hover:text-fire group-hover:translate-x-1 transition-all">→</span>
            </a>
            <Link
              href="/hubspot-as-a-service"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-paper/15 px-6 py-4 hover:border-paper/50 transition-colors"
            >
              <span className="text-sm text-paper/70">Want us there every week?</span>
              <span className="text-fire text-sm group-hover:translate-x-1 transition-transform">HaaS →</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

