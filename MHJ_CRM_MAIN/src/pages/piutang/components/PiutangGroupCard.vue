<template>
  <!-- Satu nota: kartu datar (sama seperti sebelumnya). -->
  <router-link
    v-if="isSingle"
    :to="detailTarget(group.items[0])"
    class="piutang-item"
    :aria-label="`Lihat detail ${group.faskes}`"
  >
    <div class="piutang-item__heading">
      <h3>{{ group.faskes }}</h3>
      <strong>{{ formatRupiah(group.total) }}</strong>
    </div>

    <p class="piutang-item__product">{{ group.items[0].produk }}</p>
    <p class="piutang-item__invoice">
      {{ group.items[0].noNota }} <span aria-hidden="true">&bull;</span>
      {{ formatTermin(group.items[0]) }}
    </p>

    <div class="piutang-item__time" :class="`is-${dueTone(group.items[0])}`">
      <SolarIcon v-if="group.items[0].status === 'lunas'" name="check-circle" :size="17" color="currentColor" secondary-color="currentColor" aria-hidden="true" />
      <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
      <span>{{ formatLabelWaktu(group.items[0]) }}</span>
    </div>
  </router-link>

  <!--
    Banyak nota pada satu faskes: header faskes sebagai tombol buka/tutup, dan
    daftar notanya tertutup secara default supaya satu faskes tetap satu baris
    di daftar. Daftar nota baru tampil setelah header diklik.
  -->
  <div v-else class="piutang-item piutang-group" :class="{ 'is-open': expanded }">
    <button
      type="button"
      class="piutang-group__heading"
      :aria-expanded="expanded"
      :aria-label="`${expanded ? 'Tutup' : 'Buka'} ${group.items.length} faktur ${group.faskes}`"
      @click="expanded = !expanded"
    >
      <div class="piutang-group__title">
        <h3>{{ group.faskes }}</h3>
        <span class="piutang-group__badge">{{ group.items.length }} Invoice</span>
      </div>
      <div class="piutang-group__total">
        <strong>{{ formatRupiah(group.total) }}</strong>
        <span>Total Piutang</span>
      </div>
      <span class="piutang-group__toggle">
        <span class="piutang-group__toggle-text">
          {{ expanded ? 'Tutup faktur' : `Lihat ${group.items.length} faktur` }}
        </span>
        <vue-feather
          class="piutang-group__chevron"
          :type="expanded ? 'chevron-up' : 'chevron-down'"
          size="16"
          aria-hidden="true"
        />
      </span>
    </button>

    <ul v-if="expanded" class="piutang-group__list">
      <li v-for="item in group.items" :key="item.id">
        <router-link
          :to="detailTarget(item)"
          class="piutang-invoice"
          :aria-label="`Lihat detail nota ${item.noNota}`"
        >
          <div class="piutang-invoice__top">
            <span class="piutang-invoice__nota">
              <SolarIcon
                name="bill-list"
                :size="16"
                color="var(--app-primary, var(--theme-default, #18a6e4))"
                secondary-color="var(--app-primary, var(--theme-default, #18a6e4))"
                :secondary-opacity="1"
                aria-hidden="true"
              />
              <span class="piutang-invoice__nota-text">No Faktur: {{ item.noNota }}</span>
            </span>
            <span class="piutang-invoice__amount">
              {{ formatRupiah(item.totalPiutang) }}
              <vue-feather type="chevron-right" size="16" aria-hidden="true" />
            </span>
          </div>
          <div class="piutang-invoice__bottom">
            <span class="piutang-invoice__termin">{{ formatTermin(item) }}</span>
            <span class="piutang-invoice__time" :class="`is-${dueTone(item)}`">
              <SolarIcon v-if="item.status === 'lunas'" name="check-circle" :size="14" color="currentColor" secondary-color="currentColor" aria-hidden="true" />
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {{ formatLabelWaktu(item) }}
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { routes } from '@/router/routes'
import type { Piutang, PiutangStatus } from '@/types/piutang'
import {
  formatLabelWaktu,
  formatRupiah,
  formatTermin,
  piutangDueTone,
  type PiutangDueTone,
} from '@/utils/piutang'

export interface PiutangGroup {
  faskes: string
  items: Piutang[]
  total: number
}

const props = defineProps<{
  group: PiutangGroup
  sourceTab: PiutangStatus
}>()

const isSingle = computed(() => props.group.items.length === 1)
/** Daftar faktur tertutup secara default; dibuka lewat header kartu. */
const expanded = ref(false)

function dueTone(item: Piutang): PiutangDueTone {
  return piutangDueTone(item)
}

function detailTarget(item: Piutang) {
  return {
    path: routes.CrmAdmin.Piutang,
    query: { tab: props.sourceTab, detail: item.id },
  }
}
</script>

<style scoped>
.piutang-item {
  display: block;
  height: 100%;
  border: 1px solid var(--bs-border-color, #e2e8f0);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--bs-card-bg, #ffffff);
  box-shadow: 0 3px 12px rgba(27, 43, 65, 0.05);
  color: inherit;
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
}

a.piutang-item:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.3);
  background: var(--bs-tertiary-bg, #f8fafc);
  transform: translateY(-1px);
}

