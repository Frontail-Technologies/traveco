"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, FileStack, Layers } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const B2B_ITEMS = [
  {
    title: "B2B Visa Processing",
    icon: Handshake,
    desc: "Back-end visa operations tailored for travel agencies.",
  },
  {
    title: "White-Label Visa Support",
    icon: ShieldCheck,
    desc: "Documentation assistance under your agency's client touchpoints.",
  },
  {
    title: "Bulk Application Processing",
    icon: FileStack,
    desc: "Group, corporate, and student batch filing support.",
  },
  {
    title: "Partner Agency Support",
    icon: Layers,
    desc: "Dedicated account coordination and preferential turnaround.",
  },
];

export function B2BSupportSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-navy/[0.02] py-16 md:py-20 border-b border-navy/10 relative">
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
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-2"
              >
                <Handshake className="size-3.5" />
                <span>AGENCY PARTNERSHIPS</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy"
              >
                B2B Travel Agent Support
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Partner with TRAVECO for dedicated back-end visa documentation, verification, and group processing.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "B2B Travel Agent Support",
                    message: "Inquiry regarding B2B Travel Agent Partnership / Rates.",
                  })
                }
                variant="secondary"
                className="h-10 rounded-control px-6 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Partner With TRAVECO
              </Button>
            </motion.div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {B2B_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "B2B Travel Agent Support",
                      message: `Inquiry regarding ${item.title}`,
                    })
                  }
                  className="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs cursor-pointer"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy group-hover:text-accent transition-colors mb-1.5">
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
