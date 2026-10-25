<template>
  <div class="comments-panel">
    <header class="comments-header">
      <div class="comments-header__title">
        <span class="comments-header__icon" aria-hidden="true">
          <vue-feather type="message-square" size="18" />
        </span>
        <div>
          <h5>{{ title || 'Komentar' }}</h5>
          <p>Diskusi &amp; catatan terkait data ini.</p>
        </div>
      </div>
      <span class="comments-count">{{ countLabel }}</span>
    </header>

    <!-- Daftar komentar -->
    <div v-if="loading" class="comments-state">
      <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Memuat komentar...
    </div>

    <div v-else-if="loadError" class="comments-state comments-state--error">
      <vue-feather type="alert-circle" size="18" />
      <span>{{ loadError }}</span>
      <button class="btn btn-sm btn-outline-primary" type="button" @click="load">
        Coba lagi
      </button>
    </div>

    <ul v-else-if="comments.length" class="comments-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <div class="comment-item__avatar" aria-hidden="true">
          {{ initial(comment.authorName) }}
        </div>
        <div class="comment-item__content">
          <div class="comment-item__top">
            <div>
              <h6>{{ comment.authorName }}</h6>
              <time :datetime="comment.createdAt">{{ formatTime(comment.createdAt) }}</time>
            </div>
            <button
              v-if="canDelete(comment)"
              class="comment-item__delete"
              type="button"
              :disabled="deletingId === comment.id"
              @click="handleDelete(comment)"
              aria-label="Hapus komentar"
            >
              <vue-feather type="trash-2" size="14" />
            </button>
          </div>
          <p v-if="comment.body" class="comment-item__body">{{ comment.body }}</p>

          <!-- Attachments: foto thumbnail + document link -->
          <div v-if="comment.attachments.length" class="comment-item__attachments">
            <a
              v-for="(att, idx) in photoAttachments(comment)"
              :key="`p-${idx}`"
              :href="att.path"
              target="_blank"
              rel="noopener"
              class="comment-item__photo"
            >
              <img :src="att.path" :alt="att.name" loading="lazy" />
            </a>
            <a
              v-for="(att, idx) in documentAttachments(comment)"
              :key="`d-${idx}`"
              :href="att.path"
              target="_blank"
              rel="noopener"
              class="comment-item__doc"
            >
              <vue-feather type="paperclip" size="14" />
              <span>{{ att.name }}</span>
            </a>
          </div>
        </div>
      </li>
    </ul>

    <div v-else class="comments-empty">
      <vue-feather type="message-circle" size="28" />
      <strong>Belum ada komentar</strong>
      <p>Jadi yang pertama memberi catatan di sini.</p>
    </div>

    <!-- Form input komentar baru -->
    <form class="comment-composer" @submit.prevent="handleSubmit">
      <textarea
        v-model="draftBody"
        class="form-control comment-composer__input"
        rows="2"
        placeholder="Tulis komentar..."
        :disabled="submitting"
      />

      <!-- Preview file terpilih -->
      <ul v-if="pendingFiles.length" class="comment-composer__files">
        <li v-for="(file, idx) in pendingFiles" :key="file.name + idx">
          <vue-feather :type="isImage(file) ? 'image' : 'file'" size="12" />
          <span>{{ file.name }}</span>
          <button type="button" @click="removeFile(idx)" aria-label="Hapus file">
            <vue-feather type="x" size="12" />
          </button>
        </li>
      </ul>

      <div class="comment-composer__actions">
        <label class="comment-composer__attach" :class="{ disabled: submitting }">
          <input
            ref="fileInput"
            type="file"
            multiple
            accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
            @change="onFilesPicked"
            :disabled="submitting"
          />
          <vue-feather type="paperclip" size="14" />
          Lampirkan
        </label>

        <button
          type="submit"
          class="btn btn-primary btn-sm comment-composer__send"
          :disabled="!canSubmit"
        >
          <span v-if="submitting" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
          <vue-feather v-else type="send" size="13" />
          Kirim
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import {
  fetchComments,
  saveComment,
  deleteComment,
  type Comment,
  type CommentAttachment,
  type CommentParentType,
} from '@/services/commentService'
import { useAuthStore } from '@/store/auth'

const props = defineProps<{
  parentType: CommentParentType
  parentId: number | null | undefined
  title?: string
}>()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const comments = ref<Comment[]>([])
const loading = ref(false)
const loadError = ref<string | null>(null)

const draftBody = ref('')
const pendingFiles = ref<File[]>([])
const submitting = ref(false)
const deletingId = ref<number | null>(null)

const fileInput = ref<HTMLInputElement | null>(null)

const countLabel = computed(() => {
  if (loading.value) return '...'
  return `${comments.value.length} komentar`
})

const canSubmit = computed(() => {
  if (submitting.value) return false
  if (!props.parentId) return false
  return draftBody.value.trim().length > 0 || pendingFiles.value.length > 0
})

