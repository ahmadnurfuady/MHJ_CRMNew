<template>
  <div class="task-detail-shell">
    <div v-if="task" class="task-detail-scroll">
      <section class="task-name-card">
        <span class="task-name-card__icon" aria-hidden="true">
          <vue-feather type="clipboard" size="24" />
        </span>
        <div class="task-name-card__content">
          <span class="task-name-card__eyebrow">Tugas {{ taskTypeLabel }}</span>
          <h4>{{ task.title || 'Tanpa nama tugas' }}</h4>
          <div class="task-name-card__meta">
            <span><vue-feather type="user" size="14" />{{ task.owner || '-' }}</span>
            <span><vue-feather type="hash" size="14" />{{ task.id }}</span>
          </div>
        </div>
        <span class="task-type-badge">{{ taskTypeLabel }}</span>
      </section>

      <section class="detail-card">
        <div class="detail-card-title">
          <span class="detail-card-icon"><vue-feather type="briefcase" size="18" /></span>
          <div>
            <span class="detail-card-eyebrow">Informasi Tugas</span>
            <h5>Detail Tugas {{ taskTypeLabel }}</h5>
          </div>
        </div>

        <div class="detail-grid">
          <div class="detail-field">
            <span>Kategori</span>
            <strong>{{ task.category || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Owner</span>
            <strong>{{ task.owner || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Status Peluang</span>
            <strong
              class="opportunity-status"
              :class="{ 'opportunity-status--empty': !(task.projectId || task.projectName) }"
            >
              <i aria-hidden="true"></i>
              {{ task.projectId || task.projectName ? 'Ada' : 'Tidak Ada' }}
            </strong>
          </div>
          <div class="detail-field">
            <span>Nama Peluang</span>
            <strong>{{ task.projectName || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Faskes</span>
            <strong>{{ task.hospital || task.subtitle || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Kontak Person</span>
            <strong>{{ task.contact || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Waktu Kunjungan</span>
            <strong>{{ formattedSchedule }}</strong>
          </div>
          <div v-if="task.kind !== 'app-specialist'" class="detail-field">
            <span>Pipeline Peluang</span>
            <strong class="pipeline-text">{{ pipelineLabel }}</strong>
          </div>
          <div v-else class="detail-field">
            <span>Serial Number</span>
            <strong>{{ task.serialNumber || '-' }}</strong>
          </div>
          <div class="detail-field detail-field--wide">
            <span>Divisi Terkait</span>
            <div v-if="task.divisions?.length" class="detail-tags">
              <span v-for="division in task.divisions" :key="division">{{ division }}</span>
            </div>
            <strong v-else>-</strong>
          </div>
          <div class="detail-field detail-field--wide">
            <span>Product</span>
            <strong>{{ productLabel }}</strong>
          </div>
        </div>

        <div class="detail-notes">
          <span>Notes Tambahan</span>
          <div :class="{ 'detail-notes__value--empty': !task.description }">
            {{ task.description || 'Tidak ada catatan tambahan.' }}
          </div>
        </div>

        <div class="evidence-title">
          <span class="detail-card-icon"><MhjIcon name="action_camera" :size="18" /></span>
          <div>
            <strong>Live Photo &amp; GPS Location</strong>
            <small>Bukti kunjungan dan titik lokasi aktivitas.</small>
          </div>
        </div>
        <div class="evidence-grid">
          <div class="evidence-preview">
            <img v-if="task.photoUrl" :src="task.photoUrl" alt="Live photo kunjungan" />
            <div v-else class="evidence-empty">
              <MhjIcon name="action_camera" />
              <span>{{ task.photoName || 'Live photo belum tersedia' }}</span>
            </div>
          </div>

          <div class="evidence-preview evidence-map">
            <iframe
              v-if="mapEmbedUrl"
              :src="mapEmbedUrl"
              title="Lokasi kunjungan"
              loading="lazy"
            ></iframe>
            <div v-else class="evidence-empty">
              <MhjIcon name="action_location" />
              <span>Lokasi belum tersedia</span>
            </div>
            <a v-if="mapPageUrl" :href="mapPageUrl" target="_blank" rel="noopener noreferrer">
              Buka peta
            </a>
          </div>
        </div>
        <p v-if="task.locationAddress" class="location-address">
          <MhjIcon name="action_location" :size="15" />
          <span>{{ task.locationAddress }}</span>
        </p>
      </section>

      <section class="detail-card comment-card">
        <div class="detail-card-title">
          <span class="detail-card-icon"><vue-feather type="message-square" size="18" /></span>
          <div>
            <span class="detail-card-eyebrow">Aktivitas</span>
            <h5>Komentar</h5>
          </div>
        </div>

        <div v-if="loadingComments" class="comment-empty">
          <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
          Memuat komentar...
        </div>

        <div v-else-if="comments.length" class="comment-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <span class="comment-avatar">{{ comment.initial || initials(comment.author) }}</span>
            <div class="comment-item__body">
              <div class="comment-item__top">
                <strong>
                  {{ comment.author }}
                  <small>· {{ relativeTime(comment.created_at) }}</small>
                </strong>
                <span
                  v-if="comment.frmdvc"
                  class="comment-source"
                  :class="`comment-source--${(comment.frmdvc || '').toLowerCase()}`"
                >
                  {{ comment.frmdvc }}
                </span>
              </div>
              <p>{{ comment.message }}</p>
              <button
                v-if="canDelete(comment)"
                type="button"
                class="comment-delete"
                :disabled="deletingId === comment.id"
                @click="handleDelete(comment)"
              >
                <vue-feather type="trash-2" size="12" />
                Hapus
              </button>
            </div>
          </div>
        </div>
        <p v-else class="comment-empty">Belum ada komentar pada tugas ini.</p>

        <form class="comment-form" @submit.prevent="addComment">
          <span class="comment-avatar">{{ initials(currentUser) }}</span>
          <input
            v-model.trim="commentText"
            type="text"
            placeholder="Tambahkan komentar..."
            :disabled="submitting"
          />
          <button type="submit" :disabled="!commentText || submitting">
            {{ submitting ? '...' : 'Kirim' }}
          </button>
        </form>
      </section>
    </div>

    <footer v-if="task" class="task-detail-footer">
      <button class="btn btn-primary download-button" type="button" @click="printDetail">
        <vue-feather type="download" size="17" />
        Download PDF
      </button>
      <a
        class="btn btn-outline-dark contact-button"
        :class="{ disabled: !task.contactPhone }"
        :href="task.contactPhone ? `tel:${task.contactPhone}` : undefined"
        :aria-disabled="!task.contactPhone"
        @click="preventUnavailableContact"
      >
        <MhjIcon name="action_phone" :size="17" />
        Hubungi Kontak
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Swal from 'sweetalert2'
import { projectTab } from '@/core/data/project'
import type { TaskDetails } from '@/types/tasks'
import {
  fetchTaskComments,
  addTaskComment,
  deleteTaskComment,
  type TaskComment,
} from '@/services/taskCommentService'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  task: TaskDetails | null
}>()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const commentText = ref('')
const comments = ref<TaskComment[]>([])
const loadingComments = ref(false)
const submitting = ref(false)
const deletingId = ref<string | null>(null)
const taskTypeLabel = computed(() =>
  props.task?.kind === 'app-specialist' ? 'App Specialist' : 'Sales',
)

const currentUser = computed(() => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null') as { name?: string } | null
    return user?.name || 'User'
  } catch {
    return 'User'
  }
})

const formattedSchedule = computed(() => {
  if (!props.task?.scheduledAt) return '-'
  const date = new Date(props.task.scheduledAt)
  if (Number.isNaN(date.getTime())) return props.task.scheduledAt
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
})

const pipelineLabel = computed(() => {
  const value = props.task?.stageTo
  if (!value) return '-'
  return projectTab.find((stage) => stage.value === value)?.title || value
})

const productLabel = computed(() => {
  if (props.task?.unrelatedProduct) return 'Tidak terkait produk'
  return props.task?.products?.join(', ') || '-'
})

const mapEmbedUrl = computed(() => {
  const latitude = props.task?.latitude
  const longitude = props.task?.longitude
  if (!latitude || !longitude) return ''
  const delta = 0.006
  const bbox = [longitude - delta, latitude - delta, longitude + delta, latitude + delta].join(',')
  const params = new URLSearchParams({
    bbox,
    layer: 'mapnik',
    marker: `${latitude},${longitude}`,
  })
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`
})

const mapPageUrl = computed(() => {
  const latitude = props.task?.latitude
  const longitude = props.task?.longitude
  if (!latitude || !longitude) return ''
  return `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`
})

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

async function loadComments() {
  const id = Number(props.task?.id)
  if (!Number.isFinite(id) || id <= 0) {
    comments.value = []
    return
  }
  loadingComments.value = true
  try {
    comments.value = await fetchTaskComments(id)
  } catch {
    comments.value = []
  } finally {
    loadingComments.value = false
  }
}

watch(
  () => props.task?.id,
  () => {
    void loadComments()
  },
  { immediate: true },
)

async function addComment() {
  const message = commentText.value.trim()
  const id = Number(props.task?.id)
  if (!message || !Number.isFinite(id) || id <= 0) return
  submitting.value = true
  try {
    comments.value = await addTaskComment(id, message)
    commentText.value = ''
  } catch {
    Swal.fire({ icon: 'error', title: 'Gagal mengirim komentar' })
  } finally {
    submitting.value = false
  }
}

function canDelete(comment: TaskComment): boolean {
  const authorId = typeof comment.author_id === 'number' ? comment.author_id : null
  return authorId !== null && authorId === (user.value?.id ?? -1)
}

async function handleDelete(comment: TaskComment) {
  const id = Number(props.task?.id)
  if (!Number.isFinite(id) || id <= 0) return

  const confirmed = await Swal.fire({
    icon: 'warning',
    title: 'Hapus komentar?',
    text: 'Komentar ini akan dihapus permanen.',
    showCancelButton: true,
    confirmButtonText: 'Hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#ef4444',
  })
  if (!confirmed.isConfirmed) return

  deletingId.value = comment.id
  try {
    comments.value = await deleteTaskComment(id, comment.id)
  } catch {
    Swal.fire({ icon: 'error', title: 'Gagal menghapus komentar' })
  } finally {
    deletingId.value = null
  }
}

function relativeTime(value: string | null | undefined): string {
  if (!value) return ''
  const date = new Date(value)
  const ts = date.getTime()
  if (!Number.isFinite(ts)) return ''
  const diffMs = Date.now() - ts
  if (diffMs < 0) return 'Baru saja'
  const sec = Math.floor(diffMs / 1000)
  if (sec < 45) return 'Baru saja'
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min} menit lalu`
  const hour = Math.floor(min / 60)
  if (hour < 24) return `${hour} jam lalu`
  const day = Math.floor(hour / 24)
  if (day < 30) return `${day} hari lalu`
  const month = Math.floor(day / 30)
  if (month < 12) return `${month} bulan lalu`
  return `${Math.floor(day / 365)} tahun lalu`
}

function printDetail() {
  window.print()
}

function preventUnavailableContact(event: MouseEvent) {
  if (!props.task?.contactPhone) event.preventDefault()
}
</script>

<style scoped>
.task-detail-shell {
  display: flex;
  flex-direction: column;
}

.task-detail-scroll {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-name-card,
.detail-card {
  border: 1px solid #e3ebf0;
  border-radius: 17px;
  background: #fff;
  box-shadow: 0 9px 28px rgba(31, 52, 73, 0.055);
}

.task-name-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  padding: 22px 24px;
  background:
    radial-gradient(circle at 92% 15%, rgba(var(--app-primary-rgb, 24, 166, 228), 0.14), transparent 24%),
    linear-gradient(135deg, #ffffff 0%, var(--app-primary-wash, #f5fbfe) 62%, var(--app-primary-wash, #eef9fd) 100%);
}

.task-name-card::after {
  position: absolute;
  z-index: -1;
  right: -42px;
  bottom: -70px;
  width: 150px;
  height: 150px;
  border: 22px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.055);
  border-radius: 50%;
  content: '';
}

.task-name-card__icon,
.detail-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-default, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.task-name-card__icon {
  width: 54px;
  height: 54px;
  border-radius: 15px;
}

.task-name-card__content {
  min-width: 0;
}

.task-name-card__eyebrow,
.detail-card-eyebrow {
  display: block;
  margin-bottom: 3px;
  color: var(--theme-default, #18a6e4);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.task-name-card h4 {
  margin: 0;
  color: #102a43;
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.task-name-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  margin-top: 8px;
}

.task-name-card__meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #627d98;
  font-size: 11px;
}

.task-type-badge {
  align-self: start;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  border-radius: 999px;
  padding: 6px 11px;
  color: var(--app-primary-dark, #087cae);
  background: rgba(255, 255, 255, 0.82);
  font-size: 11px;
  font-weight: 700;
}

.detail-card {
  overflow: hidden;
  padding: 0 22px 22px;
}

.detail-card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 -22px 4px;
  border-bottom: 1px solid #e8eef2;
  padding: 17px 22px;
  background: linear-gradient(90deg, #ffffff 0%, #f9fcfe 100%);
}

.detail-card-title h5 {
  margin: 0;
  color: #102a43;
  font-size: 16px;
}

.detail-card-icon {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 11px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(32px, 7vw, 88px);
}

.detail-field {
  min-width: 0;
  border-bottom: 1px solid #edf2f5;
  padding: 16px 3px 17px;
}

.detail-field--wide {
  grid-column: 1 / -1;
}

.detail-field > span,
.detail-notes > span {
  display: block;
  margin-bottom: 6px;
  color: #718096;
  font-size: 12px;
}

.detail-field strong {
  display: block;
  color: #102a43;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.opportunity-status {
  display: inline-flex !important;
  align-items: center;
  gap: 7px;
  font-weight: 600 !important;
}

.opportunity-status i {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
}

.opportunity-status--empty i {
  background: #94a3b8;
  box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.14);
}

.pipeline-text {
  color: var(--app-primary-dark, #075985) !important;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.detail-tags span {
  border-radius: 5px;
  padding: 4px 8px;
  background: #e9eef4;
  color: #1f2937;
  font-size: 12px;
  font-weight: 600;
}

.detail-notes {
  padding: 20px 3px 2px;
}

.detail-notes div {
  min-height: 0;
  border: 0;
  border-left: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.42);
  padding: 6px 0 6px 14px;
  color: #243b53;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
  white-space: pre-wrap;
}

.detail-notes .detail-notes__value--empty {
  color: #94a3b8;
  font-weight: 400;
}

.evidence-title {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #e8eef2;
  margin-top: 22px;
  padding-top: 20px;
}

.evidence-title strong,
.evidence-title small {
  display: block;
}

.evidence-title strong {
  margin-bottom: 2px;
  color: #102a43;
  font-size: 14px;
}

.evidence-title small {
  color: #829ab1;
  font-size: 11px;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 14px;
}

.evidence-preview {
  position: relative;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid #dbe2ea;
  border-radius: 12px;
  background: linear-gradient(145deg, #f8fbfd, var(--app-primary-wash, #f3f8fb));
}

.evidence-preview img,
.evidence-preview iframe {
  width: 100%;
  height: 190px;
  border: 0;
  object-fit: cover;
}

.evidence-empty {
  display: flex;
  height: 190px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 9px;
  padding: 20px;
  color: #94a3b8;
  text-align: center;
}

.evidence-map a {
  position: absolute;
  right: 8px;
  bottom: 8px;
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--app-primary-dark, #0369a1);
  font-size: 11px;
  font-weight: 600;
}

.location-address {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin: 10px 0 0;
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
}

.location-address svg {
  flex: 0 0 15px;
  margin-top: 1px;
  color: var(--app-primary, #18a6e4);
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 16px;
}

.comment-item,
.comment-form {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.comment-avatar {
  display: inline-flex;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--app-primary-soft, #dbeafe);
  color: var(--app-primary-dark, #1d4ed8);
  font-size: 11px;
  font-weight: 700;
}

.comment-item__body {
  flex: 1;
  min-width: 0;
}

.comment-item__top {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.comment-item strong {
  color: #111827;
  font-size: 12px;
}

.comment-item strong small {
  color: #94a3b8;
  font-weight: 400;
}

.comment-item p {
  margin: 2px 0 0;
  color: #6b7280;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-word;
}

.comment-source {
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.comment-source--apk {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.comment-source--web {
  background: rgba(99, 102, 241, 0.14);
  color: #4338ca;
}

.comment-delete {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 2px 8px;
  border: 0;
  background: transparent;
  color: #94a3b8;
  font-size: 11px;
  cursor: pointer;
  border-radius: 6px;
}

.comment-delete:hover:not(:disabled) {
  color: #b91c1c;
  background: rgba(239, 68, 68, 0.08);
}

.comment-delete:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.comment-empty {
  color: #94a3b8;
  font-size: 12px;
}

.comment-form {
  align-items: center;
}

.comment-form input {
  width: 100%;
  min-width: 0;
  border: 1px solid #dbe2ea;
  border-radius: 999px;
  padding: 9px 14px;
  outline: 0;
}

.comment-form input:focus {
  border-color: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.comment-form button {
  border: 0;
  padding: 7px 4px;
  background: transparent;
  color: var(--app-primary-dark, #0369a1);
  font-size: 12px;
  font-weight: 600;
}

.comment-form button:disabled {
  color: #94a3b8;
}

.task-detail-footer {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
  border: 1px solid #e5eaee;
  border-radius: 16px;
  padding: 16px 20px;
  background: #fff;
  box-shadow: 0 7px 24px rgba(31, 52, 73, 0.05);
}

.download-button,
.contact-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 9px;
}

@media (max-width: 575.98px) {
  .task-detail-scroll {
    gap: 14px;
  }

  .task-name-card {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px;
    padding: 17px;
    border-radius: 13px;
  }

  .task-name-card__icon {
    width: 46px;
    height: 46px;
    border-radius: 13px;
  }

  .task-name-card h4 {
    font-size: 17px;
  }

  .task-type-badge {
    grid-column: 2;
    justify-self: start;
  }

  .detail-card {
    border-radius: 13px;
    padding: 0 14px 16px;
  }

  .detail-card-title {
    margin: 0 -14px 2px;
    padding: 15px 14px;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-field--wide {
    grid-column: auto;
  }

  .detail-field strong {
    font-size: 14px;
  }

  .evidence-grid {
    grid-template-columns: 1fr;
  }

  .evidence-preview,
  .evidence-preview img,
  .evidence-preview iframe,
  .evidence-empty {
    height: 145px;
    min-height: 145px;
  }

  .task-detail-footer {
    grid-template-columns: 1fr;
    padding: 12px;
  }

  .download-button,
  .contact-button {
    padding-inline: 8px;
    font-size: 12px;
  }
}

@media print {
  :global(body *) {
    visibility: hidden !important;
  }

  .task-detail-shell,
  .task-detail-shell * {
    visibility: visible !important;
  }

  .task-detail-shell {
    position: fixed;
    inset: 0;
    width: 100%;
  }

  .comment-card,
  .task-detail-footer {
    display: none !important;
  }

  .task-detail-shell,
  .task-detail-scroll {
    max-height: none;
    overflow: visible;
    background: #fff;
  }
}
</style>
