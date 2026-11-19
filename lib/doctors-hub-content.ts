import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Bone,
  Brain,
  ClipboardList,
  FileCheck,
  FileText,
  Heart,
  Headset,
  IdCard,
  MapPin,
  MessageCircle,
  Moon,
  Pill,
  Ribbon,
  Shield,
  Stethoscope,
  Video,
  Wifi,
} from "lucide-react";

/** Shared hero background for Our Doctors hub and individual doctor profiles. */
export const DOCTORS_PAGE_HERO_BG =
  "bg-gradient-to-br from-[#f8faf7] via-[#fcfdfb] to-[#e8f5ea]";

export const HUB_TRUST_ITEMS: {
  label: string;
  icon: LucideIcon;
}[] = [
  {
    label: "California-licensed physicians",
    icon: BadgeCheck,
  },
  {
    label: "HIPAA-secure telehealth visits",
    icon: Shield,
  },
  {
    label: "Local support team",
    icon: Headset,
  },
];

export const WHY_CHOOSE_ITEMS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Licensed in California",
    description:
      "Every doctor holds an active California medical license. You can verify it on the Medical Board of California website using the license number on the doctor's profile.",
    icon: BadgeCheck,
  },
  {
    title: "No Trip Out of Town",
    description:
      "You don't need to drive to Oakland, San Francisco, or Sacramento. Your visit takes place by video from your home in Vallejo.",
    icon: MapPin,
  },
  {
    title: "Private and Secure",
    description:
      "Visits take place on a HIPAA-compliant platform, and your health information stays between you and your doctor.",
    icon: Shield,
  },
  {
    title: "Help With First Visits and Renewals",
    description:
      "Whether you're new to the process or renewing a recommendation, our team walks you through each step.",
    icon: Heart,
  },
  {
    title: "Honest Answers",
    description:
      "The doctor makes the decision based on your health. If you don't qualify, the doctor explains why and may discuss other options.",
    icon: MessageCircle,
  },
];

/** Commonly discussed conditions; not a guarantee of eligibility. */
export const DISCUSSED_CONDITIONS: { label: string; icon: LucideIcon }[] = [
  { label: "Chronic Pain", icon: Activity },
  { label: "Arthritis", icon: Bone },
  { label: "Cancer", icon: Ribbon },
  { label: "Anxiety Disorders", icon: Brain },
  { label: "PTSD", icon: Heart },
  { label: "Insomnia", icon: Moon },
  { label: "Neurological Conditions", icon: Stethoscope },
  {
    label: "Other Qualifying Medical Conditions",
    icon: FileCheck,
  },
];

export const DISCUSSED_CONDITIONS_DISCLAIMER =
  "Eligibility is determined through an individual medical assessment and applicable California requirements. Having a particular condition does not automatically guarantee a recommendation.";

export const EVALUATION_STEPS: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "1",
    title: "Medical History Review",
    description:
      "You fill out a secure form about your medical history, current medications, and the condition you want to discuss. The doctor reviews it before your visit.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "Virtual Consultation",
    description:
      "You meet the doctor by private video. The doctor asks about your symptoms and treatment goals and discusses whether medical marijuana may be appropriate.",
    icon: Video,
  },
  {
    number: "3",
    title: "Clinical Assessment",
    description:
      "The doctor compares your condition with California's criteria and makes a decision based on clinical judgment.",
    icon: Stethoscope,
  },
  {
    number: "4",
    title: "Certification Decision",
    description:
      "If the doctor approves, you receive your medical marijuana recommendation. If not, the doctor may discuss other treatment options.",
    icon: FileCheck,
  },
];

export const PREP_CHECKLIST: { label: string; icon: LucideIcon }[] = [
  {
    label: "A valid government-issued photo ID",
    icon: IdCard,
  },
  {
    label: "Proof of your Vallejo or Solano County address",
    icon: MapPin,
  },
  {
    label: "A list of your current medications",
    icon: Pill,
  },
  {
    label: "Any medical records related to your condition",
    icon: FileText,
  },
  {
    label:
      "A device with a camera, a microphone, and stable internet connection",
    icon: Wifi,
  },
];

export const NEARBY_AREAS = [
  "Benicia",
  "American Canyon",
  "Fairfield",
  "Vacaville",
  "Napa",
  "Crockett",
  "Rodeo",
] as const;

export const VALLEJO_NEIGHBORHOODS =
  "downtown Vallejo, Mare Island, Glen Cove, and Hiddenbrooke";

export type DoctorsHubFaq = {
  question: string;
  answer: string;
};

export const DOCTORS_HUB_FAQS: DoctorsHubFaq[] = [
  {
    question:
      "Are your doctors licensed to recommend medical marijuana in California?",
    answer:
      "Yes. Every doctor holds an active California medical license. You can check a license on the Medical Board of California website.",
  },
  {
    question: "Do I need to visit an office in Vallejo?",
    answer:
      "No. We conduct evaluations by secure video when telehealth is clinically appropriate. If the doctor needs more information, the doctor will tell you.",
  },
  {
    question: "How long does the consultation take?",
    answer:
      "The length depends on your health history and questions. Plan for about 15 to 20 minutes, and don't feel rushed to finish sooner.",
  },
  {
    question: "What should I prepare before my appointment?",
    answer:
      "Have your photo ID, proof of address, a list of your medications, and any records about your condition. Find a quiet, private place with a good internet connection.",
  },
  {
    question: "Will the doctor ask for my medical history or records?",
    answer:
      "The doctor will ask about your medical history. Records can help, but you may not need them for every visit. Bring what you have.",
  },
  {
    question: "How does the doctor decide if I qualify?",
    answer:
      "The doctor reviews your condition and symptoms against California's criteria and uses clinical judgment to decide whether medical marijuana is appropriate for you.",
  },
  {
    question:
      "What happens if the doctor doesn't recommend medical marijuana for my condition?",
    answer:
      "The doctor will explain the decision and may discuss other treatment options. See our Refund Policy for details on fees when you do not receive a recommendation.",
  },
  {
    question: "Can I use my recommendation at Vallejo dispensaries?",
    answer:
      "A valid recommendation allows you to buy from state-licensed dispensaries. Each dispensary sets its own check-in process, so ask what it requires before you go.",
  },
  {
    question:
      "Do the same doctors handle renewals and first-time evaluations?",
    answer:
      "Our doctors handle both. Renewals are often quicker, and many patients can see the same doctor again.",
  },
  {
    question: "Do I need a county medical marijuana ID card?",
    answer:
      "No. The county ID card is voluntary. Solano County Public Health administers the program. Contact them for current requirements and fees.",
  },
  {
    question: "How do doctors protect my privacy?",
    answer:
      "We use a HIPAA-compliant platform, and we don't sell your information. Read our Privacy Policy and HIPAA Compliance pages for details.",
  },
];
