"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { SuccessDialog } from "@/components/success-dialog";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DestinationCombobox } from "@/components/forms/destination-combobox";

const fieldClasses =
  "h-12 w-full rounded-control border border-navy/15 bg-white px-4 font-medium text-base text-navy outline-none transition-all placeholder:text-slate-500 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0 [&::-webkit-calendar-picker-indicator]:opacity-40 [&::-webkit-calendar-picker-indicator]:hover:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer";

const textareaClasses =
  "min-h-[100px] w-full resize-none rounded-control border border-navy/15 bg-white px-4 py-3.5 font-medium text-base text-navy outline-none transition-all placeholder:text-slate-500 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";

const labelClasses = "mb-1.5 block text-xs sm:text-sm font-semibold text-navy uppercase tracking-wider";

export function EnquirySection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [destination, setDestination] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: formData.get("name")?.toString().trim() || "",
      mobile: formData.get("phone")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      destinationCountry: destination || formData.get("destination")?.toString().trim() || undefined,
      serviceType: formData.get("serviceType")?.toString().trim() || "Tourist Visa",
      expectedTravelDate: formData.get("travelDate")?.toString().trim() || undefined,
      message: formData.get("message")?.toString().trim() || undefined,
      _hp: formData.get("_hp")?.toString() || "",
      pageUrl: typeof window !== "undefined" ? window.location.href : "TRAVECO Homepage",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again or contact us on WhatsApp.");
      }

      setShowSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setHasError(true);
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative bg-muted/40 border-t border-navy/5 py-16 md:py-20 lg:py-24 z-0">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10"
        >
          {/* Left Column — Small Image & Contact Details */}
          <div className="flex flex-col gap-6 lg:col-span-4 xl:col-span-4">
            {/* Small Consultation Image */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-16/10 w-full overflow-hidden rounded-[2rem] bg-navy/5 shadow-xs border border-navy/10 sm:aspect-16/9 lg:aspect-4/3"
            >
              <Image
                src="/images/faq-consultation.jpg"
                alt="TRAVECO visa and travel consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-[center_25%]"
              />
            </motion.div>

            {/* Contact Details Card with Accent Background */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[2rem] bg-accent p-6 sm:p-8 text-white shadow-sm"
            >
              <div>
                <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-white/90">
                  Contact Information
                </p>
                <h3 className="text-xl font-bold text-white mt-1">
                  Need direct assistance?
                </h3>
              </div>

              <div className="flex flex-col gap-4 text-sm font-medium border-t border-white/20 pt-4">
                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white mt-0.5">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+918850201321"
                      className="text-sm font-semibold text-white hover:text-white/90 transition-colors"
                    >
                      +91 88502 01321
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white mt-0.5">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                      Official Email
                    </span>
                    <a
                      href="mailto:info@traveco.in"
                      className="text-sm font-semibold text-white hover:text-white/90 transition-colors"
                    >
                      info@traveco.in
                    </a>
                  </div>
                </div>

                {/* Enquiries Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white mt-0.5">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                      Enquiries
                    </span>
                    <a
                      href="mailto:travecomobility@gmail.com"
                      className="text-sm font-semibold text-white hover:text-white/90 transition-colors break-all"
                    >
                      travecomobility@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white mt-0.5">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Mumbai, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Enquiry Form Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:col-span-8 lg:p-10 shadow-xs"
          >
            {/* Form Header */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Plan Your Journey
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Share your travel details and our team will help you understand the next steps.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-6"
            >
              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="_hp"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name <span className="text-accent ml-0.5">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Mobile Number <span className="text-accent ml-0.5">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    className={fieldClasses}
                  />
                </div>
              </div>

              {/* Row 2: Email & Destination */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address <span className="text-accent ml-0.5">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="destination" className={labelClasses}>
                    Destination
                  </label>
                  <DestinationCombobox
                    id="destination"
                    name="destination"
                    value={destination}
                    onChange={setDestination}
                    placeholder="Search or select destination"
                  />
                </div>
              </div>

              {/* Row 3: Service Type & Travel Date */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="serviceType" className={labelClasses}>
                    Service Type <span className="text-accent ml-0.5">*</span>
                  </label>
                  <Select name="serviceType" defaultValue="Tourist Visa">
                    <SelectTrigger
                      id="serviceType"
                      className={cn(fieldClasses, "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20")}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tourist Visa">Tourist Visa</SelectItem>
                      <SelectItem value="Business Visa">Business Visa</SelectItem>
                      <SelectItem value="Student Visa">Student Visa</SelectItem>
                      <SelectItem value="Transit Visa">Transit Visa</SelectItem>
                      <SelectItem value="Schengen Visa">Schengen Visa</SelectItem>
                      <SelectItem value="Passport Services">Passport Services</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="travelDate" className={labelClasses}>
                    Travel Date
                  </label>
                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
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
                  placeholder="Brief details regarding your application..."
                  className={textareaClasses}
                />
              </div>

              {hasError && (
                <p className="text-sm font-semibold text-red-600">
                  We couldn't submit your enquiry. Please try again or contact TRAVECO directly.
                </p>
              )}

              {/* Action Buttons: Submit Enquiry & Chat on WhatsApp */}
              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-control bg-accent px-8 font-bold text-white transition-all duration-300 hover:bg-accent/90 disabled:opacity-70 sm:w-auto"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                  {!isSubmitting && <ArrowRight className="size-4 text-white transition-transform group-hover:translate-x-1" />}
                </button>

                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-7 font-semibold text-navy whitespace-nowrap shrink-0 transition-all duration-300 hover:border-accent hover:text-accent sm:w-auto shadow-2xs"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <SuccessDialog
        open={showSuccess}
        title="Thank you."
        description="Your enquiry has been received and our team will get back to you shortly."
        onOpenChange={setShowSuccess}
      />
    </section>
  );
}
