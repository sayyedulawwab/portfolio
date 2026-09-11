import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Coerced to a real Date so sorting and <time> are type-safe. */
    publishedOn: z.coerce.date(),
    /** Set this when you materially revise a post — it feeds sitemap lastmod. */
    updatedOn: z.coerce.date().optional(),
    metaDescription: z.string(),
    /** Legacy field, kept optional so existing posts still validate. Prefer entry.id. */
    slug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Relative path to an image in the post folder, used for OG + post header. */
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog: blogCollection };
