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
          <table class="table align-middle task-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Konteks</th>
                <th>Jadwal</th>
                <th>Pipeline</th>
                <th>Catatan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in currentTask?.data" :key="index">
                <td>
                  <h6 class="task_title_0 f-w-600">{{ item.title }}</h6>
                  <div class="d-flex flex-wrap gap-1 mt-2">
                    <span v-if="item.category" class="badge badge-light-primary">{{ item.category }}</span>
                    <span v-if="item.owner" class="badge badge-light-secondary">{{ item.owner }}</span>
                  </div>
                </td>
                <td>
                  <strong>{{ item.projectName || item.subtitle }}</strong>
                  <span v-if="item.hospital" class="d-block c-o-light">{{ item.hospital }}</span>
                  <span v-if="item.contact" class="d-block c-o-light">{{ item.contact }}</span>
                </td>
                <td>
                  <span v-if="item.scheduledAt">{{ formatDate(item.scheduledAt) }}</span>
                  <span v-else class="c-o-light">Belum dijadwalkan</span>
                </td>
                <td>
                  <template v-if="item.stageTo">
                    <span class="badge badge-light-success">{{ stageLabel(item.stageTo) }}</span>
                    <small v-if="item.stageFrom && item.stageFrom !== item.stageTo" class="d-block c-o-light mt-1">
                      dari {{ stageLabel(item.stageFrom) }}
                    </small>
                  </template>
                  <span v-else class="c-o-light">-</span>
                </td>
                <td>
                  <p class="task_desc_0 mb-1">{{ item.description }}</p>
                  <small v-if="item.products?.length" class="c-o-light">
                    {{ item.products.join(', ') }}
                  </small>
                  <small v-else-if="item.unrelatedProduct" class="c-o-light">Tidak terkait produk</small>
                </td>
                <td>
                  <button
                    class="btn btn-link text-danger p-1"
                    type="button"
                    title="Hapus task"
                    @click="store.warningAlert(index)"
                  >
                    <vue-feather type="trash-2"></vue-feather>
                  </button>
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
import { projectTab } from '@/core/data/project'

const store = useTask()
const { currentTask } = storeToRefs(useTask())

function printWindow() {
  window.print()
}

function stageLabel(value: string) {
  return projectTab.find((stage) => stage.value === value)?.title || value
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}
</script>

<style scoped>
.task-table th {
  white-space: nowrap;
  color: #6f7680;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.task-table td {
  min-width: 150px;
}

.task-table td:first-child {
  min-width: 230px;
}

.task_desc_0 {
  max-width: 280px;
  white-space: normal;
}
</style>
