import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { PreFooterCTA } from "@/components/pre-footer-cta";
import { cn } from "@/lib/utils";

export interface ServiceLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  whatItsFor: React.ReactNode;
  howWeAssist: string[];
  documentCategories: string[];
  process: { title: string; description: string }[];
  considerations: string[];
}

export function ServiceLayout({
  eyebrow,
  title,
  description,
  heroImage,
  whatItsFor,
  howWeAssist,
  documentCategories,
  process,
  considerations,
}: ServiceLayoutProps) {
  return (
    <div className="bg-background pt-22">
      {/* 1. SERVICE HERO */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-[50%]">
              <p className="text-(--traveco-primary,#0B1F3A)/50 text-[11px] font-bold tracking-widest uppercase mb-4">
                {eyebrow}
              </p>
              <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium text-navy leading-[1.05] tracking-tight mb-6">
                {title}
              </h1>
              <p className="text-(--traveco-primary)/70 text-[16px] md:text-[18px] leading-[1.7] max-w-xl">
                {description}
              </p>
            </div>
            
            <div className="lg:w-[50%] w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[16px] bg-background">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT BLOCK */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
              
              {/* 2. WHAT THIS VISA IS FOR */}
              <div>
                <h2 className="text-[28px] md:text-[32px] font-medium text-navy mb-6">
                  What this visa is for
                </h2>
                <div className="text-(--traveco-primary)/80 text-[16px] leading-[1.75] space-y-4">
                  {whatItsFor}
                </div>
              </div>

              {/* 4. COMMON DOCUMENT CATEGORIES */}
              <div>
                <h2 className="text-[28px] md:text-[32px] font-medium text-navy mb-6">
                  Common Document Categories
                </h2>
                <p className="text-(--traveco-primary)/80 text-[16px] leading-[1.75] mb-8">
                  Depending on the destination and the applicant's specific circumstances, commonly requested documents may include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documentCategories.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-[12px] shadow-sm border border-(--traveco-primary)/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-[15px] text-(--traveco-primary)/80 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/document-checklist" className="inline-flex items-center text-[15px] font-bold text-navy hover:text-accent transition-colors">
                    Check requirements by destination <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 5. PROCESS */}
              <div>
                <h2 className="text-[28px] md:text-[32px] font-medium text-navy mb-10">
                  Our Application Process
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-2.75 before:w-0.5 before:bg-(--traveco-primary)/10">
                  {process.map((step, idx) => (
                    <div key={idx} className="relative flex gap-6">
                      <div className="w-6 h-6 rounded-full bg-white border-[3px] border-navy shadow-sm shrink-0 mt-0.5 z-10" />
                      <div>
                        <h3 className="text-[18px] font-bold text-navy mb-2">
                          {step.title}
                        </h3>
                        <p className="text-(--traveco-primary)/70 text-[15px] leading-[1.6]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 6. IMPORTANT CONSIDERATIONS */}
              <div className="bg-navy rounded-[16px] p-8 md:p-10 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-accent" />
                  <h3 className="text-[20px] font-bold">Important Considerations</h3>
                </div>
                <ul className="space-y-4">
                  {considerations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                      <span className="text-[15px] text-white/80 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                {/* 3. HOW TRAVECO CAN ASSIST */}
                <div className="bg-white rounded-[16px] p-8 shadow-sm border border-(--traveco-primary)/5 mb-8">
                  <h3 className="text-[18px] font-bold text-navy mb-6">
                    How TRAVECO can assist
                  </h3>
                  <ul className="space-y-4">
                    {howWeAssist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-[14.5px] text-(--traveco-primary)/80 leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-(--traveco-primary)/10">
                    <Link href="/contact" className="flex items-center justify-center w-full h-12 bg-navy text-white rounded-[10px] font-bold text-[14px] hover:bg-(--traveco-primary)/90 transition-colors">
                      Get Assistance
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER CTA */}
      <div className="pb-16 md:pb-24 bg-background">
        <PreFooterCTA 
          eyebrow="READY TO START?"
          title="Begin your visa application today."
          description="Contact TRAVECO Mobility for professional assistance with your documentation and application preparation."
        />
      </div>
    </div>
  );
}
