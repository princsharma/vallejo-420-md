import type { Metadata } from "next";

import { getMetadataBaseUrl } from "@/lib/metadata-base";
import { siteConfig } from "@/lib/site-data";

const POLICY_OG_IMAGE_PATH = "/media/policy-opengraph-card.webp";
const POLICY_OG_WIDTH = 1200;
const POLICY_OG_HEIGHT = 630;

type PolicyMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
};

export function createPolicyMetadata({
  title,
  description,
  canonical,
}: PolicyMetadataOptions): Metadata {
  const imageAlt = title;
  const imageUrl = new URL(POLICY_OG_IMAGE_PATH, getMetadataBaseUrl()).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: new URL(canonical, getMetadataBaseUrl()).toString(),
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: POLICY_OG_WIDTH,
          height: POLICY_OG_HEIGHT,
          alt: imageAlt,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}