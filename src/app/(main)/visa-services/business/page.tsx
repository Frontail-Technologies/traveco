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
      description="Structured assistance for professionals attending conferences, meetings, trade fairs, or engaging in short-term commercial activities abroad."
      heroImage="/images/services/business.jpg"
      whatItsFor={
        <>
          <p>
            A Business Visa allows professionals to travel internationally for short-term commercial activities. This includes attending business meetings, negotiating contracts, attending trade shows, or participating in conferences.
          </p>
          <p>
            Importantly, a business visa does <strong>not</strong> permit the holder to enter the local labor market or receive a salary from an employer within the destination country. The focus of the application is proving the commercial purpose of the trip and the financial backing of your employer.
          </p>
        </>
      }
      howWeAssist={[
        "Review of company invitation and dispatch letters",
        "Assistance with application form preparation",
        "Guidance on aligning personal and corporate financial documents",
        "Document organization and structuring",
        "Appointment scheduling guidance",
        "Application status updates where applicable",
      ]}
      documentCategories={[
        "Valid Passport & Photographs",
        "Completed Application Form",
        "Invitation Letter from Host Company",
        "Dispatch/Cover Letter from Employer",
        "Company Registration Documents",
        "Corporate Financial Evidence",
        "Personal Financial Evidence",
        "Flight Itinerary & Accommodation",
        "Conference Registration (if applicable)",
      ]}
      process={[
        {
          title: "Consultation",
          description: "We evaluate your business purpose and ensure the correct visa category is selected.",
        },
        {
          title: "Document Review",
          description: "Detailed review of your corporate and personal documents, ensuring invitation and dispatch letters align perfectly.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with filling out required forms accurately and structuring your business application packet.",
        },
        {
          title: "Submission Support",
          description: "Guidance on application submission and biometrics appointments.",
        },
        {
          title: "Application Update",
          description: "Tracking your application status with the embassy or consulate.",
        },
      ]}
      considerations={[
        "The invitation letter from the host company must clearly state the purpose, duration, and financial responsibilities of the trip.",
        "Visa decisions and processing times are entirely at the discretion of the embassy or consulate.",
        "Ensure your employer's dispatch letter matches the exact dates and purpose mentioned by the inviting company.",
      ]}
    />
  );
}
