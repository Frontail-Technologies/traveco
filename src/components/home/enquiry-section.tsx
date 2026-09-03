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
import { serviceDestinations } from "@/data/traveco-service-countries";
import { CountryFlag } from "@/components/destinations/country-flag";

const fieldClasses =
  "h-12 w-full rounded-control border border-navy/15 bg-white px-4 font-medium text-base text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0 [&::-webkit-calendar-picker-indicator]:opacity-40 [&::-webkit-calendar-picker-indicator]:hover:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer";

const textareaClasses =
  "min-h-[100px] w-full resize-none rounded-control border border-navy/15 bg-white px-4 py-3.5 font-medium text-base text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";

const labelClasses = "mb-1.5 block text-sm font-semibold text-navy";

export function EnquirySection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      // NOTE: Simulated submission for demonstration purposes.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.info("TRAVECO Form Status: Submission simulated. Real backend configuration is pending.");
      setShowSuccess(true);
      event.currentTarget.reset();
    } catch {
      setHasError(true);
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
                  <Select name="destination">
                    <SelectTrigger
                      id="destination"
                      className={cn(fieldClasses, "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20")}
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
                              <CountryFlag countryCode={dest.countryCode || ""} country={dest.name} size="sm" />
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
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="visaType" className={labelClasses}>
                    Visa Type
                  </label>
                  <Select name="visaType">
                    <SelectTrigger
                      id="visaType"
                      className={cn(fieldClasses, "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20")}
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-control border-navy/10 bg-white font-medium text-navy shadow-lg">
                      <SelectItem value="Tourist / Visitor" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Tourist / Visitor</SelectItem>
                      <SelectItem value="Business" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Business</SelectItem>
                      <SelectItem value="Student" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Student</SelectItem>
                      <SelectItem value="Work / Employment" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Work / Employment</SelectItem>
                      <SelectItem value="Transit" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Transit</SelectItem>
                      <SelectItem value="Dependent / Family" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Dependent / Family</SelectItem>
                      <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-muted hover:text-navy focus:bg-muted focus:text-navy">Other</SelectItem>
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
                  <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
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
