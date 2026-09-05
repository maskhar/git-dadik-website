import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dadik Wahyu Chang - Strategic Brand Consultant',
    short_name: 'DWC',
    description: 'Konsultan brand strategis yang membantu bisnis bertransformasi dari Komoditas menjadi Legacy',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D71920',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['business', 'productivity'],
    lang: 'id',
  };
}
