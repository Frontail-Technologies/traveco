"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { useApplyModal } from "@/context/apply-modal-context";

import { DestinationCombobox } from "@/components/forms/destination-combobox";
import { ArrowRight, Compass, Sparkles, MapPin, Globe } from "lucide-react";

const backgroundImages = [
  "/images/hero/hero_city_skyline.jpg",
  "/images/hero/hero_airport_terminal.jpg",
  "/images/hero/hero_travel_documents.jpg"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { openApplyModal } = useApplyModal();

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    openApplyModal({
      destination: destination || undefined,
      serviceType: "Tourist / Visitor Visa",
    });
  };

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
              alt="TRAVECO Visa & Passport Guidance"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Gradient Overlay ────────────────────────── */}
        <div className="absolute inset-0 z-1 bg-navy/60 md:bg-gradient-to-r from-navy/90 via-navy/75 to-navy/55" />
      </div>

      {/* ── Content Container ───────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-340 px-5 py-10 sm:px-6 sm:py-14 md:py-20 lg:px-8 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Text Side */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              variants={fadeUp}
              className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-sm"
            >
              <Sparkles className="size-3.5 text-accent" />
              <span>Visa Confusion? We Make It Simple.</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-[800] leading-[1.06] tracking-tight text-white drop-shadow-sm"
            >
              Passport assistance and Global visa for 100+ countries.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-white/90 drop-shadow-sm max-w-2xl font-normal"
            >
              Structured documentation, clear application guidance, and transparent consultation for worldwide destinations.
            </motion.p>

            {/* Quick Action Links */}
            <motion.div
              variants={fadeUp}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                type="button"
                onClick={() => openApplyModal()}
                variant="secondary"
                className="h-11 sm:h-12 rounded-control px-6 sm:px-7 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
              >
                Get Visa Assistance
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 sm:h-12 rounded-control border-white/30 bg-white/10 px-5 sm:px-6 text-xs sm:text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white"
              >
                <Link href="/document-checklist">
                  Document Checklist
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 sm:h-12 rounded-control px-4 sm:px-5 text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10"
              >
                <Link href="/passport-services">
                  Passport Services →
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Simple Finder Card */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-[2rem] border border-white/20 bg-white/95 backdrop-blur-xl p-5 sm:p-7 md:p-8 text-navy shadow-2xl">
              
              {/* Finder Box Header */}
              <div className="mb-4 pb-3 sm:mb-5 sm:pb-4 border-b border-navy/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex size-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Compass className="size-4" />
                  </div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-navy leading-tight">
                    Visa Services, Fast & Simple
                  </h2>
                </div>
                <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                  Get visa and passport assistance with expert support and transparent guidance.
                </p>
              </div>

              <form onSubmit={handleSearchClick} className="space-y-4">
                {/* 1. I'm from (Fixed to India) */}
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    I&apos;m from
                  </label>
                  <div className="flex items-center gap-2.5 h-11 w-full rounded-control border border-navy/15 bg-muted/40 px-3.5 text-sm font-semibold text-navy">
                    <MapPin className="size-4 text-accent shrink-0" />
                    <span>India</span>
                    <span className="ml-auto text-xs text-muted-foreground font-medium">Citizen / Resident</span>
                  </div>
                </div>

                {/* 2. I'm going to (Destination Combobox) */}
                <div>
                  <label htmlFor="finder-dest" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    I&apos;m going to
                  </label>
                  <DestinationCombobox
                    id="finder-dest"
                    name="destination"
                    value={destination}
                    onChange={setDestination}
                    placeholder="Select destination (e.g. Dubai, UK, Schengen)"
                    className="h-11 text-sm bg-white"
                  />
                </div>

                {/* 3. Search Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg cursor-pointer mt-1"
                >
                  <span>Get Visa Assistance</span>
                  <ArrowRight className="size-4.5" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Globe className="size-3 text-accent" /> 100+ Destinations
                </span>
                <span>✔ 100% Free Consultation</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
