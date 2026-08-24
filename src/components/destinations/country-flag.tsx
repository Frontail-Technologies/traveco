import * as Flags from 'country-flag-icons/react/3x2';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

type CountryFlagProps = {
  countryCode: string;
  country: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
};

export function CountryFlag({ countryCode, country, size = 'md', className }: CountryFlagProps) {
  const code = (countryCode || '').toUpperCase();

  // @ts-ignore - Dynamic key access on Flags module
  const Flag = Flags[code];

  const sizeClasses = {
    sm: 'w-[24px] h-[16px]',
    md: 'w-[36px] h-[24px]',
    lg: 'w-[48px] h-[32px]',
    hero: 'w-[140px] h-[93px] md:w-[200px] md:h-[133px] lg:w-[260px] lg:h-[173px]',
  };

  const wrapperClasses = cn(
    'inline-flex items-center justify-center overflow-hidden shrink-0',
    'rounded-[2px] border border-black/5 bg-white',
    sizeClasses[size],
    className
  );

  if (!Flag) {
    // Fallback to neutral globe if the code is invalid or missing
    return (
      <span
        className={wrapperClasses}
        title={country}
        aria-label={`Flag of ${country}`}
      >
        <Globe className="w-1/2 h-1/2 text-slate-300" strokeWidth={1.5} />
      </span>
    );
  }

  return (
    <span className={wrapperClasses} title={country}>
      <Flag
        className="w-full h-full object-cover"
        title={country}
        aria-label={`Flag of ${country}`}
      />
    </span>
  );
}
