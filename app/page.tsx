import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProcessSection } from "@/components/process-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

// Mirrors the exact steps ProcessSection renders, so the schema can never
// drift from what's actually visible on the page.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Medical Marijuana Card in Vallejo",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign Up and Schedule",
      text: "Sign up easily, fill out a quick form, and schedule your appointment at a time that works best for you.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Connect with Our MMJ Doctor",
      text: "Join a video call with a licensed medical marijuana doctor who will evaluate your condition with care and expertise.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Get Prescription Letter",
      text: "The doctor will issue a prescription letter, allowing you to immediately access medical marijuana from a state-approved dispensary.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <TestimonialsSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
