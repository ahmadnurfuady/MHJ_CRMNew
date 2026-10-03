<template>
  <Modal
    :title="'Create Role'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-xl'"
    :contentClass="'role-permission-wrapper'"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body custom-input">
      <div class="row">
        <div class="col">
          <div class="mb-lg-3 row mb-4 g-lg-3 g-2">
            <div class="col-md-2">
              <label class="form-label mb-0" for="validationName"
                >Name <span class="txt-danger">*</span></label
              >
            </div>
            <div class="col-md-10">
              <input
                class="form-control"
                id="validationName"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
          </div>
          <div class="row g-lg-3 g-2">
            <div class="col-md-12">
              <label class="form-label mb-0" for="validationName"
                >Permissions <span class="txt-danger">*</span></label
              >
            </div>
            <div class="col-12">
              <div class="row permission-form g-2">
                <div class="col-12" v-for="(module, index) in permissionList" :key="index">
                  <ul>
                    <li>{{ module.name }}</li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input check-all"
                          id="all"
                          type="checkbox"
                          :checked="module.isChecked"
                          @change="checkUncheckAll($event, module)"
                        />
                        <label class="form-check-label" for="all">All</label>
                      </div>
                    </li>
                    <li v-for="(permission, index) in module.modulePermission" :key="index">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          :id="permission.permissionId.toString()"
                          type="checkbox"
                          :checked="
                            selectedPermission.includes(+permission.permissionId) ||
                            permission.isChecked
                              ? true
                              : false
                          "
                          :value="permission.permissionId"
                          @change="onPermissionChecked($event, module)"
                        />
                        <label class="form-check-label" :for="permission.permissionId.toString()">{{
                          permission.name
                        }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12 d-flex justify-content-end mt-3">
                  <button class="btn btn-primary" type="submit" @click="closeModal()">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { permissions } from '@/core/data/user'
import type { Module } from '@/types/user'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

const permissionList = ref(permissions)
const selectedPermission = ref<number[]>([])

function closeModal() {
  emits('closeModal')
}

function checkUncheckAll(event: Event, module: Module) {
  module.modulePermission.forEach((item) => {
    item.isChecked = (<HTMLInputElement>event.target).checked
    addPermission((<HTMLInputElement>event.target).checked, item?.id, module)
  })
}

function onPermissionChecked(event: Event, module: Module) {
  module.modulePermission.forEach((item) => {
    item.isChecked = false
    if (item.name == 'index') {
      item.isChecked = !item.isChecked ? true : false
      addPermission(true, +item.id, module)
    }
    addPermission(
      (<HTMLInputElement>event.target)?.checked,
      +(<HTMLInputElement>event?.target)?.value,
      module
    )
  })
}

function addPermission(checked: boolean, value: number, module: Module) {
  const index = selectedPermission.value.indexOf(Number(value))
  if (checked) {
    if (index == -1) selectedPermission.value.push(Number(value))
  } else {
    selectedPermission.value = selectedPermission.value.filter((id) => id != Number(value))
  }
  updateCheckBoxStatus(module)
}

function updateCheckBoxStatus(module: Module) {
  let count = 0
  module.modulePermission.filter((permission) => {
    if (selectedPermission.value.includes(permission.id!)) {
      count++
    }
    if (module.modulePermission.length <= count) module.isChecked = true
    else module.isChecked = false
  })
}
</script>
