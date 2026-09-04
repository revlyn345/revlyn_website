import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";
import { Footer } from "@/components/Footer";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Punjab Film City · Zoho booking, CRM & tele-sales system",
  description:
    "Punjab Film City had five disconnected processes — website, booking, CRM, calling and marketing. Revlyn connected all of it into one enquiry-to-booking system on Zoho.",
  alternates: { canonical: "/work/punjab-film-city" },
  openGraph: {
    title: "Punjab Film City · Zoho Booking & Sales System | Revlyn",
    description:
      "From website booking enquiry to sales follow-up, marketing and customer management, all connected in one Zoho system.",
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const facts: [string, string][] = [
  ["Client", "Punjab Film City"],
  ["Sector", "Film & event locations"],
  ["Platform", "Zoho"],
  ["Scope", "Booking, CRM, marketing, telephony"],
];

const context = [
  "Pre-wedding shoots",
  "Music videos",
  "Films and web series",
  "Fashion shoots",
  "Ad productions",
  "Events and private hire",
];

const needs = [
  "The enquiry needs to be captured properly.",
  "Someone from sales needs to follow up.",
  "The sales team needs to know what the customer is looking for.",
  "The conversation needs to be recorded.",
  "There needs to be a way to keep communicating if they don't book.",
  "Management needs visibility across every enquiry.",
];

const crmQuestions = [
  "Who is the customer?",
  "What are they looking to book?",
  "When are they looking to book?",
  "What type of shoot are they planning?",
  "What happened during the previous conversation?",
  "Who is responsible for the enquiry?",
  "What needs to happen next?",
  "Has the customer booked?",
];

const built: { tool: string; body: string; accent: "fire" | "ink" | "volt" }[] = [
  { tool: "Zoho Creator", body: "Custom booking system built around Punjab Film City's requirements.", accent: "fire" },
  { tool: "Zoho CRM", body: "Complete CRM setup and configuration for managing inbound enquiries and sales.", accent: "ink" },
  { tool: "Zoho Campaigns", body: "Connected marketing system for continuing communication with prospects and customers.", accent: "volt" },
  { tool: "Knowlarity", body: "Telephony setup integrated with Zoho CRM for the tele-sales team.", accent: "fire" },
  { tool: "Integrations", body: "Systems connected so information moves between them without separate databases and processes.", accent: "ink" },
  { tool: "CRM Management", body: "The entire customer and sales process brought together inside Zoho CRM.", accent: "volt" },
];

const journey = [
  "A customer finds Punjab Film City",
  "They submit a booking enquiry on the website",
  "Zoho Creator captures the booking information",
  "The enquiry enters Zoho CRM",
  "The sales team gets the customer and enquiry context",
  "Knowlarity enables the sales call",
  "The sales activity is managed through CRM",
  "Zoho Campaigns continues the relationship",
  "The sales team re-engages the customer",
  "The customer books Punjab Film City",
];

/* ── shared bits, matching /work/datapel's own local helpers ─────── */

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER {num}</span>
        <span className="h-px flex-1 bg-fire/30" />
      </div>
      <h2 className="display text-3xl md:text-4xl mt-3 tracking-tight leading-tight">{title}</h2>
    </>
  );
}

