<template>
  <div class="modern-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-eyebrow">工程安全管理知识库</div>
        <h1 class="hero-title">
          <span class="title-main">文清</span>
          <span class="title-divider"></span>
          <span class="title-sub">清风入怀，万事皆安</span>
        </h1>
        <p class="hero-tagline">
          工程为骨，安全为魂，于方寸间见天地。
          专注市政工程设计与安全管理实践，分享专业见解与实战经验。
        </p>
        <div class="hero-actions">
          <a href="/posts/" class="btn btn-primary">
            <span>浏览文章</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="/about" class="btn btn-secondary">关于我</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="abstract-shape shape-1"></div>
        <div class="abstract-shape shape-2"></div>
        <div class="abstract-shape shape-3"></div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">{{ posts.length }}</div>
          <div class="stat-label">专业文章</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ categories.length }}</div>
          <div class="stat-label">知识分类</div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">核心领域</h2>
        <p class="section-desc">聚焦工程实践中的关键议题</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M17 22v-9.5a2.5 2.5 0 0 0-5 0V22"/><path d="M8 22v-5.5a2.5 2.5 0 0 0-5 0V22"/><path d="M12 22V11.5a2.5 2.5 0 0 0-5 0V22"/></svg>
          </div>
          <h3 class="feature-title">技术文章</h3>
          <p class="feature-desc">市政工程设计、施工技术要点与工艺解析</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </div>
          <h3 class="feature-title">法规解读</h3>
          <p class="feature-desc">国家标准、地方规范深度解读与实际应用</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 class="feature-title">实践经验</h3>
          <p class="feature-desc">项目管理、安全管理实战经验与案例复盘</p>
        </div>
      </div>
    </section>

    <!-- Latest Posts Section -->
    <section class="posts-section">
      <div class="section-header">
        <h2 class="section-title">最新文章</h2>
        <a href="/posts/" class="section-link">
          查看全部
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
      <div class="posts-list">
        <a v-for="post in latestPosts" :key="post.url" :href="post.url" class="post-card">
          <div class="post-meta">
            <span class="post-category">{{ post.category || '未分类' }}</span>
            <span class="post-date">{{ formatDate(post.date) }}</span>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-desc">{{ post.description || '暂无描述' }}</p>
          <div class="post-tags" v-if="post.tags && post.tags.length">
            <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="post-tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">持续学习，持续分享</h2>
        <p class="cta-desc">工程安全管理是一个不断进化的领域，期待与你交流探讨</p>
        <a href="/about" class="btn btn-primary">了解更多</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { data as postsData } from '../../utils/posts.data.ts'

const posts = computed(() => {
  return Array.isArray(postsData) ? postsData : []
})

const latestPosts = computed(() => {
  return posts.value.slice(0, 6)
})

const categories = computed(() => {
  const cats = new Set(posts.value.map(p => p.category).filter(Boolean))
  return Array.from(cats)
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
.modern-home {
  --home-max-width: 1200px;
  --home-padding: 24px;
  --section-gap: 80px;
  --color-primary: var(--vp-c-brand-1);
  --color-text: var(--vp-c-text-1);
  --color-text-secondary: var(--vp-c-text-2);
  --color-text-tertiary: var(--vp-c-text-3);
  --color-bg: var(--vp-c-bg);
  --color-bg-alt: var(--vp-c-bg-alt);
  --color-border: var(--vp-c-border);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 80px var(--home-padding);
  max-width: var(--home-max-width);
  margin: 0 auto;
  gap: 60px;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 0 24px 0;
}

.title-main {
  font-size: clamp(48px, 8vw, 72px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.title-divider {
  width: 60px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
}

.title-sub {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text-secondary);
  font-style: italic;
}

.hero-tagline {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0 0 32px 0;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-bg-alt);
  border-color: var(--color-primary);
}

/* Hero Visual */
.hero-visual {
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  z-index: 1;
  opacity: 0.6;
}

.abstract-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), transparent);
  top: 0;
  right: 0;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(225deg, var(--vp-c-brand-2), transparent);
  bottom: 100px;
  left: 50px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, var(--vp-c-brand-3), transparent);
  top: 200px;
  left: 100px;
}

/* Stats Section */
.stats-section {
  padding: 24px var(--home-padding);
  max-width: var(--home-max-width);
  margin: 0 auto;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.stat-item {
  text-align: center;
  padding: 8px 0;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: var(--color-text-secondary);
}

/* Section Common Styles */
.features-section,
.posts-section {
  padding: var(--section-gap) var(--home-padding);
  max-width: var(--home-max-width);
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  gap: 20px;
  flex-wrap: wrap;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.section-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin: 8px 0 0 0;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: gap 0.2s ease;
}

.section-link:hover {
  gap: 10px;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: var(--color-bg-alt);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--color-primary);
}

.feature-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  border-radius: 10px;
  margin-bottom: 20px;
  color: var(--color-primary);
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 12px 0;
}

.feature-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Posts Section */
.posts-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.post-card {
  display: block;
  padding: 24px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.post-card:hover {
  background: var(--color-bg-alt);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 12px;
}

.post-category {
  color: var(--color-primary);
  font-weight: 500;
}

.post-date {
  color: var(--color-text-tertiary);
}

.post-card .post-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.post-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.post-tag {
  font-size: 11px;
  padding: 4px 10px;
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

/* CTA Section */
.cta-section {
  padding: 80px var(--home-padding);
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 16px 0;
}

.cta-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0 0 28px 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-visual {
    opacity: 0.3;
    right: -200px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 60px var(--home-padding);
    flex-direction: column;
  }

  .hero-visual {
    display: none;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .posts-list {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
