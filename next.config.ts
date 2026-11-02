import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phone/LAN testing uses the Network URL (e.g. http://192.168.x.x:3000). Next.js 16+
  // blocks /_next dev assets from other hostnames unless listed here.
  allowedDevOrigins: process.env.NEXT_ALLOWED_DEV_ORIGINS
    ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : ["192.168.1.19"],
  // Normalizes to /path/ everywhere; Next.js auto-redirects /path -> /path/.
  // Static file URLs (sitemap.xml, robots.txt, anything with an extension)
  // are exempt per the docs, so those are unaffected.
  trailingSlash: true,
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
