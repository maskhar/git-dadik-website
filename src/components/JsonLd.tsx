export const JsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dadikwahyuchang.com/#person",
    name: "Dadik Wahyu Chang",
    jobTitle: "Strategic Brand Consultant",
    description: "Konsultan brand strategis yang membantu bisnis bertransformasi dari 'Komoditas' menjadi 'Legacy' melalui Brand Strategy, Brand Identity, dan Legal Protection.",
    url: "https://dadikwahyuchang.com",
    image: "https://dadikwahyuchang.com/dadik-profile.jpg",
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
    "@id": "https://dadikwahyuchang.com/#business",
    name: "Dadik Wahyu Chang - Brand Consulting",
    description: "Layanan konsultasi brand strategis meliputi Brand Strategy, Brand Identity, dan Legal Protection untuk bisnis di Indonesia.",
    url: "https://dadikwahyuchang.com",
    logo: "https://dadikwahyuchang.com/logo.png",
    image: "https://dadikwahyuchang.com/og-image.jpg",
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
      "@id": "https://dadikwahyuchang.com/#person"
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
    "@id": "https://dadikwahyuchang.com/#website",
    url: "https://dadikwahyuchang.com",
    name: "Dadik Wahyu Chang",
    description: "Strategic Brand Consultant - From Commodity to Legacy",
    publisher: {
      "@id": "https://dadikwahyuchang.com/#person"
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
