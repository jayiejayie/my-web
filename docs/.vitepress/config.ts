import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import path from 'path'

export default withMermaid({
  title: '工程与安全管理笔记',
  description: '市政工程与安全管理专业知识分享',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  
  vite: {
    publicDir: path.resolve(__dirname, '../public')
  },
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    
    search: {
      provider: 'local'
    },
    
    outline: {
      level: 'deep',
      label: '目录'
    },
    
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  },
  
  markdown: {
    lineNumbers: true
  },
  
  // Mermaid 配置
  mermaid: {
    theme: 'default',
    themeVariables: {
      fontSize: '14px',
      fontFamily: 'Inter, Noto Sans SC, sans-serif'
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
      padding: 16
    },
    sequence: {
      useMaxWidth: true
    },
    gantt: {
      useMaxWidth: true
    }
  }
})
