import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalAuthorProfileView } from "@/components/medical-author-profile-view";
import { SiteFooter } from "@/components/site-footer";
import { octaviaWycheProfile } from "@/lib/medical-author-profiles/octavia-wyche";
import {
  medicalAuthorProfilePath,
  OCTAVIA_WYCHE_SLUG,
} from "@/lib/medical-authors";
import { getMetadataBaseUrl } from "@/lib/metadata-base";
import { siteConfig } from "@/lib/site-data";

const profile = octaviaWycheProfile;
const canonicalPath = medicalAuthorProfilePath(OCTAVIA_WYCHE_SLUG);

const authorOgImageUrl = new URL(profile.photoSrc, getMetadataBaseUrl()).toString();

export const metadata: Metadata = {
  title: {
    absolute: profile.metaTitle,
  },
  description: profile.metaDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: profile.metaTitle,
    description: profile.metaDescription,
    url: new URL(canonicalPath, getMetadataBaseUrl()).toString(),
    siteName: siteConfig.name,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: authorOgImageUrl,
        secureUrl: authorOgImageUrl,
        width: 1200,
        height: 630,
        alt: profile.metaTitle,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.metaTitle,
    description: profile.metaDescription,
    images: [authorOgImageUrl],
  },
};

export default function OctaviaWycheAuthorPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1 bg-warm-white">
        <MedicalAuthorProfileView
          profile={profile}
          breadcrumbs={
            <Breadcrumbs
              alignWithPage
              compact
              className="pt-0 pb-0"
              items={[
                { label: "Editorial Team", href: "/editorial-team/" },
                { label: profile.name },
              ]}
            />
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}