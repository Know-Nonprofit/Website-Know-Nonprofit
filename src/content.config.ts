import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tag: z.string(),
  description: z.string(),
  draft: z.boolean().default(false),
  image: z.string().optional(),
  country: z.string().optional(),
});

export const collections = {
  'es/blog': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/es/blog' }),
    schema: shared,
  }),
  'es/proyectos': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/es/proyectos' }),
    schema: shared,
  }),
  'en/blog': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/en/blog' }),
    schema: shared,
  }),
  'en/projects': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/en/projects' }),
    schema: shared,
  }),
};
