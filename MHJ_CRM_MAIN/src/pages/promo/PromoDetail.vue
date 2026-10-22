<template>
  <div class="container-fluid promo-detail">
    <router-link :to="routes.Promo.List" class="promo-detail__back">
      <SolarIcon name="alt-arrow-left" :size="18" /> Kembali ke Daftar Promo
    </router-link>

    <div v-if="loading && !loaded" class="promo-detail__loading" role="status">
      <span class="spinner-border" aria-hidden="true"></span>
      <p>Memuat detail promo...</p>
    </div>

    <section v-else-if="error" class="promo-detail__state" role="alert">
      <span><SolarIcon name="danger-circle" :size="32" /></span>
      <h1>Detail promo gagal dimuat</h1>
      <p>{{ error }}</p>
      <button type="button" @click="loadPromos(true)">Coba Lagi</button>
    </section>

    <section v-else-if="!promo" class="promo-detail__state">
      <span><MhjIcon name="action_promo_ticket" :size="34" /></span>
      <h1>Promo tidak ditemukan</h1>
      <p>Promo mungkin sudah tidak tersedia atau tautannya tidak sesuai.</p>
      <router-link :to="routes.Promo.List">Lihat Promo Lainnya</router-link>
    </section>

    <article v-else class="promo-detail__content">
      <div class="promo-detail__cover">
        <img
          v-if="promo.imageUrl && !imageFailed"
          :src="promo.imageUrl"
          :alt="`Banner ${promo.title}`"
          @error="imageFailed = true"
        />
        <div v-else class="promo-detail__fallback" aria-hidden="true">
          <i></i><i></i>
          <MhjIcon name="action_promo_ticket" :size="60" />
        </div>
        <span class="promo-detail__status" :class="`is-${status}`">
          <i></i>{{ promoStatusLabel(status) }}
        </span>
      </div>

      <div class="promo-detail__layout">
        <main class="promo-detail__main">
          <span class="promo-detail__eyebrow">PROMO MHJ</span>
          <h1>{{ promo.title }}</h1>
          <div class="promo-detail__divider"></div>
          <h2>Informasi Promo</h2>
          <p class="promo-detail__description">
            {{ promo.content || 'Belum ada deskripsi tambahan untuk promo ini.' }}
          </p>
        </main>

        <aside class="promo-detail__summary" aria-label="Ringkasan promo">
          <h2>Detail Promo</h2>
          <dl>
            <div>
              <dt><SolarIcon name="calendar" :size="18" /> Periode</dt>
              <dd>{{ formatPromoPeriod(promo) }}</dd>
            </div>
            <div>
              <dt><SolarIcon name="users" :size="18" /> Ditujukan untuk</dt>
              <dd>{{ promoTargetLabel(promo) }}</dd>
            </div>
            <div>
              <dt><SolarIcon name="check-circle" :size="18" /> Status</dt>
              <dd>{{ promoStatusLabel(status) }}</dd>
            </div>
          </dl>
          <p class="promo-detail__note">
            Informasi promo ini bersifat hanya-baca. Hubungi tim terkait untuk informasi lebih lanjut.
          </p>
        </aside>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import {
  formatPromoPeriod,
  promoPeriodStatus,
  promoStatusLabel,
  promoTargetLabel,
  usePromoCatalog,
} from '@/composable/usePromoCatalog'
import { routes } from '@/router/routes'

const route = useRoute()
const { publishedItems, loading, loaded, error, loadPromos } = usePromoCatalog()
const imageFailed = ref(false)

const promoId = computed(() => Number(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id))
const promo = computed(() => publishedItems.value.find((item) => item.id === promoId.value) ?? null)
const status = computed(() => promo.value ? promoPeriodStatus(promo.value) : 'active')

watch(promoId, () => { imageFailed.value = false })
onMounted(() => void loadPromos(true))
</script>

