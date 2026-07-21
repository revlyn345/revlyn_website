import type { MetadataRoute } from "next";

const baseUrl = "https://revlyn.io"; // TODO: replace with real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/use-cases",
    "/use-cases/saas",
    "/partners",
    "/partners/hubspot",
    "/partners/bitscale",
    "/work/fintech-scale-up",
    "/hubspot-as-a-service",
    "/hubspot-implementation",
    "/hubspot-optimization",
    "/hubspot-audit",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
