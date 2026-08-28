import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface PreFooterCTAProps {
  countryName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showContactDetails?: boolean;
  className?: string;
}

export function PreFooterCTA({ countryName, eyebrow, title, description, showContactDetails = false, className }: PreFooterCTAProps) {
  const isDynamic = !!countryName;
  
  return (
    <section className={cn("bg-background px-5 pb-10 pt-16 sm:px-6 md:pb-12 md:pt-20 lg:px-8 lg:pb-16 lg:pt-24", className)}>
      <div className="mx-auto max-w-340">
        <div className="relative overflow-hidden rounded-2xl bg-navy p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-10">
          
          {/* Left Content */}
          <div className="relative z-10 w-full max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {eyebrow || "READY TO START?"}
            </p>
            <h2 className="mb-4 whitespace-pre-line text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title || (isDynamic 
                ? `Need help with your ${countryName} visa?` 
                : "Planning your next journey?\nLet TRAVECO guide the visa process.")}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6] max-w-xl">
              {description || "Get assistance with visa documentation, application preparation and travel guidance."}
            </p>

            {showContactDetails && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/70 font-medium flex flex-wrap gap-x-3 gap-y-2">
                <span>+91 88502 01321</span>
                <span className="hidden sm:inline">·</span>
                <span>info@traveco.in</span>
                <span className="hidden sm:inline">·</span>
                <span>Mumbai, India</span>
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="relative z-10 flex w-full flex-col items-start gap-4 lg:items-end">
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 text-[15px]">
              <Link href="/contact">
                Get Visa Assistance
              </Link>
            </Button>
            
            <a 
              href="https://wa.me/918850201321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-medium text-white/70 transition-colors hover:text-white text-sm lg:mr-2"
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
