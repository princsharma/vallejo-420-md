import type { Metadata } from "next";
import Image from "next/image";
import {
  Ban,
  Check,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  SquareCheckBig,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/booking-dialog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Vallejo 420 MD and see how our California licensed physicians make medical marijuana evaluations simple, secure, and transparent.",
  alternates: {
    canonical: "/about/",
  },
};

const WHY_WE_EXIST = [
  {
    title: "Legal Compliance",
    description:
      "All medical marijuana evaluations are conducted by licensed physicians in accordance with California's medical marijuana laws and telehealth regulations.",
    icon: Scale,
  },
  {
    title: "Secure Telemedicine",
    description:
      "Our platform uses HIPAA compliant, encrypted technology to protect your data and maintain confidentiality at every stage.",
    icon: Lock,
  },
  {
    title: "Unbiased Medical Judgment",
    description:
      "Physicians make independent clinical decisions based solely on your medical history, qualifying conditions, and California law.",
    icon: ShieldCheck,
  },
];

const LEADERSHIP = [
  {
    name: "Gourav Sharma",
    role: "Founder",
    bio: "Gourav oversees platform strategy and operations, with a focus on scaling compliant digital healthcare services while maintaining regulatory integrity and a seamless patient experience.",
  },
  {
    name: "Prince Sharma",
    role: "Chief Marketing Officer (CMO)",
    bio: "Prince leads brand strategy, growth initiatives, and patient education, with a focus on ethical, compliant healthcare marketing.",
  },
];

const PLATFORM_STEPS = [
  {
    number: "1",
    title: "Connect",
    description:
      "Complete a short online intake form with your basic personal and medical information.",
  },
  {
    number: "2",
    title: "Book",
    description:
      "Schedule a convenient appointment with a California medical marijuana physician.",
  },
  {
    number: "3",
    title: "Consult",
    description:
      "Attend a secure video consultation, typically lasting 10 to 15 minutes.",
  },
  {
    number: "4",
    title: "Receive",
    description:
      "If approved, receive your medical marijuana recommendation digitally.",
  },
];

const CREDIBILITY = [
  "California Licensed Doctors Only",
  "HIPAA Compliant Technology",
  "California Specific Medical Evaluations",
  "Transparent Medical Standards",
];

const PRICING_POINTS = [
  "No Hidden Fees",
  "No Cannabis Sales",
  "No Commissions",
  "Clear Pricing",
];

const PRINCIPLES = [
  {
    title: "Our Mission",
    description:
      "To simplify access to medical marijuana evaluations by offering a secure, affordable, patient focused telehealth experience, while upholding the highest standards of medical ethics, privacy, and legal compliance.",
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted digital healthcare platform for cannabis based medical care, recognized for transparency, responsible evaluations, and a commitment to patient well being.",
  },
  {
    title: "Our Core Values",
    description:
      "To put patient trust and privacy first, uphold medical integrity through independent physician judgment, comply with all applicable medical cannabis laws, and keep evaluations accessible, affordable, and patient focused.",
  },
];

