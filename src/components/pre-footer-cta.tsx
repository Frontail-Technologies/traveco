import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface PreFooterCTAProps {
  countryName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function PreFooterCTA({ countryName, eyebrow, title, description }: PreFooterCTAProps) {
  const isDynamic = !!countryName;
  
  return (
    <section className="bg-white px-5 pb-10 pt-20 sm:px-6 md:pb-12 md:pt-24 lg:px-8 lg:pb-16 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-start justify-between gap-10 overflow-hidden rounded-2xl bg-traveco-navy p-8 sm:p-10 md:p-14 lg:flex-row lg:items-center lg:p-16">
          
          {/* Left Content */}
          <div className="relative z-10 w-full max-w-2xl lg:w-[65%]">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold-cta">
              {eyebrow || "Ready to start?"}
            </p>
            <h2 className="mb-6 whitespace-pre-line text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
              {title || (isDynamic 
                ? `Need help with your ${countryName} visa?` 
                : "Planning your next journey?\nLet TRAVECO guide the visa process.")}
            </h2>
          </div>

          {/* Right Actions */}
          <div className="relative z-10 flex w-full flex-col items-start gap-5 lg:w-[35%] lg:items-end">
            <Link 
              href="/contact" 
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-control bg-accent px-8 font-bold text-white transition-colors hover:bg-accent/90 sm:w-auto"
            >
              Get Visa Assistance
              <ArrowRight className="size-4" />
            </Link>
            
            <a 
              href="https://wa.me/918850201321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-medium text-white/70 transition-colors hover:text-white text-sm lg:mr-3"
            >
              Chat on WhatsApp 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
