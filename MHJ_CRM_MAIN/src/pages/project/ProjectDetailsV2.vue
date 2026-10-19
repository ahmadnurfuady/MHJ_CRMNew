<template>
  <div class="container-fluid project-detail-v2">
    <div class="detail-toolbar">
      <router-link :to="routes.Project.ProjectList" class="back-link" aria-label="Kembali ke daftar peluang">
        <SolarIcon
          name="arrow-left-linear"
          :size="26"
          color="#087cae"
          :stroke-width="2.5"
        />
      </router-link>
      <div>
        <p class="toolbar-eyebrow">Peluang</p>
        <h3>Detail Peluang</h3>
      </div>
      <router-link
        v-if="project"
        class="edit-button"
        :to="{ path: routes.Project.ProjectEdit, query: { id: String(project.id) } }"
        aria-label="Edit peluang"
      >
        <SolarIcon name="fa-pen" />
      </router-link>
      <button v-else class="edit-button" type="button" aria-label="Edit peluang" disabled>
        <SolarIcon name="fa-pen" />
      </button>
    </div>

    <div v-if="loading && !project" class="detail-state card">
      <div class="spinner-border text-primary" role="status"></div>
      <span>Memuat detail peluang...</span>
    </div>

    <div v-else-if="loadError || !project" class="detail-state card">
      <SolarIcon name="fa-circle-exclamation" class="text-danger" />
      <span>{{ loadError || 'Data peluang tidak ditemukan.' }}</span>
      <router-link class="btn btn-primary btn-sm" :to="routes.Project.ProjectList">
        Kembali ke Daftar Peluang
      </router-link>
    </div>

    <template v-else>
      <section class="project-hero">
        <div class="product-icon" aria-hidden="true">
          <MhjIcon name="action_medical_kit" />
        </div>
        <div class="hero-copy">
          <span class="hero-eyebrow">Profil Peluang</span>
          <h4>{{ project.projectName || productTitle }}</h4>
          <p><MhjIcon name="action_location" />{{ project.companyName || 'Lokasi belum tersedia' }}</p>
          <div class="hero-meta">
            <span class="stage-pill">{{ project.stageName || titleCase(project.status) }}</span>
            <span class="duration-pill">
              <SolarIcon name="fa-clock" />{{ stageDuration }} di stage ini
            </span>
          </div>
        </div>
        <div class="hero-value" :title="formatMoney(projectValue)">
          <small>Nilai Peluang</small>
          <strong>{{ formatCompactMoney(projectValue) }}</strong>
        </div>
      </section>

      <WonProjectDocuments
        v-if="isWonProject"
        :project="project"
        @documents-loaded="handleDocumentsLoaded"
        @sales-order-saved="handleSalesOrderSaved"
      />

      <div class="detail-tabs" :class="{ 'has-order-status': hasOrderStatus }" role="tablist" aria-label="Detail peluang">
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
        <button
          v-if="hasOrderStatus"
          type="button"
          role="tab"
          :aria-selected="activeTab === 'order-status'"
          :class="{ active: activeTab === 'order-status' }"
          @click="activeTab = 'order-status'"
        >
          Status Pesanan
        </button>
      </div>

      <section v-if="activeTab === 'info'" class="info-panel">
        <div class="info-grid">
          <article class="detail-card opportunity-card">
            <div class="section-heading">
              <div>
                <span class="section-kicker">Ringkasan</span>
                <h5>Informasi Peluang</h5>
              </div>
              <span class="record-status"><SolarIcon name="fa-circle" />Aktif</span>
            </div>

            <div class="opportunity-name">
              <span>Nama Peluang</span>
              <strong>{{ project.projectName || 'Nama belum tersedia' }}</strong>
            </div>

            <div class="summary-metrics">
              <div class="metric primary" :title="formatMoney(projectValue)">
                <span>Nilai Peluang</span>
                <strong>{{ formatCompactMoney(projectValue) }}</strong>
              </div>
              <div class="metric">
                <span>Lama di Stage</span>
                <strong>{{ stageDuration }}</strong>
              </div>
              <div class="metric">
                <span>Dibuat</span>
                <strong>{{ formatDate(project.createdAt) }}</strong>
              </div>
              <div class="metric">
                <span>Update Terakhir</span>
                <strong>{{ lastUpdated }}</strong>
              </div>
            </div>

            <div class="detail-list">
              <div class="detail-row">
                <span><SolarIcon name="fa-user" />Owner</span>
                <strong class="owner-detail">
                  <i class="owner-avatar">{{ initials(project.ownerName || '') }}</i>
                  {{ project.ownerName || 'Belum ditentukan' }}
                </strong>
              </div>
              <div class="detail-row">
                <span><SolarIcon name="fa-layer-group" />Divisi</span>
                <strong>{{ project.divisionCode || 'Belum ditentukan' }}</strong>
              </div>
              <div class="detail-row">
                <span><SolarIcon name="fa-boxes-stacked" />Qty</span>
                <strong>{{ quantity ?? 'Tidak tersedia' }}</strong>
              </div>
              <div class="detail-row">
                <span><SolarIcon name="fa-tag" />Harga Satuan</span>
                <strong>{{ formatOptionalMoney(unitPrice) }}</strong>
              </div>
            </div>
          </article>

          <article class="detail-card supporting-card">
            <div class="section-heading">
              <div>
                <span class="section-kicker">Relasi dan sumber</span>
                <h5>Informasi Pendukung</h5>
              </div>
            </div>

            <section class="support-section">
              <h6><SolarIcon name="fa-address-card" />Kontak Utama</h6>
              <div v-if="contacts.length" class="contact-list">
                <div class="contact-item">
                  <div class="contact-avatar">{{ initials(primaryContact.name) }}</div>
                  <div class="contact-copy">
                    <router-link
                      v-if="primaryContact.id"
                      :to="{ path: routes.App.Contacts, query: { detail: String(primaryContact.id) } }"
                    >{{ primaryContact.name }}</router-link>
                    <strong v-else>{{ primaryContact.name }}</strong>
                    <span>{{ primaryContact.jobTitle || primaryContact.phone || 'Nomor telepon belum tersedia' }}</span>
                  </div>
                  <div class="contact-actions">
                    <a
                      v-if="primaryContact.phone"
                      :href="`tel:${primaryContact.phone}`"
                      :aria-label="`Telepon ${primaryContact.name}`"
                    ><MhjIcon name="action_phone" /></a>
                    <a
                      v-if="primaryContact.phone"
                      :href="whatsappLink(primaryContact.phone)"
                      target="_blank"
                      rel="noopener noreferrer"
                      :aria-label="`WhatsApp ${primaryContact.name}`"
                    ><MhjIcon name="whatsapp" :size="16" /></a>
                    <div v-if="additionalContacts.length" class="more-detail-contacts">
                      <button type="button" :aria-label="`${additionalContacts.length} kontak lainnya`">•••</button>
                      <div class="detail-contact-popover" role="tooltip">
                        <div v-for="otherContact in additionalContacts" :key="`${otherContact.id}-${otherContact.name}`">
                          <span class="contact-avatar contact-avatar--small">{{ initials(otherContact.name) }}</span>
                          <span><strong>{{ otherContact.name }}</strong><small>{{ otherContact.jobTitle || otherContact.phone || 'Kontak tambahan' }}</small></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="support-empty">
                <SolarIcon name="fa-address-card" />
                <span>Kontak belum dapat dimuat.</span>
              </div>
            </section>

            <div class="support-grid">
              <div class="support-item">
                <span class="support-icon competitor"><SolarIcon name="fa-building" /></span>
                <div>
                  <span>Kompetitor</span>
                  <strong>{{ competitorName }}</strong>
                </div>
              </div>
              <div class="support-item">
                <span class="support-icon funding"><MhjIcon name="action_wallet" /></span>
                <div>
                  <span>Sumber Pendanaan</span>
                  <strong>{{ fundingSourceName }}</strong>
                </div>
              </div>
            </div>

            <section class="notes-panel">
              <div>
                <SolarIcon name="fa-note-sticky" />
                <span>Notes/Catatan</span>
              </div>
              <p>{{ notes }}</p>
            </section>
          </article>
        </div>
      </section>

      <section v-else-if="activeTab === 'activity'" class="activity-panel">
        <article class="detail-card timeline-card">
          <div class="section-heading">
            <div>
              <span class="section-kicker">Timeline peluang</span>
              <h5>Riwayat Aktivitas</h5>
            </div>
            <span class="activity-count">{{ activities.length }} aktivitas</span>
          </div>
          <div class="timeline">
            <div v-for="(activity, index) in activities" :key="`${activity.title}-${index}`" class="timeline-item">
              <div class="timeline-marker">
                <div class="timeline-icon" :class="index % 2 ? 'green' : 'blue'">
                  <SolarIcon :name="index % 2 ? 'fa-solid fa-phone' : 'fa-solid fa-briefcase'" />
                </div>
              </div>
              <div class="timeline-content">
                <div class="timeline-content-top">
                  <strong>{{ activity.title }}</strong>
                  <span v-if="index === 0" class="latest-badge">Terbaru</span>
                </div>
                <p class="activity-description">{{ activity.description }}</p>
                <div class="activity-date">
                  <SolarIcon name="fa-calendar" />
                  <span>{{ activity.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="detail-card comments-card">
          <h5><SolarIcon name="fa-comment" /> Komentar</h5>
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

      <OrderStatusPanel
        v-else-if="latestSalesOrder"
        :project="project"
        :sales-order="latestSalesOrder"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { routes } from '@/router/routes'
import { completeProjectDemo } from '@/core/data/projectDemo'
import OrderStatusPanel from '@/module/project/projectDetails/OrderStatusPanel.vue'
import WonProjectDocuments from '@/module/project/projectDetails/WonProjectDocuments.vue'
import type { StoredProjectDocument } from '@/services/projectDocumentStorage'
import { useContact } from '@/store/contact'
import { useProjectStore } from '@/store/project'
import { shortProjectTitle } from '@/utils/index'
import type { Contact } from '@/types/contacts'
import type { Projects } from '@/types/project'

type UnknownRecord = Record<string, unknown>
interface ContactInfo { id?: number; name: string; phone: string; jobTitle?: string }
interface ActivityInfo { title: string; date: string; description: string }
interface CommentInfo { id: number; author: string; message: string }

const route = useRoute()
const store = useProjectStore()
const contactStore = useContact()
const { items, selectedItem, selectedDetails, loading } = storeToRefs(store)
const activeTab = ref<'info' | 'activity' | 'order-status'>('info')
const loadError = ref('')
const newComment = ref('')
const comments = ref<CommentInfo[]>([])
const supportingContact = ref<Contact | null>(null)
const latestSalesOrder = ref<StoredProjectDocument | null>(null)

const project = computed<Projects | null>(() => selectedItem.value)
const hasOrderStatus = computed(() => latestSalesOrder.value !== null)
const isWonProject = computed(() => {
  const status = `${project.value?.status ?? ''} ${project.value?.stageName ?? ''}`
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
  return status.includes('closed_won')
})
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

function optionalNumber(value: unknown): number | null {
  if (value === undefined || value === null || value === '') return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function firstProductName(value?: string): string {
  if (!value) return 'Produk belum tersedia'
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed) && parsed.length) return String(parsed[0])
  } catch {
    // Nilai dari API lama dapat berupa string dipisahkan koma.
  }
  // Saat product_names tidak tersedia, store jatuh balik ke deal_name
  // berformat "PREFIX_Perusahaan_Produk" — ambil segmen produknya saja.
  const withoutPrefix = shortProjectTitle(value)
  return withoutPrefix.split(',')[0]?.trim() || withoutPrefix
}

