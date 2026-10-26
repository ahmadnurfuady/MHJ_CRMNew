<template>
  <div
    id="task-type-selector"
    class="modal fade"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="task-type-selector-title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered task-type-dialog">
      <div class="modal-content task-type-modal">
        <div class="modal-header border-0">
          <div>
            <span class="badge badge-light-primary mb-2">Buat Tugas Baru</span>
            <h4 id="task-type-selector-title" class="modal-title">Pilih jenis tugas</h4>
            <p class="mb-0 text-muted">Pilih form sesuai tim yang akan menjalankan aktivitas.</p>
          </div>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>

        <div class="modal-body pt-2">
          <div class="task-type-options">
            <button class="task-type-card" type="button" @click="openTaskForm('sales')">
              <span class="task-type-icon"><vue-feather type="trending-up"></vue-feather></span>
              <span class="task-type-copy">
                <strong>Tugas Sales</strong>
                <small>Aktivitas penjualan, kunjungan, dan pembaruan pipeline peluang.</small>
              </span>
              <vue-feather class="task-type-arrow" type="arrow-right" size="20"></vue-feather>
            </button>

            <button class="task-type-card task-type-card--specialist" type="button" @click="openTaskForm('app-specialist')">
              <span class="task-type-icon"><vue-feather type="tool"></vue-feather></span>
              <span class="task-type-copy">
                <strong>Tugas Application Specialist</strong>
                <small>Pendampingan aplikasi, produk, dan perangkat di lapangan.</small>
              </span>
              <vue-feather class="task-type-arrow" type="arrow-right" size="20"></vue-feather>
            </button>
          </div>
        </div>

        <div class="modal-footer border-0 pt-0">
          <button class="btn btn-light" type="button" data-bs-dismiss="modal">Batal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { Modal } from 'bootstrap'
import type { TaskKind } from '@/types/tasks'

const emit = defineEmits<{
  select: [type: TaskKind]
}>()

const targetModalIds: Record<TaskKind, string> = {
  sales: 'sales-task-modal',
  'app-specialist': 'app-specialist-task-modal',
}

async function openTaskForm(type: TaskKind) {
  const selectorElement = document.getElementById('task-type-selector')
  if (!selectorElement) return

  emit('select', type)
  await nextTick()
  const targetElement = document.getElementById(targetModalIds[type])
  if (!targetElement) return

  selectorElement.addEventListener(
    'hidden.bs.modal',
    () => Modal.getOrCreateInstance(targetElement).show(),
    { once: true },
  )
  Modal.getOrCreateInstance(selectorElement).hide()
}
</script>

<style scoped>
.task-type-dialog {
  max-width: 660px;
}

.task-type-modal {
  overflow: hidden;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 24px 70px rgba(31, 52, 73, 0.18);
}

.task-type-modal .modal-header,
.task-type-modal .modal-body,
.task-type-modal .modal-footer {
  padding-right: 24px;
  padding-left: 24px;
}

.task-type-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.task-type-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 13px;
  align-items: center;
  min-height: 132px;
  padding: 18px;
  color: inherit;
  text-align: left;
  border: 1px solid rgba(0, 102, 102, 0.2);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(0, 102, 102, 0.055), #fff 72%);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.task-type-card--specialist {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.24);
  background: linear-gradient(145deg, rgba(var(--app-primary-rgb, 24, 166, 228), 0.065), #fff 72%);
}

.task-type-card:hover,
.task-type-card:focus-visible {
  border-color: var(--theme-default);
  box-shadow: 0 10px 26px rgba(0, 102, 102, 0.1);
  transform: translateY(-2px);
}

.task-type-icon {
  display: inline-flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  color: var(--theme-default);
  border-radius: 12px;
  background: rgba(0, 102, 102, 0.11);
}

.task-type-card--specialist .task-type-icon {
  color: var(--app-primary, #169bd5);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.task-type-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
}

.task-type-copy strong {
  color: #1f3449;
  font-size: 15px;
}

.task-type-copy small {
  color: #767b84;
  line-height: 1.45;
}

.task-type-arrow {
  color: var(--theme-default);
  transition: transform 0.2s ease;
}

.task-type-card:hover .task-type-arrow,
.task-type-card:focus-visible .task-type-arrow {
  transform: translateX(3px);
}

@media (max-width: 575px) {
  .task-type-dialog {
    margin: 0.75rem;
  }

  .task-type-options {
    grid-template-columns: 1fr;
  }

  .task-type-card {
    min-height: 112px;
  }
}
</style>
