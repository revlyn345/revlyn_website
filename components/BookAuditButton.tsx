"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* ═══════════════════════════════════════════════════════════════
   BOOK AUDIT BUTTON
   Same popup pattern as BookCallButton (portal onto document.body,
   escape-to-close, body-scroll lock) but embeds the HubSpot Forms
   widget for the portal audit request instead of the meetings
   scheduler iframe.

   HubSpot's forms-embed script (js.hsforms.net/forms/embed/{portalId}.js)
   scans the page for elements matching `.hs-form-frame` and renders
   each into an iframe. It's injected fresh each time this modal opens
   (guarded so the <script> tag only ever gets added to the page once)
   rather than living in the global <head>, since this specific form
   is only needed on the audit page.
   ═══════════════════════════════════════════════════════════════ */

const FORM_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/50824762.js";
const FORM_PORTAL_ID = "50824762";
const FORM_ID = "d3ccd2ef-3ef9-493c-824d-4da4a87bd5a1";
const FORM_REGION = "na1";

export function BookAuditButton({
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
      {open && <BookAuditModal onClose={() => setOpen(false)} />}
    </>
  );
}

function BookAuditModal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!document.querySelector(`script[src="${FORM_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = FORM_SCRIPT_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }

    // The embed script replaces the .hs-form-frame div's contents with
    // an iframe once the form is ready — watch for that so the
    // "Loading form…" placeholder can be swapped out at the right
    // moment, same as the meetings iframe's onLoad in BookCallButton.
    const node = frameRef.current;
    let observer: MutationObserver | undefined;
    if (node) {
      observer = new MutationObserver(() => {
        if (node.querySelector("iframe")) setLoaded(true);
      });
      observer.observe(node, { childList: true, subtree: true });
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      observer?.disconnect();
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book the audit"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden />

      {/* Modal card */}
      <div className="relative w-full max-w-xl max-h-[90vh] bg-paper border-2 border-ink shadow-[10px_10px_0_0_var(--color-fire)] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-ink bg-ink text-paper shrink-0">
          <span className="mono text-[11px] uppercase tracking-[0.18em]">Book the audit</span>
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

        <div className="relative flex-1 min-h-[420px] overflow-y-auto p-6">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-paper">
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Loading form…</span>
            </div>
          )}
          <div
            ref={frameRef}
            className="hs-form-frame"
            data-region={FORM_REGION}
            data-form-id={FORM_ID}
            data-portal-id={FORM_PORTAL_ID}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
