import { HeroSection } from "@/components/home/hero-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { VisaServicesSection } from "@/components/home/visa-services-section";
import { DocumentationServicesSection } from "@/components/home/documentation-services-section";
import { VisaRefusalSection } from "@/components/home/visa-refusal-section";
import { BusinessCorporateSection } from "@/components/home/business-corporate-section";
import { TravelSupportSection } from "@/components/home/travel-support-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { ProcessSection } from "@/components/home/process-section";
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
        <TrustStrip />
        <VisaServicesSection />
        <DocumentationServicesSection />
        <VisaRefusalSection />
        <BusinessCorporateSection />
        <TravelSupportSection />
        <DestinationsSection />
        <ProcessSection />
        <WhyChooseSection />
        <AboutFounderSection />
        <EnquirySection />
        <FaqSection />
        <PreFooterCTA />
      </main>
    </>
  );
}
