# Revlyn website: go-live guide

## How the pieces fit
- **revlyn.io** – this site (Lovable / TanStack Start), hosted on Vercel.
- **cms.revlyn.io** – WordPress on Hostinger. Headless: nobody reads posts there.
  Posts are shown at **revlyn.io/blog/<slug>** by `src/routes/blog/$slug.tsx`.
- **revlyn-content-pipeline** – GitHub Actions that draft posts into WordPress.
  It links to `https://revlyn.io/blog/<slug>`, which this site keeps. No change needed.

## What is new in this version
- WordPress blog: `/blog` lists every published post, `/blog/<slug>` renders it
  (table of contents, FAQ accordions, author name override, BlogPosting schema).
  New or edited posts appear within about a minute. No redeploy needed.
- Live `/sitemap.xml`: site pages + every published WordPress post.
- 301 redirects from the old Next.js URLs (`src/lib/redirects.ts`), applied on Vercel.
- Google Analytics (G-DHW6KDE2R1) and HubSpot tracking (50824762) carried over.
- HubSpot Gold badge copied from the old repo. The Bitscale logo is still missing:
  save it as `public/images/partners/bitscale-logo.svg`.

## Settings
- Vercel environment variable (optional, this is the default):
  `WORDPRESS_API_URL = https://cms.revlyn.io`
- `vercel.json` already sets framework "Other" and `npm run build`.

## Old URL redirects (check these)
| Old | New |
|---|---|
| /hubspot-implementation (and /marketing-hub, /sales-hub, /service-hub, /content-hub) | /hubspot/implementation |
| /hubspot-as-a-service, /hubspot-optimization | /hubspot/managed |
| /hubspot-audit | /revops/audit |
| /partners, /partners/hubspot, /partners/bitscale | /partnerships, /partnerships/hubspot, /partnerships/bitscale |
| /work, /work/* | /case-studies |
| /use-cases, /use-cases/saas | /industries, /industries/b2b-saas |
| /faqs | /faq |
| /cookies, /security | /privacy |
| /auto-seo-agent | /services |

Same URL on both sites (no redirect needed): /, /about, /contact, /blog, /blog/<slug>, /privacy, /terms.
