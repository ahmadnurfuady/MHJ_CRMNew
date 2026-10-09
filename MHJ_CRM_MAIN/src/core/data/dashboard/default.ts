import {
  ActivityItem,
  DeliveryPercentage,
  LatestTransactionItem,
  NewUserItem,
  TopProduct,
} from '@/types/dashboard/default'
import { ApexOptions } from 'apexcharts'

export const revenueGrowthChartSeries: ApexOptions['series'] = [
  {
    name: 'Online Sale',
    data: [100, 155, 175, 160, 200, 200, 250, 130, 145, 250, 150, 250],
  },
  {
    name: 'Marketing Sale',
    data: [45, 75, 85, 45, 145, 90, 45, 110, 65, 35, 105, 105],
  },
]

export const revenueGrowthChart: ApexOptions = {
  colors: ['var(--theme-default)', '#FFAE1A'],
  chart: {
    type: 'area',
    height: 315,
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
  },
  fill: {
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: 'var(--theme-default)',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: '#FFAE1A',
        size: 3,
        shape: 'circle',
      },
    ],
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'stepline',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
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
        colors: [
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
        ],
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--body-font-color)'],
      },
      formatter: (value) => {
        return `${value}$`
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        '<span>' +
        '<span class="bg-primary">' +
        '</span>' +
        'Marketing Sale' +
        '<h3>' +
        '$' +
        series[seriesIndex][dataPointIndex] +
        '<h3/>' +
        '</span>' +
        '</div>'
      )
    },
  },
  responsive: [
    {
      breakpoint: 425,
      options: {
        series: [
          {
            name: 'Online Sale',
            data: [100, 155, 175, 160, 200, 200, 250],
          },
          {
            name: 'Marketing Sale',
            data: [45, 75, 85, 45, 145, 90, 45],
          },
        ],
      },
    },
  ],
}

export const deliveryStats: DeliveryPercentage[] = [
  {
    id: 1,
    title: 'On Time Delivery',
    percentage: 80,
    amount: 45452.23,
  },
  {
    id: 2,
    title: 'Delayed Delivery',
    percentage: 15,
    amount: 15256.23,
  },
]

export const topProducts: TopProduct[] = [
  {
    id: 1,
    sku: 'SKU90400',
    image: 'dashboard-3/product/1.png',
    title: 'Huawai Smart Watch',
    price: 39.02,
    qty: 12,
    revenue: 51,
    profit: 15,
  },
  {
    id: 2,
    sku: 'SKU78589',
    image: 'dashboard-3/product/2.png',
    title: 'Noise - Wireless Headphone',
    price: 45.26,
    qty: 19,
    revenue: 8,
    profit: 9,
  },
  {
    id: 3,
    sku: 'SKU78599',
    image: 'dashboard-3/product/3.png',
    title: 'Men & Women Footwear',
    price: 45.62,
    qty: 9,
    revenue: 15,
    profit: 18,
  },
  {
    id: 4,
    sku: 'SKU78596',
    image: 'dashboard-3/product/4.png',
    title: 'Anime White Half Sleev T-shirt',
    price: 589.26,
    qty: 9,
    revenue: 7,
    profit: 42,
  },
]

export const newUsers: NewUserItem[] = [
  {
    id: 1,
    name: 'Smith John',
    country: 'India',
    image: 'user/22.png',
  },
  {
    id: 2,
    name: 'Robert Fox',
    country: 'Afghanistan',
    image: 'user/28.png',
    profileUrl: '/user-profile/2',
  },
  {
    id: 3,
    name: 'Darlene Robtson',
    country: 'Georgia',
    image: 'user/26.png',
  },
  {
    id: 4,
    name: 'Floyd Miles',
    country: 'Pakistan',
    image: 'user/24.png',
  },
  {
    id: 5,
    name: 'Jacob Jones',
    country: 'Monaco',
    image: 'user/49.png',
  },
]

export const activityLogs: ActivityItem[] = [
  {
    id: 1,
    name: 'Floyd Miles',
    time: '5 min ago',
    message: 'Floyd has moved to the warehouse.',
    image: 'user/50.png',
  },
  {
    id: 2,
    name: 'Ralph Edwards',
    time: '6 min ago',
    message: 'Ralph has solved Mr.williams proyek.',
    image: 'user/51.png',
  },
  {
    id: 3,
    name: 'Esther Howard',
    time: '10 min ago',
    message: 'Esther has changed his to active, now.',
    image: 'user/33.png',
  },
  {
    id: 4,
    name: 'Jacob Jones',
    time: '11 min ago',
    message: 'Jacob has make changes in sold it.',
    image: 'user/52.png',
  },
  {
    id: 5,
    name: 'Theresa Webb',
    time: '12 min ago',
    message: 'Theresa has complete old task and new one.',
    image: 'user/53.png',
  },
  {
    id: 6,
    name: 'Annette Black',
    time: '12 min ago',
    message: 'Annette has send all the stock to department.',
    image: 'user/54.png',
  },
]

export const visitsChartSeries: ApexOptions['series'] = [
  {
    name: 'Chrome',
    data: [44, 55, 41, 37, 22, 43, 21],
  },
  {
    name: 'Firefox',
    data: [53, 32, 33, 52, 13, 43, 32],
  },
  {
    name: 'Firefox',
    data: [12, 17, 11, 9, 15, 11, 20],
  },
]
export const visitsChart: ApexOptions = {
  colors: [
    'var(--theme-default)',
    'rgba(var(--app-primary-rgb), 0.6)',
    'rgba(var(--app-primary-rgb), 0.3)',
  ],
  chart: {
    type: 'bar',
    height: 325,
    stacked: true,
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetY: 2,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '28%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },
}

export const latestTransactionItem: LatestTransactionItem[] = [
  {
    id: 1,
    name: 'Darrell Steward',
    date: '16 Nov, 2023',
    amount: '$456.23',
    status: 'Complete',
    class: 'primary',
  },
  {
    id: 2,
    name: 'Floyd Miles',
    date: '22 Jan, 2023',
    amount: '$550.73',
    status: 'Failed',
    class: 'secondary',
  },
  {
    id: 3,
    name: 'Ralph Edwards',
    date: '16 Nov, 2023',
    amount: '$785.26',
    status: 'Complete',
    class: 'primary',
  },
  {
    id: 4,
    name: 'Jerome Bell',
    date: '31 Dec, 2023',
    amount: '$458.14',
    status: 'Failed',
    class: 'secondary',
  },
  {
    id: 5,
    name: 'Theresa Webb',
    date: '16 Feb, 2023',
    amount: '$263.24',
    status: 'Complete',
    class: 'primary',
  },
  {
    id: 6,
    name: 'Courtney Henry',
    date: '01 Nov, 2023',
    amount: '$785.14',
    status: 'Complete',
    class: 'primary',
  },
]

export const EChartOptions = {
  polar: {
    radius: [30, '80%'],
  },
  angleAxis: {
    max: 4,
    startAngle: 90,
  },
  radiusAxis: {
    type: 'category',
  },
  series: {
    type: 'bar',
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}',
    },
    data: [
      { value: 2, itemStyle: { color: '#86909C' } },
      { value: 2.2, itemStyle: { color: '#FF8367' } },
      { value: 2.4, itemStyle: { color: '#FFAE1A' } },
      { value: 3.4, itemStyle: { color: '#006666' } },
    ],
  },
}
