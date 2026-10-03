<template>
  <Card :headerTitle="'Basic Card'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">This is a simple basic card using anywhere.</p>
    </template>
    <p class="mb-0">
      Tabs have long been used to show alternative views of the same group of information tabs in
      software. Known as<b>“module tabs”</b> , these are still used today in web sites. For
      instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable
      the user to switch between bookings for flights, hotels and car hire.
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
