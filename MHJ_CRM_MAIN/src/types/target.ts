/** Status siklus target tahunan sesuai alur DRAFT → SUBMITTED → APPROVED → LOCKED. */
export type TargetStatus = 'draft' | 'submitted' | 'approved' | 'locked'

export interface TargetYearItem {
  id: number
  year_code: string
  year_name: string
  start_date: string
  end_date: string
  is_active: boolean
  is_locked: boolean
}

export interface TargetIndicatorItem {
  id: number
  indicator_code: string
  indicator_name: string
  category: string
  unit_name: string
  data_type: string
  decimal_precision: number
  is_active: boolean
}

export interface DivisionBranchItem {
  id: number
  division_id: number
  division_name: string
  branch_id: number
  branch_name: string
  is_active: boolean
}

/** Satu baris target: kombinasi divisi-cabang-indikator pada satu versi. */
export interface TargetPlanItem {
  id: number
  target_version_id: number
  division_branch_id: number
  indicator_id: number
  target_value: number | null
  notes: string
  status: TargetStatus
  updated_at: string
}

export interface TargetVersionItem {
  id: number
  target_year_id: number
  version_number: number
  version_name: string
  status: TargetStatus
  created_at: string
}

export interface TargetPlanSaveRow {
  division_branch_id: number
  indicator_id: number
  target_value: number
  notes: string
}

export interface TargetSummary {
  total_combinations: number
  filled: number
  empty: number
  draft: number
  submitted: number
  approved: number
  locked: number
}
