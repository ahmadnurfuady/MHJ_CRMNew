import type { Profile } from './common'

export interface ProductReports {
  id: number
  productName: string
  productImage: string
  sku: string
  productSold: number
  price: number
  rating: number | string
  date: string
}

export interface SalesReport {
  id: number
  orderMonth: string
  totalSales: number
  averageOrderValue: number
  totalOrders: number
  growth: string
  date: string
}

export interface SalesReturnReport {
  id: number
  month: string
  totalItem: number
  order: number
  return: number
  reason: string
  totalReplace: number
  totalReturn: number
  date: string
}

export interface CustomerOrderReport {
  id: number
  customerName: string
  customerProfile: string
  customerEmail: string
  customerGroup: Profile[] | string
  orders: number
  items: number
  total: number
  date: string
}
export interface CustomerGroup {
  name: string
  profile?: string
}
