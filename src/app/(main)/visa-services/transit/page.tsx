import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Transit Visa | TRAVECO Mobility",
  description: "Assistance with short-duration transit visas required for passing through foreign airports.",
};

export default function TransitVisaPage() {
  return (
    <ServiceLayout
      eyebrow="TRANSIT VISA"
      title="Smooth connections worldwide."
      description="Assistance with short-duration transit visas for international airport transfers and layovers."
      heroImage="/images/services/transit.jpg"
      bestFor={[
        "Airport Transit",
        "Connecting Travel",
        "Transit Documentation",
        "Layover Support",
      ]}
      howWeAssist={[
        "Layover Itinerary Evaluation",
        "Destination Visa Verification",
        "Transit Application Support",
        "Document Structuring",
        "Expedited Filing Guidance",
      ]}
      documentCategories={[
        "Passport & Photographs",
        "Final Destination Visa",
        "Confirmed Onward Flight Tickets",
        "Completed Transit Application",
        "Proof of Sufficient Funds",
        "Hotel Booking (if overnight stay)",
      ]}
    />
  );
}
