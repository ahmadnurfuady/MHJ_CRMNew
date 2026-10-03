import { CardToggleOption, Color, SelectField } from '@/types/common'

export const dayFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Tomorrow',
  },
  {
    id: 3,
    title: 'Yesterday',
  },
]

export const timeFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Day',
  },
  {
    id: 2,
    title: 'Month',
  },
  {
    id: 3,
    title: 'Year',
  },
]

export const monthFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'This Month',
  },
  {
    id: 2,
    title: 'Previous Month',
  },
  {
    id: 3,
    title: 'Last 3 Months',
  },
  {
    id: 4,
    title: 'Last 6 Months',
  },
]

export const dateRangeFilter: CardToggleOption[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'This Week',
  },
  {
    id: 4,
    title: 'This Month',
  },
  {
    id: 5,
    title: 'Previous Month',
  },
]

export const periodFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'This Week',
  },
]

export const timeRangeFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: '1H',
  },
  {
    id: 2,
    title: '1D',
  },
  {
    id: 3,
    title: '1W',
  },
  {
    id: 4,
    title: '1M',
  },
  {
    id: 5,
    title: '1Y',
  },
]

export const frequencyFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Weekly',
  },
  {
    id: 2,
    title: 'Monthly',
  },
  {
    id: 3,
    title: 'Yearly',
  },
]

export const simpleDateFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'Last Month',
  },
]

export const classLevelFilterOptions: CardToggleOption[] = [
  {
    id: 1,
    title: 'Class 9',
  },
  {
    id: 2,
    title: 'Class 10',
  },
  {
    id: 3,
    title: 'Class 11',
  },
  {
    id: 4,
    title: 'Class 12',
  },
]

export const primaryColor: string = localStorage.getItem('primary_color') || '#006666'
export const secondaryColor: string = localStorage.getItem('secondary_color') || '#FE6A49'
export const successColor: string = '#00AC46'
export const warningColor: string = '#FFAE1A'

export function initInputField() {
  return {
    data: '',
    errorMessage: '',
  }
}

export function initSelectField(): SelectField {
  return {
    selected: null,
    data: '',
    selectedItems: [],
    errorMessage: '',
    type: 'dropdown',
  }
}

export function initCheckboxField() {
  return {
    data: false,
    errorMessage: '',
    type: 'checkbox',
  }
}

export const colors: Color[] = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'danger' },
  { color: 'warning' },
  { color: 'info' },
  { color: 'dark' },
]

export const dateOptions = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 Days', value: '7_days' },
  { label: 'Last 30 Days', value: '30_days' },
  { label: 'This Month', value: 'this_month' },
  { label: 'Last Month', value: 'last_month' },
  { label: 'Custom Date Range', value: 'custom' },
]

export const reportButtons = [
  { label: 'Copy', value: 'copy', class: 'buttons-copy buttons-html5' },
  { label: 'CSV', value: 'csv', class: 'buttons-csv buttons-html5' },
  { label: 'Excel', value: 'excel', class: 'buttons-excel buttons-html5' },
  { label: 'PDF', value: 'pdf', class: 'buttons-pdf buttons-html5' },
  { label: 'Print', value: 'print', class: 'buttons-print' },
]
