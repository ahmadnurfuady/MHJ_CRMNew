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
          <strong>{{ project.dealName }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--status">
          <small>Status</small>
          <div class="opp-stage-status">
            <span class="opp-stage-pill">
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

        <div class="opp-list-cell opp-list-cell--hospital">
          <small>Nama RS</small>
          <strong>{{ project.companyName || 'Faskes belum ditentukan' }}</strong>
        </div>

        <div class="opp-list-cell opp-list-cell--stage-time">
          <small>Di stage ini</small>
          <strong class="opp-stage-duration" :class="stalledInfo && `opp-stalled-badge--${stalledInfo.variant}`" :style="stalledInfo?.style" :title="stalledInfo ? stalledTooltip : undefined">{{ stageDuration }}</strong>
        </div>

        <div
          class="opp-list-cell opp-list-cell--estimate"
          :title="`Estimasi selesai: ${formatFullDate(project.expectedCloseDate)}`"
        >
          <small>Estimasi Selesai</small>
          <strong class="opp-estimate-pill" :style="estimateStyle">{{ formatShortDate(project.expectedCloseDate) }}</strong>
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
        <span>Estimasi selesai · <strong class="opp-estimate-pill" :style="estimateStyle">{{ formatShortDate(project.expectedCloseDate) }}</strong></span>
      </span>
    </div>

    <div class="opp-card__main">
      <div class="opp-card__copy">
        <small>Peluang</small>
        <h5>{{ project.dealName }}</h5>
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
        <span><small>Di stage ini</small><strong class="opp-stage-duration" :class="stalledInfo && `opp-stalled-badge--${stalledInfo.variant}`" :style="stalledInfo?.style" :title="stalledInfo ? stalledTooltip : undefined">{{ stageDuration }}</strong></span>
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
import { PROJECT_STAGE_COLORS, projectTab } from '@/core/data/project'
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

const stage = computed(() => projectTab.find((tab) => tab.value === props.project.status))
const stageTitle = computed(() => stage.value?.title || titleCase(props.project.stageName || props.project.status))
const stageCssVariables = computed<CSSProperties>(() => ({
  '--opp-stage': PROJECT_STAGE_COLORS[props.project.status] || '#64748b'
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

/**
 * Warna durasi di stage: hijau < 30 hari, kuning sampai 60 hari,
 * lalu berangsur merah tiap hari hingga hari ke-90.
 */
type StalledVariant = 'green' | 'yellow' | 'warming' | 'red'
const stalledInfo = computed<{ variant: StalledVariant; style?: CSSProperties } | null>(() => {
  const entered = parsedDate(props.project.stageEnteredAt || props.project.createdAt)
  const days = props.project.stalledDays != null
    ? Number(props.project.stalledDays)
    : entered ? Math.floor(Math.max(0, Date.now() - entered.getTime()) / 86_400_000) : NaN
  if (!Number.isFinite(days) || days < 0) return null
  if (days < 30) return { variant: 'green' }
  if (days <= 60) return { variant: 'yellow' }
  if (days < 90) {
    const progress = (days - 60) / 30
    return {
      variant: 'warming',
      style: {
        color: `hsl(${38 - progress * 38} 85% 30%)`,
        backgroundColor: `hsl(${44 - progress * 44} 95% 92%)`,
        borderColor: `hsl(${42 - progress * 42} 80% 76%)`,
      },
    }
  }
  return { variant: 'red' }
})
const stalledTooltip = computed(() => {
  return `Peluang tidak bergerak: ${stageDuration.value} di stage ini`
})

const estimateStyle = computed<CSSProperties | undefined>(() => {
  const deadline = parsedDate(props.project.expectedCloseDate)
  if (!deadline) return undefined
  const today = new Date()
  const daysLeft = Math.round((
    Date.UTC(deadline.getFullYear(), deadline.getMonth(), deadline.getDate()) -
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  ) / 86_400_000)
  const progress = 1 - Math.min(Math.max(daysLeft, 0), 90) / 90
  const hue = 150 * (1 - progress)
  return {
    color: `hsl(${hue} 75% 30%)`,
    backgroundColor: `hsl(${hue} 80% 94%)`,
    borderColor: `hsl(${hue} 65% 78%)`,
  }
})

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

<style scoped>
.opp-stage-duration {
  display: inline-flex;
  align-items: center;
  padding: 4px 9px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
}

.opp-estimate-pill {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  border: 1px solid #dbe3ea;
  border-radius: 999px;
  padding: 4px 9px;
  font-size: 10.5px;
  font-weight: 700;
  color: #64748b;
  background: #f1f5f9;
  line-height: 1.1;
  white-space: nowrap;
}

.opp-list-cell--stage-time .opp-stage-duration {
  display: inline-flex;
  align-self: flex-start;
}

.opp-stalled-badge--green {
  color: #0f7b56;
  background: #e3f8ef;
  border-color: #b7e8d4;
}

.opp-stalled-badge--yellow {
  color: #8a5a00;
  background: #fff4d6;
  border-color: #f2d98a;
}

.opp-stalled-badge--red {
  color: #b31d1d;
  background: #fde4e4;
  border-color: #f5b6b6;
}

@media (max-width: 640px) {
  .opp-stage-duration,
  .opp-estimate-pill {
    font-size: 10px;
    padding: 3px 8px;
  }
}
</style>
