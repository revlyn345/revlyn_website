import type { Metadata } from "next";
import ContactPageClient from "@/components/generated/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Revlyn — HubSpot as a Service",
  description: "Get in touch with Revlyn. Tell us about your HubSpot, CRM, RevOps, GTM or AI challenge and we will reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPageClient />;
}
