import { Chart as ChartJS, registerables } from 'chart.js'

import { primaryColor, secondaryColor } from '../common'

import type { ChartData, ChartOptions } from 'chart.js'

ChartJS.register(...registerables)

// Bar Chart
export const barChart = {
  data: <ChartData<'bar'>>{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [35, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(0, 102, 102,, 0.6)',
        borderColor: primaryColor,
        borderWidth: 2,
      },
      {
        label: 'My Second dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(254, 106, 73, 0.6)',
        borderColor: secondaryColor,
        borderWidth: 2,
      },
    ],
  },
  options: <ChartOptions<'bar'>>{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
}

// Line Graph Data
export const lineChart = {
  data: <ChartData<'line'>>{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        backgroundColor: 'rgba(0, 102, 102, 0.3)',
        borderColor: primaryColor,
        pointBackgroundColor: primaryColor,
        borderWidth: 2,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#000',
        data: [10, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        fill: true,
        backgroundColor: 'rgba(254, 106, 73, 0.6)',
        borderColor: secondaryColor,
        pointBackgroundColor: secondaryColor,
        pointBorderColor: '#fff',
        borderWidth: 2,
        pointHoverBorderColor: '#000',
        pointHoverBackgroundColor: secondaryColor,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  },
  options: <ChartOptions<'line'>>{
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        fill: true,
      },
      point: {
        radius: 4,
        borderWidth: 1,
        hitRadius: 20,
      },
    },
  },
}

// radar graph //
export const radarGraphOptions = {
  data: <ChartData<'radar'>>{
    labels: ['Ford', 'Chevy', 'Toyota', 'Honda', 'Mazda'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(0, 102, 102, 0.4)',
        borderColor: primaryColor,
        pointBackgroundColor: primaryColor,
        pointBorderColor: primaryColor,
        pointHoverBackgroundColor: primaryColor,
        pointHoverBorderColor: 'rgba(0, 102, 102, 0.4)',
        data: [12, 3, 5, 18, 7],
      },
    ],
  },
  options: <ChartOptions<'radar'>>{
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        grid: {
          color: 'rgba(0,0,0,.2)',
          lineWidth: 1,
        },
        angleLines: {
          display: true,
          color: 'rgba(0,0,0,.2)',
          lineWidth: 1,
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        fill: true,
      },
      point: {
        radius: 3,
        borderWidth: 1,
        hitRadius: 20,
      },
    },
  },
}

//line chart //
export const lineChartOptions = {
  data: <ChartData<'line'>>{
    labels: ['', '10', '20', '30', '40', '50', '60', '70', '80'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        fill: true,
        backgroundColor: 'rgba(0, 172, 70, 0.2)',
        borderColor: '#00AC46',
        pointBackgroundColor: '#00AC46',
        borderWidth: 2,
      },
      {
        label: 'Dataset 2',
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        fill: true,
        backgroundColor: 'rgba(254, 106, 73, 0.2)',
        borderColor: secondaryColor,
        pointBackgroundColor: secondaryColor,
        borderWidth: 2,
      },
      {
        label: 'Dataset 3',
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
        fill: true,
        backgroundColor: 'rgba(0, 102, 102, 0.2)',
        borderColor: primaryColor,
        pointBackgroundColor: primaryColor,
        borderWidth: 2,
      },
    ],
  },
  options: <ChartOptions<'line'>>{
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
    responsive: true,
  },
}

// doughnutchart //

export const doughnutChart = {
  data: <ChartData<'doughnut'>>{
    labels: ['Primary', 'Secondary', 'Success'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [primaryColor, secondaryColor, '#00AC46'],
        borderWidth: 1, // optional: you can add this
      },
    ],
  },
  options: <ChartOptions<'doughnut'>>{
    animation: {
      duration: 0, // this disables animation (equivalent to your `animation: false`)
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
}

// polar chart //
export const polarChartLabels: string[] = ['Yellow', 'Sky', 'Black', 'Grey', 'Dark Grey']

export const polarChartLegend = false

export const polarChartOptions: ChartOptions<'polarArea'> = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      grid: {
        circular: true,
      },
      angleLines: {
        display: true,
      },
      pointLabels: {
        display: true,
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: false,
  },
  plugins: {
    legend: {
      display: polarChartLegend,
    },
  },
}

export const polarChartData: ChartData<'polarArea'> = {
  labels: polarChartLabels,
  datasets: [
    {
      label: 'Polar Data',
      data: [300, 50, 100, 40, 120],
      backgroundColor: [primaryColor, '#f8d62b', '#00AC46', '#a927f9', secondaryColor],
      borderColor: '#fff',
      borderWidth: 2,
    },
  ],
}
