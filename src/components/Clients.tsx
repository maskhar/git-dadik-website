'use client';

import Image from 'next/image';
import { Reveal } from './Reveal';

// Client logos from public/images/logos/clients/
const CLIENT_LOGOS = [
  '1922@300x.png',
  '3 Second@300x.png',
  'Adhi@300x.png',
  'Advos@300x.png',
  'Antangin@300x.png',
  'logo-amartawisesa.png',
  'BNI@300x.png',
  'BOOP@300x.png',
  'BPR Artha Kanjuruhan@300x.png',
  'BRI@300x.png',
  'Baiturrokhman@300x.png',
  'Bang Bana@300x.png',
  'Bank Jatim@300x.png',
  'Bank Sidoarjo@300x.png',
  'Begawan Premium StudentApartement@300x.png',
  'Berrys@300x.png',
  'Bestdough@300x.png',
  'Bluder Kapas @300x.png',
  'Bumiputera@300x.png',
  'Calon Istri@300x.png',
  'Catoel@300x.png',
  'Chatten@300x.png',
  'Consult@300x.png',
  'Cross @300x.png',
  'logo-dailbana.png',
  'DR Dhelay@300x.png',
  'Dhika Universe@300x.png',
  'Dinar Weddover@300x.png',
  'Diplomat@300x.png',
  'Djarum@300x.png',
  'Djoglo@300x.png',
  'Electronic City@300x.png',
  'Ertekn@300x.png',
  'Etawa Plus@300x.png',
  'FPG insurance@300x.png',
  'Fertisoil@300x.png',
  'Fifgroup@300x.png',
  'First@300x.png',
  'Gellate@300x.png',
  'Gita@300x.png',
  'Hamur Kurasi@300x.png',
  'Hanoman@300x.png',
  'Helwa@300x.png',
  'Hodai@300x.png',
  'Holcim@300x.png',
  'Honda@300x.png',
  'Hotel Santika@300x.png',
  'IN lite@300x.png',
  'Indana@300x.png',
  'Indofood@300x.png',
  'Indosat Oredoo@300x.png',
  'Inspiring City@300x.png',
  'J.CO@300x.png',
  'Jamkrindo@300x.png',
  'Japfa@300x.png',
  'Jatim Park@300x.png',
  'Jiwasraya@300x.png',
  'KEK@300x.png',
  'KPU@300x.png',
  'Kabupaten Malang@300x.png',
  'Kampung Kramat@300x.png',
  'Kementrian Pertanian@300x.png',
  'Kitabeli@300x.png',
  'Konas@300x.png',
  'Konimex@300x.png',
  'Kota Karismatik Madiun 2@300x.png',
  'Kota Madiun@300x.png',
  'Kota karismatik Madiun@300x.png',
  'La tobas cigar Premium@300x.png',
  'Lakoni@300x.png',
  'MCC@300x.png',
  'MCCPG@300x.png',
  'MS glow@300x.png',
  'Malang Kucecwara@300x.png',
  'Mandiri@300x.png',
  'Mie Gacoan@300x.png',
  'Mie Jogja@300x.png',
  'Mom Sarasa@300x.png',
  'Naavagreen@300x.png',
  'Nastle@300x.png',
  'Nelongso@300x.png',
  'Nobu@300x.png',
  'OT@300x.png',
  'Odigiro@300x.png',
  'Ollino Garden@300x.png',
  'PLN@300x.png',
  'PT BPR Bank Tulungagung@300x.png',
  'PT Central Mega Kencana@300x.png',
  'PT Econusa Kualiva Abadi@300x.png',
  'PT Inti Dragon@300x.png',
  'PT indo  lakto@300x.png',
  'Pegadaian@300x.png',
  'Perbamida@300x.png',
  'Pertamina@300x.png',
  'Pia cap mangkok@300x.png',
  'RSI UNISMA MALANG@300x.png',
  'RSSA@300x.png',
  'Raja Gula@300x.png',
  'Robot@300x.png',
  'Rohani@300x.png',
  'Rubylicious@300x.png',
  'Ruvodo@300x.png',
  'Satu Titik@300x.png',
  'Sidu@300x.png',
  'Smartfren@300x.png',
  'Smoore@300x.png',
  'Stamford Indonesia FC@300x.png',
  'Teh Gelas@300x.png',
  'Tekopi@300x.png',
  'Telkomsel@300x.png',
  'The Alana@300x.png',
  'Tiga Roda@300x.png',
  'Tripa@300x.png',
  'UWG@300x.png',
  'Vivan@300x.png',
  'Wika@300x.png',
  'Wismari@300x.png',
  'XL Axiata@300x.png',
  'Yamaha@300x.png',
  'You wamg you@300x.png',
  // 'tegsa@300x.png',
];

export const Clients = () => {
  return (
    <section id="clients" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Klien Kami
            </h2>
          </Reveal>
          <Reveal width="100%">
            <p className="text-muted-foreground text-lg">
              Dipercaya oleh berbagai brand ternama di Indonesia
            </p>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
            {CLIENT_LOGOS.map((logo, index) => {
              const clientName = logo.replace('@300x.png', '').trim();
              const encodedPath = `/images/logos/clients/${encodeURIComponent(logo)}`;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-center aspect-square hover:shadow-md transition-shadow duration-200"
                >
                  <Image
                    src={encodedPath}
                    alt={clientName}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
