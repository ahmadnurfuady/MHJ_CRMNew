<template>
  <article
    v-if="project"
    class="opp-card"
    :class="`opp-card--${viewMode}`"
    role="link"
    tabindex="0"
    :aria-label="`Buka detail ${project.projectName}`"
    :style="stageCssVariables"
    @click="openProjectDetail"
    @keydown.enter="openProjectDetail"
    @keydown.space.prevent="openProjectDetail"
  >
    <template v-if="viewMode === 'list'">
      <div class="opp-list-layout">
        <div class="opp-list-project-header">
          <small>Nama peluang</small>
          <strong>{{ shortProjectTitle(project.projectName) }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--status">
          <small>Status</small>
          <div class="opp-stage-status">
            <span class="opp-stage-pill">
              <i class="opp-stage-pill__dot"></i>
              {{ stageTitle }}
            </span>
            <span
              v-if="hasMissingRequirements"
              class="opp-requirement-alert"
              role="img"
              :aria-label="missingRequirementsLabel"
              :title="missingRequirementsLabel"
            >!</span>
          </div>
        </div>

        <div
          class="opp-list-cell opp-list-cell--estimate"
          :title="`Estimasi selesai: ${formatFullDate(project.expectedCloseDate)}`"
        >
          <small>Estimasi Selesai</small>
          <strong>{{ formatShortDate(project.expectedCloseDate) }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--hospital">
          <small>Nama RS</small>
          <strong>{{ project.companyName || 'Faskes belum ditentukan' }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--stage-time">
          <small>Di stage ini</small>
          <strong>{{ stageDuration }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--address">
          <small>Alamat</small>
          <strong>{{ project.address || 'Alamat belum tersedia' }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--value" :title="formatFullMoney(projectValue)">
          <small>Nilai peluang</small>
          <strong>{{ formatMoney(projectValue) }}</strong>
        </div>

        <div class="opp-list-contact">
          <small>Kontak Utama</small>
          <template v-if="projectContacts.length">
            <div class="opp-list-contact__items">
              <div
                v-for="(contact, index) in visibleListContacts"
                :key="`${contact.id}-${contact.name}`"
              >
                <span>{{ index + 1 }}</span>
                <strong>{{ contact.name }}</strong>
              </div>
            </div>
            <span v-if="hiddenListContactCount" class="opp-list-contact__more">
              +{{ hiddenListContactCount }} kontak lainnya
            </span>
          </template>
          <template v-else>
            <span class="opp-list-contact__empty">Belum ada kontak PIC</span>
          </template>
        </div>
      </div>

      <div class="opp-list-footer">
        <div>
          <span class="opp-avatar opp-avatar--owner" aria-hidden="true">{{ initials(project.ownerName) }}</span>
          <span>
            <small>Owner</small>
            <strong>{{ project.ownerName || 'Belum ditentukan' }}</strong>
          </span>
        </div>
        <div>
          <small>Dibuat oleh</small>
          <strong>{{ createdByName }}</strong>
          <span class="opp-list-footer__date">{{ formatAuditDate(project.createdAt) }}</span>
        </div>
        <div>
          <small>Diperbarui oleh</small>
          <strong>{{ updatedByName }}</strong>
          <span class="opp-list-footer__date">{{ formatAuditDate(project.updatedAt) }}</span>
        </div>
      </div>
    </template>

    <template v-else>
    <div class="opp-card__stage">
      <div class="opp-stage-status">
        <span class="opp-stage-pill">
          <i class="opp-stage-pill__dot"></i>
          {{ stageTitle }}
        </span>
        <span
          v-if="hasMissingRequirements"
          class="opp-requirement-alert"
          role="img"
          :aria-label="missingRequirementsLabel"
          :title="missingRequirementsLabel"
        >!</span>
      </div>
      <span class="opp-created" :title="`Estimasi selesai: ${formatFullDate(project.expectedCloseDate)}`">
        <SolarIcon
          name="calendar"
          :size="14"
          color="#7b8794"
          secondary-color="#7b8794"
          :secondary-opacity="1"
          aria-hidden="true"
        />
        <span>Estimasi selesai · {{ formatShortDate(project.expectedCloseDate) }}</span>
      </span>
    </div>

    <div class="opp-card__main">
      <div class="opp-card__copy">
        <small>Peluang</small>
        <h5>{{ shortProjectTitle(project.projectName) }}</h5>
        <p>
          <span>{{ project.companyName || 'Faskes belum ditentukan' }}</span>
        </p>
        <p
          v-if="project.address"
          class="opp-card__address"
          :title="project.address"
        >
          <vue-feather type="map-pin" size="13" />
          <span>{{ project.address }}</span>
        </p>
      </div>
    </div>

    <div class="opp-card__owner">
      <span class="opp-avatar opp-avatar--owner" aria-hidden="true">{{ initials(project.ownerName) }}</span>
      <div class="opp-owner-copy">
        <small>Owner</small>
        <strong>{{ project.ownerName || 'Belum ditentukan' }}</strong>
      </div>
    </div>

    <div class="opp-card__timing">
      <div>
        <span><small>Di stage ini</small><strong>{{ stageDuration }}</strong></span>
      </div>
      <div>
        <span><small>Update terakhir</small><strong>{{ lastUpdated }}</strong></span>
      </div>
    </div>

    <!-- Pada list blok ini disembunyikan di desktop dan dipakai saat layout mobile. -->
    <div class="opp-card__audit">
      <div>
        <span><small>Dibuat oleh</small><strong>{{ createdByName }}</strong></span>
      </div>
      <div>
        <span><small>Diperbarui oleh</small><strong>{{ updatedByName }}</strong></span>
      </div>
    </div>

    <div class="opp-card__contact">
      <template v-if="projectContacts.length">
        <span class="opp-avatar" aria-hidden="true">{{ initials(projectContacts[0].name) }}</span>
        <div class="opp-contact-name">
          <small>Kontak utama</small>
          <strong>{{ projectContacts[0].name }}</strong>
        </div>
        <div v-if="remainingContacts.length" class="opp-more-contacts" @click.stop>
          <button type="button" :aria-label="`${remainingContacts.length} kontak lainnya`">
            <vue-feather type="more-horizontal" size="16" />
          </button>
          <div class="opp-contact-popover" role="tooltip">
            <p>{{ remainingContacts.length }} kontak lainnya</p>
            <div v-for="contact in remainingContacts" :key="`${contact.id}-${contact.name}`">
              <i class="opp-avatar opp-avatar--small">{{ initials(contact.name) }}</i>
              <span>
                <strong>{{ contact.name }}</strong>
                <small>{{ contact.jobTitle || contact.phone || 'Kontak tambahan' }}</small>
              </span>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <span class="opp-contact-empty"><small>Kontak utama</small><strong>Belum ada kontak</strong></span>
      </template>
    </div>

    <div class="opp-card__value" :title="formatFullMoney(projectValue)">
      <small>Nilai peluang</small>
      <strong>{{ formatMoney(projectValue) }}</strong>
      <span>
        <SolarIcon
          name="eye"
          :size="15"
          color="currentColor"
          secondary-color="currentColor"
          :secondary-opacity="0.42"
          aria-hidden="true"
        />
        Lihat detail
      </span>
    </div>
    </template>
  </article>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useRouter } from 'vue-router'
import { projectTab } from '@/core/data/project'
import { shortProjectTitle } from '@/utils/index'
import type { ProjectContact, Projects } from '@/types/project'

const props = withDefaults(
  defineProps<{
    project: Projects
    viewMode?: 'board' | 'list'
    missingRequirements?: string[]
    backTo?: string
  }>(),
  { viewMode: 'board', missingRequirements: () => [], backTo: '' }
)
const router = useRouter()

const STAGE_COLORS: Record<string, string> = {
  qualified: '#2563eb',
  presentation_demo: '#0891b2',
  quotation: '#d97706',
  negotiation: '#7c3aed',
  closed_won: '#16a34a',
  closed_lost: '#dc2626',
  closed_cancel: '#64748b'
}

const stage = computed(() => projectTab.find((tab) => tab.value === props.project.status))
const stageTitle = computed(() => stage.value?.title || titleCase(props.project.stageName || props.project.status))
const stageCssVariables = computed<CSSProperties>(() => ({
  '--opp-stage': STAGE_COLORS[props.project.status] || '#64748b'
} as CSSProperties))
const projectValue = computed(() => props.project.amountValue ?? props.project.projectValue ?? 0)
const projectContacts = computed<ProjectContact[]>(() => {
  if (props.project.contacts?.length) return props.project.contacts
  return props.project.contactName
    ? [{ id: props.project.contactId, name: props.project.contactName, phone: props.project.contactPhone }]
    : []
})
const remainingContacts = computed(() => projectContacts.value.slice(1))
const visibleListContacts = computed(() => projectContacts.value.slice(0, 3))
const hiddenListContactCount = computed(() => Math.max(projectContacts.value.length - 3, 0))
const lastUpdated = computed(() => formatRelativeTime(props.project.updatedAt || props.project.createdAt))
const stageDuration = computed(() => formatDuration(props.project.stageEnteredAt || props.project.updatedAt || props.project.createdAt))
const createdByName = computed(() => props.project.createdBy || 'Belum tersedia')
const updatedByName = computed(() => props.project.updatedBy || 'Belum tersedia')
const hasMissingRequirements = computed(() => props.missingRequirements.length > 0)
const missingRequirementsLabel = computed(() =>
  `Belum lengkap: ${props.missingRequirements.join(' dan ')}`
)

function titleCase(value: string) {
  return value.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Tanpa stage'
}

function initials(name?: string) {
  if (!name) return '?'
  return name.trim().split(/\s+/).slice(0, 2).map((word) => word[0]).join('').toUpperCase()
}

function parsedDate(value?: string) {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

function formatShortDate(value?: string) {
  const date = parsedDate(value)
  return date ? new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date) : 'Belum tersedia'
}

function formatFullDate(value?: string) {
  const date = parsedDate(value)
  return date ? new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' }).format(date) : 'Tanggal belum tersedia'
}

function elapsed(value?: string) {
  const date = parsedDate(value)
  return date ? Math.max(0, Date.now() - date.getTime()) : null
}

function formatRelativeTime(value?: string) {
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

function formatDuration(value?: string) {
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

function formatMoney(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: props.project.currency || 'IDR',
    minimumFractionDigits: 0, maximumFractionDigits: 20, currencyDisplay: 'narrowSymbol'
  }).format(value)
}

function formatAuditDate(value?: string) {
  const date = parsedDate(value)
  return date
    ? new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    : 'Waktu belum tersedia'
}

function formatFullMoney(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: props.project.currency || 'IDR',
    minimumFractionDigits: 0, maximumFractionDigits: 20
  }).format(value)
}

function openProjectDetail() {
  router.push({
    name: 'Project Details V2',
    query: {
      id: String(props.project.id),
      ...(props.backTo ? { backTo: props.backTo } : {}),
    },
  })
}
</script>
