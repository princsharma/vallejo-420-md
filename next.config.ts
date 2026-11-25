import type { NextConfig } from "next";
import os from "os";

/** LAN IPv4 hostnames for phone/tablet testing (Next.js matches hostname only, no port). */
function getLocalIPv4DevOrigins(): string[] {
  const hosts = new Set<string>(["127.0.0.1", "192.168.*.*", "10.*.*.*"]);
  for (const nets of Object.values(os.networkInterfaces())) {
    if (!nets) continue;
    for (const net of nets) {
      if (net.family === "IPv4" && !net.internal) {
        hosts.add(net.address);
      }
    }
  }
  return [...hosts];
}

const nextConfig: NextConfig = {
  // Phone/LAN testing uses the Network URL (e.g. http://192.168.x.x:3000). Next.js 16+
  // blocks /_next dev assets from other hostnames unless listed here (breaks FAQ, forms, HMR).
  allowedDevOrigins: process.env.NEXT_ALLOWED_DEV_ORIGINS
    ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    : getLocalIPv4DevOrigins(),
  // Canonicalizes to /path/ while allowing exact redirects to run first.
  // Proxy handles slash normalization; static file URLs remain exempt.
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react"],
  },
  async redirects() {
    const policySlugs = [
      "privacy-policy",
      "hipaa-compliance-policy",
      "consent-to-telehealth",
      "terms-of-use",
      "refund-policy",
      "shipping-policy",
      "accessibility-statement",
      "editorial-policy",
      "disclaimer",
    ];

    return [
      ...policySlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/policy/${slug}/`,
        permanent: true,
      })),
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/get-your-card",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/get-your-card",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap-feed",
      },
    ];
  },
};

export default nextConfig;
