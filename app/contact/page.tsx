import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Vallejo 420 MD | Call, Email or Visit Our Office",
  description:
    "Get in touch with Vallejo 420 MD by phone, email, or visit us at 630 Tennessee St Unit 2 in Vallejo, California.",
  alternates: {
    canonical: "/contact/",
  },
};

const mapUrl =
  "https://www.google.com/maps?q=630%20Tennessee%20St%20Unit%202%2C%20Vallejo%2C%20CA%2094590&output=embed";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=630%20Tennessee%20St%20Unit%202%2C%20Vallejo%2C%20CA%2094590";

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} alignWithPage compact className="bg-background" />
      <main className="flex-1 bg-warm-white">
        <section className=" bg-background">
          <div className="ds-container py-8 md:py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
              <div className="order-2 text-center lg:order-1 lg:text-left">
                <h1 className="ds-h1 text-balance">
                  <span className="text-dark-green">Get in touch with</span>
                  <span className="text-amber"> Vallejo 420 MD</span>
                </h1>
                <p className="ds-lead mx-auto mt-4 max-w-xl text-pretty text-black/90 lg:mx-0">
                  Have a question, an idea, or just want to say hello? Reach out and our team will get back to you. Call, email, or send a message below, whichever is easiest for you.

                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber px-6 text-base font-semibold text-white transition-colors hover:bg-[#d4922f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                  >
                    <Phone className="size-4" aria-hidden />
                    Call our team
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-4xl border border-border bg-accent shadow-sm">
                  <Image
                    src="/media/contact-us-vallejo.webp"
                    alt="Vallejo 420 MD team member ready to help"
                    width={1536}
                    height={1024}
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
            <div className="mx-auto max-w-3xl text-center">
              <p className="ds-eyebrow">Reach us</p>
              <h2 className="ds-h2 mt-2 text-balance capitalize">
                <span className="text-dark-green">We’d love to </span>
                <span className="text-amber">Hear from you</span>
              </h2>
              <p className="ds-lead mx-auto mt-4 max-w-xl text-pretty text-black/90">
                Call, email, or visit our Vallejo office. Choose whichever works
                best for you.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-transparent bg-[#CFEED2] p-6 shadow-sm transition-[transform,border-color,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:border-amber/70 hover:border-t-amber hover:shadow-[0_16px_36px_rgb(0_0_0_/_22%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-amber/10 text-[#c47a15] transition-colors duration-200 group-hover:bg-amber group-hover:text-white motion-reduce:transition-none">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <h3 className="ds-h4 mt-5 text-dark-green transition-colors duration-200 group-hover:text-[#b87317]">
                  Find us
                </h3>
                <address className="ds-body mt-2 not-italic text-foreground transition-colors duration-200 group-hover:text-dark-green">
                  {contactInfo.streetAddress}
                  <br />
                  {contactInfo.addressLocality}, {contactInfo.addressRegion}{" "}
                  {contactInfo.postalCode}
                </address>
                <p className="ds-small mt-3 text-black/90 transition-colors duration-200 group-hover:text-foreground">
                  Visit us during opening hours, or write to us at this address.
                </p>
              </a>

              <a
                href={contactInfo.phoneHref}
                className="group flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-transparent bg-[#CFEED2] p-6 shadow-sm transition-[transform,border-color,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:border-amber/70 hover:border-t-amber hover:shadow-[0_16px_36px_rgb(0_0_0_/_22%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-amber/10 text-[#c47a15] transition-colors duration-200 group-hover:bg-amber group-hover:text-white motion-reduce:transition-none">
                  <Phone className="size-5" aria-hidden />
                </span>
                <h3 className="ds-h4 mt-5 text-dark-green transition-colors duration-200 group-hover:text-[#b87317]">
                  Phone
                </h3>
                <span className="ds-body mt-2 inline-flex font-semibold text-amber underline-offset-4 transition-colors duration-200 group-hover:text-[#b87317] group-hover:underline">
                  {contactInfo.phone}
                </span>
                <p className="ds-small mt-3 text-black/90 transition-colors duration-200 group-hover:text-foreground">
                  Best for quick questions or anything time-sensitive.
                </p>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-transparent bg-[#CFEED2] p-6 shadow-sm transition-[transform,border-color,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:border-amber/70 hover:border-t-amber hover:shadow-[0_16px_36px_rgb(0_0_0_/_22%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-amber/10 text-[#c47a15] transition-colors duration-200 group-hover:bg-amber group-hover:text-white motion-reduce:transition-none">
                  <Mail className="size-5" aria-hidden />
                </span>
                <h3 className="ds-h4 mt-5 text-dark-green transition-colors duration-200 group-hover:text-[#b87317]">
                  Email
                </h3>
                <span className="ds-body mt-2 inline-flex break-all font-semibold text-amber underline-offset-4 transition-colors duration-200 group-hover:text-[#b87317] group-hover:underline">
                  {contactInfo.email}
                </span>
                <p className="ds-small mt-3 text-black/90 transition-colors duration-200 group-hover:text-foreground">
                  Great for anything non-urgent. We reply within one business day.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="ds-container grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="ds-eyebrow text-amber">Our location</p>
              <h2 className="ds-h2 mt-2 text-balance">
                <span className="text-dark-green">Visit us </span>
                <span className="text-amber">in Vallejo</span>
              </h2>
              <p className="ds-body ds-mt-after-heading text-dark-green">
                {contactInfo.address}
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/70 bg-white p-4">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden />
                <div>
                  <p className="ds-body font-bold text-dark-green">Open daily</p>
                  <p className="ds-body mt-1 text-black/90">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="ds-body mt-5 inline-flex items-center gap-2 font-semibold text-amber underline-offset-4 hover:text-dark-green"
              >
                Get directions
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <iframe
                title="Map showing Vallejo 420 MD at 630 Tennessee St Unit 2, Vallejo, CA 94590"
                src={mapUrl}
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[300px] w-full sm:h-[380px]"
              />
            </div>
          </div>
        </section>

        <section className="ds-section bg-dark-green py-12 md:py-16">
          <div className="ds-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="ds-h2 text-balance text-white">
                What happens after you reach out
              </h2>
              <p className="ds-lead mx-auto mt-4 max-w-3xl text-pretty text-white/85">
                Calls during business hours are usually answered right away, or
                returned within a few hours. Emails and messages get a reply
                within one business day, often sooner. If your question needs a
                specialist, we’ll pass it to the right person on our team.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
