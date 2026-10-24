<template>
  <article class="coverage-card" aria-labelledby="coverage-title">
    <div class="coverage-card__head">
      <h2 id="coverage-title" class="section-title">Jangkauan Area &amp; Pasar</h2>
    </div>

    <div class="coverage-grid">
      <div v-for="stat in coverage.stats" :key="stat.id" class="coverage-tile">
        <div class="coverage-tile__head">
          <span class="coverage-tile__icon" aria-hidden="true">
            <MhjIcon :name="stat.id === 'area-coverage' ? 'coverage_point_on_map' : 'kpi_pin_list'" :size="20" />
          </span>
          <strong>{{ stat.value }}</strong>
          <span class="coverage-tile__unit">Faskes</span>
        </div>
        <span class="coverage-tile__label">{{ stat.label }}</span>
        <div class="coverage-tile__bar">
          <span class="coverage-tile__bar-fill" :style="{ width: `${clampProgress(stat.progress)}%` }"></span>
        </div>
        <span class="coverage-tile__hint">{{ formatPercent(stat.progress) }} &middot; {{ stat.hint }}</span>
      </div>
    </div>

    <HospitalCoverageMap
      :initial-center="[coverage.highlight.lat, coverage.highlight.lng]"
      :initial-zoom="coverage.highlight.zoom ?? 11"
    />
  </article>
</template>

<script setup lang="ts">
import HospitalCoverageMap from '@/module/dashboard/manager/HospitalCoverageMap.vue'

import type { ManagerAreaCoverage } from '@/types/dashboard/manager'

defineProps<{
  coverage: ManagerAreaCoverage
}>()

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value))
}

function formatPercent(value: number): string {
  return `${value.toLocaleString('id-ID', { maximumFractionDigits: 1 })}%`
}
</script>

<style scoped>
.coverage-card {
  display: grid;
  gap: 16px;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.coverage-card__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.coverage-tile {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #edf1f4;
  border-radius: 14px;
  padding: 14px;
  background: #f9fbfc;
}

.coverage-tile__head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coverage-tile__icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  color: var(--app-primary, #18a6e4);
  background: var(--app-primary-wash, #e5f5fc);
}

.coverage-tile__head strong {
  color: #17212b;
  font-size: 19px;
  font-weight: 700;
}

.coverage-tile__unit {
  color: #93a0aa;
  font-size: 11px;
  font-weight: 600;
}

.coverage-tile__label {
  color: #6b7a86;
  font-size: 12px;
  font-weight: 500;
}

.coverage-tile__bar {
  overflow: hidden;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #eef2f5;
}

.coverage-tile__bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--app-primary, #18a6e4);
}

.coverage-tile__hint {
  color: #93a0aa;
  font-size: 10.5px;
}

@media (max-width: 420px) {
  .coverage-grid {
    grid-template-columns: 1fr;
  }
}
</style>
