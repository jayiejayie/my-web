<template>
  <div class="home-post-section">
    <h2 class="section-title">最新文章</h2>
    <div class="post-grid">
      <a v-for="post in latestPosts" :key="post.url" :href="post.url" class="post-item">
        <div class="post-date">{{ formatDate(post.date) }}</div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-desc">{{ post.description || '暂无描述' }}</p>
      </a>
      <a href="/posts/" class="post-item more-card">
        <div class="more-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
          </svg>
        </div>
        <h3 class="post-title">更多文章</h3>
        <p class="post-desc">查看全部文章列表</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { data as posts } from '../../utils/posts.data.ts'

const latestPosts = computed(() => {
  return posts.slice(0, 5)
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.home-post-section {
  margin: 48px auto;
  max-width: 1152px;
  padding: 0 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  text-align: center;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.post-item {
  display: block;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.post-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.post-date {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}

.post-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 10px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.post-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.more-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 140px;
  border-style: dashed;
  background: transparent;
}

.more-card:hover {
  background: var(--vp-c-bg-alt);
}

.more-icon {
  color: var(--vp-c-brand-1);
  margin-bottom: 12px;
}

.more-card .post-title {
  color: var(--vp-c-brand-1);
  margin-bottom: 6px;
}

.more-card .post-desc {
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
