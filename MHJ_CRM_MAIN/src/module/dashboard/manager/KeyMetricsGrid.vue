<template>
  <section class="key-metrics" aria-labelledby="key-metrics-title">
    <div class="key-metrics__head">
      <h2 id="key-metrics-title" class="section-title">Kinerja Utama</h2>
    </div>

    <div class="key-metrics-grid">
      <article v-for="kpi in kpis" :key="kpi.id" class="kpi-card">
        <div class="kpi-card__icon" aria-hidden="true">
          <SolarIcon
            :name="resolveKpiIcon(kpi.id)"
            :size="24"
            color="currentColor"
            aria-hidden="true"
          />
        </div>
        <strong class="kpi-card__value">{{ kpi.value }}</strong>
        <span class="kpi-card__label">{{ kpi.label }}</span>
        <div class="kpi-card__bar">
          <span class="kpi-card__bar-fill" :style="{ width: `${clampProgress(kpi.progress)}%` }"></span>
        </div>
        <span class="kpi-card__sublabel">{{ kpi.sublabel }}</span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ManagerKpiCard } from '@/types/dashboard/manager'
defineProps<{
  kpis: ManagerKpiCard[]
}>()

const KPI_ICONS: Record<string, string> = {
  'target-omset': 'cart',
  'win-rate': 'graph',
  'cakupan-pasar': 'star',
  'funnel-aktif': 'pin',
}

function resolveKpiIcon(id: string): string {
  return KPI_ICONS[id] ?? 'graph'
}

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value))
}
</script>

<style scoped>
.key-metrics {
  display: grid;
  gap: 14px;
  border: 1px solid #e9edf1;
  border-radius: 20px;
  padding: 20px 22px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.key-metrics__head {
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

.key-metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.kpi-card {
  --kpi-accent: var(--app-primary, #18a6e4);
  --kpi-accent-soft: var(--app-primary-wash, #f0f9ff);
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #edf1f4;
  border-radius: 16px;
  padding: 16px;
  background: #fff;
}

.kpi-card__icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
  border-radius: 12px;
  color: var(--dashboard-icon-primary, var(--kpi-accent, var(--app-primary, #18a6e4)));
  background: var(--dashboard-icon-surface, var(--kpi-accent-soft, var(--app-primary-wash, #f0f9ff)));
}

.kpi-card__value {
  color: #17212b;
  font-size: 21px;
  font-weight: 700;
  line-height: 1.2;
}

.kpi-card__label {
  color: #6b7a86;
  font-size: 12.5px;
  font-weight: 500;
}

.kpi-card__bar {
  overflow: hidden;
  width: 100%;
  height: 6px;
  margin-top: 6px;
  border-radius: 999px;
  background: #eef2f5;
}

.kpi-card__bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--kpi-accent, var(--app-primary, #18a6e4));
  transition: width 0.4s ease;
}

.kpi-card__sublabel {
  color: #93a0aa;
  font-size: 11px;
}

@media (min-width: 992px) {
  .key-metrics-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 420px) {
  .kpi-card {
    padding: 14px;
  }

  .kpi-card__icon {
    width: 38px;
    height: 38px;
  }

  .kpi-card__value {
    font-size: 19px;
  }
}
</style>
