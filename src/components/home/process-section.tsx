"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Understand your travel purpose and visa requirement.",
  },
  {
    id: "02",
    title: "Document Review",
    description: "Review your passport and supporting documents.",
  },
  {
    id: "03",
    title: "Application Preparation",
    description: "Prepare the application and supporting documentation.",
  },
  {
    id: "04",
    title: "Submission Support",
    description: "Guide you through the applicable submission and biometrics process.",
  },
  {
    id: "05",
    title: "Application Update",
    description: "Keep you informed about the application process and next steps.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#071A33] py-25 lg:py-30">
      {/* Subtle Background Detail */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {/* Section Header */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.p
              variants={fadeUp}
              className="text-gold-on-dark text-xs font-[700] uppercase tracking-[0.12em]"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[38px] font-[700] leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[50px] lg:leading-[1.05]"
            >
              Your visa journey, simplified.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15px] leading-[1.65] text-[rgba(255,255,255,0.78)] sm:text-[16px]"
            >
              From understanding your travel requirements to application updates, TRAVECO guides you through every important step of the visa preparation process.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="group relative flex flex-row items-start lg:flex-col lg:items-start"
                >
                  {/* Mobile/Tablet Vertical Line */}
                  {!isLast && (
                    <div className="absolute left-[19px] top-[48px] h-[calc(100%+16px)] w-[1px] bg-white/10 lg:hidden" />
                  )}

                  {/* Node & Number */}
                  <div className="relative z-10 mr-6 shrink-0 lg:mr-0 lg:w-full">
                    <span className="text-[34px] font-[700] text-gold-on-dark lg:text-[38px]">
                      {step.id}
                    </span>
                    
                    {/* Desktop Node & Line */}
                    <div className="relative mt-3 hidden h-[20px] w-full items-center lg:flex">
                      <div className="size-1.5 shrink-0 rounded-full bg-gold-on-dark/50" />
                      {!isLast && <div className="h-[1px] w-full bg-white/10" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 lg:pr-6 lg:pt-5">
                    <h3 className="mb-2 text-[19px] font-[700] leading-tight text-white lg:text-[20px]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-[rgba(255,255,255,0.76)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
