import { ActivityLog, ActivityMessage } from '@/types/dashboard/ecommerce'
import { Client, ProjectCard, TodayWork, Widgets } from '@/types/dashboard/project'
import { ApexOptions } from 'apexcharts'

export const topProjectWidgets: Widgets[] = [
  {
    title: 'Total Project',
    number: 1523,
    class1: ' total-project border-b-primary border-2',
    class2: 'primary',
    icon: 'color-swatch',
  },
  {
    title: 'In Progress',
    number: 836,
    class1: 'total-Progress border-b-warning border-2',
    class2: 'warning',
    icon: 'tick-circle',
  },
  {
    title: 'Complete',
    number: 475,
    class1: ' total-Complete border-b-secondary border-2',
    class2: 'secondary',
    icon: 'add-square',
  },
  {
    title: 'Upcoming',
    number: 189,
    class1: 'total-upcoming',
    class2: 'light',
    icon: 'edit-2',
  },
]

export const projectStatisticsSeries: ApexOptions['series'] = [
  {
    name: 'Web App Design',
    data: [85, 85, 152, 95, 50, 95, 130],
  },
  {
    name: 'Website Design',
    data: [190, 135, 220, 160, 65, 160, 185],
  },
  {
    name: 'App Design',
    data: [245, 165, 260, 230, 110, 170, 245],
  },
]
export const projectStatistics: ApexOptions = {
  colors: ['var(--theme-default)', '#80B3B3', '#CCE0E0'],
  chart: {
    type: 'bar',
    height: 412,
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
      horizontal: false,
      borderRadius: 6,
      columnWidth: '20%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    position: 'bottom',
    offsetY: 5,
  },
  fill: {
    opacity: 1,
  },
}
export const todayWorkList: TodayWork[] = [
  {
    task: 'App Design',
    title: 'NFT Illustration...',
    assignedLabel: 'Assigned to',
    assignedTo: 'Cody Fisher',
    daysLeftLabel: 'Days Left',
    daysLeft: '02',
    badgeClass: 'badge-light-primary',
    priority: 'High',
  },
  {
    task: 'Web Application',
    title: 'Education Platform',
    assignedLabel: 'Assigned to',
    assignedTo: 'Arlene McCoy',
    daysLeftLabel: 'Days Left',
    daysLeft: '10',
    badgeClass: 'badge-light-warning',
    priority: 'Medium',
  },
  {
    task: 'Web Design',
    title: 'Appron’s 3D Co...',
    assignedLabel: 'Assigned to',
    assignedTo: 'Kristin Watson',
    daysLeftLabel: 'Days Left',
    daysLeft: '12',
    badgeClass: 'badge-light-warning',
    priority: 'Medium',
  },
  {
    task: 'Desktop App',
    title: 'Rental Car',
    assignedLabel: 'Assigned to',
    assignedTo: 'Darlene Robertson',
    daysLeftLabel: 'Days Left',
    daysLeft: '05',
    badgeClass: 'badge-light-secondary',
    priority: 'Low',
  },
  {
    task: 'Template Design',
    title: 'E-commerce',
    assignedLabel: 'Assigned to',
    assignedTo: 'Wade Warren',
    daysLeftLabel: 'Days Left',
    daysLeft: '31',
    badgeClass: 'badge-light-primary',
    priority: 'High',
  },
  {
    task: 'App Design',
    title: 'Food Delivery',
    assignedLabel: 'Assigned to',
    assignedTo: 'Smith John',
    daysLeftLabel: 'Days Left',
    daysLeft: '20',
    badgeClass: 'badge-light-warning',
    priority: 'Medium',
  },
]

export const projectCards: ProjectCard[] = [
  {
    id: 1,
    colClass: 'col-xl-4 col-md-6 box-col-6',
    title: 'Net Banking App',
    client: 'Jordan',
    image: 'dashboard-2/category/1.png',
    daysLeft: 7,
    startDate: '10 Oct, 2025',
    endDate: '15 Nov, 2025',
    progress: 50,
    users: ['user/18.png', 'user/15.png', 'user/19.png', 'user/17.png'],
    extraUsers: 2,
    comments: 18,
    attachments: 2,
    lastMeeting: '2 Nov 23,10:00 AM',
    nextMeeting: '8 Nov 23,09:45 AM',
  },
  {
    id: 2,
    colClass: 'col-xl-4 col-md-6 box-col-6',
    title: 'NFT Website',
    client: 'Albert Flores',
    image: 'dashboard-2/category/2.png',
    daysLeft: 24,
    startDate: '15 Oct, 2025',
    endDate: '01 Dec, 2025',
    progress: 78,
    users: ['user/24.png', 'user/21.png', 'user/23.png', 'user/22.png'],
    extraUsers: 5,
    comments: 18,
    attachments: 2,
    lastMeeting: '2 Nov 23,10:00 AM',
    nextMeeting: '8 Nov 23,09:45 AM',
  },
  {
    id: 3,
    colClass: 'col-xl-4 box-col-none marketing-app-card',
    title: 'Marketing App',
    client: 'Jane Cooper',
    image: 'dashboard-2/category/3.png',
    daysLeft: 31,
    startDate: '01 Nov, 2025',
    endDate: '18 Dec, 2025',
    progress: 35,
    users: ['user/25.png', 'user/26.png', 'user/27.png', 'user/28.png'],
    extraUsers: 8,
    comments: 20,
    attachments: 7,
    lastMeeting: '6 Nov 23,2:56 PM',
    nextMeeting: '10 Nov 23,7:12 AM',
  },
]

