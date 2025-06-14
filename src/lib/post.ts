import { getCollection } from 'astro:content'

export const getPosts = async () => {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  return posts.sort((a, b) => {
    return a.data.publishDate.valueOf() - b.data.publishDate.valueOf()
  })
}
