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

const siteUrl = `${siteConfig.url}/`;
const businessId = `${siteUrl}#business`;
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Vallejo 420 MD",
      inLanguage: "en-US",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: "Medical Marijuana Card Vallejo, CA | Vallejo 420 MD",
      description:
        "Book your online medical marijuana evaluation in Vallejo, CA. Meet a California-licensed doctor by video for your 420 evaluation. Plans from $55. Get started today!",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": businessId },
      primaryImageOfPage: { "@id": `${siteUrl}#primaryimage` },
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}#primaryimage`,
      url: `${siteUrl}media/virtual-medical-cannabis-consultation.webp`,
      caption:
        "virtual medical marijuana consultation with a california-licensed doctor at vallejo 420 md",
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}#logo`,
      url: `${siteUrl}media/vallejo-420-md-logo.webp`,
      caption: "Vallejo 420 MD logo",
    },
    {
      "@type": "MedicalBusiness",
      "@id": businessId,
      name: "Vallejo 420 MD",
      url: siteUrl,
      description:
        "Vallejo 420 MD provides convenient online medical marijuana evaluations through independent, California-licensed physicians. Patients can connect with qualified doctors through private video consultations to discuss their medical history and eligibility for a medical marijuana recommendation. Vallejo 420 MD is not a pharmacy, dispensary, or cannabis retailer.",
      logo: { "@id": `${siteUrl}#logo` },
      image: `${siteUrl}media/vallejo-420-md-logo.webp`,
      telephone: "+1-707-383-5600",
      email: "contact@vallejo420md.com",
      priceRange: "55-99",
      address: {
        "@type": "PostalAddress",
        streetAddress: "630 Tennessee St Unit 2",
        addressLocality: "Vallejo",
        addressRegion: "CA",
        postalCode: "94590",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Vallejo" },
        { "@type": "City", name: "Benicia" },
        { "@type": "City", name: "Fairfield" },
        { "@type": "City", name: "American Canyon" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+1-707-383-5600",
        email: "contact@vallejo420md.com",
        areaServed: "US-CA",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.yelp.com/biz/vallejo-420-evaluations-vallejo",
        "https://www.allbud.com/marijuana-doctors/california/vallejo/vallejo-420-evaluations",
      ],
      makesOffer: [
        { "@id": `${siteUrl}#offer-basic` },
        { "@id": `${siteUrl}#offer-gold` },
      ],
      member: [
        { "@id": `${siteUrl}our-doctors/rick-rieser/#physician` },
        { "@id": `${siteUrl}our-doctors/johnathan-miller/#physician` },
      ],
    },
    {
      "@type": "Offer",
      "@id": `${siteUrl}#offer-basic`,
      name: "Basic Plan - Digital Recommendation",
      price: "55.00",
      priceCurrency: "USD",
      url: `${siteUrl}#pricing`,
      seller: { "@id": businessId },
      itemOffered: {
        "@type": "Service",
        name: "Online medical marijuana evaluation - Digital recommendation",
        serviceType: "Online medical marijuana evaluation",
        description:
          "Video evaluation with a California-licensed physician. Includes a digital recommendation letter and same-day evaluation. One-time fee, no recurring charges.",
        provider: { "@id": businessId },
        areaServed: { "@type": "State", name: "California" },
      },
    },
    {
      "@type": "Offer",
      "@id": `${siteUrl}#offer-gold`,
      name: "Gold Plan - Physical Card",
      price: "99.00",
      priceCurrency: "USD",
      url: `${siteUrl}#pricing`,
      seller: { "@id": businessId },
      itemOffered: {
        "@type": "Service",
        name: "Online medical marijuana evaluation - Physical MMIC card",
        serviceType: "Online medical marijuana evaluation",
        description:
          "Everything in the Basic Plan, plus a plastic MMIC ID card, MMIC delivered via email, and a printed copy of the recommendation. One-time fee, no recurring charges.",
        provider: { "@id": businessId },
        areaServed: { "@type": "State", name: "California" },
      },
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}our-doctors/rick-rieser/#physician`,
      name: "Rick Rieser",
      honorificPrefix: "Dr.",
      honorificSuffix: "MD",
      jobTitle: "Nuclear Medicine Physician",
      url: `${siteUrl}our-doctors/rick-rieser/`,
      memberOf: { "@id": businessId },
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}our-doctors/johnathan-miller/#physician`,
      name: "Johnathan Miller",
      honorificPrefix: "Dr.",
      honorificSuffix: "MD",
      jobTitle: "Physician",
      url: `${siteUrl}our-doctors/johnathan-miller/`,
      memberOf: { "@id": businessId },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
