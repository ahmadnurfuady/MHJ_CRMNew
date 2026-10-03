<template>
  <Card :cardClass="'overflow-hidden'" :padding="false" :cardBodyClass="'project-ideas-card'">
    <div class="project-card">
      <div>
        <span class="f-22 f-w-500 text-center">Get more ideas for your important project</span>
        <div class="btn-showcase text-center">
          <router-link :to="routes.Pages.Pricing">
            <button class="btn btn-pill btn-outline-primary-2x b-r-8 active">
              Upgrade Now
            </button></router-link
          >
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
