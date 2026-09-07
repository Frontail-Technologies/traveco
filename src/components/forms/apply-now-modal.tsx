"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApplyModal } from "@/context/apply-modal-context";
import { DestinationCombobox } from "@/components/forms/destination-combobox";
import { ArrowRight, CheckCircle2, AlertCircle, MessageCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const labelClasses = "block text-xs font-semibold text-navy uppercase tracking-wider mb-1";
const fieldClasses =
  "h-10 sm:h-10.5 w-full rounded-control border border-navy/15 bg-white px-3.5 text-xs sm:text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";
const textareaClasses =
  "h-20 sm:h-24 min-h-[75px] max-h-[120px] w-full resize-none rounded-control border border-navy/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";

const SERVICE_OPTIONS = [
  "Tourist / Visitor Visa",
  "Business Visa",
  "Student Visa",
  "Transit Visa",
  "Schengen Visa",
  "Medical Visa",
  "Family / Dependent Visa",
  "Conference / Event Visa",
  "eVisa / ETA",
  "Visa-on-Arrival Guidance",
  "Passport Services",
  "Documentation Services",
  "Visa Refusal Assessment",
  "Business & Corporate Visa",
  "B2B Travel Agent Support",
  "Travel Support",
  "Other",
];

export function ApplyNowModal() {
  const { isOpen, closeApplyModal, initialData } = useApplyModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState<string>("");
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [expectedTravelDate, setExpectedTravelDate] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Sync initial data when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage(null);
      if (initialData?.serviceType) {
        setServiceType(initialData.serviceType);
      }
      if (initialData?.destination) {
        setDestinationCountry(initialData.destination);
      }
      if (initialData?.travelDate) {
        setExpectedTravelDate(initialData.travelDate);
      }
      if (initialData?.message) {
        setMessage(initialData.message);
      }
    }
  }, [isOpen, initialData]);

  // Auto-scroll to error message when it appears
  useEffect(() => {
    if (errorMessage && scrollContainerRef.current) {
      const timer = setTimeout(() => {
        scrollContainerRef.current?.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const resetForm = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setServiceType("");
    setDestinationCountry("");
    setExpectedTravelDate("");
    setMessage("");
    setHoneypot("");
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeApplyModal();
      setTimeout(resetForm, 300);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        fullName,
        mobile,
        email,
        serviceType: serviceType || "Tourist Visa",
        destinationCountry: destinationCountry || undefined,
        expectedTravelDate: expectedTravelDate || undefined,
        message: message || undefined,
        _hp: honeypot,
        pageUrl: typeof window !== "undefined" ? window.location.href : "TRAVECO Website",
      };

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again or contact us on WhatsApp.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again or contact us on WhatsApp.";
      setErrorMessage(msg);
      setTimeout(() => {
        scrollContainerRef.current?.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 80);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg lg:max-w-xl w-[94vw] sm:w-full p-0 overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-navy/10 bg-white shadow-2xl max-h-[85vh] flex flex-col">
        {/* Ultra-Compact Modal Header */}
        <div className="bg-muted/20 border-b border-navy/10 px-5 py-2.5 sm:px-6 sm:py-3 shrink-0 pr-12">
          <DialogHeader className="space-y-0 text-left">
            <DialogTitle className="text-lg sm:text-xl font-bold tracking-tight text-navy">
              Get Free Consultation
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Modal Content / Form */}
        {isSuccess ? (
          <div className="px-6 py-10 sm:py-12 flex flex-col items-center text-center space-y-4 my-auto">
            <div className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy">Thank you.</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed">
              Your request has been received. TRAVECO will contact you shortly.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="inline-flex h-12.5 sm:h-13 min-h-[48px] sm:min-h-[52px] items-center justify-center rounded-full bg-accent px-8 text-sm sm:text-base font-bold text-white shadow-sm hover:bg-accent/90 transition-all cursor-pointer"
              >
                Done
              </button>
              <a
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12.5 sm:h-13 min-h-[48px] sm:min-h-[52px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 text-sm font-semibold text-navy hover:border-accent hover:text-accent shadow-2xs transition-all"
              >
                <MessageCircle className="size-4 text-accent" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Scrollable Form Body */}
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto px-5 py-3 sm:px-6 sm:py-3.5 flex-1 space-y-3 sm:space-y-3.5"
              style={{ scrollbarWidth: "thin" }}
            >
              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5">
                <div>
                  <label htmlFor="modal-name" className={labelClasses}>
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="modal-mobile" className={labelClasses}>
                    Mobile / WhatsApp <span className="text-accent">*</span>
                  </label>
                  <input
                    id="modal-mobile"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={fieldClasses}
                  />
                </div>
              </div>

              {/* Row 2: Email & Service Type */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5">
                <div>
                  <label htmlFor="modal-email" className={labelClasses}>
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="modal-service" className={labelClasses}>
                    Service Type <span className="text-accent">*</span>
                  </label>
                  <Select
                    value={serviceType}
                    onValueChange={setServiceType}
                    required
                  >
                    <SelectTrigger
                      id="modal-service"
                      className={cn(fieldClasses, "shadow-none data-[state=open]:border-accent data-[state=open]:ring-2 data-[state=open]:ring-accent/20")}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3: Destination Country & Expected Travel Date */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5">
                <div>
                  <label htmlFor="modal-dest" className={labelClasses}>
                    Destination Country
                  </label>
                  <DestinationCombobox
                    id="modal-dest"
                    name="destinationCountry"
                    value={destinationCountry}
                    onChange={setDestinationCountry}
                    placeholder="Search or select country"
                    className="h-10 sm:h-10.5 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="modal-date" className={labelClasses}>
                    Expected Travel Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={expectedTravelDate}
                    onChange={(e) => setExpectedTravelDate(e.target.value)}
                    className={fieldClasses}
                  />
                </div>
              </div>

              {/* Row 4: Message / Requirement */}
              <div>
                <label htmlFor="modal-message" className={labelClasses}>
                  Message / Requirement
                </label>
                <textarea
                  id="modal-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief details regarding your visa or passport requirements..."
                  className={cn(textareaClasses, "h-16 sm:h-20 min-h-[60px] max-h-[100px]")}
                />
              </div>

              {/* Error Message Banner with Auto-Scroll Anchor */}
              {errorMessage && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700 animate-in fade-in-50 duration-200">
                  <AlertCircle className="size-4 shrink-0 mt-0.5 text-red-600" />
                  <div className="flex-1">
                    <p>{errorMessage}</p>
                    <a
                      href="https://wa.me/918850201321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-bold text-red-700 underline hover:text-red-900"
                    >
                      Click here to contact us on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Footer Action Bar */}
            <div className="sticky bottom-0 bg-white border-t border-navy/10 px-5 py-3 sm:px-6 sm:py-3.5 z-20 shrink-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12.5 sm:h-13 min-h-[50px] sm:min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-60 flex-1 sm:flex-initial cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4.5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="size-4.5" />
                  </>
                )}
              </button>

              <a
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12.5 sm:h-13 min-h-[50px] sm:min-h-[52px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 text-sm font-semibold text-navy hover:border-accent hover:text-accent shadow-2xs transition-all whitespace-nowrap justify-center"
              >
                <MessageCircle className="size-4 text-accent" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
