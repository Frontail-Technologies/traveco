'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';



const LINKS = [
  { id: 'documents', label: 'Documents Required' },
  { id: 'processing', label: 'Indicative Processing' },
  { id: 'fees', label: 'Fees & Charges' },
  { id: 'note', label: 'Before You Apply' },
  { id: 'cta', label: 'Get Assistance' },
];

export function ChecklistSidebar() {
  const [activeId, setActiveId] = React.useState<string>('documents');

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const options: IntersectionObserverInit = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveId(id);
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:block w-[220px] shrink-0">
      <div className="sticky top-28">
        <p className="text-[10px] font-bold tracking-widest text-()/50 uppercase mb-5">
          On This Page
        </p>
        <nav className="flex flex-col gap-1">
          {LINKS.map((link, i) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'flex items-center gap-2.5 py-2 px-3 text-[13.5px] font-medium rounded-[6px] transition-colors',
                  isActive ? 'bg-white text-()' : 'hover:bg-white/60 text-()/60 hover:text-()',
                )}
              >
                <span
                  className={cn(
                    'text-[11px] font-bold w-4 shrink-0 transition-colors',
                    isActive ? 'text-()' : 'text-()/30',
                  )}
                >
                  {i + 1}.
                </span>
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
