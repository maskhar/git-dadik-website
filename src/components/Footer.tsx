'use client';

import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dadikwahyuchangutero/',
    icon: Instagram
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/dadikwahyuutero',
    icon: Facebook
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@DadikwahyuChang',
    icon: Youtube
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@dadikwahyuchang',
    icon: TikTokIcon
  },
  {
    name: 'X',
    href: 'https://x.com/dadikwahyuutero',
    icon: Twitter
  }
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1 uppercase tracking-wide">Dadik Wahyu Chang</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Brand & Identity Strategist Partner</p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 mb-1">Rumah Merah OXYZ, Malang.</p>
            <p className="text-sm text-gray-600">© 2026 Dadik Wahyu Chang. Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
