<template>
  <article class="winrate-card" aria-labelledby="winrate-title">
    <header class="winrate-card__head">
      <div>
        <h2 id="winrate-title" class="section-title">Drilldown Deals per Divisi</h2>
        <small class="winrate-card__hint">Total deal yang masuk per divisi produk</small>
      </div>
      <span class="winrate-card__total" aria-label="Total deal keseluruhan">
        <strong>{{ grandTotal }}</strong>
        <em>deals</em>
      </span>
    </header>

    <div v-if="loading" class="winrate-card__state" role="status">Memuat drilldown divisi...</div>
    <div v-else-if="!activeRows.length" class="winrate-card__state">Belum ada deal yang tercatat per divisi.</div>
    <ul v-else class="winrate-card__list">
      <li v-for="row in activeRows" :key="row.division_name">
        <div class="winrate-row__title" :title="row.division_name">
          <span>{{ row.division_name }}</span>
          <strong>{{ toNumber(row.total_deals) }}</strong>
        </div>
        <div class="winrate-row__bar" :aria-label="`${row.division_name} ${toNumber(row.total_deals)} deal`">
          <span :style="{ width: `${barWidth(row)}%` }"></span>
        </div>
      </li>
    </ul>

    <small v-if="!loading && zeroCount > 0" class="winrate-card__footnote">
      {{ zeroCount }} divisi lain belum punya deal.
    </small>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { WinRateDivisionRow } from '@/services/analyticsService'

const props = defineProps<{
  rows: WinRateDivisionRow[]
  loading?: boolean
}>()

function toNumber(value: number | string | null | undefined): number {
  if (value === null || value === undefined) return 0
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

const activeRows = computed(() => props.rows.filter((row) => toNumber(row.total_deals) > 0))
const zeroCount = computed(() => props.rows.length - activeRows.value.length)
const maxDeals = computed(() => activeRows.value.reduce((max, row) => Math.max(max, toNumber(row.total_deals)), 0))
const grandTotal = computed(() => props.rows.reduce((sum, row) => sum + toNumber(row.total_deals), 0))

function barWidth(row: WinRateDivisionRow): number {
  if (maxDeals.value <= 0) return 0
  return Math.max(6, Math.round((toNumber(row.total_deals) / maxDeals.value) * 100))
}
</script>

<style scoped>
.winrate-card {
  display: grid;
  gap: 14px;
  min-width: 0;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.winrate-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-title {
  margin: 0 0 2px;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.winrate-card__hint {
  color: #8c98a3;
  font-size: 11px;
}

.winrate-card__total {
  display: flex;
  align-items: baseline;
  gap: 6px;
  border: 1px solid #edf1f4;
  border-radius: 12px;
  padding: 8px 12px;
  background: #f9fbfc;
}

.winrate-card__total strong {
  color: #1c2a36;
  font-size: 18px;
  font-weight: 800;
}

.winrate-card__total em {
  color: #93a0aa;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.winrate-card__list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.winrate-row__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.winrate-row__title span {
  overflow: hidden;
  color: #334155;
  font-size: 12px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.winrate-row__title strong {
  color: #1c2a36;
  font-size: 13px;
  font-weight: 700;
}

.winrate-row__bar {
  overflow: hidden;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #eef2f5;
}

.winrate-row__bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--app-primary, #18a6e4), var(--app-secondary, #84d7eb));
}

.winrate-card__state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  border: 1px dashed #dde4e9;
  border-radius: 14px;
  color: #93a0aa;
  background: #f9fbfc;
  font-size: 12.5px;
}

.winrate-card__footnote {
  color: #93a0aa;
  font-size: 10.5px;
}
</style>