<style scoped>
.promo-detail { --promo-blue: var(--app-primary,#18a6e4); --promo-ink: #243240; padding-bottom: 36px; }
.promo-detail__back { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 15px; color: #627483; font-size: 11px; font-weight: 650; text-decoration: none; }
.promo-detail__back:hover { color: #0788bd; }
.promo-detail__content { overflow: hidden; border: 1px solid #e0e8ed; border-radius: 18px; background: #fff; box-shadow: 0 8px 28px rgba(31,60,82,.08); }
.promo-detail__cover { position: relative; overflow: hidden; width: 100%; height: clamp(240px,34vw,400px); background: #e8f7fd; }
.promo-detail__cover > img { display: block; width: 100%; height: 100%; object-fit: cover; }
.promo-detail__fallback { position: absolute; inset: 0; display: grid; place-items: center; color: #0b94c8; background: linear-gradient(135deg,#dff4fc,#f8fdff); }
.promo-detail__fallback i { position: absolute; border: 36px solid rgba(24,166,228,.08); border-radius: 50%; }
.promo-detail__fallback i:first-child { top: -110px; right: -50px; width: 300px; height: 300px; }
.promo-detail__fallback i:nth-child(2) { bottom: -85px; left: -40px; width: 220px; height: 220px; }
.promo-detail__status { position: absolute; top: 18px; right: 18px; display: inline-flex; align-items: center; gap: 7px; border-radius: 999px; padding: 8px 12px; color: #4e6170; background: rgba(255,255,255,.95); box-shadow: 0 4px 14px rgba(15,23,42,.14); font-size: 10.5px; font-weight: 750; backdrop-filter: blur(6px); }
.promo-detail__status > i { width: 8px; height: 8px; border-radius: 50%; background: #14b88a; }
.promo-detail__status.is-upcoming > i { background: #f59e0b; }
.promo-detail__status.is-ended > i { background: #94a3b8; }
.promo-detail__layout { display: grid; grid-template-columns: minmax(0,1fr) 320px; gap: 32px; padding: 28px; }
.promo-detail__main { min-width: 0; }
.promo-detail__eyebrow { display: block; margin-bottom: 7px; color: #1193c9; font-size: 9.5px; font-weight: 800; letter-spacing: .12em; }
.promo-detail__main h1 { margin: 0; color: var(--promo-ink); font-size: clamp(21px,2.5vw,30px); font-weight: 760; line-height: 1.3; }
.promo-detail__divider { width: 52px; height: 4px; margin: 17px 0 24px; border-radius: 3px; background: linear-gradient(90deg,var(--promo-blue),#8ed8f4); }
.promo-detail__main h2,.promo-detail__summary h2 { margin: 0 0 12px; color: var(--promo-ink); font-size: 14px; font-weight: 750; }
.promo-detail__description { margin: 0; color: #617382; font-size: 12.5px; line-height: 1.8; white-space: pre-line; }
.promo-detail__summary { align-self: start; border: 1px solid #e1e9ee; border-radius: 15px; padding: 18px; background: #fafdff; }
.promo-detail__summary dl { display: grid; gap: 0; margin: 0; }
.promo-detail__summary dl > div { border-top: 1px solid #e7edf1; padding: 13px 0; }
.promo-detail__summary dt { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: #82909b; font-size: 9.5px; font-weight: 650; }
.promo-detail__summary dd { margin: 0; color: #344552; font-size: 11px; font-weight: 650; line-height: 1.5; }
.promo-detail__note { margin: 8px 0 0; border-radius: 10px; padding: 10px 11px; color: #6d7e8b; background: #eaf7fc; font-size: 9.5px; line-height: 1.55; }
.promo-detail__loading,.promo-detail__state { display: flex; min-height: 430px; flex-direction: column; align-items: center; justify-content: center; border: 1px dashed #d9e3e9; border-radius: 18px; padding: 30px; color: #7d8b96; background: #fff; text-align: center; }
.promo-detail__loading .spinner-border { color: var(--promo-blue); }
.promo-detail__state > span { display: grid; place-items: center; width: 62px; height: 62px; margin-bottom: 13px; border-radius: 17px; color: #1599cf; background: #e5f6fd; }
.promo-detail__state h1 { margin: 0; color: var(--promo-ink); font-size: 18px; }
.promo-detail__state p { margin: 8px 0 16px; font-size: 11.5px; }
.promo-detail__state button,.promo-detail__state a { border: 0; border-radius: 10px; padding: 9px 16px; color: #fff; background: var(--promo-blue); font-size: 11px; font-weight: 700; text-decoration: none; }
@media (max-width: 820px) { .promo-detail__layout { grid-template-columns: 1fr; padding: 22px; } .promo-detail__summary { width: 100%; } }
@media (max-width: 520px) { .promo-detail__cover { height: 220px; } .promo-detail__layout { gap: 24px; padding: 18px; } .promo-detail__status { top: 12px; right: 12px; } }
</style>
