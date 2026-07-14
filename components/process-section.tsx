import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/booking-dialog";

const STEPS = [
  {
    number: "01",
    image: "/section-three-one.webp",
    title: "Sign Up and Schedule",
    description:
      "Sign up easily, fill out a quick form, and schedule your appointment at a time that works best for you.",
  },
  {
    number: "02",
    image: "/section-three-two.webp",
    title: "Connect with Our MMJ Doctor",
    description:
      "Join a video call with a licensed medical marijuana doctor who will evaluate your condition with care and expertise.",
  },
  {
    number: "03",
    image: "/section-three-three.webp",
    title: "Get Prescription Letter",
    description:
      "The doctor will issue a prescription letter, allowing you to immediately access medical marijuana from a state-approved dispensary.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-accent py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-primary">
              How We Work
            </Badge>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get Your Medical Marijuana Card in Vallejo in 3 Easy Steps
            </h2>
          </div>
          <BookingButton
            size="lg"
            className="h-13 rounded-full px-8 text-base shadow-lg shadow-primary/30"
          >
            Apply Your Vallejo Card Now
          </BookingButton>
        </div>

        <ol className="mt-12 list-none space-y-5">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="text-2xl font-bold text-primary/40">
                {step.number}
              </span>
              <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
