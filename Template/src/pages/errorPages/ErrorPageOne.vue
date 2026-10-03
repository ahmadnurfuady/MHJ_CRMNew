<template>
  <div class="error-wrapper">
    <div class="container">
      <img class="img-100" :src="getImages('other-images/sad.png')" alt="other" />
      <div class="error-heading">
        <h2 class="headline font-info">400</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="sub-content">
          Invalid request headers, damaged cookies, or malformed URLs are common causes of a 400 bad
          request error.
        </p>
      </div>
      <router-link class="btn btn-info-gradien btn-lg" to="/">BACK TO HOME PAGE</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
</script>
