interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description,
    url,
    provider: {
      "@type": "LegalService",
      name: "Lexperiens Kancelaria Radców Prawnych Zgłobicki Rohde sp. p.",
      url: "https://podzialmajatku.pl",
      telephone: "+48618937504",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Mikołaja Reja 1/8",
        postalCode: "60-826",
        addressLocality: "Poznań",
        addressCountry: "PL",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Polska",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
