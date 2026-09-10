"use client";

import { motion } from "framer-motion";
import { Award, Globe2, FileCheck2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const STATS = [
  {
    id: "years",
    value: 8,
    suffix: "+",
    formatThousands: false,
    label: "Years of Experience",
    description: "Expert guidance in visa documentation & passport consulting.",
    icon: Award,
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "countries",
    value: 100,
    suffix: "+",
    formatThousands: false,
    label: "Countries Covered",
    description: "Global tourist, business, student & transit visa assistance.",
    icon: Globe2,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: "applications",
    value: 10000,
    suffix: "+",
    formatThousands: true,
    label: "Applications Assisted",
    description: "Meticulous document verification and pre-submission checks.",
    icon: FileCheck2,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
];

export function HeroStatsSection() {
  return (
    <section className="relative z-20 w-full bg-white py-10 sm:py-12 border-b border-navy/10 shadow-xs">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between rounded-[1.75rem] border border-navy/10 bg-muted/20 p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-[800] tracking-tight text-navy">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        formatThousands={stat.formatThousands}
                        duration={2}
                      />
                    </div>
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${stat.badgeColor} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-5.5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5 transition-colors group-hover:text-accent">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
