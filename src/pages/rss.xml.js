import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { siteConfig } from 'site.config'

export async function GET(context) {
  const posts = await getCollection('posts')

  return rss({
    title: siteConfig.title,
    description: siteConfig.description || '',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdAt,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    stylesheet: '/rss/styles.xsl',
    customData: '<language>zh-cn</language>',
  })
}
