"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export function AboutFounderSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-y border-(--traveco-navy)/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-stretch"
        >
          <motion.div variants={fadeUp} className="lg:w-[45%] xl:w-[40%] shrink-0 relative">
            <div className="lg:sticky lg:top-30">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-[16px] bg-[#F7F5EF]">
                <Image
                  src="/images/about/founder_cleaned.jpg"
                  alt="Sandeep Kamlesh Jaiswar - Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_top]"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-[55%] xl:w-[60%]">
            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="text-[28px] md:text-[36px] font-bold text-(--traveco-navy,#0B1F3A) mb-2 tracking-tight">
                Sandeep Kamlesh Jaiswar
              </h3>
              <p className="text-[15px] font-bold text-accent uppercase tracking-widest">
                Founder & Global Visa Consultant
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-(--traveco-navy,#0B1F3A)/80 text-[16px] md:text-[18px] leading-[1.7] flex flex-col gap-6 mb-12">
              <p>
                With 7+ years of hands-on visa operations experience, Sandeep has worked across visa processing for 100+ countries, covering tourist, business, student, work and transit applications. His experience spans UAE & GCC, Schengen, UK, USA, Canada, Australia, Asia-Pacific and African destinations.
              </p>
              <p>
                Before building TRAVECO Mobility, he worked with Musafir.com and Explorer Travels, handling documentation review, online application filing, appointment coordination, visa-centre processes and client communication.
              </p>
              <p>
                Today, his focus through TRAVECO is to combine practical visa-operations experience with clear, personalized guidance for travellers and travel partners.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 py-8 border-y border-(--traveco-navy)/10 mb-10">
              <div className="flex flex-col border-l border-traveco-gold/40 pl-4">
                <span className="text-[32px] font-bold text-(--traveco-navy,#0B1F3A) leading-none mb-1">7+ YEARS</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Experience</span>
                <span className="text-[13px] text-(--traveco-navy)/60 font-medium">Visa Operations</span>
              </div>
              <div className="flex flex-col border-l border-accent/40 pl-4">
                <span className="text-[32px] font-bold text-(--traveco-navy,#0B1F3A) leading-none mb-1">100+</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Countries</span>
                <span className="text-[13px] text-(--traveco-navy)/60 font-medium">Global Exposure</span>
              </div>
              <div className="flex flex-col border-l border-accent/40 pl-4 sm:col-span-2 md:col-span-1">
                <span className="text-[32px] font-bold text-(--traveco-navy,#0B1F3A) leading-none mb-1">2,000+</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Applications</span>
                <span className="text-[13px] text-(--traveco-navy)/60 font-medium">UAE Operations (2023-24)</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[15px] font-bold text-accent transition-colors hover:text-accent-hover"
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
