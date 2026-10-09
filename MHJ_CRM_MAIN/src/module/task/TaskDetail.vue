<template>
  <div class="task-detail-shell">
    <header class="task-detail-header">
      <button class="task-detail-back" type="button" aria-label="Kembali ke daftar tugas" @click="emit('close')">
        <vue-feather type="arrow-left" size="22" />
      </button>
      <h4>Detail Tugas</h4>
    </header>

    <div v-if="loading" class="task-detail-loading">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      Memuat detail tugas...
    </div>

    <div v-if="task" class="task-detail-scroll">
      <section class="task-name-card">
        <h5>{{ task.title || 'Tanpa nama tugas' }}</h5>
      </section>

      <section class="detail-card">
        <div class="detail-card-title">
          <span class="detail-card-icon"><vue-feather type="briefcase" size="18" /></span>
          <h5>Detail Task Sales</h5>
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
            <span>Status Project</span>
            <strong>{{ task.projectId || task.projectName ? 'ADA' : 'TIDAK ADA' }}</strong>
          </div>
          <div class="detail-field">
            <span>Nama Project</span>
            <strong>{{ task.projectName || '-' }}</strong>
          </div>
          <div class="detail-field">
            <span>Rumah Sakit/Perusahaan</span>
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
          <div class="detail-field">
            <span>Pipeline Project</span>
            <strong class="pipeline-text">{{ pipelineLabel }}</strong>
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
          <div>{{ task.description || 'Tidak ada catatan tambahan.' }}</div>
        </div>

        <div class="evidence-title">Live Photo &amp; GPS Location</div>
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
          <h5>Komentar</h5>
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
  loading?: boolean
}>()
const emit = defineEmits<{
  close: []
}>()

const commentText = ref('')
const comments = ref<CommentItem[]>([])

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
  max-height: calc(100vh - 40px);
  flex-direction: column;
  overflow: hidden;
  background: #f8fafc;
}

.task-detail-header {
  display: flex;
  min-height: 64px;
  flex: 0 0 auto;
  align-items: center;
  gap: 18px;
  padding: 14px 22px;
  background: #18a6e4;
  color: #fff;
}

.task-detail-header h4 {
  margin: 0;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
}

.task-detail-back {
  display: inline-flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  color: #fff;
}

.task-detail-back:hover {
  background: rgba(255, 255, 255, 0.15);
}

.task-detail-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 10px 20px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 13px;
}

.task-detail-scroll {
  display: flex;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding: 20px;
}

.task-name-card,
.detail-card {
  border: 1px solid #dbe2ea;
  border-radius: 14px;
  background: #fff;
}

.task-name-card {
  padding: 20px;
}

.task-name-card h5 {
  margin: 0;
  color: #111827;
  font-size: 18px;
  line-height: 1.35;
}

.detail-card {
  padding: 20px;
}

.detail-card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.detail-card-title h5 {
  margin: 0;
  color: #111827;
  font-size: 16px;
}

.detail-card-icon {
  display: inline-flex;
  color: #1e3a5f;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;
}

.detail-field {
  min-width: 0;
}

.detail-field--wide {
  grid-column: 1 / -1;
}

.detail-field > span,
.detail-notes > span,
.evidence-title {
  display: block;
  margin-bottom: 4px;
  color: #6b7280;
  font-size: 12px;
}

.detail-field strong {
  display: block;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  overflow-wrap: anywhere;
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
  margin-top: 18px;
}

.detail-notes div {
  min-height: 74px;
  border: 1px solid #dbe2ea;
  border-radius: 9px;
  padding: 12px 14px;
  color: #4b5563;
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-wrap;
}

.evidence-title {
  margin-top: 18px;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.evidence-preview {
  position: relative;
  min-height: 190px;
  overflow: hidden;
  border: 1px solid #dbe2ea;
  border-radius: 10px;
  background: #f8fafc;
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
  flex: 0 0 auto;
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  background: #fff;
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
  .task-detail-shell {
    height: 100dvh;
    max-height: 100dvh;
  }

  .task-detail-header {
    min-height: 60px;
    justify-content: flex-start;
    padding: 12px 16px;
  }

  .task-detail-header h4 {
    flex: 1;
    padding-right: 36px;
    text-align: center;
  }

  .task-detail-scroll {
    gap: 14px;
    padding: 16px 12px;
  }

  .task-name-card,
  .detail-card {
    padding: 16px 12px;
    border-radius: 13px;
  }

  .task-name-card h5 {
    font-size: 15px;
  }

  .detail-grid {
    gap: 15px 12px;
  }

  .detail-field strong {
    font-size: 12px;
  }

  .evidence-preview,
  .evidence-preview img,
  .evidence-preview iframe,
  .evidence-empty {
    height: 145px;
    min-height: 145px;
  }

  .task-detail-footer {
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

  .task-detail-header,
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
