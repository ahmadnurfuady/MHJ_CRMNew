<template>
  <div class="in-dev-page">
    <div class="in-dev-card">

      <!-- Ikon animasi -->
      <div class="in-dev-icon">
        <vue-feather type="tool" size="40" />
      </div>

      <h2 class="in-dev-title">Halaman Sedang Dikembangkan</h2>
      <p class="in-dev-sub">
        Menu <strong>{{ pageTitle }}</strong> sudah terdaftar di sistem, tetapi halamannya
        masih dalam proses pengembangan oleh tim developer.
      </p>

      <div class="in-dev-badge">
        <vue-feather type="clock" size="14" class="me-1" />
        Coming Soon
      </div>

      <p class="in-dev-path">
        <code>{{ currentPath }}</code>
      </p>

      <router-link :to="routes.Dashboards.Default" class="btn btn-primary mt-2">
        <vue-feather type="home" size="15" class="me-1" />
        Kembali ke Dashboard
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router/routes'

const route = useRoute()

const currentPath = computed(() => route.path)

const pageTitle = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const last = segments[segments.length - 1] ?? ''
  return last
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'ini'
})
</script>

<style scoped>
.in-dev-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem 1rem;
}

.in-dev-card {
  text-align: center;
  max-width: 460px;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  border: 1.5px dashed rgba(24, 166, 228, 0.4);
  background: rgba(24, 166, 228, 0.03);
}

.in-dev-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  margin-bottom: 1.25rem;
  /* efek nadi */
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(24,166,228,0.25); }
  50% { box-shadow: 0 0 0 14px rgba(24,166,228,0); }
}

.in-dev-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #032A4E;
  margin-bottom: 0.6rem;
}

.in-dev-sub {
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.in-dev-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  border: 1px solid rgba(24, 166, 228, 0.3);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.in-dev-path {
  font-size: 0.78rem;
  color: #adb5bd;
  margin-bottom: 0;
}

.in-dev-path code {
  background: #f1f3f5;
  padding: 0.15rem 0.45rem;
  border-radius: 0.25rem;
}
</style>
