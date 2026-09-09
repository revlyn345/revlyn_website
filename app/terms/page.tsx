import type { Metadata } from "next";
import TermsClient from "@/components/generated/TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service · Revlyn",
  description: "Revlyn's terms of service for using our website and engaging our services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsClient />;
}