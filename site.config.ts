import type { Link, Site } from '@types'

const SITE: Site = {
  url: 'https://softkern.com',
  title: 'Softkern',
  description: 'welcome to my personal website',
  favicon: '/favicon.svg',
  author: {
    name: 'softkern',
    bio: '只是为了好玩和生活.',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/softkern',
      icon: 'i-carbon-logo-github',
    },
    {
      name: 'X',
      url: 'https://x.com/softkern',
      icon: 'i-carbon-logo-x',
    },
  ],
  umami: {
    url: import.meta.env.SK_UMAMI_URL,
    website_id: import.meta.env.SK_UMAMI_WEBSITE_ID,
  },
}

const MENUS: Link[] = [
  { name: '首页', url: '/' },
  { name: '博客', url: '/posts' },
  { name: '工具', url: '/uses' },
  { name: '关于', url: '/about' },
]

export { MENUS, SITE }
