import { HeroSection } from "@/components/home/hero-section";
import { HeroStatsSection } from "@/components/home/hero-stats-section";
import { VisaServicesSection } from "@/components/home/visa-services-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { AboutFounderSection } from "@/components/home/about-founder-section";
import { MoreWaysSection } from "@/components/home/more-ways-section";
import { EnquirySection } from "@/components/home/enquiry-section";
import { FaqSection } from "@/components/home/faq-section";
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

        {/* 2. Stats Section (3 Animated Stat Boxes) */}
        <HeroStatsSection />

        {/* 3. Visa & Passport Services (Max 6 curated cards) */}
        <VisaServicesSection />

        {/* 3. Popular Destinations */}
        <DestinationsSection />

        {/* 4. How It Works */}
        <ProcessSection />

        {/* 5. Why TRAVECO */}
        <WhyChooseSection />

        {/* 6. Founder Profile */}
        <AboutFounderSection />

        {/* 7. More Ways We Can Help (Compact 3 cards) */}
        <MoreWaysSection />

        {/* 8. Plan Your Journey Form */}
        <EnquirySection />

        {/* 9. FAQs */}
        <FaqSection />
      </main>
    </>
  );
}
