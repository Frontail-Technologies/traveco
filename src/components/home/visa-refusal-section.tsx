"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const REFUSAL_ITEMS = [
  {
    title: "Refusal Letter Review",
    icon: FileSearch,
    desc: "Careful review of the clauses cited by the embassy.",
  },
  {
    title: "Documentation Gap Check",
    icon: AlertTriangle,
    desc: "Identifying missing proofs, financial ties, or inconsistencies.",
  },
  {
    title: "Re-application Guidance",
    icon: ArrowRight,
    desc: "Step-by-step strategy before submitting a fresh application.",
  },
  {
    title: "Stronger Supporting Documents",
    icon: CheckCircle2,
    desc: "Assistance with clearer justification letters and verified records.",
  },
];

export function VisaRefusalSection() {
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
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-2"
              >
                <ShieldAlert className="size-3.5" />
                <span>CASE ASSISTANCE</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy"
              >
                Visa Refusal & Re-application Support
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Understand why your application was refused and prepare a well-documented re-application.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Visa Refusal / Re-application",
                    message: "Inquiry regarding Visa Refusal / Re-application guidance.",
                  })
                }
                variant="secondary"
                className="h-10 rounded-control px-6 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Get Re-application Guidance
              </Button>
            </motion.div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REFUSAL_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Visa Refusal / Re-application",
                      message: `Inquiry regarding ${item.title}`,
                    })
                  }
                  className="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-navy/[0.02] p-5 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-xs cursor-pointer"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
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

          <motion.p
            variants={fadeUp}
            className="text-[11px] sm:text-xs text-muted-foreground text-center font-medium"
          >
            Disclaimer: Final visa decisions rest solely with the respective embassies or consulates. We do not provide guarantees.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
