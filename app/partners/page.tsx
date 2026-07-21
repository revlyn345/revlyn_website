import type { Metadata } from "next";
import PartnersIndexClient from "@/components/generated/PartnersIndexClient";

export const metadata: Metadata = {
  title: "Partners · Revlyn",
  description: "The platforms Revlyn is a certified partner of. Short list, on purpose. HubSpot and Bitscale.",
  alternates: { canonical: "/partners" },
};

export default function Page() {
  return <PartnersIndexClient />;
}
