"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const VISA_SERVICES = [
  {
    title: "Tourist / Visitor Visa",
    category: "Leisure & Family",
    href: "/visa-services/tourist-visitor",
    image: "/images/services/tourist.jpg",
  },
  {
    title: "Business Visa",
    category: "Corporate & Commercial",
    href: "/visa-services/business",
    image: "/images/services/business.jpg",
  },
  {
    title: "Student Visa",
    category: "Higher Education",
    href: "/visa-services/student",
    image: "/images/services/student.jpg",
  },
  {
    title: "Schengen Visa",
    category: "European Travel",
    href: "/visa-services/schengen",
    image: "/images/services/schengen.jpg",
  },
  {
    title: "Passport Services",
    category: "New, Renewal & Tatkal",
    href: "/passport-services",
    image: "/images/services/passport.jpg",
  },
  {
    title: "Documentation Support",
    category: "Form Filling & Review",
    href: "/document-checklist",
    image: "/images/passport/docs.jpg",
  },
];

export function VisaServicesSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          {/* Top Header Area */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest"
              >
                OUR SERVICES
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-2 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Visa and passport support for every journey.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground"
              >
                End-to-end guidance, document preparation, and submission assistance for global travel.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 flex items-center gap-3">
              <Button
                type="button"
                onClick={() => openApplyModal()}
                variant="secondary"
                className="h-10 rounded-control px-5 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Get Visa Assistance
              </Button>
              <Link
                href="/visa-services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                <span>Explore All Services</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* Exactly 6 Curated Visual Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VISA_SERVICES.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="group relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/15 bg-navy/5 shadow-2xs transition-all duration-500 hover:shadow-lg hover:border-accent/40 block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {/* Service Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* High-Contrast Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent transition-opacity duration-500 group-hover:from-accent/85 group-hover:via-accent/30" />

                  {/* Text: Service Title & Small Category Label */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                        {service.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-accent ml-3">
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
