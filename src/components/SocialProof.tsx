'use client';

import Image from 'next/image';
import { Reveal } from './Reveal';

export const SocialProof = () => {
  const partners = [
    { name: "ICCN", src: "/images/logos/ICCN.png", width: 80, height: 40 },
    { name: "MCF", src: "/images/logos/MCF.png", width: 100, height: 50 },
    { name: "ADGI", src: "/images/logos/ADGI.webp", width: 100, height: 50 },
    { name: "AAM", src: "/images/logos/AAM.png", width: 100, height: 50 },
  ];

  return (
    <section className="bg-background-alt py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-semibold text-gray-400 tracking-widest whitespace-nowrap">
              Partner Komunitas
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 w-full grayscale opacity-70">
              {partners.map((partner) => (
                <div key={partner.name} className="relative h-12 w-24 flex items-center justify-center">
                  <Image 
                    src={partner.src} 
                    alt={`${partner.name} Logo`} 
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
