<template>
  <div class="task-detail-shell">
    <div v-if="task" class="task-detail-scroll">
      <section class="task-name-card">
        <span class="task-name-card__icon" aria-hidden="true">
          <vue-feather type="clipboard" size="24" />
        </span>
        <div class="task-name-card__content">
          <span class="task-name-card__eyebrow">Task {{ taskTypeLabel }}</span>
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
            <h5>Detail Task {{ taskTypeLabel }}</h5>
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
            <span>Rumah Sakit</span>
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
          <span class="detail-card-icon"><vue-feather type="camera" size="18" /></span>
          <div>
            <strong>Live Photo &amp; GPS Location</strong>
            <small>Bukti kunjungan dan titik lokasi aktivitas.</small>
          </div>
        </div>
        <div class="evidence-grid">
          <div class="evidence-preview">
            <img v-if="task.photoUrl" :src="task.photoUrl" alt="Live photo kunjungan" />
            <div v-else class="evidence-empty">
              <vue-feather type="camera" size="24" />
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
              <vue-feather type="map-pin" size="24" />
              <span>Lokasi belum tersedia</span>
            </div>
            <a v-if="mapPageUrl" :href="mapPageUrl" target="_blank" rel="noopener noreferrer">
              Buka peta
            </a>
          </div>
        </div>
        <p v-if="task.locationAddress" class="location-address">
          <vue-feather type="map-pin" size="15" />
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

        <div v-if="comments.length" class="comment-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <span class="comment-avatar">{{ initials(comment.author) }}</span>
            <div>
              <strong>{{ comment.author }} <small>baru saja</small></strong>
              <p>{{ comment.message }}</p>
            </div>
          </div>
        </div>
        <p v-else class="comment-empty">Belum ada komentar pada tugas ini.</p>

        <form class="comment-form" @submit.prevent="addComment">
          <span class="comment-avatar">{{ initials(currentUser) }}</span>
          <input v-model.trim="commentText" type="text" placeholder="Tambahkan komentar..." />
          <button type="submit" :disabled="!commentText">Kirim</button>
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
        <vue-feather type="phone" size="17" />
        Hubungi Kontak
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { projectTab } from '@/core/data/project'
import type { TaskDetails } from '@/types/tasks'

interface CommentItem {
  id: number
  author: string
  message: string
}

const props = defineProps<{
  task: TaskDetails | null
}>()

const commentText = ref('')
const comments = ref<CommentItem[]>([])
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

function addComment() {
  const message = commentText.value.trim()
  if (!message) return
  comments.value.push({ id: Date.now(), author: currentUser.value, message })
  commentText.value = ''
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
  border-color: rgba(24, 166, 228, 0.18);
  padding: 22px 24px;
  background:
    radial-gradient(circle at 92% 15%, rgba(24, 166, 228, 0.14), transparent 24%),
    linear-gradient(135deg, #ffffff 0%, #f5fbfe 62%, #eef9fd 100%);
}

.task-name-card::after {
  position: absolute;
  z-index: -1;
  right: -42px;
  bottom: -70px;
  width: 150px;
  height: 150px;
  border: 22px solid rgba(24, 166, 228, 0.055);
  border-radius: 50%;
  content: '';
}

.task-name-card__icon,
.detail-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--theme-default, #18a6e4);
  background: rgba(24, 166, 228, 0.1);
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
  border: 1px solid rgba(24, 166, 228, 0.2);
  border-radius: 999px;
  padding: 6px 11px;
  color: #087cae;
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
  color: #075985 !important;
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
  border-left: 3px solid rgba(24, 166, 228, 0.42);
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
  background: linear-gradient(145deg, #f8fbfd, #f3f8fb);
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
  color: #0369a1;
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
  color: #18a6e4;
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
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 700;
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
  border-color: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.12);
}

.comment-form button {
  border: 0;
  padding: 7px 4px;
  background: transparent;
  color: #0369a1;
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
