"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { useApplyModal } from "@/context/apply-modal-context";

import { DestinationCombobox } from "@/components/forms/destination-combobox";
import { ArrowRight, Compass, Calendar, Plane, Sparkles } from "lucide-react";

const backgroundImages = [
  "/images/hero/hero_city_skyline.jpg",
  "/images/hero/hero_airport_terminal.jpg",
  "/images/hero/hero_travel_documents.jpg"
];

const TRAVEL_PURPOSES = ["Tourist", "Business", "Student", "Medical"];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [destination, setDestination] = useState("");
  const [purpose, setPurpose] = useState("Tourist");
  const [travelDate, setTravelDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { openApplyModal } = useApplyModal();

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openApplyModal({
      destination: destination || undefined,
      serviceType: `${purpose} Visa`,
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
        <div className="absolute inset-0 z-1 bg-navy/60 md:bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>

      {/* ── Content Container ───────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-340 px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Text Side */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-sm"
            >
              <Sparkles className="size-3.5 text-accent" />
              <span>Visa Confusion? We Make It Simple.</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-[800] leading-[1.06] tracking-tight text-white drop-shadow-sm"
            >
              Professional Visa & Passport Assistance for 100+ Countries.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-relaxed text-white/90 drop-shadow-sm max-w-2xl font-normal"
            >
              Structured documentation, clear application guidance, and personalized support for tourist, business, student, transit and medical travel.
            </motion.p>

            {/* Quick Action Links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <Button
                type="button"
                onClick={() => openApplyModal()}
                variant="secondary"
                className="h-12 rounded-control px-7 text-sm font-bold shadow-md cursor-pointer"
              >
                Get Visa Assistance
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-control border-white/30 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white"
              >
                <Link href="/document-checklist">
                  Document Checklist
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-12 rounded-control px-5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10"
              >
                <Link href="/passport-services">
                  Passport Services →
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Prominent "FIND YOUR VISA" Lead-Generating Box */}
          <motion.div
            id="visa-finder"
            variants={fadeUp}
            className="lg:col-span-5 w-full scroll-mt-28"
          >
            <div className="relative rounded-[2rem] border border-white/20 bg-white/95 backdrop-blur-xl p-6 sm:p-8 text-navy shadow-2xl">
              
              {/* Finder Box Header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-navy/10">
                <div className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy leading-tight">
                    FIND YOUR VISA
                  </h2>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Get country-specific visa requirements in minutes
                  </p>
                </div>
              </div>

              <form onSubmit={handleFinderSubmit} className="space-y-4">
                {/* 1. Destination Country */}
                <div>
                  <label htmlFor="finder-dest" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    Where are you travelling?
                  </label>
                  <DestinationCombobox
                    id="finder-dest"
                    name="destination"
                    value={destination}
                    onChange={setDestination}
                    placeholder="Select Country (e.g., Dubai, UK, Schengen)"
                    className="h-11 text-sm bg-white"
                  />
                </div>

                {/* 2. Purpose of Travel (No Work) */}
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    Purpose of Travel
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {TRAVEL_PURPOSES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPurpose(item)}
                        className={`h-9 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          purpose === item
                            ? "bg-accent text-white border-accent shadow-xs"
                            : "bg-muted/40 text-navy border-navy/10 hover:border-accent/40"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Travel Date */}
                <div>
                  <label htmlFor="finder-date" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <input
                      id="finder-date"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="h-11 w-full rounded-control border border-navy/15 bg-white px-3.5 text-sm font-medium text-navy outline-none transition-all placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
                    />
                  </div>
                </div>

                {/* 4. Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex h-12.5 min-h-[50px] items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg cursor-pointer mt-2"
                >
                  <span>GET VISA REQUIREMENTS</span>
                  <ArrowRight className="size-4.5" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Plane className="size-3 text-accent" /> 100+ Destinations
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
