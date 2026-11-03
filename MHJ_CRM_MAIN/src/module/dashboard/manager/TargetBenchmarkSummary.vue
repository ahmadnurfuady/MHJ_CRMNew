<template>
  <div class="benchmark-layout">
    <article class="benchmark-card" aria-labelledby="benchmark-title">
      <div class="benchmark-card__head">
        <h2 id="benchmark-title" class="section-title">Ringkasan Target &amp; Benchmark</h2>
      </div>

      <section class="benchmark-bars" aria-label="Perbandingan nilai target dan realisasi">
        <div v-for="stat in normalizedStats" :key="stat.id" class="benchmark-bar">
          <div class="benchmark-bar__head">
            <span>{{ stat.label }}</span>
            <strong>{{ stat.value }}</strong>
          </div>
          <div class="benchmark-bar__track" aria-hidden="true">
            <span
              class="benchmark-bar__fill"
              :class="`benchmark-bar__fill--${stat.index + 1}`"
              :style="{ width: `${stat.visualPercent}%` }"
            ></span>
          </div>
          <span v-if="stat.hint" class="benchmark-bar__hint">{{ stat.hint }}</span>
        </div>
      </section>
    </article>

    <article class="benchmark-card" aria-labelledby="performance-title">
      <div class="benchmark-card__head">
        <h2 id="performance-title" class="section-title">Capaian Kinerja</h2>
        <span class="benchmark-card__status" :class="`is-${benchmarkStatus.tone}`">
          {{ benchmarkStatus.label }}
        </span>
      </div>

      <section class="benchmark-score" aria-label="Capaian benchmark">
        <div class="benchmark-score__primary">
          <div
            class="benchmark-score__ring"
            :style="{
              background: `conic-gradient(var(--app-primary, #18a6e4) ${clampProgress(benchmark.winningChance)}%, #e9f1f5 0)`,
            }"
          >
            <div class="benchmark-score__center">
              <strong>{{ formatPercent(benchmark.winningChance) }}</strong>
              <span>Winning Chance</span>
            </div>
          </div>
          <div class="benchmark-score__primary-copy">
            <strong>Peluang Kemenangan</strong>
            <span>Rasio deal yang berhasil dari seluruh peluang masuk.</span>
          </div>
        </div>

        <div class="benchmark-score__progress">
          <div v-for="stat in benchmark.progressStats" :key="stat.id" class="progress-row">
            <div class="progress-row__head">
              <span>{{ shortProgressLabel(stat.label) }}</span>
              <strong>{{ stat.displayValue }}</strong>
            </div>
            <div class="progress-row__track">
              <span :style="{ width: `${clampProgress(stat.value)}%` }"></span>
            </div>
          </div>
        </div>

      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ManagerBenchmarkSummary } from '@/types/dashboard/manager'

const props = defineProps<{
  benchmark: ManagerBenchmarkSummary
}>()

const normalizedStats = computed(() => {
  const numericValues = props.benchmark.stats.map((stat) => parseMetricValue(stat.value))
  const maximum = Math.max(...numericValues, 1)

  return props.benchmark.stats.map((stat, index) => ({
    ...stat,
    index,
    visualPercent: Math.max(8, (numericValues[index] / maximum) * 100),
  }))
})

const benchmarkStatus = computed(() => {
  const average = averageProgress.value

  if (average >= 75) return { label: 'Sangat Baik', tone: 'positive' }
  if (average >= 50) return { label: 'Bertumbuh', tone: 'positive' }
  if (average >= 25) return { label: 'Perlu Didorong', tone: 'warning' }
  return { label: 'Perlu Perhatian', tone: 'danger' }
})

const averageProgress = computed(() => {
  const values = props.benchmark.progressStats.map((stat) => stat.value)
  return values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0
})

function parseMetricValue(value: string): number {
  const numericPart = value.match(/[\d.,]+/)?.[0] ?? '0'
  const normalized = numericPart.includes(',')
    ? numericPart.replace(/\./g, '').replace(',', '.')
    : numericPart
  return Number.parseFloat(normalized) || 0
}

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value))
}

