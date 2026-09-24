import { Award } from "lucide-react";

export function HubSpotBadge({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 rounded-full border-2 px-4 py-2 text-sm font-bold ${dark ? "border-sun/40 bg-sun/10 text-sun" : "border-ink/10 bg-background text-ink shadow-sm"} ${className}`}>
      <span className={`grid size-6 shrink-0 place-items-center rounded-full ${dark ? "bg-sun text-ink" : "bg-sun text-ink"}`}>
        <Award size={13} strokeWidth={2.5} aria-hidden="true" />
      </span>
      HubSpot Gold Partner
    </span>
  );
}
