"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

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

          <Button
            className="hidden rounded-full px-6 shadow-lg shadow-primary/30 sm:inline-flex"
            size="lg"
            render={<a href="/contact" />}
            nativeButton={false}
          >
            Book a Consultation
          </Button>
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
          <div className="mx-5 mb-4 flex flex-col gap-1 rounded-2xl border border-border/70 bg-muted/40 p-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-primary hover:bg-white dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-1 rounded-full"
              render={<a href="/contact" />}
              nativeButton={false}
            >
              Book a Consultation
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
