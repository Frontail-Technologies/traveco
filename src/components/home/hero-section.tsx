"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";

const backgroundImages = [
  "/images/hero/hero_city_skyline.jpg",
  "/images/hero/hero_airport_terminal.jpg",
  "/images/hero/hero_travel_documents.jpg"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-88px)] mt-22 items-center overflow-hidden text-white bg-traveco-navy"
    >
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 20, 40, 0.60), rgba(5, 20, 40, 0.60)), url("${backgroundImages[currentImageIndex]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-scroll
          data-scroll-speed="0.05"
        />
      </AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-190 px-5 py-16 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-gold-on-dark mx-auto mb-4 text-xs font-bold tracking-[0.12em] uppercase sm:text-sm"
        >
          Global Visa & Travel Support
        </motion.p>

        <motion.h1 
          variants={fadeUp}
          className="mx-auto text-[clamp(36px,6vw,62px)] font-[750] leading-[1.05] tracking-[-0.035em] text-white"
        >
          Travel Beyond Borders.<br className="hidden sm:block" /> We Make <span className="text-gold-cta">Visas Simpler.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-140 text-[16px] leading-[1.7] text-[rgba(255,255,255,0.88)] sm:text-[18px]"
        >
          Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild variant="secondary" className="h-12 w-full sm:w-auto rounded-control px-8 text-[15px]">
            <Link href="/contact">
              Get Visa Assistance
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full sm:w-auto rounded-control border-white/40 bg-white/5 px-8 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <Link href="/document-checklist">
              Explore Destinations
            </Link>
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
