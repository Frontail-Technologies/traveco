import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PreFooterCTAProps {
  countryName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showContactDetails?: boolean;
  className?: string;
}

export function PreFooterCTA({
  countryName,
  title,
  className,
}: PreFooterCTAProps) {
  const isDynamic = !!countryName;

  const headingText =
    title ||
    (isDynamic
      ? `Planning Your Journey to ${countryName}? Let's Get Started.`
      : "Planning Your Next Destination? Let's Get Started.");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-accent py-16 md:py-20 lg:py-24 text-white",
        className
      )}
    >
      {/* Very Light Travel Background Image */}
      <Image
        src="/images/hero/hero_airport_terminal.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-12 mix-blend-overlay pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-340 px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Centered Large Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.14] mb-8">
            {headingText}
          </h2>

          {/* Centered Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/918850201321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-navy whitespace-nowrap shrink-0 shadow-sm transition-all hover:scale-105 hover:bg-white/95"
            >
              <MessageCircle className="size-4 text-navy shrink-0" />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-white/40 bg-white/15 px-8 text-sm font-semibold text-white whitespace-nowrap shrink-0 backdrop-blur-xs transition-all hover:bg-white/25 hover:border-white/60"
            >
              <span>Request Guidance</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
