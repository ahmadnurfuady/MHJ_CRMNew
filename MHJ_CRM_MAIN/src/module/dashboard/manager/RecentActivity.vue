<template>
  <article class="activity-card" aria-labelledby="activity-title">
    <div class="activity-card__head">
      <h2 id="activity-title" class="section-title">Aktivitas Terbaru</h2>
      <router-link :to="routes.CrmAdmin.Logs" class="activity-card__link">Lihat Semua</router-link>
    </div>

    <ul v-if="activities.length" class="activity-list">
      <li v-for="activity in activities" :key="activity.id" class="activity-item">
        <span
          class="activity-item__icon"
          :class="activity.action ? `is-${activity.action}` : `is-${activity.type}`"
          aria-hidden="true"
        >
          <MhjIcon
            v-if="activity.mhjIcon"
            :name="activity.mhjIcon"
            :size="24"
            :color="activityIconColor(activity.action)"
            :secondary-color="activityIconColor(activity.action)"
            single-color
          />
          <SolarIcon
            v-else
            :name="activity.icon"
            :size="20"
            :color="activityIconColor(activity.action)"
            :secondary-color="activityIconColor(activity.action)"
            :secondary-opacity="1"
          />
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
import { routes } from '@/router/routes'
import type { ActivityItem } from '@/types/dashboard/manager'

defineProps<{
  activities: ActivityItem[]
}>()

function activityIconColor(action?: ActivityItem['action']): string {
  if (action === 'i') return '#22b573'
  if (action === 'd') return '#ef5b68'
  return 'var(--app-primary, #18a6e4)'
}
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
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.activity-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

.activity-item + .activity-item {
  border-top: 1px solid #f0f3f5;
}

.activity-item__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  color: var(--dashboard-icon-primary, var(--app-primary, #18a6e4));
  background: var(--dashboard-icon-surface, rgba(var(--app-primary-rgb, 24, 166, 228), 0.1));
}

.activity-item__icon.is-meeting {
  background: var(--dashboard-icon-surface-strong, rgba(var(--app-primary-rgb, 24, 166, 228), 0.14));
}

.activity-item__icon.is-email {
  background: var(--dashboard-icon-surface, rgba(var(--app-primary-rgb, 24, 166, 228), 0.1));
}

.activity-item__icon:is(.is-task, .is-note) {
  color: var(--dashboard-icon-primary, var(--app-primary, #18a6e4));
  background: var(--dashboard-icon-surface-strong, rgba(var(--app-primary-rgb, 24, 166, 228), 0.14));
}

.activity-item__icon.is-i {
  color: #22b573;
  background: rgba(34, 181, 115, 0.1);
}

.activity-item__icon.is-u {
  color: var(--app-primary-dark, #087fad);
  background: var(--app-primary-wash, #eaf8fd);
}

.activity-item__icon.is-d {
  color: #ef5b68;
  background: rgba(239, 91, 104, 0.1);
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

@media (max-width: 575px) {
  .activity-card {
    padding: 16px 14px;
  }

  .activity-item {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
    gap: 10px;
  }

  .activity-item__time {
    grid-column: 2;
    margin-top: -7px;
  }
}
</style>
