<template>
  <div class="timeline-panel">
    <header class="timeline-header">
      <div class="timeline-heading">
        <span class="timeline-heading__icon" aria-hidden="true">
          <vue-feather type="clock" size="19" />
        </span>
        <div>
          <p>{{ heading }}</p>
          <h5>{{ title }}</h5>
        </div>
      </div>
      <span class="timeline-count">{{ countLabel }}</span>
    </header>

    <div v-if="loading" class="timeline-state">
      <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Memuat riwayat...
    </div>

    <div v-else-if="loadError" class="timeline-state timeline-state--error">
      <vue-feather type="alert-circle" size="18" />
      <span>{{ loadError }}</span>
      <button class="btn btn-sm btn-outline-primary" type="button" @click="load">
        Coba lagi
      </button>
    </div>

    <div v-else-if="!items.length" class="timeline-empty">
      <vue-feather type="inbox" size="22" />
      <strong>Belum ada aktivitas</strong>
      <p>Perubahan data akan muncul di timeline ini.</p>
    </div>

    <ol v-else class="timeline-list">
      <li
        v-for="item in items"
        :key="item.key"
        class="timeline-item"
        :class="`timeline-item--${timelineTone(item.type)}`"
      >
        <span class="timeline-item__marker" aria-hidden="true">
          <vue-feather :type="timelineIcon(item.type)" size="16" />
        </span>
        <div class="timeline-item__body">
          <h6 class="timeline-item__title">{{ item.title }}</h6>
          <div class="timeline-item__meta">
            <span class="timeline-item__date">
              {{ formatTimelineDate(item.createdAt) }}
              <span class="timeline-item__ago">· {{ timeAgo(item.createdAt) }}</span>
            </span>
            <span class="timeline-item__author">{{ item.authorName }}</span>
            <span
              v-if="item.source"
              class="timeline-item__source"
              :class="`timeline-item__source--${item.source.toLowerCase()}`"
            >
              {{ item.source }}
            </span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  fetchUnifiedTimeline,
  timelineIcon,
  timelineTone,
  timeAgo,
  formatTimelineDate,
  type ActivityLogEntity,
  type TimelineItem,
} from '@/services/activityLogService'

const props = defineProps<{
  entity: ActivityLogEntity
  entityId: number | null | undefined
  title: string
  heading?: string
  /** Diterima untuk kompatibilitas; tidak lagi dipakai di tampilan baru. */
  createdDescription?: string
}>()

const emit = defineEmits<{
  (e: 'loaded', count: number): void
}>()

const heading = computed(() => props.heading ?? 'Riwayat Aktivitas')
const items = ref<TimelineItem[]>([])
const loading = ref(false)
const loadError = ref<string | null>(null)

const countLabel = computed(() => {
  if (loading.value) return '...'
  return `Riwayat Aktivitas (${items.value.length})`
})

async function load() {
  const id = Number(props.entityId)
  if (!Number.isFinite(id) || id <= 0) {
    items.value = []
    return
  }
  loading.value = true
  loadError.value = null
  try {
    items.value = await fetchUnifiedTimeline(props.entity, id, 100)
    emit('loaded', items.value.length)
  } catch {
    loadError.value = 'Gagal memuat riwayat aktivitas.'
    items.value = []
    emit('loaded', 0)
  } finally {
    loading.value = false
  }
}

watch(
  () => [props.entity, props.entityId],
  () => {
    void load()
  },
  { immediate: true },
)

defineExpose({ reload: load })
</script>

<style scoped>
.timeline-panel {
  background: #fff;
  border-radius: 12px;
  padding: 18px 22px 22px;
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.timeline-heading {
  display: flex;
  align-items: center;
  gap: 12px;
}

.timeline-heading__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
}

.timeline-heading p {
  margin: 0;
  color: var(--app-primary, #18a6e4);
  font-size: 12px;
  font-weight: 600;
}

.timeline-heading h5 {
  margin: 0;
  color: #0f172a;
  font-size: 17px;
  font-weight: 700;
}

.timeline-count {
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary-dark, #116e96);
  font-size: 11px;
  font-weight: 700;
}

.timeline-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Garis vertikal yang menghubungkan marker. */
.timeline-list::before {
  content: '';
  position: absolute;
  top: 16px;
  bottom: 16px;
  left: 19px;
  width: 2px;
  background: #e2e8f0;
  z-index: 0;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 14px;
  align-items: flex-start;
  z-index: 1;
}

.timeline-item__marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--app-primary-soft, #e0f2fe);
  color: var(--app-primary-dark, #116e96);
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #e2e8f0;
}

.timeline-item--success .timeline-item__marker {
  background: #dcfce7;
  color: #047857;
}

.timeline-item--warning .timeline-item__marker {
  background: #fef3c7;
  color: #b45309;
}

.timeline-item--danger .timeline-item__marker {
  background: #fee2e2;
  color: #b91c1c;
}

.timeline-item--info .timeline-item__marker {
  background: #fef9c3;
  color: #a16207;
}

.timeline-item--muted .timeline-item__marker {
  background: #f1f5f9;
  color: #64748b;
}

.timeline-item__body {
  padding-top: 4px;
}

.timeline-item__title {
  margin: 0 0 4px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  word-break: break-word;
}

.timeline-item__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #64748b;
}

.timeline-item__ago {
  color: #94a3b8;
}

.timeline-item__author {
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--app-primary-soft, #e0f2fe);
  color: var(--app-primary-dark, #116e96);
  font-weight: 600;
  font-size: 11px;
}

.timeline-item__source {
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.timeline-item__source--apk {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.timeline-item__source--web {
  background: rgba(99, 102, 241, 0.14);
  color: #4338ca;
}

.timeline-state {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px;
  border-radius: 10px;
  background: #f8fafc;
  color: #475569;
  font-size: 13px;
}

.timeline-state--error {
  background: rgba(239, 68, 68, 0.06);
  color: #b91c1c;
}

.timeline-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 26px;
  border-radius: 10px;
  background: #f8fafc;
  color: #64748b;
  text-align: center;
}

.timeline-empty strong {
  color: #0f172a;
  font-size: 13px;
}

.timeline-empty p {
  margin: 0;
  font-size: 12px;
}
</style>
