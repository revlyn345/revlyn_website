// https://revlyn.io/sitemap.xml
// Site pages come from src/generated/static-routes.json (rebuilt on every
// deploy); blog posts are read live from WordPress, so a newly published post
// is in the sitemap within a few minutes.
import { createFileRoute } from "@tanstack/react-router";
import staticRoutes from "../generated/static-routes.json";
import { SITE_URL } from "../lib/seo";
import { getSitemapPosts } from "../lib/wordpress";

const escapeXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const buildDay = new Date().toISOString().slice(0, 10);
        const posts = await getSitemapPosts();
        const pageUrls = staticRoutes.map(
          (r) => `  <url>\n    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${buildDay}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`,
        );
        const known = new Set(staticRoutes.map((r) => r.path));
        const postUrls = posts
          .filter((p) => !known.has(`/blog/${p.slug}`))
          .map(
            (p) =>
              `  <url>\n    <loc>${SITE_URL}/blog/${escapeXml(p.slug)}</loc>\n    <lastmod>${p.modified.slice(0, 10)}</lastmod>\n    <priority>0.6</priority>\n  </url>`,
          );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...pageUrls, ...postUrls].join("\n")}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=0, s-maxage=600, stale-while-revalidate=3600",
          },
        });
      },
    },
  },
});
