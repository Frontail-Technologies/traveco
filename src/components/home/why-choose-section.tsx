"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const benefits = [
  {
    id: "01",
    title: "Expert Guidance",
  },
  {
    id: "02",
    title: "Personalized Support",
  },
  {
    id: "03",
    title: "Documentation Accuracy",
  },
  {
    id: "04",
    title: "Transparent Process",
  },
  {
    id: "05",
    title: "Global Reach",
  },
  {
    id: "06",
    title: "Client-Focused Service",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-muted/40 border-y border-navy/5 py-20 md:py-24 lg:py-28 z-0">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
            >
              Why TRAVECO
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Guidance you can rely on.
            </motion.h2>
          </div>

          {/* Large Image + 6 Visual Tiles Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left — Large Consultation Image */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] bg-navy/5 shadow-sm sm:aspect-16/10 lg:col-span-6 lg:aspect-4/3"
            >
              <Image
                src="/images/generated/consultation.jpg"
                alt="Professional visa consultation in a modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_30%]"
              />
            </motion.div>

            {/* Right — 6 Title-Only Benefit Tiles */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  variants={fadeUp}
                  className="group flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-accent shadow-xs border border-navy/5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {benefit.id}
                  </span>
                  <h3 className="text-base font-bold text-navy transition-colors duration-300 group-hover:text-accent">
                    {benefit.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
