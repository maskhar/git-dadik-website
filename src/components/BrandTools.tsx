'use client';

import { Reveal } from './Reveal';
import { Search, Stethoscope, MapPin } from 'lucide-react';
import { Button } from './Button';

export const BrandTools = () => {
  const tools = [
    {
      title: "BRAND INSPECTION",
      desc: "Brand kamu masih perlu pengecekan lebih lanjut? Segera inspect sekarang, klik tombol dibawah ini, atau bisa menghubungi tim kami. Serta secara pribadi juga bisa.",
      icon: Search,
      cta: "Inspect Now",
      href: "https://drive.google.com/file/d/1yxQbBPyxf0DeqtDBVtQgmhsSKZHaG4Og/view?usp=sharing"
    },
    {
      title: "BRAND CHECK UP",
      desc: "Segera periksakan kesehatan brand kamu, guna mengetahui kondisi brand kamu secara keseluruhan. Dengan brand check-up kamu bisa mendapatkan informasi mengenai kekuatan dan kelemahan brand, tipe brand, jenis brand, karakter brand serta posisi brand di pasar.",
      icon: Stethoscope,
      cta: "Check Now",
      href: "https://docs.google.com/forms/d/1IpAGuvIX-5RN4y2aFa8G-UbdIz3J14or09TXovOtFjU/edit"
    },
    {
      title: "BRAND TRACKING",
      desc: "Salah satu langkah paling krusial dalam membangun brand adalah menentukan nama. Nama adalah pintu masuk identitas, yang akan terus melekat pada produk, jasa, maupun pengalaman konsumen. Namun, pemilihan nama tidak boleh asal atau sekadar enak didengar. Nama harus melewati proses Brand Tracking.",
      icon: MapPin,
      cta: "Tracking Now",
      href: "https://drive.google.com/file/d/15Y0EiBmUiyh0x9_6JCyO-5r5cMnyE-Lh/view?usp=sharing"
    }
  ];

  return (
    <section id="brand-tools" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Brand Tools.
            </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Tools untuk membantu Anda memahami dan mengembangkan brand dengan lebih baik.
            </p>
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <div className="w-20 h-2 bg-primary mx-auto mt-6"></div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <tool.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-wide">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-text-body text-sm leading-relaxed mb-6 flex-grow">
                  {tool.desc}
                </p>

                {/* CTA Button */}
                <Button
                  href={tool.href}
                  target="_blank"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium w-fit"
                >
                  {tool.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