function formatPercent(value: number): string {
  return `${value.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
}

function shortProgressLabel(label: string): string {
  return label.replace(' Progres', '')
}
</script>

<style scoped>
.benchmark-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 18px;
  min-width: 0;
}

.benchmark-card {
  display: grid;
  gap: 20px;
  height: 100%;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px 22px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.benchmark-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.benchmark-card__status {
  flex: 0 0 auto;
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.benchmark-card__status.is-positive {
  color: var(--app-primary-dark, #0e7490);
  background: var(--app-primary-wash, #f0f9ff);
}

.benchmark-card__status.is-warning {
  color: var(--app-primary-dark, #0e7490);
  background: var(--app-primary-wash, #f0f9ff);
}

.benchmark-card__status.is-danger {
  color: var(--app-primary-dark, #0e7490);
  background: var(--app-primary-wash, #f0f9ff);
}

:global(body.dark-only .benchmark-card__status.is-positive) {
  color: #86efac !important;
  background: rgba(34, 197, 94, 0.18);
}

:global(body.dark-only .benchmark-card__status.is-warning) {
  color: #fcd34d !important;
  background: rgba(245, 158, 11, 0.2);
}

:global(body.dark-only .benchmark-card__status.is-danger) {
  color: #fca5a5 !important;
  background: rgba(239, 68, 68, 0.18);
}

.benchmark-bars {
  display: grid;
  align-content: space-between;
  gap: 12px;
  min-width: 0;
}

.benchmark-bar {
  min-width: 0;
}

.benchmark-bar__head,
.progress-row__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.benchmark-bar__head span {
  overflow: hidden;
  color: #73828d;
  font-size: 11.5px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.benchmark-bar__head strong {
  flex: 0 0 auto;
  color: #17212b;
  font-size: 13px;
  font-weight: 700;
}

.benchmark-bar__track,
.progress-row__track {
  overflow: hidden;
  width: 100%;
  height: 7px;
  margin-top: 7px;
  border-radius: 999px;
  background: #edf2f5;
}

.benchmark-bar__fill,
.progress-row__track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--app-primary, #18a6e4);
}

.benchmark-bar__fill--2 {
  background: var(--app-primary, #18a6e4);
}

.benchmark-bar__fill--3 {
  background: var(--app-primary, #18a6e4);
}

.benchmark-bar__fill--4 {
  background: var(--app-primary, #18a6e4);
}

.benchmark-bar__hint {
  display: block;
  margin-top: 4px;
  color: #a2adb5;
  font-size: 9.5px;
}

.benchmark-score {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: space-between;
  gap: 16px;
  height: 100%;
}

.benchmark-score__primary {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 18px;
  border: 1px solid #e8f0f4;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(135deg, var(--app-primary-wash, #f0f9ff), #fff);
}

.benchmark-score__ring {
  display: grid;
  place-items: center;
  width: 124px;
  height: 124px;
  border-radius: 50%;
}

.benchmark-score__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
}

.benchmark-score__center strong {
  color: #17212b;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.1;
}

.benchmark-score__center span {
  max-width: 70px;
  color: #8a97a1;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.2;
}

.benchmark-score__primary-copy {
  display: grid;
  gap: 5px;
}

.benchmark-score__primary-copy strong {
  color: #273642;
  font-size: 13px;
  font-weight: 700;
}

.benchmark-score__primary-copy span {
  color: #84919b;
  font-size: 10.5px;
  line-height: 1.5;
}

.benchmark-score__progress {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
}

.progress-row {
  border: 1px solid #edf1f4;
  border-radius: 14px;
  padding: 14px;
  background: #fff;
}

.progress-row__head {
  font-size: 10px;
}

.progress-row__head span {
  color: #7d8a94;
  font-weight: 500;
}

.progress-row__head strong {
  color: #2c3a45;
  font-size: 10.5px;
  font-weight: 700;
}

.progress-row__track {
  height: 5px;
  margin-top: 5px;
}

@media (max-width: 767px) {
  .benchmark-layout {
    grid-template-columns: 1fr;
  }

  .benchmark-card {
    padding: 18px;
  }

  .benchmark-score {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }

  .benchmark-score__primary,
  .benchmark-score__progress {
    grid-template-columns: minmax(0, 1fr);
  }

  .benchmark-score__primary {
    justify-items: center;
    text-align: center;
  }

  .benchmark-score__ring {
    width: 104px;
    height: 104px;
  }

  .benchmark-score__center {
    width: 80px;
    height: 80px;
  }

  .benchmark-score__center strong {
    font-size: 16px;
  }
}
</style>
