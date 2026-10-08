import { ApexOptions } from 'apexcharts'

export interface Images {
  imageUrl: string
}

export interface ProjectDetails {
  projectSummary: ProjectSummary
  projectStatus: ProjectStatus[]
  finance: Finance
  team: Team[]
  attachment: Attachment
  activity: ProjectActivity[]
}

export interface ProjectSummary {
  summary: Summary
  todoList: TodoList[]
  pendingProject: PendingProject[]
  taskOverviewChart: TaskOverViewChart
  recentActivity: RecentActivity
  teamMembers: TeamMembers[]
  comments: Comments[]
}

export interface Summary {
  title: string
  description: string
  sortDescription: string
  creationDate: string
  dueDate: string
  priority: string
  status: string
  resource: Resource
  chartSeries: number[]
  chartDetails: ProjectSummaryChartDetails
}

export interface ProjectSummaryChartDetails {
  chart: ApexOptions['chart']
  plotOptions: ApexOptions['plotOptions']
  colors: string[]
  labels: string[]
  legend: ApexOptions['legend']
  responsive: ApexOptions['responsive']
}

export interface Resource {
  title: string
  fileSize: string
  fileType: string
  file: string
}

export interface TodoList {
  id: number
  title: string
  description: string
}

export interface PendingProject {
  id: number
  projectName: string
  projectHeadName: string
  projectHeadEmail: string
  projectHeadProfile: string
  priority: string
  dueDate: string
  status: string
  color: string
}

export interface TaskOverViewChart {
  title: string
  sortDescription: string
  series: ApexOptions['series']
  chartOptions: TaskOverViewChartOption
}

export interface TaskOverViewChartOption {
  chart: ApexOptions['chart']
  stroke: ApexOptions['stroke']
  xaxis: ApexOptions['xaxis']
  grid: ApexOptions['grid']
  yaxis: ApexOptions['yaxis']
  dataLabels: ApexOptions['dataLabels']
  legend: ApexOptions['legend']
  colors: ApexOptions['colors']
  fill: ApexOptions['fill']
  markers: ApexOptions['markers']
  responsive: ApexOptions['responsive']
}
export interface RecentActivity {
  title: string
  date: string
  activities: Activities[]
}

export interface Activities {
  date: string
  day: string
  activity: Activity[]
}

export interface Activity {
  id: number
  title: string
  customerName: string
  time: string
  createdTime: string
}

export interface TeamMembers {
  id: number
  name: string
  email: string
  image: string
}

export interface Comments {
  id: number
  name: string
  message: string
  image: string
  isReply?: boolean
}

export interface ProjectStatus {
  id: number
  projectTitle: string
  projectDescription: string
  projectBanner?: string
  tag: string
  tagColor: string
  date: string
  attachment: number
  comments: number
  progress: number
  status: string
  developer: Profile[]
}

export interface Profile {
  name: string
  profile?: string
  url?: string
}

export interface Finance {
  expenses: Expenses[]
  budgetDetails: BudgetDetails[]
  budgetDistribution: BudgetDistributionChart
}

export interface Expenses {
  id: number
  title: string
  value: string
  profit: string
  profitType: string
  chartSeries: ApexOptions['series']
  chartDetails: ExpensesChartDetails
}

export interface ExpensesChartDetails {
  chart: ApexOptions['chart']
  grid: ApexOptions['grid']
  colors: ApexOptions['colors']
  stroke?: ApexOptions['stroke']
  tooltip?: ApexOptions['tooltip']
  xaxis: ApexOptions['xaxis']
  fill?: ApexOptions['fill']
  yaxis: ApexOptions['yaxis']
  legend?: ApexOptions['legend']
  responsive: ApexOptions['responsive']
  plotOptions?: ApexOptions['plotOptions']
  dataLabels?: ApexOptions['dataLabels']
  markers?: ApexOptions['markers']
}
export interface BudgetDetails {
  id: number
  type: string
  totalBudget: number
  expenses: number
  remaining: number
}

export interface BudgetDistributionChart {
  series: number[]
  chartOptions: BudgetDistributionChartOption
}

export interface BudgetDistributionChartOption {
  chart: ApexOptions['chart']
  plotOptions?: ApexOptions['plotOptions']
  legend: ApexOptions['legend']
  colors: string[]
  labels: string[]
}

export interface Team {
  id: number
  developerName: string
  position: string
  profile: string
  totalTask: number
  completedTask: number
  revenue: number
  projects: number
  features: number
  color: string
}

export interface Attachment {
  attachmentTypes: AttachmentTypes[]
  attachments: Attachments[]
}

export interface AttachmentTypes {
  id: number
  title: string
  icon: string
  color: string
}

export interface Attachments {
  id: number
  fileName: string
  uploadTime: string
  fileIcon: string
  totalFileSize: number
  uploadSize: number
}

export interface ProjectActivity {
  title: string
  description?: string
  time: string
  addedBy: AddedBy
  color: string
  attachments?: ActivityAttachment[]
  images?: Images[]
  members?: Profile[]
  templates?: ActivityTemplate[]
}

export interface AddedBy {
  name: string
  profile: string
}

export interface ActivityAttachment {
  fileName: string
  fileIcon: string
  fileSize: string
}

export interface ActivityTemplate {
  id: number
  projectName: string
  task: string
  assignTo: Profile[]
  status: string
  color: string
  dueDate: string
}

/** Project dari tabel project di backend. Komentar menunjukkan nama kolom database. */
export interface Projects {
  id: number
  /** project_name */
  projectName: string
  /** description */
  projectDescription: string
  projectBanner: string
  /** created_at, sudah diformat untuk ditampilkan */
  date: string
  progress: number
  /** Slug dari status_name, dipakai untuk tab status di UI */
  status: string
  budget: string
  /** Nilai project/deal dalam angka, bila dikirim oleh backend. */
  projectValue?: number
  /** Berisi leader_name bila tersedia */
  teamMember: Profile[]
  /** deal_id */
  dealId?: number
  /** leader_id */
  leaderId?: number
  /** status_id */
  statusId?: number
  /** address */
  address?: string
  /** kd_kelurahan */
  kdKelurahan?: string
  /** deal_name */
  dealName?: string
  /** leader_name */
  leaderName?: string
  /** status_name */
  statusName?: string
  /** created_by */
  createdBy?: string
}

export interface ProjectCostPerformance {
  title: string
  totalBudget: number
  actualCost: number
  labels: string[]
  chartSeries: number[]
  chartOptions: ProjectCostPerformanceOptions
}

export interface ProjectCostPerformanceOptions {
  chart: ApexOptions['chart']
  grid: ApexOptions['grid']
  colors: string[]
  legend: ApexOptions['legend']
  responsive: ApexOptions['responsive']
  plotOptions?: ApexOptions['plotOptions']
  dataLabels?: ApexOptions['dataLabels']
}

export interface RoleOption {
  id: number
  label?: string
  value?: string
  count?: number
}
