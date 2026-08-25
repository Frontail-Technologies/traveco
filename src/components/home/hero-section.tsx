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
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 text-center md:px-6 lg:px-8 md:py-28 lg:py-32"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-traveco-navy shadow-sm"
        >
          Global Visa & Travel Support
        </motion.div>

        <motion.h1 
          variants={fadeUp}
          className="mx-auto max-w-4xl text-5xl font-[750] leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Travel Beyond Borders.<br className="hidden sm:block" /> We Make <span className="text-gold-cta">Visas Simpler.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
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
