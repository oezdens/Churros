import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'event' | 'product';
  image?: string;
}

export default function SEO({ 
  title = 'Churros & Schupfnudeln Weihnachtsmarkt Dortmund 2025 | Dubai Schokolade',
  description = 'Churros mit Dubai Schokolade und bayrische Schupfnudeln mit Speck auf dem Weihnachtsmarkt Dortmund am Markt 11. Täglich frisch zubereitet. Auch für Bochum, Essen, Herne, Unna, Castrop-Rauxel.',
  type = 'website',
  image = '/og-image.jpg'
}: SEOProps) {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness
      {
        "@type": "FoodEstablishment",
        "@id": "https://churros-dortmund.de/#business",
        "name": "Churros & Schupfnudeln Weihnachtsmarkt Dortmund",
        "description": "Churros mit Dubai Schokolade und bayrische Schupfnudeln mit Speck - frisch zubereitet auf dem Dortmunder Weihnachtsmarkt",
        "image": "https://churros-dortmund.de/og-image.jpg",
        "telephone": "0178-9348774",
        "email": "info@churros-dortmund.de",
        "priceRange": "€-€€",
        "servesCuisine": ["Spanisch", "Bayrisch", "Street Food"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Markt 11",
          "addressLocality": "Dortmund",
          "addressRegion": "NRW",
          "postalCode": "44137",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5136,
          "longitude": 7.4653
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "11:00",
            "closes": "21:00",
            "validFrom": "2025-11-20",
            "validThrough": "2025-12-30"
          }
        ],
        "hasMenu": {
          "@type": "Menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Churros",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Churros mit Dubai Schokolade",
                  "description": "Knusprige spanische Churros mit luxuriöser Dubai Schokolade"
                },
                {
                  "@type": "MenuItem",
                  "name": "Original Churros",
                  "description": "Klassische spanische Churros mit Zucker und Zimt"
                }
              ]
            },
            {
              "@type": "MenuSection",
              "name": "Schupfnudeln",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Bayrische Schupfnudeln mit Speck",
                  "description": "Traditionelle bayrische Schupfnudeln mit herzhaftem Speck und Sauerkraut"
                }
              ]
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dortmund"
          },
          {
            "@type": "City",
            "name": "Bochum"
          },
          {
            "@type": "City",
            "name": "Essen"
          },
          {
            "@type": "City",
            "name": "Herne"
          },
          {
            "@type": "City",
            "name": "Unna"
          },
          {
            "@type": "City",
            "name": "Castrop-Rauxel"
          },
          {
            "@type": "City",
            "name": "Witten"
          },
          {
            "@type": "City",
            "name": "Lünen"
          }
        ]
      },
      // Event
      {
        "@type": "Event",
        "@id": "https://churros-dortmund.de/#event",
        "name": "Churros & Schupfnudeln auf dem Dortmunder Weihnachtsmarkt 2025",
        "description": "Genießen Sie Churros mit Dubai Schokolade und bayrische Schupfnudeln mit Speck täglich auf dem Weihnachtsmarkt Dortmund",
        "startDate": "2025-11-20T11:00:00+01:00",
        "endDate": "2025-12-30T21:00:00+01:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Weihnachtsmarkt Dortmund",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Markt 11",
            "addressLocality": "Dortmund",
            "postalCode": "44137",
            "addressCountry": "DE"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Churros & Schupfnudeln Weihnachtsmarkt Dortmund",
          "url": "https://churros-dortmund.de"
        },
        "performer": {
          "@type": "Organization",
          "name": "Churros & Schupfnudeln Stand"
        }
      },
      // Product - Churros
      {
        "@type": "Product",
        "@id": "https://churros-dortmund.de/#churros",
        "name": "Churros mit Dubai Schokolade",
        "description": "Knusprige spanische Churros mit luxuriöser Dubai Schokolade - eine einzigartige Fusion auf dem Weihnachtsmarkt Dortmund",
        "brand": {
          "@type": "Brand",
          "name": "Churros Weihnachtsmarkt Dortmund"
        },
        "category": "Street Food",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "EUR",
          "availableAtOrFrom": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dortmund",
              "postalCode": "44137"
            }
          }
        }
      },
      // Product - Schupfnudeln
      {
        "@type": "Product",
        "@id": "https://churros-dortmund.de/#schupfnudeln",
        "name": "Bayrische Schupfnudeln mit Speck",
        "description": "Traditionelle bayrische Schupfnudeln mit herzhaftem Speck und Sauerkraut - authentisch zubereitet auf dem Weihnachtsmarkt Dortmund",
        "brand": {
          "@type": "Brand",
          "name": "Schupfnudeln Weihnachtsmarkt Dortmund"
        },
        "category": "Bayrische Küche",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "EUR",
          "availableAtOrFrom": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dortmund",
              "postalCode": "44137"
            }
          }
        }
      }
    ]
  };

  const keywords = [
    // Churros Keywords
    "Churros Dortmund",
    "Churros Weihnachtsmarkt Dortmund",
    "Dubai Schokolade Churros Dortmund",
    "Churros Dortmund Weihnachtsmarkt 2025",
    "Churros am Markt Dortmund",
    "Churros Bochum",
    "Churros Essen",
    "Churros Weihnachtsmarkt",
    "spanische Churros Dortmund",
    "Churros mit Schokolade Dortmund",
    // Schupfnudeln Keywords
    "Schupfnudeln Dortmund",
    "Schupfnudeln Weihnachtsmarkt Dortmund",
    "bayrische Schupfnudeln Dortmund",
    "Schupfnudeln mit Speck Dortmund",
    "Schupfnudeln Weihnachtsmarkt",
    "Schupfnudeln Ruhrgebiet",
    "Schupfnudeln Bochum",
    "Schupfnudeln Essen",
    // Weihnachtsmarkt Keywords
    "Weihnachtsmarkt Dortmund Essen",
    "Weihnachtsmarkt Dortmund 2025",
    "Essen Weihnachtsmarkt Dortmund",
    "Street Food Weihnachtsmarkt Dortmund",
    "Food Weihnachtsmarkt Dortmund",
    // Regional Keywords
    "Essen auf dem Weihnachtsmarkt Dortmund",
    "Weihnachtsmarkt Ruhrgebiet",
    "Dortmund Innenstadt Weihnachtsmarkt",
    "Markt 11 Dortmund",
    // Umliegende Städte
    "Churros Herne",
    "Churros Unna",
    "Churros Castrop-Rauxel",
    "Churros Witten",
    "Churros Lünen",
    "Schupfnudeln Herne",
    "Schupfnudeln Unna",
    "Weihnachtsmarkt Bochum Essen",
    "Weihnachtsmarkt Essen Dortmund"
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://churros-dortmund.de" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Dortmund" />
      <meta name="geo.position" content="51.5136;7.4653" />
      <meta name="ICBM" content="51.5136, 7.4653" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="de" />
      <html lang="de" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content="https://churros-dortmund.de/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://churros-dortmund.de${image}`} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Churros & Schupfnudeln Weihnachtsmarkt Dortmund" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://churros-dortmund.de/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://churros-dortmund.de${image}`} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Churros & Schupfnudeln Weihnachtsmarkt Dortmund" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
