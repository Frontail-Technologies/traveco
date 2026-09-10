"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export function AboutFounderSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 border-y border-navy/5">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          {/* Founder Image */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] border border-navy/15 bg-navy/5 shadow-2xs sm:aspect-1/1 lg:col-span-5 lg:aspect-4/5"
          >
            <Image
              src="/images/about/founder_cleaned.jpg"
              alt="Sandeep Kamlesh Jaiswar - Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_top]"
            />
          </motion.div>

          {/* Text & Stats */}
          <div className="flex flex-col lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest"
            >
              ABOUT TRAVECO
            </motion.p>
            
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Built around clarity, guidance and better travel preparation.
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-5 sm:mt-6">
              <h3 className="text-xl font-bold text-navy">
                Sandeep Kamlesh Jaiswar
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mt-0.5">
                Founder
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-3.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground"
            >
              With 8+ years of hands-on visa operations experience across 100+ countries, Sandeep founded TRAVECO Mobility to provide transparent, personalized documentation and application guidance for global travellers.
            </motion.p>

            {/* Rounded Credibility Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="rounded-[1.25rem] bg-muted/40 p-3.5 sm:p-5 border border-navy/10 shadow-2xs">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy block leading-none mb-1">8+</span>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years Exp.</p>
              </div>
              <div className="rounded-[1.25rem] bg-muted/40 p-3.5 sm:p-5 border border-navy/10 shadow-2xs">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy block leading-none mb-1">100+</span>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">Countries</p>
              </div>
              <div className="rounded-[1.25rem] bg-muted/40 p-3.5 sm:p-5 border border-navy/10 shadow-2xs">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy block leading-none mb-1">10,000+</span>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">Applications</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent transition-colors hover:text-navy"
              >
                <span>Learn More About TRAVECO</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
