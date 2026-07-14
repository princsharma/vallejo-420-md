import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  IdCard,
  CalendarCheck,
  Lock,
  Star,
  CirclePlus,
  BadgeDollarSign,
  PenLine,
  Video,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/booking-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Get Your Card",
  description:
    "The best way to get your Vallejo MMJ card online. Same-day approval, 100% online and secure, trusted doctors.",
  alternates: {
    canonical: "/get-your-card/",
  },
};

const FEATURES = [
  {
    icon: IdCard,
    title: "Get Your 420 Card in Vallejo",
    description:
      "Apply online and get approved by a licensed doctor from the comfort of your home.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day Approval",
    description:
      "Get approved the same day and start accessing legal cannabis in Vallejo.",
  },
  {
    icon: Lock,
    title: "100% Online & Secure",
    description:
      "Your medical evaluation is confidential, secure, and stress-free.",
  },
  {
    icon: Star,
    title: "Trusted Doctors",
    description:
      "Our certified doctors provide expert guidance and fast approvals.",
  },
  {
    icon: CirclePlus,
    title: "Access Local Dispensaries",
    description:
      "Once approved, you can legally purchase medical marijuana from state-approved dispensaries.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable & Convenient",
    description:
      "We offer competitive pricing with a money-back guarantee if you don't qualify.",
  },
];

const STEPS = [
  {
    number: "1",
    icon: PenLine,
    title: "Sign Up & Book Your Consultation",
    description:
      "Fill out a quick online form and schedule your evaluation with a licensed medical doctor. Our seamless process makes getting your Vallejo MMJ card from home easy.",
  },
  {
    number: "2",
    icon: Video,
    title: "Talk to a Licensed Doctor Online",
    description:
      "Join a secure video consultation with a certified physician who understands California's medical cannabis laws. They'll assess your condition, answer any questions, and guide you through the process.",
  },
  {
    number: "3",
    icon: IdCard,
    title: "Get Same-Day Approval & Access Vallejo Dispensaries",
    description:
      "If approved, receive your medical marijuana recommendation the same day. Your approval allows you to legally purchase cannabis from state-licensed dispensaries in Vallejo and across California.",
  },
];

const PLANS = [
  {
    name: "Essential",
    price: "$55",
    highlighted: false,
    features: ["Instant Digital Copy", "Access to Dispensaries", "Valid for 1 year"],
  },
  {
    name: "Enhanced",
    price: "$99",
    highlighted: false,
    features: ["Everything in Essential", "Hard Copy Mailed", "Exclusive MMJ ID Card"],
  },
  {
    name: "Premium",
    price: "$199",
    highlighted: true,
    features: [
      "Everything in Enhanced",
      "Higher Possession Limits",
      "Legal Protection for Cultivation",
    ],
  },
];

export default function GetYourCardPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Get Your Card" }]} />
      <main className="flex-1 bg-background">
        {/* Mini hero banner */}
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl bg-accent px-6 py-10 sm:px-12 sm:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative order-2 mx-auto aspect-[1920/1798] w-full max-w-[17rem] sm:max-w-sm lg:order-1 lg:mx-0">
                <svg
                  viewBox="0 0 200 200"
                  aria-hidden
                  className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 text-primary/15 sm:h-32 sm:w-32"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 10 Q60 20 90 70 Q100 100 90 130" strokeWidth="1.5" />
                  <path d="M30 30 Q40 45 60 50" strokeWidth="1.5" />
                  <path d="M45 55 Q55 68 75 72" strokeWidth="1.5" />
                  <path d="M60 85 Q72 95 88 96" strokeWidth="1.5" />
                </svg>
                <svg
                  viewBox="0 0 200 200"
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rotate-180 text-primary/15 sm:h-36 sm:w-36"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 10 Q60 20 90 70 Q100 100 90 130" strokeWidth="1.5" />
                  <path d="M30 30 Q40 45 60 50" strokeWidth="1.5" />
                  <path d="M45 55 Q55 68 75 72" strokeWidth="1.5" />
                  <path d="M60 85 Q72 95 88 96" strokeWidth="1.5" />
                </svg>
                <Image
                  src="/get-your-card-hero-section.webp"
                  alt="Licensed physician presenting Vallejo MMJ card options"
                  fill
                  priority
                  sizes="(min-width: 640px) 384px, 272px"
                  className="object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                  The Best Way to Get Your Vallejo MMJ Card Online!
                </h1>
                <div className="mt-6">
                  <BookingButton
                    size="lg"
                    className="h-13 rounded-full px-8 text-base shadow-lg shadow-primary/30"
                  >
                    Get an Appointment Now
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-3xl bg-muted/60 p-8 text-center"
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="secondary" className="h-auto rounded-full px-6 py-2.5 text-base text-primary">
              How It Works
            </Badge>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Easy Steps to Get Your Vallejo MMJ Card!
            </h2>

            <ol className="mt-12 grid list-none gap-10 sm:grid-cols-3">
              {STEPS.map((step) => (
                <li key={step.number} className="text-center sm:text-left">
                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-full bg-muted/60 sm:mx-0">
                    <step.icon className="size-8 text-primary" />
                    <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 pt-6 sm:grid-cols-3 sm:items-center">
              {PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  size="sm"
                  className={
                    plan.highlighted
                      ? "relative flex h-full flex-col overflow-visible border-2 border-primary bg-primary/10 text-center shadow-xl sm:scale-110 sm:py-2"
                      : "flex h-full flex-col border-border/70 bg-muted/60 text-center shadow-sm"
                  }
                >
                  {plan.highlighted ? (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1">
                      Most Popular
                    </Badge>
                  ) : null}
                  <CardHeader className="py-6">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-base font-medium text-muted-foreground">
                        /Yr
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <Separator />
                  <CardContent className="flex-1 py-10">
                    <ul className="space-y-5 text-left text-sm text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8">
                    <BookingButton
                      size="lg"
                      variant={plan.highlighted ? "default" : "outline"}
                      className="h-12 w-full rounded-full text-base"
                    >
                      Get Started
                    </BookingButton>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl bg-accent">
              <div className="grid items-center gap-6 pt-10 sm:grid-cols-2 sm:gap-0 sm:pt-0">
                <div className="px-6 pb-8 sm:px-16 sm:py-16">
                  <h2 className="max-w-md text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Need Assistance? Contact Us Anytime!
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Call us today at{" "}
                    <a
                      href="tel:+17073835600"
                      className="font-medium text-primary hover:underline"
                    >
                      (707) 383-5600
                    </a>
                  </p>
                  <div className="mt-8">
                    <BookingButton
                      size="lg"
                      className="h-auto w-full whitespace-normal rounded-2xl py-3 text-center text-base shadow-lg shadow-primary/30 sm:h-13 sm:w-auto sm:rounded-full sm:px-8 sm:py-0"
                    >
                      Get Your 420 Medical Evaluation
                    </BookingButton>
                  </div>
                </div>

                <div className="relative mx-auto aspect-[1014/1920] w-full max-w-[9rem] sm:max-w-[13rem]">
                  <Image
                    src="/get-your-card-second-last-section.webp"
                    alt="Friendly physician ready to help with your medical marijuana evaluation"
                    fill
                    sizes="(min-width: 640px) 208px, 144px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
