'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { CountryFlag } from './country-flag';
import { serviceDestinations } from '@/data/traveco-service-countries';
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export function DestinationSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const router = useRouter();
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const sortedDestinations = React.useMemo(
    () => [...serviceDestinations].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  const handleSelect = (slug: string) => {
    setOpen(false);
    setQuery('');
    router.push(`/document-checklist/${slug}`);
  };

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full mx-auto">
      <CommandPrimitive
        shouldFilter={false}
        className="relative flex flex-col overflow-visible bg-transparent"
      >
        {/* Main Search Input */}
        <div 
          className={cn(
            "flex items-center w-full h-16 md:h-20 bg-white border rounded-[16px] px-6 md:px-8 shadow-md transition-all relative z-10",
            open ? "border-accent ring-2 ring-accent" : "border-border hover:border-border"
          )}
        >
          <CommandPrimitive.Input
            value={query}
            onValueChange={(v) => {
              setQuery(v);
              if (!open) setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search country or destination..."
            className="flex-1 min-w-0 text-[18px] md:text-[22px] font-medium border-0 outline-none bg-transparent placeholder:text-muted-foreground text-navy focus:ring-0"
          />
          <Search className="h-6 w-6 md:h-7 md:w-7 shrink-0 text-accent ml-3 md:ml-4" strokeWidth={2.5} />
        </div>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-white border border-border rounded-surface shadow-md overflow-hidden"
          >
            <CommandPrimitive.List className="overflow-y-auto max-h-85 py-2" style={{ scrollbarWidth: 'thin' }}>
              <CommandPrimitive.Empty className="py-8 text-center text-[14px] text-muted-foreground">
                No destination found.
              </CommandPrimitive.Empty>

              {sortedDestinations
                .filter(
                  (d) =>
                    !query ||
                    d.name.toLowerCase().includes(query.toLowerCase()) ||
                    d.slug.includes(query.toLowerCase()) ||
                    (d.countryCode === 'GB' && 'uk'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'US' && 'usa'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'AE' && 'uae'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'AE' && 'dubai'.includes(query.toLowerCase()))
                )
                .sort((a, b) => {
                  if (!query) return 0;
                  const q = query.toLowerCase();
                  const aStarts = a.name.toLowerCase().startsWith(q) || (a.countryCode === 'US' && 'usa'.startsWith(q)) || (a.countryCode === 'GB' && 'uk'.startsWith(q)) || (a.countryCode === 'AE' && 'uae'.startsWith(q));
                  const bStarts = b.name.toLowerCase().startsWith(q) || (b.countryCode === 'US' && 'usa'.startsWith(q)) || (b.countryCode === 'GB' && 'uk'.startsWith(q)) || (b.countryCode === 'AE' && 'uae'.startsWith(q));
                  
                  if (aStarts && !bStarts) return -1;
                  if (!aStarts && bStarts) return 1;
                  return 0;
                })
                .map((dest) => {
                  const routesDisplay = dest.visaOptions.length > 1 
                    ? `${dest.visaOptions.length} Visa Options`
                    : dest.visaOptions[0].mode;

                  return (
                    <CommandPrimitive.Item
                      key={dest.slug}
                      value={`${dest.name} ${dest.slug}`}
                      onSelect={() => handleSelect(dest.slug)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors select-none outline-none',
                        'hover:bg-muted aria-selected:bg-muted data-[selected=true]:bg-muted',
                      )}
                    >
                      <div className="shrink-0">
                        {dest.kind === "group" ? (
                          <div className="flex size-6 items-center justify-center rounded-full bg-navy/5 text-navy/40">
                            <span className="text-[10px] font-bold">EU</span>
                          </div>
                        ) : (
                          <CountryFlag countryCode={dest.countryCode || ""} country={dest.name} size="sm" />
                        )}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[14.5px] font-medium text-navy truncate">
                          <HighlightMatch text={dest.name} query={query} />
                        </span>
                        <span className="text-[12px] text-(--traveco-primary)/60 truncate max-w-[320px]">
                          {routesDisplay}
                        </span>
                      </div>
                    </CommandPrimitive.Item>
                  );
                })}
            </CommandPrimitive.List>
          </div>
        )}
      </CommandPrimitive>
    </div>
  );
}
