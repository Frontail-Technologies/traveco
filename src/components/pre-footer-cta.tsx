import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface PreFooterCTAProps {
  countryName?: string;
}

export function PreFooterCTA({ countryName }: PreFooterCTAProps) {
  const isDynamic = !!countryName;
  
  return (
    <section className="bg-[#F7F5EF] py-[80px] md:py-[110px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-[#0B1F3A] rounded-[24px] p-[32px] md:p-[56px] lg:p-[72px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 overflow-hidden relative">
          
          {/* Subtle Travel Motif Background */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 0C400 220.914 220.914 400 0 400" stroke="#C5A253" strokeWidth="2" strokeDasharray="10 10"/>
              <circle cx="200" cy="55" r="4" fill="#C5A253"/>
            </svg>
          </div>

          {/* Left Content */}
          <div className="lg:w-[65%] max-w-2xl relative z-10">
            <p className="text-[var(--traveco-gold,#C5A253)] text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-4">
              Ready to start?
            </p>
            <h2 className="text-white text-[32px] md:text-[40px] font-medium leading-[1.1] mb-5 whitespace-pre-line">
              {isDynamic 
                ? `Need help with your ${countryName} visa?` 
                : "Planning your next journey?\nLet TRAVECO guide the visa process."}
            </h2>
            <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] max-w-xl">
              {isDynamic 
                ? "TRAVECO can assist with document preparation and application guidance."
                : "TRAVECO can assist with visa documentation, application preparation and travel-related guidance based on your requirements."}
            </p>
          </div>

          {/* Right Actions */}
          <div className="lg:w-[35%] flex flex-col items-start lg:items-end gap-5 relative z-10 w-full">
            <Link 
              href="/#contact" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[var(--traveco-gold,#C5A253)] text-[#0B1F3A] font-bold px-8 h-[52px] rounded-[10px] hover:bg-white transition-colors"
            >
              Get Visa Assistance
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            
            <a 
              href="https://wa.me/918850201321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium text-[14px] md:text-[15px] transition-colors inline-flex items-center gap-1.5 lg:mr-3"
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
