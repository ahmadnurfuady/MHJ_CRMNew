<template>
  <div class="container-fluid promo-catalog">
    <section class="promo-catalog__hero">
      <div class="promo-catalog__hero-icon" aria-hidden="true">
        <MhjIcon name="action_promo_ticket" :size="34" />
      </div>
      <div>
        <span class="promo-catalog__eyebrow">INFORMASI TERBARU</span>
        <h1>Promo MHJ</h1>
        <p>Temukan penawaran dan informasi promo terbaru untuk mendukung aktivitasmu.</p>
      </div>
      <span class="promo-catalog__total">{{ publishedItems.length }} promo</span>
    </section>

    <section class="promo-catalog__content-card">
      <section class="promo-catalog__toolbar" aria-label="Pencarian dan filter promo">
        <label class="promo-search">
          <span class="visually-hidden">Cari promo</span>
          <SolarIcon
            name="magnifier"
            :size="19"
            color="#032A4E"
            secondary-color="#18A6E4"
            :secondary-opacity="0.75"
            aria-hidden="true"
          />
          <input v-model.trim="search" type="search" placeholder="Cari judul atau isi promo..." />
          <button v-if="search" type="button" aria-label="Hapus pencarian" @click="search = ''">
            <SolarIcon name="close" :size="16" />
          </button>
        </label>

        <div class="promo-filters" role="group" aria-label="Filter periode promo">
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
      </section>

      <div v-if="loading && !loaded" class="promo-grid" aria-label="Memuat promo">
        <div v-for="index in 6" :key="index" class="promo-skeleton">
          <span></span><i></i><i></i><i></i>
        </div>
      </div>

      <section v-else-if="error" class="promo-state" role="alert">
        <span class="promo-state__icon"><SolarIcon name="danger-circle" :size="30" /></span>
        <h2>Promo gagal dimuat</h2>
        <p>{{ error }}</p>
        <button type="button" @click="loadPromos(true)">Coba Lagi</button>
      </section>

      <section v-else-if="filteredPromos.length" class="promo-grid" aria-label="Daftar promo">
        <router-link
          v-for="promo in filteredPromos"
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
              <MhjIcon name="action_promo_ticket" :size="42" />
            </div>
            <span class="promo-card__status" :class="`is-${promoPeriodStatus(promo)}`">
              <i></i>{{ promoStatusLabel(promoPeriodStatus(promo)) }}
            </span>
          </div>

          <div class="promo-card__body">
            <span class="promo-card__date">
              <SolarIcon name="calendar" :size="16" />
              {{ formatPromoPeriod(promo) }}
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
        <span class="promo-state__icon"><MhjIcon name="action_promo_ticket" :size="32" /></span>
        <h2>{{ search ? 'Promo tidak ditemukan' : 'Belum ada promo' }}</h2>
        <p>{{ search ? 'Coba gunakan kata kunci atau filter yang berbeda.' : 'Promo terbaru akan muncul di halaman ini.' }}</p>
        <button v-if="search || filter !== 'all'" type="button" @click="resetFilter">Reset Filter</button>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import {
  formatPromoPeriod,
  promoPeriodStatus,
  promoStatusLabel,
  usePromoCatalog,
  type PromoCatalogItem,
  type PromoPeriodStatus,
} from '@/composable/usePromoCatalog'

type PromoFilter = 'all' | PromoPeriodStatus

const { publishedItems, loading, loaded, error, loadPromos } = usePromoCatalog()
const search = ref('')
const filter = ref<PromoFilter>('all')
const failedImageIds = ref(new Set<number>())

const filterOptions: Array<{ label: string; value: PromoFilter }> = [
  { label: 'Semua', value: 'all' },
  { label: 'Berlangsung', value: 'active' },
  { label: 'Akan Datang', value: 'upcoming' },
  { label: 'Berakhir', value: 'ended' },
]

const filteredPromos = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  return publishedItems.value.filter((promo) => {
    const matchesFilter = filter.value === 'all' || promoPeriodStatus(promo) === filter.value
    const matchesSearch = `${promo.title} ${promo.content}`
      .toLocaleLowerCase('id-ID')
      .includes(keyword)
    return matchesFilter && matchesSearch
  })
})

