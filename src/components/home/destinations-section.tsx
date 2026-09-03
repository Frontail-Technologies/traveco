"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const destinations = [
  {
    id: "uk",
    name: "United Kingdom",
    image: "/images/destinations/uk.jpg",
    className: "lg:col-span-2 lg:row-span-2 min-h-[280px] sm:min-h-[340px] lg:min-h-[500px]",
    href: "/#contact",
  },
  {
    id: "usa",
    name: "USA",
    image: "/images/destinations/usa.jpg",
    className: "min-h-[240px] sm:min-h-[260px] lg:min-h-[240px]",
    href: "/#contact",
  },
  {
    id: "canada",
    name: "Canada",
    image: "/images/destinations/canada.jpg",
    className: "min-h-[240px] sm:min-h-[260px] lg:min-h-[240px]",
    href: "/#contact",
  },
  {
    id: "australia",
    name: "Australia",
    image: "/images/destinations/australia.jpg",
    className: "min-h-[240px] sm:min-h-[260px] lg:min-h-[300px]",
    href: "/#contact",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    image: "/images/destinations/new_zealand.jpg",
    className: "min-h-[240px] sm:min-h-[260px] lg:min-h-[300px]",
    href: "/#contact",
  },
  {
    id: "europe",
    name: "Europe / Schengen",
    image: "/images/destinations/europe.jpg",
    className: "min-h-[240px] sm:min-h-[260px] lg:min-h-[300px]",
    href: "/visa-services/schengen",
  },
];

export function DestinationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
              >
                Popular Destinations
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Where will your journey take you?
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 sm:pb-1">
              <Link
                href="/document-checklist"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                View Document Checklist
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {destinations.map((dest) => (
              <motion.div
                key={dest.id}
                variants={fadeUp}
                className={cn(
                  "group relative block overflow-hidden rounded-[2rem] bg-navy/5 shadow-sm transition-all duration-500 hover:shadow-lg",
                  dest.className
                )}
              >
                <Link
                  href={dest.href}
                  className="absolute inset-0 z-30 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-[2rem]"
                  aria-label={`Explore ${dest.name}`}
                />

                <Image
                  src={dest.image}
                  alt={`${dest.name} travel destination`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Red Accent Gradient Overlay on Image */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent/55 via-accent/15 to-transparent transition-opacity duration-500" />

                {/* Text Only: Destination Name */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white drop-shadow-sm tracking-tight sm:text-3xl">
                    {dest.name}
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
