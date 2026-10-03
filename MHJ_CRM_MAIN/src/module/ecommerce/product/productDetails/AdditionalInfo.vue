<template>
  <div class="info-part">
    <p class="c-o-light">
      The model is wearing a white blouse from our stylist's collection, see the image for a mock-up
      of what the actual blouse would look like.it has text written on it in a black cursive
      language which looks great on a white color.
    </p>
  </div>
  <div class="product-info-table table-responsive custom-scrollbar">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Material</th>
          <th scope="col">Colors</th>
          <th scope="col">Size Range</th>
          <th scope="col">Fit</th>
          <th scope="col">NeckLine</th>
          <th scope="col">Seam</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productTable" :key="item.id">
          <th scope="row">{{ item.material }}</th>
          <td>{{ item.material }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.fit }}</td>
          <td>{{ item.neckline }}</td>
          <td>{{ item.seam }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { productTable } from '@/core/data/ecommerce'
</script>
