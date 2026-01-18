import React, { useState, useEffect } from 'react';

const PROFILE_PHOTOS = [
  { src: 'https://zkysar-photography.s3.amazonaws.com/profile-photos/DSC00084-compressed.jpg', position: '57% center' },
  { src: 'https://zkysar-photography.s3.amazonaws.com/profile-photos/file-1754427852-compressed.jpg', position: 'center -15%' },
  { src: 'https://zkysar-photography.s3.amazonaws.com/profile-photos/IMG_0761-compressed.jpg', position: '75% center' },
  { src: 'https://zkysar-photography.s3.amazonaws.com/profile-photos/Zach-Kysar-portraits-96-compressed.jpg', position: 'center' },
];

const getYearsSince = (startDate: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);

  if (diffYears < 1) {
    const months = Math.floor(diffYears * 12);
    return `${months}mo`;
  }

  const years = Math.floor(diffYears * 2) / 2; // Round to nearest 0.5
  if (years % 1 === 0) {
    return `${years}yr${years > 1 ? 's' : ''}`;
  }
  return `${years}yrs`;
};

const CONCERT_PHOTO_START = new Date('2024-07-01');
const VIDEO_START = new Date('2025-01-01');

const About: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PROFILE_PHOTOS.length);
    }, 5000);
    return () => clearInterval(photoInterval);
  }, []);

  return (
    <section id="about" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-amber-500/10 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-zinc-800">
              {PROFILE_PHOTOS.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt="Zach Kysar Portrait"
                  style={{ objectPosition: photo.position }}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentPhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-2xl">Zach Kysar</p>
                <p className="text-zinc-400 text-sm tracking-widest uppercase">Photographer & Videographer</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              About <span className="text-zinc-500 italic">Me</span>
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                I try to stay out of the way and let things happen. Then I find the story in the edit.
              </p>
              <p>
                My background is in music, software, and community. I write music and run logistics for <a href="https://www.instagram.com/paperstrawtheband/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">my band</a>, created and run the <a href="https://www.meetup.com/san-francisco-japanese-language-exchange/?eventOrigin=home_groups_you_organize" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">SF Japanese Language Exchange</a>, and left my job as a software engineer at Google to pursue creative work.
              </p>
              <p>
                I've been shooting concert photography for {getYearsSince(CONCERT_PHOTO_START)} and doing video work for {getYearsSince(VIDEO_START)}. <span className="text-amber-500">My video prices reflect this. You get quality work at portfolio-building rates.</span>
              </p>
            </div>

            <div className="flex gap-12 pt-4 border-t border-zinc-800">
              <div>
                <p className="text-3xl font-serif text-white">40+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Shows Shot</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">{getYearsSince(CONCERT_PHOTO_START)}</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Shooting Photos</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">{getYearsSince(VIDEO_START)}</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Shooting Video</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;