<template>
  <div class="task-calendar-shell">
    <DxLoadPanel
      :visible="loading"
      :show-indicator="true"
      :show-pane="true"
      :shading="false"
    />

    <div v-if="!loading && loadError" class="task-calendar-state" role="alert">
      <span class="task-calendar-state__icon task-calendar-state__icon--error">
        <vue-feather type="alert-circle" size="22" />
      </span>
      <strong>Calendar tidak dapat dimuat</strong>
      <span>{{ loadError }}</span>
    </div>

    <div v-else-if="!loading && !tasks.length" class="task-calendar-state">
      <span class="task-calendar-state__icon">
        <vue-feather type="calendar" size="22" />
      </span>
      <strong>{{
            totalTaskCount ? "Tugas tidak ditemukan" : "Belum ada tugas"
      }}</strong>
      <span>
        {{
          totalTaskCount
              ? "Tidak ada tugas yang cocok dengan filter saat ini."
              : "Tugas yang memiliki tanggal akan tampil di Calendar."
        }}
      </span>
    </div>

    <div
      v-else-if="!loading && !calendarEntries.length"
      class="task-calendar-state"
    >
      <span class="task-calendar-state__icon">
        <vue-feather type="calendar" size="22" />
      </span>
        <strong>Belum ada tugas bertanggal</strong>
        <span>Semua tugas saat ini belum memiliki jadwal atau deadline.</span>
    </div>

    <template v-else>
      <div v-if="undatedTaskCount" class="task-calendar-notice" role="status">
        <vue-feather type="info" size="16" />
        <span
        >{{ undatedTaskCount }} tugas tidak ditampilkan karena belum memiliki
          tanggal.</span
        >
      </div>

      <section class="calendar-card" aria-label="Kalender tugas">
        <header class="calendar-toolbar">
          <div class="calendar-toolbar__navigation">
            <button
              type="button"
              class="calendar-icon-button"
              aria-label="Bulan sebelumnya"
              @click="changeMonth(-1)"
            >
              <vue-feather type="chevron-left" size="18" />
            </button>
            <button
              type="button"
              class="calendar-icon-button"
              aria-label="Bulan berikutnya"
              @click="changeMonth(1)"
            >
              <vue-feather type="chevron-right" size="18" />
            </button>
          </div>

          <div class="calendar-toolbar__title">
              <span>Kalender Tugas</span>
            <strong>{{ monthLabel }}</strong>
          </div>

          <button
            type="button"
            class="calendar-today-button"
            @click="goToToday"
          >
            Hari ini
          </button>
        </header>

        <div class="calendar-desktop">
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
                    v-if="calendarCell(data).tasks.length"
                    class="calendar-day__count"
                  >
                  {{ calendarCell(data).tasks.length }} tugas
                  </span>
                </header>

                <div
                  v-if="calendarCell(data).tasks.length"
                  class="calendar-day__tasks"
                  tabindex="0"
                  aria-label="Daftar tugas pada tanggal ini"
                  @wheel="handleTaskListWheel"
                >
                  <button
                    v-for="task in calendarCell(data).tasks"
                    :key="task.id"
                    type="button"
                    class="calendar-task"
                    :style="taskStyle(task)"
                    :title="task.title"
                    @click.stop="openTask(task)"
                  >
                    <span class="calendar-task__dot" aria-hidden="true"></span>
                    <span class="calendar-task__content">
                      <strong>{{ task.title }}</strong>
                      <small>{{ task.status }}</small>
                    </span>
                    <vue-feather
                      class="calendar-task__arrow"
                      type="chevron-right"
                      size="13"
                    />
                  </button>
                </div>
              </div>
            </template>
          </DxScheduler>
        </div>

        <div class="calendar-mobile">
          <div v-if="agendaDays.length" class="calendar-agenda">
            <section
              v-for="day in agendaDays"
              :key="day.key"
              class="calendar-agenda-day"
            >
              <header class="calendar-agenda-day__header">
                <time :datetime="day.key">{{
                  formatAgendaDate(day.date)
                }}</time>
                <span>{{ day.tasks.length }} tugas</span>
              </header>

              <button
                v-for="task in day.tasks"
                :key="task.id"
                type="button"
                class="calendar-task calendar-task--agenda"
                :style="taskStyle(task)"
                @click="openTask(task)"
              >
                <span class="calendar-task__dot" aria-hidden="true"></span>
                <span class="calendar-task__content">
                  <strong>{{ task.title }}</strong>
                  <small>{{ task.status }} · {{ task.hospitalName }}</small>
                </span>
                <vue-feather
                  class="calendar-task__arrow"
                  type="chevron-right"
                  size="15"
                />
              </button>
            </section>
          </div>

          <div v-else class="calendar-month-empty">
            <vue-feather type="calendar" size="20" />
              <span>Tidak ada tugas pada bulan ini.</span>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import DxLoadPanel from "devextreme-vue/load-panel";
