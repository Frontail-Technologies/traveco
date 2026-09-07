"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, ShieldCheck, Map, MailCheck, Compass, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const SUPPORTING_SERVICES = [
  {
    title: "Flight Reservation",
    icon: Plane,
    desc: "Confirmed flight itineraries formatted specifically for embassy & visa requirements.",
  },
  {
    title: "Hotel Reservation",
    icon: Hotel,
    desc: "Verifiable accommodation bookings matching your travel schedule and stay duration.",
  },
  {
    title: "Travel Insurance",
    icon: ShieldCheck,
    desc: "Comprehensive worldwide travel health coverage meeting consular & Schengen criteria.",
  },
  {
    title: "International Travel Itinerary",
    icon: Map,
    desc: "Detailed day-wise travel plans aligned with your visa application and tourist agenda.",
  },
  {
    title: "Invitation / Sponsorship Docs",
    icon: MailCheck,
    desc: "Guidance and drafting assistance for family, friend, or business sponsorship affidavits.",
  },
  {
    title: "Airport / Travel Assistance",
    icon: Compass,
    desc: "Pre-departure advice, immigration checklist briefings, and transit terminal guidance.",
  },
];

export function TravelSupportSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-navy/10 relative">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2"
              >
                SUPPORTING SERVICES
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-navy tracking-tight"
              >
                Comprehensive Travel Support
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground"
              >
                Supporting services to complete your visa filing and international trip preparations.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Travel Support",
                  })
                }
                variant="secondary"
                className="h-10 rounded-control px-6 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Get Travel Support
              </Button>
            </motion.div>
          </div>

          {/* 6 Supporting Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUPPORTING_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Travel Support",
                      message: `Inquiry for ${item.title}`,
                    })
                  }
                  className="group flex items-start gap-4 rounded-[1.5rem] border border-navy/10 bg-navy/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-sm cursor-pointer"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy group-hover:text-accent transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
