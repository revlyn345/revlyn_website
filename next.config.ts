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
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
