export interface DeliveryPercentage {
  id: number
  title: string
  percentage: number
  amount: number
}

export interface TopProduct {
  id: number
  sku: string
  image: string
  title: string
  price: number
  qty: number
  revenue: number
  profit: number
}

export interface NewUserItem {
  id: number
  name: string
  country: string
  image: string
  profileUrl?: string
}

export interface ActivityItem {
  id: number
  name: string
  time: string
  message: string
  image: string
}

export interface LatestTransactionItem {
  id: number
  name: string
  date: string
  amount: string
  status: string
  class: string
}
