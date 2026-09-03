"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { faqData } from "@/data/faq";

function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: typeof faqData[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-navy/10 bg-white px-6 sm:px-8 transition-colors duration-300 hover:border-accent/30 shadow-xs">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="text-base font-bold text-navy sm:text-lg">
          {item.question}
        </span>
        <div className={cn("flex size-7 shrink-0 items-center justify-center rounded-full bg-muted/60 transition-colors duration-300", isOpen ? "bg-accent text-white" : "text-navy/70 group-hover:bg-accent group-hover:text-white")}>
          {isOpen ? (
            <Minus className="size-4" strokeWidth={2} />
          ) : (
            <Plus className="size-4" strokeWidth={2} />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="pb-6 pr-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28 z-0">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl flex flex-col gap-10 lg:gap-12"
        >
          {/* Header */}
          <div className="text-center">
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm sm:text-base font-bold uppercase tracking-widest"
            >
              Frequently Asked Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
            >
              Questions before your next journey?
            </motion.h2>
          </div>

          {/* Accordion List Only (No extra cards or chips) */}
          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <FAQItem
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
