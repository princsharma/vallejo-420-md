import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  FileText,
  Lock,
  RotateCcw,
  Scale,
  Shield,
  ShieldAlert,
  Truck,
  Video,
  type LucideIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Policies & Compliance | Vallejo 420 MD",
  description:
    "Read Vallejo 420 MD’s privacy, HIPAA, telehealth consent, refund, shipping, and accessibility policies, plus our terms of use and medical disclaimer.",
  alternates: {
    canonical: "/policy/",
  },
};

const POLICIES: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your personal and health information.",
    href: "/policy/privacy-policy/",
    icon: Shield,
  },
  {
    title: "HIPAA Compliance",
    description:
      "Our standards for safeguarding patient health information in telehealth care.",
    href: "/policy/hipaa-compliance-policy/",
    icon: Lock,
  },
  {
    title: "Consent for Telehealth",
    description:
      "What to know before joining a remote evaluation with a California-licensed physician from your home in Vallejo.",
    href: "/policy/consent-to-telehealth/",
    icon: Video,
  },
  {
    title: "Terms of Use",
    description:
      "Rules for using our platform, eligibility, liability, and California law.",
    href: "/policy/terms-of-use/",
    icon: Scale,
  },
  {
    title: "Refund Policy",
    description:
      "When you qualify for a refund and how to request one after an evaluation.",
    href: "/policy/refund-policy/",
    icon: RotateCcw,
  },
  {
    title: "Shipping Policy",
    description:
      "Processing times, tracking, and delivery details for physical medical marijuana cards mailed to Vallejo addresses.",
    href: "/policy/shipping-policy/",
    icon: Truck,
  },
  {
    title: "Accessibility Statement",
    description:
      "Our commitment to WCAG standards so every patient can use this site.",
    href: "/policy/accessibility-statement/",
    icon: Accessibility,
  },
  {
    title: "Editorial Policy",
    description:
      "How we research, review, and keep medical marijuana content accurate for Vallejo patients.",
    href: "/policy/editorial-policy/",
    icon: FileText,
  },
  {
    title: "Disclaimer",
    description:
      "Important limits on medical advice and the role of our platform.",
    href: "/policy/disclaimer/",
    icon: ShieldAlert,
  },
];

export default function PolicyHubPage() {
  return (
    <>
      <Breadcrumbs
       items={[{ label: "Policies & Compliance" }]} className="bg-white" />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-white">
          <div className="ds-container py-12 md:py-16">
            {/* <p className="ds-eyebrow">Patient resources</p> */}
            <h1 className="ds-h1 mt-3 max-w-3xl text-balance text-center mx-auto text-primary">
              Policies & Compliance
            </h1>
            <p className="ds-lead mt-4 max-w-3xl text-pretty text-black/90 text-center mx-auto">
              Review the documents that explain how we protect your information,
              deliver telehealth care to patients in Vallejo and Solano County,
              and operate Medical Marijuana Card Vallejo.
            </p>
          </div>
        </section>

        <section className="ds-section">
          <div className="ds-container">
            <ul className="grid list-none gap-5 md:grid-cols-2 lg:grid-cols-3">
              {POLICIES.map((policy) => (
                <li key={policy.href} className="min-w-0">
                  <Link
                    href={policy.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-colors hover:border-primary/40 md:p-8"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-amber text-white">
                      <policy.icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h2 className="ds-h4 mt-5">{policy.title}</h2>
                    <p className="ds-body mt-3 flex-1 text-pretty text-black/90">
                      {policy.description}
                    </p>
                    <span className="ds-small mt-6 inline-flex items-center gap-2 font-semibold text-primary group-hover:text-dark-green">
                      Read policy
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center md:mt-8">
              <div className="flex w-full max-w-3xl flex-col items-center rounded-3xl border border-border bg-white px-5 py-4 text-center sm:px-8 sm:py-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-amber text-white">
                  <ShieldAlert className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="ds-label mt-3 text-foreground">Medical Disclaimer</h2>
                <p className="ds-small mt-2 max-w-2xl text-pretty text-black/90">
                  Medical Marijuana Card Vallejo connects patients in Vallejo
                  and throughout California with state-licensed physicians for
                  medical cannabis evaluations in accordance with applicable
                  state law. Content on this site is for informational purposes
                  only and does not constitute medical advice. Approval is
                  determined solely by the evaluating physician. Medical
                  Marijuana Card Vallejo does not provide or sell cannabis
                  products.
                </p>
              
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