const NOT_TO_EXPECT = [
  {
    title: "Direct Medical Treatment",
    description:
      "Vallejo 420 MD doesn't provide medical treatment. Medical marijuana is a therapeutic option, and our platform offers independent doctor evaluations and recommendations only.",
  },
  {
    title: "Guaranteed Approvals",
    description:
      "Medical marijuana recommendations aren't guaranteed. Eligibility is determined solely by the evaluating physician, based on unbiased medical judgment.",
  },
  {
    title: "Cannabis Sales or Distribution",
    description:
      "Vallejo 420 MD doesn't sell, distribute, or supply cannabis or cannabis products of any kind.",
  },
  {
    title: "Influenced Medical Decisions",
    description:
      "Medical decisions are not influenced by pricing, timelines, or platform policies. Our physicians evaluate patients using their own professional judgment and California's medical marijuana laws.",
  },
  {
    title: "Legal Advice or Representation",
    description:
      "The platform doesn't provide legal advice or interpretation of medical marijuana laws or regulations.",
  },
  {
    title: "Dispensary Partnerships",
    description:
      "Vallejo 420 MD has no partnerships, commissions, or financial relationships with California cannabis dispensaries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <main className="flex-1 bg-background">
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative flex flex-col overflow-hidden rounded-4xl bg-accent px-8 pt-10 sm:min-h-[30rem] sm:flex-row sm:items-center sm:px-16 sm:pt-0">
            <div className="relative max-w-xl">
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                About
              </h1>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Vallejo 420 MD is a 100% online medical marijuana telehealth
                platform built to make cannabis care in Vallejo simple,
                affordable, and legally compliant. We connect qualifying
                California residents with state licensed medical marijuana
                doctors through secure virtual consultations, so getting your
                recommendation doesn&apos;t mean sitting in a waiting room.
              </p>
            </div>
            <Image
              src="/about-hero-section.webp"
              alt="Vallejo 420 MD physician"
              width={1110}
              height={1311}
              loading="eager"
              fetchPriority="high"
              className="pointer-events-none relative mx-auto mt-6 h-64 w-auto object-contain object-bottom sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:h-[92%]"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Vallejo 420 MD is backed by a team that has been helping patients
              across the country get compliant medical marijuana evaluations
              since 2020. We&apos;re bringing that same experience directly to
              Vallejo, with a platform built around California&apos;s specific
              rules and requirements.
            </p>
          </div>
        </section>

        <section className="bg-accent py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why We Exist
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              Accessing medical cannabis shouldn&apos;t feel confusing,
              intimidating, or overpriced. Yet many patients run into
              complicated regulations, long wait times, and unreliable
              information. We exist to make that experience simpler.
            </p>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              Our purpose is to give you clear guidance, transparent pricing,
              and legitimate medical evaluations without unnecessary friction.
              By combining technology with compassionate, patient centered care,
              we help you focus on your health instead of paperwork and
              uncertainty.
            </p>

            <ul className="mt-10 grid list-none gap-6 md:grid-cols-3">
              {WHY_WE_EXIST.map((item) => (
                <li key={item.title}>
                  <item.icon className="size-6 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              Our leadership team brings together experience in healthcare
              operations, digital technology, ethical marketing, and patient
              focused telehealth services.
            </p>

            <ul className="mt-10 grid list-none gap-8 md:grid-cols-2">
              {LEADERSHIP.map((person) => (
                <li key={person.name} className="border-t border-border/60 pt-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {person.role}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {person.bio}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-accent py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Our Platform Works
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              Our platform is fully secure and HIPAA compliant, with a process
              designed to be simple and patient friendly.
            </p>

            <ol className="mt-10 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PLATFORM_STEPS.map((step) => (
                <li key={step.number}>
                  <span className="text-2xl font-bold text-primary/70">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 max-w-3xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                All medical evaluations on Vallejo 420 MD are provided by
                California licensed physicians authorized to recommend medical
                cannabis under state law. Every consultation follows established
                medical guidelines and telehealth standards to protect patient
                safety, privacy, and legal compliance.
              </p>
              <p>
                Physicians on our platform operate independently and are solely
                responsible for evaluating eligibility and determining whether a
                recommendation is appropriate. We don&apos;t promise approvals,
                and no medical decision is influenced by pricing, timelines, or
                platform policies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Medical Credibility and Compliance
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Medical integrity is at the core of everything we do. Our
                  platform supports physicians in delivering California
                  compliant evaluations while keeping the experience clear and
                  patient friendly.
                </p>

                <ul className="mt-8 grid list-none gap-3 sm:grid-cols-2">
                  {CREDIBILITY.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-semibold text-foreground"
                    >
                      <SquareCheckBig className="mt-0.5 size-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Our platform guides each step of the medical marijuana
                    evaluation process with clarity and ease, from the initial
                    intake to the final outcome. Every stage is clearly defined,
                    so requirements and expectations are always transparent.
                  </p>
                  <p>
                    While the process is designed to be simple and efficient,
                    medical decisions remain entirely with the evaluating
                    physician. Approvals aren&apos;t guaranteed and are based on
                    your individual medical history, qualifying conditions, and
                    California&apos;s requirements, not automation or shortcuts.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-accent">
                <Image
                  src="/about-section-one.webp"
                  alt="Vallejo 420 MD medical team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-accent py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transparent Pricing
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              We believe patients deserve clear, honest pricing with no
              surprises, which is why all our costs are communicated upfront and
              limited to the medical evaluation itself.
            </p>

            <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PRICING_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-foreground"
                >
                  <Check className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              You pay only for your medical evaluation. Any required California
              state registration fees are paid directly to the state, not
              through our platform.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              The values and vision behind our commitment to patient trust and
              transparency.
            </p>

            <ul className="mt-10 grid list-none gap-8 md:grid-cols-3">
              {PRINCIPLES.map((item) => (
                <li key={item.title}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-accent py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Not to Expect
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              We believe transparency builds trust. Here&apos;s what falls
              outside the scope of services Vallejo 420 MD provides.
            </p>

            <ul className="mt-10 grid list-none gap-6 md:grid-cols-2">
              {NOT_TO_EXPECT.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Ban
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl bg-primary px-8 py-14 text-primary-foreground shadow-xl sm:px-16">
              <Badge
                variant="secondary"
                className="h-auto rounded-full bg-primary-foreground/15 px-5 py-2 text-sm text-primary-foreground"
              >
                Access Your Medical Marijuana Card Today
              </Badge>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Your trusted partner for medical cannabis care in Vallejo
              </h2>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/85">
                Backed by a team that&apos;s helped thousands of patients
                nationwide, now bringing that same safe, stress free approach to
                California. Complete the process in 15 to 30 minutes. 100%
                online. No office visits required.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <BookingButton
                  size="lg"
                  variant="secondary"
                  className="h-13 rounded-full px-8 text-base shadow-lg"
                >
                  Get My Card Today
                </BookingButton>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-13 gap-2 rounded-full px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  render={<a href={contactInfo.phoneHref} />}
                  nativeButton={false}
                >
                  <Phone className="size-4" />
                  Call Now — {contactInfo.phone}
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-13 gap-2 rounded-full px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  render={<a href={`mailto:${contactInfo.email}`} />}
                  nativeButton={false}
                >
                  <Mail className="size-4" />
                  Email — {contactInfo.email}
                </Button>
                <p className="inline-flex items-center gap-2 px-2 text-sm text-primary-foreground/85">
                  <MessageCircle className="size-4 shrink-0" aria-hidden />
                  Live Chat — Connect with our support anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
