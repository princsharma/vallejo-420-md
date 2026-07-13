import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProcessSection } from "@/components/process-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
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
