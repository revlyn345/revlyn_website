import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Nav } from "@/components/Nav";
import { MotionRuntime } from "@/components/MotionRuntime";
import { HubSpotWidgetCap } from "@/components/HubSpotWidgetCap";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────
// SITE / SEO CONFIG
// ─────────────────────────────────────────────────────────────

const siteUrl = "https://revlyn.io";
const siteName = "Revlyn";

const defaultDescription =
  "Revlyn is a revenue operations partner for B2B startups and mid-market companies - CRM, RevOps, GTM, and AI consulting, plus a dedicated HubSpot practice.";

// ─────────────────────────────────────────────────────────────
// GOOGLE ANALYTICS
// IMPORTANT: Replace this with your actual GA4 Measurement ID.
// Example: G-ABC123XYZ
// ─────────────────────────────────────────────────────────────

const GA_MEASUREMENT_ID = "G-DHW6KDE2R1";

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Revlyn - Revenue Operators for B2B Growth Teams",
    template: "%s | Revlyn",
  },

  description: defaultDescription,

  authors: [{ name: "Revlyn" }],

  keywords: [
    "RevOps",
    "Revenue Operations",
    "CRM consulting",
    "HubSpot Solutions Partner",
    "HubSpot consulting",
    "HubSpot implementation",
    "HubSpot optimization",
    "GTM strategy",
    "Go-to-Market",
    "revenue operations",
    "B2B sales automation",
    "AI automation",
    "CRM implementation",
  ],

  openGraph: {
    type: "website",
    siteName,
    title: "Revlyn - Revenue Operators for B2B Growth Teams",
    description: defaultDescription,
    url: siteUrl,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revlyn - Revenue Operators for B2B Growth Teams",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Revlyn - Revenue Operators for B2B Growth Teams",
    description: defaultDescription,
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* ─────────────────────────────────────────────────────
            GOOGLE ANALYTICS 4
            Loads on every page of the website

            strategy="lazyOnload" (not "afterInteractive"): GA doesn't
            need to run before the page is interactive, and loading it
            that early puts it in direct competition with the page's
            own hydration for main-thread time - showing up as Total
            Blocking Time in Lighthouse/PageSpeed. lazyOnload defers
            this until the browser is idle, after everything the user
            can actually see or click has already loaded.
        ───────────────────────────────────────────────────── */}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ─────────────────────────────────────────────────────
            WEBSITE NAVIGATION
        ───────────────────────────────────────────────────── */}

        <Nav />

        {/* ─────────────────────────────────────────────────────
            PAGE CONTENT
        ───────────────────────────────────────────────────── */}

        <MotionRuntime />

        {children}

        {/* ─────────────────────────────────────────────────────
            HUBSPOT WIDGET
            Loads HubSpot's Conversations chat widget (the round
            avatar bubble + "Got any questions?" popup). This was
            missing entirely - HubSpotWidgetCap below only manages a
            widget's height after HubSpot itself has injected it, it
            never loaded the widget. That's why the chat bubble
            disappeared: this site was migrated from Lovable, and the
            actual HubSpot tracking script (normally set in Lovable's
            site settings) never got carried over into this codebase.

            Portal ID reused from BookAuditButton.tsx's forms embed,
            since that's the same HubSpot portal this site is on.

            strategy="lazyOnload" for the same reason as GA above: the
            chat widget doesn't need to block first interaction, so it
            loads once the browser is idle instead of competing with
            page hydration for main-thread time.
        ───────────────────────────────────────────────────── */}

        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/50824762.js"
          strategy="lazyOnload"
        />

        <HubSpotWidgetCap />
      </body>
    </html>
  );
}