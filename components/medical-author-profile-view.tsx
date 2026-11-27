import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Link2, Mail } from "lucide-react";

import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import { Button } from "@/components/ui/button";
import type { MedicalAuthorProfile } from "@/lib/medical-author-profiles/types";
import { DOCTORS_PAGE_HERO_BG } from "@/lib/doctors-hub-content";
import { INTERACTIVE_CARD_HOVER } from "@/lib/interactive-card-hover";

const AUTHOR_CONTACT_CARD =
  "group flex h-full min-h-0 flex-col rounded-2xl border border-primary/15 border-t-4 border-t-primary/30 bg-light-green p-6 shadow-[0_4px_20px_rgb(11_93_42_/_6%)] transition-[transform,border-color,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:border-t-primary hover:bg-section-green hover:shadow-[0_8px_24px_rgb(11_93_42_/_12%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7";

const AUTHOR_CONTACT_ICON =
  "flex size-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-colors duration-200 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none";

export function MedicalAuthorProfileView({
  profile,
  breadcrumbs,
}: {
  profile: MedicalAuthorProfile;
  breadcrumbs?: ReactNode;
}) {
  return (
    <>
      <section className={`${DOCTORS_PAGE_HERO_BG} pb-12 pt-3 md:pb-16 md:pt-4 lg:pb-20`}>
        <div className="ds-container">
          {breadcrumbs}
          <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
            <DoctorPhotoPlaceholder label={profile.name} photoSrc={profile.photoSrc} />
            <div className="text-center lg:text-left">
              <h1 className="ds-h1 text-balance text-primary">
                <span className="text-dark-green">{profile.name}</span>
              </h1>
              <p className="ds-lead mt-3 font-semibold text-pretty text-dark-green">
                {profile.tagline}
              </p>
              <div className="ds-body mt-5 space-y-4 text-pretty text-black/90">
                {profile.heroIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="h-12 rounded-lg px-6 text-base font-semibold"
                  render={<Link href={profile.heroCtaHref} />}
                  nativeButton={false}
                >
                  {profile.heroCtaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="text-dark-green">Author at a </span>
            <span className="text-amber">Glance</span>
          </h2>
          <p className="ds-lead mt-4 text-pretty text-black/90">
            {profile.glanceIntro}
          </p>
          <dl className="mx-auto mt-8 grid w-full max-w-2xl list-none gap-2.5 sm:grid-cols-2">
            {profile.glanceItems.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-xl border border-border bg-white px-3 py-3 text-center shadow-[0_4px_16px_rgb(11_93_42_/_6%)] transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-light-green hover:shadow-[0_8px_24px_rgb(11_93_42_/_18%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:px-3.5 md:py-3.5 ${profile.glanceItems.length === 3 && index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.3125rem)]"
                  : ""
                  }`}
              >
                <dt className="ds-body font-semibold text-dark-green">{item.label}</dt>
                <dd className="ds-small mt-1.5 font-semibold leading-snug text-pretty text-dark-green">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ds-section bg-white">
        <div className="ds-container mx-auto max-w-3xl">
          <h2 className="ds-h2 text-balance text-center">
            <span className="text-dark-green">About </span>
            <span className="text-amber">{profile.shortName}</span>
          </h2>
          <div className="ds-lead mt-6 space-y-4 text-pretty text-black/90 text-center mx-auto">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="ds-section bg-warm-white" id="areas-of-expertise">
        <div className="ds-container">
          <h2 className="ds-h2 mx-auto max-w-3xl text-center text-balance">
            <span className="text-dark-green">Professional </span>
            <span className="text-amber">Background</span>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            <article
              className={`flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-8 ${INTERACTIVE_CARD_HOVER}`}
            >
              <h3 className="ds-h4 text-dark-green">Education</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {profile.educationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="ds-body text-pretty text-black/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article
              className={`flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-8 ${INTERACTIVE_CARD_HOVER}`}
            >
              <h3 className="ds-h4 text-dark-green">Experience</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {profile.experienceItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="ds-body text-pretty text-black/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article
              className={`flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-8 ${INTERACTIVE_CARD_HOVER}`}
            >
              <h3 className="ds-h4 text-dark-green">Areas of Expertise</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {profile.expertiseAreas.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="ds-body text-pretty text-black/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-section bg-dark-green">
        <div className="ds-container">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h2 className="ds-h2 text-balance">
              <span className="text-white">Coverage at </span>
              <span className="text-amber">Vallejo 420 MD</span>
            </h2>
            <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">
              {profile.coverageIntro}
            </p>
            <ul className="mx-auto mt-10 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center md:mt-12 md:gap-x-10">
              {profile.coverageCities.map((city) => (
                <li
                  key={city}
                  className="group flex min-w-0 items-center gap-2.5 motion-reduce:transition-none"
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-amber transition-colors duration-200 group-hover:bg-white motion-reduce:transition-none"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap text-base font-semibold text-white transition-colors duration-200 group-hover:text-amber md:text-lg motion-reduce:transition-none">
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ds-section bg-section-green">
        <div className="ds-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">Contact & </span>
              <span className="text-amber">Verified Profiles</span>
            </h2>
            <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">
              {profile.contactIntro}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className={AUTHOR_CONTACT_CARD}
            >
              <span className={AUTHOR_CONTACT_ICON}>
                <Mail className="size-5" aria-hidden />
              </span>
              <h3 className="ds-h4 mt-5 text-dark-green">Email</h3>
              <span className="ds-body mt-2 inline-flex whitespace-nowrap font-semibold text-dark-green underline-offset-4 group-hover:underline">
                {profile.email}
              </span>
              <p className="ds-small mt-3 text-pretty text-black/90">
                Questions about articles or topics you&apos;d like us to cover.
              </p>
            </a>

            <a
              href={profile.linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={AUTHOR_CONTACT_CARD}
            >
              <span className={AUTHOR_CONTACT_ICON}>
                <Link2 className="size-5" aria-hidden />
              </span>
              <h3 className="ds-h4 mt-5 text-dark-green">LinkedIn</h3>
              <span className="ds-body mt-2 inline-flex font-semibold text-dark-green underline-offset-4 group-hover:underline">
                {profile.linkedIn.label}
              </span>
              <p className="ds-small mt-3 text-pretty text-black/90">
                Connect on LinkedIn for professional background and updates.
              </p>
            </a>

            <article className={AUTHOR_CONTACT_CARD}>
              <span className={AUTHOR_CONTACT_ICON}>
                <BadgeCheck className="size-5" aria-hidden />
              </span>
              <h3 className="ds-h4 mt-5 whitespace-nowrap text-dark-green">
                {profile.externalLinksLabel.replace(/:$/, "")}
              </h3>
              <ul className="mt-2 flex flex-wrap list-disc text-dark-green gap-x-6 pl-5">
                {profile.externalLinks.map((link) => (
                  <li key={link.label} className="min-w-0 shrink-0">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-body mt-2 font-semibold text-dark-green underline-offset-4 hover:text-primary hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="ds-small mt-3 text-pretty text-black/90">
                Independent sources to confirm professional information.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-section border-t border-white/15 bg-dark-green">
        <div className="ds-container max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="text-white">{profile.disclaimerTitle}</span>
          </h2>
          <p className="ds-body ds-mt-after-heading text-pretty text-white/85">
            {profile.disclaimer}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 rounded-lg border border-white/40 bg-transparent px-6 text-base font-semibold text-white shadow-none hover:bg-white/10"
              render={<Link href="/editorial-team/" />}
              nativeButton={false}
            >
              Back to Editorial Team
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}