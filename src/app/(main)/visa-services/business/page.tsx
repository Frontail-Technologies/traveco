import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Business Visa | TRAVECO Mobility",
  description: "Professional visa documentation and application assistance for business travelers and professionals.",
};

export default function BusinessVisaPage() {
  return (
    <ServiceLayout
      eyebrow="BUSINESS VISA"
      title="Seamless borders for global business."
      description="Assistance for professionals attending meetings, conferences, trade visits and commercial activities abroad."
      heroImage="/images/services/business.jpg"
      bestFor={[
        "Meetings",
        "Conferences",
        "Trade Visits",
        "Corporate Travel",
      ]}
      howWeAssist={[
        "Invitation Letter Review",
        "Dispatch Letter Guidance",
        "Corporate Financial Structuring",
        "Application Form Support",
        "Appointment Scheduling",
        "Status Tracking",
      ]}
      documentCategories={[
        "Passport & Photos",
        "Application Form",
        "Host Invitation Letter",
        "Employer Dispatch Letter",
        "Company Registration",
        "Corporate Financials",
        "Personal Financials",
        "Flight & Hotel Docs",
        "Conference Registration (if applicable)",
      ]}
    />
  );
}
