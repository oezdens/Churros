export default function Impressum() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 DDG (ehemals TMG)</h2>
        <div className="space-y-2 text-gray-700">
          <p>Robert Theiß</p>
          <p>Markt 11</p>
          <p>44137 Dortmund</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium">Telefon:</span> 0800 77777 27</p>
          <p><span className="font-medium">E-Mail:</span> Theissankauf@web.de</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV (ehemals § 55 Abs. 2 RStV)</h2>
        <div className="space-y-2 text-gray-700">
          <p>Robert Theiß</p>
          <p>Markt 11</p>
          <p>44137 Dortmund</p>
          <p>Telefon: 0800 77777 27</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
        <p className="text-gray-700 mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p className="text-gray-700">
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p className="text-gray-700">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
}
