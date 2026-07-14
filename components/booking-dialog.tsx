"use client";

import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { CalendarHeart } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LeadCaptureForm } from "@/components/lead-capture-form";

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

export function BookingButton({ variant, size, className, children }: BookingButtonProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant={variant} size={size} className={className} />}>
        {children}
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden rounded-3xl border-none p-0 shadow-2xl sm:max-w-md">
        <div className="relative overflow-hidden bg-accent px-6 pt-8 pb-6 sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-14 -left-8 h-28 w-28 rounded-full bg-primary/10"
          />
          <DialogHeader className="relative gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <CalendarHeart className="size-5" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              Book Your Consultation
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Fill out the form below and we&apos;ll get you scheduled right
              away.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="px-6 pt-6 pb-8 sm:px-8">
          <LeadCaptureForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
