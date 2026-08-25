import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { destinations } from '@/data/destinations';
import { CountryFlag } from '@/components/destinations/country-flag';
import { ChecklistSidebar } from '@/components/destinations/checklist-sidebar';
import { Check } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: 'Destination Not Found | TRAVECO Mobility' };
  return {
    title: `${dest.country} Visa Checklist for Indian Travellers | TRAVECO Mobility`,
    description: `Required documents, visa route, indicative processing and fee guidance for ${dest.country} — a working checklist for Indian ordinary passport holders.`,
  };
}

/** Capitalise first letter for display only — does not mutate stored data */
function fmt(text: string): string {
  if (!text) return text;
  const t = text.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}



export default async function DocumentChecklistSlugPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  const feeText = dest.feeHandling;
  const liveFee =
    feeText.toLowerCase().includes('live fee') ||
    feeText.toLowerCase().includes('exact fee');

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
              <CountryFlag countryCode={dest.countryCode} country={dest.country} size="hero" className="border-white/10" />
            </div>
            <div className="text-center md:text-left w-full">
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-medium tracking-tight leading-[1.1] text-white wrap-break-word mb-6">
                {dest.country}
              </h1>

              {/* ── METADATA STRIP ────────────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 border-y border-white/20 py-4">
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-1">Visa Route</p>
                  <p className="text-[15px] font-semibold text-white">{dest.touristRoute}</p>
                </div>
                <div className="w-full h-px sm:w-px sm:h-8 bg-white/20 sm:block" />
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-1">Passport</p>
                  <p className="text-[15px] font-semibold text-white">Indian Ordinary</p>
                </div>
                <div className="w-full h-px sm:w-px sm:h-8 bg-white/20 sm:block" />
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase mb-1">Category</p>
                  <p className="text-[15px] font-semibold text-white">Tourist / Visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 pt-10 sm:pt-20">



        {/* ── MAIN LAYOUT ───────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          <ChecklistSidebar />

          {/* CONTENT */}
          <div className="flex-1 min-w-0 max-w-215">

            {/* 1 — DOCUMENTS */}
            <section id="documents" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-traveco-navy">
                  <span className="mr-2 font-bold text-traveco-navy">1.</span>
                  Documents Required
                </h2>
                <div className="h-px flex-1 bg-(--traveco-navy)/10" />
              </div>

              <p className="text-[15px] text-(--traveco-navy)/70 leading-relaxed mb-6">
                Prepare the following documents for your {dest.country} {dest.touristRoute} application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dest.coreChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white border border-(--traveco-navy)/10 rounded-surface px-4 py-3 min-h-12"
                  >
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5 text-traveco-navy"
                      strokeWidth={2.5}
                    />
                    <span className="text-[14px] font-medium leading-snug text-traveco-navy">
                      {fmt(item)}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2 — PROCESSING */}
            <section id="processing" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-traveco-navy">
                  <span className="mr-2 font-bold text-traveco-navy">2.</span>
                  Indicative Processing
                </h2>
                <div className="h-px flex-1 bg-(--traveco-navy)/10" />
              </div>

              <div className="bg-white border border-(--traveco-navy)/10 rounded-surface px-6 py-5">
                <p className="text-[15px] font-medium leading-relaxed text-traveco-navy">
                  {dest.indicativeProcessing}
                </p>
              </div>
              <p className="text-[13px] text-(--traveco-navy)/60 mt-3 leading-relaxed">
                Processing times vary based on appointment availability, destination requirements and individual circumstances.
              </p>
            </section>

            {/* 3 — FEES */}
            <section id="fees" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-traveco-navy">
                  <span className="mr-2 font-bold text-traveco-navy">3.</span>
                  Fees &amp; Charges
                </h2>
                <div className="h-px flex-1 bg-(--traveco-navy)/10" />
              </div>

              {liveFee ? (
                <div className="bg-white border border-(--traveco-navy)/10 rounded-surface px-5 py-4">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-traveco-navy">
                    Live Fee Verification Required
                  </p>
                  <p className="text-[14.5px] font-medium leading-relaxed mb-2 text-traveco-navy">
                    {feeText}
                  </p>
                  <p className="text-[13px] text-(--traveco-navy)/60 leading-relaxed">
                    Current government, biometric, visa-centre and other applicable charges should be verified before application.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-(--traveco-navy)/10 rounded-surface px-6 py-5">
                  <p className="text-[15px] font-medium leading-relaxed text-traveco-navy">
                    {feeText}
                  </p>
                </div>
              )}
            </section>

            {/* 4 — NOTE */}
            <section id="note" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-traveco-navy">
                  <span className="mr-2 font-bold text-traveco-navy">4.</span>
                  Before You Apply
                </h2>
                <div className="h-px flex-1 bg-(--traveco-navy)/10" />
              </div>

              <div className="bg-white border border-(--traveco-navy)/10 rounded-surface px-6 py-5">
                <p className="text-[10px] font-bold tracking-widest text-(--traveco-navy)/50 uppercase mb-3">Note</p>
                <p className="text-[14.5px] text-(--traveco-navy)/80 leading-relaxed">
                  Visa requirements, fees, appointment availability and processing information may change. Always verify current requirements with the relevant embassy, consulate or official immigration authority before submitting an application.
                </p>
              </div>
            </section>

            {/* 5 — CTA */}
            <section id="cta" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-traveco-navy">
                  <span className="mr-2 font-bold text-traveco-navy">5.</span>
                  Get Assistance
                </h2>
                <div className="h-px flex-1 bg-(--traveco-navy)/10" />
              </div>

              <div className="bg-traveco-navy rounded-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                {/* Background Pattern */}
                <div 
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className="text-[20px] font-bold text-white mb-2">Need help with your {dest.country} application?</h3>
                  <p className="text-[14px] text-white/80">Get professional guidance for your visa process.</p>
                </div>
                <Link 
                  href="/contact" 
                  className="relative z-10 inline-flex h-11 items-center justify-center rounded-control bg-accent px-6 text-[14.5px] font-bold text-white transition-all hover:bg-accent/90 shrink-0 w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </section>

          </div>
        </div>

      </div>


    </div>
  );
}
