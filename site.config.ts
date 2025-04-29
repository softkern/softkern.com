import type { Link, Site } from '@/types'

export const siteConfig: Site = {
  title: '软核模式',
  url: 'https://softkern.com',
  author: {
    name: 'gdb',
    bio: '',
  },
}

export const navItems: Link[] = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '项目', href: '/projects' },
  { name: '博客', href: '/posts' },
  { name: '工具箱', href: '/uses' },
]

export const socialLinks: Link[] = [
  { name: 'GitHub', href: 'https://github.com/softkern', icon: 'i-lucide-github' },
  { name: 'X', href: 'https://x.com/softkern', icon: 'i-carbon-logo-x' },
  { name: 'Email', href: 'mailto:hi@softkern.com', icon: 'i-lucide-mail' },
]
