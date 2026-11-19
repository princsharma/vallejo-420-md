import type { LucideIcon } from "lucide-react";
import { FileCheck, Shield, Stethoscope, Video } from "lucide-react";

import { DISCUSSED_CONDITIONS_DISCLAIMER } from "@/lib/doctors-hub-content";

export type DoctorProfileFaq = {
  question: string;
  answer: string;
};

export type DoctorExtendedProfile = {
  tagline: string;
  heroIntro: string[];
  heroCtaLabel: string;
  credentialsIntro: string;
  credentialItems: { label: string; value: string }[];
  npiRegistryUrl: string;
  npiRegistryLabel: string;
  education: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  aboutTitle: string;
  aboutParagraphs: string[];
  evaluationsTitle: string;
  evaluationsParagraphs: string[];
  conditionsTitle: string;
  conditionsIntro: string;
  conditions: string[];
  conditionsDisclaimer: string;
  approachTitle: string;
  approachIntro: string;
  approachItems: { title: string; description: string; icon: LucideIcon }[];
  scheduleTitle: string;
  scheduleSteps: { number: string; title: string; description: string }[];
  scheduleCtaLabel: string;
  faqs: DoctorProfileFaq[];
  closingTitle: string;
  closingParagraphs: string[];
  closingCtaLabel: string;
};

