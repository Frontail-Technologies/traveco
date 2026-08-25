import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { LocomotiveScrollProvider } from "@/components/providers/locomotive-scroll-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocomotiveScrollProvider>
      <SiteNavbar />
      <main className="flex-1 min-h-dvh">
        {children}
      </main>
      <SiteFooter />
    </LocomotiveScrollProvider>
  );
}
