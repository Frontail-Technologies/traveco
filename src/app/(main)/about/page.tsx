import * as React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Check, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export const metadata: Metadata = {
  title: "About Us | TRAVECO Mobility",
  description: "Learn about TRAVECO Mobility, our founder Sandeep Kamlesh Jaiswar, and our approach to visa operations and global travel guidance.",
};

export default function AboutPage() {
  return (
    <div className="bg-background pt-22">

      {/* 1. ABOUT PAGE HERO */}
      <section className="bg-background py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* TEXT SIDE */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <p className="text-accent text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-4">
                ABOUT TRAVECO
              </p>
              <h1 className="text-navy text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[1.1] tracking-tight mb-6" data-scroll="fade-up">
                Visa guidance built around clarity, documentation and trust.
              </h1>
              <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[1.6] max-w-xl mb-8" data-scroll="fade-up">
                TRAVECO Mobility helps travellers prepare visa documentation and understand the application process with clear guidance, careful review and practical support.
              </p>

              {/* CREDIBILITY STRIP */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-6 text-[14px] text-navy font-medium mb-10 pb-10 border-b border-border w-full max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">7+ Years</span>
                  <span className="text-muted-foreground">Visa Operations</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border shrink-0 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">100+</span>
                  <span className="text-muted-foreground">Countries Exposure</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border shrink-0 hidden md:block" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">2,000+</span>
                  <span className="text-muted-foreground">Applications Supported</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button asChild variant="default" size="lg" className="w-full sm:w-auto text-[15px]">
                  <Link href="/contact">Get Visa Assistance</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-[15px] border-border text-navy">
                  <Link href="/visa-services">View Visa Services</Link>
                </Button>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="order-1 lg:order-2 w-full max-w-[600px] mx-auto lg:max-w-none">
              <div className="relative aspect-[4/3] xl:aspect-[5/4] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/about/hero_consultation.jpg"
                  alt="Professional visa consultation"
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

      {/* 3. COMPANY STORY SECTION */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
            <div className="lg:w-[50%] order-2 lg:order-1">
              <p className="text-(--traveco-primary,#0B1F3A)/50 text-[11px] font-bold tracking-widest uppercase mb-4">
                OUR APPROACH
              </p>
              <h2 className="text-(--traveco-primary,#0B1F3A) text-[32px] md:text-[42px] font-medium leading-[1.1] tracking-tight mb-8" data-scroll="fade-up">
                Visa assistance should feel clear, not complicated.
              </h2>
              <div className="text-(--traveco-primary,#0B1F3A)/75 text-[16px] md:text-[17px] leading-[1.7] flex flex-col gap-5" data-scroll="fade-up">
                <p>
                  TRAVECO exists to help travellers understand exactly what is required before they submit an application to the authorities.
                </p>
                <p>
                  Our assistance typically includes documentation review, comprehensive application preparation, destination-specific guidance, and appointment coordination. We ensure that every supporting document is structured to present the clearest possible case.
                </p>
                <p>
                  We aim to remove the guesswork from international travel preparation, providing practical assistance for both straightforward and complex travel itineraries.
                </p>
              </div>
            </div>

            {/* 4. SECOND GENERATED IMAGE */}
            <div className="lg:w-[50%] order-1 lg:order-2">
              <div className="relative aspect-16/10 sm:aspect-4/3 w-full overflow-hidden rounded-[16px] shadow-sm">
                <Image
                  src="/images/about/document_workspace.jpg"
                  alt="Premium travel document workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER SECTION */}
      <section className="bg-white py-20 md:py-28 lg:py-32 border-y border-(--traveco-primary)/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-stretch">
            <div className="lg:w-[45%] xl:w-[40%] shrink-0 relative">
              <div className="lg:sticky lg:top-30">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-[16px] bg-background">
                  {/* 6. CLEAN FOUNDER IMAGE */}
                  <Image
                    src="/images/about/founder_cleaned.jpg"
                    alt="Sandeep Kamlesh Jaiswar - Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[center_top]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] xl:w-[60%]">
              <div className="mb-8">
                <h3 className="text-[28px] md:text-[36px] font-bold text-(--traveco-primary,#0B1F3A) mb-2 tracking-tight">
                  Sandeep Kamlesh Jaiswar
                </h3>
                <p className="text-[15px] font-bold text-accent uppercase tracking-widest">
                  Founder & Global Visa Consultant
                </p>
              </div>

              {/* 7. FOUNDER COPY */}
              <div className="text-(--traveco-primary,#0B1F3A)/80 text-[16px] md:text-[18px] leading-[1.7] flex flex-col gap-6 mb-12">
                <p>
                  With 7+ years of hands-on visa operations experience, Sandeep has worked across visa processing for 100+ countries, covering tourist, business, student, work and transit applications. His experience spans UAE & GCC, Schengen, UK, USA, Canada, Australia, Asia-Pacific and African destinations.
                </p>
                <p>
                  Before building TRAVECO Mobility, he worked with Musafir.com and Explorer Travels, handling documentation review, online application filing, appointment coordination, visa-centre processes and client communication.
                </p>
                <p>
                  Today, his focus through TRAVECO is to combine practical visa-operations experience with clear, personalized guidance for travellers and travel partners.
                </p>
              </div>

              {/* 8. CREDIBILITY STRIP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 py-8 border-y border-(--traveco-primary)/10 mb-16">
                <div className="flex flex-col border-l border-accent/40 pl-4">
                  <span className="text-[32px] font-bold text-(--traveco-primary,#0B1F3A) leading-none mb-1">7+ YEARS</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Experience</span>
                  <span className="text-[13px] text-(--traveco-primary)/60 font-medium">Visa Operations</span>
                </div>
                <div className="flex flex-col border-l border-accent/40 pl-4">
                  <span className="text-[32px] font-bold text-(--traveco-primary,#0B1F3A) leading-none mb-1">100+</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Countries</span>
                  <span className="text-[13px] text-(--traveco-primary)/60 font-medium">Global Exposure</span>
                </div>
                <div className="flex flex-col border-l border-accent/40 pl-4 sm:col-span-2 md:col-span-1">
                  <span className="text-[32px] font-bold text-(--traveco-primary,#0B1F3A) leading-none mb-1">2,000+</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1">Applications</span>
                  <span className="text-[13px] text-(--traveco-primary)/60 font-medium">UAE Operations (2023-24)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 10. EXPERTISE SECTION */}
      <section className="py-20 md:py-28 lg:py-32 bg-background">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] md:text-[38px] font-medium text-(--traveco-primary,#0B1F3A) tracking-tight">
              Experience across major global visa systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-t border-(--traveco-primary)/10 pt-6">
              <h4 className="text-[18px] font-bold text-navy mb-6">Major Destinations</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "UAE & GCC", href: "/document-checklist/united-arab-emirates-uae" },
                  { label: "Schengen Area", href: "/document-checklist/schengen-countries" },
                  { label: "United Kingdom", href: "/document-checklist/united-kingdom" },
                  { label: "United States", href: "/document-checklist/united-states-of-america" },
                  { label: "Canada", href: "/document-checklist/canada" },
                  { label: "Australia", href: "/document-checklist/australia" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      className="group flex items-center justify-between text-[16px] text-navy/80 font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors py-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-110 transition-transform" />
                        {item.label}
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-(--traveco-primary)/10 pt-6">
              <h4 className="text-[18px] font-bold text-navy mb-6">Wider Coverage</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Asia-Pacific", href: "/document-checklist?region=asia", ariaLabel: "Browse Asia-Pacific visa routes in the destination directory" },
                  { label: "Africa", href: "/document-checklist?region=africa", ariaLabel: "Browse African visa routes in the destination directory" },
                  { label: "International tourist routes", href: "/visa-services/tourist-visitor", ariaLabel: undefined },
                  { label: "Business visitor routes", href: "/visa-services/business", ariaLabel: undefined },
                  { label: "Transit visa handling", href: "/visa-services/transit", ariaLabel: undefined }
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      aria-label={item.ariaLabel}
                      className="group flex items-center justify-between text-[16px] text-navy/80 font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors py-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-110 transition-transform" />
                        {item.label}
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-(--traveco-primary)/10 pt-6">
              <h4 className="text-[18px] font-bold text-navy mb-6">Operational Experience</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "VFS Global workflows", href: null },
                  { label: "BLS International systems", href: null },
                  { label: "TLScontact processes", href: null },
                  { label: "Online embassy portals", href: null },
                  { label: "Document review", href: "/#process" },
                  { label: "Application preparation", href: "/#process" },
                  { label: "Appointment coordination", href: "/#process" }
                ].map((item, i) => (
                  <li key={i}>
                    {item.href ? (
                      <Link 
                        href={item.href}
                        className="group flex items-center justify-between text-[16px] text-navy/80 font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors py-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-110 transition-transform" />
                          {item.label}
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 text-[16px] text-navy/80 font-medium py-1">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {item.label}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. THIRD GENERATED IMAGE (Airport Terminal) */}
      <div className="w-full h-75 md:h-125 lg:h-150 relative">
        <Image
          src="/images/about/airport_terminal.jpg"
          alt="International travel and mobility"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 12. WORKING PHILOSOPHY */}
      <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-muted-foreground">
              HOW WE WORK
            </p>
            <h2 className="text-[32px] md:text-[42px] font-medium text-(--traveco-primary,#0B1F3A) tracking-tight">
              Clear guidance at every stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-(--traveco-primary)/10 pt-6">
              <span className="text-accent font-bold text-[18px] block mb-4">01</span>
              <h4 className="text-[18px] font-bold text-navy mb-3">Understand the Requirement</h4>
              <p className="text-[15px] leading-relaxed text-(--traveco-primary)/70">
                Start with destination, travel purpose and applicant circumstances.
              </p>
            </div>
            <div className="border-t-2 border-(--traveco-primary)/10 pt-6">
              <span className="text-accent font-bold text-[18px] block mb-4">02</span>
              <h4 className="text-[18px] font-bold text-navy mb-3">Prepare Carefully</h4>
              <p className="text-[15px] leading-relaxed text-(--traveco-primary)/70">
                Review and organize documentation before submission.
              </p>
            </div>
            <div className="border-t-2 border-(--traveco-primary)/10 pt-6">
              <span className="text-accent font-bold text-[18px] block mb-4">03</span>
              <h4 className="text-[18px] font-bold text-navy mb-3">Communicate Clearly</h4>
              <p className="text-[15px] leading-relaxed text-(--traveco-primary)/70">
                Explain requirements, next steps and relevant process information.
              </p>
            </div>
            <div className="border-t-2 border-(--traveco-primary)/10 pt-6">
              <span className="text-accent font-bold text-[18px] block mb-4">04</span>
              <h4 className="text-[18px] font-bold text-navy mb-3">Support the Journey</h4>
              <p className="text-[15px] leading-relaxed text-(--traveco-primary)/70">
                Provide practical assistance throughout the applicable visa process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <PreFooterCTA showContactDetails={true} />

    </div>
  );
}
