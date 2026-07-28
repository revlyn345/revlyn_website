import type { Metadata } from "next";
import MarketingHubClient from "@/components/generated/MarketingHubClient";

export const metadata: Metadata = {
  title: "HubSpot Marketing Hub Implementation",
  description:
    "Marketing Hub built for demand: lifecycle, forms, routing, campaigns, attribution and a dashboard your board can read. Live in 4-6 weeks.",
  alternates: { canonical: "/hubspot-implementation/marketing-hub" },
  openGraph: {
    title: "HubSpot Marketing Hub Implementation · Revlyn",
    description:
      "A Marketing Hub that ships qualified pipeline, not vanity opens. Lifecycle, forms, attribution and reporting wired end to end.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <MarketingHubClient />;
}
