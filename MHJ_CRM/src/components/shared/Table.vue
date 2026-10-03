<template>
  <template v-if="props.tableConfig">
    <template v-if="props.search || props.dateFilter || props.showPaginate">
      <div class="top-body">
        <template v-if="props.showPaginate">
          <select @change="handleSelect($event)">
            <template v-for="pages in pageSizeOptions" :key="pages.value">
              <option :value="pages.value" :selected="pages.selected">
                {{ pages.title }}
              </option>
            </template>
          </select>
        </template>
        <template v-if="props.dateFilter">
          <div>
            <div class="row align-items-center g-1">
              <div class="col-auto">
                <label class="form-label">Select Dates</label>
              </div>
              <div class="col-auto">
                <div class="rrange-dropdown flatpickr-input" id="reportrange" readonly="readonly">
                  <span @click.prevent="handleDropdown()">
                    {{ tableState.selectedDate ? tableState.selectedDate : 'Select' }}
                  </span>
                  <div id="rangeButtons" :class="{ 'range-option': tableState.dateDropdownOpen }">
                    <button
                      v-for="option in dateOptions"
                      :key="option.value"
                      @click.prevent="handleDateFilter(option.value)"
                      :class="{
                        active: tableState.selectedValue === option.value,
                      }"
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </div>
                <template v-if="tableState.selectedValue && tableState.selectedValue === 'custom'">
                  <Flatpickr
                    v-model="tableState.date"
                    :config="tableState.config"
                    @on-change="handleDate"
                  />
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-if="props.search">
          <div id="basic-1_filter" class="dataTables_filter">
            <label
              >Search:
              <input
                type="text"
                name="searchTerm"
                v-model="tableState.searchText"
                @keyup="searchTerm(tableState.searchText)"
                :placeholder="props.searchPlaceholder"
              />
            </label>
          </div>
        </template>
      </div>
    </template>
    <table class="table" :class="props.tableClass">
      <thead>
        <tr>
          <th
            class="datatable-checkbox"
            v-if="props.hasCheckbox"
            :class="{
              'selected-checkbox':
                tableState.selected.length &&
                tableState.selected.length != props.tableConfig.data.length,
            }"
          >
            <input
              type="checkbox"
              class="cb-select-checkbox"
              :checked="
                (props.tableConfig &&
                  props.tableConfig.data.length &&
                  tableState.selected &&
                  tableState.selected.length == props.tableConfig.data.length) ||
                false
              "
              @change="checkUncheckAll($event, props)"
            />
          </th>
          <th v-if="props.rowDetails"></th>
          <template v-for="column in props.tableConfig.columns" :key="column.fieldValue">
            <template v-if="!column.hideColumn">
              <template v-if="column.sort">
                <th
                  :class="
                    tableState.sortableKey ==
                      (column.sortableKey ? column.sortableKey : column.fieldValue) &&
                    tableState.filter['sort'] == 'asc'
                      ? 'asc'
                      : tableState.sortableKey ==
                            (column.sortableKey ? column.sortableKey : column.fieldValue) &&
                          tableState.filter['sort'] == 'desc'
                        ? 'desc'
                        : ''
                  "
                  @click="onSort(String(column.sortableKey ?? column.fieldValue), props)"
                >
                  {{ column.title }}
                  <span class="cb-accending-decending"></span>
                </th>
              </template>
              <th v-else>{{ column.title }}</th>
            </template>
          </template>
          <th v-if="props.tableConfig.rowAction">{{ 'Actions' }}</th>
        </tr>
      </thead>
      <template v-if="tableState.tableRecords && tableState.tableRecords.length">
        <tbody>
          <template v-for="(details, index) in tableState.tableRecords" :key="index">
            <tr
              :class="{
                selected:
                  hasId(details) &&
                  tableState.selected &&
                  tableState.selected.length &&
                  tableState.selected.includes(Number(details.id)),
              }"
            >
              <td class="datatable-checkbox" v-if="props.hasCheckbox">
                <input
                  type="checkbox"
                  :data-id="getTableRowId(details)"
                  :value="getTableRowId(details)"
                  :checked="tableState.selected.includes(getTableRowId(details))"
                  @change="onItemChecked($event)"
                />
              </td>
              <td
                v-if="props.rowDetails"
                :style="{
                  background: `url(${
                    getImages(
                      tableState.selectedOpenRows.includes(getTableRowId(details))
                        ? 'details_close'
                        : 'details_open'
                    ) + '.png'
                  }) no-repeat center center`,
                  cursor: 'pointer',
                }"
                @click="openRowDetails(getTableRowId(details))"
              ></td>

              <template v-for="column in props.tableConfig.columns" :key="column.fieldValue">
                <template v-if="!column.hideColumn">
                  <td :class="column.class ? column.class : ''">
                    <slot :name="String(column.fieldValue)" :row="details" :column="column">
                      <template v-if="column.text">
                        {{ columnValue(details, column.fieldValue) }}
                        {{ column.text }}
                      </template>
                      <template v-else-if="column.type == 'price'">
                        <template v-if="column.decimalNumber">
                          ${{ columnValue(details, column.fieldValue, true) }}
                        </template>
                        <template v-else> ${{ columnValue(details, column.fieldValue) }} </template>
                      </template>
                      <template v-else>
                        <span v-html="columnValue(details, column.fieldValue)"></span>
                      </template>
                    </slot>
                  </td>
                </template>
              </template>
              <template v-if="props.tableConfig.rowAction">
                <td>
                  <div class="product-action common-align gap-2 justify-content-start">
                    <template v-for="(row, i) in props.tableConfig.rowAction" :key="i">
                      <button
                        v-if="row.type === 'button' || row.label === 'Create'"
                        :class="row.type === 'button' ? row.class : 'plus-btn'"
                        type="button"
                        @click="handleAction(row, details)"
                      >
                        <template v-if="row.fontType">
                          <i :class="`fa-solid fa-${row.icon}`"></i>
                        </template>
                        <template v-else>
                          {{ row.label === 'Create' ? '+' : row.label }}
                        </template>
                      </button>
                      <router-link
                        v-else-if="['Edit', 'Delete', 'View'].includes(row.label)"
                        class="square-white"
                        :to="row.path || ''"
                        @click="handleAction(row, details)"
                      >
                        <SvgIcon
                          v-if="['Edit', 'Delete'].includes(row.label)"
                          :icon="row.icon || ''"
                        />
                        <i v-else-if="row.label === 'View'" class="fa-solid fa-eye"></i>
                      </router-link>
                      <a
                        v-else
                        class="square-white btn"
                        :class="getDynamicClass(row.label as RowActionType)"
                        href="#"
                        v-tooltip
                        :title="row.label"
                      >
                        <i
                          :class="`fa-solid fa-${row.icon || getDefaultIcon(row.label as RowActionType)}`"
                        ></i>
                      </a>
                    </template>
                  </div>
                </td>
              </template>
            </tr>
            <template
              v-if="
                props.rowDetails &&
                hasId(details) &&
                tableState.selectedOpenRows.includes(details.id)
              "
            >
              <tr data-dt-row="8">
                <td colspan="8">
                  <table :style="{ 'padding-left': '50px' }">
                    <tbody>
                      <tr v-for="column in props.tableConfig.columns" :key="column.fieldValue">
                        <td>{{ column.title }}</td>
                        <td v-html="columnValue(details, column.fieldValue)"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </template>
      <template v-else-if="!tableState.tableRecords.length">
        <tbody>
          <tr :data-dt-row="getColSpan(props)">
            <td :colspan="getColSpan(props)" class="empty-data text-center">No data found</td>
          </tr>
        </tbody>
      </template>
      <slot name="tableFooter"></slot>
    </table>
    <template v-if="props.tableConfig.data.length && props.pagination">
      <Pagination
        :total="props.tableConfig.data.length"
        :paginate="tableState.paginate"
        :paginateDetails="props.paginateDetails"
        :selectedRows="props.selectedRows"
        :selectedItems="tableState.selected.length"
        @setPage="setPage($event)"
      />
    </template>
  </template>
