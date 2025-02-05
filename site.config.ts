import type { MenuItemProps, Site } from '@types'

const SITE: Site = {
  url: 'https://softkern.com',
  title: 'Softkern',
  description: 'welcome to my personal website',
  favicon: '/favicon.svg',
  author: {
    name: 'softkern',
    bio: '用软核方式，搞定硬核技术',
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

const MENUS: MenuItemProps[] = [
  {
    name: 'Home',
    href: '/',
    icon: 'carbon:home',
  },
  {
    name: 'Blog',
    href: '/posts',
    icon: 'carbon:rss',
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: 'carbon:ibm-cloud-projects',
  },
  {
    name: 'Uses',
    href: '/uses',
    icon: 'carbon:tools-alt',
  },
  {
    name: 'About',
    href: '/about',
    icon: 'carbon:information',
  },
]

export { MENUS, SITE }
