import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | TRAVECO Mobility",
  description: "Refund and cancellation policy for TRAVECO Mobility visa assistance services.",
};

const SECTIONS = [
  { id: "fee-structure", title: "1. Understanding Our Fee Structure" },
  { id: "government-fees", title: "2. Non-Refundable Government Fees" },
  { id: "service-fees", title: "3. TRAVECO Service Fees & Cancellations" },
  { id: "visa-rejections", title: "4. Visa Rejections" },
  { id: "process", title: "5. Refund Process" },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      lastUpdated="January 15, 2026"
      sections={SECTIONS}
    >
      <div className="bg-(--traveco-gold)/10 border-l-4 border-traveco-gold p-4 mb-8 rounded-r-[8px]">
        <p className="text-[14px] font-medium text-traveco-navy m-0">
          <strong>Client Confirmation Required:</strong> The specific percentages and timeframes for refunding TRAVECO's professional fees below are placeholders. Please confirm the exact commercial terms of your business model.
        </p>
      </div>

      <section id="fee-structure">
        <h2>1. Understanding Our Fee Structure</h2>
        <p>
          When you engage TRAVECO Mobility for visa assistance, the total cost typically consists of two distinct parts:
        </p>
        <ol>
          <li><strong>Government & Embassy Fees:</strong> The official fees charged by the destination country's embassy or consulate, and third-party processing centers (e.g., VFS Global, BLS, TLS).</li>
          <li><strong>TRAVECO Service Fees:</strong> The professional fee charged by us for our consultation, document review, and application preparation services.</li>
        </ol>
      </section>

      <section id="government-fees">
        <h2>2. Non-Refundable Government Fees</h2>
        <p>
          <strong>All government, embassy, consulate, and third-party processing center fees are strictly non-refundable.</strong>
        </p>
        <p>
          Once we have paid these fees on your behalf to secure an appointment or submit an application, they cannot be recovered under any circumstances, regardless of whether your visa is approved, delayed, or rejected, or if you choose to withdraw your application.
        </p>
      </section>

      <section id="service-fees">
        <h2>3. TRAVECO Service Fees & Cancellations</h2>
        <p>
          Our professional service fees compensate our team for the time and expertise dedicated to your profile. Refunds for our service fees are subject to the following conditions:
        </p>
        <ul>
          <li><strong>Before document review begins:</strong> If you cancel our services before we have begun evaluating your profile or reviewing your documents, you are eligible for a full refund of the TRAVECO Service Fee [Minus a nominal processing fee of X%].</li>
          <li><strong>After document review has commenced:</strong> If cancellation is requested after we have provided a consultation, checklist, or begun document review, but before the final application is prepared, a partial refund of [X%] of the Service Fee will be granted.</li>
          <li><strong>After application preparation/submission:</strong> Once the application forms have been filled, documents compiled, or the application submitted/appointment booked, the TRAVECO Service Fee is 100% non-refundable.</li>
        </ul>
      </section>

      <section id="visa-rejections">
        <h2>4. Visa Rejections</h2>
        <p>
          TRAVECO Mobility does not guarantee visa approvals. The decision to grant a visa rests solely with the immigration authorities.
        </p>
        <p>
          In the unfortunate event of a visa rejection, neither the government fees nor the TRAVECO Service Fees are refundable. Our fee covers the professional preparation of the application, which is completed regardless of the embassy's final decision.
        </p>
      </section>

      <section id="process">
        <h2>5. Refund Process</h2>
        <p>
          To request a cancellation and eligible refund, please email us at <strong>info@traveco.in</strong> with your application details.
        </p>
        <p>
          Approved refunds will be processed back to the original method of payment within [7 to 10 business days]. Processing times may vary depending on your bank or credit card provider.
        </p>
      </section>
    </LegalLayout>
  );
}
