import * as React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Check, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | TRAVECO Mobility",
  description: "Learn about TRAVECO Mobility, our founder Sandeep Kamlesh Jaiswar, and our approach to visa operations and global travel guidance.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5EF] pt-[88px]">

      {/* 1. ABOUT PAGE HERO */}
      <section className="relative w-full overflow-hidden bg-[#0B1F3A] py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-340 flex-col lg:flex-row items-center gap-12 lg:gap-16 px-5 sm:px-6 lg:px-8">
          <div className="lg:w-[55%] xl:w-[60%] order-2 lg:order-1 relative z-10">
            <p className="text-[var(--traveco-gold,#C5A253)] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-4">
              ABOUT TRAVECO
            </p>
            <h1 className="text-white text-[clamp(40px,5vw,56px)] font-medium leading-[1.05] tracking-tight mb-6">
              Built around clarity, guidance and better travel preparation.
            </h1>
            <div className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-xl flex flex-col gap-5">
              <p>
                TRAVECO Mobility provides visa documentation, application assistance and international travel support for individuals, families, students and business travellers.
              </p>
              <p>
                We focus on helping travellers understand requirements, prepare documentation properly, and navigate the application process more confidently.
              </p>
            </div>
          </div>

          {/* 2. HERO IMAGE */}
          <div className="lg:w-[45%] xl:w-[40%] order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto relative z-10">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px]">
              <Image
                src="/images/about/hero_consultation.jpg"
                alt="Professional visa consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY STORY SECTION */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
            <div className="lg:w-[50%] order-2 lg:order-1">
              <p className="text-[var(--traveco-navy,#0B1F3A)]/50 text-[11px] font-bold tracking-widest uppercase mb-4">
                OUR APPROACH
              </p>
              <h2 className="text-[var(--traveco-navy,#0B1F3A)] text-[32px] md:text-[42px] font-medium leading-[1.1] tracking-tight mb-8">
                Visa assistance should feel clear, not complicated.
              </h2>
              <div className="text-[var(--traveco-navy,#0B1F3A)]/75 text-[16px] md:text-[17px] leading-[1.7] flex flex-col gap-5">
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
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-[16px] shadow-sm">
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
      <section className="bg-white py-20 md:py-28 lg:py-32 border-y border-[var(--traveco-navy)]/5">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-stretch">
            <div className="lg:w-[45%] xl:w-[40%] flex-shrink-0 relative">
              <div className="lg:sticky lg:top-[120px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-[#F7F5EF]">
                  {/* 6. CLEAN FOUNDER IMAGE */}
                  <Image
                    src="/images/about/founder_cleaned.jpg"
                    alt="Sandeep Kamlesh Jaiswar - Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[center_top]"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-[28px] font-bold text-[var(--traveco-navy,#0B1F3A)] mb-1">
                    Sandeep Kamlesh Jaiswar
                  </h3>
                  <p className="text-[15px] font-semibold text-[var(--traveco-navy,#0B1F3A)]/60">
                    Founder & Global Visa Consultant
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] xl:w-[60%]">
              {/* 7. FOUNDER COPY */}
              <div className="text-[var(--traveco-navy,#0B1F3A)]/80 text-[16px] md:text-[18px] leading-[1.7] flex flex-col gap-6 mb-12">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 py-8 border-y border-[var(--traveco-navy)]/10 mb-16">
                <div className="flex flex-col border-l border-[var(--traveco-gold,#C5A253)]/40 pl-4">
                  <span className="text-[32px] font-bold text-[var(--traveco-navy,#0B1F3A)] leading-none mb-1">7+ YEARS</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--traveco-gold,#C5A253)] mb-1">Experience</span>
                  <span className="text-[13px] text-[var(--traveco-navy)]/60 font-medium">Visa Operations</span>
                </div>
                <div className="flex flex-col border-l border-[var(--traveco-gold,#C5A253)]/40 pl-4">
                  <span className="text-[32px] font-bold text-[var(--traveco-navy,#0B1F3A)] leading-none mb-1">100+</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--traveco-gold,#C5A253)] mb-1">Countries</span>
                  <span className="text-[13px] text-[var(--traveco-navy)]/60 font-medium">Global Exposure</span>
                </div>
                <div className="flex flex-col border-l border-[var(--traveco-gold,#C5A253)]/40 pl-4 sm:col-span-2 md:col-span-1">
                  <span className="text-[32px] font-bold text-[var(--traveco-navy,#0B1F3A)] leading-none mb-1">2,000+</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[var(--traveco-gold,#C5A253)] mb-1">Applications</span>
                  <span className="text-[13px] text-[var(--traveco-navy)]/60 font-medium">UAE Operations (2023-24)</span>
                </div>
              </div>

              {/* 9. PROFESSIONAL JOURNEY */}
              <div>
                <p className="text-[var(--traveco-navy,#0B1F3A)]/50 text-[11px] font-bold tracking-widest uppercase mb-4">
                  EXPERIENCE
                </p>
                <h3 className="text-[28px] font-medium text-[var(--traveco-navy,#0B1F3A)] mb-10 tracking-tight">
                  Built through years of hands-on visa operations.
                </h3>

                <div className="flex flex-col gap-10">
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--traveco-navy)]/10 pb-2">
                    <div className="absolute w-3 h-3 bg-[var(--traveco-navy)] rounded-full -left-[7px] top-1.5" />
                    <span className="inline-block px-3 py-1 bg-[var(--traveco-navy)]/5 text-[var(--traveco-navy)] font-semibold text-[13px] rounded-full mb-3">2024 — Present</span>
                    <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-1">Global Visa Consultant</h4>
                    <p className="text-[15px] font-medium text-[var(--traveco-navy)]/60 mb-3">TRAVECO Mobility</p>
                    <ul className="flex flex-col gap-2">
                      {["Independent end-to-end visa operations", "Documentation review & application preparation", "Appointments & biometrics guidance", "Agent & travel-partner coordination", "Refusal & re-application guidance"].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--traveco-navy)]/75">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--traveco-gold)]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--traveco-navy)]/10 pb-2">
                    <div className="absolute w-3 h-3 bg-white border-2 border-[var(--traveco-navy)]/30 rounded-full -left-[7px] top-1.5" />
                    <span className="inline-block px-3 py-1 bg-[var(--traveco-navy)]/5 text-[var(--traveco-navy)] font-semibold text-[13px] rounded-full mb-3">2022 — 2024</span>
                    <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-1">Visa Executive</h4>
                    <p className="text-[15px] font-medium text-[var(--traveco-navy)]/60 mb-3">Musafir.com</p>
                    <ul className="flex flex-col gap-2">
                      {["High-volume tourist and business visa processing", "Schengen, UK, USA, Canada, Australia & GCC exposure", "Financial & employment-document verification", "Visa-centre coordination", "Urgent & priority cases", "Client support"].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--traveco-navy)]/75">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--traveco-navy)]/30" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative pl-6 sm:pl-8 border-l-2 border-transparent">
                    <div className="absolute w-3 h-3 bg-white border-2 border-[var(--traveco-navy)]/30 rounded-full -left-[7px] top-1.5" />
                    <span className="inline-block px-3 py-1 bg-[var(--traveco-navy)]/5 text-[var(--traveco-navy)] font-semibold text-[13px] rounded-full mb-3">2018 — 2022</span>
                    <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-1">Visa Executive</h4>
                    <p className="text-[15px] font-medium text-[var(--traveco-navy)]/60 mb-3">Explorer Travels</p>
                    <ul className="flex flex-col gap-2">
                      {["Singapore visa processing", "Documentation verification", "Online submissions & daily tracking", "Client communication", "Passport & document handling processes"].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-[15px] text-[var(--traveco-navy)]/75">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--traveco-navy)]/30" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EXPERTISE SECTION */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#F7F5EF]">
        <div className="mx-auto max-w-340 px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] md:text-[38px] font-medium text-[var(--traveco-navy,#0B1F3A)] tracking-tight">
              Experience across major global visa systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-t border-[var(--traveco-navy)]/10 pt-6">
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-6">Major Destinations</h4>
              <ul className="flex flex-col gap-3">
                {["UAE & GCC", "Schengen Area", "United Kingdom", "United States", "Canada", "Australia"].map((item, i) => (
                  <li key={i} className="text-[16px] text-[var(--traveco-navy)]/80 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--traveco-gold)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--traveco-navy)]/10 pt-6">
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-6">Wider Coverage</h4>
              <ul className="flex flex-col gap-3">
                {["Asia-Pacific", "Africa", "International tourist routes", "Business visitor routes", "Transit visa handling"].map((item, i) => (
                  <li key={i} className="text-[16px] text-[var(--traveco-navy)]/80 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--traveco-gold)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--traveco-navy)]/10 pt-6">
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-6">Operational Experience</h4>
              <ul className="flex flex-col gap-3">
                {["VFS Global workflows", "BLS International systems", "TLScontact processes", "Online embassy portals", "Document review", "Application preparation", "Appointment coordination"].map((item, i) => (
                  <li key={i} className="text-[16px] text-[var(--traveco-navy)]/80 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--traveco-gold)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. THIRD GENERATED IMAGE (Airport Terminal) */}
      <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative">
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
            <p className="text-[var(--traveco-navy,#0B1F3A)]/50 text-[11px] font-bold tracking-widest uppercase mb-4">
              HOW WE WORK
            </p>
            <h2 className="text-[32px] md:text-[42px] font-medium text-[var(--traveco-navy,#0B1F3A)] tracking-tight">
              Clear guidance at every stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[var(--traveco-navy)]/10 pt-6">
              <span className="text-[var(--traveco-gold)] font-bold text-[18px] block mb-4">01</span>
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-3">Understand the Requirement</h4>
              <p className="text-[15px] leading-relaxed text-[var(--traveco-navy)]/70">
                Start with destination, travel purpose and applicant circumstances.
              </p>
            </div>
            <div className="border-t-2 border-[var(--traveco-navy)]/10 pt-6">
              <span className="text-[var(--traveco-gold)] font-bold text-[18px] block mb-4">02</span>
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-3">Prepare Carefully</h4>
              <p className="text-[15px] leading-relaxed text-[var(--traveco-navy)]/70">
                Review and organize documentation before submission.
              </p>
            </div>
            <div className="border-t-2 border-[var(--traveco-navy)]/10 pt-6">
              <span className="text-[var(--traveco-gold)] font-bold text-[18px] block mb-4">03</span>
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-3">Communicate Clearly</h4>
              <p className="text-[15px] leading-relaxed text-[var(--traveco-navy)]/70">
                Explain requirements, next steps and relevant process information.
              </p>
            </div>
            <div className="border-t-2 border-[var(--traveco-navy)]/10 pt-6">
              <span className="text-[var(--traveco-gold)] font-bold text-[18px] block mb-4">04</span>
              <h4 className="text-[18px] font-bold text-[var(--traveco-navy)] mb-3">Support the Journey</h4>
              <p className="text-[15px] leading-relaxed text-[var(--traveco-navy)]/70">
                Provide practical assistance throughout the applicable visa process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="bg-white pb-16 md:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-340 bg-[#0B1F3A] rounded-[20px] p-8 md:p-12 lg:p-16 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-10 shadow-sm">
          <div className="lg:w-[60%]">
            <p className="text-[var(--traveco-gold,#C5A253)] text-[11px] font-bold tracking-widest uppercase mb-4">
              PLAN YOUR JOURNEY
            </p>
            <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.1] mb-5 tracking-tight">
              Need guidance for your next visa application?
            </h2>
            <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-xl">
              Tell TRAVECO where you're planning to travel and get assistance with documentation and application preparation.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[14px] text-white/80 font-medium">
              <span>+91 88502 01321</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>info@traveco.in</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>Mumbai, India</span>
            </div>
            <p className="text-white/40 text-[12px] mt-4 italic">Usually replies within working hours.</p>
          </div>

          <div className="lg:w-[40%] flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-[var(--traveco-gold)] text-[var(--traveco-navy)] hover:bg-white transition-colors rounded-[10px] h-[52px] px-8 font-bold text-[15px] whitespace-nowrap"
            >
              Get Visa Assistance
            </Link>
            <a
              href="https://wa.me/918850201321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-[10px] h-[52px] px-8 font-bold text-[15px] whitespace-nowrap"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
