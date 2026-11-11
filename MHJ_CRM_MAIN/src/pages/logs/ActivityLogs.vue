<template>
  <div class="container-fluid activity-logs-page">
    <section class="logs-hero">
      <div class="logs-hero__icon" aria-hidden="true">
        <SolarIcon
          :name="activeTab === 'activities' ? 'history' : 'bell'"
          :size="30"
          color="currentColor"
          secondary-color="currentColor"
          :secondary-opacity="1"
        />
      </div>
      <div class="logs-hero__copy">
        <span>RIWAYAT SISTEM</span>
        <h1>{{ activeTab === 'activities' ? 'Log Aktivitas' : 'Notifikasi' }}</h1>
        <p>{{ activeTab === 'activities' ? 'Pantau seluruh perubahan data dan aktivitas terbaru di CRM.' : 'Lihat seluruh pemberitahuan terbaru untuk akun Anda.' }}</p>
      </div>
      <span class="logs-hero__total">
        {{ activeTab === 'activities' ? `${activities.length} aktivitas` : `${notificationItems.length} notifikasi` }}
      </span>
    </section>

    <nav class="logs-tabs" role="tablist" aria-label="Riwayat sistem">
      <button
        type="button"
        :class="{ active: activeTab === 'activities' }"
        role="tab"
        :aria-selected="activeTab === 'activities'"
        @click="selectTab('activities')"
      >
        <SolarIcon
          name="history"
          color="currentColor"
          secondary-color="currentColor"
          :secondary-opacity="1"
        />
        <span>Log Aktivitas</span>
        <em>{{ activities.length }}</em>
      </button>
      <button
        type="button"
        :class="{ active: activeTab === 'notifications' }"
        role="tab"
        :aria-selected="activeTab === 'notifications'"
        @click="selectTab('notifications')"
      >
        <SolarIcon
          name="bell"
          color="currentColor"
          secondary-color="currentColor"
          :secondary-opacity="1"
        />
        <span>Notifikasi</span>
        <em>{{ notificationItems.length }}</em>
      </button>
    </nav>

    <section v-if="activeTab === 'activities'" class="logs-panel">
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
            @click="selectFilter(option.value)"
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
              <MhjIcon
                v-if="activity.mhjIcon"
                :name="activity.mhjIcon"
                :size="26"
                :color="activityIconColor(activity.action)"
                :secondary-color="activityIconColor(activity.action)"
                single-color
              />
              <SolarIcon
                v-else
                :name="activity.icon"
                :size="21"
                :color="activityIconColor(activity.action)"
                :secondary-color="activityIconColor(activity.action)"
                :secondary-opacity="1"
              />
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

        <ListPagination
          v-model="currentPage"
          :total-pages="totalPages"
          aria-label="Pagination Log Aktivitas"
        />
      </template>

      <div v-else class="logs-state">
        <span class="logs-state__icon"><SolarIcon name="history" :size="28" /></span>
        <h2>{{ search || filter !== 'all' ? 'Aktivitas tidak ditemukan' : 'Belum ada aktivitas' }}</h2>
        <p>{{ search || filter !== 'all' ? 'Coba gunakan kata kunci atau filter yang berbeda.' : 'Aktivitas sistem akan muncul di halaman ini.' }}</p>
        <button v-if="search || filter !== 'all'" type="button" @click="resetFilters">Reset Filter</button>
      </div>
    </section>

    <section v-else class="logs-panel notifications-panel">
      <div class="notifications-toolbar">
        <div>
          <h2>Seluruh Notifikasi</h2>
          <p>{{ unreadCount ? `${unreadCount} notifikasi belum dibaca` : 'Semua notifikasi sudah dibaca' }}</p>
        </div>
        <button
          v-if="unreadCount"
          type="button"
          class="mark-all-button"
          :disabled="markingAllRead"
          @click="handleMarkAllRead"
        >
          {{ markingAllRead ? 'Memproses...' : 'Tandai semua dibaca' }}
        </button>
      </div>

      <div v-if="notificationLoading && notificationItems.length === 0" class="logs-state" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <p>Memuat notifikasi...</p>
      </div>

      <div v-else-if="notificationError && notificationItems.length === 0" class="logs-state is-error" role="alert">
        <span class="logs-state__icon"><SolarIcon name="danger-circle" :size="28" /></span>
        <h2>Notifikasi gagal dimuat</h2>
        <p>{{ notificationError }}</p>
        <button type="button" @click="notificationStore.refreshNotifications()">Coba Lagi</button>
      </div>

      <template v-else-if="pagedNotifications.length">
        <ol class="notifications-list">
          <li
            v-for="notification in pagedNotifications"
            :key="notification.id"
            class="notification-item"
            :class="{ 'is-unread': !notification.read, 'is-clickable': notification.url }"
            @click="handleNotificationClick(notification)"
          >
            <span class="notification-item__icon" aria-hidden="true">
              <SolarIcon name="bell" :size="21" />
            </span>
            <div class="notification-item__content">
              <div class="notification-item__title-row">
                <h2>{{ notification.title }}</h2>
                <span v-if="!notification.read" class="notification-item__status">Baru</span>
              </div>
              <p>{{ notification.body }}</p>
              <div class="notification-item__meta">
                <span>{{ notification.type }}</span>
                <span aria-hidden="true">&bull;</span>
                <time :datetime="notificationDateTime(notification.receivedAt)">
                  {{ formatNotificationTime(notification.receivedAt) }}
                </time>
              </div>
            </div>
            <SolarIcon v-if="notification.url" class="notification-item__arrow" name="alt-arrow-right" :size="18" />
          </li>
        </ol>

        <ListPagination
          v-model="notificationPage"
          :total-pages="notificationTotalPages"
          aria-label="Pagination Notifikasi"
        />
      </template>

      <div v-else class="logs-state">
        <span class="logs-state__icon"><SolarIcon name="bell" :size="28" /></span>
        <h2>Belum ada notifikasi</h2>
        <p>Notifikasi terbaru untuk akun Anda akan muncul di halaman ini.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { formatDistanceToNowStrict } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'

