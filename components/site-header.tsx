"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur">
      <div className="ds-container">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" aria-label="Vallejo 420 MD home" className="flex shrink-0 items-center">
            <Image
              src="/vallejo420md-logo.webp"
              alt="Vallejo 420 MD"
              width={288}
              height={128}
              priority
              unoptimized
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-0 lg:gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-md font-semibold tracking-[0.1px] text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <BookingButton
            className="hidden h-11 shrink-0 rounded-lg px-5 text-md font-semibold shadow-none md:inline-flex"
            size="lg"
          >
            Book evaluation
          </BookingButton>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-dark-green md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="fixed inset-0 z-[100] flex flex-col bg-dark-green text-white md:hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <Image
                src="/vallejo-logo.svg"
                alt="Vallejo 420 MD"
                width={168}
                height={72}
                className="h-10 w-auto brightness-0 invert"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-lg border border-white/30 text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <BookingButton
                variant="secondary"
                size="lg"
                className="mt-2 h-12 rounded-lg px-8 text-dark-green"
              >
                Book evaluation
              </BookingButton>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
