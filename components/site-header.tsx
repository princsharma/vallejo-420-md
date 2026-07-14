"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { BookingButton } from "@/components/booking-dialog";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Get Your Card", href: "/get-your-card" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-10 sm:py-5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/vallejo-logo.webp"
              alt="Vallejo 420 MD"
              width={168}
              height={72}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-muted/40 px-1.5 py-1.5 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-white hover:shadow-sm dark:hover:bg-white/10",
                    active && "bg-white shadow-sm dark:bg-white/10"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <BookingButton
            className="hidden rounded-full px-6 shadow-lg shadow-primary/30 sm:inline-flex"
            size="lg"
          >
            Book a Consultation
          </BookingButton>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-muted/40 p-2 text-primary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="fixed inset-0 z-50 flex flex-col bg-primary text-primary-foreground md:hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <Image
                src="/vallejo-logo.webp"
                alt="Vallejo 420 MD"
                width={168}
                height={72}
                className="h-10 w-auto brightness-0 invert"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 p-2 text-primary-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
              <BookingButton
                variant="secondary"
                size="lg"
                className="mt-2 rounded-full px-8"
              >
                Book a Consultation
              </BookingButton>
            </nav>

            <div className="flex items-center justify-center gap-3 pb-10">
              <a
                href="https://www.yelp.com/biz/vallejo-420-evaluations-vallejo"
                target="_blank"
                rel="noreferrer"
                aria-label="Yelp"
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12.9 2.5c-.4-.2-1 0-1.2.4L8.9 8.6c-.2.5 0 1 .5 1.2l4.7 1.8c.5.2 1 0 1.2-.5.1-.2.1-.4 0-.6L13 3c0-.2-.1-.4-.1-.5ZM8.3 10.7 3 8.9c-.5-.2-1 .1-1.1.6-.1.2 0 .4.1.6l3.4 4.5c.3.4.9.5 1.3.2.2-.1.3-.3.3-.5l1.3-3c.1-.5-.2-1-.6-1.2.2 0 .3 0 .3-.1Zm.4 3.2-3.6 3.3c-.4.3-.4.9-.1 1.3.1.2.3.3.5.3l5.3 1c.5.1 1-.2 1.1-.7 0-.2 0-.4-.1-.6L10.1 14c-.2-.5-.8-.6-1.2-.4-.1.1-.2.2-.2.3Zm3.7.2-1.2 5.3c-.1.5.2 1 .7 1.1.2 0 .4 0 .6-.1l4.2-2.9c.4-.3.5-.9.2-1.3-.1-.2-.3-.3-.5-.4l-3-1c-.5-.1-1 .1-1.1.6.1-.1.1-.2.1-.3Zm2.1-2.8 4.9-2.2c.5-.2.7-.7.5-1.2-.1-.2-.2-.3-.4-.4l-4.6-2.4c-.5-.2-1 0-1.2.4-.1.2-.1.4 0 .6l1 4.8c.1.5.6.8 1.1.6.3-.1.5-.3.7-.6Z" />
                </svg>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
