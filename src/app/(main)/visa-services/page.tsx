import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export const metadata: Metadata = {
  title: "Visa Services | TRAVECO Mobility",
  description:
    "Professional visa documentation and application assistance across common tourist, business, student, transit, and Schengen visa requirements.",
};

const SERVICES = [
  {
    id: "tourist-visitor",
    title: "Tourist & Visitor Visa",
    slug: "tourist-visitor",
    description:
      "Documentation and application support for individuals and families traveling for tourism, visiting relatives, or short-term leisure.",
    image: "/images/services/tourist.jpg",
  },
  {
    id: "business",
    title: "Business Visa",
    slug: "business",
    description:
      "Structured assistance for professionals attending conferences, meetings, trade fairs, or engaging in short-term commercial activities abroad.",
    image: "/images/services/business.jpg",
  },
  {
    id: "student",
    title: "Student Visa",
    slug: "student",
    description:
      "Comprehensive visa application support for students pursuing academic degrees, language courses, or exchange programs internationally.",
    image: "/images/services/student.jpg",
  },
  {
    id: "transit",
    title: "Transit Visa",
    slug: "transit",
    description:
      "Assistance with short-duration transit visas required for passing through foreign airports en route to your final destination.",
    image: "/images/services/transit.jpg",
  },
  {
    id: "schengen",
    title: "Schengen Visa",
    slug: "schengen",
    description:
      "Unified application preparation for the Schengen Area, covering tourist, business, and visiting family/friends categories across European countries.",
    image: "/images/services/schengen.jpg",
  },
  {
    id: "medical",
    title: "Medical Visa",
    slug: "tourist-visitor",
    description:
      "Documentation guidance for overseas medical treatment, patient attendants, hospital invitation letters, and medical clearance.",
    image: "/images/destinations/singapore.jpg",
  },
  {
    id: "family",
    title: "Family / Dependent Visa",
    slug: "tourist-visitor",
    description:
      "Support for spouse, child, or parent visit and dependent applications, including sponsorship proofs and relationship certificates.",
    image: "/images/about/hero_consultation.jpg",
  },
  {
    id: "conference",
    title: "Conference / Event Visa",
    slug: "business",
    description:
      "Visa documentation for delegates attending international summits, exhibitions, academic conferences, and cultural events.",
    image: "/images/about/airport_terminal.jpg",
  },
  {
    id: "evisa",
    title: "eVisa / ETA",
    slug: "tourist-visitor",
    description:
      "Rapid electronic visa and Electronic Travel Authorization processing for eligible destinations with digital submission assistance.",
    image: "/images/hero/hero_travel_documents.jpg",
  },
  {
    id: "voa",
    title: "Visa-on-Arrival Guidance",
    slug: "tourist-visitor",
    description:
      "Pre-departure documentation checks, required fees, and eligibility verification for international destinations offering visa-on-arrival.",
    image: "/images/hero/hero_city_skyline.jpg",
  },
];

export default function VisaServicesHub() {
  return (
    <div className="bg-white pt-22">
      {/* HERO SECTION */}
      <section className="w-full bg-navy/[0.035] py-16 md:py-20 lg:py-24 border-b border-navy/10">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-[50%]">
              <p className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-3">
                VISA SERVICES
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.08] tracking-tight mb-4">
                Visa assistance for every kind of journey.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                TRAVECO provides documentation and application assistance across common tourist, business, student, transit and Schengen visa requirements.
              </p>
            </div>

            <div className="lg:w-[50%] w-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs">
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

      {/* VISA SERVICES GRID */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-[2rem] border border-navy/10 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Link
                  href={`/visa-services/${service.slug}`}
                  className="relative aspect-16/10 w-full overflow-hidden block bg-navy/5"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={`/visa-services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-navy transition-colors mt-auto"
                  >
                    <span>View Service Details</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATE PASSPORT SERVICES SECTION / CARD */}
      <section className="pb-16 md:pb-20 lg:pb-24 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-muted/20 p-8 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                  <Sparkles className="size-3.5" />
                  <span>Separate Service Category</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-3">
                  Passport Services
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                  For new passport, renewal, re-issue and supporting document guidance.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button asChild variant="secondary" className="h-12 px-8 text-sm font-bold shadow-sm w-full sm:w-auto">
                  <Link href="/passport-services" className="inline-flex items-center justify-center gap-2">
                    <span>Explore Passport Services</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <PreFooterCTA
        eyebrow="READY TO APPLY?"
        title="Need help choosing the right visa category?"
        description="Our consultants will review your travel purpose and guide you to the correct application requirements."
      />
    </div>
  );
}
