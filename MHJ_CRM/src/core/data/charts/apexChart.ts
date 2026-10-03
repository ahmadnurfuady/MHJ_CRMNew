import { ApexOptions } from 'apexcharts'

import { primaryColor, secondaryColor } from '../common'

import { chartDate, monthDataSeries } from '@/core/data/chartData'

export const basicAreaSeries: ApexOptions['series'] = [
  {
    name: 'STOCK ABC',
    data: monthDataSeries[0].prices,
  },
]

export const areaSpalinesSeries: ApexOptions['series'] = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]

export const barChartSeries: ApexOptions['series'] = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
]

export const columnChartSeries: ApexOptions['series'] = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
]

export const bubbleChartSeries: ApexOptions['series'] = [
  {
    name: 'Product1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
  {
    name: 'Product2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
  {
    name: 'Product3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
  {
    name: 'Product4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60,
    }),
  },
]

export const stepLineChartSeries: ApexOptions['series'] = [
  {
    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
  },
]
export const annotationChartSeries: ApexOptions['series'] = [
  {
    data: monthDataSeries[0].prices,
  },
]

export const pieChartSeries: ApexOptions['series'] = [44, 55, 13, 43, 22]
export const donutChartSeries: ApexOptions['series'] = [44, 55, 41, 17, 15]

export const mixChartSeriesSeries: ApexOptions['series'] = [
  {
    name: 'Column',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    name: 'Area',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  },
  {
    name: 'Line',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
]

export const candleStickSeries: ApexOptions['series'] = [
  {
    data: chartDate,
  },
]

export const radarChartSeries: ApexOptions['series'] = [
  {
    name: 'Series 1',
    data: [20, 100, 40, 30, 50, 80, 33],
  },
]
export const radialBarChartSeries: ApexOptions['series'] = [44, 55, 67, 83]

export const basicAreaChart: ApexOptions = {
  chart: {
    height: 350,
    type: 'area',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: 'Fundamental Analysis of Stocks',
    align: 'left',
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left',
  },
  labels: [
    '13 Nov 2017',
    '14 Nov 2017',
    '15 Nov 2017',
    '16 Nov 2017',
    '17 Nov 2017',
    '20 Nov 2017',
    '21 Nov 2017',
    '22 Nov 2017',
    '23 Nov 2017',
    '24 Nov 2017',
    '27 Nov 2017',
    '28 Nov 2017',
    '29 Nov 2017',
    '30 Nov 2017',
    '01 Dec 2017',
    '04 Dec 2017',
    '05 Dec 2017',
    '06 Dec 2017',
    '07 Dec 2017',
    '08 Dec 2017',
  ],
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: true,
    min: 7800,
    max: 9600,
    tickAmount: 6,
  },
  legend: {
    horizontalAlign: 'left',
  },
  colors: [primaryColor],
}

export const areaSpalineChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    min: 0,
    max: 120,
    tickAmount: 4,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00',
      '2018-09-19T01:30:00',
      '2018-09-19T02:30:00',
      '2018-09-19T03:30:00',
      '2018-09-19T04:30:00',
      '2018-09-19T05:30:00',
      '2018-09-19T06:30:00',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  colors: [primaryColor, secondaryColor],
}

export const barChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    min: 0,
    max: 1500,
    tickAmount: 5,
    categories: [
      'South Korea',
      'Canada',
      'United Kingdom',
      'Netherlands',
      'Italy',
      'France',
      'Japan',
      'United States',
      'China',
      'Germany',
    ],
  },
  colors: [primaryColor],
}

export const columnChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6, // rounds corners
      columnWidth: '55%',
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
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    min: 0,
    max: 120,
    tickAmount: 4,
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val: number) => `$ ${val} thousands`,
    },
  },
  colors: [primaryColor, secondaryColor, '#84D7EB'],
}

export const bubbleChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'bubble',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },

  fill: {
    type: 'gradient',
  },
  title: {
    text: '3D Bubble Chart',
  },
  xaxis: {
    tickAmount: 12,
    type: 'datetime',

    labels: {
      rotate: 0,
    },
  },
  yaxis: {
    tickAmount: 10,
    max: 70,
  },
  theme: {
    palette: 'palette2',
  },
  stroke: {
    width: 0,
  },
  colors: [primaryColor, secondaryColor, '#84D7EB', '#FFC38D'],
}

