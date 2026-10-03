<template>
  <Card :headerTitle="'Live Alert'" :border="true" :padding="false" :cardBodyClass="'live-dark'">
    <template #header5>
      <p class="f-m-light mt-1">
        Click the button below to show an alert, then dismiss (and destroy) it with the built-in
        close button.
      </p>
    </template>

    <template v-for="(item, index) in alerts" :key="index">
      <div class="alert alert-light-dark txt-dark mb-3 alert-dismissible" role="alert">
        <div>Nice, you triggered this alert message!</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </template>
    <button class="btn btn-dark" id="liveAlertBtn" type="button" @click="addAlert()">
      Show Live Alert
    </button>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const alerts = ref(Array.from({ length: 0 }, (_, index) => index))

function addAlert() {
  alerts.value.push(alerts.value.length + 1)
}
</script>
