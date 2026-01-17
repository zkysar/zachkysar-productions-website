import React, { useState } from 'react';
import { PortfolioItem, Category } from '../types';
import { Play, ZoomIn, X, ChevronLeft, ChevronRight, ExternalLink, Images } from 'lucide-react';

interface PortfolioGridProps {
  items: PortfolioItem[];
  filter: Category;
  onFilterChange: (category: Category) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, filter, onFilterChange }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openItem = (item: PortfolioItem) => {
    setSelectedItem(item);
    setGalleryIndex(0);
  };

  const closeItem = () => {
    setSelectedItem(null);
    setGalleryIndex(0);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedItem?.gallery) return;
    const len = selectedItem.gallery.length;
    setGalleryIndex(prev =>
      direction === 'next' ? (prev + 1) % len : (prev - 1 + len) % len
    );
  };

  const filteredItems = items.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Selected Works
          </h2>
        </div>

        <div className="flex gap-2 mt-6 md:mt-0 bg-zinc-900/50 p-1 rounded-full border border-zinc-800 backdrop-blur-sm overflow-x-auto hide-scrollbar max-w-full">
          {(['all', 'wedding', 'music-video', 'concert'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                filter === cat
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat === 'music-video' ? 'Music Videos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openItem(item)}
            className={`group relative overflow-hidden rounded-xl cursor-pointer bg-zinc-900 border border-zinc-800 ${
              item.span === 'col-span-2' ? 'lg:col-span-2' : ''
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-wider text-amber-500 uppercase mb-2">
                {item.category === 'music-video' ? 'Music Video' : item.category}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-300 mt-1">{item.description}</p>
            </div>

            {/* Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              {item.gallery && item.gallery.length > 1 && (
                <div className="bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 flex items-center gap-1">
                  <Images size={16} />
                  <span className="text-xs font-medium">{item.gallery.length}</span>
                </div>
              )}
              <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <ZoomIn size={20} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in">
          <button
            onClick={closeItem}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors p-2 z-50"
          >
            <X size={32} />
          </button>

          {/* Gallery Navigation Arrows */}
          {selectedItem.gallery && selectedItem.gallery.length > 1 && (
            <>
              <button
                onClick={() => navigateGallery('prev')}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full text-zinc-400 hover:text-white hover:bg-black/70 transition-all"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => navigateGallery('next')}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full text-zinc-400 hover:text-white hover:bg-black/70 transition-all"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            {/* In a real app, video items would render a video player here */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl shadow-amber-900/20">
              <img
                src={selectedItem.gallery ? selectedItem.gallery[galleryIndex] : selectedItem.src}
                alt={`${selectedItem.title} - Image ${galleryIndex + 1}`}
                className="w-full h-full max-h-[70vh] object-contain"
              />
              {selectedItem.type === 'video' && !selectedItem.gallery && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1">
                    <Play size={40} fill="white" className="text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Dots */}
            {selectedItem.gallery && selectedItem.gallery.length > 1 && (
              <div className="flex gap-2 mt-4">
                {selectedItem.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === galleryIndex
                        ? 'bg-white w-6'
                        : 'bg-zinc-600 hover:bg-zinc-400'
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-white">{selectedItem.title}</h3>
              <p className="text-zinc-400 mt-2">{selectedItem.description}</p>
              {selectedItem.link && (
                <a
                  href={selectedItem.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>{selectedItem.link.label}</span>
                </a>
              )}
              {selectedItem.gallery && selectedItem.gallery.length > 1 && (
                <p className="text-zinc-500 text-sm mt-2">
                  {galleryIndex + 1} / {selectedItem.gallery.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;