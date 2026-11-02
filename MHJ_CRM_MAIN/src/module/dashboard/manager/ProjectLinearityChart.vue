<template>
  <article class="linearity-card" aria-labelledby="linearity-title">
    <header class="linearity-card__head">
      <div>
        <h2 id="linearity-title" class="section-title">Linearitas Proyek Bulanan</h2>
        <small class="linearity-card__formula">{{ data?.formula || 'Baseline bulanan vs nilai input peluang' }}</small>
      </div>
      <div class="linearity-card__meta">
        <span><strong>Target Tahunan</strong><em>{{ formatRupiahCompact(targetNominal) }}</em></span>
        <span><strong>Baseline / Bulan</strong><em>{{ formatRupiahCompact(monthlyBaseline) }}</em></span>
      </div>
    </header>

    <div v-if="loading" class="linearity-card__state" role="status">Memuat linearitas proyek...</div>
    <div v-else-if="!series.length" class="linearity-card__state">Belum ada data linearitas untuk tahun ini.</div>
    <apexchart
      v-else
      type="line"
      height="300"
      :options="chartOptions"
      :series="chartSeries"
    />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ProjectLinearityData, ProjectLinearityPoint } from '@/services/analyticsService'

const props = defineProps<{
  data: ProjectLinearityData | null
  loading?: boolean
}>()

function toNumber(value: number | string | null | undefined): number {
  if (value === null || value === undefined) return 0
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function formatRupiahCompact(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return 'Rp0'
  if (amount >= 1_000_000_000_000) return `Rp${(amount / 1_000_000_000_000).toFixed(1).replace('.', ',')}T`
  if (amount >= 1_000_000_000) return `Rp${(amount / 1_000_000_000).toFixed(1).replace('.', ',')}M`
  if (amount >= 1_000_000) return `Rp${Math.round(amount / 1_000_000)}Jt`
  if (amount >= 1_000) return `Rp${Math.round(amount / 1_000)}Rb`
  return `Rp${Math.round(amount)}`
}

const targetNominal = computed(() => toNumber(props.data?.target_nominal))
const monthlyBaseline = computed(() => toNumber(props.data?.monthly_baseline))
const series = computed<ProjectLinearityPoint[]>(() => props.data?.series ?? [])

const categories = computed(() => series.value.map((row) => row.MonthName))
const baselineSeries = computed(() => series.value.map((row) => toNumber(row.baseline_coverage_3x)))
const inputSeries = computed(() => series.value.map((row) => toNumber(row.total_project_input_value)))

const chartSeries = computed(() => [
  { name: 'Nilai Input Peluang', type: 'column', data: inputSeries.value },
  { name: 'Baseline (Target x3 / 12)', type: 'line', data: baselineSeries.value },
])

const chartOptions = computed(() => ({
  chart: { toolbar: { show: false }, zoom: { enabled: false }, fontFamily: 'inherit' },
  colors: ['#18a6e4', '#032a4e'],
  stroke: { width: [0, 3], curve: 'smooth' as const },
  plotOptions: { bar: { columnWidth: '42%', borderRadius: 6 } },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eef1f4', strokeDashArray: 4 },
  xaxis: {
    categories: categories.value,
    labels: { style: { colors: '#6b7a86', fontSize: '11px' } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      formatter: (value: number) => formatRupiahCompact(value),
      style: { colors: '#6b7a86', fontSize: '11px' },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: { formatter: (value: number) => formatRupiahCompact(value) },
  },
  legend: { position: 'top' as const, horizontalAlign: 'right' as const, fontSize: '12px', labels: { colors: '#4b5a66' } },
}))
</script>

<style scoped>
.linearity-card {
  display: grid;
  gap: 14px;
  min-width: 0;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.linearity-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.section-title {
  margin: 0 0 2px;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.linearity-card__formula {
  color: #8c98a3;
  font-size: 11px;
}

.linearity-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.linearity-card__meta span {
  display: grid;
  gap: 2px;
  border: 1px solid #edf1f4;
  border-radius: 12px;
  padding: 8px 12px;
  background: #f9fbfc;
  text-align: right;
}

.linearity-card__meta strong {
  color: #93a0aa;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.linearity-card__meta em {
  color: #1c2a36;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
}

.linearity-card__state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  border: 1px dashed #dde4e9;
  border-radius: 14px;
  color: #93a0aa;
  background: #f9fbfc;
  font-size: 12.5px;
}
</style>
