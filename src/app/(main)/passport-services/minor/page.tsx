import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Minor Passport Assistance | TRAVECO Mobility",
  description:
    "Expert documentation guidance for child and minor passport applications, parental consent declarations, and appointment preparation.",
};

export default function MinorPassportPage() {
  return (
    <ServiceLayout
      eyebrow="MINOR PASSPORT ASSISTANCE"
      title="Hassle-free passport processing for children & infants."
      description="Dedicated guidance for new passport applications and renewals for minors below 18 years of age with complete parental documentation support."
      heroImage="/images/passport/minor.jpg"
      ctaButtonText="Apply for Minor Passport"
      bestFor={[
        "Infants & Newborns",
        "Children Below 15 Years (5-Yr Validity)",
        "Minors 15-18 Years (10-Yr Validity Option)",
        "Single-Parent / Separated Custody Cases",
      ]}
      howWeAssist={[
        "Minor Category Classification & Validity Review",
        "Online Application Form Preparation",
        "Annexure 'C' / 'D' Parental Consent Structuring",
        "Parents' Passport Verification Checks",
        "PSK Appointment Booking & Family Slot Sync",
        "Step-by-Step Biometrics & Photo Guidelines",
      ]}
      documentCategories={[
        "Child's Original Birth Certificate (Municipal Authority / Registrar)",
        "Parents' Passports (Original + Self-Attested Photocopies)",
        "Proof of Address in Parent's Name",
        "Annexure 'D' (Consent by both parents) or Annexure 'C' (Single parent)",
        "School ID / Letterhead (if enrolled)",
        "Recent White Background Passport Photographs (for infants under 4 years)",
      ]}
      considerations={[
        "Presence of both parents or a legally attested consent Annexure is mandatory at the Passport Seva Kendra.",
        "Minors below 15 years are issued 5-year validity passports; minors between 15-18 years can opt for 10-year validity by paying adult fees.",
        "Passports for minors are non-ECR by default.",
      ]}
      ctaTitle="Planning international travel with your child?"
      ctaDescription="Ensure all parental consent declarations and birth documents are error-free before visiting the PSK."
    />
  );
}
