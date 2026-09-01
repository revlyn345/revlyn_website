import type { Metadata } from "next";
import AboutPageClient from "@/components/generated/AboutPageClient";

export const metadata: Metadata = {
  title: "About Revlyn, the Senior Operator Team Behind Revenue Systems",

  description:
    "Revlyn is a senior CRM, RevOps, GTM and AI practice for B2B founders and revenue leaders. Learn about our principles, operator team, and how we work.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Revlyn, the Senior Operator Team Behind Revenue Systems",
    description:
      "Revlyn is a senior CRM, RevOps, GTM and AI practice for B2B founders and revenue leaders. Learn about our principles, operator team, and how we work.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Revlyn - Revenue Operators for B2B Growth Teams",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Revlyn, the Senior Operator Team Behind Revenue Systems",
    description:
      "Revlyn is a senior CRM, RevOps, GTM and AI practice for B2B founders and revenue leaders.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AboutPageClient />;
}