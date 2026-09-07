import { Metadata } from "next";
import { PassportServicesContent } from "@/components/passport/passport-services-content";

export const metadata: Metadata = {
  title: "Passport Services & Assistance | TRAVECO Mobility",
  description:
    "Get professional guidance for passport applications, renewals, re-issue and supporting documentation with TRAVECO Mobility.",
};

export default function PassportServicesPage() {
  return <PassportServicesContent />;
}
