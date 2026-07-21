import type { Metadata } from "next";
import AboutPageClient from "@/components/generated/AboutPageClient";

export const metadata: Metadata = {
  title: "About Revlyn, the senior operator team behind revenue systems",
  description: "Revlyn is a senior CRM, RevOps, GTM and AI practice for B2B founders and revenue leaders. Provenance, principles, the operator roster, and how we show up.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPageClient />;
}
