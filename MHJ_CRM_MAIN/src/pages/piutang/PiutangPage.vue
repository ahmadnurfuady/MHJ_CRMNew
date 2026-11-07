<template>
  <PiutangDetailPreview v-if="selectedPiutang" :piutang="selectedPiutang" />

  <div v-else-if="selectedPiutangId" class="container-fluid piutang-page">
    <div class="piutang-detail-state card">
      <span v-if="loading" class="spinner-border text-primary" aria-hidden="true"></span>
      <SolarIcon
        v-else
        name="fa-circle-exclamation"
        :size="28"
        color="var(--bs-danger, #dc3545)"
      />
      <strong>{{ loading ? 'Memuat detail piutang...' : 'Detail piutang tidak ditemukan' }}</strong>
      <p v-if="!loading">{{ loadError || 'Data piutang yang dipilih tidak tersedia.' }}</p>
    </div>
  </div>

  <div v-else class="container-fluid piutang-page">
    <Card
      card-class="piutang-panel"
      card-body-class="piutang-panel__body"
      header-title="Piutang"
      header-class="piutang-panel__title"
    >
      <div class="piutang-tabs" role="tablist" aria-label="Status piutang">
        <button
          v-for="tab in tabs"
          :key="tab.status"
          type="button"
          role="tab"
          class="piutang-tabs__button"
          :class="{ 'is-active': activeTab === tab.status }"
          :aria-selected="activeTab === tab.status"
          @click="selectTab(tab.status)"
        >
          <span>{{ tab.label }}</span>
          <span class="piutang-tabs__badge">{{ countByStatus(tab.status) }}</span>
        </button>
      </div>

      <div v-if="loading" class="piutang-empty" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <p>Memuat data piutang...</p>
      </div>

      <div v-else-if="filteredPiutang.length" class="piutang-list" role="tabpanel">
        <PiutangCard
          v-for="item in filteredPiutang"
          :key="item.id"
          :piutang="item"
          :source-tab="activeTab"
        />
      </div>

      <div v-else class="piutang-empty" role="status">
        <span class="piutang-empty__icon" aria-hidden="true">
          <SolarIcon
            name="bill-list"
            :size="32"
            color="currentColor"
            secondary-color="currentColor"
            :secondary-opacity="1"
          />
        </span>
        <p>{{ loadError || 'Belum ada piutang pada tab ini' }}</p>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Card from '@/components/shared/card/Card.vue'
import { usePageBackRoute, usePageTitle } from '@/composable/usePageHeader'
import PiutangCard from '@/pages/piutang/components/PiutangCard.vue'
import PiutangDetailPreview from '@/pages/piutang/PiutangDetailPreview.vue'
import { routes } from '@/router/routes'
import { fetchPiutangList } from '@/services/piutangService'
import type { Piutang, PiutangStatus } from '@/types/piutang'

const route = useRoute()
const router = useRouter()
const tabs: Array<{ status: PiutangStatus; label: string }> = [
  { status: 'on_progress', label: 'On Progress' },
  { status: 'terlambat', label: 'Terlambat' },
  { status: 'lunas', label: 'Lunas' },
]

function isPiutangStatus(value: unknown): value is PiutangStatus {
  return tabs.some((tab) => tab.status === value)
}

const selectedPiutangId = computed(() => {
  const detail = route.query.detail
  return typeof detail === 'string' && detail ? detail : null
})
const selectedPiutang = computed(
  () => piutangData.value.find((piutang) => piutang.id === selectedPiutangId.value) ?? null,
)
const sourceTab = computed<PiutangStatus>(() =>
  isPiutangStatus(route.query.tab) ? route.query.tab : 'on_progress',
)
usePageTitle(computed(() => (selectedPiutangId.value ? 'Detail Piutang' : 'Piutang')))
usePageBackRoute(
  computed(() =>
    selectedPiutangId.value
      ? { path: routes.CrmAdmin.Piutang, query: { tab: sourceTab.value } }
      : routes.CrmAdmin.Dashboard,
  ),
)

