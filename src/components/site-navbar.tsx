"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const navbarNavigationItems = [
  { 
    label: "Visa Services", 
    href: "/visa-services", 
    hasDropdown: true,
    subItems: [
      { label: "Tourist & Visitor Visa", href: "/visa-services/tourist-visitor" },
      { label: "Business Visa", href: "/visa-services/business" },
      { label: "Student Visa", href: "/visa-services/student" },
      { label: "Work & Employment Visa", href: "/visa-services/work-employment" },
      { label: "Transit Visa", href: "/visa-services/transit" },
      { label: "Schengen Visa", href: "/visa-services/schengen" },
    ]
  },
  { label: "Document Checklist", href: "/document-checklist" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white/96 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-b border-border"
          : "border-b border-transparent",
      )}
    >
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex h-22 max-w-340 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp}>
          <Link
            href="/#top"
            className="flex shrink-0 items-center"
            aria-label="TRAVECO Mobility home"
          >
            <Image
              src="/images/logo.png"
              alt="TRAVECO Mobility"
              width={220}
              height={75}
              priority
              className="h-auto w-27.5 sm:w-31.25"
              style={{ height: 'auto', width: 'auto' }}
            />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="hidden items-center gap-7 lg:flex"
        >
          {navbarNavigationItems.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              
            if (link.hasDropdown && link.subItems) {
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 text-[14.5px] font-medium transition-colors hover:text-accent relative py-6",
                      isActive ? "text-accent after:absolute after:bottom-4.5 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full" : "text-primary"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80%] left-0 w-60 bg-white rounded-[12px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-border overflow-hidden py-2 z-50"
                      >
                        {link.subItems.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                "block px-5 py-2.5 text-[14px] transition-colors",
                                isSubActive ? "text-accent font-medium bg-black/2" : "text-primary/80 hover:text-accent hover:bg-black/2"
                              )}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14.5px] font-medium transition-colors hover:text-accent relative",
                  isActive ? "text-accent after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full" : "text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="hidden lg:flex">
          <Button asChild variant="default" className="h-10 rounded-control px-5 text-[14.5px]">
            <Link href="/contact">
              Get Visa Assistance
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="ml-auto flex items-center gap-2 lg:hidden"
        >
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((current) => !current)}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </motion.div>
      </motion.nav>

      <div
        id="mobile-nav-drawer"
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-128" : "max-h-0 border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-340 flex-col px-4 py-4 sm:px-6">
          {navbarNavigationItems.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));

            if (link.hasDropdown && link.subItems) {
              return (
                <div key={link.href} className="border-b border-border/60">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-3.5 text-[15px] font-medium transition-colors hover:text-accent flex items-center justify-between",
                      isActive ? "text-accent" : "text-primary"
                    )}
                  >
                    {link.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />}
                  </Link>
                  <div className="flex flex-col pl-4 pb-2 border-l-2 border-border/40 ml-2 mb-2">
                    {link.subItems.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "py-2.5 text-[14px] transition-colors",
                            isSubActive ? "text-accent font-medium" : "text-primary/70 hover:text-accent"
                          )}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-border/60 py-3.5 text-[15px] font-medium transition-colors hover:text-accent flex items-center justify-between",
                  isActive ? "text-accent" : "text-primary"
                )}
              >
                {link.label}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />}
              </Link>
            );
          })}
          <Button
            asChild
            variant="default"
            onClick={() => setOpen(false)}
            className="mt-6 h-11 w-full rounded-control text-[15px]"
          >
            <Link href="/contact">
              Get Visa Assistance
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
