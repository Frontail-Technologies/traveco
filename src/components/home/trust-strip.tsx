"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Award, Globe, FileCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const TRUST_POINTS = [
  "Professional Documentation Support",
  "Personalized Case Assessment",
  "Transparent Process",
  "Application Tracking",
  "No Visa Approval Guarantee – Decisions by Embassy/Authority",
];

const KEY_STATS = [
  { value: "7+", label: "Years Experience", icon: Award },
  { value: "100+", label: "Countries Covered", icon: Globe },
  { value: "10,000+", label: "Applications Assisted", icon: FileCheck },
];

export function TrustStrip() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-navy/10 relative overflow-hidden">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {/* Top: 3 Credibility Stat Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-6">
            {KEY_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-navy/15 bg-navy/[0.03] p-4.5 sm:p-5 lg:p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white hover:shadow-xs"
                >
                  <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="size-5 sm:size-5.5" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight block leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom: "Why should I trust TRAVECO?" with Trust Points */}
          <motion.div
            variants={fadeUp}
            className="rounded-[1.75rem] border border-navy/15 bg-muted/20 p-5 sm:p-6 md:p-7 shadow-2xs"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-navy/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-accent shrink-0" />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy tracking-tight">
                  Why choose TRAVECO for visa & passport assistance?
                </h3>
              </div>
              <p className="text-xs font-semibold text-muted-foreground">
                Ethical guidance, document review, and case transparency.
              </p>
            </div>

            {/* 5 Trust Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-3">
              {TRUST_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-navy/15 bg-white p-3 shadow-2xs"
                >
                  <div className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-semibold text-navy leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
