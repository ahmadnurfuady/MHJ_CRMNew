<template>
  <div class="unified-calendar-shell">
    <DxLoadPanel
      :visible="loading"
      :show-indicator="true"
      :show-pane="true"
      :shading="false"
    />

    <div v-if="!loading && loadError" class="unified-calendar-state" role="alert">
      <span class="unified-calendar-state__icon unified-calendar-state__icon--error">
        <vue-feather type="alert-circle" size="22" />
      </span>
      <strong>Kalender tidak dapat dimuat</strong>
      <span>{{ loadError }}</span>
    </div>

    <div v-else-if="!loading && !entries.length" class="unified-calendar-state">
      <span class="unified-calendar-state__icon">
        <vue-feather type="calendar" size="22" />
      </span>
      <strong>Belum ada data</strong>
      <span>Task atau peluang yang memiliki tanggal akan tampil di sini.</span>
    </div>

    <template v-else>
      <div class="unified-calendar-legend" aria-label="Legenda kalender">
        <span class="unified-calendar-legend__item">
          <span class="unified-calendar-legend__dot unified-calendar-legend__dot--task" />
          Task ({{ taskCount }})
        </span>
        <span class="unified-calendar-legend__item">
          <span class="unified-calendar-legend__dot unified-calendar-legend__dot--project" />
          Peluang ({{ projectCount }})
        </span>
      </div>

      <section class="calendar-card" aria-label="Kalender gabungan">
        <header class="calendar-toolbar">
          <div class="calendar-toolbar__navigation">
            <button
              type="button"
              class="calendar-icon-button"
              :aria-label="focusRange ? 'Rentang sebelumnya' : 'Bulan sebelumnya'"
              :disabled="Boolean(focusRange)"
              @click="changeMonth(-1)"
            >
              <vue-feather type="chevron-left" size="18" />
            </button>
            <button
              type="button"
              class="calendar-icon-button"
              :aria-label="focusRange ? 'Rentang berikutnya' : 'Bulan berikutnya'"
              :disabled="Boolean(focusRange)"
              @click="changeMonth(1)"
            >
              <vue-feather type="chevron-right" size="18" />
            </button>
          </div>

          <div class="calendar-toolbar__title">
            <span>Kalender Task &amp; Peluang</span>
            <strong>{{ focusRange ? focusRangeLabel : monthLabel }}</strong>
          </div>

          <button
            type="button"
            class="calendar-today-button"
            @click="goToToday"
          >
            Hari ini
          </button>
        </header>

        <div v-if="focusRange" class="calendar-focus-strip" :class="focusStripClass">
          <div
            v-for="day in focusDays"
            :key="day.key"
            class="calendar-focus-cell"
            :class="{
              'calendar-data-cell--today': day.isToday,
              'calendar-data-cell--weekend': day.isWeekend,
            }"
          >
            <header class="calendar-day__header">
              <div class="calendar-focus-cell__date">
                <small class="calendar-focus-cell__weekday">{{ day.weekday }}</small>
                <time :datetime="day.key" class="calendar-day__number">
                  {{ day.dayNumber }}
                </time>
              </div>
              <span
                v-if="day.entries.length"
                class="calendar-day__count"
              >
                {{ day.entries.length }} item
              </span>
            </header>

            <div
              v-if="day.entries.length"
              class="calendar-day__entries calendar-day__entries--focus"
              tabindex="0"
              aria-label="Daftar item pada tanggal ini"
              @wheel="handleEntryListWheel"
            >
              <button
                v-for="entry in day.entries"
                :key="entry.id"
                type="button"
                class="calendar-entry"
                :class="`calendar-entry--${entry.kind}`"
                :style="entryStyle(entry)"
                :title="`${entry.kind === 'task' ? 'Task' : 'Peluang'}: ${entry.title}`"
                @click.stop="openEntry(entry)"
              >
                <span class="calendar-entry__badge" aria-hidden="true">
                  {{ entry.kind === 'task' ? 'T' : 'P' }}
                </span>
                <span class="calendar-entry__content">
                  <strong>{{ entry.title }}</strong>
                  <small>{{ entry.statusLabel }}</small>
                </span>
                <vue-feather
                  class="calendar-entry__arrow"
                  type="chevron-right"
                  size="13"
                />
              </button>
            </div>

            <div v-else class="calendar-focus-cell__empty">
              Tidak ada agenda.
            </div>
          </div>
        </div>

        <div v-else class="calendar-desktop">
          <DxScheduler
            v-model:current-date="displayedMonth"
            class="devextreme-calendar"
            :data-source="schedulerDataSource"
            :views="schedulerViews"
            current-view="month"
            :height="1090"
            :editing="false"
            :first-day-of-week="1"
            :focus-state-enabled="false"
            :show-all-day-panel="false"
            data-cell-template="calendarDataCell"
            date-cell-template="calendarDateCell"
          >
            <template #calendarDateCell="{ data }">
              <span class="calendar-weekday-label">{{
                schedulerWeekdayLabel(data)
              }}</span>
            </template>

            <template #calendarDataCell="{ data }">
              <div
                class="calendar-data-cell"
                :class="{
                  'calendar-data-cell--outside':
                    !calendarCell(data).isCurrentMonth,
                  'calendar-data-cell--today': calendarCell(data).isToday,
                  'calendar-data-cell--weekend': calendarCell(data).isWeekend,
                }"
              >
                <header class="calendar-day__header">
                  <time
                    :datetime="calendarCell(data).key"
                    class="calendar-day__number"
                  >
                    {{ calendarCell(data).dayNumber }}
                  </time>
                  <span
                    v-if="calendarCell(data).entries.length"
                    class="calendar-day__count"
                  >
                    {{ calendarCell(data).entries.length }} item
                  </span>
                </header>

                <div
                  v-if="calendarCell(data).entries.length"
                  class="calendar-day__entries"
                  tabindex="0"
                  aria-label="Daftar item pada tanggal ini"
                  @wheel="handleEntryListWheel"
                >
                  <button
                    v-for="entry in calendarCell(data).entries"
                    :key="entry.id"
                    type="button"
                    class="calendar-entry"
                    :class="`calendar-entry--${entry.kind}`"
                    :style="entryStyle(entry)"
                    :title="`${entry.kind === 'task' ? 'Task' : 'Peluang'}: ${entry.title}`"
                    @click.stop="openEntry(entry)"
                  >
                    <span class="calendar-entry__badge" aria-hidden="true">
                      {{ entry.kind === 'task' ? 'T' : 'P' }}
                    </span>
                    <span class="calendar-entry__content">
                      <strong>{{ entry.title }}</strong>
                      <small>{{ entry.statusLabel }}</small>
                    </span>
                    <vue-feather
                      class="calendar-entry__arrow"
                      type="chevron-right"
                      size="13"
                    />
                  </button>
                </div>
              </div>
            </template>
          </DxScheduler>
        </div>

        <div v-if="!focusRange" class="calendar-mobile">
          <div v-if="agendaDays.length" class="calendar-agenda">
            <section
              v-for="day in agendaDays"
              :key="day.key"
              class="calendar-agenda-day"
            >
              <header class="calendar-agenda-day__header">
                <time :datetime="day.key">{{ formatAgendaDate(day.date) }}</time>
                <span>{{ day.entries.length }} item</span>
              </header>

              <button
                v-for="entry in day.entries"
                :key="entry.id"
                type="button"
                class="calendar-entry calendar-entry--agenda"
                :class="`calendar-entry--${entry.kind}`"
                :style="entryStyle(entry)"
                @click="openEntry(entry)"
              >
                <span class="calendar-entry__badge" aria-hidden="true">
                  {{ entry.kind === 'task' ? 'T' : 'P' }}
                </span>
                <span class="calendar-entry__content">
                  <strong>{{ entry.title }}</strong>
                  <small>{{ entry.statusLabel }} · {{ entry.subtitle }}</small>
                </span>
                <vue-feather
                  class="calendar-entry__arrow"
                  type="chevron-right"
                  size="15"
                />
              </button>
            </section>
          </div>

          <div v-else class="calendar-month-empty">
            <vue-feather type="calendar" size="20" />
            <span>Tidak ada task atau peluang pada bulan ini.</span>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DxLoadPanel from 'devextreme-vue/load-panel'
