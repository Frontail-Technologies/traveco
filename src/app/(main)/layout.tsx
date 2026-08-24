import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteNavbar />
      <main className="flex-1 min-h-dvh">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
