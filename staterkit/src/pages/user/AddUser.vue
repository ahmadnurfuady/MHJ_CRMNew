<template>
  <div class="container-fluid">
    <div class="edit-profile">
      <div class="row">
        <div class="col-xl-4">
          <Card :headerTitle="'My Profile'" :border="true" :padding="false">
            <form class="custom-input">
              <div class="row mb-2">
                <div class="profile-title">
                  <div class="d-flex">
                    <img
                      class="img-70 rounded-circle"
                      alt="user"
                      :src="`${getImages('user/7.jpg')}`"
                    />
                    <div class="flex-grow-1">
                      <h5 class="mb-1">WILLIAM C. JENNINGS</h5>
                      <p>DESIGNER</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Bio'">
                  <InputField
                    :inputId="'bio'"
                    :placeholder="'On the other hand, we denounce with righteous indignation'"
                    :inputType="'textarea'"
                    :rows="5"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Email Address'">
                  <InputField
                    :inputId="'email'"
                    :placeholder="'your-email@domain.com'"
                    :inputType="'email'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Password'">
                  <InputField
                    :inputId="'password'"
                    :placeholder="'password'"
                    :inputType="'password'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Website'">
                  <InputField
                    :inputId="'password'"
                    :placeholder="'https://themeforest.net/user/pixelstrap/portfolio'"
                    :inputType="'url'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="form-footer">
                <button class="btn btn-primary btn-block">Save</button>
              </div>
            </form>
          </Card>
        </div>
        <div class="col-xl-8">
          <EditProfile />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const EditProfile = defineAsyncComponent(() => import('@/module/user/EditProfile.vue'))
</script>