import { DxScheduler, type DxSchedulerTypes } from 'devextreme-vue/scheduler'
import type { CalendarEntry } from './calendarEntry'
import { entryAccent } from './calendarEntry'

interface CalendarDay {
  date: Date
  key: string
  dayNumber: number
  isCurrentMonth: boolean
  isToday: boolean
  isWeekend: boolean
  entries: CalendarEntry[]
}

interface FocusDay extends CalendarDay {
  weekday: string
}

const props = defineProps<{
  entries: CalendarEntry[]
  loading: boolean
  loadError?: string | null
  /**
   * Jika diisi, kalender tidak merender grid bulanan DxScheduler melainkan
   * strip hari sejumlah selisih (end - start). Dipakai untuk filter periode
   * harian (1 cell) & mingguan (<=7 cell).
   * `end` eksklusif, mengikuti konvensi activePeriodRange di Kalender.vue.
   */
  focusRange?: { start: Date; end: Date } | null
}>()

const emit = defineEmits<{
  openEntry: [entry: CalendarEntry]
}>()

const schedulerViews: DxSchedulerTypes.ViewType[] = ['month']
const schedulerDataSource: never[] = []
const displayedMonth = ref(startOfMonth(new Date()))

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function dateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function monthKey(date: Date) {
  return dateKey(date).slice(0, 7)
}

