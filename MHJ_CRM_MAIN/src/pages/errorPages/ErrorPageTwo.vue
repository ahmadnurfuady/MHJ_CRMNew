<template>
  <div class="error-wrapper">
    <div class="container">
      <img class="img-100" :src="getImages('other-images/sad.png')" alt="other" />
      <div class="error-heading">
        <h2 class="headline font-warning">401</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="sub-content">
          We were unable to authorize you.Kindly attempt to reload the page and enter the correct
          login information.
        </p>
      </div>
      <router-link class="btn btn-warning-gradien btn-lg" to="/">BACK TO HOME PAGE</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
</script>
