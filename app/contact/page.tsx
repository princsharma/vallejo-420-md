import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact | Vallejo 420 MD",
  description:
    "Ready to start? Call Vallejo 420 MD today or book a consultation for your Vallejo MMJ card.",
};

export default function ContactPage() {
  return (
    <>
      <main className="flex-1 bg-background">
        {/* Hero banner */}
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative flex min-h-[26rem] items-center overflow-hidden rounded-4xl bg-accent px-8 sm:min-h-[30rem] sm:px-16">
            <div className="relative z-10 max-w-xl">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Ready to Start? Call Us Today for Your Vallejo MMJ Card!
              </h1>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="h-13 gap-2 rounded-full px-8 text-base shadow-lg shadow-primary/30"
                  render={<a href="tel:+17073835600" />}
                  nativeButton={false}
                >
                  <Phone className="size-4" />
                  Contact Us
                </Button>
              </div>
            </div>
            <Image
              src="/contact-hero-section.webp"
              alt="Vallejo 420 MD physician"
              width={929}
              height={1327}
              priority
              className="pointer-events-none absolute right-0 bottom-0 h-[92%] w-auto object-contain object-bottom"
            />
          </div>
        </section>

      </main>
      <CtaSection />
      <SiteFooter />
    </>
  );
}