const productTitle = computed(() => firstProductName(project.value?.productNames))
const quantity = computed(() =>
  project.value?.quantity ?? optionalNumber(firstValue(['quantity', 'qty']))
)
const unitPrice = computed(() =>
  project.value?.unitPrice ?? optionalNumber(firstValue(['unit_price', 'price', 'harga']))
)
const projectValue = computed(() => {
  if (project.value?.amountValue !== undefined) return project.value.amountValue
  if (quantity.value === null || unitPrice.value === null) return 0
  return quantity.value * unitPrice.value
})
const notes = computed(() =>
  project.value?.notes || String(firstValue(['notes', 'note', 'description']) ?? 'Belum ada catatan.')
)
const competitorName = computed(() => {
  if (project.value?.competitorName) return project.value.competitorName
  const option = store.lookups.competitor.find(
    (item) => String(item.value) === String(project.value?.competitorId ?? '')
  )
  return option?.label || (project.value?.competitorId ? `Kompetitor #${project.value.competitorId}` : 'Belum ditentukan')
})
const fundingSourceName = computed(() => {
  if (project.value?.sumberdanaName) return project.value.sumberdanaName
  const option = store.lookups.sumberdana.find(
    (item) => String(item.value) === String(project.value?.sumberdanaId ?? '')
  )
  return option?.label || (project.value?.sumberdanaId ? `Sumber #${project.value.sumberdanaId}` : 'Belum ditentukan')
})

