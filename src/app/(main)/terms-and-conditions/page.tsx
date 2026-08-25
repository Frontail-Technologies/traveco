import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | TRAVECO Mobility",
  description: "Terms and conditions for using TRAVECO Mobility services.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "nature-of-service", title: "2. Nature of Service" },
  { id: "user-responsibility", title: "3. User Responsibilities" },
  { id: "fees-and-payments", title: "4. Fees and Third-Party Costs" },
  { id: "intellectual-property", title: "5. Intellectual Property" },
  { id: "limitation-liability", title: "6. Limitation of Liability" },
  { id: "governing-law", title: "7. Governing Law" },
];

export default function TermsConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="January 15, 2026"
      sections={SECTIONS}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and TRAVECO Mobility (“we,” “us” or “our”), concerning your access to and use of the traveco.in website as well as any other media form or service connected thereto (collectively, the “Site”).
        </p>
      </section>

      <section id="nature-of-service">
        <h2>2. Nature of Service</h2>
        <p>
          TRAVECO Mobility provides independent, professional visa documentation and application assistance services. 
        </p>
        <p>
          <strong>No Affiliation:</strong> We are a private consulting firm. We are not affiliated with, endorsed by, or representing any government embassy, consulate, or immigration department. 
        </p>
        <p>
          <strong>No Guarantee of Approval:</strong> Visa decisions are made solely at the discretion of the relevant government authorities. TRAVECO Mobility does not and cannot guarantee the approval, issuance, or specific processing timeframe of any visa application. Our role is strictly limited to advisory and preparation support.
        </p>
      </section>

      <section id="user-responsibility">
        <h2>3. User Responsibilities</h2>
        <p>
          When engaging our services, you agree that:
        </p>
        <ul>
          <li>All information and documentation you provide to us is accurate, truthful, and complete to the best of your knowledge.</li>
          <li>Submission of fraudulent, forged, or misleading documents is strictly prohibited. TRAVECO Mobility holds no liability for visa rejections, travel bans, or legal consequences resulting from falsified information provided by the applicant.</li>
          <li>You are responsible for adhering to the specific timelines and appointment schedules set by embassies or VFS/TLS/BLS centers.</li>
        </ul>
      </section>

      <section id="fees-and-payments">
        <h2>4. Fees and Third-Party Costs</h2>
        <p>
          Our professional service fees are distinct from government and third-party fees.
        </p>
        <ul>
          <li><strong>Professional Fees:</strong> Covers the time and expertise utilized to review documents, consult, and prepare your application.</li>
          <li><strong>Government/Third-Party Fees:</strong> Embassy visa fees, VFS/appointment charges, and courier fees are mandatory third-party costs required to process your application.</li>
        </ul>
        <p>
          Please refer to our Refund & Cancellation Policy for detailed information regarding the non-refundability of government and third-party fees.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>5. Intellectual Property</h2>
        <p>
          Unless otherwise indicated, the Site and its original content, design, and functionality are the proprietary property of TRAVECO Mobility. The checklist formats, text, and graphics on the Site are protected by copyright and intellectual property laws. You may not reproduce or distribute our content for commercial purposes without explicit permission.
        </p>
      </section>

      <section id="limitation-liability">
        <h2>6. Limitation of Liability</h2>
        <p>
          In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, or loss of travel expenses arising from:
        </p>
        <ul>
          <li>Visa rejections or processing delays by the embassy.</li>
          <li>Changes in immigration rules occurring after an application is filed.</li>
          <li>Technical errors or inaccuracies on our website.</li>
        </ul>
      </section>

      <section id="governing-law">
        <h2>7. Governing Law</h2>
        <p>
          These Terms shall be governed by and defined following the laws of India. TRAVECO Mobility and yourself irrevocably consent that the courts of Mumbai, Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
        </p>
      </section>
    </LegalLayout>
  );
}
