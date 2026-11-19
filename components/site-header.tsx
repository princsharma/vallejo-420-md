"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";

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
        <div className="mx-auto flex w-full max-w-lg items-center justify-between gap-4 py-4 md:max-w-none">
          <Link href="/" aria-label="Vallejo 420 MD home" className="flex shrink-0 items-center">
            <Image
              src="/media/vallejo-2.webp"
              alt="Vallejo 420 MD"
              width={288}
              height={128}
              priority
              unoptimized
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-0 md:flex lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md rounded-lg px-3 py-2 font-semibold tracking-[0.1px] text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <BookingButton
            className="text-md hidden h-11 shrink-0 rounded-lg px-5 font-semibold shadow-none md:inline-flex"
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
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain bg-dark-green px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-5 text-white shadow-[0_18px_32px_rgba(11,93,42,0.18)] md:hidden"
        >
          <div className="mx-auto flex w-full max-w-lg flex-1 flex-col">
            <div className="flex items-center justify-between pb-4">
              <Image
                src="/media/VALLEJO 2.webp"
                alt="Vallejo 420 MD"
                width={288}
                height={128}
                unoptimized
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

            <nav className="flex w-full flex-col items-stretch gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full border border-white/10 bg-white/4 px-4 py-3 text-center text-lg font-semibold tracking-[0.02em] text-white transition-colors hover:border-white/30 hover:bg-white/8 hover:text-amber"
                >
                  {link.label}
                </Link>
              ))}
              <BookingButton
                variant="secondary"
                size="lg"
                className="mt-2 h-12 w-full rounded-lg bg-white px-8 text-dark-green hover:bg-light-green"
              >
                Book evaluation
              </BookingButton>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}