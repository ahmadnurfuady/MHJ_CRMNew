import { ApexOptions } from 'apexcharts'
import { primaryColor } from '../common'
type ApexCtx = {
  globals: {
    seriesTotals: Array<number | string>
  }
}
import {
  OrderTableItem,
  ProductCostingItem,
  ProductRow,
  ProductWidget,
  SaleHistoryItem,
} from '@/types/dashboard/ecommerce'

export const saleChartSeries: ApexOptions['series'] = [
  {
    name: 'Revenue',
    data: [1000, 3900, 2500, 7400, 5800, 8000, 4200, 5800, 3100, 7100, 1000, 8200],
  },
  {
    name: 'Orders',
    data: [3800, 4300, 3400, 3300, 3000, 1800, 5900, 5600, 4200, 6000, 3900, 8400],
  },
]

export const saleChartChart: ApexOptions = {
  colors: [primaryColor, '#FFAE1A'],
  chart: {
    height: 280,
    type: 'area',
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 2,
      left: 1,
      blur: 2,
      color: 'rgba(0, 123, 255, 0.6)',
    },
  },

  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  grid: {
    strokeDashArray: 5,
  },
  annotations: {
    yaxis: [
      {
        y: 5800,
        // borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          // text: '-axis annotation on 8800'
        },
      },
    ],
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--body-font-color)'],
      },
      formatter: function (val: number) {
        return val + 'k'
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        colors: Array(12).fill('var(--body-font-color)'),
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        series: [
          {
            name: 'Revenue',
            data: [1000, 3900, 2500, 7400, 5800, 8000, 4200],
          },
          {
            name: 'Orders',
            data: [3800, 4300, 3400, 3300, 3000, 1800, 5900],
          },
        ],
      },
    },
  ],

  tooltip: {
    x: {
      format: 'dd/MM/YYYY',
      show: true,
    },
  },
}

export const revenueChartSeries: ApexOptions['series'] = [
  {
    name: 'Net Profit',
    data: [80, 45, 70, 100, 87, 90, 80, 87, 85, 100, 100, 75],
  },
  {
    name: 'Revenue',
    data: [40, 55, 35, 50, 61, 45, 50, 20, 50, 85, 50, 100],
  },
]

export const revenueChart: ApexOptions = {
  colors: [primaryColor, '#E6E9EB'],
  chart: {
    type: 'bar',
    height: 120,
    width: 145,
    offsetY: -20,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '77%',
      borderRadius: 1,
      borderRadiusApplication: 'end',
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  legend: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
    // categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  responsive: [
    {
      breakpoint: 1599,
      options: {
        chart: {
          width: 140,
        },
      },
    },
  ],
}

export const totalOrderChartSeries: ApexOptions['series'] = [
  {
    name: 'sale-1',
    data: [16, 28, 45, 43, 32, 44, 35, 30],
  },
  {
    name: 'sale-2',
    data: [22, 32, 42, 20, 35, 42, 25, 45],
  },
]