function isSameDay(first: Date, second: Date) {
  return dateKey(first) === dateKey(second)
}

const sortedEntries = computed<CalendarEntry[]>(() =>
  [...props.entries].sort((a, b) => a.date.getTime() - b.date.getTime()),
)

const taskCount = computed(
  () => sortedEntries.value.filter((e) => e.kind === 'task').length,
)
const projectCount = computed(
  () => sortedEntries.value.filter((e) => e.kind === 'project').length,
)

const entriesByDate = computed(() => {
  const grouped = new Map<string, CalendarEntry[]>()
  sortedEntries.value.forEach((entry) => {
    const list = grouped.get(entry.dateKey) || []
    list.push(entry)
    grouped.set(entry.dateKey, list)
  })
  return grouped
})

const availableMonthKeys = computed(() => [
  ...new Set(sortedEntries.value.map((entry) => monthKey(entry.date))),
])

watch(
  availableMonthKeys,
  (months) => {
    if (!months.length || months.includes(monthKey(displayedMonth.value)))
      return
    const [year, month] = months[0].split('-').map(Number)
    displayedMonth.value = new Date(year, month - 1, 1)
  },
  { immediate: true },
)

const monthDays = computed<CalendarDay[]>(() => {
  const firstDay = startOfMonth(displayedMonth.value)
  const mondayOffset = (firstDay.getDay() + 6) % 7
  const gridStart = new Date(firstDay)
  gridStart.setDate(gridStart.getDate() - mondayOffset)
  const today = new Date()

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart)
    date.setDate(gridStart.getDate() + index)
    const key = dateKey(date)

    return {
      date,
      key,
      dayNumber: date.getDate(),
      isCurrentMonth: date.getMonth() === displayedMonth.value.getMonth(),
      isToday: isSameDay(date, today),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      entries: entriesByDate.value.get(key) || [],
    }
  })
})

function calendarCell(data: unknown): CalendarDay {
  const rawStartDate = (data as { startDate?: Date | string } | undefined)
    ?.startDate
  const date = rawStartDate ? new Date(rawStartDate) : new Date()
  const key = dateKey(date)
  const today = new Date()

  return {
    date,
    key,
    dayNumber: date.getDate(),
    isCurrentMonth:
      date.getMonth() === displayedMonth.value.getMonth() &&
      date.getFullYear() === displayedMonth.value.getFullYear(),
    isToday: isSameDay(date, today),
    isWeekend: date.getDay() === 0 || date.getDay() === 6,
    entries: entriesByDate.value.get(key) || [],
  }
}

function schedulerWeekdayLabel(data: unknown) {
  const cellData = data as {
    date?: Date | string
    startDate?: Date | string
    text?: string
  }
  const rawDate = cellData?.date || cellData?.startDate
  if (!rawDate) return cellData?.text || ''

  return new Intl.DateTimeFormat('id-ID', { weekday: 'short' }).format(
    new Date(rawDate),
  )
}