export const projectTable = [
  {
    id: 1,
    series: [66],
    option: {
      chart: {
        height: 100,
        type: 'radialBar',
        offsetX: -10,
        offsetY: -15,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          track: {
            background: 'var(--theme-default)',
            opacity: 0.2,
          },
          dataLabels: {
            value: {
              color: 'var(--tag-text-color--edit)',
              fontSize: '10px',
              show: true,
              offsetY: -12,
            },
          },
        },
      },
      colors: ['var(--theme-default)'],
      stroke: {
        lineCap: 'round',
      },
    },

    name: 'Pet App Design',
    clientName: 'Darrell Steward',
    clientId: 'darrells@example.com',
    time: '8 Days Left',
    endDate: '15 Nov, 2023',
    assignedTo: 'Team Roha',
    member: '12 Member',
    status: 'Active',
    class: 'primary',
    isActive: false,
    message: 12,
    chat: 5,
  },
  {
    id: 2,
    series: [86],
    option: {
      chart: {
        height: 100,
        type: 'radialBar',
        offsetX: -10,
        offsetY: -15,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          track: {
            background: 'var(--theme-deafult)',
            opacity: 0.2,
          },
          dataLabels: {
            value: {
              color: 'var(--tag-text-color--edit)',
              fontSize: '10px',
              show: true,
              offsetY: -12,
            },
          },
        },
      },
      colors: ['var(--theme-default)'],
      stroke: {
        lineCap: 'round',
      },
    },

    name: 'Chain Desktop App',
    clientName: 'Eleanor Pena',
    clientId: 'pena12@example.com',
    time: '13 Days Left',
    endDate: '20 Nov, 2023',
    assignedTo: 'Team Suresh',
    member: '10 Member',
    status: 'On Hold',
    class: 'warning',
    isActive: false,
    message: 12,
    chat: 9,
  },
  {
    id: 3,
    series: [74],
    option: {
      chart: {
        height: 100,
        type: 'radialBar',
        offsetX: -10,
        offsetY: -15,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          track: {
            background: 'var(--theme-deafult)',
            opacity: 0.2,
          },
          dataLabels: {
            value: {
              color: 'var(--tag-text-color--edit)',
              fontSize: '10px',
              show: true,
              offsetY: -12,
            },
          },
        },
      },
      colors: ['var(--theme-default)'],
      stroke: {
        lineCap: 'round',
      },
    },
    name: 'Business Web Design',
    clientName: 'Robert Fox',
    clientId: 'foxxxx8s@example.com',
    time: '15 Days Left',
    endDate: '22 Nov, 2023',
    assignedTo: 'Team Liza',
    member: '7 Member',
    status: 'Pending',
    class: 'secondary',
    isActive: false,
    message: 50,
    chat: 2,
  },
  {
    id: 4,
    series: [86],
    option: {
      chart: {
        height: 100,
        type: 'radialBar',
        offsetX: -10,
        offsetY: -15,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          track: {
            background: 'var(--theme-deafult)',
            opacity: 0.2,
          },
          dataLabels: {
            value: {
              color: 'var(--tag-text-color--edit)',
              fontSize: '10px',
              show: true,
              offsetY: -12,
            },
          },
        },
      },
      colors: ['var(--theme-default)'],
      stroke: {
        lineCap: 'round',
      },
    },
    name: 'NFT App Design',
    clientName: 'Arlene McCoy',
    clientId: 'arlene78@example.com',
    time: '21 Days Left',
    endDate: '28 Nov, 2023',
    assignedTo: 'Team Sulekha',
    member: '9 Member',
    status: 'Active',
    class: 'primary',
    isActive: false,
    message: 50,
    chat: 3,
  },
  {
    id: 5,
    series: [89],
    option: {
      chart: {
        height: 100,
        type: 'radialBar',
        offsetX: -10,
        offsetY: -15,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          track: {
            background: 'var(--theme-deafult)',
            opacity: 0.2,
          },
          dataLabels: {
            value: {
              color: 'var(--tag-text-color--edit)',
              fontSize: '10px',
              show: true,
              offsetY: -12,
            },
          },
        },
      },
      colors: ['var(--theme-default)'],
      stroke: {
        lineCap: 'round',
      },
    },
    name: 'Digital Avtar Web Design',
    clientName: 'Courtney Henry',
    clientId: 'henry45@example.com',
    time: '25 Days Left',
    endDate: '2 Dec, 2023',
    assignedTo: 'Team Shreena',
    member: '12 Member',
    status: 'Active',
    class: 'primary',
    isActive: false,
    message: 50,
    chat: 12,
  },
]

