import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbSchema, howToSchema } from "../lib/seo";
import { BookCallButton } from "@/components/BookCallButton";
import { ArrowDown, ArrowUpRight, Check, CircleCheck, CircleX, RefreshCcw, Settings2, Workflow } from "lucide-react";

const URL = "https://revlyn.io/renewals-automation-guide";

export const Route = createFileRoute("/renewals-automation-guide")({
  head: () => ({
    meta: [
      {
        "script:ld+json": howToSchema({
          name: "How to automate renewals in HubSpot",
          description: "Step by step setup so every closed won deal gets a renewal decision and a timely renewal deal in HubSpot.",
          path: "/renewals-automation-guide",
          steps: steps.map((s) => ({ name: s.title, text: [s.copy, ...(s.list ?? [])].join(" ") })),
        }),
      },
      { "script:ld+json": breadcrumbSchema([{ name: "Free resources", path: "/resources" }, { name: "Automate renewals in HubSpot", path: "/renewals-automation-guide" }]) },
      { title: "How to Automate Renewals in HubSpot: Step by Step Guide | Revlyn" },
      { name: "description", content: "A detailed, step by step guide to setting up renewals automation in HubSpot: the closed won renewal prompt, conditional fields, auto created renewal deals, and a nurture path for no renewal deals." },
      { property: "og:title", content: "How to Automate Renewals in HubSpot | Revlyn" },
      { property: "og:description", content: "Make sure every closed won deal gets a renewal decision, and every renewal gets a deal before a competitor calls." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: RenewalsGuide,
});

const steps = [
  {
    n: "01",
    tone: "bg-brand text-cream",
    title: "Create the renewal properties",
    copy: "Before any automation, the CRM needs somewhere to store the renewal decision. Create these deal properties in HubSpot settings.",
    list: [
      "Scope of renewal? (dropdown: Yes, No)",
      "Tentative renewal date (date picker)",
      "Why no renewal deal needed (dropdown of common reasons, for example one time purchase, account closed, moved to competitor, other)",
      "No renewal details (multi line text, where the rep explains the reason in their own words)",
    ],
  },
  {
    n: "02",
    tone: "bg-mint",
    title: "Make the pipeline ask the question at closed won",
    copy: "In your pipeline settings, add conditional stage properties to the Closed won stage. When a rep moves a deal to Closed won, a popup appears and the deal cannot be saved until it is answered.",
    list: [
      "Required on Closed won: Scope of renewal?",
      "If Yes: Tentative renewal date becomes visible and required",
      "If No: Why no renewal deal needed and No renewal details become visible and required",
    ],
  },
  {
    n: "03",
    tone: "bg-sun",
    title: "Build the renewal deal workflow",
    copy: "Create a deal based workflow that turns a Yes answer into a real renewal deal at the right time.",
    list: [
      "Enrolment trigger: Deal stage is Closed won AND Scope of renewal is Yes AND Tentative renewal date is known",
      "Delay: until a date based on Tentative renewal date, 90 days before",
      "Action: create a deal in the Renewals pipeline, copying the company, contacts, owner, and amount",
      "Action: create a task for the owner to start the renewal conversation",
    ],
  },
  {
    n: "04",
    tone: "bg-grape text-cream",
    title: "Build the no renewal nurture path",
    copy: "A No today is not a No forever. Keep those contacts warm so you are the first name they think of when things change.",
    list: [
      "Enrolment trigger: Deal stage is Closed won AND Scope of renewal is No",
      "Action: add the associated contacts to a No renewal nurture list (segment)",
      "Connect that list to a nurture email series with regular updates on what is happening in your organisation",
      "Review the Why no renewal reasons monthly to spot patterns worth fixing",
    ],
  },
];

function Node({ className, children }: { className: string; children: React.ReactNode }) {
  return <div className={`rounded-2xl border-2 border-ink/10 px-5 py-4 text-center font-bold ${className}`}>{children}</div>;
}

function Down() {
  return <div className="flex justify-center py-2 text-ink/40" aria-hidden="true"><ArrowDown size={22} /></div>;
}

function RenewalsGuide() {
  return (
    <main>
      <section className="reveal relative mx-auto grid min-h-[52vh] max-w-[92rem] content-center overflow-hidden rounded-b-[3.5rem] bg-mint/30 px-5 py-20 sm:px-8 sm:py-28 lg:rounded-b-[6rem]">
        <div className="relative mx-auto w-full max-w-5xl">
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">How to automate renewals in HubSpot.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">A step by step guide for businesses where renewals carry most of the revenue. Every closed won deal gets a renewal decision, and every renewal gets a deal well before a competitor reaches out.</p>
        </div>
      </section>

      <section className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Why this matters.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">We work with a book publishing company whose business comes from two places: renewals from existing organisations and new organisations signing up for the first time. Renewals are the larger share.</p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">When most revenue is repeat business, the real risk is not losing a pitch. It is forgetting to ask. If the CRM does not know a renewal is coming, nobody reaches out, and a competitor does.</p>
          </div>
          <div className="rounded-[2.5rem] bg-ink p-8 text-cream">
            <p className="font-bold text-cream/60">Revenue mix</p>
            <div className="mt-5 flex h-14 overflow-hidden rounded-2xl" role="img" aria-label="70 percent renewals, 30 percent net new organisations">
              <div className="grid w-[70%] place-items-center bg-mint font-bold text-ink">70% renewals</div>
              <div className="grid w-[30%] place-items-center bg-sun font-bold text-ink">30% new</div>
            </div>
            <p className="mt-5 leading-relaxed text-cream/70">Protecting the 70% starts the moment a deal is won.</p>
          </div>
        </div>
      </section>

      <section className="reveal border-y-2 border-ink/10 bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">The whole process at a glance.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">One question at closed won splits every deal into one of two automated paths. Nothing is left undecided.</p>
          <div className="mx-auto mt-12 max-w-3xl" role="img" aria-label="Flow diagram: deal closed won, popup asks scope of renewal, yes path creates renewal deal 90 days before renewal date, no path records reason and enrols contacts in nurture">
            <Node className="bg-ink text-cream">Deal moved to Closed won</Node>
            <Down />
            <Node className="bg-sun">Popup: Is this a scope of renewal?</Node>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-mint bg-mint/15 p-5">
                <p className="flex items-center justify-center gap-2 font-bold"><CircleCheck size={20} aria-hidden="true" /> Yes</p>
                <Down /><Node className="bg-background">Tentative renewal date (required)</Node>
                <Down /><Node className="bg-background">Deal saved and enrolled in workflow</Node>
                <Down /><Node className="bg-mint">Renewal deal created 90 days before the date</Node>
              </div>
              <div className="rounded-[2rem] border-2 border-brand/40 bg-brand/10 p-5">
                <p className="flex items-center justify-center gap-2 font-bold"><CircleX size={20} aria-hidden="true" /> No</p>
                <Down /><Node className="bg-background">Why no renewal deal needed (dropdown, required)</Node>
                <Down /><Node className="bg-background">Detailed reason (multi line text, required)</Node>
                <Down /><Node className="bg-brand text-cream">Contacts enrolled in a nurture segment</Node>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Step by step setup.</h2>
        <div className="mt-12 grid gap-6">
          {steps.map((s) => (
            <article key={s.n} className="grid gap-6 rounded-[2.5rem] border-2 border-ink/10 bg-background p-8 sm:grid-cols-[auto_1fr] sm:p-10">
              <span className={`grid size-16 place-items-center rounded-2xl font-display text-2xl font-bold ${s.tone}`}>{s.n}</span>
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{s.copy}</p>
                <ul className="mt-5 grid gap-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed"><Check size={20} className="mt-0.5 shrink-0 text-mint" aria-hidden="true" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-ink py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Choosing your lead time.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/70">We use 90 days before the renewal date. That number is a starting point, not a rule. Match it to your sales cycle: the renewal deal should appear early enough to have the conversation, handle budget approvals, and still beat competitors to the call.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: RefreshCcw, t: "Short cycle", c: "Simple renewals with one decision maker may need 30 to 60 days." },
              { icon: Settings2, t: "Typical cycle", c: "90 days suits most renewals that involve a review or a budget sign off." },
              { icon: Workflow, t: "Long cycle", c: "Committee or procurement led renewals may need 120 days or more." },
            ].map(({ icon: Icon, t, c }) => (
              <div key={t} className="rounded-[2rem] bg-cream/5 p-7">
                <Icon size={26} className="text-sun" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 leading-relaxed text-cream/65">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">What you get.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { t: "No forgotten renewals", c: "Every closed won deal must be marked Yes or No, so every expected renewal gets a deal created automatically." },
            { t: "Earlier conversations", c: "Reps start talking to customers months before the date, which supports a high closure rate on renewals." },
            { t: "A reason for every No", c: "Structured reasons plus written detail show you why customers do not renew, and nurture keeps the door open." },
          ].map((o) => (
            <div key={o.t} className="rounded-[2rem] border-2 border-ink/10 bg-cream p-7">
              <h3 className="text-xl font-bold">{o.t}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">{o.c}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[3rem] bg-brand p-10 text-center text-cream sm:p-16">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Want this built in your HubSpot?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/75">We can set up the properties, pipeline rules, workflows, and nurture for your renewal cycle.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BookCallButton className="inline-flex items-center gap-2 rounded-2xl bg-sun px-8 py-4 font-bold text-ink shadow-tactile-ink transition-all hover:translate-y-0.5 hover:shadow-tactile-ink-sm">Book a call <ArrowUpRight size={19} aria-hidden="true" /></BookCallButton>
            <Link to="/resources" className="inline-flex items-center gap-2 rounded-2xl bg-cream px-8 py-4 font-bold text-ink">More resources</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
