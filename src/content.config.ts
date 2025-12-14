import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dubs = defineCollection({
	loader: glob({ base: './src/content/dubs', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
		}),
});

export const collections = { dubs };
