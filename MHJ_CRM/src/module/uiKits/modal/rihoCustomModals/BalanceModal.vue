<template>
  <Modal :modalOpen="props.modalOpen" :modalCentered="true" @closeModal="close()">
    <div class="modal-content">
      <div class="col-xl-12">
        <div class="card balance-box mb-0">
          <div class="card-body">
            <div class="balance-profile">
              <div class="balance-img">
                <img :src="getImages('dashboard-3/profile.png')" alt="user vector" />
                <router-link class="edit-icon" :to="routes.User.UserProfile">
                  <SvgIcon :icon="'pencil'" type="default"></SvgIcon>
                </router-link>
              </div>
              <span class="f-light d-block">Your Balance </span>
              <h5 class="mt-1">$768,987.90</h5>
              <ul>
                <li>
                  <div class="balance-item danger">
                    <div class="balance-icon-wrap">
                      <div class="balance-icon">
                        <vue-feather :type="'arrow-down-right'"></vue-feather>
                      </div>
                    </div>
                    <div>
                      <span class="f-12 f-light">Investment </span>
                      <h5>78.8K</h5>
                      <span class="badge badge-light-danger rounded-pill">-11.67%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="balance-item success">
                    <div class="balance-icon-wrap">
                      <div class="balance-icon">
                        <vue-feather :type="'arrow-up-right'"></vue-feather>
                      </div>
                    </div>
                    <div>
                      <span class="f-12 f-light">Cash Back</span>
                      <h5>19.7K</h5>
                      <span class="badge badge-light-success rounded-pill">+10.67%</span>
                    </div>
                  </div>
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
import { routes } from '@/router/routes'

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
