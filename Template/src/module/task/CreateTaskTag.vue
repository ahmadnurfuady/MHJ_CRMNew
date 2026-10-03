<template>
  <div
    class="modal fade modal-bookmark"
    id="createtag"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Create Tag</h4>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="form-bookmark needs-validation" novalidate>
            <div class="row">
              <div class="mb-3 mt-0 col-md-12">
                <label>Tag Name</label>
                <input class="form-control" type="text" v-model="tag" required autocomplete="off" />
              </div>
              <div class="mt-0 col-md-12">
                <label>Tag color</label>
                <input class="form-color d-block" type="color" value="#006666" />
              </div>
            </div>
            <button
              class="btn btn-secondary me-1"
              type="button"
              @click="addTags()"
              data-bs-dismiss="modal"
            >
              Save
            </button>
            <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { tasks } from '@/core/data/tasks'
import { Task } from '@/types/tasks'
const tagsData = ref<Task[]>([])
const tag = ref('')

const addTags = () => {
  const maxId = tagsData.value.length
  const nextId = maxId
  const newTasks = {
    id: nextId,
    title: tag.value,
    type: 'tag',
    data: [],
  }
  tagsData.value.push(newTasks)
  tag.value = ''
}

onMounted(() => {
  try {
    tagsData.value = tasks
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
})
</script>
