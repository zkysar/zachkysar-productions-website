import React, { useState, useEffect, useRef } from 'react';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import { PortfolioItem, Category } from './types';
import { Menu, X, ArrowDown } from 'lucide-react';

// Mock Data
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'furious-tits',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC09331-compressed.jpg',
    title: 'Furious Tits',
    description: 'Furious Tits at Rickshaw Stop in San Francisco on 2025-06-07.',
    span: 'col-span-2',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC09331-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC09722-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC00067-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC00182-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/thefurioustits/', label: '@thefurioustits' }
  },
  {
    id: 'yohito',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07731-compressed.jpg',
    title: 'Yohito',
    description: 'Yohito at Ruby Room, Shibuya on 2025-04-05.',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07731-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07874-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07815-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07943-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07488-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07824-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/yohito/compressed/DSC07737-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/yuhito3/', label: '@yuhito3' }
  },
  {
    id: 'dumpster-love',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03643-Enhanced-NR-compressed.jpg',
    title: 'Dumpster Love',
    description: 'Dumpster Love at Golden Gate Park on 2024-12-07.',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03643-Enhanced-NR-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03559-Enhanced-NR-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03802-Enhanced-NR-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03767-Enhanced-NR-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/dump/compressed/DSC03551-Enhanced-NR-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/dumpster.love/', label: '@dumpster.love' }
  },
  {
    id: 'lizzie-waters',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09657-compressed.jpg',
    title: 'Lizzie Waters',
    description: 'Lizzie Waters at a backyard on 2024-10-18.',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09657-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09735-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09572-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09639-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/Lizze/compressed/DSC09619-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/lizzie_waters/', label: '@lizzie_waters' }
  },
  {
    id: 'if-you-say-so',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/IYSS/compressed/DSC03580-compressed.jpg',
    title: 'If You Say So',
    description: 'If You Say So at the Bottom of the Hill in San Francisco on 2024-08-28.',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/IYSS/compressed/DSC03580-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/IYSS/compressed/DSC03588-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/IYSS/compressed/DSC03493-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/IYSS/compressed/DSC03602-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/ifyousaysoband/', label: '@ifyousaysoband' }
  },
  {
    id: 'jolene',
    type: 'photo',
    category: 'concert',
    src: 'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07560-compressed.jpg',
    title: 'Jolene',
    description: 'Jolene at Brick and Mortar SF on 2026-01-25.',
    span: 'col-span-2',
    gallery: [
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07560-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07443-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC06794-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC06591-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07635-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07484-compressed.jpg',
      'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC06045-compressed.jpg',
    ],
    link: { url: 'https://www.instagram.com/this.is.jolene/', label: '@this.is.jolene' }
  },
  {
    id: 'monte-lately',
    type: 'video',
    category: 'music-video',
    src: 'https://img.youtube.com/vi/-yZTXWRSwCk/maxresdefault.jpg',
    title: 'Monte Lately',
    description: 'A documentary of Monte Lately, a local musician in San Francisco.',
    span: 'col-span-2',
    link: { url: 'https://youtu.be/-yZTXWRSwCk', label: 'Watch on YouTube' }
  },
  {
    id: 'tommy-p-doc',
    type: 'video',
    category: 'music-video',
    src: 'https://img.youtube.com/vi/uskvwX0XALo/maxresdefault.jpg',
    title: 'Tommy P',
    description: 'A documentary following Tommy P, a San Francisco musician.',
    link: { url: 'https://youtu.be/uskvwX0XALo', label: 'Watch on YouTube' }
  },
  {
    id: 'ricky-music-video',
    type: 'video',
    category: 'music-video',
    src: 'https://img.youtube.com/vi/EzNnsUpVPZk/maxresdefault.jpg',
    title: 'Ricky',
    description: 'Official music video for "Ricky" by Tommy P.',
    link: { url: 'https://www.youtube.com/watch?v=EzNnsUpVPZk', label: 'Watch on YouTube' }
  },
  {
    id: 'di-daniel',
    type: 'video',
    category: 'wedding',
    src: 'https://img.youtube.com/vi/21lDCBNLcQ0/maxresdefault.jpg',
    title: 'Di & Daniel',
    description: 'Wedding reception highlight reel.',
    span: 'col-span-2',
    link: { url: 'https://www.youtube.com/watch?v=21lDCBNLcQ0', label: 'Watch on YouTube' }
  },
];

