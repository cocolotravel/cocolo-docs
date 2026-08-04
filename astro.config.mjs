import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';
import astroBrokenLinksChecker from 'astro-broken-links-checker';

export default defineConfig({
  site: 'https://docs.cocolotravel.com',
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  integrations: [
    starlight({
      title: 'Cocolo',
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Head: './src/components/Head.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'noindex, nofollow' },
        },
      ],
      plugins: [
        // errorOnRelativeLinks disabled: this project's existing convention is
        // relative links (e.g. `../../transportation/suica`), and they resolve
        // correctly — only flag links that are actually broken.
        starlightLinksValidator({ errorOnRelativeLinks: false }),
      ],
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
          label: 'Services',
          translations: { en: 'Services' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'services' } }],
        },
        {
          label: 'Pratique',
          translations: { en: 'Practical Info' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'pratique' } }],
        },
        {
          label: 'Culture',
          translations: { en: 'Culture' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'culture' } }],
        },
        {
          label: 'Guide des villes',
          translations: { en: 'City guide' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'cities' } }],
        },
      ],
    }),
    sitemap(),
    astroBrokenLinksChecker({ checkExternalLinks: true }),
  ],
});
