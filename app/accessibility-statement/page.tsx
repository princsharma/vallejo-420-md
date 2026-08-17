import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "How Vallejo 420 MD works to keep its website and telehealth services accessible to all users, including people with disabilities.",
  alternates: {
    canonical: "/accessibility-statement/",
  },
};

export default function AccessibilityStatementPage() {
  return (
    <LegalDocument
      title="Accessibility"
      crumb="Accessibility Statement"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          At Vallejo 420 MD, we&apos;re committed to making sure our website and
          telehealth services are accessible to all users, including individuals
          with disabilities. We aim to provide an inclusive digital experience
          so patients can access information, review eligibility requirements,
          and schedule online consultations with ease. Accessibility is an
          ongoing priority as we continue improving our platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Commitment to Accessibility</h2>
        <p>
          We&apos;re dedicated to making our website usable and accessible for
          people with diverse abilities and assistive technology needs. Our goal
          is for every visitor to navigate our site efficiently and access
          important information about our online medical marijuana evaluation
          services.
        </p>
        <p>
          As a telehealth provider, we know how important it is to offer
          accessible digital healthcare so patients can conveniently connect
          with licensed physicians online. We continuously review and update our
          website to improve usability and accessibility for everyone who
          visits.
        </p>
        <p>
          Accessibility is an ongoing effort, and we remain committed to
          enhancing the digital experience for our patients.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Accessibility Standards</h2>
        <p>
          Our website is designed with accessibility best practices in mind and
          aligns with the Web Content Accessibility Guidelines (WCAG) 2.1,
          developed by the World Wide Web Consortium.
        </p>
        <p>
          These are internationally recognized standards meant to improve
          accessibility for people with visual, auditory, motor, and cognitive
          disabilities, and to support compatibility with assistive
          technologies.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Website Accessibility Features</h2>
        <p>To support accessibility, our website may include the following features:</p>
        <ul>
          <li>Clear and consistent page structure</li>
          <li>Logical heading hierarchy</li>
          <li>Screen reader compatibility</li>
          <li>Alternative text for images</li>
          <li>Responsive design for mobile and desktop devices</li>
          <li>Readable font sizes and scalable text options</li>
          <li>Sufficient color contrast for improved readability</li>
        </ul>
        <p>
          These features help make sure users can access information about our
          telehealth services effectively.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Telehealth Accessibility</h2>
        <p>
          Our platform is designed to reduce barriers to healthcare by letting
          patients complete medical marijuana evaluations online. We work to
          make sure individuals using assistive technologies can access
          information about scheduling, eligibility requirements, and patient
          support services.
        </p>
        <p>
          We&apos;re committed to making our digital healthcare experience as
          accessible as possible.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Ongoing Improvements</h2>
        <p>
          We regularly review our website to identify opportunities for
          improvement and to enhance accessibility and usability. As technology
          and standards evolve, we keep implementing updates to support a more
          inclusive experience for everyone.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Third-Party Services</h2>
        <p>
          Some website features may rely on third party tools, such as
          scheduling systems or payment processors. While we strive to maintain
          accessibility throughout our platform, we can&apos;t guarantee the
          accessibility of external services outside our direct control.
        </p>
        <p>
          If you run into any issues with third party tools, please contact us
          for assistance.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Accessibility Assistance</h2>
        <p>
          If you have difficulty accessing any part of our website or need help
          with our content or services, please contact us. We&apos;ll make
          reasonable efforts to provide the information or support you need in
          an accessible format.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Related Policies</h2>
        <p>
          Accessibility is part of our broader commitment to protecting patient
          rights, maintaining transparency, and providing secure telehealth
          services. To learn more about how we protect your information and
          govern the use of our platform, review the following pages:
        </p>
        <ul>
          <li>
            <Link href="/privacy-policy/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-use/">Terms of Use</Link>
          </li>
          <li>
            <Link href="/hipaa-compliance-policy/">HIPAA Compliance</Link>
          </li>
        </ul>
        <p>
          These policies outline how we handle patient data, maintain secure
          communications, and ensure responsible use of our telehealth services.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Feedback</h2>
        <p>
          We welcome feedback about the accessibility of our website. If you run
          into any barriers or have suggestions for improvement, let us know.
          Your input helps us keep improving the accessibility and usability of
          our platform.
        </p>
      </section>
    </LegalDocument>
  );
}
