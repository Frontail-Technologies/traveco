"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const visaServices = [
  {
    id: "01",
    title: "Tourist & Visitor Visa",
    description:
      "Personalized documentation and application assistance for leisure and family travel.",
    href: "/visa-services/tourist-visitor",
  },
  {
    id: "02",
    title: "Business Visa",
    description:
      "Support for business travellers attending meetings, conferences and commercial activities.",
    href: "/visa-services/business",
  },
  {
    id: "03",
    title: "Student Visa",
    description:
      "Documentation guidance for students pursuing education overseas.",
    href: "/visa-services/student",
  },
  {
    id: "04",
    title: "Work & Employment Visa",
    description:
      "Assistance with documentation and visa application requirements for overseas employment.",
    href: "/visa-services/work-employment",
  },
  {
    id: "05",
    title: "Transit Visa",
    description:
      "Guidance for travellers transiting through countries that require transit authorization.",
    href: "/visa-services/transit",
  },
  {
    id: "06",
    title: "Schengen Visa",
    description:
      "Application assistance for travel across Schengen countries.",
    href: "/visa-services/schengen",
  },
];

export function VisaServicesSection() {
  return (
    <section className="bg-background relative overflow-hidden py-16 lg:py-30">
      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-16"
        >
          {/* Top Header Area */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-gold-cta text-xs font-bold uppercase tracking-[0.12em]"
              >
                Visa Services
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[38px] font-bold leading-[1.1] tracking-tight text-primary sm:text-[44px] lg:text-[48px] lg:leading-[1.05]"
              >
                Visa support for every kind of journey.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] leading-[1.65] text-primary/75 sm:text-[16px]"
              >
                From holidays and business travel to overseas study and employment,
                TRAVECO provides structured visa documentation and application
                assistance for international travellers.
              </motion.p>
            </div>
            
            <motion.div variants={fadeUp} className="shrink-0 lg:pb-2">
              <Link
                href="/visa-services"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-accent"
              >
                Explore All Visa Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Main Content Area (40/60 Split) */}
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            
            {/* Left — 40% (Premium Image) */}
            <motion.div 
              variants={fadeUp} 
              className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-surface lg:aspect-3/4 lg:w-[42%]"
            >
              <Image
                src="/images/generated/premium_travel_documents.jpg"
                alt="Premium passport and travel documents in an international airport lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Right — 60% (Editorial List) */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                {visaServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={fadeUp}
                    className="group flex flex-col border-b border-border/80 pb-6 mb-8 transition-colors hover:border-accent/40"
                  >
                    <div className="mb-3 text-[13px] font-bold text-gold-cta">
                      {service.id}
                    </div>
                    
                    <h3 className="mb-2 text-[20px] font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    
                    <p className="mb-5 flex-1 text-[15px] leading-relaxed text-primary/75">
                      {service.description}
                    </p>
                    
                    <Link
                      href={service.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary/60 transition-colors group-hover:text-primary"
                    >
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
