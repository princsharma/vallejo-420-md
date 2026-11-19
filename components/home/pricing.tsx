import Link from "next/link";
import { CircleCheck, ShieldCheck } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { homePricing } from "@/lib/home-content";

export function HomePricing() {
  return (
    <section id="pricing" className="ds-section bg-warm-white">
      <div className="ds-container">
        <h2 className="ds-h2 mx-auto text-center text-balance md:whitespace-nowrap">
          <span className="text-dark-green">Medical Marijuana </span>
          <span className="text-amber">Card Cost in Vallejo</span>
        </h2>

        <div className="mt-10 grid w-full gap-5 md:grid-cols-2 md:items-stretch">
          {homePricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 md:p-8 ${
                plan.featured
                  ? "border-dark-green bg-dark-green text-white"
                  : "border-border bg-white"
              }`}
            >
              {plan.featured ? (
                <p className="absolute right-5 top-5 rounded-lg bg-amber px-2.5 py-1 text-xs font-semibold tracking-[0.1px] text-foreground">
                  Most popular
                </p>
              ) : null}
              <h3 className={`ds-h3 ${plan.featured ? "text-white" : ""}`}>{plan.name}</h3>
              <p className={`ds-small mt-2 ${plan.featured ? "text-white/75" : "text-black/90"}`}>
                {plan.blurb}
              </p>
              <p className={`mt-6 font-heading text-5xl font-semibold ${plan.featured ? "text-white" : "text-dark-green"}`}>
                {plan.price}
                <span className={`ms-2 ds-body font-medium ${plan.featured ? "text-white/75" : "text-black/90"}`}>
                  / {plan.unit}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 ds-body">
                    <CircleCheck
                      className={`mt-0.5 size-5 shrink-0 ${plan.featured ? "text-amber" : "text-primary"}`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className={`ds-small mt-6 shrink-0 ${plan.featured ? "text-white/70" : "text-black/90"}`}>
                {homePricing.feeNote}
              </p>
              <BookingButton
                size="lg"
                className="mt-6 h-12 w-full shrink-0 rounded-lg px-6 text-base font-semibold tracking-[0.1px]"
              >
                {plan.featured ? "Choose Gold" : "Choose Basic"}
              </BookingButton>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-3 md:mt-10">
          <ShieldCheck className="size-6 shrink-0 text-dark-green" strokeWidth={2} aria-hidden />
          <p className="ds-small text-center text-pretty text-black/90">
            {homePricing.transparency.prefix}
            <Link
              href="/policy/refund-policy/"
              className="font-semibold text-dark-green underline-offset-2 hover:underline"
            >
              {homePricing.transparency.linkText}
            </Link>
            {homePricing.transparency.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
