<template>
  <article class="hospital-panel" aria-labelledby="hospital-panel-title">
    <header class="hospital-panel__head">
      <div>
        <h2 id="hospital-panel-title" class="section-title">Cakupan Faskes</h2>
        <small class="hospital-panel__hint">Peluang aktif per rumah sakit</small>
      </div>
      <span class="hospital-panel__total">
        <strong>{{ hospitals.length }}</strong>
        <em>faskes</em>
      </span>
    </header>

    <div v-if="loading" class="hospital-panel__state" role="status">Memuat daftar faskes...</div>
    <div v-else-if="!hospitals.length" class="hospital-panel__state">Belum ada data faskes.</div>
    <ul v-else class="hospital-panel__list">
      <li v-for="hospital in hospitals" :key="hospital.id">
        <div class="hospital-row__main">
          <strong :title="hospital.name">{{ hospital.name }}</strong>
          <small>
            <span v-if="hospital.city">{{ hospital.city }}</span>
            <span v-if="hospital.province">· {{ hospital.province }}</span>
            <span v-if="hospital.type" class="hospital-row__type">{{ hospital.type }}</span>
          </small>
        </div>
        <span
          class="hospital-row__count"
          :class="{ 'hospital-row__count--empty': toNumber(hospital.active_projects_count) === 0 }"
          :aria-label="`${toNumber(hospital.active_projects_count)} peluang aktif`"
        >
          {{ toNumber(hospital.active_projects_count) }}
          <em>peluang aktif</em>
        </span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { HospitalMapPoint } from '@/services/analyticsService'

defineProps<{
  hospitals: HospitalMapPoint[]
  loading?: boolean
}>()

function toNumber(value: number | string | null | undefined): number {
  if (value === null || value === undefined) return 0
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}
</script>

<style scoped>
.hospital-panel {
  display: grid;
  gap: 14px;
  min-width: 0;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.hospital-panel__head {
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

.hospital-panel__hint {
  color: #8c98a3;
  font-size: 11px;
}

.hospital-panel__total {
  display: flex;
  align-items: baseline;
  gap: 6px;
  border: 1px solid #edf1f4;
  border-radius: 12px;
  padding: 8px 12px;
  background: #f9fbfc;
}

.hospital-panel__total strong {
  color: #1c2a36;
  font-size: 18px;
  font-weight: 800;
}

.hospital-panel__total em {
  color: #93a0aa;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.hospital-panel__list {
  display: grid;
  gap: 10px;
  max-height: 360px;
  margin: 0;
  overflow-y: auto;
  padding: 2px;
  list-style: none;
}

.hospital-panel__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid #edf1f4;
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
}

.hospital-row__main {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.hospital-row__main strong {
  overflow: hidden;
  color: #1c2a36;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hospital-row__main small {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: #8c98a3;
  font-size: 10.5px;
}

.hospital-row__type {
  color: var(--app-primary-dark, #0e7490);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
  border-radius: 999px;
  padding: 1px 7px;
  font-weight: 700;
}

.hospital-row__count {
  display: grid;
  flex: 0 0 auto;
  justify-items: center;
  gap: 2px;
  border: 1px solid #d7edf5;
  border-radius: 10px;
  padding: 6px 10px;
  color: var(--app-primary-dark, #0e7490);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08);
  font-size: 16px;
  font-weight: 800;
  text-align: center;
}

.hospital-row__count em {
  color: #93a0aa;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hospital-row__count--empty {
  border-color: #eef2f5;
  color: #93a0aa;
  background: #f6f8fa;
}

.hospital-panel__state {
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
</style>
