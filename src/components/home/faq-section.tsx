"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { faqData } from "@/data/faq";

function FAQItem({
  item,
  index,
  isOpen,
  onClick,
  isLast,
}: {
  item: typeof faqData[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
  isLast?: boolean;
}) {
  return (
    <div className="group bg-white rounded-2xl px-6 sm:px-8 mb-4 shadow-sm border border-primary/5 transition-colors duration-300 hover:border-gold-cta/30">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-end justify-between gap-6 pb-7 pt-8 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-cta"
      >
        <div className="flex items-center">
          <span className="text-lg font-bold leading-tight text-primary lg:text-xl">
            {item.question}
          </span>
        </div>
        <div className={cn("mb-1 flex shrink-0 items-center justify-center transition-colors duration-300", isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary")}>
          {isOpen ? (
            <Minus className="size-5" strokeWidth={1.5} />
          ) : (
            <Plus className="size-5" strokeWidth={1.5} />
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
            <div className="pb-8 pr-6 text-base leading-relaxed text-primary/80">
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
    <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-28 z-0">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left Content (35-40%) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col pt-2 relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-gold-cta text-xs font-bold uppercase tracking-widest"
            >
              Frequently Asked Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-5xl"
            >
              Questions before your <br className="hidden lg:block" /> next journey?
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-8 lg:mt-12 rounded-2xl bg-traveco-navy p-6 lg:p-8">
              <p className="mb-3 text-base font-bold text-white">
                Still have a question?
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-gold-cta"
              >
                Contact TRAVECO
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Editorial Accordion (60-65%) */}
          <div className="lg:col-span-8 flex flex-col lg:pl-10">
            <div className="flex flex-col">
              {faqData.map((item, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <FAQItem
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
                    isLast={index === faqData.length - 1}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
