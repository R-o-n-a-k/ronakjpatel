import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    currentProject: z.boolean().default(false),
    banner: z.string().url().optional(),
    demoURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    tech: z.array(z.string()),
    projectContent:z.array(z.string()).optional(),
    features:z.array(z.string()).optional()
  }),
});

export const collections = {
  projects,
};
