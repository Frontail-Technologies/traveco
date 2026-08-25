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
      description="Comprehensive visa application support for students pursuing academic degrees, language courses, or exchange programs internationally."
      heroImage="/images/services/student.jpg"
      whatItsFor={
        <>
          <p>
            A Student Visa is issued to applicants who have been accepted into a recognized educational institution in a foreign country. Whether for a short-term language course, a full degree program, or a student exchange, securing the correct visa is the final crucial step in your educational journey.
          </p>
          <p>
            Student visa applications are heavily scrutinized for genuine intent to study and the financial capability to pay for tuition and living expenses without relying on unauthorized employment.
          </p>
        </>
      }
      howWeAssist={[
        "Review of university acceptance documents (CAS, I-20, COE, etc.)",
        "Guidance on structuring educational and financial evidence",
        "Assistance with student application forms",
        "Review of Statement of Purpose (SOP)",
        "Appointment scheduling and interview preparation guidance",
        "Dependent visa assistance (if applicable)",
      ]}
      documentCategories={[
        "Valid Passport & Photographs",
        "Official Acceptance Letter / Certificate of Enrollment",
        "Proof of Sufficient Financial Funds",
        "Educational Transcripts and Certificates",
        "Language Proficiency Test Results (IELTS, TOEFL)",
        "Statement of Purpose (SOP)",
        "Proof of Accommodation",
        "Student Health Insurance / Cover",
        "Sponsorship Documents (if funded by parents/others)",
      ]}
      process={[
        {
          title: "Consultation & Document Strategy",
          description: "We review your university acceptance and outline the exact financial and academic documents required.",
        },
        {
          title: "Document Review",
          description: "Thorough verification of your financial statements, sponsor letters, and academic records to ensure compliance with consulate standards.",
        },
        {
          title: "Application Preparation",
          description: "Assistance with the often complex student visa application forms.",
        },
        {
          title: "Submission & Interview Prep",
          description: "Guidance on submission logistics and basic preparation for potential consulate interviews.",
        },
        {
          title: "Application Update",
          description: "Tracking your application status to ensure you arrive on campus in time.",
        },
      ]}
      considerations={[
        "Financial documentation is the most common reason for student visa rejection. Funds must be clearly sourced, accessible, and sufficient.",
        "Your Statement of Purpose (SOP) must clearly articulate why you chose the specific course, institution, and country.",
        "Visa processing times peak during summer months; apply as early as your acceptance documents allow.",
      ]}
    />
  );
}