const agendaDays = computed(() =>
  monthDays.value.filter((day) => day.isCurrentMonth && day.entries.length),
)

const monthLabel = computed(() =>
  new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(
    displayedMonth.value,
  ),
)

const focusDays = computed<FocusDay[]>(() => {
  if (!props.focusRange) return []
  const today = new Date()
  const start = new Date(
    props.focusRange.start.getFullYear(),
    props.focusRange.start.getMonth(),
    props.focusRange.start.getDate(),
  )
  const endTime = props.focusRange.end.getTime()
  const result: FocusDay[] = []
  for (
    let cursor = new Date(start);
    cursor.getTime() < endTime;
    cursor.setDate(cursor.getDate() + 1)
  ) {
    const date = new Date(cursor)
    const key = dateKey(date)
    result.push({
      date,
      key,
      dayNumber: date.getDate(),
      isCurrentMonth: true,
      isToday: isSameDay(date, today),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      entries: entriesByDate.value.get(key) || [],
      weekday: new Intl.DateTimeFormat('id-ID', { weekday: 'short' }).format(date),
    })
  }
  return result
})

const focusStripClass = computed(() => ({
  'calendar-focus-strip--single': focusDays.value.length === 1,
}))

const focusRangeLabel = computed(() => {
  if (!props.focusRange || !focusDays.value.length) return ''
  const first = focusDays.value[0].date
  const last = focusDays.value[focusDays.value.length - 1].date
  if (focusDays.value.length === 1) {
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(first)
  }
  const sameMonth =
    first.getMonth() === last.getMonth() && first.getFullYear() === last.getFullYear()
  const firstStr = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    ...(sameMonth ? {} : { month: 'short' }),
  }).format(first)
  const lastStr = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(last)
  return `${firstStr} – ${lastStr}`
})

function changeMonth(amount: number) {
  displayedMonth.value = new Date(
    displayedMonth.value.getFullYear(),
    displayedMonth.value.getMonth() + amount,
    1,
  )
}

function goToToday() {
  displayedMonth.value = startOfMonth(new Date())
}

function formatAgendaDate(date: Date) {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date)
}

function entryStyle(entry: CalendarEntry) {
  return { '--entry-accent': entryAccent(entry) }
}

function openEntry(entry: CalendarEntry) {
  emit('openEntry', entry)
}

function handleEntryListWheel(event: WheelEvent) {
  const list = event.currentTarget as HTMLElement | null
  if (!list) return

  const maxScrollTop = list.scrollHeight - list.clientHeight
  if (maxScrollTop <= 0) return

  const scrollingUp = event.deltaY < 0
  const scrollingDown = event.deltaY > 0
  const canScrollUp = list.scrollTop > 0
  const canScrollDown = list.scrollTop < maxScrollTop - 1

  if ((scrollingUp && !canScrollUp) || (scrollingDown && !canScrollDown)) return

  event.preventDefault()
  event.stopPropagation()
  list.scrollTop += event.deltaY
}
</script>

<style scoped>
.unified-calendar-shell {
  position: relative;
  min-height: 320px;
  padding: 18px;
  background: #fff;
}

