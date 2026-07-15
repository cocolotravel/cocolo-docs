import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const docs = await getCollection('docs');
const pages = Object.fromEntries(docs.map((entry) => [entry.id, entry.data]));

// Cocolo brand tokens, as RGB (see the cocolo-brand skill's tokens.md — never
// hard-code colors outside of this canonical five-color palette).
const SUMI = [27, 56, 72];
const WASHI = [255, 254, 245];
const KODAMA = [138, 154, 130];
const KIN = [255, 201, 22];

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description || undefined,
    bgGradient: [SUMI],
    border: { color: KIN, width: 8, side: 'block-end' },
    font: {
      title: { color: WASHI, size: 64 },
      description: { color: KODAMA, size: 32 },
    },
  }),
});
