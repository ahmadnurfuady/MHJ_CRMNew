<template>
  <div class="col-xxl-3 col-xl-4 box-col-30">
    <div class="email-sidebar md-sidebar">
      <a class="btn btn-primary email-aside-toggle md-sidebar-toggle" @click="collapseFilter()"
        >To Do filter</a
      >
      <div class="email-left-aside md-sidebar-aside" :class="filtered ? 'open' : ''">
        <div class="card">
          <div class="card-body">
            <div class="email-app-sidebar left-bookmark custom-scrollbar">
              <div class="d-flex align-items-center">
                <div class="media-size-email">
                  <img class="me-3 rounded-circle" :src="getImages('user/user.png')" alt="images" />
                </div>
                <div class="flex-grow-1">
                  <h6 class="f-w-600">Mark Jecno</h6>
                  <p>Markjecno@gmail.com</p>
                </div>
              </div>
              <ul class="nav main-menu">
                <li class="nav-item">
                  <button class="btn-primary text-white badge-light d-block btn-mail w-100">
                    <vue-feather class="me-2" type="check-circle"></vue-feather>
                    To Do List
                  </button>
                </li>
                <li class="nav-item" v-for="(item, index) in todoSidebar" :key="index">
                  <a href="#">
                    <span class="iconbg" :class="item.badgeClass">
                      <vue-feather :type="item.icon"></vue-feather>
                    </span>
                    <span class="title ms-2">{{ item.title }}</span>
                    <span :class="item.pillClass" v-if="item.title == 'Completed'">{{
                      completedTasks
                    }}</span>
                    <span :class="item.pillClass" v-if="item.title == 'Pending'">
                      {{ pendingTasks }}</span
                    >
                    <span :class="item.pillClass" v-if="item.title == 'In Process'">{{
                      inProgressTasks.length
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { getImages } from '@/utils/index'
import { useTodo } from '@/store/todo'
import { todoSidebar } from '@/core/data/todo'
const store = useTodo()
const todoList = store.todo
const filtered = ref(false)
function collapseFilter() {
  filtered.value = !filtered.value
}
const todos = ref(todoList)

const inProgressTasks = computed(() =>
  todos.value.filter((todo) => todo.priority === 'In progress')
)
const completedTasks = computed(() => todos.value.filter((todo) => todo.priority === 'Done').length)
const pendingTasks = computed(
  () => todos.value.filter((todo) => todo.priority === 'Pending').length
)
</script>
