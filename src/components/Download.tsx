'use client';

import { Reveal } from './Reveal';
import { Button } from './Button';
import { FileText, BookOpen } from 'lucide-react';
import Image from 'next/image';

export const Download = () => {
  const bookPlaceholders = [
    { title: 'Buku Template 1' },
    { title: 'Buku Template 2' },
    { title: 'Buku Template 3' },
    { title: 'Buku Template 4' },
  ];

  return (
    <section id="download" className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* CV Section */}
          <Reveal delay={0.1} width="100%">
            <div 
              className="flex flex-col items-start space-y-6"
            >
              <div className="w-full flex justify-center md:justify-start mb-4">
                 <div className="w-48 h-64 border-4 border-primary rounded-xl flex items-center justify-center bg-white shadow-lg">
                    <FileText className="w-24 h-24 text-primary" />
                 </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                Daftar Riwayat Hidup (CV)
              </h3>
              
              <p className="text-lg text-text-body leading-relaxed">
                Untuk mengetahui lebih jelas mengenai Dadik Wahyu Chang, 
                kamu bisa Download curriculum vitae yang tertera pada link dibawah ini.
              </p>
              
              <a 
                href="/doc/cv%20dadik%202024.pdf"
                download="CV Dadik Wahyu Chang 2024.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90 text-white min-w-[160px] shadow-lg hover:shadow-xl"
              >
                Unduh Sekarang
              </a>
            </div>
          </Reveal>

          {/* Ebook Section */}
          <Reveal delay={0.3} width="100%">
            <div 
              className="flex flex-col items-start space-y-6"
            >
               <div className="w-full flex justify-center md:justify-start mb-4">
                  <div className="w-48 h-64 border-4 border-primary rounded-xl bg-white shadow-lg relative overflow-hidden group">
                     <Image 
                        src="/images/products/buku-utero-02.png"
                        alt="Balik Jungkir Book Cover"
                        fill
                        className="object-cover scale-110"
                     />
                  </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                E-book Balik Jungkir
              </h3>
              
              <p className="text-lg text-text-body leading-relaxed">
                Buku Balik Jungkir ditulis oleh Dadik Wahyu Chang, buku ini dipersembahkan untuk orang- orang 
                yang punya mimpi dan semangat hidup dan suka sekali dengan proses, balik jungkir perjalanannya.
              </p>
              
              <Button 
                href="https://shop.epochstream.com/produk/ebook/ebook-balik-jungkir-dadik-wahyu-chang/"
                // href="https://api.whatsapp.com/send?phone=62817388616&text=%F0%9F%94%B4%F0%9F%94%B4%F0%9F%94%B4%20Hai%20%2ADADIK%20WAHYU%20CHANG%20UTERO%2A%2C%20Salam%20Merah%21%20%28sent%20from%20https%3A%2F%2Fdadikwahyuchang.id%2F%29%20%F0%9F%94%B4%F0%9F%94%B4%F0%9F%94%B4Isi%20form%20dibawah%20ini%20untuk%20mendapatkan%20%2ABUNDLE%20PACK%20E-BOOK%20BALIK%20JUNGKIR%2A%20seharga%20Rp250.000.Silahkan%20melakukan%20pembayaran%20dengan%20transfer%20ke%20BCA%208161889946%20a.n.%20PT.%20UTERO%20KREATIF%20INDONESIA.Konfirmasi%20pesanan%20Anda%20lewat%20nomor%20WhatsApp%20ini%20dengan%20mengirimkan%20bukti%20pembayaran.Nama%20%3A%20Email%20%3A%20Alamat%20%3A%20No.%20Telp%20%2F%20WhatsApp%20%3A%20Tanggal%20Lahir%20%3AAlasan%20membeli%20%3A"
                className="bg-primary hover:bg-primary/90 text-white min-w-[160px] shadow-lg hover:shadow-xl transition-all"
              >
                Beli Sekarang
              </Button>
            </div>
          </Reveal>

        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto mt-16">
          {bookPlaceholders.map((book, index) => (
            <Reveal key={book.title} delay={0.5 + index * 0.1} width="100%">
              <div className="flex flex-col items-start space-y-6">
                <div className="w-full flex justify-center md:justify-start mb-4">
                  <div className="w-48 h-64 border-4 border-primary rounded-xl flex items-center justify-center bg-white shadow-lg">
                    <BookOpen className="w-24 h-24 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                  {book.title}
                </h3>

                <p className="text-lg text-text-body leading-relaxed">
                  Deskripsi buku akan ditambahkan manual.
                </p>

                <Button
                  disabled
                  className="bg-primary text-white min-w-[160px] cursor-not-allowed opacity-60 hover:scale-100"
                >
                  Segera Hadir
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
