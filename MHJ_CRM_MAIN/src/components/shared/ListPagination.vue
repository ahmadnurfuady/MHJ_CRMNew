<template>
  <div class="list-pagination card-footer">
    <span class="text-muted f-14">Halaman {{ safePage }} dari {{ safeTotalPages }}</span>

    <div class="pagination-actions" role="group" :aria-label="ariaLabel">
      <button
        class="btn btn-outline-primary btn-sm pagination-button"
        type="button"
        :disabled="loading || safePage <= 1"
        @click="setPage(safePage - 1)"
      >
        <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
      </button>

      <div class="pagination-pages" aria-label="Pilih halaman">
        <template v-for="item in visiblePages" :key="String(item)">
          <span v-if="typeof item === 'string'" class="pagination-ellipsis" aria-hidden="true">
            &hellip;
          </span>
          <button
            v-else
            class="btn btn-sm pagination-page-button"
            :class="{ 'pagination-page-button--active': item === safePage }"
            type="button"
            :disabled="loading || item === safePage"
            :aria-current="item === safePage ? 'page' : undefined"
            :aria-label="`Ke halaman ${item}`"
            @click="setPage(item)"
          >
            {{ item }}
          </button>
        </template>
      </div>

      <button
        class="btn btn-outline-primary btn-sm pagination-button"
        type="button"
        :disabled="loading || safePage >= safeTotalPages"
        @click="setPage(safePage + 1)"
      >
        Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: number
    totalPages: number
    loading?: boolean
    ariaLabel?: string
  }>(),
  {
    loading: false,
    ariaLabel: 'Pagination',
  },
)

const emit = defineEmits<{
  'update:modelValue': [page: number]
}>()

const safeTotalPages = computed(() => Math.max(1, props.totalPages))
const safePage = computed(() => Math.min(Math.max(1, props.modelValue), safeTotalPages.value))

const visiblePages = computed<Array<number | string>>(() => {
  const total = safeTotalPages.value
  const current = safePage.value

  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1)

  const pages = new Set([1, total, current - 1, current, current + 1])
  if (current <= 3) {
    pages.add(2)
    pages.add(3)
    pages.add(4)
  }
  if (current >= total - 2) {
    pages.add(total - 3)
    pages.add(total - 2)
    pages.add(total - 1)
  }

  const sortedPages = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b)
  const result: Array<number | string> = []
  sortedPages.forEach((page, index) => {
    if (index > 0 && page - sortedPages[index - 1] > 1) result.push(`ellipsis-${page}`)
    result.push(page)
  })
  return result
})

function setPage(page: number): void {
  if (props.loading) return
  emit('update:modelValue', Math.min(Math.max(1, page), safeTotalPages.value))
}
</script>

<style scoped>
.list-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-top: 1px solid var(--bs-border-color, #e2e8f0);
  padding: 14px 0 0;
  background: transparent;
}

.pagination-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}

.pagination-pages {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-page-button {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem !important;
  padding: 0;
  background: #fff;
  color: #475569;
  font-weight: 600;
}

.pagination-page-button:hover:not(:disabled) {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary, #18a6e4);
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
  color: #fff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}

:global(body.dark-only) .pagination-page-button {
  border-color: var(--bs-border-color, #475569);
  background: var(--bs-body-bg, #1f2937);
  color: var(--bs-body-color, #e2e8f0);
}

:global(body.dark-only) .pagination-page-button--active,
:global(body.dark-only) .pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
  color: #fff;
}

@media (max-width: 575.98px) {
  .list-pagination {
    align-items: stretch;
    flex-direction: column;
  }

  .pagination-actions {
    justify-content: space-between;
  }

  .pagination-pages {
    order: 3;
    width: 100%;
    justify-content: center;
  }
}
</style>
