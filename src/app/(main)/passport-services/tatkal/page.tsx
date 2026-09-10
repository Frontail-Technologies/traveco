import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Tatkal Passport Assistance | TRAVECO Mobility",
  description:
    "Fast-track Tatkal passport assistance for urgent travel requirements, emergency travel documentation, and expedited PSK appointment scheduling.",
};

export default function TatkalPassportPage() {
  return (
    <ServiceLayout
      eyebrow="TATKAL PASSPORT ASSISTANCE"
      title="Fast-track urgent passport processing."
      description="Expedited guidance for urgent travel commitments, immediate appointment slots, and prioritized document readiness."
      heroImage="/images/passport/tatkal.jpg"
      ctaButtonText="Get Tatkal Assistance"
      bestFor={[
        "Urgent International Travel",
        "Emergency Medical Travel Abroad",
        "Short-Notice Business Trips",
        "Upcoming Visa Filing Deadlines",
      ]}
      howWeAssist={[
        "Tatkal Scheme Eligibility Assessment",
        "Fast-Track Application Form Filing",
        "Mandatory 3-Document Set Preparation",
        "Priority PSK / POPSK Appointment Slot Booking",
        "Urgent Police Verification Guidance",
        "Fast-Track Dispatch Tracking",
      ]}
      documentCategories={[
        "Standard Identity Proof (Aadhaar Card with full DOB)",
        "PAN Card or Voter ID Card (Matching Details)",
        "Bank Passbook with photo (Scheduled/Nationalized Bank)",
        "Proof of Urgency / Travel Ticket (where applicable)",
        "Existing Passport (for renewal/re-issue cases)",
        "Educational Qualification Proof (for Non-ECR)",
      ]}
      considerations={[
        "Tatkal scheme requires strict adherence to MEA eligibility and specific document combinations (e.g. Aadhaar + PAN + Voter/Bank proof).",
        "Passports under Tatkal are dispatched on a Post-Police Verification basis, allowing expedited dispatch within 1-3 business days upon PSK approval.",
        "Final approval under the Tatkal scheme rests with the Granting Officer at the Passport Seva Kendra.",
      ]}
      ctaTitle="Travelling on short notice?"
      ctaDescription="Get your Tatkal documentation audited instantly and secure the earliest possible appointment."
    />
  );
}
