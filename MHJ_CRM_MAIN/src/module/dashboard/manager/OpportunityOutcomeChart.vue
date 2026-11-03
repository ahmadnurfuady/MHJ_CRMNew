<template>
  <article class="outcome-card" aria-labelledby="outcome-title">
    <div class="outcome-card__head">
      <h2 id="outcome-title" class="section-title">Peluang Win vs Lost</h2>
      <span class="outcome-card__total">{{ total }} peluang</span>
    </div>

    <div class="outcome-chart">
      <div v-for="item in chartItems" :key="item.id" class="outcome-chart__row">
        <div class="outcome-chart__meta">
          <span class="outcome-chart__label">
            <i :class="`is-${item.id}`" aria-hidden="true"></i>
            {{ item.label }}
          </span>
          <strong>{{ item.value }}</strong>
        </div>
        <div
          class="outcome-chart__track"
          role="img"
          :aria-label="`${item.label} ${item.value} peluang, ${formatPercent(item.percent)}`"
        >
          <span
            :class="`is-${item.id}`"
            :style="{ width: `${item.percent}%` }"
          ></span>
        </div>
        <small>{{ formatPercent(item.percent) }} dari peluang selesai</small>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ManagerOpportunityOutcome } from '@/types/dashboard/manager'

const props = defineProps<{
  outcome: ManagerOpportunityOutcome
}>()

const total = computed(() => props.outcome.won + props.outcome.lost)
const chartItems = computed(() => [
  {
    id: 'win',
    label: 'Win',
    value: props.outcome.won,
    percent: total.value > 0 ? (props.outcome.won / total.value) * 100 : 0,
  },
  {
    id: 'lost',
    label: 'Lost',
    value: props.outcome.lost,
    percent: total.value > 0 ? (props.outcome.lost / total.value) * 100 : 0,
  },
])

function formatPercent(value: number): string {
  return `${value.toLocaleString('id-ID', { maximumFractionDigits: 1 })}%`
}
</script>

<style scoped>
.outcome-card {
  display: grid;
  align-content: start;
  gap: 24px;
  min-width: 0;
  border: 1px solid #e9edf1;
  border-radius: 20px;
  padding: 20px 22px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.outcome-card__head,
.outcome-chart__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.outcome-card__total {
  border-radius: 999px;
  padding: 5px 10px;
  color: #64748b;
  background: #f1f5f9;
  font-size: 10.5px;
  font-weight: 700;
}

.outcome-chart {
  display: grid;
  gap: 24px;
}

.outcome-chart__row {
  display: grid;
  gap: 8px;
}

.outcome-chart__label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  font-size: 12.5px;
  font-weight: 700;
}

.outcome-chart__label i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.outcome-chart__meta strong {
  color: #17212b;
  font-size: 22px;
  line-height: 1;
}

.outcome-chart__track {
  overflow: hidden;
  width: 100%;
  height: 14px;
  border-radius: 999px;
  background: #eef2f5;
}

.outcome-chart__track span {
  display: block;
  min-width: 0;
  height: 100%;
  border-radius: inherit;
  transition: width 0.4s ease;
}

.outcome-chart__label i.is-win,
.outcome-chart__track span.is-win {
  background: #22a06b;
}

.outcome-chart__label i.is-lost,
.outcome-chart__track span.is-lost {
  background: #e05252;
}

.outcome-chart__row small {
  color: #93a0aa;
  font-size: 10.5px;
}
</style>
