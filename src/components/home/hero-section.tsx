"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      className="relative isolate flex min-h-[calc(100svh-88px)] mt-22 items-center overflow-hidden text-white bg-navy"
    >
      {/* ── Background Slideshow ────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="TRAVECO Visa Guidance"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Responsive Gradient Overlay ────────────────────────── */}
        <div className="absolute inset-0 z-1 bg-navy/50 md:bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10" />
      </div>

      {/* ── Content Container ───────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-340 px-5 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center rounded-full bg-white px-4.5 py-1.5 text-sm font-bold uppercase tracking-widest text-navy shadow-sm"
        >
          Global Visa & Travel Support
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-4xl font-[750] leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl"
        >
          Travel Beyond Borders.<br className="hidden sm:block" /> We Make Visas Simpler.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-3xl text-base leading-relaxed text-white drop-shadow-sm sm:text-lg"
        >
          Professional visa documentation, application assistance and international travel<br className="hidden lg:block" /> support for individuals, families, students and business travellers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-start"
        >
          <Button asChild variant="secondary" className="h-12 w-full sm:w-auto rounded-control px-8 text-[15px] font-bold shadow-sm">
            <Link href="/#contact">
              Get Visa Assistance
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full sm:w-auto rounded-control border-white/40 bg-white/5 px-8 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <Link href="/document-checklist">
              Document Checklist
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
