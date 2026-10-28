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
              color="var(--dashboard-icon-primary, var(--app-primary, #18a6e4))"
              secondary-color="var(--dashboard-icon-primary, var(--app-primary, #18a6e4))"
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
              color="var(--dashboard-icon-primary, var(--app-primary, #18a6e4))"
              secondary-color="var(--dashboard-icon-primary, var(--app-primary, #18a6e4))"
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
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.quick-actions__item.is-disabled {
  cursor: default;
}

.quick-actions__item.is-disabled .quick-actions__label {
  opacity: 0.55;
}

.quick-actions__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--dashboard-icon-primary, var(--app-primary, #18a6e4));
  background: var(--dashboard-icon-surface, rgba(var(--app-primary-rgb, 24, 166, 228), 0.1));
}

.quick-actions__icon :deep([data-mhj-icon='action_folder'] svg path:first-child) {
  opacity: 0.72;
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

:global(body.dark-only .quick-actions__badge) {
  color: #fcd34d !important;
  background: rgba(245, 158, 11, 0.2);
}

@media (max-width: 767px) {
  .quick-actions__list {
    gap: 6px;
  }

  .quick-actions__item {
    padding-inline: 4px;
  }

  .quick-actions__icon {
    width: 44px;
    height: 44px;
  }

  .quick-actions__label {
    font-size: 10.5px;
  }
}

@media (max-width: 575px) {
  .quick-actions__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
