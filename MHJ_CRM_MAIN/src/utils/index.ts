import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common'
import { TableData, TableDataKey } from '@/types/common'
import { ref } from 'vue'
export const type = ref<string>('password')

export function getImages(path: string) {
  if (!path) return ''
  if (path.startsWith('data:image')) {
    return path
  }
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  const base = import.meta.env.BASE_URL

  return `${base}images/${path.replace(/^\/+/, '')}`
}
export function formatPrice(price: number): string {
  return `${price.toLocaleString('en-US')}`
}

 
export function showPassword() {
  if (type.value === 'password') {
    type.value = 'text'
  } else {
    type.value = 'password'
  }
}

export function getUserText(userName: string, value: string = ''): string {
  const names = userName.split(' ')
  if (names && names[0] && names[0][0] && value == 'singleText') {
    return names[0][0]
  } else {
    return names.map((name) => name[0]).join('')
  }
}

export function getTextColor(name: string) {
  const firstLetter = name[0]

  if (firstLetter)
    if (firstLetter >= 'A' && firstLetter <= 'E') {
      return 'primary'
    } else if (firstLetter >= 'F' && firstLetter <= 'J') {
      return 'success'
    } else if (firstLetter >= 'K' && firstLetter <= 'O') {
      return 'warning'
    } else if (firstLetter >= 'P' && firstLetter <= 'T') {
      return 'danger'
    } else {
      return 'secondary'
    }
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`
}

export const today = new Date()
export const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

export const last7Days = new Date(today)
last7Days.setDate(today.getDate() - 7)

export const last30Days = new Date(today)
last30Days.setDate(today.getDate() - 30)

export const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1)
export const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0)

export const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1)
export const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0)

export const formatDecimalOnly = (value: number | string, digits = 2): string => {
  return Number(value).toFixed(digits)
}

export function columnValue(details: TableData, fieldValue: TableDataKey, decimal?: boolean) {
  if (!(fieldValue in details)) return undefined
  const key = fieldValue as keyof TableData
  const value = details[key]
  return decimal && value != null ? formatDecimalOnly(value) : value
}

export const formatNumber = (value: number | string): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(value))
}

export function titleCase(value: string) {
  return value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
}

/**
 * Nama proyek disimpan sebagai "PREFIX_Perusahaan_Produk" (lihat ProjectCreate.vue).
 * Ambil segmen terakhir (nama produk) untuk tampilan singkat di card/list.
 */
export function shortProjectTitle(value?: string): string {
  if (!value) return ''
  const lastUnderscore = value.lastIndexOf('_')
  if (lastUnderscore === -1) return value
  return value.slice(lastUnderscore + 1).trim() || value
}

export function resetForm<T extends Record<string, unknown>>(form: T): T {
  const newForm = { ...form }

  ;(Object.keys(newForm) as Array<keyof T>).forEach((key) => {
    const field = newForm[key] as Record<string, unknown>

    if ('type' in field) {
      switch (field.type) {
        case 'dropdown':
          newForm[key] = initSelectField() as T[keyof T]
          break
        case 'checkbox':
          newForm[key] = initCheckboxField() as T[keyof T]
          break
        default:
          newForm[key] = initInputField() as T[keyof T]
          break
      }
    } else {
      // fallback: if missing type, default to input
      newForm[key] = initInputField() as T[keyof T]
    }
  })

  return newForm
}

export function assignFormFieldValue<T extends Record<string, unknown>>(
  form: T,
  formValue: Record<string, unknown>
): T {
  const updatedForm = { ...form }

  ;(Object.keys(updatedForm) as Array<keyof T>).forEach((key) => {
    const field = updatedForm[key] as Record<string, unknown> | undefined
    if (!field) return

    const value = formValue[key as string]

    if ('type' in field) {
      switch (field.type) {
        case 'dropdown':
          updatedForm[key] = {
            selected: value ?? null,
            errorMessage: '',
            type: 'dropdown',
          } as T[keyof T]
          break

        case 'checkbox':
          updatedForm[key] = {
            data: Boolean(value),
            errorMessage: '',
            type: 'checkbox',
          } as T[keyof T]
          break

        default:
          updatedForm[key] = {
            ...field,
            data: value ?? '',
          } as T[keyof T]
          break
      }
    }
  })

  return updatedForm
}

export function initializeCheckboxList<T extends { checked: boolean; model: { data: boolean } }>(
  list: T[]
) {
  list.forEach((item) => {
    if (item.checked) {
      item.model.data = true
    }
  })
}

export function calculateAge(date: string) {
  const dob = date
  if (!dob) return

  const birthDate = new Date(dob)
  const today = new Date()

  let years = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()
  let days = today.getDate() - birthDate.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  let ageString = ''
  if (years > 0) {
    ageString = `${years} year${years > 1 ? 's' : ''}`
  } else if (months > 0) {
    ageString = `${months} month${months > 1 ? 's' : ''}`
    if (days > 0) ageString += ` and ${days} day${days > 1 ? 's' : ''}`
  } else {
    ageString = `${days} day${days > 1 ? 's' : ''}`
  }

  return ageString
}

export function getTableRowId(item: TableData): number {
  if ('id' in item) {
    const id = item.id
    if (typeof id === 'number') return id
    if (typeof id === 'string' && !isNaN(Number(id))) return Number(id)
  }

  if ('productId' in item) {
    const pid = item.productId
    if (typeof pid === 'number') return pid
    if (typeof pid === 'string' && !isNaN(Number(pid))) return Number(pid)
  }

  return -1
}

export function hasId(obj: unknown): obj is { id: number } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof (obj as { id: unknown }).id === 'number'
  )
}

export function isChartValue(value: unknown): value is { series: unknown; options: unknown } {
  return typeof value === 'object' && value !== null && 'series' in value && 'options' in value
}
