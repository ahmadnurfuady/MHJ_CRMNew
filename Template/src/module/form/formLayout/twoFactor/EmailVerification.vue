<template>
  <div class="card-wrapper border rounded-3 h-100">
    <div class="row g-xxl-1 g-3">
      <div class="col-xxl-4 box-col-5">
        <div class="authenticate">
          <img class="img-fluid" :src="getImages('forms/email.png')" alt="email" />
        </div>
      </div>
      <div class="col-xxl-8 box-col-7 text-center text-xxl-start">
        <h5>Email Verification</h5>
        <p>
          A verification code has been sent to your email. This code will be valid for 15 minutes.
        </p>
        <div class="input-group mb-3">
          <input class="form-control" type="text" placeholder="Please enter the code here" />
          <span class="input-group-text bg-primary" id="basic-addon2">Verify</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
