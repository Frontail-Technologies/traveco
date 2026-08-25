import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Work & Employment Visa | TRAVECO Mobility",
  description: "Professional assistance for skilled workers and professionals with secured overseas employment.",
};

export default function WorkVisaPage() {
  return (
    <ServiceLayout
      eyebrow="WORK & EMPLOYMENT VISA"
      title="Navigate global career opportunities."
      description="Guidance on documentation requirements for skilled workers, intracompany transferees, and professionals with secured overseas employment."
      heroImage="/images/hero/hero_travel_documents.jpg"
      whatItsFor={
        <>
          <p>
            A Work or Employment Visa is required for individuals who have secured a job offer or are being transferred by their current employer to work in a foreign country.
          </p>
          <p>
            These visas are strictly tied to a sponsoring employer and require extensive documentation proving the applicant's qualifications and the legitimacy of the employment offer. Depending on the country, the employer often needs to secure preliminary approval or labor certification before the applicant can apply for the visa.
          </p>
        </>
      }
      howWeAssist={[
        "Review of employment contracts and sponsorship letters",
        "Assistance with organizing professional and educational qualifications",
        "Document formatting and structuring",
        "Guidance on apostille or document legalization requirements (if applicable)",
        "Application form preparation",
        "Appointment scheduling and biometric support",
      ]}
      documentCategories={[
        "Valid Passport & Photographs",
        "Official Employment Contract or Job Offer",
        "Approved Work Permit / Labor Certification (from employer)",
        "Sponsorship or Invitation Letter",
        "Educational Degrees and Transcripts",
        "Professional Certifications",
        "Detailed Resume / CV",
        "Police Clearance Certificate (if required)",
        "Medical Examination Report (if required)",
      ]}
      process={[
        {
          title: "Consultation & Document Strategy",
          description: "We review your employment offer and outline the specific requirements for your destination country.",
        },
        {
          title: "Document Review",
          description: "Thorough verification of your qualifications, contracts, and employer approvals.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with filling out required employment visa application forms accurately.",
        },
        {
          title: "Submission Support",
          description: "Guidance on submission logistics and biometrics appointments.",
        },
        {
          title: "Application Update",
          description: "Tracking your application status to ensure a smooth transition to your new role.",
        },
      ]}
      considerations={[
        "TRAVECO Mobility assists with the visa application process. We are not a recruitment agency and cannot find employment for you.",
        "Your employer must provide valid and approved sponsorship documents before a work visa application can be initiated.",
        "Ensure your educational and professional documents meet the specific legalization requirements (e.g., Apostille) of the destination country.",
      ]}
    />
  );
}
