"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-data";

function getHeallyUtmSource() {
  const hostname = siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `utm-${hostname}`;
}

const fieldEnter = "enter-fade-up-sm";

function staggerDelay(index: number) {
  return { animationDelay: `${50 + index * 120}ms` };
}

function validateName(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2 || parts.some((part) => !/^[a-zA-Z'-]+$/.test(part))) {
    return "Please enter your first and last name.";
  }
  return null;
}

function validateEmail(value: string) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

function validatePhone(value: string) {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
    return "Please enter a valid phone number (e.g., 999-999-9999).";
  }
  return null;
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

type LeadErrors = {
  name?: string;
  email?: string;
  phone?: string;
  termsAccepted?: string;
};

export function LeadCaptureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) ?? undefined }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) ?? undefined }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) ?? undefined }));
  }

  function handleTermsAcceptedChange(checked: boolean) {
    setTermsAccepted(checked);
    setErrors((prev) => ({
      ...prev,
      termsAccepted: checked ? undefined : prev.termsAccepted,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const termsAcceptedError = termsAccepted
      ? null
      : "Please accept the Terms and Conditions to continue.";

    setErrors({
      name: nameError ?? undefined,
      email: emailError ?? undefined,
      phone: phoneError ?? undefined,
      termsAccepted: termsAcceptedError ?? undefined,
    });

    if (
      nameError ||
      emailError ||
      phoneError ||
      termsAcceptedError
    ) {
      return;
    }

    setSubmitting(true);

    const heallyUtmSource = getHeallyUtmSource();
    const nameParts = name.trim().split(/\s+/);
    const payload = {
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" "),
      email: email.trim().toLowerCase(),
      phone,
      state: "CA",
      state_of_evaluation: "CA",
      timezone: "PST",
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: heallyUtmSource,
      },
    };

    const preset = btoa(JSON.stringify(payload))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    sendGTMEvent({
      event: "heallyValidatedSubmit",
      utm_source: heallyUtmSource,
    });

    window.location.href = `https://mymmj.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}&utm_source=${encodeURIComponent(heallyUtmSource)}`;
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(0)}>
        <Label htmlFor="leadName">Name (First &amp; Last)*</Label>
        <Input
          id="leadName"
          name="leadName"
          placeholder="Jane Doe"
          value={name}
          onChange={handleNameChange}
          aria-invalid={!!errors.name}
          className="h-11 rounded-xl px-3.5"
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>
      <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(1)}>
        <Label htmlFor="leadEmail">Email*</Label>
        <Input
          id="leadEmail"
          name="leadEmail"
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={handleEmailChange}
          aria-invalid={!!errors.email}
          className="h-11 rounded-xl px-3.5"
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>
      <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(2)}>
        <Label htmlFor="leadPhone">Phone Number*</Label>
        <Input
          id="leadPhone"
          name="leadPhone"
          type="tel"
          placeholder="555-555-5555"
          value={phone}
          onChange={handlePhoneChange}
          aria-invalid={!!errors.phone}
          className="h-11 rounded-xl px-3.5"
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>
      <div className={`grid gap-1.5 ${fieldEnter} mt-1`} style={staggerDelay(3)}>
        <div className="flex items-start gap-2.5 rounded-xl bg-muted/50 p-3">
          <Checkbox
            id="leadTermsAccepted"
            name="leadTermsAccepted"
            className="mt-0.5"
            checked={termsAccepted}
            onCheckedChange={(checked) => handleTermsAcceptedChange(checked === true)}
            aria-invalid={!!errors.termsAccepted}
          />
          <Label htmlFor="leadTermsAccepted" className="text-sm font-normal text-muted-foreground">
            I accept the Terms and Conditions
          </Label>
        </div>
        {errors.termsAccepted && (
          <p className="text-sm text-destructive">{errors.termsAccepted}</p>
        )}
      </div>
      <div className={fieldEnter} style={staggerDelay(4)}>
        <Button type="submit" size="xl" className="mt-1 w-full" disabled={submitting}>
          {submitting ? "Processing..." : "Get Your Card"}
        </Button>
      </div>
    </form>
  );
}
