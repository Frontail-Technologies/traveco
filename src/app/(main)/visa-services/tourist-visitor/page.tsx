import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Tourist & Visitor Visa | TRAVECO Mobility",
  description: "Professional visa documentation and application assistance for tourists and visitors.",
};

export default function TouristVisitorVisaPage() {
  return (
    <ServiceLayout
      eyebrow="TOURIST & VISITOR VISA"
      title="Travel with clearer preparation."
      description="Assistance for leisure, family visits and short-term travel documentation."
      heroImage="/images/services/tourist.jpg"
      bestFor={[
        "Holidays",
        "Family Visits",
        "Short Stays",
        "Visitor Travel",
      ]}
      howWeAssist={[
        "Document Review",
        "Application Form Support",
        "Cover Letter Guidance",
        "Itinerary Structuring",
        "Appointment Guidance",
        "Status Updates",
      ]}
      documentCategories={[
        "Passport",
        "Photos",
        "Application Form",
        "Cover Letter",
        "Flight Itinerary",
        "Accommodation",
        "Financial Proof",
        "Employment / Business Proof",
        "Travel Insurance",
        "Invitation (if applicable)",
      ]}
    />
  );
}
