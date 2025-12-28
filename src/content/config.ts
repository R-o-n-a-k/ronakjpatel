import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()),
    banner: z.string().url().optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
