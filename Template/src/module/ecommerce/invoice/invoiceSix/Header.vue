<template>
  <div class="col-sm-6">
    <div class="d-flex">
      <div class="media-left">
        <img
          class="media-object img-60 for-light"
          :src="getImages('other-images/logo-login.png')"
          alt="logo"
        /><img
          class="media-object img-60 for-dark"
          :src="getImages('other-images/logo-light.png')"
          alt="logo"
        />
      </div>
      <div class="flex-grow-1 m-l-20 text-right">
        <h4 class="media-heading">Hanoi</h4>
        <p>hello&#64;Hanoi.in<br /><span>289-335-6503</span></p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="text-md-end text-xs-center">
      <h3>Invoice #<span class="counter">1,069</span></h3>
      <p>
        Issued: May<span> 12, 2024</span><br />
        Payment Due: June <span>12, 2024</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
