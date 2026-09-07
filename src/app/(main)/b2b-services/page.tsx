import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Layers,
  FileCheck2,
  Users,
  SearchCheck,
  ShieldCheck,
  Headphones,
  FileStack,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpenApplyButton } from "@/components/ui/open-apply-button";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export const metadata: Metadata = {
  title: "B2B Travel Agent Support & Visa Processing | TRAVECO Mobility",
  description:
    "Partner with TRAVECO for dedicated B2B visa processing, white-label back-end support, bulk application handling, and agency documentation assistance.",
};

const B2B_SERVICES = [
  {
    title: "B2B Visa Processing",
    icon: Handshake,
    desc: "Seamless fulfillment of visa applications for your agency clients with dedicated B2B turnaround times.",
  },
  {
    title: "White-Label Visa Support",
    icon: ShieldCheck,
    desc: "Deliver expert visa documentation directly under your agency's brand identity and client touchpoints.",
  },
  {
    title: "Travel Agent Back-End Support",
    icon: Headphones,
    desc: "An outsourced visa operations team handling embassy updates, paperwork verification, and query resolution.",
  },
  {
    title: "Bulk Application Processing",
    icon: FileStack,
    desc: "Robust processing capacity for corporate tours, student batches, and large tourist groups.",
  },
  {
    title: "Group Visa Documentation",
    icon: Users,
    desc: "Batch appointment scheduling, unified dossier compilation, and coordination for group departures.",
  },
  {
    title: "Visa Case Preparation",
    icon: FileCheck2,
    desc: "Detailed drafting of cover letters, itineraries, and sponsor guarantees tailored to client profiles.",
  },
  {
    title: "Application Tracking",
    icon: SearchCheck,
    desc: "Real-time updates at every stage of the consular or VFS submission workflow.",
  },
  {
    title: "Partner Agency Support",
    icon: Layers,
    desc: "Preferential partner tariffs, monthly invoicing options, and priority operational escalation.",
  },
];

const ADVANTAGES = [
  "No operational overhead: expand your service catalog without hiring dedicated visa staff.",
  "7+ years visa operations expertise across 100+ worldwide destinations.",
  "Strict data privacy, non-disclosure protection, and transparent pricing structure.",
  "Direct phone & WhatsApp escalation channels for urgent client travel dates.",
];

export default function B2BServicesPage() {
  return (
    <div className="bg-white pt-22">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-navy/[0.035] py-16 md:py-20 lg:py-24 border-b border-navy/10">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs sm:text-sm font-bold tracking-widest uppercase text-accent mb-4">
                <Sparkles className="size-3.5" />
                <span>AGENCY-TO-AGENCY PARTNERSHIPS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-4">
                B2B Travel Agent Support & Visa Processing
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Empower your travel agency with dependable back-end visa operations, white-label case preparation, and bulk processing support for 100+ countries.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <OpenApplyButton
                  initialService="B2B Travel Agent Support"
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 text-sm font-bold shadow-sm cursor-pointer"
                >
                  <span>Partner With TRAVECO</span>
                  <ArrowRight className="size-4 ml-2" />
                </OpenApplyButton>

                <a
                  href="https://wa.me/918850201321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-navy/15 bg-white px-7 text-sm font-semibold text-navy whitespace-nowrap shrink-0 transition-all hover:border-accent hover:text-accent shadow-2xs"
                >
                  <MessageCircle className="size-4 text-accent" />
                  <span>WhatsApp for B2B Rates</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs bg-navy/5">
                <Image
                  src="/images/about/airport_terminal.jpg"
                  alt="TRAVECO B2B Travel Agent Partnerships"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. B2B SERVICES GRID */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2">
              OUR B2B CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Comprehensive visa back-end for your travel desk.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Whether you are an independent travel agent, tour operator, or corporate travel consultant, we manage the intricate visa details so you can focus on selling packages.
            </p>
          </div>

          {/* 8 B2B Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {B2B_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[1.75rem] border border-navy/10 bg-navy/[0.02] p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-5">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY PARTNER WITH TRAVECO */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                <Award className="size-3.5" />
                <span>AGENCY ADVANTAGES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-6">
                Why partner your agency with TRAVECO?
              </h2>
              <div className="space-y-4">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-navy/10 bg-white p-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-sm font-semibold text-navy leading-relaxed">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2rem] border border-navy/10 bg-white p-8 sm:p-10 shadow-xs text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Start Your Agency Partnership Today
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed">
                  Get in touch with our founder and operations team for B2B contract onboarding, tariff sheets, and dedicated account management.
                </p>
                <div className="flex flex-col sm:flex-row gap-3.5 w-full justify-center">
                  <OpenApplyButton
                    initialService="B2B Travel Agent Support"
                    variant="secondary"
                    className="h-12 px-8 text-sm font-bold shadow-xs cursor-pointer"
                  >
                    Inquire for B2B Rates
                  </OpenApplyButton>
                  <Button asChild variant="outline" className="h-12 px-6 text-sm font-semibold border-navy/15 text-navy hover:border-accent hover:text-accent">
                    <Link href="/about">About TRAVECO</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRE-FOOTER CTA */}
      <PreFooterCTA
        eyebrow="READY TO EXPAND YOUR SERVICES?"
        title="Deliver reliable global visa solutions to your clients."
        description="Partner with TRAVECO Mobility for agency-grade visa processing and dedicated back-end operations."
      />
    </div>
  );
}
