import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Ban,
  Monitor,
  Shield,
  Stethoscope,
} from "lucide-react";

import type { DoctorProfileFaq } from "@/lib/doctor-profiles/rick-rieser";

export type MillerExtendedProfile = {
  pageTitle: string;
  tagline: string;
  heroIntro: string[];
  heroCtaLabel: string;
  credentialsTitle: string;
  credentialsIntro: string;
  credentialLines: { label: string; value: string }[];
  credentialsClosing: string;
  educationTitle: string;
  educationIntro: string;
  education: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  aboutParagraphs: string[];
  evaluationsTitle: string;
  evaluationsIntro: string;
  evaluationBullets: string[];
  evaluationsClosing: string;
  expectTitle: string;
  expectIntro: string;
  expectSteps: { number: string; title: string; description: string }[];
  expectCtaLabel: string;
  whyTitle: string;
  whyIntro: string;
  whyItems: { title: string; description: string; icon: LucideIcon }[];
  faqs: DoctorProfileFaq[];
  closingTitle: string;
  closingParagraphs: string[];
  closingCtaLabel: string;
};

export const johnathanMillerProfile: MillerExtendedProfile = {
  pageTitle: "Meet Dr. Johnathan Miller, MD",
  tagline: "Physician Profile | Medical Cannabis Evaluations",
  heroIntro: [
    "Dr. Johnathan Miller, MD, is a physician whose professional background includes general medicine and postgraduate training in orthopaedic surgery. His medical education and clinical training provide the foundation for his approach to patient evaluations.",
    "Through Vallejo 420 MD, California residents can connect with independent, licensed physicians for medical cannabis evaluations. The platform provides an online process for patients seeking to discuss whether medical cannabis may be appropriate for their individual health circumstances.",
  ],
  heroCtaLabel: "Explore Your Medical Cannabis Evaluation Options",
  credentialsTitle: "Medical Background and Credentials",
  credentialsIntro:
    "Dr. Johnathan Miller's professional profile lists the following educational and training details:",
  credentialLines: [
    { label: "Medical Degree", value: "Doctor of Medicine (MD)" },
    { label: "Medical Specialty Listed", value: "General Medicine" },
    {
      label: "Postgraduate Training",
      value: "Orthopaedic Surgery",
    },
    {
      label: "Medical School",
      value: "Columbia University Vagelos College of Physicians and Surgeons",
    },
    {
      label: "Residency Institution",
      value: "Washington University/B-JH/SLCH Consortium",
    },
    {
      label: "Undergraduate Institution",
      value: "University of Alabama at Birmingham",
    },
  ],
  credentialsClosing:
    "His professional background includes medical education, postgraduate training, and clinical experience.",
  educationTitle: "Education and Professional Training",
  educationIntro:
    "Dr. Miller's listed educational background includes the following institutions and qualifications.",
  education: [
    {
      title: "Columbia University Vagelos College of Physicians and Surgeons",
      subtitle: "Doctor of Medicine (MD), Class of 2018",
      description:
        "Dr. Miller's profile lists a Doctor of Medicine (MD) degree from Columbia University Vagelos College of Physicians and Surgeons, with a graduation year of 2018.",
    },
    {
      title: "Washington University/B-JH/SLCH Consortium",
      subtitle: "Postgraduate residency, Orthopaedic Surgery (2018-2020)",
      description:
        "His profile lists postgraduate residency training in orthopaedic surgery from 2018 to 2020.",
    },
    {
      title: "University of Alabama at Birmingham",
      subtitle: "Bachelor of Arts, Foreign Languages and Literatures (Spanish)",
      description:
        "Dr. Miller completed a Bachelor of Arts in Foreign Languages and Literatures, with a concentration in Spanish, from 2009 to 2014. His listed academic distinction is Summa Cum Laude.",
    },
  ],
  aboutParagraphs: [
    "Dr. Johnathan Miller is a physician with a medical education background and postgraduate training in orthopaedic surgery. His professional profile reflects training across different areas of education and clinical medicine.",
    "Medical evaluations require consideration of each patient's individual health circumstances. Factors such as medical history, current symptoms, existing treatments, and other relevant information may help a physician determine the appropriate next steps.",
    "Through Vallejo 420 MD, patients can access an online platform that connects them with independent California-licensed physicians for medical cannabis evaluations.",
  ],
  evaluationsTitle: "Medical Cannabis Evaluations Through Vallejo 420 MD",
  evaluationsIntro:
    "Medical cannabis evaluations involve an individual review of a patient's health circumstances. A physician considers the available medical information and determines whether a recommendation is appropriate under applicable California requirements. During an evaluation, the physician may:",
  evaluationBullets: [
    "Review your medical history and relevant health information.",
    "Discuss your current symptoms and medical concerns.",
    "Review relevant medications and previous treatments.",
    "Ask questions about your health circumstances.",
    "Determine whether further examination or medical information is needed.",
    "Assess whether a medical cannabis recommendation is appropriate.",
  ],
  evaluationsClosing:
    "The evaluating physician makes all clinical decisions independently. An evaluation does not guarantee approval or a medical cannabis recommendation.",
  expectTitle: "What to Expect During an Online Medical Cannabis Evaluation",
  expectIntro:
    "Vallejo 420 MD offers an online process for connecting California residents with independent physicians.",
  expectSteps: [
    {
      number: "1",
      title: "Complete the Online Intake Form",
      description:
        "Provide the requested personal information and relevant medical history through the online registration process.",
    },
    {
      number: "2",
      title: "Schedule an Appointment",
      description:
        "Choose an available appointment time through the platform.",
    },
    {
      number: "3",
      title: "Connect With a Physician",
      description:
        "Attend your scheduled consultation and discuss your medical history, symptoms, and health concerns with the evaluating physician.",
    },
    {
      number: "4",
      title: "Complete Your Medical Evaluation",
      description:
        "The physician reviews your information and determines whether the evaluation can be completed through telehealth or whether additional examination or information is needed.",
    },
    {
      number: "5",
      title: "Review the Physician's Decision",
      description:
        "If the physician determines that a medical cannabis recommendation is appropriate, you will receive information about the recommendation and the applicable next steps.",
    },
  ],
  expectCtaLabel: "Start Your Online Evaluation",
  whyTitle: "Why Choose Vallejo 420 MD?",
  whyIntro:
    "Vallejo 420 MD is an online platform that connects California residents with independent physicians for medical cannabis evaluations.",
  whyItems: [
    {
      title: "Online Access",
      description:
        "Complete the registration process and connect with a physician through the platform without initially visiting a physical office.",
      icon: Monitor,
    },
    {
      title: "Independent Medical Evaluations",
      description:
        "Physicians make their own clinical decisions based on individual patient circumstances and applicable requirements.",
      icon: Stethoscope,
    },
    {
      title: "Patient Privacy",
      description:
        "The platform describes its privacy and security practices in its HIPAA Compliance Policy.",
      icon: Shield,
    },
    {
      title: "Transparent Pricing",
      description:
        "Evaluation fees are disclosed during the scheduling process so patients can review the applicable costs before confirming a service.",
      icon: BadgeDollarSign,
    },
    {
      title: "No Guaranteed Recommendations",
      description:
        "Every patient receives an individual evaluation. A recommendation is issued only when the evaluating physician determines it is appropriate.",
      icon: Ban,
    },
  ],
  faqs: [
    {
      question: "Who is Dr. Johnathan Miller, MD?",
      answer:
        "Dr. Johnathan Miller is a physician whose listed professional background includes general medicine and postgraduate training in orthopaedic surgery. His medical education details are included in his professional profile.",
    },
    {
      question: "What is Dr. Miller's medical background?",
      answer:
        "His listed education includes a Doctor of Medicine degree from Columbia University Vagelos College of Physicians and Surgeons, residency training at Washington University/B-JH/SLCH Consortium, and undergraduate education at the University of Alabama at Birmingham.",
    },
    {
      question:
        "Can I schedule an online medical cannabis evaluation through Vallejo 420 MD?",
      answer:
        "Vallejo 420 MD connects California residents with independent physicians for online medical cannabis evaluations. Appointment availability with a specific physician should be confirmed through the platform.",
    },
    {
      question: "How does a medical cannabis evaluation work?",
      answer:
        "The evaluating physician reviews the patient's medical history, discusses relevant health concerns, and determines whether a medical cannabis recommendation is appropriate under applicable requirements.",
    },
    {
      question: "Do I need to provide my medical history?",
      answer:
        "You should be prepared to provide relevant medical history and information about your health concerns. The physician may request additional information or an examination when needed.",
    },
    {
      question:
        "Can a physician issue a medical cannabis recommendation without an in-person visit?",
      answer:
        "California permits certain medical services through telehealth, but the physician must meet the applicable examination and standard-of-care requirements. The physician determines whether a remote evaluation is appropriate for the individual patient.",
    },
    {
      question: "Is a medical cannabis recommendation guaranteed?",
      answer:
        "No. A recommendation is not guaranteed. The decision rests solely with the evaluating physician following an individual medical assessment.",
    },
    {
      question: "Does Vallejo 420 MD provide medical treatment?",
      answer:
        "No. Vallejo 420 MD operates as a platform connecting patients with independent licensed physicians. Medical evaluations and recommendations are provided by the physicians, not by the platform.",
    },
  ],
  closingTitle: "Connect With a Physician Through Vallejo 420 MD",
  closingParagraphs: [
    "If you are considering a medical cannabis evaluation in California, Vallejo 420 MD provides an online platform to connect with independent licensed physicians.",
    "Complete the online registration process to explore available appointment options and learn more about the evaluation process.",
  ],
  closingCtaLabel: "Get Started With Your Medical Cannabis Evaluation",
};
