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
    <section className="relative overflow-hidden bg-[#FDFCFB] py-16 lg:py-30 z-0">
      
      {/* Faint Global Watermark (Desktop only) */}
      <div className="absolute -bottom-[20%] -right-[10%] hidden h-[800px] w-[800px] pointer-events-none lg:block opacity-[0.025] -z-10">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-primary">
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="400" cy="400" rx="160" ry="380" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="400" cy="400" rx="380" ry="160" stroke="currentColor" strokeWidth="2" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-10"
        >
          {/* Top Row: Image & Header */}
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16 z-10">
            
            {/* Subtle Flight Route Decoration (Desktop only) */}
            <div className="absolute left-[-10%] top-[20%] hidden h-[600px] w-[120%] pointer-events-none lg:block opacity-[0.06] -z-10">
              <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gold-cta">
                <path d="M-100,500 Q400,50 1100,400" stroke="currentColor" strokeWidth="2" strokeDasharray="8 12" strokeLinecap="round" />
                <circle cx="450" cy="250" r="4.5" fill="currentColor" />
                <circle cx="830" cy="350" r="4.5" fill="currentColor" />
              </svg>
            </div>
            
            {/* Header */}
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:py-6 relative z-10">
              
              {/* Small Gold Arc Decoration */}
              <div className="absolute -right-2 -top-6 pointer-events-none opacity-50 sm:-right-6 sm:-top-8 lg:-right-10 lg:-top-10">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-cta">
                  <path d="M10 70C10 36.8629 36.8629 10 70 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <motion.p
                variants={fadeUp}
                className="text-gold-cta text-xs font-[700] uppercase tracking-[0.12em]"
              >
                Why Traveco
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[38px] font-[700] leading-[1.1] tracking-tight text-primary sm:text-[44px] lg:text-[48px] lg:leading-[1.05]"
              >
                Guidance you can rely on, from start to finish.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] leading-[1.65] text-primary/75 sm:text-[16px]"
              >
                Clear communication, careful documentation and personalized assistance throughout your visa preparation journey.
              </motion.p>
            </div>

            {/* Main Consultation Image */}
            <motion.div
              variants={fadeUp}
              className="order-2 relative z-0 h-[400px] w-full overflow-hidden rounded-surface lg:order-1 lg:col-span-7 lg:col-start-1 lg:h-[540px]"
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
                  <span className="text-[13.5px] font-[800] tracking-wider text-gold-cta transition-colors duration-500 group-hover:text-gold-cta/80">
                    {point.id}
                  </span>
                </div>
                
                <h3 className="mb-2.5 text-[18px] font-[700] leading-tight text-primary transition-colors duration-500 group-hover:text-accent lg:text-[20px]">
                  {point.title}
                </h3>
                
                <p className="text-[14.5px] leading-[1.6] text-primary/80 lg:text-[15px] lg:pr-2">
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
