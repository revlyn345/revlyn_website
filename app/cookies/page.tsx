import type { Metadata } from "next";
import CookiesClient from "@/components/generated/CookiesClient";

export const metadata: Metadata = {
  title: "Cookie Policy · Revlyn",
  description: "How revlyn.io uses cookies.",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return <CookiesClient />;
}