'use client';

import { Reveal } from './Reveal';

const journeyData = [
  {
    year: '1998 - 2010',
    items: [
      'Kepanitiaan Konser Musik Band Funky Kopral',
      'Kepanitiaan Konser Musik Band Funky Jikustik',
      'Kepanitiaan Konser Musik Band Funky The Fly',
      'Kepanitiaan Konser Musik Band Funky Gigi',
      'Kepanitiaan Konser Musik Band Funky Band Caffein',
      'Kepanitiaan Event Launching Provider Tree',
      'Konseptor Event dan Program Branding Redmild',
      'Konseptor Program Pemasaran Dreamland Properti',
      'Marketing Manager Legian Resto Cafe',
      'Distributor PT Djaya Abadi',
      'Pilot Project Satriya Enterprise',
      'Konseptor Program Marketing PT Graha Mapan',
    ],
  },
  {
    year: '2010 - 2015',
    items: [
      '6 Pengusaha Fenomenal Se-Jawa Timur (Sampoerna Found)',
      '12 Pengusaha Terbaik Indonesia Small & Medium Bussines Entreprenour Award',
      'Finalis Wirausaha Muda Mandiri',
      'Dosen Luar Biasa Universitas Widyagama Malang',
      'Pelaksanaan Pekerjaan Signage Project Branding Pegadaian Seluruh Indonesia',
      'Pelaksanaan Pekerjaan Bumiputra Seluruh Area Jawa',
      'Konseptor Program Destinasi Wisata Wendit Malang Bersama Provider Tree',
      'Pelaksanaan Event Pameran Fashion Muslim hijab, komunitas Hijabers Moms Indonesia',
      'Pelaksanaan Project Branding Taman Safari Prigen',
      'Kontraktor RSSA Irna Tiga',
    ],
  },
  {
    year: '2016',
    items: [
      'Pemateri "Pandai Berwirausaha" Universitas Brawijaya',
      'Pemateri "Kenapa Harus Punya Brand" Universitas Kanjuruhan',
      'Pemateri "Mudahnya Membuka Usaha" Universitas Malang',
      'Pemateri "Road To School" Bikin Usaha Kreatif Yuk SMAN 10 Malang',
      'Kordinator Pengembangan Asosiasi Advertising Malang',
      'Kordinator Kerjasama Asosiasi Desain Grafis Chapter Malang',
      'Pelaksana Teknis Branding Signage Jiwasraya Jatim',
      'Pelaksana Branding Program Keagenan BTPN WOW',
      'Perancang Pelaksana Program Sales Keagenan Japfa Coomfed',
      'Pemateri Ongis School Startup Desain Grafis Malang',
      'Konsultan Desain Promosi PT Gatramapan (Melody)',
    ],
  },
  {
    year: '2017',
    items: [
      'Koordinator Kerjasama Jejaring Malang Creative Fusion',
      'Anggota Komite Ekonomi Kreatif Kota Malang',
      'Peserta Pengajuan Penghargaan Penerima Upakarti',
      'Pemateri 1000 Start Up, Program Kementrian Kominfo',
      'Konseptor & Pelaksana Program Destinasi Buatan Branding Teh Gelas (Orangtua Grup)',
      'Anggota Perancang Sayembara Maskot Osiji Kota Malang',
      'Perancang Maskot Rumah Pintar KPU Malang',
      'Pemateri Motivasi "Belajar Bukan Hanya Di Sekolah Saja" SMAN 5 Malang',
      'Pelaksana Project Sigange Indonesia Power',
      'Anggota Uji Petik Sektor Unggulan Kota Malang (Bekraf)',
      'Pendamping CSR Pegadaian Malang',
      'Konsultan Branding Kampung Keramat Malang',
    ],
  },
  {
    year: '2018',
    items: [
      'Anggota PMK3I Malang',
      'Desainer Indikasi Geografis Produk Purwoceng Dieng (BEKRAF)',
      'Konsultan Branding Apartement Taman Melati Malang',
      'Konsultan Branding Event Malang Jazz Festival',
      'Pemrakarsa Kampung Tematik Kampong Desain Grafis',
      'Pendamping Guru Berkeahlian Ganda Wilayah Jawa Timur & Indonesia Timur',
      'Konsultan Rebranding Grandcakra Hotel',
      'Konsultan Branding Kripik Tempe Rohani oleh oleh Khas Malang',
      'Konsultan Branding Restoran Pupuk Bawang',
      'Konseptor dan Pelaksana Destinasi Branding Sosis Fiesta',
      'Konsultan Branding Kota Madiun (KHARISMATIK MADIUN)',
    ],
  },
  {
    year: '2019',
    items: [
      'Konsultan Branding Kota Pasuruan (INSPIRING CITY)',
      'Konsultan Branding Helwa Indonesia Group',
      'Konsultan Branding BUMN Adhi Persada Propety (DHIKA UNIVERSE)',
      'Konsultan Branding Mie Gacoan',
      'Konsultan Branding Ayam Nelongso',
      'Konsultan Branding WISMARI Group',
      'Konsultan Branding BPR Artha Kanjuruhan',
      'Tim Konseptor Malang Creative Center',
      'Tim Konseptor Festival Mbois 1 - 7',
      'Pemateri UNIDHA (Strategi Menghadapi New Normal)',
      'Pemateri KPU Kota Malang (Strategi Branding Komunikasi Era New Normal)',
      'Konsultan Strategi Pencitraan Industri Kreatif Kota Malang (osiker.com dan osiaeker)',
      'Konsultan Strategi Aktivasi Digital Era Pandemi DISPENDUKCAPIL Kota Malang',
      'Konsultan pendampingan Konflik Sayembara City Branding Lumajang Eksotik',
    ],
  },
  {
    year: '2020 - 2021',
    items: [
      'Anggota PMK3I Malang',
      'Desainer Indikasi Geografis Produk Purwoceng Dieng (BEKRAF)',
      'Konsultan Branding Apartement Taman Melati Malang',
      'Konsultan Branding Event Malang Jazz Festival',
      'Pemrakarsa Kampung Tematik Kampong Desain Grafis',
      'Pendamping Guru Berkeahlian Ganda Wilayah Jawa Timur & Indonesia Timur',
      'Konsultan Rebranding Grandcakra Hotel',
      'Konsultan Branding Kripik Tempe Rohani oleh oleh Khas Malang',
      'Konsultan Branding Restoran Pupuk Bawang',
      'Konseptor dan Pelaksana Destinasi Branding Sosis Fiesta',
      'Konsultan Branding Kota Madiun (KHARISMATIK MADIUN)',
      'Penyusun Riset Strategi Viral Siap 2024 & Quote Dadik Wahyu Chang Siap 2024',
      'Konsultan Periklanan Brand Vivan dan Robot',
      'Konsultan Branding Gellate Gellato',
      'Konsultan Branding Calon Istri Cafe',
      'Tim Pelaksana Aktivasi Identitas Indonesia Power',
      'Tim Pelaksana Aktivasi identitas Indolakto',
      'Tim Pelaksana Kopi Lain Hati',
      'Tim Pelaksana Grand Opening Asus Corner Malang',
      'Tim Pelaksana Aktivasi Branding Torabika dan Arema Malang',
      'Tim Pelaksana Aktivasi Branding Electronic City',
      'Tim Pelaksana Aktivasi Branding 3second Malang',
      'Tim Pelaksana Aktivasi Branding Wong Solo',
      'Tim Pelaksana Aktivasi Branding Rachman Sport',
      'Tim Pelaksana Aktivasi Branding USTEGRA',
      'Tim Pelaksana Aktivasi Branding J.CO',
      'Tim Pelaksana Aktivasi Branding PINDAD Malang',
      'Tim Pelaksana Aktivasi Branding BNI Syariah',
      'Tim Pelaksana Aktivasi Branding Riche Hotel',
      'Tim Pelaksana Aktivasi Branding Vespa Malang',
      'Konsultan Branding Perencana Bukit Desa Ngroto',
      'Konsultan Branding Kawasan Mebel Pasuruan',
      'Konsultan Personal Branding Digital Dr. Dhelya Widasmara Sp.KK',
      'Konsultan Branding Digital Totool Lovers',
      'Konsultan Branding Launching Raja Gula BUMN RNI',
      'Tim Perancang Alat Sterilisasi Bakteri Sivuo',
      'Tim Perancang Alat Sterilisasi Box UVC',
      'Penggagas dan Tim Perancang Pameran Virtual Store Bank Indonesia - Festival Mbois',
      'Penggagas dan Tim Aktivasi Branding uteroindonesia.com',
      'Tim Pelaksana Aktivasi Branding Digital Dinas Kesehatan Kota Malang',
    ],
  },
  {
    year: '2021 - 2022',
    items: [
      'Konsultan Branding & GSM Universitas Widyagama Malang',
      'Tim Pelaksana Aktivasi Branding Videotron UWG',
      'Konsultan Branding & GSM Chatten Coffee & Pla Te',
      'Konsultan Branding & GSM Momsarasa',
      'Konsultan Branding & GSM ERTKN',
      'Konsultan Branding & GSM Stamford Footbal Academy',
      'Konsultan Branding & GSM Garageplug',
      'Konsultan Branding & GSM Tekopi',
      'Konsultan Branding Kopi 1922',
      'Konsultan Branding Fertisoil',
      'Konsultan Branding Akartana',
      'Konsultan Branding Lemoniere',
      'Badan Promosi Dan Komunikasi KEK',
      'Tim Perancang SOP MCC',
      'Tim Perancang DED Interior MCC',
      'Konsultan Branding IOTA Kids',
      'Konsultan IDJ (Shalter Liquid)',
      'Penulis Buku Dosen Desoon',
      'Konsultasi Hotel Lembah Tumpang',
      'Konsultasi AKAMI GAS',
      'Tim Perancang KAI Wisata Rumah Indrakila',
      'Pemateri di SMKN 11 Malang',
      'Pemateri Kewirausahaan Kelurahan Tanjungrejo',
      'Pemateri Di SMKN 8 Malang',
      'Pemateri PKKMB di Universitas Widyagama Malang',
      'Pendampingan IKM Binaan DISKOPINDAG Kota Malang',
      'Juri Nasional Lo Kreatif APTIKOM',
      'Pemateri Digital Branding TIP - TIP Digital',
      'Pemateri Certified Digit Al Marketing Specialist (untuk CV Inspire)',
      'Webinar Kewirausahaan BEMFIS UM',
      'Workshop Kewirausahaan Kampus Merdeka',
      'Pemateri Imaginer & Ondullin Gathering',
      'Pemateri Rembuk EKRAF 2',
      'Pelatihan Jasa Pelaku Pariwisata Provinsi Jawa Timur',
      'Pemateri SMAN 1 Malang',
      'Talkshow Dalbofest',
    ],
  },
  {
    year: '2023 - 2024',
    items: [
      'Conceptor MCCPG',
      'Narasumber ijen Talk Startup City',
      'Narasumber City Guide Community Powder',
      'Praktisi Mengajar Guru SMK dari Samarinda',
      'Latihan Pemasaran Digital Pemkot Mojokerto',
      'Peningkatan SDM Pelaku Ekraf dari Bontang',
      'Narasumber Expo hasil riset dan inovasi Polinema',
      'Juri Bisnis dan Brand hasil karya mahasiswa Polinema',
      'Narasumber Tribun Network',
      'Pemberdayaan duta wisata RAKA RAKI Jawa Timur',
      'Narasumber ETU Poline Program Upgrade UMKM',
      'Pemateri SMK 11 Malang',
      'Narasumber FM8 bangunan yang berbicara',
      'Narasumber PLUT UMMKM',
      'Narasumber Posko Visual',
    ],
  },
  {
    year: '2025',
    items: [
      'Program & Creative Director, ICCF Nusantaraya 2025',
      'Delegasi Malang City of Media Art (UNESCO UCCN)',
      'Koordinator Malang Creative Fusion (MCF)',
      'Tim Dossier Malang Menuju Kota Kreatif Dunia',
      'Founder Placers.id',
      'Founder Smartsuco',
      'Founder Soundpub Music',
      'Executive Producer Red Valley Band',
      'Konsultan Branding PG Radjawali',
      'Konsep & Manajemen Branding Event Pegadaian',
      'Strategi Brand Artha Bangga Nusantara',
      'Perancangan Identitas Visual PORSENI POLINEMA',
      'Lead Consultant Maitri Cafe',
      'Pendampingan Mentoring Valhala',
      'Pengembangan Konsep Brand Adawaruq',
      'Strategi Visual & Pemasaran Lesso',
      'Pengembangan Identitas Brand Lacamino, Proxon, Yim Yum',
      'Narasumber Kementerian Koperasi dan UKM RI',
      'Pembicara Kementerian Ekraf Infrastruktur RI',
      'Pembicara Ahli Dinas Kominfo Provinsi Jawa Timur',
      'Pembicara Dinas Pariwisata Kota Mojokerto',
      'Narasumber MUI (Ekonomi Umat)',
      'Pembicara Tamu Muhammadiyah',
      'Pendampingan Branding Kelurahan Penanggungan & Tunjung Sekar',
      'Dosen Tamu Universitas Bakrie, UNMER, Widyagama, Polinema',
      'Juri Nasional Lomba Desain APTIKOM',
      'Juri Kompetisi Bisnis Polinema',
    ],
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Perjalanan
            </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div 
              className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"
            />
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p 
              className="text-lg text-text-body max-w-2xl mx-auto"
            >
              Sebuah lini masa dedikasi, kreativitas, dan tonggak strategis yang mendorong evolusi brand.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal 
                  key={index} 
                  delay={index * 0.05} 
                  width="100%" 
                >
                  <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${ isEven ? 'md:flex-row-reverse' : '' }`}>
                    {/* Content Side */}
                    <div className="flex-1 md:w-1/2">
                      <div className={`relative group ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                        
                        {/* Cozy Card */}
                        <div className={`
                          relative bg-background-alt/50 backdrop-blur-sm 
                          border border-primary/10 rounded-2xl p-6 md:p-8 
                          hover:bg-primary/5 hover:border-primary/20 
                          transition-all duration-300 shadow-sm hover:shadow-md
                          ${isEven ? 'text-left' : 'text-left md:text-right'}
                        `}>
                          {/* Mobile Year */}
                          <div className="md:hidden mb-4 border-b border-primary/10 pb-2">
                            <span className="text-2xl font-bold text-primary">
                              {item.year}
                            </span>
                          </div>

                          <ul className={`space-y-4 flex flex-col ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                            {item.items.map((activity, i) => (
                              <li 
                                key={i} 
                                className={`
                                  text-text-body/90 text-sm md:text-base leading-relaxed flex items-start gap-3
                                  ${isEven 
                                    ? 'flex-row text-left' 
                                    : 'flex-row md:flex-row-reverse text-left md:text-right'}
                                `}
                              >
                                <span className={`
                                  w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 
                                  group-hover:scale-125 transition-transform duration-300
                                `}></span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Connector Line (Desktop) */}
                        <div className={`
                          hidden md:block absolute top-8 w-12 h-px bg-primary/30
                          ${isEven ? 'left-0' : 'right-0'}
                        `}></div>
                      </div>
                    </div>

                    {/* Center Marker */}
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>

                    {/* Year Side (Desktop) */}
                    <div className="flex-1 md:w-1/2 hidden md:flex items-start pt-4">
                      <div className={`w-full ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent opacity-90">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
