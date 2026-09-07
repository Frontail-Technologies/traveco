"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Users, Presentation, Layers, FileSpreadsheet, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const CORPORATE_SERVICES = [
  {
    title: "Corporate Visa Assistance",
    icon: Building2,
    desc: "End-to-end visa coordination for companies sending executives & delegations overseas.",
  },
  {
    title: "Business Traveller Visa",
    icon: Briefcase,
    desc: "Fast-track documentation support for commercial meetings, client visits, and negotiations.",
  },
  {
    title: "Employee Visa Documentation",
    icon: Users,
    desc: "Streamlined paperwork management, company sponsorship letters, and compliance checks.",
  },
  {
    title: "Conference / Exhibition Visa",
    icon: Presentation,
    desc: "Invitations, event passes, and documentation preparation for international trade expos & seminars.",
  },
  {
    title: "Group Visa Processing",
    icon: Layers,
    desc: "Coordinated filing, slot booking, and batch documentation for large corporate teams.",
  },
  {
    title: "Corporate Travel Documentation",
    icon: FileSpreadsheet,
    desc: "Tax invoices, customized expense tracking, and centralized point-of-contact for HR & travel desks.",
  },
];

export function BusinessCorporateSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-navy/[0.02] py-20 md:py-24 lg:py-28 border-b border-navy/10 relative">
      <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3"
              >
                <Building2 className="size-3.5" />
                <span>Corporate Mobility</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Business & Corporate Visa Support
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Reliable visa assistance designed specifically for corporate enterprises, startups, business travellers, and event delegations.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Business Visa",
                    message: "Inquiry regarding Corporate / Business Visa assistance.",
                  })
                }
                variant="secondary"
                className="h-11 rounded-control px-6 text-sm font-bold shadow-xs cursor-pointer"
              >
                Get Corporate Visa Assistance
              </Button>
            </motion.div>
          </div>

          {/* 6 Corporate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CORPORATE_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Business Visa",
                      message: `Corporate inquiry for ${item.title}`,
                    })
                  }
                  className="group flex flex-col justify-between rounded-[1.75rem] border border-navy/10 bg-white p-6 sm:p-7 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-navy/[0.04] text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white mb-5">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy group-hover:text-accent transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-navy/5 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Inquire for Corporate Rates</span>
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
