export interface ProductStep {
  id: number
  productId: string
  icon: string
  title: string
  description: string
  active: boolean
}

export interface ProductCategory {
  id: number
  title: string
}

export interface CollectionItem {
  id: number
  icon: string
  title: string
  description: string
}

export interface ProductDetail {
  id: number
  title: string
  description: string
  space: string
  class?: string
}

export interface PricingOption {
  for: string
  title: string
  checked: boolean
}

export interface Reviews {
  id: number
  name: string
  image: string
  product: string
  rating: number
  date: string
  review: string
}

export interface FormField {
  id: number
  for: string
  title: string
  type: string
}

export interface Dimension {
  id: number
  placeholder: string
  class: string
}

export interface SocialLink {
  id: number
  link: string
  icon: string
}

export interface Tabs {
  id: number
  tabId?: string
  label?: string
  content?: string
}

export interface Table {
  id: number
  material: string
  colors: string
  size: string
  fit: string
  neckline: string
  seam: string
}

export interface RatingData {
  id: number
  ratingId: number
  percentage: string
}

export interface ProductItem {
  id: number
  image: string
  name: string
  brand: string
  sku: string
  category: string
  price: string
  qty: number
  status: string
  statusClass: string
  rating: number
  product: string
}

export interface Brand {
  id: number
  name: string
}

export interface Discount {
  id: number
  title: string
  value: string
  badge: number
}
export interface CheckoutTab {
  id: number
  title: string
  value: string
  icon?: string
}

export interface WishlistItem {
  id: number
  productName: string
  image: string
  brand: string
  price: number
  discountPrice: number
  status: string
}

export interface Item {
  id: number
  name: string
}

export interface Category {
  id: number
  categoryName: string
  description: string
  categoryType: string
  color: string
  image: string
  isActive: boolean
}

export interface Review {
  id: number
  productName: string
  productImage: string
  reviewerName: string
  reviewerProfile: string
  reviewerEmail: string
  review: string
  rating: number
  date: string
  status: string
}

export interface Order {
  id: number
  orderNumber: number
  orderDate: string
  customerName: string
  totalAmount: number | string
  paymentStatus: string
  paymentMethod: string
}

export interface OrderStep {
  id: number
  title: string
  active: boolean
}

export interface OrderDetails {
  id: number
  productName: string
  productImage: string
  brand: string
  color: string
  discountPrice: number
  price: number
  quantity: number
  totalQuantity: number
  subTotal: number
}

export interface CustomerDetail {
  id: number
  label: string
  value: string
}

export interface FilterOption {
  id: number
  label: string
  value: string
  active: boolean
}

export interface Store {
  id: number
  storeName: string
  storeLogo: string
  vendorName: string
  totalOrder: number
  totalProduct: number
  totalEarning: number
  storeCategoryId: number
}

export interface StoreGeneralDetails {
  id: number
  title: string
  value: string | number
  icon: string
  color: string
  type?: string
}

export interface Step {
  id: number
  title: string
}

export interface TopSellingProduct {
  id: number
  productName: string
  productImage: string
  category: string
  price: string | number
  orders: string | number
  stock: string | number
  totalAmount: string | number
}

export interface Rating {
  id: number
  rating: number
  width: string
}

export interface RecentOrders {
  id: number
  orderNumber: string
  date: string
  amount: number | string
  payment: string
  customerName: string
  customerProfile: string
}

export interface Details {
  id: number
  icon: string
  label: string
  value: string
  isLink: boolean
}

export interface Setting {
  id: number
  tabId?: string
  icon?: string
  title?: string
  label?: string
  checked?: boolean
  switch?: boolean
  placeholder?: string
}

export interface Option {
  id: number
  name: string
}

export interface Data {
  id: number
  label: string
  info: string
  value?: number
  icon?: string
  switch?: boolean
  checked?: boolean
  sign?: string
  placeholder?: string
}

export interface Invoice {
  id: number
  name: string
  description: string
  hours: number
  rate: number
}

export interface CheckoutTabs {
  id: number
  active: boolean
  title: string
  value: string
}

export interface PaypalOption {
  id: number
  label: string
  switch?: boolean
  placeholder?: string
}

export interface Option {
  id: number
  name: string
}

export interface InvoiceItem {
  title: string
  license: string
  price: number
  qty: number
}
