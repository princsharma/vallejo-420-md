import { siteConfig } from "@/lib/site-data";

export type SitePage = {
  label: string;
  /** Path with trailing slash; may include a `#fragment`. */
  path: string;
  description: string;
  /** Included in the XML sitemap when true. */
  inSitemap: boolean;
};

/**
 * Canonical list of public pages. Sitemap and llms.txt both read from here
 * so new routes only need one update.
 */
export const sitePages: SitePage[] = [
  {
    label: "Home",
    path: "/",
    description:
      "Local Vallejo landing page for online medical marijuana card evaluations, same-day certification, and licensed physician access.",
    inSitemap: true,
  },
  {
    label: "Get Your Card",
    path: "/get-your-card/",
    description:
      "Online Vallejo MMJ card application with same-day approval, secure video evaluations, and plan options from $55 to $199.",
    inSitemap: true,
  },
  {
    label: "About Us",
    path: "/about/",
    description:
      "Company overview covering licensed doctors, confidential HIPAA-aligned evaluations, and Vallejo-focused medical marijuana care.",
    inSitemap: true,
  },
  {
    label: "Contact Us",
    path: "/contact/",
    description:
      "Phone, email, appointment booking, and Vallejo clinic address for medical marijuana card consultations.",
    inSitemap: true,
  },
  {
    label: "How It Works",
    path: "/#process",
    description:
      "Step-by-step patient journey: online signup and scheduling, video consultation with a licensed MMJ doctor, then same-day recommendation letter for dispensary access.",
    inSitemap: false,
  },
  {
    label: "Medical Marijuana Card Plans",
    path: "/get-your-card/#pricing",
    description:
      "Essential ($55), Enhanced ($99), and Premium ($199) plans covering digital recommendations, mailed hard copies, MMJ ID cards, and cultivation-related protections.",
    inSitemap: false,
  },
];

/** Build an absolute URL without mangling hash fragments when trailing slashes are used. */
export function absoluteUrl(path: string): string {
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  return `${siteConfig.url}${pathname}${hash}`;
}

export function sitemapPaths(): string[] {
  return sitePages.filter((page) => page.inSitemap).map((page) => page.path);
}

export function pageByPath(path: string): SitePage | undefined {
  return sitePages.find((page) => page.path === path);
}
