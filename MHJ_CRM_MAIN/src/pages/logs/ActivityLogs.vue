<template>
  <div class="container-fluid activity-logs-page">
    <section class="logs-hero">
      <div class="logs-hero__icon" aria-hidden="true">
        <SolarIcon name="history" :size="30" />
      </div>
      <div class="logs-hero__copy">
        <span>RIWAYAT SISTEM</span>
        <h1>Log Aktivitas</h1>
        <p>Pantau seluruh perubahan data dan aktivitas terbaru di CRM.</p>
      </div>
      <span class="logs-hero__total">{{ activities.length }} aktivitas</span>
    </section>

    <section class="logs-panel">
      <div class="logs-toolbar">
        <label class="logs-search">
          <SolarIcon name="magnifier" :size="18" aria-hidden="true" />
          <span class="visually-hidden">Cari aktivitas</span>
          <input v-model.trim="search" type="search" placeholder="Cari aktivitas, data, atau keterangan..." />
          <button v-if="search" type="button" aria-label="Hapus pencarian" @click="search = ''">
            <SolarIcon name="close" :size="15" />
          </button>
        </label>

        <div class="logs-filters" role="group" aria-label="Filter jenis aktivitas">
          <button
            v-for="option in filterOptions"
            :key="option.value"
            type="button"
            :class="{ active: filter === option.value }"
            @click="filter = option.value"
          >
            {{ option.label }}
            <span>{{ countFor(option.value) }}</span>
          </button>
        </div>
      </div>

      <div v-if="loading" class="logs-state" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <p>Memuat log aktivitas...</p>
      </div>

      <div v-else-if="error" class="logs-state is-error" role="alert">
        <span class="logs-state__icon"><SolarIcon name="danger-circle" :size="28" /></span>
        <h2>Log aktivitas gagal dimuat</h2>
        <p>{{ error }}</p>
        <button type="button" @click="loadActivities">Coba Lagi</button>
      </div>

      <template v-else-if="pagedActivities.length">
        <ol class="logs-list">
          <li v-for="activity in pagedActivities" :key="activity.id" class="log-item">
            <span class="log-item__icon" :class="`is-${activity.action}`" aria-hidden="true">
              <SolarIcon :name="activity.icon" :size="21" />
            </span>
            <div class="log-item__content">
              <div class="log-item__title-row">
                <h2>{{ activity.title }}</h2>
                <span class="log-item__action" :class="`is-${activity.action}`">
                  {{ actionLabel(activity.action) }}
                </span>
              </div>
              <p>{{ activity.subtitle }}</p>
              <div class="log-item__meta">
                <span>{{ entityLabel(activity.entityName) }}</span>
                <span aria-hidden="true">&bull;</span>
                <time :datetime="activity.createdAt">{{ formatDateTime(activity.createdAt) }}</time>
                <span aria-hidden="true">&bull;</span>
                <span>{{ activity.time }}</span>
              </div>
            </div>
          </li>
        </ol>

        <footer class="logs-pagination">
          <p>Menampilkan {{ pageStart }}-{{ pageEnd }} dari {{ filteredActivities.length }} aktivitas</p>
          <div>
            <button type="button" :disabled="currentPage === 1" aria-label="Halaman sebelumnya" @click="currentPage--">
              <SolarIcon name="alt-arrow-left" :size="17" />
            </button>
            <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
            <button type="button" :disabled="currentPage === totalPages" aria-label="Halaman berikutnya" @click="currentPage++">
              <SolarIcon name="alt-arrow-right" :size="17" />
            </button>
          </div>
        </footer>
      </template>

      <div v-else class="logs-state">
        <span class="logs-state__icon"><SolarIcon name="history" :size="28" /></span>
        <h2>{{ search || filter !== 'all' ? 'Aktivitas tidak ditemukan' : 'Belum ada aktivitas' }}</h2>
        <p>{{ search || filter !== 'all' ? 'Coba gunakan kata kunci atau filter yang berbeda.' : 'Aktivitas sistem akan muncul di halaman ini.' }}</p>
        <button v-if="search || filter !== 'all'" type="button" @click="resetFilters">Reset Filter</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import { usePageBackRoute } from '@/composable/usePageHeader'
import { routes } from '@/router/routes'
import { fetchSystemActivities } from '@/services/managerDashboardService'
import type { ActivityAction, ActivityLogItem } from '@/types/dashboard/manager'

type ActivityFilter = 'all' | ActivityAction

const PAGE_SIZE = 12
const activities = ref<ActivityLogItem[]>([])
const loading = ref(true)
const error = ref('')
const search = ref('')
const filter = ref<ActivityFilter>('all')
const currentPage = ref(1)

