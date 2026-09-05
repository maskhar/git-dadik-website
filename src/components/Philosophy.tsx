'use client';

import { Reveal } from './Reveal';
import { PhilosophyImageSlider } from './PhilosophyImageSlider';

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Visual */}
        <Reveal width="100%" className="order-2 md:order-1 h-full">
          <div 
            className="relative w-full h-full min-h-[500px]"
          >
             <PhilosophyImageSlider />
          </div>
        </Reveal>

        {/* Right Content */}
        <Reveal delay={0.2} className="order-1 md:order-2">
          <div 
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Branding Bukan <span className="text-primary">Akting</span>.
            </h2>
            
            <div className="space-y-4 text-lg text-text-body leading-relaxed">
              <p className="font-medium text-foreground">
                Ide tanpa realisasi adalah sampah.
              </p>
              <p>
                Halo semuanya, salam kenal!
              </p>
              <p>
                Teman-teman di Malang dan kawan kawan kreatif biasa memanggil saya Sam Dadik atau Sam DWC.
              </p>
              <p>
                Mungkin kalau kita pernah berpapasan di jalan, Sampean akan mudah mengenali saya. Ya, saya adalah orang yang selalu memakai atribut serba merah dari ujung topi, kacamata, baju, hingga sepatu. Hehe, bukan untuk gaya-gayaan atau menyombongkan diri, tapi warna merah ini adalah pengingat bagi saya pribadi tentang semangat, optimisme, dan keberanian. Filosofi saya sederhana: di dunia yang ramai ini, kita harus berani punya warna sendiri agar tidak hilang ditelan zaman.
              </p>
              <p>
                Sehari-hari, saya mengabdikan diri di Utero Indonesia. Alhamdulillah, usaha ini sudah saya rintis sejak tahun 1998, bermula dari masa sulit krisis moneter yang justru menempa mental saya untuk bertahan.
              </p>
              <p>
                Di Utero, saya tidak bekerja sendirian, tapi bergerak bersama tim hebat. Kami sering menyebut tempat kami sebagai "Pabrik Ide dan Konsep". Kenapa? Karena bagi kami, membantu klien itu tidak cukup hanya dengan memberi gambar atau logo yang bagus. Lebih dari itu, kami ingin menjadi "teman berpikir" untuk menemukan nyawa dan DNA dari bisnis teman-teman.
              </p>
              <p>
                Ada satu hal yang mungkin agak berbeda tapi tetap penting dalam perjalanan saya. Kebetulan, latar belakang pendidikan saya adalah Hukum S1 dan S2 saya Hukum (Master Hukum).
              </p>
              <p>
                Karena itulah, setiap kali berdiskusi atau memberi saran (advisory), saya selalu diskusi soal masa depan brand. Saya ingin karya teman-teman bukan cuma viral sesaat, tapi aman secara legalitas, punya Nilai Tak Berwujud (Intangible Value), dan bisa menjadi Aset Waris (Legacy). Prinsip saya, "Strategi dan isi kepala itu kuncinya," karena eksekusi fisik—seperti yang dikerjakan teman-teman di divisi Utero Advertising (desain logo, perancangan media online, offline seperti billboard, neon box, dll)—akan jauh lebih bernilai jika punya landasan konsep yang kuat.
              </p>
              <p>
                Di luar urusan bisnis, hati saya sepenuhnya untuk Kota Malang dan Indonesia. Saya sangat menikmati momen "urun rembug" dan berkolaborasi, baik itu di Malang Creative Fusion (MCF), asosiasi desain grafis indonesia (ADGI), asosiasi advertising malang (AAM), indonesian creative cities network ( ICCN ) maupun saat diminta bantu-bantu Pemerintah Kota Malang dan kementerian merumuskan city branding dan kota kreatif.
              </p>
              <p>
                Mimpi saya sebenarnya sederhana: Saya ingin menjadi kawan atau penyemangat bagi produk lokal dan nasional. Saya ingin melihat brand lokal kita percaya diri, "naik kelas", dan tidak minder dengan produk asing.
              </p>
              <p>
                Pintu kantor kami, Rumah Merah, selalu terbuka untuk teman-teman yang ingin berdiskusi. Saya di sini bukan untuk menggurui, tapi mari kita belajar, berbagi ide, dan berkarya bersama untuk memajukan industri kreatif kita.
              </p>
              <p>
                Salam hormat dan sukses untuk kita semua
                <br />
                salam merah dan salam indonesia
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
