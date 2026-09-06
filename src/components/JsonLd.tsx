export const JsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dadikwahyuchang.id/#person",
    name: "Dadik Wahyu Chang",
    jobTitle: "Strategic Brand Consultant",
    description: "Konsultan brand strategis yang membantu bisnis bertransformasi dari 'Komoditas' menjadi 'Legacy' melalui Brand Strategy, Brand Identity, dan Legal Protection.",
    url: "https://dadikwahyuchang.id",
    image: "https://dadikwahyuchang.id/images/photos/3%20pak%20dadik.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID"
    },
    knowsAbout: [
      "Brand Strategy",
      "Brand Identity Design",
      "Logo Design",
      "Trademark Registration",
      "Intellectual Property",
      "Creative Direction"
    ],
    sameAs: [
      "https://www.instagram.com/dadikwahyuchangutero/",
      "https://www.facebook.com/dadikwahyuutero",
      "https://www.youtube.com/@DadikwahyuChang",
      "https://www.tiktok.com/@dadikwahyuchang",
      "https://x.com/dadikwahyuutero",
      "https://wa.me/6281999900900"
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://dadikwahyuchang.id/#business",
    name: "Dadik Wahyu Chang - Brand Consulting",
    description: "Layanan konsultasi brand strategis meliputi Brand Strategy, Brand Identity, dan Legal Protection untuk bisnis di Indonesia.",
    url: "https://dadikwahyuchang.id",
    logo: "https://dadikwahyuchang.id/favicon.svg",
    image: "https://dadikwahyuchang.id/images/photos/3%20pak%20dadik.png",
    telephone: "+6281999900900",
    email: "dadikwah75@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "Jawa Timur",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.9666,
      longitude: 112.6326
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia"
    },
    priceRange: "$$",
    founder: {
      "@id": "https://dadikwahyuchang.id/#person"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Strategy",
            description: "Merumuskan positioning, value proposition, dan roadmap brand Anda."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity",
            description: "Menciptakan visual identity yang memorable dan konsisten."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Legal Protection",
            description: "Perlindungan hukum merek melalui pendaftaran HKI."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dadikwahyuchang.id/#website",
    url: "https://dadikwahyuchang.id",
    name: "Dadik Wahyu Chang",
    description: "Strategic Brand Consultant - From Commodity to Legacy",
    publisher: {
      "@id": "https://dadikwahyuchang.id/#person"
    },
    inLanguage: "id-ID"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
};
