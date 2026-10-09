<template>
  <div class="container-fluid project-detail-v2">
    <div class="detail-toolbar">
      <router-link :to="routes.Project.ProjectList" class="back-link" aria-label="Kembali ke daftar proyek">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div>
        <p class="toolbar-eyebrow">Project</p>
        <h3>Detail Proyek</h3>
      </div>
      <button class="edit-button" type="button" aria-label="Edit proyek" disabled>
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>

    <div v-if="loading && !project" class="detail-state card">
      <div class="spinner-border text-primary" role="status"></div>
      <span>Memuat detail proyek...</span>
    </div>

    <div v-else-if="loadError || !project" class="detail-state card">
      <i class="fa-solid fa-circle-exclamation text-danger"></i>
      <span>{{ loadError || 'Data proyek tidak ditemukan.' }}</span>
      <router-link class="btn btn-primary btn-sm" :to="routes.Project.ProjectList">
        Kembali ke Project List
      </router-link>
    </div>

    <template v-else>
      <section class="project-hero">
        <div class="product-icon" aria-hidden="true">
          <i class="fa-solid fa-kit-medical"></i>
        </div>
        <div class="hero-copy">
          <h4>{{ productTitle }}</h4>
          <p><i class="fa-solid fa-location-dot"></i>{{ project.companyName || 'Lokasi belum tersedia' }}</p>
          <span class="stage-pill">{{ project.stageName || titleCase(project.status) }}</span>
        </div>
        <div class="hero-value">
          <small>Value</small>
          <strong>{{ formatMoney(projectValue) }}</strong>
        </div>
      </section>

      <div class="detail-tabs" role="tablist" aria-label="Detail proyek">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'info'"
          :class="{ active: activeTab === 'info' }"
          @click="activeTab = 'info'"
        >
          Info
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'activity'"
          :class="{ active: activeTab === 'activity' }"
          @click="activeTab = 'activity'"
        >
          Aktivitas
        </button>
      </div>

      <section v-if="activeTab === 'info'" class="info-panel">
        <div class="info-grid">
          <article class="detail-card">
            <h5>Informasi Proyek</h5>
            <div class="field-grid">
              <div class="field field-wide">
                <span>Nama Proyek</span>
                <strong>{{ project.projectName || '-' }}</strong>
              </div>
              <div class="field field-wide">
                <span>Owner</span>
                <strong>{{ project.ownerName || '-' }}</strong>
              </div>
              <div class="field">
                <span>Dibuat</span>
                <strong>{{ formatDate(project.createdAt) }}</strong>
              </div>
              <div class="field">
                <span>Estimasi PO</span>
                <strong>{{ formatDate(project.expectedCloseDate) }}</strong>
              </div>
              <div class="field">
                <span>Qty</span>
                <strong>{{ quantity }}</strong>
              </div>
              <div class="field">
                <span>Harga</span>
                <strong>{{ formatMoney(unitPrice) }}</strong>
              </div>
              <div class="field field-wide value-field">
                <span>Value</span>
                <strong>{{ formatMoney(projectValue) }}</strong>
              </div>
              <div class="field field-wide">
                <span>Divisi</span>
                <strong>{{ project.divisionCode || '-' }}</strong>
              </div>
            </div>
          </article>

          <article class="detail-card">
            <h5>Informasi Pendukung</h5>
            <div class="field-grid">
              <div class="field field-wide contact-field">
                <span>Kontak</span>
                <div v-if="contacts.length" class="contact-list">
                  <div v-for="contact in contacts" :key="`${contact.name}-${contact.phone}`" class="contact-item">
                    <strong>{{ contact.name }}</strong>
                    <div class="contact-actions">
                      <a
                        v-if="contact.phone"
                        :href="`tel:${contact.phone}`"
                        :aria-label="`Telepon ${contact.name}`"
                      ><i class="fa-solid fa-phone"></i></a>
                      <a
                        v-if="contact.phone"
                        :href="whatsappLink(contact.phone)"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`WhatsApp ${contact.name}`"
                      ><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                  </div>
                </div>
                <strong v-else>-</strong>
              </div>
              <div class="field field-wide">
                <span>Kompetitor</span>
                <strong>{{ project.competitorName || '-' }}</strong>
              </div>
              <div class="field field-wide">
                <span>Sumber Pendanaan</span>
                <strong>{{ project.sumberdanaName || '-' }}</strong>
              </div>
              <div class="field field-wide notes-field">
                <span>Notes/Catatan</span>
                <strong>{{ notes }}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section v-else class="activity-panel">
        <article class="detail-card timeline-card">
          <div class="section-heading">
            <div>
              <span class="section-kicker">Timeline proyek</span>
              <h5>Riwayat Aktivitas</h5>
            </div>
            <span class="activity-count">{{ activities.length }} aktivitas</span>
          </div>
          <div class="timeline">
            <div v-for="(activity, index) in activities" :key="`${activity.title}-${index}`" class="timeline-item">
              <div class="timeline-marker">
                <div class="timeline-icon" :class="index % 2 ? 'green' : 'blue'">
                  <i :class="index % 2 ? 'fa-solid fa-phone' : 'fa-solid fa-briefcase'"></i>
                </div>
              </div>
              <div class="timeline-content">
                <div class="timeline-content-top">
                  <strong>{{ activity.title }}</strong>
                  <span v-if="index === 0" class="latest-badge">Terbaru</span>
                </div>
                <p class="activity-description">{{ activity.description }}</p>
                <div class="activity-date">
                  <i class="fa-regular fa-calendar"></i>
                  <span>{{ activity.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="detail-card comments-card">
          <h5><i class="fa-regular fa-comment"></i> Komentar</h5>
          <p v-if="!comments.length" class="empty-comment">Belum ada komentar.</p>
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <div class="comment-avatar">{{ initials(comment.author) }}</div>
            <div><strong>{{ comment.author }}</strong><p>{{ comment.message }}</p></div>
          </div>
          <form class="comment-form" @submit.prevent="addComment">
            <input v-model.trim="newComment" type="text" placeholder="Tambahkan komentar..." aria-label="Komentar baru" />
            <button type="submit" :disabled="!newComment">Kirim</button>
          </form>
        </article>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { routes } from '@/router/routes'
import { useProjectStore } from '@/store/project'
import type { Projects } from '@/types/project'

type UnknownRecord = Record<string, unknown>
interface ContactInfo { name: string; phone: string }
interface ActivityInfo { title: string; date: string; description: string }
interface CommentInfo { id: number; author: string; message: string }

const route = useRoute()
const store = useProjectStore()
const { items, selectedItem, selectedDetails, loading } = storeToRefs(store)
const activeTab = ref<'info' | 'activity'>('info')
const loadError = ref('')
const newComment = ref('')
const comments = ref<CommentInfo[]>([])

const project = computed<Projects | null>(() => selectedItem.value)
const detailRows = computed(() => selectedDetails.value as UnknownRecord[])

function firstValue(keys: string[]): unknown {
  for (const row of detailRows.value) {
    for (const key of keys) {
      const value = row[key]
      if (value !== undefined && value !== null && value !== '') return value
    }
  }
  return undefined
}

function asNumber(value: unknown): number {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

function firstProductName(value?: string): string {
  if (!value) return 'Produk belum tersedia'
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed) && parsed.length) return String(parsed[0])
  } catch {
    // Nilai dari API lama dapat berupa string dipisahkan koma.
  }
  return value.split(',')[0]?.trim() || value
}

