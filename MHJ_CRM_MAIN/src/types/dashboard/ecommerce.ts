export interface ProductCostingItem {
  id: number
  title: string
  amount: string
  icon: string
  bgClass: string
  subtitle: string
}

export interface SaleHistoryItem {
  id: number
  title: string
  price: string
  country: string
  timeAgo: string
}

export interface OrderTableItem {
  id: number
  productImage: string
  productName: string
  productId: string
  customerName: string
  customerEmail: string
  amount: number
  paymentMethod: string
  status: string
  statusClass: string
  invoiceIcon: string
}

export interface ProductRow {
  id: number
  image: string
  name: string
  gender: string
  stock: boolean
  variants: number
  actionIcon: string
  stockHtml?: string
}

export interface ProductWidget {
  title: string
  description: string
  mainIcon: string
  secondaryIcon?: string
  bgClass?: string
}

export interface ActivityLog {
  id: number
  name: string
  time: string
  actionLabel: string
  actionTo: string
  message: string
  username?: string
  image: string
}

export interface ActivityMessage {
  id: number
  image: string
  status: string
  name: string
  message: string
}
