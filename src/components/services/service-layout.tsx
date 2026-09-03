import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export interface ServiceLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  bestFor: string[];
  howWeAssist: string[];
  documentCategories: string[];
  considerations?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
}

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    image: "/images/process/consultation.jpg",
  },
  {
    id: "02",
    title: "Document Review",
    image: "/images/process/document-review.jpg",
  },
  {
    id: "03",
    title: "Application Preparation",
    image: "/images/process/application-prep.jpg",
  },
  {
    id: "04",
    title: "Submission Support",
    image: "/images/process/submission.jpg",
  },
  {
    id: "05",
    title: "Updates",
    image: "/images/process/update.jpg",
  },
];

const defaultConsiderations = [
  "Visa decisions are made solely by the respective embassy, consulate or immigration authority.",
  "Requirements and processing times may vary by destination, visa category and applicant profile.",
  "Apply early to allow sufficient time for document preparation and consular appointment scheduling.",
];

export function ServiceLayout({
  eyebrow,
  title,
  description,
  heroImage,
  bestFor,
  howWeAssist,
  documentCategories,
  considerations = defaultConsiderations,
  ctaTitle,
  ctaDescription,
}: ServiceLayoutProps) {
  return (
    <div className="bg-white pt-22">
      {/* 1. SERVICE HERO */}
      <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <p className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-3">
                {eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button asChild variant="secondary" size="lg" className="h-12 px-8 text-sm font-bold shadow-sm">
                  <Link href="/#contact" className="inline-flex items-center justify-center gap-2">
                    <span>Get Visa Assistance</span>
                    <ArrowRight className="size-4" />
                  </Link>
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

            {/* Right Image */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs bg-navy/5">
                <Image
                  src={heroImage}
                  alt={title}
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

      {/* 2 & 3. "BEST FOR" & "HOW TRAVECO CAN ASSIST" GRID */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Best For Card */}
            <div className="flex flex-col justify-between rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div>
                <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-accent mb-2">
                  SUITABLE FOR
                </p>
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">
                  Best for
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bestFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-navy/10 bg-muted/30 p-4 transition-colors hover:border-accent/30 hover:bg-white"
                    >
                      <Sparkles className="size-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-navy">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How TRAVECO Can Assist Card */}
            <div className="flex flex-col justify-between rounded-[2rem] border border-navy/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div>
                <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-accent mb-2">
                  OUR EXPERTISE
                </p>
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">
                  How TRAVECO can assist
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {howWeAssist.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-4 transition-colors hover:border-accent/40"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON DOCUMENT CATEGORIES */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-accent mb-2">
              DOCUMENTATION
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              Common Document Categories
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Key documentation typically required before application submission:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {documentCategories.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-xl border border-navy/10 bg-white p-4 shadow-xs transition-colors hover:border-accent/30"
              >
                <div className="size-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-navy/10 pt-6">
            <p className="text-xs font-medium text-muted-foreground">
              * Exact requirements vary by destination, visa category and applicant circumstances.
            </p>
            <Link
              href="/document-checklist"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-navy transition-colors shrink-0"
            >
              <span>Check requirements by destination</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Visual 5 Cards) */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-accent mb-2">
              OUR PROCESS
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              Simple application support.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-navy/5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/95 shadow-xs">
                    <span className="text-xs font-bold text-navy">{step.id}</span>
                  </div>
                </div>
                <div className="flex flex-1 items-center p-4">
                  <h3 className="text-sm font-bold text-navy transition-colors duration-300 group-hover:text-accent">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMPORTANT CONSIDERATIONS (Compact Light Note) */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-navy/10 bg-muted/20 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <AlertCircle className="size-5 text-accent shrink-0" />
              <h3 className="text-lg font-bold text-navy">Important Considerations</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {considerations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. SHARED CTA */}
      <PreFooterCTA
        eyebrow="READY TO APPLY?"
        title={ctaTitle || "Begin your visa application today."}
        description={
          ctaDescription ||
          "Get assistance with documentation and application preparation."
        }
      />
    </div>
  );
}
