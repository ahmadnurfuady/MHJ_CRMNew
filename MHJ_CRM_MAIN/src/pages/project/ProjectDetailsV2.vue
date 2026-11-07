<template>
  <div class="container-fluid opportunity-detail-page">
    <div v-if="loading && !detail" class="detail-stack" aria-label="Memuat detail peluang">
      <div v-for="item in 5" :key="item" class="detail-card skeleton-card">
        <span class="skeleton skeleton-title"></span>
        <span class="skeleton skeleton-line"></span>
        <span class="skeleton skeleton-line short"></span>
      </div>
    </div>

    <div v-else-if="loadError || !detail" class="detail-card state-card">
      <SolarIcon name="fa-circle-exclamation" class="text-danger" />
      <strong>Detail peluang tidak dapat ditampilkan</strong>
      <span>{{ loadError || 'Data peluang tidak ditemukan.' }}</span>
      <router-link class="btn btn-primary btn-sm" :to="backTarget">Kembali</router-link>
    </div>

    <div v-else class="detail-stack">
      <section class="opportunity-header-card">
        <router-link
          v-if="canEditProject"
          class="header-edit-button"
          :to="{ path: routes.Project.ProjectEdit, query: { id: String(detailId) } }"
          replace
          aria-label="Edit peluang"
        >
          <SolarIcon name="fa-pen" :size="14" aria-hidden="true" />
        </router-link>
        <div class="opportunity-header-copy">
          <span class="section-kicker">Peluang</span>
          <h1>{{ text(detail.deal_name) }}</h1>
          <div class="badge-list">
            <span class="opportunity-badge stage-badge">
              {{ text(detail.stage_name) }}
            </span>
            <span class="opportunity-badge">{{ text(detail.division_name) }}</span>
            <span class="opportunity-badge stage-duration-badge">
              {{ stageDuration }} di stage ini
            </span>
            <span v-if="hasValue(detail.priority)" class="opportunity-badge priority-badge">
              Prioritas {{ text(detail.priority) }}
            </span>
          </div>
        </div>
      </section>

      <WonProjectDocuments
        v-if="isWonProject && project"
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

      <template v-if="activeTab === 'info'">
      <section class="detail-card value-card">
        <div class="card-heading">
          <span class="card-heading-icon">
            <SolarIcon
              name="chart-2"
              :size="19"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="1"
              aria-hidden="true"
            />
          </span>
          <div>
            <h2>Informasi Peluang</h2>
            <p>Ringkasan nilai, perkiraan PO, dan pemilik peluang.</p>
          </div>
        </div>
        <div class="card-body-content">
          <div class="opportunity-information">
            <div class="opportunity-field opportunity-field--value">
              <span>Nilai Peluang</span>
              <strong>{{ formatMoney(detail.amount_value) }}</strong>
            </div>

            <div class="opportunity-field">
              <span>Perkiraan PO</span>
              <strong>{{ formatDate(detail.expected_close_date) }}</strong>
            </div>
            <div class="opportunity-field">
              <span>Pemilik Peluang</span>
              <strong>{{ text(detail.owner_name) }}</strong>
              <small>{{ ownerPosition }}</small>
            </div>

            <div class="opportunity-divider" aria-hidden="true"></div>

            <div class="opportunity-field">
              <span>Kompetitor</span>
              <strong>{{ text(detail.competitor_name) }}</strong>
            </div>
            <div class="opportunity-field">
              <span>Sumber Dana</span>
              <strong>{{ text(detail.sumberdana_name) }}</strong>
            </div>

            <div class="opportunity-field opportunity-field--full opportunity-notes">
              <span>Catatan</span>
              <strong>{{ text(detail.notes) }}</strong>
            </div>
            <div v-if="isUnsuccessfulStage" class="opportunity-field opportunity-field--full unsuccessful-reason">
              <span>Alasan Tidak Berhasil</span>
              <strong>{{ formatLostReasons(detail.lost_reasons) }}</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="detail-card">
        <div class="card-heading">
          <span class="card-heading-icon">
            <SolarIcon
              name="hospital"
              :size="19"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="0.45"
              aria-hidden="true"
            />
          </span>
          <div>
            <h2>Informasi Faskes</h2>
            <p>Profil faskes dan daftar kontak yang terkait dengan peluang.</p>
          </div>
        </div>
        <div class="card-body-content">
          <dl class="faskes-summary">
            <div><dt>Faskes</dt><dd>{{ text(detail.company_name) }}</dd></div>
            <div><dt>Alamat</dt><dd class="multiline-value">{{ text(detail.address) }}</dd></div>
          </dl>

          <div class="contact-section">
            <div class="contact-section-heading">
              <div>
                <h3>Kontak Terkait</h3>
                <p>Kontak yang dapat dihubungi untuk peluang ini.</p>
              </div>
              <span class="item-count">{{ relatedContacts.length }} kontak</span>
            </div>

            <div v-if="relatedContacts.length" class="contact-grid">
              <article
                v-for="(contact, index) in relatedContacts"
                :key="`${contact.name}-${contact.phone}-${index}`"
                class="contact-card"
                :class="{ 'contact-card--external': !contact.isOwnContact }"
              >
                <span class="contact-avatar" aria-hidden="true">{{ contactInitials(contact.name) }}</span>
                <div class="contact-card-copy">
                  <strong>{{ contact.name }}</strong>
                  <span v-if="contact.jobTitle !== '-'">{{ contact.jobTitle }}</span>

                  <div
                    v-if="contact.isOwnContact && (contact.phone !== '-' || contact.email !== '-')"
                    class="contact-meta"
                  >
                    <a v-if="contact.phone !== '-'" :href="`tel:${contact.phone}`">
                      <SolarIcon name="phone" :size="14" aria-hidden="true" />
                      {{ contact.phone }}
                    </a>
                    <a v-if="contact.email !== '-'" :href="`mailto:${contact.email}`">
                      <SolarIcon name="letter" :size="14" aria-hidden="true" />
                      {{ contact.email }}
                    </a>
                  </div>

                  <div v-else-if="!contact.isOwnContact" class="contact-owner-note">
                    <span>
                      <SolarIcon name="user" :size="13" aria-hidden="true" />
                      Milik {{ contact.ownerName !== '-' ? contact.ownerName : 'user lain' }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <div v-else class="empty-state compact">
              <SolarIcon name="contact" />
              <span>Belum ada kontak terkait</span>
            </div>
          </div>
        </div>
      </section>

      <section class="detail-card products-card">
        <div class="card-heading">
          <span class="card-heading-icon">
            <SolarIcon
              name="bill-list"
              :size="19"
              color="var(--app-primary, #18a6e4)"
              aria-hidden="true"
            />
          </span>
          <div>
            <h2>Daftar Barang</h2>
            <p>Rincian barang dan nilai yang membentuk total peluang.</p>
          </div>
          <span class="item-count">{{ barangs.length }} item</span>
        </div>

        <div class="card-body-content">
          <div v-if="barangs.length" class="desktop-products">
            <div class="table-responsive">
              <table class="products-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kode</th>
                  <th>Nama Barang</th>
                  <th>Satuan</th>
                  <th class="numeric-cell">Qty</th>
                  <th class="numeric-cell">Harga Satuan</th>
                  <th class="numeric-cell">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(barang, index) in barangs" :key="`${barang.idbarang}-${index}`">
                  <td>{{ index + 1 }}</td>
                  <td><span class="product-code">{{ text(barang.idbarang) }}</span></td>
                  <td class="product-name">{{ text(barang.nama_barang) }}</td>
                  <td>{{ text(barang.satuan) }}</td>
                  <td class="numeric-cell">{{ formatNumber(barang.qty) }}</td>
                  <td class="numeric-cell">{{ formatMoney(barang.unitPrice) }}</td>
                  <td class="numeric-cell subtotal-cell">{{ formatMoney(barang.subtotal) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr><td colspan="6">Total</td><td class="numeric-cell">{{ formatMoney(barangTotal) }}</td></tr>
              </tfoot>
              </table>
            </div>
          </div>

          <div v-if="barangs.length" class="mobile-products">
            <article v-for="(barang, index) in barangs" :key="`mobile-${barang.idbarang}-${index}`" class="product-card">
              <div>
                <strong>{{ text(barang.nama_barang) }}</strong>
                <span>{{ text(barang.idbarang) }} · {{ text(barang.satuan) }}</span>
              </div>
              <p>
                {{ formatNumber(barang.qty) }} × {{ formatMoney(barang.unitPrice) }}
                <b>= {{ formatMoney(barang.subtotal) }}</b>
              </p>
            </article>
            <div class="mobile-total"><span>Total</span><strong>{{ formatMoney(barangTotal) }}</strong></div>
          </div>

          <div v-if="!barangs.length" class="empty-state">
            <SolarIcon name="fa-box-open" />
            <span>Belum ada barang</span>
            <strong>Total {{ formatMoney(0) }}</strong>
          </div>

          <p v-if="hasTotalMismatch" class="total-warning">
            <SolarIcon name="fa-triangle-exclamation" />
            Total barang {{ formatMoney(barangTotal) }} berbeda dengan nilai peluang {{ formatMoney(detail.amount_value) }}.
          </p>
        </div>
      </section>

      <section class="detail-card tasks-card">
        <div class="card-heading">
          <span class="card-heading-icon">
            <SolarIcon
              name="checklist"
              :size="19"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="1"
              aria-hidden="true"
            />
          </span>
          <div>
            <h2>Tugas Terkait</h2>
            <p>Daftar tugas yang terhubung dengan peluang ini.</p>
          </div>
          <span class="item-count">{{ tasks.length }} task</span>
        </div>
        <div class="card-body-content">
          <div v-if="tasks.length" class="task-list">
            <article v-for="(task, index) in tasks" :key="index" class="task-item">
              <span class="task-marker"><SolarIcon name="fa-check" /></span>
              <div>
                <strong>{{ taskTitle(task) }}</strong>
                <p>{{ taskDescription(task) }}</p>
                <div class="task-meta">
                  <span>{{ taskStatus(task) }}</span>
                  <span>Jatuh tempo: {{ formatDate(task.due_date) }}</span>
                  <span>PIC: {{ taskAssignee(task) }}</span>
                </div>
              </div>
            </article>
          </div>
          <div v-else class="empty-state compact"><SolarIcon name="fa-list-check" /><span>Belum ada task</span></div>
        </div>
      </section>

      <section class="history-card">
        <div>
          <span>Dibuat</span>
          <strong>{{ formatDateTime(detail.created_at) }}</strong>
          <small>oleh {{ text(detail.created_by_name) }}</small>
        </div>
        <div>
          <span>Diperbarui</span>
          <strong>{{ formatDateTime(detail.updated_at) }}</strong>
          <small>oleh {{ text(detail.updated_by_name) }}</small>
        </div>
      </section>
      </template>

      <section v-else-if="activeTab === 'activity'" class="activity-panel">
        <article class="detail-card timeline-card">
          <div class="card-body-content">
            <ActivityTimeline
              entity="m_projects"
              :entity-id="detailId || null"
              :title="`Aktivitas ${text(detail.deal_name)}`"
              heading="Timeline Peluang"
              :created-description="`Peluang ${text(detail.deal_name)} dibuat.`"
            />
          </div>
        </article>

        <article class="detail-card comments-card">
          <div class="card-body-content">
            <h5><SolarIcon name="fa-comment" /> Komentar</h5>
            <p v-if="!comments.length" class="empty-comment">Belum ada komentar.</p>
            <div v-for="comment in comments" :key="comment.id" class="comment-item">
              <div class="comment-avatar">{{ contactInitials(comment.author) }}</div>
              <div><strong>{{ comment.author }}</strong><p>{{ comment.message }}</p></div>
            </div>
            <form class="comment-form" @submit.prevent="addComment">
              <input v-model.trim="newComment" type="text" placeholder="Tambahkan komentar..." aria-label="Komentar baru" />
              <button type="submit" :disabled="!newComment">Kirim</button>
            </form>
          </div>
        </article>
      </section>

      <OrderStatusPanel
        v-else-if="activeTab === 'order-status' && project && latestSalesOrder"
        :project="project"
        :sales-order="latestSalesOrder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { getApiErrorMessage, isRecord, type Dict } from '@/api/response'
import ActivityTimeline from '@/components/shared/ActivityTimeline.vue'
import { usePageBackHandler, usePageTitle } from '@/composable/usePageHeader'
import OrderStatusPanel from '@/module/project/projectDetails/OrderStatusPanel.vue'
import WonProjectDocuments from '@/module/project/projectDetails/WonProjectDocuments.vue'
import { routes } from '@/router/routes'
import { useProjectPermissions } from '@/module/project/projectPermission'
import type { StoredProjectDocument } from '@/services/projectDocumentStorage'
import { useProjectStore } from '@/store/project'

interface CommentInfo { id: number; author: string; message: string }

interface BarangView {
  idbarang: string
  nama_barang: string
  satuan: string
  qty: number
  unitPrice: number
  subtotal: number
  urut: number
}

interface ContactView {
  name: string
  jobTitle: string
  phone: string
  email: string
  /** false bila kontak milik user lain (email/telepon sudah dimasking BE). */
  isOwnContact: boolean
  /** Nama pemilik kontak, untuk keterangan "milik X" pada kontak bukan milik sendiri. */
  ownerName: string
}

const route = useRoute()
const router = useRouter()
const store = useProjectStore()
const { canEditProject } = useProjectPermissions()
const { selectedDetail, selectedItem, selectedTasks, loading } = storeToRefs(store)

const activeTab = ref<'info' | 'activity' | 'order-status'>('info')
const newComment = ref('')
const comments = ref<CommentInfo[]>([])
const latestSalesOrder = ref<StoredProjectDocument | null>(null)

/** Objek peluang ternormalisasi (dipakai WonProjectDocuments & OrderStatusPanel). */
const project = computed(() => selectedItem.value)
const hasOrderStatus = computed(() => latestSalesOrder.value !== null)
const isWonProject = computed(() => {
  const status = `${selectedItem.value?.status ?? ''} ${selectedItem.value?.stageName ?? ''}`
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
  const detailStage = String(selectedDetail.value?.stage_name ?? '').toLowerCase()
  return status.includes('closed_won') || detailStage.includes('won') || detailStage.includes('berhasil')
})

const detail = computed<Dict | null>(() => selectedDetail.value)
const tasks = computed<Dict[]>(() => selectedTasks.value)
const loadError = computed(() => store.error || '')
const detailId = computed(() => Number(detail.value?.id) || Number(route.query.id) || 0)
const backTarget = computed(() => {
  const raw = route.query.backTo
  const path = Array.isArray(raw) ? raw[0] : raw
  return typeof path === 'string' && path.startsWith('/') ? path : routes.Project.ProjectList
})

usePageTitle('Detail Peluang')
usePageBackHandler(handleBack)

function handleBack(): void {
  const previousPath = String(window.history.state?.back ?? '')
  const previousIsProjectForm =
    previousPath.startsWith(routes.Project.ProjectEdit) ||
    previousPath.startsWith(routes.Project.ProjectCreate)

  if (previousPath && !previousIsProjectForm) {
    router.back()
    return
  }

  void router.replace(backTarget.value)
}

function hasValue(value: unknown): boolean {
  return value !== null && value !== undefined && String(value).trim() !== ''
}

function text(value: unknown): string {
  return hasValue(value) ? String(value).trim() : '-'
}

function toNumber(value: unknown): number {
  if (!hasValue(value)) return 0
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

function firstNumber(source: Dict, keys: string[]): number {
  for (const key of keys) {
    if (hasValue(source[key])) return toNumber(source[key])
  }
  return 0
}

function firstText(source: Dict, keys: string[]): string {
  for (const key of keys) {
    if (hasValue(source[key])) return text(source[key])
  }
  return '-'
}

const isUnsuccessfulStage = computed(() => {
  const stage = String(detail.value?.stage_name ?? '').trim().toLowerCase()
  return stage.includes('tidak berhasil') || stage.includes('lost')
})
const currency = computed(() => text(detail.value?.currency) === '-' ? 'IDR' : text(detail.value?.currency).toUpperCase())
const ownerPosition = computed(() => {
  const position = text(detail.value?.owner_jabatan)
  const alias = text(detail.value?.owner_alias)
  const level = hasValue(detail.value?.owner_jabatan_level)
    ? `Level ${text(detail.value?.owner_jabatan_level)}`
    : '-'
  const positionLabel = position === '-'
    ? (alias === '-' ? '-' : `(${alias})`)
    : (alias === '-' ? position : `${position} (${alias})`)

  if (positionLabel === '-') return level
  return level === '-' ? positionLabel : `${positionLabel} - ${level}`
})
const stageDuration = computed(() => {
  const source = detail.value
  if (!source) return '-'
  const value = [
    'stage_entered_at',
    'stage_changed_at',
    'stage_started_at',
    'pipeline_entered_at',
    'pipeline_changed_at',
    'status_changed_at',
    'updated_at',
    'created_at',
  ].find((key) => hasValue(source[key]))
  if (!value) return '-'
  const date = parseDate(source[value])
  if (!date) return '-'
  const days = Math.floor(Math.max(0, Date.now() - date.getTime()) / 86_400_000)
  return days < 1 ? '< 1 hari' : `${formatNumber(days)} hari`
})

function contactValues(source: unknown): unknown[] {
  if (Array.isArray(source)) return source
  if (isRecord(source)) return Object.values(source)
  if (typeof source !== 'string' || !source.trim()) return []
  try {
    const parsed: unknown = JSON.parse(source)
    return Array.isArray(parsed) ? parsed : [parsed]
  } catch {
    return source.split(/[,;|]/).map((name) => name.trim()).filter(Boolean)
  }
}

const relatedContacts = computed<ContactView[]>(() => {
  const source = detail.value
  if (!source) return []
  const sourceKey = [
    'contacts',
    'project_contacts',
    'deal_contacts',
    'contact_list',
    'contact_names',
    'contacts_name',
  ].find((key) => hasValue(source[key]))
  const values = sourceKey ? contactValues(source[sourceKey]) : []
  const contacts = values.flatMap((value): ContactView[] => {
    if (typeof value === 'string') {
      return value.trim()
        ? [{ name: value.trim(), jobTitle: '-', phone: '-', email: '-', isOwnContact: true, ownerName: '-' }]
        : []
    }
    if (!isRecord(value)) return []
    const firstName = firstText(value, ['first_name', 'firstName'])
    const lastName = firstText(value, ['last_name', 'lastName'])
    const fullName = [firstName, lastName].filter((part) => part !== '-').join(' ')
    const name = firstText(value, ['contact_name', 'name', 'full_name', 'label'])
    const resolvedName = name === '-' ? fullName || '-' : name
    if (resolvedName === '-') return []
    return [{
      name: resolvedName,
      jobTitle: firstText(value, ['job_title', 'position', 'jabatan']),
      phone: firstText(value, ['contact_phone', 'phone', 'telephone_1', 'mobile']),
      email: firstText(value, ['email', 'email_address', 'contact_email']),
      // Kontak milik user lain (is_own_contact === false) sudah dimasking BE.
      // Data legacy tanpa flag dianggap milik sendiri (fail-open).
      isOwnContact: value.is_own_contact !== false,
      ownerName: firstText(value, ['owner_name', 'created_by_name']),
    }]
  })

  const fallbackName = text(source.contact_name)
  if (fallbackName !== '-' && !contacts.some((contact) => contact.name.toLocaleLowerCase('id-ID') === fallbackName.toLocaleLowerCase('id-ID'))) {
    contacts.unshift({
      name: fallbackName,
      jobTitle: firstText(source, ['contact_jabatan', 'contact_job_title']),
      phone: firstText(source, ['contact_phone', 'phone', 'telephone_1', 'mobile']),
      email: firstText(source, ['contact_email', 'email']),
      isOwnContact: true,
      ownerName: '-',
    })
  }

  return contacts.filter((contact, index, items) => items.findIndex((candidate) =>
    candidate.name.toLocaleLowerCase('id-ID') === contact.name.toLocaleLowerCase('id-ID')
    && candidate.phone === contact.phone
  ) === index)
})

function contactInitials(name: string): string {
  return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
}

const barangs = computed<BarangView[]>(() => {
  const source = detail.value?.barangs
  if (!Array.isArray(source)) return []
  return source.filter(isRecord).map((barang, index) => {
    const qty = firstNumber(barang, ['qty', 'quantity'])
    const unitPrice = firstNumber(barang, ['unit_price', 'harga_satuan', 'harga'])
    const rawSubtotal = firstNumber(barang, ['subtotal'])
    return {
      idbarang: text(barang.idbarang),
      nama_barang: text(barang.nama_barang),
      satuan: firstText(barang, ['satuan', 'unit']),
      qty,
      unitPrice,
      subtotal: hasValue(barang.subtotal) ? rawSubtotal : qty * unitPrice,
      urut: hasValue(barang.urut) ? toNumber(barang.urut) : index,
    }
  }).sort((a, b) => a.urut - b.urut)
})

const barangTotal = computed(() => barangs.value.reduce((total, barang) => total + barang.subtotal, 0))
const hasTotalMismatch = computed(() => Math.abs(barangTotal.value - toNumber(detail.value?.amount_value)) > 0.01)

function formatNumber(value: unknown): string {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(toNumber(value))
}

function formatMoney(value: unknown): string {
  try {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency.value,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(toNumber(value))
  } catch {
    return `${currency.value} ${formatNumber(value)}`
  }
}

function parseDate(value: unknown): Date | null {
  if (!hasValue(value)) return null
  const date = new Date(String(value))
  return Number.isNaN(date.getTime()) ? null : date
}

function formatDate(value: unknown): string {
  const date = parseDate(value)
  return date ? new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date) : '-'
}

function formatDateTime(value: unknown): string {
  const date = parseDate(value)
  return date ? new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(date) : '-'
}

function formatLostReasons(value: unknown): string {
  if (Array.isArray(value)) return value.map(text).filter((item) => item !== '-').join(', ') || '-'
  if (!hasValue(value)) return '-'
  const raw = String(value)
  try {
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.map(text).join(', ') || '-' : text(parsed)
  } catch {
    return raw
  }
}

function taskTitle(task: Dict): string {
  return firstText(task, ['task_name', 'title', 'name', 'activity'])
}

function taskDescription(task: Dict): string {
  return firstText(task, ['description', 'notes', 'activity_description'])
}

function taskStatus(task: Dict): string {
  return firstText(task, ['status_name', 'status'])
}

function taskAssignee(task: Dict): string {
  return firstText(task, ['assigned_to_name', 'owner_name', 'pic_name', 'assignee_name'])
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

async function loadProject(): Promise<void> {
  activeTab.value = 'info'
  latestSalesOrder.value = null
  comments.value = []
  store.selectedItem = null
  store.selectedDetail = null
  store.selectedTasks = []
  store.selectedDetails = []
  const id = Number(route.query.id)
  if (!Number.isFinite(id) || id <= 0) return
  try {
    await store.fetchProjectById(id)
  } catch (error) {
    if (!store.error) store.error = getApiErrorMessage(error, 'Gagal memuat detail peluang.')
  }
}

watch(() => route.query.id, loadProject, { immediate: true })
</script>

<style scoped>
.opportunity-detail-page { --opportunity-blue: var(--theme-default, #18a6e4); max-width: 1180px; padding-bottom: 28px; }
:global(.opportunity-detail-page ~ .footer) { margin-top: 24px !important; }
.detail-stack { display: grid; gap: 24px; }
.detail-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border: 1px solid #e3ebf0; border-radius: 14px; overflow: hidden; background: #fff; box-shadow: 0 8px 24px rgba(31, 52, 73, .05); }
.detail-tabs.has-order-status { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.detail-tabs button { position: relative; padding: 14px 12px; border: 0; color: #7a8792; background: transparent; font-size: 13px; font-weight: 600; transition: color .18s ease, background-color .18s ease; }
.detail-tabs button::after { position: absolute; right: 0; bottom: 0; left: 0; height: 3px; border-radius: 3px 3px 0 0; background: transparent; content: ''; }
.detail-tabs button:hover { color: var(--opportunity-blue); background: var(--app-primary-wash, #f5fbfe); }
.detail-tabs button.active { color: var(--opportunity-blue); }
.detail-tabs button.active::after { background: var(--opportunity-blue); }
.activity-panel { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: start; }
.comments-card h5 { margin: 0 0 14px; color: #102a43; font-size: 15px; }
.empty-comment { color: #90969d; font-size: 12px; }
.comment-item { display: grid; grid-template-columns: 36px 1fr; gap: 10px; margin-bottom: 12px; }
.comment-item strong { color: #102a43; font-size: 13px; }
.comment-item p { margin: 3px 0 0; color: #718096; font-size: 12px; }
.comment-avatar { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: #fff; background: linear-gradient(145deg, var(--app-primary, #18a6e4), var(--app-secondary, #75c4ef)); font-size: 11px; font-weight: 700; }
.comment-form { display: grid; grid-template-columns: 1fr auto; gap: 8px; margin-top: 16px; }
.comment-form input { min-width: 0; padding: 10px 14px; border: 1px solid #dce1e6; border-radius: 999px; outline: none; font-size: 13px; }
.comment-form input:focus { border-color: var(--opportunity-blue); }
.comment-form button { border: 0; color: var(--opportunity-blue); background: transparent; font-size: 12px; font-weight: 600; }
.comment-form button:disabled { opacity: .45; }
:global(body.dark-only) .detail-tabs { border-color: #34404c; background: #202730; }
:global(body.dark-only) .detail-tabs button:hover { background: #25313c; }
:global(body.dark-only) .comments-card h5, :global(body.dark-only) .comment-item strong { color: #eef3f6; }
:global(body.dark-only) .comment-form input { border-color: #3a4652; background: #25303a; color: #e6edf2; }
.detail-card, .history-card { overflow: hidden; border: 1px solid #e3ebf0; border-radius: 16px; background: #fff; box-shadow: 0 8px 24px rgba(31, 52, 73, .05); }
.detail-card { padding: 0; }
.opportunity-header-card { position: relative; isolation: isolate; overflow: hidden; border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), .18); border-radius: 18px; padding: 24px 88px 24px 24px; background: radial-gradient(circle at 88% 18%, rgba(var(--app-primary-rgb, 24, 166, 228), .16), transparent 24%), linear-gradient(135deg, #fff 0%, var(--app-primary-wash, #f5fbfe) 58%, var(--app-primary-wash, #eef9fd) 100%); box-shadow: 0 12px 32px rgba(22, 76, 105, .08); }
.opportunity-header-card::after { position: absolute; z-index: -1; right: -54px; bottom: -74px; width: 180px; height: 180px; border: 24px solid rgba(var(--app-primary-rgb, 24, 166, 228), .06); border-radius: 50%; content: ''; }
.opportunity-header-copy { min-width: 0; }
.opportunity-header-copy h1 { margin: 5px 0 14px; color: #102a43; font-size: clamp(21px, 2vw, 27px); font-weight: 700; line-height: 1.35; overflow-wrap: anywhere; }
.header-edit-button { position: absolute; z-index: 2; top: 18px; right: 20px; display: inline-flex; width: 38px; height: 38px; align-items: center; justify-content: center; border: 1px solid var(--opportunity-blue); border-radius: 9px; padding: 0; color: #fff; background: var(--opportunity-blue); box-shadow: 0 4px 12px rgba(22, 76, 105, .08); line-height: 1; text-decoration: none; transition: border-color .18s ease, background-color .18s ease, box-shadow .18s ease, transform .18s ease; }
.header-edit-button :deep(.solar-icon), .header-edit-button :deep(svg) { flex: 0 0 auto; color: #fff !important; }
.header-edit-button:hover, .header-edit-button:focus-visible { border-color: var(--app-primary-hover, #1493cc); color: #fff; background: var(--app-primary-hover, #1493cc); box-shadow: 0 6px 16px rgba(var(--app-primary-rgb, 24, 166, 228), .22); outline: none; transform: translateY(-1px); }
.header-edit-button:focus-visible { outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), .16); outline-offset: 2px; }
.section-kicker { color: var(--opportunity-blue); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.badge-list { display: flex; flex-wrap: wrap; gap: 8px; }
.opportunity-badge { display: inline-flex; min-width: 0; align-items: center; gap: 6px; border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), .13); border-radius: 999px; padding: 6px 10px; color: #486581; background: rgba(255,255,255,.78); font-size: 11px; line-height: 1.2; }
.item-count { display: inline-flex; flex: 0 0 auto; align-items: center; border-radius: 999px; padding: 6px 10px; color: #52677a; background: rgba(var(--app-primary-rgb, 24, 166, 228), .08); font-size: 11px; font-weight: 700; }
.stage-badge { border-color: rgba(var(--app-primary-rgb, 24, 166, 228), .24); color: var(--app-primary-dark, #087cae); background: rgba(var(--app-primary-rgb, 24, 166, 228), .09); }
.stage-duration-badge { border-color: #dce8ee; color: #486581; background: rgba(255,255,255,.82); }
.priority-badge { border-color: #efd9a7; color: #8b650d; background: #fff7df; }
.card-heading { display: flex; min-width: 0; align-items: center; gap: 12px; border-bottom: 1px solid #e8eef2; padding: 18px 20px; background: linear-gradient(90deg, #fff 0%, var(--app-primary-wash, #f8fcfe) 100%); }
.card-heading > div { min-width: 0; flex: 1 1 auto; }
.card-heading h2 { margin: 0 0 3px; color: #102a43; font-size: 16px; }
.card-heading p { margin: 0; color: #829ab1; font-size: 12px; }
.card-heading-icon { display: inline-flex; width: 42px; height: 42px; flex: 0 0 42px; align-items: center; justify-content: center; border-radius: 12px; color: var(--opportunity-blue); background: rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.card-body-content { padding: 20px; }
.opportunity-information { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: clamp(36px, 7vw, 96px); row-gap: 26px; }
.opportunity-field { display: flex; min-width: 0; flex-direction: column; gap: 7px; padding: 2px 4px; }
.opportunity-field span { color: #718096; font-size: 12px; font-weight: 500; }
.opportunity-field strong { color: #102a43; font-size: 15px; font-weight: 500; line-height: 1.45; overflow-wrap: anywhere; }
.opportunity-field small { color: #829ab1; font-size: 11px; line-height: 1.4; }
.opportunity-field--value, .opportunity-field--full, .opportunity-divider { grid-column: 1 / -1; }
.opportunity-field--value strong { color: var(--opportunity-blue); font-size: clamp(22px, 2vw, 26px); font-weight: 700; }
.opportunity-divider { height: 1px; background: #e8eef2; }
.opportunity-notes strong { white-space: pre-line; }
.unsuccessful-reason { border-left: 3px solid #ef9aa2; padding: 10px 12px; background: #fff8f8; }
.faskes-summary { display: grid; grid-template-columns: minmax(220px, .9fr) minmax(0, 1.6fr); gap: clamp(36px, 7vw, 96px); margin: 0; }
.faskes-summary > div { display: flex; min-height: 0; justify-content: flex-start; flex-direction: column; gap: 7px; padding: 2px 4px; }
.faskes-summary dt { color: #718096; font-size: 12px; font-weight: 500; }
.faskes-summary dd { margin: 0; color: #102a43; font-size: 15px; font-weight: 500; line-height: 1.45; overflow-wrap: anywhere; }
.multiline-value { white-space: pre-line; }
.contact-section { margin-top: 24px; border-top: 1px solid #e8eef2; padding-top: 20px; }
.contact-section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
.contact-section-heading h3 { margin: 0 0 3px; color: #102a43; font-size: 14px; }
.contact-section-heading p { margin: 0; color: #829ab1; font-size: 11px; }
.contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
.contact-card { display: grid; grid-template-columns: 46px minmax(0, 1fr); align-items: center; gap: 13px; min-width: 0; min-height: 82px; border: 1px solid #e3ebf0; border-radius: 14px; padding: 15px; background: #fff; box-shadow: 0 4px 14px rgba(31, 52, 73, .035); transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease; }
.contact-card:hover { border-color: rgba(var(--app-primary-rgb, 24, 166, 228), .32); box-shadow: 0 8px 20px rgba(31, 52, 73, .07); transform: translateY(-1px); }
.contact-card--external { border-color: rgba(var(--app-primary-rgb, 24, 166, 228), .2); background: linear-gradient(135deg, #fff 35%, rgba(var(--app-primary-rgb, 24, 166, 228), .045)); }
.contact-avatar { display: grid; width: 46px; height: 46px; place-items: center; border: 3px solid #fff; border-radius: 14px; color: #fff; background: linear-gradient(145deg, var(--app-primary, #18a6e4), var(--app-secondary, #75c4ef)); box-shadow: 0 6px 14px rgba(22, 76, 105, .14); font-size: 12px; font-weight: 800; }
.contact-card-copy { min-width: 0; }
.contact-card-copy > strong, .contact-card-copy > span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.contact-card-copy > strong { color: #102a43; font-size: 14px; font-weight: 600; }
.contact-card-copy > span { margin-top: 3px; color: #718096; font-size: 11px; }
.contact-meta { display: flex; min-width: 0; flex-wrap: wrap; gap: 6px 12px; margin-top: 10px; }
.contact-meta a { display: inline-flex; min-width: 0; align-items: center; gap: 5px; overflow: hidden; color: #486581; font-size: 11px; text-decoration: none; text-overflow: ellipsis; white-space: nowrap; }
.contact-meta a:hover { color: var(--opportunity-blue); }
.contact-meta a :deep(.solar-icon) { flex: 0 0 auto; color: var(--opportunity-blue); }
.contact-owner-note { margin-top: 10px; }
.contact-owner-note span { display: inline-flex; max-width: 100%; align-items: center; gap: 5px; border-radius: 999px; padding: 4px 9px; overflow: hidden; color: var(--app-primary-dark, #087cae); background: rgba(var(--app-primary-rgb, 24, 166, 228), .11); font-size: 10px; font-weight: 700; line-height: 1.3; text-overflow: ellipsis; white-space: nowrap; }
.contact-owner-note :deep(.solar-icon) { flex: 0 0 auto; color: var(--opportunity-blue); }
.table-responsive { overflow-x: auto; }
.products-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.products-table th { padding: 11px 12px; border-bottom: 1px solid #e3ebf0; color: #627d98; background: #f8fbfd; font-size: 11px; letter-spacing: .03em; text-align: left; text-transform: uppercase; white-space: nowrap; }
.products-table td { padding: 13px 12px; border-bottom: 1px solid #edf2f5; color: #334e68; vertical-align: middle; }
.products-table .numeric-cell { text-align: right; white-space: nowrap; }
.products-table .product-name, .products-table .subtotal-cell { color: #102a43; font-weight: 600; }
.product-code { padding: 4px 7px; border-radius: 6px; color: var(--app-primary-dark, #087cae); background: var(--app-primary-wash, #eef9fd); font-family: monospace; }
.products-table tfoot td { border: 0; padding-top: 16px; color: #243b53; font-size: 14px; font-weight: 700; }
.products-table tfoot td:first-child { text-align: right; }
.mobile-products { display: none; }
.empty-state { display: flex; min-height: 150px; align-items: center; justify-content: center; flex-direction: column; gap: 8px; padding: 24px; border: 1px dashed #d9e1e6; border-radius: 10px; color: #7a8792; background: #fbfcfd; font-size: 12px; text-align: center; }
.empty-state i { color: var(--opportunity-blue); font-size: 24px; }
.empty-state strong { color: #52677a; font-size: 12px; }
.empty-state.compact { min-height: 110px; }
.total-warning { display: flex; align-items: center; gap: 8px; margin: 14px 0 0; padding: 9px 11px; border-radius: 9px; color: #8b650d; background: #fff7df; font-size: 11px; }
.task-list { display: grid; gap: 10px; }
.task-item { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 12px; padding: 14px; border: 1px solid #e3ebf0; border-radius: 12px; background: #fff; box-shadow: 0 4px 12px rgba(31, 52, 73, .035); }
.task-marker { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; color: var(--opportunity-blue); background: rgba(var(--app-primary-rgb, 24, 166, 228), .1); }
.task-item strong { color: #102a43; font-size: 14px; }
.task-item p { margin: 4px 0 8px; color: #718096; font-size: 12px; }
.task-meta { display: flex; flex-wrap: wrap; gap: 6px 12px; color: #829ab1; font-size: 11px; }
.history-card { display: flex; justify-content: flex-end; gap: 38px; padding: 14px 18px; color: #829ab1; text-align: right; }
.history-card span, .history-card strong, .history-card small { display: block; }
.history-card span { font-size: 9px; text-transform: uppercase; }
.history-card strong { margin-top: 2px; color: #606d78; font-size: 11px; }
.history-card small { margin-top: 1px; font-size: 10px; }
.state-card { display: flex; min-height: 330px; align-items: center; justify-content: center; flex-direction: column; gap: 10px; padding: 30px; text-align: center; }
.state-card > i { font-size: 30px; }
.skeleton-card { display: grid; gap: 12px; min-height: 130px; }
.skeleton { display: block; border-radius: 7px; background: linear-gradient(90deg, #edf1f4 25%, #f8fafb 50%, #edf1f4 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; }
.skeleton-title { width: 32%; height: 20px; }
.skeleton-line { width: 100%; height: 14px; }
.skeleton-line.short { width: 62%; }
@keyframes shimmer { to { background-position: -200% 0; } }

:global(body.dark-only) .detail-card,
:global(body.dark-only) .opportunity-header-card,
:global(body.dark-only) .history-card,
:global(body.dark-only) .header-edit-button { border-color: #34404c; background-color: #202730; color: #dce3e8; }
:global(body.dark-only) .opportunity-header-card { background: radial-gradient(circle at 92% 10%, rgba(var(--app-primary-rgb, 24, 166, 228), .16), transparent 30%), #202730; }
:global(body.dark-only) .card-heading { border-color: #34404c; background: linear-gradient(90deg, #202730, #25313c); }
:global(body.dark-only) .opportunity-header-copy h1,
:global(body.dark-only) .card-heading h2,
:global(body.dark-only) .faskes-summary dd,
:global(body.dark-only) .contact-section-heading h3,
:global(body.dark-only) .contact-card-copy > strong,
:global(body.dark-only) .task-item strong,
:global(body.dark-only) .products-table .product-name,
:global(body.dark-only) .products-table .subtotal-cell { color: #eef3f6; }
:global(body.dark-only) .products-table th { background: #28323c; }
:global(body.dark-only) .opportunity-field strong { color: #e6edf2; }
:global(body.dark-only) .opportunity-divider { background: #34404c; }
:global(body.dark-only) .unsuccessful-reason { background: rgba(239, 154, 162, .08); }
:global(body.dark-only) .products-table td { border-color: #34404c; }
:global(body.dark-only) .task-item,
:global(body.dark-only) .contact-card,
:global(body.dark-only) .empty-state { border-color: #3a4652; }
:global(body.dark-only) .task-item,
:global(body.dark-only) .contact-card,
:global(body.dark-only) .empty-state { background: #25303a; }
:global(body.dark-only) .contact-card--external { background: linear-gradient(135deg, #25303a 35%, rgba(var(--app-primary-rgb, 24, 166, 228), .08)); }
:global(body.dark-only) .contact-section { border-color: #34404c; }

@media (max-width: 767.98px) {
  .opportunity-detail-page { padding-right: 12px; padding-left: 12px; }
  .detail-stack { gap: 18px; }
  .opportunity-header-card { border-radius: 14px; padding: 17px 62px 17px 17px; }
  .header-edit-button { top: 14px; right: 14px; width: 36px; height: 36px; }
  .detail-card { border-radius: 13px; }
  .card-heading, .card-body-content { padding: 15px; }
  .card-heading { align-items: flex-start; }
  .card-heading-icon { width: 38px; height: 38px; flex-basis: 38px; }
  .card-heading .item-count { margin-left: auto; }
  .opportunity-information { grid-template-columns: 1fr; row-gap: 20px; }
  .activity-panel { grid-template-columns: 1fr; }
  .opportunity-field--value, .opportunity-field--full, .opportunity-divider { grid-column: auto; }
  .faskes-summary { grid-template-columns: 1fr; gap: 20px; }
  .contact-section-heading { align-items: flex-start; }
  .contact-grid { grid-template-columns: 1fr; }
  .desktop-products { display: none; }
  .mobile-products { display: grid; gap: 10px; }
  .product-card { padding: 13px; border: 1px solid #e3ebf0; border-radius: 12px; background: #fff; box-shadow: 0 3px 10px rgba(31, 52, 73, .035); }
  .product-card strong, .product-card span { display: block; }
  .product-card strong { color: #25313a; font-size: 13px; }
  .product-card span { margin-top: 3px; color: #85919b; font-size: 10px; }
  .product-card p { display: flex; justify-content: space-between; gap: 10px; margin: 12px 0 0; padding-top: 10px; border-top: 1px solid #edf1f4; color: #66737e; font-size: 11px; }
  .product-card b { color: var(--opportunity-blue); white-space: nowrap; }
  .mobile-total { display: flex; justify-content: space-between; padding: 13px; border-radius: 10px; color: #34414c; background: #f8fbfd; font-size: 13px; }
  .history-card { justify-content: space-between; gap: 18px; text-align: left; }
  .history-card > div:last-child { text-align: right; }
  :global(body.dark-only) .product-card { border-color: #3a4652; }
  :global(body.dark-only) .product-card strong { color: #eef3f6; }
  :global(body.dark-only) .product-card p { border-color: #34404c; }
  :global(body.dark-only) .mobile-total { color: #e6edf2; background: #28323c; }
}
</style>
