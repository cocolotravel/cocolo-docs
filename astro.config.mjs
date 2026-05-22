import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.cocolotravel.com',
  integrations: [
    starlight({
      title: 'Cocolo Travel — Guide',
      defaultLocale: 'fr',
      locales: {
        fr: {
          label: 'Français',
          lang: 'fr',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        { slug: 'brochures' },
        {
          label: 'Préparation',
          translations: { en: 'Preparation' },
          autogenerate: { directory: 'preparation' },
        },
        {
          label: 'Transports',
          translations: { en: 'Transportation' },
          autogenerate: { directory: 'transportation' },
        },
        {
          label: 'Sur place',
          translations: { en: 'In Japan' },
          autogenerate: { directory: 'injapan' },
        },
        {
          label: 'Guide des villes',
          translations: { en: 'City guide' },
          autogenerate: { directory: 'cities' },
        },
      ],
      social: [
        { icon: 'x.com', label: 'X', href: 'https://x.com/cocolotravel' },
      ],
    }),
  ],
});
