import { useEffect, useState } from 'react';

interface GlitterParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function DubaiGlitter() {
  const [particles, setParticles] = useState<GlitterParticle[]>([]);

  useEffect(() => {
    const glitters: GlitterParticle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setParticles(glitters);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          <div className="w-full h-full rotate-45">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-sm shadow-lg shadow-amber-300/50" />
          </div>
        </div>
      ))}
    </div>
  );
}
