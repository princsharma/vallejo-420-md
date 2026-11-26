"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

import { EvaluationFormDialog } from "@/components/booking-dialog";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq/" },
  { label: "Our Doctors", href: "/our-doctors/" },
  { label: "Contact", href: "/contact/" },
];

/** Same surface as home hero (`components/home/hero.tsx`). */
const MOBILE_OPEN_MENU_BG =
  "bg-gradient-to-br from-[#f8faf7] via-[#fcfdfb] to-[#e8f5ea]";

const MOBILE_MEDIA = "(max-width: 767px)";

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia(MOBILE_MEDIA).matches;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [evaluationOpen, setEvaluationOpen] = useState(false);

  const openEvaluationForm = () => {
    setOpen(false);
    setEvaluationOpen(true);
  };

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
      className={`sticky top-0 border-b border-border bg-white/95 backdrop-blur ${
        open
          ? "z-[110] max-md:fixed max-md:inset-x-0 max-md:top-0"
          : "z-20"
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
              width={126}
              height={57}
              priority
              className={
                open
                  ? "h-9 w-[104px] object-contain"
                  : "h-[57px] w-[126px] object-contain"
              }
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

          <Button
            type="button"
            size="lg"
            onClick={openEvaluationForm}
            className="hidden h-10 shrink-0 rounded-lg px-3 text-sm font-semibold shadow-none md:inline-flex lg:h-11 lg:px-5 lg:text-base"
          >
            Book evaluation
          </Button>

          <div className="flex shrink-0 items-center gap-1.5 md:hidden">
            {open ? (
              <>
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Email Vallejo 420 MD"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-dark-green hover:bg-light-green"
                >
                  <Mail className="size-[18px]" strokeWidth={2} aria-hidden />
                </a>
                <a
                  href={contactInfo.phoneHref}
                  aria-label={`Call ${contactInfo.phone}`}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-dark-green hover:bg-light-green"
                >
                  <Phone className="size-[18px]" strokeWidth={2} aria-hidden />
                </a>
              </>
            ) : null}
            <Button
              type="button"
              size="sm"
              onClick={openEvaluationForm}
              className="h-9 shrink-0 rounded-md bg-primary px-2.5 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-dark-green"
            >
              Start here
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-dark-green"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[90] bg-transparent md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className={`absolute inset-x-0 top-full z-[100] flex w-full flex-col rounded-b-2xl border border-border/60 text-foreground shadow-[0_16px_36px_rgba(11,93,42,0.14)] md:hidden ${MOBILE_OPEN_MENU_BG}`}
          >
          <nav
            aria-label="Mobile primary"
            className={`mx-auto w-full max-w-lg px-4 pb-6 pt-1 ${MOBILE_OPEN_MENU_BG}`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] w-full items-center justify-between border-b border-border/90 py-2 text-left text-[15px] font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
                <ChevronDown
                  className="size-[18px] shrink-0 text-dark-green/80"
                  strokeWidth={2}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>
          </div>
        </>
      ) : null}

      <EvaluationFormDialog open={evaluationOpen} onOpenChange={setEvaluationOpen} />
    </header>
  );
}