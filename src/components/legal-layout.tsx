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
    <div className="bg-background pt-22 min-h-screen">
      <div className="mx-auto w-full max-w-340 px-5 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 border-b border-(--traveco-primary)/10 pb-10">
          <h1 className="text-[36px] md:text-[44px] font-medium text-navy leading-[1.1] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm font-medium text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:w-70 shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-5">
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
                        "flex items-center gap-3 py-2 px-3 text-sm font-medium rounded-[8px] transition-colors",
                        isActive
                          ? "bg-white text-navy shadow-sm border border-(--traveco-primary)/5"
                          : "hover:bg-white/60 text-muted-foreground hover:text-navy border border-transparent"
                      )}
                    >
                      <span className={cn(
                        "text-xs font-semibold w-4 shrink-0 transition-colors",
                        isActive ? "text-accent" : "text-muted-foreground/50"
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
          <article className="lg:w-[calc(100%-280px-64px)] w-full max-w-none
            [&_h2]:text-navy [&_h2]:font-bold [&_h2]:text-[24px] md:[&_h2]:text-[28px] [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pb-4 [&_h2]:border-b [&_h2]:border-navy/5
            [&_h3]:text-navy [&_h3]:font-semibold [&_h3]:text-[18px] md:[&_h3]:text-[20px] [&_h3]:mt-8 [&_h3]:mb-4
            [&_p]:text-navy/80 [&_p]:text-base [&_p]:font-normal [&_p]:leading-relaxed [&_p]:mb-6
            [&_li]:text-navy/80 [&_li]:text-base [&_li]:font-normal [&_li]:leading-relaxed [&_li]:mb-1.5
            [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6
            [&_strong]:text-navy [&_strong]:font-bold
            [&_a]:text-accent [&_a]:font-medium [&_a]:underline hover:[&_a]:no-underline
            [&_section]:scroll-mt-32"
          >
            {children}
          </article>
          
        </div>
      </div>
    </div>
  );
}