usePageBackRoute(routes.Dashboards.Default)

const filterOptions: Array<{ label: string; value: ActivityFilter }> = [
  { label: 'Semua', value: 'all' },
  { label: 'Ditambahkan', value: 'i' },
  { label: 'Diperbarui', value: 'u' },
  { label: 'Dihapus', value: 'd' },
]

const filteredActivities = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  return activities.value.filter((activity) => {
    const matchesFilter = filter.value === 'all' || activity.action === filter.value
    const haystack = `${activity.title} ${activity.subtitle} ${entityLabel(activity.entityName)}`
      .toLocaleLowerCase('id-ID')
    return matchesFilter && haystack.includes(keyword)
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredActivities.value.length / PAGE_SIZE)))
const pagedActivities = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredActivities.value.slice(start, start + PAGE_SIZE)
})
const pageStart = computed(() => (currentPage.value - 1) * PAGE_SIZE + 1)
const pageEnd = computed(() => Math.min(currentPage.value * PAGE_SIZE, filteredActivities.value.length))

watch([search, filter], () => {
  currentPage.value = 1
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) currentPage.value = pages
})

function countFor(value: ActivityFilter): number {
  if (value === 'all') return activities.value.length
  return activities.value.filter((activity) => activity.action === value).length
}

function actionLabel(action: ActivityAction): string {
  if (action === 'i') return 'Ditambahkan'
  if (action === 'u') return 'Diperbarui'
  return 'Dihapus'
}

function entityLabel(entityName: string): string {
  const labels: Record<string, string> = {
    tasks: 'Tugas',
    contacts: 'Kontak',
    companies: 'Faskes',
    m_projects: 'Peluang',
    master_information_cards: 'Promo & Informasi',
  }
  return labels[entityName] || entityName.replaceAll('_', ' ')
}

