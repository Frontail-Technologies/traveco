"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  return (
    <section className="relative overflow-hidden bg-[#F9F9F8] py-20 md:py-24 lg:py-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-gold-cta text-xs font-bold uppercase tracking-widest"
              >
                How It Works
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-traveco-navy md:text-5xl"
              >
                Your visa journey, <br className="hidden sm:block" /> simplified.
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-xs text-sm leading-relaxed text-traveco-navy/70 md:text-right"
            >
              A clear, milestone-based path from first contact to your final visa decision.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-traveco-navy/5 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-traveco-navy/5">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Step Number */}
                    <div className="absolute left-6 top-6 flex size-10 items-center justify-center rounded-full bg-white shadow-md">
                      <span className="text-sm font-bold text-traveco-navy">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                    <h3 className="mb-3 text-xl font-bold leading-tight text-traveco-navy md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-traveco-navy/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* 6th Card: CTA */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-traveco-navy p-8 text-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-lg lg:p-10"
            >
              <div className="flex flex-1 flex-col items-center justify-center">
                <h3 className="mb-4 text-3xl font-bold leading-[1.1] text-white">
                  Ready to start your journey?
                </h3>
                <p className="mb-8 text-base leading-relaxed text-white/80">
                  Connect with our experts today and ensure your visa application is perfectly prepared.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gold-cta px-8 text-sm font-bold uppercase tracking-wide text-traveco-navy transition-all hover:scale-105 hover:bg-white"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
