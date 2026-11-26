import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { doctors, doctorProfilePath, doctorsHubOgImageSrc } from "@/lib/doctors";
import { getMetadataBaseUrl } from "@/lib/metadata-base";
import { siteConfig } from "@/lib/site-data";
import {
  DOCTORS_PAGE_HERO_BG,
  DOCTORS_HUB_FAQS,
  DISCUSSED_CONDITIONS,
  DISCUSSED_CONDITIONS_DISCLAIMER,
  EVALUATION_STEPS,
  HUB_TRUST_ITEMS,
  NEARBY_AREAS,
  PREP_CHECKLIST,
  VALLEJO_NEIGHBORHOODS,
  WHY_CHOOSE_ITEMS,
} from "@/lib/doctors-hub-content";
import { INTERACTIVE_CARD_HOVER } from "@/lib/interactive-card-hover";

const nearbyAreaChipClassName =
  "flex min-h-[2.75rem] w-full items-center justify-center rounded-xl border border-white/10 bg-white px-3 py-2.5 text-center ds-small font-semibold text-dark-green shadow-[0_8px_24px_rgb(11_93_42_/_12%)] transition-[border-color,background-color,color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#d4922f] hover:bg-[#d4922f] hover:text-white hover:shadow-[0_8px_24px_rgb(212_146_47_/_22%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const DOCTORS_HUB_TITLE = "Medical Marijuana Doctors in Vallejo, CA | Vallejo 420 MD";
const DOCTORS_HUB_DESCRIPTION =
  "Learn about the California-licensed doctors at Vallejo 420 MD. Verify their licenses, read their backgrounds, and book a video evaluation from home.";
const DOCTORS_HUB_OG_ALT =
  "California-licensed physicians at Vallejo 420 MD ready to help patients";

const doctorsHubOgImageUrl = new URL(
  doctorsHubOgImageSrc,
  getMetadataBaseUrl(),
).toString();

export const metadata: Metadata = {
  title: DOCTORS_HUB_TITLE,
  description: DOCTORS_HUB_DESCRIPTION,
  alternates: {
    canonical: "/our-doctors/",
  },
  openGraph: {
    title: DOCTORS_HUB_TITLE,
    description: DOCTORS_HUB_DESCRIPTION,
    url: new URL("/our-doctors/", getMetadataBaseUrl()).toString(),
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: doctorsHubOgImageUrl,
        secureUrl: doctorsHubOgImageUrl,
        width: 1200,
        height: 630,
        alt: DOCTORS_HUB_OG_ALT,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DOCTORS_HUB_TITLE,
    description: DOCTORS_HUB_DESCRIPTION,
    images: [doctorsHubOgImageUrl],
  },
};

function FaqAnswer({ question }: { question: string }) {
  if (
    question.startsWith("What happens if the doctor doesn't recommend")
  ) {
    return (
      <p>
        The doctor will explain the decision and may discuss other treatment
        options. See our{" "}
        <Link
          href="/policy/refund-policy/"
          className="font-semibold text-dark-green underline-offset-2 hover:underline"
        >
          Refund Policy
        </Link>{" "}
        for details on fees when you do not receive a recommendation.
      </p>
    );
  }

  if (question.startsWith("How do doctors protect my privacy")) {
    return (
      <p>
        We use a HIPAA-compliant platform, and we don&apos;t sell your
        information. For details, read our{" "}
        <Link
          href="/policy/privacy-policy/"
          className="font-semibold text-dark-green underline-offset-2 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/policy/hipaa-compliance-policy/"
          className="font-semibold text-dark-green underline-offset-2 hover:underline"
        >
          HIPAA Compliance
        </Link>{" "}
        pages.
      </p>
    );
  }

  const faq = DOCTORS_HUB_FAQS.find((item) => item.question === question);
  return <p>{faq?.answer}</p>;
}

