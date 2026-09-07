import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Passport Services | TRAVECO Mobility",
  description:
    "Passport application, renewal, re-issue and supporting document assistance by TRAVECO Mobility.",
};

export default function PassportServicesPage() {
  return (
    <ServiceLayout
      eyebrow="PASSPORT SERVICES"
      title="Passport assistance made simpler."
      description="Assistance for passport applications, renewals, re-issue and supporting documentation."
      heroImage="/images/services/passport.jpg"
      ctaButtonText="Get Passport Assistance"
      ctaTitle="Need assistance with your passport application?"
      ctaDescription="Get in touch with TRAVECO Mobility for document review, form guidance, and next-step preparation."
      bestFor={[
        "New Passport",
        "Passport Renewal",
        "Passport Re-issue",
        "Address / Detail Updates",
        "Lost or Damaged Passport Guidance",
        "Supporting Document Assistance",
      ]}
      howWeAssist={[
        "Document Review",
        "Application Form Guidance",
        "Appointment Guidance",
        "Supporting Document Preparation",
        "Status / Next-step Guidance",
      ]}
      documentCategories={[
        "Proof of Identity (Aadhaar / Voter ID / PAN)",
        "Proof of Address (Utility Bills / Bank Statement)",
        "Proof of Date of Birth (Birth Certificate / School Leaving)",
        "Previous Passport (For renewal / re-issue)",
        "Passport Photographs (As per specifications)",
        "Supporting Annexures / Affidavits (if required)",
      ]}
      considerations={[
        "Passport application approval, appointment availability and final decisions depend on the relevant passport authority.",
        "Documentation requirements may vary based on applicant category, previous passport history, and jurisdictional rules.",
        "TRAVECO Mobility assists with document organization and process guidance; official authorities retain sole discretion for all passport issuances.",
      ]}
    />
  );
}
