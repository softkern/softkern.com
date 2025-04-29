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
  href: string
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

// Site Config
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

export type { Link, Site, Toolset }