a.piutang-item:focus-visible {
  border-color: var(--app-primary, var(--theme-default, #18a6e4));
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  outline-offset: 2px;
}

/* ── Kartu datar (1 nota) ── */
.piutang-item__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.piutang-item__heading h3 {
  margin: 0;
  color: var(--bs-heading-color, #1e293b);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}

.piutang-item__heading strong {
  flex: 0 0 auto;
  color: var(--app-primary, var(--theme-default, #18a6e4));
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
}

.piutang-item__product,
.piutang-item__invoice {
  margin: 0;
}

.piutang-item__product {
  margin-top: 10px;
  color: var(--bs-secondary-color, #64748b);
  font-size: 13px;
}

.piutang-item__invoice {
  margin-top: 4px;
  color: var(--bs-tertiary-color, #94a3b8);
  font-size: 11px;
}

.piutang-item__time {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 14px;
  color: var(--bs-secondary-color, #64748b);
  font-size: 12px;
  font-weight: 600;
}

/* Warna jatuh tempo: merah terlambat, kuning <= 7 hari, hijau masih jauh. */
.piutang-item__time.is-overdue {
  color: #dc3545;
}

.piutang-item__time.is-soon {
  color: #b45309;
}

.piutang-item__time.is-safe,
.piutang-item__time.is-paid {
  color: #198754;
}

.piutang-item__time :deep(.solar-icon),
.piutang-invoice__time :deep(.solar-icon) {
  color: currentColor;
}

/* ── Kartu grup (banyak nota) ── */
.piutang-group__heading {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.piutang-group__heading:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.35);
  outline-offset: 4px;
  border-radius: 8px;
}

.piutang-group__toggle {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: 0 0 auto;
  align-self: center;
  color: var(--app-primary, var(--theme-default, #18a6e4));
  font-size: 11.5px;
  font-weight: 700;
  white-space: nowrap;
}

.piutang-group__heading:hover .piutang-group__toggle {
  color: var(--app-primary-dark, #0e7490);
}

.piutang-group__title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
}

.piutang-group__title h3 {
  margin: 0;
  color: var(--bs-heading-color, #1e293b);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
}

.piutang-group__badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 3px 10px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
  color: var(--app-primary, var(--theme-default, #18a6e4));
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
}

.piutang-group__total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex: 0 0 auto;
  text-align: right;
}

.piutang-group__total strong {
  color: var(--app-primary, var(--theme-default, #18a6e4));
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
}

.piutang-group__total span {
  color: var(--bs-tertiary-color, #94a3b8);
  font-size: 11px;
}

.piutang-group__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--bs-border-color, #eef2f6);
  padding-top: 16px;
}

.piutang-invoice {
  display: block;
  border: 1px solid var(--bs-border-color, #eef2f6);
  border-radius: 10px;
  padding: 12px 14px;
  background: var(--bs-tertiary-bg, #f8fafc);
  color: inherit;
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease;
}

.piutang-invoice:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.35);
  background: var(--bs-card-bg, #ffffff);
}

.piutang-invoice:focus-visible {
  border-color: var(--app-primary, var(--theme-default, #18a6e4));
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  outline-offset: 1px;
}

.piutang-invoice__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.piutang-invoice__nota {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  color: var(--bs-heading-color, #1e293b);
  font-size: 13px;
  font-weight: 600;
}

.piutang-invoice__nota-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.piutang-invoice__amount {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 0 0 auto;
  color: var(--app-primary, var(--theme-default, #18a6e4));
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.piutang-invoice__amount :deep(svg) {
  color: var(--bs-tertiary-color, #94a3b8);
}

.piutang-invoice__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 6px;
  color: var(--bs-secondary-color, #64748b);
  font-size: 11px;
}

.piutang-invoice__time {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: 0 0 auto;
  font-weight: 600;
}

.piutang-invoice__time.is-overdue {
  color: #dc3545;
}

.piutang-invoice__time.is-soon {
  color: #b45309;
}

.piutang-invoice__time.is-safe,
.piutang-invoice__time.is-paid {
  color: #198754;
}

/* ── Dark mode ── */
:global(body.dark-only) .piutang-item {
  border-color: var(--bs-border-color, #34404c);
  background: var(--bs-card-bg, #202730);
  box-shadow: none;
}

:global(body.dark-only) a.piutang-item:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.45);
  background: var(--bs-tertiary-bg, #25313c);
}

:global(body.dark-only) .piutang-invoice {
  border-color: var(--bs-border-color, #34404c);
  background: var(--bs-tertiary-bg, #25313c);
}

:global(body.dark-only) .piutang-invoice:hover {
  background: var(--bs-card-bg, #202730);
}

@media (max-width: 575.98px) {
  .piutang-item__heading {
    flex-direction: column;
    gap: 5px;
  }

  .piutang-group__heading {
    flex-wrap: wrap;
  }

  .piutang-group__toggle {
    width: 100%;
    justify-content: flex-end;
  }

  .piutang-group__toggle-text {
    font-size: 11px;
  }
}
</style>
