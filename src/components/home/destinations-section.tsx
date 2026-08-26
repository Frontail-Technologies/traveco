"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const destinations = [
  {
    id: "uk",
    name: "United Kingdom",
    categories: "Visitor · Business · Student",
    image: "/images/destinations/uk.jpg",
    className: "lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[500px]",
    href: "/document-checklist/united-kingdom",
  },
  {
    id: "usa",
    name: "USA",
    categories: "Visitor · Business · Student",
    image: "/images/destinations/usa.jpg",
    className: "min-h-[240px] lg:min-h-[240px]",
    href: "/document-checklist/united-states-of-america",
  },
  {
    id: "canada",
    name: "Canada",
    categories: "Visitor · Student · Business",
    image: "/images/destinations/canada.jpg",
    className: "min-h-[240px] lg:min-h-[240px]",
    href: "/document-checklist/canada",
  },
  {
    id: "australia",
    name: "Australia",
    categories: "Visitor · Student · Business",
    image: "/images/destinations/australia.jpg",
    className: "min-h-[240px] lg:min-h-[320px]",
    href: "/document-checklist/australia",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    categories: "Visitor · Business · Student",
    image: "/images/destinations/new_zealand.jpg",
    className: "min-h-[240px] lg:min-h-[320px]",
    href: "/document-checklist/new-zealand",
  },
  {
    id: "europe",
    name: "Europe / Schengen",
    categories: "Schengen Visa Assistance",
    image: "/images/destinations/europe.jpg",
    className: "min-h-[240px] lg:min-h-[320px]",
    href: "/document-checklist/schengen-countries",
  },
];

export function DestinationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-8 lg:gap-12"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between lg:col-span-12 relative z-10 gap-6">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-gold-cta text-xs font-bold uppercase tracking-widest"
              >
                Popular Destinations
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl"
              >
                Where will your journey take you?
              </motion.h2>
            </div>
            
            <motion.div variants={fadeUp} className="shrink-0 lg:pb-2">
              <Link
                href="/document-checklist"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Explore All Destinations
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {destinations.map((dest) => (
              <motion.div key={dest.id} variants={fadeUp} className={cn("group relative block overflow-hidden rounded-2xl", dest.className)}>
                <Link href={dest.href} className="absolute inset-0 z-30 block" aria-label={`Explore ${dest.name}`} />
                
                <Image
                  src={dest.image}
                  alt={`${dest.name} travel destination`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(5, 20, 40, 0.82), rgba(5, 20, 40, 0.28) 42%, transparent 72%)'
                  }}
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-6 lg:p-8">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                      {dest.name}
                    </h3>
                    <p className="text-sm font-medium text-white/95">
                      {dest.categories}
                    </p>
                  </div>
                  
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20">
                    <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
