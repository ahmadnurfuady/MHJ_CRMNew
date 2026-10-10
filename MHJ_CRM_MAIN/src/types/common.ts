import { LatestTransactionItem } from './dashboard/default'
import { OrderTableItem, ProductRow } from './dashboard/ecommerce'
import { Category } from './ecommerce'
import { Order, OrderDetailsProduct } from './order'
import { TableProduct, Product } from './product'
import { BudgetDetails, PendingProject, ProjectDetails } from './project'
import { CustomerOrderReport, ProductReports, SalesReport, SalesReturnReport } from './reports'
import { Review } from './review'
import { RecentOrdersItem, TopSellingProduct } from './seller'
import { SupportDB } from './supportTicket'
import {
  BasicTable,
  BreakpointTable,
  Caption,
  CustomTable,
  DashedBorderTable,
  InverseTable,
  InverseTableBackground,
  ResponsiveTable,
  SizingTable,
  StripedRow,
  TableHeadOption,
} from './tables/basicTable'
import { Employee } from './tables/dataTable'
import { Role, Users } from './user'

export interface CardToggleOption {
  id: number
  title: string
}

export interface CardProps {
  cardClass?: string
  cardType?: string
  headerTitle?: string
  headerTopClass?: string
  border?: boolean
  padding?: boolean
  header?: string
  dropdownType?: string
  options?: CardToggleOption[]
  rightSideDetails?: boolean
  headerClass?: string
  sortDescription?: string
  buttonText?: string
  path?: string
  cardBodyClass?: string
  dropdownClass?: string
  headerTopTitle?: boolean
}

export interface Color {
  color: string
}
export interface Profile {
  name?: string
  profile?: string
  url?: string
}

export interface PageSizeOptions {
  title: number
  value: number
  selected?: boolean
}

export interface PaginationProps {
  total: number
  paginate: Pagination
  paginateDetails: boolean
  selectedItems?: number
  selectedRows: boolean
}

export interface TableConfigs<T = TableData> {
  columns: TableColumn[]
  rowAction?: TableRows[]
  data: T[]
}

export interface TableRows {
  label: string
  actionToPerform?: string
  icon?: string
  path?: string
  modal?: boolean
  modelText?: string
  type?: string
  class?: string
  fontType?: boolean
}

export interface TableColumn {
  title: string
  fieldValue: TableDataKey
  sortableKey?: string
  sort?: boolean
  type?: string
  template?: string
  class?: string
  decimalNumber?: boolean
  text?: string
  iconField?: string
  hideColumn?: boolean
}

export interface TableProps<T = TableData> {
  tableConfig: TableConfigs<T>
  hasCheckbox?: boolean
  pageSize?: number
  paginateDetails?: boolean
  showPaginate?: boolean
  tableClass?: string
  search?: boolean
  pagination?: boolean
  selectedRows?: boolean
  rowDetails?: boolean
  dateFilter?: boolean
  downloadReports?: boolean
  searchPlaceholder?: string
}

export interface Pagination {
  totalItems: number
  currentPage: number
  pageSize: number
  totalPages: number
  startPage: number
  endPage: number
  startIndex: number
  endIndex: number
  pages: number[]
}

export interface TableState<T = TableData> {
  tableRecords: T[]
  selected: number[]
  selectedOpenRows: number[]
  paginate: Pagination
  pageNo: number
  sortableKey: string
  searchText: string
  dateDropdownOpen: boolean
  selectedDate: string
  selectedValue: string
  date: Date | null
  config: DateConfig
  filter: TableFilter
}

export interface DateConfig {
  inline: boolean
  dateFormat: string
  mode: string
  wrap: boolean
}

export interface FilterDate {
  startDate: string
  toDate: string
}

export interface TableFilter {
  search: string
  sort: string
  page: number
  pageSize: number
  date: FilterDate
}

export interface TableClickedAction<T = TableData> {
  actionToPerform?: string
  data: T
  value?: string
}

