"use client";

import { useState, type ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { CalendarHeart } from "lucide-react";

import dynamic from "next/dynamic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";

const LeadCaptureForm = dynamic(
  () => import("@/components/lead-capture-form").then((mod) => mod.LeadCaptureForm),
  {
    loading: () => (
      <div className="flex h-64 items-center justify-center">
        <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  }
);

type EvaluationFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** Controlled evaluation / lead-capture popup (portal, above mobile nav). */
export function EvaluationFormDialog({
  open,
  onOpenChange,
}: EvaluationFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              Book Your Evaluation
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Takes about 2 minutes. Fill out the form below to get started.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="px-6 pt-6 pb-8 sm:px-8">
          <LeadCaptureForm submitLabel="Start My Evaluation" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

export function BookingButton({
  variant,
  size,
  className,
  children,
}: BookingButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <EvaluationFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}