export const stepLineChartOptions: ApexOptions = {
  chart: {
    type: 'line',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: 'Stepline Chart',
    align: 'left',
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: [primaryColor],
}

export const annotationChartOptions: ApexOptions = {
  annotations: {
    yaxis: [
      {
        y: 8200,
        borderColor: '#C06240',
        label: {
          borderColor: '#C06240',
          style: {
            color: '#fff',
            background: '#C06240',
          },
          text: 'Support',
        },
      },
      {
        y: 8600,
        y2: 9000,
        borderColor: '#000',
        fillColor: '#FEB019',
        opacity: 0.2,
        label: {
          borderColor: '#333',
          style: {
            fontSize: '10px',
            color: '#333',
            background: '#FEB019',
          },
          text: 'Y-axis range',
        },
      },
    ],
    xaxis: [
      {
        x: new Date('23 Nov 2017').getTime(),
        strokeDashArray: 0,
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Anno Test',
        },
      },
      {
        x: new Date('26 Nov 2017').getTime(),
        x2: new Date('28 Nov 2017').getTime(),
        fillColor: '#BAE6FD',
        opacity: 0.4,
        label: {
          borderColor: '#BAE6FD',
          style: {
            fontSize: '10px',
            color: '#fff',
            background: '#C06240',
          },
          offsetY: -10,
          text: 'X-axis range',
        },
      },
    ],
    points: [
      {
        x: new Date('01 Dec 2017').getTime(),
        y: 8607.55,
        marker: {
          size: 8,
          fillColor: '#fff',
          strokeColor: 'red',
          strokeWidth: 2,
          cssClass: 'apexcharts-custom-class',
        },
        label: {
          borderColor: '#FF4560',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#FF4560',
          },

          text: 'Point Annotation',
        },
      },
    ],
  },
  chart: {
    height: 350,
    type: 'line',
    id: 'areachart-2',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    padding: {
      right: 30,
      left: 20,
    },
  },
  title: {
    text: 'Line with Annotations',
    align: 'left',
  },
  labels: monthDataSeries[0].dates,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 7800,
    max: 9600,
    tickAmount: 6,
  },
  colors: [primaryColor],
}
export const pieChartOptions: ApexOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  colors: [primaryColor, secondaryColor, '#0284C7', '#a927f9', '#F59E0B'],
}
export const donutChartOptions: ApexOptions = {
  chart: {
    width: 380,
    type: 'donut',
  },
  colors: ['#d86f13', '#F59E0B', primaryColor, '#0284C7', '#a927f9'],
}

export const mixChartOption: ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    '01/01/2003',
    '02/01/2003',
    '03/01/2003',
    '04/01/2003',
    '05/01/2003',
    '06/01/2003',
    '07/01/2003',
    '08/01/2003',
    '09/01/2003',
    '10/01/2003',
    '11/01/2003',
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0,
    max: 70,
    tickAmount: 10,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: number) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' views'
        }
        return y
      },
    },
  },
  legend: {
    labels: {
      useSeriesColors: true,
    },
  },
  colors: [secondaryColor, '#479447', primaryColor],
}
export const candleStickOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'candlestick',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: primaryColor,
        downward: secondaryColor,
      },
    },
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left',
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  colors: ['#000000'],
}

export const radarChartOptions: ApexOptions = {
  chart: {
    height: 315,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        strokeColors: '#e9e9e9',
        fill: {
          colors: ['#f8f8f8', '#fff'],
        },
      },
    },
  },
  title: {
    text: 'Radar with Polygon Fill',
  },
  colors: ['#FF4560'],
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeColors: '#FF4560',
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val.toString()
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val: number, opts?: { seriesIndex: number; dataPointIndex: number }) {
        return typeof opts === 'object' && opts.dataPointIndex % 2 === 0 ? val.toString() : ''
      },
    },
  },
}

export const radialBarChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function () {
            return '249'
          },
        },
      },
    },
  },
  series: [44, 55, 67, 83],
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 250,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                offsetY: -1,
              },
              value: {
                offsetY: 4,
              },
              barLabels: {
                enabled: true,
                useSeriesColors: false,
                fontSize: '12px',
                formatter: function (seriesName: string, opts?: { seriesIndex: number; w: { globals: { series: number[] } } }) {
                  return (
                    seriesName + ':  ' + (opts?.w?.globals?.series?.[opts?.seriesIndex] ?? '')
                  )
                },
              },
            },
          },
        },
      },
    },
  ],
  colors: [secondaryColor, '#0284C7', '#ffb829', primaryColor],
}

export function generateData(baseval: number, count: number, yrange: { min: number; max: number }) {
  let i = 0
  const series = []
  while (i < count) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15
    series.push([baseval, y, z])
    baseval += 86400000
    i++
  }
  return series
}
