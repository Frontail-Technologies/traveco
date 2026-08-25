import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-white font-sans">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-340 px-5 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] xl:gap-8">
          
          {/* 1. BRAND */}
          <div className="flex flex-col">
            <Link
              href="/#top"
              className="inline-block"
              aria-label="TRAVECO Mobility home"
            >
              <Image
                src="/images/logo.png"
                alt="TRAVECO Mobility"
                width={200}
                height={68}
                className="h-auto w-32 brightness-0 invert"
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-white/70 pr-4">
              TRAVECO Mobility provides visa documentation, application assistance and international travel support for individuals, families, students and business travellers.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center text-[14px] font-medium text-(--traveco-gold,#C5A253) hover:text-white transition-colors group">
              Get Visa Assistance 
              <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* 2. VISA SERVICES */}
          <div className="flex flex-col">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-(--traveco-gold,#C5A253) mb-6">
              Visa Services
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Tourist & Visitor Visa", href: "/visa-services/tourist-visitor" },
                { label: "Business Visa", href: "/visa-services/business" },
                { label: "Student Visa", href: "/visa-services/student" },
                { label: "Work & Employment Visa", href: "/visa-services/work-employment" },
                { label: "Transit Visa", href: "/visa-services/transit" },
                { label: "Schengen Visa", href: "/visa-services/schengen" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. EXPLORE */}
          <div className="flex flex-col">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-(--traveco-gold,#C5A253) mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Document Checklist", href: "/document-checklist" },
                { label: "About TRAVECO", href: "/about" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-white/80 hover:text-traveco-gold transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT */}
          <div className="flex flex-col">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-(--traveco-gold,#C5A253) mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918850201321" className="group flex items-start gap-3 text-[14px] text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-white/30 group-hover:text-traveco-gold transition-colors shrink-0" />
                  +91 88502 01321
                </a>
              </li>
              <li>
                <a href="mailto:info@traveco.in" className="group flex items-start gap-3 text-[14px] text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-white/30 group-hover:text-traveco-gold transition-colors shrink-0" />
                  info@traveco.in
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-[14px] text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/30 shrink-0" />
                  Mumbai, Maharashtra, India
                </div>
              </li>
              <li className="pt-2">
                <a href="https://wa.me/918850201321" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[14px] font-medium text-traveco-gold hover:text-white transition-colors group">
                  Chat on WhatsApp
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal & Bottom Bar */}
      <div className="border-t border-white/6">
        <div className="mx-auto max-w-340 px-5 py-6.5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
            
            {/* Disclaimer */}
            <div className="max-w-3xl text-left order-2 lg:order-1">
              <p className="text-[11.5px] leading-[1.6] text-white/40">
                TRAVECO Mobility provides independent visa documentation and application assistance. Visa decisions are made solely by the relevant embassy, consulate or immigration authority. Visa requirements, fees and processing times may change.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 order-1 lg:order-2 shrink-0">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation" }
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-[12px] text-white/50 hover:text-white transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/4 text-[11.5px] text-white/30 font-medium tracking-wide">
            © {year} TRAVECO Mobility. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
