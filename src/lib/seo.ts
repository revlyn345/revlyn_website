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
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/icon-512.png`,
    contentUrl: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
    caption: SITE_NAME,
  },
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  description:
    "Revlyn is a HubSpot Gold Solutions Partner and revenue operations consultancy helping growing revenue teams implement, migrate, automate, and report on their CRM.",
  slogan: "Grow your pipeline, not your spreadsheet.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      url: `${SITE_URL}/book-a-call`,
      availableLanguage: ["English"],
      areaServed: ["IN", "AU", "US", "GB"],
    },
  ],
  areaServed: ["India", "Australia", "United States", "United Kingdom", "Europe"],
  knowsAbout: [
    "HubSpot",
    "HubSpot implementation",
    "CRM implementation",
    "CRM migration",
    "Revenue operations",
    "Sales pipeline design",
    "Marketing automation",
    "CRM reporting",
    "Zoho CRM",
  ],
  // Official profiles. Add more (YouTube, X, G2, Clutch, HubSpot directory) when they exist.
  sameAs: ["https://www.linkedin.com/company/revlynhq/"],
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


/** Article / case study schema with author, publisher and dates, so search
 *  engines and AI answer engines can verify who wrote it and how recent it is. */
export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified = datePublished,
  image = OG_IMAGE,
  type = "Article",
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  type?: "Article" | "BlogPosting" | "NewsArticle";
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image,
    datePublished,
    dateModified,
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function howToSchema({
  name,
  description,
  path,
  steps,
  image = OG_IMAGE,
}: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string; anchor?: string }[];
  image?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    image,
    inLanguage: "en",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      url: step.anchor ? `${url}#${step.anchor}` : url,
    })),
  };
}
