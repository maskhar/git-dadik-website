'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SLIDE_DURATION = 3000;

const slides = [
  {
    id: 1,
    images: [
      '/images/brand-overview/1.png',
      '/images/brand-overview/2.png',
      '/images/brand-overview/3.png',
    ],
    layout: 'collage'
  },
  {
    id: 2,
    images: [
      '/images/brand-overview/4.png',
      '/images/brand-overview/5.png',
      '/images/brand-overview/6.png',
    ],
    layout: 'masonry'
  },
  {
    id: 3,
    images: [
      '/images/brand-overview/7.png',
      '/images/brand-overview/8.png',
      '/images/brand-overview/9.png',
    ],
    layout: 'cards'
  },
  {
    id: 4,
    images: [
      '/images/brand-overview/10.png',
      '/images/brand-overview/11.png',
      '/images/brand-overview/12.png',
    ],
    layout: 'geometric'
  }
];

export const HeroImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Layout 1: Collage (Cluster) */}
          {currentSlide.layout === 'collage' && (
            <>
              {/* Main Center */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-10 right-10 w-64 h-80 md:w-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 z-20 rotate-3"
              >
                <Image src={currentSlide.images[0]} alt="Brand Overview 1" fill className="object-cover" />
              </motion.div>
              {/* Top Left */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-10 w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 z-10 -rotate-6"
              >
                <Image src={currentSlide.images[1]} alt="Brand Overview 2" fill className="object-cover" />
              </motion.div>
              {/* Bottom Left */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-20 left-0 w-56 h-40 md:w-72 md:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 z-30 -rotate-3"
              >
                <Image src={currentSlide.images[2]} alt="Brand Overview 3" fill className="object-cover" />
              </motion.div>
            </>
          )}

          {/* Layout 2: Masonry (Staggered Vertical) */}
          {currentSlide.layout === 'masonry' && (
            <>
              {/* Left */}
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-48 h-64 md:w-60 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-20"
              >
                <Image src={currentSlide.images[0]} alt="Brand Overview 4" fill className="object-cover" />
              </motion.div>
              {/* Middle */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-20 left-52 md:left-64 w-48 h-72 md:w-60 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-10"
              >
                <Image src={currentSlide.images[1]} alt="Brand Overview 5" fill className="object-cover" />
              </motion.div>
              {/* Right */}
              <motion.div 
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-10 right-0 md:right-10 w-48 h-56 md:w-60 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-30"
              >
                <Image src={currentSlide.images[2]} alt="Brand Overview 6" fill className="object-cover" />
              </motion.div>
            </>
          )}

          {/* Layout 3: Cards (Row) */}
          {currentSlide.layout === 'cards' && (
            <div className="absolute inset-0 flex items-center justify-center gap-4 px-4">
              {/* Left Card */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 z-10 relative"
              >
                <Image src={currentSlide.images[0]} alt="Brand Overview 7" fill className="object-cover" />
              </motion.div>
              {/* Center Card (Taller) */}
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-20 -translate-y-6 relative"
              >
                <Image src={currentSlide.images[1]} alt="Brand Overview 8" fill className="object-cover" />
              </motion.div>
              {/* Right Card */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white/20 z-10 relative"
              >
                <Image src={currentSlide.images[2]} alt="Brand Overview 9" fill className="object-cover" />
              </motion.div>
            </div>
          )}

          {/* Layout 4: Geometric (Grid) */}
          {currentSlide.layout === 'geometric' && (
            <>
               <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-10 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 z-10"
              >
                <Image src={currentSlide.images[0]} alt="Brand Overview 10" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-10 right-10 w-56 h-40 md:w-72 md:h-56 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-xl border-4 border-white/20 z-20"
              >
                <Image src={currentSlide.images[1]} alt="Brand Overview 11" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-0 right-20 w-40 h-40 md:w-48 md:h-48 rounded-lg rotate-12 overflow-hidden shadow-lg border-4 border-white/10 z-0"
              >
                <Image src={currentSlide.images[2]} alt="Brand Overview 12" fill className="object-cover" />
              </motion.div>
            </>
          )}
          

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
