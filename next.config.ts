import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normalizes to /path/ everywhere; Next.js auto-redirects /path -> /path/.
  // Static file URLs (sitemap.xml, robots.txt, anything with an extension)
  // are exempt per the docs, so those are unaffected.
  trailingSlash: true,
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
