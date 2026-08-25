import { HeroSection } from "@/components/home/hero-section";
import { VisaServicesSection } from "@/components/home/visa-services-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { ProcessSection } from "@/components/home/process-section";
import { DocumentAssistanceSection } from "@/components/home/document-assistance-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { AboutFounderSection } from "@/components/home/about-founder-section";
import { FaqSection } from "@/components/home/faq-section";
import { EnquirySection } from "@/components/home/enquiry-section";
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
        <HeroSection />
        {/* <PricingStatementSection /> */}
        <VisaServicesSection />
        <DestinationsSection />
        <ProcessSection />
        <DocumentAssistanceSection />
        <WhyChooseSection />
        <AboutFounderSection />
        <EnquirySection />
        <FaqSection />
        <PreFooterCTA />
      </main>
    </>
  );
}
