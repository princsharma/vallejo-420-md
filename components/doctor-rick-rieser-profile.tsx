import type { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink, Phone, Stethoscope } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/lib/doctors";
import type { DoctorExtendedProfile } from "@/lib/doctor-profiles/rick-rieser";
import {
  DISCUSSED_CONDITIONS,
  DOCTORS_PAGE_HERO_BG,
} from "@/lib/doctors-hub-content";
import { INTERACTIVE_CARD_HOVER } from "@/lib/interactive-card-hover";
import { contactInfo } from "@/lib/site-data";

export function DoctorRickRieserProfileView({
  doctor,
  profile,
  breadcrumbs,
}: {
  doctor: Doctor;
  profile: DoctorExtendedProfile;
  breadcrumbs?: ReactNode;
}) {
  return (
    <>
      <section className={`${DOCTORS_PAGE_HERO_BG} pb-12 md:pb-16 lg:pb-20 pt-3 md:pt-4`}>
        <div className="ds-container">
          {breadcrumbs}
          <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
            <DoctorPhotoPlaceholder label={doctor.name} photoSrc={doctor.photoSrc} />
            <div>
              <h1 className="ds-h1 text-balance text-primary">
                <span className="text-dark-green">Dr. Rick Rieser,</span>
                <span className="text-amber"> MD</span>
              </h1>
              <p className="ds-lead mt-3 text-pretty text-dark-green">
                {profile.tagline}
              </p>
              <div className="ds-body mt-5 space-y-4 text-pretty text-black/90">
                {profile.heroIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <BookingButton
                  size="lg"
                  className="h-12 rounded-lg px-6 text-base font-semibold"
                >
                  {profile.heroCtaLabel}
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="ds-h2 text-balance text-center">
              <span className="text-dark-green">Medical </span>
              <span className="text-amber">Credentials</span>
            </h2>
            <p className="ds-lead mt-4 text-pretty text-black/90 text-center">
              {profile.credentialsIntro}
            </p>
          </div>
          <article className="mx-auto mt-8 w-full max-w-xl border border-primary/25 rounded-xl p-5 shadow-[0_12px_40px_rgb(0_0_0_/_18%)]">
            <dl className="grid list-none gap-2.5 sm:grid-cols-2">
              {profile.credentialItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/25 bg-[#CFEED2] px-3 py-3 text-center transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-light-green hover:shadow-[0_8px_24px_rgb(11_93_42_/_18%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:px-3.5 md:py-3.5"
                >
                  <dt className="ds-body font-semibold text-dark-green">
                    {item.label}
                  </dt>
                  <dd className="ds-small mt-1.5 font-semibold leading-snug text-dark-green">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
          <div className="mx-auto mt-5 flex w-full max-w-3xl justify-center">
            <Button
              size="lg"
              variant="outline"
              className="h-11 gap-2 rounded-lg border-white/25 bg-white px-5 text-base font-semibold text-dark-green hover:bg-white/95"
              render={
                <a
                  href={profile.npiRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              {profile.npiRegistryLabel}
              <ExternalLink className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      <section className="ds-section bg-dark-green">
        <div className="ds-container">
          <h2 className="ds-h2 text-balance text-center">
            <span className="text-white">Education & Professional </span>
            <span className="text-amber">Qualifications</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading max-w-2xl text-pretty text-white text-center mx-auto">
            Dr. Rick Rieser has a medical education and professional background
            in Nuclear Medicine.
          </p>
          <ul className="mt-8 grid list-none gap-5 md:grid-cols-2">
            {profile.education.map((item) => (
              <li
                key={item.title}
                className={`rounded-2xl border border-border bg-light-green p-6 md:p-8 ${INTERACTIVE_CARD_HOVER}`}
              >
                <h3 className="ds-h4 text-balance">{item.title}</h3>
                <p className="ds-label mt-2 text-amber">{item.subtitle}</p>
                <p className="ds-body mt-3 text-pretty text-black/90">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container max-w-3xl">
          <h2 className="ds-h2 text-balance text-center">
            <span className="text-dark-green">About </span>
            <span className="text-amber">Dr. Rick Rieser</span>
          </h2>
          <div className="ds-lead mt-5 text-pretty text-center text-black/90">
            {/* {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))} */}
            <p>{profile.aboutParagraphs}</p>
          </div>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container max-w-3xl">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="text-dark-green">Medical Cannabis Evaluations at </span>
            <span className="text-amber">Vallejo 420 MD</span>
          </h2>
          <div className="ds-lead mt-6 space-y-4 text-pretty text-black/90 text-center mx-auto">
            {/* {profile.evaluationsParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))} */}
            <p>{profile.evaluationsParagraphs}</p>
          </div>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container">
          <h2 className="ds-h2 mx-auto max-w-3xl text-center text-balance">
            <span className="text-dark-green">Conditions Reviewed </span>
            <span className="text-amber">During Medical Cannabis Evaluations</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading mx-auto max-w-3xl text-center text-pretty text-black/90">
            {profile.conditionsIntro}
          </p>
          {/* <p className="ds-lead mt-10 text-center font-semibold text-dark-green">
            Conditions patients often discuss
          </p> */}
          <ul className="mt-5 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.conditions.map((condition) => {
              const matchingCondition = DISCUSSED_CONDITIONS.find(
                ({ label }) => label === condition,
              );
              const Icon = matchingCondition?.icon ?? Stethoscope;
              return (
              <li
                key={condition}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-green text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    className="size-5 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <span className="ds-body font-semibold text-dark-green">
                  {condition}
                </span>
              </li>
              );
            })}
          </ul>
          <p className="ds-body mt-6 text-center text-black/90">
            {profile.conditionsDisclaimer}
          </p>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container">
          <h2 className="ds-h2 max-w-4xl mx-auto text-balance text-center">
            <span className="text-dark-green">A Patient-Centered Approach to </span>
            <span className="text-amber">Medical Evaluations</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading max-w-3xl mx-auto text-center text-pretty text-black/90">
            {profile.approachIntro}
          </p>
          <ul className="mt-8 grid list-none gap-5 md:grid-cols-2">
            {profile.approachItems.map((item) => (
              <li
                key={item.title}
                className={`rounded-2xl border border-border bg-light-green p-6 md:p-8 ${INTERACTIVE_CARD_HOVER}`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-amber text-white">
                  <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="ds-h4 mt-5">{item.title}</h3>
                <p className="ds-body mt-3 text-pretty text-black/90">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ds-section bg-dark-green">
        <div className="ds-container max-w-3xl">
          <h2 className="ds-h2 text-balance mx-auto text-center ">
            <span className="text-white">How to Schedule an </span>
            <span className="text-amber">Online Evaluation</span>
          </h2>
          <p className="ds-lead mt-4 mx-auto text-center text-white max-w-3xl">
            Getting started with Vallejo 420 MD involves three simple steps.
          </p>
          <ol className="mt-8 list-none space-y-4">
            {profile.scheduleSteps.map((step) => (
              <li
                key={step.number}
                className={`flex gap-4 rounded-2xl border border-border bg-light-green p-5 md:p-6 ${INTERACTIVE_CARD_HOVER}`}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber text-sm font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="ds-h4">{step.title}</h3>
                  <p className="ds-body mt-2 text-pretty text-black/90">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex w-full justify-center">
            <BookingButton
              size="lg"
              className="h-12 rounded-lg px-6 text-base font-semibold"
            >
              {profile.scheduleCtaLabel}
            </BookingButton>
          </div>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container max-w-3xl">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="text-dark-green">Frequently Asked </span>
            <span className="text-amber">Questions</span>
          </h2>
          <Accordion
            className="mx-auto mt-8 w-full max-w-4xl gap-4"
            defaultValue={["dr-faq-0"]}
            keepMounted
          >
            {profile.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`dr-faq-${index}`}
                className={`rounded-2xl border border-border bg-warm-white px-4 shadow-sm ${INTERACTIVE_CARD_HOVER}`}
              >
                <AccordionTrigger className="items-center gap-4 rounded-xl px-2 py-5 text-left ds-faq font-bold text-dark-green hover:no-underline md:py-6 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-dark-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="ds-body px-2 pb-5 pt-0 text-left text-black/90 md:pb-6">
                  {faq.question.includes("schedule an appointment") ? (
                    <p>
                      You can begin through the online application process at
                      Vallejo 420 MD or contact the team at{" "}
                      <a
                        href={contactInfo.phoneHref}
                        className="font-semibold text-dark-green underline-offset-2 hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                      .
                    </p>
                  ) : faq.question.includes("What conditions") ? (
                    <p>
                      Medical history involving chronic pain, arthritis, cancer,
                      PTSD, and{" "}
                      <Link
                        href="/#conditions"
                        className="font-semibold text-dark-green underline-offset-2 hover:underline"
                      >
                        other qualifying conditions
                      </Link>{" "}
                      may be reviewed. The physician determines eligibility based
                      on individual medical circumstances.
                    </p>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-dark-green pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="ds-container">
        
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,color-mix(in_oklch,var(--primary-foreground),transparent_85%),transparent)]"
              aria-hidden
            />
            <h2 className="relative ds-h2 text-balance text-white mx-auto text-center">
              {profile.closingTitle.endsWith(" Today") ? (
                <>
                  {profile.closingTitle.slice(0, -6)}
                  <span className="text-amber"> Today</span>
                </>
              ) : (
                profile.closingTitle
              )}
            </h2>
            <div className="relative mx-auto mt-4 max-w-2xl space-y-3 text-pretty ds-lead text-primary-foreground/85 mx-auto text-center">
              {/* {profile.closingParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))} */}
              <p>{profile.closingParagraphs}</p>
            </div>
            <div className="relative mt-8 flex flex-col  items-center justify-center gap-3 sm:flex-row">
              <BookingButton
                size="lg"
                className="h-12 w-full rounded-lg bg-amber px-6 text-base font-semibold text-white shadow-lg hover:bg-[#d4922f] sm:w-auto"
              >
                {profile.closingCtaLabel}
              </BookingButton>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full gap-2 rounded-lg border-primary-foreground/30 bg-transparent px-6 text-base font-semibold text-primary-foreground  sm:w-auto"
                render={<a href={contactInfo.phoneHref} />}
                nativeButton={false}
              >
                <Phone className="size-4" aria-hidden />
                {contactInfo.phone}
              </Button>
            </div>
          
        </div>
      </section>
    </>
  );
}
