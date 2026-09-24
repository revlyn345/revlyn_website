// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { legacyRedirects } from "./src/lib/redirects";

// Vercel sets VERCEL=1 during its builds. There we build for Vercel's serverless runtime
// and add the 301 redirects from the old site; everywhere else (including Lovable)
// the default Cloudflare target stays unchanged.
const isVercel = !!process.env["VERCEL"];

const routeRules = Object.fromEntries(
  Object.entries(legacyRedirects).map(([from, to]) => [from, { redirect: { to, status: 301 as const } }]),
);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // routeRules is a standard Nitro option the Lovable wrapper passes straight through.
  ...(isVercel ? { nitro: { preset: "vercel", routeRules } as { preset: string } } : {}),
});
