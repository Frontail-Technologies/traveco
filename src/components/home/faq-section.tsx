"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Do you guarantee visa approval?",
    answer: "No. Visa decisions are made solely by the relevant embassy, consulate or immigration authority. TRAVECO Mobility provides documentation and application assistance.",
  },
  {
    question: "How long does a visa take?",
    answer: "Processing time varies by destination, visa category and applicant circumstances.",
  },
  {
    question: "Do you provide document checking?",
    answer: "Yes. Documentation review and application assistance are available depending on the service selected.",
  },
  {
    question: "Can I apply if I have a previous visa refusal?",
    answer: "Yes, depending on the destination and circumstances. Previous refusal details should always be disclosed accurately.",
  },
  {
    question: "Do you provide flight and hotel assistance?",
    answer: "Travel-related services can be provided as applicable.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onClick,
}: {
  item: typeof faqData[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group border-b border-primary/10 transition-colors duration-300 hover:border-gold-cta/30">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-end justify-between gap-6 pb-7 pt-8 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-cta"
      >
        <div className="flex flex-col items-start gap-3">
          <span className="text-[13.5px] font-[700] tracking-wider text-gold-cta">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[18.5px] font-[650] leading-tight text-primary lg:text-[20px]">
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
            <div className="pb-8 pr-6 text-[15px] leading-[1.6] text-primary/80">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] py-25 lg:py-28.75 z-0">
      
      {/* Decorative Detail: Subtle gold arc near heading */}
      <div className="absolute left-[3%] top-[12%] pointer-events-none opacity-[0.05] z-0 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-cta">
          <path d="M10 70C10 36.8629 36.8629 10 70 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Content (35-40%) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col pt-2 relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-gold-cta text-xs font-[700] uppercase tracking-[0.12em]"
            >
              Frequently Asked Questions
            </motion.p>
            
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[38px] font-[700] leading-[1.1] tracking-tight text-primary sm:text-[44px] lg:text-[48px] lg:leading-[1.05]"
            >
              Questions before your <br className="hidden lg:block" /> next journey?
            </motion.h2>
            
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15.5px] leading-[1.6] text-primary/80 lg:text-[16px]"
            >
              Find quick answers to common questions about visa documentation, application assistance and the TRAVECO process.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 border-t border-primary/10 pt-6 lg:mt-12">
              <p className="mb-2 text-[15px] font-[700] text-primary">
                Still have a question?
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[14.5px] font-[650] text-primary transition-colors hover:text-gold-cta"
              >
                Contact TRAVECO
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Editorial Accordion (60-65%) */}
          <div className="lg:col-span-8 flex flex-col lg:pl-10">
            <div className="border-t border-primary/10">
              {faqData.map((item, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <FAQItem
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
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
