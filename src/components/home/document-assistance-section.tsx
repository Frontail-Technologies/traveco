"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const checklistItems = [
  "Application Forms",
  "Cover Letters",
  "Invitations",
  "Travel Itineraries",
  "Hotel & Flight Docs",
  "Financial Docs",
  "Employment Docs",
  "Travel Insurance",
  "Supporting Documents",
];

export function DocumentAssistanceSection() {
  return (
    <section className="bg-muted/40 border-y border-navy/5 relative overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
            >
              Document Assistance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Prepare the right documents with confidence.
            </motion.h2>
          </div>

          {/* 2-Column Split: Image & Checklist Panel */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left — Large Image */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] bg-navy/5 shadow-sm sm:aspect-16/10 lg:col-span-6 lg:aspect-4/3"
            >
              <Image
                src="/images/generated/travel_documents_desk.jpg"
                alt="Travel documents, passport, and itinerary on a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Right — Compact Checklist Panel */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-2"
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

              <div className="mt-8 border-t border-navy/10 pt-6">
                <Link
                  href="/document-checklist"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-navy"
                >
                  View Document Checklist
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <p className="mt-3 text-xs font-medium text-muted-foreground">
                  Requirements vary by destination, visa category and applicant circumstances.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
