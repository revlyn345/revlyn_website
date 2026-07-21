import type { Metadata } from "next";
import HomePageClient from "@/components/generated/HomePageClient";

export const metadata: Metadata = {
  title: "Revlyn — CRM, RevOps, GTM & AI infrastructure for B2B",
  description: "Revlyn is the operating layer between GTM and the P&L. CRM architecture, RevOps, GTM design and AI infrastructure for B2B startups and mid-market companies.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePageClient />;
}
