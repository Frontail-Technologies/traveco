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
      description="Assistance with short-duration transit visas required for passing through foreign airports en route to your final destination."
      heroImage="/images/hero/hero_airport_terminal.jpg"
      whatItsFor={
        <>
          <p>
            A Transit Visa allows you to pass through a country's airport or territory while en route to a third destination. Depending on your nationality, the layout of the airport, and the duration of your layover, you may need a transit visa even if you never leave the international transit area.
          </p>
          <p>
            Requirements vary significantly by country. Some countries offer visa-free transit for certain nationalities, while others require formal applications weeks in advance.
          </p>
        </>
      }
      howWeAssist={[
        "Assessment of transit visa requirements based on your itinerary and nationality",
        "Review of onward travel documentation",
        "Assistance with transit visa application forms",
        "Document organization and structuring",
        "Expedited processing guidance (where available)",
      ]}
      documentCategories={[
        "Valid Passport & Photographs",
        "Valid Visa for Final Destination (if required)",
        "Confirmed Onward Flight Tickets",
        "Completed Transit Visa Application",
        "Proof of Sufficient Funds for Transit Duration",
        "Hotel Booking (if transit involves an overnight stay)",
      ]}
      process={[
        {
          title: "Itinerary Review",
          description: "We evaluate your flight connections to determine if a transit visa is legally required.",
        },
        {
          title: "Document Review",
          description: "Verification of your onward tickets and final destination visa.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with filling out the required transit application forms.",
        },
        {
          title: "Submission Support",
          description: "Guidance on submission logistics, whether e-Visa or physical application.",
        },
      ]}
      considerations={[
        "Always confirm transit visa requirements before booking your flights, especially if traveling on separate tickets or low-cost carriers.",
        "A transit visa generally does not permit you to leave the airport unless explicitly stated (e.g., a transit visa that allows a brief hotel stay).",
        "Having a valid visa for your final destination is usually a strict prerequisite for a transit visa approval.",
      ]}
    />
  );
}