import ListPagination from '@/components/shared/ListPagination.vue'
import { usePageBackRoute } from '@/composable/usePageHeader'
import { routes } from '@/router/routes'
import {
  fetchActivityFilterOptions,
  fetchSystemActivities,
  type ActivityFilterOption,
} from '@/services/managerDashboardService'
import { useNotificationStore, type NotificationEntry } from '@/store/notification'
import type { ActivityAction, ActivityLogItem } from '@/types/dashboard/manager'

type ActivityFilter = string
type LogsTab = 'activities' | 'notifications'

const PAGE_SIZE = 12
const activities = ref<ActivityLogItem[]>([])
const filterOptions = ref<ActivityFilterOption[]>([{ label: 'Semua', value: 'all' }])
const loading = ref(true)
const error = ref('')
const search = ref('')
const filter = ref<ActivityFilter>('all')
const currentPage = ref(1)
const notificationPage = ref(1)
const markingAllRead = ref(false)
const route = useRoute()
const router = useRouter()
const notificationStore = useNotificationStore()
const {
  items: notificationItems,
  unreadCount,
  loading: notificationLoading,
  fetchError: notificationError,
} = storeToRefs(notificationStore)
const activeTab = ref<LogsTab>(route.query.tab === 'notifications' ? 'notifications' : 'activities')

usePageBackRoute(routes.Dashboards.Default)

