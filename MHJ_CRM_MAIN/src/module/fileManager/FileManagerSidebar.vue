<template>
  <div class="md-sidebar">
    <a class="btn btn-primary md-sidebar-toggle" href="#" @click.prevent="toggleSidebar()"
      >file filter</a
    >
    <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="{ open: sidebarOpen }">
      <div class="file-sidebar">
        <Card :cardBodyClass="'custom-scrollbar'">
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const sidebarOpen = ref<boolean>(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
