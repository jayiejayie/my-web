<template>
  <div class="html-content-iframe-wrapper">
    <iframe 
      ref="iframeRef"
      :src="htmlPath"
      class="html-content-iframe"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  htmlPath: {
    type: String,
    required: true
  }
})

const iframeRef = ref(null)

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.style.height = 'calc(100vh - 64px)'
  }
})
</script>

<style scoped>
.html-content-iframe-wrapper {
  width: 100%;
  height: calc(100vh - 64px);
  margin: 0;
  padding: 0;
}

.html-content-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
