import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Briefcase, GraduationCap, Building2, Plane, Map } from "lucide-react";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export const metadata: Metadata = {
  title: "Visa Services | TRAVECO Mobility",
  description: "Professional visa documentation and application assistance across common tourist, business, student, work, transit, and Schengen visa requirements.",
};

const SERVICES = [
  {
    id: "tourist-visitor",
    title: "Tourist & Visitor Visa",
    slug: "tourist-visitor",
    description: "Documentation and application support for individuals and families traveling for tourism, visiting relatives, or short-term medical treatment.",
    icon: Plane,
  },
  {
    id: "business",
    title: "Business Visa",
    slug: "business",
    description: "Structured assistance for professionals attending conferences, meetings, trade fairs, or engaging in short-term commercial activities abroad.",
    icon: Briefcase,
  },
  {
    id: "student",
    title: "Student Visa",
    slug: "student",
    description: "Comprehensive visa application support for students pursuing academic degrees, language courses, or exchange programs internationally.",
    icon: GraduationCap,
  },
  {
    id: "work-employment",
    title: "Work & Employment Visa",
    slug: "work-employment",
    description: "Guidance on documentation requirements for skilled workers, intracompany transferees, and professionals with secured overseas employment.",
    icon: Building2,
  },
  {
    id: "transit",
    title: "Transit Visa",
    slug: "transit",
    description: "Assistance with short-duration transit visas required for passing through foreign airports en route to your final destination.",
    icon: Map,
  },
  {
    id: "schengen",
    title: "Schengen Visa",
    slug: "schengen",
    description: "Unified application preparation for the Schengen Area, covering tourist, business, and visiting family/friends categories across 27 European countries.",
    icon: FileText,
  },
];

export default function VisaServicesHub() {
  return (
    <div className="bg-[#F7F5EF] pt-22">
      {/* HERO SECTION */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-[50%]">
              <p className="text-(--traveco-navy,#0B1F3A)/50 text-[11px] font-bold tracking-widest uppercase mb-4">
                VISA SERVICES
              </p>
              <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium text-traveco-navy leading-[1.05] tracking-tight mb-6">
                Visa assistance for every kind of journey.
              </h1>
              <p className="text-(--traveco-navy)/70 text-[16px] md:text-[18px] leading-[1.7] max-w-xl">
                TRAVECO provides documentation and application assistance across common tourist, business, student, work, transit and Schengen visa requirements.
              </p>
            </div>
            
            <div className="lg:w-[50%] w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[16px] bg-[#F7F5EF]">
                <Image
                  src="/images/hero/hero_travel_documents.jpg"
                  alt="Premium travel documents and visa applications"
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

      {/* SERVICES LIST - EDITORIAL */}
      <section className="py-20 md:py-28 lg:py-32 border-t border-(--traveco-navy)/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="flex flex-col group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-(--traveco-navy)/30 font-medium text-[14px]">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-px bg-(--traveco-navy)/10" />
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-[12px] bg-white border border-(--traveco-navy)/10 flex items-center justify-center shrink-0 shadow-sm group-hover:border-traveco-gold transition-colors">
                      <Icon className="w-5 h-5 text-traveco-navy" />
                    </div>
                    <div>
                      <h3 className="text-[22px] md:text-[26px] font-medium text-traveco-navy mb-4">
                        {service.title}
                      </h3>
                      <p className="text-(--traveco-navy)/70 text-[15px] leading-[1.65] mb-6">
                        {service.description}
                      </p>
                      <Link 
                        href={`/visa-services/${service.slug}`}
                        className="inline-flex items-center text-[14px] font-bold text-traveco-navy hover:text-traveco-gold transition-colors"
                      >
                        Learn More <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="pb-16 md:pb-24 pt-8 bg-[#F7F5EF]">
        <PreFooterCTA 
          eyebrow="READY TO APPLY?"
          title="Start your visa application process today."
          description="Let us handle the documentation complexity while you focus on your travel plans."
        />
      </div>
    </div>
  );
}
