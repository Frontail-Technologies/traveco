import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { serviceDestinations } from '@/data/traveco-service-countries';
import { CountryFlag } from '@/components/destinations/country-flag';
import { CountryDetailClient } from '@/components/destinations/country-detail-client';
import { destinations as globalChecklists } from '@/data/global-visa-reference';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDestinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = serviceDestinations.find((d) => d.slug === slug);
  if (!dest) return { title: 'Destination Not Found | TRAVECO Mobility' };
  
  const titleName = dest.kind === 'group' ? dest.name : `${dest.name} Visa Assistance`;
  
  return {
    title: `${titleName} | TRAVECO Mobility`,
    description: `Professional visa assistance, documents, fees and indicative processing for ${dest.name}. Navigate requirements with clarity.`,
  };
}

export default async function DocumentChecklistSlugPage({ params }: Props) {
  const { slug } = await params;
  const dest = serviceDestinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  let checklistData = globalChecklists.find(
    (c) => c.slug === slug || c.country.toLowerCase() === dest.name.toLowerCase()
  );
  if (!checklistData) {
    if (slug === 'turkiye') {
      checklistData = globalChecklists.find((c) => c.slug === 'turkey');
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      
      {/* ── HERO ──────────────────────────────────────── */}
      <div 
        className="relative flex items-center w-full pt-32 pb-10 sm:pt-40 sm:pb-20"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/80 z-10" />
        
        <div className="relative z-20 mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 flex flex-col items-start md:items-center lg:items-start">
          {/* ── BACK ──────────────────────────────────────────── */}
          <Link
            href="/document-checklist"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors mb-8 sm:mb-12"
          >
            ← Global Visa Checklist
          </Link>
          
          <div className="flex flex-col items-center md:flex-row md:items-center gap-6 md:gap-10 lg:gap-14 w-full">
            <div className="shrink-0">
              {dest.kind === "group" ? (
                <div className="flex size-32 items-center justify-center rounded-full bg-white/10 text-white/50 border border-white/20">
                  <span className="text-3xl font-bold">EU</span>
                </div>
              ) : (
                <CountryFlag countryCode={dest.countryCode || ""} country={dest.name} size="hero" className="border-white/10" />
              )}
            </div>
            <div className="text-center md:text-left w-full">
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-medium tracking-tight leading-[1.1] text-white wrap-break-word">
                {dest.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <CountryDetailClient dest={dest} checklistData={checklistData || null} />
    </div>
  );
}
