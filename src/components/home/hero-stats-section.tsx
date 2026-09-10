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
    icon: Award,
    badgeColor: "bg-accent/10 text-accent border-accent/20",
  },
  {
    id: "countries",
    value: 100,
    suffix: "+",
    formatThousands: false,
    label: "Countries Covered",
    icon: Globe2,
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: "applications",
    value: 10000,
    suffix: "+",
    formatThousands: true,
    label: "Applications Assisted",
    icon: FileCheck2,
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
];

export function HeroStatsSection() {
  return (
    <section className="relative z-20 w-full bg-white pt-8 sm:pt-10 pb-4 sm:pb-6">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-center rounded-[1.5rem] border border-navy/10 bg-muted/20 p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
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
                <h3 className="text-sm sm:text-base font-bold text-navy transition-colors group-hover:text-accent">
                  {stat.label}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
