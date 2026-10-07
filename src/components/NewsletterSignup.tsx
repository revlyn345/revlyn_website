import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const PORTAL_ID = "50824762";
const NEWSLETTER_FORM_ID = "456b13be-b003-4d41-86d6-cc5aab83bfd0";

type Status = "idle" | "loading" | "success" | "error";

function getHubspotCookie() {
  if (typeof document === "undefined") return undefined;
  return document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
}

function useNewsletterSignup(source: string) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    // Hidden "website" field: people never fill it, spam bots usually do.
    if ((form.elements.namedItem("website") as HTMLInputElement | null)?.value) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (NEWSLETTER_FORM_ID.startsWith("PASTE")) {
      console.error("[newsletter] Add your HubSpot form ID in src/components/NewsletterSignup.tsx");
      setStatus("error");
      setMessage("Signups are not connected yet. Please try again soon.");
      return;
    }

    setStatus("loading");
    try {
      const hutk = getHubspotCookie();
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${NEWSLETTER_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [{ objectTypeId: "0-1", name: "email", value: email.trim() }],
          context: { pageUri: window.location.href, pageName: `${source} (${document.title})`, ...(hutk ? { hutk } : {}) },
        }),
      });
      if (!res.ok) throw new Error(`HubSpot returned ${res.status}`);
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("[newsletter] submission failed", err);
      setStatus("error");
      setMessage("Something went wrong. Please try again in a moment.");
    }
  }

  return { email, setEmail, status, setStatus, message, handleSubmit };
}

export function NewsletterSignup({ source = "Website" }: { source?: string }) {
  const { email, setEmail, status, setStatus, message, handleSubmit } = useNewsletterSignup(source);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="newsletter-title">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-7 text-cream sm:rounded-[3rem] sm:p-12">
        <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full bg-sun/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-10 size-64 rounded-full bg-mint/25 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            
            <h2 id="newsletter-title" className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Practical CRM notes, <span className="text-sun">once a month.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/70">
              HubSpot tips, RevOps playbooks, and what is working for growing revenue teams. Short, useful, and never salesy.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cream/10 bg-cream/5 p-5 backdrop-blur sm:p-7">
            {status === "success" ? (
              <div className="flex items-start gap-4" role="status">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mint text-ink"><Check size={24} aria-hidden="true" /></span>
                <div>
                  <p className="font-display text-2xl font-bold">You are on the list.</p>
                  <p className="mt-2 leading-relaxed text-cream/70">Look out for the next issue in your inbox. You can unsubscribe any time.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor={`newsletter-email-${source}`} className="font-bold">Work email</label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id={`newsletter-email-${source}`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                    disabled={status === "loading"}
                    aria-invalid={status === "error"}
                    className="min-w-0 flex-1 rounded-2xl border-2 border-transparent bg-cream px-5 py-4 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-sun disabled:opacity-60"
                  />
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-sun px-7 py-4 font-bold text-ink shadow-[0_6px_0_0_var(--brand)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand)] active:translate-y-1.5 active:shadow-none disabled:translate-y-0 disabled:opacity-70"
                  >
                    {status === "loading" ? <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Subscribing</> : <>Subscribe <ArrowUpRight size={18} aria-hidden="true" /></>}
                  </button>
                </div>
                {status === "error" && <p className="mt-3 text-sm font-bold text-brand" role="alert">{message}</p>}
                <p className="mt-4 text-sm text-cream/55">One email a month. No spam. Unsubscribe with one click.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Compact version for the dark footer. */
export function FooterNewsletter() {
  const { email, setEmail, status, setStatus, message, handleSubmit } = useNewsletterSignup("Footer");

  return (
    <div className="w-full max-w-md">
      <p className="font-bold text-sun">Get Revlyn field notes</p>
      <p className="mt-1 text-sm text-cream/55">Practical CRM notes, once a month. Unsubscribe any time.</p>
      {status === "success" ? (
        <p className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-mint/15 px-4 py-3 font-bold text-mint" role="status">
          <Check size={18} aria-hidden="true" /> You are on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-4">
          <div className="flex gap-2 rounded-2xl border border-cream/15 bg-cream/5 p-1.5 focus-within:border-sun">
            <label htmlFor="footer-newsletter-email" className="sr-only">Work email</label>
            <input
              id="footer-newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
              disabled={status === "loading"}
              aria-invalid={status === "error"}
              className="min-w-0 flex-1 bg-transparent px-3 text-cream outline-none placeholder:text-cream/35 disabled:opacity-60"
            />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-sun px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-cream disabled:opacity-70"
            >
              {status === "loading" ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <>Subscribe <ArrowUpRight size={16} aria-hidden="true" /></>}
            </button>
          </div>
          {status === "error" && <p className="mt-2 text-sm font-bold text-brand" role="alert">{message}</p>}
        </form>
      )}
    </div>
  );
}
