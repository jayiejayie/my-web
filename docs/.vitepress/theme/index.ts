import DefaultTheme from 'vitepress/theme'
import { h, onMounted, onUnmounted, ref } from 'vue'
import './style.css'
import PostList from './components/PostList.vue'
import HtmlContent from './components/HtmlContent.vue'
import HomePostList from './components/HomePostList.vue'
import CategoryList from './components/CategoryList.vue'
import ModernHome from './components/ModernHome.vue'

// 阅读进度条组件
const ReadingProgress = {
  setup() {
    const progress = ref(0)
    
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    }
    
    onMounted(() => {
      window.addEventListener('scroll', updateProgress, { passive: true })
      updateProgress()
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', updateProgress)
    })
    
    return () => h('div', {
      class: 'reading-progress',
      style: { width: progress.value + '%' }
    })
  }
}

// 布局组件
const LayoutWithProgress = {
  setup() {
    return () => h('div', null, [
      h(ReadingProgress),
      h(DefaultTheme.Layout)
    ])
  }
}

export default {
  extends: DefaultTheme,
  Layout: LayoutWithProgress,
  enhanceApp({ app, router, siteData }: { app: any; router: any; siteData: any }) {
    app.component('PostList', PostList)
    app.component('HtmlContent', HtmlContent)
    app.component('HomePostList', HomePostList)
    app.component('CategoryList', CategoryList)
    app.component('ModernHome', ModernHome)
  }
}
