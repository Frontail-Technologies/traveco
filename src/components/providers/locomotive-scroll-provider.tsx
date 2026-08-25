"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      return;
    }

    let isMounted = true;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      
      if (isMounted) {
        scrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.08,
            duration: 1.2,
            smoothWheel: true,
            // Disable touch smooth scrolling to maintain native feel on mobile
            smoothTouch: false,
          }
        });
      }
    };

    initScroll();

    return () => {
      isMounted = false;
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
