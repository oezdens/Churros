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

      {/* Animated Christmas Trees */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-10 left-[10%] text-6xl animate-float-slow">🎄</div>
        <div className="absolute top-32 right-[15%] text-5xl animate-float-medium" style={{ animationDelay: '1s' }}>🎄</div>
        <div className="absolute bottom-32 left-[20%] text-7xl animate-float-slow" style={{ animationDelay: '2s' }}>🎄</div>
        <div className="absolute top-48 left-[40%] text-4xl animate-float-medium" style={{ animationDelay: '0.5s' }}>🎄</div>
        <div className="absolute bottom-20 right-[25%] text-6xl animate-float-slow" style={{ animationDelay: '1.5s' }}>🎄</div>
        <div className="absolute top-24 right-[40%] text-5xl animate-float-medium" style={{ animationDelay: '2.5s' }}>🎄</div>
        <div className="absolute top-60 left-[5%] text-5xl animate-float-slow" style={{ animationDelay: '3s' }}>🎄</div>
        <div className="absolute bottom-48 right-[8%] text-6xl animate-float-medium" style={{ animationDelay: '1.8s' }}>🎄</div>
        <div className="absolute top-36 left-[60%] text-4xl animate-float-slow" style={{ animationDelay: '2.2s' }}>🎄</div>
        <div className="absolute bottom-24 left-[35%] text-5xl animate-float-medium" style={{ animationDelay: '0.8s' }}>🎄</div>
        <div className="absolute top-16 right-[55%] text-7xl animate-float-slow" style={{ animationDelay: '3.5s' }}>🎄</div>
        <div className="absolute bottom-40 right-[45%] text-4xl animate-float-medium" style={{ animationDelay: '1.2s' }}>🎄</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-full flex justify-start">
              <p className="text-lg font-medium text-slate-700 mb-1 text-left tracking-wide">20. Nov. bis 30. Dez. 2025</p>
            </div>

            <div className="inline-block">
              <span className="bg-amber-600/10 text-amber-700 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap">
                <span className="text-xl sm:text-2xl">🎄</span> Jetzt auf dem Weihnachtsmarkt <span className="text-xl sm:text-2xl">🎄</span>
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
