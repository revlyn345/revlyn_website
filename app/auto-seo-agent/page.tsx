import type { Metadata } from "next";
import AutoSEOAgentClient from "@/components/generated/AutoSEOAgentClient";

export const metadata: Metadata = {
  title: "Auto SEO Agent · Revlyn",
  description:
    "Revlyn's Auto SEO Agent researches, writes, and schedules on-brand search content, with human approval before anything goes live.",
  alternates: { canonical: "/auto-seo-agent" },
};

export default function Page() {
  return <AutoSEOAgentClient />;
}