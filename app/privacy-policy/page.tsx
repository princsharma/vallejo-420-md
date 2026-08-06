import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vallejo 420 MD collects, uses, and protects your personal and health data during medical marijuana evaluations in Vallejo, CA.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      crumb="Privacy Policy"
      lastUpdated="August 6, 2026"
    >
      <section className="space-y-4">
        <p>
          Vallejo 420 MD (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
          committed to protecting your privacy and your personal information.
          This policy explains what we collect, how we use it, and how we
          protect it when you visit our website or use our medical marijuana
          evaluation services.
        </p>
        <p>
          By using our services, you&apos;re agreeing to the practices described
          here. If anything is unclear, reach out and we&apos;ll walk you
          through it.
        </p>
        <p>
          This policy applies to our website and related services. Our services
          are intended for individuals located in California, where medical
          marijuana evaluations are legally permitted.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Information We Collect</h2>
        <p>
          When you create an account, schedule an evaluation, or contact us, we
          collect what we need to provide the service and stay compliant: your
          contact details, identification for verification, and health
          information relevant to your evaluation.
        </p>
        <p>
          We also collect some technical information automatically when you
          visit our site, like your IP address, browser type, device, and
          general usage data. We use tools like Google Analytics and Microsoft
          Clarity to understand how visitors use the site, which helps with
          security and performance.
        </p>
        <p>
          We may also collect general location data, like your zip code, to
          confirm you&apos;re within our service area and to stay compliant with
          California&apos;s medical marijuana regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Health Information</h2>
        <p>
          As part of your evaluation, our licensed physicians collect health
          information needed to determine your eligibility under California law,
          including your medical history and qualifying conditions. We handle
          this information under HIPAA standards and strict confidentiality.
        </p>
        <p>
          We use your health information only for evaluation purposes and to
          meet state recordkeeping requirements. We never use it for marketing,
          and we don&apos;t share it with third parties without your consent,
          except where the law requires it.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Confirm your identity and eligibility for a medical marijuana evaluation</li>
          <li>Schedule and manage your appointment</li>
          <li>Process payments</li>
          <li>Send appointment reminders, updates, and support messages</li>
          <li>Maintain accurate records for compliance</li>
          <li>Improve our website and services</li>
          <li>Prevent fraud and unauthorized access</li>
        </ul>
        <p>
          We may also use anonymized, aggregated data to spot trends and improve
          how we serve patients.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Payment Processing</h2>
        <p>
          Payments are processed securely through trusted third parties,
          including credit card networks, PayPal, and Sezzle. We don&apos;t store
          your full card number, bank details, or authentication codes on our
          servers.
        </p>
        <p>
          If you&apos;re redirected to PayPal or Sezzle to complete a purchase,
          their own privacy and security policies apply to that part of the
          transaction.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Cookies and Analytics</h2>
        <p>
          Our website uses cookies and similar technologies to keep things
          running smoothly, understand visitor behavior, and maintain security.
          We use tools like Google Analytics and Microsoft Clarity for this.
        </p>
        <p>
          You can adjust your browser settings to decline cookies at any time,
          though some features on the site may not work as well without them.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Communications</h2>
        <p>
          If you give us your phone number or email, we may contact you by text,
          call, or email about your appointment, account activity, or service
          updates. By providing your number, you&apos;re agreeing to receive
          service related messages.
        </p>
        <p>
          You can opt out of promotional messages anytime by replying
          &quot;STOP&quot; to a text or using the unsubscribe link in an email.
          Message and data rates may apply depending on your carrier.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Sharing Your Information</h2>
        <p>We share information only when necessary, with:</p>
        <ul>
          <li>Licensed physicians handling your evaluation</li>
          <li>
            Service providers who help with hosting, payments, analytics, and
            identity verification
          </li>
          <li>Legal or regulatory authorities, when required by law</li>
          <li>
            A successor entity, if our business is ever sold, merged, or
            transferred
          </li>
        </ul>
        <p>
          We never sell your personal health information, and anything we share
          with third parties is limited to what&apos;s necessary for legitimate
          business, medical, or legal purposes.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Data Security</h2>
        <p>
          We use administrative, technical, and physical safeguards to protect
          your information from unauthorized access, disclosure, or loss.
          Sensitive data, including health and payment information, is encrypted
          during transmission.
        </p>
        <p>
          No system can guarantee absolute security, but we take reasonable,
          industry standard steps to keep your data safe and limit access to
          authorized personnel only.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Your Privacy Rights</h2>
        <p>As a California resident, you have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>
            Request deletion of your information, subject to certain legal
            exceptions
          </li>
          <li>
            Opt out of the sale of your personal information (we don&apos;t sell
            health data)
          </li>
        </ul>
        <p>
          We currently don&apos;t meet the criteria that would bring us under
          the EU&apos;s GDPR or the full scope of the CCPA, but if you have
          questions about how privacy law applies to your situation, just
          contact us. We&apos;ll respond to any privacy request within 30 days.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are intended for adults 18 and older who meet
          California&apos;s legal eligibility requirements. We don&apos;t
          knowingly collect information from anyone under 18, and if we learn
          that we have, we&apos;ll delete it and notify a guardian where
          appropriate.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Governing Law</h2>
        <p>
          Vallejo 420 MD operates out of Vallejo, California. This policy is
          governed by applicable California and United States federal law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Contact Us</h2>
        <p>
          Questions about this policy or want to make a privacy request? Reach
          out anytime.
        </p>
        <p>
          <strong>{siteConfig.name}</strong>
          <br />
          Website:{" "}
          <Link href="/">{siteConfig.title}</Link>
          <br />
          Email:{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <br />
          Phone:{" "}
          <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          <br />
          Address: {contactInfo.address}
        </p>
      </section>
    </LegalDocument>
  );
}
