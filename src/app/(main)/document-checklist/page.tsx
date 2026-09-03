"use client";

import * as React from "react";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    id: "personal-documents",
    title: "Personal Documents",
    items: [
      "Valid Passport",
      "Old Passport, if applicable",
      "Passport-size Photographs",
      "National ID / Aadhaar, if applicable",
      "PAN Card, if applicable",
      "Birth Certificate, if applicable",
    ],
  },
  {
    id: "travel-information",
    title: "Travel Information",
    items: [
      "Intended Travel Dates",
      "Purpose of Travel",
      "Destination Details",
      "Flight Itinerary",
      "Travel Plan",
      "Trip Sponsor Details, if applicable",
    ],
  },
  {
    id: "financial-documents",
    title: "Financial Documents",
    items: [
      "Bank Statements",
      "Income Tax Returns, if applicable",
      "Salary Slips, if applicable",
      "Financial Sponsorship Letter, if applicable",
      "Proof of Funds",
      "Business Financials, if applicable",
    ],
  },
  {
    id: "employment-business",
    title: "Employment / Business Documents",
    items: [
      "Employment Letter",
      "Leave Approval Letter",
      "Salary Proof",
      "Company Registration, if applicable",
      "Business Cover Letter, if applicable",
      "GST / Business Proof, if applicable",
    ],
  },
  {
    id: "student-documents",
    title: "Student Documents",
    items: [
      "Admission Letter",
      "Fee Receipt, if applicable",
      "Academic Records",
      "Student ID, if applicable",
      "Education Loan Documents, if applicable",
      "Sponsor Financial Documents, if applicable",
    ],
  },
  {
    id: "sponsor-invitation",
    title: "Sponsor / Invitation",
    items: [
      "Invitation Letter",
      "Sponsor ID / Residence Proof",
      "Relationship Proof",
      "Sponsor Financial Documents",
      "Accommodation Support Letter",
      "Event / Conference Invitation, if applicable",
    ],
  },
  {
    id: "accommodation-itinerary",
    title: "Accommodation & Itinerary",
    items: [
      "Hotel Booking",
      "Host Accommodation Details",
      "Day-wise Itinerary",
      "Return Travel Plan",
      "Internal Travel Bookings, if applicable",
    ],
  },
  {
    id: "insurance-health",
    title: "Insurance & Health",
    items: [
      "Travel Insurance, where applicable",
      "Medical Insurance, where applicable",
      "Vaccination Certificate, if required",
      "Medical Reports, if requested",
      "Health Declaration, if applicable",
    ],
  },
  {
    id: "travel-history",
    title: "Previous Travel / Visa History",
    items: [
      "Previous Visa Copies",
      "Entry / Exit Stamps",
      "Previous Refusal Letter, if applicable",
      "Travel History Summary",
      "Old Passport Travel Records",
    ],
  },
  {
    id: "additional-documents",
    title: "Additional Supporting Documents",
    items: [
      "Cover Letter",
      "Minor Consent Letter, if applicable",
      "Marriage Certificate, if applicable",
      "Name Change Proof, if applicable",
      "Police Clearance Certificate, if required",
      "Any destination-specific supporting document",
    ],
  },
];

export default function DocumentChecklistPage() {
  const [activeSection, setActiveSection] = React.useState(SECTIONS[0].id);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(SECTIONS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white pt-22 min-h-screen">
      {/* ── HEADER / INTRO ────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 border-b border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest mb-3">
              RESOURCES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-4">
              Visa Document Checklist
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              A simple checklist of commonly requested documents for visa applications. Use this as a starting point before speaking with TRAVECO.
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Last updated: 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (2-COLUMN EDITORIAL LAYOUT) ─────────────── */}
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* LEFT STICKY "ON THIS PAGE" */}
          <aside className="lg:w-64 xl:w-72 shrink-0 hidden lg:block lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-navy/10 bg-muted/20 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                ON THIS PAGE
              </p>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((section, idx) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(section.id);
                        if (element) {
                          const yOffset = -120;
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                          setActiveSection(section.id);
                        }
                      }}
                      className={cn(
                        "flex items-center gap-2.5 py-2 px-3 text-xs font-medium rounded-lg transition-colors",
                        isActive
                          ? "bg-white text-navy font-bold shadow-2xs border border-navy/10"
                          : "text-muted-foreground hover:text-navy hover:bg-white/50"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full shrink-0 transition-colors",
                          isActive ? "bg-accent" : "bg-transparent"
                        )}
                      />
                      <span className="truncate">{idx + 1}. {section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT CHECKLIST CONTENT */}
          <main className="flex-1 w-full max-w-none">
            <div className="flex flex-col gap-12">
              {SECTIONS.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-5 border-b border-navy/10 pb-3">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-navy/5 text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-4 shadow-2xs transition-colors hover:border-accent/40"
                      >
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Check className="size-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-navy">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* ── RESTRAINED NOTE CARD ────────────────────────────── */}
            <div className="mt-14 rounded-[2rem] border border-navy/10 bg-muted/20 p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-2.5">
                <AlertCircle className="size-5 text-accent shrink-0" />
                <h3 className="text-base font-bold text-navy">Note</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This checklist is a general preparation guide. Exact document requirements vary by destination, visa category, embassy/consulate rules and applicant circumstances. TRAVECO Mobility can help review your case and guide you with the applicable requirements.
              </p>
            </div>

            {/* ── COMPACT CTA CARD ───────────────────────────────── */}
            <div className="mt-8 rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
                  Ready to prepare your documents?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Share your travel details and TRAVECO will guide you through the next steps.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                <Button asChild variant="secondary" className="h-11 px-6 text-sm font-bold shadow-sm">
                  <Link href="/#contact" className="inline-flex items-center justify-center gap-2">
                    <span>Get Visa Assistance</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-5 text-sm font-semibold text-navy whitespace-nowrap shrink-0 transition-all hover:border-accent hover:text-accent shadow-2xs"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