export type TableData = {
  id?: number
  class?: string
} & (
  | LatestTransactionItem
  | OrderTableItem
  | ProductRow
  | ProjectDetails
  | BudgetDetails
  | PendingProject
  | Category
  | TableProduct
  | RecentOrdersItem
  | TopSellingProduct
  | Users
  | Role
  | SalesReturnReport
  | CustomerOrderReport
  | ProductReports
  | SalesReport
  | BasicTable
  | Employee
  | BreakpointTable
  | Caption
  | CustomTable
  | DashedBorderTable
  | InverseTable
  | InverseTableBackground
  | BreakpointTable
  | ResponsiveTable
  | SizingTable
  | StripedRow
  | TableHeadOption
  | SupportDB
  | Order
  | OrderDetailsProduct
  | Review
  | Product
)

export type TableDataKey =
  | Extract<keyof TableData, string>
  | keyof LatestTransactionItem
  | keyof OrderTableItem
  | keyof ProductRow
  | keyof ProjectDetails
  | keyof BudgetDetails
  | keyof PendingProject
  | keyof Category
  | keyof TableProduct
  | keyof RecentOrdersItem
  | keyof TopSellingProduct
  | keyof Users
  | keyof Role
  | keyof SalesReturnReport
  | keyof CustomerOrderReport
  | keyof ProductReports
  | keyof SalesReport
  | keyof BasicTable
  | keyof Employee
  | keyof BreakpointTable
  | keyof Caption
  | keyof CustomTable
  | keyof DashedBorderTable
  | keyof InverseTable
  | keyof InverseTableBackground
  | keyof BreakpointTable
  | keyof ResponsiveTable
  | keyof SizingTable
  | keyof StripedRow
  | keyof TableHeadOption
  | keyof SupportDB
  | keyof Order
  | keyof OrderDetailsProduct
  | keyof Review
  | keyof Product

declare global {
  interface Window {
    copyKey?: (key: string) => void
  }
}

export interface Tabs {
  id: number
  title: string
  value: string
  icon?: string
  color?: string
  tag?: string | number
}

export interface ModalProps {
  title?: string
  modalOpen?: boolean
  sizeClass?: string
  contentClass?: string
  modalCentered?: boolean
  staticBackdrop?: boolean
  dialogClass?: string
}

export interface Select {
  value: string | number
  label: string
  profile?: string
  data?: Select[]
}

export interface InputField {
  data: string
  errorMessage: string
}

export interface InputProps {
  formSubmitted?: boolean
  inputId?: string
  modelValue?: InputField
  errorMessage?: string
  class?: string
  placeholder?: string
  inputType?: string
  required?: boolean
  minLength?: number
  rows?: number
  multiple?: boolean
  helperText?: string
  disabled?: boolean
  tooltipValidation?: boolean
  browserValidation?: boolean
  animation?: boolean
  datalist?: Select[]
  maxLength?: number
  isPlaceholder?: boolean
  showLengthBadge?: boolean
  formatValue?: boolean
  formatFunction?: ((value: string) => string) | null
  validator?: ((value: string) => string) | null
  minDate?: Date
  maxDate?: Date
}

export interface SelectField {
  selected: Select | null
  data: string
  selectedItems: Select[]
  errorMessage: string
  type: string
}

export interface SelectProps {
  modelValue: SelectField
  options: Select[]
  placeholder?: string
  displayKey?: keyof Select
  getValueKey?: keyof Select
  multiSelect?: boolean
  required?: boolean
  formSubmitted?: boolean
  disableClearButton?: boolean
  errorMessage?: string
  tooltipValidation?: boolean
  class?: string
  isPlaceholder?: boolean
  disabled?: boolean
  showOptions?: boolean
  removableTags?: boolean
}

export interface CheckboxField {
  data: boolean
  errorMessage: string
  indeterminate?: boolean
  type: string
}

export interface CategoryItem {
  categoryName: string
  categoryType: string
}

export interface SelectOption {
  value: string | number
  label: string
}

export type RowActionType =
  | 'button'
  | 'Create'
  | 'Edit'
  | 'Delete'
  | 'View'
  | 'Refresh'
  | 'Message'
  | 'Approve'
  | 'Reject'

export interface RowAction {
  type?: 'button'
  label: RowActionType
  class?: string
  icon?: string
  path?: string
  modal?: boolean
  modelText?: string
  actionToPerform?: 'delete' | 'view'
}
