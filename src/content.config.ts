import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog content collection — markdown articles under src/content/blog.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(), // matches a slug in blogCategories.ts
      author: z.string().default('Apex Solar Team'),
      authorRole: z.string().default('Solar Energy Specialists'),
      publishDate: z.coerce.date(),
      modifiedDate: z.coerce.date().optional(),
      featuredImage: z.string(),
      featuredImageAlt: z.string(),
      excerpt: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string(),
      keywords: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      faq: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
    }),
});

export const collections = { blog };
