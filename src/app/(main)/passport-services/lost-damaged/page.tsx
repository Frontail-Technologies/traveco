import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Lost or Damaged Passport Guidance | TRAVECO Mobility",
  description:
    "Structured assistance for lost, stolen, or damaged passports, including police complaint documentation, Annexure 'F' preparation, and re-issue filing.",
};

export default function LostDamagedPassportPage() {
  return (
    <ServiceLayout
      eyebrow="LOST / DAMAGED PASSPORT GUIDANCE"
      title="Recover and replace your lost or damaged passport."
      description="Clear step-by-step guidance to report lost or damaged passport booklets, prepare statutory declarations, and file for duplicate re-issue."
      heroImage="/images/passport/lost.jpg"
      ctaButtonText="Replace Lost / Damaged Passport"
      bestFor={[
        "Lost or Misplaced Passport Booklets",
        "Stolen Indian Passports",
        "Torn, Soiled, or Water-Damaged Booklets",
        "Damaged Chip / Lamination Issues",
      ]}
      howWeAssist={[
        "Case Analysis & Loss Circumstance Classification",
        "Police Complaint (FIR / Lost Report) Filing Guidance",
        "Annexure 'F' (Statutory Affidavit) Drafting",
        "Online Duplicate Re-issue Application Filing",
        "PSK Appointment Slot Booking",
        "Enquiry & RPO Clearance Guidance",
      ]}
      documentCategories={[
        "Police Lost Document Report / FIR Original Copy",
        "Annexure 'F' Affidavit stating how passport was lost/damaged",
        "Photocopy of Lost Passport (First & Last pages, if available)",
        "Proof of Current Address (Aadhaar, Utility Bill, Bank Statement)",
        "Proof of Date of Birth & Identity Proofs",
        "Damaged Passport Booklet in original (if damaged)",
      ]}
      considerations={[
        "A formal Police Lost Report or FIR is strictly required before applying for a duplicate passport in lost cases.",
        "If a damaged passport has legible details and valid visa pages, it is treated under damaged category with lesser scrutiny.",
        "Re-issue in lost cases is subject to verification against the national passport database and mandatory police verification.",
      ]}
      ctaTitle="Lost or damaged your passport?"
      ctaDescription="Don't stress. Our documentation consultants will prepare all affidavits and FIR compliance files for you."
    />
  );
}
