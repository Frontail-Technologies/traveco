"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const visaServices = [
  {
    title: "Tourist Visa",
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
    title: "Work Visa",
    href: "/visa-services/work-employment",
    image: "/images/services/work.jpg",
  },
  {
    title: "Transit Visa",
    href: "/visa-services/transit",
    image: "/images/services/transit.jpg",
  },
  {
    title: "Schengen Visa",
    href: "/visa-services/schengen",
    image: "/images/services/schengen.jpg",
  },
];

export function VisaServicesSection() {
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
                Our Services
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Visa support for every kind of journey.
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 sm:pb-1">
              <Link
                href="/visa-services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Explore All Visa Services
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* 6 Visual Service Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visaServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/5 shadow-2xs transition-all duration-500 hover:shadow-md sm:aspect-16/11 lg:aspect-4/3"
              >
                <Link
                  href={service.href}
                  className="absolute inset-0 z-30 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-[2rem]"
                  aria-label={`Explore ${service.title}`}
                />

                {/* Service Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Red Accent Gradient Overlay on Image */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent/55 via-accent/15 to-transparent transition-opacity duration-500" />

                {/* Text Only: Service Title */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white drop-shadow-sm tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
