<template>
  <Card
    :headerTitle="'Icons with Alerts'"
    :border="true"
    :padding="false"
    :cardBodyClass="'alerts-icon'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>alert alert-*</code> classes to add SVG icons to the alerts.
      </p>
    </template>
    <div class="row">
      <div class="col-xl-6" v-for="(group, groupIndex) in groupedAlerts" :key="groupIndex">
        <div
          v-for="alert in group"
          :key="alert.color"
          :class="['alert', `alert-${alert.color}`, 'd-flex', 'align-items-center']"
          role="alert"
        >
          <div>
            <vue-feather :type="alert.icon" :class="alert.iconClass" />
          </div>
          <span :class="alert.textClass">
            Use
            <a class="alert-link" :class="alert.linkClass" href="#">
              "alert-{{ alert.color }}"
            </a>
            and
            <a class="alert-link" :class="alert.linkClass" href="#">
              "stroke-{{ alert.color }}"
            </a>
            classes for alerts like this one.
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { iconsAlert } from '@/core/data/uiKits/alert'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const processedAlerts = iconsAlert.map((alert) => {
  const isLight = alert.color === 'light'
  return {
    ...alert,
    iconClass: isLight ? 'stroke-dark' : `stroke-${alert.color}`,
    textClass: isLight ? 'txt-dark' : 'txt-white',
    linkClass: isLight ? 'text-dark' : 'text-white',
  }
})

const groupedAlerts = computed(() => {
  const chunks = []
  for (let i = 0; i < processedAlerts.length; i += 4) {
    chunks.push(processedAlerts.slice(i, i + 4))
  }
  return chunks
})
</script>
