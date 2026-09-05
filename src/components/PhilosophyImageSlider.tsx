'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = Array.from({ length: 15 }, (_, i) => `/images/photos/${i + 1}.jpeg`);

export const PhilosophyImageSlider = () => {
  return (
    <div className="relative w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/10"
        >
            <Image 
              src={src} 
              alt={`Philosophy Moment ${index + 1}`} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
        </motion.div>
      ))}
    </div>
  );
};
