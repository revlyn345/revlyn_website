import type { Metadata } from "next";
import FAQsClient from "@/components/generated/FAQsClient";

export const metadata: Metadata = {
  title: "FAQs · Revlyn",
  description: "Common questions about working with Revlyn.",
  alternates: { canonical: "/faqs" },
};

export default function Page() {
  return <FAQsClient />;
}