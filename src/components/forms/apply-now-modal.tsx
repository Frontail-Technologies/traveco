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

const labelClasses = "block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5";
const fieldClasses =
  "h-11 w-full rounded-control border border-navy/15 bg-white px-3.5 text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";
const textareaClasses =
  "min-h-[85px] w-full resize-none rounded-control border border-navy/15 bg-white px-3.5 py-2.5 text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-0";

const SERVICE_OPTIONS = [
  "Tourist Visa",
  "Business Visa",
  "Student Visa",
  "Transit Visa",
  "Schengen Visa",
  "Passport Services",
  "Other",
];

export function ApplyNowModal() {
  const { isOpen, closeApplyModal, initialData } = useApplyModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState<string>("");
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [nationality, setNationality] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
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
    }
  }, [isOpen, initialData]);

  const resetForm = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setServiceType("");
    setDestinationCountry("");
    setNationality("");
    setCurrentCountry("");
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
        nationality: nationality || undefined,
        currentCountry: currentCountry || undefined,
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
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-2xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-muted/30 border-b border-navy/5 px-6 pt-6 pb-5 sm:px-8">
          <DialogHeader className="space-y-1 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              TRAVECO MOBILITY
            </p>
            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              Application & Enquiry
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              Provide your travel details and our visa & passport team will guide you through the next steps.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 flex-1">
          {isSuccess ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Thank you.</h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
                Your request has been received. TRAVECO will contact you shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="inline-flex h-11 items-center justify-center rounded-control bg-accent px-8 text-sm font-bold text-white shadow-sm hover:bg-accent/90 transition-all"
                >
                  Done
                </button>
                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-6 text-sm font-semibold text-navy hover:border-accent hover:text-accent shadow-2xs transition-all"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4.5">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                    <SelectContent className="rounded-control border-navy/10 bg-white font-medium text-navy shadow-lg z-60">
                      {SERVICE_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          className="cursor-pointer rounded-sm py-2.5 text-navy hover:bg-muted focus:bg-muted"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3: Destination Country & Expected Travel Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                    className="h-11 text-sm"
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

              {/* Row 4: Nationality & Current Location */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-nationality" className={labelClasses}>
                    Nationality
                  </label>
                  <input
                    id="modal-nationality"
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder="e.g. Indian"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="modal-current" className={labelClasses}>
                    Current Country / City
                  </label>
                  <input
                    id="modal-current"
                    type="text"
                    value={currentCountry}
                    onChange={(e) => setCurrentCountry(e.target.value)}
                    placeholder="e.g. Mumbai, India"
                    className={fieldClasses}
                  />
                </div>
              </div>

              {/* Row 5: Message / Requirement */}
              <div>
                <label htmlFor="modal-message" className={labelClasses}>
                  Message / Requirement
                </label>
                <textarea
                  id="modal-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief details regarding your visa or passport assistance requirements..."
                  className={textareaClasses}
                />
              </div>

              {/* Error Message Banner */}
              {errorMessage && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p>{errorMessage}</p>
                    <a
                      href="https://wa.me/918850201321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block underline hover:text-red-900"
                    >
                      Click here to contact us on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Submit Button & WhatsApp Link */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-accent px-7 text-sm font-bold text-white shadow-sm transition-all hover:bg-accent/90 disabled:opacity-60 flex-1 sm:flex-initial"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>

                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-5 text-xs sm:text-sm font-semibold text-navy hover:border-accent hover:text-accent shadow-2xs transition-all whitespace-nowrap"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