function formatDateTime(value: string): string {
  const date = new Date(value.replace(' ', 'T'))
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function resetFilters(): void {
  search.value = ''
  filter.value = 'all'
}

async function loadActivities(): Promise<void> {
  loading.value = true
  error.value = ''
  try {
    activities.value = await fetchSystemActivities()
  } catch (loadError) {
    console.error('Gagal memuat log aktivitas.', loadError)
    error.value = 'Data dari server belum dapat diambil.'
  } finally {
    loading.value = false
  }
}

onMounted(loadActivities)
</script>

<style scoped>
.activity-logs-page { --logs-ink: #243240; display: grid; gap: 18px; padding-bottom: 34px; }
.logs-hero { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; overflow: hidden; border: 1px solid var(--app-primary-border, #dcecf4); border-radius: 18px; padding: 22px 24px; background: linear-gradient(120deg, #fff 15%, var(--app-primary-wash, #f1faff) 100%); box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.logs-hero::after { position: absolute; top: -70px; right: 100px; width: 180px; height: 180px; border: 34px solid rgba(var(--app-primary-rgb, 24, 166, 228), .06); border-radius: 50%; content: ''; }
.logs-hero__icon { position: relative; z-index: 1; display: grid; place-items: center; width: 60px; height: 60px; border-radius: 18px; color: var(--app-primary-dark, #087fad); background: var(--app-primary-soft, #dff4fc); }
.logs-hero__copy { position: relative; z-index: 1; }
.logs-hero__copy > span { display: block; margin-bottom: 4px; color: var(--app-primary-dark, #1193c9); font-size: 9.5px; font-weight: 800; letter-spacing: .11em; }
.logs-hero h1 { margin: 0; color: var(--logs-ink); font-size: 22px; font-weight: 750; }
.logs-hero p { margin: 5px 0 0; color: #748391; font-size: 12px; }
.logs-hero__total { position: relative; z-index: 1; border-radius: 999px; padding: 8px 12px; color: var(--app-primary-dark, #087fad); background: #fff; box-shadow: 0 3px 12px rgba(34, 96, 128, .1); font-size: 11px; font-weight: 700; }
.logs-panel { border: 1px solid #e2e8ed; border-radius: 18px; padding: 20px; background: #fff; box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.logs-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
.logs-search { display: flex; align-items: center; gap: 9px; width: min(410px, 100%); height: 42px; border: 1px solid #dfe7ec; border-radius: 12px; padding: 0 10px 0 13px; color: var(--app-primary-dark, #087fad); background: #fff; box-shadow: 0 3px 12px rgba(31, 41, 55, .05); }
.logs-search:focus-within { border-color: var(--app-primary-border, #66c4eb); box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.logs-search input { flex: 1; min-width: 0; border: 0; outline: 0; color: var(--logs-ink); background: transparent; font-size: 12px; }
.logs-search input::placeholder { color: #9aa6af; }
.logs-search button { display: grid; place-items: center; width: 27px; height: 27px; border: 0; border-radius: 7px; padding: 0; color: #82909c; background: #f3f6f8; }
.logs-filters { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
.logs-filters button { display: inline-flex; align-items: center; gap: 7px; min-height: 34px; border: 1px solid #dfe7ec; border-radius: 999px; padding: 6px 10px 6px 12px; color: #647482; background: #fff; font-size: 10.5px; font-weight: 600; }
.logs-filters button span { display: grid; place-items: center; min-width: 19px; height: 19px; border-radius: 10px; padding: 0 5px; background: #eef2f5; font-size: 9px; }
.logs-filters button.active { border-color: var(--app-primary-border, #56bce7); color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); }
.logs-filters button.active span { color: #fff; background: var(--app-primary, #18a6e4); }
.logs-list { display: grid; margin: 0; padding: 0; list-style: none; }
.log-item { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 14px; padding: 18px 4px; }
.log-item + .log-item { border-top: 1px solid #edf1f4; }
.log-item__icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 13px; color: #0f91c5; background: #e5f6fd; }
.log-item__icon.is-i { color: #138a67; background: #e7f7f1; }
.log-item__icon.is-u { color: #b77908; background: #fff5dc; }
.log-item__icon.is-d { color: #c64d5b; background: #ffedf0; }
.log-item__content { min-width: 0; }
.log-item__title-row { display: flex; align-items: center; gap: 9px; }
.log-item h2 { overflow: hidden; margin: 0; color: var(--logs-ink); font-size: 13px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.log-item__action { flex: 0 0 auto; border-radius: 999px; padding: 4px 8px; color: #087a5c; background: #e7f7f1; font-size: 9px; font-weight: 700; }
.log-item__action.is-u { color: #9a6505; background: #fff4d6; }
.log-item__action.is-d { color: #aa3e4b; background: #ffeaed; }
.log-item__content > p { margin: 5px 0 7px; color: #71808d; font-size: 11.5px; }
.log-item__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; color: #9aa5ae; font-size: 10px; }
.log-item__meta span:first-child { color: var(--app-primary-dark, #087fad); font-weight: 650; text-transform: capitalize; }
.logs-pagination { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-top: 1px solid #edf1f4; padding: 16px 4px 0; }
.logs-pagination p { margin: 0; color: #89959f; font-size: 10.5px; }
.logs-pagination div { display: flex; align-items: center; gap: 10px; }
.logs-pagination div span { color: #657581; font-size: 10.5px; font-weight: 600; }
.logs-pagination button { display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid #dfe7ec; border-radius: 9px; color: var(--app-primary-dark, #087fad); background: #fff; }
.logs-pagination button:disabled { color: #b7c0c7; background: #f5f7f8; cursor: not-allowed; }
.logs-state { display: flex; min-height: 300px; flex-direction: column; align-items: center; justify-content: center; color: #7d8b96; text-align: center; }
.logs-state__icon { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 12px; border-radius: 16px; color: var(--app-primary, #1599cf); background: var(--app-primary-wash, #e5f6fd); }
.logs-state h2 { margin: 0; color: var(--logs-ink); font-size: 16px; }
.logs-state p { margin: 7px 0 15px; font-size: 11.5px; }
.logs-state button { border: 0; border-radius: 10px; padding: 9px 16px; color: #fff; background: var(--app-primary, #18a6e4); font-size: 11px; font-weight: 700; }
.logs-state.is-error .logs-state__icon { color: #bd4351; background: #ffedf0; }
@media (max-width: 900px) { .logs-toolbar { align-items: stretch; flex-direction: column; } .logs-filters { justify-content: flex-start; } }
@media (max-width: 640px) { .logs-hero { grid-template-columns: auto 1fr; padding: 18px; } .logs-hero__icon { width: 52px; height: 52px; } .logs-hero__total { display: none; } .logs-panel { border-radius: 15px; padding: 14px; } .logs-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 3px; } .logs-filters button { flex: 0 0 auto; } .log-item { gap: 11px; padding: 15px 0; } .log-item__icon { width: 40px; height: 40px; } .log-item__title-row { align-items: flex-start; flex-direction: column; gap: 5px; } .log-item h2 { width: 100%; white-space: normal; } .logs-pagination { align-items: flex-start; flex-direction: column; } }
</style>
