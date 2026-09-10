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
    mobileLabel: "Years",
    icon: Award,
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "countries",
    value: 100,
    suffix: "+",
    formatThousands: false,
    label: "Countries Covered",
    mobileLabel: "Countries",
    icon: Globe2,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: "applications",
    value: 10000,
    suffix: "+",
    formatThousands: true,
    label: "Applications Assisted",
    mobileLabel: "Applications",
    icon: FileCheck2,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
];

export function HeroStatsSection() {
  return (
    <section className="relative z-20 w-full bg-white py-4 sm:py-6 md:py-8">
      <div className="mx-auto max-w-340 px-3 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-center rounded-2xl md:rounded-[1.5rem] border border-navy/10 bg-muted/20 px-2 py-3 sm:p-4 md:p-6 text-center md:text-left transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-md"
              >
                {/* Desktop: Number + Icon row; Mobile: Centered number */}
                <div className="flex items-center justify-center md:justify-between gap-4 md:mb-3">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[800] tracking-tight text-navy leading-none mb-1 md:mb-0">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      formatThousands={stat.formatThousands}
                      duration={2}
                    />
                  </div>
                  <div
                    className={`hidden md:flex size-11 shrink-0 items-center justify-center rounded-2xl border ${stat.badgeColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="size-5.5" />
                  </div>
                </div>
                {/* Responsive Label */}
                <h3 className="text-xs sm:text-sm md:text-base font-semibold md:font-bold text-navy transition-colors group-hover:text-accent leading-tight">
                  <span className="md:hidden">{stat.mobileLabel}</span>
                  <span className="hidden md:inline">{stat.label}</span>
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
