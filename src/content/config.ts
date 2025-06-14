import { defineCollection, z } from 'astro:content'
import { siteConfig } from 'config'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default(siteConfig.author.name),
    readingTime: z.number().optional(),
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    tech: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
})

export const collections = {
  posts,
  projects,
}
