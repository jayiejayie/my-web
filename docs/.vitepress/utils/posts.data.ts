import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  date: string
  description: string
  url: string
  category?: string | string[]
  tags?: string[]
}

export default createContentLoader('posts/**/*.md', {
  transform(raw): Post[] {
    return raw
      .filter(({ url }) => !url.includes('index') && url !== '/posts/')
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || '无标题',
        date: frontmatter.date || '',
        description: frontmatter.description || '',
        url,
        category: frontmatter.category || '未分类',
        tags: frontmatter.tags || []
      }))
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
  }
})
