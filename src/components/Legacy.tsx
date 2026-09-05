'use client';

import { Button } from './Button';
import { ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

export const Legacy = () => {
  return (
    <section className="relative py-32 flex items-center justify-center bg-gray-900 overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-bold !text-white mb-8 uppercase tracking-wider relative drop-shadow-lg">
            Mesin Eksekusi
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
            Didukung oleh kekuatan penuh <span className="font-bold !text-white">UTERO INDONESIA</span>
            <br />
            <span className="text-base md:text-lg text-gray-400 mt-2 block">
              Partner strategis anda dalam mewujudkan visi branding yang nyata.
            </span>
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="flex justify-center">
            <Button 
              variant="white" 
              className="hover:scale-105 transition-all duration-300 border-none px-8 py-6 text-lg rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              href="https://uteroindonesia.com/"
              target="_blank"
            >
              Kunjungi Utero Indonesia
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
