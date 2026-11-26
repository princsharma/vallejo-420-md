export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  licenseLabel: string;
  experience: string;
  specialty: string;
  photoSrc: string;
  hubBio: string;
  profileBio: string[];
  metaTitle: string;
  metaDescription: string;
};

export const doctors: Doctor[] = [
  {
    slug: "rick-rieser",
    name: "Dr. Rick Rieser, MD",
    credentials: "MD",
    licenseLabel: "Licensed in CA",
    experience: "Decades",
    specialty: "Nuclear Medicine",
    photoSrc: "/media/rick-rieser.webp",
    hubBio:
      "A licensed nuclear medicine specialist who provides thorough, patient-focused medical marijuana evaluations while following applicable California regulations.",
    profileBio: [],
    metaTitle: "Dr. Rick Rieser, MD | Medical Cannabis Doctor, Vallejo, CA",
    metaDescription:
      "Meet Dr. Rick Rieser, MD, a California-licensed nuclear medicine physician providing online medical cannabis evaluations at Vallejo 420 MD.",
  },
  {
    slug: "johnathan-miller",
    name: "Dr. Johnathan Miller, MD",
    credentials: "MD",
    licenseLabel: "Licensed in CA",
    experience: "8 years",
    specialty: "General Medicine",
    photoSrc: "/media/johnathan-miller.webp",
    hubBio:
      "A California-licensed physician who takes a comprehensive, patient-centered approach to state-compliant medical marijuana evaluations.",
    profileBio: [],
    metaTitle: "Dr. Johnathan Miller, MD | Medical Cannabis Doctor, Vallejo",
    metaDescription:
      "Meet Dr. Johnathan Miller, MD, a California-licensed physician offering online medical cannabis evaluations for Vallejo patients through Vallejo 420 MD.",
  },
];

export const doctorsHubOgImageSrc = "/media/our-doctors-opengraph.webp";

export function doctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function doctorProfilePath(slug: string): string {
  return `/our-doctors/${slug}/`;
}