async function load() {
  const id = Number(props.parentId)
  if (!Number.isFinite(id) || id <= 0) {
    comments.value = []
    return
  }
  loading.value = true
  loadError.value = null
  try {
    comments.value = await fetchComments(props.parentType, id)
  } catch {
    loadError.value = 'Gagal memuat komentar.'
    comments.value = []
  } finally {
    loading.value = false
  }
}

watch(
  () => [props.parentType, props.parentId],
  () => {
    void load()
  },
  { immediate: true },
)

defineExpose({ reload: load })

function onFilesPicked(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files) return
  const picked = Array.from(input.files)
  pendingFiles.value = [...pendingFiles.value, ...picked].slice(0, 10)
  input.value = ''
}

function removeFile(index: number) {
  pendingFiles.value.splice(index, 1)
}

function isImage(file: File): boolean {
  return file.type.startsWith('image/')
}

async function handleSubmit() {
  if (!canSubmit.value) return
  const id = Number(props.parentId)
  if (!Number.isFinite(id) || id <= 0) return

  submitting.value = true
  try {
    const photos = pendingFiles.value.filter(isImage)
    const documents = pendingFiles.value.filter((f) => !isImage(f))
    await saveComment({
      parentType: props.parentType,
      parentId: id,
      body: draftBody.value.trim(),
      photos,
      documents,
    })
    draftBody.value = ''
    pendingFiles.value = []
    if (fileInput.value) fileInput.value.value = ''
    await load()
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Gagal mengirim komentar',
      text: 'Coba lagi beberapa saat.',
    })
  } finally {
    submitting.value = false
  }
}

function canDelete(comment: Comment): boolean {
  return comment.authorId != null && comment.authorId === (user.value?.id ?? -1)
}

async function handleDelete(comment: Comment) {
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

  const id = Number(props.parentId)
  if (!Number.isFinite(id) || id <= 0) return

  deletingId.value = comment.id
  try {
    await deleteComment(comment.id, props.parentType, id)
    await load()
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Gagal menghapus komentar',
    })
  } finally {
    deletingId.value = null
  }
}

function initial(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (!parts.length) return '?'
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase() || '?'
}

function formatTime(value: string): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function photoAttachments(comment: Comment): CommentAttachment[] {
  return comment.attachments.filter((a) => a.type === 'photo')
}

function documentAttachments(comment: Comment): CommentAttachment[] {
  return comment.attachments.filter((a) => a.type === 'document')
}
</script>

<style scoped>
.comments-panel {
  background: #fff;
  border-radius: 12px;
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.comments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.comments-header__title {
  display: flex;
  gap: 12px;
  align-items: center;
}

.comments-header__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
}

.comments-header h5 {
  margin: 0 0 2px;
  color: #0f172a;
  font-size: 16px;
  font-weight: 700;
}

.comments-header p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
}

.comments-count {
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary-dark, #116e96);
  font-size: 11px;
  font-weight: 700;
}

.comments-state {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px;
  border-radius: 10px;
  background: #f8fafc;
  color: #475569;
  font-size: 13px;
}

.comments-state--error {
  background: rgba(239, 68, 68, 0.06);
  color: #b91c1c;
}

.comments-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 420px;
  overflow-y: auto;
}

.comment-item {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
}

.comment-item__avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--app-primary, #18a6e4), var(--app-primary-dark, #116e96));
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
}

.comment-item__top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: flex-start;
}

.comment-item__top h6 {
  margin: 0;
  color: #0f172a;
  font-size: 13px;
  font-weight: 700;
}

.comment-item__top time {
  color: #94a3b8;
  font-size: 11px;
}

.comment-item__delete {
  background: transparent;
  border: 0;
  color: #94a3b8;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
}

.comment-item__delete:hover:not(:disabled) {
  color: #b91c1c;
  background: rgba(239, 68, 68, 0.08);
}

.comment-item__body {
  margin: 6px 0 0;
  color: #334155;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}

.comment-item__attachments {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.comment-item__photo {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  border: 1px solid #e2e8f0;
}

.comment-item__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.comment-item__doc {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  font-size: 12px;
  color: var(--app-primary-dark, #116e96);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.06);
  text-decoration: none;
  max-width: 240px;
}

.comment-item__doc span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comments-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 22px;
  border-radius: 10px;
  background: #f8fafc;
  color: #64748b;
  text-align: center;
}

.comments-empty strong {
  color: #0f172a;
  font-size: 13px;
}

.comments-empty p {
  margin: 0;
  font-size: 12px;
}

.comment-composer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px dashed #e2e8f0;
}

.comment-composer__input {
  resize: vertical;
  min-height: 60px;
  font-size: 13px;
}

.comment-composer__files {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.comment-composer__files li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: #f1f5f9;
  border-radius: 999px;
  font-size: 11px;
  color: #475569;
  max-width: 240px;
}

.comment-composer__files li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.comment-composer__files button {
  background: transparent;
  border: 0;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
}

.comment-composer__files button:hover {
  color: #b91c1c;
}

.comment-composer__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.comment-composer__attach {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f1f5f9;
  color: #475569;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.comment-composer__attach.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.comment-composer__attach input {
  display: none;
}

.comment-composer__send {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
