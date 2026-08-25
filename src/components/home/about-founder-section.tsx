"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export function AboutFounderSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-28 z-0">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          {/* Header & Company Intro (Order 1 on mobile, Right col top on desktop) */}
          <div className="order-1 lg:order-0 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end lg:pb-6 relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-gold-cta text-xs font-bold uppercase tracking-widest"
            >
              About Traveco
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl"
            >
              Built around clarity, guidance and better travel preparation.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-primary/80"
            >
              <p>
                TRAVECO Mobility is a professional visa and travel services company based in Mumbai, providing comprehensive visa documentation and international travel support.
              </p>
            </motion.div>
          </div>

          {/* Founder Image (Order 2 on mobile, Left col spanning both rows on desktop) */}
          <motion.div
            variants={fadeUp}
            className="order-2 relative z-0 h-112.5 w-full overflow-hidden rounded-2xl lg:order-0 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-[40rem]"
          >
            <Image
              src="/images/founder.png"
              alt="Sandeep Kamlesh Jaiswar - Founder of TRAVECO Mobility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Founder Block & CTA (Order 3 on mobile, Right col bottom on desktop) */}
          <div className="order-3 lg:order-0 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start lg:pt-0">
            <motion.div variants={fadeUp} className="border-t border-border/70 pt-8 mt-0">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-gold-cta">
                Leadership
              </p>
              <h3 className="mb-2 text-2xl font-bold text-primary lg:text-3xl">
                Sandeep Kamlesh Jaiswar
              </h3>
              <p className="mb-5 text-sm font-semibold text-primary/60">
                Founder | Visa & Travel Consultant
              </p>
              <p className="text-base leading-relaxed text-primary/80">
                With professional experience in visa operations and international travel documentation, Sandeep focuses on helping travellers navigate complex visa requirements with greater clarity and confidence.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-cta"
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
