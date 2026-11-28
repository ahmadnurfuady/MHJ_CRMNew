<template>
  <div class="container-fluid promo-catalog">
    <section class="promo-catalog__hero">
      <div class="promo-catalog__hero-icon" aria-hidden="true">
        <SolarIcon
          name="ticket-sale"
          :size="34"
          color="var(--app-primary, #18A6E4)"
        />
      </div>
      <div>
        <span class="promo-catalog__eyebrow">INFORMASI TERBARU</span>
        <h1>Promo MHJ</h1>
        <p>Temukan penawaran dan informasi promo terbaru untuk mendukung aktivitasmu.</p>
      </div>
      <span v-if="counts" class="promo-catalog__total">{{ counts.all }} promo</span>
    </section>

    <section class="promo-catalog__content-card">
      <section class="promo-catalog__toolbar" aria-label="Pencarian dan filter promo">
        <div class="promo-search-group">
          <label class="promo-search">
            <span class="visually-hidden">Cari promo</span>
            <SolarIcon
              name="magnifier"
              :size="19"
              color="var(--app-primary-deep, #032A4E)"
              secondary-color="var(--app-primary, #18A6E4)"
              :secondary-opacity="0.75"
              aria-hidden="true"
            />
            <input v-model.trim="search" type="search" placeholder="Cari judul atau isi promo..." />
            <button v-if="search" type="button" aria-label="Hapus pencarian" @click="search = ''">
              <SolarIcon name="close" :size="16" />
            </button>
          </label>

          <!-- Filter divisi: bisa pilih beberapa divisi sekaligus. -->
          <div ref="filterRoot" class="promo-filter-anchor">
            <button
              type="button"
              class="promo-filter-trigger"
              :class="{ 'is-active': divisionFilter.length > 0 }"
              :aria-expanded="filterOpen"
              @click="filterOpen = !filterOpen"
            >
              <SolarIcon
                name="filter"
                :size="18"
                color="var(--app-primary, #18A6E4)"
                secondary-color="var(--app-primary, #18A6E4)"
                :secondary-opacity="1"
                aria-hidden="true"
              />
              Filter
              <b v-if="divisionFilter.length">{{ divisionFilter.length }}</b>
            </button>

            <div v-if="filterOpen" class="promo-filter-panel" aria-label="Filter divisi promo">
              <header class="promo-filter-panel__head">
                <div>
                  <small>FILTER PROMO</small>
                  <strong>Divisi</strong>
                </div>
                <button
                  type="button"
                  class="promo-filter-panel__reset"
                  :disabled="!divisionFilter.length"
                  @click="divisionFilter = []"
                >
                  Reset
                </button>
              </header>
              <MultiSelectInput
                v-model="divisionFilter"
                :options="divisionOptions"
                :disabled="divisionLoading"
                :placeholder="divisionLoading ? 'Memuat divisi...' : 'Semua divisi'"
              />
              <p v-if="divisionError" class="promo-filter-panel__error">{{ divisionError }}</p>
            </div>
          </div>
        </div>

        <div class="promo-filters" role="group" aria-label="Filter periode promo">
          <button
            v-for="option in filterOptions"
            :key="option.value"
            type="button"
            :class="{ active: filter === option.value }"
            :aria-pressed="filter === option.value"
            @click="filter = option.value"
          >
            {{ option.label }}
            <span v-if="counts">{{ counts[option.value] }}</span>
          </button>
        </div>
      </section>

      <div v-if="loading" class="promo-grid" aria-label="Memuat promo">
        <div v-for="index in 6" :key="index" class="promo-skeleton">
          <span></span><i></i><i></i><i></i>
        </div>
      </div>

      <section v-else-if="error" class="promo-state" role="alert">
        <span class="promo-state__icon"><SolarIcon name="danger-circle" :size="30" /></span>
        <h2>Promo gagal dimuat</h2>
        <p>{{ error }}</p>
        <button type="button" @click="loadFiltered(filter)">Coba Lagi</button>
      </section>

      <section v-else-if="filteredPromos.length" class="promo-grid" aria-label="Daftar promo">
        <router-link
          v-for="promo in pagedPromos"
          :key="promo.id"
          :to="{ name: 'PromoCatalogDetail', params: { id: promo.id } }"
          class="promo-card"
        >
          <div class="promo-card__media">
            <img
              v-if="hasImage(promo)"
              :src="promo.imageUrl"
              :alt="`Banner ${promo.title}`"
              loading="lazy"
              @error="markImageFailed(promo.id)"
            />
            <div v-else class="promo-card__fallback" aria-hidden="true">
              <span></span><span></span>
              <SolarIcon
                name="ticket-sale"
                :size="42"
                color="var(--app-primary, #18A6E4)"
              />
            </div>
            <span class="promo-card__status" :class="`is-${promoPeriodStatus(promo)}`">
              <i></i>{{ promoStatusLabel(promoPeriodStatus(promo)) }}
            </span>
            <!--
              Tombol bagikan berada di dalam kartu yang juga sebuah <router-link>,
              jadi klik-nya harus dihentikan supaya tidak ikut membuka detail promo.
            -->
            <button
              type="button"
              class="promo-card__share"
              :aria-label="`Bagikan promo ${promo.title} ke WhatsApp`"
              title="Bagikan ke WhatsApp"
              @click.stop.prevent="sharePromo(promo)"
            >
              <SolarIcon name="share" :size="16" color="currentColor" secondary-color="currentColor" />
              <span>Bagikan</span>
            </button>
          </div>

          <div class="promo-card__body">
            <span class="promo-card__date">
              <SolarIcon name="calendar" :size="16" />
              {{ formatPromoPeriod(promo) }}
            </span>
            <span v-if="promo.targetType === 'division'" class="promo-card__division">
              {{ divisionLabel(promo) }}
            </span>
            <h2>{{ promo.title }}</h2>
            <p>{{ promo.content || 'Informasi lengkap promo tersedia di halaman detail.' }}</p>
            <span class="promo-card__link">
              Lihat Detail <SolarIcon name="alt-arrow-right" :size="17" />
            </span>
          </div>
        </router-link>
      </section>

      <section v-else class="promo-state">
        <span class="promo-state__icon">
          <SolarIcon
            name="ticket-sale"
            :size="32"
            color="var(--app-primary, #18A6E4)"
          />
        </span>
        <h2>{{ hasActiveFilter ? 'Promo tidak ditemukan' : 'Belum ada promo' }}</h2>
        <p>{{ hasActiveFilter ? 'Coba gunakan kata kunci atau filter yang berbeda.' : 'Promo terbaru akan muncul di halaman ini.' }}</p>
        <button v-if="hasActiveFilter" type="button" @click="resetFilter">Reset Filter</button>
      </section>

      <ListPagination
        v-if="filteredPromos.length"
        v-model="currentPage"
        class="promo-pagination"
        :total-pages="totalPages"
        :loading="loading"
        aria-label="Pagination Promo"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import ListPagination from '@/components/shared/ListPagination.vue'
