import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "New Passport Application Assistance | TRAVECO Mobility",
  description:
    "End-to-end guidance for fresh Indian passport applications, online registration, required document checklist, and appointment scheduling.",
};

export default function NewPassportPage() {
  return (
    <ServiceLayout
      eyebrow="NEW PASSPORT APPLICATION"
      title="Fresh passport guidance from start to finish."
      description="Step-by-step assistance for first-time applicants, from online registration to document verification and PSK appointment booking."
      heroImage="/images/passport/new.jpg"
      ctaButtonText="Apply for New Passport"
      bestFor={[
        "First-Time Applicants",
        "Adult Indian Citizens",
        "Students & Job Seekers",
        "Frequent International Travellers",
      ]}
      howWeAssist={[
        "Eligibility & Scheme Review (Normal / Tatkal)",
        "Online Application Filing & Form Submission",
        "Document Verification & Proof Collation",
        "Passport Seva Kendra (PSK) Appointment Booking",
        "Police Verification (PV) Guidance",
        "Status Tracking & Dispatch Support",
      ]}
      documentCategories={[
        "Proof of Present Address (Aadhaar, Utility Bill, Bank Passbook)",
        "Proof of Date of Birth (Birth Certificate, 10th Certificate, PAN)",
        "Educational Qualification Certificates (for Non-ECR)",
        "Identity Proof (Voter ID, Driving License, PAN Card)",
        "Recent Passport-size Photographs (if required)",
        "Annexure Declarations (if applicable)",
      ]}
      considerations={[
        "Official passport issuance and police verification are conducted by the Ministry of External Affairs (MEA) and Regional Passport Office.",
        "Ensure all identity proofs have matching spellings for applicant name and parents' names.",
        "Non-ECR status requires minimum 10th standard pass certificate or qualifying educational proofs.",
      ]}
      ctaTitle="Ready to apply for your new passport?"
      ctaDescription="Get expert document verification and smooth appointment booking with our consultants."
    />
  );
}
