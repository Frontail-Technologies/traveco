"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Understand your travel purpose and visa requirement.",
    image: "/images/process/consultation.jpg",
    alt: "Professional visa consultant discussing requirements with a client",
  },
  {
    id: "02",
    title: "Document Review",
    description: "Review your passport and relevant supporting documents.",
    image: "/images/process/document-review.jpg",
    alt: "Passport, travel documents, and a checklist being reviewed",
  },
  {
    id: "03",
    title: "Application Preparation",
    description: "Prepare the application and supporting documentation carefully.",
    image: "/images/process/application-prep.jpg",
    alt: "Professional preparing an online visa application on a sleek laptop",
  },
  {
    id: "04",
    title: "Submission Support",
    description: "Receive guidance for submission, appointments and biometrics where applicable.",
    image: "/images/process/submission.jpg",
    alt: "Person preparing passport and official appointment documentation",
  },
  {
    id: "05",
    title: "Application Update",
    description: "Stay informed about the application process and relevant next steps.",
    image: "/images/process/update.jpg",
    alt: "Traveller checking travel updates on a smartphone in an airport",
  },
];

export function ProcessSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest"
            >
              HOW IT WORKS
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Simple process, clear guidance.
            </motion.h2>
          </div>

          {/* Process Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
            {steps.map((step) => {
              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-navy/15 bg-white shadow-2xs transition-all duration-300 hover:shadow-md hover:border-accent/30"
                >
                  {/* Image Container */}
                  <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-navy/5 sm:aspect-16/9">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Step Number */}
                    <div className="absolute left-5 top-5 sm:left-6 sm:top-6 flex size-9 sm:size-10 items-center justify-center rounded-full bg-white shadow-md">
                      <span className="text-xs sm:text-sm font-bold text-navy">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-7 lg:p-8">
                    <div>
                      <h3 className="mb-2 text-lg sm:text-xl font-bold leading-tight text-navy md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {step.id === "02" && (
                      <div className="mt-4 pt-3 border-t border-navy/5">
                        <Link
                          href="/document-checklist"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-navy transition-colors group/link"
                        >
                          <span>View Document Checklist</span>
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* 6th Card: CTA with Accent Background & Subtle Image */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-accent p-6 sm:p-8 text-center text-white shadow-md transition-all duration-300 hover:shadow-xl lg:p-10"
            >
              {/* Very Light Travel Background Image */}
              <Image
                src="/images/hero/hero_airport_terminal.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center opacity-15 mix-blend-overlay pointer-events-none"
              />

              <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
                <h3 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-white tracking-tight">
                  Ready to start your journey?
                </h3>
                <p className="mb-6 text-xs sm:text-sm leading-relaxed text-white/90 max-w-xs">
                  Connect with our experts today and ensure your visa application is perfectly prepared.
                </p>
                <button
                  type="button"
                  onClick={() => openApplyModal()}
                  className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-white px-7 text-xs sm:text-sm font-bold text-navy shadow-sm transition-all hover:scale-105 hover:bg-white/95 cursor-pointer"
                >
                  Get Visa Assistance
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
