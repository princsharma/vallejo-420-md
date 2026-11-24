import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Ban,
  CalendarCheck,
  Check,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  HeartHandshake,
  Lock,
  Scale,
  Shield,
  Stethoscope,
  Video,
} from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us | Vallejo 420 MD ",
  description:
    "Based at 630 Tennessee St., Vallejo 420 MD offers video evaluations with California-licensed physicians. Clear pricing, refund terms, and respectful care.",
  alternates: {
    canonical: "/about-us/",
  },
};

const DIFFERENTIATORS = [
  {
    title: "California-licensed physicians",
    description:
      "Evaluations are performed by physicians licensed in California.",
    icon: BadgeCheck,
  },
  {
    title: "Care without judgment",
    description:
      "Our physicians listen to patients' concerns and treat them with respect.",
    icon: HeartHandshake,
  },
  {
    title: "Privacy and security",
    description:
      "Consultations take place over video. Review our privacy practices for how your information is handled.",
    icon: Lock,
  },
  {
    title: "Convenient appointments",
    description:
      "Choose an available time that fits your schedule. Open appointments are shown when you book.",
    icon: CalendarCheck,
  },
  {
    title: "Transparent policies",
    description:
      "Consultation policies and the refund guarantee are explained before you book.",
    icon: Scale,
  },
];

const STEPS = [
  {
    title: "Sign Up and Schedule",
    description:
      "Complete the required form and choose an available appointment time.",
    icon: ClipboardCheck,
  },
  {
    title: "Meet Your Physician",
    description:
      "Join a video consultation with a California-licensed physician who will review your medical history, assess your condition, and answer your questions.",
    icon: Video,
  },
  {
    title: "Receive Your Recommendation, If Appropriate",
    description:
      "If the physician determines that medical cannabis is appropriate, you will receive the relevant medical documentation. A physician's recommendation is not the same as a state-issued Medical Marijuana Identification Card (MMIC).",
    icon: FileCheck,
  },
];

const DOCTORS = [
  {
    name: "Dr. Rick Rieser, MD",
    role: "General Medicine · California license to be verified",
    photoSrc: "/media/rick-rieser.webp",
    bio: "Dr. Rieser's specialty, clinical experience, and role in medical cannabis evaluations should be confirmed against reliable professional records before publication.",
  },
  {
    name: "Dr. Johnathan Miller, MD",
    role: "General Medicine · California license to be verified",
    photoSrc: "/media/johnathan-miller.webp",
    bio: "Dr. Miller's professional credentials, years of experience, and role in medical cannabis evaluations should be confirmed before publication.",
  },
];

const EVALUATION = [
  {
    title: "Medical History Review",
    description:
      "The physician reviews your submitted medical history and current medications.",
    icon: ClipboardList,
  },
  {
    title: "Virtual Consultation",
    description:
      "You meet with the physician over video to discuss your condition and treatment goals.",
    icon: Video,
  },
  {
    title: "Clinical Assessment",
    description:
      "The physician assesses your medical circumstances and determines whether a medical cannabis recommendation is appropriate under applicable California requirements.",
    icon: Stethoscope,
  },
  {
    title: "Decision",
    description:
      "If the physician recommends medical cannabis, you receive the relevant documentation. If not, the physician may discuss other appropriate options.",
    icon: FileCheck,
  },
];

const INCLUDED = [
  "A medical evaluation with a California-licensed physician.",
  "Information about the evaluation process and next steps.",
  "Medical documentation, if the physician determines that a recommendation is appropriate.",
];

const NOT_INCLUDED = [
  "We do not sell, distribute, or deliver cannabis. We are not a dispensary or pharmacy.",
  "We do not guarantee a recommendation. The decision rests with the evaluating physician.",
];

const COMMITMENTS = [
  {
    title: "Privacy First",
    description:
      "We take the confidentiality of your health information seriously.",
    icon: Lock,
  },
  {
    title: "Transparency",
    description:
      "We aim to provide clear pricing, policies, and information about the evaluation process.",
    icon: Scale,
  },
  {
    title: "Compliance",
    description:
      "We aim to follow applicable California laws and professional requirements.",
    icon: Shield,
  },
  {
    title: "Respect",
    description: "We treat patients with dignity and without judgment.",
    icon: HeartHandshake,
  },
];



