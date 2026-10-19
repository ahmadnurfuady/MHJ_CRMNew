<template>
  <div class="activity-timeline-panel">
    <header class="activity-header">
      <div class="activity-heading">
        <span class="activity-heading__icon" aria-hidden="true">
          <vue-feather type="clock" size="19" />
        </span>
        <div>
          <p>{{ heading }}</p>
          <h5>{{ title }}</h5>
        </div>
      </div>
    </header>

    <div class="activity-content">
      <div class="activity-section-heading">
        <div>
          <h6>Timeline Aktivitas</h6>
          <p>Catatan perubahan dan aktivitas yang tercatat sistem.</p>
        </div>
        <span class="activity-count">{{ activityCountLabel }}</span>
      </div>

      <div v-if="loading" class="activity-state">
        <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
        Memuat riwayat...
      </div>

      <div v-else-if="loadError" class="activity-state activity-state--error">
        <vue-feather type="alert-circle" size="18" />
        <span>{{ loadError }}</span>
        <button class="btn btn-sm btn-outline-primary" type="button" @click="load">
          Coba lagi
        </button>
      </div>

      <div v-else-if="!logs.length" class="activity-empty-state">
        <span aria-hidden="true"><vue-feather type="inbox" size="20" /></span>
        <div>
          <strong>Belum ada aktivitas</strong>
          <p>Perubahan data akan muncul di timeline ini.</p>
        </div>
      </div>

      <div v-else class="activity-timeline">
        <article
          v-for="log in logs"
          :key="log.id"
          class="activity-entry"
          :class="`activity-entry--${actionBadgeTone(log.action)}`"
        >
          <div class="activity-entry__marker" aria-hidden="true">
            <vue-feather :type="actionIcon(log.action)" size="17" />
          </div>
          <div class="activity-entry__content">
            <div class="activity-entry__top">
              <div class="activity-entry__who">
                <h6>{{ log.user_name || 'Pengguna sistem' }}</h6>
                <span class="activity-entry__sub">{{ describe(log) }}</span>
              </div>
              <span class="activity-badge" :class="`activity-badge--${actionBadgeTone(log.action)}`">
                {{ actionLabel(log.action) }}
              </span>
            </div>

            <!-- 'i' (Dibuat): ringkasan nilai awal, bukan daftar diff. -->
            <ul
              v-if="log.action.toLowerCase() === 'i' && highlightsFor(log).length"
              class="activity-highlights"
            >
              <li v-for="item in highlightsFor(log)" :key="item.label">
                <span class="activity-highlights__label">{{ item.label }}</span>
                <span class="activity-highlights__value">{{ item.display }}</span>
              </li>
            </ul>

            <!-- 'u' (Diperbarui): tabel diff per field. -->
            <ul
              v-else-if="log.action.toLowerCase() === 'u' && diffFor(log).length"
              class="activity-diffs"
            >
              <li v-for="diff in diffFor(log).slice(0, 8)" :key="diff.field">
                <span class="activity-diffs__label">{{ diff.label }}</span>
                <span class="activity-diffs__values">
                  <span class="activity-diffs__before">{{ diff.beforeDisplay }}</span>
                  <vue-feather type="arrow-right" size="12" class="activity-diffs__arrow" />
                  <span class="activity-diffs__after">{{ diff.afterDisplay }}</span>
                </span>
              </li>
              <li
                v-if="diffFor(log).length > 8"
                class="activity-diffs__more"
              >
                +{{ diffFor(log).length - 8 }} perubahan lain
              </li>
            </ul>

            <time :datetime="log.created_at">
              <vue-feather type="calendar" size="14" />
              {{ formatTime(log.created_at) }}
              <span v-if="log.frmdvc" class="activity-source">· {{ log.frmdvc }}</span>
            </time>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  fetchActivityLogs,
  parseActivityDetails,
  computeDiff,
  creationHighlights,
  actionLabel,
  actionIcon,
  actionBadgeTone,
  type ActivityLogEntity,
  type ActivityLogRow,
  type FieldDiff,
  type CreationHighlight,
} from '@/services/activityLogService'

const props = defineProps<{
  entity: ActivityLogEntity
  entityId: number | null | undefined
  title: string
  heading?: string
  /** Teks fallback untuk aksi 'i', mis. "Kontak baru dibuat." */
  createdDescription?: string
}>()

const heading = computed(() => props.heading ?? 'Riwayat Aktivitas')
const logs = ref<ActivityLogRow[]>([])
const loading = ref(false)
const loadError = ref<string | null>(null)
const diffCache = new Map<number, FieldDiff[]>()
const highlightCache = new Map<number, CreationHighlight[]>()

const activityCountLabel = computed(() => {
  if (loading.value) return '...'
  const total = logs.value.length
  return `${total} aktivitas`
})

