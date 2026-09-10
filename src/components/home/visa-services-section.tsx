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
    href: null,
    image: "/images/destinations/singapore.jpg",
  },
  {
    title: "Family / Dependent Visa",
    href: null,
    image: "/images/about/hero_consultation.jpg",
  },
  {
    title: "Conference / Event Visa",
    href: null,
    image: "/images/about/airport_terminal.jpg",
  },
  {
    title: "Schengen Visa",
    href: "/visa-services/schengen",
    image: "/images/services/schengen.jpg",
  },
  {
    title: "eVisa / ETA",
    href: null,
    image: "/images/hero/hero_travel_documents.jpg",
  },
  {
    title: "Visa-on-Arrival Guidance",
    href: null,
    image: "/images/hero/hero_city_skyline.jpg",
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
                VISA SERVICES
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-2 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Visa assistance for every kind of journey.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground"
              >
                Expert guidance across individual, family, business, academic, and transit travel categories.
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
                <span>View All</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-accent" />
              </Link>
            </motion.div>
          </div>

          {/* 10 Visual Service Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-5">
            {VISA_SERVICES.map((service) => {
              const handleClick = () => {
                if (!service.href) {
                  openApplyModal({
                    serviceType: service.title,
                  });
                }
              };

              const CardContent = (
                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-[1.75rem] border border-navy/10 bg-navy/5 shadow-2xs transition-all duration-500 hover:shadow-md hover:border-accent/30 cursor-pointer">
                  {/* Service Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent transition-opacity duration-500 group-hover:from-accent/80 group-hover:via-accent/25" />

                  {/* Text: Service Title */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 flex items-end justify-between">
                    <h3 className="text-base font-bold text-white drop-shadow-sm tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-accent ml-2">
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div key={service.title} variants={fadeUp}>
                  {service.href ? (
                    <Link href={service.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[1.75rem]">
                      {CardContent}
                    </Link>
                  ) : (
                    <div onClick={handleClick}>{CardContent}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
