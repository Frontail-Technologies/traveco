import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Schengen Visa Assistance | TRAVECO Mobility",
  description: "Unified application preparation for the Schengen Area across 27 European countries.",
};

export default function SchengenVisaPage() {
  return (
    <ServiceLayout
      eyebrow="SCHENGEN VISA"
      title="One visa. 27 European countries."
      description="Unified application preparation for travel across Europe, covering tourism, business, and family visits."
      heroImage="/images/services/schengen.jpg"
      bestFor={[
        "Europe Travel",
        "Schengen Documents",
        "Appointment Support",
        "Multi-country Itinerary",
      ]}
      howWeAssist={[
        "Embassy Jurisdiction Strategy",
        "Day-by-Day Itinerary Structuring",
        "Unified Schengen Form Filing",
        "Hotel & Insurance Review",
        "VFS / TLS / BLS Appointment Guidance",
        "Application Tracking",
      ]}
      documentCategories={[
        "Passport & Photos",
        "Schengen Application Form",
        "Detailed Cover Letter & Itinerary",
        "Round-trip Flight Reservations",
        "Proof of Accommodation",
        "Travel Medical Insurance (€30k)",
        "Financial Proof (Bank & ITR)",
        "Employment / Leave Approval",
      ]}
    />
  );
}
