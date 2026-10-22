import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// All imagery on this site is hosted on Cloudinary, so `cover` is a
			// plain URL rather than Astro's local `image()` helper.
			extend: z.object({
				cover: z.string().url().optional(),
			}),
		}),
	}),
};
