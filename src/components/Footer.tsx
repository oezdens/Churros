import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onImpressumClick: () => void;
  onDatenschutzClick: () => void;
}

export default function Footer({ onImpressumClick, onDatenschutzClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Churros Weihnachtsmarkt Dortmund</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Dubai Schokolade küsst Churros - frisch zubereitet und mit Liebe serviert.
              Besuchen Sie uns auf dem Weihnachtsmarkt am Markt in Dortmund!
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Markt+11,+44137+Dortmund"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Markt 11<br />44137 Dortmund</span>
              </a>
              <a
                href="tel:01789348774"
                className="flex items-center space-x-2 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0178 9348774</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-amber-500">Weihnachtsmarkt-Zeiten</p>
              <p>Täglich während des</p>
              <p>Dortmunder Weihnachtsmarktes</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Churros Weihnachtsmarkt Dortmund. Alle Rechte vorbehalten.
          </p>

          <div className="flex space-x-6 text-sm">
            <button
              onClick={onImpressumClick}
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={onDatenschutzClick}
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
