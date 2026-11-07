<template>
  <router-link :to="detailTarget" class="piutang-item" :aria-label="`Lihat detail ${piutang.faskes}`">
    <div class="piutang-item__heading">
      <h3>{{ piutang.faskes }}</h3>
      <strong>{{ formatRupiah(piutang.totalPiutang) }}</strong>
    </div>

    <p class="piutang-item__product">{{ piutang.produk }}</p>
    <p class="piutang-item__invoice">
      {{ piutang.noNota }} <span aria-hidden="true">&bull;</span> {{ formatTermin(piutang) }}
    </p>

    <div class="piutang-item__time" :class="`is-${piutang.status}`">
      <SolarIcon
        :name="piutang.status === 'lunas' ? 'check-circle' : 'clock'"
        :size="17"
        color="currentColor"
        secondary-color="currentColor"
        :secondary-opacity="1"
        aria-hidden="true"
      />
      <span>{{ formatLabelWaktu(piutang) }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { routes } from '@/router/routes'
import type { Piutang, PiutangStatus } from '@/types/piutang'
import { formatLabelWaktu, formatRupiah, formatTermin } from '@/utils/piutang'

const props = defineProps<{
  piutang: Piutang
  sourceTab: PiutangStatus
}>()

const detailTarget = computed(() => ({
  path: routes.CrmAdmin.Piutang,
  query: { tab: props.sourceTab, detail: props.piutang.id },
}))
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

.piutang-item:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.3);
  background: var(--bs-tertiary-bg, #f8fafc);
  transform: translateY(-1px);
}

.piutang-item:focus-visible {
  border-color: var(--app-primary, var(--theme-default, #18a6e4));
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  outline-offset: 2px;
}

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

.piutang-item__time.is-terlambat {
  color: var(--bs-danger, #dc3545);
}

.piutang-item__time.is-lunas {
  color: var(--bs-success, #198754);
}

:global(body.dark-only) .piutang-item {
  border-color: var(--bs-border-color, #34404c);
  background: var(--bs-card-bg, #202730);
  box-shadow: none;
}

:global(body.dark-only) .piutang-item:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.45);
  background: var(--bs-tertiary-bg, #25313c);
}

@media (max-width: 575.98px) {
  .piutang-item__heading {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
