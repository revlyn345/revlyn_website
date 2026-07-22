"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/* ═══════════════════════════════════════════════════════════════
   BOOK CALL BUTTON
   Renders exactly like a normal link/button (pass your existing
   className + content as children), but instead of navigating
   anywhere, it opens an on-page popup containing HubSpot's live
   Meetings scheduler, loaded as a plain iframe. The visitor picks
   a time without ever leaving the site.

   The popup is rendered via a React portal straight onto
   document.body, not inline where the button sits in the page.
   Without this, a button nested deep in the page (e.g. inside the
   sticky Nav) can end up with its "fixed, full-screen" popup
   fighting some ancestor's stacking context or overflow — showing
   up cramped near the top instead of centered. A portal sidesteps
   that entirely: the popup's DOM position no longer depends on
   which button opened it.
   ═══════════════════════════════════════════════════════════════ */

const MEETINGS_URL = "https://meetings.hubspot.com/rishabh52/discovery-call-with-revlyn";

export function BookCallButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && <BookCallModal onClose={() => setOpen(false)} />}
    </>
  );
}

function BookCallModal({ onClose }: { onClose: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden />

      {/* Modal card */}
      <div className="relative w-full max-w-3xl h-[85vh] max-h-[750px] bg-paper border-2 border-ink shadow-[10px_10px_0_0_var(--color-fire)] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-ink text-paper shrink-0">
          <span className="mono text-[11px] uppercase tracking-[0.18em]">Book a call</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="h-8 w-8 grid place-items-center rounded-full hover:bg-fire transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="relative flex-1 min-h-0">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-paper">
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Loading calendar…</span>
            </div>
          )}
          <iframe
            src={`${MEETINGS_URL}?embed=true`}
            title="Book a call with Revlyn"
            className="w-full h-full border-0"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}