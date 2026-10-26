<template>
  <div class="col-xxl-9 col-xl-8 box-col-12">
    <div class="card">
      <div class="card-header b-bottom">
        <div class="todo-list-header">
          <div class="new-task-wrapper input-group">
            <input
              class="form-control"
              id="new-task"
              v-on:keyup.enter="addNewTask"
              v-model="task"
              placeholder="Masukkan tugas baru di sini..."
            />
            <span class="btn btn-primary add-new-task-btn" id="add-task" @click="addNewTask()"
              >Tambah Tugas</span
            >
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="todo">
          <div class="todo-list-wrapper custom-scrollbar">
            <div class="todo-list-container">
              <div class="todo-list-body custom-scrollbar">
                <ul id="todo-list">
                  <li
                    v-for="(todo, index) in todoList"
                    :key="index"
                    class="task"
                    :class="{ completed: todo.delete }"
                  >
                    <div class="task-container">
                      <h4 class="task-label" @click="taskComplete(todo.id)">
                        {{ todo.title }}
                      </h4>
                      <div class="d-flex align-items-center gap-3">
                        <span class="badge" :class="todo.badgeClass">{{ todo.priority }}</span>
                        <h5 class="assign-name m-0">{{ todo.date }}</h5>
                        <span class="task-action-btn">
                          <span
                            class="action-box large delete-btn"
                            title="Hapus Tugas"
                            @click="remove(index)"
                          >
                            <i class="icon"><SolarIcon name="icon-trash" /></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="notification-popup hide">
            <p>
              <span class="task"></span>
              <span class="notification-text"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodo } from '@/store/todo'
import { toast } from 'vue3-toastify'

const task = ref<string>('')
const store = useTodo()
const { addTodo, toggleTask, deleteTask } = store
const todoList = store.todo

function addNewTask() {
  if (task.value.trim()) {
    addTodo({ id: 0, title: task.value, delete: false, status: 'pending' })
    task.value = ''
    toast.success('Tugas berhasil ditambahkan!')
  } else {
    toast.error('Silakan masukkan tugas.')
  }
}

function taskComplete(id: number) {
  toggleTask(id)
}

function remove(index: number) {
  deleteTask(index)
  toast.success('Tugas berhasil dihapus!')
}
</script>