import { DxScheduler, type DxSchedulerTypes } from "devextreme-vue/scheduler";
import type { TaskDetails } from "@/types/tasks";
import {
  normalizeCalendarTask,
  parseLocalDate,
} from "@/module/task/taskCalendar";

interface CalendarEntry {
  id: string;
  title: string;
  date: Date;
  dateKey: string;
  status: string;
  statusKey: string;
  hospitalName: string;
  rawData: TaskDetails;
}

interface CalendarDay {
  date: Date;
  key: string;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  tasks: CalendarEntry[];
}

const props = defineProps<{
  tasks: TaskDetails[];
  totalTaskCount: number;
  loading: boolean;
  loadError?: string | null;
}>();

const emit = defineEmits<{
  openTask: [task: TaskDetails];
}>();

const schedulerViews: DxSchedulerTypes.ViewType[] = ["month"];
const schedulerDataSource: never[] = [];
const displayedMonth = ref(startOfMonth(new Date()));

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthKey(date: Date) {
  return dateKey(date).slice(0, 7);
}

function isSameDay(first: Date, second: Date) {
  return dateKey(first) === dateKey(second);
}

const calendarEntries = computed<CalendarEntry[]>(() =>
  props.tasks
    .map((task) => {
      const normalized = normalizeCalendarTask(task);
      const date =
        parseLocalDate(normalized.scheduledAt) ||
        parseLocalDate(normalized.dueDate);
      if (!date) return null;

      return {
        id: normalized.id,
        title: normalized.title,
        date,
        dateKey: dateKey(date),
        status: normalized.status,
        statusKey: normalized.statusKey,
        hospitalName: normalized.hospitalName,
        rawData: task,
      };
    })
    .filter((task): task is CalendarEntry => Boolean(task))
    .sort((first, second) => first.date.getTime() - second.date.getTime()),
);

const tasksByDate = computed(() => {
  const grouped = new Map<string, CalendarEntry[]>();
  calendarEntries.value.forEach((task) => {
    const tasks = grouped.get(task.dateKey) || [];
    tasks.push(task);
    grouped.set(task.dateKey, tasks);
  });
  return grouped;
});

const availableMonthKeys = computed(() => [
  ...new Set(calendarEntries.value.map((task) => monthKey(task.date))),
]);

watch(
  availableMonthKeys,
  (months) => {
    if (!months.length || months.includes(monthKey(displayedMonth.value)))
      return;
    const [year, month] = months[0].split("-").map(Number);
    displayedMonth.value = new Date(year, month - 1, 1);
  },
  { immediate: true },
);

const monthDays = computed<CalendarDay[]>(() => {
  const firstDay = startOfMonth(displayedMonth.value);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(firstDay);
  gridStart.setDate(gridStart.getDate() - mondayOffset);
  const today = new Date();

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const key = dateKey(date);

    return {
      date,
      key,
      dayNumber: date.getDate(),
      isCurrentMonth: date.getMonth() === displayedMonth.value.getMonth(),
      isToday: isSameDay(date, today),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      tasks: tasksByDate.value.get(key) || [],
    };
  });
});

function calendarCell(data: unknown): CalendarDay {
  const rawStartDate = (data as { startDate?: Date | string } | undefined)
    ?.startDate;
  const date = rawStartDate ? new Date(rawStartDate) : new Date();
  const key = dateKey(date);
  const today = new Date();

  return {
    date,
    key,
    dayNumber: date.getDate(),
    isCurrentMonth:
      date.getMonth() === displayedMonth.value.getMonth() &&
      date.getFullYear() === displayedMonth.value.getFullYear(),
    isToday: isSameDay(date, today),
    isWeekend: date.getDay() === 0 || date.getDay() === 6,
    tasks: tasksByDate.value.get(key) || [],
  };
}

function schedulerWeekdayLabel(data: unknown) {
  const cellData = data as {
    date?: Date | string;
    startDate?: Date | string;
    text?: string;
  };
  const rawDate = cellData?.date || cellData?.startDate;
  if (!rawDate) return cellData?.text || "";

  return new Intl.DateTimeFormat("id-ID", { weekday: "short" }).format(
    new Date(rawDate),
  );
}

const agendaDays = computed(() =>
  monthDays.value.filter((day) => day.isCurrentMonth && day.tasks.length),
);

const undatedTaskCount = computed(
  () => props.tasks.length - calendarEntries.value.length,
);
const monthLabel = computed(() =>
  new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(
    displayedMonth.value,
  ),
);

function changeMonth(amount: number) {
  displayedMonth.value = new Date(
    displayedMonth.value.getFullYear(),
    displayedMonth.value.getMonth() + amount,
    1,
  );
}

function goToToday() {
  displayedMonth.value = startOfMonth(new Date());
}

function formatAgendaDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

