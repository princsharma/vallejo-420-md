import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { BRAND_DARK_HEX } from "@/lib/brand-colors";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { DeferredAnalytics } from "@/components/analytics/deferred-analytics";
import { contactInfo, siteConfig } from "@/lib/site-data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: ``,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "qA6rzXJVggMuktplzyAQ4ZbQjTnD2qGF0LzpgKjFlz8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND_DARK_HEX,
};

const medicalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  image: `${siteConfig.url}/opengraph-image`,
  priceRange: "$55-$99",
  telephone: contactInfo.phoneHref.replace("tel:", ""),
  email: contactInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactInfo.streetAddress,
    addressLocality: contactInfo.addressLocality,
    addressRegion: contactInfo.addressRegion,
    postalCode: contactInfo.postalCode,
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        geistMono.variable,
        dmSans.variable,
        sourceSerif.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <DeferredAnalytics gtmId="GTM-5WZRCTX9" gaId="G-68881RSH4R" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
