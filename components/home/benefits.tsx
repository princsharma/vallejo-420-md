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

export function HomeBenefits() {
  return (
    <section id="benefits" className="ds-section bg-warm-white">
      <div className="ds-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <h2 className="ds-h2 min-w-0 text-balance">
            <span className="text-dark-green">Benefits of a </span>
            <span className="text-amber">Medical Marijuana Card in Vallejo</span>
          </h2>
          <div className="min-w-0 lg:justify-self-end">
            <p className=" text-[18px] text-pretty text-black/90">{homeBenefits.intro}</p>
            <Link
              href="/#evaluation"
              className="ds-body mt-5 inline-flex items-center gap-2 border-b border-primary pb-0.5 font-semibold text-primary hover:border-dark-green hover:text-dark-green"
            >
              Ready to get started? Start your evaluation
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
          {/* Tax - ~2/3 width top row */}
          <article className="flex h-full flex-col rounded-2xl bg-dark-green p-6 text-white md:col-span-2 md:p-8">
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
            <div className="mt-auto pt-8">
              <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-6">
                <div>
                  <p className="ds-label text-white/60">WITH MMIC</p>
                  <p className="mt-2 font-heading text-2xl font-semibold leading-tight text-white md:text-[1.65rem]">
                    Tax exempt*
                  </p>
                </div>
                <div>
                  <p className="ds-label text-white/60">RECOMMENDATION ONLY</p>
                  <p className="mt-2 font-heading text-2xl font-semibold leading-tight text-white md:text-[1.65rem]">
                    Tax applies
                  </p>
                </div>
              </div>
              <p className="ds-small mt-5 text-right text-white/55">{homeBenefits.taxFootnote}</p>
            </div>
          </article>

          {/* Dispensary - ~1/3 width top row */}
          <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:col-span-1 md:p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-light-green text-primary">
              <CircleCheck className="size-5" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="ds-h4 ds-mt-after-heading">{dispensaryItem.title}</h3>
            <p className="ds-body mt-3 flex-1 text-pretty text-black/90">{dispensaryItem.body}</p>
            <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-light-green px-4 py-2.5 ds-small font-semibold text-dark-green">
              <CircleCheck className="size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden />
              Bring recommendation + ID
            </p>
          </article>

          {/* Online evaluations - narrow left, bottom row */}
          <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-white md:col-span-1">
            <div className="relative min-h-[200px] w-full flex-1 md:min-h-[240px]">
              <Image
                src="/media/benefits-online-evaluation.webp"
                alt="Patient completing a medical marijuana evaluation online from home"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-center"
              />
              <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg border border-border bg-white text-primary shadow-sm">
                <Video className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
            </div>
            <div className="shrink-0 p-6">
              <h3 className="ds-h4">{onlineItem.title}</h3>
              <p className="ds-body mt-3 text-pretty text-black/90">{onlineItem.body}</p>
            </div>
          </article>

          {/* Personalized assessment - wide right, bottom row */}
          <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-white p-6 md:col-span-2 md:flex-row md:items-center md:gap-8 md:p-8">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-dark-green text-white">
              <UserRound className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="ds-h4">{assessmentItem.title}</h3>
              <p className="ds-body mt-2 text-pretty text-black/90">{assessmentItem.body}</p>
            </div>
            <span className="inline-flex shrink-0 flex-col items-center justify-center gap-1.5 self-center rounded-xl border border-border bg-section-green px-5 py-4 text-center ds-label text-dark-green md:self-auto">
              <BadgeCheck className="size-5 text-primary" strokeWidth={2} aria-hidden />
              DOCTOR-LED
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
