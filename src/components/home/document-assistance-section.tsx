"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const checklistItems = [
  "Application Forms",
  "Hotel & Flight Documentation",
  "Cover Letters",
  "Financial Documentation",
  "Invitation Letters",
  "Employment Documentation",
  "Travel Itineraries",
  "Travel Insurance",
  "Supporting Documents",
];

export function DocumentAssistanceSection() {
  return (
    <section className="bg-background relative overflow-hidden py-16 lg:py-30">
      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-y-0 lg:items-center"
        >
          {/* Header - Order 1 on mobile, Left col top on desktop */}
          <div className="order-1 lg:order-0 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8 lg:w-[105%] relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-gold-cta text-xs font-bold uppercase tracking-[0.12em]"
            >
              Document Assistance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[34px] font-bold leading-[1.05] tracking-tight text-primary sm:text-[42px] lg:text-[48px]"
              data-scroll="fade-up"
            >
              The <strong className="text-gold-cta">right documents</strong>, <br className="hidden sm:block" />
              the first time.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15.5px] leading-[1.6] text-primary/80 lg:text-[16px] max-w-xl"
              data-scroll="fade-up"
            >
              Every country has specific requirements. We ensure your application package is perfectly assembled before submission, saving you time and avoiding rejections.
            </motion.p>
          </div>

          {/* Image - Order 2 on mobile, Right col spanning 2 rows on desktop */}
          <motion.div
            variants={fadeUp}
            className="order-2 relative z-0 h-100 w-full overflow-hidden rounded-surface lg:order-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:h-162.5"
          >
            <Image
              src="/images/generated/travel_documents_desk.jpg"
              alt="Travel documents, passport, and boarding pass organized on a premium desk"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center lg:object-[center_60%]"
            />
          </motion.div>

          {/* Checklist Panel - Order 3 on mobile, Left col bottom on desktop overlapping image */}
          <div className="order-3 lg:order-0 lg:relative lg:z-10 lg:-mr-3.75 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:w-[105%]">
            <motion.div 
              variants={fadeUp} 
              className="rounded-surface border border-border/60 bg-white p-6 shadow-sm sm:p-8 lg:p-9"
            >
              <h3 className="mb-6 text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary/85">
                Visa Document Checklist
              </h3>
              
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-row items-center gap-3 border-b border-border/80 py-4 transition-colors hover:border-accent/40"
                  >
                    <Check className="size-3.5 shrink-0 text-gold-cta transition-transform group-hover:scale-110" strokeWidth={3} />
                    <span className="text-[14.5px] font-semibold text-primary transition-colors group-hover:text-gold-cta lg:text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/document-checklist"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-gold-cta"
                >
                  View Document Checklist
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <p className="mt-5 text-[13px] leading-relaxed text-[#0B1F3A]/65">
                  Document requirements vary by destination, visa category and applicant circumstances.
                </p>
              </div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
