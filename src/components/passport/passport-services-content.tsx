"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreFooterCTA } from "@/components/pre-footer-cta";
import { useApplyModal } from "@/context/apply-modal-context";

interface PassportServiceCard {
  id: string;
  title: string;
  image: string;
}

const PASSPORT_SERVICES: PassportServiceCard[] = [
  {
    id: "01",
    title: "New Passport Application",
    image: "/images/passport/new.jpg",
  },
  {
    id: "02",
    title: "Passport Renewal / Re-issue",
    image: "/images/passport/renewal.jpg",
  },
  {
    id: "03",
    title: "Tatkal Passport Assistance",
    image: "/images/passport/reissue.jpg",
  },
  {
    id: "04",
    title: "Minor Passport Assistance",
    image: "/images/services/family.jpg",
  },
  {
    id: "05",
    title: "Lost / Damaged Passport Guidance",
    image: "/images/passport/lost.jpg",
  },
  {
    id: "06",
    title: "Name / Address / Personal Details Change",
    image: "/images/passport/update.jpg",
  },
  {
    id: "07",
    title: "Passport Appointment Assistance",
    image: "/images/process/consultation.jpg",
  },
  {
    id: "08",
    title: "Document Verification",
    image: "/images/passport/docs.jpg",
  },
  {
    id: "09",
    title: "Police Verification Guidance",
    image: "/images/process/document-review.jpg",
  },
  {
    id: "10",
    title: "Passport Application Tracking",
    image: "/images/process/update.jpg",
  },
];

const HOW_WE_ASSIST = [
  "Document Review & Verification",
  "Application Form Guidance",
  "Appointment Scheduling Guidance",
  "Supporting Document Preparation",
  "Status Tracking & Next-Step Advice",
];

const DOCUMENT_CATEGORIES = [
  "Proof of Identity (Aadhaar / Voter ID / PAN)",
  "Proof of Address (Utility Bills / Bank Statement / Rent Agreement)",
  "Proof of Date of Birth (Birth Certificate / School Leaving)",
  "Previous Passport (For renewal / re-issue cases)",
  "Passport Photographs (Standard biometric specifications)",
  "Supporting Annexures / Affidavits (where applicable)",
];

export function PassportServicesContent() {
  const { openApplyModal } = useApplyModal();

  const handleOpenModal = () => {
    openApplyModal({
      serviceType: "Passport Services",
    });
  };

  return (
    <div className="bg-white pt-22">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="w-full bg-navy/[0.035] py-16 md:py-20 lg:py-24 border-b border-navy/10">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <p className="text-accent text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
                PASSPORT ASSISTANCE
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-4">
                Passport assistance made simpler.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Get guidance for passport applications, renewals, re-issue and supporting documentation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  type="button"
                  onClick={handleOpenModal}
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 text-sm font-bold shadow-sm cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <span>Get Passport Assistance</span>
                    <ArrowRight className="size-4" />
                  </span>
                </Button>
                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-7 text-sm font-semibold text-navy whitespace-nowrap shrink-0 transition-all hover:border-accent hover:text-accent shadow-2xs"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs bg-navy/5">
                <Image
                  src="/images/services/passport.jpg"
                  alt="TRAVECO Passport Assistance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICE CATEGORY SECTION (IMAGE-LED CARDS) ──────────── */}
      <section className="py-16 md:py-20 lg:py-24 bg-muted/30 border-b border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
              PASSPORT SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Choose the passport service you need.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Select the service category that matches your requirement for structured assistance and document preparation.
            </p>
          </div>

          {/* 10 Image-Led Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PASSPORT_SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={handleOpenModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleOpenModal()}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-xs transition-all duration-300 hover:shadow-lg hover:border-accent/30 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {/* Card Image */}
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-navy/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/95 shadow-xs">
                    <span className="text-xs font-bold text-navy">{service.id}</span>
                  </div>
                </div>

                {/* Card Body — Title Only (No long paragraph) */}
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-navy transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW WE ASSIST & DOCUMENTATION SUPPORT ─────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* How We Assist Card */}
            <div className="flex flex-col justify-between rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
                  OUR EXPERTISE
                </p>
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">
                  How TRAVECO can assist
                </h2>
                <div className="flex flex-col gap-3">
                  {HOW_WE_ASSIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 rounded-xl border border-navy/10 bg-white p-4 transition-colors hover:border-accent/40"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Check className="size-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-navy">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Document Categories Card */}
            <div className="flex flex-col justify-between rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
                  DOCUMENTATION
                </p>
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">
                  Key Document Categories
                </h2>
                <div className="flex flex-col gap-3">
                  {DOCUMENT_CATEGORIES.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 rounded-xl border border-navy/10 bg-muted/20 p-4 transition-colors hover:border-accent/30 hover:bg-white"
                    >
                      <Sparkles className="size-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-navy">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. IMPORTANT CONSIDERATIONS (LIGHT ADVISORY) ───────────── */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-navy/10 bg-muted/20 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <AlertCircle className="size-5 text-accent shrink-0" />
              <h3 className="text-lg font-bold text-navy">Important Information</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  Passport approval, appointment availability, and final issuances are determined solely by the respective passport authority.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  Documentation requirements may vary based on applicant category, previous passport records, and jurisdictional rules.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  TRAVECO Mobility assists with document review, form filling, and preparation to ensure smooth and accurate submissions.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. SHARED PRE-FOOTER CTA (MATCHING HOMEPAGE) ─────────── */}
      <PreFooterCTA />
    </div>
  );
}
