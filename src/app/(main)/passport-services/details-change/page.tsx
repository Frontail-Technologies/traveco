import { Metadata } from "next";
import { ServiceLayout } from "@/components/services/service-layout";

export const metadata: Metadata = {
  title: "Passport Details Change Assistance | TRAVECO Mobility",
  description:
    "Documentation assistance for changing name, adding or removing spouse name, updating address, or correcting DOB on your Indian passport.",
};

export default function PassportDetailsChangePage() {
  return (
    <ServiceLayout
      eyebrow="PASSPORT PARTICULARS CHANGE"
      title="Update and correct your passport details accurately."
      description="Comprehensive guidance to update your address, add/remove spouse name, correct spelling discrepancies, or record post-marriage name change."
      heroImage="/images/passport/update.jpg"
      ctaButtonText="Update Passport Details"
      bestFor={[
        "Address Change / Relocation",
        "Post-Marriage Name Change",
        "Adding or Removing Spouse Name",
        "Spelling Correction in Name / Parents' Name",
      ]}
      howWeAssist={[
        "Required Legal Proof Evaluation (Gazette / Marriage / Deed)",
        "Application Form Re-issue Preparation",
        "New Address Proof Verification & Police Jurisdiction Match",
        "PSK Appointment Booking",
        "Supporting Document Collation",
        "Police Verification Next-Step Advice",
      ]}
      documentCategories={[
        "Original Passport with Photocopies",
        "Marriage Certificate / Joint Declaration (for spouse addition / name change)",
        "New Address Proof (Aadhaar, Election Card, Registered Rent Agreement)",
        "Gazette Notification / Newspaper Ads (for major name change)",
        "Birth Certificate / 10th Certificate (for DOB / name correction)",
        "Identity Proof reflecting updated credentials",
      ]}
      considerations={[
        "A change in address requires updated residential proof covering at least the applicant's current period of stay.",
        "Major name changes require a Gazette publication and two prominent newspaper advertisement clippings.",
        "A fresh passport booklet with a new 10-year validity is issued upon any particulars modification.",
      ]}
      ctaTitle="Need to update details on your passport?"
      ctaDescription="Get your documents pre-screened to ensure zero rejections during your PSK appointment."
    />
  );
}
