import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    publishedOn: z.string(),
    metaDescription: z.string(),
    slug: z.string(),
  }),
});

export const collections = { blog: blogCollection };