export const rickRieserProfile: DoctorExtendedProfile = {
  tagline: "Nuclear Medicine Physician | Medical Cannabis Evaluations",
  heroIntro: [
    "Dr. Rick Rieser, MD, is a California physician specializing in Nuclear Medicine who provides medical cannabis evaluations. He brings extensive clinical experience and a thoughtful approach to reviewing patients' medical histories, health concerns, and eligibility for medical marijuana recommendations.",
    "Through online consultations, Dr. Rieser helps California patients understand whether medical cannabis may be an appropriate option based on their individual health circumstances and applicable state guidelines.",
  ],
  heroCtaLabel: "Schedule Your Medical Marijuana Evaluation",
  credentialsIntro:
    "Dr. Rick Rieser is registered with the National Plan and Provider Enumeration System (NPPES), maintained by the Centers for Medicare & Medicaid Services (CMS).",
  credentialItems: [
    { label: "NPI Number", value: "1740735737" },
    { label: "Provider Status", value: "Active in the NPI Registry" },
    { label: "Licensed State", value: "California" },
    { label: "California License Number", value: "G55156" },
  ],
  npiRegistryUrl:
    "https://npiregistry.cms.hhs.gov/provider-view/1740735737",
  npiRegistryLabel: "View NPI Registry",
  education: [
    {
      title: "University of Louisville School of Medicine",
      subtitle: "Doctor of Medicine (MD), Class of 1983",
      description:
        "Dr. Rieser earned his medical degree from the University of Louisville School of Medicine.",
    },
    {
      title: "American Board of Nuclear Medicine",
      subtitle: "Specialty: Nuclear Medicine",
      description:
        "His professional qualifications include board certification through the American Board of Nuclear Medicine.",
    },
  ],
  aboutTitle: "About Dr. Rick Rieser",
  aboutParagraphs: [
    "Dr. Rick Rieser practices in Nuclear Medicine, a medical specialty focused on diagnostic imaging and the evaluation of various health conditions.",
    "His clinical approach emphasizes understanding each patient's medical background, symptoms, and treatment history before making healthcare recommendations.",
    "When evaluating patients interested in medical cannabis, he considers their individual circumstances and whether a recommendation is medically appropriate under California guidelines.",
  ],
  evaluationsTitle: "Medical Cannabis Evaluations at Vallejo 420 MD",
  evaluationsParagraphs: [
    "At Vallejo 420 MD, patients can access convenient online medical cannabis evaluations through consultations with California-licensed physicians. Dr. Rick Rieser, MD, takes an individualized approach to each evaluation, reviewing patients' medical histories, current health concerns, and relevant treatment information.",
    "During the video consultation, he assesses whether medical cannabis may be an appropriate option based on each patient's individual medical circumstances and California guidelines. If medically appropriate, a written medical cannabis recommendation may be provided following the evaluation.",
  ],
  conditionsTitle: "Conditions Reviewed During Medical Cannabis Evaluations",
  conditionsIntro:
    "Depending on the patient's medical history and individual circumstances, medical cannabis evaluations may involve reviewing conditions such as:",
  conditions: [
    "Chronic Pain",
    "Arthritis",
    "Cancer",
    "Anxiety Disorders",
    "PTSD",
    "Insomnia",
    "Neurological Conditions",
    "Other Qualifying Medical Conditions",
  ],
  conditionsDisclaimer: DISCUSSED_CONDITIONS_DISCLAIMER,
  approachTitle: "A Patient-Centered Approach to Medical Evaluations",
  approachIntro:
    "Choosing a physician for a medical marijuana evaluation is an important healthcare decision. Dr. Rick Rieser emphasizes careful medical assessment and responsible recommendations. Patients can expect an evaluation process focused on:",
  approachItems: [
    {
      title: "Individual Medical Assessment",
      description:
        "Each patient's medical history, symptoms, and relevant treatment information are considered.",
      icon: Stethoscope,
    },
    {
      title: "Responsible Medical Recommendations",
      description:
        "Recommendations are based on clinical judgment and applicable California medical cannabis guidelines.",
      icon: FileCheck,
    },
    {
      title: "Convenient Online Consultations",
      description:
        "Patients can connect with a physician through the online consultation process without needing to travel to a clinic for the video appointment.",
      icon: Video,
    },
    {
      title: "Patient Privacy",
      description:
        "Patient information should be handled in accordance with applicable healthcare privacy requirements.",
      icon: Shield,
    },
  ],
  scheduleTitle: "How to Schedule an Online Evaluation",
  scheduleSteps: [
    {
      number: "1",
      title: "Sign Up and Schedule",
      description:
        "Complete the online registration process and select an available appointment.",
    },
    {
      number: "2",
      title: "Meet With the Physician",
      description:
        "Connect with the physician through a video consultation to discuss your medical history and health concerns.",
    },
    {
      number: "3",
      title: "Receive Your Evaluation",
      description:
        "The physician reviews your eligibility and determines whether a medical cannabis recommendation is appropriate under California guidelines.",
    },
  ],
  scheduleCtaLabel: "Start Your Medical Marijuana Evaluation",
  faqs: [
    {
      question: "Is Dr. Rick Rieser a licensed physician in California?",
      answer:
        "Dr. Rick Rieser is identified as a California physician with medical license number G55156. Patients can verify his current license status through the Medical Board of California.",
    },
    {
      question: "Does Dr. Rick Rieser offer online medical marijuana evaluations?",
      answer:
        "Patients can use Vallejo 420 MD's online consultation process to connect with a physician for a medical marijuana evaluation.",
    },
    {
      question: "What conditions can be reviewed during an evaluation?",
      answer:
        "Medical history involving chronic pain, arthritis, cancer, PTSD, and other qualifying conditions may be reviewed. The physician determines eligibility based on individual medical circumstances.",
    },
    {
      question: "How long does a medical marijuana consultation take?",
      answer:
        "Appointment duration can vary depending on the patient's medical history and the evaluation required. Contact Vallejo 420 MD for current appointment details.",
    },
    {
      question: "Will I automatically receive a medical marijuana recommendation?",
      answer:
        "No. A recommendation is not guaranteed. The physician must complete an appropriate medical evaluation and determine whether medical cannabis is appropriate.",
    },
    {
      question: "How can I schedule an appointment with Dr. Rick Rieser?",
      answer:
        "You can begin through the online application process at Vallejo 420 MD or contact the team at (707) 383-5600.",
    },
  ],
  closingTitle: "Schedule Your Medical Marijuana Evaluation Today",
  closingParagraphs: [
    "Taking the first step toward understanding your medical cannabis options starts with a professional evaluation.",
    "Connect with Vallejo 420 MD to learn more about the online consultation process and speak with a physician about your medical needs.",
  ],
  closingCtaLabel: "Apply for Your Medical Marijuana Evaluation",
};

const extendedProfiles: Record<string, DoctorExtendedProfile> = {
  "rick-rieser": rickRieserProfile,
};

export function getExtendedDoctorProfile(
  slug: string,
): DoctorExtendedProfile | undefined {
  return extendedProfiles[slug];
}
