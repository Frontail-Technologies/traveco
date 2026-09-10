"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  CheckSquare,
  FileSpreadsheet,
  Calendar,
  Mail,
  Receipt,
  Briefcase,
  Hotel,
  Plane,
  ShieldCheck,
  Search,
  FolderArchive,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button } from "@/components/ui/button";

const DOCUMENTATION_ITEMS = [
  { title: "Visa Document Checklist", icon: CheckSquare },
  { title: "Application Form Filling", icon: FileSpreadsheet },
  { title: "Cover Letter", icon: FileText },
  { title: "Travel Itinerary", icon: Calendar },
  { title: "Invitation Letter", icon: Mail },
  { title: "Financial Document Guidance", icon: Receipt },
  { title: "Employment Documents", icon: Briefcase },
  { title: "Hotel Booking Documentation", icon: Hotel },
  { title: "Flight Reservation / Itinerary", icon: Plane },
  { title: "Travel Insurance", icon: ShieldCheck },
  { title: "Supporting Document Review", icon: Search },
  { title: "Document Compilation", icon: FolderArchive },
];

export function DocumentationServicesSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-navy/[0.02] py-16 md:py-20 lg:py-24 border-y border-navy/10 relative">
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
                <Sparkles className="size-3.5" />
                <span>DOCUMENTATION SUPPORT</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy"
              >
                Documentation support for smoother applications.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Accurate preparation and verification of essential documents before embassy submission.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 flex items-center gap-3">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Documentation Services",
                  })
                }
                variant="secondary"
                className="h-10 rounded-control px-5 text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                Check My Documents
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-control border-navy/15 bg-white px-4 text-xs sm:text-sm font-medium text-navy hover:border-accent hover:text-accent shadow-2xs"
              >
                <Link href="/document-checklist">
                  Document Checklist
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* 12 Simple Cards/Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {DOCUMENTATION_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  onClick={() =>
                    openApplyModal({
                      serviceType: "Documentation Services",
                      message: `Inquiry regarding ${item.title}`,
                    })
                  }
                  className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-3.5 sm:p-4 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs cursor-pointer"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-navy group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
