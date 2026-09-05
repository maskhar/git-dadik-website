export type ConversationOption = {
  label: string;
  nextId: string;
};

export type MessageNode = {
  id: string;
  messages: string[];
  options?: ConversationOption[];
};

export const conversationTree: Record<string, MessageNode> = {
  welcome: {
    id: 'welcome',
    messages: [
      'Halo! Selamat datang.',
      'Saya Dadik Wahyu Chang, Brand & Identity Strategist Partner yang membantu bisnis bertransformasi dari "Komoditas" menjadi "Legacy".',
      'Ada yang bisa saya bantu hari ini?'
    ],
    options: [
      { label: 'Layanan apa saja?', nextId: 'services' },
      { label: 'Brand Tools', nextId: 'brand-tools' },
      { label: 'Tentang Dadik', nextId: 'about' },
      { label: 'Hubungi langsung', nextId: 'contact' }
    ]
  },

  services: {
    id: 'services',
    messages: [
      'Saya menawarkan 3 layanan utama untuk membangun brand yang kuat dan terlindungi:',
      '1. **Brand Strategy** - Merumuskan positioning, value proposition, dan roadmap brand Anda.',
      '2. **Brand Identity** - Menciptakan visual identity yang memorable dan konsisten.',
      '3. **Legal Protection** - Perlindungan hukum merek melalui pendaftaran HKI.',
      'Mau tahu lebih detail tentang layanan mana?'
    ],
    options: [
      { label: 'Brand Strategy', nextId: 'service-strategy' },
      { label: 'Brand Identity', nextId: 'service-identity' },
      { label: 'Legal Protection', nextId: 'service-legal' },
      { label: 'Brand Tools', nextId: 'brand-tools' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'service-strategy': {
    id: 'service-strategy',
    messages: [
      '**Brand Strategy** adalah fondasi dari brand yang sukses.',
      'Saya akan membantu Anda menemukan:',
      '- Purpose & Vision brand Anda',
      '- Target audience yang tepat',
      '- Positioning yang membedakan dari kompetitor',
      '- Brand messaging yang resonan',
      'Proses ini biasanya memakan waktu 2-4 minggu dengan workshop intensif bersama tim Anda.'
    ],
    options: [
      { label: 'Konsultasi gratis', nextId: 'contact' },
      { label: 'Layanan lainnya', nextId: 'services' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'service-identity': {
    id: 'service-identity',
    messages: [
      '**Brand Identity** adalah wajah brand Anda ke dunia.',
      'Deliverables yang akan Anda dapatkan:',
      '- Logo design (primary & secondary)',
      '- Color palette & typography system',
      '- Brand guidelines document',
      '- Aplikasi ke berbagai media',
      'Setiap desain saya buat dengan pendekatan strategis, bukan sekadar estetika.'
    ],
    options: [
      { label: 'Lihat portfolio', nextId: 'portfolio' },
      { label: 'Konsultasi gratis', nextId: 'contact' },
      { label: 'Kembali', nextId: 'services' }
    ]
  },

  'service-legal': {
    id: 'service-legal',
    messages: [
      '**Legal Protection** melindungi investasi brand Anda.',
      'Layanan ini mencakup:',
      '- Pengecekan ketersediaan merek',
      '- Pendaftaran merek ke DJKI',
      '- Monitoring & enforcement',
      '- Konsultasi hukum merek',
      'Banyak bisnis menunda ini sampai terlambat. Jangan biarkan brand Anda dicuri!'
    ],
    options: [
      { label: 'Cek merek saya', nextId: 'contact' },
      { label: 'Layanan lainnya', nextId: 'services' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'brand-tools': {
    id: 'brand-tools',
    messages: [
      'Saya punya beberapa **Brand Tools** gratis untuk membantu Anda:',
      '1. **Brand Inspection** - Cek kondisi brand Anda saat ini',
      '2. **Brand Check Up** - Analisis kesehatan brand secara menyeluruh',
      '3. **Brand Tracking** - Panduan memilih nama brand yang tepat',
      'Pilih tool yang Anda butuhkan:'
    ],
    options: [
      { label: 'Brand Inspection', nextId: 'tool-inspection' },
      { label: 'Brand Check Up', nextId: 'tool-checkup' },
      { label: 'Brand Tracking', nextId: 'tool-tracking' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'tool-inspection': {
    id: 'tool-inspection',
    messages: [
      '**Brand Inspection** membantu Anda mengecek kondisi brand saat ini.',
      'Download panduan lengkapnya untuk melakukan self-inspection pada brand Anda.',
      'Klik tombol di bawah untuk mengakses dokumen.'
    ],
    options: [
      { label: 'Download PDF', nextId: 'action-inspection' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'tool-checkup': {
    id: 'tool-checkup',
    messages: [
      '**Brand Check Up** adalah analisis kesehatan brand secara menyeluruh.',
      'Isi form singkat untuk mendapatkan insights tentang:',
      '- Kekuatan dan kelemahan brand',
      '- Tipe dan karakter brand',
      '- Posisi brand di pasar',
      'Klik tombol di bawah untuk mulai check up.'
    ],
    options: [
      { label: 'Mulai Check Up', nextId: 'action-checkup' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'tool-tracking': {
    id: 'tool-tracking',
    messages: [
      '**Brand Tracking** adalah panduan memilih nama brand yang tepat.',
      'Nama adalah pintu masuk identitas yang akan terus melekat pada brand Anda.',
      'Pemilihan nama tidak boleh asal - harus melewati proses yang benar.',
      'Download panduan lengkapnya di bawah ini.'
    ],
    options: [
      { label: 'Download PDF', nextId: 'action-tracking' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  philosophy: {
    id: 'philosophy',
    messages: [
      'Filosofi saya sederhana: **"From Commodity to Legacy"**',
      'Banyak bisnis terjebak dalam perang harga karena produknya dianggap komoditas - mudah diganti.',
      'Brand yang kuat mengubah persepsi ini. Anda bukan lagi sekadar pilihan, tapi THE pilihan.',
      'Legacy berarti brand Anda punya nilai yang bertahan lintas generasi, bukan sekadar tren sesaat.',
      'Saya membantu Anda membangun fondasi itu.'
    ],
    options: [
      { label: 'Bagaimana caranya?', nextId: 'services' },
      { label: 'Tentang Dadik', nextId: 'about' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  about: {
    id: 'about',
    messages: [
      'Saya **Dadik Wahyu Chang**, berbasis di Malang, Indonesia.',
      'Background saya unik - kombinasi creative design dan legal expertise.',
      'Pengalaman 25+ tahun lebih membantu, menguatkan dan mendamping lokal brand, corporate dan government yang tepat sesuai proses dan terlindungi secara hukum.',
      'Saya percaya brand yang baik harus indah secara visual, kuat secara strategi, dan aman secara legal.',
      'Mari ngobrol lebih lanjut!'
    ],
    options: [
      { label: 'Lihat perjalanan', nextId: 'journey' },
      { label: 'Ikuti sosmed', nextId: 'social-media' },
      { label: 'Hubungi Dadik', nextId: 'contact' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  journey: {
    id: 'journey',
    messages: [
      'Perjalanan saya dimulai dari passion terhadap desain dan keresahan melihat banyak brand lokal yang tidak terlindungi.',
      'Saya memutuskan untuk mendalami keduanya - Creative dan Legal.',
      'Hari ini, saya sudah membantu 100+ brand dari berbagai industri.',
      'Scroll ke bawah untuk melihat timeline lengkap perjalanan saya di website ini!'
    ],
    options: [
      { label: 'Mulai konsultasi', nextId: 'contact' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  portfolio: {
    id: 'portfolio',
    messages: [
      'Portfolio lengkap saya bisa Anda lihat di section "Klien" di website ini.',
      'Scroll ke bawah atau klik menu "Klien" di navbar.',
      'Setiap project punya cerita dan tantangan unik yang saya selesaikan bersama klien.'
    ],
    options: [
      { label: 'Konsultasi gratis', nextId: 'contact' },
      { label: 'Kembali', nextId: 'services' }
    ]
  },

  'social-media': {
    id: 'social-media',
    messages: [
      'Ikuti saya di berbagai platform untuk tips branding dan behind-the-scenes!',
      'Pilih platform favorit Anda:'
    ],
    options: [
      { label: 'YouTube', nextId: 'action-youtube' },
      { label: 'Instagram', nextId: 'action-instagram' },
      { label: 'TikTok', nextId: 'action-tiktok' },
      { label: 'Kembali', nextId: 'about' }
    ]
  },

  contact: {
    id: 'contact',
    messages: [
      'Senang sekali Anda tertarik untuk ngobrol lebih lanjut!',
      'Pilih cara yang paling nyaman untuk Anda:'
    ],
    options: [
      { label: 'WhatsApp', nextId: 'cta-whatsapp' },
      { label: 'Email', nextId: 'cta-email' },
      { label: 'Ikuti sosmed', nextId: 'social-media' },
      { label: 'Kembali', nextId: 'welcome' }
    ]
  },

  'cta-whatsapp': {
    id: 'cta-whatsapp',
    messages: [
      'Klik tombol di bawah untuk langsung chat via WhatsApp.',
      'Saya biasanya membalas dalam 1x24 jam di hari kerja.',
      'Siapkan brief singkat tentang bisnis Anda agar diskusi lebih produktif!'
    ],
    options: [
      { label: 'Buka WhatsApp', nextId: 'action-whatsapp' },
      { label: 'Kembali', nextId: 'contact' }
    ]
  },

  'cta-email': {
    id: 'cta-email',
    messages: [
      'Untuk diskusi yang lebih detail, email adalah pilihan yang baik.',
      'Anda bisa ceritakan tentang bisnis, tantangan, dan goals Anda.',
      'Saya akan membalas dengan insights awal dan proposal kerjasama.'
    ],
    options: [
      { label: 'Kirim Email', nextId: 'action-email' },
      { label: 'Kembali', nextId: 'contact' }
    ]
  },

  // Action nodes - trigger actual CTAs
  'action-whatsapp': {
    id: 'action-whatsapp',
    messages: [
      'WhatsApp sudah terbuka di tab baru!',
      'Silakan kirim pesan, saya akan segera membalas.',
      'Sambil menunggu, Anda bisa explore lebih lanjut di sini.'
    ],
    options: [
      { label: 'Lihat layanan', nextId: 'services' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  'action-email': {
    id: 'action-email',
    messages: [
      'Email client sudah terbuka!',
      'Ceritakan tentang bisnis dan tantangan Anda.',
      'Saya akan membalas dengan insights dalam 1-2 hari kerja.'
    ],
    options: [
      { label: 'Lihat layanan', nextId: 'services' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  // Brand Tools actions
  'action-inspection': {
    id: 'action-inspection',
    messages: [
      'Dokumen Brand Inspection sudah terbuka!',
      'Gunakan panduan ini untuk menganalisis kondisi brand Anda saat ini.',
      'Jika butuh bantuan lebih lanjut, jangan ragu untuk menghubungi saya.'
    ],
    options: [
      { label: 'Konsultasi', nextId: 'contact' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  'action-checkup': {
    id: 'action-checkup',
    messages: [
      'Form Brand Check Up sudah terbuka!',
      'Isi dengan jujur untuk mendapatkan hasil yang akurat.',
      'Setelah selesai, Anda akan mendapat insights tentang kesehatan brand Anda.'
    ],
    options: [
      { label: 'Konsultasi', nextId: 'contact' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  'action-tracking': {
    id: 'action-tracking',
    messages: [
      'Dokumen Brand Tracking sudah terbuka!',
      'Panduan ini akan membantu Anda memilih nama brand yang tepat.',
      'Nama yang baik adalah investasi jangka panjang untuk brand Anda.'
    ],
    options: [
      { label: 'Konsultasi', nextId: 'contact' },
      { label: 'Tool lainnya', nextId: 'brand-tools' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  // Social media actions
  'action-youtube': {
    id: 'action-youtube',
    messages: [
      'Channel YouTube sudah terbuka!',
      'Di sana saya berbagi tips branding, behind-the-scenes, dan case studies.',
      'Jangan lupa subscribe dan aktifkan notifikasi!'
    ],
    options: [
      { label: 'Platform lainnya', nextId: 'social-media' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  'action-instagram': {
    id: 'action-instagram',
    messages: [
      'Instagram sudah terbuka!',
      'Follow untuk update harian tentang branding dan creative process.',
      'Sering ada tips praktis di stories juga!'
    ],
    options: [
      { label: 'Platform lainnya', nextId: 'social-media' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  },

  'action-tiktok': {
    id: 'action-tiktok',
    messages: [
      'TikTok sudah terbuka!',
      'Konten di sini lebih santai dan fun, tapi tetap insightful.',
      'Perfect untuk belajar branding sambil scroll!'
    ],
    options: [
      { label: 'Platform lainnya', nextId: 'social-media' },
      { label: 'Kembali ke menu', nextId: 'welcome' }
    ]
  }
};

export const getNode = (id: string): MessageNode => {
  return conversationTree[id] || conversationTree.welcome;
};
