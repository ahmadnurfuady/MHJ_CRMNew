<template>
  <div class="error-wrapper">
    <div class="container">
      <img :src="getImages('other-images/sad.png')" alt="images" class="img-fluid" />
      <div class="error-heading">
        <h2 class="headline font-primary">500</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="sub-content">
          The server couldn't finish processing your request due to an error.
        </p>
      </div>
      <router-link class="btn btn-primary-gradien btn-lg" to="/">BACK TO HOME PAGE</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
</script>
