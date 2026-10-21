<template>
  <div class="container-fluid manager-dashboard">
    <div v-if="loading && !data" class="manager-dashboard__loading" role="status">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span>Memuat dashboard...</span>
    </div>

    <template v-else-if="data">
      <header class="manager-dashboard__header">
        <div>
          <p class="manager-dashboard__eyebrow">Ringkasan kinerja</p>
          <h1>Selamat datang, {{ data.greetingName }}</h1>
          <p>Pantau target, peluang, dan aktivitas tim dalam satu tampilan.</p>
        </div>
        <QuickActions :actions="data.quickActions" />
      </header>

      <KeyMetricsGrid :kpis="data.kpis" />

      <div class="manager-dashboard__content">
        <div class="manager-dashboard__row manager-dashboard__row--overview">
          <TargetBenchmarkSummary :benchmark="data.benchmark" />
          <section class="manager-dashboard__promo-card" aria-label="Promo terbaru">
            <PromoCarousel :slides="promoSlides" :loading="promoLoading" />
          </section>
        </div>
        <div class="manager-dashboard__row manager-dashboard__row--details">
          <AreaMarketCoverage :coverage="data.coverage" />
          <RecentActivity :activities="data.activities" />
        </div>
      </div>
    </template>

    <div v-else class="manager-dashboard__empty" role="alert">
      Dashboard belum dapat dimuat.
      <button type="button" class="btn btn-primary btn-sm" @click="loadDashboard">
        Coba lagi
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useManagerDashboard } from '@/composable/useManagerDashboard'
import AreaMarketCoverage from '@/module/dashboard/manager/AreaMarketCoverage.vue'
import KeyMetricsGrid from '@/module/dashboard/manager/KeyMetricsGrid.vue'
import PromoCarousel from '@/module/dashboard/manager/PromoCarousel.vue'
import QuickActions from '@/module/dashboard/manager/QuickActions.vue'
import RecentActivity from '@/module/dashboard/manager/RecentActivity.vue'
import TargetBenchmarkSummary from '@/module/dashboard/manager/TargetBenchmarkSummary.vue'

const {
  data,
  loading,
  promoSlides,
  promoLoading,
  loadManagerDashboard,
  loadPromoSlides,
} = useManagerDashboard()

function loadDashboard() {
  void Promise.all([loadManagerDashboard(), loadPromoSlides()])
}

onMounted(loadDashboard)
</script>

<style scoped>
.manager-dashboard {
  --app-primary: var(--theme-default, #18a6e4);
  --app-primary-dark: #0e7490;
  --app-primary-wash: #eaf7fd;
  display: grid;
  gap: 22px;
  padding-bottom: 28px;
}

.manager-dashboard__header {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(420px, 1.2fr);
  align-items: center;
  gap: 24px;
  border: 1px solid #e9edf1;
  border-radius: 20px;
  padding: 22px 24px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.manager-dashboard__eyebrow {
  margin: 0 0 5px;
  color: var(--app-primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.manager-dashboard__header h1 {
  margin: 0;
  color: #17212b;
  font-size: clamp(22px, 2vw, 30px);
  font-weight: 700;
  line-height: 1.2;
}

.manager-dashboard__header p:last-child {
  margin: 7px 0 0;
  color: #7d8a94;
  font-size: 13px;
}

.manager-dashboard__content {
  display: grid;
  gap: 18px;
}

.manager-dashboard__row {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(320px, 0.7fr);
  gap: 18px;
  min-width: 0;
}

.manager-dashboard__row--overview {
  align-items: stretch;
}

.manager-dashboard__row--details {
  align-items: start;
}

.manager-dashboard__promo-card {
  min-width: 0;
  height: 100%;
  overflow: hidden;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.manager-dashboard__loading,
.manager-dashboard__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 320px;
  border: 1px dashed #dce4e9;
  border-radius: 18px;
  color: #7d8a94;
  background: #fff;
  font-size: 13px;
}

.manager-dashboard__empty {
  flex-direction: column;
}

@media (max-width: 1199px) {
  .manager-dashboard__header,
  .manager-dashboard__row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .manager-dashboard {
    gap: 16px;
  }

  .manager-dashboard__header {
    gap: 16px;
    padding: 18px;
  }

}
</style>
