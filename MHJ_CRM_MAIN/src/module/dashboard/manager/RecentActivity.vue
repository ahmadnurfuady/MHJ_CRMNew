<template>
  <article class="activity-card" aria-labelledby="activity-title">
    <div class="activity-card__head">
      <h2 id="activity-title" class="section-title">Aktivitas Terbaru</h2>
      <router-link to="/crmAdmin/task" class="activity-card__link">Lihat Semua</router-link>
    </div>

    <ul v-if="activities.length" class="activity-list">
      <li v-for="activity in activities" :key="activity.id" class="activity-item">
        <span class="activity-item__icon" :class="`is-${activity.type}`" aria-hidden="true">
          <SolarIcon :name="activity.icon" :size="18" />
        </span>
        <div class="activity-item__body">
          <strong>{{ activity.title }}</strong>
          <span>{{ activity.subtitle }}</span>
        </div>
        <time class="activity-item__time">{{ activity.time }}</time>
      </li>
    </ul>

    <div v-else class="activity-empty">Belum ada aktivitas terbaru.</div>
  </article>
</template>

<script setup lang="ts">
import type { ActivityItem } from '@/types/dashboard/manager'

defineProps<{
  activities: ActivityItem[]
}>()
</script>

<style scoped>
.activity-card {
  display: grid;
  gap: 14px;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.activity-card__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.activity-card__link {
  color: var(--app-primary, #18a6e4);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.activity-card__link:hover {
  text-decoration: underline;
}

.activity-list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.activity-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
}

.activity-item__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  color: var(--app-primary, #18a6e4);
  background: var(--app-primary-wash, #e5f5fc);
}

.activity-item__icon.is-meeting {
  color: #7c3aed;
  background: #ede9fe;
}

.activity-item__icon.is-email {
  color: #b45309;
  background: #fef3c7;
}

.activity-item__body {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.activity-item__body strong {
  overflow: hidden;
  color: #29343d;
  font-size: 12.5px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.activity-item__body span {
  overflow: hidden;
  color: #93a0aa;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.activity-item__time {
  flex: 0 0 auto;
  color: #b7bfc5;
  font-size: 10.5px;
  white-space: nowrap;
}

.activity-empty {
  color: #93a0aa;
  font-size: 12.5px;
  text-align: center;
}
</style>