function taskAccent(statusKey: string) {
  if (statusKey.includes("cancel") || statusKey.includes("batal"))
    return "var(--danger, #ef4444)";
  if (statusKey.includes("progress") || statusKey.includes("proses"))
    return "var(--app-primary-dark, #116e96)";
  if (statusKey.includes("complete") || statusKey.includes("selesai"))
    return "var(--app-primary-strong, #1488bb)";
  if (statusKey.includes("pending") || statusKey.includes("menunggu"))
    return "var(--app-primary, #18a6e4)";
  return "var(--text-muted, #64748b)";
}

function taskStyle(task: CalendarEntry) {
  return { "--task-accent": taskAccent(task.statusKey) };
}

function openTask(task: CalendarEntry) {
  emit("openTask", task.rawData);
}

function handleTaskListWheel(event: WheelEvent) {
  const taskList = event.currentTarget as HTMLElement | null;
  if (!taskList) return;

  const maxScrollTop = taskList.scrollHeight - taskList.clientHeight;
  if (maxScrollTop <= 0) return;

  const scrollingUp = event.deltaY < 0;
  const scrollingDown = event.deltaY > 0;
  const canScrollUp = taskList.scrollTop > 0;
  const canScrollDown = taskList.scrollTop < maxScrollTop - 1;

  if ((scrollingUp && !canScrollUp) || (scrollingDown && !canScrollDown)) return;

  event.preventDefault();
  event.stopPropagation();
  taskList.scrollTop += event.deltaY;
}
</script>

<style scoped>
.task-calendar-shell {
  position: relative;
  min-height: 320px;
  padding: 18px;
  background: #fff;
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
  font-family: var(--font-family, "Montserrat", sans-serif);
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
.calendar-data-cell--outside .calendar-day__tasks {
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

.calendar-day__tasks {
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

.calendar-day__tasks:focus-visible {
  border-radius: 8px;
  outline: 2px solid var(--color-primary-border, #9edcf4);
  outline-offset: 1px;
}

.calendar-day__tasks::-webkit-scrollbar {
  width: 4px;
}

.calendar-day__tasks::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--color-primary-border, #9edcf4);
}

.calendar-task {
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
  border: 1px solid color-mix(in srgb, var(--task-accent) 22%, white);
  border-left: 3px solid var(--task-accent);
  border-radius: 7px;
  background: #f8fafc;
  background: color-mix(in srgb, var(--task-accent) 8%, white);
  color: var(--text-primary, #1e293b);
  cursor: pointer;
  pointer-events: auto;
  text-align: left;
  transition: 0.16s ease;
}

.calendar-task:hover {
  border-color: color-mix(in srgb, var(--task-accent) 42%, white);
  background: color-mix(in srgb, var(--task-accent) 14%, white);
  box-shadow: 0 2px 7px rgba(var(--app-primary-rgb, 24, 166, 228), 0.13);
}

.calendar-task:focus-visible {
  outline: 2px solid var(--app-primary, #18a6e4);
  outline-offset: 1px;
}

.calendar-task__dot {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--task-accent);
}

.calendar-task__content {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
}

.calendar-task__content strong,
.calendar-task__content small {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calendar-task__content strong {
  font-size: 10px;
  font-weight: 700;
}

.calendar-task__content small {
  margin-top: 1px;
  color: var(--text-muted, #64748b);
  font-size: 8px;
  font-weight: 600;
}

.calendar-task__arrow {
  flex: 0 0 auto;
  color: var(--task-accent);
  opacity: 0;
  transition: opacity 0.16s ease;
}

.calendar-task:hover .calendar-task__arrow,
.calendar-task:focus-visible .calendar-task__arrow {
  opacity: 1;
}

.calendar-mobile {
  display: none;
}

.task-calendar-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding: 9px 12px;
  border: 1px solid var(--color-primary-border, #9edcf4);
  border-radius: 10px;
  background: var(--color-primary-wash, #f5fbfe);
  color: var(--app-primary-dark, #116e96);
  font-size: 12px;
}

.task-calendar-state {
  display: flex;
  min-height: 360px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  color: var(--text-muted, #64748b);
  text-align: center;
}

.task-calendar-state__icon {
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

.task-calendar-state__icon--error {
  background: var(--danger-soft-bg, #fee2e2);
  color: var(--danger, #ef4444);
}

.task-calendar-state strong {
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
  .task-calendar-shell {
    padding: 10px;
  }

  .calendar-toolbar {
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    min-height: 62px;
    padding: 10px;
  }

  .calendar-toolbar__navigation {
    gap: 3px;
  }

  .calendar-icon-button {
    width: 32px;
    height: 32px;
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

  .calendar-task--agenda {
    min-height: 48px;
  }

  .calendar-task--agenda + .calendar-task--agenda {
    margin-top: 6px;
  }

  .calendar-task--agenda .calendar-task__content strong {
    font-size: 11px;
  }

  .calendar-task--agenda .calendar-task__content small {
    font-size: 9px;
  }

  .calendar-task--agenda .calendar-task__arrow {
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
