import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { MotionRuntime } from "@/components/MotionRuntime";

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

// Central SEO config. Each route can override via its own `export const metadata`
// (App Router merges child metadata over these defaults automatically).
const siteUrl = "https://revlyn.io"; // TODO: replace with the real production domain
const siteName = "Revlyn";
const defaultDescription =
  "Revlyn is a revenue operations partner for B2B startups and mid-market companies - CRM, RevOps, GTM, and AI consulting, plus a dedicated HubSpot practice.";

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
    "CRM consulting",
    "HubSpot Solutions Partner",
    "GTM strategy",
    "revenue operations",
    "B2B sales automation",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: "Revlyn - Revenue Operators for B2B Growth Teams",
    description: defaultDescription,
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteName }],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MotionRuntime />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
