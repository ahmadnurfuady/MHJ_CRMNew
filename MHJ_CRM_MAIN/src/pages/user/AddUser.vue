<template>
  <div class="container-fluid user-form-wrapper">
    <div class="row">
      <div class="col-12">
        <UserForm />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const UserForm = defineAsyncComponent(() => import('@/module/user/UserForm.vue'))
</script>
