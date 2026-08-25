"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { SuccessDialog } from "@/components/success-dialog";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
const contactEmail = "info@traveco.in";
const phoneDisplayNumber = "88502 01321";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/data/destinations";
import { CountryFlag } from "@/components/destinations/country-flag";

const fieldClasses =
  "h-[52px] w-full rounded-control border border-primary/10 bg-[#FAF9F6] px-4 font-medium text-[16px] text-primary outline-none transition-all placeholder:text-primary/35 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[var(--traveco-gold)] focus-visible:ring-offset-2 [&::-webkit-calendar-picker-indicator]:opacity-40 [&::-webkit-calendar-picker-indicator]:hover:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer";

const textareaClasses =
  "min-h-[120px] w-full resize-none rounded-control border border-primary/10 bg-[#FAF9F6] px-4 py-3.5 font-medium text-[16px] text-primary outline-none transition-all placeholder:text-primary/35 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[var(--traveco-gold)] focus-visible:ring-offset-2";

const labelClasses = "mb-1.5 block text-[13px] font-[650] text-primary";

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
    <section id="contact" className="relative bg-[#F8F6F0] py-16 lg:py-30 z-0">
      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row overflow-hidden rounded-panel bg-white shadow-sm ring-1 ring-primary/5"
        >
          {/* Left Panel (Deep Navy with Image Background - 42%) */}
          <div className="relative flex w-full flex-col overflow-hidden p-8 sm:p-12 lg:w-[42%] lg:p-14">
            
            {/* Premium Atmospheric Image Background */}
            <Image 
              src="/images/faq-consultation.jpg" 
              alt="Visa Consultation" 
              fill 
              sizes="(max-width: 1024px) 100vw, 42vw" 
              className="object-cover object-[center_30%]"
              data-scroll
              data-scroll-speed="0.05"
            />
            
            {/* Deep Navy Overlays */}
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-primary/75" />

            <motion.div variants={fadeUp} className="relative z-10 flex-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-gold-cta">
                Ready to travel?
              </p>
              <h2 className="mt-4 text-[38px] font-bold leading-[1.05] tracking-tight text-white sm:text-[44px] lg:text-[46px]">
                Your next journey starts with the right guidance.
              </h2>
              <p className="mt-6 text-[15.5px] leading-[1.6] text-white/80 lg:text-[16px]">
                Tell us where you're planning to travel and our team will help you understand the next steps for your visa application.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-10 mt-12 flex flex-col gap-5 lg:mt-16">
              <div className="flex items-center gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                  <Mail className="size-4 opacity-90" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Official Email</span>
                  <a href="mailto:info@traveco.in" className="mt-0.5 text-[14.5px] font-medium text-white transition-colors hover:text-gold-cta">info@traveco.in</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                  <Mail className="size-4 opacity-90" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Enquiries</span>
                  <a href={`mailto:${contactEmail}`} className="mt-0.5 text-[14.5px] font-medium text-white transition-colors hover:text-gold-cta">{contactEmail}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                  <MapPin className="size-4 opacity-90" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Location</span>
                  <span className="mt-0.5 text-[14.5px] font-medium text-white">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {phoneDisplayNumber && (
                <div className="flex items-center gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                    <Phone className="size-4 opacity-90" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Phone</span>
                    <a href={`tel:+91${phoneDisplayNumber}`} className="mt-0.5 text-[14.5px] font-medium text-white transition-colors hover:text-gold-cta">{phoneDisplayNumber}</a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Panel (White/Off-white - 58%) */}
          <div className="flex w-full flex-col p-8 sm:p-12 lg:w-[58%] lg:p-14">
            <motion.div variants={fadeUp}>
              <h3 className="text-[30px] font-bold tracking-tight text-primary sm:text-[34px]">
                Plan Your Journey
              </h3>
              <p className="mt-2 text-[15.5px] text-primary/70 lg:text-[16px]">
                Share a few details and we'll get back to you regarding your visa assistance requirements.
              </p>
            </motion.div>

            <motion.form 
              variants={fadeUp} 
              onSubmit={handleSubmit} 
              className="mt-8 flex flex-col gap-6"
            >
              {/* Row 1 */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name <span className="text-gold-cta ml-0.5">*</span>
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
                    Mobile Number <span className="text-gold-cta ml-0.5">*</span>
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

              {/* Row 2 */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address <span className="text-gold-cta ml-0.5">*</span>
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
                    <SelectTrigger id="destination" className={cn(fieldClasses, "shadow-none data-[state=open]:border-gold-cta data-[state=open]:ring-1 data-[state=open]:ring-gold-cta/50")}>
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent className="rounded-control border-primary/10 bg-white font-medium text-primary shadow-lg max-h-[300px]">
                      {destinations.map(dest => (
                        <SelectItem key={dest.countryCode} value={dest.country} className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">
                          <div className="flex items-center gap-3">
                            <CountryFlag countryCode={dest.countryCode} country={dest.country} size="sm" />
                            <span>{dest.country}</span>
                          </div>
                        </SelectItem>
                      ))}
                      <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">
                          <div className="flex items-center gap-3">
                            <div className="w-[24px] h-[16px] bg-slate-100 border border-black/5 rounded-[2px]" />
                            <span>Other</span>
                          </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="visaType" className={labelClasses}>
                    Visa Type
                  </label>
                  <Select name="visaType">
                    <SelectTrigger id="visaType" className={cn(fieldClasses, "shadow-none data-[state=open]:border-gold-cta data-[state=open]:ring-1 data-[state=open]:ring-gold-cta/50")}>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-control border-primary/10 bg-white font-medium text-primary shadow-lg">
                      <SelectItem value="Tourist / Visitor" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Tourist / Visitor</SelectItem>
                      <SelectItem value="Business" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Business</SelectItem>
                      <SelectItem value="Student" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Student</SelectItem>
                      <SelectItem value="Work / Employment" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Work / Employment</SelectItem>
                      <SelectItem value="Transit" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Transit</SelectItem>
                      <SelectItem value="Dependent / Family" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Dependent / Family</SelectItem>
                      <SelectItem value="Other" className="cursor-pointer rounded-sm py-2.5 hover:bg-[#FBF7EE] hover:text-primary focus:bg-[#FBF7EE] focus:text-primary">Other</SelectItem>
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

              {/* Row 4 */}
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
                <p className="text-[14px] font-semibold text-red-600">
                  We couldn't submit your enquiry. Please try again or contact TRAVECO directly.
                </p>
              )}

              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-control bg-traveco-navy px-8 text-[15px] font-[650] text-white transition-all duration-200 hover:bg-[#122A4A] outline-none focus-visible:ring-2 focus-visible:ring-traveco-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Request Visa Assistance"}
                  {!isSubmitting && <ArrowRight className="size-4 text-gold-cta transition-transform group-hover:translate-x-1" />}
                </button>
                <p className="text-[13px] font-medium text-primary/30">
                  Form is in demo mode.
                </p>
              </div>
            </motion.form>
          </div>
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