function countFor(value: PromoFilter): number {
  if (value === 'all') return publishedItems.value.length
  return publishedItems.value.filter((promo) => promoPeriodStatus(promo) === value).length
}

function hasImage(promo: PromoCatalogItem): boolean {
  return Boolean(promo.imageUrl) && !failedImageIds.value.has(promo.id)
}

function markImageFailed(id: number): void {
  failedImageIds.value = new Set([...failedImageIds.value, id])
}

function resetFilter(): void {
  search.value = ''
  filter.value = 'all'
}

onMounted(() => void loadPromos(true))
</script>

<style scoped>
.promo-catalog { --promo-blue: var(--app-primary, #18a6e4); --promo-ink: #243240; padding-bottom: 34px; }
.promo-catalog__hero { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; overflow: hidden; margin-bottom: 18px; border: 1px solid #dcecf4; border-radius: 18px; padding: 22px 24px; background: linear-gradient(120deg, #fff 15%, #f1faff 100%); box-shadow: 0 7px 24px rgba(30, 75, 105, .07); }
.promo-catalog__hero::after { position: absolute; top: -72px; right: 90px; width: 180px; height: 180px; border: 34px solid rgba(24,166,228,.06); border-radius: 50%; content: ''; }
.promo-catalog__hero-icon { position: relative; z-index: 1; display: grid; place-items: center; width: 62px; height: 62px; border-radius: 18px; background: #dff4fc; }
.promo-catalog__eyebrow { display: block; margin-bottom: 4px; color: #1193c9; font-size: 9.5px; font-weight: 800; letter-spacing: .11em; }
.promo-catalog__hero h1 { margin: 0; color: var(--promo-ink); font-size: 22px; font-weight: 750; }
.promo-catalog__hero p { margin: 5px 0 0; color: #748391; font-size: 12px; }
.promo-catalog__total { position: relative; z-index: 1; border-radius: 999px; padding: 8px 12px; color: #087fad; background: #fff; box-shadow: 0 3px 12px rgba(34,96,128,.1); font-size: 11px; font-weight: 700; }
.promo-catalog__content-card { border: 1px solid #e2e8ed; border-radius: 18px; padding: 20px; background: #fff; box-shadow: 0 7px 24px rgba(30,75,105,.07); }
.promo-catalog__toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
.promo-search { display: flex; align-items: center; gap: 9px; width: min(380px, 100%); height: 42px; border: 1px solid #dfe7ec; border-radius: 12px; padding: 0 10px 0 13px; background: #fff; box-shadow: 0 3px 12px rgba(31,41,55,.05); }
.promo-search:focus-within { border-color: #66c4eb; box-shadow: 0 0 0 3px rgba(24,166,228,.1); }
.promo-search input { flex: 1; min-width: 0; border: 0; outline: 0; color: var(--promo-ink); background: transparent; font-size: 12px; }
.promo-search input::placeholder { color: #9aa6af; }
.promo-search button { display: grid; place-items: center; width: 27px; height: 27px; border: 0; border-radius: 7px; padding: 0; color: #82909c; background: #f3f6f8; }
.promo-filters { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
.promo-filters button { display: inline-flex; align-items: center; gap: 7px; min-height: 34px; border: 1px solid #dfe7ec; border-radius: 999px; padding: 6px 10px 6px 12px; color: #647482; background: #fff; font-size: 10.5px; font-weight: 600; }
.promo-filters button span { display: grid; place-items: center; min-width: 19px; height: 19px; border-radius: 10px; padding: 0 5px; background: #eef2f5; font-size: 9px; }
.promo-filters button.active { border-color: #56bce7; color: #087fad; background: #eaf8fd; }
.promo-filters button.active span { color: #fff; background: var(--promo-blue); }
.promo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.promo-card { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid #e2e8ed; border-radius: 16px; color: inherit; background: #fff; box-shadow: 0 5px 18px rgba(31,55,75,.07); text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.promo-card:hover { border-color: #b9dfef; color: inherit; transform: translateY(-3px); box-shadow: 0 12px 28px rgba(31,75,105,.12); }
.promo-card__media { position: relative; overflow: hidden; height: 170px; background: #eaf7fc; }
.promo-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s ease; }
.promo-card:hover .promo-card__media img { transform: scale(1.025); }
.promo-card__fallback { position: absolute; inset: 0; display: grid; place-items: center; color: #0f96ca; background: linear-gradient(140deg, #dff4fc, #f6fcff); }
.promo-card__fallback span { position: absolute; border: 18px solid rgba(24,166,228,.09); border-radius: 50%; }
.promo-card__fallback span:first-child { top: -55px; right: -35px; width: 140px; height: 140px; }
.promo-card__fallback span:nth-child(2) { bottom: -35px; left: -20px; width: 92px; height: 92px; }
.promo-card__status { position: absolute; top: 12px; left: 12px; display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 9px; color: #536472; background: rgba(255,255,255,.94); box-shadow: 0 3px 10px rgba(15,23,42,.12); font-size: 9.5px; font-weight: 700; backdrop-filter: blur(5px); }
.promo-card__status i { width: 7px; height: 7px; border-radius: 50%; background: #14b88a; }
.promo-card__status.is-upcoming i { background: #f59e0b; }
.promo-card__status.is-ended i { background: #94a3b8; }
.promo-card__body { display: flex; flex: 1; flex-direction: column; padding: 17px; }
.promo-card__date { display: flex; align-items: center; gap: 6px; margin-bottom: 9px; color: #84919c; font-size: 9.5px; font-weight: 600; }
.promo-card__body h2 { display: -webkit-box; overflow: hidden; margin: 0; color: var(--promo-ink); font-size: 15px; font-weight: 750; line-height: 1.35; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.promo-card__body p { display: -webkit-box; overflow: hidden; min-height: 38px; margin: 8px 0 16px; color: #748391; font-size: 11px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.promo-card__link { display: inline-flex; align-items: center; gap: 4px; margin-top: auto; color: #0788bd; font-size: 10.5px; font-weight: 700; }
.promo-state { display: flex; min-height: 290px; flex-direction: column; align-items: center; justify-content: center; border: 1px dashed #d9e3e9; border-radius: 17px; padding: 30px; background: #fff; text-align: center; }
.promo-state__icon { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 12px; border-radius: 16px; color: #1599cf; background: #e5f6fd; }
.promo-state h2 { margin: 0; color: var(--promo-ink); font-size: 16px; }
.promo-state p { margin: 7px 0 15px; color: #7d8b96; font-size: 11.5px; }
.promo-state button { border: 0; border-radius: 10px; padding: 9px 16px; color: #fff; background: var(--promo-blue); font-size: 11px; font-weight: 700; }
.promo-skeleton { overflow: hidden; height: 320px; border: 1px solid #e8edf0; border-radius: 16px; padding: 188px 17px 17px; background: linear-gradient(110deg,#eef2f5 8%,#f7f9fa 18%,#eef2f5 33%); background-size: 200% 100%; animation: promo-shimmer 1.3s linear infinite; }
.promo-skeleton i { display: block; height: 10px; margin-top: 10px; border-radius: 6px; background: rgba(255,255,255,.8); }
.promo-skeleton i:nth-child(3) { width: 72%; }
.promo-skeleton i:nth-child(4) { width: 38%; margin-top: 26px; }
@keyframes promo-shimmer { to { background-position-x: -200%; } }
@media (max-width: 1100px) { .promo-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } .promo-catalog__toolbar { align-items: stretch; flex-direction: column; } .promo-filters { justify-content: flex-start; } }
@media (max-width: 640px) { .promo-catalog__hero { grid-template-columns: auto 1fr; padding: 18px; } .promo-catalog__hero-icon { width: 52px; height: 52px; } .promo-catalog__total { display: none; } .promo-catalog__hero h1 { font-size: 19px; } .promo-catalog__content-card { border-radius: 15px; padding: 14px; } .promo-grid { grid-template-columns: 1fr; } .promo-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 3px; } .promo-filters button { flex: 0 0 auto; } }
</style>