const productTitle = computed(() => firstProductName(project.value?.productNames))
const quantity = computed(() => project.value?.quantity ?? (asNumber(firstValue(['quantity', 'qty'])) || 1))
const unitPrice = computed(() => project.value?.unitPrice ?? asNumber(firstValue(['unit_price', 'price', 'harga'])))
const projectValue = computed(() => {
  if (project.value?.amountValue) return project.value.amountValue
  return quantity.value * unitPrice.value
})
const notes = computed(() => project.value?.notes || String(firstValue(['notes', 'note', 'description']) ?? '-'))

const contacts = computed<ContactInfo[]>(() => {
  const collected: ContactInfo[] = []
  const baseName = project.value?.contactName || ''
  const basePhone = project.value?.contactPhone || ''
  if (baseName) collected.push({ name: baseName, phone: basePhone })

  detailRows.value.forEach((row) => {
    const name = String(row.contact_name ?? row.contact ?? row.pic_name ?? '')
    const phone = String(row.contact_phone ?? row.phone ?? row.telephone_1 ?? row.mobile ?? '')
    if (name && !collected.some((item) => item.name === name)) collected.push({ name, phone })
  })
  return collected
})

const activities = computed<ActivityInfo[]>(() => {
  const fromApi = detailRows.value
    .map((row) => ({
      title: String(row.activity ?? row.activity_name ?? row.timeline_activity ?? row.event ?? ''),
      date: formatDate(String(row.activity_date ?? row.timeline_date ?? row.date ?? row.created_at ?? '')),
      description: String(row.activity_description ?? row.description ?? 'Pembaruan aktivitas pada proyek ini.'),
    }))
    .filter((item) => item.title)

  if (fromApi.length) return fromApi
  return [{
    title: 'Project dibuat',
    date: formatDate(project.value?.createdAt),
    description: `Project ${project.value?.projectName || ''} berhasil ditambahkan ke pipeline.`,
  }]
})

