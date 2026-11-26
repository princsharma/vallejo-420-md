import { siteConfig } from "@/lib/site-data";

/** Resolves the site origin for canonical/OG absolute URLs (localhost in dev). */
export function getMetadataBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV === "development") {
    const port = process.env.PORT ?? "3001";
    return `http://localhost:${port}`;
  }

  return siteConfig.url.replace(/\/$/, "");
}