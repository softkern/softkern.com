import { PostStats, db } from 'astro:db'

// for dev
export default async function () {
  await db.insert(PostStats).values([
    { id: 1, slug: 'build-your-digital-garden', views: 10, likes: 10 },
    { id: 2, slug: 'build-terminal-with-alacritty-and-zellij', views: 100, likes: 100 },
  ])
}