</template>

<script setup lang="ts" generic="T extends TableData">
import Swal from 'sweetalert2'
import { defineAsyncComponent, watch } from 'vue'
import { RowActionType, TableData, TableProps, TableRows } from '@/types/common'
import { getImages, columnValue } from '@/utils/index'
import { tableUtils } from '@/utils/tableUtils'
import { getTableRowId, hasId } from '@/utils/index'
import { dateOptions } from '@/core/data/common'

const {
  tableState,
  pageSizeOptions,
  handlePaginationSize,
  setPage,
  searchTerm,
  handleSelect,
  checkUncheckAll,
  onItemChecked,
  onSort,
  openRowDetails,
  getColSpan,
  applyFilters,
  getDefaultIcon,
  getDynamicClass,
  handleDropdown,
  handleDateFilter,
  handleDate,
} = tableUtils<T>()

const props = withDefaults(defineProps<TableProps<T>>(), {
  pageSize: 4,
  paginateDetails: false,
  showPaginate: false,
  search: true,
  pagination: true,
  selectedRows: false,
  rowDetails: false,
  dateFilter: false,
  searchPlaceholder: 'Search Here...',
})

const Pagination = defineAsyncComponent(() => import('@/components/shared/Pagination.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const emits = defineEmits(['action'])

watch(
  () => props.pageSize,
  (newPageSize) => {
    if (newPageSize) {
      tableState.filter['pageSize'] = newPageSize

      handlePaginationSize()
    }
  },
  { immediate: true }
)

watch(
  () => props.tableConfig.data,
  (newData) => {
    if (newData) {
      applyFilters(props)
    }
  },
  { immediate: true }
)

watch(
  () => tableState.pageNo,
  (newValue) => {
    if (newValue) {
      applyFilters(props)
    }
  },
  { immediate: true }
)

function handleAction(value: TableRows, details: TableData) {
  if (value.actionToPerform == 'delete') {
    if (!value.modal) {
      emits('action', {
        actionToPerform: value.actionToPerform,
        data: details,
      })
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: value.modelText ? value.modelText : 'Do you really want to delete the product?',
        imageUrl: getImages('gif/trash.gif'),
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#FC4438',
      }).then((result) => {
        if (result.isConfirmed) {
          emits('action', {
            actionToPerform: value.actionToPerform,
            data: details,
          })
        }
      })
    }
    if (hasId(details)) {
      const numericId = Number(details.id)

      if (tableState.selected.includes(numericId)) {
        tableState.selected = tableState.selected.filter((id) => id !== numericId)
      } else {
        tableState.selected.push(numericId)
      }
    }
  }
  if (value.actionToPerform == 'view') {
    emits('action', { actionToPerform: value.actionToPerform, data: details })
  }
}

watch(
  () => [
    tableState.filter['search'],
    tableState.filter['sort'],
    tableState.filter['date'],
    tableState.filter['page'],
    tableState.filter['pageSize'],
  ],
  () => {
    applyFilters(props)
  }
)
</script>
