"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await subscribeToNewsletter(email);
    setStatus(result.success ? "success" : "error");
    setMessage(result.message);
  }

  if (status === "success") {
    return (
      <div className="border-2 border-ink p-5">
        <div className="mono text-[10px] text-ink/50 mb-3">Get it in your inbox</div>
        <p className="text-[15px] text-fire font-bold">{message}</p>
      </div>
    );
  }

  return (
    <div className="border-2 border-ink p-5">
      <div className="mono text-[10px] text-ink/50 mb-3">Get it in your inbox</div>
      <p className="text-[15px] leading-snug text-ink/70 mb-3.5">
        One note a month. No drip sequence, we promise.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="flex-1 min-w-0 border border-ink/15 px-3.5 py-2.5 text-[15px] outline-none focus:border-ink transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-ink text-paper px-4 py-2.5 text-[15px] font-medium disabled:opacity-60"
        >
          {status === "loading" ? "…" : "Join"}
        </button>
      </form>
      {status === "error" && message && (
        <p className="mt-2.5 text-[13px] text-fire">{message}</p>
      )}
    </div>
  );
}
