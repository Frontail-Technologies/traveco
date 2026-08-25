"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = React.useState<string>(
    sections[0]?.id || ""
  );

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const options: IntersectionObserverInit = {
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0,
    };

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <div className="bg-[#F7F5EF] pt-[88px] min-h-screen">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 border-b border-[var(--traveco-navy)]/10 pb-10">
          <h1 className="text-[36px] md:text-[44px] font-medium text-[var(--traveco-navy)] leading-[1.1] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-[var(--traveco-navy)]/50 text-[14px] font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start relative">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:w-[280px] shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-[11px] font-bold tracking-widest text-[var(--traveco-navy)]/50 uppercase mb-5">
                On This Page
              </p>
              <nav className="flex flex-col gap-1.5">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(section.id);
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                        setActiveSection(section.id);
                      }}
                      className={cn(
                        "flex items-center gap-3 py-2 px-3 text-[14px] font-medium rounded-[8px] transition-colors",
                        isActive
                          ? "bg-white text-[var(--traveco-navy)] shadow-sm border border-[var(--traveco-navy)]/5"
                          : "hover:bg-white/60 text-[var(--traveco-navy)]/60 hover:text-[var(--traveco-navy)] border border-transparent"
                      )}
                    >
                      <span className={cn(
                        "text-[12px] font-bold w-4 shrink-0 transition-colors",
                        isActive ? "text-[var(--traveco-gold)]" : "text-[var(--traveco-navy)]/30"
                      )}>
                        {idx + 1}.
                      </span>
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* LEGAL CONTENT */}
          <article className="lg:w-[calc(100%-280px-64px)] prose prose-slate max-w-none 
            prose-headings:text-[var(--traveco-navy)] prose-headings:font-medium prose-headings:tracking-tight
            prose-h2:text-[24px] prose-h2:md:text-[28px] prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-[var(--traveco-navy)]/5
            prose-h3:text-[18px] prose-h3:md:text-[20px] prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-[var(--traveco-navy)]/80 prose-p:text-[15px] prose-p:md:text-[16px] prose-p:leading-[1.75] prose-p:mb-6
            prose-li:text-[var(--traveco-navy)]/80 prose-li:text-[15px] prose-li:md:text-[16px] prose-li:leading-[1.75]
            prose-ul:my-6 prose-ol:my-6
            prose-strong:text-[var(--traveco-navy)] prose-strong:font-semibold
            prose-a:text-[var(--traveco-gold)] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            marker:text-[var(--traveco-navy)]/40
            [&>section]:scroll-mt-32"
          >
            {children}
          </article>
          
        </div>
      </div>
    </div>
  );
}
