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
    <section className="bg-background relative overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
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
              className="text-accent text-xs font-bold uppercase tracking-widest"
            >
              Document Assistance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl"
              data-scroll="fade-up"
            >
              Prepare the right documents with confidence.
            </motion.h2>
          </div>

          {/* Image - Order 2 on mobile, Right col spanning 2 rows on desktop */}
          <motion.div
            variants={fadeUp}
            className="order-2 relative z-0 h-100 w-full overflow-hidden rounded-2xl lg:order-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:h-[40rem]"
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
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <h3 className="mb-6 text-xs font-extrabold uppercase tracking-widest text-primary/85">
                Visa Document Checklist
              </h3>
              
              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                {checklistItems.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-row items-center gap-3 border-b border-border/80 py-4 transition-colors hover:border-accent/40"
                  >
                    <Check className="size-3.5 shrink-0 text-accent transition-transform group-hover:scale-110" strokeWidth={3} />
                    <span className="text-sm font-semibold text-primary transition-colors group-hover:text-accent md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/document-checklist"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  View Document Checklist
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <p className="mt-4 text-xs leading-relaxed text-primary/60">
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