// Background assets for Hero slider with categories
// wedding = dandi, music-video = tommyp/monte/ricky, concert = all images
type HeroAsset = { type: 'image' | 'video'; src: string; category: Exclude<Category, 'all'> };

const HERO_ASSETS: HeroAsset[] = [
  // Wedding (dandi) - first
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/dandi-015.mp4', category: 'wedding' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/dandi-335.mp4', category: 'wedding' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/dandi-229.mp4', category: 'wedding' },
  // Music Videos (tommyp, monte, ricky)
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/tommyp-intro.mp4', category: 'music-video' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/monte-345.mp4', category: 'music-video' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/monte-835.mp4', category: 'music-video' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/ricky-053.mp4', category: 'music-video' },
  { type: 'video', src: 'https://zkysar-photography.s3.amazonaws.com/hero-clips-web/ricky-007.mp4', category: 'music-video' },
  // Concert (all images)
  { type: 'image', src: 'https://zkysar-photography.s3.amazonaws.com/photography/tits/compressed/DSC09331-compressed.jpg', category: 'concert' },
  { type: 'image', src: 'https://zkysar-photography.s3.amazonaws.com/photography/ochamememe/compressed/DSC06741-compressed.jpg', category: 'concert' },
  { type: 'image', src: 'https://zkysar-photography.s3.amazonaws.com/photography/ochamememe/compressed/DSC06595-compressed.jpg', category: 'concert' },
  { type: 'image', src: 'https://zkysar-photography.s3.amazonaws.com/photography/ian/compressed/DSC06611-Enhanced-SR-compressed.jpg', category: 'concert' },
  { type: 'image', src: 'https://zkysar-photography.s3.amazonaws.com/photography/jolene/compressed/DSC07560-compressed.jpg', category: 'concert' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState<Category>('all');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Get indices of assets matching current filter
  const filteredIndices = HERO_ASSETS
    .map((asset, i) => (filter === 'all' || asset.category === filter) ? i : -1)
    .filter(i => i !== -1);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background Slider Logic - reset when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredIndices.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(slideInterval);
  }, [filteredIndices.length]);

  // Control video playback - play active video from start, pause others
  const activeAssetIndex = filteredIndices[currentSlide];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeAssetIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeAssetIndex]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-serif font-bold tracking-tighter cursor-pointer ${!isScrolled ? '[text-shadow:_0_1px_8px_rgb(0_0_0_/_60%)]' : ''}`} onClick={() => scrollTo('hero')}>
            Zach Kysar<span className="text-zinc-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 ${!isScrolled ? '[text-shadow:_0_1px_8px_rgb(0_0_0_/_60%)]' : ''}`}>
            <button onClick={() => scrollTo('portfolio')} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-400 hover:text-white' : 'text-white hover:text-zinc-200'}`}>Portfolio</button>
            <button onClick={() => scrollTo('services')} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-400 hover:text-white' : 'text-white hover:text-zinc-200'}`}>Services</button>
            <button onClick={() => scrollTo('about')} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-400 hover:text-white' : 'text-white hover:text-zinc-200'}`}>About</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium px-5 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors [text-shadow:none]">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden text-white ${!isScrolled ? '[text-shadow:_0_1px_8px_rgb(0_0_0_/_60%)]' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        {/* Background Slider - all assets stay mounted to prevent re-downloads */}
        <div className="absolute inset-0 z-0">
          {HERO_ASSETS.map((asset, index) => (
            <div
              key={asset.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeAssetIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {asset.type === 'video' ? (
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={asset.src}
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={asset.src}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/60 to-zinc-950 z-10"></div>
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
            Concert photography and wedding videos.
            I shoot the sweaty encore and the ugly-cry during vows.
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

      <PortfolioGrid items={PORTFOLIO_ITEMS} filter={filter} onFilterChange={setFilter} />
      
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