<template>
  <div class="col-xxl-3 col-xl-4 box-col-6">
    <div class="md-sidebar">
      <a
        class="btn btn-primary md-sidebar-toggle"
        href="#"
        @click.prevent="collapseFilter()"
        >task filter</a
      >
      <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
        <div class="email-left-aside">
          <div class="card">
            <div class="card-body">
              <div class="email-app-sidebar left-bookmark task-sidebar custom-scrollbar">
                <div class="d-flex">
                  <div class="media-size-email">
                    <img class="me-3 rounded-circle" :src="getImages('user/user.png')" alt="user" />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="f-w-600">{{ currentUser.name }}</h6>
                    <p>{{ currentUser.email }}</p>
                  </div>
                </div>
                <ul class="nav main-menu" role="tablist">
                  <li class="nav-item">
                    <button
                      class="badge-primary btn-block btn-mail w-100"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#taskmodel"
                    >
                      <vue-feather type="check-circle" class="stroke-primary"></vue-feather>Buat Task
                    </button>
                  </li>
                  <li class="nav-item">
                    <span class="main-title"> Views</span>
                  </li>
                  <li v-for="(item, index) in task" :key="index">
                    <a
                      @click="setActiveTask(item)"
                      class="active"
                      id="pills-created-tab"
                      data-bs-toggle="pill"
                      href="#pills-created"
                      role="tab"
                      aria-controls="pills-created"
                      aria-selected="true"
                    >
                      <span class="title"> {{ item.title }}</span>
                    </a>
                    <hr v-if="item.tag" />
                    <span class="main-title" v-if="item.tag">
                      Tags
                      <span class="pull-right">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#createtag"
                        >
                          <vue-feather type="plus-circle" class="stroke-primary"></vue-feather>
                        </a>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-9 col-xl-8 col-md-12 box-col-12">
    <div class="email-right-aside bookmark-tabcontent">
      <div class="card email-body radius-left">
        <div class="ps-0">
          <div class="tab-content">
            <TaskList />
            <NewTask />
            <CreateTaskTag />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useTask } from '@/store/task'
import { getImages } from '@/utils/index'
import type { Task } from '@/types/tasks'

const filtered = ref(false)
const store = useTask()
const { taskData } = storeToRefs(store)
const task = computed(() => taskData.value.task)
const { setActive } = store
const currentUser = (() => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null') as
      | { name?: string; email?: string }
      | null
    return {
      name: user?.name || 'Mark Jenco',
      email: user?.email || 'mark.jenco@mhj.co.id',
    }
  } catch {
    return { name: 'Mark Jenco', email: 'mark.jenco@mhj.co.id' }
  }
})()

const TaskList = defineAsyncComponent(() => import('@/module/task/TaskList.vue'))
const NewTask = defineAsyncComponent(() => import('@/module/task/NewTask.vue'))
const CreateTaskTag = defineAsyncComponent(() => import('@/module/task/CreateTaskTag.vue'))

function setActiveTask(task: Task) {
  setActive(task)
}
function collapseFilter() {
  filtered.value = !filtered.value
}
</script>
