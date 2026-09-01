import type { Metadata } from "next";
import HomePageClient from "@/components/generated/HomePageClient";

export const metadata: Metadata = {
  title: "Revlyn - CRM, RevOps, GTM & AI Infrastructure for B2B",
  description:
    "Revlyn is the operating layer between GTM and the P&L. CRM architecture, RevOps, GTM design and AI infrastructure for B2B startups and mid-market companies.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Revlyn - CRM, RevOps, GTM & AI Infrastructure for B2B",
    description:
      "Revlyn is the operating layer between GTM and the P&L. CRM architecture, RevOps, GTM design and AI infrastructure for B2B startups and mid-market companies.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revlyn - CRM, RevOps, GTM & AI Infrastructure for B2B",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Revlyn - CRM, RevOps, GTM & AI Infrastructure for B2B",
    description:
      "Revlyn is the operating layer between GTM and the P&L. CRM architecture, RevOps, GTM design and AI infrastructure for B2B startups and mid-market companies.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomePageClient />;
}
