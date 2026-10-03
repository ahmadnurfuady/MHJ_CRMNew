import type { Select } from '@/types/common'

export const registerTab = [
  {
    id: 1,
    title: 'Personal',
    description: 'Add personal details',
  },
  {
    id: 2,
    title: 'Address',
    description: 'Add account info',
  },
  {
    id: 3,
    title: 'Message',
    description: 'Add identity info',
  },
  {
    id: 4,
    title: 'Done',
    description: 'Add address info',
  },
]

export const havePasswordOption: Select[] = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
]
