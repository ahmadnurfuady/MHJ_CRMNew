<template>
  <div v-if="editingId && canEditProject" class="container-fluid">
    <ProjectCreate :edit-project-id="editingId" />
  </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routes } from '@/router/routes'
import { useProjectStore } from '@/store/project'
import { useProjectPermissions } from '@/module/project/projectPermission'

const ProjectCreate = defineAsyncComponent(
  () => import('@/module/project/projectCreate/ProjectCreate.vue')
)

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const { canAddProject, canEditProject } = useProjectPermissions()
const editingId = computed(() => {
  const rawId = Array.isArray(route.query.id) ? route.query.id[0] : route.query.id
  const id = Number(rawId)
  return Number.isFinite(id) && id > 0 ? id : null
})

onMounted(() => {
  if (editingId.value) {
    if (!canEditProject.value) void router.replace(routes.Project.ProjectList)
    return
  }

  if (!canAddProject.value) {
    void router.replace(routes.Project.ProjectList)
    return
  }

  const rawHospitalId = Array.isArray(route.query.hospital_id)
    ? route.query.hospital_id[0]
    : route.query.hospital_id
  const rawHospitalName = Array.isArray(route.query.hospital_name)
    ? route.query.hospital_name[0]
    : route.query.hospital_name
  const hospitalId = Number(rawHospitalId)
  projectStore.openCreateModal(
    Number.isFinite(hospitalId) && hospitalId > 0 && rawHospitalName
      ? { id: hospitalId, name: rawHospitalName }
      : undefined
  )
  void router.replace(routes.Project.ProjectList)
})
watch(canEditProject, (allowed) => {
  if (!allowed && editingId.value) void router.replace(routes.Project.ProjectList)
})
</script>
