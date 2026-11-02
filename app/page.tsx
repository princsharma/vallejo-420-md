import type { Metadata } from "next";

import { HomeBenefits } from "@/components/home/benefits";
import { HomeConditions } from "@/components/home/conditions";
import { HomeEvaluation } from "@/components/home/evaluation";
import { HomeFaq } from "@/components/home/faq";
import { HomeFinalCta } from "@/components/home/final-cta";
import { HomeHero } from "@/components/home/hero";
import { HomePricing } from "@/components/home/pricing";
import { HomeProcess } from "@/components/home/process";
import { HomeReviews } from "@/components/home/reviews";
import { HomeServiceAreas } from "@/components/home/service-areas";
import { SiteFooter } from "@/components/site-footer";
import { homeFaqs, homeMeta, homeProcess } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: homeMeta.title,
  },
  description: homeMeta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
    url: homeMeta.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: homeMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeMeta.title,
    description: homeMeta.description,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: homeProcess.title,
  step: homeProcess.steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1">
        <HomeHero />
        <HomeProcess />
        <HomeEvaluation />
        <HomeBenefits />
        <HomeConditions />
        <HomePricing />
        <HomeServiceAreas />
        <HomeReviews />
        <HomeFaq />
        <HomeFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
