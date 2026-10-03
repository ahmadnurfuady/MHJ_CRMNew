import { ref } from 'vue'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { type DropArg } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { startOfDay, endOfMonth, subDays, addDays, addHours } from 'date-fns'

import type { EventInput } from '@fullcalendar/core'

export const removeAfterDrop = ref(false)

export const defaultEvents = [
  {
    id: 1,
    title: 'Birthday Party',
    icon: 'fa-cake-candles',
  },
  {
    id: 2,
    title: 'Tour & Picnic',
    icon: 'fa-plane',
  },
  {
    id: 3,
    title: 'Reporting Schedule',
    icon: 'fa-file',
  },
  {
    id: 4,
    title: 'Lunch & Break',
    icon: 'fa-utensils',
  },
  {
    id: 5,
    title: 'Innovation Hackathon',
    icon: 'fa-flag-checkered',
  },
  {
    id: 6,
    title: 'Fitness Bootcamp',
    icon: 'fa-dumbbell',
  },
  {
    id: 7,
    title: 'Company Anniversary Celebration',
    icon: 'fa-ribbon',
  },
  {
    id: 8,
    title: 'Client Presentation',
    icon: 'fa-person-chalkboard',
  },
  {
    id: 9,
    title: 'Group Projects',
    icon: 'fa-users',
  },
]

export const events = ref<EventInput[]>([
  {
    title: 'A 3 day event',
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    all_day: true,
    background_color: '#3a53a3',
    border_color: '#3a53a3',
  },
  {
    title: 'An event with no end date',
    start: startOfDay(new Date()),
    all_day: true,
    background_color: '#3a53a3',
    border_color: '#FFAE1A',
  },
  {
    title: 'A long event that spans 2 months',
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    all_day: true,
    background_color: '#d86f13',
    border_color: '#d86f13',
  },
  {
    title: 'A draggable and resizable event',
    start: addHours(startOfDay(new Date()), 2),
    end: addHours(new Date(), 2),
    background_color: '#FFAE1A',
    border_color: '#FFAE1A',
  },
])

export const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev today next',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  },
  editable: true,
  selectable: true,
  droppable: true,

  drop(info: DropArg) {
    const title = info.draggedEl.getAttribute('data-title') ?? '' // 👈 fix for null
    const newEvent: EventInput = {
      title,
      start: info.date,
      allDay: info.allDay,
      backgroundColor: '#3a53a3',
      borderColor: '#3a53a3',
    }
    events.value.push(newEvent)

    if (removeAfterDrop.value) {
      info.draggedEl.remove()
    }
  },

  eventColor: '#378006',

  // Bind dynamic events
  events: events.value,
})
