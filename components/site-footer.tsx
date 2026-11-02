import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { contactInfo, legalLinks } from "@/lib/site-data";

const EXPLORE_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Get Your Card", href: "/get-your-card/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const VISIT_ITEMS = [
  {
    id: "address",
    Icon: MapPin,
    content: (
      <address className="text-sm not-italic leading-6 text-white/85">
        {contactInfo.streetAddress}
        <br />
        {contactInfo.addressLocality}, {contactInfo.addressRegion} {contactInfo.postalCode}
      </address>
    ),
  },
  {
    id: "phone",
    Icon: Phone,
    content: (
      <a href={contactInfo.phoneHref} className="text-sm text-white/85 hover:text-white">
        {contactInfo.phone}
      </a>
    ),
  },
  {
    id: "email",
    Icon: Mail,
    content: (
      <a href={`mailto:${contactInfo.email}`} className="text-sm break-all text-white/85 hover:text-white">
        {contactInfo.email}
      </a>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[var(--brand-footer)] text-white">
      <div className="ds-container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Vallejo 420 MD home" className="inline-flex shrink-0">
              <Image
                src="/vallejo420md-logo.webp"
                alt="Vallejo 420 MD"
                width={288}
                height={128}
                unoptimized
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <p className="ds-small mt-4 max-w-xs text-white/75">
              Online medical marijuana evaluations with California-licensed physicians.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.4px] text-white">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.4px] text-white">Information</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.4px] text-white">Visit</h2>
            <ul className="mt-4 space-y-4">
              {VISIT_ITEMS.map(({ id, Icon, content }) => (
                <li key={id} className="flex items-start gap-3">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber text-white"
                    aria-hidden
                  >
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 pt-1">{content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs leading-5 text-white/60">
          <p>© {new Date().getFullYear()} Vallejo 420 MD. All rights reserved.</p>
          <p className="mt-2">
            Medical cannabis recommendations are issued at the physician&apos;s discretion.
          </p>
        </div>
      </div>
    </footer>
  );
}
