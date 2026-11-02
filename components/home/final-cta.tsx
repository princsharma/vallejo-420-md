import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { homeFinalCta } from "@/lib/home-content";

export function HomeFinalCta() {
  return (
    <section id="apply" className="ds-section bg-primary">
      <div className="ds-container">
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="ds-h2 text-white">{homeFinalCta.title}</h2>
        <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">
          Book your appointment today. The doctor decides eligibility. If you do not qualify, our{" "}
          <Link href="/refund-policy/" className="underline underline-offset-3">
            refund policy
          </Link>{" "}
          provides a 100% refund of the evaluation fee.
        </p>
        <div className="mt-8">
          <BookingButton size="lg" className="h-12 rounded-lg px-6 text-base font-semibold">
            Book My Appointment
            <ArrowRight className="size-4" strokeWidth={2} />
          </BookingButton>
        </div>
        </div>
      </div>
    </section>
  );
}
