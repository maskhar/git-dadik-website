'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, BookOpen, BotMessageSquare, BriefcaseBusiness, Building2, Calculator, MapPin, MessageCircle, Palette, Sparkles, Users } from 'lucide-react';
import { HeroImageSlider } from './HeroImageSlider';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="space-y-6"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/40 text-xs font-bold tracking-widest text-white rounded-full uppercase shadow-lg"
          >
            Sejak 1998 | Malang, Indonesia
          </motion.div>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight !text-white drop-shadow-sm"
          >
            Mitra Strategis Brand untuk Pemilik <span className="italic text-transparent [-webkit-text-stroke:2px_white]">Visioner</span>.
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-white max-w-lg leading-relaxed font-medium drop-shadow-sm"
          >
            Membantu bisnis bertransisi dari &ldquo;Komoditas&rdquo; menjadi &ldquo;Warisan&rdquo; melalui perpaduan Strategi Kreatif & Perlindungan Hukum (HAKI).
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="grid gap-3 pt-4 sm:grid-cols-2 sm:gap-4"
          >
            <Button 
              href="https://wa.me/6289621439416?text=Halo%20admin%2C%20saya%20ingin%20menjadwalkan%20sesi%20konsultasi%20branding%2C%20dapat%20info%20link%20dari%20website%20dadikwahyuchang.id"
              target="_blank"
              variant="white" 
              className="w-full border-transparent font-bold shadow-xl"
            >
              Jadwalkan Sesi Konsultasi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://api.whatsapp.com/send/?phone=6285940834227&text=Halo+DWC.AI%2C+aku+mendapatkan+informasi+dari+Websitenya+%2Adadikwahyuchang.id%2A.%0AIngin+bertanya+nih+%3F+&type=phone_number&app_absent=0"
              target="_blank"
              className="cta-breath w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <BotMessageSquare className="mr-2 h-4 w-4" />
              Chat Gratis DWC.AI Agent
            </Button>
            <Button
              href="/ai"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Chat Premium DWC.AI Agent
            </Button>
            <Button
              href="https://maps.app.goo.gl/pVgCqUNoJKc9ttedA"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Google Maps
            </Button>
            <Button
              href="https://wa.me/6281999900900?text=Halo%20sam%20Dadik%2C%20saya%20dapat%20link%20dari%20website%20dadikwahyuchang.id%20ingin%20konsultasi%20branding%20private."
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Konsultasi Branding Pribadi
            </Button>
            <Button
              href="https://carubra.com"
              target="_blank"
              className="cta-breath cta-breath-delay w-full border-2 border-white/70 bg-white/10 text-white font-bold shadow-lg hover:bg-white hover:text-primary"
            >
              <Building2 className="mr-2 h-4 w-4" />
              Carubra.com — Developer AI Agent
            </Button>
            <Button
              href="https://utero.id/"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <Palette className="mr-2 h-4 w-4" />
              Portofolio Desain
            </Button>
            <Button
              href="https://uteroindonesia.com/"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              Portofolio Bisnis
            </Button>
            <Button
              href="https://buku.dadikwahyuchang.id/"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Buku Dadik Wahyu Chang
            </Button>
            <Button
              href="https://kalkulatorhargadesain.dadikwahyuchang.id/"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Kalkulator Harga Desain
            </Button>
            <Button
              href="https://kolkulatorkol.dadikwahyuchang.id/"
              target="_blank"
              className="w-full bg-white/10 text-white border-2 border-white/70 hover:bg-white hover:text-primary font-bold shadow-lg"
            >
              <Users className="mr-2 h-4 w-4" />
              Kalkulator KOL
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Visual - Dynamic Slider */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[500px] md:h-[600px] w-full hidden md:block" 
        >
          <HeroImageSlider />
          
           {/* Decorative Elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};
