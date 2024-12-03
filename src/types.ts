interface Link {
  name: string
  url: string
  icon?: string
}

interface Author {
  name: string
  bio?: string
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

interface Umami {
  url: string
  website_id: string
}

export type { Link, Site }
