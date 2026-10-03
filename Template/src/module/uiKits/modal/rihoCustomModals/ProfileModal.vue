<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-content">
      <div class="col-xl-12">
        <div class="card social-profile mb-0">
          <div class="card-body">
            <div class="social-img-wrap">
              <div class="social-img">
                <img :src="getImages('dashboard-3/profile.png')" alt="profile" />
              </div>
              <div class="edit-icon">
                <SvgIcon :icon="'profile-check'" type="default" />
              </div>
            </div>
            <div class="social-details">
              <h5 class="mb-1"><a href="#">Brooklyn Simmons</a></h5>
              <span class="f-light">@brookly.simmons</span>
              <ul class="social-follow">
                <li>
                  <h5 class="mb-0">1,908</h5>
                  <span class="f-light">Posts</span>
                </li>
                <li>
                  <h5 class="mb-0">34.0k</h5>
                  <span class="f-light">Followers</span>
                </li>
                <li>
                  <h5 class="mb-0">897</h5>
                  <span class="f-light">Following</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
