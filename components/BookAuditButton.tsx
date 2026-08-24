"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* ═══════════════════════════════════════════════════════════════
   BOOK AUDIT BUTTON
   Same popup pattern as BookCallButton (portal onto document.body,
   escape-to-close, body-scroll lock) but embeds the HubSpot Forms
   widget for the portal audit request instead of the meetings
   scheduler iframe.

   Uses the classic hbspt.forms.create() API (js.hsforms.net/forms/embed/v2.js)
   rather than the newer ".hs-form-frame" auto-scan embed script.
   The auto-scan version is known (per multiple HubSpot community
   threads) to silently fail — stuck loading, no console error —
   particularly for forms not built in HubSpot's newest form editor,
   or when the target element is added to the page dynamically rather
   than present in the initial HTML, which is exactly the situation
   here (the div only exists once this modal opens). The classic API
   is far more battle-tested and gives a real onFormReady callback
   instead of having to guess readiness via a MutationObserver.
   ═══════════════════════════════════════════════════════════════ */

const FORM_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const FORM_PORTAL_ID = "50824762";
const FORM_ID = "d3ccd2ef-3ef9-493c-824d-4da4a87bd5a1";
const FORM_REGION = "na1";
const FORM_TARGET_ID = "pfc-audit-hubspot-form-target";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

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
  const [failed, setFailed] = useState(false);
  const createdRef = useRef(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // HubSpot's onFormReady callback isn't firing reliably with the
    // current embed internals (confirmed via network trace: the form
    // itself renders successfully — HubSpot's own telemetry reports
    // "form-frame-load-success" — but our onFormReady handler below
    // never gets invoked, which would otherwise leave the loading
    // overlay stuck on top of a form that's actually there and
    // working). This observer is the reliable signal instead: the
    // moment HubSpot injects anything into the target div, the form
    // has rendered, full stop — no dependency on any callback firing.
    const targetNode = targetRef.current;
    let observer: MutationObserver | undefined;
    if (targetNode) {
      observer = new MutationObserver(() => {
        if (targetNode.childNodes.length > 0) setLoaded(true);
      });
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    function createForm() {
      if (createdRef.current) return;
      createdRef.current = true;
      window.hbspt?.forms.create({
        region: FORM_REGION,
        portalId: FORM_PORTAL_ID,
        formId: FORM_ID,
        target: `#${FORM_TARGET_ID}`,
        onFormReady: () => setLoaded(true),
      });
    }

    // A visible timeout, rather than failing silently forever, in
    // case the form still doesn't render for some reason (e.g. the
    // form/portal ID pairing itself is wrong or inactive on
    // HubSpot's side) — better to surface that than show an
    // infinite spinner.
    const timeout = setTimeout(() => {
      if (!createdRef.current || !window.hbspt) setFailed(true);
    }, 8000);

    if (window.hbspt) {
      createForm();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${FORM_SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener("load", createForm);
      } else {
        const script = document.createElement("script");
        script.src = FORM_SCRIPT_SRC;
        script.addEventListener("load", createForm);
        script.addEventListener("error", () => setFailed(true));
        document.body.appendChild(script);
      }
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(timeout);
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
          {!loaded && !failed && (
            <div className="absolute inset-0 flex items-center justify-center bg-paper">
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Loading form…</span>
            </div>
          )}
          {failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper px-6 text-center">
              <span className="mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                The form didn&rsquo;t load
              </span>
              <p className="text-sm text-ink/60 max-w-xs">
                Something's blocking it, or the form ID may need checking in HubSpot. In the
                meantime, email{" "}
                <a href="mailto:info@revlyn.io" className="text-fire underline underline-offset-2">
                  info@revlyn.io
                </a>{" "}
                to book your audit directly.
              </p>
            </div>
          )}
          <div id={FORM_TARGET_ID} ref={targetRef} />
        </div>
      </div>
    </div>,
    document.body,
  );
}