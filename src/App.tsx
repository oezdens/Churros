import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import ImageGallery from './components/ui/image-gallery';
import Schupfnudeln from './components/Schupfnudeln';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Snowfall from './components/Snowfall';

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      <Snowfall />
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-amber-600">Churros</span>
                <span className="text-2xl font-bold text-gray-400">&</span>
                <span className="text-3xl font-bold text-blue-600">Schupfnudeln</span>
              </div>
              <div className="text-sm text-gray-600">Weihnachtsmarkt Dortmund</div>
            </div>
            <div className="flex items-center space-x-6">
              {/* Desktop links */}
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors font-medium hidden md:block">Unser Stand</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium hidden md:block">Kontakt</a>

              {/* Phone CTA */}
              <a href="tel:01789348774" className="flex items-center space-x-2 bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-all shadow-md hover:shadow-lg">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0178 9348774</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen((s) => !s)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        
          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
              <div className="px-4 pt-4 pb-6 space-y-3">
                <a onClick={() => setMobileOpen(false)} href="#gallery" className="block text-gray-700 font-medium">Unser Stand</a>
                <a onClick={() => setMobileOpen(false)} href="#contact" className="block text-gray-700 font-medium">Kontakt</a>
                <a href="tel:01789348774" className="block text-gray-700 font-medium">0178 9348774</a>
              </div>
            </div>
          )}

        </div>
      </nav>

      <Hero />
      <ImageGallery />
      <Schupfnudeln />
      <Contact />
      <Footer
        onImpressumClick={() => setShowImpressum(true)}
        onDatenschutzClick={() => setShowDatenschutz(true)}
      />

      <Modal isOpen={showImpressum} onClose={() => setShowImpressum(false)}>
        <Impressum />
      </Modal>

      <Modal isOpen={showDatenschutz} onClose={() => setShowDatenschutz(false)}>
        <Datenschutz />
      </Modal>
    </div>
  );
}

export default App;
