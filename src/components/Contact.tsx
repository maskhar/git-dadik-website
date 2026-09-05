'use client';

import { Reveal } from './Reveal';
import { Button } from './Button';
import { Coffee, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                 backgroundSize: '32px 32px' 
             }}>
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <Reveal width="100%">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-medium text-sm mb-4">
              <Coffee className="w-4 h-4" />
              <span>Mari Berdiskusi Santai</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <h2 
              className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight"
            >
              Punya Ide Liar? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Mari Kita Wujudkan.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} width="100%">
            <p 
              className="text-lg md:text-xl text-text-body max-w-2xl mx-auto leading-relaxed"
            >
              Tidak perlu meeting formal yang kaku. Cukup secangkir kopi dan obrolan hangat untuk memulai langkah besar brand Anda selanjutnya.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} width="100%">
            <div
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                href="https://wa.me/6281999900900"
                target="_blank"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <Coffee className="w-5 h-5 mr-3" />
                Ngopi & Diskusi
              </Button>
              
              <Button 
                  href="mailto:dadikwah75@gmail.com" 
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-full hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
              >
                  Kirim Email
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
