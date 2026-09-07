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

const DOCUMENTATION_SERVICES = [
  { title: "Visa Document Checklist", icon: CheckSquare, desc: "Step-by-step required document breakdown tailored to destination & nationality." },
  { title: "Application Form Filling", icon: FileSpreadsheet, desc: "Accurate online and offline form compilation without typographical errors." },
  { title: "Cover Letter Drafting", icon: FileText, desc: "Structured statement of travel purpose, sponsorship, and itinerary details." },
  { title: "Travel Itinerary Planning", icon: Calendar, desc: "Day-by-day flight & hotel schedule matching embassy submission standards." },
  { title: "Invitation Letter Guidance", icon: Mail, desc: "Assistance formatting sponsor, corporate, and family visit invitations." },
  { title: "Financial Document Guidance", icon: Receipt, desc: "Bank statement formatting, CA certs, ITR guidance, and proof of funds review." },
  { title: "Employment Documents", icon: Briefcase, desc: "NOC letters, leave sanction, salary slips, and business registration proof." },
  { title: "Hotel Booking Documentation", icon: Hotel, desc: "Verifiable reservation confirmations matching your itinerary dates." },
  { title: "Flight Reservation / Itinerary", icon: Plane, desc: "Embassy-compliant flight reservation for visa submission." },
  { title: "Travel Insurance Assistance", icon: ShieldCheck, desc: "International travel health cover meeting Schengen and global minimums." },
  { title: "Supporting Document Review", icon: Search, desc: "Thorough pre-submission scrutiny to detect missing or mismatched data." },
  { title: "Complete Document Compilation", icon: FolderArchive, desc: "Organized dossier indexing ready for VFS, BLS, TLS, or consular submission." },
];

export function DocumentationServicesSection() {
  const { openApplyModal } = useApplyModal();

  return (
    <section className="bg-navy/[0.025] py-20 md:py-24 lg:py-28 border-y border-navy/10 relative">
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
                <Sparkles className="size-3.5" />
                <span>Documentation Support</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                Documentation services that make applications simpler.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Most visa rejections happen due to improper paperwork. Our documentation experts help you compile, verify, and format every single document accurately.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() =>
                  openApplyModal({
                    serviceType: "Documentation Services",
                  })
                }
                variant="secondary"
                className="h-11 rounded-control px-6 text-sm font-bold shadow-xs cursor-pointer"
              >
                Check My Documents
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-control border-navy/15 bg-white px-6 text-sm font-medium text-navy hover:border-accent hover:text-accent shadow-2xs"
              >
                <Link href="/document-checklist">
                  Get a Document Checklist
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* 12 Documentation Service Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {DOCUMENTATION_SERVICES.map((item, idx) => {
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
                  className="group flex flex-col justify-between rounded-[1.5rem] border border-navy/10 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-accent transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-navy/5 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Request Assistance</span>
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
