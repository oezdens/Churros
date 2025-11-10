import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'event' | 'product';
  image?: string;
}

export default function SEO({ 
  title = 'Weihnachtsmarkt Dortmund 2025 | Churros & Schupfnudeln am Markt 11 | Dubai Schokolade',
  description = '🎄 Besuchen Sie uns auf dem Weihnachtsmarkt Dortmund 2025! Churros mit Dubai Schokolade & bayrische Schupfnudeln mit Speck am Markt 11. Täglich vom 20. Nov - 30. Dez. Street Food Stand im Herzen von Dortmund.',
  type = 'website',
  image = '/og-image.jpg'
}: SEOProps) {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness
      {
        "@type": "FoodEstablishment",
        "@id": "https://churros-schupfnudeln.de/#business",
        "name": "Churros & Schupfnudeln - Weihnachtsmarkt Dortmund 2025",
        "alternateName": "Churros Stand Weihnachtsmarkt Dortmund",
        "description": "Temporärer Food Stand auf dem Dortmunder Weihnachtsmarkt 2025. Churros mit Dubai Schokolade und bayrische Schupfnudeln mit Speck - täglich frisch zubereitet vom 20. November bis 30. Dezember 2025",
        "image": "https://churros-schupfnudeln.de/og-image.jpg",
        "telephone": "0178-9348774",
        "email": "info@churros-dortmund.de",
        "priceRange": "€-€€",
        "servesCuisine": ["Spanisch", "Bayrisch", "Street Food"],
        "paymentAccepted": "Cash, Card",
        "currenciesAccepted": "EUR",
        "keywords": "Weihnachtsmarkt Dortmund, Churros, Schupfnudeln, Dubai Schokolade, Street Food, Weihnachtsmarkt Stand, Food Stand Dortmund",
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
        "@id": "https://churros-schupfnudeln.de/#event",
        "name": "Churros & Schupfnudeln auf dem Weihnachtsmarkt Dortmund 2025",
        "alternateName": "Food Stand Weihnachtsmarkt Dortmund",
        "description": "Besuchen Sie unseren temporären Stand auf dem Dortmunder Weihnachtsmarkt 2025! Genießen Sie täglich frische Churros mit Dubai Schokolade und bayrische Schupfnudeln mit Speck. Zentral am Markt 11 gelegen.",
        "startDate": "2025-11-20T11:00:00+01:00",
        "endDate": "2025-12-30T21:00:00+01:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "isAccessibleForFree": false,
        "keywords": "Weihnachtsmarkt Dortmund 2025, Churros Weihnachtsmarkt, Schupfnudeln Stand, Dubai Schokolade, Street Food Weihnachtsmarkt, Weihnachtsmarkt Essen",
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
          "url": "https://churros-schupfnudeln.de"
        },
        "performer": {
          "@type": "Organization",
          "name": "Churros & Schupfnudeln Stand"
        }
      },
      // Product - Churros
      {
        "@type": "Product",
        "@id": "https://churros-schupfnudeln.de/#churros",
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
        "@id": "https://churros-schupfnudeln.de/#schupfnudeln",
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
    // Weihnachtsmarkt Dortmund Keywords (PRIORITÄT!)
    "Weihnachtsmarkt Dortmund",
    "Weihnachtsmarkt Dortmund 2025",
    "Weihnachtsmarkt Dortmund Essen",
    "Weihnachtsmarkt Dortmund Stände",
    "Weihnachtsmarkt Dortmund Food",
    "Weihnachtsmarkt Dortmund Street Food",
    "Essen auf dem Weihnachtsmarkt Dortmund",
    "Food Weihnachtsmarkt Dortmund",
    "Weihnachtsmarkt Dortmund Markt 11",
    "Dortmunder Weihnachtsmarkt",
    "Dortmund Weihnachtsmarkt",
    "Weihnachtsmarkt Dortmund Innenstadt",
    "Was essen auf Weihnachtsmarkt Dortmund",
    "Beste Stände Weihnachtsmarkt Dortmund",
    "Weihnachtsmarkt Dortmund Öffnungszeiten",
    "Weihnachtsmarkt Dortmund 2025 Termine",
    // Churros + Weihnachtsmarkt
    "Churros Weihnachtsmarkt Dortmund",
    "Churros Dortmund Weihnachtsmarkt 2025",
    "Churros Weihnachtsmarkt",
    "Churros Dortmund",
    "Dubai Schokolade Churros Dortmund",
    "Churros am Markt Dortmund",
    "Churros mit Dubai Schokolade Weihnachtsmarkt",
    "spanische Churros Weihnachtsmarkt Dortmund",
    "Churros Stand Dortmund",
    // Schupfnudeln + Weihnachtsmarkt
    "Schupfnudeln Weihnachtsmarkt Dortmund",
    "Schupfnudeln Dortmund Weihnachtsmarkt",
    "Schupfnudeln Weihnachtsmarkt",
    "bayrische Schupfnudeln Weihnachtsmarkt Dortmund",
    "Schupfnudeln mit Speck Dortmund",
    "Schupfnudeln Stand Weihnachtsmarkt",
    "Schupfnudeln Dortmund",
    // Regional + Weihnachtsmarkt
    "Weihnachtsmarkt Ruhrgebiet",
    "Weihnachtsmarkt NRW",
    "Churros Bochum",
    "Churros Essen",
    "Churros Herne",
    "Schupfnudeln Bochum",
    "Schupfnudeln Essen",
    "Schupfnudeln Ruhrgebiet",
    // Saisonale & temporäre Keywords
    "Weihnachtsmarkt Dortmund temporärer Stand",
    "Saisonaler Food Stand Dortmund",
    "Street Food Weihnachtszeit Dortmund",
    "Weihnachtsmarkt Dortmund November Dezember",
    "Weihnachtsmarkt Dortmund bis 30. Dezember",
    // Umliegende Städte
    "Churros Unna",
    "Churros Castrop-Rauxel",
    "Churros Witten",
    "Churros Lünen",
    "Schupfnudeln Herne",
    "Schupfnudeln Unna",
    "Weihnachtsmarkt Bochum Churros",
    "Weihnachtsmarkt Essen Schupfnudeln"
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://churros-schupfnudeln.de" />
      
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
      <meta property="og:url" content="https://churros-schupfnudeln.de/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://churros-schupfnudeln.de${image}`} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Churros & Schupfnudeln Weihnachtsmarkt Dortmund" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://churros-schupfnudeln.de/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://churros-schupfnudeln.de${image}`} />
      
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
