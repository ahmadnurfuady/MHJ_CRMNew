import { ApexOptions } from 'apexcharts'

export interface CommonLineCharts {
  id: number
  title: string
  value: string
  description: string
  increaseValue: string
  chartSeries: ApexOptions['series']
  chartDetails: ChartDetails
}

export interface ChartDetails {
  chart: ApexOptions['chart']
  dataLabels: ApexOptions['dataLabels']
  stroke: ApexOptions['stroke']
  xaxis: ApexOptions['xaxis']
  yaxis: ApexOptions['yaxis']
  grid: ApexOptions['grid']
  fill: ApexOptions['fill']
  colors: string[]
  tooltip: ApexOptions['tooltip']
  responsive: ApexOptions['responsive']
}

export interface CommonLineChartInput {
  categories: string[]
  colors: string
}

export interface OrderStatusChart {
  chartSeries: ApexOptions['series']
  chartDetails: OrderStatusChartDetails
}

export interface OrderStatusChartDetails {
  chart: ApexOptions['chart']
  plotOptions: ApexOptions['plotOptions']
  colors: string[]
  stroke: ApexOptions['stroke']
  fill: ApexOptions['fill']
  title: ApexOptions['title']
  subtitle: ApexOptions['subtitle']
  tooltip: ApexOptions['tooltip']
  xaxis: ApexOptions['xaxis']
  yaxis: ApexOptions['yaxis']
  responsive: ApexOptions['responsive']
}
