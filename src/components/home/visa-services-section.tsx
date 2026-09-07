"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const VISA_SERVICES = [
  {
    title: "Tourist / Visitor Visa",
    href: "/visa-services/tourist-visitor",
    image: "/images/services/tourist.jpg",
  },
  {
    title: "Business Visa",
    href: "/visa-services/business",
    image: "/images/services/business.jpg",
  },
  {
    title: "Student Visa",
    href: "/visa-services/student",
    image: "/images/services/student.jpg",
  },
  {
    title: "Transit Visa",
    href: "/visa-services/transit",
    image: "/images/services/transit.jpg",
  },
  {
    title: "Medical Visa",
    href: "/visa-services",
    image: "/images/destinations/singapore.jpg",
  },
  {
    title: "Family / Dependent Visa",
    href: "/visa-services",
    image: "/images/about/hero_consultation.jpg",
  },
  {
    title: "Conference / Event Visa",
    href: "/visa-services",
    image: "/images/about/airport_terminal.jpg",
  },
  {
    title: "Schengen Visa",
    href: "/visa-services/schengen",
    image: "/images/services/schengen.jpg",
  },
  {
    title: "eVisa / ETA",
    href: "/visa-services",
    image: "/images/hero/hero_travel_documents.jpg",
  },
  {
    title: "Visa-on-Arrival Guidance",
    href: "/visa-services",
    image: "/images/hero/hero_city_skyline.jpg",
  },
];

export function VisaServicesSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white relative overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Top Header Area */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
              >
                VISA SERVICES
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Comprehensive visa assistance for 100+ countries.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-base text-muted-foreground"
              >
                Expert guidance across individual, family, educational, and commercial travel categories.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 sm:pb-1 flex items-center gap-3">
              <Button
                type="button"
                onClick={() => openApplyModal()}
                variant="secondary"
                className="h-10 rounded-control px-5 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Check Visa Requirements
              </Button>
              <Link
                href="/visa-services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                <span>View Hub</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* 10 Visual Service Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            {VISA_SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                onClick={() =>
                  openApplyModal({
                    serviceType: service.title,
                  })
                }
                className="group relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/5 shadow-2xs transition-all duration-500 hover:shadow-lg hover:border-accent/30 cursor-pointer"
              >
                {/* Service Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-accent/80 group-hover:via-accent/25" />

                {/* Text Only: Service Title */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 flex items-end justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm tracking-tight">
                    {service.title}
                  </h3>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-accent">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Lead-Generating Banner */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[1.75rem] border border-navy/10 bg-muted/20 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="size-6 text-accent shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-navy">
                Not sure which category fits your travel plan? Get a free profile assessment.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => openApplyModal()}
              variant="secondary"
              className="h-11 rounded-control px-7 text-sm font-bold shadow-xs cursor-pointer whitespace-nowrap"
            >
              Get Visa Assistance
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
