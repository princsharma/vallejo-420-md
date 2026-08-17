import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "How Vallejo 420 MD ships your medical marijuana card, including delivery timelines, tracking, and what to do if there's a problem.",
  alternates: {
    canonical: "/shipping-policy/",
  },
};

export default function ShippingPolicyPage() {
  return (
    <LegalDocument
      title="Shipment Policy"
      crumb="Shipping Policy"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          At Vallejo 420 MD, delivering your medical marijuana card safely and
          on time is our top priority. We understand how important your card is,
          and we take every step to make sure it arrives securely and without
          delays.
        </p>
      </section>

      <section className="space-y-4">
        <h2>1. Processing and Delivery Time</h2>
        <p>
          After your application is approved, we prepare and ship your card
          within 10 to 12 business days. Our team works efficiently to get your
          card to you quickly, so you can access your medical cannabis benefits
          legally and without unnecessary delays.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Shipping and Tracking</h2>
        <p>
          We use trusted carriers to make sure your card arrives safely. Every
          shipment comes with a tracking number, so you can follow its journey
          from our office to your doorstep.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. Delivery Concerns</h2>
        <p>
          If your card doesn&apos;t arrive within the expected timeframe, or if
          it&apos;s lost, damaged, or stolen, contact our support team right
          away. We respond within 24 hours and, if needed, will send a
          replacement to make sure you&apos;re covered.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. Secure Packaging</h2>
        <p>
          Your card is mailed in a securely sealed envelope to prevent tampering
          and protect it during transit.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Customer Responsibility</h2>
        <p>
          Once a package is delivered and signed for, if required, it&apos;s
          considered received. Please make sure someone is available at the
          delivery address to accept your card safely.
        </p>
      </section>

      <section className="space-y-4">
        <h2>6. Potential Delays</h2>
        <p>
          Occasionally, delivery may be delayed due to holidays, carrier issues,
          weather, or other unforeseen circumstances. We appreciate your
          understanding in these rare cases.
        </p>
      </section>

      <section className="space-y-4">
        <h2>7. Support and Contact</h2>
        <p>
          Our team is available around the clock to help with any shipping
          questions or concerns.
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <br />
          Phone: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
        </p>
        <p>
          At Vallejo 420 MD, we make sure your medical cannabis card reaches you
          securely and on time, so you can focus on your health without worry.
        </p>
      </section>
    </LegalDocument>
  );
}
