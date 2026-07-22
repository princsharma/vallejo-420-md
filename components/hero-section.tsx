import Image from "next/image";
import { Leaf } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-accent">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          {/* Content: heading/copy left, doctor photo right */}
          <div className="grid items-center gap-8 px-6 pb-10 pt-2 sm:px-10 sm:pb-14 sm:pt-4 lg:grid-cols-2 lg:gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-[3.4rem]">
                Get Your Medical Marijuana Card in Vallejo Today!
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
                Get fast, hassle-free medical marijuana approval online with
                same-day certification from licensed doctors in Vallejo.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <BookingButton
                  size="lg"
                  className="h-13 w-full rounded-full px-8 text-base shadow-lg shadow-primary/30 sm:w-auto"
                >
                  Apply Your Card Now!
                </BookingButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--primary),transparent_85%),transparent_60%)]"
              />
              <div className="relative aspect-[473/665] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/15 via-secondary to-primary/25">
                <Image
                  src="/hero-section.webp"
                  alt="Licensed physician for medical marijuana evaluations in Vallejo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 90vw"
                  className="object-contain"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border/60 bg-card/95 p-4 text-center shadow-lg backdrop-blur">
                <Leaf className="mx-auto mb-1 size-4 text-primary/50" />
                <p className="text-pretty text-xs italic leading-relaxed text-muted-foreground">
                  &ldquo;As a trusted physician, I ensure safe, legal, and
                  stress-free medical marijuana evaluations for your
                  well-being.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
