<template>
  <div class="error-wrapper">
    <div class="container">
      <img :src="getImages('other-images/sad.png')" alt="images" class="img-fluid" />
      <div class="error-heading">
        <h2 class="headline font-secondary">503</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="sub-content">
          A maintenance outage or capacity issue has rendered the server temporarily unavailable to
          fulfil your request.Would you please try again later?
        </p>
      </div>
      <router-link class="btn btn-secondary-gradien btn-lg" to="/">BACK TO HOME PAGE</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
</script>
