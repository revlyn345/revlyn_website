// Central SEO settings for revlyn.io.
// Change the domain, social image or company details here, not in each page.

export const SITE_URL = "https://revlyn.io";
export const SITE_NAME = "Revlyn";
// WordPress (headless). Posts are shown at revlyn.io/blog/<slug>, never on this host.
export const CMS_URL = "https://cms.revlyn.io";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const CONTACT_EMAIL = "info@revlyn.io";

// Tracking IDs carried over from the previous Next.js site.
export const GA_MEASUREMENT_ID = "G-DHW6KDE2R1";
export const HUBSPOT_PORTAL_ID = "50824762";

/** Turns "/hubspot/migration" into "https://revlyn.io/hubspot/migration". */
export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon-512.png`,
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  description:
    "Revlyn is a HubSpot Gold Solutions Partner and RevOps consultancy helping growing revenue teams implement, migrate, automate and report on their CRM.",
  areaServed: ["Worldwide", "United States", "Australia", "India", "United Kingdom"],
  knowsAbout: [
    "HubSpot",
    "CRM implementation",
    "CRM migration",
    "Revenue operations",
    "Sales pipeline design",
    "Marketing automation",
    "CRM reporting",
  ],
  // Add your LinkedIn and other official profiles here so Google can connect them to Revlyn.
  sameAs: [] as string[],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
