<template>
  <section class="quick-actions" aria-label="Aksi cepat">
    <ul class="quick-actions__list">
      <li v-for="action in actions" :key="action.id">
        <router-link
          v-if="action.to && !action.comingSoon"
          :to="action.to"
          class="quick-actions__item"
        >
          <span class="quick-actions__icon" aria-hidden="true">
            <MhjIcon
              :name="resolveQuickActionIcon(action.id)"
              :size="24"
              color="var(--app-primary-dark, #0e7490)"
              secondary-color="var(--app-secondary, #84d7eb)"
            />
          </span>
          <span class="quick-actions__label">{{ action.label }}</span>
        </router-link>
        <span
          v-else
          class="quick-actions__item is-disabled"
          :title="action.comingSoon ? 'Segera hadir' : undefined"
        >
          <span class="quick-actions__icon" aria-hidden="true">
            <MhjIcon
              :name="resolveQuickActionIcon(action.id)"
              :size="24"
              color="var(--app-primary-dark, #0e7490)"
              secondary-color="var(--app-secondary, #84d7eb)"
            />
          </span>
          <span class="quick-actions__label">{{ action.label }}</span>
          <span v-if="action.comingSoon" class="quick-actions__badge">Segera hadir</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ManagerQuickAction } from '@/types/dashboard/manager'
import type { MhjIconName } from '@/utils/mhjIcons'

defineProps<{
  actions: ManagerQuickAction[]
}>()

const QUICK_ACTION_ICONS: Record<string, MhjIconName> = {
  'materi-dokumen': 'action_folder',
  'kalender-tugas': 'action_calendar_tugas',
  promo: 'action_promo_ticket',
  'form-survey': 'action_form_survey',
}

function resolveQuickActionIcon(id: string): MhjIconName {
  return QUICK_ACTION_ICONS[id] ?? 'action_add'
}
</script>

<style scoped>
.quick-actions__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.quick-actions__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 6px;
  border-radius: 16px;
  color: inherit;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease;
}

a.quick-actions__item:hover,
a.quick-actions__item:focus-visible {
  background: rgba(var(--app-secondary-rgb, 132, 215, 235), 0.12);
}

.quick-actions__item.is-disabled {
  cursor: default;
  opacity: 0.6;
}

.quick-actions__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--app-primary, #18a6e4);
  background: rgba(var(--app-secondary-rgb, 132, 215, 235), 0.16);
}

.quick-actions__label {
  color: #3d4a54;
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.3;
}

.quick-actions__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 999px;
  padding: 2px 6px;
  color: #8a6d00;
  background: #fff3cd;
  font-size: 8.5px;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 420px) {
  .quick-actions__icon {
    width: 42px;
    height: 42px;
  }

  .quick-actions__label {
    font-size: 10.5px;
  }
}
</style>
