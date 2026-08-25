import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | TRAVECO Mobility",
  description: "Privacy Policy for TRAVECO Mobility visa and travel assistance services.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-collection", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "data-sharing", title: "4. Data Sharing & Third Parties" },
  { id: "data-security", title: "5. Data Security & Retention" },
  { id: "your-rights", title: "6. Your Rights" },
  { id: "contact", title: "7. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="January 15, 2026"
      sections={SECTIONS}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          Welcome to TRAVECO Mobility. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (traveco.in) or use our visa documentation and application assistance services.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>
      </section>

      <section id="information-collection">
        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect via the website includes:
        </p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and destination country, that you voluntarily give to us when you submit an enquiry form or contact us via email/WhatsApp.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>
        <p>
          <strong>Note on Sensitive Data:</strong> TRAVECO Mobility does not collect highly sensitive biometric data, credit card numbers, or upload raw passport scans directly through automated website forms. Detailed documentation review for visa applications is handled securely offline or through secure direct communication channels once you engage our services.
        </p>
      </section>

      <section id="how-we-use">
        <h2>3. How We Use Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Respond to your enquiries regarding visa assistance and travel documentation.</li>
          <li>Send you emails or WhatsApp messages regarding your application status or travel requirements.</li>
          <li>Improve our website performance and user experience.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        </ul>
      </section>

      <section id="data-sharing">
        <h2>4. Data Sharing & Third Parties</h2>
        <p>
          We respect your privacy and do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>
        <p>
          We may share information we have collected about you in certain situations:
        </p>
        <ul>
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
          <li><strong>Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as hosting, email delivery, or customer service tools.</li>
        </ul>
      </section>

      <section id="data-security">
        <h2>5. Data Security & Retention</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <p>
          We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
      </section>

      <section id="your-rights">
        <h2>6. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, including the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the information provided below.
        </p>
      </section>

      <section id="contact">
        <h2>7. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>TRAVECO Mobility</strong><br />
          Mumbai, Maharashtra, India<br />
          Email: info@traveco.in<br />
          Phone: +91 88502 01321
        </p>
      </section>
    </LegalLayout>
  );
}
