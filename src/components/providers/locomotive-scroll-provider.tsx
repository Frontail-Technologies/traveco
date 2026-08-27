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

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        try {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } catch (e) {}
      }, 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target); // Reveal only once
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    // Wait a tick for DOM to update after route change
    const timeout = setTimeout(() => {
      document.querySelectorAll("[data-scroll]").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
