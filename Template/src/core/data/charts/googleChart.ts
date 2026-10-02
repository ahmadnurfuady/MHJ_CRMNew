import { primaryColor, secondaryColor } from '../common'

//Area Chart 1
export const areaChart1 = {
  chartType: 'AreaChart',
  dataTable: [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ],
  options: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0, ticks: [0, 300, 600, 900, 1200] },
    width: '100%',
    height: 400,
    colors: [primaryColor, secondaryColor],
  },
}

//Area Chart 2
export const areaChart2 = {
  chartType: 'AreaChart',
  dataTable: [
    ['Year', 'Cars', 'Trucks', 'Drones', 'Segways'],
    ['2013', 100, 400, 2000, 400],
    ['2014', 500, 700, 530, 800],
    ['2015', 2000, 1000, 620, 120],
    ['2016', 120, 201, 2501, 540],
  ],
  options: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0, ticks: [0, 750, 1500, 2250, 3000] },
    width: '100%',
    height: 400,
    colors: [primaryColor, secondaryColor, '#05933f', '#FFAE1A'],
  },
}

//Column Chart 1
export const columnChart1 = {
  chartType: 'ColumnChart',
  dataTable: [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2018', 1e3, 400, 250],
    ['2019', 1170, 460, 300],
    ['2020', 660, 1120, 400],
    ['2021', 1030, 540, 450],
  ],
  options: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    bars: 'vertical',
    vAxis: {
      format: 'decimal',
    },
    height: 400,
    width: '100%',
    colors: [primaryColor, secondaryColor, '#51bb25'],
  },
}

// Column Chart 2
export const columnChart2 = {
  chartType: 'BarChart',
  dataTable: [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2018', 1e3, 400, 250],
    ['2019', 1170, 460, 300],
    ['2020', 660, 1120, 400],
    ['2021', 1030, 540, 450],
  ],
  options: {
    title: 'Company Performance',
    chart: {
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'horizontal',
    vAxis: {
      format: 'decimal',
    },
    height: 400,
    width: '100%',
    colors: [primaryColor, secondaryColor, '#51bb25'],
  },
}

// Gantt Chart
function daysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000
}

export const ganttChartDataTable = [
  [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ],
  ['Research', 'Find sources', null, new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
  [
    'Write',
    'Write paper',
    'write',
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    'Research,Outline',
  ],
  [
    'Cite',
    'Create bibliography',
    'write',
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    'Research',
  ],
  [
    'Complete',
    'Hand in paper',
    'complete',
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    'Cite,Write',
  ],
  [
    'Outline',
    'Outline paper',
    'write',
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    'Research',
  ],
]

export const ganttChartOptions = {
  height: 275,
  gantt: {
    criticalPathEnabled: false,
    arrow: {
      angle: 100,
      width: 5,
      color: '#05933f',
      radius: 0,
    },
    palette: [
      {
        color: primaryColor,
        dark: secondaryColor,
        light: '#047afb',
      },
    ],
  },
}

export const ganttChartSettings = {
  packages: ['gantt'], // required
}

// Line Chart
export const lineChart = {
  chartType: 'LineChart',
  dataTable: [
    ['Month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 10.5, 32.4],
    [3, 40.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 20, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
  ],
  options: {
    title: 'Box Office Earnings in First Two Weeks of Opening',
    chart: {
      subtitle: 'in millions of dollars (USD)',
    },
    vAxis: { ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90] },
    colors: [primaryColor, secondaryColor, '#51bb25'],
    height: 500,
    width: '100%',
  },
}

// Combo Chart
export const comboChart = {
  chartType: 'ComboChart',
  dataTable: [
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6],
  ],
  options: {
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    height: 500,
    width: '100%',
    colors: [primaryColor, secondaryColor, '#51bb25', '#a927f9', '#f8d62b'],
  },
}

// Bar Chart
export const barChart = {
  chartType: 'BarChart',
  dataTable: [
    [
      'Element',
      'Density',
      {
        role: 'style',
      },
    ],
    ['Copper', 10, '#a927f9'],
    ['Silver', 12, '#FFAE1A'],
    ['Gold', 14, '#FE6A49'],
    ['Platinum', 16, 'color: #006666'],
  ],
  options: {
    title: 'Density of Precious Metals, in g/cm^3',
    width: '100%',
    height: 400,
    bar: {
      groupWidth: '95%',
    },
    legend: {
      position: 'none',
    },
  },
}

// Word Tree Chart
export const wordTreeChart = {
  chartType: 'WordTree',
  dataTable: [
    ['Phrases'],
    ['cats are better than dogs'],
    ['cats eat kibble'],
    ['cats are better than hamsters'],
    ['cats are awesome'],
    ['cats are people too'],
    ['cats eat mice'],
    ['cats meowing'],
    ['cats in the cradle'],
    ['cats eat mice'],
    ['cats in the cradle lyrics'],
    ['cats eat kibble'],
    ['cats for adoption'],
    ['cats are family'],
    ['cats eat mice'],
    ['cats are better than kittens'],
    ['cats are evil'],
    ['cats are weird'],
    ['cats eat mice'],
  ],
  options: {
    height: 400,
    wordtree: {
      format: 'implicit',
      word: 'cats',
    },
  },
  settings: { packages: ['wordtree'] },
}

// Pie Chart 1
export const pieChart1 = {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work', 5],
    ['Eat', 10],
    ['Commute', 15],
    ['Watch TV', 20],
    ['Sleep', 25],
  ],
  options: {
    title: 'My Daily Activities',
    width: '100%',
    height: 300,
    colors: ['#ffb829', '#05933f', '#a927f9', secondaryColor, primaryColor],
  },
}

