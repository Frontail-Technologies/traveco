"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-88px)] mt-[88px] items-center overflow-hidden text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(5, 20, 40, 0.60), rgba(5, 20, 40, 0.60)), url("/images/hero/airport-terminal-dusk.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[760px] px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-gold-on-dark mx-auto mb-4 text-xs font-[700] tracking-[0.12em] uppercase sm:text-sm"
        >
          Global Visa & Travel Support
        </motion.p>

        <motion.h1 
          variants={fadeUp}
          className="mx-auto text-[38px] font-[750] leading-[1.05] tracking-[-0.035em] text-white sm:text-[44px] lg:text-[62px] lg:leading-[1.05]"
        >
          Travel Beyond Borders.<br className="hidden sm:block" /> We Make Visas Simpler.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[rgba(255,255,255,0.88)] sm:text-[18px]"
        >
          Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild className="h-12 rounded-md bg-gold-cta px-8 text-[15px] font-[600] text-[#071A33] transition-colors hover:brightness-95">
            <Link href="/#contact">
              Get Visa Assistance
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-md border-white/40 bg-white/5 px-8 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 hover:text-white"
          >
            <Link href="/#destinations">
              Explore Destinations
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] font-[500] text-[rgba(255,255,255,0.88)] sm:text-[14px]"
        >
          <span>Tourist Visa</span>
          <span className="text-gold-on-dark/70">•</span>
          <span>Business Visa</span>
          <span className="text-gold-on-dark/70">•</span>
          <span>Student Visa</span>
          <span className="text-gold-on-dark/70">•</span>
          <span>Work Visa</span>
          <span className="text-gold-on-dark/70">•</span>
          <span>Schengen</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
