import type { SiteConfig } from '@types'

export const siteConfig: SiteConfig = {
  title: '软核模式',
  description: '软核模式加载中...',
  url: 'https://softkern.com',
  ogImage: '',
  author: {
    name: 'gaodb',
    email: 'hi@softkern.com',
    bio: '硬核是工作，软核是生活',
    avatar: '/logo.svg',
    location: '中国',
  },

  menu: [
    {
      name: '首页',
      href: '/',
      icon: {
        default: 'i-ri-home-4-line',
        selected: 'i-ri-home-4-fill',
      },
    },
    {
      name: '博客',
      href: '/posts',
      icon: {
        default: 'i-ri-article-line',
        selected: 'i-ri-article-fill',
      },
    },
    {
      name: '项目',
      href: '/projects',
      icon: {
        default: 'i-ri-function-line',
        selected: 'i-ri-function-fill',
      },
    },
    {
      name: '关于',
      href: '/about',
      icon: {
        default: 'i-ri-user-3-line',
        selected: 'i-ri-user-3-fill',
      },
    },
  ],

  social: [
    {
      name: 'github',
      href: 'https://github.com/softkern',
      icon: 'i-carbon-logo-github',
    },
    {
      name: 'x',
      href: 'https://x.com/softkern',
      icon: 'i-carbon-logo-x',
    },
    {
      name: 'email',
      href: 'hi@softkern.com',
      icon: 'i-carbon-email',
    },
  ],
}
