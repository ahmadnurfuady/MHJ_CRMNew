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
          </div>
        </div>
        <div class="task-name-card__actions">
          <span class="task-type-badge">{{ taskTypeLabel }}</span>
          <button
            v-if="canEditTask"
            class="btn btn-primary edit-task-button"
            type="button"
            data-bs-toggle="modal"
            :data-bs-target="editModalTarget"
          >
            <vue-feather type="edit-2" size="16" />
            <span>Edit Tugas</span>
          </button>
        </div>
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
            <!--
              Kartu peluang memakai gaya kartu yang sama dengan "Kontak Person"
              (.task-contact-card) supaya konsisten, dan tetap berada di posisi
              grid yang sama seperti sebelumnya. Hanya bisa diklik saat tugas
              benar-benar punya id peluang terkait.
            -->
            <router-link
              v-if="projectDetailRoute"
              :to="projectDetailRoute"
              class="task-relation-card"
              :title="`Buka detail peluang ${task.projectName || ''}`.trim()"
            >
              <span class="task-relation-icon" aria-hidden="true">
                <vue-feather type="briefcase" size="18" />
              </span>
              <div class="task-relation-copy">
                <strong>{{ task.projectName || 'Peluang terkait' }}</strong>
                <small>Lihat detail peluang</small>
              </div>
              <vue-feather
                class="task-relation-chevron"
                type="chevron-right"
                size="17"
                aria-hidden="true"
              />
            </router-link>
            <div v-else-if="task.projectName" class="task-relation-card task-relation-card--static">
              <span class="task-relation-icon" aria-hidden="true">
                <vue-feather type="briefcase" size="18" />
              </span>
              <div class="task-relation-copy">
                <strong>{{ task.projectName }}</strong>
                <small>Detail peluang belum tersedia</small>
              </div>
            </div>
            <strong v-else>-</strong>
          </div>
          <div class="detail-field">
            <span>Faskes</span>
            <strong>{{ task.hospital || task.subtitle || '-' }}</strong>
          </div>
          <div class="detail-field detail-field--wide">
            <span>Kontak Person</span>
            <div v-if="taskContacts.length" class="task-contact-grid">
              <article
                v-for="(contact, index) in taskContacts"
                :key="`${contact.name}-${contact.phone}-${index}`"
                class="task-contact-card"
                :class="{ 'task-contact-card--external': !contact.isOwnContact }"
              >
                <span class="task-contact-avatar" aria-hidden="true">
                  {{ initials(contact.name) }}
                </span>
                <div class="task-contact-copy">
                  <strong>{{ contact.name }}</strong>
                  <a v-if="contact.isOwnContact && contact.phone" :href="`tel:${contact.phone}`">
                    <SolarIcon
                      name="phone"
                      :size="14"
                      color="var(--app-primary, #18a6e4)"
                      secondary-color="var(--app-primary, #18a6e4)"
                      :secondary-opacity="1"
                      aria-hidden="true"
                    />
                    {{ contact.phone }}
                  </a>
                  <small v-else-if="contact.isOwnContact" class="task-contact-missing-phone">Nomor HP belum tersedia</small>
                  <div v-else-if="!contact.isOwnContact" class="task-contact-owner-note">
                    <span>
                      <SolarIcon name="user" :size="13" aria-hidden="true" />
                      Milik {{ contact.ownerName || 'user lain' }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <strong v-else>-</strong>
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
          <span class="detail-card-icon">
            <SolarIcon
              name="camera"
              :size="18"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="1"
            />
          </span>
          <div>
            <strong>Live Photo &amp; GPS Location</strong>
            <small>Bukti kunjungan dan titik lokasi aktivitas.</small>
          </div>
        </div>
        <div class="evidence-grid">
          <div class="evidence-preview">
            <img v-if="task.photoUrl" :src="task.photoUrl" alt="Live photo kunjungan" />
            <div v-else class="evidence-empty">
              <SolarIcon
                name="camera"
                :size="24"
                color="var(--app-primary, #18a6e4)"
                secondary-color="var(--app-primary, #18a6e4)"
                :secondary-opacity="1"
              />
              <span>{{ task.photoName || 'Live photo belum tersedia' }}</span>
            </div>
          </div>

          <div class="evidence-preview evidence-map">
            <GoogleMapView
              v-if="taskLocation"
              :center="taskLocation"
              :zoom="17"
              :markers="[taskLocation]"
              :zoom-control="false"
            />
            <div v-else class="evidence-empty">
              <SolarIcon
                name="map-point"
                :size="24"
                color="var(--app-primary, #18a6e4)"
                secondary-color="var(--app-primary, #18a6e4)"
                :secondary-opacity="1"
              />
              <span>Lokasi belum tersedia</span>
            </div>
            <a v-if="mapPageUrl" :href="mapPageUrl" target="_blank" rel="noopener noreferrer">
              Buka peta
            </a>
          </div>
        </div>
        <p v-if="task.locationAddress" class="location-address">
          <SolarIcon
            name="map-point"
            :size="15"
            color="var(--app-primary, #18a6e4)"
            secondary-color="var(--app-primary, #18a6e4)"
            :secondary-opacity="1"
          />
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
          <div
            v-for="group in commentGroups"
            :key="group.messages[0]!.id"
            class="comment-item"
            :class="{ 'comment-item--own': group.own }"
          >
            <div v-if="group.own" class="comment-item__own-content">
              <div class="comment-item__own-meta">
                <time :datetime="group.messages[0]!.created_at">{{ commentClock(group.messages[0]!.created_at) }}</time>
                <strong class="comment-item__own-name">Anda</strong>
              </div>
              <div v-for="comment in group.messages" :key="comment.id" class="comment-item__own-message">
                <button
                  type="button"
                  class="comment-delete"
                  :disabled="deletingId === comment.id"
                  aria-label="Hapus komentar"
                  title="Hapus komentar"
                  @click="handleDelete(comment)"
                >
                  <vue-feather type="trash-2" size="14" />
                </button>
                <p class="comment-item__own-bubble">{{ comment.message }}</p>
              </div>
              <div v-if="group.messages[0]!.frmdvc" class="comment-item__actions">
                <span
                  class="comment-source"
                  :class="`comment-source--${group.messages[0]!.frmdvc!.toLowerCase()}`"
                >
                  {{ group.messages[0]!.frmdvc!.toLowerCase() === 'apk' ? 'Mobile' : group.messages[0]!.frmdvc }}
                </span>
              </div>
            </div>
            <template v-else>
              <span class="comment-avatar" aria-hidden="true">
                {{ group.messages[0]!.initial || initials(group.messages[0]!.author) }}
              </span>
              <div class="comment-item__body">
                <div class="comment-item__top">
                  <strong>{{ group.messages[0]!.author }}</strong>
                  <time :datetime="group.messages[0]!.created_at">{{ commentClock(group.messages[0]!.created_at) }}</time>
                </div>
                <p
                  v-for="comment in group.messages"
                  :key="comment.id"
                  class="comment-item__other-bubble"
                >{{ comment.message }}</p>
                <div class="comment-item__actions">
                  <span
                    v-if="group.messages[0]!.frmdvc"
                    class="comment-source"
                    :class="`comment-source--${group.messages[0]!.frmdvc!.toLowerCase()}`"
                  >
                    {{ group.messages[0]!.frmdvc!.toLowerCase() === 'apk' ? 'Mobile' : group.messages[0]!.frmdvc }}
                  </span>
                </div>
              </div>
            </template>
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

    <footer v-if="task && canExportTask" class="task-detail-footer">
      <button
        class="btn btn-primary download-button"
        type="button"
        @click="printDetail"
      >
        <svg class="pdf-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2.75h6.8L18.5 7.5v13.75H7z" />
          <path d="M13.5 3v4.75h4.75" />
          <text x="8.35" y="17.25">PDF</text>
        </svg>
        Download PDF
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import GoogleMapView from '@/components/GoogleMapView.vue'
import { projectTab } from '@/core/data/project'
import { routes } from '@/router/routes'
import type { TaskDetails } from '@/types/tasks'
import {
  fetchTaskComments,
  addTaskComment,
  deleteTaskComment,
  type TaskComment,
} from '@/services/taskCommentService'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia'
import { useTaskPermissions } from '@/module/task/taskPermission'

const props = defineProps<{
  task: TaskDetails | null
}>()

const authStore = useAuthStore()
const route = useRoute()
const { user } = storeToRefs(authStore)
const { canEditTask, canExportTask } = useTaskPermissions()

const commentText = ref('')
const comments = ref<TaskComment[]>([])
const loadingComments = ref(false)
const submitting = ref(false)
const deletingId = ref<string | null>(null)
const taskTypeLabel = computed(() =>
  props.task?.kind === 'app-specialist' ? 'App Specialist' : 'Sales',
)
const editModalTarget = computed(() =>
  props.task?.kind === 'app-specialist'
    ? '#app-specialist-task-modal'
    : '#sales-task-modal',
)

const currentUser = computed(() => user.value?.name || 'User')

const commentGroups = computed(() => {
  const groups: { messages: TaskComment[]; own: boolean }[] = []
  for (const comment of comments.value) {
    const own = isOwnComment(comment)
    const previous = groups[groups.length - 1]
    const last = previous?.messages[previous.messages.length - 1]
    const elapsed = last ? new Date(comment.created_at).getTime() - new Date(last.created_at).getTime() : NaN
    const sameAuthor = last && (comment.author_id != null && last.author_id != null
      ? String(comment.author_id) === String(last.author_id)
      : comment.author_id == null && last.author_id == null && comment.author === last.author)

    if (previous && previous.own === own && last && sameAuthor
      && comment.frmdvc?.toLowerCase() === last.frmdvc?.toLowerCase()
      && elapsed >= 0 && elapsed <= 2 * 60 * 1000) {
      previous.messages.push(comment)
    } else {
      groups.push({ messages: [comment], own })
    }
  }
  return groups
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

/**
 * Target navigasi kartu "Nama Peluang". `backTo` diisi path halaman detail
 * tugas ini supaya tombol "Kembali" di halaman detail peluang balik ke sini,
 * bukan ke daftar peluang (pola sama dengan detail kontak → detail peluang).
 */
const projectDetailRoute = computed(() => {
  const projectId = Number(props.task?.projectId)
  if (!Number.isFinite(projectId) || projectId <= 0) return null
  return {
    path: routes.Project.ProjectDetailsV2,
    query: { id: String(projectId), backTo: route.fullPath },
  }
})

const productLabel = computed(() => {
  if (props.task?.unrelatedProduct) return 'Tidak terkait produk'
  return props.task?.products?.join(', ') || '-'
})

const taskContacts = computed(() => {
  if (props.task?.contacts?.length) return props.task.contacts

  const names = (props.task?.contact || '')
    .split(/[,;|]/)
    .map((name) => name.trim())
    .filter(Boolean)
  const phones = (props.task?.contactPhone || '')
    .split(/[,;|]\s*|\s+/)
    .map((phone) => phone.trim())

  return names.map((name, index) => ({
    name,
    phone: phones[index] || (names.length === 1 ? phones[0] || '' : ''),
    isOwnContact: true,
    ownerName: '',
  }))
})
const taskLocation = computed(() => {
  const latitude = props.task?.latitude
  const longitude = props.task?.longitude
  if (!latitude || !longitude) return null
  return { lat: latitude, lng: longitude }
})

const mapPageUrl = computed(() => {
  if (!taskLocation.value) return ''
  const { lat, lng } = taskLocation.value
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
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

function isOwnComment(comment: TaskComment): boolean {
  return comment.author_id != null && user.value?.id != null
    && String(comment.author_id) === String(user.value.id)
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

function commentClock(value: string): string {
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) return '-'
  return new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit' }).format(date)
}

function printDetail() {
  if (!canExportTask.value) return
  window.print()
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

.task-name-card__actions {
  display: flex;
  align-self: stretch;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
}

.task-type-badge {
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  border-radius: 999px;
  padding: 6px 11px;
  color: var(--app-primary-dark, #087cae);
  background: rgba(255, 255, 255, 0.82);
  font-size: 11px;
  font-weight: 700;
}

.edit-task-button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 10px;
  padding: 8px 15px;
  box-shadow: 0 6px 16px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  white-space: nowrap;
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

.task-contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

/* Kartu relasi "Nama Peluang": border & shadow identik dengan kartu kontak. */
.task-relation-card {
  display: grid;
  min-width: 0;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  border: 1px solid #e3ebf0;
  border-radius: 14px;
  padding: 12px 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(31, 52, 73, 0.035);
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

a.task-relation-card:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.32);
  box-shadow: 0 8px 20px rgba(31, 52, 73, 0.07);
  transform: translateY(-1px);
}

.task-relation-card--static {
  background: #fbfdfe;
  cursor: default;
}

.task-relation-icon {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 13px;
  color: var(--app-primary, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.task-relation-copy {
  min-width: 0;
}

.task-relation-copy strong {
  display: block;
  overflow: hidden;
  color: #102a43;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-relation-copy small {
  display: block;
  margin-top: 3px;
  color: #7b8ea0;
  font-size: 11px;
}

a.task-relation-card .task-relation-copy small {
  color: var(--app-primary-dark, #087cae);
  font-weight: 600;
}

.task-relation-chevron {
  flex: 0 0 auto;
  color: #9aabb9;
}

a.task-relation-card:hover .task-relation-chevron {
  color: var(--app-primary, #18a6e4);
}

:global(body.dark-only .task-relation-card) {
  border-color: #3a4652;
  background: #25303a;
}

:global(body.dark-only .task-relation-copy strong) {
  color: #eef3f6;
}

.task-contact-card {
  display: grid;
  min-width: 0;
  min-height: 76px;
  grid-template-columns: 46px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
  border: 1px solid #e3ebf0;
  border-radius: 14px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(31, 52, 73, 0.035);
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.task-contact-card:hover {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.32);
  box-shadow: 0 8px 20px rgba(31, 52, 73, 0.07);
  transform: translateY(-1px);
}

.task-contact-card--external {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  background: linear-gradient(
    135deg,
    #fff 35%,
    rgba(var(--app-primary-rgb, 24, 166, 228), 0.045)
  );
}

.task-contact-avatar {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 3px solid #fff;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(
    145deg,
    var(--app-primary, #18a6e4),
    var(--app-secondary, #75c4ef)
  );
  box-shadow: 0 6px 14px rgba(22, 76, 105, 0.14);
  font-size: 12px;
  font-weight: 800;
}

.task-contact-copy {
  min-width: 0;
}

.task-contact-copy strong {
  overflow: hidden;
  color: #102a43;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-contact-copy a {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  overflow: hidden;
  color: #486581;
  font-size: 11px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-contact-copy a:hover {
  color: var(--app-primary-dark, #087cae);
}

.task-contact-owner-note {
  margin-top: 10px;
}

.task-contact-owner-note span {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  padding: 4px 9px;
  overflow: hidden;
  color: var(--app-primary-dark, #087cae);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.11);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-contact-owner-note :deep(.solar-icon) {
  flex: 0 0 auto;
  color: var(--app-primary, #18a6e4);
}

:global(body.dark-only .task-contact-card) {
  border-color: #3a4652;
  background: #25303a;
}

:global(body.dark-only .task-contact-card--external) {
  background: linear-gradient(
    135deg,
    #25303a 35%,
    rgba(var(--app-primary-rgb, 24, 166, 228), 0.08)
  );
}

:global(body.dark-only .task-contact-copy strong) {
  color: #eef3f6;
}

:global(body.dark-only .task-contact-copy a) {
  color: #a8b6c5;
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
.evidence-preview :deep(.google-map-view) {
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

.comment-item--own {
  justify-content: flex-end;
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
  display: flex;
  max-width: min(75%, 560px);
  min-width: 0;
  align-items: flex-start;
  flex-direction: column;
}

.comment-item__own-content {
  display: flex;
  max-width: min(75%, 560px);
  min-width: 0;
  align-items: flex-end;
  flex-direction: column;
}

.comment-item__own-meta,
.comment-item__top {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.comment-item__own-meta time,
.comment-item__top time {
  color: #94a3b8;
  font-size: 11px;
}

.comment-item__own-name {
  border-left: 1px solid #cbd5e1;
  padding-left: 7px;
}

.comment-item p.comment-item__own-bubble,
.comment-item p.comment-item__other-bubble {
  margin: 0;
  padding: 9px 12px;
  color: #102a43;
  text-align: left;
}

.comment-item p.comment-item__own-bubble {
  border-radius: 12px 12px 3px 12px;
  background: rgba(var(--app-secondary-rgb, 117, 196, 239), 0.18);
}

.comment-item__own-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  max-width: 100%;
}

.comment-item__own-message .comment-delete {
  flex: 0 0 24px;
}

.comment-item__own-message + .comment-item__own-message {
  margin-top: 4px;
}

.comment-item p.comment-item__other-bubble {
  border-radius: 12px 12px 12px 3px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
}

.comment-item p.comment-item__other-bubble + .comment-item__other-bubble {
  margin-top: 4px;
}

.comment-item__actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 5px;
}

.comment-item strong {
  color: #111827;
  font-size: 12px;
}

.comment-item p {
  margin: 2px 0 0;
  color: #334155;
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
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
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
  color: #102a43;
  caret-color: #102a43;
  cursor: text;
}

:global(body.dark-only) .comment-form input {
  caret-color: var(--app-primary-soft-light, #b9e8fa);
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
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
  margin-top: 16px;
  border: 1px solid #e5eaee;
  border-radius: 16px;
  padding: 16px 20px;
  background: #fff;
  box-shadow: 0 7px 24px rgba(31, 52, 73, 0.05);
}

.download-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 9px;
}

.download-button {
  color: #fff;
}

.pdf-icon {
  width: 19px;
  height: 19px;
  flex: 0 0 auto;
  overflow: visible;
  color: currentColor;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pdf-icon text {
  fill: currentColor;
  stroke: none;
  font-family: Arial, sans-serif;
  font-size: 5.5px;
  font-weight: 800;
  letter-spacing: -0.2px;
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

  .task-name-card__actions {
    grid-column: 2;
    align-self: auto;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .edit-task-button {
    min-height: 34px;
    padding: 6px 10px;
    font-size: 11px;
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
  .evidence-preview :deep(.google-map-view),
  .evidence-empty {
    height: 145px;
    min-height: 145px;
  }

  .task-detail-footer {
    grid-template-columns: 1fr;
    padding: 12px;
  }

  .download-button {
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
