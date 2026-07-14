import { BookingButton } from "@/components/booking-dialog";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-primary px-8 py-16 text-center shadow-xl sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,color-mix(in_oklch,var(--primary-foreground),transparent_85%),transparent)]"
            aria-hidden
          />
          <h2 className="relative text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Start Your 420 Consultation Now!
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80">
            Book your appointment today and talk to a licensed doctor within
            24&ndash;48 hours, with a 100% money-back guarantee.
          </p>
          <div className="relative mt-8">
            <BookingButton
              size="lg"
              variant="secondary"
              className="h-13 rounded-full px-8 text-base shadow-lg"
            >
              Start Your Application
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
