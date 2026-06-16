---
title: 关于
---

<div class="about-page">

<div class="about-hero">
  <h1 class="about-title">关于我</h1>
  <p class="about-subtitle">工程安全管理的实践者与思考者</p>
</div>

<div class="about-content">

<div class="about-section">
  <div class="section-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  </div>
  <div class="section-content">
    <h2>我是谁</h2>
    <p>一名深耕市政工程和安全管理领域的专业人士。在工程建设的全生命周期中，始终将安全视为第一要务，致力于通过系统化的管理方法和前沿的技术手段，构建更安全、更高效的工程环境。</p>
  </div>
</div>

<div class="about-section">
  <div class="section-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  </div>
  <div class="section-content">
    <h2>这个网站的初衷</h2>
    <div class="intent-grid">
      <div class="intent-item">
        <strong>整理知识</strong>
        <span>将工作中的经验和学习心得系统化整理，形成可复用的知识资产</span>
      </div>
      <div class="intent-item">
        <strong>分享交流</strong>
        <span>与同行交流探讨，在碰撞中激发新的思考和解决方案</span>
      </div>
      <div class="intent-item">
        <strong>持续学习</strong>
        <span>通过写作倒逼自己深入学习，保持对行业前沿的敏锐度</span>
      </div>
    </div>
  </div>
</div>

<div class="about-section">
  <div class="section-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
  </div>
  <div class="section-content">
    <h2>内容方向</h2>
    <div class="direction-tags">
      <span class="dir-tag">市政工程技术</span>
      <span class="dir-tag">道路桥梁管网</span>
      <span class="dir-tag">安全管理实务</span>
      <span class="dir-tag">风险评估</span>
      <span class="dir-tag">应急预案</span>
      <span class="dir-tag">法规标准解读</span>
    </div>
  </div>
</div>

<div class="about-section">
  <div class="section-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  </div>
  <div class="section-content">
    <h2>联系方式</h2>
    <p>如有问题、建议或合作意向，欢迎通过以下方式交流：</p>
    <div class="contact-info">
      <div class="contact-item">
        <span class="contact-label">邮箱</span>
        <span class="contact-value">contact@example.com</span>
      </div>
    </div>
  </div>
</div>

</div>

</div>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-hero {
  text-align: center;
  padding: 60px 0 40px;
  border-bottom: 1px solid var(--vp-c-border);
  margin-bottom: 48px;
}

.about-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.about-subtitle {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.about-section {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--vp-border-radius);
  transition: all 0.2s ease;
}

.about-section:hover {
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-1);
}

.section-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 10px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.section-content {
  flex: 1;
}

.section-content h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.section-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
}

.intent-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.intent-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
}

.intent-item strong {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.intent-item span {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.direction-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.dir-tag {
  padding: 6px 14px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.contact-info {
  margin-top: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-3);
  min-width: 60px;
}

.contact-value {
  font-size: 14px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

@media (max-width: 640px) {
  .about-section {
    flex-direction: column;
    gap: 16px;
  }
  
  .about-hero {
    padding: 40px 0 32px;
  }
  
  .about-title {
    font-size: 28px;
  }
}
</style>