const contacts = computed<ContactInfo[]>(() => {
  const collected: ContactInfo[] = []
  project.value?.contacts?.forEach((contact) => collected.push({ ...contact, phone: contact.phone || '' }))
  const detailedContact = supportingContact.value
  if (detailedContact) {
    collected.push({
      id: detailedContact.remoteId ?? project.value?.contactId,
      name: `${detailedContact.firstName} ${detailedContact.lastName}`.trim(),
      phone: detailedContact.telephone1 || detailedContact.contactNumber || '',
      jobTitle: detailedContact.jobTitle,
    })
  }

  const baseName = project.value?.contactName || ''
  const basePhone = project.value?.contactPhone || ''
  if (baseName && !collected.some((item) => item.name === baseName)) {
    collected.push({ id: project.value?.contactId, name: baseName, phone: basePhone })
  }

  detailRows.value.forEach((row) => {
    const name = String(row.contact_name ?? row.contact ?? row.pic_name ?? '')
    const phone = String(row.contact_phone ?? row.phone ?? row.telephone_1 ?? row.mobile ?? '')
    if (name && !collected.some((item) => item.name === name)) collected.push({ name, phone })
  })
  if (!collected.length && project.value?.contactId) {
    collected.push({
      id: project.value.contactId,
      name: `Kontak #${project.value.contactId}`,
      phone: '',
    })
  }
  return collected
})
const primaryContact = computed<ContactInfo>(() => contacts.value[0] || { name: '', phone: '' })
const additionalContacts = computed(() => contacts.value.slice(1))
const stageDuration = computed(() => formatDuration(
  project.value?.stageEnteredAt || project.value?.updatedAt || project.value?.createdAt
))
const lastUpdated = computed(() => formatRelativeTime(project.value?.updatedAt || project.value?.createdAt))

