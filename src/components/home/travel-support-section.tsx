"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, ShieldCheck, Map, MailCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const TRAVEL_ITEMS = [
  {
    title: "Flight Reservation",
    icon: Plane,
    desc: "Confirmed flight itineraries formatted for visa filing.",
  },
  {
    title: "Hotel Reservation",
    icon: Hotel,
    desc: "Verifiable accommodation bookings matching your itinerary.",
  },
  {
    title: "Travel Insurance",
    icon: ShieldCheck,
    desc: "Worldwide health and travel cover meeting embassy standards.",
  },
  {
    title: "Travel Itinerary",
    icon: Map,
    desc: "Day-wise travel schedules tailored to your visa application.",
  },
  {
    title: "Invitation / Sponsorship Docs",
    icon: MailCheck,
    desc: "Drafting guidance for visitor and corporate sponsorship.",
  },
];

export function TravelSupportSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white py-16 md:py-20 border-b border-navy/10 relative">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-8 md:gap-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2"
              >
                SUPPORTING SERVICES
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy"
              >
                Travel Support Services
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Essential travel support to complete your visa paperwork and overseas journey preparations.
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

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRAVEL_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Travel Support",
                      message: `Inquiry regarding ${item.title}`,
                    })
                  }
                  className="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-navy/[0.02] p-5 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-xs cursor-pointer"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy group-hover:text-accent transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
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
