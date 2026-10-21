// Badge images are served from revlyn.io (public/images/badges/).
const cream = "/images/badges/hubspot-gold-badge-cream.png";
const teal = "/images/badges/hubspot-gold-badge-teal.png";

const sizes = { sm: "h-24", md: "h-32", lg: "h-40" } as const;

export function HubSpotBadge({
  dark = false,
  size = "md",
  className = "",
}: {
  dark?: boolean;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <img
      src={dark ? cream : teal}
      alt="Revlyn is a HubSpot Gold Solutions Partner"
      width={766}
      height={763}
      className={`inline-block w-auto shrink-0 ${sizes[size]} ${className}`}
    />
  );
}
