"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export function AboutFounderSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 border-y border-navy/5">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          {/* Founder Image */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] bg-navy/5 shadow-sm sm:aspect-1/1 lg:col-span-5 lg:aspect-4/5"
          >
            <Image
              src="/images/about/founder_cleaned.jpg"
              alt="Sandeep Kamlesh Jaiswar - Founder & Global Visa Consultant"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_top]"
            />
          </motion.div>

          {/* Text & Stats */}
          <div className="flex flex-col lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
            >
              About TRAVECO
            </motion.p>
            
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Built around clarity, guidance and better travel preparation.
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-6">
              <h3 className="text-xl font-bold text-navy">
                Sandeep Kamlesh Jaiswar
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mt-0.5">
                Founder & Global Visa Consultant
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-muted-foreground"
            >
              With 7+ years of hands-on visa operations experience across 100+ countries, Sandeep founded TRAVECO Mobility to provide transparent, personalized documentation and application guidance for global travellers.
            </motion.p>

            {/* Rounded Credibility Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                <span className="text-2xl font-bold text-navy sm:text-3xl block leading-none mb-1.5">7+</span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years Exp.</p>
              </div>
              <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                <span className="text-2xl font-bold text-navy sm:text-3xl block leading-none mb-1.5">100+</span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Countries</p>
              </div>
              <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                <span className="text-2xl font-bold text-navy sm:text-3xl block leading-none mb-1.5">2,000+</span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Applications</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-navy"
              >
                Learn More About TRAVECO
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
