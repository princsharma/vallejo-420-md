import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of Vallejo 420 MD's website and medical marijuana evaluation services in Vallejo, CA.",
  alternates: {
    canonical: "/terms-of-use/",
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalDocument
      title="Terms of Use"
      crumb="Terms of Use"
      lastUpdated="August 6, 2026"
    >
      <section className="space-y-4">
        <h2>Disclaimer</h2>
        <p className="text-foreground">
          Please carefully review these Terms of Use before accessing or using
          the Vallejo 420 MD website or services. These Terms contain important
          information regarding your legal rights, disclaimers of warranties,
          and limitations of liability.
        </p>
        <p className="text-foreground">
          By accessing, browsing, registering for, or using this website or any
          services provided through the platform, you acknowledge that you have
          read, understood, and agree to be legally bound by these Terms of Use,
          our Privacy Policy, and any other policies referenced herein.
        </p>
        <p className="text-foreground">
          Vallejo 420 MD operates as a technology platform that connects you
          with independent licensed physicians for medical marijuana evaluations
          in California. Vallejo 420 MD does not provide medical advice,
          diagnosis, or treatment and does not guarantee that any individual
          will receive a medical marijuana recommendation.
        </p>
        <p className="text-foreground">
          Your continued use of the website following any modifications to these
          Terms constitutes your acceptance of those changes.
        </p>
      </section>

      <section className="space-y-4">
        <h2>1. Overview of Services</h2>
        <p>
          Vallejo 420 MD operates a technology based platform that connects you
          with independent licensed physicians who provide medical marijuana
          evaluations in California.
        </p>
        <p>
          We are not a medical practice and do not provide medical advice,
          diagnosis, or treatment. All clinical evaluations and medical
          marijuana recommendations are provided solely by independent licensed
          physicians who are responsible for their own professional judgment and
          compliance with California law.
        </p>
        <p>
          Our role is limited to providing the administrative, technological,
          and communication support that connects you with a licensed physician
          for a telehealth consultation. Any recommendation, if issued, is
          granted solely at the discretion of the evaluating physician following
          an individualized medical assessment. We do not influence or control
          medical decisions and cannot guarantee that you will qualify for or
          receive a recommendation.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Eligibility and Compliance</h2>
        <p>
          Our services are available only to individuals who are physically
          located in California at the time of their evaluation. By using this
          website and our services, you represent and warrant that:
        </p>
        <ul>
          <li>You are at least 18 years of age</li>
          <li>
            You are physically located in California at the time of your
            evaluation
          </li>
          <li>
            You will provide accurate, complete, and truthful information during
            registration and evaluation
          </li>
        </ul>
        <p>
          Physicians providing services through our platform are licensed in
          California, and approval for a recommendation is subject to
          California&apos;s medical and regulatory standards. You are solely
          responsible for complying with all local, state, and federal laws
          relating to medical marijuana use, possession, and related activities.
        </p>
        <p>
          Vallejo 420 MD reserves the right to limit, deny, or discontinue
          services if legal or regulatory changes restrict them.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. Physician Patient Relationship</h2>
        <p>
          A physician patient relationship is established only when a licensed
          physician agrees to evaluate you and begins the medical assessment
          process through our platform.
        </p>
        <p>
          Vallejo 420 MD does not employ, control, or supervise the clinical
          practice of the physicians on our platform. Physicians are
          independent, licensed professionals who use their own judgment to
          evaluate patients and determine whether a recommendation is
          appropriate under California law. We do not influence medical
          decisions, diagnoses, or treatment recommendations, and we cannot
          guarantee that you will receive one.
        </p>
        <p>
          Any medical advice, evaluation, or recommendation you receive comes
          solely from the licensed physician, not from Vallejo 420 MD.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. Telehealth Consent and Limitations</h2>
        <p>
          By using our services, you consent to receive medical evaluations
          through telehealth technology, where permitted by law. Telehealth
          services are delivered through electronic communication, which may
          include video, audio, messaging, and the digital transmission of
          medical information.
        </p>
        <p>You understand that:</p>
        <ul>
          <li>Telehealth visits may differ from in person visits</li>
          <li>
            Certain conditions may not be suitable for a telehealth evaluation
          </li>
          <li>Technical issues may interrupt or delay communication</li>
          <li>
            The evaluating physician may determine that an in person exam is
            necessary
          </li>
        </ul>
        <p>
          Telehealth services are not intended for medical emergencies. By using
          our telehealth services, you accept these limitations as permitted by
          law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Privacy Policy</h2>
        <p>
          Your use of our website and services is also governed by our{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>, which explains how
          we collect, use, disclose, and protect your personal information,
          including information you share during a medical evaluation. Personal
          health information is collected, transmitted, and stored in compliance
          with HIPAA.
        </p>
        <p>
          By using our website, you acknowledge that you&apos;ve read and agree
          to our privacy policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2>6. Federal Law and Regulatory Disclosure</h2>
        <p>
          California permits the medical use of marijuana under state law.
          However, marijuana remains classified as a Schedule I controlled
          substance under federal law, which may prohibit certain activities,
          including possession, distribution, and use.
        </p>
        <p>
          Vallejo 420 MD operates in compliance with California law governing
          medical marijuana evaluations. We make no representation about the
          legality of marijuana under federal law. You are solely responsible
          for understanding and complying with all local, state, and federal
          laws that apply to you.
        </p>
        <p>
          Nothing on this website should be interpreted as legal advice
          regarding marijuana laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2>7. User Responsibilities and Prohibited Conduct</h2>
        <p>
          By using our website and services, you agree to use the platform only
          for lawful purposes and in line with these Terms.
        </p>
        <p>You agree that you will:</p>
        <ul>
          <li>
            Provide accurate, complete, and truthful information during
            registration and evaluation
          </li>
          <li>Keep your account credentials confidential</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
        <p>You agree that you will not:</p>
        <ul>
          <li>Provide false, misleading, or fraudulent information</li>
          <li>Use another person&apos;s identity or credentials</li>
          <li>
            Attempt to gain unauthorized access to our website, systems, or
            accounts
          </li>
          <li>Interfere with or disrupt the platform</li>
          <li>Use our services for any unlawful purpose</li>
          <li>
            Copy, modify, distribute, reverse engineer, or otherwise misuse our
            content or technology
          </li>
        </ul>
        <p>
          Vallejo 420 MD reserves the right to suspend, restrict, or terminate
          your access if you violate these Terms or engage in conduct we
          determine, at our discretion, to be unlawful, fraudulent, abusive, or
          harmful.
        </p>
      </section>

      <section className="space-y-4">
        <h2>8. Fees and Refund Policy</h2>
        <p>
          Fees for medical marijuana evaluations are disclosed at the time of
          scheduling and before your service is confirmed.
        </p>
        <p>
          Refund eligibility depends on specific conditions, including physician
          eligibility determinations and service delivery timelines. Full
          details on refunds, eligibility, and procedures are set out in our{" "}
          <Link href="/refund-policy/">refund policy</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Vallejo 420 MD, its
          affiliates, officers, directors, employees, and representatives are
          not liable for any indirect, incidental, special, consequential,
          punitive, or exemplary damages arising from your use of our website or
          services.
        </p>
        <p>
          This includes loss of profits, data, business opportunities, or
          service interruptions or delays. In no event will our total liability
          exceed the amount you paid for services through our platform in the
          twelve months before the event giving rise to the claim.
        </p>
        <p>
          Some states don&apos;t allow certain limitations of liability. Where
          that applies, liability is limited to the maximum extent the law
          allows.
        </p>
      </section>

      <section className="space-y-4">
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Vallejo 420 MD, its
          affiliates, officers, directors, employees, contractors, and
          representatives from any claims, damages, losses, or expenses
          (including reasonable attorneys&apos; fees) arising from:
        </p>
        <ul>
          <li>Your use or misuse of our website or services</li>
          <li>Your violation of these Terms of Use</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>
            Any false, inaccurate, or misleading information you provide
          </li>
          <li>Your infringement of another person&apos;s rights</li>
        </ul>
        <p>
          This obligation survives after you stop using our website or services.
        </p>
      </section>

      <section className="space-y-4">
        <h2>11. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms of Use and any disputes related to your use of our website
          or services are governed by the laws of the State of California,
          without regard to conflict of law principles.
        </p>
        <p>
          Any legal action under these Terms must be brought exclusively in the
          state or federal courts located in California, and you consent to the
          jurisdiction and venue of those courts.
        </p>
        <p>
          To the fullest extent the law allows, any claim related to your use of
          our website or services must be brought individually, not as part of a
          class or representative proceeding. Nothing here prevents either party
          from seeking equitable or injunctive relief where appropriate.
        </p>
      </section>

      <section className="space-y-4">
        <h2>12. Modifications to Terms and Services</h2>
        <p>
          Vallejo 420 MD may update, modify, or replace these Terms of Use at
          any time, at our discretion. Changes take effect once the revised
          Terms are posted on our website, unless stated otherwise. Continuing
          to use our website or services after changes are posted means you
          accept the revised Terms.
        </p>
        <p>
          We also reserve the right to modify, suspend, or discontinue any part
          of our website or services at any time, without prior notice, where
          required by legal, regulatory, or operational reasons.
        </p>
      </section>

      <section className="space-y-4">
        <h2>13. Termination</h2>
        <p>
          Vallejo 420 MD may suspend, restrict, or terminate your access to our
          website or services at any time, with or without notice, if we believe
          you&apos;ve violated these Terms or engaged in conduct that is
          unlawful, fraudulent, abusive, or harmful. We may also discontinue our
          services at any time.
        </p>
        <p>
          Termination doesn&apos;t relieve you of any obligations you incurred
          before termination, including payment or indemnification obligations.
          Provisions that by their nature should survive termination, including
          Limitation of Liability, Indemnification, Governing Law, and Dispute
          Resolution, remain in effect after termination.
        </p>
      </section>

      <section className="space-y-4">
        <h2>14. Contact Information and Notices</h2>
        <p>If you have questions about these Terms of Use, contact us:</p>
        <p>
          <strong>{siteConfig.name}</strong>
          <br />
          Website:{" "}
          <a href={siteConfig.url} rel="noreferrer">
            {siteConfig.url}
          </a>
          <br />
          Email:{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <br />
          Phone: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          <br />
          Address: {contactInfo.address}
        </p>
      </section>
    </LegalDocument>
  );
}
