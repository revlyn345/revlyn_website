import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCallButton";

// TODO: source "revlyn-wordmark.png" is a Lovable-hosted logo asset — not migrated.
const revlynWordmark = "/logos/revlyn-wordmark.png";

export const metadata: Metadata = {
  title: "Case study: Ausforming · A full GTM engine built from zero, 50%+ reply-to-discovery conversion",
  description:
    "Ausforming, a Sydney SAP consultancy, came with no CRM, no marketing automation, no outbound, no website. We built the whole engine: Target Account List, 1,000+ emails a day through Smartlead, HubSpot Marketing and Sales Hub, a new WordPress site, and a gated pipeline. More than half of every reply now converts into a booked discovery call.",
  alternates: { canonical: "/work/ausforming" },
  openGraph: {
    title: "Ausforming · A full GTM engine, built from zero",
    description:
      "1,000+ emails a day. 10 to 15 replies. Every reply reaches a BDR under an SLA. Over 50% turn into booked discovery calls.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AusformingCase() {
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
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.16em] text-ink/60 mb-8">
            <Link href="/" className="hover:text-fire">REVLYN</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-fire">WORK</Link>
            <span>/</span>
            <span className="text-ink">AUSFORMING</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.2em] mb-6">
                <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
                <span className="text-fire">PUBLISHED · GREENFIELD GTM BUILD</span>
              </div>

              <h1
                data-reveal
                className="display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.92] tracking-[-0.045em]"
              >
                No CRM. No outbound. No funnel. Six months later, more than{" "}
                <span className="inline-block bg-fire text-paper px-2 py-0.5 -rotate-1">1 in 2</span>{" "}
                cold replies become{" "}
                <span className="inline-block bg-ink text-paper px-2 py-0.5 rotate-1">discovery calls</span>.
                <br />
                <span className="text-ink/60">Here is how we built it, in order.</span>
              </h1>

              <p data-reveal data-reveal-delay="0.15" className="mt-8 max-w-xl text-lg leading-snug text-ink/80">
                Ausforming is an SAP consulting firm in Sydney. When we started there was no CRM,
                no marketing tool, no outbound program, and the website needed rebuilding. We
                designed the go-to-market motion first, then put the stack around it: a tight
                target list, Smartlead for sending, a new WordPress site, HubSpot Marketing and
                Sales Hub, and a pipeline where every stage has to be earned.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#the-numbers"
                  className="brutal-border bg-ink text-paper px-5 py-3 display text-sm brutal-shadow-fire hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_var(--color-fire)] transition-all inline-flex items-center gap-2"
                >
                  READ THE NUMBERS ↓
                </a>
                <BookCallButton className="brutal-border bg-paper text-ink px-5 py-3 display text-sm hover:bg-volt transition-colors inline-flex items-center gap-2">
                  BOOK A CALL →
                </BookCallButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FunnelCard />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ NUMBERS BAND ══════════════════════ */}
      <section id="the-numbers" className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex items-baseline justify-between mb-8 border-b border-paper/15 pb-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">THE SCOREBOARD</div>
            <div className="mono text-[10px] text-paper/50">MEASURED · STEADY STATE</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { k: "Outbound volume", after: "1,000+", sub: "emails/day · Smartlead", accent: "volt" },
              { k: "Reply rate", after: "1–1.5%", sub: "senior SAP buyers", accent: "fire" },
              { k: "Replies/day", after: "10–15", sub: "landing in HubSpot", accent: "volt" },
              { k: "Reply → discovery", after: ">50%", sub: "booked, not just answered", accent: "fire" },
              { k: "Discovery calls", after: "20/mo", sub: "held with target accounts", accent: "volt" },
              { k: "Deals created", after: "15", sub: "from outbound alone", accent: "fire" },
            ].map((s) => (
              <div key={s.k} className="border-2 border-paper/15 p-4 bg-ink/60 backdrop-blur">
                <div className="mono text-[10px] tracking-[0.14em] text-paper/50">{s.k.toUpperCase()}</div>
                <div
                  className={`mt-3 display text-4xl md:text-5xl tracking-tight tabular-nums ${
                    s.accent === "volt" ? "text-volt" : "text-fire"
                  }`}
                >
                  {s.after}
                </div>
                <div className="mt-2 mono text-[10px] tracking-[0.14em] text-paper/70">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 mono text-[11px] tracking-[0.16em] text-paper/60">
            STACK · <span className="text-volt">HubSpot Marketing Hub</span> ·{" "}
            <span className="text-volt">HubSpot Sales Hub</span> ·{" "}
            <span className="text-volt">Smartlead</span> ·{" "}
            <span className="text-volt">WordPress</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHO ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <ChapterHead num="01" title="Who Ausforming is" />
          </div>
          <div className="md:col-span-5 space-y-4 text-[15px] leading-relaxed text-ink/85">
            <p>
              Ausforming (<a href="https://ausforming.com" className="text-fire hover:underline">ausforming.com</a>)
              is a Sydney SAP consulting firm working across Australia and New Zealand. They match
              SAP customers with vetted global partners for master data, governance, value
              optimisation and digital transformation.
            </p>
            <p>
              The buyers are senior and specific: the people who run or fund SAP landscapes at
              mid-size and large companies. That was useful. A narrow market is easier to reach
              well than a broad one, if you take the time to define it properly.
            </p>
          </div>
          <aside className="md:col-span-3">
            <div className="brutal-border bg-bone p-4">
              <div className="mono text-[10px] tracking-[0.16em] text-ink/60 mb-3">AT A GLANCE</div>
              <ul className="space-y-2 text-[13px]">
                {[
                  ["ANZ", "market focus"],
                  ["SAP", "landscape buyers"],
                  ["Mid–large", "enterprise accounts"],
                  ["4", "practice areas"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between border-b border-ink/10 pb-1.5 last:border-0">
                    <span className="display text-xl text-fire tabular-nums">{k}</span>
                    <span className="text-ink/70">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════════════ OPENING POSITION ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="02" title="Starting from a blank page" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Most of our projects start with fixing something. This one started with nothing to
              fix. No CRM, no automations, no sequences, no forms. That sounds easier. It is not.
              The order in which you build the pieces decides whether they end up as one system or
              four disconnected tools.
            </p>
            <div className="mt-6 mono text-[10px] tracking-[0.16em] text-ink/45">
              WHAT WAS ON DAY ONE
            </div>
          </div>

          <div className="md:col-span-8">
            <StartingInventory />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CHAPTER 03 · TARGET ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="03" title="Decide who you are talking to, first" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Before we bought or set up a single tool, we wrote down the answers to three
              questions. Getting these right is the difference between outbound that books meetings
              and outbound that burns your sending domain.
            </p>
          </div>
          <div className="md:col-span-8">
            <TargetingDoc />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CHAPTER 04 · TAL + SPLIT ══════════════════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">CHAPTER 04</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight text-paper">
              The list, then two ways of working it
            </h2>
            <p className="mt-4 text-sm text-paper/70 leading-relaxed max-w-sm">
              A short list of the right accounts beats a big scraped one on every number that
              matters: deliverability, reply quality, meetings booked, deals closed. We then split
              the list in two, because the biggest accounts deserve a different kind of attention.
            </p>
          </div>
          <div className="md:col-span-8">
            <MotionSplit />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CHAPTER 05 · STACK ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="05" title="Four tools, one job each" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Smartlead sends. WordPress captures. HubSpot Sales Hub owns the record and routes
              the work. Marketing Hub nurtures against the same database. No tool holds a version
              of the customer the others do not see.
            </p>
          </div>
          <div className="md:col-span-8">
            <StackDiagram />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CHAPTER 06 · SLA MOMENT ══════════════════════ */}
      <section className="border-b-2 border-ink bg-fire text-paper relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-volt opacity-20 blur-[80px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-paper/80">CHAPTER 06</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight text-paper">
              What happens when someone replies
            </h2>
            <p className="mt-4 text-sm text-paper/80 leading-relaxed max-w-sm">
              Most teams pour effort into lifting reply rates and almost none into what happens
              after the reply. That is backwards. A reply from a real buyer is the most valuable
              thing this whole system produces. We built for the first few minutes after it lands.
            </p>
          </div>
          <div className="md:col-span-8">
            <SlaFlow />
          </div>
        </div>
      </section>

      {/* ══════════════════════ CHAPTER 07 · GATED PIPELINE ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="07" title="A pipeline where every stage has to be earned" />
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Once a discovery call is done, the deal either moves forward with a clear reason or
              gets closed lost on the spot. There is no vague middle where deals sit for months
              pretending to be alive. That is where most forecasts fall apart.
            </p>
          </div>
          <div className="md:col-span-8">
            <GatedPipeline />
          </div>
        </div>
      </section>

      {/* ══════════════════════ PULLQUOTE ══════════════════════ */}
      <section className="border-b-2 border-ink bg-ink text-paper relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-fire opacity-25 blur-[100px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-6">ON THE RECORD</div>
          <blockquote className="display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            <span className="text-paper/40">&ldquo;</span>
            The first time a cold reply turned into a booked call the same day, it stopped feeling
            like outbound and started feeling like a system that just runs.
            <span className="text-paper/40">&rdquo;</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-fire text-paper flex items-center justify-center display text-lg">
              SN
            </div>
            <div className="text-sm">
              <div className="font-semibold">Sahil Naqvi</div>
              <div className="mono text-[11px] text-paper/70">Ausforming · named reference on file</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ VIDEO TESTIMONIAL ══════════════════════ */}
      <section className="border-b-2 border-ink bg-paper relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-[0.04] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-fire">WATCH · 2 MIN</div>
            <h2 className="display text-3xl md:text-4xl mt-2 tracking-tight leading-tight">
              Hear it from Ausforming, in their own words
            </h2>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              A short conversation on what changed, what surprised them, and what they would tell
              another founder about to start from zero.
            </p>
            <div className="mt-6 mono text-[10px] tracking-[0.16em] text-ink/45">
              RECORDED · SYDNEY
            </div>
          </div>
          <div className="md:col-span-8">
            <VideoTestimonial />
          </div>
        </div>
      </section>


      {/* ══════════════════════ WHAT AUSFORMING HAS NOW ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <ChapterHead num="08" title="What Ausforming has now" />
          </div>
          <div className="md:col-span-8 grid gap-4">
            {[
              {
                stat: "1,000+/day",
                title: "Outbound at real volume",
                body: "The target list feeds Smartlead directly. Volume goes only against accounts worth pursuing, so deliverability holds and reps do not waste time on the wrong replies.",
                color: "fire",
              },
              {
                stat: ">50%",
                title: "Every reply gets to a call",
                body: "Replies sync to HubSpot in seconds, land with a named BDR, and get worked against a clock. The most valuable moment in the funnel never sits in an unread inbox.",
                color: "volt",
              },
              {
                stat: "One record",
                title: "One story per person",
                body: "Someone who ignores Monday's email, visits the site on Wednesday and fills a form on Friday shows up as one contact with one timeline. WordPress, Smartlead and HubSpot all write to the same record.",
                color: "ink",
              },
              {
                stat: "Honest",
                title: "A forecast you can trust",
                body: "Every stage has a clear entry and exit rule. A deal cannot skip ahead to look good in a report, so the number at the top of the pipeline actually means something.",
                color: "fire",
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`brutal-border p-5 grid md:grid-cols-[220px_1fr] gap-5 items-start ${
                  c.color === "fire"
                    ? "bg-fire text-paper"
                    : c.color === "volt"
                      ? "bg-volt text-ink"
                      : "bg-ink text-paper"
                }`}
              >
                <div>
                  <div className="mono text-[10px] tracking-[0.16em] opacity-70">
                    {c.title.toUpperCase()}
                  </div>
                  <div className="display text-3xl md:text-4xl mt-1 tracking-tight tabular-nums">
                    {c.stat}
                  </div>
                </div>
                <div className="text-[14px] leading-relaxed opacity-90">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ LESSON ══════════════════════ */}
      <section className="border-b-2 border-ink bg-bone">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mono text-[11px] tracking-[0.2em] text-fire mb-3">
            IF YOU ARE STARTING GTM FROM SCRATCH
          </div>
          <h2 className="display text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-4xl">
            Buy the tools last, not first<span className="text-fire">.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/80">
            Decide who you sell to. Build the list. Agree who works what, and when. Then bring in
            the software to fit the plan you already have. And put your best effort where the money
            actually is: not in sending more emails, but in making sure a real buyer who raises
            their hand never has to wait.
          </p>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 className="display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Building your GTM engine from zero? We have done this before.
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl">
              30 minutes, no deck. We walk through your ICP, list, stack, and reply workflow, and
              tell you the three things we would build first.
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
function VideoTestimonial() {
  const VIDEO_ID = "K53Kgk0g1Xo";
  return (
    <div className="brutal-border bg-paper overflow-hidden brutal-shadow-fire">
      <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-ink bg-ink text-paper">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          <span className="mono text-[10px] tracking-[0.14em]">VIDEO · SAHIL NAQVI · AUSFORMING</span>
        </div>
        <span className="mono text-[10px] text-paper/60">YOUTUBE</span>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
          title="Ausforming video testimonial"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="grid grid-cols-3 border-t-2 border-ink mono text-[10px] tracking-[0.14em] text-ink/70">
        <div className="px-4 py-3 border-r border-ink/10">
          <div className="text-ink/45">SPEAKER</div>
          <div className="text-ink mt-1">Sahil Naqvi</div>
        </div>
        <div className="px-4 py-3 border-r border-ink/10">
          <div className="text-ink/45">TOPIC</div>
          <div className="text-ink mt-1">Building GTM from zero</div>
        </div>
        <div className="px-4 py-3">
          <div className="text-ink/45">LENGTH</div>
          <div className="text-ink mt-1">~2 minutes</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Chapter heading ─────────────────────── */
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

/* ─────────────────────── Hero funnel card ─────────────────────── */
function FunnelCard() {
  const rows = [
    { k: "Emails sent", v: "1,000+/day", w: 100, tint: "bg-ink/60" },
    { k: "Replies landed", v: "10–15/day", w: 22, tint: "bg-ink" },
    { k: "Booked discovery", v: ">50% of replies", w: 12, tint: "bg-fire" },
    { k: "Into pipeline", v: "gated stages only", w: 7, tint: "bg-volt" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden brutal-shadow-fire">
      <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-ink bg-ink text-paper">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          <span className="mono text-[10px] tracking-[0.14em]">OUTBOUND FUNNEL · AUSFORMING</span>
        </div>
        <span className="mono text-[10px] text-paper/60">STEADY STATE</span>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="mono text-[10px] text-ink/50 tracking-[0.14em]">REPLY → DISCOVERY</div>
            <div className="display text-4xl md:text-5xl tabular-nums leading-none">
              &gt;50<span className="text-fire text-2xl">%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="mono text-[10px] text-ink/50 tracking-[0.14em]">SLA ON REPLY</div>
            <div className="display text-2xl text-fire">real time</div>
          </div>
        </div>

        <ul className="space-y-3">
          {rows.map((r) => (
            <li key={r.k}>
              <div className="flex items-baseline justify-between mono text-[10px] tracking-[0.14em] text-ink/60">
                <span>{r.k.toUpperCase()}</span>
                <span className="text-ink">{r.v}</span>
              </div>
              <div className="mt-1.5 h-3 border border-ink bg-paper overflow-hidden">
                <div className={`h-full ${r.tint}`} style={{ width: `${r.w}%` }} />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-ink/10 grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="mono text-[9px] tracking-[0.16em] text-ink/50">CALLS/MO</div>
            <div className="display text-xl mt-1 tabular-nums text-fire">20</div>
          </div>
          <div className="border-l border-ink/10">
            <div className="mono text-[9px] tracking-[0.16em] text-ink/50">DEALS</div>
            <div className="display text-xl mt-1 tabular-nums">15</div>
          </div>
          <div className="border-l border-ink/10">
            <div className="mono text-[9px] tracking-[0.16em] text-ink/50">STACK</div>
            <div className="display text-xl mt-1 tabular-nums">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Starting inventory ─────────────────────── */
function StartingInventory() {
  const items = [
    { k: "Sales system", v: "None. No CRM in use, no source of record.", chip: "0", tint: "bg-fire text-paper" },
    { k: "Marketing automation", v: "None. Newsletters, nurture, lifecycle: on the roadmap, nowhere built.", chip: "0", tint: "bg-ink text-paper" },
    { k: "Outbound motion", v: "None. No sending infrastructure, no target list, no sequences.", chip: "0", tint: "bg-fire text-paper" },
    { k: "Website", v: "Existed, but needed rebuilding. Not wired into anything.", chip: "rebuild", tint: "bg-ink text-paper" },
    { k: "Buyer definition", v: "Clear internally, never written down as an operating target.", chip: "informal", tint: "bg-volt text-ink" },
    { k: "Reply workflow", v: "No inbox, no owner, no SLA. Nothing to route into.", chip: "n/a", tint: "bg-fire text-paper" },
  ];
  return (
    <div className="brutal-border bg-paper p-5 md:p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/50 mb-5 pb-3 border-b border-ink/15">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-fire" />
          FIG.01 · STARTING INVENTORY
        </span>
        <span>AUSFORMING / DAY 0</span>
      </div>
      <ul className="grid md:grid-cols-2 gap-4">
        {items.map((s) => (
          <li key={s.k} className="border-2 border-ink p-4 relative bg-paper">
            <div className={`absolute -top-3 -right-3 mono text-[9px] px-2 py-1 tracking-wider ${s.tint} border-2 border-ink`}>
              {s.chip}
            </div>
            <div className="display text-lg leading-tight">{s.k}</div>
            <div className="mt-2 text-[13px] text-ink/75 leading-relaxed">{s.v}</div>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t-2 border-ink pt-4 flex items-start gap-3 bg-volt/30 -mx-5 -mb-5 md:-mx-6 md:-mb-6 px-5 md:px-6 pb-5 md:pb-6">
        <span className="display text-3xl text-fire leading-none">?</span>
        <div className="text-[14px] text-ink/85 leading-relaxed">
          A greenfield build has no cleanup and no legacy, but nothing to lean on either. The order
          you build things in decides whether the pieces connect into one system, or end up as four
          tools that each hold a different version of the truth.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Targeting doc ─────────────────────── */
function TargetingDoc() {
  const defs = [
    { q: "Geography", a: "Australia and New Zealand only. Sending windows, language, and BDR reachability all follow from this." },
    { q: "Company profile", a: "Size, industry, and the tell that they run an SAP landscape worth Ausforming's attention." },
    { q: "Buying titles", a: "The specific roles worth contacting, from the people who run SAP day to day up to the ones who sign off on the budget to change it." },
    { q: "Message split", a: "A message written for the SAP operator reads completely differently from one written for the executive who funds it. Never send the wrong one to either." },
  ];
  return (
    <div className="brutal-border bg-paper text-ink overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-volt">
        <div className="mono text-[10px] tracking-[0.16em] text-ink">
          TARGETING · v1.0 · AUSFORMING × REVLYN
        </div>
        <div className="mono text-[10px] text-ink/70">AGREED · BEFORE ANY TOOL</div>
      </div>

      <ol className="divide-y-2 divide-ink/10">
        {defs.map((d, i) => (
          <li key={d.q} className="px-5 py-4 grid grid-cols-[50px_1fr] gap-4 hover:bg-bone transition-colors">
            <div className="display text-3xl text-fire tabular-nums leading-none pt-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="font-semibold text-[15px]">{d.q}</div>
              <div className="mt-1 text-[13px] text-ink/70 leading-relaxed">{d.a}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="px-5 py-3 border-t-2 border-ink bg-ink text-paper flex items-center justify-between mono text-[10px]">
        <span className="text-paper/70">Right target, right message, right person</span>
        <span className="text-fire">→ Target Account List</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Motion split ─────────────────────── */
function MotionSplit() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="brutal-border bg-paper text-ink p-5">
        <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/60 pb-3 border-b border-ink/15">
          <span className="text-fire">MASS OUTREACH</span>
          <span>Broader good-fit accounts</span>
        </div>
        <div className="mt-4">
          <div className="display text-4xl tabular-nums text-fire">1,000+</div>
          <div className="mono text-[10px] tracking-[0.14em] text-ink/60">emails/day · Smartlead</div>
        </div>
        <ul className="mt-4 space-y-2 text-[13px] text-ink/80 leading-relaxed">
          <li>· High volume, sequenced, run through Smartlead.</li>
          <li>· Reach a large number of the right people, every day.</li>
          <li>· Inbox rotation protects deliverability at volume.</li>
          <li>· Every send tied back to a Target Account List row.</li>
        </ul>
      </div>
      <div className="brutal-border bg-ink text-paper p-5">
        <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-paper/60 pb-3 border-b border-paper/20">
          <span className="text-volt">1:1 OUTREACH</span>
          <span>Highest-value accounts</span>
        </div>
        <div className="mt-4">
          <div className="display text-4xl tabular-nums text-volt">Human</div>
          <div className="mono text-[10px] tracking-[0.14em] text-paper/60">researched · personal · no template</div>
        </div>
        <ul className="mt-4 space-y-2 text-[13px] text-paper/85 leading-relaxed">
          <li>· Reserved for the accounts Ausforming most wants to win.</li>
          <li>· A generic sequence does more damage than no contact.</li>
          <li>· You only get one first touch. A templated one shows.</li>
          <li>· Kept off the mass rails from day one.</li>
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────── Stack diagram ─────────────────────── */
function StackDiagram() {
  const parts = [
    { k: "Smartlead", role: "Send", note: "Volume, inbox rotation, deliverability at 1,000+/day. Top of the funnel.", tint: "bg-fire text-paper" },
    { k: "WordPress", role: "Capture", note: "Rebuilt from scratch. HubSpot plugin wires forms and page visits into contact records.", tint: "bg-ink text-paper" },
    { k: "HubSpot Sales Hub", role: "Route + own", note: "Reply assignment, tasks and SLAs, the gated pipeline. Where the business runs.", tint: "bg-volt text-ink" },
    { k: "HubSpot Marketing Hub", role: "Nurture", note: "Email marketing and newsletters against the same database the sales team works from.", tint: "bg-ink text-paper" },
  ];
  return (
    <div className="brutal-border bg-paper p-5 md:p-6">
      <div className="flex items-center justify-between mono text-[10px] tracking-[0.14em] text-ink/50 mb-5 pb-3 border-b border-ink/15">
        <span>FIG.03 · STACK MAP</span>
        <span>ONE SOURCE OF TRUTH · HUBSPOT OWNS THE RECORD</span>
      </div>
      <ol className="grid md:grid-cols-4 gap-3">
        {parts.map((p, i) => (
          <li key={p.k} className="relative">
            <div className={`brutal-border p-4 h-full ${p.tint}`}>
              <div className="mono text-[10px] tracking-[0.16em] opacity-70">STEP {String(i + 1).padStart(2, "0")}</div>
              <div className="display text-lg mt-1 leading-tight">{p.k}</div>
              <div className="mono text-[10px] tracking-[0.14em] mt-1 opacity-80">{p.role}</div>
              <div className="mt-3 text-[12.5px] leading-relaxed opacity-90">{p.note}</div>
            </div>
            {i < parts.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-2 z-10 display text-2xl text-fire">→</div>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-5 text-[13px] text-ink/75 leading-relaxed border-l-4 border-fire pl-4 py-1">
        A prospect who receives a cold email on Monday, ignores it, visits the site on Wednesday,
        and fills out a form on Friday shows up in HubSpot as one contact with one connected story.
        The BDR picking that contact up sees the whole picture and can act on it.
      </div>
    </div>
  );
}

/* ─────────────────────── SLA flow ─────────────────────── */
function SlaFlow() {
  const steps = [
    ["T+0s", "Reply lands in Smartlead", "Buyer hits send. Interest is at its peak."],
    ["T+seconds", "Sync to HubSpot", "Real-time push. Contact and reply attach to the same record."],
    ["T+seconds", "Auto-assign to a BDR", "Named owner. Not a shared inbox. Not a queue nobody checks."],
    ["T+SLA", "BDR works the reply", "One job in that window: convert the live reply into a booked discovery call."],
    ["Outcome", "Booked or closed lost", "No middle pile. The reply is either a call on the calendar or it is filed."],
  ];
  return (
    <div className="brutal-border bg-paper text-ink overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-ink text-paper">
        <div className="flex items-center gap-2 mono text-[10px] tracking-[0.16em]">
          <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
          REPLY WORKFLOW · REAL TIME
        </div>
        <div className="mono text-[10px] text-paper/50">CORE OF THE ENGAGEMENT</div>
      </div>
      <ol className="divide-y divide-ink/10">
        {steps.map(([t, k, note], i) => (
          <li
            key={k}
            className="px-5 py-4 grid grid-cols-[90px_180px_1fr] gap-4 items-start hover:bg-bone/60 transition-colors"
          >
            <div className="display text-lg text-fire tabular-nums">{t}</div>
            <div className="font-semibold text-[14px]">{k}</div>
            <div className="text-[13px] text-ink/75 leading-relaxed">{note}</div>
            {i === steps.length - 1 && null}
          </li>
        ))}
      </ol>
      <div className="px-5 py-3 border-t-2 border-ink bg-volt flex items-center justify-between mono text-[10px]">
        <span className="text-ink">Nothing leaks between reply and booking</span>
        <span className="text-ink font-bold">&gt;50% of replies become discovery calls</span>
      </div>
    </div>
  );
}

/* ─────────────────────── Gated pipeline ─────────────────────── */
function GatedPipeline() {
  const stages = [
    { s: "Discovery held", entry: "Call took place. Notes captured.", exit: "Real problem identified with buying context." },
    { s: "Qualified opportunity", entry: "Named champion, timeline, budget signal.", exit: "Fit and value confirmed on both sides." },
    { s: "Proposal", entry: "Scope and commercials agreed in principle.", exit: "Written proposal shared with the buying group." },
    { s: "Verbal", entry: "Buyer has said yes. Legal or procurement remains.", exit: "Contract issued." },
    { s: "Closed won", entry: "Signed. Kick-off scheduled.", exit: "—" },
  ];
  return (
    <div className="brutal-border bg-paper overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-ink text-paper mono text-[10px] tracking-[0.16em]">
        <span>PIPELINE · GATED STAGES</span>
        <span className="text-fire">EVERY STAGE HAS ENTRY + EXIT CRITERIA</span>
      </div>
      <ol>
        {stages.map((st, i) => (
          <li
            key={st.s}
            className="px-5 py-4 border-b border-ink/10 last:border-0 grid grid-cols-[40px_180px_1fr_1fr] gap-4 items-start hover:bg-bone/50 transition-colors"
          >
            <div className="display text-2xl text-fire tabular-nums leading-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="display text-lg leading-tight">{st.s}</div>
            <div>
              <div className="mono text-[9px] tracking-[0.16em] text-ink/50 mb-1">ENTRY</div>
              <div className="text-[13px] text-ink/80 leading-relaxed">{st.entry}</div>
            </div>
            <div>
              <div className="mono text-[9px] tracking-[0.16em] text-ink/50 mb-1">EXIT</div>
              <div className="text-[13px] text-ink/80 leading-relaxed">{st.exit}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="px-5 py-4 border-t-2 border-ink bg-volt/40 grid md:grid-cols-3 gap-3 text-[13px] text-ink/85 leading-relaxed">
        <div><span className="display text-lg text-fire">Real</span> forecasts. Stage placement means something concrete.</div>
        <div><span className="display text-lg text-fire">Visible</span> blockages. Stuck deals surface early, not in the last week of the quarter.</div>
        <div><span className="display text-lg text-fire">Proactive</span> selling. Support arrives where it is needed, while there is still time to act.</div>
      </div>
    </div>
  );
}

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
