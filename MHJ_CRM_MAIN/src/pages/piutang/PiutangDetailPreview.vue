<template>
  <div class="container-fluid piutang-detail-page">
    <section class="detail-panel">
      <div class="detail-panel__header">
        <div class="customer-icon" aria-hidden="true">
          <SolarIcon
            name="hospital"
            :size="27"
            color="currentColor"
            secondary-color="currentColor"
            :secondary-opacity="0.35"
          />
        </div>

        <div class="customer-identity">
          <span>Pelanggan</span>
          <h1>{{ piutang.faskes || '-' }}</h1>
          <p>{{ piutang.produk || 'Deskripsi belum tersedia' }}</p>
        </div>

        <span class="status-badge" :class="`is-${piutang.status}`">
          {{ statusLabel }}
        </span>
      </div>

      <div class="detail-panel__body">
        <section class="receivable-card">
          <div class="section-heading">
            <div>
              <p>Informasi tagihan</p>
              <h2>Rincian Piutang</h2>
            </div>
            <div class="section-heading__icon" aria-hidden="true">
              <SolarIcon name="bill-list" :size="22" color="currentColor" />
            </div>
          </div>

          <dl class="detail-list">
            <div>
              <dt>Nomor nota</dt>
              <dd>{{ piutang.noNota || '-' }}</dd>
            </div>
            <div>
              <dt>Termin pembayaran</dt>
              <dd>{{ formatTermin(piutang) }}</dd>
            </div>
            <div>
              <dt>Status waktu</dt>
              <dd class="time-value" :class="`is-${piutang.status}`">
                <SolarIcon
                  name="calendar"
                  :size="17"
                  color="currentColor"
                />
                {{ formatLabelWaktu(piutang) }}
              </dd>
            </div>
          </dl>
        </section>

        <aside class="amount-card">
          <span>Nilai piutang</span>
          <strong>{{ formatRupiah(piutang.totalPiutang) }}</strong>
          <p>Nilai piutang yang tercatat pada invoice ini.</p>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Piutang } from '@/types/piutang'
import { formatLabelWaktu, formatRupiah, formatTermin } from '@/utils/piutang'

const props = defineProps<{
  piutang: Piutang
}>()

const statusLabel = computed(() => {
  if (props.piutang.status === 'on_progress') return 'On Progress'
  if (props.piutang.status === 'terlambat') return 'Terlambat'
  return 'Lunas'
})
</script>

<style scoped>
.piutang-detail-page {
  --piutang-primary: var(--app-primary, var(--theme-default, #18a6e4));
  --piutang-primary-rgb: var(--app-primary-rgb, 24, 166, 228);
  padding-block: 12px 28px;
}

.section-heading p,
.customer-identity > span,
.amount-card > span {
  margin: 0;
  color: var(--bs-secondary-color, #73808d);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.status-badge {
  margin-left: auto;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 700;
}

.status-badge.is-on_progress {
  border: 1px solid rgba(var(--piutang-primary-rgb), 0.22);
  background: rgba(var(--piutang-primary-rgb), 0.1);
  color: var(--piutang-primary);
}

.status-badge.is-terlambat {
  border: 1px solid rgba(220, 53, 69, 0.18);
  background: rgba(220, 53, 69, 0.1);
  color: var(--bs-danger, #dc3545);
}

.status-badge.is-lunas {
  border: 1px solid rgba(25, 135, 84, 0.18);
  background: rgba(25, 135, 84, 0.1);
  color: var(--bs-success, #198754);
}

.detail-panel {
  overflow: hidden;
  border: 1px solid var(--bs-border-color, #e9edf1);
  border-radius: 18px;
  background: var(--bs-card-bg, #ffffff);
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.detail-panel__header {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--bs-border-color, #e8ecef);
  padding: 22px 24px;
}

.customer-icon,
.section-heading__icon {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  background: rgba(var(--piutang-primary-rgb), 0.1);
  color: var(--piutang-primary);
}

.customer-icon {
  width: 50px;
  height: 50px;
}

.customer-identity {
  min-width: 0;
}

.customer-identity h1 {
  margin: 3px 0 2px;
  color: var(--bs-heading-color, #17212b);
  font-size: 19px;
  font-weight: 700;
}

.customer-identity p {
  margin: 0;
  color: var(--bs-secondary-color, #64748b);
  font-size: 13px;
}

.detail-panel__body {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.7fr);
  gap: 16px;
  padding: 24px;
}

.receivable-card,
.amount-card {
  border: 1px solid var(--bs-border-color, #e2e8f0);
  border-radius: 12px;
  background: var(--bs-card-bg, #ffffff);
  box-shadow: 0 3px 12px rgba(27, 43, 65, 0.05);
}

.receivable-card {
  padding: 20px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--bs-border-color, #e8ecef);
  padding-bottom: 15px;
}

.section-heading h2 {
  margin: 3px 0 0;
  color: var(--bs-heading-color, #17212b);
  font-size: 17px;
  font-weight: 700;
}

.section-heading__icon {
  width: 40px;
  height: 40px;
}

.detail-list {
  margin: 5px 0 0;
}

.detail-list > div {
  display: grid;
  grid-template-columns: minmax(130px, 0.55fr) minmax(0, 1fr);
  gap: 18px;
  border-bottom: 1px solid var(--bs-border-color, #edf0f2);
  padding: 15px 0;
}

.detail-list > div:last-child {
  border-bottom: 0;
  padding-bottom: 2px;
}

.detail-list dt {
  color: var(--bs-secondary-color, #73808d);
  font-size: 12px;
  font-weight: 500;
}

.detail-list dd {
  margin: 0;
  color: var(--bs-heading-color, #263442);
  font-size: 13px;
  font-weight: 700;
  text-align: right;
}

.time-value {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
}

.time-value.is-on_progress {
  color: var(--piutang-primary);
}

.time-value.is-terlambat {
  color: var(--bs-danger, #dc3545);
}

.time-value.is-lunas {
  color: var(--bs-success, #198754);
}

.amount-card {
  display: flex;
  min-height: 210px;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
}

.amount-card strong {
  display: block;
  margin-top: 8px;
  color: var(--piutang-primary);
  font-size: clamp(20px, 2vw, 27px);
  font-weight: 800;
  line-height: 1.25;
}

.amount-card p {
  margin: 10px 0 0;
  color: var(--bs-secondary-color, #73808d);
  font-size: 12px;
  line-height: 1.55;
}

:global(body.dark-only) .detail-panel,
:global(body.dark-only) .receivable-card,
:global(body.dark-only) .amount-card {
  box-shadow: none;
}

@media (max-width: 991.98px) {
  .detail-panel__body {
    grid-template-columns: 1fr;
  }

  .amount-card {
    min-height: 0;
  }
}

@media (max-width: 575.98px) {
  .status-badge {
    padding-inline: 9px;
    font-size: 10px;
  }

  .detail-panel {
    border-radius: 12px;
  }

  .detail-panel__header,
  .detail-panel__body {
    padding: 16px;
  }

  .detail-list > div {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .detail-list dd,
  .time-value {
    justify-content: flex-start;
    text-align: left;
  }
}
</style>
