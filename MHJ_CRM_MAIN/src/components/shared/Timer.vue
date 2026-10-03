<template>
  <ul>
    <li>
      <span class="days time" id="day">{{ timerState.days }}</span
      ><span class="title">Days</span>
    </li>
    <li>
      <span class="hours time" id="hour">{{ timerState.hours }}</span
      ><span class="title">Hours</span>
    </li>
    <li>
      <span class="minutes time" id="minute">{{ timerState.minutes }}</span
      ><span class="title">Minutes</span>
    </li>
    <li>
      <span class="seconds time" id="second">{{ timerState.seconds }}</span
      ><span class="title">Seconds</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount } from 'vue'

const timerState = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  calculateCountdown()
  interval = setInterval(calculateCountdown, 1000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})

function calculateCountdown() {
  const targetDate = new Date()
  targetDate.setHours(0, 0, 0, 0)
  targetDate.setDate(targetDate.getDate() + 7)

  const now = new Date()
  const distance = targetDate.getTime() - now.getTime()

  if (distance > 0) {
    timerState.days = Math.floor(distance / (1000 * 60 * 60 * 24))
    timerState.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    timerState.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    timerState.seconds = Math.floor((distance % (1000 * 60)) / 1000)
  } else {
    timerState.days = timerState.hours = timerState.minutes = timerState.seconds = 0
  }
}
</script>
