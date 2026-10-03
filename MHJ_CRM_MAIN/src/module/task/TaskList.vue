<template>
  <div class="card mb-0">
    <div class="card-header d-flex">
      <h4 class="mb-0">{{ currentTask?.title }}</h4>
      <a @click="printWindow()" class="txt-primary f-w-600">
        <vue-feather type="printer" class="me-2"></vue-feather>Print
      </a>
    </div>
    <div class="card-body p-0">
      <div class="taskadd">
        <div class="table-responsive custom-scrollbar theme-scrollbar">
          <table class="table">
            <tbody>
              <tr v-for="(item, index) in currentTask?.data" :key="index">
                <td>
                  <h6 class="task_title_0 f-w-600">{{ item.title }}</h6>
                  <p class="project_name_0">{{ item.subtitle }}</p>
                </td>
                <td>
                  <p class="task_desc_0">{{ item.description }}</p>
                </td>
                <td>
                  <a class="me-2" href="#"
                    ><vue-feather type="link"></vue-feather
                  ></a>
                  <a href="#"
                    ><vue-feather type="more-horizontal"></vue-feather
                  ></a>
                </td>
                <td>
                  <a @click="store.warningAlert(index)"
                    ><vue-feather type="trash-2"></vue-feather
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card-body" v-if="!currentTask?.data?.length">
      <div class="details-bookmark text-center">
        <div class="row" id="favouriteData"></div>
        <div class="no-favourite" v-if="currentTask?.value == 'todayTask'">
          <span>
            <h3>
              <img
                class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
                :src="getImages('/mood-sad.png')"
                alt="sad"
              />
            </h3>
            No task due today..
          </span>
        </div>
        <div class="no-favourite" v-else>
          <span>
            <h3>
              <img
                class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
                :src="getImages('/mood-sad.png')"
                alt="sad"
              />
            </h3>
            No task found.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { storeToRefs } from 'pinia'
import { useTask } from '@/store/task'

const store = useTask()
const { currentTask } = storeToRefs(useTask())

function printWindow() {
  window.print()
}
</script>
