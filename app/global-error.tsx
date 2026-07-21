"use client";

// Catches errors thrown by the root layout itself (fonts, providers, etc.)
// — the Next.js equivalent of the old server.ts / error-page.ts catch-all.
// Must render its own <html>/<body> since the real root layout has failed.
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html lang="en">
      <body
        style={{
          font: "15px/1.5 system-ui, -apple-system, sans-serif",
          background: "#fafafa",
          color: "#111",
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "28rem", width: "100%", textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem" }}>This page didn&apos;t load</h1>
          <p style={{ color: "#4b5563", margin: "0 0 1.5rem" }}>
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => location.reload()}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                font: "inherit",
                cursor: "pointer",
                background: "#111",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- replaces the crashed root layout; can't depend on next/link's router context here */}
            <a
              href="/"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                font: "inherit",
                textDecoration: "none",
                background: "#fff",
                color: "#111",
                border: "1px solid #d1d5db",
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
