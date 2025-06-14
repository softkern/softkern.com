export interface Author {
  name: string
  email: string
  avatar: string
  bio: string
  location: string
}

export interface MenuItem {
  name: string
  href: string
  icon?: {
    default: string
    selected: string
  }
  external?: boolean
}

export interface SocialItem {
  name: string
  href: string
  icon?: string
}

export interface SiteConfig {
  title: string
  description: string
  url: string
  ogImage: string
  author: Author
  menu?: MenuItem[]
  social?: SocialItem[]
}
