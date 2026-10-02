<template>
  <div class="col-xxl-3 col-md-6 box-col-12">
    <div class="card">
      <div class="card-body">
        <div class="filter-block">
          <h6>Categories</h6>
          <ul>
            <router-link :to="routes.Ecommerce.Products.ProductGrid">
              <li v-for="(item, index) in categoriesItems" :key="index">
                {{ item.name }}
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="collection-filter-block">
          <ul class="pro-services">
            <li v-for="(item, index) in collection" :key="index">
              <div class="d-flex">
                <vue-feather :type="item.icon"></vue-feather>
                <div class="flex-grow-1">
                  <h6>{{ item.title }}</h6>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, categoriesItems } from '@/core/data/ecommerce'
import { routes } from '@/router/routes'
</script>
