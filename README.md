# Revlyn — Next.js migration

This is the Revlyn marketing site rebuilt on **Next.js 15 (App Router)**, migrated from
the original TanStack Start codebase. The migration was done for SEO: Next.js gives you
per-page `<title>`/`<meta>` via the native Metadata API, a generated `sitemap.xml` and
`robots.txt`, and static prerendering by default — all first-class here instead of
hand-rolled.

**This has been build-tested** (`npm install && npm run build` completes with all 15
routes prerendered as static HTML). The one thing that will not work in a sandboxed
environment without internet access is fetching Google Fonts at build time — that's
expected and will resolve fine in a normal dev machine, CI, or Vercel.

## What changed vs. the original

| Old (TanStack Start) | New (Next.js) |
|---|---|
| `createFileRoute` + `head()` meta arrays | `export const metadata: Metadata` (per-page SEO) |
| `<Link to="...">` from `@tanstack/react-router` | `<Link href="...">` from `next/link` |
| `src/routes/*.tsx` file-based routing | `app/**/page.tsx` file-based routing |
| Root `<Nav />` rendered per-page | `Nav`, `ActRail`, `MotionRuntime` moved into `app/layout.tsx` (rendered once, globally) |
| `createServerFn()` for the contact form | a Next.js **Server Action** in `app/actions/contact.ts` |
| `server.ts` / `error-page.ts` SSR error wrapper | `app/error.tsx` + `app/global-error.tsx` (Next's built-in error boundaries) |
| No sitemap | `app/sitemap.ts` + `app/robots.ts` (generates real `/sitemap.xml`, `/robots.txt`) |
| `@/assets/x.jpg` Lovable asset imports | real files copied into `/public`, referenced by plain path string |
| Google Fonts via `<link>` tag in `<head>` | `next/font/google` (self-hosted at build time, faster + better SEO) |

Every page body, section component (`AnimatedVisuals`, `DenseSections`, `HaaSJourney`,
`ImplementationJourney`, `OptimizationJourney`), and all ~45 shadcn/ui primitives were
ported over — the actual copy and layout are the real Revlyn content, not placeholders.

## Known gaps — things to fix before shipping

1. **Partner/client logo images are missing.** These were only uploaded to me as
   Lovable's internal asset-pointer JSON files (pointing at Lovable's own CDN), not as
   real image files, so I could not download or copy them. Every one of them is left as
   a `// TODO` comment pointing at `/logos/<name>.svg` in the code:
   - `revlyn-logo`, `revlyn-wordmark`, `sparkle`, `cap`, `detrack`, `intuitive`, `irim`,
     `runo`, `statesystems`, `subcinctus`, `integrity-fire`, `datapel`, `agent-agentur`,
     `ausforming`
   - **Fix:** export the real files from Lovable (or your design source) and drop them
     into `public/logos/`. Search the codebase for `TODO: source` to find every spot.
2. **`<img>` tags haven't been converted to `next/image`.** They render fine as-is, but
   you're leaving performance/SEO (LCP, automatic `srcset`) on the table. `next build`
   flags every instance as a warning — safe to leave for now, worth batching later.
3. **Domain placeholders.** `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` all
   hardcode `https://revlyn.io` — replace with the real production domain once you have
   it.
4. **The contact form only logs to the console** (`app/actions/contact.ts`) — same as
   the original. Wire it to email/Slack/CRM before launch.
5. **zod was bumped from v3 → v4.** `@hookform/resolvers@5.x` (already pinned in the
   original `package.json`) actually requires zod v4 internally — installing the v3
   range specified in the old `package.json` throws `Invalid input: not a Zod schema` at
   build time. This is fixed here (`zod: "^4.4.3"`), just flagging it since it's a
   silent breaking change if you ever pin zod back down.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build + static export check
```

## Structure

```
app/                    routes (file-based, App Router)
  layout.tsx            root shell: fonts, <Nav/>, <ActRail/>, <MotionRuntime/>, SEO defaults
  sitemap.ts, robots.ts SEO
  actions/contact.ts    Server Action for the contact form
  */page.tsx            one per route, each with its own `metadata` export
components/
  generated/            pages that need client-side state got split into
                         Server (metadata) + Client (interactivity) pairs —
                         Next.js doesn't allow both in one file
  ui/                   shadcn/ui primitives (unchanged from the original)
  Nav.tsx, ActRail.tsx, WebGLHeroField.tsx, MotionRuntime.tsx
  AnimatedVisuals.tsx, DenseSections.tsx, HaaSJourney.tsx,
  ImplementationJourney.tsx, OptimizationJourney.tsx
lib/
  utils.ts, contact-schema.ts
hooks/
  use-mobile.tsx
public/                 real photos (hero-engine.jpg, team-grid.jpg, etc.) + favicon
```

## Why some pages are split into `page.tsx` + `components/generated/*Client.tsx`

Next.js doesn't allow a single file to both export page `metadata` (which requires a
Server Component) and use React state/effects (which requires `"use client"`). Five
pages needed both, so each was split:

- `app/page.tsx` → `components/generated/HomePageClient.tsx`
- `app/about/page.tsx` → `components/generated/AboutPageClient.tsx`
- `app/contact/page.tsx` → `components/generated/ContactPageClient.tsx`
- `app/partners/page.tsx` → `components/generated/PartnersIndexClient.tsx`
- `app/hubspot-as-a-service/page.tsx` → `components/generated/HubSpotAsAServiceClient.tsx`

The `page.tsx` in each case is a thin server wrapper: it exports `metadata` and renders
the client component. Edit content inside the `*Client.tsx` file; edit SEO in `page.tsx`.
