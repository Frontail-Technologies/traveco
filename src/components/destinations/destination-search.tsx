'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { CountryFlag } from './country-flag';
import { destinations } from '@/data/destinations';
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
    () => [...destinations].sort((a, b) => a.country.localeCompare(b.country)),
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
    <div ref={wrapperRef} className="relative w-full max-w-150">
      <CommandPrimitive
        shouldFilter={false}
        className="relative flex flex-col overflow-visible bg-transparent"
      >
        {/* Main Search Input */}
        <div 
          className={cn(
            "flex items-center w-full h-14 bg-white border rounded-control px-5 shadow-sm transition-all relative z-10",
            open ? "border-traveco-gold ring-1 ring-traveco-gold" : "border-slate-200 hover:border-slate-300"
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
            className="flex-1 min-w-0 text-[16px] border-0 outline-none bg-transparent placeholder:text-slate-400 text-traveco-navy focus:ring-0"
          />
          <Search className="h-5 w-5 shrink-0 text-slate-400 ml-3" strokeWidth={2} />
        </div>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-white border border-slate-200 rounded-surface shadow-md overflow-hidden"
          >
            <CommandPrimitive.List className="overflow-y-auto max-h-85 py-2" style={{ scrollbarWidth: 'thin' }}>
              <CommandPrimitive.Empty className="py-8 text-center text-[14px] text-slate-400">
                No destination found.
              </CommandPrimitive.Empty>

              {sortedDestinations
                .filter(
                  (d) =>
                    !query ||
                    d.country.toLowerCase().includes(query.toLowerCase()) ||
                    d.slug.includes(query.toLowerCase()) ||
                    (d.countryCode === 'GB' && 'uk'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'US' && 'usa'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'AE' && 'uae'.includes(query.toLowerCase())) ||
                    (d.countryCode === 'AE' && 'dubai'.includes(query.toLowerCase()))
                )
                .sort((a, b) => {
                  if (!query) return 0;
                  const q = query.toLowerCase();
                  const aStarts = a.country.toLowerCase().startsWith(q) || (a.countryCode === 'US' && 'usa'.startsWith(q)) || (a.countryCode === 'GB' && 'uk'.startsWith(q)) || (a.countryCode === 'AE' && 'uae'.startsWith(q));
                  const bStarts = b.country.toLowerCase().startsWith(q) || (b.countryCode === 'US' && 'usa'.startsWith(q)) || (b.countryCode === 'GB' && 'uk'.startsWith(q)) || (b.countryCode === 'AE' && 'uae'.startsWith(q));
                  
                  if (aStarts && !bStarts) return -1;
                  if (!aStarts && bStarts) return 1;
                  return 0;
                })
                .map((dest) => (
                  <CommandPrimitive.Item
                    key={dest.slug}
                    value={`${dest.country} ${dest.slug}`}
                    onSelect={() => handleSelect(dest.slug)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors select-none outline-none',
                      'hover:bg-[#FBF7EE] aria-selected:bg-[#FBF7EE] data-[selected=true]:bg-[#FBF7EE]',
                    )}
                  >
                    <div className="shrink-0">
                      <CountryFlag countryCode={dest.countryCode} country={dest.country} size="sm" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[14.5px] font-medium text-traveco-navy truncate">
                        <HighlightMatch text={dest.country} query={query} />
                      </span>
                      <span className="text-[12px] text-(--traveco-navy)/60 truncate max-w-[320px]">
                        <HighlightMatch text={dest.touristRoute} query={query} />
                      </span>
                    </div>
                  </CommandPrimitive.Item>
                ))}
            </CommandPrimitive.List>
          </div>
        )}
      </CommandPrimitive>
    </div>
  );
}
