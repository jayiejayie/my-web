<template>
  <div class="post-list-container">
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
      <div v-for="group in groupedPosts" :key="group.key" class="post-group">
        <h3 class="group-title">{{ group.label }}</h3>
        <div class="group-posts">
          <div v-for="post in group.posts" :key="post.url" class="post-item">
            <span class="date">{{ formatDate(post.date) }}</span>
            <div class="content">
              <a :href="post.url" class="title">{{ post.title }}</a>
              <div v-if="post.description" class="description">{{ post.description }}</div>
            </div>
            <div v-if="post.tags && post.tags.length" class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { data as postsData } from '../../utils/posts.data.ts'

const selectedCategory = ref('全部')

// 确保 posts 是数组
const posts = computed(() => {
  return Array.isArray(postsData) ? postsData : []
})

const categories = computed(() => {
  if (!posts.value.length) return ['全部']
  const cats = new Set()
  posts.value.forEach(p => {
    if (Array.isArray(p.category)) {
      p.category.forEach(c => cats.add(c))
    } else {
      cats.add(p.category || '未分类')
    }
  })
  return ['全部', ...Array.from(cats).sort()]
})

const filteredPosts = computed(() => {
  if (!posts.value.length) return []
  if (selectedCategory.value === '全部') {
    return posts.value
  }
  return posts.value.filter(p => {
    if (Array.isArray(p.category)) {
      return p.category.includes(selectedCategory.value)
    }
    return (p.category || '未分类') === selectedCategory.value
  })
})

// 按年度季度分组
const groupedPosts = computed(() => {
  const posts = filteredPosts.value
  if (!posts.length) return []

  const groups = new Map()

  posts.forEach(post => {
    if (!post.date) return

    const date = new Date(post.date)
    const year = date.getFullYear()
    const month = date.getMonth()
    const quarter = Math.floor(month / 3) + 1
    const quarterLabel = `${year}年 Q${quarter}`
    const key = `${year}-Q${quarter}`

    if (!groups.has(key)) {
      groups.set(key, {
        key,
        label: quarterLabel,
        year,
        quarter,
        posts: []
      })
    }
    groups.get(key).posts.push(post)
  })

  // 按年份降序、季度降序排列
  return Array.from(groups.values()).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    return b.quarter - a.quarter
  })
})

function getCategoryCount(cat) {
  if (!posts.value.length) return 0
  if (cat === '全部') return posts.value.length
  return posts.value.filter(p => {
    if (Array.isArray(p.category)) {
      return p.category.includes(cat)
    }
    return (p.category || '未分类') === cat
  }).length
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
.post-list-container {
  margin-top: 32px;
}

.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--vp-c-border);
}

.category-btn {
  padding: 8px 18px;
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-alt);
}

.category-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}

.category-btn .count {
  font-size: 12px;
  opacity: 0.8;
  margin-left: 4px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post-group {
  border: 1px solid var(--vp-c-border);
  border-radius: var(--vp-border-radius);
  overflow: hidden;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-1);
}

.group-title {
  margin: 0;
  padding: 14px 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
}

.group-posts {
  display: flex;
  flex-direction: column;
}

.post-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--vp-c-border);
  transition: all 0.2s ease;
}

.post-item:hover {
  background-color: var(--vp-c-bg-alt);
}

.post-item:last-child {
  border-bottom: none;
}

.date {
  font-size: 13px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  min-width: 90px;
  padding-top: 2px;
  font-weight: 500;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-family: var(--vp-font-family-heading);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-bottom: none;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.title:hover {
  color: var(--vp-c-brand-1);
}

.description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-width: 80px;
}

.tag {
  display: inline-block;
  font-size: 11px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 500;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .post-item {
    flex-wrap: wrap;
    gap: 10px;
    padding: 16px;
  }

  .date {
    min-width: auto;
    font-size: 12px;
    order: 1;
  }

  .content {
    width: 100%;
    order: 0;
  }

  .tags {
    width: 100%;
    order: 2;
  }
}
</style>