.unified-calendar-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 12px;
  padding: 10px 14px;
  border: 1px solid var(--border-subtle, #e2e8f0);
  border-radius: 10px;
  background: var(--color-primary-wash, #f5fbfe);
  color: var(--text-secondary, #475569);
  font-size: 12px;
  font-weight: 600;
}

.unified-calendar-legend__item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.unified-calendar-legend__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.unified-calendar-legend__dot--task {
  background: var(--app-primary, #18a6e4);
}

.unified-calendar-legend__dot--project {
  background: var(--success, #10b981);
}

.calendar-card {
  overflow: hidden;
  border: 1px solid var(--border-subtle, #e2e8f0);
  border-radius: 14px;
  background: #fff;
}

.calendar-toolbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  min-height: 70px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  background: var(--color-primary-wash, #f5fbfe);
}

.calendar-toolbar__navigation {
  display: flex;
  gap: 6px;
}

.calendar-toolbar__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.25;
}

.calendar-toolbar__title span {
  color: var(--text-muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.calendar-toolbar__title strong {
  color: var(--text-primary, #1e293b);
  font-size: 18px;
  text-transform: capitalize;
}

.calendar-icon-button,
.calendar-today-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-primary-border, #9edcf4);
  border-radius: 8px;
  background: #fff;
  color: var(--app-primary-dark, #116e96);
  transition: 0.18s ease;
}

.calendar-icon-button {
  width: 36px;
  height: 36px;
  padding: 0;
}

.calendar-today-button {
  justify-self: end;
  min-height: 36px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 700;
}

.calendar-icon-button:hover,
.calendar-today-button:hover {
  border-color: var(--app-primary, #18a6e4);
  background: var(--color-primary-soft, #dff4fc);
}

.devextreme-calendar :deep(.dx-scheduler) {
  border: 0;
  color: var(--text-secondary, #475569);
  font-family: var(--font-family, 'Montserrat', sans-serif);
}

.devextreme-calendar :deep(.dx-scheduler-header) {
  display: none;
}

.devextreme-calendar :deep(.dx-scheduler-header-panel-cell) {
  height: 36px;
  border-color: var(--border-subtle, #e2e8f0);
  background: #fff;
  color: var(--text-muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.devextreme-calendar :deep(.dx-scheduler-date-table-cell) {
  height: 174px;
  padding: 0;
  border-color: var(--border-subtle, #e2e8f0);
  vertical-align: top;
}

.devextreme-calendar :deep(.dx-scheduler-date-table-cell .dx-template-wrapper) {
  width: 100%;
  min-width: 0;
  height: 100%;
  pointer-events: auto;
}

.devextreme-calendar :deep(.dx-scheduler-date-table-cell > div) {
  pointer-events: auto;
}

.devextreme-calendar :deep(.dx-scheduler-work-space) {
  border: 0;
}

.calendar-data-cell {
  position: relative;
  z-index: 1;
  min-width: 0;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  background: #fff;
  pointer-events: auto;
}

.calendar-data-cell--weekend {
  background: #fbfdfe;
}

.calendar-data-cell--outside {
  background: #f8fafc;
}

.calendar-data-cell--outside .calendar-day__header,
.calendar-data-cell--outside .calendar-day__entries {
  opacity: 0.45;
}

.calendar-day__header {
  display: flex;
  min-width: 0;
  height: 26px;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 5px;
}

.calendar-day__number {
  display: inline-flex;
  width: 26px;
  height: 26px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-primary, #1e293b);
  font-size: 12px;
  font-weight: 700;
}

.calendar-data-cell--today .calendar-day__number {
  background: var(--app-primary, #18a6e4);
  color: #fff;
}

.calendar-day__count {
  overflow: hidden;
  color: var(--text-disabled, #94a3b8);
  font-size: 9px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calendar-day__entries {
  display: flex;
  max-height: 127px;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
  padding-right: 2px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: var(--color-primary-border, #9edcf4) transparent;
  scrollbar-width: thin;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
}

.calendar-day__entries:focus-visible {
  border-radius: 8px;
  outline: 2px solid var(--color-primary-border, #9edcf4);
  outline-offset: 1px;
}

.calendar-day__entries::-webkit-scrollbar {
  width: 4px;
}

.calendar-day__entries::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--color-primary-border, #9edcf4);
}

.calendar-entry {
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 38px;
  align-items: center;
  gap: 7px;
  padding: 5px 6px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--entry-accent) 22%, white);
  border-left: 3px solid var(--entry-accent);
  border-radius: 7px;
  background: color-mix(in srgb, var(--entry-accent) 8%, white);
  color: var(--text-primary, #1e293b);
  cursor: pointer;
  pointer-events: auto;
  text-align: left;
  transition: 0.16s ease;
}

.calendar-entry:hover {
  border-color: color-mix(in srgb, var(--entry-accent) 42%, white);
  background: color-mix(in srgb, var(--entry-accent) 14%, white);
  box-shadow: 0 2px 7px rgba(var(--app-primary-rgb, 24, 166, 228), 0.13);
}

.calendar-entry:focus-visible {
  outline: 2px solid var(--app-primary, #18a6e4);
  outline-offset: 1px;
}

.calendar-entry__badge {
  display: inline-flex;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: var(--entry-accent);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.calendar-entry__content {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
}

.calendar-entry__content strong,
.calendar-entry__content small {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calendar-entry__content strong {
  font-size: 10px;
  font-weight: 700;
}

.calendar-entry__content small {
  margin-top: 1px;
  color: var(--text-muted, #64748b);
  font-size: 8px;
  font-weight: 600;
}

.calendar-entry__arrow {
  flex: 0 0 auto;
  color: var(--entry-accent);
  opacity: 0;
  transition: opacity 0.16s ease;
}

.calendar-entry:hover .calendar-entry__arrow,
.calendar-entry:focus-visible .calendar-entry__arrow {
  opacity: 1;
}

.calendar-mobile {
  display: none;
}

/* ─── Focus strip (daily / weekly) ───────────────────────────────────── */
.calendar-focus-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  padding: 16px;
}

.calendar-focus-strip--single {
  grid-template-columns: minmax(220px, 420px);
  justify-content: center;
}

.calendar-focus-cell {
  display: flex;
  min-height: 240px;
  flex-direction: column;
  padding: 10px 10px 8px;
  border: 1px solid var(--border-subtle, #e2e8f0);
  border-radius: 10px;
  background: #fff;
}

.calendar-focus-cell.calendar-data-cell--weekend {
  background: #fbfdfe;
}

.calendar-focus-cell__date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.calendar-focus-cell__weekday {
  color: var(--text-muted, #64748b);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.calendar-day__entries--focus {
  max-height: 460px;
  flex: 1;
}

.calendar-focus-cell__empty {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  color: var(--text-disabled, #94a3b8);
  font-size: 11px;
  font-style: italic;
}

.unified-calendar-state {
  display: flex;
  min-height: 360px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  color: var(--text-muted, #64748b);
  text-align: center;
}

.unified-calendar-state__icon {
  display: inline-flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  border-radius: 50%;
  background: var(--color-primary-soft, #dff4fc);
  color: var(--app-primary, #18a6e4);
}

.unified-calendar-state__icon--error {
  background: var(--danger-soft-bg, #fee2e2);
  color: var(--danger, #ef4444);
}

.unified-calendar-state strong {
  color: var(--text-primary, #1e293b);
}

@media (max-width: 991.98px) {
  .calendar-desktop {
    overflow-x: auto;
  }

  .devextreme-calendar {
    min-width: 910px;
  }
}

@media (max-width: 767.98px) {
  .unified-calendar-shell {
    padding: 10px;
  }

  .calendar-toolbar {
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    min-height: 62px;
    padding: 10px;
  }

  .calendar-toolbar__title {
    align-items: flex-start;
  }

  .calendar-toolbar__title span {
    display: none;
  }

  .calendar-toolbar__title strong {
    font-size: 15px;
  }

  .calendar-today-button {
    min-height: 32px;
    padding-inline: 10px;
    font-size: 10px;
  }

  .calendar-icon-button {
    width: 32px;
    height: 32px;
  }

  .calendar-desktop {
    display: none;
  }

  .calendar-mobile {
    display: block;
  }

  .calendar-agenda {
    padding: 12px;
  }

  .calendar-agenda-day + .calendar-agenda-day {
    margin-top: 18px;
  }

  .calendar-agenda-day__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 7px;
    color: var(--text-primary, #1e293b);
    font-size: 11px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .calendar-agenda-day__header span {
    color: var(--text-disabled, #94a3b8);
    font-size: 9px;
  }

  .calendar-entry--agenda {
    min-height: 48px;
  }

  .calendar-entry--agenda + .calendar-entry--agenda {
    margin-top: 6px;
  }

  .calendar-entry--agenda .calendar-entry__content strong {
    font-size: 11px;
  }

  .calendar-entry--agenda .calendar-entry__content small {
    font-size: 9px;
  }

  .calendar-entry--agenda .calendar-entry__arrow {
    opacity: 1;
  }

  .calendar-month-empty {
    display: flex;
    min-height: 220px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: var(--text-muted, #64748b);
    font-size: 12px;
  }
}
</style>
