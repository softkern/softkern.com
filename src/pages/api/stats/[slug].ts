import { PostStats, db, eq, sql } from 'astro:db'
import type { APIRoute } from 'astro'

import { fetchPosts } from '@utils/post'

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Not found slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let stats = await db.select().from(PostStats).where(eq(PostStats.slug, slug)).get()
  if (!stats) {
    stats = await db.insert(PostStats).values({ slug, views: 1, likes: 0 }).returning().get()
  } else {
    stats = await db
      .update(PostStats)
      .set({ views: stats.views + 1 })
      .where(eq(PostStats.slug, slug))
      .returning()
      .get()
  }

  return new Response(JSON.stringify(stats), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store, max-age=0',
    },
  })
}

export const POST: APIRoute = async ({ request, params }) => {
  const { slug } = params
  const { action } = await request.json()

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Not found slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (action !== 'like') {
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const stats = await db
    .update(PostStats)
    .set({ likes: sql`${PostStats.likes} + 1` })
    .where(eq(PostStats.slug, slug))
    .returning()
    .get()

  return new Response(JSON.stringify(stats), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store, max-age=0',
    },
  })
}

export async function getStaticPaths() {
  const posts = await fetchPosts()
  return posts.map((post) => ({
    params: { slug: post.slug },
  }))
}