export const clients: Client[] = [
  {
    id: 1,
    name: 'Jenny Bell',
    country: 'India',
    email: 'jennybell@gmail.com',
    phone: '+84 342 556 555',
    avatar: 'user/29.png',
    statusColor: 'bg-warning',
  },
  {
    id: 2,
    name: 'Albert Flores',
    country: 'UK',
    email: 'albert78@gmail.com',
    phone: '+77 445 551 629',
    avatar: 'user/30.png',
    statusColor: 'bg-warning',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    country: 'London',
    email: 'jane145@gmail.com',
    phone: '+56 955 510 831',
    avatar: 'user/33.png',
    statusColor: 'bg-warning',
  },
  {
    id: 4,
    name: 'Devon Lane',
    country: 'America',
    email: 'devom796@gmail.com',
    phone: '+56 955 570 095',
    avatar: 'user/31.png',
  },
  {
    id: 5,
    name: 'Cody Fisher',
    country: 'Canada',
    email: 'cody7895@gmail.com',
    phone: '+226 795 552 31',
    avatar: 'user/32.png',
  },
]

export const activityLogs: ActivityLog[] = [
  {
    id: 1,
    name: 'Jenny Wilson',
    time: 'Today 10:45 AM',
    actionLabel: 'Commented on :',
    actionTo: 'NFT App',
    message: 'This smithe design looks great!! but this page as I mention below.',
    username: '',
    image: 'user/26.png',
  },
  {
    id: 2,
    name: 'Darlene Robertson',
    time: 'Today 10:43 AM',
    actionLabel: 'Shared File to :',
    actionTo: 'Barkha',
    message: 'Food Delivery App figma & Ai file shared as .zip file.',
    username: '',
    image: 'user/34.png',
  },
  {
    id: 3,
    name: 'Seema Joshi',
    time: 'Today 10:42 AM',
    actionLabel: 'Meeting :',
    actionTo: 'Eva Website',
    message: 'You can send the AI file as an attachment and share a download link.',
    username: '@barkha_singh',
    image: 'user/35.png',
  },
  {
    id: 4,
    name: 'Elara Winter',
    time: 'Today 06:45 AM',
    actionLabel: 'Meeting :',
    actionTo: 'Eva Website',
    message: 'Meeting about next page design of eva website.',
    username: '',
    image: 'user/44.png',
  },
  {
    id: 5,
    name: 'Arya Shwanno',
    time: 'Today 05:51 AM',
    actionLabel: 'Add new screen :',
    actionTo: 'Pet App',
    message: 'Make sure your AI file is in cloud storage like Google Drive or Dropbox.',
    username: '',
    image: 'user/38.png',
  },
]

export const messages: ActivityMessage[] = [
  {
    id: 1,
    image: 'user/39.png',
    status: 'bg-warning',
    name: 'Maren Ross',
    message: 'Hey, What’s today update ?',
  },
  {
    id: 2,
    image: 'user/40.png',
    status: 'bg-undefined',
    name: 'Brooklyn Simmons',
    message: 'I know it will work.',
  },
  {
    id: 3,
    image: 'user/41.png',
    status: 'bg-warning',
    name: 'Floyd Miles',
    message: 'Sir, Can remove part in des...',
  },
  {
    id: 4,
    image: 'user/42.png',
    status: 'bg-undefined',
    name: 'Dianne Russell',
    message: 'So, what is my next work ?',
  },
  {
    id: 5,
    image: 'user/43.png',
    status: 'bg-warning',
    name: 'Darlene Robertson',
    message: 'Can we add that here ?',
  },
  {
    id: 6,
    image: 'user/44.png',
    status: 'bg-undefined',
    name: 'Jenny Wilson',
    message: 'Hey, What’s today update ?',
  },
  {
    id: 7,
    image: 'user/45.png',
    status: 'bg-warning',
    name: 'Ralph Edwards',
    message: 'ok, send it.',
  },
  {
    id: 8,
    image: 'user/15.png',
    status: 'bg-warning',
    name: 'Ronald Richards',
    message: 'Thank you !!!',
  },
  {
    id: 9,
    image: 'user/47.png',
    status: 'bg-undefined',
    name: 'Courtney Henry',
    message: 'No, you’ve to do one more variant.',
  },
]
