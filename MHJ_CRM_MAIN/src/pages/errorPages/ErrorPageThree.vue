<template>
  <div class="error-wrapper">
    <div class="container">
      <img class="img-100" :src="getImages('other-images/sad.png')" alt="other" />
      <div class="error-heading">
        <h2 class="headline font-success">403</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <p class="sub-content">
          If you receive a 403 Forbidden error, either verify your access privileges or
          get in touch with the server administrator to obtain the necessary
          authorization.
        </p>
      </div>
      <router-link class="btn btn-success-gradien btn-lg" to="/"
        >BACK TO HOME PAGE</router-link
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from "@/utils/index";
</script>
