<template>
  <section class="survey-panel">
    <header class="survey-panel__header">
      <div>
        <h1>Pilih Event</h1>
        <p>Pilih event untuk mulai isi survey prospek.</p>
      </div>
    </header>

    <div class="survey-panel__body">
      <button type="button" class="event-card" @click="emit('select')">
        <span class="event-card__icon" aria-hidden="true">
          <SolarIcon
            name="calendar"
            :size="27"
            color="var(--app-primary, #18a6e4)"
          />
        </span>
        <span class="event-card__information">
          <strong>INAHEF 2026</strong>
          <span>10 -12 Agustus 2026</span>
        </span>
        <span class="event-card__prospects">
          <strong>1</strong>
          <span>Prospek</span>
        </span>
        <SolarIcon
          class="event-card__chevron"
          name="alt-arrow-right"
          :size="20"
          aria-hidden="true"
        />
      </button>
    </div>

    <ListPagination
      v-model="currentPage"
      class="survey-pagination"
      :total-pages="totalPages"
      aria-label="Pagination Form Survey"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ListPagination from '@/components/shared/ListPagination.vue'

const emit = defineEmits<{
  select: []
}>()

const currentPage = ref(1)
const totalPages = 1
</script>

<style scoped>
.survey-panel {
  overflow: hidden;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.survey-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #edf1f4;
  padding: 20px 24px;
}

.survey-panel__header h1 {
  margin: 0;
  color: #1c2a36;
  font-size: 18px;
  font-weight: 700;
}

.survey-panel__header p {
  margin: 5px 0 0;
  color: #7d8a94;
  font-size: 12px;
}

.survey-panel__body {
  padding: 22px 24px 24px;
}

.survey-pagination {
  margin: 0 24px 24px;
}

.event-card {
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 16px;
  border: 1px solid #e2e8ed;
  border-radius: 16px;
  padding: 18px 20px;
  color: inherit;
  background: #fff;
  text-align: left;
  box-shadow: 0 4px 14px rgba(31, 55, 75, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.event-card:hover {
  border-color: var(--app-primary-border, #b9dfef);
  box-shadow: 0 10px 24px rgba(31, 75, 105, 0.1);
  transform: translateY(-2px);
}

.event-card:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  outline-offset: 2px;
}

.event-card__icon {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 50%;
  background: var(--app-primary-soft, #dff4fc);
}

.event-card__information,
.event-card__prospects {
  display: grid;
}

.event-card__information {
  gap: 5px;
}

.event-card__information strong {
  color: #29343d;
  font-size: 15px;
  font-weight: 700;
}

.event-card__information span {
  color: #84919c;
  font-size: 11.5px;
}

.event-card__prospects {
  min-width: 64px;
  justify-items: center;
  gap: 3px;
}

.event-card__prospects strong {
  color: var(--app-primary-dark, #0c8fc6);
  font-size: 21px;
  font-weight: 800;
  line-height: 1;
}

.event-card__prospects span {
  color: #7b8994;
  font-size: 10px;
  font-weight: 600;
}

.event-card__chevron {
  color: #95a2ac;
}

@media (max-width: 575px) {
  .survey-panel__header,
  .survey-panel__body {
    padding: 16px 14px;
  }

  .survey-pagination {
    margin: 0 14px 16px;
  }

  .survey-panel__header h1 {
    font-size: 16px;
  }

  .event-card {
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 12px;
    padding: 15px 13px;
  }

  .event-card__icon {
    width: 44px;
    height: 44px;
  }

  .event-card__prospects {
    min-width: 44px;
  }

  .event-card__chevron {
    display: none;
  }
}
</style>
