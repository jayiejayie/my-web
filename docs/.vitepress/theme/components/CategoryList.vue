<template>
  <div class="category-list">
    <div class="category-nav">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['category-btn', { active: selectedCategory === cat }]"
        @click="selectedCategory = cat"
      >
        {{ cat }}
        <span class="count">({{ getCategoryCount(cat) }})</span>
      </button>
    </div>
    
    <div class="post-list">
      <div v-for="post in filteredPosts" :key="post.url" class="post-card">
        <div class="post-meta">
          <span class="date">{{ formatDate(post.date) }}</span>
          <span class="category-tag">{{ post.category }}</span>
        </div>
        <a :href="post.url" class="title">{{ post.title }}</a>
        <div class="description">{{ post.description }}</div>
        <div v-if="post.tags && post.tags.length" class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { data as posts } from '../../utils/posts.data.ts'

const selectedCategory = ref('全部')

const categories = computed(() => {
  const cats = new Set(posts.map(p => p.category || '未分类'))
  return ['全部', ...Array.from(cats).sort()]
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === '全部') {
    return posts
  }
  return posts.filter(p => p.category === selectedCategory.value)
})

function getCategoryCount(cat) {
  if (cat === '全部') return posts.length
  return posts.filter(p => p.category === cat).length
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--vp-c-border);
}

.category-btn {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.category-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}

.category-btn .count {
  font-size: 12px;
  opacity: 0.8;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-card {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
  box-shadow: var(--vp-shadow-1);
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-3);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.date {
  font-size: 14px;
  color: var(--vp-c-text-3);
}

.category-tag {
  font-size: 12px;
  padding: 2px 10px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-weight: 500;
}

.title {
  font-family: var(--vp-font-family-heading);
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  line-height: 1.4;
}

.title:hover {
  color: var(--vp-c-brand-1);
}

.description {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
