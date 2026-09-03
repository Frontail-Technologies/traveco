import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Student Visa | TRAVECO Mobility",
  description: "Comprehensive visa application support for international students pursuing academic programs abroad.",
};

export default function StudentVisaPage() {
  return (
    <ServiceLayout
      eyebrow="STUDENT VISA"
      title="Focus on your future, not the paperwork."
      description="Comprehensive visa documentation and application assistance for international education."
      heroImage="/images/services/student.jpg"
      bestFor={[
        "Study Abroad",
        "Admission Support",
        "Student Documents",
        "Application Guidance",
      ]}
      howWeAssist={[
        "Acceptance Document Verification",
        "Financial Proof Structuring",
        "SOP Review & Alignment",
        "Application Form Support",
        "Interview Preparation Guidance",
        "Pre-Departure Checklist",
      ]}
      documentCategories={[
        "Passport & Photos",
        "University Acceptance Letter",
        "Financial Proof & Sponsorship",
        "Academic Transcripts & Degrees",
        "Language Proficiency Scores",
        "Statement of Purpose (SOP)",
        "Proof of Accommodation",
        "Student Health Insurance",
      ]}
    />
  );
}
