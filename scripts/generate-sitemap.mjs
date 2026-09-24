// Writes the list of the site's own pages to src/generated/static-routes.json.
// The live /sitemap.xml (src/routes/sitemap[.]xml.ts) combines this list with
// every published WordPress post, so new blog posts appear without a redeploy.
// Runs automatically before every build (see "prebuild" in package.json).
// You can also run it by hand: node scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync } from "node:fs";

// Pages that should not be in the sitemap (thank-you pages, drafts, etc.).
const EXCLUDE = new Set(["/sitemap.xml"]);

const tree = readFileSync(new URL("../src/routeTree.gen.ts", import.meta.url), "utf8");
const block = tree.match(/fullPaths:([\s\S]*?)\n\s*fileRoutesByTo/);
if (!block) throw new Error("Could not find fullPaths in src/routeTree.gen.ts");

const paths = [...new Set([...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1].replace(/\/$/, "") || "/"))]
  .filter((p) => !p.includes("$") && !EXCLUDE.has(p))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

function priority(p) {
  if (p === "/") return "1.0";
  if (["/hubspot", "/revops", "/services", "/crm-implementation", "/contact", "/book-a-call"].includes(p)) return "0.9";
  if (/^\/(hubspot|revops|industries|compare)\//.test(p)) return "0.8";
  if (/^\/(privacy|terms)$/.test(p)) return "0.3";
  return "0.7";
}

const entries = paths.map((p) => ({ path: p, priority: priority(p) }));
writeFileSync(
  new URL("../src/generated/static-routes.json", import.meta.url),
  JSON.stringify(entries, null, 2) + "\n",
);
console.log(`static-routes.json written with ${entries.length} pages`);
