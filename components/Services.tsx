import React from 'react';
import { ServicePackage } from '../types';
import { Camera, Music, Film, Heart, Clapperboard } from 'lucide-react';

const services: ServicePackage[] = [
  {
    title: "Concert Photography",
    price: "Starts at $400",
    features: ["Full set coverage", "30+ High-res edits", "24hr turnaround", "Artist portraits"],
    category: "concert",
    icon: <Music className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Tour Documentation",
    price: "Custom Quote",
    features: ["Full tour coverage", "Daily recap reels", "Behind the scenes", "Lifestyle content"],
    category: "concert",
    icon: <Camera className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Music Video Production",
    price: "Starts at $1,200",
    features: ["Concept development", "4K Filming", "Professional Color Grading", "VFX & Editing"],
    category: "music-video",
    icon: <Clapperboard className="w-6 h-6 text-red-400" />
  },
  {
    title: "Wedding Cinema",
    price: "Starts at $2,500",
    features: ["8 Hours coverage", "Highlight film (3-5 min)", "Drone footage", "Full ceremony cut"],
    category: "wedding",
    icon: <Film className="w-6 h-6 text-amber-400" />
  },
  {
    title: "Love Stories",
    price: "Starts at $1,800",
    features: ["Engagement Session", "Full Wedding Day Photo", "Online Gallery", "Print Rights"],
    category: "wedding",
    icon: <Heart className="w-6 h-6 text-amber-400" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-zinc-900/30 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Investment</h2>
          <p className="text-zinc-400">Straightforward packages for your most important moments.</p>
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

              <button className="w-full py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all text-sm font-semibold uppercase tracking-wider">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;