async function load() {
  const id = Number(props.entityId)
  if (!Number.isFinite(id) || id <= 0) {
    logs.value = []
    return
  }
  loading.value = true
  loadError.value = null
  try {
    logs.value = await fetchActivityLogs(props.entity, id, 100)
    diffCache.clear()
    highlightCache.clear()
  } catch {
    loadError.value = 'Gagal memuat riwayat aktivitas.'
    logs.value = []
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

function diffFor(log: ActivityLogRow): FieldDiff[] {
  if (diffCache.has(log.id)) return diffCache.get(log.id)!
  const diffs = computeDiff(props.entity, parseActivityDetails(log.details))
  diffCache.set(log.id, diffs)
  return diffs
}

function highlightsFor(log: ActivityLogRow): CreationHighlight[] {
  if (highlightCache.has(log.id)) return highlightCache.get(log.id)!
  const items = creationHighlights(props.entity, parseActivityDetails(log.details))
  highlightCache.set(log.id, items)
  return items
}

function describe(log: ActivityLogRow): string {
  const action = log.action.toLowerCase()
  if (action === 'i') return props.createdDescription || 'Membuat data baru.'
  if (action === 'd') return 'Menghapus data dari sistem.'
  const diffs = diffFor(log)
  if (!diffs.length) return 'Menyimpan tanpa perubahan nilai yang terlacak.'
  if (diffs.length === 1) return `Memperbarui ${diffs[0].label.toLowerCase()}.`
  return `Memperbarui ${diffs.length} field.`
}

function formatTime(value: string): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
</script>

<style scoped>
.activity-timeline-panel {
  background: #fff;
  border-radius: 12px;
}

.activity-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px 10px;
}

.activity-heading {
  display: flex;
  align-items: center;
  gap: 12px;
}

.activity-heading__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18a6e4;
}

.activity-heading p {
  margin: 0;
  color: #18a6e4;
  font-size: 12px;
  font-weight: 600;
}

.activity-heading h5 {
  margin: 0;
  color: #0f172a;
  font-size: 17px;
  font-weight: 700;
}

.activity-content {
  padding: 4px 20px 22px;
}

.activity-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 10px 0 14px;
}

.activity-section-heading h6 {
  margin: 0 0 2px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
}

.activity-section-heading p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
}

.activity-count {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(24, 166, 228, 0.1);
  color: #116e96;
  font-size: 11px;
  font-weight: 700;
}

.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.activity-entry {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #cbd5e1;
  border-radius: 10px;
  background: #ffffff;
}

.activity-entry--success {
  border-left-color: #10b981;
  background: rgba(16, 185, 129, 0.04);
}

.activity-entry--warning {
  border-left-color: #f59e0b;
  background: rgba(245, 158, 11, 0.04);
}

.activity-entry--danger {
  border-left-color: #ef4444;
  background: rgba(239, 68, 68, 0.04);
}

.activity-entry__marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #116e96;
}

.activity-entry--success .activity-entry__marker {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.activity-entry--warning .activity-entry__marker {
  background: rgba(245, 158, 11, 0.14);
  color: #b45309;
}

.activity-entry--danger .activity-entry__marker {
  background: rgba(239, 68, 68, 0.14);
  color: #b91c1c;
}

.activity-entry__top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 8px;
}

.activity-entry__who h6 {
  margin: 0 0 2px;
  color: #0f172a;
  font-size: 13px;
  font-weight: 700;
}

.activity-entry__sub {
  color: #475569;
  font-size: 12.5px;
}

.activity-badge {
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(100, 116, 139, 0.12);
  color: #475569;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  flex-shrink: 0;
}

.activity-badge--success {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.activity-badge--warning {
  background: rgba(245, 158, 11, 0.16);
  color: #b45309;
}

.activity-badge--danger {
  background: rgba(239, 68, 68, 0.14);
  color: #b91c1c;
}

/* Daftar nilai awal untuk aksi "Dibuat" — rapi, mirip definition-list. */
.activity-highlights {
  margin: 4px 0 10px;
  padding: 10px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;
  gap: 6px 14px;
  background: rgba(16, 185, 129, 0.06);
  border: 1px dashed rgba(16, 185, 129, 0.3);
  border-radius: 8px;
}

.activity-highlights li {
  display: contents;
}

.activity-highlights__label {
  color: #475569;
  font-size: 12px;
  font-weight: 600;
}

.activity-highlights__value {
  color: #0f172a;
  font-size: 12.5px;
  font-weight: 500;
  word-break: break-word;
}

/* Diff untuk aksi "Diperbarui" — before merah coret, after hijau. */
.activity-diffs {
  margin: 4px 0 10px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.activity-diffs li {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.activity-diffs__label {
  color: #0f172a;
  font-size: 12px;
  font-weight: 700;
  min-width: 130px;
}

.activity-diffs__values {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12.5px;
  color: #334155;
}

.activity-diffs__before {
  color: #b91c1c;
  text-decoration: line-through;
  text-decoration-color: rgba(185, 28, 28, 0.5);
}

.activity-diffs__after {
  color: #047857;
  font-weight: 600;
}

.activity-diffs__arrow {
  color: #94a3b8;
}

.activity-diffs__more {
  color: #94a3b8;
  font-style: italic;
  background: transparent !important;
  border: 0 !important;
  padding: 2px 4px !important;
}

.activity-entry time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 11px;
}

.activity-source {
  color: #94a3b8;
}

.activity-state {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px;
  border-radius: 10px;
  background: #f8fafc;
  color: #475569;
}

.activity-state--error {
  background: rgba(239, 68, 68, 0.06);
  color: #b91c1c;
}

.activity-empty-state {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-radius: 10px;
  background: #f8fafc;
  color: #64748b;
}

.activity-empty-state strong {
  display: block;
  color: #0f172a;
  margin-bottom: 2px;
}

.activity-empty-state p {
  margin: 0;
  font-size: 12px;
}
</style>
