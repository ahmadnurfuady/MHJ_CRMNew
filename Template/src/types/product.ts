import { Select } from './common'

export interface Product {
  id: number
  name: string
  images: string[]
  shortDescription: string
  description: string
  details: string
  gift?: boolean
  salePrice: number
  price: number
  sale: boolean
  off?: boolean
  category: string[]
  colors: string[]
  size: string[]
  brand: string
  tags: string[]
  stock: number
  stockStatus: string
  quantity: number
  star: number
  icon: boolean
  ribbon: boolean
  hot: boolean
}

export interface ProductState {
  product: Product[]
  cartItems: Product[]
  cart: Product[]
  tagItems: Product[]
  searchTerm: string
  tabs: {
    id: number
    value: string
    label?: string
    icon?: string
    title?: string
    description?: string
  }[]
  additionalTabs: { id: number; value: string; label?: string; title?: string }[]
  activeTab: string
  additionalActiveTab: string
  activeTabId: number
  additionalTabId: number
}

export interface UiState {
  col2: boolean
  col3: boolean
  col4: boolean
  col6: boolean
  listViewEnable: boolean
  list: boolean
}
export interface TableProduct {
  name: string
  id: number
  category: string
  price: number
  quantity: number
  stockStatus: string
  star: string
  images: string[]
}

export interface ProductTab {
  id: number
  value: string
  icon: string
  title: string
  description: string
}

export interface FilterOption {
  id: number
  title: string
  value: string
  badge?: number
}

export interface OptionItem {
  value: string
  label: string
}

export interface SocialShareOption {
  id: number
  name: string
  link: string
  icon: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface CategoryForm {
  categoryName: { value: string }
  slug: { value: string }
  parentCategory: Select
  categoryType: Select
  categoryStatus: Select
  description: { value: string }
  metaTitle: { value: string }
  metaKeyword: { value: string }
}
