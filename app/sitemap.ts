import type { MetadataRoute } from "next";

const baseUrl = "https://revlyn.io";

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
    "/work/ausforming",
    "/work/detrack",
    "/work/datapel",
    "/hubspot-as-a-service",
    "/hubspot-implementation",
    "/hubspot-implementation/content-hub",
    "/hubspot-implementation/sales-hub",
    "/hubspot-implementation/service-hub",
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
