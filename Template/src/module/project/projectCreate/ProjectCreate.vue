<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card create-project-form custom-input">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <form class="row g-3 needs-validation" @submit.prevent="handleSubmit">
                  <div class="col-12">
                    <InputWrapper :title="'Deal Name'">
                      <InputField
                        :modelValue="dealNameField"
                        :inputId="'deal-name'"
                        :placeholder="'Otomatis: EKAT/PRVT_Perusahaan_Produk'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Perusahaan'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Cari perusahaan'"
                        v-model="projectForm.company"
                        :options="hospitals"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Contact'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Cari kontak'"
                        v-model="projectForm.contact"
                        :options="contacts"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Stage'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih stage'"
                        v-model="projectForm.stage"
                        :options="stageOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Owner'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih owner'"
                        v-model="projectForm.owner"
                        :options="owners"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Divisi'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih divisi'"
                        v-model="projectForm.divisi"
                        :options="divisiList"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Produk'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih produk'"
                        v-model="projectForm.produk"
                        :options="productOptions"
                        :multiSelect="true"
                        :disabled="!projectForm.divisi.selected"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Qty'">
                      <InputField
                        v-model:modelValue="projectForm.qty"
                        :inputId="'qty'"
                        :placeholder="'Qty'"
                        :inputType="'number'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Harga'">
                      <InputField
                        :modelValue="hargaField"
                        :inputId="'harga'"
                        :placeholder="'Otomatis dari produk'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Value'">
                      <InputField
                        :modelValue="valueField"
                        :inputId="'value'"
                        :placeholder="'Harga x Qty'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Estimasi PO'">
                      <InputField
                        v-model:modelValue="projectForm.estimasiPo"
                        :inputId="'estimasi-po'"
                        :placeholder="'Pilih tanggal'"
                        :inputType="'date'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Kompetitor'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih kompetitor'"
                        v-model="projectForm.kompetitor"
                        :options="competitors"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Sumber Pendanaan'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih sumber pendanaan'"
                        v-model="projectForm.sumberPendanaan"
                        :options="fundingSources"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div v-if="isLost" class="col-md-6">
                    <InputWrapper :title="'Alasan Kalah/Batal'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih alasan'"
                        v-model="projectForm.alasanKalah"
                        :options="lostReasons"
                        :multiSelect="true"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Notes/Comment'">
                      <InputField
                        v-model:modelValue="projectForm.notes"
                        :inputId="'notes'"
                        :placeholder="'Tulis catatan'"
                        :inputType="'textarea'"
                        :rows="3"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <div class="common-flex justify-content-end">
                      <button class="btn btn-primary" type="submit">Add</button>
                      <button class="btn btn-secondary">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { initInputField, initSelectField } from '@/core/data/common'
import { projectTab } from '@/core/data/project'
import {
  competitors,
  contacts,
  divisiList,
  fundingSources,
  hospitals,
  lostReasons,
  owners,
  products,
} from '@/core/data/projectDeal'
import type { DealOption } from '@/core/data/projectDeal'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

// Stage sama dengan tab di Project List (tanpa "All").
const stageOptions = projectTab
  .filter((tab) => tab.value !== 'all')
  .map((tab) => ({ value: tab.value, label: tab.title }))

const projectForm = ref({
  company: initSelectField(),
  contact: initSelectField(),
  stage: initSelectField(),
  owner: initSelectField(),
  divisi: initSelectField(),
  produk: initSelectField(),
  qty: { data: '1', errorMessage: '' },
  estimasiPo: initInputField(),
  kompetitor: initSelectField(),
  sumberPendanaan: initSelectField(),
  alasanKalah: initSelectField(),
  notes: initInputField(),
})

const formSubmitted = ref<boolean>(false)

// Pilihan single select ada di `selected` (objek opsi), bukan di `data`.
function selectedOf(field: { selected: unknown }) {
  return field.selected as DealOption | null
}

// Produk hanya bisa dipilih setelah divisi dipilih, dan difilter menurut kode divisi.
const productOptions = computed(() =>
  products.filter((item) => item.divisi == selectedOf(projectForm.value.divisi)?.code)
)

watch(
  () => projectForm.value.divisi.selected,
  () => {
    projectForm.value.produk = initSelectField()
  }
)

const selectedProducts = computed(() => projectForm.value.produk.selectedItems as DealOption[])

// Deal Name = EKAT/PRVT_Perusahaan_Produk (EKAT = Government, PRVT = Private).
const dealName = computed(() => {
  const company = selectedOf(projectForm.value.company)
  if (!company) return ''
  const prefix = company.type == 'Government' ? 'EKAT' : 'PRVT'
  const productNames = selectedProducts.value.map((item) => item.label).join(', ')
  return [prefix, company.label, productNames].filter(Boolean).join('_')
})

// Harga dari produk terpilih; Value = Harga x Qty.
const harga = computed(() =>
  selectedProducts.value.reduce((sum, item) => sum + (item.price ?? 0), 0)
)
const qty = computed(() => Number(projectForm.value.qty.data) || 0)
const value = computed(() => harga.value * qty.value)

const format = (amount: number) => amount.toLocaleString('id-ID')
const dealNameField = computed(() => ({ data: dealName.value, errorMessage: '' }))
const hargaField = computed(() => ({ data: format(harga.value), errorMessage: '' }))
const valueField = computed(() => ({ data: format(value.value), errorMessage: '' }))

// Alasan kalah/batal hanya tampil untuk stage Closed Lost dan Closed Cancel.
const stageValue = computed(() => String(projectForm.value.stage.selected?.value ?? ''))
const isLost = computed(() => ['closed_lost', 'closed_cancel'].includes(stageValue.value))

function handleSubmit() {
  formSubmitted.value = true
}
</script>
