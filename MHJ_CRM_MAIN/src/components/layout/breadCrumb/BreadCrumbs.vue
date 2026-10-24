<template>
  <div class="container-fluid">
    <div class="page-title">
      <div class="row">
        <div class="col-6">
          <div class="page-title__heading">
            <button
              v-if="backHandler"
              type="button"
              class="page-title__back"
              aria-label="Kembali ke halaman sebelumnya"
              @click="handleBackClick"
            >
              <SolarIcon
                name="arrow-left-linear"
                :size="22"
                color="#087cae"
                :stroke-width="2.5"
              />
            </button>
            <router-link
              v-else-if="backRoute"
              :to="backRoute"
              class="page-title__back"
              aria-label="Kembali ke halaman sebelumnya"
            >
              <SolarIcon
                name="arrow-left-linear"
                :size="22"
                color="#087cae"
                :stroke-width="2.5"
              />
            </router-link>
            <h4>{{ pageTitle }}</h4>
          </div>
        </div>
        <div class="col-6 p-0 page-title__action">
          <button
            type="button"
            class="page-refresh-button"
            :class="{ 'is-refreshing': props.refreshing }"
            :disabled="props.refreshing"
            title="Muat ulang data halaman ini"
            aria-label="Muat ulang data halaman ini"
            @click="emit('refresh')"
          >
            <SolarIcon name="refresh" :size="18" aria-hidden="true" />
            <span>{{ props.refreshing ? 'Memuat...' : 'Refresh' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SolarIcon from '@/components/shared/SolarIcon.vue'
import {
  pageBackHandler,
  pageBackRoute,
  pageTitleOverride,
} from '@/composable/usePageHeader'

const props = withDefaults(defineProps<{ refreshing?: boolean }>(), {
  refreshing: false,
})
const emit = defineEmits<{ refresh: [] }>()

const route = useRoute()
// Jika sebuah halaman memanggil `usePageTitle(...)`, nilainya menimpa
// `route.meta.mainTitle` sementara halaman itu aktif.
const pageTitle = computed(
  () => pageTitleOverride.value ?? (route.meta.mainTitle as string) ?? '',
)
// Rute untuk tombol kembali opsional di sebelah kiri judul (jika di-set
// halaman via usePageBackRoute).
const backRoute = computed(() => pageBackRoute.value)
const backHandler = computed(() => pageBackHandler.value)
function handleBackClick() {
  const handler = backHandler.value
  if (handler) void handler()
}
</script>

<style scoped>
.page-title__heading {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 38px;
}
.page-title__heading h4 {
  margin: 0;
}
.page-title__back {
  display: inline-grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid #e6edf1;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(27, 43, 65, 0.04);
  color: #087cae;
  text-decoration: none;
  cursor: pointer;
  transition: background .18s ease, border-color .18s ease;
}
.page-title__back:hover,
.page-title__back:focus-visible {
  background: #eaf7fd;
  border-color: #badff2;
  outline: none;
}

.page-title__action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.page-refresh-button {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #dce6ec;
  border-radius: 11px;
  padding: 8px 13px;
  color: #16334d;
  background: #fff;
  box-shadow: 0 3px 10px rgba(31, 75, 105, 0.06);
  font-size: 12px;
  font-weight: 700;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease,
    box-shadow 0.2s ease;
}

.page-refresh-button:hover:not(:disabled),
.page-refresh-button:focus-visible {
  border-color: #70c8ed;
  color: #0788bd;
  background: #f2fbff;
  box-shadow: 0 4px 13px rgba(24, 166, 228, 0.13);
}

.page-refresh-button:focus-visible {
  outline: 3px solid rgba(24, 166, 228, 0.14);
  outline-offset: 2px;
}

.page-refresh-button:disabled {
  cursor: wait;
  opacity: 0.75;
}

.page-refresh-button.is-refreshing :deep(svg) {
  animation: page-refresh-spin 0.7s linear infinite;
}

@keyframes page-refresh-spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 575.98px) {
  .page-refresh-button span { display: none; }
  .page-refresh-button { width: 38px; padding: 0; }
}
</style>
