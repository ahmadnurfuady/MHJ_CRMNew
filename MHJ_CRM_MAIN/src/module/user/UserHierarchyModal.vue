<template>
  <Modal
    title="Hierarki Pengguna"
    :modal-open="open"
    size-class="modal-md"
    :modal-centered="true"
    @close-modal="$emit('close')"
  >
    <div class="modal-body py-4">

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Memuat...</span>
        </div>
        <div class="mt-2 f-m-light">Memuat data hierarki...</div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="alert alert-light-danger border-left-danger mb-0">
        <i class="fa fa-exclamation-triangle me-2"></i>{{ error }}
      </div>

      <!-- Hierarki -->
      <div v-else-if="data" class="hierarchy-tree">

        <!-- Atasan -->
        <div class="hierarchy-section">
          <div class="hierarchy-label">
            <vue-feather type="chevrons-up" size="14" class="me-1" />
            Atasan Langsung
          </div>
          <div v-if="data.atasan.length === 0" class="hierarchy-empty">
            Tidak ada atasan langsung
          </div>
          <div
            v-for="person in data.atasan"
            :key="person.id"
            class="hierarchy-card hierarchy-card--atasan"
          >
            <div class="hierarchy-avatar bg-primary-light">
              <vue-feather type="user" size="16" class="text-primary" />
            </div>
            <div>
              <div class="fw-semibold f-14">{{ person.name }}</div>
              <div class="f-12 text-muted">{{ person.nama_jabatan || '—' }}</div>
            </div>
          </div>
        </div>

        <!-- Garis penghubung atas -->
        <div class="hierarchy-connector" aria-hidden="true">
          <div class="hierarchy-connector__line"></div>
          <div class="hierarchy-connector__arrow"></div>
        </div>

        <!-- User saat ini (focal point) -->
        <div class="hierarchy-section">
          <div class="hierarchy-label">
            <vue-feather type="user-check" size="14" class="me-1" />
            Pengguna Ini
          </div>
          <div class="hierarchy-card hierarchy-card--current">
            <div class="hierarchy-avatar bg-primary">
              <vue-feather type="user" size="16" class="text-white" />
            </div>
            <div>
              <div class="fw-bold f-14">{{ data.current_user.name }}</div>
              <div class="f-12" style="color: rgba(255,255,255,0.8);">
                {{ data.current_user.nama_jabatan || '—' }}
              </div>
            </div>
          </div>
        </div>

        <!-- Garis penghubung bawah -->
        <div class="hierarchy-connector" aria-hidden="true">
          <div class="hierarchy-connector__arrow hierarchy-connector__arrow--down"></div>
          <div class="hierarchy-connector__line"></div>
        </div>

        <!-- Bawahan -->
        <div class="hierarchy-section">
          <div class="hierarchy-label">
            <vue-feather type="chevrons-down" size="14" class="me-1" />
            Bawahan Langsung
          </div>
          <div v-if="data.bawahan.length === 0" class="hierarchy-empty">
            Tidak ada bawahan langsung
          </div>
          <div
            v-for="person in data.bawahan"
            :key="person.id"
            class="hierarchy-card hierarchy-card--bawahan"
          >
            <div class="hierarchy-avatar bg-light">
              <vue-feather type="user" size="16" class="text-secondary" />
            </div>
            <div>
              <div class="fw-semibold f-14">{{ person.name }}</div>
              <div class="f-12 text-muted">{{ person.nama_jabatan || '—' }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import Modal from '@/components/shared/Modal.vue'
import { getUserHierarchy } from '@/services/userService'
import type { UserHierarchyResponse } from '@/types/user'

const props = defineProps<{
  open: boolean
  userId: number | null
}>()

defineEmits<{ close: [] }>()

const loading = ref(false)
const error = ref<string | null>(null)
const data = ref<UserHierarchyResponse | null>(null)

watch(
  () => props.open,
  async (isOpen) => {
    if (!isOpen || props.userId === null) {
      // Reset saat modal ditutup agar tidak tampil data lama saat dibuka ulang
      data.value = null
      error.value = null
      return
    }
    loading.value = true
    error.value = null
    try {
      data.value = await getUserHierarchy(props.userId)
    } catch {
      error.value = 'Gagal memuat data hierarki. Silakan coba lagi.'
    } finally {
      loading.value = false
    }
  },
)
</script>

<style scoped>
/* ─── Tree layout ──────────────────────────────────────────────────────── */
.hierarchy-tree {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.hierarchy-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hierarchy-label {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.hierarchy-empty {
  font-size: 0.875rem;
  color: #6c757d;
  font-style: italic;
  padding: 0.5rem 0;
}

/* ─── Cards ─────────────────────────────────────────────────────────────── */
.hierarchy-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e9ecef;
  background: #fff;
}

/* Atasan: biru muda */
.hierarchy-card--atasan {
  border-color: rgba(24, 166, 228, 0.3);
  background: rgba(24, 166, 228, 0.04);
}

/* Focal point — user yang sedang dilihat */
.hierarchy-card--current {
  border-color: #18A6E4;
  background: linear-gradient(135deg, #18A6E4 0%, #127CAB 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(24, 166, 228, 0.3);
}

/* Bawahan: abu-abu sangat muda */
.hierarchy-card--bawahan {
  border-color: #e9ecef;
  background: #f8f9fa;
}

/* ─── Avatar circle ──────────────────────────────────────────────────────── */
.hierarchy-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
}

.bg-primary-light {
  background: rgba(24, 166, 228, 0.15);
}

.text-primary {
  color: #18A6E4 !important;
}

/* ─── Connector (garis vertikal + panah) ────────────────────────────────── */
.hierarchy-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.15rem 0;
  gap: 0;
}

.hierarchy-connector__line {
  width: 2px;
  height: 24px;
  background: rgba(24, 166, 228, 0.35);
}

/* Panah ke bawah (dari atasan ke current) */
.hierarchy-connector__arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid rgba(24, 166, 228, 0.45);
}

/* Panah dari current ke bawahan — arahnya sama (ke bawah) */
.hierarchy-connector__arrow--down {
  border-top: 6px solid rgba(24, 166, 228, 0.45);
  border-bottom: none;
}
</style>
