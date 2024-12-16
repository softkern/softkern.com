import { column, defineDb, defineTable } from 'astro:db'

const PostStats = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    slug: column.text({ unique: true }),
    views: column.number({ default: 1 }),
    likes: column.number({ default: 0 }),
  },
})

export default defineDb({
  tables: { PostStats },
})
