<template>
  <h6 class="mb-2">Search result for "Pixelstrap"</h6>
  <div class="row">
    <div class="col-xxl-8 col-xl-6 box-col-7">
      <div class="info-block" v-for="(item, index) in allItem.slice(0, 4)" :key="index">
        <a>{{ item.link }}</a>
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
        <div class="star-ratings">
          <ul class="search-info">
            <li class="rating" v-if="item.rating">
              <RatingStars :rating="item.rating" />
            </li>
            <li>3 stars</li>
            <li>590 votes</li>
            <li>Theme</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6 box-col-5 mt-4">
      <div class="card o-hidden">
        <div class="blog-box blog-shadow">
          <img class="img-fluid" :src="getImages('blog/blog.jpg')" alt="IMAGES" />
          <div class="blog-details">
            <p>25 July 2024</p>
            <h4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h4>
            <ul class="blog-social">
              <li><i class="icofont icofont-user"></i>Mark Jecno</li>
              <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="info-block" v-for="(item, index) in allItem.slice(4, 6)" :key="index">
        <a>{{ item.link }}</a>
        <h6>{{ item.title }}</h6>
        <p>{{ item.description }}</p>
        <div class="star-ratings">
          <ul class="search-info">
            <li class="rating" v-if="item.rating">
              <RatingStars :rating="item.rating" />
            </li>
            <li>3 stars</li>
            <li>590 votes</li>
            <li>Theme</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 m-t-30">
      <nav aria-label="...">
        <ul class="pagination pagination-primary justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <a class="page-link" href="#"
              >2<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { allItem } from '@/core/data/searchResult'
import { getImages } from '@/utils/index'
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))
</script>
