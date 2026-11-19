import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DoctorRickRieserProfileView } from "@/components/doctor-rick-rieser-profile";
import { DoctorJohnathanMillerProfileView } from "@/components/doctor-johnathan-miller-profile";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  doctorBySlug,
  doctorProfilePath,
  doctors,
} from "@/lib/doctors";
import { getExtendedDoctorProfile } from "@/lib/doctor-profiles/rick-rieser";
import { johnathanMillerProfile } from "@/lib/doctor-profiles/johnathan-miller";
import { DOCTORS_PAGE_HERO_BG } from "@/lib/doctors-hub-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctorBySlug(slug);
  if (!doctor) {
    return { title: "Doctor Not Found" };
  }
  return {
    title: doctor.metaTitle,
    description: doctor.metaDescription,
    alternates: {
      canonical: doctorProfilePath(slug),
    },
  };
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = doctorBySlug(slug);
  if (!doctor) {
    notFound();
  }

  const extendedProfile = getExtendedDoctorProfile(slug);

  const breadcrumbs = (
    <Breadcrumbs
      alignWithPage
      compact
      className="pt-0 pb-0"
      items={[
        { label: "Our Doctors", href: "/our-doctors/" },
        { label: doctor.name },
      ]}
    />
  );

  return (
    <>
      <main className="flex-1 bg-background">
        {slug === "johnathan-miller" ? (
          <DoctorJohnathanMillerProfileView
            doctor={doctor}
            profile={johnathanMillerProfile}
            breadcrumbs={breadcrumbs}
          />
        ) : extendedProfile ? (
          <DoctorRickRieserProfileView
            doctor={doctor}
            profile={extendedProfile}
            breadcrumbs={breadcrumbs}
          />
        ) : (
          <>
        <section className={`${DOCTORS_PAGE_HERO_BG} pb-12 md:pb-16 pt-3 md:pt-4`}>
          <div className="ds-container">
            {breadcrumbs}
            <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
              <DoctorPhotoPlaceholder label={doctor.name} photoSrc={doctor.photoSrc} />
              <div>
                <h1 className="ds-h1 text-balance text-primary">
                  {doctor.name.includes(", MD") ? (
                    <>
                      <span className="text-dark-green">
                        {doctor.name.replace(", MD", ",")}
                      </span>
                      <span className="text-amber"> MD</span>
                    </>
                  ) : (
                    <span className="text-dark-green">{doctor.name}</span>
                  )}
                </h1>
                <p className="ds-lead mt-3 text-dark-green">
                  {doctor.licenseLabel} · {doctor.credentials}
                </p>
                <p className="ds-body mt-1 text-black/90">
                  Experience: {doctor.experience} · {doctor.specialty}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <BookingButton
                    size="lg"
                    className="h-12 rounded-lg px-6 text-base font-semibold"
                  >
                    Book With This Doctor
                  </BookingButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-lg px-6 text-base font-semibold"
                    render={<Link href="/our-doctors/" />}
                    nativeButton={false}
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    All doctors
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-section bg-white">
          <div className="ds-container max-w-3xl">
            <h2 className="ds-h2 text-balance">
              <span className="text-dark-green">About </span>
              <span className="text-amber">{doctor.name}</span>
            </h2>
            <div className="ds-body mt-6 space-y-4 text-pretty text-black/90">
              {doctor.profileBio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="ds-small mt-8 text-pretty text-black/90">
              Verify an active California medical license on the{" "}
              <a
                href="https://www.mbc.ca.gov/Lookup/LicenseLookup.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-dark-green underline-offset-2 hover:underline"
              >
                Medical Board of California
                <ExternalLink className="ms-1 inline size-3.5 align-text-bottom" aria-hidden />
              </a>{" "}
              using the license number listed on this profile once confirmed.
            </p>
          </div>
        </section>

        <section className="bg-section-green py-12 md:py-16">
          <div className="ds-container text-center">
            <h2 className="ds-h3 text-balance">Ready for your evaluation?</h2>
            <p className="ds-body mx-auto mt-3 max-w-xl text-pretty text-black/90">
              Schedule a secure video visit with a California-licensed physician.
              A recommendation is provided only if the doctor determines it is
              appropriate for you.
            </p>
            <div className="mt-6">
              <BookingButton
                size="lg"
                className="h-12 rounded-lg px-6 text-base font-semibold"
              >
                Book a Vallejo Evaluation
              </BookingButton>
            </div>
          </div>
        </section>
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
