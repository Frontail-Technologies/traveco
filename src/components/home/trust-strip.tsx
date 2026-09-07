"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Award, Globe, FileCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const TRUST_POINTS = [
  "Professional Documentation Support",
  "100+ Country Visa Experience",
  "Personalized Case Assessment",
  "Transparent Process",
  "Application Tracking",
  "No Visa Approval Guarantee – Decision by Embassy/Immigration Authority",
];

const KEY_STATS = [
  { value: "7+", label: "Years Experience", icon: Award },
  { value: "100+", label: "Countries Covered", icon: Globe },
  { value: "10,000+", label: "Applications Assisted", icon: FileCheck },
];

export function TrustStrip() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-navy/10 relative overflow-hidden">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          {/* Top: 3 Credibility Stat Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {KEY_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-4.5 rounded-[1.5rem] border border-navy/10 bg-navy/[0.025] p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <span className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight block leading-none mb-1">
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

          {/* Bottom: "Why should I trust TRAVECO?" with 6 Trust Points */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-navy/10 bg-muted/20 p-6 sm:p-8 lg:p-10 shadow-2xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-navy/10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  <ShieldCheck className="size-3.5" />
                  <span>Verified Visa & Passport Advisory</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                  Why should I trust TRAVECO?
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground max-w-md lg:text-right leading-relaxed">
                Clear processes, transparent expectations, and dedicated documentation support for every applicant.
              </p>
            </div>

            {/* 6 Trust Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {TRUST_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-3.5 sm:p-4 shadow-2xs"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-navy leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclaimer / Transparency Note */}
            <p className="mt-6 pt-4 border-t border-navy/10 text-center text-[11px] sm:text-xs font-medium text-muted-foreground">
              TRAVECO is an independent visa & passport consultancy. We do not issue visas/passports or represent government authorities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
