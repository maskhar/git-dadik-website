'use client';

import { Reveal } from './Reveal';
import { MessageSquare, Palette, Shield, Users } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Diskusi Strategis",
      desc: "Konsultasi mendalam untuk memetakan masa depan brand Anda dan mengungkap potensi tersembunyi.",
      icon: MessageSquare
    },
    {
      title: "Identitas & Arahan Visual",
      desc: "Membangun bahasa visual yang khas yang mengkomunikasikan nilai inti Anda secara instan.",
      icon: Palette
    },
    {
      title: "Mentoring Hukum & HAKI",
      desc: "Melindungi aset kekayaan intelektual Anda untuk menjamin keamanan bisnis jangka panjang.",
      icon: Shield
    },
    {
      title: "Workshop Brand",
      desc: "Melatih tim Anda untuk mewujudkan brand dan mengeksekusi visi secara efektif.",
      icon: Users
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <Reveal>
             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Layanan.
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="w-20 h-2 bg-primary"></div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className="p-8 bg-background-alt hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group"
              >
                <service.icon className="w-10 h-10 text-text-body mb-6 group-hover:text-primary transition-colors duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
