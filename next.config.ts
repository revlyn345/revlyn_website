import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote domains here if you keep images on Lovable's R2/CDN,
    // e.g. { remotePatterns: [{ hostname: "pub-xxxx.r2.dev" }] }
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
