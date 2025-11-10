import { ChevronRight } from 'lucide-react';

export default function Schupfnudeln() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden mt-20">
      {/* Bavarian diamond pattern background */}
      <div className="absolute inset-0 bg-white">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bavarian-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="#BBDEFB" />
              <rect x="40" width="40" height="40" fill="white" />
              <rect y="40" width="40" height="40" fill="white" />
              <rect x="40" y="40" width="40" height="40" fill="#BBDEFB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bavarian-pattern)" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-white/40"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-base font-semibold">
                <span className="text-2xl">🥨</span> Bayrische Spezialität <span className="text-2xl">🥨</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Schupfnudeln
              <span className="block text-blue-600">mit Speck</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Genießen Sie traditionelle bayrische Schupfnudeln mit herzhaftem Speck. 
              Frisch zubereitet und perfekt gewürzt – ein echter Weihnachtsmarkt-Klassiker.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="font-semibold">Besuchen Sie uns</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl -rotate-3 opacity-30"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">🥔</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">100% traditionell bayrisch</span>
                    <span className="text-2xl font-bold text-blue-600">🍴</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {['🥓', '🧈', '🧅'].map((emoji, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-blue-50 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-4xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
