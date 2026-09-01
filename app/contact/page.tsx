import type { Metadata } from "next";
import ContactPageClient from "@/components/generated/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Revlyn - HubSpot, RevOps & GTM Consulting",

  description:
    "Get in touch with Revlyn. Tell us about your HubSpot, CRM, RevOps, GTM or AI challenge and our team will get back to you within one business day.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Revlyn - HubSpot, RevOps & GTM Consulting",
    description:
      "Talk to Revlyn about your HubSpot, CRM, RevOps, GTM or AI challenge. Our team will get back to you within one business day.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Revlyn - HubSpot, RevOps & GTM Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Revlyn - HubSpot, RevOps & GTM Consulting",
    description:
      "Talk to Revlyn about your HubSpot, CRM, RevOps, GTM or AI challenge.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContactPageClient />;
}
