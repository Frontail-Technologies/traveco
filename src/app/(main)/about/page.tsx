import * as React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PreFooterCTA } from "@/components/pre-footer-cta";

export const metadata: Metadata = {
  title: "About Us | TRAVECO Mobility",
  description: "Learn about TRAVECO Mobility, our founder Sandeep Kamlesh Jaiswar, and our approach to visa operations and global travel guidance.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pt-22">

      {/* 1. ABOUT PAGE HERO */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* TEXT SIDE */}
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <p className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-3">
                ABOUT TRAVECO
              </p>
              <h1 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight mb-6">
                Visa guidance built around clarity, documentation and trust.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                TRAVECO Mobility helps travellers prepare visa documentation and understand the application process with clear guidance, careful review and practical support.
              </p>

              {/* CREDIBILITY STRIP */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-6 text-sm text-navy font-semibold mb-10 pb-8 border-b border-navy/10 w-full max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">7+ Years</span>
                  <span className="text-muted-foreground font-medium">Visa Operations</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-navy/20 shrink-0 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">100+</span>
                  <span className="text-muted-foreground font-medium">Countries Exposure</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-navy/20 shrink-0 hidden md:block" />
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">2,000+</span>
                  <span className="text-muted-foreground font-medium">Applications Supported</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto text-sm font-bold shadow-sm">
                  <Link href="/#contact">Get Visa Assistance</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm font-semibold border-navy/15 text-navy hover:border-accent hover:text-accent">
                  <Link href="/visa-services">View Visa Services</Link>
                </Button>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="order-1 lg:order-2 w-full max-w-[600px] mx-auto lg:max-w-none">
              <div className="relative aspect-[4/3] xl:aspect-[5/4] w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs">
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

      {/* 2. COMPANY STORY SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-white border-t border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
            <div className="lg:w-[50%] order-2 lg:order-1">
              <p className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-3">
                OUR APPROACH
              </p>
              <h2 className="text-navy text-3xl sm:text-4xl font-bold leading-[1.08] tracking-tight mb-6">
                Visa assistance should feel clear, not complicated.
              </h2>
              <div className="text-muted-foreground text-base leading-relaxed flex flex-col gap-4">
                <p>
                  TRAVECO exists to help travellers understand exactly what is required before they submit an application to the authorities.
                </p>
                <p>
                  Our assistance includes documentation review, comprehensive application preparation, destination-specific guidance, and appointment coordination. We ensure every supporting document is structured to present the clearest possible case.
                </p>
                <p>
                  We aim to remove the guesswork from international travel preparation, providing practical assistance for both straightforward and complex travel itineraries.
                </p>
              </div>
            </div>

            {/* SECOND IMAGE */}
            <div className="lg:w-[50%] order-1 lg:order-2">
              <div className="relative aspect-16/10 sm:aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs">
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

      {/* 3. FOUNDER SECTION */}
      <section className="bg-white py-16 md:py-20 lg:py-24 border-y border-navy/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
            <div className="lg:w-[42%] shrink-0">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] border border-navy/10 shadow-xs">
                <Image
                  src="/images/about/founder_cleaned.jpg"
                  alt="Sandeep Kamlesh Jaiswar - Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_top]"
                />
              </div>
            </div>

            <div className="lg:w-[58%]">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  Founder Profile
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                  Sandeep Kamlesh Jaiswar
                </h3>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                  Founder & Global Visa Consultant
                </p>
              </div>

              <div className="text-muted-foreground text-base leading-relaxed flex flex-col gap-4 mb-8">
                <p>
                  With 7+ years of hands-on visa operations experience, Sandeep has worked across visa processing for 100+ countries, covering tourist, business, student, work and transit applications. His experience spans UAE & GCC, Schengen, UK, USA, Canada, Australia, Asia-Pacific and African destinations.
                </p>
                <p>
                  Before building TRAVECO Mobility, he worked with Musafir.com and Explorer Travels, handling documentation review, online application filing, appointment coordination, visa-centre processes and client communication.
                </p>
              </div>

              {/* CREDIBILITY STATS */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-8">
                <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-bold text-navy leading-none block mb-1.5">7+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years Exp.</span>
                </div>
                <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-bold text-navy leading-none block mb-1.5">100+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Countries</span>
                </div>
                <div className="rounded-[1.25rem] bg-muted/40 p-4 sm:p-5 border border-navy/5 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-bold text-navy leading-none block mb-1.5">2,000+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-accent mb-2">
              GLOBAL REACH
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Experience across major global visa systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="border-t border-navy/10 pt-6">
              <h4 className="text-lg font-bold text-navy mb-5">Major Destinations</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "UAE & GCC", href: "/document-checklist" },
                  { label: "Schengen Area", href: "/visa-services/schengen" },
                  { label: "United Kingdom", href: "/document-checklist" },
                  { label: "United States", href: "/document-checklist" },
                  { label: "Canada", href: "/document-checklist" },
                  { label: "Australia", href: "/document-checklist" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      className="group flex items-center justify-between text-base text-navy font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors py-1"
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

            <div className="border-t border-navy/10 pt-6">
              <h4 className="text-lg font-bold text-navy mb-5">Wider Coverage</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Asia-Pacific", href: "/document-checklist", ariaLabel: undefined },
                  { label: "Africa", href: "/document-checklist", ariaLabel: undefined },
                  { label: "International tourist routes", href: "/visa-services/tourist-visitor", ariaLabel: undefined },
                  { label: "Business visitor routes", href: "/visa-services/business", ariaLabel: undefined },
                  { label: "Transit visa handling", href: "/visa-services/transit", ariaLabel: undefined }
                ].map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href}
                      aria-label={item.ariaLabel}
                      className="group flex items-center justify-between text-base text-navy font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors py-1"
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

            <div className="border-t border-navy/10 pt-6">
              <h4 className="text-lg font-bold text-navy mb-5">Operational Experience</h4>
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
                        className="group flex items-center justify-between text-base text-navy font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors py-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-110 transition-transform" />
                          {item.label}
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 text-base text-navy font-medium py-1">
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

      {/* 5. AIRPORT IMAGE BANNER */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] relative">
        <Image
          src="/images/about/airport_terminal.jpg"
          alt="International travel and mobility"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 6. WORKING PHILOSOPHY */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase mb-3 text-accent">
              HOW WE WORK
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Clear guidance at every stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-xs">
              <span className="text-accent font-bold text-lg block mb-3">01</span>
              <h4 className="text-lg font-bold text-navy mb-2">Understand Requirements</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Start with destination, travel purpose and applicant circumstances.
              </p>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-xs">
              <span className="text-accent font-bold text-lg block mb-3">02</span>
              <h4 className="text-lg font-bold text-navy mb-2">Prepare Carefully</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Review and organize documentation before submission.
              </p>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-xs">
              <span className="text-accent font-bold text-lg block mb-3">03</span>
              <h4 className="text-lg font-bold text-navy mb-2">Communicate Clearly</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explain requirements, next steps and relevant process information.
              </p>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-xs">
              <span className="text-accent font-bold text-lg block mb-3">04</span>
              <h4 className="text-lg font-bold text-navy mb-2">Support the Journey</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Provide practical assistance throughout the applicable visa process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA */}
      <PreFooterCTA showContactDetails={true} />
    </div>
  );
}