const LICENSE_LOOKUP = "https://www.mbc.ca.gov/License-Verification/";

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} className="bg-warm-white" />
      <main className="flex-1 bg-warm-white">
        <section className="bg-warm-white">
          <div className="ds-container py-8 md:py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
              <div className="order-2 text-center lg:order-1 lg:text-left">
                <h1 className="ds-h1 text-balance text-primary">
                  <span className="text-dark-green">About Vallejo</span>
                  <span className="text-amber"> 420 MD</span>
                </h1>
                <p className="ds-lead mx-auto mt-4 max-w-xl text-pretty text-black/90 lg:mx-0">
                  Vallejo 420 MD helps Vallejo residents obtain a medical
                  marijuana evaluation from a California-licensed physician
                  through an online service. We are a local team based at 630
                  Tennessee St., and we created this service to help people in
                  our community navigate the medical cannabis evaluation process
                  with clear information, convenient appointments, and
                  respectful care.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <BookingButton
                    size="lg"
                    className="h-12 rounded-lg px-6 text-base font-semibold"
                  >
                    Book a Consultation
                  </BookingButton>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-4xl border border-border bg-accent shadow-sm">
                  <Image
                    src="/media/virtual-telehealth-appointment-physician-consultation.webp"
                    alt="Vallejo doctor on video call consultation with patient on laptop screen"
                    width={1600}
                    height={1000}
                    priority
                    className="aspect-[16/10] w-full object-cover object-center"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="ds-container">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
              <div>
                <h2 className="ds-h2 text-balance">
                  <span className="text-dark-green">Why We started </span>
                  <span className="text-amber">Vallejo 420 MD</span>
                </h2>
                <div className="ds-lead mt-4 space-y-4 text-pretty text-black/90">
                  <p>
                    Many people in Vallejo may benefit from medical cannabis but
                    never take the first step. Some aren't sure which
                    conditions may qualify. Others have concerns about stigma or
                    find it difficult to fit an in-person clinic visit into their
                    schedules. We started Vallejo 420 MD to help address these
                    barriers.
                  </p>
                  <p>
                    Our goal is simple: to provide a straightforward path to a
                    physician evaluation, with clear information, transparent
                    policies, and no surprises.
                  </p>
                </div>
              </div>
              <aside className="rounded-2xl bg-section-green p-6 md:p-8">
                <h2 className="ds-h3">Our Mission</h2>
                <p className="ds-body mt-3 text-pretty text-black/90">
                  To provide patients with a straightforward, respectful, and
                  transparent medical marijuana evaluation process, with their
                  well-being at the center of our approach.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="ds-section bg-section-green">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance text-center">
              <span className="text-dark-green">What Sets Us </span>
              <span className="text-amber">Apart</span>
            </h2>
           <ul className="mt-8 grid list-none gap-5 md:grid-cols-2 lg:grid-cols-6">
              {DIFFERENTIATORS.map((item,index) => (
               <li
                  key={item.title}
                  className={`rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-sm md:p-8 lg:col-span-2 ${
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
          <div className="ds-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="min-w-0">
              <h2 className="ds-h2 text-balance">
                <span className="text-dark-green">How It </span>
                <span className="text-amber">Works</span>
              </h2>
              <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">
                Sign up, meet a California-licensed physician by video, and
                receive medical documentation only if the physician decides a
                recommendation is appropriate.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-light-green/70 p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber text-white"
                    aria-hidden
                  >
                    <Scale className="size-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="ds-h4 min-w-0 flex-1 text-balance">
                    Independent Medical Decisions
                  </h3>
                </div>
                <p className="ds-body ds-mt-after-heading text-pretty text-black/90">
                  Our physicians make independent medical decisions. We cannot
                  guarantee approval, and the physician&apos;s clinical judgment
                  determines the outcome of each evaluation.
                </p>
              </div>
            </div>

            <ol className="flex flex-col gap-5">
              {STEPS.map((step, index) => {
                const isLast = index === STEPS.length - 1;
                return (
                  <li
                    key={step.title}
                    className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4"
                  >
                    <div className="flex flex-col items-center self-stretch">
                      <span className="relative z-10 mt-5 flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-[0_2px_8px_rgb(11_93_42_/_4%)] md:mt-6">
                        <step.icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      {!isLast ? (
                        <span aria-hidden className="mt-3 w-px flex-1 bg-border" />
                      ) : null}
                    </div>
                    <article className="min-w-0 rounded-2xl border border-border bg-warm-white p-5 md:p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber ds-small font-semibold text-white"
                          aria-hidden
                        >
                          {index + 1}
                        </span>
                        <h3 className="ds-h4 min-w-0 flex-1 text-balance">{step.title}</h3>
                      </div>
                      <p className="ds-body mt-3 text-pretty text-black/90">
                        {step.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="ds-section bg-section-green">
          <div className="ds-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="ds-eyebrow">Meet the physicians</p>
              <h2 className="ds-h2 mt-2 text-balance">
                <span className="text-dark-green">Meet Our </span>
                <span className="text-amber">Doctors</span>
              </h2>
              <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">
                Vallejo 420 MD works with physicians licensed in California.
                Each physician&apos;s credentials, professional background, and
                current license status should be verified before publication.
              </p>
            </div>
            <ul className="mt-10 grid list-none gap-6 md:grid-cols-2">
              {DOCTORS.map((doctor) => (
                <li
                  key={doctor.name}
                  className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
                >
                  <DoctorPhotoPlaceholder
                    label={doctor.name}
                    photoSrc={doctor.photoSrc}
                    className="aspect-[16/9]"
                  />
                  <h3 className="ds-h4 mt-5">{doctor.name}</h3>
                  <p className="ds-small mt-2 font-semibold text-primary">
                    {doctor.role}
                  </p>
                  <p className="ds-body mt-3 flex-1 text-pretty text-black/90">
                    {doctor.bio}
                  </p>
                  <p className="ds-small mt-4 text-black/90">
                    California Medical Board License: To be verified
                  </p>
                  <a
                    href={LICENSE_LOOKUP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-small mt-2 font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Verify a Physician&apos;s License
                  </a>
                </li>
              ))}
            </ul>
            <p className="ds-lead mx-auto mt-8 max-w-3xl text-pretty text-center text-black/90">
              Our physicians make independent medical decisions. Vallejo 420 MD
              does not guarantee any evaluation outcome.
            </p>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">What Happens During  </span>
              <span className="text-amber"> Your  Evaluation</span>
            </h2>
            <ol className="mt-8 grid list-none gap-5 md:grid-cols-2">
              {EVALUATION.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-6 md:p-8"
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
            </ol>
          </div>
        </section>

        <section className="ds-section bg-section-green">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">What We Do and </span>
              <span className="text-amber"> What We Don&apos;t</span>
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl bg-section-green p-6 md:p-8">
                <h3 className="ds-h3">Included</h3>
                <ul className="mt-5 space-y-4">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                      <span className="ds-body text-pretty text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-warm-white p-6 md:p-8">
                <h3 className="ds-h3">Not Included</h3>
                <ul className="mt-5 space-y-4">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Ban className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                      <span className="ds-body text-pretty text-black/90">{item}</span>
                    </li>
                  ))}
                  <li className="flex gap-3">
                    <Ban className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="ds-body text-pretty text-black/90">
                      A state Medical Marijuana Identification Card (MMIC) is a
                      separate application process handled through the appropriate
                      county program. Vallejo residents can consult{" "}
                      <a
                        href="https://www.solanocounty.gov/government/health-social-services-department/solano-public-health/vital-statistics/medical-marijuana-information"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary underline-offset-2 hover:underline"
                      >
                        Solano County&apos;s medical marijuana information
                      </a>{" "}
                      for details.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">Our Commitment </span>
              <span className="text-amber">to  You</span>
            </h2>
            <ul className="mt-8 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {COMMITMENTS.map((item) => (
                <li key={item.title} className="rounded-2xl bg-section-green p-6">
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
        {/* 
        <section className="ds-section">
          <div className="ds-container">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">Our Sources and </span>
              <span className="text-amber"> Editorial Standards</span>
            </h2>
            <p className="ds-body mt-4 max-w-3xl text-pretty text-muted-foreground">
              Our educational content is based on reliable, authoritative sources
              and reviewed regularly for accuracy. Website information is for
              educational purposes only and is not a substitute for professional
              medical advice.
            </p>
            <p className="ds-body mt-4 text-foreground">
              Sources for California medical cannabis information include:
            </p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
              {SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-body font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="ds-body mt-6 max-w-3xl text-pretty text-muted-foreground">
              Read our{" "}
              <a
                href="/policy/editorial-policy/"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                editorial policy
              </a>{" "}
              and{" "}
              <a
                href="/policy/disclaimer/"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                disclaimer
              </a>{" "}
              for how content is reviewed and what this site does and does not
              cover.
            </p>
          </div>
        </section> */}

        <section className="ds-section bg-primary">
          <div className="ds-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="ds-h2 text-white">Ready to Get Started?</h2>
              <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">
                If you are considering a medical cannabis evaluation, you can
                explore the process and schedule a consultation to discuss your
                circumstances with a physician.
              </p>
              <div className="mt-8">
                <BookingButton
                  size="lg"
                  className="h-12 rounded-lg px-6 text-base font-semibold"
                >
                  Book a Consultation
                </BookingButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
