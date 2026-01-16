import React, { useState, useEffect } from 'react';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import { PortfolioItem } from './types';
import { Menu, X, ArrowDown } from 'lucide-react';

// Mock Data
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    type: 'photo',
    category: 'concert',
    src: 'https://picsum.photos/800/600?random=1',
    title: 'Neon Nights',
    description: 'The Midnight live at The Roxy.',
    span: 'col-span-2'
  },
  {
    id: '7',
    type: 'video',
    category: 'music-video',
    src: 'https://picsum.photos/800/800?random=7',
    title: 'Neon Drift - "Midnight Run"',
    description: 'Official Music Video. Directed & Edited.',
    span: 'col-span-2'
  },
  {
    id: '2',
    type: 'video',
    category: 'wedding',
    src: 'https://picsum.photos/600/800?random=2',
    title: 'Sarah & James',
    description: 'A cinematic highlight reel in Napa Valley.',
  },
  {
    id: '3',
    type: 'photo',
    category: 'concert',
    src: 'https://picsum.photos/600/600?random=3',
    title: 'Backstage Chaos',
    description: 'Raw moments before the curtain drop.',
  },
  {
    id: '4',
    type: 'video',
    category: 'concert',
    src: 'https://picsum.photos/800/800?random=4',
    title: 'Summer Festival Tour',
    description: '30 days on the road with The Drifters.',
  },
  {
    id: '5',
    type: 'photo',
    category: 'wedding',
    src: 'https://picsum.photos/600/800?random=5',
    title: 'Golden Hour Vows',
    description: 'Intimate elopement on the coast.',
  },
  {
    id: '8',
    type: 'video',
    category: 'music-video',
    src: 'https://picsum.photos/600/800?random=8',
    title: 'The Alchemists',
    description: 'Studio Sessions & Performance Visualizer.',
  },
  {
    id: '6',
    type: 'photo',
    category: 'concert',
    src: 'https://picsum.photos/800/600?random=6',
    title: 'Crowd Surfer',
    description: 'The energy of 10,000 fans.',
    span: 'col-span-2'
  },
];

// Background assets for Hero slider
const HERO_ASSETS = [
  // Concert Crowd / Stage
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
  // Cinematic Wedding
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  // Music Video / Band style
  'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop',
  // Artistic / Studio
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background Slider Logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_ASSETS.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
            Zach Kysar<span className="text-zinc-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('portfolio')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Portfolio</button>
            <button onClick={() => scrollTo('services')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium px-5 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          <button onClick={() => scrollTo('portfolio')} className="text-3xl font-serif">Portfolio</button>
          <button onClick={() => scrollTo('services')} className="text-3xl font-serif">Services</button>
          <button onClick={() => scrollTo('about')} className="text-3xl font-serif">About</button>
          <button onClick={() => scrollTo('contact')} className="text-3xl font-serif text-amber-500">Book Now</button>
        </div>
      )}

      {/* Hero Section with Cycling Background */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {HERO_ASSETS.map((asset, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={asset}
                alt={`Background ${index + 1}`} 
                className="w-full h-full object-cover animate-[pulse_10s_infinite_alternate]"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <p className="text-amber-500 tracking-[0.3em] text-sm md:text-base font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            PHOTOGRAPHY & CINEMATOGRAPHY
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Capturing the <br/> 
            <span className="italic font-light text-zinc-400">Noise & Nuance</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Specializing in high-energy concert documentation and cinematic wedding storytelling. 
            Visuals that feel as loud as the music and as deep as the love.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={() => scrollTo('portfolio')} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
              View Works
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-3 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <button onClick={() => scrollTo('portfolio')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors animate-bounce z-20">
          <ArrowDown size={24} />
        </button>
      </section>

      <PortfolioGrid items={PORTFOLIO_ITEMS} />
      
      <Services />
      
      <About />
      
      <Contact />

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Zach Kysar Productions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;