import { ChevronRight } from 'lucide-react';
import churrosImg from '../Bilder/Churros1.jpg';
import tileImg1 from '../Bilder/AB.jpg';
import tileImg2 from '../Bilder/IMG-20251109-WA0034.jpg';
import tileImg3 from '../Bilder/a.png';

export default function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-amber-600/10 text-amber-700 px-4 py-2 rounded-full text-base font-semibold">
                <span className="text-2xl">🎄</span> Jetzt auf dem Weihnachtsmarkt <span className="text-2xl">🎄</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Dubai Schokolade
              <span className="block text-amber-600">küsst Churros</span>
              
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Erleben Sie die einzigartige Fusion: Knusprige spanische Churros mit 
              luxuriöser Dubai Schokolade. Exklusiv an unserem Stand auf dem Weihnachtsmarkt Dortmund.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="font-semibold">Besuchen Sie uns</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl -rotate-3 opacity-30"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={churrosImg}
                    alt="Churros"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">100% knusprige Churros</span>
                    <span className="text-2xl font-bold text-amber-600">✨</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {([tileImg1, tileImg2, tileImg3] as string[]).map((src, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-amber-50 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                    >
                      <img src={src} alt={`tile-${i + 1}`} className="w-full h-full object-cover" />
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