const activities = computed<ActivityInfo[]>(() => {
  const fromApi = detailRows.value
    .map((row) => ({
      title: String(row.activity ?? row.activity_name ?? row.timeline_activity ?? row.event ?? ''),
      date: formatDate(String(row.activity_date ?? row.timeline_date ?? row.date ?? row.created_at ?? '')),
      description: String(row.activity_description ?? row.description ?? 'Pembaruan aktivitas pada peluang ini.'),
    }))
    .filter((item) => item.title)

  if (fromApi.length) return fromApi
  return [{
    title: 'Peluang dibuat',
    date: formatDate(project.value?.createdAt),
    description: `Peluang ${project.value?.projectName || ''} berhasil ditambahkan ke pipeline.`,
  }]
})

function titleCase(value: string): string {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatMoney(value: number): string {
  const currency = project.value?.currency || 'IDR'
  return `${currency} ${Math.max(0, value).toLocaleString('id-ID')}`
}

function formatCompactMoney(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: project.value?.currency || 'IDR',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(Math.max(0, value))
}

function formatOptionalMoney(value: number | null): string {
  return value === null ? 'Tidak tersedia' : formatMoney(value)
}

function formatDate(value?: string): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

function elapsed(value?: string): number | null {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : Math.max(0, Date.now() - date.getTime())
}

function formatRelativeTime(value?: string): string {
  const milliseconds = elapsed(value)
  if (milliseconds === null) return 'Belum tersedia'
  const minutes = Math.floor(milliseconds / 60_000)
  if (minutes < 1) return 'Baru saja'
  if (minutes < 60) return `${minutes} menit lalu`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} jam lalu`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days} hari lalu`
  const months = Math.floor(days / 30)
  return months < 12 ? `${months} bulan lalu` : `${Math.floor(months / 12)} tahun lalu`
}

