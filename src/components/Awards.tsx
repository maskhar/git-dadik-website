'use client';

import { Reveal } from './Reveal';


export const Awards = () => {
  const awardsList = [
    "6 Pengusaha Fenomenal se Jawa Timur (Sampoerna Foundation)",
    "12 Pengusaha Terbaik Indonesia Small & Medium Business Entrepreneur Award",
    "Finalis Wirausaha Muda Mandiri (WMM) Bank Mandiri",
    "Nominator Kompetisi Logo dan Maskot Pavilliun Indonesia Expo 2020 Dubai",
    "Nominator Logo HUT Republik Indonesia Ke-73",
    "Desainer Indikasi Geografis Purwoceng Dieng"
  ];

  return (
    <section id="award" className="py-20 md:py-32 bg-background min-h-[50vh] flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             <Reveal width="fit-content">
              <div className="relative w-[300px] md:w-[400px] aspect-[4/5]">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full transform -translate-y-10" />
                <img 
                  src="/images/awards/award.png" 
                  alt="Award Trophy" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Reveal>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Pencapaian & <br/> <span className="text-primary">Penghargaan</span>
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0" />
              </Reveal>
            </div>

            <ul className="space-y-4">
              {awardsList.map((item, index) => (
                <Reveal key={index} delay={0.4 + (index * 0.1)}>
                  <li className="flex items-start gap-3 group">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
