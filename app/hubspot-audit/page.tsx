import type { Metadata } from "next";
import HubSpotAuditClient from "@/components/generated/HubSpotAuditClient";

export const metadata: Metadata = {
  title: "Free HubSpot Audit · we open your portal and tell you the truth",
  description:
    "A senior HubSpot operator opens your portal, spends about 90 minutes inside it, and writes you a straight report about what's broken and what to fix first. Free. No pitch.",
  alternates: { canonical: "/hubspot-audit" },
  openGraph: {
    title: "Free HubSpot Audit · Revlyn",
    description:
      "We open your HubSpot, tell you what's actually broken, and hand you a fix list you can start on Monday. No slides.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HubSpotAuditClient />;
}