"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DestinationSearch } from "@/components/destinations/destination-search";
import { CountryFlag } from "@/components/destinations/country-flag";
import { serviceDestinations } from "@/data/traveco-service-countries";
import { cn } from "@/lib/utils";

const QUICK_LINKS = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    route: "Standard Visitor visa",
  },
  {
    slug: "united-states-of-america",
    name: "United States",
    code: "US",
    route: "B1/B2 Visitor visa",
  },
  { slug: "canada", name: "Canada", code: "CA", route: "Visitor visa" },
  {
    slug: "australia",
    name: "Australia",
    code: "AU",
    route: "Visitor visa (subclass 600)",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    route: "Visitor Visa",
  },
];

const REGIONS = [
  "All",
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "Americas",
  "Oceania",
] as const;
type Region = (typeof REGIONS)[number];

export default function DocumentChecklistPage() {
  const [selectedRegion, setSelectedRegion] = React.useState<Region>("All");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get("region");
    if (region) {
      const match = REGIONS.find(r => r.toLowerCase() === region.toLowerCase());
      if (match) {
        setSelectedRegion(match);
        setTimeout(() => {
          document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  const filteredDestinations = React.useMemo(
    () =>
      serviceDestinations
        .filter((d) => selectedRegion === "All" || d.region === selectedRegion)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [selectedRegion],
  );

  return (
    <div className="bg-background pt-22">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col items-center justify-center w-full py-20 md:py-28 lg:py-32"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/85 z-10" />

        {/* CENTER CONTENT */}
        <div className="relative z-20 mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-[36px] md:text-[52px] lg:text-[64px] text-white tracking-tight font-medium mb-4 leading-tight max-w-4xl" data-scroll="fade-up">
            Find the visa checklist
            <br className="hidden md:block" /> for your destination.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Search supported visa routes, documents, fees and processing guidance.
          </p>

          {/* Search */}
          <div className="relative z-30 w-full max-w-3xl text-left shadow-lg">
            <DestinationSearch />
          </div>
        </div>
      </div>

      <div
        id="directory"
        className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 pt-20 pb-20 bg-background"
      >
        {/* ── BROWSE ALL DESTINATIONS ──────────────────────────────── */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[24px] md:text-[28px] font-bold text-navy tracking-tight">
              Supported destinations and visa routes
            </h2>
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[13px] font-bold text-navy">
              {filteredDestinations.length} routes
            </span>
          </div>
        </div>
            <div className="mt-2">
              {/* Region tabs */}
              <div
                className="flex flex-nowrap items-center border-b border-(--traveco-primary)/10 mb-8 overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {REGIONS.map((region) => {
                  const isActive = selectedRegion === region;
                  return (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setSelectedRegion(region)}
                      className={`px-4 py-3 text-[14px] transition-all whitespace-nowrap border-b-2 -mb-px shrink-0 ${isActive
                        ? "text-navy border-navy font-semibold"
                        : "text-(--traveco-primary)/60 border-transparent hover:text-navy hover:border-(--traveco-primary)/20 font-medium"
                        }`}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
              {/* Grid — 3 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((dest) => {
                  const routesDisplay = dest.visaOptions.length > 1 
                    ? `${dest.visaOptions.length} Visa Options`
                    : dest.visaOptions[0].mode;
                    
                  return (
                    <Link
                      key={dest.slug}
                      href={`/document-checklist/${dest.slug}`}
                      className="group flex flex-col justify-center min-h-[90px] px-5 py-4 border border-border rounded-surface bg-white hover:border-accent hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-4">
                          <div className="shrink-0 mt-0.5">
                          {dest.kind === "group" ? (
                            <div className="flex size-6 items-center justify-center rounded-full bg-navy/5 text-navy/40">
                              <span className="text-[10px] font-bold">EU</span>
                            </div>
                          ) : (
                            <CountryFlag
                              countryCode={dest.countryCode || ""}
                              country={dest.name}
                              size="sm"
                            />
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[15px] font-medium text-navy leading-snug wrap-break-word">
                            {dest.name}
                          </span>
                          <span className="text-[12px] text-muted-foreground mt-0.5 leading-snug truncate">
                            {routesDisplay}
                          </span>
                        </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transform group-hover:translate-x-1 transition-all shrink-0 ml-3 mt-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              {filteredDestinations.length === 0 && (
                <p className="text-muted-foreground text-[15px] py-12 text-center col-span-full">
                  No destinations found for this region.
                </p>
              )}
            </div>
      </div>
    </div>
  );
}
