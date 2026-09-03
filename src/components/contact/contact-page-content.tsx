"use client";

import * as React from "react";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SuccessDialog } from "@/components/success-dialog";
import { cn } from "@/lib/utils";
import { serviceDestinations } from "@/data/traveco-service-countries";
import { CountryFlag } from "@/components/destinations/country-flag";

const labelClasses = "block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5";
const fieldClasses =
  "h-12 w-full rounded-control border border-navy/15 bg-white px-4 font-medium text-base text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0 [&::-webkit-calendar-picker-indicator]:opacity-40 [&::-webkit-calendar-picker-indicator]:hover:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer";
const textareaClasses =
  "min-h-[100px] w-full resize-none rounded-control border border-navy/15 bg-white px-4 py-3.5 font-medium text-base text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";

export function ContactPageContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulated enquiry submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccess(true);
      event.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white pt-22 min-h-screen">
      {/* ── 1. COMPACT HERO / INTRO SECTION ─────────────────────── */}
      <section className="bg-white py-12 md:py-16 border-b border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2.5">
              GET IN TOUCH
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-3">
              Let's plan your next journey.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Have a question or need visa assistance? Share your details and our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN 2-COLUMN LAYOUT (FORM 65% | CONTACT 35%) ─────── */}
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ── LEFT: FORM CARD ────────────────────────────────────── */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] border border-navy/10 p-6 sm:p-8 lg:p-10 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-1.5 tracking-tight">
              Send us a message
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Fill in your details and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={fieldClasses}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Mobile Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className={fieldClasses}
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              {/* Row 2: Email & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={fieldClasses}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className={labelClasses}>
                    Destination
                  </label>
                  <Select name="destination">
                    <SelectTrigger
                      id="destination"
                      className={cn(
                        fieldClasses,
                        "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20"
                      )}
                    >
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent className="rounded-control border-navy/10 bg-white font-medium text-navy shadow-lg max-h-[300px]">
                      {serviceDestinations.map((dest) => (
                        <SelectItem
                          key={dest.slug}
                          value={dest.name}
                          className="cursor-pointer rounded-sm py-2.5 text-navy hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy data-[highlighted]:bg-muted data-[highlighted]:text-navy"
                        >
                          <div className="flex items-center gap-3">
                            {dest.kind === "group" ? (
                              <div className="flex size-6 items-center justify-center rounded-full bg-navy/5 text-navy/60">
                                <span className="text-[10px] font-bold">EU</span>
                              </div>
                            ) : (
                              <CountryFlag
                                countryCode={dest.countryCode || ""}
                                country={dest.name}
                                size="sm"
                              />
                            )}
                            <span>{dest.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                      <SelectItem
                        value="Other"
                        className="cursor-pointer rounded-sm py-2.5 text-navy hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy data-[highlighted]:bg-muted data-[highlighted]:text-navy"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-[24px] h-[16px] bg-slate-100 border border-black/5 rounded-[2px]" />
                          <span>Other</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3: Visa Type & Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="visaType" className={labelClasses}>
                    Visa Type
                  </label>
                  <Select name="visaType">
                    <SelectTrigger
                      id="visaType"
                      className={cn(
                        fieldClasses,
                        "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20"
                      )}
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-control border-navy/10 bg-white font-medium text-navy shadow-lg">
                      <SelectItem value="Tourist / Visitor" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Tourist / Visitor
                      </SelectItem>
                      <SelectItem value="Business" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Business
                      </SelectItem>
                      <SelectItem value="Student" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Student
                      </SelectItem>
                      <SelectItem value="Work / Employment" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Work / Employment
                      </SelectItem>
                      <SelectItem value="Transit" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Transit
                      </SelectItem>
                      <SelectItem value="Dependent / Family" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Dependent / Family
                      </SelectItem>
                      <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted focus:bg-muted">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="travelDate" className={labelClasses}>
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    className={fieldClasses}
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={textareaClasses}
                  placeholder="Brief details regarding your application or travel requirements..."
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-control bg-accent px-8 font-bold text-white shadow-sm transition-all hover:bg-accent/90 disabled:opacity-60"
                >
                  <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-7 font-semibold text-navy whitespace-nowrap shrink-0 transition-all hover:border-accent hover:text-accent shadow-2xs"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>

          {/* ── RIGHT: SINGLE DIRECT CONTACT DETAILS CARD ──────────── */}
          <div className="lg:col-span-4 bg-white rounded-[2rem] border border-navy/10 p-6 sm:p-8 shadow-xs">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">
              DIRECT CONTACT
            </p>
            <h3 className="text-xl font-bold text-navy mb-6 tracking-tight">
              TRAVECO Mobility
            </h3>

            <div className="space-y-5">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-accent mt-0.5">
                  <Phone className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+918850201321"
                    className="text-sm font-semibold text-navy hover:text-accent transition-colors mt-0.5 block"
                  >
                    +91 88502 01321
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-accent mt-0.5">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Official Email
                  </span>
                  <a
                    href="mailto:info@traveco.in"
                    className="text-sm font-semibold text-navy hover:text-accent transition-colors mt-0.5 block"
                  >
                    info@traveco.in
                  </a>
                </div>
              </div>

              {/* Enquiries */}
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-accent mt-0.5">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Enquiries
                  </span>
                  <a
                    href="mailto:travecomobility@gmail.com"
                    className="text-sm font-semibold text-navy hover:text-accent transition-colors mt-0.5 block break-all"
                  >
                    travecomobility@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-accent mt-0.5">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-navy mt-0.5 block">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Strip */}
            <div className="mt-8 pt-6 border-t border-navy/10">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Need quick assistance?
              </p>
              <a
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-control bg-accent px-5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-all hover:bg-accent/90 shadow-2xs"
              >
                <MessageCircle className="size-4" />
                <span className="whitespace-nowrap">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Enquiry Received"
        description="Thank you for reaching out to TRAVECO Mobility. Our visa consultant will review your details and contact you shortly."
      />
    </div>
  );
}
