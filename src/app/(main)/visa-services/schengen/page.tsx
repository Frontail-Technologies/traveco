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
      description="Unified application preparation for the Schengen Area, covering tourist, business, and visiting family/friends categories across Europe."
      heroImage="/images/destinations/europe.jpg"
      whatItsFor={
        <>
          <p>
            The Schengen Visa is a short-stay visa that allows a person to travel to any member of the Schengen Area, per stay up to 90 days for tourism or business purposes. It eliminates internal border controls across 27 European countries.
          </p>
          <p>
            You must apply through the consulate of the country you intend to visit. If visiting multiple Schengen states, you must apply to the embassy of the country where you will spend the most days, or the country of first entry if the duration of stay is equal.
          </p>
        </>
      }
      howWeAssist={[
        "Determining the correct Schengen embassy for your application",
        "Detailed review of your European travel itinerary",
        "Assistance with the unified Schengen application form",
        "Guidance on complex multi-country travel plans",
        "Review of financial documents and sponsor letters",
        "Appointment scheduling assistance",
      ]}
      documentCategories={[
        "Valid Passport (issued within last 10 years, valid for 3+ months beyond return)",
        "Schengen Visa Photographs",
        "Completed Schengen Application Form",
        "Detailed Cover Letter & Day-by-Day Itinerary",
        "Round-trip Flight Reservations",
        "Proof of Accommodation across all Schengen states",
        "Travel Medical Insurance (minimum coverage €30,000)",
        "Proof of Financial Means (Bank statements, ITR)",
        "Proof of Employment / Leave Approval",
      ]}
      process={[
        {
          title: "Itinerary & Embassy Strategy",
          description: "We review your multi-country travel plans to ensure you apply at the legally correct embassy.",
        },
        {
          title: "Document Review",
          description: "Rigorous check of your itinerary, hotel bookings, and insurance to ensure full Schengen compliance.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with filling out the complex Schengen application accurately.",
        },
        {
          title: "Submission Support",
          description: "Guidance on VFS/TLS/BLS appointments and biometrics collection.",
        },
        {
          title: "Application Update",
          description: "Tracking your application status until passport collection.",
        },
      ]}
      considerations={[
        "All Schengen states enforce strict documentation rules. Even minor discrepancies in hotel dates or flight names can result in rejection.",
        "Travel medical insurance is mandatory and must clearly state coverage across all Schengen Member States.",
        "While requirements are unified in theory, individual member states may request additional supporting documents based on your profile.",
      ]}
    />
  );
}
