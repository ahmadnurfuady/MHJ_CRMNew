<template>
  <div class="container-fluid">
    <div class="page-title">
      <div class="row">
        <div class="col-6">
          <h4>{{ pageTitle }}</h4>
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

const props = withDefaults(defineProps<{ refreshing?: boolean }>(), {
  refreshing: false,
})
const emit = defineEmits<{ refresh: [] }>()

const route = useRoute()
const pageTitle = computed(() => (route.meta.mainTitle as string) || '')
</script>

<style scoped>
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
