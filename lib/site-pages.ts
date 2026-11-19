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
    path: "/about-us/",
    description:
      "Vallejo 420 MD helps Vallejo residents obtain a medical marijuana evaluation from a California-licensed physician through an online service based at 630 Tennessee St.",
    inSitemap: true,
  },
  {
    label: "Our Doctors",
    path: "/our-doctors/",
    description:
      "Meet California-licensed physicians who provide medical marijuana evaluations by secure video for Vallejo and Solano County patients.",
    inSitemap: true,
  },
  {
    label: "Editorial Team",
    path: "/editorial-team/",
    description:
      "Meet the writers and medical reviewers behind Vallejo 420 MD's guides on medical cannabis eligibility, evaluations, and California law.",
    inSitemap: true,
  },
  {
    label: "Dr. Rick Rieser",
    path: "/our-doctors/rick-rieser/",
    description:
      "Dr. Rick Rieser, MD. California-licensed Nuclear Medicine physician (license G55156) providing medical cannabis evaluations through Vallejo 420 MD.",
    inSitemap: true,
  },
  {
    label: "Dr. Johnathan Miller",
    path: "/our-doctors/johnathan-miller/",
    description:
      "Dr. Johnathan Miller, MD. Columbia MD (2018), orthopaedic surgery training, and medical cannabis evaluations via Vallejo 420 MD's online platform.",
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
    label: "Policies & Compliance",
    path: "/policy/",
    description:
      "Hub for privacy, HIPAA, telehealth consent, terms, refunds, shipping, accessibility, editorial standards, and the medical disclaimer.",
    inSitemap: true,
  },
  {
    label: "Privacy Policy",
    path: "/policy/privacy-policy/",
    description:
      "How Vallejo 420 MD collects, uses, and protects personal and health data during medical marijuana evaluations in Vallejo, CA.",
    inSitemap: true,
  },
  {
    label: "Terms of Use",
    path: "/policy/terms-of-use/",
    description:
      "The terms that govern your use of Vallejo 420 MD's website and medical marijuana evaluation services in Vallejo, CA.",
    inSitemap: true,
  },
  {
    label: "HIPAA Compliance",
    path: "/policy/hipaa-compliance-policy/",
    description:
      "How Vallejo 420 MD protects patient health information under HIPAA during telehealth medical marijuana evaluations in Vallejo, CA.",
    inSitemap: true,
  },
  {
    label: "Consent for Telehealth",
    path: "/policy/consent-to-telehealth/",
    description:
      "What to expect from telehealth visits with Vallejo 420 MD, including how consultations work, your rights, and the risks and benefits involved.",
    inSitemap: true,
  },
  {
    label: "Refund Policy",
    path: "/policy/refund-policy/",
    description:
      "Vallejo 420 MD's refund policy for medical marijuana evaluations, including eligibility, missed appointment fees, and how to request a refund.",
    inSitemap: true,
  },
  {
    label: "Accessibility Statement",
    path: "/policy/accessibility-statement/",
    description:
      "How Vallejo 420 MD works to keep its website and telehealth services accessible to all users, including people with disabilities.",
    inSitemap: true,
  },
  {
    label: "Editorial Policy",
    path: "/policy/editorial-policy/",
    description:
      "How Vallejo 420 MD researches, fact-checks, and reviews medical marijuana content to keep it accurate, ethical, and useful.",
    inSitemap: true,
  },
  {
    label: "Disclaimer",
    path: "/policy/disclaimer/",
    description:
      "Vallejo 420 MD's disclaimer on medical information, our platform's role, and what our services are and aren't intended for in Vallejo, CA.",
    inSitemap: true,
  },
  {
    label: "Shipping Policy",
    path: "/policy/shipping-policy/",
    description:
      "How Vallejo 420 MD ships your medical marijuana card, including delivery timelines, tracking, and what to do if there's a problem.",
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