export default function OurDoctorsPage() {
  return (
    <>
      <main className="flex-1">

        <section
          className={`bg-dark-green pb-12 pt-3 md:pb-16 md:pt-4 lg:pb-20`}
        >
          <div className="ds-container bg-dark-green">
            <Breadcrumbs
              alignWithPage
              compact
              className="pt-0 pb-0 [&>div>div]:bg-white [&_li]:text-amber [&_li>a]:text-black [&_li>span]:text-amber [&_li>svg]:text-amber"
              items={[{ label: "Our Doctors" }]}
            />

            {/* Heading */}
            <h1 className="ds-h1 mx-auto mt-8 max-w-4xl text-center text-primary md:mt-10">
              <span className="block whitespace-normal text-white">
                Meet Our Medical Marijuana
              </span>
              <span className="block whitespace-normal text-amber">
                Doctors in Vallejo
              </span>
            </h1>

            {/* Description */}
            <p className="ds-lead mx-auto mt-5 max-w-4xl text-center leading-relaxed text-white/80">
              Vallejo 420 MD connects patients in Vallejo and Solano County with California-licensed
              physicians for online medical marijuana evaluations. You meet with the doctor through  a secure video call
              from home. If the doctor decides that medical marijuana is appropriate for you, they will issue a  recommendation.
            </p>

            {/* Trust Cards */}
            <ul className="mx-auto mt-10 grid max-w-5xl list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {HUB_TRUST_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-[#dfe9df] bg-[#CFEED2] px-5 py-5 text-center shadow-[0_5px_24px_rgba(11,93,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_12px_30px_rgba(11,93,42,0.10)]"
                >
                  {/* Icon */}
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber text-white ring-1 ring-[#e2ecdf] transition-all duration-300 group-hover:bg-dark-green group-hover:text-white group-hover:ring-amber">
                    <item.icon
                      className="size-6"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>

                  {/* Card Content */}
                  <span className="mt-3 whitespace-nowrap text-[16px] font-semibold leading-snug text-dark-green transition-colors duration-300 group-hover:text-primary">
                    {item.label}
                  </span>

                  {/* Bottom Accent */}
                  <span className="mt-3 h-[3px] w-9 rounded-full bg-amber/70 transition-all duration-300 group-hover:w-16" />
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section className="ds-section bg-white" id="our-doctors">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance text-center">
              <span className="text-dark-green">Our </span>
              <span className="text-amber">Doctors</span>
            </h2>
            <p className="ds-lead mx-auto mt-4 max-w-2xl text-pretty text-center text-black/90">
              Our team consists of California-licensed physicians who personally evaluate every patient.
               You can review each doctor&apos;s qualifications and professional background before scheduling your appointment.
            </p>
            <ul className="mt-10 grid list-none gap-6 md:grid-cols-2">
              {doctors.map((doctor) => (
                <li key={doctor.slug} className="min-h-0">
                  <article
                    className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-section-green shadow-[0_4px_20px_rgb(11_93_42_/_6%)] ${INTERACTIVE_CARD_HOVER}`}
                  >
                    <DoctorPhotoPlaceholder
                      label={doctor.name}
                      photoSrc={doctor.photoSrc}
                      className="aspect-[16/10] shrink-0 rounded-none"
                    />
                    <div className="flex min-h-0 flex-1 flex-col p-6 md:p-8">
                      <h3 className="ds-h4 text-balance">{doctor.name}</h3>
                      <p className="ds-small mt-2 font-semibold text-dark-green">
                        {doctor.licenseLabel} · {doctor.credentials}
                      </p>
                      <p className="ds-small mt-1 text-black/90">
                        Experience: {doctor.experience}
                      </p>
                      <p className="ds-body mt-3 min-h-20 flex-1 text-pretty text-black/90 ">
                        {doctor.hubBio}
                      </p>
                      <div className="mt-6 border-t border-border/60 pt-6 flex justify-center">
                        <Button
                          className="h-12 w-[70%] rounded-lg font-semibold"
                          render={<Link href={doctorProfilePath(doctor.slug)} />}
                          nativeButton={false}
                        >
                          View profile
                          <ArrowRight
                            className="size-4 transition-transform group-hover/button:translate-x-0.5"
                            strokeWidth={2}
                            aria-hidden
                          />
                        </Button>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ds-section bg-section-green text-center">
          <div className="ds-container">
            <h2 className="ds-h2 mx-auto max-w-3xl text-balance text-center">
              <span className="block text-dark-green">Why Vallejo Patients Choose</span>
              <span className="block text-amber">Our Doctors</span>
            </h2>
            <p className="ds-lead ds-mt-after-heading mx-auto max-w-2xl text-pretty text-center text-black/90">
              A medical marijuana evaluation is a real medical visit. Our doctors
              take the time to listen, explain, and answer your questions.
            </p>
            <ul className="mt-8 grid list-none gap-5 md:grid-cols-2 lg:grid-cols-6">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
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
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="ds-container">
            <div className="mx-auto  max-w-3xl text-center">
              <h2 className="ds-h2 max-w-3xl whitespace-nowrap text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[44px]">
                <span className="text-dark-green">Who We Help</span>{" "}
                <span className="text-amber">in Vallejo</span>
              </h2>
              <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">
                Patients across Solano County meet with our doctors to discuss
                conditions that may qualify for a medical marijuana
                recommendation under California law. Common reasons patients
                discuss include:
              </p>
            </div>


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
       
            <div className="mt-8 flex items-center justify-center gap-3 text-center">
              <ShieldCheck
                className="size-6 shrink-0 text-dark-green"
                strokeWidth={1.8}
                aria-hidden
              />
              <p className="ds-body text-pretty text-black/90">
                <strong className="font-bold text-dark-green">Medical Disclaimer:</strong>{" "}
                Whether medical marijuana is appropriate for you is always the
                doctor&apos;s decision. We can&apos;t guarantee approval.
              </p>
            </div>
          </div>
        </section>

        <section className="ds-section bg-section-white">
          <div className="ds-container grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="min-w-0 rounded-2xl border border-border bg-white p-6 md:p-8">
              <h2 className="ds-h2 text-balance">
                <span className="text-dark-green">How Our Doctors </span>
                <span className="text-amber">Evaluate Patients</span>
              </h2>
              <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">
               The entire four-step process can be completed from your phone or computer.
              </p>
              <ol className="mt-8 flex list-none flex-col gap-4">
                {EVALUATION_STEPS.map((step) => (
                  <li key={step.number}>
                    <article
                      className={`rounded-2xl border border-border bg-warm-white p-5 md:p-6 ${INTERACTIVE_CARD_HOVER}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber text-white">
                          <step.icon
                            className="size-5"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="ds-h4 pe-2 text-balance">
                            {step.title}
                          </h3>
                          <p className="ds-body mt-3 text-pretty text-black/90">
                            {step.description}
                          </p>
                        </div>
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-dark-green ds-small font-semibold tabular-nums text-white"
                          aria-hidden
                        >
                          {step.number.padStart(2,)}
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
            <aside
              className={`h-fit rounded-2xl border border-border bg-white p-6 md:p-8 lg:sticky lg:top-24 ${INTERACTIVE_CARD_HOVER}`}
            >
              <div className="flex items-center gap-3">
                {/* <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber text-white">
                  <ClipboardList
                    className="size-5"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span> */}
                <h3 className="ds-h3 text-balance">What to Have Ready</h3>
              </div>
              <ul className="mt-6 list-none space-y-3">
                {PREP_CHECKLIST.map((item) => (
                  <li
                    key={item.label}
                    className={`flex gap-3 rounded-xl border border-border bg-light-green p-4 ${INTERACTIVE_CARD_HOVER}`}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber text-white">
                      <item.icon className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="ds-body self-center text-pretty text-black/90">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

         {/* <section className="ds-section bg-dark-green">
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14">
              <div className="min-w-0">
                <h2 className="ds-h2 text-balance mx-auto text-center">
                  <span className="text-white">Serving Vallejo and </span>
                  <span className="text-amber">Nearby Areas</span>
                </h2>
                <p className="ds-body mt-4 text-pretty text-white/85 mx-auto text-center">
                  Our video visits are available to patients in California. Most
                  of our patients live in and around Vallejo, including{" "}
                  <span className="font-semibold text-white">
                    {VALLEJO_NEIGHBORHOODS}
                  </span>
                  .
                </p>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber text-white">
                    <MapPin
                      className="size-5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <p className="ds-h4 text-balance text-white">
                    Nearby communities we serve
                  </p>
                </div>
                <ul className="mt-5 grid list-none grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                  {NEARBY_AREAS.map((city) => (
                    <li key={city} className="min-w-0">
                      <span className={nearbyAreaChipClassName}>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
                 <p className="ds-body mt-4 text-pretty text-white/85">
                  A recommendation allows you to shop at state-licensed
                  dispensaries. Rules for local sales and delivery vary by city,
                  so check current Vallejo and California Department of Cannabis
                  Control guidance before you shop.
                </p>
            </div>
          </div>
        </section>  */}


        <section className="ds-section bg-white">
          <div className="ds-container">
            <h2 className="ds-h2 mx-auto max-w-3xl text-center text-balance capitialize">
              <span className="text-dark-green">Frequently Asked </span>
              <span className="text-amber">Questions</span>
            </h2>

            <Accordion
              className="mx-auto mt-8 w-full max-w-4xl gap-3"
              defaultValue={["doctors-faq-0"]}
              keepMounted
            >
              {DOCTORS_HUB_FAQS.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`doctors-faq-${index}`}
                  className={`rounded-2xl border border-border bg-warm-white px-4 shadow-sm ${INTERACTIVE_CARD_HOVER}`}
                >
                  <AccordionTrigger className="items-center gap-4 rounded-xl px-2 py-5 text-left ds-faq font-bold text-dark-green hover:no-underline md:py-6 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:shrink-0 [&_[data-slot=accordion-trigger-icon]]:text-dark-green">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="ds-body px-2 pb-5 pt-0 text-left text-black/90 md:pb-6">
                    <FaqAnswer question={faq.question} />
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
            <h2 className="relative ds-h2 text-balance text-white text-center mx-auto">
              Ready to Talk to a{" "}
              <span className="text-amber">Vallejo Doctor?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-pretty ds-lead text-center  text-primary-foreground/85">
              Complete your intake online and meet with a California-licensed
              physician by video. If the doctor determines that you qualify,
              you can receive a recommendation in accordance with California
              law.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <BookingButton
                size="lg"
                className="h-12 w-full rounded-lg px-6 text-base font-semibold shadow-lg sm:w-auto"
              >
                Start My Evaluation
              </BookingButton>
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-lg border-primary-foreground/40 bg-primary-foreground/10 px-6 text-base font-semibold text-primary-foreground  sm:w-auto"
                render={<Link href="/contact/" />}
                nativeButton={false}
              >
                Contact Support
              </Button>
            </div>
          </div>

        </section>
      </main>
      <SiteFooter />
    </>
  );
}
