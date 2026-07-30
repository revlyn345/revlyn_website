"use client";

import { useEffect } from "react";

/* ─────────────────────────────────────────────────────────────────
   HUBSPOT CHAT WIDGET — HEIGHT ENFORCER

   HubSpot's chat widget has a built-in "expand" toggle (the diagonal
   arrows icon next to the close button). Clicking it grows the widget
   to a much taller size, and that preference persists across page
   refreshes (HubSpot stores it client-side).

   A plain CSS rule with !important can lose this fight: HubSpot's own
   script sets inline width/height on the widget's container and iframe
   via JavaScript, and it can re-apply those styles *after* our
   stylesheet has already loaded — including every time the expand
   toggle is clicked. Since inline styles set via JS can out-rank an
   external stylesheet rule, a static CSS max-height isn't reliable
   here.

   Instead, this watches the whole page for DOM changes with a
   MutationObserver, and every time something changes (the widget
   appearing, being opened, being expanded, etc.), it immediately
   re-applies our own height cap directly as an inline style — so
   whatever HubSpot's script just set gets overridden a moment later,
   every single time, regardless of the internal state HubSpot toggles
   into.

   Unofficial / not supported by HubSpot: their container ID and
   internal markup could change in a future update, which would stop
   this from finding the widget. If the cap stops working after a
   HubSpot update, inspect the widget (right-click → Inspect) to find
   its current container ID and update SELECTOR below.
   ───────────────────────────────────────────────────────────────── */

const SELECTOR = "#hubspot-messages-iframe-container";
const MAX_HEIGHT_DESKTOP = "600px";
const MAX_HEIGHT_MOBILE = "70vh";

function capElement(el: HTMLElement) {
  const isMobile = window.innerWidth <= 480;
  const maxHeight = isMobile ? MAX_HEIGHT_MOBILE : MAX_HEIGHT_DESKTOP;

  el.style.setProperty("max-height", maxHeight, "important");
  if (isMobile) {
    el.style.setProperty("bottom", "10px", "important");
    el.style.setProperty("right", "10px", "important");
    el.style.setProperty("left", "10px", "important");
    el.style.setProperty("width", "auto", "important");
  } else {
    el.style.setProperty("bottom", "20px", "important");
  }

  // The iframe inside the container also gets its own height set by
  // HubSpot's script, so it needs the same cap independently.
  const iframe = el.querySelector<HTMLElement>("iframe");
  if (iframe) {
    iframe.style.setProperty("max-height", maxHeight, "important");
  }
}

export function HubSpotWidgetCap() {
  useEffect(() => {
    const applyToAll = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(capElement);
    };

    // Run once immediately in case the widget is already on the page.
    applyToAll();

    // Then keep watching. HubSpot's script mutates the DOM (adding the
    // container, opening/closing it, expanding it) well after this
    // component first mounts, so a one-time check isn't enough.
    //
    // The rest of this site has plenty of its own ongoing class/style
    // changes (scroll-triggered reveals, pinned sections, marquees), so
    // a raw MutationObserver on document.body could fire far more often
    // than this actually needs. Coalescing to at most once per animation
    // frame keeps it cheap regardless of how busy the rest of the page is.
    let scheduled = false;
    const scheduleApply = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        applyToAll();
      });
    };

    const observer = new MutationObserver(scheduleApply);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    window.addEventListener("resize", scheduleApply);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleApply);
    };
  }, []);

  return null;
}
