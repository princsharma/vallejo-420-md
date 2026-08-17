import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Consent to Telehealth",
  description:
    "What to expect from telehealth visits with Vallejo 420 MD, including how consultations work, your rights, and the risks and benefits involved.",
  alternates: {
    canonical: "/consent-to-telehealth/",
  },
};

export default function ConsentToTelehealthPage() {
  return (
    <LegalDocument
      title="Consent to Telehealth"
      crumb="Consent for Telehealth"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          This Consent to Telehealth explains how telehealth services work when
          you use Vallejo 420 MD. Telehealth lets patients communicate with
          licensed healthcare professionals remotely, using secure electronic
          communication technologies.
        </p>
        <p>
          By using telehealth services through Vallejo 420 MD, you acknowledge
          that you&apos;ve read and understood this consent and agree to receive
          healthcare services through telehealth technologies where permitted by
          California law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Telehealth Services</h2>
        <p>
          Telehealth services use electronic communications to let healthcare
          providers evaluate, diagnose, and provide medical guidance remotely.
        </p>
        <p>Telehealth consultations may include:</p>
        <ul>
          <li>Live video consultations</li>
          <li>Audio or telephone communication</li>
          <li>Secure electronic messaging</li>
          <li>Digital transmission of medical information and records</li>
        </ul>
        <p>
          Vallejo 420 MD operates a technology platform that helps connect you
          with independent licensed physicians for medical marijuana evaluations
          in California. You can find more information about the platform and
          services in our <Link href="/terms-of-use/">Terms of Use</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Nature of Telehealth Consultations</h2>
        <p>
          Telehealth consultations differ from traditional in person medical
          visits. Because the consultation happens remotely, healthcare
          providers rely on the information you share during the visit to
          evaluate your condition.
        </p>
        <p>
          Certain medical conditions or circumstances may require an in person
          exam, and a physician may determine that telehealth isn&apos;t
          appropriate for your situation.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Potential Benefits of Telehealth</h2>
        <p>Telehealth services may offer several benefits, including:</p>
        <ul>
          <li>Improved access to healthcare services</li>
          <li>Convenience and reduced travel time</li>
          <li>Faster communication with licensed healthcare providers</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Potential Risks and Limitations</h2>
        <p>
          As with any medical service, telehealth comes with certain
          limitations, including:
        </p>
        <ul>
          <li>Technical interruptions or delays during communication</li>
          <li>Limitations in conducting physical examinations remotely</li>
          <li>
            Possible delays in diagnosis or treatment due to incomplete or
            inaccurate information
          </li>
        </ul>
        <p>
          You acknowledge that these limitations may affect the evaluation
          process.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Not for Emergency Medical Situations</h2>
        <p>
          Telehealth services provided through Vallejo 420 MD are not intended
          for emergency medical or psychiatric situations.
        </p>
        <p>
          If you&apos;re experiencing a medical emergency, call 911 or go to the
          nearest emergency department immediately.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Provider Patient Relationship</h2>
        <p>
          A provider patient relationship is established only after a licensed
          physician agrees to evaluate you and begins the medical assessment
          process through the telehealth consultation.
        </p>
        <p>
          Submitting information or scheduling an appointment doesn&apos;t
          automatically establish a provider patient relationship.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Accuracy of Information</h2>
        <p>
          Healthcare providers rely on the information you provide during
          registration and consultation. You agree to provide accurate,
          complete, and truthful information about your health history,
          symptoms, and medical conditions.
        </p>
        <p>
          Providing inaccurate or incomplete information may affect the quality
          and safety of your care.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Communication Through Electronic Systems</h2>
        <p>
          Telehealth services may involve communication through electronic
          systems, including messaging platforms, video conferencing tools, and
          other digital technologies.
        </p>
        <p>
          We use reasonable safeguards to protect your information, but
          electronic communications carry some inherent risk, including
          technical failures and unauthorized access.
        </p>
        <p>
          You can find more information about how your personal data is handled
          in our <Link href="/privacy-policy/">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Privacy and Compliance</h2>
        <p>
          Vallejo 420 MD is committed to protecting the privacy and security of
          patient health information. Telehealth consultations and related
          medical communications are handled in accordance with healthcare
          privacy standards, including the Health Insurance Portability and
          Accountability Act (HIPAA).
        </p>
        <p>
          For more on how we protect patient health information, review our{" "}
          <Link href="/hipaa-compliance-policy/">
            HIPAA Compliance and Health Information Privacy
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Voluntary Consent</h2>
        <p>
          By using telehealth services through Vallejo 420 MD, you acknowledge
          and agree that:
        </p>
        <ul>
          <li>You understand the nature of telehealth services</li>
          <li>
            You understand the potential benefits and limitations of telehealth
            consultations
          </li>
          <li>
            You voluntarily consent to receive healthcare services through
            telehealth technologies
          </li>
          <li>
            You&apos;ve had the opportunity to review related policies,
            including the{" "}
            <Link href="/terms-of-use/">Terms of Use</Link> and{" "}
            <Link href="/privacy-policy/">Privacy Policy</Link>
          </li>
        </ul>
        <p>
          <strong>Note:</strong> If you don&apos;t agree with this Consent to
          Telehealth, you shouldn&apos;t proceed with telehealth services
          through the platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Questions</h2>
        <p>
          If you have questions about this Consent to Telehealth or the
          telehealth services offered through Vallejo 420 MD, contact us through
          the information on our <Link href="/contact/">Contact Us</Link> page.
        </p>
      </section>
    </LegalDocument>
  );
}
