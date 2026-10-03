export interface Order {
  id: number
  orderNumber: number | string
  orderDate: string
  customerName: string
  totalAmount: number | string
  paymentStatus: string
  paymentMethod: string
}

export interface OrderDetail {
  products: OrderDetailsProduct[]
  customerDetails: CustomerDetail
  billingDetails: BillingDetail
}

export interface OrderDetailsProduct {
  id: number
  productName: string
  productImage: string
  brand: string
  color?: string
  category?: string
  price: number
  discountPrice?: number
  quantity: number
  totalQuantity: number
  subTotal?: number | string
  isChecked?: boolean
}

export interface CustomerDetail {
  name: string
  email: string
  billingAddress: string
  shippingAddress: string
  deliverySlot: string
  paymentMethod: string
}

export interface BillingDetail {
  subTotal: number
  shipping: string
  couponDiscount: number
  tax: number
  total: number
}
