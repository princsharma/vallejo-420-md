import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Vallejo 420 MD's disclaimer on medical information, our platform's role, and what our services are and aren't intended for in Vallejo, CA.",
  alternates: {
    canonical: "/disclaimer/",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalDocument
      title="Disclaimer & Policies"
      crumb="Disclaimer"
      lastUpdated="August 10, 2026"
    >
      <section className="space-y-4">
        <p>
          At Vallejo 420 MD, we&apos;re committed to providing educational
          resources and connecting patients with licensed healthcare
          professionals for medical marijuana evaluations. The information on
          this website comes with a few important disclaimers, outlined below.
          By using this platform, you agree to the following.
        </p>
      </section>

      <section className="space-y-4">
        <h2>1. Informational Purpose Only</h2>
        <p>
          Vallejo 420 MD provides content for educational and informational
          purposes only. It&apos;s not meant to substitute for professional
          medical advice or healthcare services. The information here is meant
          to help you understand medical marijuana and wellness options, but you
          should always review it with a licensed healthcare provider before
          making any decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2>2. Not a Substitute for Medical Care</h2>
        <p>
          Vallejo 420 MD is not a healthcare provider. Our platform is designed
          to connect patients with licensed healthcare professionals for medical
          marijuana evaluations. Any decisions about medical treatment,
          including medication or therapy, should be made in consultation with a
          licensed healthcare professional. A medical marijuana recommendation
          isn&apos;t a prescription and shouldn&apos;t be treated as a
          substitute for conventional medical care.
        </p>
      </section>

      <section className="space-y-4">
        <h2>3. No Diagnosis or Treatment</h2>
        <p>
          The information on this platform doesn&apos;t diagnose, treat, cure,
          or prevent any medical condition. Vallejo 420 MD facilitates medical
          marijuana evaluations through licensed professionals, but we don&apos;t
          provide direct medical treatment or advice. Always seek guidance from
          a qualified healthcare provider before making medical decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2>4. User Responsibility</h2>
        <p>
          Your health choices are your responsibility. Any action you take based
          on information from this platform is at your own risk. Vallejo 420 MD
          isn&apos;t responsible for outcomes resulting from decisions made
          without the guidance of a licensed healthcare provider. Always verify
          and discuss your healthcare decisions with a licensed physician.
        </p>
      </section>

      <section className="space-y-4">
        <h2>5. Testimonials and User Experiences</h2>
        <p>
          Testimonials or user generated content on this site reflect individual
          experiences. They shouldn&apos;t be taken as medical advice, and they
          may not reflect your own experience or outcome. Results vary, and
          there&apos;s no guarantee you&apos;ll see similar results. Always
          consult a healthcare provider before making medical decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2>6. No Endorsement of Products or Services</h2>
        <p>
          Vallejo 420 MD doesn&apos;t endorse, guarantee, or make claims about
          the effectiveness or safety of any products, services, or therapies
          mentioned on the platform. Mentioning a product, service, or therapy
          doesn&apos;t mean we recommend it. Verify and consult your healthcare
          provider before using anything discussed here.
        </p>
      </section>

      <section className="space-y-4">
        <h2>7. Platform&apos;s Role</h2>
        <p>
          Vallejo 420 MD serves as a platform connecting patients with licensed
          healthcare professionals for medical marijuana evaluations. We
          don&apos;t provide direct medical care, and our services aren&apos;t
          meant to replace the doctor patient relationship. We connect you to
          licensed providers who make the actual medical recommendations. We
          don&apos;t make those recommendations ourselves.
        </p>
      </section>

      <section className="space-y-4">
        <h2>8. Emergencies</h2>
        <p>
          This platform isn&apos;t designed for medical emergencies. If
          you&apos;re experiencing one, contact 911 or your local emergency
          services immediately. Don&apos;t delay seeking professional medical
          attention while using this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2>9. Third Party Websites</h2>
        <p>
          Our website may link to third party websites for convenience. We
          don&apos;t control or verify their content, security, or privacy
          practices. Using those sites is at your own discretion, so review
          their privacy practices and terms before you visit.
        </p>
      </section>

      <section className="space-y-4">
        <h2>10. Special Considerations</h2>
        <p>
          If you&apos;re under 18, have a chronic or serious health condition, or
          are pregnant or breastfeeding, it&apos;s especially important to
          consult a licensed healthcare provider before making decisions based
          on information from this platform. Always seek personalized advice
          from a healthcare professional.
        </p>
      </section>

      <section className="space-y-4">
        <h2>11. Emerging and Alternative Therapies</h2>
        <p>
          Some content on this site discusses alternative, experimental, or
          emerging treatments that aren&apos;t guaranteed to be safe or
          effective. Talk to a trusted medical professional before pursuing any
          alternative therapy mentioned here.
        </p>
      </section>

      <section className="space-y-4">
        <h2>12. Modifications to the Disclaimer</h2>
        <p>
          Vallejo 420 MD reserves the right to update, modify, or remove content
          on this platform at any time, without prior notice. We encourage you
          to check this page occasionally for updates. Any changes to this
          Disclaimer will be posted here.
        </p>
      </section>
    </LegalDocument>
  );
}
