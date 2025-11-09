import { useState } from 'react';
import img1 from "@/Bilder/1.jpg";
import img2 from "@/Bilder/2.jpg";
import img3 from "@/Bilder/3.jpg";
import img6 from "@/Bilder/6.jpg";

export default function ImageGallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      
      <section id="gallery" className="w-full flex flex-col items-center justify-start py-12">
      
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold">Unser Stand</h1>
          <p className="text-sm text-slate-500 mt-2">
            In dieser Galerie zeigen wir unseren Churros Stand auf dem Weihnachtsmarkt.
          </p>
        </div>

        {/* Галерея снизу */}
        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
          {[img1, img2, img3, img6].map((src, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-pressed={active === idx}
              onClick={() => setActive(active === idx ? null : idx)}
              onTouchStart={() => setActive(active === idx ? null : idx)}
              className={
                `relative group flex-grow transition-all rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full ` +
                (active === idx ? 'w-full z-20' : 'w-56')
              }
            >
              <img
                className="h-full w-full object-cover object-center transition-transform duration-300 will-change-transform"
                src={src}
                alt={`image-${idx}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