const filteredActivities = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  return activities.value.filter((activity) => {
    const matchesFilter = filter.value === 'all' || activity.filterValue === filter.value
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
const notificationTotalPages = computed(() =>
  Math.max(1, Math.ceil(notificationItems.value.length / PAGE_SIZE)),
)
const pagedNotifications = computed(() => {
  const start = (notificationPage.value - 1) * PAGE_SIZE
  return notificationItems.value.slice(start, start + PAGE_SIZE)
})
watch([search, filter], () => {
  currentPage.value = 1
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) currentPage.value = pages
})

watch(notificationTotalPages, (pages) => {
  if (notificationPage.value > pages) notificationPage.value = pages
})

watch(
  () => route.query.tab,
  (tab) => {
    activeTab.value = tab === 'notifications' ? 'notifications' : 'activities'
  },
)

function countFor(value: ActivityFilter): number {
  if (value === 'all') return activities.value.length
  return activities.value.filter((activity) => activity.filterValue === value).length
}

function actionLabel(action: ActivityAction): string {
  if (action === 'i') return 'Ditambahkan'
  if (action === 'u') return 'Diperbarui'
  return 'Dihapus'
}

function activityIconColor(action: ActivityAction): string {
  if (action === 'i') return '#22b573'
  if (action === 'd') return '#ef5b68'
  return 'var(--app-primary, #18a6e4)'
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
  selectFilter('all')
}

function selectFilter(value: ActivityFilter): void {
  if (filter.value === value) return
  filter.value = value
}

function selectTab(tab: LogsTab): void {
  activeTab.value = tab
  notificationPage.value = 1
  const query = { ...route.query }
  if (tab === 'notifications') query.tab = 'notifications'
  else delete query.tab
  void router.replace({ query })
  if (tab === 'notifications') void notificationStore.refreshNotifications()
}

function notificationDateTime(timestamp: number): string {
  return timestamp ? new Date(timestamp).toISOString() : ''
}

function formatNotificationTime(timestamp: number): string {
  if (!timestamp) return 'Waktu tidak tersedia'
  return formatDistanceToNowStrict(timestamp, { addSuffix: true, locale: idLocale })
}

async function handleMarkAllRead(): Promise<void> {
  if (markingAllRead.value) return
  markingAllRead.value = true
  try {
    await notificationStore.markAllRead()
  } catch {
    // Store menampilkan pesan kegagalan melalui notificationError.
  } finally {
    markingAllRead.value = false
  }
}

async function handleNotificationClick(notification: NotificationEntry): Promise<void> {
  try {
    await notificationStore.markRead(notification.id)
  } catch {
    return
  }

  if (!notification.url) return
  try {
    const target = new URL(notification.url, window.location.origin)
    if (target.origin !== window.location.origin) return
    await router.push(`${target.pathname}${target.search}${target.hash}`)
  } catch {
    // Abaikan URL notifikasi yang tidak valid atau eksternal.
  }
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

async function loadActivityFilters(): Promise<void> {
  try {
    const options = await fetchActivityFilterOptions()
    const uniqueOptions = new Map<string, ActivityFilterOption>()
    for (const option of options) uniqueOptions.set(option.value, option)
    if (!uniqueOptions.has('all')) uniqueOptions.set('all', { value: 'all', label: 'Semua' })
    filterOptions.value = Array.from(uniqueOptions.values())
  } catch (loadError) {
    console.error('Gagal memuat filter log aktivitas.', loadError)
  }
}

onMounted(() => {
  void loadActivityFilters()
  void loadActivities()
  void notificationStore.init()
  if (activeTab.value === 'notifications') void notificationStore.refreshNotifications()
})
</script>

<style scoped>
.activity-logs-page { --primary: var(--theme-default, #18a6e4); --logs-ink: #243240; display: grid; gap: 18px; padding-bottom: 34px; }
.logs-hero { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; overflow: hidden; border: 1px solid var(--app-primary-border, #dcecf4); border-radius: 18px; padding: 22px 24px; background: linear-gradient(120deg, #fff 15%, var(--app-primary-wash, #f1faff) 100%); box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.logs-hero::after { position: absolute; top: -70px; right: 100px; width: 180px; height: 180px; border: 34px solid rgba(var(--app-primary-rgb, 24, 166, 228), .06); border-radius: 50%; content: ''; }
.logs-hero__icon { position: relative; z-index: 1; display: grid; place-items: center; width: 60px; height: 60px; border-radius: 18px; color: var(--app-primary-dark, #087fad); background: var(--app-primary-soft, #dff4fc); }
.logs-hero__copy { position: relative; z-index: 1; }
.logs-hero__copy > span { display: block; margin-bottom: 4px; color: var(--app-primary-dark, #1193c9); font-size: 9.5px; font-weight: 800; letter-spacing: .11em; }
.logs-hero h1 { margin: 0; color: var(--logs-ink); font-size: 22px; font-weight: 750; }
.logs-hero p { margin: 5px 0 0; color: #748391; font-size: 12px; }
.logs-hero__total { position: relative; z-index: 1; border-radius: 999px; padding: 8px 12px; color: var(--app-primary-dark, #087fad); background: #fff; box-shadow: 0 3px 12px rgba(34, 96, 128, .1); font-size: 11px; font-weight: 700; }
.logs-tabs { display: flex; overflow-x: auto; scroll-margin-top: 12px; border: 1px solid #e4e9ed; border-radius: 13px; padding: 5px; background: #fff; scrollbar-width: none; }
.logs-tabs::-webkit-scrollbar { display: none; }
.logs-tabs button { display: flex; min-width: 145px; flex: 1 0 auto; align-items: center; justify-content: center; gap: 8px; border: 0; border-radius: 9px; padding: 11px 14px; color: var(--primary); background: transparent; font-size: 12px; font-weight: 700; cursor: pointer; transition: .2s ease; }
.logs-tabs button:not(.active):hover,
.logs-tabs button:not(.active):focus-visible { color: var(--app-primary-dark, #087bad); background: var(--app-primary-wash, #eaf8fd); box-shadow: 0 3px 10px rgba(var(--app-primary-rgb, 24, 166, 228), .12); transform: translateY(-1px); }
.logs-tabs button:not(.active):hover > span,
.logs-tabs button:not(.active):focus-visible > span { color: var(--app-primary-dark, #087bad) !important; }
.logs-tabs button:not(.active):hover em,
.logs-tabs button:not(.active):focus-visible em { color: var(--app-primary-dark, #087bad); background: #fff; }
.logs-tabs button:focus-visible { outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), .35); outline-offset: -2px; }
.logs-tabs button i,
.logs-tabs button svg { font-size: 13px; }
.logs-tabs button em { min-width: 22px; border-radius: 999px; padding: 2px 6px; background: #f0f3f5; font-size: 10px; font-style: normal; }
.logs-tabs button.active { color: #fff; background: var(--primary); box-shadow: 0 5px 13px rgba(var(--app-primary-rgb, 24, 166, 228), .22); }
.logs-tabs button.active > span { color: #fff !important; }
.logs-tabs button.active em { color: var(--primary); background: #fff; }
.logs-tabs button.active:hover { filter: brightness(.96); transform: translateY(-1px); }
.logs-panel { border: 1px solid #e2e8ed; border-radius: 18px; padding: 20px; background: #fff; box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.logs-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
.logs-search { display: flex; align-items: center; gap: 9px; width: min(410px, 100%); height: 42px; border: 1px solid #dfe7ec; border-radius: 12px; padding: 0 10px 0 13px; color: var(--app-primary-dark, #087fad); background: #fff; box-shadow: 0 3px 12px rgba(31, 41, 55, .05); }
.logs-search:focus-within { border-color: var(--app-primary-border, #66c4eb); box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.logs-search input { flex: 1; min-width: 0; border: 0; outline: 0; color: var(--logs-ink); background: transparent; font-size: 12px; }
.logs-search input::placeholder { color: #9aa6af; }
.logs-search input::-webkit-search-cancel-button,
.logs-search input::-webkit-search-decoration { display: none; -webkit-appearance: none; }
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
.log-item__icon.is-i { color: #22b573; background: rgba(34, 181, 115, .1); }
.log-item__icon.is-u { color: var(--app-primary, #18a6e4); background: rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.log-item__icon.is-d { color: #ef5b68; background: rgba(239, 91, 104, .1); }
.log-item__content { min-width: 0; }
.log-item__title-row { display: flex; align-items: center; gap: 9px; }
.log-item h2 { overflow: hidden; margin: 0; color: var(--logs-ink); font-size: 13px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.log-item__action { flex: 0 0 auto; border-radius: 999px; padding: 4px 8px; color: #087a5c; background: #e7f7f1; font-size: 9px; font-weight: 700; }
.log-item__action.is-u { color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); }
.log-item__action.is-d { color: #aa3e4b; background: #ffeaed; }
.log-item__content > p { margin: 5px 0 7px; color: #71808d; font-size: 11.5px; }
.log-item__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; color: #9aa5ae; font-size: 10px; }
.log-item__meta span:first-child { color: var(--app-primary-dark, #087fad); font-weight: 650; text-transform: capitalize; }
.logs-state { display: flex; min-height: 300px; flex-direction: column; align-items: center; justify-content: center; color: #7d8b96; text-align: center; }
.logs-state__icon { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 12px; border-radius: 16px; color: var(--app-primary, #1599cf); background: var(--app-primary-wash, #e5f6fd); }
.logs-state h2 { margin: 0; color: var(--logs-ink); font-size: 16px; }
.logs-state p { margin: 7px 0 15px; font-size: 11.5px; }
.logs-state button { border: 0; border-radius: 10px; padding: 9px 16px; color: #fff; background: var(--app-primary, #18a6e4); font-size: 11px; font-weight: 700; }
.logs-state.is-error .logs-state__icon { color: #bd4351; background: #ffedf0; }
.notifications-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid #edf1f4; padding: 2px 4px 16px; }
.notifications-toolbar h2 { margin: 0; color: var(--logs-ink); font-size: 15px; font-weight: 750; }
.notifications-toolbar p { margin: 4px 0 0; color: #87949e; font-size: 10.5px; }
.mark-all-button { border: 1px solid var(--app-primary-border, #a9dff4); border-radius: 9px; padding: 8px 12px; color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); font-size: 10.5px; font-weight: 700; }
.mark-all-button:disabled { cursor: wait; opacity: .6; }
.notifications-list { display: grid; margin: 0; padding: 0; list-style: none; }
.notification-item { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 14px; margin: 0 -8px; border-radius: 12px; padding: 17px 12px; }
.notification-item + .notification-item { border-top: 1px solid #edf1f4; border-radius: 0; }
.notification-item.is-unread { background: rgba(var(--app-primary-rgb, 24, 166, 228), .055); }
.notification-item.is-clickable { cursor: pointer; }
.notification-item.is-clickable:hover { background: rgba(var(--app-primary-rgb, 24, 166, 228), .09); }
.notification-item__icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 13px; color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #e5f6fd); }
.notification-item__content { min-width: 0; }
.notification-item__title-row { display: flex; align-items: center; gap: 8px; }
.notification-item h2 { overflow: hidden; margin: 0; color: var(--logs-ink); font-size: 13px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.notification-item__status { flex: 0 0 auto; border-radius: 999px; padding: 3px 7px; color: #fff; background: var(--app-primary, #18a6e4); font-size: 8.5px; font-weight: 750; }
.notification-item p { margin: 5px 0 7px; color: #71808d; font-size: 11.5px; line-height: 1.5; }
.notification-item__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; color: #9aa5ae; font-size: 10px; }
.notification-item__meta span:first-child { color: var(--app-primary-dark, #087fad); font-weight: 650; }
.notification-item__arrow { color: #a4afb7; }
@media (max-width: 900px) { .logs-toolbar { align-items: stretch; flex-direction: column; } .logs-filters { justify-content: flex-start; } }
@media (max-width: 640px) { .logs-hero { grid-template-columns: auto 1fr; padding: 18px; } .logs-hero__icon { width: 52px; height: 52px; } .logs-hero__total { display: none; } .logs-tabs { margin-inline: -4px; border-radius: 0; border-right: 0; border-left: 0; padding: 0; } .logs-tabs button { min-width: 104px; border-radius: 0; padding: 11px 8px; } .logs-tabs button i, .logs-tabs button svg { display: none; } .logs-panel { border-radius: 15px; padding: 14px; } .logs-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 3px; } .logs-filters button { flex: 0 0 auto; } .log-item { gap: 11px; padding: 15px 0; } .log-item__icon { width: 40px; height: 40px; } .log-item__title-row { align-items: flex-start; flex-direction: column; gap: 5px; } .log-item h2 { width: 100%; white-space: normal; } .notifications-toolbar { align-items: flex-start; flex-direction: column; } .notification-item { grid-template-columns: auto minmax(0, 1fr); gap: 11px; margin-inline: 0; padding-inline: 0; } .notification-item__icon { width: 40px; height: 40px; } .notification-item__arrow { display: none; } .notification-item h2 { white-space: normal; } }
</style>
