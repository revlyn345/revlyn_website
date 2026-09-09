import type { Metadata } from "next";
import SecurityClient from "@/components/generated/SecurityClient";

export const metadata: Metadata = {
  title: "Security · Revlyn",
  description: "How Revlyn handles data security and access for client engagements.",
  alternates: { canonical: "/security" },
};

export default function Page() {
  return <SecurityClient />;
}