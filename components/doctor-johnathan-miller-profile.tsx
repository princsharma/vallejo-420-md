import type { ReactNode } from "react";
import Link from "next/link";

import { BookingButton } from "@/components/booking-dialog";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Doctor } from "@/lib/doctors";
import type { MillerExtendedProfile } from "@/lib/doctor-profiles/johnathan-miller";
import {
  DISCUSSED_CONDITIONS,
  DISCUSSED_CONDITIONS_DISCLAIMER,
  DOCTORS_PAGE_HERO_BG,
} from "@/lib/doctors-hub-content";
import { INTERACTIVE_CARD_HOVER } from "@/lib/interactive-card-hover";

export function DoctorJohnathanMillerProfileView({
  doctor,
  profile,
  breadcrumbs,
}: {
  doctor: Doctor;
  profile: MillerExtendedProfile;
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
                <span className="text-dark-green">Meet Dr. Johnathan Miller,</span>
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
        <div className="ds-container max-w-3xl mx-auto text-center">
          <h2 className="ds-h2 text-balance">
            <span className="text-dark-green">Medical Background and </span>
            <span className="text-amber">Credentials</span>
          </h2>
          <p className="ds-body mt-4 text-pretty text-black/90 text-center">
            {profile.credentialsIntro}
          </p>
          <dl className="mx-auto mt-6 w-full max-w-4xl divide-y divide-border rounded-2xl border border-border bg-white">
            {profile.credentialLines.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start sm:gap-6"
              >
                <dt className="ds-label shrink-0 text-black/90">
                  {item.label}
                </dt>
                <dd className="text-sm text-pretty font-semibold text-dark-green">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="ds-body mt-6 text-pretty text-black/90 text-center">
            {profile.credentialsClosing}
          </p>
        </div>
      </section>

      <section className="ds-section bg-dark-green">
        <div className="ds-container">
          <h2 className="ds-h2 text-balance mx-auto text-center ">
            <span className="text-white">Education and Professional </span>
            <span className="text-amber">Training</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading max-w-2xl text-pretty text-center mx-auto text-white">
            {profile.educationIntro}
          </p>
          <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2">
            {profile.education.map((item, index) => (
              <li
                key={item.title}
                className={`rounded-2xl border border-border bg-light-green p-6 md:p-8 ${INTERACTIVE_CARD_HOVER} ${
                  index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
                }`}
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
        <div className="ds-container max-w-3xl text-center mx-auto">
          <h2 className="ds-h2 text-balance">
            <span className="text-dark-green">About </span>
            <span className="text-amber">Dr. Johnathan Miller</span>
          </h2>
          <div className="ds-lead mt-6 space-y-4 text-pretty text-black/90">
            {/* {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))} */}
            <p>{profile.aboutParagraphs}</p>
          </div>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container max-w-xl">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="text-dark-green">Medical Cannabis Evaluations </span>
            <span className="text-amber">Through Vallejo 420 MD</span>
          </h2>
          <p className="ds-lead mt-6 text-pretty text-black/90 text-center">
            {profile.evaluationsIntro}
          </p>
          <ul className="mt-4 list-disc space-y-2 ps-5 ds-lead text-black/90 text-left">
            {profile.evaluationBullets.map((bullet) => (
              <li key={bullet} className="text-pretty">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="ds-lead mt-6 text-pretty text-black/90 mx-auto">
            {profile.evaluationsClosing}
          </p>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container">
          <h2 className="ds-h2 mx-auto max-w-3xl text-center text-balance">
            <span className="text-dark-green">Conditions Reviewed </span>
            <span className="text-amber">During Medical Cannabis Evaluations</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading mx-auto max-w-3xl text-center text-pretty text-black/90">
            Depending on the patient&apos;s medical history and individual
            circumstances, medical cannabis evaluations may involve reviewing
            conditions such as:
          </p>
       
          <ul className="mt-5 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DISCUSSED_CONDITIONS.map(({ label, icon: Icon }) => (
              <li
                key={label}
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
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <p className="ds-body mt-6 text-center text-black/90">
            {DISCUSSED_CONDITIONS_DISCLAIMER}
          </p>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container max-w-3xl">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="text-dark-green">What to Expect During an </span>
            <span className="text-amber">Online Medical Cannabis Evaluation</span>
          </h2>
          <p className="ds-body mt-4 text-black/90 mx-auto text-center">
            {profile.expectIntro}
          </p>
          <ol className="mt-8 list-none space-y-4">
            {profile.expectSteps.map((step) => (
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
          <div className="mt-8 flex justify-center">
            <BookingButton
              size="lg"
              className="h-12 rounded-lg px-6 text-base font-semibold"
            >
              {profile.expectCtaLabel}
            </BookingButton>
          </div>
        </div>
      </section>

      <section className="ds-section bg-dark-green">
        <div className="ds-container">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="text-white">Why Choose </span>
            <span className="text-amber">Vallejo 420 MD?</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading max-w-2xl text-pretty mx-auto text-center text-white">
            {profile.whyIntro}
          </p>
          <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {profile.whyItems.map((item, index) => (
              <li
                key={item.title}
                className={`rounded-2xl border border-border bg-light-green p-6 md:p-8 lg:col-span-2 ${INTERACTIVE_CARD_HOVER} ${
                  index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""
                }`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-amber text-white">
                  <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="ds-h4 mt-5">{item.title}</h3>
                <p className="ds-body mt-3 text-pretty text-black/90">
                  {item.title === "Patient Privacy" ? (
                    <>
                      The platform describes its privacy and security practices
                      in its{" "}
                      <Link
                        href="/policy/hipaa-compliance-policy/"
                        className="font-semibold text-dark-green underline-offset-2 hover:underline"
                      >
                        HIPAA Compliance Policy
                      </Link>
                      .
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container max-w-3xl mx-auto text-center">
          <h2 className="ds-h2 text-balance">
            <span className="text-dark-green">Frequently Asked </span>
            <span className="text-amber">Questions</span>
          </h2>
          <Accordion
            className="mx-auto max-w-4xl  mt-8 w-full gap-4"
            defaultValue={["miller-faq-0"]}
            keepMounted
          >
            {profile.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`miller-faq-${index}`}
                className={`rounded-2xl border border-border bg-warm-white px-4 shadow-sm ${INTERACTIVE_CARD_HOVER}`}
              >
                <AccordionTrigger className="items-center gap-4 rounded-xl px-2 py-5 text-left ds-faq font-bold text-dark-green hover:no-underline md:py-6 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-dark-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="ds-body px-2 pb-5 pt-0 text-left text-black/90 md:pb-6">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-dark-green pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="ds-container">
          {/* <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-12 text-center shadow-xl sm:px-12 sm:py-14"> */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,color-mix(in_oklch,var(--primary-foreground),transparent_85%),transparent)]"
              aria-hidden
            />
            <h2 className="relative ds-h2 text-balance text-white mx-auto text-center ">
             <span className="text-white">Connect With a Physician Through </span>
             <span className="text-amber">Vallejo 420 MD</span>
              {/* {profile.closingTitle} */}
            </h2>
            <div className="relative mx-auto mt-4 max-w-2xl space-y-3 text-pretty ds-lead mx-auto text-center text-primary-foreground/85">
              {/* {profile.closingParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))} */}
              <p>{profile.closingParagraphs}</p>
            </div>
            <div className="relative mt-8 flex justify-center">
              <BookingButton
                size="lg"
                className="h-12 rounded-lg bg-amber px-6 text-base font-semibold text-white shadow-lg hover:bg-[#d4922f]"
              >
                {profile.closingCtaLabel}
              </BookingButton>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
}
