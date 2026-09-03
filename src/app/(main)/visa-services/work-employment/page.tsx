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
      description="Guidance on documentation requirements for skilled workers, intra-company transferees, and professionals."
      heroImage="/images/services/work.jpg"
      bestFor={[
        "Employment Documents",
        "Work Permit Support",
        "Employer-Sponsored Travel",
        "Professional Relocation",
      ]}
      howWeAssist={[
        "Employment Contract Verification",
        "Work Permit / Sponsor Review",
        "Qualification Structuring",
        "Legalization / Apostille Guidance",
        "Application Form Preparation",
        "Biometric & Appointment Guidance",
      ]}
      documentCategories={[
        "Passport & Photos",
        "Job Offer / Contract",
        "Work Permit / Labor Approval",
        "Employer Sponsorship Letter",
        "Degrees & Transcripts",
        "Professional CV / Resume",
        "Police Clearance Certificate",
        "Medical Examination Report",
      ]}
    />
  );
}
