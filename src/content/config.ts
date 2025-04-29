import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image()
        // .refine((img) => img.height < 400, {
        //   message: 'Cover image must be at most 400 pixels height!',
        // })
        .optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      sticky: z.number().default(0),
      pubDate: z.coerce
        .date()
        .or(z.string())
        .transform((v) => new Date(v)),
      updatedDate: z.coerce
        .date()
        .or(z.string())
        .optional()
        .transform((v) => (v ? new Date(v) : undefined)),
    }),
})

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      demoUrl: z.string().optional(),
      codeUrl: z.string().optional(),
      description: z.string().optional(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      sticky: z.number().default(0),
    }),
})

export const collections = {
  posts: postCollection,
  projects: projectCollection,
}
