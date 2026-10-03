<template>
  <form class="stepper-four row g-3 needs-validation">
    <div class="col-12 m-0">
      <div class="successful-form">
        <img
          class="img-fluid"
          :src="getImages('gif/dashboard-8/successful.gif')"
          alt="successful"
        />
        <h6>Congratulations</h6>
        <p>Well done! You have successfully completed.</p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
