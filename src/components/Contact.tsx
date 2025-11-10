import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Markt 11',
      content2: '44137 Dortmund',
      action: 'Route planen',
      href: 'https://maps.google.com/?q=Markt+11,+44137+Dortmund'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '0178 9348774',
      content2: 'Täglich erreichbar',
      action: 'Anrufen',
      href: 'tel:01789348774'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      content: '20. Nov. - 30. Dez. 2025',
      content2: 'Mo-Do: 11-21 Uhr, Fr-Sa: 11-22 Uhr, So: 12-21 Uhr'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Kontakt</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Besuchen Sie uns auf dem <span className="text-amber-600">Weihnachtsmarkt</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns auf Ihren Besuch! Genießen Sie Dubai Schokolade küsst Churros und unser leckeres Sauerkraut mit Schupfnudeln und Speck aus der Gusspfanne während des Weihnachtsmarktes in Dortmund.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 mb-6">{info.content2}</p>

                {info.action && (
                  <a
                    href={info.href}
                    target={info.icon === MapPin ? '_blank' : undefined}
                    rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    <span>{info.action}</span>
                    <Navigation className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Auf dem Dortmunder Weihnachtsmarkt
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Unser Stand befindet sich auf dem Weihnachtsmarkt am Markt in Dortmund.
                Besuchen Sie uns während der Weihnachtsmarktzeit und genießen Sie die besondere
                Kombination aus Dubai Schokolade Churros und Sauerkraut mit Schupfnudeln und Speck aus der Gusspfanne in festlicher Atmosphäre.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Mitten auf dem Weihnachtsmarkt</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Täglich während der Weihnachtsmarkt-Zeiten geöffnet</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Churros mit Dubai Schokolade & Sauerkraut mit Schupfnudeln und Speck</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Markt+11,+44137+Dortmund"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-fit"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">In Google Maps öffnen</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 sm:p-12 flex items-center justify-center">
              <div className="text-center space-y-6 w-full">
                <div className="text-8xl mb-4">📍</div>
                <p className="text-2xl font-bold text-white">Markt 11</p>
                <p className="text-xl text-amber-100">44137 Dortmund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
