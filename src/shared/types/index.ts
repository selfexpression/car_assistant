// Common types for the application
export type Nullable<T> = T | null

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type ID = string | number

export interface IBaseEntity {
  id: ID
  createdAt: Date
  updatedAt: Date
}

export interface IApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface IPaginationParams {
  page: number
  limit: number
}

export interface IPaginatedResponse<T> extends IApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
