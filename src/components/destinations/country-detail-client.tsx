'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { ChecklistSidebar } from '@/components/destinations/checklist-sidebar';
import { PreFooterCTA } from '@/components/pre-footer-cta';
import type { ServiceDestination, VisaOption } from '@/data/traveco-service-countries';
import { cn } from '@/lib/utils';

const COMMON_DOCUMENTS = [
  "Valid Passport",
  "Passport-size Photograph",
  "Application Form",
  "Bank / Financial Documents, where applicable",
  "Employment / Business Documents, where applicable",
  "Travel Itinerary",
  "Accommodation Details",
  "Travel Insurance, where applicable",
  "Supporting Documents according to destination",
  "Previous Travel / Visa History, where applicable"
];

export function CountryDetailClient({ dest, checklistData }: { dest: ServiceDestination, checklistData: any | null }) {
  const [activeRouteIdx, setActiveRouteIdx] = React.useState(0);
  const activeRoute = dest.visaOptions[activeRouteIdx];

  const hasMultipleRoutes = dest.visaOptions.length > 1;

  return (
    <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 pt-10 sm:pt-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <ChecklistSidebar />

        <div className="flex-1 min-w-0 max-w-215">
          {/* 1 — VISA / ENTRY OPTIONS */}
          {hasMultipleRoutes && (
            <section id="options" className="mb-14 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[22px] font-semibold text-navy">
                  <span className="mr-2 font-bold text-navy">1.</span>
                  Visa / Entry Options
                </h2>
                <div className="h-px flex-1 bg-navy/10" />
              </div>

              <div className="flex flex-col gap-3">
                {dest.visaOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRouteIdx(idx)}
                    className={cn(
                      "text-left px-5 py-4 rounded-xl border transition-all",
                      activeRouteIdx === idx
                        ? "border-navy bg-navy text-white shadow-md"
                        : "border-navy/10 bg-white text-navy hover:border-navy/30"
                    )}
                  >
                    <p className={cn("text-xs font-semibold tracking-widest uppercase mb-1", activeRouteIdx === idx ? "text-accent" : "text-muted-foreground")}>
                      Option {String(idx + 1).padStart(2, '0')}
                    </p>
                    <p className="text-[16px] font-semibold">
                      {opt.mode}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* 2 — DOCUMENTS REQUIRED */}
          <section id="documents" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[22px] font-semibold text-navy">
                <span className="mr-2 font-bold text-navy">{hasMultipleRoutes ? '2.' : '1.'}</span>
                {checklistData && hasMultipleRoutes ? `Documents required for ${dest.name} ${activeRoute.mode}` : `Documents required for ${dest.name}`}
              </h2>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            {checklistData ? (
              <>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6">
                  {hasMultipleRoutes 
                    ? `The checklist below represents general country-level requirements. Route-specific requirements for ${activeRoute.mode} should be confirmed with our team.`
                    : `Prepare the following documents for your ${dest.name} application.`
                  }
                </p>

                <div className="grid grid-cols-1 gap-2 mb-4">
                  {checklistData.coreChecklist.map((item: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white border border-navy/10 rounded-surface px-4 py-3 min-h-12"
                    >
                      <Check
                        className="w-4 h-4 shrink-0 mt-0.5 text-accent"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm font-medium leading-snug text-navy">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="bg-navy/5 border border-navy/10 rounded-surface p-5 mb-6">
                  <p className="text-[15px] font-medium text-navy">Checklist not available in the provided source.</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Common document guidance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {COMMON_DOCUMENTS.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white border border-navy/10 rounded-surface px-4 py-3 min-h-12 opacity-70"
                      >
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5 text-navy/50"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm font-medium leading-snug text-navy/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            <p className="text-xs font-medium text-muted-foreground leading-relaxed mt-6">
              * Exact requirements vary by destination, visa category and applicant circumstances.
            </p>
          </section>

          {/* 3 — STAY & PASSPORT INFO */}
          <section id="stay" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[22px] font-semibold text-navy">
                <span className="mr-2 font-bold text-navy">{hasMultipleRoutes ? '3.' : '2.'}</span>
                Stay &amp; Passport Information
              </h2>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <div className="bg-white border border-navy/10 rounded-surface divide-y divide-traveco-navy/5">
              <div className="flex flex-col sm:flex-row sm:items-center py-4 px-6 gap-2 sm:gap-6">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase w-32 shrink-0">Max Stay</span>
                <div><span className="inline-flex items-center rounded-full bg-navy/5 border border-navy/10 px-3 py-1 text-sm font-semibold text-navy">{activeRoute.maxStay || "Check official guidelines"}</span></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-4 px-6 gap-2 sm:gap-6">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase w-32 shrink-0">Passport Validity</span>
                <div><span className="inline-flex items-center rounded-full bg-navy/5 border border-navy/10 px-3 py-1 text-sm font-semibold text-navy">{activeRoute.passportValidity || "6 months recommended"}</span></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-4 px-6 gap-2 sm:gap-6">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase w-32 shrink-0">Entry Mode</span>
                <div><span className="inline-flex items-center rounded-full bg-navy/5 border border-navy/10 px-3 py-1 text-sm font-semibold text-navy">{activeRoute.mode}</span></div>
              </div>
            </div>
          </section>

          {/* 4 — FEES */}
          <section id="fees" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[22px] font-semibold text-navy">
                <span className="mr-2 font-bold text-navy">{hasMultipleRoutes ? '4.' : '3.'}</span>
                Fees &amp; Charges
              </h2>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <div className="bg-white border border-navy/10 rounded-surface overflow-hidden">
              <div className="px-6 py-5 border-b border-navy/5 bg-navy/5">
                <p className="text-xs font-semibold tracking-widest text-navy uppercase">Fee Breakdown</p>
              </div>
              <div className="divide-y divide-traveco-navy/5">
                <div className="flex justify-between items-center py-4 px-6">
                  <span className="text-sm font-medium text-navy/80">Government / Embassy Fee</span>
                  <span className="inline-flex items-center rounded-full bg-navy/5 border border-navy/10 px-3 py-1 text-sm font-semibold text-navy">{activeRoute.governmentFee || "Not specified"}</span>
                </div>
                <div className="flex justify-between items-center py-4 px-6">
                  <span className="text-sm font-medium text-navy/80">App Centre / Biometrics</span>
                  <span className="inline-flex items-center rounded-full bg-navy/5 border border-navy/10 px-3 py-1 text-sm font-semibold text-navy">{activeRoute.applicationCentreFee || "Not specified"}</span>
                </div>
                <div className="flex justify-between items-center py-4 px-6">
                  <span className="text-sm font-semibold text-navy">TRAVECO Service Fee</span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm font-semibold text-accent">{activeRoute.travecoServiceFee || "Not specified"}</span>
                </div>
              </div>
              <div className="px-6 py-5 bg-navy/5 border-t border-navy/10 flex justify-between items-center">
                <span className="text-xs font-semibold text-navy uppercase tracking-widest">Estimated Total</span>
                <span className="inline-flex items-center rounded-full bg-navy text-white px-4 py-1.5 text-base font-semibold shadow-sm">{activeRoute.estimatedTotal || "To be confirmed"}</span>
              </div>
            </div>
            
            <p className="text-xs font-medium text-muted-foreground leading-relaxed mt-4">
              * Government, embassy, visa-centre and third-party charges may change and should be verified before application.
            </p>
          </section>

          {/* 5 — PROCESSING */}
          <section id="processing" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[22px] font-semibold text-navy">
                <span className="mr-2 font-bold text-navy">{hasMultipleRoutes ? '5.' : '4.'}</span>
                Indicative Processing
              </h2>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <div className="bg-white border border-navy/10 rounded-surface px-6 py-5">
              <div className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
                {activeRoute.officialProcessingTime || "Varies by application"}
              </div>
            </div>
          </section>

          {/* 6 — NOTE */}
          <section id="note" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[22px] font-semibold text-navy">
                <span className="mr-2 font-bold text-navy">{hasMultipleRoutes ? '6.' : '5.'}</span>
                Important Notes
              </h2>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <div className="bg-white border border-navy/10 rounded-surface px-6 py-5">
              <p className="text-sm font-medium text-navy/80 leading-relaxed mb-4">
                Visa decisions are solely at the discretion of the respective embassy, consulate or immigration authority. TRAVECO Mobility provides assistance and does not guarantee visa approval.
              </p>
              {activeRoute.notes && (
                <div className="pt-4 border-t border-navy/10">
                  <p className="text-sm font-medium text-navy leading-relaxed">
                    Additional Info: {activeRoute.notes}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* 7 — CTA */}
          <div id="cta" className="mb-14 scroll-mt-28">
            <PreFooterCTA 
              countryName={dest.name} 
              className="px-0 py-0 sm:px-0 md:py-0 md:pt-0 lg:px-0 lg:py-0 lg:pt-0 bg-transparent"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
