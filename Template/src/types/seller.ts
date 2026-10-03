import { ApexOptions } from 'apexcharts'

export interface Store {
  id: number
  storeName: string
  storeLogo: string
  vendorName: string
  totalOrder: number
  totalProduct: number
  totalEarning: number
  storeCategoryId: number
  location: string
  phone: string
  email: string
  url: string
}

export interface StoreGeneralDetails {
  id: number
  title: string
  value: string | number
  icon: string
  color: string
  type?: string
}

export interface SalesOverviewCharts {
  id: number
  title: string
  value: string
  icon: string
  color: string
  chartSeries: ApexOptions['series']
  chartDetails: SalesOverviewChartDetails
}

export interface SalesOverviewChartDetails {
  fill: ApexOptions['fill']
  chart: ApexOptions['chart']
  colors: ApexOptions['colors']
  dataLabels: ApexOptions['dataLabels']
  stroke: ApexOptions['stroke']
  tooltip: ApexOptions['tooltip']
  markers: ApexOptions['markers']
  xaxis: ApexOptions['xaxis']
  yaxis: ApexOptions['yaxis']
  legend: ApexOptions['legend']
  responsive: ApexOptions['responsive']
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

export interface RecentOrdersItem {
  id: number
  orderNumber: string
  date: string
  amount: number | string
  payment: string
  customerName: string
  customerProfile: string
}

export interface ProductReview {
  name: string
  image: string
  product: string
  rating: number
  date: string
  reviewText: string
}

export interface ProductReviewSummary {
  totalReview: number
  review: number
  reviewCount: number[]
  reviews: ProductReview[]
}

export interface SellerDetails {
  details: StoreDetail
  rating: SellerRating
  notifications: SellerNotification
  policies: SellerPolicy[]
  review: SellerReview[]
}

export interface StoreDetail {
  logo: string
  storeName: string
  vendorName: string
  location: string
  phone: string
  email: string
  url: string
}

export interface SellerRating {
  totalRating: number
  rating: number
  ratingCount: number[]
}

export interface SellerNotification {
  notificationList: {
    id: number
    title: string
    checked?: boolean
  }[]
  notificationPlatform: {
    id: number
    name: string
    logo: string
    checked?: boolean
  }[]
}

export interface SellerPolicy {
  title: string
  policyText: string
}

export interface SellerReview {
  name: string
  image: string
  product: string
  rating: number
  date: string
  reviewText: string
}
