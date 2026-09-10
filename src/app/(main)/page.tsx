import { HeroSection } from "@/components/home/hero-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { VisaServicesSection } from "@/components/home/visa-services-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { AboutFounderSection } from "@/components/home/about-founder-section";
import { MoreWaysSection } from "@/components/home/more-ways-section";
import { EnquirySection } from "@/components/home/enquiry-section";
import { FaqSection } from "@/components/home/faq-section";
import { PreFooterCTA } from "@/components/pre-footer-cta";
import { JsonLd } from "@/components/json-ld";
import { faqData } from "@/data/faq";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <main className="bg-background text-foreground">
        {/* 1. Hero with simple finder */}
        <HeroSection />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Visa & Passport Services (Max 6 curated cards) */}
        <VisaServicesSection />

        {/* 4. Popular Destinations */}
        <DestinationsSection />

        {/* 5. How It Works */}
        <ProcessSection />

        {/* 6. Why TRAVECO */}
        <WhyChooseSection />

        {/* 7. Founder Profile */}
        <AboutFounderSection />

        {/* 8. More Ways We Can Help (Compact 3 cards) */}
        <MoreWaysSection />

        {/* 9. Plan Your Journey Form */}
        <EnquirySection />

        {/* 10. FAQs */}
        <FaqSection />

        {/* 11. Pre-Footer CTA */}
        <PreFooterCTA />
      </main>
    </>
  );
}
