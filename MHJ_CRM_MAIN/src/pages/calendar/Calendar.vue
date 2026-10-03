<template>
  <div class="container-fluid calendar-basic">
    <div class="card calender-wrapper">
      <div class="card-body">
        <div class="row" id="wrap">
          <div class="col-xxl-3 box-col-12">
            <div class="md-sidebar mb-3">
              <a class="btn btn-primary md-sidebar-toggle" @click="filter()">calendar filter</a>
              <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="{ open: show }">
                <div id="external-events">
                  <h4>Draggable Events</h4>
                  <div ref="externalEventsList">
                    <template v-for="event in defaultEventList" :key="event.title">
                      <div
                        class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event"
                        :data-title="event.title"
                        draggable="true"
                      >
                        <div class="fc-event-main">
                          <i :class="`fa-solid ${event.icon} me-2`"></i>{{ event.title }}
                        </div>
                      </div>
                    </template>
                  </div>
                  <p>
                    <input
                      class="checkbox_animated"
                      id="drop-remove"
                      type="checkbox"
                      v-model="removeAfterDrop"
                    />
                    <label class="mb-0" for="drop-remove">Remove after drop</label>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-9 box-col-12">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>

        <br /><br />

        <h3 class="mb-sm-3 mb-2">
          Edit events
          <button class="btn btn-primary float-end" @click="addEvent">Add new</button>
          <div class="clearfix"></div>
        </h3>

        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Starts at</th>
                <th>Ends at</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, i) in events" :key="i">
                <td class="p-2 border">
                  <input v-model="event.title" class="form-control" />
                </td>
                <td class="p-2 border">
                  <input
                    type="datetime-local"
                    :value="formatDateInput(event.start)"
                    class="form-control w-full"
                  />
                </td>
                <td class="p-2 border">
                  <input
                    type="datetime-local"
                    :value="event.end ? formatDateInput(event.end) : ''"
                    class="form-control w-full"
                  />
                </td>
                <td class="p-2 border text-center">
                  <button @click="events.splice(i, 1)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { Draggable } from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/vue3'
import { startOfDay, addHours } from 'date-fns'

import { calendarOptions, defaultEvents, events, removeAfterDrop } from '@/core/data/calendar'

import type { DateInput } from '@fullcalendar/core'

const defaultEventList = ref(defaultEvents)
const eventList = ref(events)
const externalEventsList = ref<HTMLElement | null>(null)

onMounted(() => {
  if (externalEventsList.value) {
    new Draggable(externalEventsList.value, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.getAttribute('data-title') || '',
          backgroundColor: '#3a53a3',
          borderColor: '#3a53a3',
        }
      },
    })
  }
})

function addEvent() {
  const newEvent = {
    title: 'New Event',
    start: addHours(startOfDay(new Date()), 1),
    end: addHours(startOfDay(new Date()), 2),
    backgroundColor: '#ffb829',
    borderColor: '#ffb829',
  }
  eventList.value.push(newEvent)
}

function formatDateInput(date: DateInput | undefined | null): string {
  if (!date) return ''
  const parsed = new Date(date as string | number | Date)
  if (isNaN(parsed.getTime())) return ''

  const pad = (n: number) => String(n).padStart(2, '0')
  const y = parsed.getFullYear()
  const m = pad(parsed.getMonth() + 1)
  const d = pad(parsed.getDate())
  const h = pad(parsed.getHours())
  const min = pad(parsed.getMinutes())
  return `${y}-${m}-${d}T${h}:${min}`
}
const show = ref<boolean>(false)

function filter() {
  show.value = !show.value
}
</script>
