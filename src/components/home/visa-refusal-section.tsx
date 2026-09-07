"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, ShieldAlert, CheckCircle2, MessageCircle, ArrowRight, UserCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const REFUSAL_SERVICES = [
  {
    title: "Previous Visa Refusal Assessment",
    icon: ShieldAlert,
    desc: "Detailed evaluation of refusal history, previous application copies, and immigration officer remarks.",
  },
  {
    title: "Refusal Letter Review",
    icon: FileSearch,
    desc: "Line-by-line legal & operational analysis of the specific clauses cited by the embassy or consulate.",
  },
  {
    title: "Documentation Gap Analysis",
    icon: AlertTriangle,
    desc: "Identifying missing proof of ties, financial inadequacies, or unconvincing itinerary elements.",
  },
  {
    title: "Re-application Guidance",
    icon: ArrowRight,
    desc: "Strategic restructuring of your travel case before re-applying, avoiding repetitive mistakes.",
  },
  {
    title: "Stronger Supporting Document Prep",
    icon: CheckCircle2,
    desc: "Compensatory affidavits, clearer financial justifications, and comprehensive purpose statements.",
  },
  {
    title: "Interview Preparation",
    icon: UserCheck,
    desc: "One-on-one mock interview sessions for USA, Schengen, or UK consular interviews where applicable.",
  },
];

export function VisaRefusalSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 relative overflow-hidden border-b border-navy/10">
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
                <AlertTriangle className="size-3.5" />
                <span>High-Intent Case Support</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Visa Refusal & Re-application Assistance
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                A visa refusal does not mean your journey is over. We analyze what went wrong, fix documentation discrepancies, and help you prepare a solid re-application.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Visa Refusal Assessment",
                    message: "Requesting a review for previous visa refusal.",
                  })
                }
                variant="secondary"
                className="h-11 rounded-control px-6 text-sm font-bold shadow-xs cursor-pointer"
              >
                Review My Refusal Case
              </Button>
              <a
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-6 text-sm font-semibold text-navy hover:border-accent hover:text-accent shadow-2xs transition-all"
              >
                <MessageCircle className="size-4 text-accent" />
                <span>WhatsApp an Expert</span>
              </a>
            </motion.div>
          </div>

          {/* 6 Refusal Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {REFUSAL_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Visa Refusal Assessment",
                      message: `Inquiry for ${item.title}`,
                    })
                  }
                  className="group flex flex-col justify-between rounded-[1.75rem] border border-navy/10 bg-navy/[0.02] p-6 sm:p-7 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105 mb-5">
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
                    <span>Get Case Guidance</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Re-application note */}
          <motion.div
            variants={fadeUp}
            className="rounded-[1.5rem] bg-accent/5 border border-accent/20 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs sm:text-sm font-semibold text-navy leading-relaxed">
              <strong>Important Notice:</strong> We do not offer fake documents or false guarantees. We focus on ethical, transparent, and legally compliant case strengthening.
            </p>
            <Button
              type="button"
              onClick={() =>
                openApplyModal({
                  serviceType: "Visa Refusal Assessment",
                })
              }
              variant="secondary"
              className="h-10 rounded-control px-6 text-xs sm:text-sm font-bold shadow-xs cursor-pointer whitespace-nowrap"
            >
              Get Re-application Guidance
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
