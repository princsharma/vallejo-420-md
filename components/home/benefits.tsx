import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  CreditCard,
  UserRound,
  Video,
} from "lucide-react";

import { homeBenefits } from "@/lib/home-content";

const [taxItem, dispensaryItem, onlineItem, assessmentItem] = homeBenefits.items;

const benefitPillBadgeClassName =
  "inline-flex w-fit items-center gap-2 rounded-full bg-light-green px-4 py-2.5 ds-small font-semibold text-dark-green";

const benefitPillIconClassName = "size-4 shrink-0 text-primary";

export function HomeBenefits() {
  return (
    <section id="benefits" className="ds-section bg-warm-white">
      <div className="ds-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <h2 className="ds-h2 min-w-0 text-balance text-center lg:text-left">
            <span className="text-dark-green">Benefits of a </span>
            <span className="text-amber">Medical Marijuana Card in Vallejo</span>
          </h2>
          <div className="min-w-0 text-center lg:justify-self-end lg:text-left">
            <p className="mx-auto max-w-xl text-[18px] text-pretty text-black/90 lg:mx-0 lg:max-w-none">
              {homeBenefits.intro}
            </p>
            <Link
              href="/#evaluation"
              className="ds-body mt-5 inline-flex items-center gap-2 border-b border-primary pb-0.5 font-semibold text-primary hover:border-dark-green hover:text-dark-green"
            >
              Ready to get started? Start your evaluation
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start md:gap-6 lg:gap-5">
          {/* Tax - ~2/3 width top row */}
          <article className="flex flex-col rounded-2xl bg-dark-green p-6 text-white md:col-span-2 md:p-7 lg:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white">
                <CreditCard className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 ds-label tracking-wide text-white">
                TAX DIFFERENCE
              </span>
            </div>
            <h3 className="ds-h3 mt-6 text-white">{homeBenefits.taxHeadline}</h3>
            <p className="ds-body mt-3 text-pretty text-white/85">{taxItem.body}</p>
            <div className="mt-5 border-t border-white/20 pt-5 md:mt-6 md:pt-6">
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase leading-4 tracking-wide text-white/60 md:text-sm md:tracking-[0.4px]">
                    WITH MMIC
                  </p>
                  <p className="mt-1.5 font-heading text-lg font-semibold leading-snug text-white md:mt-2 md:text-[1.65rem] md:leading-tight lg:text-2xl">
                    Tax exempt*
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase leading-4 tracking-wide text-white/60 md:text-sm md:tracking-[0.4px]">
                    RECOMMENDATION ONLY
                  </p>
                  <p className="mt-1.5 font-heading text-lg font-semibold leading-snug text-white md:mt-2 md:text-[1.65rem] md:leading-tight lg:text-2xl">
                    Tax applies
                  </p>
                </div>
              </div>
              <p className="ds-small mt-4 mx-auto text-center text-white/55 md:mt-5 md:text-center sm:text-center">{homeBenefits.taxFootnote}</p>
            </div>
          </article>

          {/* Dispensary - ~1/3 width top row */}
          <article className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:col-span-1 md:p-7 lg:p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-light-green text-primary">
              <CircleCheck className="size-5" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="ds-h4 ds-mt-after-heading">{dispensaryItem.title}</h3>
            <p className="ds-body mt-3 text-pretty text-black/90">{dispensaryItem.body}</p>
            <span
              className={`mt-4 md:mt-4 md:max-lg:mr-auto md:max-lg:self-start md:max-lg:items-start md:max-lg:gap-2.5 md:max-lg:whitespace-normal max-md:whitespace-nowrap lg:whitespace-nowrap ${benefitPillBadgeClassName}`}
            >
              <CircleCheck
                className={`${benefitPillIconClassName} md:max-lg:mt-0.5`}
                strokeWidth={2}
                aria-hidden
              />
              <span className="leading-snug">
                <span className="max-md:inline lg:inline md:max-lg:hidden">
                  Bring recommendation + ID
                </span>
                <span className="hidden text-left md:max-lg:block">
                  <span className="block">Bring recommendation</span>
                  <span className="block">+ ID</span>
                </span>
              </span>
            </span>
          </article>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch md:gap-6 lg:mt-5 lg:gap-5">
          {/* Online evaluations - narrow left, bottom row */}
          <article className="flex h-full min-h-0 flex-col rounded-2xl border border-border bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:col-span-1 md:p-7 lg:p-8">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-light-green text-primary">
              <Video className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="ds-h4 ds-mt-after-heading">{onlineItem.title}</h3>
            <div className="mt-3 flex flex-1 flex-col gap-3">
              <p className="ds-body text-pretty text-black/90">{onlineItem.body}</p>
              {"bodyExtra" in onlineItem && onlineItem.bodyExtra ? (
                <p className="ds-body text-pretty text-black/90">{onlineItem.bodyExtra}</p>
              ) : null}
            </div>
          </article>

          {/* Personalized assessment - wide right, bottom row */}
          <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:col-span-2">
            <div className="relative h-[200px] w-full shrink-0 md:min-h-[220px] md:flex-1 md:shrink lg:h-[260px] lg:min-h-0 lg:flex-none">
              <Image
                src="/media/medical marijuana leaf.webp"
                alt="Vallejo 420 MD team member ready to help with your doctor-led medical assessment"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover object-center"
              />
              <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg border border-border bg-white text-primary shadow-sm">
                <UserRound className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
            </div>
            <div className="flex shrink-0 flex-col p-6 md:p-7 lg:min-h-0 lg:flex-1">
              <h3 className="ds-h4">{assessmentItem.title}</h3>
              <p className="ds-body mt-3 text-pretty text-black/90 lg:flex-1">{assessmentItem.body}</p>
              <div className="mt-4 flex shrink-0 justify-center md:mt-4 lg:mt-auto lg:justify-start lg:pt-5">
                <span
                  className={`${benefitPillBadgeClassName} whitespace-nowrap`}
                >
                  <BadgeCheck className={benefitPillIconClassName} strokeWidth={2} aria-hidden />
                  DOCTOR-LED
                </span>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
}
