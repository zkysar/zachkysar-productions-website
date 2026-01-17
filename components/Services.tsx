import React from 'react';
import { ServicePackage } from '../types';
import { Music, Film, Clapperboard } from 'lucide-react';

const services: ServicePackage[] = [
  {
    title: "Concert Photography",
    price: "$100",
    features: ["2+ photos per band member", "Shot while you play", "24hr turnaround", "+$30 for band portraits"],
    category: "concert",
    icon: <Music className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Music Video Production",
    price: "$500",
    features: ["Concept development", "Filming", "Color Grading", "Editing"],
    category: "music-video",
    icon: <Clapperboard className="w-6 h-6 text-red-400" />
  },
  {
    title: "Musician Content",
    price: "$250",
    features: ["1 day shoot", "3 short clips", "1 BTS clip"],
    category: "music-video",
    icon: <Film className="w-6 h-6 text-red-400" />
  },
  {
    title: "Wedding Cinema",
    price: "$500",
    features: ["Ceremony & reception", "Highlight film (3-5 min)", "Full ceremony cut raw"],
    category: "wedding",
    icon: <Film className="w-6 h-6 text-amber-400" />
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-zinc-900/30 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Pricing</h2>
          <p className="text-zinc-400">These are ballpark numbers. We can adjust based on what you actually need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 font-mono mb-6">{service.price}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-zinc-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all text-sm font-semibold uppercase tracking-wider"
              >
                Get in Touch
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;