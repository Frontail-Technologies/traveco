"use client";

import { motion } from "framer-motion";
import { Check, Award, Globe, FileCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const STATS = [
  { value: "7+", label: "Years Experience", icon: Award },
  { value: "100+", label: "Countries", icon: Globe },
  { value: "10,000+", label: "Applications", icon: FileCheck },
];

const TRUST_POINTS = [
  "Professional Documentation Support",
  "Transparent Process",
  "No Visa Approval Guarantee",
];

export function TrustStrip() {
  return (
    <section className="bg-white py-6 md:py-8 border-b border-navy/10 relative overflow-hidden">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="rounded-2xl border border-navy/10 bg-navy/[0.025] p-4 sm:p-5 lg:px-7 lg:py-4.5"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            
            {/* 3 Inline Compact Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-navy/10"
            >
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 sm:gap-3 ${idx !== 0 ? "pl-2.5 sm:pl-6" : ""}`}
                  >
                    <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="size-4 sm:size-4.5" />
                    </div>
                    <div>
                      <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-navy tracking-tight leading-none block">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground block mt-0.5 whitespace-nowrap">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Subtle Vertical Divider on desktop */}
            <div className="hidden lg:block w-px h-8 bg-navy/10 shrink-0" />

            {/* 3 Small Trust Chips */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-3 lg:pt-0 border-t border-navy/10 lg:border-t-0"
            >
              {TRUST_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-navy/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-navy shadow-2xs"
                >
                  <Check className="size-3 text-accent shrink-0" strokeWidth={3} />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