export const totalOrderChart: ApexOptions = {
  fill: {
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  colors: [primaryColor, primaryColor],
  chart: {
    height: 120,
    type: 'area',
    offsetY: -17,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
    dashArray: [0, 4],
  },
  xaxis: {
    labels: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  responsive: [
    {
      breakpoint: 1499,
      options: {
        chart: {
          width: 140,
        },
      },
    },
  ],
}

export const productCostingData: ProductCostingItem[] = [
  {
    id: 1,
    title: 'Total Sales',
    amount: '₹98,459',
    icon: 'activity',
    bgClass: 'bg-primary-light',
    subtitle: 'We have sale +18.2k this week.',
  },
  {
    id: 2,
    title: 'Total Visitors',
    amount: '54,156',
    icon: 'people',
    bgClass: 'bg-warning-light',
    subtitle: 'We have total +3.5k visitors this week.',
  },
  {
    id: 3,
    title: 'Total Orders',
    amount: '5,125',
    icon: 'task-square',
    bgClass: 'bg-light',
    subtitle: 'We have total +5k orders this week.',
  },
  {
    id: 4,
    title: 'Refunded',
    amount: '₹20,000',
    icon: 'money-recive',
    bgClass: 'bg-danger-light',
    subtitle: 'We got +66k refund this week.',
  },
]

export const saleHistoryData: SaleHistoryItem[] = [
  {
    id: 1,
    title: 'Oxford shirt with rolled sleeve',

    price: '₹1500.14',
    country: 'United States',
    timeAgo: '50 min ago',
  },
  {
    id: 2,
    title: 'Jordans 1 high neck tshirt',
    price: '₹1800.87',
    country: 'Canada',
    timeAgo: '40 min ago',
  },
  {
    id: 3,
    title: 'Graphic Print Men Round Neck Whi...',
    price: '₹2000.84',
    country: 'United States',
    timeAgo: '35 min ago',
  },
  {
    id: 4,
    title: 'Full Sleeve Solid Women Denim Jac...',
    price: '₹1500.14',
    country: 'Australia',
    timeAgo: '50 min ago',
  },
  {
    id: 5,
    title: 'Slim Women Black Jeans',
    price: '₹780.25',
    country: 'UK',
    timeAgo: '28 min ago',
  },
  {
    id: 6,
    title: 'Woven Bollywood Jacquard Saree',
    price: '₹4800.15',
    country: 'India',
    timeAgo: '25 min ago',
  },
]

export const orders: OrderTableItem[] = [
  {
    id: 1,
    productImage: 'dashboard/order-table/1.png',
    productName: 'Winter Jecket',
    productId: '4859578',
    customerName: 'Amit Shah',
    customerEmail: 'amith14@gmail.in',
    amount: 1500.45,
    paymentMethod: 'Google Pay',
    status: 'Delivered',
    statusClass: 'badge-light-primary',
    invoiceIcon: 'fream',
  },
  {
    id: 2,
    productImage: 'dashboard/order-table/2.png',
    productName: 'Casual Trousere',
    productId: '4875566',
    customerName: 'Arlene McCoy',
    customerEmail: 'arlene1@yahhoo.com',
    amount: 785.62,
    paymentMethod: 'Credit Card',
    status: 'Shipped',
    statusClass: 'badge-light-warning',
    invoiceIcon: 'fream',
  },
  {
    id: 3,
    productImage: 'dashboard/order-table/3.png',
    productName: 'Silk Saree',
    productId: '7894561',
    customerName: 'Marvin McKinney',
    customerEmail: 'marvin4@gmail.com',
    amount: 2000.02,
    paymentMethod: 'Debit Card',
    status: 'Processing',
    statusClass: 'badge-light-secondary',
    invoiceIcon: 'fream',
  },
  {
    id: 4,
    productImage: 'dashboard/order-table/4.png',
    productName: 'Men’s Loafers',
    productId: '1234567',
    customerName: 'Annette Black',
    customerEmail: 'black45@gmail.com',
    amount: 1589.25,
    paymentMethod: 'Pay Pal',
    status: 'Cancelled',
    statusClass: 'badge-light-light',
    invoiceIcon: 'fream',
  },
  {
    id: 5,
    productImage: 'dashboard/order-table/5.png',
    productName: 'Leather Jacket',
    productId: '6958742',
    customerName: 'John Smith',
    customerEmail: 'john.smith@GMX.com',
    amount: 1899.99,
    paymentMethod: 'Credit Card',
    status: 'Delivered',
    statusClass: 'badge-light-primary',
    invoiceIcon: 'fream',
  },
  {
    id: 6,
    productImage: 'dashboard/order-table/6.png',
    productName: 'Running Shoes',
    productId: '8475632',
    customerName: 'Emily Davis',
    customerEmail: 'emily.davis@GMX.com',
    amount: 1200.75,
    paymentMethod: 'Google Pay',
    status: 'Shipped',
    statusClass: 'badge-light-warning',
    invoiceIcon: 'fream',
  },
  {
    id: 6,
    productImage: 'dashboard/order-table/7.png',
    productName: 'Denim Jeans',
    productId: '3658741',
    customerName: 'Michael Johnson',
    customerEmail: 'johnson.@GMX.com',
    amount: 999.5,
    paymentMethod: 'Debit Card',
    status: 'Processing',
    statusClass: 'badge-light-secondary',
    invoiceIcon: 'fream',
  },
  {
    id: 7,
    productImage: 'dashboard/order-table/8.png',
    productName: 'Formal Shirt',
    productId: '1258749',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.wilson@GMX.com',
    amount: 799.25,
    paymentMethod: 'PayPal',
    status: 'Cancelled',
    statusClass: 'badge-light-light',
    invoiceIcon: 'fream',
  },
  {
    id: 8,
    productImage: 'dashboard/order-table/9.png',
    productName: 'Summer Hat',
    productId: '4859578',
    customerName: 'Sneha Patel',
    customerEmail: 'sneha.patel@gmail.com',
    amount: 850.99,
    paymentMethod: 'Paytm',
    status: 'Shipped',
    statusClass: 'badge-light-success',
    invoiceIcon: 'fream',
  },
  {
    id: 9,
    productImage: 'dashboard/order-table/3.png',
    productName: 'Woolen Sweater',
    productId: '5647382',
    customerName: 'Marvin McKinney',
    customerEmail: 'albert@example.com',
    amount: 2200.3,
    paymentMethod: 'Cash',
    status: 'Processing',
    statusClass: 'badge-light-info',
    invoiceIcon: 'fream',
  },
]

export const productTableData: ProductRow[] = [
  {
    id: 1,
    image: 'dashboard/order-table/6.png',
    name: 'Formal Shirts',
    gender: 'Men',
    stock: true,
    variants: 3,
    actionIcon: 'more-horizontal',
  },
  {
    id: 2,
    image: 'dashboard/order-table/7.png',
    name: 'Loafers',
    gender: 'Men',
    stock: false,
    variants: 1,
    actionIcon: 'more-horizontal',
  },
  {
    id: 3,
    image: 'dashboard/order-table/8.png',
    name: 'Jeans',
    gender: 'Women',
    stock: true,
    variants: 4,
    actionIcon: 'more-horizontal',
  },
  {
    id: 4,
    image: 'dashboard/order-table/9.png',
    name: 'Saree',
    gender: 'Women',
    stock: true,
    variants: 3,
    actionIcon: 'more-horizontal',
  },
  {
    id: 5,
    image: 'dashboard/order-table/2.png',
    name: 'Smartphone',
    gender: 'Women',
    stock: true,
    variants: 2,
    actionIcon: 'more-horizontal',
  },
  {
    id: 6,
    image: 'dashboard/order-table/2.png',
    name: 'Tablet',
    gender: 'Women',
    stock: false,
    variants: 4,
    actionIcon: 'more-horizontal',
  },
  {
    id: 7,
    image: 'dashboard/order-table/5.png',
    name: 'Smartwatch',
    gender: 'Women',
    stock: true,
    variants: 3,
    actionIcon: 'more-horizontal',
  },
  {
    id: 8,
    image: 'dashboard/order-table/4.png',
    name: 'Laptop',
    gender: 'Women',
    stock: false,
    variants: 2,
    actionIcon: 'more-horizontal',
  },
]
export const topRevenueProductSeries: ApexOptions['series'] = [60000, 10000, 90000, 80000]

export const topRevenueProduct: ApexOptions = {
  chart: {
    height: 280,
    type: 'donut',
  },
  stroke: {
    width: 0,
  },
  labels: ['Women Jeans', 'Women T-shirts', 'Women Shoes', 'Kurtas & Kurti'],
  colors: ['var(--theme-secondary)', '#80b3b3', 'var(--theme-default)', '#FFAE1A'],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 280,
        },
      },
    },
  ],
  legend: {
    show: false,
    offsetY: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '80%',
        labels: {
          show: true,
          name: {
            show: true,
            color: '#dfsda',
            offsetY: 16,
          },
          value: {
            show: true,
            color: undefined,
            offsetY: -25,
            formatter: function (val: number | string): string {
              return `${val}` // convert to string
            },
          },
          total: {
            show: true,
            label: 'Total',
            color: '#86909C',

            formatter: function (w: ApexCtx): string {
              const total = w.globals.seriesTotals.reduce(
                (sum: number, v: number | string) => sum + Number(v),
                0
              )

              return total.toString() // <-- required!
            },
          },
        },
      },
    },
  },
}

export const widgets: ProductWidget[] = [
  {
    title: 'Add New Product',
    description: 'Images are crucial showcasing',
    mainIcon: 'box-add',
    secondaryIcon: 'arrow-down',
    bgClass: 'bg-light-primary',
  },
  {
    title: 'Add Discount',
    description: 'The product images to the platform',
    mainIcon: 'receipt-disscount',
    secondaryIcon: 'arrow-down',
    bgClass: 'bg-light-primary',
  },
]