function titleCase(value: string): string {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatMoney(value: number): string {
  const currency = project.value?.currency || 'IDR'
  return `${currency} ${Math.max(0, value).toLocaleString('id-ID')}`
}

function formatDate(value?: string): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

function whatsappLink(phone: string): string {
  let digits = phone.replace(/\D/g, '')
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`
  return `https://wa.me/${digits}`
}

function initials(name: string): string {
  return name.split(/\s+/).slice(0, 2).map((word) => word[0]).join('').toUpperCase()
}

function addComment() {
  if (!newComment.value) return
  comments.value.push({ id: Date.now(), author: 'Saya', message: newComment.value })
  newComment.value = ''
}

async function loadProject() {
  loadError.value = ''
  activeTab.value = 'info'
  store.selectedItem = null
  store.selectedDetails = []
  const requestedId = Number(route.query.id)
  try {
    let id = Number.isFinite(requestedId) && requestedId > 0 ? requestedId : 0
    if (!id) {
      if (!items.value.length) await store.fetchProjects({ per_page: 100 })
      id = items.value[0]?.id ?? 0
    }
    if (!id) throw new Error('Belum ada project yang dapat ditampilkan.')
    await store.fetchProjectById(id)
    if (!selectedItem.value) throw new Error('Data project tidak ditemukan.')
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : (store.error ?? 'Gagal memuat detail project.')
  }
}

watch(() => route.query.id, loadProject, { immediate: true })
</script>

<style scoped>
.project-detail-v2 { --detail-blue: var(--theme-default, #25a9e0); max-width: 1180px; padding-bottom: 28px; }
.detail-toolbar { display: grid; grid-template-columns: 44px 1fr 44px; align-items: center; gap: 14px; margin-bottom: 18px; }
.detail-toolbar h3 { margin: 0; font-size: 24px; }
.toolbar-eyebrow { margin: 0 0 2px; color: #8c939c; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }
.back-link, .edit-button { display: grid; place-items: center; width: 42px; height: 42px; border: 0; border-radius: 12px; color: var(--detail-blue); background: #fff; box-shadow: 0 4px 16px rgba(28, 45, 69, .08); }
.edit-button:disabled { opacity: .65; }
.project-hero { display: grid; grid-template-columns: 76px minmax(0, 1fr) auto; align-items: center; gap: 18px; padding: 22px 26px; border-radius: 18px; color: #fff; background: linear-gradient(120deg, #239feb, #85c4ff); box-shadow: 0 14px 30px rgba(40, 158, 228, .2); }
.product-icon { display: grid; place-items: center; width: 66px; height: 66px; border-radius: 50%; color: var(--detail-blue); background: rgba(255,255,255,.86); font-size: 28px; }
.hero-copy h4 { margin: 0 0 7px; color: #fff; font-size: 22px; }
.hero-copy p { display: flex; align-items: center; gap: 7px; margin: 0 0 8px; opacity: .94; }
.stage-pill { display: inline-flex; padding: 4px 18px; border-radius: 999px; background: rgba(0, 166, 224, .85); font-size: 12px; letter-spacing: .04em; }
.hero-value { min-width: 175px; padding-left: 24px; border-left: 1px solid rgba(255,255,255,.35); text-align: right; }
.hero-value small, .hero-value strong { display: block; }
.hero-value strong { font-size: 18px; }
.detail-tabs { display: grid; grid-template-columns: 1fr 1fr; margin: 18px 0; border-bottom: 1px solid #d9dde2; }
.detail-tabs button { position: relative; padding: 12px; border: 0; color: #8b8b8b; background: transparent; font-weight: 500; }
.detail-tabs button::after { content: ''; position: absolute; right: 0; bottom: -1px; left: 0; height: 4px; border-radius: 4px 4px 0 0; background: transparent; }
.detail-tabs button.active { color: var(--detail-blue); }
.detail-tabs button.active::after { background: var(--detail-blue); }
.info-grid, .activity-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.detail-card { padding: 22px; border: 1px solid #e4e8ec; border-radius: 16px; background: #fff; box-shadow: 0 6px 20px rgba(27, 43, 65, .04); }
.detail-card h5 { margin: 0 0 18px; font-size: 16px; }
.field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.field { min-width: 0; padding: 12px 14px; border: 1px solid #dfe5e9; border-radius: 13px; background: #fff; }
.field-wide { grid-column: 1 / -1; }
.field > span { display: block; margin-bottom: 6px; color: #858b93; font-size: 12px; }
.field strong { display: block; overflow-wrap: anywhere; color: #1f252c; font-weight: 500; }
.value-field { border-color: rgba(37, 169, 224, .35); background: rgba(37, 169, 224, .055); }
.value-field strong { color: var(--detail-blue); font-size: 18px; font-weight: 600; }
.contact-list { display: grid; gap: 8px; }
.contact-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 12px; border-radius: 11px; background: #edf0f2; }
.contact-actions { display: flex; gap: 12px; }
.contact-actions a { color: #24467b; font-size: 18px; }
.contact-actions a:last-child { color: #14c96e; }
.notes-field { min-height: 88px; }
.section-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 22px; }
.section-heading h5 { margin: 2px 0 0; font-size: 18px; }
.section-kicker { color: var(--detail-blue); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.activity-count { flex: 0 0 auto; padding: 6px 10px; border-radius: 999px; color: #617080; background: #f0f4f7; font-size: 11px; font-weight: 600; }
.timeline { position: relative; display: grid; gap: 16px; }
.timeline::before { content: ''; position: absolute; top: 22px; bottom: 22px; left: 21px; width: 2px; background: linear-gradient(to bottom, var(--detail-blue), #dce8ee); }
.timeline-item { position: relative; display: grid; grid-template-columns: 44px minmax(0, 1fr); align-items: start; gap: 14px; }
.timeline-marker { z-index: 1; padding-top: 10px; background: #fff; }
.timeline-icon { display: grid; place-items: center; width: 44px; height: 44px; border: 5px solid #fff; border-radius: 50%; color: #168ec4; background: #ddf3fd; box-shadow: 0 0 0 1px #d6edf7; }
.timeline-icon.green { color: #168b4c; background: #def5e7; box-shadow: 0 0 0 1px #d2efde; }
.timeline-content { min-width: 0; padding: 15px 16px; border: 1px solid #e7ecef; border-radius: 13px; background: linear-gradient(135deg, #fff, #fbfdfe); box-shadow: 0 5px 15px rgba(31, 53, 72, .045); }
.timeline-content-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.timeline-content-top strong { min-width: 0; color: #202b35; font-size: 14px; line-height: 1.35; }
.latest-badge { flex: 0 0 auto; padding: 4px 9px; border-radius: 999px; color: #0877a7; background: #e1f4fc; font-size: 10px; font-weight: 700; }
.activity-description { display: block !important; margin: 6px 0 11px !important; color: #7c8792 !important; font-size: 12px !important; line-height: 1.55; }
.activity-date { display: inline-flex; align-items: center; gap: 7px; padding: 5px 9px; border-radius: 7px; color: #667583; background: #f2f5f7; font-size: 11px; font-weight: 500; }
.activity-date i { color: var(--detail-blue); }
.comment-item p { margin: 3px 0 0; color: #90969d; font-size: 12px; }
.comments-card h5 i { margin-right: 6px; color: #29456f; }
.empty-comment { color: #90969d; }
.comment-item { display: grid; grid-template-columns: 36px 1fr; gap: 10px; margin-bottom: 12px; }
.comment-avatar { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: #fff; background: var(--detail-blue); font-size: 11px; font-weight: 700; }
.comment-form { display: grid; grid-template-columns: 1fr auto; gap: 8px; margin-top: 16px; }
.comment-form input { min-width: 0; padding: 10px 14px; border: 1px solid #dce1e6; border-radius: 999px; outline: none; }
.comment-form input:focus { border-color: var(--detail-blue); }
.comment-form button { border: 0; color: #27416a; background: transparent; font-size: 12px; font-weight: 600; }
.comment-form button:disabled { opacity: .45; }
.detail-state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; min-height: 280px; padding: 30px; text-align: center; }
.detail-state > i { font-size: 32px; }

@media (max-width: 767.98px) {
  .project-detail-v2 { padding-right: 12px; padding-left: 12px; }
  .detail-toolbar { grid-template-columns: 38px 1fr 38px; }
  .detail-toolbar h3 { font-size: 20px; text-align: center; }
  .toolbar-eyebrow { display: none; }
  .back-link, .edit-button { width: 36px; height: 36px; box-shadow: none; background: transparent; }
  .project-hero { grid-template-columns: 58px minmax(0, 1fr); gap: 12px; padding: 16px; border-radius: 14px; }
  .product-icon { width: 56px; height: 56px; font-size: 24px; }
  .hero-copy h4 { overflow: hidden; font-size: 18px; text-overflow: ellipsis; white-space: nowrap; }
  .hero-copy p { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .hero-value { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; padding: 11px 0 0; border-top: 1px solid rgba(255,255,255,.28); border-left: 0; text-align: left; }
  .hero-value strong { font-size: 15px; }
  .info-grid, .activity-panel { grid-template-columns: 1fr; }
  .detail-card { padding: 16px; }
  .section-heading { align-items: center; }
  .timeline-content-top { align-items: flex-start; }
}
</style>
