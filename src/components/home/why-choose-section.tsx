"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const trustPoints = [
  {
    id: "01",
    title: "Expert Guidance",
    description: "Professional assistance based on applicable visa documentation requirements.",
  },
  {
    id: "02",
    title: "Personalized Support",
    description: "Every application is reviewed according to the traveller's individual circumstances.",
  },
  {
    id: "03",
    title: "Documentation Accuracy",
    description: "Structured document preparation designed to reduce avoidable errors.",
  },
  {
    id: "04",
    title: "Transparent Process",
    description: "Clear communication regarding requirements, timelines and procedures.",
  },
  {
    id: "05",
    title: "Global Reach",
    description: "Support for international travel and visa requirements across multiple destinations.",
  },
  {
    id: "06",
    title: "Client-Focused Service",
    description: "Dedicated assistance from initial consultation through application preparation.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28 z-0">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-8 lg:gap-10"
        >
          {/* Top Row: Image & Header */}
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 z-10">
            
            {/* Header */}
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:py-4 relative z-10">
              <p
                className="text-gold-cta text-xs font-bold uppercase tracking-widest"
                data-scroll="fade-up"
              >
                Why Traveco
              </p>
              <h2
                className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl"
                data-scroll="fade-up"
              >
                Guidance you can rely on, from start to finish.
              </h2>
            </div>

            {/* Main Consultation Image */}
            <motion.div
              variants={fadeUp}
              className="order-2 relative z-0 h-100 w-full overflow-hidden rounded-2xl lg:order-1 lg:col-span-7 lg:col-start-1 lg:h-[34rem]"
            >
              <Image
                src="/images/generated/consultation.jpg"
                alt="Professional visa and travel consultant discussing documentation with a client in a bright modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[center_30%]"
              />
            </motion.div>

          </div>

          {/* Bottom Row: 6 Trust Points Editorial Grid */}
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {trustPoints.map((point) => (
              <motion.div
                key={point.id}
                variants={fadeUp}
                className="group flex flex-col border-t border-border/70 pt-6 transition-colors duration-500 hover:border-gold-cta/60"
              >
                <div className="mb-4">
                  <span className="text-sm font-extrabold tracking-widest text-gold-cta transition-colors duration-500 group-hover:text-gold-cta/80">
                    {point.id}
                  </span>
                </div>
                
                <h3 className="mb-3 text-lg font-bold leading-tight text-primary transition-colors duration-500 group-hover:text-accent lg:text-xl">
                  {point.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-primary/80 md:text-base lg:pr-2">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
