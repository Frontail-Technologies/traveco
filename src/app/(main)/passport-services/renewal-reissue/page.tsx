import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Passport Renewal & Re-issue Assistance | TRAVECO Mobility",
  description:
    "Seamless passport renewal and re-issue guidance for expired validity, exhausted pages, damaged booklet, or address change.",
};

export default function PassportRenewalReissuePage() {
  return (
    <ServiceLayout
      eyebrow="PASSPORT RENEWAL & RE-ISSUE"
      title="Renew your expired or exhausted passport smoothly."
      description="Quick and hassle-free assistance for passport renewals, page exhaustion, and re-issue with accurate document structuring."
      heroImage="/images/passport/renewal.jpg"
      ctaButtonText="Renew Your Passport"
      bestFor={[
        "Expiring within 1 Year",
        "Expired Validity Passports",
        "Exhausted Visa Pages",
        "Change in Personal Particulars",
      ]}
      howWeAssist={[
        "Existing Passport Record Check",
        "Re-issue Scheme Selection (Normal / Tatkal)",
        "Application Form Preparation & Submission",
        "Old Passport Self-Attestation Review",
        "PSK Appointment Slot Booking",
        "Application Status Tracking",
      ]}
      documentCategories={[
        "Original Old Passport with Self-Attested Photocopies",
        "First & Last Two Pages Copy (ECR/Non-ECR page included)",
        "Proof of Current Address (if address has changed)",
        "Relevant Annexure / Affidavit (if applicable)",
        "Valid Identity Proof (Aadhaar, PAN, Voter ID)",
        "Supporting Documents for any Data Modification",
      ]}
      considerations={[
        "Passport renewal can be initiated up to 1 year before expiry or anytime after expiration.",
        "Your old booklet is cancelled and returned safely to you upon new passport issuance.",
        "Ensure there are no unresolved impounding or adverse police verification remarks on the previous passport.",
      ]}
      ctaTitle="Need to renew your passport quickly?"
      ctaDescription="Let our specialists verify your paperwork and book your appointment slot without delays."
    />
  );
}
