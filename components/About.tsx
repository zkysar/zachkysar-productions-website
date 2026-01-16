import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-amber-500/10 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2000&auto=format&fit=crop" 
                alt="Zach Kysar Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-2xl">Zach Kysar</p>
                <p className="text-zinc-400 text-sm tracking-widest uppercase">Lead Creative</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Behind the <span className="text-zinc-500 italic">Lens</span>
            </h2>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                I believe that the best stories aren't staged; they are witnessed. Whether it's the raw adrenaline of a sold-out stadium tour or the quiet, trembling hands before a vow exchange, my goal is to capture the feeling, not just the visual.
              </p>
              <p>
                With a background in music production and documentary filmmaking, I bring a rhythmic editing style and a candid approach to every project. I don't just document events; I craft visual legacies.
              </p>
            </div>

            <div className="flex gap-12 pt-4 border-t border-zinc-800">
              <div>
                <p className="text-3xl font-serif text-white">500+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Shows Covered</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">8yrs</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">50+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Weddings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;