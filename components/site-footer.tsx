
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Info,
  MessageCircle,
  Stethoscope,
  Users,
  CircleHelp,
  Scale,
  createLucideIcon,
  ShieldCheck,
  FileCheck,
  FileText,
  RotateCcw,
  Accessibility,
  PenLine,
  AlertCircle,
  Truck,
} from "lucide-react";

import { contactInfo, legalLinks } from "@/lib/site-data";
import { Label } from "./ui/label";

const ShieldLock = createLucideIcon("shield-lock", [
  ["path", { d: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11", key: "shield" }],
  ["rect", { x: "8", y: "11", width: "8", height: "7", rx: "1", key: "lock-body" }],
  ["path", { d: "M10 11V8a2 2 0 1 1 4 0v3", key: "lock-shackle" }],
]);

const EXPLORE_LINKS = [
  { label: "About Us", href: "/about-us/", Icon: Info },
  { label: "Contact Us", href: "/contact/", Icon: MessageCircle },
  { label: "Our Doctors", href: "/our-doctors/", Icon: Stethoscope },
  { label: "Editorial Team", href: "/editorial-team/", Icon: Users },
  { label: "FAQs", href: "/faq/", Icon: CircleHelp },
  { label: "Legal Policies", href: "/policy/", Icon: Scale },
];

const LEGAL_ICONS: Record<string, typeof FileText> = {
  "Privacy Policy": ShieldCheck,
  "HIPAA Compliance": ShieldLock,
  "Consent for Telehealth": FileCheck,
  "Terms of Use": FileText,
  "Refund Policy": RotateCcw,
  "Accessibility Statement": Accessibility,
  "Editorial Policy": PenLine,
  Disclaimer: AlertCircle,
  "Shipping Policy": Truck,
};

const VISIT_ITEMS = [
  {
    id: "address",
    Icon: MapPin,
    content: (
      <address className="text-md not-italic leading-6 text-white/85">
        {contactInfo.streetAddress}
        <br />
        {contactInfo.addressLocality}, {contactInfo.addressRegion}{" "}
        {contactInfo.postalCode}
      </address>
    ),
  },
  {
    id: "phone",
    Icon: Phone,
    content: (
      <a
        href={contactInfo.phoneHref}
        className="text-md text-white/85 hover:text-white"
      >
        {contactInfo.phone}
      </a>
    ),
  },
  {
    id: "email",
    Icon: Mail,
    content: (
      <a
        href={`mailto:${contactInfo.email}`}
        className="text-md break-all text-white/85 hover:text-white"
      >
        {contactInfo.email}
      </a>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[var(--brand-footer)] text-white">
      <div className="ds-container py-12 md:py-14 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-6 lg:grid-cols-4 lg:gap-10">

          {/* Logo */}
          <div className="md:col-span-2 md:row-start-1 lg:col-span-1 lg:row-auto">
            <Link
              href="/"
              aria-label="Vallejo 420 MD home"
              className="inline-flex shrink-0"
            >
              <Image
                src="/media/vallejo-3.webp"
                alt="Vallejo 420 MD"
                width={288}
                height={128}
                unoptimized
                className="h-10 w-auto sm:h-11"
              />
            </Link>

            <p className="ds-body mt-4 max-w-sm text-white/75">
              Vallejo’s trusted choice for online medical marijuana evaluations.
            </p>
          </div>

          {/* Resource */}
          <div className="md:col-start-1 md:row-start-2 lg:col-auto lg:row-auto">
            <h2 className="text-md font-semibold tracking-[0.4px] text-white">
              Resource
            </h2>

            <ul className="mt-4 space-y-2 text-md text-white/80">
              {EXPLORE_LINKS.map(({ label, href, Icon }) => (
                <li key={href}>
                  <Link 
                    href={href}
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <Icon className="size-5" strokeWidth={2} />


                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="md:col-start-2 md:row-span-2 md:row-start-2 lg:col-auto lg:row-span-1 lg:row-auto">
            <h2 className="text-md font-semibold tracking-[0.4px] text-white">
              Information
            </h2>

            <ul className="mt-4 space-y-2 text-md text-white/80">
              {legalLinks.map((link) => {
                const Icon = LEGAL_ICONS[link.label] || FileText;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 hover:text-white"
                    >

                      <Icon className="size-5 color-amber" strokeWidth={2} />


                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details -  */}
          <div className="md:col-start-1 md:row-start-3 lg:col-span-1 lg:row-auto">
            <h2 className="text-md font-semibold tracking-[0.4px] text-white">
              Contact Details
            </h2>

            <ul className="mt-3 space-y-3 md:mt-4 md:space-y-3 lg:space-y-4">
              {VISIT_ITEMS.map(({ id, Icon, content }) => (
                <li key={id} className="flex items-start gap-3">
                  <Icon className="size-5 shrink-0 mt-1" strokeWidth={2} />
                  <div className="min-w-0">{content}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom - Unchanged */}
        <div className="mt-12 border-t border-white/15 pt-6 text-sm leading-5 text-white/60">
          <p className="text-md mt-2 mx-auto text-center">
            Vallejo 420 MD is not a pharmacy, dispensary, or cannabis retailer and does not sell, distribute, or supply medical marijuana or cannabis products.
          </p>

          <p className="text-sm mx-auto mt-2 text-center">
            We connect patients with independent, California-licensed physicians who conduct online medical marijuana evaluations.
          </p>

          <p className="mt-2 text-sm mx-auto text-center">
            © {new Date().getFullYear()} Vallejo 420 MD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
