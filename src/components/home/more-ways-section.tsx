"use client";

import { motion } from "framer-motion";
import { FileCheck, ShieldAlert, Handshake, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";

const SUPPORT_CARDS = [
  {
    title: "Documentation Support",
    icon: FileCheck,
    desc: "Checklist review, form filling, cover letters, and verifiable travel itineraries.",
    cta: "Check Documents",
    serviceType: "Documentation Services",
  },
  {
    title: "Visa Refusal Support",
    icon: ShieldAlert,
    desc: "Review your refusal letter and prepare a stronger, compliant re-application.",
    cta: "Get Guidance",
    serviceType: "Visa Refusal / Re-application",
  },
  {
    title: "B2B Agent Support",
    icon: Handshake,
    desc: "Dedicated back-end visa operations, bulk filing, and partner support for agencies.",
    cta: "Partner With Us",
    serviceType: "B2B Travel Agent Support",
  },
];

export function MoreWaysSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-navy/[0.02] py-14 md:py-18 border-t border-navy/10 relative">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-8"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest"
              >
                ADDITIONAL ASSISTANCE
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-1.5 text-2xl sm:text-3xl font-bold text-navy tracking-tight"
              >
                More ways we can help.
              </motion.h2>
            </div>
          </div>

          {/* 3 Compact High-Contrast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SUPPORT_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: card.serviceType,
                    })
                  }
                  className="group flex flex-col justify-between rounded-[1.5rem] border border-navy/15 bg-white p-6 shadow-2xs transition-all duration-300 hover:border-accent/50 hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-navy/5 flex items-center justify-between text-xs font-bold text-accent">
                    <span>{card.cta}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
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
