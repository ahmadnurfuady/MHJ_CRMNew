<template>
  <Modal
    :modal-open="open"
    title="Status Pemesanan"
    size-class="modal-lg"
    dialog-class="modal-dialog-scrollable order-tracking-dialog"
    content-class="order-tracking-modal"
    :modal-centered="true"
    @close-modal="$emit('close')"
  >
    <div class="modal-body tracking-body">
      <header class="tracking-head">
        <div>
          <span class="tracking-eyebrow">Progres pemesanan</span>
          <h5>{{ project.companyName || 'Peluang' }}</h5>
        </div>
        <span class="tracking-badge" :class="{ complete: isComplete }">
          <SolarIcon :name="isComplete ? 'check' : 'clock'" :size="15" />
          {{ completedSteps }} dari {{ totalSteps }} tahap
        </span>
      </header>

      <div v-if="loading" class="tracking-state">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Memuat status pemesanan...
      </div>

      <p v-else-if="error" class="tracking-state tracking-state--error">
        <SolarIcon name="fa-circle-exclamation" :size="16" />
        {{ error }}
      </p>

      <ol v-else class="tracking-steps">
        <li
          v-for="(step, index) in milestones"
          :key="step.milestone_id"
          class="tracking-step"
          :class="{ 'is-complete': step.is_completed }"
        >
          <span class="step-marker">
            <SolarIcon v-if="step.is_completed" name="check" :size="17" />
            <span v-else>{{ index + 1 }}</span>
          </span>

          <div class="step-body">
            <strong>{{ step.nama }}</strong>
            <div class="step-meta">
              <time v-if="step.completed_at" :datetime="step.completed_at">
                {{ step.completed_time || '--:--' }} · {{ formatDate(step.completed_date) }}
              </time>
              <span v-else class="step-pending">--:-- · belum selesai</span>
              <span v-if="step.no_referensi_erp" class="step-ref">
                <SolarIcon name="hashtag" :size="12" />{{ step.no_referensi_erp }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="modal-footer">
      <button class="btn btn-light" type="button" @click="$emit('close')">Tutup</button>
      <button class="btn btn-primary" type="button" :disabled="loading" @click="load">
        <SolarIcon name="fa-rotate-right" :size="14" />
        Muat ulang
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import Modal from '@/components/shared/Modal.vue'
import { fetchOrderTracking, type OrderMilestone } from '@/services/projectOrderService'
import type { Projects } from '@/types/project'
import { getUserErrorMessage } from '@/utils/errorParser'

const props = defineProps<{ open: boolean; project: Projects }>()
defineEmits<{ close: [] }>()

const milestones = ref<OrderMilestone[]>([])
const totalSteps = ref(0)
const completedSteps = ref(0)
const isComplete = ref(false)
const loading = ref(false)
const error = ref('')

async function load(): Promise<void> {
  loading.value = true
  error.value = ''
  try {
    const result = await fetchOrderTracking(props.project.id)
    milestones.value = result.milestones
    totalSteps.value = result.totalSteps
    completedSteps.value = result.completedSteps
    isComplete.value = result.isComplete
  } catch (err) {
    error.value = getUserErrorMessage(err, 'Gagal memuat status pemesanan.')
    milestones.value = []
  } finally {
    loading.value = false
  }
}

function formatDate(value: string | null): string {
  if (!value) return '--'
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return value
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .format(new Date(year, month - 1, day))
}

watch(
  () => [props.open, props.project.id] as const,
  ([open]) => {
    if (open) load()
  },
  { immediate: true },
)
</script>

<style scoped>
.tracking-body { padding: 20px 24px 8px; }
.tracking-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.tracking-eyebrow { display: block; margin-bottom: 4px; color: var(--app-primary, #159ed8); font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.tracking-head h5 { margin: 0; overflow: hidden; color: #17212b; font-size: 17px; text-overflow: ellipsis; white-space: nowrap; }
.tracking-badge { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 7px; border-radius: 999px; padding: 8px 12px; color: #5f6972; background: #e8ebee; font-size: 11px; font-weight: 700; white-space: nowrap; }
.tracking-badge.complete { color: #16884d; background: #e7f8ef; }
.tracking-state { display: flex; align-items: center; gap: 9px; padding: 26px 0; color: #77838e; font-size: 12px; }
.tracking-state--error { color: #b4342b; }
.tracking-steps { margin: 0; padding: 0; list-style: none; }
.tracking-step { position: relative; display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 13px; padding-bottom: 16px; }
.tracking-step:not(:last-child)::before { position: absolute; top: 34px; bottom: -1px; left: 17px; width: 2px; background: #dce2e6; content: ''; }
.tracking-step.is-complete:not(:last-child)::before { background: #a8dfc1; }
.step-marker { z-index: 1; display: grid; place-items: center; width: 36px; height: 36px; border: 2px solid #dce2e6; border-radius: 50%; color: #8d979f; background: #eef1f3; font-size: 11px; font-weight: 700; }
.tracking-step.is-complete .step-marker { border-color: #bfe8d2; color: #16884d; background: #e7f8ef; }
.step-body { min-width: 0; padding-top: 3px; }
.step-body strong { display: block; color: #8d979f; font-size: 12.5px; font-weight: 600; line-height: 1.45; }
.tracking-step.is-complete .step-body strong { color: #34404a; }
.step-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin-top: 5px; }
.step-meta time, .step-pending { color: #91a0aa; font-size: 10.5px; }
.tracking-step.is-complete .step-meta time { color: #16884d; font-weight: 600; }
.step-ref { display: inline-flex; align-items: center; gap: 4px; border-radius: 999px; padding: 3px 8px; color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #eaf7fd); font-size: 9.5px; font-weight: 700; }
.modal-footer { gap: 8px; padding: 14px 24px; }
.modal-footer .btn { display: inline-flex; align-items: center; gap: 7px; min-width: 110px; justify-content: center; font-size: 13px; font-weight: 500; }
:deep(.order-tracking-dialog) { min-height: 0; }
:deep(.order-tracking-modal) { max-height: calc(100vh - 2rem); overflow: hidden; border: 0; border-radius: 18px; }
.tracking-body { min-height: 0; overflow-y: auto; overscroll-behavior: contain; }

@media (max-width: 575.98px) {
  .tracking-body { padding: 16px 16px 6px; }
  .tracking-head { align-items: flex-start; flex-direction: column; gap: 10px; }
  .modal-footer { padding: 12px 16px; }
  :deep(.order-tracking-dialog) { min-height: calc(100% - 1rem); margin: .5rem; }
  :deep(.order-tracking-modal) { max-height: calc(100vh - 1rem); border-radius: 14px; }
}
</style>
