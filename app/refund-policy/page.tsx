import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Vallejo 420 MD's refund policy for medical marijuana evaluations, including eligibility, missed appointment fees, and how to request a refund.",
  alternates: {
    canonical: "/refund-policy/",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalDocument
      title="Refund Policy"
      crumb="Refund Policy"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          Vallejo 420 MD offers a 100% money back guarantee, subject to the
          eligibility conditions outlined below. This policy applies to medical
          marijuana evaluation services provided through our platform. Please
          review it carefully before scheduling your evaluation.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Eligibility for a Full Refund</h2>
        <p>
          You&apos;re eligible for a 100% refund of your evaluation fee under
          the following circumstances:
        </p>
        <ul>
          <li>
            <strong>1. Physician Denial</strong> If the California licensed
            physician determines, in their professional judgment, that you
            don&apos;t qualify for a medical marijuana recommendation.
          </li>
          <li>
            <strong>2. Failure to Deliver Recommendation Within the Stated Timeframe</strong>{" "}
            If we fail to provide your approved medical marijuana recommendation
            within the stated timeframe, typically 24 to 48 hours after your
            physician evaluation and approval are complete.
          </li>
          <li>
            <strong>3. Verification Failure</strong> If your issued medical
            marijuana recommendation can&apos;t be verified due to an error on
            the part of the issuing physician or our platform.
          </li>
        </ul>
        <p>
          Refund eligibility applies only to the evaluation fee paid to Vallejo
          420 MD. It doesn&apos;t cover California state application fees,
          government fees, or third party charges, if applicable.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Non-Refundable Situations</h2>
        <p>Refunds will not be issued if:</p>
        <ul>
          <li>
            You cancel after completing your evaluation but before receiving a
            decision from the physician
          </li>
          <li>
            You receive a valid medical marijuana recommendation and later
            change your mind
          </li>
          <li>
            You provide false, incomplete, or misleading information during the
            evaluation process
          </li>
          <li>
            Services are denied because you didn&apos;t meet California&apos;s
            eligibility requirements
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Missed Appointment Policy</h2>
        <p>
          If you can&apos;t attend your scheduled appointment, contact our
          support team in advance to reschedule.
        </p>
        <p>
          Failing to attend a scheduled evaluation without prior notice may
          result in a $25 missed appointment fee. This fee may be deducted from
          any eligible refund, where applicable.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Refund Request Process</h2>
        <p>
          To request a refund, contact our support team at{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
        </p>
        <p>
          Refund requests must include your full name, the email address used at
          registration, and a brief explanation of your request.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Refund Processing</h2>
        <p>
          Approved refunds are typically processed within 7 to 10 business days,
          depending on your payment method.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Final Determination</h2>
        <p>
          Vallejo 420 MD reserves the right to review and determine refund
          eligibility in accordance with this Refund Policy and applicable law.
        </p>
      </section>
    </LegalDocument>
  );
}
