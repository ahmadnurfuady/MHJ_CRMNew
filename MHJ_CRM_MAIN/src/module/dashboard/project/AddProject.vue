<template>
  <div class="card add-project-link">
    <div class="categories"></div>
    <div class="categories-content">
      <span class="text-truncate col-8 f-12 d-block mb-2">Let’s add work to your space</span
      ><router-link :to="routes.Project.ProjectCreate">+Add Proyek </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
</script>
