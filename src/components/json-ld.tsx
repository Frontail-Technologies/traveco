export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "LocalBusiness"],
        name: "TRAVECO Mobility",
        url: "https://traveco.in",
        description:
          "Professional visa documentation, application assistance and international travel support for individuals, families, students and business travellers.",
        email: "info@traveco.in",
        areaServed: "IN",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      }}
    />
  );
}
