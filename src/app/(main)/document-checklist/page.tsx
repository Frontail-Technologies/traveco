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
  const [browsing, setBrowsing] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState<Region>("All");

  const filteredDestinations = React.useMemo(
    () =>
      serviceDestinations
        .filter((d) => selectedRegion === "All" || d.region === selectedRegion)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [selectedRegion],
  );

  return (
    <div className="bg-[#F7F5EF] pt-22">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col items-center justify-center w-full"
        style={{
          minHeight: "calc(100svh - 88px)",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/85 z-10" />

        {/* CENTER CONTENT */}
        <div className="relative z-20 mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center py-12">
          <p className="text-accent font-bold tracking-widest text-[11px] uppercase mb-4">
            Global Visa Checklist
          </p>
          <h1 className="text-[clamp(36px,5vw,60px)] text-white tracking-tight font-medium mb-6 leading-[1.06] max-w-3xl" data-scroll="fade-up">
            Find the visa checklist
            <br className="hidden md:block" /> for your destination.
          </h1>
          <p className="text-[15px] text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Search supported visa routes, documents, fees and processing guidance based on TRAVECO’s current service database.
          </p>

          {/* Search */}
          <div className="relative z-30 mb-12 w-full max-w-xl text-left">
            <DestinationSearch />
          </div>

          {/* Popular Destinations */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
              Popular:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.slug}
                  href={`/document-checklist/${link.slug}`}
                  className="group inline-flex items-center gap-2"
                >
                  <CountryFlag
                    countryCode={link.code}
                    country={link.name}
                    size="sm"
                    className="border-white/10"
                  />
                  <span className="text-[14px] font-medium text-white/80 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CUE (Absolutely positioned) */}
        <div className="absolute bottom-9 left-0 right-0 z-20 flex justify-center">
          <button
            type="button"
            onClick={() => {
              if (browsing) {
                setBrowsing(false);
              } else {
                setBrowsing(true);
                setTimeout(() => {
                  document
                    .getElementById("directory")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }
            }}
            className="group flex flex-col items-center gap-2 text-[11px] font-bold tracking-widest text-white/60 uppercase hover:text-white transition-colors"
          >
            <ChevronDown className={cn("w-5 h-5 transition-transform duration-300 mb-1", browsing ? "rotate-180" : "animate-bounce")} />
            {browsing ? "Hide destinations" : "Explore 100 visa service options"}
          </button>
        </div>
      </div>

      {browsing && (
        <div
          id="directory"
          className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 pt-16 pb-12"
        >
          {/* ── BROWSE ALL DESTINATIONS ──────────────────────────────── */}
          <div>
            <div className="mt-2">
              {/* Region tabs */}
              <div
                className="flex flex-nowrap items-center border-b border-(--traveco-navy)/10 mb-8 overflow-x-auto"
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
                        ? "text-traveco-navy border-traveco-navy font-semibold"
                        : "text-(--traveco-navy)/60 border-transparent hover:text-traveco-navy hover:border-(--traveco-navy)/20 font-medium"
                        }`}
                    >
                      {region}
                    </button>
                  );
                })}
              </div>
              <p className="text-[13px] text-(--traveco-navy)/60 mb-6">
                <span className="font-semibold text-traveco-navy">
                  {filteredDestinations.length}
                </span>{" "}
                destinations
              </p>
              {/* Grid — 3 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
                {filteredDestinations.map((dest) => {
                  const routesDisplay = dest.visaOptions.length > 1 
                    ? `${dest.visaOptions.length} Visa Options`
                    : dest.visaOptions[0].mode;
                    
                  return (
                    <Link
                      key={dest.slug}
                      href={`/document-checklist/${dest.slug}`}
                      className="group flex items-center justify-between min-h-13 py-3 border-b border-(--traveco-navy)/10 hover:border-(--traveco-navy)/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="shrink-0">
                          {dest.kind === "group" ? (
                            <div className="flex size-6 items-center justify-center rounded-full bg-traveco-navy/5 text-traveco-navy/40">
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
                          <span className="text-[15px] font-medium text-traveco-navy leading-snug wrap-break-word">
                            {dest.name}
                          </span>
                          <span className="text-[12px] text-(--traveco-navy)/60 mt-0.5 leading-snug truncate">
                            {routesDisplay}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-(--traveco-navy)/20 group-hover:text-traveco-navy transform group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                    </Link>
                  );
                })}
              </div>
              {filteredDestinations.length === 0 && (
                <p className="text-(--traveco-navy)/60 text-[15px] py-12 text-center">
                  No destinations found for this region.
                </p>
              )}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
