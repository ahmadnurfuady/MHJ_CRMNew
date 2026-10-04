<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 footer-copyright text-center">
          <p class="mb-0">
            Copyright <span class="year-update"> {{ year }}</span> © MHJ CRM By Siapsoft
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const year = ref(new Date().getFullYear())
</script>
