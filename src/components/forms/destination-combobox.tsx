"use client";

import * as React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { serviceDestinations } from "@/data/traveco-service-countries";
import { CountryFlag } from "@/components/destinations/country-flag";
import { cn } from "@/lib/utils";

export interface DestinationComboboxProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DestinationCombobox({
  id,
  name = "destination",
  value = "",
  onChange,
  placeholder = "Select or search destination",
  className,
  disabled = false,
}: DestinationComboboxProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const sortedDestinations = useMemo(
    () => [...serviceDestinations].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  // Selected destination info
  const selectedDest = useMemo(
    () => serviceDestinations.find((d) => d.name.toLowerCase() === value.toLowerCase()),
    [value]
  );

  // Filtered destinations based on search query
  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return sortedDestinations;

    return sortedDestinations
      .filter((d) => {
        const nameMatch = d.name.toLowerCase().includes(q);
        const slugMatch = d.slug.toLowerCase().includes(q);
        const codeMatch = d.countryCode ? d.countryCode.toLowerCase().includes(q) : false;
        const aliasMatch =
          (d.countryCode === "GB" && "uk united kingdom england britain".includes(q)) ||
          (d.countryCode === "US" && "usa united states america".includes(q)) ||
          (d.countryCode === "AE" && "uae united arab emirates dubai".includes(q)) ||
          (d.slug.includes("schengen") && "europe schengen eu".includes(q));

        return nameMatch || slugMatch || codeMatch || aliasMatch;
      })
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(q);
        const bStarts = b.name.toLowerCase().startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.name.localeCompare(b.name);
      });
  }, [searchQuery, sortedDestinations]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Focus search input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [open]);

  const handleSelect = (destName: string) => {
    if (onChange) {
      onChange(destName);
    }
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input for standard Form submit */}
      <input type="hidden" name={name} value={value} />

      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-12 w-full items-center justify-between rounded-control border border-navy/15 bg-white px-3.5 text-left text-base font-medium text-navy transition-all focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20",
          open && "border-accent ring-2 ring-accent/20",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <div className="flex items-center gap-2.5 truncate">
          {value ? (
            <>
              {selectedDest ? (
                <div className="shrink-0 flex items-center">
                  {selectedDest.kind === "group" ? (
                    <div className="flex size-5 items-center justify-center rounded-full bg-navy/5 text-navy/60">
                      <span className="text-[9px] font-bold">EU</span>
                    </div>
                  ) : (
                    <CountryFlag
                      countryCode={selectedDest.countryCode || ""}
                      country={selectedDest.name}
                      size="sm"
                    />
                  )}
                </div>
              ) : value === "Other" || value === "Other Country" ? (
                <div className="w-[20px] h-[14px] bg-slate-100 border border-black/5 rounded-[2px] shrink-0" />
              ) : null}
              <span className="truncate text-navy font-semibold">{value}</span>
            </>
          ) : (
            <span className="text-muted-foreground/70 font-normal">{placeholder}</span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-2">
          {value && (
            <span
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={(e) => e.key === "Enter" && handleClear(e as unknown as React.MouseEvent)}
              className="rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-navy transition-colors"
              title="Clear selection"
            >
              <X className="size-3.5" />
            </span>
          )}
          <ChevronDown
            className={cn(
              "size-4 text-navy/50 transition-transform duration-200",
              open && "rotate-180 text-accent"
            )}
          />
        </div>
      </button>

      {/* Searchable Dropdown Popup */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-70 rounded-xl border border-navy/15 bg-white shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
          {/* Search Header */}
          <div className="flex items-center border-b border-navy/10 px-3.5 py-2.5 bg-muted/20">
            <Search className="size-4 text-muted-foreground shrink-0 mr-2" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or territory..."
              className="w-full bg-transparent text-sm font-medium text-navy placeholder:text-muted-foreground outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-muted-foreground hover:text-navy"
              >
                Clear
              </button>
            )}
          </div>

          {/* Destination List */}
          <div
            className="max-h-60 overflow-y-auto p-1.5 scrollbar-thin"
            style={{ scrollbarWidth: "thin" }}
          >
            {filteredDestinations.length === 0 && searchQuery.trim() !== "" ? (
              <div className="py-6 text-center text-xs text-muted-foreground">
                <p>No destination matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  type="button"
                  onClick={() => handleSelect(searchQuery.trim())}
                  className="mt-2 text-xs font-bold text-accent hover:underline"
                >
                  Use &ldquo;{searchQuery.trim()}&rdquo; as destination
                </button>
              </div>
            ) : (
              <>
                {filteredDestinations.map((dest) => {
                  const isSelected = value.toLowerCase() === dest.name.toLowerCase();
                  return (
                    <button
                      key={dest.slug}
                      type="button"
                      onClick={() => handleSelect(dest.name)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors hover:bg-muted/80 focus:bg-muted focus:outline-none",
                        isSelected ? "bg-accent/10 text-accent font-semibold" : "text-navy"
                      )}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div className="shrink-0">
                          {dest.kind === "group" ? (
                            <div className="flex size-5 items-center justify-center rounded-full bg-navy/5 text-navy/60">
                              <span className="text-[9px] font-bold">EU</span>
                            </div>
                          ) : (
                            <CountryFlag
                              countryCode={dest.countryCode || ""}
                              country={dest.name}
                              size="sm"
                            />
                          )}
                        </div>
                        <span className="truncate">{dest.name}</span>
                      </div>

                      {isSelected && <Check className="size-4 text-accent shrink-0 ml-2" />}
                    </button>
                  );
                })}

                {/* Other Option */}
                <button
                  type="button"
                  onClick={() => handleSelect("Other")}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors hover:bg-muted/80 focus:bg-muted focus:outline-none border-t border-navy/5 mt-1",
                    value === "Other" ? "bg-accent/10 text-accent font-semibold" : "text-navy"
                  )}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-[20px] h-[14px] bg-slate-100 border border-black/5 rounded-[2px] shrink-0" />
                    <span>Other Country</span>
                  </div>
                  {value === "Other" && <Check className="size-4 text-accent shrink-0 ml-2" />}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
