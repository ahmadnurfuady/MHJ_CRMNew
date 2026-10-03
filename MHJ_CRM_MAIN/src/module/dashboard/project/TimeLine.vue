<template>
  <Card
    :headerTitle="'Time Line'"
    :header="'total-revenue'"
    :padding="false"
    :cardBodyClass="'pt-0'"
  >
    <div class="overflow-auto theme-scrollbar custom-scrollbar">
      <div class="timeline-calendar custom-scrollbar">
        <div class="custom-calendar" id="calendar-container">
          <div class="time-line" id="calendar">
            <DayPilotCalendar :config="calendarConfig" ref="calendarRef" />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, computed } from 'vue'
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const calendarRef = ref<InstanceType<typeof DayPilotCalendar> | null>(null)

const events = ref<DayPilot.EventData[]>([
  {
    id: '1',
    start: '2026-02-23T11:00:00',
    end: '2026-02-23T12:00:00',
    text: '11:00 - 12:00 | HTML Basics',
    backColor: '#6aa84faa',
    borderColor: '#38761d',
  },
  {
    id: '2',
    start: '2026-02-24T10:00:00',
    end: '2026-02-24T11:30:00',
    text: '13:00 - 14:30 | CSS Flexbox',
    backColor: '#f1c232aa',
    borderColor: '#bf9000',
  },
])

const calendarConfig = ref({
  viewType: 'Week',
  startDate: '2026-02-28',
  durationBarVisible: false,
  eventBorderRadius: 5,
  headerDateFormat: 'MM/dd',
  events: events.value,

  onTimeRangeSelected: async (args: DayPilot.CalendarTimeRangeSelectedArgs) => {
    const modal = await DayPilot.Modal.prompt('Create a new event:', 'New Lesson')
    const calendar = args.control
    calendar.clearSelection()
    if (modal.canceled) return
    const newEvent = {
      id: DayPilot.guid(),
      start: args.start,
      end: args.end,
      text: `${args.start.toString('HH:mm')} | ${modal.result}`,
      backColor: '#6fa8dcaa',
      borderColor: '#3d85c6',
    }

    events.value.push(newEvent)
    calendar.update({ events: events.value })
  },
})

onMounted(() => {
  events.value.push({
    id: DayPilot.guid(),
    start: '2026-02-25T13:00:00',
    end: '2026-02-25T14:00:00',
    text: '15:00 - 16:00 | JavaScript Intro',
    backColor: '#a4c2f4aa',
    borderColor: '#6d9eeb',
  })
  if (calendarRef.value) {
    calendarRef.value.control.update({
      events: events.value,
      startDate: '2026-02-28',
    })
  }
})
</script>
