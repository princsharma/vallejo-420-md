"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Mail, Menu, Phone, UserRound, X } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { contactInfo } from "@/lib/site-data";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Our Doctors", href: "/our-doctors/" },
  {label: "Contact", href: "/contact/" },
];

const MOBILE_MEDIA = "(max-width: 767px)";

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia(MOBILE_MEDIA).matches;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktopMq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktopMq.matches) setOpen(false);
    };
    desktopMq.addEventListener("change", closeOnDesktop);
    return () => desktopMq.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open || !isMobileViewport()) return;

    const scrollY = window.scrollY;
    const { body, documentElement: html } = document;

    const previous = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      htmlOverflow: html.style.overflow,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      html.style.overflow = previous.htmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 border-b border-border bg-white/95 ${
        open ? "z-[110]" : "z-20 backdrop-blur"
      }`}
    >
      <div className="ds-container">
        <div className="mx-auto flex w-full max-w-lg items-center justify-between gap-3 py-4 md:max-w-none md:gap-2">
          <Link
            href="/"
            aria-label="Vallejo 420 MD home"
            className="flex shrink-0 items-center rounded-md p-1"
          >
            <Image
              src="/media/vallejo-420-md-logo.webp"
              alt="vallejo 420 md logo"
              width={120}
              height={45}
              priority
              className="h-9 w-[96px] object-contain md:h-8 md:w-[88px] lg:h-10 lg:w-[112px]"
            />
          </Link>

          <nav className="hidden min-w-0 flex-nowrap items-center justify-center gap-0 md:flex md:flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap rounded-lg px-1.5 py-2 text-sm font-semibold tracking-normal text-foreground transition-colors hover:text-primary lg:px-3 lg:text-base lg:tracking-[0.1px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <BookingButton
            className="hidden h-10 shrink-0 rounded-lg px-3 text-sm font-semibold shadow-none md:inline-flex lg:h-11 lg:px-5 lg:text-base"
            size="lg"
          >
            Book evaluation
          </BookingButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-dark-green md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain border-t-4 border-primary bg-white pb-[max(1.75rem,env(safe-area-inset-bottom))] text-foreground shadow-[0_18px_32px_rgba(11,93,42,0.18)] md:hidden"
        >
          <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4">
            <div className="flex min-h-[60px] items-center gap-2 border-b border-border">
                <div className="flex min-w-0 flex-1 items-center">
                <Link
                  href="/"
                  aria-label="Vallejo 420 MD home"
                  onClick={() => setOpen(false)}
                    className="flex h-10 w-[104px] shrink-0 items-center justify-center rounded-md  px-1"
                >
                  <Image
                    src="/media/vallejo-2.webp"
                    alt="Vallejo 420 MD"
                      width={96}
                      height={38}
                      className="h-[38px] w-24 object-contain"
                  />
                </Link>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Email Vallejo 420 MD"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-dark-green hover:bg-light-green"
                >
                  <Mail className="size-4" aria-hidden />
                </a>
                <a
                  href={contactInfo.phoneHref}
                  aria-label={`Call ${contactInfo.phone}`}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-dark-green hover:bg-light-green"
                >
                  <Phone className="size-4" aria-hidden />
                </a>
                <Link
                  href="/contact/"
                  aria-label="Get your medical marijuana card"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md  bg-white text-dark-green hover:bg-light-green"
                >
                  <UserRound className="size-4" aria-hidden />
                </Link>
                <BookingButton
                  size="sm"
                  className="h-9 shrink-0 rounded-md bg-primary px-2.5 text-[11px] font-bold uppercase text-white hover:bg-dark-green"
                >
                  Start here
                </BookingButton>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-muted"
              >
                  <X className="size-4" />
              </button>
            </div>

            <nav className="flex w-full flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                    className="flex min-h-12 w-[4/5] items-center justify-between border-b border-border py-3  mt-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                    <ChevronRight className="size-4 text-dark-green" aria-hidden />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}