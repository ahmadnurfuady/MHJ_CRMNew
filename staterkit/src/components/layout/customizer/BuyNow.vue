<template>
  <a
    class="nav-link"
    target="_blank"
    href="https://themeforest.net/user/pixelstrap/portfolio?srsltid=AfmBOoqyRchVJFtWVX9kQJo6dTE-XJH8g3X_kdIZCX_Z4hM6x-nbIvIv"
  >
    <div>
      <img class="img-fluid" :src="getImages('customizer/5.png')" alt="nft" />
    </div>
    <span>Buy now</span>
  </a>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
</script>
