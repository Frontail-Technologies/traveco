"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const navbarNavigationItems = [
  { label: "Visa Services", href: "/#visa-services" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Document Checklist", href: "/document-checklist" },
  { label: "About Us", href: "/#about-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        "fixed inset-x-0 top-0 z-50 bg-white/[0.96] backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-b border-border"
          : "border-b border-transparent",
      )}
    >
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex h-[88px] max-w-340 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
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
              className="h-auto w-[110px] sm:w-[125px]"
              style={{ height: 'auto' }}
            />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="hidden items-center gap-7 lg:flex"
        >
          {navbarNavigationItems.map((link) => {
            const isActive = link.href === "/document-checklist" && pathname?.startsWith("/document-checklist");
              
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14.5px] font-medium transition-colors hover:text-accent relative",
                  isActive ? "text-accent after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-accent after:rounded-full" : "text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="hidden lg:flex">
          <Button asChild className="h-10 rounded-full bg-primary px-5 text-[14.5px] font-medium text-white transition-colors hover:bg-primary/90">
            <Link href="/#contact">
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
            const isActive = link.href === "/document-checklist" && pathname?.startsWith("/document-checklist");

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
            onClick={() => setOpen(false)}
            className="mt-6 h-11 w-full rounded-full bg-primary text-[15px] font-medium text-white transition-colors hover:bg-primary/90"
          >
            <Link href="/#contact">
              Get Visa Assistance
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
