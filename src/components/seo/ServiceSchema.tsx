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
      name: "podzialmajatku.pl",
      url: "https://podzialmajatku.pl",
      telephone: "+48123456789",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
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