// Pie Chart 2
export const pieChart2 = {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work', 2],
    ['Eat', 2],
    ['Commute', 11],
    ['Watch TV', 2],
    ['Sleep', 7],
  ],
  options: {
    title: 'My Daily Activities',
    pieHole: 0.4,
    width: '100%',
    height: 300,
    colors: ['#ffb829', '#a927f9', '#05933f', secondaryColor, primaryColor],
  },
}

// Pie Chart 3
export const pieChart3 = {
  chartType: 'PieChart',
  dataTable: [
    ['Language', 'Speakers (in millions)'],
    ['Assamese', 13],
    ['Bengali', 83],
    ['Bodo', 1.4],
    ['Dogri', 2.3],
    ['Gujarati', 46],
    ['Hindi', 300],
    ['Kannada', 38],
    ['Kashmiri', 5.5],
    ['Konkani', 5],
    ['Maithili', 20],
    ['Malayalam', 33],
    ['Manipuri', 1.5],
    ['Marathi', 72],
    ['Nepali', 2.9],
    ['Oriya', 33],
    ['Punjabi', 29],
    ['Sanskrit', 0.01],
    ['Santhali', 6.5],
    ['Sindhi', 2.5],
    ['Tamil', 61],
    ['Telugu', 74],
    ['Urdu', 52],
  ],
  options: {
    title: 'Indian Language Use',
    legend: 'none',
    width: '100%',
    height: 300,
    pieSliceText: 'label',
    slices: { 4: { offset: 0.2 }, 12: { offset: 0.3 }, 14: { offset: 0.4 }, 15: { offset: 0.5 } },
    colors: [
      '#d86f13',
      primaryColor,
      secondaryColor,
      '#05933f',
      '#a927f9',
      '#ffb829',
      '#d86f13',
      primaryColor,
      '#ffb829',
      '#05933f',
      primaryColor,
      secondaryColor,
      '#05933f',
      primaryColor,
      '#a927f9',
      '#ffb829',
      primaryColor,
      primaryColor,
      '#a927f9',
      secondaryColor,
      primaryColor,
      '#05933f',
    ],
  },
}

// Pie Chart 4
export const pieChart4 = {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work', 5],
    ['Eat', 10],
    ['Commute', 15],
    ['Watch TV', 20],
    ['Sleep', 25],
  ],
  options: {
    title: 'My Daily Activities',
    is3D: true,
    width: '100%',
    height: 300,
    colors: ['#ffb829', '#a927f9', '#05933f', secondaryColor, primaryColor],
  },
}
