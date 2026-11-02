import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Monitor,
  Receipt,
  ShieldCheck,
  Video,
} from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { homeHero } from "@/lib/home-content";

const PROOF_ITEMS = [
  { label: homeHero.proofPoints[0], Icon: ShieldCheck },
  { label: homeHero.proofPoints[1], Icon: Video },
  { label: homeHero.proofPoints[2], Icon: Receipt },
] as const;

export function HomeHero() {
  return (
    <section
      id="home"
      className="ds-hero bg-gradient-to-br from-[#f8faf7] via-[#fcfdfb] to-[#e8f5ea]"
    >
      <div className="ds-container grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-14">
        <div className="min-w-0 w-full lg:max-w-none">
          <p className="ds-eyebrow">{homeHero.eyebrow}</p>
          <h1 className="ds-h1 mt-4 text-balance">
            <span className="text-dark-green">Get Your Medical </span>
            <span className="text-amber">Marijuana Card in Vallejo, CA</span>
          </h1>
          <p className="ds-lead ds-mt-after-heading text-pretty text-muted-foreground">
            {homeHero.subheading}
          </p>

          <ul className="mt-6 flex w-full flex-col gap-3 md:mt-8">
            {PROOF_ITEMS.map(({ label, Icon }) => (
              <li
                key={label}
                className="group flex items-center gap-4 rounded-2xl border border-[#e5eae5]/90 bg-white px-5 py-4 shadow-[0_4px_20px_rgb(11_93_42_/_6%)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgb(11_93_42_/_10%)]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-dark-green text-white ring-4 ring-light-green/40">
                  <Icon className="size-8" strokeWidth={1.89} aria-hidden />
                </span>
                <span className="ds-body font-semibold text-dark-green">{label}</span>
              </li>
            ))}
          </ul>

          <div className="ds-mt-after-lead flex w-full flex-col gap-3 sm:flex-row">
            <BookingButton
              size="lg"
              className="h-12 rounded-lg px-7 text-base font-semibold tracking-[0.1px] shadow-[0_4px_14px_rgb(233_162_59_/_35%)]"
            >
              Start My Evaluation
              <ArrowRight className="size-4" strokeWidth={2} />
            </BookingButton>
            <Link
              href="/#how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-primary bg-white px-7 text-base font-semibold tracking-[0.1px] text-dark-green transition-colors hover:bg-light-green"
            >
              See How It Works
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="relative w-full pb-4 pt-7 sm:pb-5 sm:pt-8 lg:justify-self-end">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/15 blur-3xl lg:-inset-8"
          />
          <div className="relative overflow-visible rounded-[2rem] shadow-[0_20px_60px_rgb(11_128_66_/_14%)]">
            <div className="overflow-hidden rounded-[2rem] border border-light-green/50 bg-white ring-1 ring-light-green/30">
              <Image
                src="/vallejoHeroImage.webp"
                alt="Patient completing an online medical marijuana evaluation by video with a California-licensed physician"
                width={1260}
                height={420}
                priority
                className="h-auto w-full min-h-[280px] object-cover sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px]"
              />
            </div>
            {/* Overlay matches image box so badges sit on the visible corners */}
            <div className="pointer-events-none absolute inset-0 overflow-visible rounded-[2rem]">
              <div className="pointer-events-none absolute right-0 top-0 z-10 translate-x-[8%] -translate-y-1/2 sm:translate-x-[6%]">
                <div className="hero-badge-float hero-badge-float-delay pointer-events-auto flex items-center gap-2.5 rounded-full border border-[#e5eae5] bg-white px-4 py-2.5 shadow-[0_8px_28px_rgb(11_93_42_/_14%)] sm:px-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-dark-green text-white">
                    <CalendarCheck className="size-[25px]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="ds-small whitespace-nowrap font-semibold text-dark-green">
                    Same-day appointments
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 z-10 max-w-[min(calc(100%-1rem),248px)] -translate-x-[6%] translate-y-[10%] sm:-translate-x-[4%] sm:translate-y-[8%]">
                <div className="hero-badge-float pointer-events-auto rounded-2xl border border-[#e5eae5] bg-white p-3.5 shadow-[0_8px_28px_rgb(11_93_42_/_14%)] sm:p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-dark-green text-white">
                      <Monitor className="size-[25px]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="ds-body font-semibold text-dark-green">100% Online Process</p>
                      <p className="ds-small mt-1 text-muted-foreground">No clinic visit necessary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
