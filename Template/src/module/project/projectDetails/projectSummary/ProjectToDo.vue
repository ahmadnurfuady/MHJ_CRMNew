<template>
  <Card
    :cardClass="'main-summary'"
    :cardType="'classic'"
    :headerTitle="'To Do List'"
    :cardBodyClass="'pt-0 project-todo'"
    :buttonText="'View All'"
    :path="routes.App.Todo"
  >
    <ul class="crm-todo-list">
      <li class="d-flex align-items-center" v-for="(todo, index) in projectTodo" :key="index">
        <span :class="`l-line-${getColor(index)}`"></span>
        <div class="flex-shrink-0">
          <div class="form-check">
            <input
              :class="`form-check-input checkbox-${getColor(index)}`"
              type="checkbox"
              value=""
            />
          </div>
        </div>
        <div class="flex-grow-1">
          <h6 class="f-w-400">{{ todo.title }}</h6>
          <span class="mb-0">{{ todo.description }}</span>
        </div>
        <CardDropdown :dropdownType="'simple'" :options="status"></CardDropdown>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails, todoListColors, todoStatus } from '@/core/data/project'
import { routes } from '@/router/routes'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'))

const projectTodo = ref(projectDetails.projectSummary.todoList)
const colors = ref(todoListColors)
const status = ref(todoStatus)

function getColor(index: number) {
  return colors.value[index % colors.value.length]
}
</script>
