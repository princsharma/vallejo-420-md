import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How Vallejo 420 MD researches, fact-checks, and reviews medical marijuana content to keep it accurate, ethical, and useful.",
  alternates: {
    canonical: "/editorial-policy/",
  },
};

export default function EditorialPolicyPage() {
  return (
    <LegalDocument
      title="Editorial Policy"
      crumb="Editorial Policy"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          At Vallejo 420 MD, we&apos;re committed to delivering accurate,
          reliable, and practical information about medical marijuana, cannabis
          wellness, and related legal and health topics. Our editorial team
          makes sure every piece of content meets high standards of credibility,
          clarity, and usefulness for our readers.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Our Core Principles</h2>
        <ul>
          <li>
            <strong>Vision:</strong> To make safe, legal, and effective medical
            marijuana information accessible to every patient and caregiver in
            Vallejo and the surrounding area.
          </li>
          <li>
            <strong>Mission:</strong> To provide clear guidance on MMJ usage,
            regulations, and wellness applications in a way that&apos;s
            accurate, ethical, and easy to understand.
          </li>
          <li>
            <strong>Promise:</strong> We adhere to California and federal
            medical marijuana protocols, offering information backed by licensed
            medical professionals and credible research.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Editorial Commitment</h2>
        <ul>
          <li>
            <strong>Expertly Written Content:</strong> All content is created
            and reviewed by an in-house team with real experience writing about
            cannabis. We aim to make every piece informative, actionable, and
            factually correct.
          </li>
          <li>
            <strong>Accuracy and Credibility:</strong> Our content is
            fact-checked, citing peer-reviewed studies, California regulations,
            and official medical sources.
          </li>
          <li>
            <strong>Debunking Myths:</strong> We work to clear up
            misinformation about medical marijuana and common misconceptions
            around cannabis use, effects, and legal guidelines.
          </li>
          <li>
            <strong>Reliable Sources:</strong> We only use trustworthy, current,
            and relevant references, aiming to give readers evidence-based
            insights they can trust.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Ethical Approach</h2>
        <ul>
          <li>
            <strong>Kindness and Empathy:</strong> We avoid publishing content
            that criticizes individuals, dispensaries, or practitioners. Our
            goal is to educate with respect for different perspectives.
          </li>
          <li>
            <strong>Objectivity on Sensitive Topics:</strong> We approach
            medical, legal, and wellness topics objectively, always prioritizing
            patient safety, legal compliance, and high ethical standards.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Why Trust Us?</h2>
        <ul>
          <li>
            <strong>Industry Experience:</strong> Our team has real experience
            in cannabis medicine, wellness, and regulatory compliance.
          </li>
          <li>
            <strong>Advocates for Health and Wellness:</strong> We&apos;re
            committed to patient advocacy, responsible cannabis use, and safe
            wellness practices.
          </li>
          <li>
            <strong>Licensed Professionals:</strong> Any medical or legal advice
            comes from licensed professionals in their field, so recommendations
            are legitimate and trustworthy.
          </li>
          <li>
            <strong>Thorough Research:</strong> Every piece of content is
            researched carefully, drawing on scientific studies, patient
            experiences, and legal analysis.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Comprehensive Review Process</h2>
        <ul>
          <li>
            <strong>Meticulous Editing:</strong> Content is reviewed closely
            before publishing to check for clarity, accuracy, and adherence to
            our editorial standards.
          </li>
          <li>
            <strong>Quality Control:</strong> We continually refine our process
            to reduce errors and improve reliability over time.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Open to Suggestions</h2>
        <p>
          No system is perfect. If you notice an error or have a suggestion,
          reach out at{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>. We
          take every piece of feedback seriously and update our content whenever
          it improves accuracy or usefulness.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Our Promise to You</h2>
        <p>
          Our goal is to give patients, caregivers, and cannabis enthusiasts in
          Vallejo clear, actionable, and trustworthy information. Through our
          commitment to accuracy, ethics, and patient advocacy, Vallejo 420 MD
          aims to be your most reliable resource for medical marijuana
          knowledge.
        </p>
      </section>
    </LegalDocument>
  );
}
