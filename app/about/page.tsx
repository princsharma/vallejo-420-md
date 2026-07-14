import type { Metadata } from "next";
import Image from "next/image";
import { Minus, Plus, SquareCheckBig } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/booking-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Vallejo 420 MD's licensed doctors and our fast, confidential medical marijuana evaluation process.",
  alternates: {
    canonical: "/about/",
  },
};

const CHECKLIST = [
  "Licensed & Experienced",
  "Fast & Hassle-Free",
  "Compassionate Care",
  "Confidential & Secure",
];

const TRUST_POINTS = [
  {
    title: "Expert & Certified Physicians",
    description:
      "Our doctors are fully licensed and specialize in medical marijuana evaluations, ensuring safe and legal approvals.",
  },
  {
    title: "Fast, Secure & Hassle-Free",
    description:
      "Each evaluation is tailored to your medical needs, providing expert guidance on cannabis use for treatment.",
  },
  {
    title: "Personalized Patient Consultations",
    description:
      "Each evaluation is tailored to your medical needs, providing expert guidance on cannabis use for treatment.",
  },
];

const FAQS = [
  {
    question: "Why should Vallejo residents choose us for their medical marijuana card?",
    answer:
      "We specialize in helping Vallejo residents get fast, hassle-free medical marijuana approvals. Our local expertise ensures you receive a legal recommendation and can access trusted dispensaries in the area.",
  },
  {
    question: "Are our doctors licensed to approve medical marijuana in Vallejo, CA?",
    answer:
      "Yes! Our doctors are fully licensed and authorized to provide medical marijuana recommendations in Vallejo and throughout California.",
  },
  {
    question: "Is your consultation private and secure?",
    answer:
      "Absolutely. We follow HIPAA guidelines to protect your medical records and personal information. Your consultation is completely confidential.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <main className="flex-1 bg-background">
        {/* Hero banner */}
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative flex flex-col overflow-hidden rounded-4xl bg-accent px-8 pt-10 sm:min-h-[30rem] sm:flex-row sm:items-center sm:px-16 sm:pt-0">
            <h1 className="relative z-10 max-w-lg text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Want To Know More About Us?
            </h1>
            <Image
              src="/about-hero-section.webp"
              alt="Vallejo 420 MD physician"
              width={1110}
              height={1311}
              priority
              className="pointer-events-none relative mx-auto mt-6 h-64 w-auto object-contain object-bottom sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:h-[92%]"
            />
          </div>
        </section>

        {/* Intro paragraph */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Our licensed doctors specialize in medical marijuana
              evaluations, ensuring safe, professional, and compassionate
              care. With years of expertise, they assess your condition and
              provide the right guidance. Each consultation is thorough,
              confidential, and designed to help you access the relief you
              need. Trust our experts for a seamless and reliable experience
              in obtaining your medical marijuana prescription.
            </p>
          </div>
        </section>

        {/* Team photo */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl sm:aspect-[16/7]">
              <Image
                src="/about-section-one.webp"
                alt="Vallejo 420 MD medical team"
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
              />
            </div>

            <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <SquareCheckBig className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trust points */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-accent">
                <Image
                  src="/about-hero-section.webp"
                  alt=""
                  width={1110}
                  height={1311}
                  aria-hidden
                  loading="eager"
                  className="pointer-events-none absolute -top-8 -left-8 h-40 w-auto -scale-x-100 opacity-20"
                />
                <Image
                  src="/about-hero-section.webp"
                  alt=""
                  width={1110}
                  height={1311}
                  aria-hidden
                  loading="eager"
                  className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-auto rotate-180 opacity-20"
                />
                <Image
                  src="/about-section-two.webp"
                  alt="Physician preparing for a patient consultation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-bottom"
                />
              </div>

              <div>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Trusted &amp; Experienced Medical Marijuana Doctors
                </h2>
                <div className="mt-8 space-y-6">
                  {TRUST_POINTS.map((point) => (
                    <div key={point.title} className="flex gap-3">
                      <SquareCheckBig className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-primary">
              FAQ
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <Accordion className="mt-10 gap-4">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="rounded-2xl border border-border/60 bg-card px-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="gap-4 py-5 text-base font-semibold text-foreground hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Plus className="size-4 group-aria-expanded/accordion-trigger:hidden" />
                      <Minus className="hidden size-4 group-aria-expanded/accordion-trigger:inline" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-9 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <BookingButton
                size="lg"
                className="h-13 rounded-full px-8 text-base shadow-lg shadow-primary/30"
              >
                Book Your Appointment
              </BookingButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
