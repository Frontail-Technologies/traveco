import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-navy font-sans border-t border-navy/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-340 px-5 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* 1. BRAND & DIRECT CONTACT (Left Column ~45%) */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-5 pr-0 lg:pr-8">
            <Link
              href="/"
              className="inline-block w-36 mb-5"
              aria-label="TRAVECO Mobility home"
            >
              <Image
                src="/images/logo.png"
                alt="TRAVECO Mobility"
                width={200}
                height={68}
                className="w-full h-auto"
              />
            </Link>

            <p className="text-sm font-medium leading-[1.7] text-muted-foreground mb-6 max-w-md">
              TRAVECO Mobility delivers structured visa advisory, thorough document verification, and personalized application assistance for worldwide travellers, students, and businesses.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-3 text-sm font-medium text-navy/80 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-accent shrink-0" />
                <a
                  href="tel:+918850201321"
                  className="hover:text-accent transition-colors"
                >
                  +91 88502 01321
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-4 text-accent shrink-0" />
                <a
                  href="mailto:info@traveco.in"
                  className="hover:text-accent transition-colors"
                >
                  info@traveco.in
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Green WhatsApp Action Pill Button */}
            <div>
              <a
                href="https://wa.me/918850201321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#20bd5a] hover:scale-105"
              >
                <MessageCircle className="size-4 shrink-0 fill-white text-white" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2. COMPANY (Middle Column) */}
          <div className="flex flex-col lg:col-span-3 xl:col-span-3 lg:pl-6">
            <h3 className="text-sm font-bold text-navy mb-5">
              Company
            </h3>
            <ul className="space-y-3.5 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="/visa-services" className="hover:text-navy transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-navy transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/document-checklist" className="hover:text-navy transition-colors">
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-navy transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-navy transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-navy transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. LEGAL (Right Column) */}
          <div className="flex flex-col lg:col-span-3 xl:col-span-4">
            <h3 className="text-sm font-bold text-navy mb-5">
              Legal
            </h3>
            <ul className="space-y-3.5 text-sm font-medium text-muted-foreground">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-navy transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-navy transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-navy transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund-and-cancellation" className="hover:text-navy transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub-Footer Bottom Bar */}
      <div className="border-t border-navy/5 bg-muted/20">
        <div className="mx-auto max-w-340 px-5 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Copyright Left */}
            <p className="text-xs font-medium text-muted-foreground order-2 lg:order-1">
              © {year} TRAVECO Mobility. All rights reserved.
            </p>

            {/* Regulatory Disclaimer Right */}
            <p className="text-[11px] font-medium leading-relaxed text-muted-foreground max-w-2xl order-1 lg:order-2 lg:text-right">
              TRAVECO Mobility operates as an independent visa facilitation and documentation consultancy. We do not issue visas or represent official embassy, consulate, or government immigration authorities.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
