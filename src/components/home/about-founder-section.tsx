"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export function AboutFounderSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] py-25 lg:py-30 z-0">
      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          {/* Header & Company Intro (Order 1 on mobile, Right col top on desktop) */}
          <div className="order-1 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end lg:pb-6 relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-gold-cta text-xs font-[700] uppercase tracking-[0.12em]"
            >
              About Traveco
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[38px] font-[700] leading-[1.1] tracking-tight text-primary sm:text-[44px] lg:text-[48px] lg:leading-[1.05]"
            >
              Built around clarity, guidance and better travel preparation.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-4 text-[15.5px] leading-[1.65] text-primary/80 lg:text-[16px]"
            >
              <p>
                TRAVECO Mobility is a professional visa and travel services company based in Mumbai, India, providing visa documentation, application assistance and international travel support.
              </p>
              <p>
                Our focus is to simplify the visa process through structured documentation, personalized guidance and clear communication.
              </p>
            </motion.div>
          </div>

          {/* Founder Image (Order 2 on mobile, Left col spanning both rows on desktop) */}
          <motion.div
            variants={fadeUp}
            className="order-2 relative z-0 h-[450px] w-full overflow-hidden rounded-[24px] lg:order-none lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-[650px]"
          >
            <Image
              src="/images/founder.png"
              alt="Sandeep Kamlesh Jaiswar - Founder of TRAVECO Mobility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Subtle Wall-Mounted Signage (CSS overlaid to look physical) */}
            <div
              className="absolute left-6 top-8 sm:left-10 sm:top-12 lg:left-12 lg:top-16 opacity-[0.55] mix-blend-multiply pointer-events-none"
              style={{ transform: 'perspective(500px) rotateY(5deg) rotateZ(-1deg)' }}
            >
              <Image
                src="/images/logo.png"
                alt="TRAVECO Signage"
                width={140}
                height={50}
                className="object-contain grayscale contrast-125"
                style={{ height: 'auto', width: 'auto' }}
              />
            </div>

            {/* Subtle Brand Decoration - Gold Flight Curve over Image */}
            <div className="absolute -bottom-6 -left-6 pointer-events-none opacity-40">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-cta">
                <path d="M120 100C120 55.8172 84.1828 20 40 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 8" />
              </svg>
            </div>
          </motion.div>

          {/* Founder Block & CTA (Order 3 on mobile, Right col bottom on desktop) */}
          <div className="order-3 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start lg:pt-0">
            <motion.div variants={fadeUp} className="border-t border-border/70 pt-6 mt-0">
              <p className="mb-3 text-[11px] font-[800] uppercase tracking-[0.15em] text-gold-cta">
                Leadership
              </p>
              <h3 className="mb-1 text-[24px] font-[700] text-primary lg:text-[28px]">
                Sandeep Kamlesh Jaiswar
              </h3>
              <p className="mb-5 text-[15px] font-[600] text-primary/60">
                Founder | Visa & Travel Consultant
              </p>
              <p className="text-[15px] leading-[1.65] text-primary/80 lg:text-[15.5px]">
                With professional experience in visa operations and international travel documentation, Sandeep focuses on helping travellers navigate complex visa requirements with greater clarity and confidence.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[15px] font-[600] text-primary transition-colors hover:text-gold-cta"
              >
                Learn More About TRAVECO
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