import MultiSelectInput from '@/components/ui/MultiSelectInput.vue'
import { usePageBackRoute } from '@/composable/usePageHeader'
import { routes } from '@/router/routes'
import { masterDataService } from '@/services/masterDataService'
import type { MasterOption } from '@/types/user'
import {
  formatPromoPeriod,
  promoPeriodStatus,
  promoStatusLabel,
  usePromoCatalogFilter,
  type PromoCatalogItem,
  type PromoFilter,
} from '@/composable/usePromoCatalog'

const { items, counts, loading, error, loadFiltered } = usePromoCatalogFilter()
const search = ref('')
const filter = ref<PromoFilter>('all')
const failedImageIds = ref(new Set<number>())
const currentPage = ref(1)
const PAGE_SIZE = 6

const filterRoot = ref<HTMLElement | null>(null)
const filterOpen = ref(false)
const divisionFilter = ref<string[]>([])
const divisionOptions = ref<MasterOption[]>([])
const divisionLoading = ref(false)
const divisionError = ref('')

usePageBackRoute(routes.Dashboards.Default)

const filterOptions: Array<{ label: string; value: PromoFilter }> = [
  { label: 'Semua', value: 'all' },
  { label: 'Berlangsung', value: 'active' },
  { label: 'Akan Datang', value: 'upcoming' },
  { label: 'Berakhir', value: 'ended' },
]

