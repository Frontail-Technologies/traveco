import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Disclaimer | TRAVECO Mobility",
  description: "Important legal disclaimers regarding TRAVECO Mobility services.",
};

const SECTIONS = [
  { id: "independence", title: "1. Independent Consultancy" },
  { id: "visa-decisions", title: "2. Visa Decisions & Processing" },
  { id: "information-accuracy", title: "3. Accuracy of Information" },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      lastUpdated="January 15, 2026"
      sections={SECTIONS}
    >
      <section id="independence">
        <h2>1. Independent Consultancy</h2>
        <p>
          <strong>TRAVECO Mobility is a private, independent consultancy firm.</strong> 
        </p>
        <p>
          We provide professional assistance, consultation, and document preparation services for international visa applications. We are <strong>not</strong> affiliated with, endorsed by, or representing any government, embassy, consulate, immigration department, or official visa processing center (such as VFS Global, BLS International, or TLScontact).
        </p>
        <p>
          Applicants can independently apply for visas directly through the respective official embassy or government websites without using a consultancy service. Our professional fees are charged strictly for the expertise, time, and administrative support we provide to simplify the process for our clients.
        </p>
      </section>

      <section id="visa-decisions">
        <h2>2. Visa Decisions & Processing</h2>
        <p>
          The issuance or denial of a visa, the processing timeframe, and the validity period granted are entirely at the discretion of the respective embassy or consulate.
        </p>
        <p>
          TRAVECO Mobility has no influence over the decision-making process of any government authority and cannot guarantee visa approval. We do not guarantee specific turnaround times, as processing times vary by consulate and applicant profile. Any timelines provided by us are estimates based on standard historical processing times.
        </p>
      </section>

      <section id="information-accuracy">
        <h2>3. Accuracy of Information</h2>
        <p>
          While we strive to keep the information and document checklists on our website (traveco.in) up to date, immigration policies, visa requirements, and embassy fees are subject to change without prior notice. 
        </p>
        <p>
          TRAVECO Mobility accepts no liability for any delays, financial losses, or travel disruptions caused by sudden changes in government policy or discrepancies in the information provided.
        </p>
      </section>
    </LegalLayout>
  );
}