function formatDuration(value?: string): string {
  const milliseconds = elapsed(value)
  if (milliseconds === null) return 'Belum tersedia'
  const hours = Math.floor(milliseconds / 3_600_000)
  if (hours < 1) return '< 1 jam'
  if (hours < 24) return `${hours} jam`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days} hari`
  const months = Math.floor(days / 30)
  return months < 12 ? `${months} bulan` : `${Math.floor(months / 12)} tahun`
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

function handleDocumentsLoaded(documents: StoredProjectDocument[]): void {
  latestSalesOrder.value = documents.find((document) => document.kind === 'sales-order') ?? null
}

function handleSalesOrderSaved(document: StoredProjectDocument): void {
  latestSalesOrder.value = document
  activeTab.value = 'order-status'
}

async function loadProject() {
  loadError.value = ''
  activeTab.value = 'info'
  latestSalesOrder.value = null
  supportingContact.value = null
  store.selectedItem = null
  store.selectedDetails = []
  const requestedId = Number(route.query.id)
  try {
    let id = Number.isFinite(requestedId) && requestedId > 0 ? requestedId : 0
    if (import.meta.env.DEV && requestedId === completeProjectDemo.id) {
      store.selectedItem = completeProjectDemo
      store.selectedDetails = [
        {
          activity: 'Negosiasi harga dan termin pembayaran',
          activity_date: '2026-10-14T15:20:00+07:00',
          activity_description: 'Penawaran revisi telah dikirim ke tim pengadaan rumah sakit.'
        },
        {
          activity: 'Presentasi produk',
          activity_date: '2026-10-10T10:00:00+07:00',
          activity_description: 'Demo Patient Monitor dilakukan bersama tim ICU.'
        }
      ]
      return
    }
    if (!id) {
      if (!items.value.length) await store.fetchProjects({ per_page: 100 })
      id = items.value[0]?.id ?? 0
    }
    if (!id) throw new Error('Belum ada peluang yang dapat ditampilkan.')
    await store.fetchProjectById(id)
    if (!selectedItem.value) throw new Error('Data peluang tidak ditemukan.')

    const supportingRequests: Promise<unknown>[] = []
    if (!store.lookups.competitor.length || !store.lookups.sumberdana.length) {
      supportingRequests.push(store.fetchProjectLookups())
    }
    if (selectedItem.value.contactId) {
      supportingRequests.push(
        contactStore.fetchRemoteContactById(selectedItem.value.contactId).then((contact) => {
          supportingContact.value = contact ?? null
        })
      )
    }
    await Promise.allSettled(supportingRequests)
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : (store.error ?? 'Gagal memuat detail peluang.')
  }
}

watch(() => route.query.id, loadProject, { immediate: true })
</script>

<style scoped>
.project-detail-v2 { --detail-blue: var(--theme-default, #25a9e0); max-width: 1180px; padding-bottom: 28px; }
.detail-toolbar { display: grid; grid-template-columns: 52px 1fr 44px; align-items: center; gap: 14px; margin-bottom: 18px; }
.detail-toolbar h3 { margin: 0; font-size: 24px; }
.toolbar-eyebrow { margin: 0 0 2px; color: #8c939c; font-size: 12px; text-transform: capitalize; letter-spacing: .08em; }
.back-link, .edit-button { display: grid; place-items: center; width: 42px; height: 42px; border: 0; border-radius: 12px; color: var(--detail-blue); background: #fff; box-shadow: 0 4px 16px rgba(28, 45, 69, .08); }
.back-link { box-sizing: border-box; width: 50px; height: 50px; border: 1px solid rgba(24,166,228,.28); border-radius: 12px; padding: 0; background: #fff; box-shadow: none; transition: border-color .18s ease, background-color .18s ease, box-shadow .18s ease; }
.back-link :deep(.solar-icon) { transition: color .18s ease, transform .18s ease; }
.back-link:hover, .back-link:focus-visible { border-color: var(--detail-blue); background: var(--detail-blue); box-shadow: 0 6px 16px rgba(24,166,228,.2); }
.back-link:hover :deep(.solar-icon), .back-link:focus-visible :deep(.solar-icon) { color: #fff !important; transform: translateX(-2px); }
.back-link:focus-visible { outline: 3px solid rgba(24,166,228,.2); outline-offset: 2px; }
.edit-button:disabled { opacity: .65; }
.project-hero { position: relative; isolation: isolate; overflow: hidden; display: grid; grid-template-columns: 76px minmax(0, 1fr) auto; align-items: center; gap: 18px; border: 1px solid rgba(24,166,228,.18); border-radius: 18px; padding: 22px 26px; color: #102a43; background: radial-gradient(circle at 90% 18%, rgba(24,166,228,.15), transparent 24%), linear-gradient(135deg, #fff 0%, #f5fbfe 60%, #eef9fd 100%); box-shadow: 0 12px 32px rgba(22,76,105,.08); }
.project-hero::after { position: absolute; z-index: -1; right: -50px; bottom: -78px; width: 170px; height: 170px; border: 24px solid rgba(24,166,228,.055); border-radius: 50%; content: ''; }
.product-icon { display: grid; place-items: center; width: 66px; height: 66px; border-radius: 17px; color: var(--detail-blue); background: rgba(24,166,228,.1); font-size: 27px; }
.hero-eyebrow { display: block; margin-bottom: 3px; color: var(--detail-blue); font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.hero-copy h4 { margin: 0 0 7px; color: #102a43; font-size: 22px; line-height: 1.4; overflow-wrap: anywhere; }
.hero-copy p { display: flex; align-items: center; gap: 7px; margin: 0 0 8px; color: #627d98; }
.hero-meta { display: flex; flex-wrap: wrap; gap: 8px; }
.stage-pill { display: inline-flex; padding: 5px 14px; border: 1px solid rgba(24,166,228,.18); border-radius: 999px; color: #087cae; background: rgba(24,166,228,.09); font-size: 11px; font-weight: 700; letter-spacing: .03em; }
.duration-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border: 1px solid #dce8ee; border-radius: 999px; color: #486581; background: rgba(255,255,255,.82); font-size: 11px; }
.hero-value { min-width: 175px; padding-left: 24px; border-left: 1px solid rgba(24,166,228,.2); text-align: right; }
.hero-value small, .hero-value strong { display: block; }
.hero-value small { margin-bottom: 4px; color: #718096; font-size: 11px; }
.hero-value strong { color: var(--detail-blue); font-size: 18px; }
.detail-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 18px 0; border-bottom: 1px solid #d9dde2; }
.detail-tabs.has-order-status { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.detail-tabs button { position: relative; padding: 12px; border: 0; color: #8b8b8b; background: transparent; font-weight: 500; }
.detail-tabs button::after { content: ''; position: absolute; right: 0; bottom: -1px; left: 0; height: 4px; border-radius: 4px 4px 0 0; background: transparent; }
.detail-tabs button.active { color: var(--detail-blue); }
.detail-tabs button.active::after { background: var(--detail-blue); }
.info-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; align-items: stretch; }
.activity-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.detail-card { padding: 22px; border: 1px solid #e4e8ec; border-radius: 16px; background: #fff; box-shadow: 0 6px 20px rgba(27, 43, 65, .04); }
.detail-card h5 { margin: 0; font-size: 17px; }
.record-status { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; color: #16884d; background: #e7f8ef; font-size: 11px; font-weight: 700; }
.record-status i { font-size: 6px; }
.opportunity-name { border-bottom: 1px solid #edf1f4; padding: 2px 2px 17px; }
.opportunity-name span { display: block; margin-bottom: 6px; color: #858b93; font-size: 11px; }
.opportunity-name strong { display: block; overflow-wrap: anywhere; color: #17212b; font-size: 15px; line-height: 1.55; }
.summary-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; margin: 0; border-bottom: 1px solid #edf0f2; }
.metric { min-width: 0; border: 0; border-bottom: 1px solid #edf0f2; border-radius: 0; padding: 14px 2px; background: transparent; }
.metric span { display: block; margin-bottom: 5px; color: #8a929a; font-size: 11px; }
.metric strong { display: block; overflow-wrap: anywhere; color: #252e37; font-size: 14px; }
.metric.primary { border-color: #edf0f2; background: transparent; }
.metric.primary strong { color: var(--detail-blue); font-size: 17px; }
.detail-list { border-top: 0; }
.detail-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 2px; border-bottom: 1px solid #edf0f2; }
.detail-row > span { display: inline-flex; align-items: center; gap: 9px; color: #7f8992; font-size: 12px; }
.detail-row > span i { width: 16px; color: var(--detail-blue); text-align: center; }
.detail-row strong { color: #242d35; font-size: 13px; font-weight: 600; text-align: right; }
.owner-detail { display: inline-flex; align-items: center; justify-content: flex-end; gap: 8px; }
.owner-avatar { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; color: #fff; background: linear-gradient(145deg, #209de5, #75c4ef); font-size: 9px; font-style: normal; }
.support-section h6 { display: flex; align-items: center; gap: 8px; margin: 0 0 10px; color: #65717c; font-size: 12px; font-weight: 600; }
.support-section h6 i { color: var(--detail-blue); }
.contact-list { display: grid; gap: 8px; }
.contact-item { display: grid; grid-template-columns: 42px minmax(0, 1fr) auto; align-items: center; gap: 11px; border: 0; border-bottom: 1px solid #edf1f4; border-radius: 0; padding: 10px 2px 14px; background: transparent; }
.contact-avatar { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; color: #fff; background: linear-gradient(145deg, #209de5, #75c4ef); font-size: 12px; font-weight: 700; }
.contact-copy { min-width: 0; }
.contact-copy a, .contact-copy strong { display: block; overflow: hidden; color: #17212b; font-size: 13px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.contact-copy a:hover { color: var(--detail-blue); }
.contact-copy span { display: block; overflow: hidden; margin-top: 3px; color: #8b949c; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.contact-actions { display: flex; gap: 12px; }
.contact-actions a { color: #24467b; font-size: 18px; }
.contact-actions a:last-child { color: #14c96e; }
.more-detail-contacts { position: relative; }
.more-detail-contacts > button { width: 32px; height: 28px; border: 1px solid #dbe4ea; border-radius: 8px; color: #687783; background: #f8fafb; font-size: 10px; font-weight: 800; line-height: 1; }
.detail-contact-popover { position: absolute; z-index: 20; top: calc(100% + 8px); right: 0; display: none; width: 240px; padding: 8px; border: 1px solid #dfe7ec; border-radius: 11px; background: #fff; box-shadow: 0 12px 30px rgba(31,54,72,.17); }
.more-detail-contacts:hover .detail-contact-popover, .more-detail-contacts:focus-within .detail-contact-popover { display: grid; gap: 3px; }
.detail-contact-popover > div { display: grid; grid-template-columns: 30px minmax(0,1fr); align-items: center; gap: 8px; padding: 6px; text-align: left; }
.contact-avatar--small { width: 30px; height: 30px; font-size: 8px; }
.detail-contact-popover strong, .detail-contact-popover small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.detail-contact-popover strong { color: #29333d; font-size: 10px; }
.detail-contact-popover small { color: #89949d; font-size: 9px; }
.support-empty { display: flex; align-items: center; gap: 10px; padding: 14px; border: 1px dashed #d9e1e6; border-radius: 12px; color: #89939c; font-size: 12px; }
.support-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; margin-top: 14px; }
.support-item { display: grid; grid-template-columns: 36px minmax(0, 1fr); align-items: center; gap: 10px; min-width: 0; border: 0; border-bottom: 1px solid #edf1f4; border-radius: 0; padding: 14px 2px; }
.support-icon { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 10px; color: #7c57c2; background: #f0eafa; }
.support-icon.funding { color: #178650; background: #e7f7ee; }
.support-item > div { min-width: 0; }
.support-item > div > span { display: block; margin-bottom: 4px; color: #8a929a; font-size: 10px; }
.support-item strong { display: block; overflow: hidden; color: #27313a; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
.notes-panel { margin-top: 18px; border-left: 3px solid rgba(24,166,228,.42); border-radius: 0; padding: 5px 0 5px 14px; background: transparent; }
.notes-panel > div { display: flex; align-items: center; gap: 8px; color: #7d8790; font-size: 11px; font-weight: 600; }
.notes-panel > div i { color: var(--detail-blue); }
.notes-panel p { margin: 8px 0 0; color: #46515b; font-size: 12px; line-height: 1.6; white-space: pre-wrap; }
.section-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 22px; }
.section-heading h5 { margin: 2px 0 0; font-size: 18px; }
.section-kicker { color: var(--detail-blue); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: capitalize; }
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
  .back-link, .edit-button { width: 36px; height: 36px; box-shadow: none; }
  .back-link { background: #fff; }
  .back-link:hover, .back-link:focus-visible { background: var(--detail-blue); }
  .back-link :deep(.solar-icon) { width: 21px !important; height: 21px !important; }
  .project-hero { grid-template-columns: 58px minmax(0, 1fr); gap: 12px; padding: 16px; border-radius: 14px; }
  .product-icon { width: 56px; height: 56px; font-size: 24px; }
  .hero-copy h4 { overflow: hidden; font-size: 18px; text-overflow: ellipsis; white-space: nowrap; }
  .hero-copy p { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .hero-value { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; padding: 11px 0 0; border-top: 1px solid rgba(24,166,228,.18); border-left: 0; text-align: left; }
  .hero-value strong { font-size: 15px; }
  .info-grid, .activity-panel { grid-template-columns: 1fr; }
  .detail-card { padding: 16px; }
  .section-heading { align-items: center; }
  .support-grid { grid-template-columns: 1fr; }
  .timeline-content-top { align-items: flex-start; }
}
</style>
