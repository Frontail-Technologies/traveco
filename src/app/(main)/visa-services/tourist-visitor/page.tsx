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
      description="Professional assistance for individuals and families traveling for tourism, visiting relatives, or short-term medical treatment."
      heroImage="/images/services/tourist.jpg"
      whatItsFor={
        <>
          <p>
            A Tourist or Visitor Visa is designed for individuals traveling temporarily to another country for leisure, tourism, visiting family and friends, or for short-term medical treatment.
          </p>
          <p>
            This visa strictly prohibits engaging in paid employment or long-term studies. Authorities look for strong ties to your home country and sufficient financial means to support yourself during your stay, ensuring you will return before the visa expires.
          </p>
        </>
      }
      howWeAssist={[
        "Comprehensive document review and organization",
        "Assistance with application form preparation",
        "Guidance on drafting effective cover letters",
        "Itinerary and supporting document structuring",
        "Appointment scheduling guidance",
        "Application status updates where applicable",
      ]}
      documentCategories={[
        "Valid Passport",
        "Passport-sized Photographs",
        "Completed Application Form",
        "Detailed Cover Letter",
        "Flight Itinerary",
        "Proof of Accommodation",
        "Financial Evidence (Bank Statements, ITR)",
        "Proof of Employment / Business",
        "Travel Insurance (if required)",
        "Invitation Letter (if visiting family/friends)",
      ]}
      process={[
        {
          title: "Consultation",
          description: "We evaluate your travel purpose, profile, and destination requirements to determine the correct application strategy.",
        },
        {
          title: "Document Review",
          description: "Detailed review of your collected documents to ensure they meet the specific standards of the destination consulate.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with filling out required forms accurately and structuring your application packet.",
        },
        {
          title: "Submission Support",
          description: "Guidance on how and where to submit your application, including biometrics appointments if required.",
        },
        {
          title: "Application Update",
          description: "Tracking your application status and providing updates as they become available from the embassy or VFS.",
        },
      ]}
      considerations={[
        "Visa decisions and processing times are entirely at the discretion of the embassy or consulate.",
        "Providing forged or misleading documents will result in immediate rejection and potential travel bans.",
        "Financial stability and strong ties to your home country are the most critical factors for visitor visa approval.",
        "Apply well in advance of your intended travel date to account for processing delays.",
      ]}
    />
  );
}
