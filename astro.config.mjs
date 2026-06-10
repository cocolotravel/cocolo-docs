import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.cocolotravel.com',
  integrations: [
    starlight({
      title: 'Cocolo',
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Head: './src/components/Head.astro',
      },
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
          collapsed: true,
          items: [{ autogenerate: { directory: 'preparation' } }],
        },
        {
          label: 'Transports',
          translations: { en: 'Transportation' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'transportation' } }],
        },
        {
          label: 'Sur place',
          translations: { en: 'In Japan' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'injapan' } }],
        },
        {
          label: 'Guide des villes',
          translations: { en: 'City guide' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'cities' } }],
        },
      ],
      social: [
        { icon: 'x.com', label: 'X', href: 'https://x.com/cocolotravel' },
      ],
    }),
  ],
});
