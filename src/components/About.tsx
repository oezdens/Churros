import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Mit Liebe gemacht',
      description: 'Jeder Churro wird mit Leidenschaft und nach traditionellem Rezept zubereitet.'
    },
    {
      icon: Award,
      title: 'Premium Qualität',
      description: 'Nur die besten Zutaten für ein unvergleichliches Geschmackserlebnis.'
    },
    {
      icon: Users,
      title: 'Für jeden Anlass',
      description: 'Ob zum Mitnehmen, für Events oder einfach zum Genießen vor Ort.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Über uns</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Spanische Tradition trifft <span className="text-amber-600">Dortmund</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bringen die authentische spanische Churro-Tradition nach Dortmund.
            Frisch zubereitet, knusprig gebacken und mit Liebe serviert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Die Geschichte unserer Churros
              </h3>
              <p className="text-amber-50 text-lg leading-relaxed mb-6">
                Unsere Churros werden nach traditionellem spanischen Rezept hergestellt.
                Der Teig wird frisch zubereitet, durch eine Sterntülle gepresst und in
                hochwertigem Öl goldbraun ausgebacken.
              </p>
              <p className="text-amber-50 text-lg leading-relaxed">
                Das Ergebnis: außen knusprig, innen weich und luftig – ein perfekter
                Genussmoment, den Sie nicht verpassen sollten!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '100%', label: 'Frisch zubereitet' },
                { number: '500+', label: 'Glückliche Kunden' },
                { number: '5★', label: 'Bewertung' },
                { number: '10+', label: 'Variationen' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-amber-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