/**
 * Filter tab periode sudah diproses backend; di sini pencarian kata kunci dan
 * filter divisi. Promo tanpa divisi (target "Semua pengguna", cabang, jabatan)
 * sengaja tidak ikut saat filter divisi aktif, karena filter ini dipakai untuk
 * melihat promo yang memang ditujukan ke divisi tertentu.
 */
const filteredPromos = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  const divisions = divisionFilter.value
  if (!keyword && !divisions.length) return items.value

  return items.value.filter((promo) => {
    const matchesKeyword =
      !keyword ||
      `${promo.title} ${promo.content}`.toLocaleLowerCase('id-ID').includes(keyword)
    const matchesDivision =
      !divisions.length ||
      (promo.targetDivisionCode !== '' && divisions.includes(promo.targetDivisionCode))
    return matchesKeyword && matchesDivision
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredPromos.value.length / PAGE_SIZE)))
const pagedPromos = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredPromos.value.slice(start, start + PAGE_SIZE)
})

watch([search, filter, divisionFilter], () => {
  currentPage.value = 1
})

/** Label divisi untuk badge di kartu promo. */
function divisionLabel(promo: PromoCatalogItem): string {
  const option = divisionOptions.value.find((item) => item.value === promo.targetDivisionCode)
  return promo.targetDivisionName || option?.label || `Divisi ${promo.targetDivisionCode || '-'}`
}

async function loadDivisionOptions(): Promise<void> {
  divisionLoading.value = true
  divisionError.value = ''
  try {
    const divisions = await masterDataService.getDevisi()
    // Divisi dikunci pakai KodeDevisi (string), sama seperti di form promo.
    divisionOptions.value = divisions
      .map((division) => ({
        value: String(division.KodeDevisi ?? '').trim(),
        label: String(division.NamaDevisi ?? '').trim() || String(division.KodeDevisi ?? '').trim(),
      }))
      .filter((division) => division.value !== '')
  } catch (loadError) {
    console.error('Gagal memuat daftar divisi:', loadError)
    divisionError.value = 'Daftar divisi gagal dimuat.'
  } finally {
    divisionLoading.value = false
  }
}

function handleFilterOutsideClick(event: MouseEvent): void {
  if (!filterOpen.value) return
  if (filterRoot.value && !filterRoot.value.contains(event.target as Node)) {
    filterOpen.value = false
  }
}

function handleFilterEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') filterOpen.value = false
}

onMounted(() => {
  void loadDivisionOptions()
  document.addEventListener('mousedown', handleFilterOutsideClick)
  document.addEventListener('keydown', handleFilterEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleFilterOutsideClick)
  document.removeEventListener('keydown', handleFilterEscape)
})

function hasImage(promo: PromoCatalogItem): boolean {
  return Boolean(promo.imageUrl) && !failedImageIds.value.has(promo.id)
}

function markImageFailed(id: number): void {
  failedImageIds.value = new Set([...failedImageIds.value, id])
}

const hasActiveFilter = computed(
  () => Boolean(search.value) || filter.value !== 'all' || divisionFilter.value.length > 0,
)

function resetFilter(): void {
  search.value = ''
  filter.value = 'all'
  divisionFilter.value = []
}

