import type { Metadata } from "next";
import { Manrope, Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { OrganizationJsonLd } from "@/components/json-ld";

const fontSans = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://traveco.in"),
  title: {
    default: "TRAVECO Mobility | Global Visa, Travel & Immigration Support",
    template: "%s | TRAVECO Mobility",
  },
  description:
    "Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TRAVECO Mobility | Global Visa, Travel & Immigration Support",
    description:
      "Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.",
    url: "https://traveco.in",
    siteName: "TRAVECO Mobility",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAVECO Mobility | Global Visa, Travel & Immigration Support",
    description:
      "Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full max-w-[100vw] flex-col overflow-x-clip"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
