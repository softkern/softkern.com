interface MenuItemProps {
  name: string
  href: string
  icon?: string
  isExternalUrl?: boolean
}

interface Tool {
  name: string
  description: string
  url: string
  image?: string
}

interface Toolset {
  title: string
  description: string
  items: Tool[]
}

interface Link {
  name: string
  url: string
  icon?: string
}

interface Author {
  name: string
  bio?: string
}

interface Umami {
  url: string
  website_id: string
}

interface Site {
  url: string
  title: string
  author: Author
  socials?: Link[]
  favicon?: string
  description?: string
  canonicalURL?: string
  ogImage?: string
  ogType?: string
  umami?: Umami
}

export type { MenuItemProps, Toolset, Site }
