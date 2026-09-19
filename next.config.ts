import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Featured images and inline post images come from the headless
    // WordPress install (e.g. https://cms.revlyn.io). Update the hostname
    // below to match wherever WordPress actually ends up hosted.
    remotePatterns: [
      { protocol: "https", hostname: "cms.revlyn.io" },
      // WordPress's built-in author avatar_urls point here by default
      // (Gravatar), unless a local-avatar plugin is installed.
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "www.gravatar.com" },

      // ─── Marketing page imagery (Sales Hub, Service Hub, etc.) ───
      // Unsplash CDN — free for commercial use, no attribution required.
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Freepik CDN — kept here in case we swap any hero images later.
      // Free tier requires attribution; Unsplash is preferred.
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 60 days (matches default, kept explicit
    // so the intent is clear alongside the remote hosts above).
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
};

export default nextConfig;