// Data piutang dari backend: GET /api/dashboardpiutang/daftar. Diambil penuh
// sekali, lalu disaring per tab di sisi FE. Badge tab memakai total_per_status
// dari server supaya jumlahnya tetap benar walau data satu tab kosong.
const piutangData = ref<Piutang[]>([])
const totalPerStatus = ref<Record<PiutangStatus, number>>({
  on_progress: 0,
  terlambat: 0,
  lunas: 0,
})
const loading = ref(true)
const loadError = ref('')

async function loadPiutang() {
  loading.value = true
  loadError.value = ''
  try {
    const result = await fetchPiutangList()
    piutangData.value = result.items
    totalPerStatus.value = result.totalPerStatus
  } catch {
    loadError.value = 'Gagal memuat data piutang.'
    piutangData.value = []
  } finally {
    loading.value = false
  }
}

onMounted(loadPiutang)

const activeTab = ref<PiutangStatus>(
  isPiutangStatus(route.query.tab) ? route.query.tab : 'on_progress',
)

const filteredPiutang = computed(() =>
  piutangData.value.filter((piutang) => piutang.status === activeTab.value),
)

function countByStatus(status: PiutangStatus): number {
  return totalPerStatus.value[status] ?? 0
}

function selectTab(status: PiutangStatus) {
  activeTab.value = status
}

watch(activeTab, (status) => {
  if (route.query.tab === status) return
  void router.replace({ query: { ...route.query, tab: status } })
})

watch(
  () => route.query.tab,
  (tab) => {
    if (isPiutangStatus(tab)) activeTab.value = tab
  },
)
</script>

<style scoped>
.piutang-page {
  padding-block: 12px 28px;
}

.piutang-page :deep(.piutang-panel) {
  overflow: hidden;
  border: 1px solid var(--bs-border-color, #e9edf1);
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.piutang-page :deep(.piutang-panel .card-header) {
  padding: 22px 24px 10px;
}

.piutang-page :deep(.piutang-panel__title) {
  color: var(--bs-heading-color, #1e293b);
  font-size: 20px;
  font-weight: 700;
}

.piutang-page :deep(.piutang-panel__body) {
  padding: 0 24px 24px;
}

.piutang-tabs {
  display: flex;
  align-items: flex-end;
  gap: 26px;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid var(--bs-border-color, #e2e8f0);
}

.piutang-tabs__button {
  position: relative;
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  border: 0;
  padding: 0 0 2px;
  background: transparent;
  color: var(--bs-secondary-color, #64748b);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.piutang-tabs__button::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: transparent;
  content: '';
}

.piutang-tabs__button:hover,
.piutang-tabs__button:focus-visible,
.piutang-tabs__button.is-active {
  color: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-tabs__button:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.24);
  outline-offset: -2px;
}

.piutang-tabs__button.is-active::after {
  background: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-tabs__badge {
  display: inline-grid;
  min-width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 999px;
  padding-inline: 6px;
  background: var(--bs-tertiary-bg, #f1f5f9);
  color: inherit;
  font-size: 11px;
  line-height: 1;
}

.piutang-tabs__button.is-active .piutang-tabs__badge {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.piutang-list {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  padding-top: 20px;
}

.piutang-empty {
  display: grid;
  min-height: 240px;
  place-items: center;
  align-content: center;
  gap: 10px;
  color: var(--bs-secondary-color, #64748b);
  text-align: center;
}

.piutang-empty__icon {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 50%;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-empty p {
  margin: 0;
  font-size: 13px;
}

.piutang-detail-state {
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--bs-border-color, #e5eaee);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
}

.piutang-detail-state p {
  margin: 0;
  color: var(--bs-secondary-color, #73808d);
}

:global(body.dark-only) .piutang-page :deep(.piutang-panel) {
  border-color: var(--bs-border-color, #34404c);
  box-shadow: none;
}

@media (min-width: 1200px) {
  .piutang-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .piutang-page :deep(.piutang-panel .card-header) {
    padding-inline: 18px;
  }

  .piutang-page :deep(.piutang-panel__body) {
    padding-inline: 18px;
  }

  .piutang-tabs {
    gap: 20px;
  }
}
</style>
