export const chart1 = {
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6],
    ],
  },
  options: {
    fullWidth: true,
    chartPadding: {
      right: 40,
    },
  },
}

export const chart2 = {
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [
      [1, 5, 2, 5, 4, 3],
      [2, 3, 4, 8, 1, 2],
      [5, 4, 3, 2, 1, 0.5],
    ],
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
  },
}

export const chart3 = {
  data: {
    abels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
    ],
  },
  options: {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false,
    },
  },
}

export const chart4 = {
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]],
  },
  options: {
    low: 0,
    showArea: true,
  },
}

export const chart5 = {
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [
      [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
      [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
      [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
      [
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: undefined },
        { x: 6, y: 4 },
        { x: 7, y: null },
        { x: 8, y: 4 },
        { x: 9, y: 4 },
      ],
    ],
  },
  options: {
    fullWidth: true,
    chartPadding: {
      right: 10,
    },
    fillHoles: true,
    low: 0,
  },
}

export const chart6 = {
  data: {
    series: [50, 20, 40, 10, 30, 40],
    labels: [1, 2, 3, 4, 5, 6, 7],
  },
  options: {
    donut: true,
    showLabel: false,
  },
}

export const chart7 = {
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
    series: [
      [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
      [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
      [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
    ],
  },
  options: {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function (value: number) {
        return value / 1000 + 'k'
      },
    },
  },
}

export const chart8 = {
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
    ],
  },
  options: {
    low: 0,
    showArea: false,
    fullWidth: true,
  },
}
export const chart9 = {
  data: {
    labels: [
      '2010-11',
      '2011-12',
      '2012-13',
      '2013-13',
      '2014-15',
      '2015-16',
      '2016-17',
      '2017-18',
    ],
    series: [
      [0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9],
      [6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9],
      [4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3],
      [3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9],
    ],
  },
  options: {
    seriesBarDistance: 15,
    horizontalBars: false,
    axisY: {
      offset: 20,
    },
  },
  responsiveOptions: [
    [
      'screen and (min-width: 1200px) and (max-width: 1366px)',
      {
        seriesBarDistance: 10,
      },
    ],
    [
      'screen and (max-width: 767px)',
      {
        seriesBarDistance: 10,
      },
    ],
    [
      'screen and (max-width: 480px)',
      {
        stackBars: true,
        seriesBarDistance: 6,
      },
    ],
  ],
}

export const chart10 = {
  data: {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
  },
  options: {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value: string, index: number) {
        return index % 2 === 0 ? value : null
      },
    },
  },
}

export const chart11 = {
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4],
    ],
  },
  options: {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70,
    },
  },
}

export const chart12 = {
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [
      [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
      [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
      [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
      [
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: undefined },
        { x: 6, y: 4 },
        { x: 7, y: null },
        { x: 8, y: 4 },
        { x: 9, y: 4 },
      ],
    ],
  },
  options: {
    fullWidth: true,
    chartPadding: {
      right: 10,
    },
    low: 0,
  },
}
