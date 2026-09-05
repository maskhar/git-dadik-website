'use client';

import { Reveal } from './Reveal';


export const Methodology = () => {


  return (
    <section id="methodology" className="py-20 md:py-32 bg-background-alt min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Kerangka Strategis
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-xl text-text-body">
              Kerangka kerja komprehensif untuk membangun brand dan ekosistem kreatif yang legendaris.
            </p>
          </Reveal>
        </div>

        {/* Brand W */}
        <div className="mb-20">
          <Reveal width="100%">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Brand W</h3>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <div 
              className="w-full mx-auto relative overflow-hidden rounded-2xl shadow-sm"
            >
              <img 
                src="/images/maps/REV BRAND W STRATEGIC 85 x 60-01.jpg" 
                alt="Brand W Strategy" 
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

        {/* Branding Model Canvas */}
        <div className="mb-20">
          <Reveal width="100%">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Branding Model Canvas</h3>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <div 
              className="w-full mx-auto relative overflow-hidden rounded-2xl shadow-sm"
            >
              <img 
                src="/images/maps/branding model canvas.jpg" 
                alt="Branding Model Canvas" 
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

        {/* Blueprint Kota Kreatif */}
        <div className="mb-10">
          <Reveal width="100%">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Blueprint Kota Kreatif</h3>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <div 
              className="w-full mx-auto relative overflow-hidden rounded-2xl shadow-sm"
            >
              <img 
                src="/images/maps/blueprint-menuju-kota-kreatif_1.png" 
                alt="Blueprint Kota Kreatif" 
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
