import { Check } from 'lucide-react';

export default function Menu() {
  const menuItems = [
    {
      name: 'Klassische Churros',
      description: 'Frisch gebackene Churros mit Zimtzucker',
      emoji: '🍩',
      highlights: ['Traditionell', 'Knusprig', 'Mit Zucker']
    },
    {
      name: 'Schokoladen Churros',
      description: 'Churros mit cremiger Schokoladensauce',
      emoji: '🍫',
      highlights: ['Premium Schokolade', 'Cremig', 'Beliebt']
    },
    {
      name: 'Dulce de Leche',
      description: 'Mit süßer Karamellsauce',
      emoji: '🍯',
      highlights: ['Karamell', 'Süß', 'Spanisch']
    },
    {
      name: 'Erdbeer Churros',
      description: 'Mit frischer Erdbeersauce',
      emoji: '🍓',
      highlights: ['Fruchtig', 'Frisch', 'Saisonal']
    },
    {
      name: 'Nutella Churros',
      description: 'Gefüllt mit cremiger Nutella',
      emoji: '🤎',
      highlights: ['Gefüllt', 'Cremig', 'Favorite']
    },
    {
      name: 'Churros Bundle',
      description: 'Mix aus verschiedenen Sorten',
      emoji: '🎁',
      highlights: ['Variety', 'Zum Teilen', 'Bestseller']
    }
  ];

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Unser Angebot</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Unsere <span className="text-amber-600">Churros-Vielfalt</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Von klassisch bis kreativ – entdecken Sie unsere köstlichen Churro-Kreationen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {item.name}
              </h3>

              <p className="text-gray-600 text-center mb-6">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-amber-600" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors">
                Jetzt genießen
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-amber-600">Sonderwünsche?</span> Wir bereiten
              auch gerne individuelle Churro-Kreationen für Events und besondere Anlässe zu!
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