/**
 * Bagikan promo ke WhatsApp. Untuk sekarang yang dikirim adalah caption promo
 * beserta tautan banner-nya (link `wa.me` hanya mendukung teks). Mengirim
 * gambar sebagai lampiran perlu Web Share API dan akan ditentukan menyusul.
 */
function sharePromo(promo: PromoCatalogItem): void {
  const lines = [`*${promo.title}*`]
  if (promo.content) lines.push('', promo.content)
  lines.push('', `Periode: ${formatPromoPeriod(promo)}`)
  if (promo.imageUrl) lines.push('', promo.imageUrl)

  const target = `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(target, '_blank', 'noopener,noreferrer')
}

watch(filter, (status) => void loadFiltered(status), { immediate: true })
</script>

<style scoped>
.promo-catalog { --promo-blue: var(--app-primary, #18a6e4); --promo-ink: #243240; padding-bottom: 34px; }
.promo-catalog__hero { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; overflow: hidden; margin-bottom: 18px; border: 1px solid var(--app-primary-border, #dcecf4); border-radius: 18px; padding: 22px 24px; background: linear-gradient(120deg, #fff 15%, var(--app-primary-wash, #f1faff) 100%); box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.promo-catalog__hero::after { position: absolute; top: -72px; right: 90px; width: 180px; height: 180px; border: 34px solid rgba(var(--app-primary-rgb, 24, 166, 228), .06); border-radius: 50%; content: ''; }
.promo-catalog__hero-icon { position: relative; z-index: 1; display: grid; place-items: center; width: 62px; height: 62px; border-radius: 18px; background: var(--app-primary-soft, #dff4fc); }
.promo-catalog__eyebrow { display: block; margin-bottom: 4px; color: var(--app-primary-dark, #1193c9); font-size: 9.5px; font-weight: 800; letter-spacing: .11em; }
.promo-catalog__hero h1 { margin: 0; color: var(--promo-ink); font-size: 22px; font-weight: 750; }
.promo-catalog__hero p { margin: 5px 0 0; color: #748391; font-size: 12px; }
.promo-catalog__total { position: relative; z-index: 1; border-radius: 999px; padding: 8px 12px; color: var(--app-primary-dark, #087fad); background: #fff; box-shadow: 0 3px 12px rgba(34,96,128,.1); font-size: 11px; font-weight: 700; }
.promo-catalog__content-card { border: 1px solid #e2e8ed; border-radius: 18px; padding: 20px; background: #fff; box-shadow: 0 7px 24px rgba(30,75,105,.07); }
.promo-catalog__toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
.promo-search { display: flex; align-items: center; gap: 9px; width: min(380px, 100%); height: 42px; border: 1px solid #dfe7ec; border-radius: 12px; padding: 0 10px 0 13px; background: #fff; box-shadow: 0 3px 12px rgba(31,41,55,.05); }
.promo-search:focus-within { border-color: var(--app-primary-border, #66c4eb); box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.promo-search input { flex: 1; min-width: 0; border: 0; outline: 0; color: var(--promo-ink); background: transparent; font-size: 12px; }
.promo-search input::placeholder { color: #9aa6af; }
.promo-search button { display: grid; place-items: center; width: 27px; height: 27px; border: 0; border-radius: 7px; padding: 0; color: #82909c; background: #f3f6f8; }
.promo-search-group { position: relative; display: flex; align-items: center; gap: 10px; min-width: 0; }
.promo-filter-anchor { position: relative; flex: 0 0 auto; }
.promo-filter-trigger { display: inline-flex; align-items: center; gap: 7px; height: 42px; border: 1px solid #dfe7ec; border-radius: 12px; padding: 0 13px; color: #4c5a68; background: #fff; box-shadow: 0 3px 12px rgba(31,41,55,.05); font-size: 11.5px; font-weight: 700; cursor: pointer; }
.promo-filter-trigger:hover { border-color: var(--app-primary-border, #66c4eb); }
.promo-filter-trigger.is-active { border-color: var(--app-primary-border, #56bce7); color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); }
.promo-filter-trigger b { display: grid; place-items: center; min-width: 18px; height: 18px; border-radius: 9px; padding: 0 5px; color: #fff; background: var(--promo-blue); font-size: 9px; }
.promo-filter-panel { position: absolute; z-index: 1060; top: calc(100% + 8px); right: 0; width: min(300px, calc(100vw - 32px)); border: 1px solid #e1e8ed; border-radius: 14px; padding: 13px 14px 14px; background: #fff; box-shadow: 0 16px 40px rgba(15,23,42,.16); }
.promo-filter-panel__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
.promo-filter-panel__head small { display: block; color: var(--promo-blue); font-size: 9px; font-weight: 800; letter-spacing: .08em; }
.promo-filter-panel__head strong { color: #263442; font-size: 13.5px; }
.promo-filter-panel__reset { border: 0; background: transparent; color: #e15b64; font-size: 11px; font-weight: 700; cursor: pointer; }
.promo-filter-panel__reset:disabled { color: #b4bcc5; cursor: not-allowed; }
.promo-filter-panel__error { margin: 9px 0 0; color: #e15b64; font-size: 10.5px; }
.promo-card__division { display: inline-flex; align-self: flex-start; max-width: 100%; margin-bottom: 9px; border-radius: 999px; padding: 3px 9px; overflow: hidden; color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); font-size: 9.5px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.promo-filters { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
.promo-filters button { display: inline-flex; align-items: center; gap: 7px; min-height: 34px; border: 1px solid #dfe7ec; border-radius: 999px; padding: 6px 10px 6px 12px; color: #647482; background: #fff; font-size: 10.5px; font-weight: 600; }
.promo-filters button span { display: grid; place-items: center; min-width: 19px; height: 19px; border-radius: 10px; padding: 0 5px; background: #eef2f5; font-size: 9px; }
.promo-filters button.active { border-color: var(--app-primary-border, #56bce7); color: var(--app-primary-dark, #087fad); background: var(--app-primary-wash, #eaf8fd); }
.promo-filters button.active span { color: #fff; background: var(--promo-blue); }
.promo-pagination { margin-top: 20px; }
.promo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.promo-card { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid #e2e8ed; border-radius: 16px; color: inherit; background: #fff; box-shadow: 0 5px 18px rgba(31,55,75,.07); text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.promo-card:hover { border-color: var(--app-primary-border, #b9dfef); color: inherit; transform: translateY(-3px); box-shadow: 0 12px 28px rgba(31,75,105,.12); }
.promo-card__media { position: relative; overflow: hidden; height: 170px; background: var(--app-primary-wash, #eaf7fc); }
.promo-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s ease; }
.promo-card:hover .promo-card__media img { transform: scale(1.025); }
.promo-card__fallback { position: absolute; inset: 0; display: grid; place-items: center; color: var(--app-primary, #0f96ca); background: linear-gradient(140deg, var(--app-primary-soft, #dff4fc), var(--app-primary-wash, #f6fcff)); }
.promo-card__fallback span { position: absolute; border: 18px solid rgba(var(--app-primary-rgb, 24, 166, 228), .09); border-radius: 50%; }
.promo-card__fallback span:first-child { top: -55px; right: -35px; width: 140px; height: 140px; }
.promo-card__fallback span:nth-child(2) { bottom: -35px; left: -20px; width: 92px; height: 92px; }
.promo-card__status { position: absolute; top: 12px; left: 12px; display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 9px; color: #536472; background: rgba(255,255,255,.94); box-shadow: 0 3px 10px rgba(15,23,42,.12); font-size: 9.5px; font-weight: 700; backdrop-filter: blur(5px); }
.promo-card__status i { width: 7px; height: 7px; border-radius: 50%; background: #14b88a; }
.promo-card__status.is-upcoming i { background: #f59e0b; }
.promo-card__status.is-ended i { background: #94a3b8; }
.promo-card__share { position: absolute; top: 12px; right: 12px; display: inline-flex; align-items: center; gap: 6px; border: 0; border-radius: 999px; padding: 6px 11px 6px 9px; color: #1f7a47; background: rgba(255,255,255,.94); box-shadow: 0 3px 10px rgba(15,23,42,.14); font-size: 9.5px; font-weight: 700; backdrop-filter: blur(5px); cursor: pointer; transition: color .18s ease, background .18s ease; }
.promo-card__share:hover { color: #fff; background: #25d366; }
.promo-card__share:hover span { color: #fff; }
.promo-card__body { display: flex; flex: 1; flex-direction: column; padding: 17px; }
.promo-card__date { display: flex; align-items: center; gap: 6px; margin-bottom: 9px; color: #84919c; font-size: 9.5px; font-weight: 600; }
.promo-card__body h2 { display: -webkit-box; overflow: hidden; margin: 0; color: var(--promo-ink); font-size: 15px; font-weight: 750; line-height: 1.35; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.promo-card__body p { display: -webkit-box; overflow: hidden; min-height: 38px; margin: 8px 0 16px; color: #748391; font-size: 11px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.promo-card__link { display: inline-flex; align-items: center; gap: 4px; margin-top: auto; color: var(--app-primary-dark, #0788bd); font-size: 10.5px; font-weight: 700; }
.promo-state { display: flex; min-height: 290px; flex-direction: column; align-items: center; justify-content: center; border: 1px dashed #d9e3e9; border-radius: 17px; padding: 30px; background: #fff; text-align: center; }
.promo-state__icon { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 12px; border-radius: 16px; color: var(--app-primary, #1599cf); background: var(--app-primary-wash, #e5f6fd); }
.promo-state h2 { margin: 0; color: var(--promo-ink); font-size: 16px; }
.promo-state p { margin: 7px 0 15px; color: #7d8b96; font-size: 11.5px; }
.promo-state button { border: 0; border-radius: 10px; padding: 9px 16px; color: #fff; background: var(--promo-blue); font-size: 11px; font-weight: 700; }
.promo-skeleton { overflow: hidden; height: 320px; border: 1px solid #e8edf0; border-radius: 16px; padding: 188px 17px 17px; background: linear-gradient(110deg,#eef2f5 8%,#f7f9fa 18%,#eef2f5 33%); background-size: 200% 100%; animation: promo-shimmer 1.3s linear infinite; }
.promo-skeleton i { display: block; height: 10px; margin-top: 10px; border-radius: 6px; background: rgba(255,255,255,.8); }
.promo-skeleton i:nth-child(3) { width: 72%; }
.promo-skeleton i:nth-child(4) { width: 38%; margin-top: 26px; }
@keyframes promo-shimmer { to { background-position-x: -200%; } }
@media (max-width: 1100px) { .promo-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } .promo-catalog__toolbar { align-items: stretch; flex-direction: column; } .promo-filters { justify-content: flex-start; } .promo-search-group { width: 100%; } .promo-search { flex: 1; width: auto; min-width: 0; } .promo-filter-anchor { position: static; } .promo-filter-panel { width: min(300px, 100%); } }
@media (max-width: 640px) { .promo-catalog__hero { grid-template-columns: auto 1fr; padding: 18px; } .promo-catalog__hero-icon { width: 52px; height: 52px; } .promo-catalog__total { display: none; } .promo-catalog__hero h1 { font-size: 19px; } .promo-catalog__content-card { border-radius: 15px; padding: 14px; } .promo-grid { grid-template-columns: 1fr; } .promo-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 3px; } .promo-filters button { flex: 0 0 auto; } }
</style>
