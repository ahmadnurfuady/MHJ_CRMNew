<template>
  <div class="container-fluid">
    <div class="page-title">
      <div class="row">
        <div class="col-6">
          <h4>{{ pageTitle }}</h4>
        </div>
        <div class="col-6 p-0">
          <ol class="breadcrumb">
            <li class="breadcrumb-item breadcrumb-home">
              <router-link :to="routes.Dashboards.Default" aria-label="Kembali ke Home" title="Home">
                <svg class="breadcrumb-home-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 12.204c0-2.289 0-3.433.519-4.381.519-.949 1.468-1.537 3.365-2.715l2-1.241C9.89 2.622 10.892 2 12 2s2.111.622 4.116 1.867l2 1.241c1.897 1.177 2.846 1.766 3.365 2.715C22 8.771 22 9.915 22 12.204v1.521c0 3.901 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z"
                  />
                  <path d="M15 18H9" />
                </svg>
              </router-link>
            </li>
            <li
              v-for="(crumb, index) in breadcrumbs"
              :key="`${crumb.label}-${index}`"
              class="breadcrumb-item"
              :class="{ active: index === breadcrumbs.length - 1 }"
              :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
            >
              <router-link v-if="crumb.to && index !== breadcrumbs.length - 1" :to="crumb.to">
                {{ crumb.label }}
              </router-link>
              <span v-else>{{ crumb.label }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, type RouteLocationRaw } from 'vue-router'
import { routes } from '@/router/routes'

interface MetaBreadcrumb {
  text: string
  subText?: string
}

interface BreadcrumbItem {
  label: string
  to?: RouteLocationRaw
}

const route = useRoute()
const queryValue = (value: unknown) => String(Array.isArray(value) ? value[0] ?? '' : value ?? '')
const withoutEditQuery = computed(() => {
  const query = { ...route.query }
  delete query.edit
  return query
})

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
  const path = route.path.toLowerCase()
  const detailId = queryValue(route.query.detail)
  const editMode = queryValue(route.query.edit) === '1'

  const queryModule = (
    modulePath: string,
    label: string,
  ): BreadcrumbItem[] | null => {
    if (path !== modulePath.toLowerCase()) return null
    if (!detailId) return [{ label }]

    const items: BreadcrumbItem[] = [
      { label, to: { path: modulePath } },
      { label: 'Detail' },
    ]
    if (editMode) {
      items[1].to = { path: modulePath, query: withoutEditQuery.value }
      items.push({ label: 'Edit' })
    }
    return items
  }

  const hospital = queryModule(routes.App.RumahSakit, 'Rumah Sakit')
  if (hospital) return hospital
  const contact = queryModule(routes.App.Contacts, 'Kontak')
  if (contact) return contact
  const task = queryModule(routes.App.Task, 'Tugas')
  if (task) return task

  if (path === routes.Project.ProjectList.toLowerCase()) return [{ label: 'Peluang' }]
  if (
    path === routes.Project.ProjectDetails.toLowerCase() ||
    path === routes.Project.ProjectDetailsV2.toLowerCase()
  ) {
    return [
      { label: 'Peluang', to: routes.Project.ProjectList },
      { label: 'Detail' },
    ]
  }
  if (path === routes.Project.ProjectEdit.toLowerCase()) {
    return [
      { label: 'Peluang', to: routes.Project.ProjectList },
      {
        label: 'Detail',
        to: {
          path: routes.Project.ProjectDetailsV2,
          query: route.query.id ? { id: queryValue(route.query.id) } : undefined,
        },
      },
      { label: 'Edit' },
    ]
  }
  if (path === routes.App.KanbanBoard.toLowerCase()) return [{ label: 'Peluang' }]

  const metaBreadcrumbs = (route.meta.breadcrumb as MetaBreadcrumb[] | undefined) ?? []
  const items: BreadcrumbItem[] = []
  metaBreadcrumbs.forEach((crumb) => {
    if (crumb.text) items.push({ label: crumb.text })
    if (crumb.subText && crumb.subText !== crumb.text) items.push({ label: crumb.subText })
  })
  return items
})
const pageTitle = computed(() => (route.meta.mainTitle as string) || '')
</script>

<style scoped>
.breadcrumb-home a,
.breadcrumb-item a {
  color: #16334d;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-home a {
  display: inline-grid;
  place-items: center;
}

.breadcrumb-home-icon {
  width: 18px;
  height: 18px;
  overflow: visible;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.breadcrumb-item a:hover,
.breadcrumb-item a:focus-visible {
  color: var(--theme-default, #18a6e4);
}

.breadcrumb-item.active {
  color: var(--theme-default, #18a6e4);
}
</style>
