import { type CollectionEntry, getCollection } from 'astro:content'

export const fetchProjects = async () => {
  const projects: CollectionEntry<'projects'>[] = await getCollection('projects')
  return projects
}
