import type { Metadata } from "next";
import HubSpotAsAServiceClient from "@/components/generated/HubSpotAsAServiceClient";

export const metadata: Metadata = {
  title: "HubSpot as a Service · Revlyn",
  description: "HubSpot as a Service by Revlyn. Your extended CRM, RevOps, GTM and AI team running HubSpot end to end — architecture, automation, reporting, enablement. No internal hire required.",
  alternates: { canonical: "/hubspot-as-a-service" },
};

export default function Page() {
  return <HubSpotAsAServiceClient />;
}