function TickList({ items, columns = 2 }: { items: string[]; columns?: 2 | 3 }) {
  return (
    <div data-stagger className={`grid gap-x-8 gap-y-3 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 border-b border-ink/10 pb-3 text-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-fire" aria-hidden="true" />
          <span className="text-ink/70">{item}</span>
        </div>
      ))}
    </div>
  );
}

function FlowDiagram({ steps, accent = "fire" }: { steps: string[]; accent?: "fire" | "ink" | "volt" }) {
  const dot = accent === "ink" ? "bg-ink" : accent === "volt" ? "bg-ink" : "bg-fire";
  return (
    <ol className="flex flex-wrap items-center gap-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span className="flex items-center gap-2 border-2 border-ink bg-paper px-3 py-2 mono text-[11px] uppercase leading-none tracking-[0.1em] text-ink">
            <span className={`h-1.5 w-1.5 shrink-0 ${dot}`} />
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="mx-2 hidden items-center sm:flex">
              <span className="h-px w-5 bg-ink/20" />
              <svg width="7" height="7" viewBox="0 0 7 7" className="-ml-px">
                <path d="M0 0.5 L5.5 3.5 L0 6.5 Z" className="fill-ink/20" />
              </svg>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function FunnelDiagram({ stages }: { stages: { label: string; value: string; width: number }[] }) {
  return (
    <div className="space-y-px">
      {stages.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <div
              className="flex h-10 min-w-[9rem] items-center overflow-hidden whitespace-nowrap px-3 mono text-[11px] uppercase tracking-[0.1em] text-paper transition-[width] duration-700 ease-out"
              style={{ background: i === 0 ? "var(--color-ink)" : "var(--color-fire)", width: `${s.width}%` }}
            >
              {s.label}
            </div>
          </div>
          <span className="w-24 shrink-0 text-right mono text-[11px] tabular-nums text-ink">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

function BarChartDiagram({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div>
      <div className="relative h-32 border-b-2 border-ink">
        <div className="relative flex h-full items-end gap-3">
          {data.map((d) => (
            <div key={d.label} className="flex h-full flex-1 flex-col justify-end">
              <span className="mb-1 text-center mono text-[10px] leading-none text-ink">{d.value}%</span>
              <div
                className="w-full bg-fire transition-[height] duration-700 ease-out"
                style={{ height: `${(d.value / max) * 82}%`, minHeight: 4 }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        {data.map((d) => (
          <span key={d.label} className="flex-1 text-center mono text-[10px] uppercase tracking-[0.1em] text-ink/60">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function HubDiagram({ nodes }: { nodes: string[] }) {
  const cx = 200;
  const cy = 160;
  const rx = 140;
  const ry = 112;
  const hub = 38;

  return (
    <svg viewBox="0 0 400 320" className="w-full" role="img" aria-label="Zoho connected to surrounding systems">
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1} strokeDasharray="3 5" />
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = cx + cos * rx;
        const y = cy + sin * ry;
        const x1 = cx + cos * (hub + 4);
        const y1 = cy + sin * (hub + 4);
        const x2 = cx + cos * (rx - 10);
        const y2 = cy + sin * (ry - 10);
        const onTop = sin < -0.25;
        const onSide = Math.abs(sin) <= 0.25;
        const labelY = onTop ? y - 13 : onSide ? y + 4 : y + 19;
        const labelX = onSide ? x + (cos > 0 ? 12 : -12) : x;
        const anchor = onSide ? (cos > 0 ? "start" : "end") : "middle";

        return (
          <g key={n}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1} />
            <circle cx={x} cy={y} r={5} fill={i % 2 === 0 ? "var(--color-fire)" : "var(--color-ink)"} />
            <text x={labelX} y={labelY} textAnchor={anchor} className="fill-ink" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="0.08em">
              {n.toUpperCase()}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={hub} fill="var(--color-ink)" />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="10" letterSpacing="0.12em" fontFamily="var(--font-mono)" className="fill-paper">
        ZOHO
      </text>
    </svg>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="brutal-border p-6 bg-paper">
      <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-ink/60">{label}</p>
      {children}
    </div>
  );
}

/**
 * Figure — fixed aspect-ratio box, NOT h-full/flex-1.
 *
 * The previous version sized the image with `h-full flex-1`, which only
 * behaves correctly if the parent column has an explicit height. In the
 * "System" section the parent is an auto-height flex column (Panel +
 * Figure + Panel stacked via space-y-8), so `h-full` had nothing to fill
 * against and collapsed unpredictably — producing a large empty white
 * box with the actual photo squeezed into a tiny corner of it. A fixed
 * aspect-ratio container sidesteps that entirely: the box has a real,
 * predictable size regardless of what the parent's height resolves to.
 * This also matches what the original Lovable code did — it passed
 * explicit width/height to the <img> to reserve correct space up front.
 */
function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure className="brutal-border bg-paper overflow-hidden">
      <div className={`relative w-full ${aspect}`}>
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </div>
      <figcaption className="border-t-2 border-ink px-4 py-3 mono text-[11px] uppercase tracking-[0.14em] text-ink/60">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function PunjabFilmCityCase() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -right-24 top-24 w-[520px] h-[520px] bg-volt rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] bg-fire rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              

              

              <h1 data-reveal className="display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.92] tracking-[-0.045em]">
                How Revlyn built a complete booking and sales system for{" "}
                <span className="text-fire">Punjab Film City</span> on Zoho.
              </h1>

              <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-xl text-lg leading-snug text-ink/80">
                From a website booking enquiry to sales follow-up, marketing and customer
                management — all connected in one system, instead of five separate ones.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#system"
                  className="brutal-border bg-ink text-paper px-5 py-3 display text-sm brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all inline-flex items-center gap-2"
                >
                  SEE THE SYSTEM ↓
                </a>
                <BookCallButton className="brutal-border bg-paper text-ink px-5 py-3 display text-sm hover:bg-volt transition-colors inline-flex items-center gap-2">
                  TALK TO A ZOHO EXPERT →
                </BookCallButton>
              </div>

              <div className="mt-10">
                <Panel label="Client snapshot">
                  <div data-stagger className="grid grid-cols-2 gap-4">
                    {facts.map(([k, v]) => (
                      <div key={k} className="border-b border-ink/10 pb-3">
                        <p className="mono text-[10px] uppercase tracking-[0.14em] text-ink/50">{k}</p>
                        <p className="mt-1.5 text-sm text-ink">{v}</p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            </div>

            {/* Hero photo — real Punjab Film City backlot photo */}
            <div className="lg:col-span-6">
              <Figure
                src="/pfc-backlot.jpg"
                alt="Punjab Film City backlot at golden hour with film cranes and crew on set"
                caption="Punjab Film City — backlot, golden hour"
                aspect="aspect-[4/5] lg:aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BACKGROUND ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="01" title="The website is one of their most important sales channels." />
          </div>
          <div className="md:col-span-8 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Punjab Film City gets a large part of its business through inbound enquiries.
              Customers come to the website looking to book the location for pre-wedding shoots,
              music videos, films, fashion shoots and other productions.
            </p>
            <p>
              The problem was that the booking process, CRM, marketing and calling process needed
              to work together much more closely. Revlyn was brought in to build that system, and
              we ended up building much more than a booking form — the booking system, the CRM,
              the marketing connection and the tele-sales setup, all connected inside Zoho.
            </p>
            <div className="mt-8">
              <TickList items={context} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROBLEM ══════════════════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 02</span>
            <span className="h-px flex-1 bg-paper/15" />
          </div>
          <h2 className="display text-3xl md:text-4xl tracking-tight leading-tight">
            The activity was happening. The connection wasn&rsquo;t.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
            Punjab Film City&rsquo;s business starts with an enquiry. Someone visits the website,
            decides they&rsquo;re interested, and wants to know more about booking the location. At
            that point, several things need to happen.
          </p>
          <p className="mt-6 max-w-2xl bg-volt p-5 text-sm leading-relaxed text-ink">
            The real challenge wasn&rsquo;t getting enquiries. It was making sure every enquiry was
            captured, followed up and nurtured.
          </p>

          <div data-stagger className="mt-10 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-3">
            {needs.map((n, i) => (
              <div key={n} className="bg-ink">
                <div className="h-full p-6">
                  <p className="mono text-[10px] tabular-nums text-paper/50">{String(i + 1).padStart(2, "0")}</p>
                  <span
                    className={`my-4 block h-1 w-10 ${i % 3 === 0 ? "bg-fire" : i % 3 === 1 ? "bg-paper" : "bg-volt"}`}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-paper/90">{n}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="brutal-border border-paper/20 p-6 bg-ink/60">
              <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-paper/60">Five disconnected parts</p>
              <div data-stagger className="space-y-px">
                {["Website", "Booking process", "CRM", "Calling", "Marketing"].map((p) => (
                  <div key={p} className="flex items-center justify-between border border-paper/15 px-4 py-3 mono text-[11px] uppercase tracking-[0.12em] text-paper/90">
                    <span>{p}</span>
                    <span className="text-paper/50">separate</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="brutal-border border-paper/20 p-6 bg-ink/60">
              <p className="mono text-[11px] uppercase tracking-[0.16em] mb-5 text-paper/60">One process</p>
              <FlowDiagram steps={["Website", "Booking", "CRM", "Call", "Marketing", "Booking won"]} accent="volt" />
              <p className="mt-6 text-sm leading-relaxed text-paper/70">
                The challenge wasn&rsquo;t that these activities weren&rsquo;t happening. The
                challenge was connecting all of them so they run as one process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BOOKING ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="03" title="We started with the booking experience." />
          </div>
          <div className="md:col-span-4 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Instead of relying on a simple website enquiry form, we built the booking system in
              Zoho Creator. That let us design the booking experience around the information
              Punjab Film City actually needs from a customer.
            </p>
            <p>
              The important thing here was that the booking wasn&rsquo;t treated as an isolated
              website submission. It became the starting point of the sales process — the enquiry
              enters the CRM as a proper customer record, not something a rep has to retype.
            </p>
          </div>
          <div className="md:col-span-4">
            <Panel label="Website → Booking system → CRM">
              <FlowDiagram steps={["Website", "Zoho Creator", "Zoho CRM"]} />
              <div data-stagger className="mt-8 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-1">
                {[["Shoot type", "Pre-wedding"], ["Dates", "Requested"], ["Crew size", "Captured"]].map(([k, v]) => (
                  <div key={k} className="bg-paper p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.14em] text-ink/50">{k}</p>
                    <p className="mt-1.5 mono text-[12px] text-ink">{v}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CRM ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="04" title="Then we built the CRM around the business." />
          </div>
          <div className="md:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink/85">
              This wasn&rsquo;t a standard CRM setup. The CRM needed to reflect how Punjab Film
              City&rsquo;s sales team actually works, so every inbound enquiry carries enough
              context for a salesperson to take action.
            </p>
            <div className="mt-8">
              <TickList items={crmQuestions} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
              Instead of customer information being spread across emails, spreadsheets, phone
              calls and the website, the team works from one place.
            </p>
          </div>
          <div className="md:col-span-4">
            <Panel label="Enquiry to booking pipeline">
              <FunnelDiagram
                stages={[
                  { label: "Website enquiries", value: "100%", width: 100 },
                  { label: "Qualified", value: "62%", width: 78 },
                  { label: "In conversation", value: "41%", width: 58 },
                  { label: "Proposal / date hold", value: "24%", width: 40 },
                  { label: "Booked", value: "15%", width: 26 },
                ]}
              />
              <p className="mt-6 mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
                Illustrative pipeline structure
              </p>
            </Panel>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOLLOW-UP ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <ChapterHead num="05" title="An inbound enquiry does not automatically mean a booking." />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
            A customer may enquire today and book next week. Or next month. Or they may need
            several conversations before making a decision. So we didn&rsquo;t want the process to
            end when the salesperson made the first call. We connected Zoho CRM with Zoho
            Campaigns.
          </p>
          <p className="mt-6 max-w-3xl bg-volt p-5 text-sm leading-relaxed text-ink">
            The system keeps the conversation going even when the customer isn&rsquo;t ready to
            book immediately.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="brutal-border p-7">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Before</p>
              <span className="my-5 block h-1 w-10 bg-ink" aria-hidden="true" />
              <FlowDiagram steps={["Enquiry", "Call", "No booking", "End"]} accent="ink" />
            </div>
            <div className="brutal-border brutal-shadow-fire p-7">
              <p className="brutal-border bg-volt text-ink px-2 py-0.5 mono text-[10px] inline-block">After</p>
              <span className="my-5 block h-1 w-10 bg-fire" aria-hidden="true" />
              <FlowDiagram steps={["Enquiry", "Call", "Follow-up", "Marketing", "Re-engagement", "Sales", "Booking"]} />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/70">
            That&rsquo;s a very different way of thinking about an inbound database.
          </p>
        </div>
      </section>

      {/* ══════════════════════ TELEPHONY ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="06" title="We also connected the calling process." />
          </div>
          <div className="md:col-span-4 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Punjab Film City&rsquo;s sales team spends a lot of time speaking to customers over
              the phone, so having the phone system completely separate from the CRM wasn&rsquo;t
              ideal. We implemented Knowlarity and integrated it with Zoho CRM.
            </p>
            <p>
              The phone conversation becomes part of the customer&rsquo;s overall sales history
              rather than something that happens outside the CRM. The salesperson can see the
              customer and their enquiry, make the call, follow up and continue managing the
              opportunity from the same environment.
            </p>
            <p className="mt-6 max-w-xl border-l-2 border-fire pl-5 text-base leading-relaxed text-ink">
              You don&rsquo;t want the customer relationship to live inside one salesperson&rsquo;s
              phone. You want the business to own the relationship.
            </p>
          </div>
          <div className="md:col-span-4">
            <Figure
              src="/pfc-telesales.jpg"
              alt="Tele-sales team wearing headsets, working at CRM screens"
              caption="Knowlarity calls, handled from inside Zoho CRM"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════ SYSTEM ══════════════════════ */}
      <section id="system" className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <ChapterHead num="07" title="So what does the whole system look like?" />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="brutal-border">
              <ol>
                {journey.map((j, i) => (
                  <li key={j} className="flex items-start gap-4 border-b border-ink/10 px-5 py-4 last:border-b-0">
                    <span className="mono text-[10px] tabular-nums text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${i % 3 === 0 ? "bg-fire" : i % 3 === 1 ? "bg-ink" : "bg-volt"}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-ink/85">{j}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-8">
              <Panel label="One connected environment">
                <HubDiagram nodes={["Website", "Creator", "Campaigns", "Knowlarity", "Sales team", "Reports"]} />
              </Panel>
              <Panel label="Where enquiries come from">
                <BarChartDiagram
                  data={[
                    { label: "Pre-wedding", value: 46 },
                    { label: "Music video", value: 24 },
                    { label: "Film", value: 16 },
                    { label: "Fashion", value: 9 },
                    { label: "Other", value: 5 },
                  ]}
                />
              </Panel>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE BUILT ══════════════════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 08</span>
            <span className="h-px flex-1 bg-paper/15" />
          </div>
          <h2 className="display text-3xl md:text-4xl tracking-tight leading-tight">
            Much more than connecting a few applications.
          </h2>
          <div data-stagger className="mt-10 grid gap-px border border-paper/15 bg-paper/15 md:grid-cols-3">
            {built.map((b, i) => (
              <div key={b.tool} className={i === 0 ? "bg-fire text-paper" : "bg-ink"}>
                <div className="h-full p-7">
                  <span
                    className={`block h-1 w-10 ${i === 0 ? "bg-volt" : b.accent === "fire" ? "bg-fire" : b.accent === "volt" ? "bg-volt" : "bg-paper"}`}
                    aria-hidden="true"
                  />
                  <p className="mt-5 text-lg leading-snug display">{b.tool}</p>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "opacity-95" : "text-paper/70"}`}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ BIGGER PICTURE ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="09" title="Five separate processes stopped being separate." />
          </div>
          <div className="md:col-span-4 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              A customer starts with the website. Their booking information enters the system.
              Sales can see and act on the enquiry. Calls are connected to the CRM. Marketing can
              continue the relationship. And the business has one central place to understand what
              is happening with its customers.
            </p>
            <p>
              For an inbound business like Punjab Film City, that connection matters. Every enquiry
              represents a potential booking, and the better the business can capture, manage,
              follow up and re-engage those enquiries, the more value it gets from demand it&rsquo;s
              already generating.
            </p>
            <p className="bg-fire p-5 text-sm leading-relaxed text-paper">
              Website + Booking + CRM + Tele-Sales + Marketing. All connected through Zoho.
            </p>
          </div>
          <div className="md:col-span-4">
            <div data-stagger className="grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {[
                ["Website", "bg-fire"],
                ["Booking", "bg-ink"],
                ["CRM", "bg-volt"],
                ["Tele-sales", "bg-fire"],
                ["Marketing", "bg-ink"],
                ["Reporting", "bg-volt"],
              ].map(([k, c]) => (
                <div key={k} className="bg-paper">
                  <div className="flex items-center gap-3 p-6">
                    <span className={`h-8 w-1 ${c}`} aria-hidden="true" />
                    <span className="mono text-[12px] uppercase tracking-[0.14em] text-ink">{k}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              One connected system, from enquiry to booking.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              If your enquiries, sales team and marketing are running as separate processes, we can
              connect them the same way — on HubSpot, Zoho, or whatever your team already runs on.
            </p>
          </div>
          <BookCallButton className="inline-flex items-center gap-3 brutal-border bg-ink text-paper px-6 py-4 display text-xl brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all">
            BOOK A CALL →
          </BookCallButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FOOTER — same footer used across every page on the site.
   ══════════════════════════════════════════════════════════════════ */
